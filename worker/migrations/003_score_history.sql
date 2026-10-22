-- Energy Scores over time, one row per athlete and date. The Athlete Dashboard draws its Total Energy progress chart from this.
-- 'rebuilt' rows are worked out from the dated tests in the Athlete Mainframe workbook (CMJ, IMTP, Energy Transference, ArmCare)
-- and are refreshed by the sheet sync. 'snapshot' rows are the Mainframe's own numbers, saved when they drift away from the
-- rebuilt ones; the sync never overwrites a snapshot. The primary key also serves as the lookup index.
CREATE TABLE IF NOT EXISTS score_history (
  athlete_id   TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  as_of        TEXT NOT NULL,            -- the day the scores describe (YYYY-MM-DD)
  potential    REAL,
  production   REAL,
  transference REAL,
  interference REAL,
  total        REAL NOT NULL,
  source       TEXT NOT NULL CHECK (source IN ('rebuilt', 'snapshot')),
  created_at   TEXT NOT NULL,
  PRIMARY KEY (athlete_id, as_of)
);
