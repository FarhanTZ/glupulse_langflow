import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';
import { 
  HeartPulse, 
  Activity, 
  ShieldAlert, 
  Apple, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Sliders
} from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShieldAlert,
      tag: 'Triase Kritis',
      title: 'Emergency Gatekeeper & Rule of 15',
      desc: 'Deteksi instan kondisi hipoglikemia (<70 mg/dL) & hiperglikemia (>250 mg/dL) dengan panduan protokol cepat Rule of 15 dan triase keselamatan.',
      badge: 'Deteksi Instan',
      color: 'from-rose-500 to-red-600',
    },
    {
      icon: Apple,
      tag: 'Nutrisi Klinis',
      title: 'Nutrition & Meal Engine',
      desc: 'Rekomendasi takaran makronutrien, indeks glikemik rendah (Low GI), dan substitusi pangan lokal ramah gula darah (nasi merah, shirataki, tempe).',
      badge: 'Personalisasi AI',
      color: 'from-rose-600 to-pink-600',
    },
    {
      icon: Activity,
      tag: 'Standar Medis',
      title: 'ADA 2024 & PERKENI Protocol',
      desc: 'Logika klinis tersertifikasi berbasis konsensus PERKENI & ADA untuk interpretasi glukosa puasa (GDP), sewaktu (GDS), dan HbA1c.',
      badge: 'Pedoman Resmi',
      color: 'from-red-600 to-rose-700',
    },
    {
      icon: BrainCircuit,
      tag: 'Generative RAG',
      title: 'Langflow AI Orchestration',
      desc: 'Pipeline orkestrasi Langflow dengan Retrieval-Augmented Generation (RAG) untuk penarikan dokumen medis akurat tanpa halusinasi.',
      badge: 'Langflow RAG',
      color: 'from-pink-600 to-rose-600',
    },
    {
      icon: HeartPulse,
      tag: 'Kardiovaskular',
      title: 'Cardiac & Glucose Correlation',
      desc: 'Analisis korelasi antara fluktuasi glukosa dengan beban kerja miokardium jantung dan pencegahan komplikasi makrovaskular.',
      badge: 'Kardio-Metabolik',
      color: 'from-rose-500 to-red-500',
    },
    {
      icon: Sliders,
      tag: 'Form Cepat',
      title: 'Click-Driven Quick Builder',
      desc: 'Formulir cerdas berbasis tombol klik instan. Pilih tipe tes, nilai glukosa, gejala klinis, dan tujuan langsung dalam hitungan detik.',
      badge: 'Zero Friction',
      color: 'from-rose-700 to-pink-700',
    },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6] text-slate-900 flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-12 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-red-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. Header Navigation */}
      <HeaderNav />

      {/* 2. Main Content (Compact 100vh Grid - No Scroll Needed on Desktop) */}
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-3 sm:py-5 flex flex-col justify-center w-full">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Kapabilitas Klinis Terpadu{' '}
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              GluPulse
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans"
          >
            Integrasi standar medis PERKENI/ADA dengan asisten AI bertenaga Langflow dalam satu ekosistem cepat.
          </motion.p>
        </div>

        {/* 6 Feature Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-4 sm:mb-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * idx }}
                className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl liquid-glass-light border border-white/80 shadow-xs hover:shadow-md hover:border-rose-200/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${feat.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80">
                      {feat.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-rose-600 uppercase tracking-wider block mb-0.5">
                    {feat.tag}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 group-hover:text-rose-700 transition-colors line-clamp-1">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-rose-100/60 flex items-center gap-1.5 text-[10px] font-semibold text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Klinis Terintegrasi</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Bottom Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 text-white shadow-lg shadow-rose-600/20 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 hidden sm:flex">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold leading-tight">
                Coba Fitur Ini Sekarang di Pusat Cek Kesehatan
              </h3>
              <p className="text-[11px] text-rose-100 font-normal">
                Dapatkan rekomendasi glukosa, nutrisi, dan evaluasi kardiovaskular secara real-time.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/cek-kesehatan')}
            className="shrink-0 px-5 py-2 sm:py-2.5 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Mulai Analisis Cepat</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </main>

      {/* 3. Footer */}
      <footer className="border-t border-rose-100/80 bg-white/60 backdrop-blur-md py-3 text-[11px] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>© 2026 GluPulse AI. Arsitektur Klinis & Fitur Diagnostik Terintegrasi.</span>
          <span className="text-slate-400">Tampilan Kompak Responsif 100vh</span>
        </div>
      </footer>

    </div>
  );
};
