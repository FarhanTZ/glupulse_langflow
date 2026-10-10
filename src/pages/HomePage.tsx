import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeartPulse3D } from '../components/3d/HeartPulse3D';
import { HeaderNav } from '../components/HeaderNav';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen min-h-[640px] max-h-screen overflow-hidden select-none flex flex-col justify-between bg-gradient-to-br from-[#fff1f2] via-[#fafafa] to-[#ffe4e6]">
      
      {/* 1. Interactive 3D Heart Pulse Background Canvas (Ruby Red) */}
      <HeartPulse3D />

      {/* Fresh Rose-to-White Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-16 w-[550px] h-[550px] bg-rose-300/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-12 right-16 w-[500px] h-[500px] bg-red-300/15 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* 2. Top Navigation Bar */}
      <HeaderNav />

      {/* 3. Main Hero Content (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-5 sm:px-8 md:px-16 lg:px-20 pb-8 sm:pb-12 pointer-events-none">
        {/* Top Text Block */}
        <div className="mt-14 sm:mt-20 md:mt-24 lg:mt-28 max-w-2xl pointer-events-auto">
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-slate-900 tracking-[-0.05em] font-sans"
          >
            Heal Your Body<br />
            Naturally
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-light text-slate-600 leading-relaxed max-w-xl"
          >
            Holistic wellness. Transformative clinical results.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/cek-kesehatan')}
            className="rounded-full px-7 py-3.5 sm:px-8 sm:py-4 mt-6 sm:mt-8 text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-700 hover:to-red-700 shadow-lg shadow-rose-600/25 flex items-center gap-2.5 cursor-pointer transition-all duration-300 group"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Stats Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-end gap-6 sm:gap-10 md:gap-16 pt-8 pointer-events-auto"
        >
          {/* Stat 1: 9-dot Triangular Pattern Icon */}
          <div className="flex items-start gap-3">
            <div className="relative w-5 h-5 mt-1 shrink-0">
              <span className="absolute top-0 left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[6px] left-[4.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[6px] left-[12.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[1px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[12px] left-[16px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[4.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[12.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
              <span className="absolute top-[17px] left-[8.5px] w-[2.5px] h-[2.5px] bg-rose-600 rounded-xs" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight font-sans">
                48 Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                Initial Consultation
              </div>
            </div>
          </div>

          {/* Stat 2: 3x3 Checkerboard Grid Icon */}
          <div className="flex items-start gap-3">
            <div className="grid grid-cols-3 gap-[2.5px] w-5 h-5 mt-1 shrink-0">
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-100" />
              <span className="w-1 h-1 rounded-[1px] bg-rose-600" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight font-sans">
                Initial Consultation
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                Healing Sessions
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
};
