-- MediScan AI Database Schema (SQLite / SQL-compatible)

CREATE TABLE IF NOT EXISTS medicines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  medicine_name TEXT NOT NULL,
  normalized_key TEXT UNIQUE NOT NULL,
  generic_name TEXT,
  brand_name TEXT,
  category TEXT,
  active_ingredient TEXT,
  strength TEXT,
  uses TEXT,
  dosage_information TEXT,
  food_instructions TEXT,
  timing_information TEXT,
  side_effects TEXT,
  precautions TEXT,
  interactions TEXT,
  storage_information TEXT,
  pregnancy_warning TEXT,
  prescription_status TEXT,
  manufacturer TEXT,
  source TEXT DEFAULT 'MediScan Medical Index',
  source_url TEXT,
  expiry_information TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for instant SQL lookup on normalized key (name + strength)
CREATE UNIQUE INDEX IF NOT EXISTS idx_medicines_normalized_key ON medicines(normalized_key);

-- Analytics & Hit Counter Table
CREATE TABLE IF NOT EXISTS analytics (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  db_hits INTEGER DEFAULT 0,
  api_fetches INTEGER DEFAULT 0,
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initialize single-row analytics table if empty
INSERT OR IGNORE INTO analytics (id, db_hits, api_fetches) VALUES (1, 0, 0);
