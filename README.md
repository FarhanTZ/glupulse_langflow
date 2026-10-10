# 🩸 GluPulse - AI Clinical Support System & Cardiac-Glucose Intelligence

**GluPulse** adalah platform pendukung keputusan klinis (*Clinical Decision Support System*) modern berbasis **React 18 + TypeScript + Three.js + Tailwind CSS + Framer Motion** yang terintegrasi secara *real-time* dengan **Langflow AI Engine** dan basis pengetahuan standar medis **ADA (American Diabetes Association) & PERKENI**.

---

## 🌟 Fitur Utama & Arsitektur

1. **❤️ Interactive 3D Cardiac Pulse Canvas (Three.js & R3F)**:
   - Model 3D Jantung *Cardiac Ruby Red* dengan denyut sistolik-diastolik alami dan simulasi partikel seluler metabolik.
2. **🎛️ Clinical Quick Builder (1-Klik Tanpa Ketik Manual)**:
   - Formulir diagnostik satu-klik instan: Pilihan tipe tes (GDS, GDP, GD2PP), slider glukosa & preset cepat, multi-select chip gejala klinis, dan target penanganan.
3. **🚨 Emergency Gatekeeper & Rule of 15**:
   - Deteksi instan kondisi hipoglikemia kritis (<70 mg/dL) dengan panduan protokol cepat Rule of 15 dan triase hiperglikemia (>250 mg/dL).
4. **🥗 Nutrition & Meal Engine**:
   - Rekomendasi takaran makronutrien dan substitusi pangan lokal Indonesia dengan Indeks Glikemik Rendah (Low-GI).
5. **⚡ Zero-Hallucination Langflow RAG Integration**:
   - Terkoneksi ke pipeline Langflow Multi-Agent dengan parsing Markdown kaya format (*clean typography without raw markdown formatting*).
6. **🌐 Multi-Page Router**:
   - Arsitektur routing bersih dengan URL spesifik:
     - `/` atau `/homepage` : Landing Page Hero 100vh Liquid Glass + 3D Jantung
     - `/tentang` : Dua Pilar Harmoni (*Human Care & Precision AI*)
     - `/fitur` : Apple-Style Feature Dock & Live Simulator Splitter
     - `/cek-kesehatan` : Pusat Asisten AI Klinis & Quick Form

---

## 📋 Prasyarat Sistem

Sebelum menjalankan aplikasi, pastikan komputer Anda telah terinstal:
- **Node.js** (versi 18.x atau lebih baru) & **npm**
- **Python** (versi 3.10 atau 3.11) untuk menjalankan Langflow

---

## 🚀 Panduan Lengkap Menjalankan Aplikasi

Aplikasi GluPulse memerlukan **dua komponen** yang berjalan bersamaan:
1. **Langflow Server** (Backend AI Agent)
2. **GluPulse Frontend** (React Vite UI)

---

### Langkah 1: Menjalankan Langflow Server (Backend AI)

1. **Instalasi Langflow** (jika belum terpasang):
   ```bash
   pip install langflow
   ```

2. **Jalankan Langflow Server**:
   ```bash
   langflow run
   ```
   *Secara default Langflow akan berjalan di `http://127.0.0.1:7860`.*

3. **Buka Langflow UI**:
   - Buka browser di [http://127.0.0.1:7860](http://127.0.0.1:7860).
   - Pastikan Flow AI GluPulse Anda sudah aktif dan siap menerima query.
   - Dapatkan **Flow ID** dari URL atau menu *API Access*.
   - Buat **API Key** melalui menu *Settings* -> *API Keys* di Langflow.

---

### Langkah 2: Konfigurasi Environment Variables Frontend

1. Di direktori proyek `glupulse_langflow`, salin file template `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Atau buat file baru bernama `.env` di root direktori proyek)*.

2. Buka file `.env` dan sesuaikan nilainya:
   ```env
   # Base URL Langflow lokal
   VITE_LANGFLOW_BASE_URL=http://127.0.0.1:7860

   # ID Flow GluPulse Anda di Langflow
   VITE_LANGFLOW_FLOW_ID=d7581259-102b-4c0f-ae58-43f2086a9268

   # API Key Langflow (jika autentikasi diaktifkan)
   VITE_LANGFLOW_API_KEY=sk-VynuYD-...
   ```

---

### Langkah 3: Menjalankan Frontend GluPulse

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Jalankan Vite Development Server**:
   ```bash
   npm run dev
   ```

3. **Buka Aplikasi di Browser**:
   - Akses [http://localhost:3000](http://localhost:3000).
   - Selamat mencoba! Navigasikan ke halaman **Cek Kesehatan** (`/cek-kesehatan`) untuk menguji integrasi AI dengan data klinis secara langsung.

---

### Langkah 4: Build untuk Produksi (Opsional)

Untuk membuat build produksi teroptimasi:
```bash
npm run build
```
File hasil kompilasi akan berada di folder `dist/` dan siap dideploy ke platform hosting seperti Vercel, Netlify, atau Nginx.

---

## 📁 Struktur Direktori Proyek

```plaintext
glupulse_langflow/
├── public/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeartPulse3D.tsx     # 3D Ruby Red Heart Animation (Three.js/R3F)
│   │   ├── HeaderNav.tsx            # Navigasi Glass Pill Global
│   │   ├── InlineChatSection.tsx    # Click-Driven Quick Form & Markdown Chat UI
│   │   └── ScrollToTop.tsx          # Auto reset scroll handler pada perpindahan rute
│   ├── pages/
│   │   ├── HomePage.tsx             # Halaman Beranda (100vh Hero Glass)
│   │   ├── AboutPage.tsx            # Halaman Tentang (Dual-Pillar Bento Glass)
│   │   ├── FeaturesPage.tsx         # Halaman Fitur (Feature Dock & Live Simulator)
│   │   └── HealthCheckPage.tsx      # Halaman Cek Kesehatan & AI Assistant
│   ├── services/
│   │   └── langflowService.ts       # Service REST API Client Langflow (Stream/Chat)
│   ├── App.tsx                      # Root Router (React Router DOM)
│   ├── index.css                    # Tailwind CSS + Custom Liquid Glass Styles
│   └── main.tsx                     # React DOM Root Entry
├── .env.example                     # Contoh template variabel lingkungan
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Konfigurasi styling Tailwind & palet Rose/Ruby
└── vite.config.ts                   # Konfigurasi Vite Bundler (Port 3000)
```

---

## 🛡️ Standar Medis & Pedoman Klinis
- **PERKENI**: Pedoman Pengelolaan dan Pencegahan Diabetes Melitus Tipe 2 Dewasa di Indonesia.
- **ADA (American Diabetes Association)**: Standards of Medical Care in Diabetes.
- **Protokol Rule of 15**: Panduan tata laksana gawat darurat hipoglikemia sadar (<70 mg/dL).

---

## 👨‍💻 Kontributor
- **FarhanTZ** - *Creator & Developer*

© 2026 GluPulse AI. Didukung oleh Langflow & Standar Klinis Terpadu.
