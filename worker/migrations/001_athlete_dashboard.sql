-- Athlete Management dashboard: extra athlete fields, program assignments and ArmCare scores.
-- Applied to the live D1 database on 2026-10-20. schema.sql already contains these changes for fresh installs.

ALTER TABLE athletes ADD COLUMN segment TEXT;          -- 'on-site', 'remote', 'black-label' or 'evaluation'
ALTER TABLE athletes ADD COLUMN throwing_coach TEXT;   -- coach first name as used on the Program Board
ALTER TABLE athletes ADD COLUMN strength_coach TEXT;
ALTER TABLE athletes ADD COLUMN injury_status TEXT;    -- Currently Injured, Rehabbing Injury, Previously Injured, None
ALTER TABLE athletes ADD COLUMN injury_location TEXT;
ALTER TABLE athletes ADD COLUMN injury_notes TEXT;
ALTER TABLE athletes ADD COLUMN photo_url TEXT;
ALTER TABLE athletes ADD COLUMN mainframe_id TEXT;     -- Unique ID from the Athlete Mainframe sheet
ALTER TABLE athletes ADD COLUMN vald_name TEXT;
ALTER TABLE athletes ADD COLUMN armcare_name TEXT;
ALTER TABLE athletes ADD COLUMN source TEXT;           -- where the athlete record came from

CREATE INDEX IF NOT EXISTS idx_athletes_status  ON athletes (status);
CREATE INDEX IF NOT EXISTS idx_athletes_segment ON athletes (segment);

-- The program each athlete is on, per category (Throwing, Patterning, Lifting, Speed, Arm Care, Mobility).
CREATE TABLE IF NOT EXISTS program_assignments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  athlete_id TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  category   TEXT NOT NULL CHECK (category IN ('throwing', 'patterning', 'lifting', 'speed', 'arm_care', 'mobility')),
  program    TEXT NOT NULL,
  starts_on  TEXT,
  ends_on    TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_programs_athlete ON program_assignments (athlete_id, category, starts_on);

-- ArmCare exam history, one row per athlete per exam date.
CREATE TABLE IF NOT EXISTS arm_scores (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  athlete_id     TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  exam_on        TEXT NOT NULL,
  arm_score      REAL,
  total_strength REAL,
  ir             REAL,
  er             REAL,
  scap           REAL,
  grip           REAL,
  velo           REAL,
  exam_type      TEXT,
  armcare_id     TEXT,
  UNIQUE (athlete_id, exam_on)
);
CREATE INDEX IF NOT EXISTS idx_arm_scores_athlete ON arm_scores (athlete_id, exam_on);

CREATE TABLE IF NOT EXISTS sync_runs (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at  TEXT NOT NULL,
  finished_at TEXT NOT NULL,
  ok          INTEGER NOT NULL,
  stats       TEXT,
  error       TEXT
);
