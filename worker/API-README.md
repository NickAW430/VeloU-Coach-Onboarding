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
   - `POLICY_AUD` = the Application Audience (AUD) tag from Zero Trust -> Access -> Applications -> `coachesvelou.com`.
6. **Route it.** Worker -> Settings -> Domains & Routes -> Add -> Route: `coachesvelou.com/api/v1/*`, zone `coachesvelou.com`.
   Turn off the `workers.dev` URL.

## Check it
- Signed in, open https://coachesvelou.com/api/v1/me. It should show your coach record (email, id, role).
- Open https://coachesvelou.com/api/v1/athletes. It should show `{"athletes":[],...}`.
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
| POST | `/api/v1/athletes/:id/files?kind=&assessment_id=&name=` | Upload a photo, video or report (raw file body, 100 MB max). `kind` is `headshot`, `shirtless`, `mechanics_video`, `trackman_report`, `trackman_video`, `mound_plate_report`, `mocap_report` or `report` |
| GET | `/api/v1/files/:id` | Download a file (signed-in coaches only) |
| POST | `/api/v1/assessments` | Save an assessment (draft or submitted) with its measurements |
| GET | `/api/v1/assessments/:id` | One assessment with its measurements |
| PUT | `/api/v1/assessments/:id` | Update it (measurements are replaced to match) |

An assessment is either `type: "intake"` with a `level` (`basic`, `advanced`, `premier`) or `type: "retest"` with a
`section` (`movement-screen`, `force-plates`, `athletic-testing`, `throwing`, `mound`, `body-comp`, `mental-skills`).
`data` holds the full answers as the form collected them. `measurements` is the list of numbers worth charting, each
`{ metric, value, unit, side }` with `metric` in lowercase like `shoulder.er` or `body_fat`.

## Notes
- Writes only work from https://coachesvelou.com (the Worker checks the `Origin`), so another website cannot post with a coach's login.
- No secrets live in this repo. The AUD tag and the database binding are set in Cloudflare.
- The athlete portal on the other site will need its own athlete login and its own routes. Coach access and athlete access should stay separate.
