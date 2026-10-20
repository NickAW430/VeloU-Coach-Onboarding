-- VeloU database (Cloudflare D1 / SQLite). Run once in the D1 console, or as a migration.
-- Dates are ISO text (YYYY-MM-DD for days, full ISO for timestamps). IDs are UUID text.

-- Staff who sign in through Cloudflare Access. A row is created the first time someone makes a request.
CREATE TABLE IF NOT EXISTS coaches (
  id         TEXT PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  name       TEXT,
  role       TEXT NOT NULL DEFAULT 'coach' CHECK (role IN ('coach', 'admin')),
  created_at TEXT NOT NULL,
  last_seen  TEXT
);

-- One row per athlete. Fields the forms add later can go in `profile` (JSON) until they earn a column.
CREATE TABLE IF NOT EXISTS athletes (
  id            TEXT PRIMARY KEY,
  first_name    TEXT NOT NULL,
  last_name     TEXT NOT NULL,
  dob           TEXT,
  email         TEXT,
  phone         TEXT,
  parent_name   TEXT,
  parent_email  TEXT,
  parent_phone  TEXT,
  playing_level TEXT,
  residence     TEXT,
  sport         TEXT,
  position      TEXT,
  team          TEXT,
  grad_year     INTEGER,
  dominant_hand TEXT CHECK (dominant_hand IN ('R', 'L', 'S')),
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('lead', 'active', 'paused', 'alumni')),
  coach_id      TEXT REFERENCES coaches(id),
  profile       TEXT NOT NULL DEFAULT '{}',
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_athletes_name  ON athletes (last_name, first_name);
CREATE INDEX IF NOT EXISTS idx_athletes_coach ON athletes (coach_id);

-- One row per completed (or in-progress) assessment: an Initial Intake at a level, or one Re-Testing section.
-- `data` holds the full answers exactly as the form collected them; `form_version` says which form shape wrote it.
CREATE TABLE IF NOT EXISTS assessments (
  id           TEXT PRIMARY KEY,
  athlete_id   TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  type         TEXT NOT NULL CHECK (type IN ('intake', 'retest')),
  level        TEXT CHECK (level IN ('basic', 'advanced', 'premier')),
  section      TEXT CHECK (section IN ('movement-screen', 'force-plates', 'athletic-testing', 'throwing', 'mound', 'body-comp', 'mental-skills')),
  assessed_on  TEXT NOT NULL,
  coach_id     TEXT REFERENCES coaches(id),
  status       TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'submitted')),
  form_version TEXT,
  data         TEXT NOT NULL DEFAULT '{}',
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL,
  -- an intake has a level and no section; a re-test has a section and no level
  CHECK ((type = 'intake' AND level IS NOT NULL AND section IS NULL) OR (type = 'retest' AND section IS NOT NULL AND level IS NULL))
);
CREATE INDEX IF NOT EXISTS idx_assessments_athlete ON assessments (athlete_id, assessed_on);

-- Every number worth charting, one row each, so dashboards can plot an athlete over time without parsing JSON.
CREATE TABLE IF NOT EXISTS measurements (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  assessment_id TEXT NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
  athlete_id    TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  metric        TEXT NOT NULL,
  value         REAL,
  text_value    TEXT,
  unit          TEXT,
  side          TEXT CHECK (side IN ('L', 'R', 'B')),
  measured_on   TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_measurements_series     ON measurements (athlete_id, metric, measured_on);
CREATE INDEX IF NOT EXISTS idx_measurements_assessment ON measurements (assessment_id);

-- Photos, videos and reports (headshot, shirtless photo, mechanics video, Trackman report and video).
-- The file itself lives in the R2 bucket under r2_key; this row says whose it is and what it is.
CREATE TABLE IF NOT EXISTS files (
  id            TEXT PRIMARY KEY,
  athlete_id    TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  assessment_id TEXT REFERENCES assessments(id) ON DELETE SET NULL,
  kind          TEXT NOT NULL CHECK (kind IN ('headshot', 'shirtless', 'mechanics_video', 'trackman_report', 'trackman_video', 'mound_plate_report', 'mocap_report', 'report')),
  r2_key        TEXT NOT NULL,
  content_type  TEXT NOT NULL,
  size          INTEGER NOT NULL,
  original_name TEXT,
  uploaded_by   TEXT REFERENCES coaches(id),
  created_at    TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_files_athlete ON files (athlete_id, kind, created_at);
