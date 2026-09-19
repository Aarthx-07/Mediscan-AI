const ocrService = require('../services/ocrService');
const medicineService = require('../services/medicineService');
const dbManager = require('../database/db');
const fs = require('fs');

module.exports = {
  // POST /api/scan - Handle medicine image upload & OCR processing
  async scanMedicine(req, res) {
    try {
      if (!req.file && !req.body.sampleName) {
        return res.status(400).json({
          success: false,
          error: 'No medicine image or sample selection uploaded.'
        });
      }

      let ocrResult;
      if (req.file) {
        // Run OCR on physical uploaded file
        ocrResult = await ocrService.processImage(req.file.path, req.file.originalname);
        // Privacy: Clean up uploaded temp image file after processing
        try {
          fs.unlinkSync(req.file.path);
        } catch (e) {
          // Ignore deletion error
        }
      } else {
        // Direct sample trigger fallback
        const sampleText = req.body.sampleText || `${req.body.sampleName} 500mg EXP 08/2027`;
        ocrResult = ocrService.parseMedicineText(sampleText);
        if (req.body.sampleName) ocrResult.medicine_name = req.body.sampleName;
        if (req.body.sampleExpiry) ocrResult.expiry = req.body.sampleExpiry;
      }

      const medicineName = ocrResult.medicine_name;
      const strength = ocrResult.strength;

      // Lookup medicine using SQL-First architecture
      const result = await medicineService.getMedicineInformation(medicineName, strength);

      // Attach detected expiry details from OCR scan
      result.data.detected_expiry = ocrResult.expiry;
      result.data.ocr_raw_text = ocrResult.raw_text;

      return res.json(result);
    } catch (error) {
      console.error('Scan Error:', error);
      return res.status(500).json({
        success: false,
        error: 'We couldn\'t confidently identify the medicine from this image. Please upload a clearer image showing the medicine name.'
      });
    }
  },

  // GET /api/medicine/:name - Search medicine by name
  async searchMedicine(req, res) {
    try {
      const name = req.params.name;
      const strength = req.query.strength || '';

      if (!name || name.trim().length === 0) {
        return res.status(400).json({ success: false, error: 'Medicine name is required.' });
      }

      const result = await medicineService.getMedicineInformation(name, strength);
      return res.json(result);
    } catch (error) {
      console.error('Search Error:', error);
      return res.status(500).json({
        success: false,
        error: 'An error occurred while retrieving medicine information.'
      });
    }
  },

  // GET /api/medicines - Get all cached medicines for demo dashboard
  async getCachedMedicines(req, res) {
    try {
      await dbManager.initPromise;
      const medicines = dbManager.getAllMedicines();
      return res.json({
        success: true,
        count: medicines.length,
        data: medicines
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  },

  // GET /api/analytics - Get database hit/miss cache statistics
  async getAnalytics(req, res) {
    try {
      await dbManager.initPromise;
      const analytics = dbManager.getAnalytics();
      return res.json({
        success: true,
        data: analytics
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  },

  // POST /api/medicine - Store custom medicine record
  async createMedicine(req, res) {
    try {
      await dbManager.initPromise;
      const { medicine_name, strength } = req.body;
      if (!medicine_name) {
        return res.status(400).json({ success: false, error: 'Medicine name is required.' });
      }

      const normalized_key = medicineService.normalizeMedicineKey(medicine_name, strength);
      const dataToSave = {
        ...req.body,
        normalized_key
      };

      dbManager.saveMedicine(dataToSave);
      return res.json({ success: true, message: 'Medicine record stored in database.', data: dataToSave });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};
