import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';
import { 
  ShieldAlert, 
  Apple, 
  HeartPulse, 
  BrainCircuit, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';

type FeatureKey = 'triase' | 'nutrition' | 'cardio' | 'rag';

export const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<FeatureKey>('triase');

  // State untuk Simulator 1: Triase Glukosa
  const [simGlucose, setSimGlucose] = useState<number>(55);

  // State untuk Simulator 2: Smart Nutrition
  const [selectedFoods, setSelectedFoods] = useState<string[]>(['Beras Merah Organik', 'Tempe Kukus']);

  // Logika Evaluasi Triase Simulator
  const getTriaseStatus = (val: number) => {
    if (val < 70) {
      return {
        label: '🚨 HIPOGLIKEMIA KRITIS',
        color: 'text-red-700 bg-red-100 border-red-300',
        badge: 'Rule of 15 Aktif',
        advice: 'Hentikan aktivitas seketika! Konsumsi 15-20g glukosa murni (1/2 gelas jus/air gula) & cek ulang 15 menit.',
        indicator: 'bg-red-600',
      };
    }
    if (val <= 130) {
      return {
        label: '✅ NORMAL / TERKENDALI',
        color: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        badge: 'Optimal PERKENI',
        advice: 'Kadar glukosa dalam rentang target aman. Aman untuk aktivitas fisik ringan hingga sedang.',
        indicator: 'bg-emerald-500',
      };
    }
    if (val <= 250) {
      return {
        label: '⚠️ HIPERGLIKEMIA RINGAN',
        color: 'text-amber-800 bg-amber-100 border-amber-300',
        badge: 'Perlu Monitoring',
        advice: 'Hidrasi air putih yang cukup. Pilih makanan rendah GI & pantau lonjakan pasca makan.',
        indicator: 'bg-amber-500',
      };
    }
    return {
      label: '🚨 HIPERGLIKEMIA TINGGI',
      color: 'text-rose-900 bg-rose-100 border-rose-300',
      badge: 'Waspada Ketoasidosis',
      advice: 'Tunda olahraga berat! Risiko dehidrasi & ketosis. Segera hubungi dokter/tenaga medis.',
      indicator: 'bg-rose-700',
    };
  };

  const triaseResult = getTriaseStatus(simGlucose);

  const featureTabs = [
    {
      id: 'triase' as FeatureKey,
      icon: ShieldAlert,
      title: 'Triase Kritis & Rule of 15',
      subtitle: 'Emergency Gatekeeper Realtime',
      tag: 'Deteksi Instan',
    },
    {
      id: 'nutrition' as FeatureKey,
      icon: Apple,
      title: 'Smart Nutrition & Meal Engine',
      subtitle: 'Pangan Rendah GI Indonesia',
      tag: 'Personalisasi AI',
    },
    {
      id: 'cardio' as FeatureKey,
      icon: HeartPulse,
      title: 'Cardio-Metabolic Sync',
      subtitle: 'Deteksi Beban Kerja Miokardium',
      tag: 'Kardiovaskular',
    },
    {
      id: 'rag' as FeatureKey,
      icon: BrainCircuit,
      title: 'Zero-Hallucination Langflow RAG',
      subtitle: 'Guardrails Medis PERKENI/ADA',
      tag: 'AI Multi-Agent',
    },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6] text-slate-900 flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-rose-300/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-red-300/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 1. Header Navigation */}
      <HeaderNav />

      {/* 2. Main Splitter View (Dock Kiri 32% + Live Preview Kanan 68%) */}
      <main className="flex-1 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-2 sm:py-4 flex flex-col justify-center w-full">
        
        {/* Title Block Minimalis */}
        <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Eksplorasi Fitur Klinis{' '}
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              GluPulse
            </span>
          </motion.h1>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
            Pilih modul di sebelah kiri untuk mencoba simulasi langsung (*Live Interactive Preview*).
          </p>
        </div>

        {/* Splitter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-3 sm:mb-4 items-stretch">
          
          {/* SISI KIRI (35% / 4 Kolom): Apple-Style Feature Dock */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 justify-between">
            {featureTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between group ${
                    isActive
                      ? 'bg-white shadow-lg shadow-rose-600/10 border-rose-300 ring-2 ring-rose-500/20'
                      : 'liquid-glass-light border-white/80 hover:border-rose-200 hover:bg-white/90 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-gradient-to-tr from-rose-600 to-red-500 text-white shadow-md shadow-rose-600/25'
                          : 'bg-rose-50 text-rose-700 group-hover:bg-rose-100/80'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className={`text-xs sm:text-sm font-bold leading-tight ${isActive ? 'text-slate-900' : 'text-slate-800'}`}>
                          {tab.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-rose-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </motion.button>
              );
            })}

            {/* Quick Action Mini Pill */}
            <div className="p-3 rounded-2xl liquid-glass-light border border-white/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-semibold text-slate-700">4 Modul Terintegrasi Langflow</span>
              </div>
              <span className="text-[10px] font-mono text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                100% Ready
              </span>
            </div>
          </div>

          {/* SISI KANAN (65% / 8 Kolom): Live Interactive Canvas Preview */}
          <div className="lg:col-span-8 rounded-3xl liquid-glass-light border border-white/90 shadow-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-white/85 backdrop-blur-2xl min-h-[360px]">
            
            <AnimatePresence mode="wait">
              
              {/* PREVIEW 1: TRIASE DARURAT & RULE OF 15 SIMULATOR */}
              {activeTab === 'triase' && (
                <motion.div
                  key="sim-triase"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  <div>
                    {/* Header Preview */}
                    <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-xs">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                            Simulasi Interaktif: Emergency Gatekeeper
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            Geser slider untuk melihat bagaimana AI mendeteksi status risiko secara instan.
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                        Live Simulator
                      </span>
                    </div>

                    {/* Interactive Slider Area */}
                    <div className="pt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">
                          Kadar Glukosa Uji Coba:
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-mono text-3xl font-black text-rose-700">
                            {simGlucose}
                          </span>
                          <span className="text-xs font-medium text-slate-500">mg/dL</span>
                        </div>
                      </div>

                      <input
                        type="range"
                        min="40"
                        max="350"
                        value={simGlucose}
                        onChange={(e) => setSimGlucose(Number(e.target.value))}
                        className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                      />

                      {/* Quick Presets */}
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-[11px] text-slate-400">Preset Uji:</span>
                        {[52, 95, 120, 185, 290].map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setSimGlucose(val)}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold transition cursor-pointer ${
                              simGlucose === val
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-rose-50'
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Status Output Box */}
                    <div className={`mt-4 p-3.5 rounded-2xl border ${triaseResult.color} transition-all duration-300 flex items-start gap-3`}>
                      <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${triaseResult.indicator} animate-pulse`} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold uppercase tracking-wide font-mono">
                            {triaseResult.label}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/80 border border-current">
                            {triaseResult.badge}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed font-medium">
                          {triaseResult.advice}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Standar Triase ADA 2024 Level 1-3</span>
                    <button
                      type="button"
                      onClick={() => navigate('/cek-kesehatan')}
                      className="font-bold text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Coba di Data Anda Sendiri</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PREVIEW 2: SMART NUTRITION & MEAL ENGINE */}
              {activeTab === 'nutrition' && (
                <motion.div
                  key="sim-nutrition"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
                          <Apple className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                            Simulasi: Piring Nutrisi Rendah GI Nusantara
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            Pilih kombinasi pangan untuk melihat estimasi beban glikemik.
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        Low GI Engine
                      </span>
                    </div>

                    {/* Food Selector Chips */}
                    <div className="pt-4 space-y-2.5">
                      <span className="text-xs font-semibold text-slate-700 block">
                        Pilih Menu Pangan Ramah Gula Darah:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: 'Beras Merah Organik', gi: 'Low GI (50)' },
                          { name: 'Nasi Shirataki Konjac', gi: 'Very Low (15)' },
                          { name: 'Tempe Kukus Bacem', gi: 'Low GI (32)' },
                          { name: 'Ikan Kembung Bakar', gi: 'Zero GI (0)' },
                          { name: 'Tumis Bayam Bawang Putih', gi: 'Low GI (15)' },
                          { name: 'Oatmeal & Biji Chia', gi: 'Low GI (42)' },
                        ].map((food) => {
                          const isSel = selectedFoods.includes(food.name);
                          return (
                            <button
                              key={food.name}
                              type="button"
                              onClick={() => {
                                setSelectedFoods((prev) =>
                                  isSel ? prev.filter((f) => f !== food.name) : [...prev, food.name]
                                );
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? 'bg-rose-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-700 hover:bg-rose-50'
                              }`}
                            >
                              <span>{food.name}</span>
                              <span className={`text-[10px] ${isSel ? 'text-rose-200' : 'text-slate-400'}`}>
                                ({food.gi})
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Summary Plate Box */}
                    <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          Total Pilihan Menu: {selectedFoods.length} Jenis
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Stabilisasi Glukosa Terjamin
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        {selectedFoods.length > 0
                          ? `Kombinasi ${selectedFoods.join(', ')} kaya serat larut beta-glukan & protein nabati yang memperlambat penyerapan karbohidrat ke aliran darah.`
                          : 'Silakan pilih minimal 1 menu makanan di atas untuk melihat analisis nutrisi.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Database Pangan Indonesia & PERKENI</span>
                    <button
                      type="button"
                      onClick={() => navigate('/cek-kesehatan')}
                      className="font-bold text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Minta Menu AI Harian</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PREVIEW 3: CARDIO-METABOLIC SYNC */}
              {activeTab === 'cardio' && (
                <motion.div
                  key="sim-cardio"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-xs">
                          <HeartPulse className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                            Monitor Sinkronisasi Kardio-Metabolik
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            Mencegah stres miokardium akibat fluktuasi tajam glukosa darah.
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                        Vascular Protection
                      </span>
                    </div>

                    {/* Visual ECG & Pulse Sync */}
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 flex flex-col justify-between">
                        <span className="text-xs font-bold text-rose-900">Detak Ritme Miokardium</span>
                        <div className="flex items-center justify-between my-2">
                          <Activity className="w-7 h-7 text-rose-600 animate-pulse" />
                          <span className="font-mono text-2xl font-bold text-rose-900">72 <span className="text-xs font-normal">BPM</span></span>
                        </div>
                        <span className="text-[11px] text-rose-700 font-medium">Beban kerja vaskular normal</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                        <span className="text-xs font-bold text-slate-900">Toleransi Olahraga (Exercise Safety)</span>
                        <div className="my-2">
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[85%] rounded-full" />
                          </div>
                        </div>
                        <span className="text-[11px] text-emerald-800 font-semibold">Aman: Jalan cepat / Treadmill 25 mnt</span>
                      </div>
                    </div>

                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                      💡 <strong>Prinsip Klinis:</strong> Lonjakan gula darah &gt;250 mg/dL memicu hiperosmolaritas dan beban kardiak ekstra. GluPulse otomatis membatasi olahraga berat bila glukosa di luar ambang batas aman.
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Evaluasi Keselamatan Latihan Fisik</span>
                    <button
                      type="button"
                      onClick={() => navigate('/cek-kesehatan')}
                      className="font-bold text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Evaluasi Kebugaran Anda</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PREVIEW 4: ZERO-HALLUCINATION LANGFLOW RAG */}
              {activeTab === 'rag' && (
                <motion.div
                  key="sim-rag"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-xs">
                          <BrainCircuit className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                            Arsitektur AI Multi-Agent & RAG Pipeline
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            Ekstraksi dokumen konsensus klinis tanpa halusinasi buatan.
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                        Astra DB RAG
                      </span>
                    </div>

                    {/* Pipeline Visual Nodes */}
                    <div className="pt-4 space-y-2.5">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                          <span className="text-[10px] font-bold text-rose-600 block">Step 01</span>
                          <span className="text-xs font-bold text-slate-900">User Input Parsing</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200">
                          <span className="text-[10px] font-bold text-red-600 block">Step 02</span>
                          <span className="text-xs font-bold text-slate-900">Vector Knowledge</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                          <span className="text-[10px] font-bold text-emerald-600 block">Step 03</span>
                          <span className="text-xs font-bold text-slate-900">Verified Output</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">Knowledge Base Terkoneksi:</span>
                          <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                            Verified Match
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Pedoman Pengelolaan dan Pencegahan Diabetes Melitus Tipe 2 Dewasa di Indonesia (PERKENI) & Standards of Care in Diabetes (ADA).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Flow ID: d7581259-102b-4c0f-ae58-43f2086a9268</span>
                    <button
                      type="button"
                      onClick={() => navigate('/cek-kesehatan')}
                      className="font-bold text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Buka Chat Langflow</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        {/* Compact Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-red-600 text-white shadow-lg shadow-rose-600/20 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold leading-tight">
                Mulai Gunakan Semua Fitur Ini Secara Terpadu
              </h3>
              <p className="text-[11px] text-rose-100 font-normal">
                Buka formulir satu-klik dan asisten AI pintar untuk analisis kondisi Anda.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/cek-kesehatan')}
            className="shrink-0 px-5 py-2 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Buka Cek Kesehatan Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </main>

      {/* 3. Footer Minimalis */}
      <footer className="border-t border-rose-100/80 bg-white/60 backdrop-blur-md py-2 text-[11px] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>© 2026 GluPulse AI. Arsitektur Splitter Dock & Live Interactive Canvas.</span>
          <span className="text-slate-400">100vh Responsif Tanpa Scroll</span>
        </div>
      </footer>

    </div>
  );
};
