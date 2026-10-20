-- Saved programming plans and history from the athlete Programming tab (one row per athlete and key).
CREATE TABLE IF NOT EXISTS plan_store (
  scope      TEXT NOT NULL,
  key        TEXT NOT NULL,
  data       TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  updated_by TEXT,
  PRIMARY KEY (scope, key)
);
