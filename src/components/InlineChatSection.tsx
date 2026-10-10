import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Sliders,
  AlertCircle,
  AlertTriangle,
  Utensils,
  Check,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { langflowService } from '../services/langflowService';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

// Preset skenario siap klik dengan palet Cardiac Rose / Ruby Red
const presetScenarios = [
  {
    id: 'hypo-alert',
    icon: AlertCircle,
    iconColor: 'text-red-600',
    title: 'Hipoglikemia Akut (52 mg/dL)',
    subtitle: 'Pusing, keringat dingin, gemetar & rencana treadmill',
    prompt:
      'Gula darah saya dicek barusan 52 mg/dL. Kepala pusing banget, keringat dingin, dan tangan gemetar. Apakah boleh saya lanjut treadmill 20 menit sore ini? Berikan langkah darurat yang harus saya lakukan.',
    category: 'Darurat (Hypo)',
    color: 'border-red-200/90 bg-red-50/60 hover:bg-red-50 text-red-950',
    badgeColor: 'bg-red-600 text-white',
    btnColor: 'hover:bg-red-600 hover:text-white',
  },
  {
    id: 'fbs-breakfast',
    icon: Utensils,
    iconColor: 'text-rose-600',
    title: 'GDP 110 mg/dL & Ide Sarapan',
    subtitle: 'Rekomendasi sarapan aman & aktivitas fisik ringan',
    prompt:
      'Kadar gula darah puasa saya pagi ini 110 mg/dL. Tolong buatkan ide sarapan yang aman dari database klinis dan rekomendasi aktivitas fisik ringan untuk hari ini.',
    category: 'Nutrisi & Olahraga',
    color: 'border-rose-200/90 bg-rose-50/60 hover:bg-rose-50 text-rose-950',
    badgeColor: 'bg-rose-600 text-white',
    btnColor: 'hover:bg-rose-600 hover:text-white',
  },
  {
    id: 'hyper-lunch',
    icon: AlertTriangle,
    iconColor: 'text-amber-600',
    title: 'GDS 290 mg/dL & Menu Siang',
    subtitle: 'Lemas sekali, sangat haus, butuh menu makan siang',
    prompt:
      'Hasil cek gula darah sewaktu saya 290 mg/dL, badan lemas sekali dan sangat haus. Boleh minta rekomendasi menu makan siang yang aman dan tindakan penanganan yang tepat?',
    category: 'Hiperglikemia',
    color: 'border-amber-200/90 bg-amber-50/60 hover:bg-amber-50 text-amber-950',
    badgeColor: 'bg-amber-600 text-white',
    btnColor: 'hover:bg-amber-600 hover:text-white',
  },
];

const symptomList = [
  'Pusing / Sakit Kepala',
  'Keringat Dingin',
  'Tangan Gemetar / Tremor',
  'Badan Lemas / Lelah',
  'Sangat Haus (Polidipsia)',
  'Sering Buang Air Kecil',
  'Pandangan Kabur',
  'Mual / Gelisah',
];

const goalOptions = [
  'Evaluasi keselamatan olahraga / aktivitas fisik',
  'Rekomendasi menu makanan (sarapan/siang/malam)',
  'Langkah penanganan segera / protokol darurat',
  'Analisis risiko klinis & edukasi glukosa',
];

export const InlineChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Halo! Saya asisten klinis GluPulse AI. Anda dapat memilih salah satu skenario kasus di atas, mengisi formulir data glukosa (pilihan gejala), atau langsung mengetik pesan di bawah.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mode Form Tekan-Tekan (Default: form)
  const [activeTab, setActiveTab] = useState<'form' | 'preset'>('form');
  const [testType, setTestType] = useState<'Sewaktu (GDS)' | 'Puasa (GDP)' | '2 Jam PP (GD2PP)'>('Sewaktu (GDS)');
  const [glucoseVal, setGlucoseVal] = useState<number>(110);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string>(goalOptions[0]);
  const [additionalNote, setAdditionalNote] = useState<string>('');

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const scrollToChatBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Avoid scrolling on initial mount so page remains at top
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToChatBottom();
  }, [messages, isLoading]);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await langflowService.runFlow({
        inputValue: text,
        inputType: 'chat',
        outputType: 'chat',
      });

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text || 'Maaf, tidak ada respons yang dihasilkan.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const botErrorMessage: Message = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: `Terjadi kendala koneksi: ${error.message || 'Gagal memproses data.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handler Generate dari Form Tekan-Tekan
  const handleGenerateFromForm = () => {
    const symptomsText = selectedSymptoms.length > 0 ? selectedSymptoms.join(', ') : 'tidak ada gejala khas';
    const noteText = additionalNote.trim() ? ` Catatan tambahan: ${additionalNote.trim()}.` : '';

    const generatedPrompt = `Kadar gula darah saya dicek dengan tipe ${testType} sebesar ${glucoseVal} mg/dL. Gejala yang dirasakan: ${symptomsText}.${noteText} Mohon berikan: ${selectedGoal}.`;

    handleSendMessage(generatedPrompt);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Percakapan telah direset. Silakan pilih skenario atau masukkan data klinis baru.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <section id="chat-section" className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto space-y-6">
        
        {/* PANEL INPUT CEPAT & FORM TEKAN-TEKAN (CLINICAL QUICK BUILDER) */}
        <div className="rounded-[36px] bg-white border border-rose-100/90 shadow-[0_20px_60px_-15px_rgba(225,29,72,0.06)] p-6 sm:p-8">
          
          {/* Header Tab Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5 text-rose-600" />
                <span>Clinical Data Input & Scenario Center</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
                Form Input Klinis & Pilihan Cepat
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans">
                Tekan tombol opsi di bawah untuk menginput data gula darah dan gejala Anda secara instan.
              </p>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200/70 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'form'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-rose-700'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Form Tekan Pilihan</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preset')}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'preset'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-rose-700'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>1-Klik Skenario Kasus</span>
              </button>
            </div>
          </div>

          {/* TAB 1: 1-Klik Preset Skenario */}
          {activeTab === 'preset' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6"
            >
              {presetScenarios.map((item) => {
                const ScenarioIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-[24px] border ${item.color} transition-all duration-200 hover:shadow-md flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                          {item.category}
                        </span>
                        <ScenarioIcon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <ScenarioIcon className={`w-4 h-4 shrink-0 ${item.iconColor}`} />
                        <h3 className="font-display font-semibold text-[15px] text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4">
                        {item.subtitle}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSendMessage(item.prompt)}
                      disabled={isLoading}
                      className={`w-full mt-2 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 ${item.btnColor}`}
                    >
                      <span>Jalankan Skenario Ini</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* TAB 2: Form Tekan-Tekan Interaktif */}
          {activeTab === 'form' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-6 space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Bagian 1: Tipe Tes & Nilai Glukosa */}
                <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    1. Pengukuran Gula Darah
                  </span>
                  
                  {/* Tipe Tes */}
                  <div className="flex flex-wrap gap-2">
                    {(['Sewaktu (GDS)', 'Puasa (GDP)', '2 Jam PP (GD2PP)'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTestType(t)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          testType === t
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-400 hover:text-rose-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {/* Slider & Quick Val Buttons */}
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Nilai Kadar Glukosa:</span>
                      <span className="font-mono text-2xl font-extrabold text-rose-700">
                        {glucoseVal} <span className="text-xs font-normal text-slate-500">mg/dL</span>
                      </span>
                    </div>

                    <input
                      type="range"
                      min="40"
                      max="350"
                      value={glucoseVal}
                      onChange={(e) => setGlucoseVal(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                    />

                    {/* Quick Value Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[11px] text-slate-400">Pilihan cepat:</span>
                      {[52, 95, 110, 160, 290].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setGlucoseVal(val)}
                          className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold transition cursor-pointer ${
                            glucoseVal === val
                              ? 'bg-rose-600 text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bagian 2: Pilihan Kebutuhan Rekomendasi */}
                <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    2. Apa yang Ingin Anda Tanyakan / Butuhkan?
                  </span>

                  <div className="space-y-2">
                    {goalOptions.map((goal) => (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => setSelectedGoal(goal)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          selectedGoal === goal
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-400 hover:bg-rose-50/50'
                        }`}
                      >
                        <span>{goal}</span>
                        {selectedGoal === goal && <Check className="w-4 h-4 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bagian 3: Gejala Klinis (Multi-Select Chips) */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    3. Gejala yang Sedang Dirasakan (Klik untuk Memilih):
                  </span>
                  {selectedSymptoms.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedSymptoms([])}
                      className="text-[11px] text-red-600 hover:underline cursor-pointer"
                    >
                      Reset Gejala ({selectedSymptoms.length})
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {symptomList.map((symptom) => {
                    const isSelected = selectedSymptoms.includes(symptom);
                    return (
                      <button
                        key={symptom}
                        type="button"
                        onClick={() => toggleSymptom(symptom)}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-rose-600 text-white shadow-xs scale-105'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-400 hover:bg-rose-50/50'
                        }`}
                      >
                        <span>{symptom}</span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>

                {/* Optional Note */}
                <div className="pt-2">
                  <input
                    type="text"
                    value={additionalNote}
                    onChange={(e) => setAdditionalNote(e.target.value)}
                    placeholder="Catatan tambahan opsional (misal: mau olahraga treadmill 20 menit, riwayat obat metformin, dll)..."
                    className="w-full text-xs bg-white border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-rose-500 font-sans"
                  />
                </div>
              </div>

              {/* Submit Button Form Tekan-Tekan */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleGenerateFromForm}
                  disabled={isLoading}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 text-white text-xs font-bold tracking-wide shadow-md shadow-rose-600/20 hover:shadow-lg hover:shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Kirim Data ke AI & Dapatkan Rekomendasi</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* INTERFACE CHATBOX & RESPONS AI */}
        <div className="rounded-[36px] bg-white border border-rose-100/90 shadow-[0_30px_90px_-20px_rgba(225,29,72,0.06)] overflow-hidden flex flex-col h-[650px]">
          
          {/* Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold text-[16px] text-slate-900">
                    GluPulse Clinical Assistant
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Langflow Ready
                  </span>
                </div>
                <p className="text-[12px] text-slate-500 font-sans">
                  Sistem Triase & Rekomendasi Klinis Glukosa Terpadu
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetChat}
              title="Reset Percakapan"
              className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-600 hover:text-rose-700 hover:border-rose-300 transition-all shadow-xs cursor-pointer flex items-center gap-1 text-xs font-semibold px-3.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Chat</span>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4 bg-gradient-to-b from-rose-50/20 to-white">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-start gap-3 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-rose-50 border border-rose-200 text-rose-700 shadow-xs'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-[22px] px-5 py-4 text-[14px] leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-rose-600 text-white rounded-tr-xs'
                        : 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-xs'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="text-[14px] leading-relaxed text-slate-800">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ node, ...props }) => (
                              <h1 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2 pb-1 border-b border-slate-100" {...props} />
                            ),
                            h2: ({ node, ...props }) => (
                              <h2 className="text-sm sm:text-base font-bold text-slate-900 mt-3.5 mb-2" {...props} />
                            ),
                            h3: ({ node, ...props }) => (
                              <h3 className="text-xs sm:text-sm font-bold text-rose-700 mt-3 mb-1.5 flex items-center gap-1.5" {...props} />
                            ),
                            p: ({ node, ...props }) => <p className="mb-2 leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2 space-y-1 text-slate-700" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-2 space-y-1 text-slate-700" {...props} />,
                            li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-3 border-slate-200" {...props} />,
                            blockquote: ({ node, ...props }) => (
                              <blockquote className="border-l-4 border-rose-500 pl-3 italic my-2.5 text-slate-700 bg-rose-50/70 py-1.5 rounded-r-lg" {...props} />
                            ),
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    <span
                      className={`block text-[10px] mt-2 font-mono ${
                        msg.sender === 'user' ? 'text-rose-100 text-right' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center text-xs shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200/70 rounded-[22px] rounded-tl-xs px-5 py-3.5 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-xs text-slate-500 ml-2 font-medium">Menganalisis protokol klinis...</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Manual Input Bar Alternatif */}
          <div className="p-4 sm:p-6 bg-white border-t border-slate-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-full p-1.5 pl-5 focus-within:border-rose-500 focus-within:bg-white transition-all shadow-xs"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Atau ketik pertanyaan manual bebas di sini..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-[14px] text-slate-800 placeholder-slate-400 outline-none font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-all cursor-pointer shadow-sm shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
