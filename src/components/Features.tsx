import React from 'react';
import { ShieldCheck, Cpu, HeartPulse, FileText, Sparkles, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';

const featureList = [
  {
    icon: ShieldCheck,
    title: 'Clinical Gatekeeper & Triage',
    desc: 'Deteksi dini parameter kritis glukosa (Hipoglikemia < 70 mg/dL atau Krisis Hiperglikemia > 300 mg/dL) dengan peringatan darurat seketika.',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'group-hover:border-cyan-500/50',
  },
  {
    icon: Sliders,
    title: 'Personalized Recommendation Engine',
    desc: 'Formulasi rekomendasi nutrisi rendah indeks glikemik, penyesuaian aktivitas aerobik harian, dan tindak lanjut gaya hidup spesifik.',
    color: 'from-teal-400 to-emerald-500',
    borderColor: 'group-hover:border-teal-500/50',
  },
  {
    icon: HeartPulse,
    title: 'Biomarker & HbA1c Analytics',
    desc: 'Pemetaan komprehensif profil glukosa sewaktu (RBS), glukosa puasa (FBS), dan korelasi tren HbA1c jangka panjang.',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'group-hover:border-blue-500/50',
  },
  {
    icon: FileText,
    title: 'Protokol Klinis Standar (ADA/PERKENI)',
    desc: 'Disusun berdasarkan guideline medis terkini guna menjamin integritas klinis dalam setiap respons yang dihasilkan.',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'group-hover:border-purple-500/50',
  },
  {
    icon: Cpu,
    title: 'Langflow Dynamic Orchestration',
    desc: 'Didukung pipeline alur kerja LLM modular Langflow untuk pemrosesan konteks multi-turn yang konsisten dan akurat.',
    color: 'from-amber-400 to-orange-500',
    borderColor: 'group-hover:border-amber-500/50',
  },
  {
    icon: Sparkles,
    title: 'Interactive 3D Visual Feedback',
    desc: 'Visualisasi interaktif status respon biologis untuk meningkatkan keterlibatan dan pemahaman pasien maupun tenaga kesehatan.',
    color: 'from-emerald-400 to-cyan-500',
    borderColor: 'group-hover:border-emerald-500/50',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
            Kapabilitas Sistem
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arsitektur Pendukung Keputusan Klinis Terpadu
          </h3>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Menggabungkan kecerdasan komputasi dengan protokol medis teruji untuk menghadirkan keputusan yang aman, cepat, dan presisi.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5 ${item.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 mb-5 inline-block shadow-md`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {item.title}
                </h4>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
