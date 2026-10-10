# GluPulse - AI Clinical Support System

Aplikasi frontend modern berbasis **React + Three.js + React Three Fiber + Tailwind CSS + Framer Motion** yang terintegrasi langsung dengan **Langflow AI Engine**.

## 🚀 Fitur Utama
1. **Interactive 3D Motion (Three.js / React Three Fiber):**
   - Model 3D *Pulsing Bio-Core* dengan orbit partikel glukosa yang responsif terhadap pergerakan mouse dan animasi rotasi dinamis.
2. **Clinical Triage Interactive Simulator:**
   - Simulasi interaktif kalkulator batas gula darah puasa (GDP) & sewaktu (GDS) sesuai standar pedoman PERKENI/ADA.
3. **Quick Prompt Templates:**
   - Kartu skenario kasus klinis siap salin (*one-click copy*) untuk langsung ditanyakan ke AI.
4. **Langflow Embedded Chat Integration:**
   - Terkoneksi ke widget AI Langflow pada `http://127.0.0.1:7860`.

---

## 🛠️ Cara Menjalankan

1. Pastikan dependencies sudah terpasang:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:3000`

3. Build untuk produksi:
   ```bash
   npm run build
   ```
