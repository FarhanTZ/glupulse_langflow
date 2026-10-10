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

## 📁 File Template & Dokumen Pendukung (`langflow/`)

Folder `langflow/` di dalam repository ini sudah menyediakan seluruh aset alur AI yang siap di-import:
- 📄 **Flow JSON**: `langflow/GluPulse AI Clinical Gatekeeper & Personalized Rec.json`
- 📑 **PDF Pedoman Klinis**: `langflow/pdf/GluPulse_AI_Panduan_Klinis.pdf`

---

## 🛠️ Prasyarat Sistem

Sebelum menjalankan aplikasi, pastikan komputer Anda telah terinstal:
- **Python** (versi 3.10 atau 3.11) untuk menjalankan Langflow Backend
- **Node.js** (versi 18.x atau lebih baru) & **npm** untuk Frontend React

---

## 🚀 Panduan Lengkap Menjalankan Aplikasi

Aplikasi GluPulse memerlukan **dua komponen** yang berjalan bersamaan:
1. **Langflow Server** (Backend AI Agent & RAG Pipeline)
2. **GluPulse Frontend** (React Vite UI)

---

### Bagian 1: Setup & Menjalankan Langflow (Backend AI)

#### 1. Instalasi & Menjalankan Server Langflow
Buka terminal dan jalankan:
```bash
pip install langflow
langflow run
```
*Secara default server Langflow akan berjalan di [http://127.0.0.1:7860](http://127.0.0.1:7860).*

---

#### 2. Import File Flow JSON ke Langflow
1. Buka dashboard utama Langflow di browser: [http://127.0.0.1:7860](http://127.0.0.1:7860).
2. Klik tombol **Upload** / **Import** di pojok kanan atas dashboard.
3. Pilih file alur JSON yang ada di folder proyek:
   ```plaintext
   langflow/GluPulse AI Clinical Gatekeeper & Personalized Rec.json
   ```
4. Alur canvas lengkap GluPulse akan langsung terbuka secara otomatis.

---

#### 3. Setup Node Astra DB (Vector Database)
Cari node **Astra DB** yang ada di bagian atas canvas:
- **Astra DB Application Token**:
  - Buka dashboard [DataStax Astra DB](https://astra.datastax.com/).
  - Masuk ke menu **Tokens** di pengaturan akun, generate token baru dengan role **Database Administrator**.
  - Salin token (berawalan `AstraCS:...`), lalu tempel ke kolom *Astra DB Application Token* di node tersebut.
- **Database**: Pilih atau ketik nama database Anda di Astra (misal: `glupulse_project`).
- **Collection**: Ketik nama koleksi vektor di Astra DB (misal: `glupulse_clinical_db`).
- **Embedding Model**: Pastikan node embedding model (misal: `text-embedding-004` dari Google Generative AI) terhubung ke port input *Embedding Model* pada node Astra DB.

---

#### 4. Upload File PDF Pedoman Medis (Data Ingestion)
Cari node **Read File / File** di sebelah kiri atas canvas (yang terhubung ke node *Split Text*):
1. Klik kolom **Files** atau ikon upload pada node tersebut.
2. Pilih file dokumen panduan medis yang tersedia di repositori:
   ```plaintext
   langflow/pdf/GluPulse_AI_Panduan_Klinis.pdf
   ```
3. Periksa node **Split Text** di sebelahnya: pastikan *Chunk Size* disetel ke sekitar **1000** dan *Chunk Overlap* ke **200** agar konteks klinis tidak terpotong saat diproses embedding.

---

#### 5. Masukkan API Key Model LLM (Google Gemini)
Di alur ini terdapat beberapa node model bahasa (*Language Model / LLM Auditor*, *Embedding Model*, serta *Emergency LLM / Nutrition Architect LLM*):
1. Buka masing-masing node model tersebut di canvas.
2. Di kolom **Google API Key** (atau *Gemini API Key*), masukkan API key Anda yang didapat dari [Google AI Studio](https://aistudio.google.com/).
3. Pastikan pilihan modelnya sesuai (misal: `gemini-1.5-flash` atau `gemini-2.5-flash`).

---

#### 6. Jalankan Ingestion & Generate Langflow API Key
1. **Jalankan Ingestion Sekali**:
   - Klik tombol **play / run** kecil pada node Astra DB (atau tombol run alur di canvas) agar dokumen PDF dibaca, dipecah, dan vektornya tersimpan ke Astra DB.
   - Tanda centang hijau (**✓**) akan muncul jika data berhasil masuk.
2. **Generate API Key Langflow untuk Web**:
   - Klik ikon profil / avatar di pojok kanan atas layar Langflow.
   - Pilih **Settings** ➔ tab **API Keys**.
   - Klik **Create New Secret Key**, salin kodenya. Kode ini akan digunakan di file `.env` frontend.
3. **Salin Flow ID**:
   - Dapatkan **Flow ID** dari URL browser saat membuka flow (atau dari menu *API Access*).

---

### Bagian 2: Konfigurasi & Menjalankan Frontend GluPulse

#### 1. Konfigurasi Environment Variables (`.env`)
Salin file template `.env.example` menjadi `.env` di root direktori proyek:
```bash
cp .env.example .env
```
Buka file `.env` dan masukkan data konfigurasi Langflow Anda:
```env
# Base URL server Langflow
VITE_LANGFLOW_BASE_URL=http://127.0.0.1:7860

# ID Flow GluPulse Anda
VITE_LANGFLOW_FLOW_ID=d7581259-102b-4c0f-ae58-43f2086a9268

# API Key Langflow yang telah di-generate
VITE_LANGFLOW_API_KEY=sk-VynuYD-...
```

#### 2. Install Dependencies & Jalankan Frontend
```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

#### 3. Buka Aplikasi di Browser
Buka browser di:
```plaintext
http://localhost:3000
```
Akses halaman **Cek Kesehatan** (`/cek-kesehatan`) untuk berinteraksi langsung dengan formulir klinis dan asisten AI Langflow yang sudah terhubung.

---

## 📁 Struktur Direktori Proyek

```plaintext
glupulse_langflow/
├── langflow/
│   ├── GluPulse AI Clinical Gatekeeper & Personalized Rec.json  # Export Alur Flow Langflow
│   └── pdf/
│       └── GluPulse_AI_Panduan_Klinis.pdf                       # Dokumen Pedoman Medis RAG
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
