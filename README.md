# MediScan AI – Intelligent Medicine Information & Safety Assistant

MediScan AI is a full-stack web application designed to help users upload images of medicine packaging, extract medicine names and expiry dates via OCR, search for reliable medical information using a **SQL-First Caching Architecture**, and present health guidance in an accessible, multi-lingual, and voice-assisted interface.

---

## 🌟 Key Features

1. **📷 Image Scanning & OCR**: Upload medicine strips, boxes, bottles, barcodes, or labels to extract medicine names, strength/dosage, manufacturer, and printed expiry dates.
2. **🗄️ Database-First SQL Caching Architecture**:
   - Every medicine search checks the local SQLite database first.
   - **Cache Hit**: Returns stored data instantly without external API calls.
   - **Cache Miss**: Fetches verified data from external medicine APIs/registries, formats it, stores it in SQLite with a `UNIQUE INDEX` on `normalized_key`, and displays it.
3. **⚠️ Expiry Date Detection & Alerting**:
   - Parses dates like `EXP 08/2027` or `EXP 05/2025`.
   - Visual badges: **Safe/Valid** (Green), **Expiring Soon** (Amber), or **Expired Warning** (Red with explicit medical caution).
4. **🔊 Voice Assistance**: Browser SpeechSynthesis read-aloud button designed for elderly and visually impaired users.
5. **🌐 6-Language Multi-Lingual UI**: English, Tamil (தமிழ்), Hindi (हिन्दी), Telugu (తెలుగు), Malayalam (മലയാളം), and Kannada (கன்னட).
6. **🛡️ Safety-First Educational Design**: Strict non-prescriptive language ("Typical dosage from referenced source..."), prominent safety warnings, and clear medical disclaimers.
7. **📊 Admin & Telemetry Dashboard**: Real-time stats showing Total Cached Medicines, SQL Cache Hits, External API Fetches, and Cache Hit Rate (%).
8. **⚡ Instant Demo Mode**: Pre-loaded sample medicine strip uploads (Paracetamol 500mg, Cetirizine 10mg, Amoxicillin 500mg, Dolo 650, Ibuprofen 400mg) for 1-click hackathon demonstration.

---

## 🏗️ Architecture & Database-First Caching Flow

```
User → Upload Image / Search Term
           ↓
   OCR Extraction Engine (Tesseract.js & Regex Parsers)
           ↓
   Normalize Medicine Key (e.g., "Paracetamol 500 mg" → "paracetamol_500mg")
           ↓
   SQL Database Search (`medicines` table with UNIQUE INDEX)
           ↓
  ┌───────────────────────────────┐
  │ Found in SQL Database?        │
  └──────────────┬────────────────┘
         YES │       │ NO
             │       ↓
             │  External Medicine Registry / API Service
             │       ↓
             │  Format & Validate Response
             │       ↓
             │  Store in SQLite (`medicines` table)
             │       │
             └───────┴──────→ Return JSON Response
                                    ↓
                         Display UI with Cache Tag
                    ("SQL Cache" vs "External API")
```

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, HTML5, Vanilla CSS3 (Custom Design System with Glassmorphic healthcare theme, High Contrast mode, Font Scaling), Lucide Icons, Web Speech API.
- **Backend**: Node.js, Express.js, REST API Architecture, Multer (secure file upload handling).
- **Database**: SQLite (`sql.js` pure WebAssembly/JS driver for zero-dependency execution across any Node environment).
- **OCR Engine**: Tesseract.js with regex pattern matchers for expiry date evaluation (`EXP MM/YYYY`, `EXP YYYY-MM`).

---

## 🗄️ Database Schema (`database/schema.sql`)

```sql
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

CREATE UNIQUE INDEX IF NOT EXISTS idx_medicines_normalized_key ON medicines(normalized_key);
```

---

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/scan` | Upload medicine packaging image file. Runs OCR, checks SQL cache, fetches external if missing, saves SQL, and returns medicine details with expiry status. |
| `GET` | `/api/medicine/:name` | Search medicine by name. Normalizes name, checks SQL cache first, fetches external if missing, saves to SQL, and returns details. |
| `GET` | `/api/medicines` | Returns list of all cached medicine records in SQLite database. |
| `GET` | `/api/analytics` | Returns real-time database hit/miss cache statistics (Hit count, API fetch count, Hit rate %). |
| `POST` | `/api/medicine` | Manually insert or update a medicine record in SQL. |

---

## ⚙️ Installation & Running Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm

### Step 1: Install Dependencies
From the project root directory, run:
```bash
npm run setup
```
*(Or install individually: `cd backend && npm install` and `cd frontend && npm install`)*

### Step 2: Configure Environment Variables
Copy `.env.example` to `.env`:
```env
PORT=5000
NODE_ENV=development
DB_PATH=./database/mediscan.db
DEMO_MODE=true
```

### Step 3: Run the Application
Run both backend and frontend concurrently:
```bash
npm run dev
```
- **Backend API**: `http://localhost:5000`
- **Frontend App**: `http://localhost:3000`

---

## 🧪 Demo Workflow (Verifying SQL Cache Hit/Miss)

To demonstrate the **Database-First Caching Architecture** during a hackathon presentation:

### 1. First User Scan (Cache Miss)
1. Go to **Scan Medicine** or **Search Medicine**.
2. Search for a new medicine like `Paracetamol` or click the sample button **Paracetamol 500mg**.
3. **Observed Result**:
   - Status badge shows: **⚡ New medicine information fetched from external registry and saved to SQL database** (`source_type: "External API"`).
   - In the **SQL Analytics** tab (`/api/analytics`), **External API Fetches** increases by 1.

### 2. Second User Scan (Cache Hit)
1. Repeat the exact scan or search for `Paracetamol` (or `paracetamol 500 mg` / `PARACETAMOL`).
2. **Observed Result**:
   - Status badge shows: **✓ Information retrieved from MediScan database** (`source_type: "SQL Cache"`).
   - In the **SQL Analytics** tab, **Database Hits** increases by 1, and no external API call is made!
   - Cache hit rate percentage automatically updates!

---

## 🔗 Connecting a Real External Medicine API

To connect a live commercial API (such as OpenFDA, RxNav, or NIH MedlinePlus):
1. Add your API key in `.env`: `OPENFDA_API_KEY=your_key_here`.
2. Edit `backend/services/medicineService.js` in the `fetchFromOpenFDA` function to include your custom headers or authentication parameters.

---

## ⚠️ Safety & Legal Disclaimer

MediScan AI is strictly an **educational and informational healthcare assistant**. It does not prescribe medications, diagnose medical conditions, or replace professional medical consultation. Always consult a qualified physician or pharmacist before taking or altering any medication.
