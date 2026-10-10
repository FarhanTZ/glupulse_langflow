import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ArrowDown } from 'lucide-react';

interface ModernHeroProps {
  onContactClick?: () => void;
}

export const ModernHeroSection: React.FC<ModernHeroProps> = ({ onContactClick }) => {
  const scrollToChat = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8">
      
      {/* 2. Main Hero Container */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/60 shadow-[0_40px_100px_-20px_rgba(13,148,136,0.05)] overflow-hidden h-[600px] flex flex-col">
        
        {/* Background Video Layer - No overlays */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>

        {/* 3. Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl flex flex-col items-start"
          >
            {/* Headline GluPulse */}
            <h1
              className="font-display text-[40px] md:text-[54px] font-semibold leading-[1.1] tracking-tight text-slate-900"
              dangerouslySetInnerHTML={{ __html: 'GluPulse AI: Presisi Klinis<br />Manajemen Glukosa Darah' }}
            />

            {/* Subheadline GluPulse */}
            <p className="mt-5 max-w-xl font-sans text-[14px] md:text-[15px] leading-relaxed text-slate-600">
              Sistem pendukung keputusan klinis cerdas untuk triase risiko gula darah, analisis gejala darurat, dan rekomendasi nutrisi serta aktivitas fisik berbasis protokol medis terpercaya.
            </p>

            {/* CTA Button (Buka Cek Kesehatan) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToChat}
              className="mt-8 px-8 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full text-[14px] font-semibold tracking-wide shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Mulai Cek Kesehatan AI</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* 4. Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center bg-white/95 backdrop-blur-2xl px-2 py-1.5 rounded-full shadow-[0_12px_40px_rgba(13,148,136,0.08)] border border-teal-100/80"
          >
            {/* Left Circular Logo with Sparkles Icon */}
            <div className="w-9 h-9 bg-teal-50 border border-teal-200/60 shadow-xs rounded-full flex items-center justify-center text-teal-700 select-none">
              <Sparkles className="w-4 h-4 text-teal-600" />
            </div>

            {/* Middle Nav Links */}
            <div className="flex items-center px-2 space-x-1">
              <button
                type="button"
                onClick={scrollToChat}
                className="px-3.5 py-2 text-[12px] font-semibold text-slate-600 hover:text-teal-700 transition-colors cursor-pointer"
              >
                Fitur Klinis
              </button>
              <button
                type="button"
                onClick={scrollToChat}
                className="px-3.5 py-2 text-[12px] font-semibold text-slate-600 hover:text-teal-700 transition-colors cursor-pointer"
              >
                Panduan Medis
              </button>
            </div>

            {/* Right Action Button */}
            <button
              type="button"
              onClick={scrollToChat}
              className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-slate-800 border border-slate-200/80 shadow-xs hover:border-teal-400 hover:text-teal-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Konsultasi Klinis</span>
              <ChevronRight className="w-3.5 h-3.5 text-teal-600" />
            </button>
          </motion.nav>
        </div>

      </div>

    </section>
  );
};
