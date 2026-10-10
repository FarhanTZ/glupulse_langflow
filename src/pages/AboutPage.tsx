import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';
import { 
  ShieldCheck, 
  FileText, 
  Database, 
  HeartPulse, 
  ArrowRight, 
  Sparkles, 
  Activity,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const clinicalPillars = [
    {
      icon: ShieldCheck,
      title: 'Safety Guardrails Medis',
      subtitle: 'Prioritas Keselamatan Pasien',
      desc: 'Memprioritaskan keselamatan di atas angka semata. Jika ada tanda bahaya seperti tremor atau keringat dingin, sistem segera menginstruksikan penghentian aktivitas dan penanganan darurat.',
      badge: 'Deteksi Kritis',
    },
    {
      icon: FileText,
      title: 'Standar PERKENI & ADA',
      subtitle: 'Pedoman Konsensus Global',
      desc: 'Seluruh rekomendasi batas glukosa, interpretasi HbA1c, dan klasifikasi triase disusun patuh pada pedoman konsensus endokrinologi PERKENI dan American Diabetes Association.',
      badge: 'Resmi & Teruji',
    },
    {
      icon: Database,
      title: 'Langflow & Hybrid RAG',
      subtitle: 'AI Tanpa Halusinasi',
      desc: 'Didukung pipeline Langflow orkestrasi Retrieval-Augmented Generation (RAG) untuk menarik konteks klinis akurat, panduan nutrisi indeks glikemik rendah, dan interaksi gaya hidup.',
      badge: 'AI Engine',
    },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6] text-slate-900 flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. Header Navigation */}
      <HeaderNav />

      {/* 2. Main Content (Compact & Centered for No-Scroll Experience) */}
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-3 sm:py-6 flex flex-col justify-center w-full">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Tentang Sistem{' '}
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              GluPulse AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Sistem pendukung keputusan klinis (*Clinical Decision Support*) bertenaga AI untuk analisis glukosa darah, triase darurat Rule of 15, dan integrasi gaya hidup sehat.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-5 sm:mb-8">
          {clinicalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                className="p-5 sm:p-6 rounded-3xl liquid-glass-light border border-white/80 shadow-md hover:shadow-lg hover:border-rose-200/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-rose-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-rose-600 mb-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-100/60 flex items-center gap-1.5 text-[11px] font-semibold text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Kepatuhan Medis Terverifikasi</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 text-white shadow-lg shadow-rose-600/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 hidden sm:flex">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold leading-tight">
                Mulai Evaluasi Mandiri Gula Darah & Jantung Anda
              </h3>
              <p className="text-xs text-rose-100 font-normal">
                Gunakan Form Cepat Satu-Klik untuk konsultasi instan bersama AI.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/cek-kesehatan')}
            className="shrink-0 px-6 py-2.5 sm:py-3 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Buka Cek Kesehatan</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </main>

      {/* 3. Compact Footer */}
      <footer className="border-t border-rose-100/80 bg-white/60 backdrop-blur-md py-3 text-[11px] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>© 2026 GluPulse AI. Didukung oleh Langflow RAG & Standar PERKENI / ADA.</span>
          <span className="text-slate-400">Arsitektur Klinis Responsif Satu Layar</span>
        </div>
      </footer>

    </div>
  );
};
