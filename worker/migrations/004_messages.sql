-- The chat between an athlete and their coaches: one thread per athlete. Photos and videos are in the R2 bucket (att_key).
-- is_test marks what the Athlete App preview sent as the athlete before athletes can sign in; tests never count as unread.
CREATE TABLE IF NOT EXISTS messages (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT,
  athlete_id         TEXT NOT NULL REFERENCES athletes(id) ON DELETE CASCADE,
  sender             TEXT NOT NULL CHECK (sender IN ('athlete', 'coach')),
  coach_id           TEXT REFERENCES coaches(id),
  coach_name         TEXT,
  body               TEXT NOT NULL DEFAULT '',
  att_key            TEXT,
  att_type           TEXT,
  att_size           INTEGER,
  att_name           TEXT,
  channel            TEXT NOT NULL DEFAULT 'app' CHECK (channel IN ('app', 'imessage', 'sms')),
  is_test            INTEGER NOT NULL DEFAULT 0,
  created_at         TEXT NOT NULL,
  read_by_coach_at   TEXT,
  read_by_athlete_at TEXT,
  CHECK (body <> '' OR att_key IS NOT NULL)
);
CREATE INDEX IF NOT EXISTS idx_messages_thread ON messages (athlete_id, id);
CREATE INDEX IF NOT EXISTS idx_messages_unread ON messages (athlete_id, sender, read_by_coach_at, read_by_athlete_at);
