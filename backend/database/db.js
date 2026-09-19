const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

const dbPath = process.env.DB_PATH 
  ? path.resolve(__dirname, '../../', process.env.DB_PATH)
  : path.resolve(__dirname, '../../database/mediscan.db');

const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let db = null;

// Persist SQLite DB to disk
function saveDbToDisk() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

// Initialize SQLite database
async function initDatabase() {
  const SQL = await initSqlJs();
  
  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  // Load and execute schema
  const schemaPath = path.resolve(__dirname, '../../database/schema.sql');
  if (fs.existsSync(schemaPath)) {
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    db.run(schemaSql);
    saveDbToDisk();
  }
}

// Auto init promise
const initPromise = initDatabase();

module.exports = {
  initPromise,

  getMedicineByNormalizedKey(normalizedKey) {
    if (!db) return null;
    const stmt = db.prepare(`SELECT * FROM medicines WHERE normalized_key = :key`);
    stmt.bind({ ':key': normalizedKey });
    let result = null;
    if (stmt.step()) {
      result = stmt.getAsObject();
    }
    stmt.free();
    return result;
  },

  saveMedicine(data) {
    if (!db) return;
    
    // Check if record exists
    const existing = this.getMedicineByNormalizedKey(data.normalized_key);

    if (existing) {
      const stmt = db.prepare(`
        UPDATE medicines SET
          generic_name = :generic_name,
          brand_name = :brand_name,
          uses = :uses,
          dosage_information = :dosage_information,
          side_effects = :side_effects,
          precautions = :precautions,
          updated_at = CURRENT_TIMESTAMP
        WHERE normalized_key = :normalized_key
      `);
      stmt.run({
        ':generic_name': data.generic_name || '',
        ':brand_name': data.brand_name || '',
        ':uses': data.uses || '',
        ':dosage_information': data.dosage_information || '',
        ':side_effects': data.side_effects || '',
        ':precautions': data.precautions || '',
        ':normalized_key': data.normalized_key
      });
      stmt.free();
    } else {
      const stmt = db.prepare(`
        INSERT INTO medicines (
          medicine_name, normalized_key, generic_name, brand_name, category,
          active_ingredient, strength, uses, dosage_information, food_instructions,
          timing_information, side_effects, precautions, interactions,
          storage_information, pregnancy_warning, prescription_status,
          manufacturer, source, source_url, expiry_information
        ) VALUES (
          :medicine_name, :normalized_key, :generic_name, :brand_name, :category,
          :active_ingredient, :strength, :uses, :dosage_information, :food_instructions,
          :timing_information, :side_effects, :precautions, :interactions,
          :storage_information, :pregnancy_warning, :prescription_status,
          :manufacturer, :source, :source_url, :expiry_information
        )
      `);

      stmt.run({
        ':medicine_name': data.medicine_name || '',
        ':normalized_key': data.normalized_key,
        ':generic_name': data.generic_name || '',
        ':brand_name': data.brand_name || '',
        ':category': data.category || '',
        ':active_ingredient': data.active_ingredient || '',
        ':strength': data.strength || '',
        ':uses': data.uses || '',
        ':dosage_information': data.dosage_information || '',
        ':food_instructions': data.food_instructions || '',
        ':timing_information': data.timing_information || '',
        ':side_effects': data.side_effects || '',
        ':precautions': data.precautions || '',
        ':interactions': data.interactions || '',
        ':storage_information': data.storage_information || '',
        ':pregnancy_warning': data.pregnancy_warning || '',
        ':prescription_status': data.prescription_status || '',
        ':manufacturer': data.manufacturer || '',
        ':source': data.source || 'MediScan Verified Medical Database',
        ':source_url': data.source_url || '',
        ':expiry_information': data.expiry_information || ''
      });
      stmt.free();
    }

    saveDbToDisk();
  },

  recordDbHit() {
    if (!db) return;
    db.run(`UPDATE analytics SET db_hits = db_hits + 1, last_updated = CURRENT_TIMESTAMP WHERE id = 1`);
    saveDbToDisk();
  },

  recordApiFetch() {
    if (!db) return;
    db.run(`UPDATE analytics SET api_fetches = api_fetches + 1, last_updated = CURRENT_TIMESTAMP WHERE id = 1`);
    saveDbToDisk();
  },

  getAnalytics() {
    if (!db) {
      return { total_cached_medicines: 0, db_hits: 0, api_fetches: 0, total_queries: 0, cache_hit_rate_pct: 0 };
    }

    let totalMedicines = 0;
    const countRes = db.exec(`SELECT COUNT(*) as count FROM medicines`);
    if (countRes.length > 0 && countRes[0].values.length > 0) {
      totalMedicines = countRes[0].values[0][0];
    }

    let dbHits = 0;
    let apiFetches = 0;
    const statsRes = db.exec(`SELECT db_hits, api_fetches FROM analytics WHERE id = 1`);
    if (statsRes.length > 0 && statsRes[0].values.length > 0) {
      dbHits = statsRes[0].values[0][0];
      apiFetches = statsRes[0].values[0][1];
    }

    const totalQueries = dbHits + apiFetches;
    const hitRate = totalQueries > 0 ? ((dbHits / totalQueries) * 100).toFixed(1) : 0;

    return {
      total_cached_medicines: totalMedicines,
      db_hits: dbHits,
      api_fetches: apiFetches,
      total_queries: totalQueries,
      cache_hit_rate_pct: parseFloat(hitRate)
    };
  },

  getAllMedicines() {
    if (!db) return [];
    const res = db.exec(`SELECT * FROM medicines ORDER BY updated_at DESC LIMIT 50`);
    if (res.length === 0) return [];
    
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return obj;
    });
  }
};
