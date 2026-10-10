import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';
import { 
  Heart, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2, 
  Database, 
  HeartPulse
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredPillar, setHoveredPillar] = useState<'left' | 'right' | null>(null);

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6] text-slate-900 flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-rose-300/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-red-300/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 1. Header Navigation */}
      <HeaderNav />

      {/* 2. Main Dual-Pillar Bento Glass Interface */}
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-2 sm:py-4 flex flex-col justify-center w-full">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Dua Pilar Harmoni:{' '}
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Human Care & Precision AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto"
          >
            GluPulse memadukan empati keselamatan pasien dengan kecerdasan komputasi klinis tanpa halusinasi.
          </motion.p>
        </div>

        {/* Dual-Pillar Interactive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-3 sm:mb-5">
          
          {/* PILLAR 1: HUMAN CARE & CARDIAC HEALTH (Sisi Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onMouseEnter={() => setHoveredPillar('left')}
            onMouseLeave={() => setHoveredPillar(null)}
            className={`p-5 sm:p-6 rounded-3xl liquid-glass-light border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
              hoveredPillar === 'left'
                ? 'border-rose-300 shadow-xl shadow-rose-500/10 bg-white/95 scale-[1.01]'
                : 'border-white/80 shadow-md bg-white/80'
            }`}
          >
            {/* Ambient Pillar Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-200/40 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              {/* Header Pillar */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/25 group-hover:scale-105 transition-transform">
                    <Heart className="w-5 h-5 fill-white/20" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">
                      Pilar 01
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      Human Care & Kardiovaskular
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Proteksi Pasien
                </span>
              </div>

              {/* Animated Mini ECG Pulse Monitor Bar */}
              <div className="h-10 rounded-xl bg-rose-50/70 border border-rose-100 p-2 flex items-center justify-between mb-3 overflow-hidden">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-600 animate-pulse" />
                  <span className="text-[11px] font-mono font-semibold text-rose-900">
                    Live Heart-Glucose Sync
                  </span>
                </div>
                {/* SVG Pulse Line */}
                <svg className="w-28 h-6 text-rose-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 20">
                  <path d="M0 10 L30 10 L35 3 L40 17 L45 7 L50 13 L55 10 L100 10" />
                </svg>
              </div>

              {/* Clinical Pointers */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Emergency Gatekeeper & Rule of 15</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Deteksi otomatis hipoglikemia kritis (&lt;70 mg/dL) untuk pencegahan sinkop dan syok metabolik.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-2.5">
                  <HeartPulse className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Korelasi Beban Jantung (Myocardial Load)</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Evaluasi keamanan denyut nadi dan latihan fisik sebelum aktivitas kardio intensif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Footer */}
            <div className="mt-3 pt-2.5 border-t border-rose-100/60 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-rose-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                Empati Klinis Berpusat Pasien
              </span>
              <span className="font-mono text-[10px]">v2.4 Core</span>
            </div>
          </motion.div>

          {/* PILLAR 2: PRECISION CLINICAL AI & RAG (Sisi Kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            onMouseEnter={() => setHoveredPillar('right')}
            onMouseLeave={() => setHoveredPillar(null)}
            className={`p-5 sm:p-6 rounded-3xl liquid-glass-light border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
              hoveredPillar === 'right'
                ? 'border-red-300 shadow-xl shadow-red-500/10 bg-white/95 scale-[1.01]'
                : 'border-white/80 shadow-md bg-white/80'
            }`}
          >
            {/* Ambient Pillar Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-red-200/40 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              {/* Header Pillar */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-pink-600 text-white flex items-center justify-center shadow-md shadow-red-600/25 group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                      Pilar 02
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      Precision Clinical AI Engine
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Langflow RAG
                </span>
              </div>

              {/* Animated Langflow Pipeline Status Bar */}
              <div className="h-10 rounded-xl bg-red-50/70 border border-red-100 p-2 flex items-center justify-between mb-3 overflow-hidden">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] font-mono font-semibold text-red-900">
                    Astra DB & Vector Guardrails
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    0-Hallucination
                  </span>
                </div>
              </div>

              {/* Clinical Pointers */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Konsensus PERKENI 2021 & ADA 2024</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Pedoman standar medis baku untuk interpretasi Glukosa Puasa, Sewaktu, dan HbA1c.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Click-Driven Quick Diagnostic</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Formulir satu klik instan untuk menghasilkan asesmen dan panduan diet tanpa hambatan input.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Footer */}
            <div className="mt-3 pt-2.5 border-t border-red-100/60 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-red-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                Didukung Langflow Multi-Agent
              </span>
              <span className="font-mono text-[10px]">Flow: d75812</span>
            </div>
          </motion.div>

        </div>

        {/* Bento Stats & Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 text-white shadow-lg shadow-rose-600/20 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          {/* Quick Metrics */}
          <div className="flex items-center gap-6 sm:gap-8 justify-center">
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-black font-mono leading-none">0.8s</div>
              <div className="text-[10px] text-rose-200 mt-0.5">Respons AI</div>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-black font-mono leading-none">ADA / PERKENI</div>
              <div className="text-[10px] text-rose-200 mt-0.5">Standar Medis</div>
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <div className="text-center sm:text-left hidden sm:block">
              <div className="text-base sm:text-lg font-black font-mono leading-none">100%</div>
              <div className="text-[10px] text-rose-200 mt-0.5">Safety Guardrails</div>
            </div>
          </div>

          {/* CTA Action Button */}
          <button
            type="button"
            onClick={() => navigate('/cek-kesehatan')}
            className="shrink-0 px-6 py-2.5 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Mulai Cek Kesehatan</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </main>

      {/* 3. Compact Footer */}
      <footer className="border-t border-rose-100/80 bg-white/60 backdrop-blur-md py-2.5 text-[11px] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>© 2026 GluPulse AI. Arsitektur Dual-Pillar Bento Glass.</span>
          <span className="text-slate-400">Desain 100vh Responsif Tanpa Scroll</span>
        </div>
      </footer>

    </div>
  );
};
