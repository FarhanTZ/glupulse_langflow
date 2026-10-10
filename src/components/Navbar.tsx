import React from 'react';
import { Activity, ShieldCheck, Cpu, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3.5">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-inner">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                GluPulse
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/80 uppercase tracking-wider">
                AI CDS v2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Clinical Gatekeeper & Personalized Recommendation
            </p>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Langflow Core</span>
            <span>Online</span>
          </div>

          <a
            href="http://127.0.0.1:7860"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Host: 7860</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>
    </header>
  );
};
