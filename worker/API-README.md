# VeloU API (Cloudflare Worker + D1 database)

This is the system of record for athletes, assessments and the numbers inside them. The Assessments forms
save here; Athlete Management (coach dashboard, athlete pages, programming) and later the athlete portal read from here.

- `schema.sql` is the database layout (Cloudflare D1, which is SQLite).
- `velou-api.js` is the Worker. It checks the Cloudflare Access sign-in on every request and records which coach did what.

It is separate from `sheets-proxy.js`, which keeps feeding the Player Report from Google Sheets until we replace it.

## Set it up (about 15 minutes, in the Cloudflare dashboard)

1. **Create the database.** Workers & Pages -> D1 SQL Database -> Create database. Name it `velou`.
   Open it, go to the **Console** tab, paste the whole of `schema.sql`, and run it. The Tables list should now show
   `coaches`, `athletes`, `assessments`, `measurements`, `files`.
2. **Create the Worker.** Workers & Pages -> Create -> Hello World. Name it `velou-api`, deploy, then Edit code,
   replace the sample with the full contents of `velou-api.js`, and Deploy.
3. **Create the file bucket.** R2 Object Storage -> Create bucket. Name it `velou-files`. Keep it private (no public access).
   It stores athlete photos, mechanics videos, Trackman reports and videos.
4. **Connect both to the Worker.** Worker -> Settings -> Bindings -> Add:
   - D1 database: variable name exactly `DB`, choose `velou`.
   - R2 bucket: variable name exactly `FILES`, choose `velou-files`.
5. **Add the two variables** (type **Text**, the same values the sheets Worker uses):
   - `TEAM_DOMAIN` = `velouniversity.cloudflareaccess.com`
   - `POLICY_AUD` = the Application Audience (AUD) tag from Zero Trust -> Access -> Applications -> `velou.coach`.
6. **Route it.** Worker -> Settings -> Domains & Routes -> Add -> Route: `velou.coach/api/v1/*`, zone `velou.coach`.
   Turn off the `workers.dev` URL.

## Check it
- Signed in, open https://velou.coach/api/v1/me. It should show your coach record (email, id, role).
- Open https://velou.coach/api/v1/athletes. It should show `{"athletes":[],...}`.
- In a private window the same address should send you to the sign-in page, not return data.

## Routes (all JSON)
| Method | Path | What it does |
|---|---|---|
| GET | `/api/v1/me` | The signed-in coach (created on first visit) |
| GET | `/api/v1/athletes?q=&status=&limit=&offset=` | Search and list athletes with last assessment date |
| POST | `/api/v1/athletes` | Create an athlete |
| GET | `/api/v1/athletes/:id` | Athlete plus their assessments |
| PATCH | `/api/v1/athletes/:id` | Update an athlete |
| GET | `/api/v1/athletes/:id/measurements?metric=` | A metric over time, for charts |
| GET | `/api/v1/athletes/:id/scores` | The athlete's Energy Scores over time, oldest first, for the dashboard's progress chart: `{ scores: [{ on, potential, production, transference, interference, total, source }] }` |
| POST | `/api/v1/admin/sync` | Read the sheets now (the same job also runs every 10 minutes) |
| POST | `/api/v1/admin/scores/rebuild` | Delete the `rebuilt` score rows and build them again from the tests (snapshots stay) |
| POST | `/api/v1/athletes/:id/files?kind=&assessment_id=&name=` | Upload a photo, video or report (raw file body, 100 MB max). `kind` is `headshot`, `shirtless`, `mechanics_video`, `trackman_report`, `trackman_video`, `mound_plate_report`, `mocap_report` or `report` |
| GET | `/api/v1/files/:id` | Download a file (signed-in coaches only) |
| GET | `/api/v1/athletes/:id/messages?after=&limit=` | The athlete's message thread, oldest first (the last 200 on the first load, then only what is newer than `after`). The answer also carries `unread` and `seen`: `{ messages: [...], unread: { coach, athlete }, seen: { coach, athlete } }` |
| POST | `/api/v1/athletes/:id/messages` | Write to the athlete: `{ body, att?: { key, type, size, name } }`. With `as: "athlete"` the Athlete App preview writes as the athlete; those messages are marked as tests and never count as unread for the coaches |
| POST | `/api/v1/athletes/:id/messages/read` | The reader has looked at the thread: `{ reader: "coach" \| "athlete" }` marks what the other side wrote as read |
| POST | `/api/v1/athletes/:id/messages/upload?name=` | A photo or video for a message (raw file body, 100 MB max, image or video types only); the answer is the `att` to send with the message |
| DELETE | `/api/v1/athletes/:id/messages?test=1` | Remove the messages the preview sent as the athlete, with their attachments |
| GET | `/api/v1/messages/:id/file` | The attachment of a message, with byte ranges so videos play and skip on phones (signed-in coaches only for now) |
| POST | `/api/v1/assessments` | Save an assessment (draft or submitted) with its measurements |
| GET | `/api/v1/assessments/:id` | One assessment with its measurements |
| PUT | `/api/v1/assessments/:id` | Update it (measurements are replaced to match) |

An assessment is `type: "intake"` with a `level` (`basic`, `advanced`, `premier`) or `type: "retest"` with a
`section` (`movement-screen`, `force-plates`, `athletic-testing`, `throwing`, `mound`, `body-comp`, `mental-skills`), or `type: "exam"` (a stand-alone exam, section `mental-skills` or `nutrition`).
`data` holds the full answers as the form collected them. `measurements` is the list of numbers worth charting, each
`{ metric, value, unit, side }` with `metric` in lowercase like `shoulder.er` or `body_fat`.

## Energy Score history
`score_history` (migration `migrations/003_score_history.sql`) holds one row per athlete per day with the four Energy Scores
and the Total. The sheet sync fills it, read-only, from the dated tests in the Athlete Mainframe workbook: CMJ and IMTP
(Vald), the Energy Transference tab (and its Old tab), and the ArmCare exams already stored in `arm_scores`. For every day a
test was taken it repeats the Mainframe's own formulas on the tests that existed that day, so the past can be charted as
well as the future. Those rows are `source = 'rebuilt'` and are refreshed when the tests change. When the Mainframe's own
Total Energy Score is more than 2 points away from the newest rebuilt point (someone changed the formulas, or typed over a
score), its numbers are saved as a `snapshot` for that day, and snapshots are never overwritten.
The scoring constants live in `velou-api.js` next to `energySeries()`; if the Mainframe's formulas change, change them there
and run `POST /api/v1/admin/scores/rebuild`.

## Messages
`messages` (migration `migrations/004_messages.sql`) is one thread for each athlete, between the athlete and their coaches: text,
photos and videos. Attachments live in the R2 bucket under `messages/<athlete id>/`. Each row says who wrote it (`sender` is
`athlete` or `coach`, with the coach's name), which `channel` carried it (`app` today; `imessage` and `sms` are reserved for the
text-message bridge), and when each side read it. `GET /api/v1/overview` adds `unread_messages` for each athlete and in the
counts, which the Athletes page shows as a chip.
The athlete's side is either an athlete signed in on velou.training (see Athletes signing in) or the Athlete App preview in a coach's
browser. What the preview sends is saved with `is_test = 1`, shows as a test in the thread, never counts as unread for the coaches,
and can be cleared from the Messages tab; an athlete never sees those. The preview does not mark the coaches' messages as read,
because no athlete has seen them. A text-message bridge will write rows with `channel = 'imessage'`.

## Athletes signing in (velou.training)
velou.training is its own Access application (its AUD is the Worker variable `TRAINING_AUD`; `POLICY_AUD` stays the coaches' app on
velou.coach). Coaches and athletes both sign in there with an email code. The Worker decides who is who from the email:
- a coach record, or any `@velouniversity.com` address, is a coach and gets every route above;
- otherwise the email must be on exactly one athlete (`athletes.email`), and that person gets only their own app (`athleteRoute`):
  `me` (with `role: "athlete"`, `athlete_id`, `athlete_name`), the program library, their overview row, a roster of ids without names,
  their scores, their message thread (read, write, upload, mark read), their message files, and their own plan and history keys.
  Anything else answers 403. An unknown email answers 403 and is never turned into a coach.
- an athlete's message is saved as `sender = 'athlete'`, no coach, and not a test.
The sheets Worker (`velou-sheets-proxy`) follows the same rule: for an athlete it keeps the columns asked for and replaces the
`where` with the athlete's own name. It reads the same database, so it needs the D1 binding `DB` and the same `TRAINING_AUD`.
To let an athlete in: put their email on their athlete record and in the velou.training Access policy.

## Notes
- Writes only work from the sites listed in `ALLOWED_ORIGIN` (the Worker checks the `Origin`), so another website cannot post with someone's login.
- No secrets live in this repo. The AUD tag and the database binding are set in Cloudflare.
- The Black Label athlete portal on the other site has its own athlete login and routes. Coach access and athlete access stay separate there too.
