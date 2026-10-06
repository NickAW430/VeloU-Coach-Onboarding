# Player Report data proxy (Cloudflare Worker)

`sheets-proxy.js` is the only thing that knows the Google Sheet IDs. The Player Report page calls
`/api/sheets` on coachesvelou.com, and this Worker fetches the data from Google. The IDs live as
Cloudflare secrets, never in this repo.

## Set it up (about 15 minutes, in the Cloudflare dashboard)

1. **Create the Worker.** Workers & Pages -> Create application -> Start with Hello World! (this may be
   labelled "Create Worker"). Name it `velou-sheets-proxy` and click Deploy. Then click Edit code, delete the
   sample code, paste in the full contents of `sheets-proxy.js`, and click Deploy again.
2. **Add the secrets.** Worker -> Settings -> Variables and Secrets -> Add. Type **Secret** for each:
   - `SHEET_ATHLETES`  (the Athlete workbook ID)
   - `SHEET_TRACKMAN`  (the TrackMan sheet ID)
   - `SHEET_INSEASON`  (the In-Season game sheet ID)

   The IDs are the long string between `/d/` and `/edit` in each sheet's address, or they can be
   copied from the top of the original `index.html` in the colleague's zip (`SHEET_ID`, `TRACKMAN_ID`,
   `EXTRA_ID`).
3. **Add the two variables** (type **Text**):
   - `TEAM_DOMAIN` = `velouniversity.cloudflareaccess.com`
   - `POLICY_AUD`  = the Application Audience (AUD) tag. Zero Trust -> Access -> Applications ->
     `coachesvelou.com` -> Edit -> Overview -> copy "Application Audience (AUD) Tag".
4. **Route it.** Worker -> Settings -> Domains & Routes -> Add -> Route:
   route `coachesvelou.com/api/sheets*`, zone `coachesvelou.com`. Turn off the `workers.dev` URL.
5. **Publish the site** (commit and push the repo), then open https://coachesvelou.com/player-report/
   after signing in.

## Check it
- Signed in, the Player Report loads an athlete with scores and pitches.
- In a private window, `https://coachesvelou.com/api/sheets?src=athletes` asks you to sign in instead of
  returning data.

## Hardening later
The sheets themselves are still shared as "Anyone with the link". Nobody can find the IDs now, but anyone
who is given one can open the sheet. To lock them completely, change the sharing to your organization and
have the Worker authenticate to Google with a service account.
