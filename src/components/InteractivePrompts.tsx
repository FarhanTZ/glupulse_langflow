import React, { useState } from 'react';
import { Lightbulb, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';

const samplePrompts = [
  {
    category: 'Triase & Gejala Akut',
    tagColor: 'bg-red-950/80 text-red-400 border-red-800/50',
    prompt: 'Pasien mengeluh keringat dingin, tremor, dan pusing dengan GDS 58 mg/dL. Apa protokol penanganan segera?',
    badge: 'Urgent'
  },
  {
    category: 'Interpretasi Lab',
    tagColor: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/50',
    prompt: 'Hasil HbA1c pasien 8.4% dan GDP rata-rata 170 mg/dL. Bagaimana evaluasi kepatuhan terapi dan stratifikasi risiko mikrovaskular?',
    badge: 'Analisis'
  },
  {
    category: 'Rekomendasi Nutrisi',
    tagColor: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50',
    prompt: 'Berikan panduan menu makanan rendah glycemic load untuk pasien diabetes tipe 2 dengan hipertensi komorbid.',
    badge: 'Diet & Lifestyle'
  },
  {
    category: 'Aktivitas Fisik',
    tagColor: 'bg-blue-950/80 text-blue-400 border-blue-800/50',
    prompt: 'Berapa durasi dan intensitas latihan aerobik yang aman bagi pasien diabetes usia 55 tahun tanpa riwayat komplikasi jantung?',
    badge: 'Exercise'
  }
];

export const InteractivePrompts: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="consultation" className="py-12 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/40 border border-cyan-500/20 backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Contoh Kasus & Skenario Konsultasi AI
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Klik tombol salin pada salah satu prompt di bawah untuk mencoba konsultasi pada widget obrolan di pojok kanan bawah.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Prompt Templates Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {samplePrompts.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-slate-950/60 hover:bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      #{item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:text-white transition">
                    "{item.prompt}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-end">
                  <button
                    onClick={() => handleCopy(item.prompt, idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-600 hover:text-white text-slate-300 text-xs font-medium transition"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
