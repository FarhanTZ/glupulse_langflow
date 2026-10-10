import React, { useState } from 'react';
import { Gauge, AlertTriangle, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export const ClinicalMetrics: React.FC = () => {
  const [glucose, setGlucose] = useState<number>(110);
  const [testType, setTestType] = useState<'fasting' | 'random'>('fasting');

  const getStatus = () => {
    if (glucose < 70) {
      return {
        label: 'Hipoglikemia (Tanda Bahaya)',
        color: 'text-red-400',
        bg: 'bg-red-950/60 border-red-800/60',
        desc: 'Nilai gula darah terlalu rendah. Butuh asupan karbohidrat cepat (Rule of 15) segera.',
        icon: ShieldAlert,
      };
    }
    if (testType === 'fasting') {
      if (glucose <= 99) {
        return {
          label: 'Normal (Glukosa Puasa)',
          color: 'text-emerald-400',
          bg: 'bg-emerald-950/60 border-emerald-800/60',
          desc: 'Kadar glukosa puasa berada dalam batas fisiologis optimal (70 - 99 mg/dL).',
          icon: CheckCircle,
        };
      }
      if (glucose <= 125) {
        return {
          label: 'Pre-Diabetes (Impaired Fasting)',
          color: 'text-amber-400',
          bg: 'bg-amber-950/60 border-amber-800/60',
          desc: 'Indikasi toleransi glukosa terganggu. Disarankan intervensi pola makan dan aktivitas fisik.',
          icon: AlertTriangle,
        };
      }
      return {
        label: 'Hiperglikemia / Diabetes Range',
        color: 'text-rose-400',
        bg: 'bg-rose-950/60 border-rose-800/60',
        desc: 'Kadar glukosa tinggi (≥ 126 mg/dL). Dianjurkan konfirmasi lab dan konsultasi medis lanjutan.',
        icon: AlertTriangle,
      };
    } else {
      if (glucose < 140) {
        return {
          label: 'Normal (Glukosa Sewaktu)',
          color: 'text-emerald-400',
          bg: 'bg-emerald-950/60 border-emerald-800/60',
          desc: 'Kadar glukosa sewaktu berada dalam batas normal pasca makan (< 140 mg/dL).',
          icon: CheckCircle,
        };
      }
      if (glucose < 200) {
        return {
          label: 'Toleransi Glukosa Terganggu',
          color: 'text-amber-400',
          bg: 'bg-amber-950/60 border-amber-800/60',
          desc: 'Kadar glukosa 140 - 199 mg/dL menunjukkan risiko peningkatan resistensi insulin.',
          icon: AlertTriangle,
        };
      }
      return {
        label: 'Hiperglikemia Signifikan (≥ 200 mg/dL)',
        color: 'text-rose-400',
        bg: 'bg-rose-950/60 border-rose-800/60',
        desc: 'Kadar glukosa sewaktu tinggi. Segera konsultasikan ke dokter atau tanyakan ke AI Gatekeeper.',
        icon: ShieldAlert,
      };
    }
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <section className="py-16 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Clinical Triage Preview</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Simulasi Cepat Parameter Gula Darah
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              Coba geser slider kadar glukosa untuk melihat bagaimana GluPulse AI mengidentifikasi kategori risiko klinis secara seketika sesuai pedoman PERKENI/ADA.
            </p>
          </div>

          {/* Interactive Tool Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
            
            {/* Toggle Type */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tipe Pengukuran:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  onClick={() => setTestType('fasting')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    testType === 'fasting' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Puasa (GDP)
                </button>
                <button
                  onClick={() => setTestType('random')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    testType === 'random' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sewaktu (GDS)
                </button>
              </div>
            </div>

            {/* Slider & Value Display */}
            <div className="space-y-4 mb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-slate-300">Nilai Glukosa Darah</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-cyan-400 font-mono">{glucose}</span>
                  <span className="text-xs text-slate-400 ml-1.5">mg/dL</span>
                </div>
              </div>

              <input
                type="range"
                min="40"
                max="350"
                value={glucose}
                onChange={(e) => setGlucose(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 focus:outline-none"
              />

              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>40 (Kritis Rendah)</span>
                <span>100</span>
                <span>180</span>
                <span>350+ (Kritis Tinggi)</span>
              </div>
            </div>

            {/* Live Result Box */}
            <div className={`p-4 sm:p-5 rounded-2xl border ${status.bg} transition-all duration-300`}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0">
                  <StatusIcon className={`w-5 h-5 ${status.color}`} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${status.color}`}>
                    {status.label}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {status.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
