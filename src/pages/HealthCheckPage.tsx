import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { InlineChatSection } from '../components/InlineChatSection';
import { ShieldCheck, HeartPulse } from 'lucide-react';

export const HealthCheckPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6] text-slate-900 flex flex-col selection:bg-rose-500 selection:text-white">
      {/* Shared Global Top Navigation Bar */}
      <HeaderNav />

      {/* Hero Sub-header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 pt-6 pb-2 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                Pusat Analisis Klinis & AI Asisten
              </h1>
              <p className="text-xs text-slate-500 font-sans">
                Form Cepat Satu-Klik + Dialog Diagnostik Terintegrasi Langflow
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
              <span>Standar PERKENI / ADA</span>
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Langflow Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Click-Driven Quick Form & Inline Langflow Chat */}
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-6 w-full">
        <InlineChatSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-rose-100/80 bg-white/60 backdrop-blur-md py-6 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 GluPulse AI. Sistem Pendukung Keputusan Klinis Gula Darah & Kardiovaskular.</span>
          <span className="text-slate-400">Terhubung ke Langflow Engine</span>
        </div>
      </footer>
    </div>
  );
};
