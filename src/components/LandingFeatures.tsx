import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Activity,
  HeartPulse,
  Utensils,
  Zap,
  ArrowRight,
  Stethoscope,
  Sliders,
  Sparkles
} from 'lucide-react';

interface LandingFeaturesProps {
  onStartCheck: () => void;
}

export const LandingFeatures: React.FC<LandingFeaturesProps> = ({ onStartCheck }) => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* 1. Highlight Banner: Cek Kesehatan Cepat */}
      <div className="rounded-[40px] bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl mb-20 border border-teal-800/40">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Fitur Utama: Smart Clinical Triage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Periksa Risiko & Dapatkan Rekomendasi Glukosa dalam Hitungan Detik
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Gunakan formulir tekan pilihan untuk memasukkan nilai gula darah (GDP/GDS) dan gejala yang dirasakan. AI kami akan mengevaluasi keselamatan aktivitas fisik serta menyusun panduan nutrisi terarah secara instan.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onStartCheck}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-400/20 hover:shadow-xl hover:shadow-teal-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Stethoscope className="w-5 h-5 text-slate-950" />
              <span>Buka Menu Cek Kesehatan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Cara Kerja 3 Langkah Mudah */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Alur Pemeriksaan
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            3 Langkah Mudah Cek Kesehatan Glukosa
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 font-bold text-sm flex items-center justify-center mb-5">
                01
              </div>
              <h4 className="font-display font-semibold text-base text-slate-900 mb-2">
                Pilih Tipe & Nilai Gula Darah
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Tentukan apakah hasil tes merupakan gula darah puasa (GDP), sewaktu (GDS), atau 2 jam pasca makan (GD2PP) menggunakan slider interaktif.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 font-bold text-sm flex items-center justify-center mb-5">
                02
              </div>
              <h4 className="font-display font-semibold text-base text-slate-900 mb-2">
                Pilih Gejala Klinis yang Dirasakan
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Tekan pilihan gejala seperti tremor, keringat dingin, pusing, sangat haus, atau badan lemas untuk evaluasi triase keselamatan.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm flex items-center justify-center mb-5">
                03
              </div>
              <h4 className="font-display font-semibold text-base text-slate-900 mb-2">
                Dapatkan Rekomendasi Instan
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                AI menganalisis data secara real-time dan memberikan panduan penanganan segera, evaluasi olahraga, serta menu makanan ramah diabetes.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
