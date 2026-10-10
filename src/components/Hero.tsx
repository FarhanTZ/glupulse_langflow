import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight, Shield, Zap, Stethoscope } from 'lucide-react';
import { PulseCore3D } from './3d/PulseCore3D';

export const Hero: React.FC<{ onOpenChat?: () => void }> = ({ onOpenChat }) => {
  return (
    <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Gen Clinical AI Decision Support</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Presisi Klinis & Analitik{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Glukosa 3D
              </span>{' '}
              Terintegrasi
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Platform pendukung keputusan medis bertenaga AI untuk triase risiko gula darah, kalkulasi keparahan klinis, dan personalisasi rekomendasi terapi berbasis protokol evidence-based.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-cyan-400 font-bold text-lg sm:text-xl">&lt; 1.2s</div>
                <div className="text-[11px] text-slate-400">Response Triase AI</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-teal-400 font-bold text-lg sm:text-xl">ADA/PERKENI</div>
                <div className="text-[11px] text-slate-400">Protokol Medis</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-emerald-400 font-bold text-lg sm:text-xl">100%</div>
                <div className="text-[11px] text-slate-400">Personalized Engine</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#consultation"
                onClick={onOpenChat}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi AI Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 text-sm font-semibold text-slate-200 hover:text-white transition"
              >
                <Stethoscope className="w-4 h-4 text-cyan-400" />
                <span>Eksplorasi Fitur</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Motion Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-cyan-500/20 p-2 shadow-2xl backdrop-blur-2xl">
              {/* Decorative Corner Lights */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* 3D Pulse Core Canvas */}
              <PulseCore3D />

              {/* Floating Live Vital Card */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target Glukosa Puasa</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5">80 - 130 mg/dL</div>
              </div>

              {/* Floating Gatekeeper Status Card */}
              <div className="absolute bottom-12 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Safety Guardrails</span>
                </div>
                <div className="text-xs font-bold text-emerald-300 mt-0.5">Active & Verified</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
