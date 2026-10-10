import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CircleUserRound,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Activity,
  ShieldCheck,
  HeartPulse,
  Utensils,
  Cpu,
  FileText,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { HeartPulse3D } from './3d/HeartPulse3D';

interface LiquidGlassLandingProps {
  onStartCheck: () => void;
}

export const LiquidGlassLanding: React.FC<LiquidGlassLandingProps> = ({ onStartCheck }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'about' | 'features' | null>(null);

  return (
    <div className="relative w-full h-screen min-h-[640px] max-h-screen overflow-hidden select-none flex flex-col justify-between bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6]">
      
      {/* 1. Interactive 3D Heart Pulse Background Canvas (Ruby Red) */}
      <HeartPulse3D />

      {/* Fresh Rose-to-White Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-16 w-[550px] h-[550px] bg-rose-300/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-12 right-16 w-[500px] h-[500px] bg-red-300/15 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* 2. Top Navigation Bar (z-20) */}
      <nav className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20 w-full pointer-events-auto">
        
        {/* Left: Custom Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onStartCheck}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/25 group-hover:scale-105 transition-all">
            <Activity className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
            GluPulse
          </span>
        </div>

        {/* Center: Liquid Glass Nav Pill (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full liquid-glass-light shadow-sm transition-all duration-300">
          <button
            type="button"
            className="text-sm font-semibold text-rose-700 hover:text-rose-900 transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => setActiveModal('about')}
            className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors cursor-pointer"
          >
            Tentang Aplikasi
          </button>
          <button
            type="button"
            onClick={() => setActiveModal('features')}
            className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors cursor-pointer"
          >
            Fitur Klinis
          </button>
          <button
            type="button"
            onClick={onStartCheck}
            className="text-sm font-semibold text-rose-700 hover:text-rose-900 transition-colors cursor-pointer flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-2xs hover:bg-rose-100/70"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Cek Kesehatan</span>
          </button>
        </div>

        {/* Right: Liquid Glass Circle (Desktop Only) */}
        <div className="hidden md:flex">
          <button
            type="button"
            onClick={onStartCheck}
            title="User Account / Konsultasi"
            className="h-10 w-10 rounded-full liquid-glass-light flex items-center justify-center text-slate-700 hover:text-rose-700 hover:scale-105 transition-all cursor-pointer shadow-xs"
          >
            <CircleUserRound className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Right: Mobile Menu Toggle Button */}
        <div className="flex md:hidden z-50">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative h-10 w-10 rounded-full liquid-glass-light flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
          >
            <Menu
              className={`h-5 w-5 absolute transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`h-5 w-5 absolute transition-all duration-300 ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (z-30) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8 px-6"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-rose-700 hover:text-rose-900 transition-colors"
              >
                Beranda
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setActiveModal('about');
                }}
                className="text-2xl font-medium text-slate-600 hover:text-rose-700 transition-colors"
              >
                Tentang Aplikasi
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setActiveModal('features');
                }}
                className="text-2xl font-medium text-slate-600 hover:text-rose-700 transition-colors"
              >
                Fitur Klinis
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onStartCheck();
                }}
                className="text-2xl font-bold text-rose-700 hover:text-rose-900 transition-colors"
              >
                Cek Kesehatan AI
              </button>

              <div className="pt-6 flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full liquid-glass-light flex items-center justify-center text-slate-800">
                  <CircleUserRound className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-500">Account & Clinical Suite</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Hero Content (z-10) */}
      <div
        className={`relative z-10 flex-1 flex flex-col justify-between px-5 sm:px-8 md:px-16 lg:px-20 pb-8 sm:pb-12 transition-opacity duration-300 pointer-events-none ${
          menuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Top Text Block */}
        <div className="mt-14 sm:mt-20 md:mt-24 lg:mt-28 max-w-2xl pointer-events-auto">
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-slate-900 tracking-[-0.05em] font-sans"
          >
            Heal Your Body<br />
            Naturally
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-light text-slate-600 leading-relaxed max-w-xl"
          >
            Holistic wellness. Transformative clinical results.
          </motion.p>

          {/* CTA Button: Solid Fresh Cardiac Rose Gradient */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartCheck}
            className="rounded-full px-7 py-3.5 sm:px-8 sm:py-4 mt-6 sm:mt-8 text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-700 hover:to-red-700 shadow-lg shadow-rose-600/25 flex items-center gap-2.5 cursor-pointer transition-all duration-300 group"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Stats Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-end gap-6 sm:gap-10 md:gap-16 pt-8 pointer-events-auto"
        >
          {/* Stat 1: 9-dot Triangular Pattern Icon */}
          <div className="flex items-start gap-3">
            <div className="relative w-5 h-5 mt-1 shrink-0">
              <span className="absolute top-0 left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[6px] left-[4.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[6px] left-[12.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[1px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[16px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[4.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[12.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight font-sans">
                48 Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                Initial Consultation
              </div>
            </div>
          </div>

          {/* Stat 2: 3x3 Checkerboard Grid Icon */}
          <div className="flex items-start gap-3">
            <div className="grid grid-cols-3 gap-[2.5px] w-5 h-5 mt-1 shrink-0">
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight font-sans">
                Initial Consultation
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                Healing Sessions
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 4. MODAL: TENTANG APLIKASI (LIQUID GLASS STYLE) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal === 'about' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl rounded-[36px] bg-white/90 backdrop-blur-2xl border border-rose-200/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Tentang GluPulse AI
                  </h3>
                  <span className="text-xs text-rose-700 font-semibold">
                    Clinical Decision Support System v2.0
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-2">
                <p>
                  <strong>GluPulse</strong> adalah platform kecerdasan buatan klinis (*AI Clinical Support*) yang dirancang khusus untuk membantu memantau, mengevaluasi risiko, dan memberikan personalisasi rekomendasi glukosa darah.
                </p>
                <p>
                  Mengintegrasikan protokol standar endokrinologi medis (<strong>ADA & PERKENI</strong>), GluPulse memprioritaskan triase keselamatan pasien (*Safety Guardrails*) di atas sekadar angka hasil laboratorium semata.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">Triase Gejala Akut</span>
                      <span className="text-[11px] text-slate-500">Mendeteksi risiko hipoglikemia & hiperglikemia seketika.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">Rekomendasi Nutrisi</span>
                      <span className="text-[11px] text-slate-500">Panduan menu ramah diabetes dengan GI & GL terukur.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    onStartCheck();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-xs font-semibold shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Mulai Cek Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 5. MODAL: FITUR KLINIS (LIQUID GLASS STYLE) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal === 'features' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl rounded-[36px] bg-white/90 backdrop-blur-2xl border border-rose-200/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Fitur Unggulan GluPulse
                  </h3>
                  <span className="text-xs text-rose-700 font-semibold">
                    Kapabilitas AI & Decision Support
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                {/* Fitur 1 */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Clinical Gatekeeper</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Evaluasi keselamatan otomatis terhadap rencana aktivitas fisik/olahraga saat terjadi gejala penurunan glukosa akut.
                  </p>
                </div>

                {/* Fitur 2 */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Smart Nutrition Engine</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Formulasi menu makan pagi, siang, dan malam dengan batasan Indeks Glikemik (&lt;55) dan Glycemic Load (&lt;15).
                  </p>
                </div>

                {/* Fitur 3 */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Protokol Rule of 15</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Instruksi darurat penanganan hipoglikemia dengan konsumsi karbohidrat cepat serap dan waktu evaluasi ulang 15 menit.
                  </p>
                </div>

                {/* Fitur 4 */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Langflow Orchestration</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Didukung alur kerja LLM modular terintegrasi database vektor Astra DB untuk respons berbasis konsensus medis.
                  </p>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    onStartCheck();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-xs font-semibold shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Coba Cek Kesehatan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
