import React from 'react';
import { motion } from 'framer-motion';
import { InlineChatSection } from './InlineChatSection';
import { ArrowLeft, ShieldCheck, Stethoscope, HeartPulse } from 'lucide-react';

interface HealthCheckPageProps {
  onBackToHome: () => void;
}

export const HealthCheckPage: React.FC<HealthCheckPageProps> = ({ onBackToHome }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-[#fafafa] text-slate-900 flex flex-col selection:bg-rose-500 selection:text-white"
    >
      {/* Top Navigation Bar Cek Kesehatan */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-rose-100/80 shadow-xs">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Back Button & Title */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="px-3.5 py-2 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-200/80 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>

            <div className="h-5 w-[1px] bg-slate-200 hidden sm:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-xs shadow-rose-600/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-display font-semibold text-sm sm:text-base text-slate-900 leading-tight">
                  Pusat Cek Kesehatan & Triase AI
                </h1>
                <p className="text-[11px] text-slate-500 font-sans hidden sm:block">
                  GluPulse Cardiac & Glucose Intelligence Engine
                </p>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
              <span>Protokol ADA / PERKENI</span>
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AI Online</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content: Form Input Klinis & Chat Interface */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full">
        <InlineChatSection />
      </main>

      {/* Footer Cek Kesehatan */}
      <footer className="border-t border-slate-200/80 bg-white py-6 text-xs text-slate-500 text-center">
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 GluPulse AI. Sistem Pendukung Keputusan Klinis.</span>
          <span className="text-slate-400">Terhubung ke Langflow Pipeline</span>
        </div>
      </footer>
    </motion.div>
  );
};
