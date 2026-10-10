import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CircleUserRound, Menu, X, Sparkles } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-30 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20 w-full pointer-events-auto">
      
      {/* Left: Custom Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-md shadow-rose-600/25 group-hover:scale-105 transition-all">
          <Activity className="w-5 h-5" />
        </div>
        <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
          GluPulse
        </span>
      </Link>

      {/* Center: Liquid Glass Nav Pill (Desktop Only) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 px-8 py-3 rounded-full liquid-glass-light shadow-sm transition-all duration-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-semibold transition-colors cursor-pointer ${
              isActive ? 'text-rose-700 font-bold' : 'text-slate-600 hover:text-rose-700'
            }`
          }
        >
          Beranda
        </NavLink>
        <NavLink
          to="/tentang"
          className={({ isActive }) =>
            `text-sm font-semibold transition-colors cursor-pointer ${
              isActive ? 'text-rose-700 font-bold' : 'text-slate-600 hover:text-rose-700'
            }`
          }
        >
          Tentang Aplikasi
        </NavLink>
        <NavLink
          to="/fitur"
          className={({ isActive }) =>
            `text-sm font-semibold transition-colors cursor-pointer ${
              isActive ? 'text-rose-700 font-bold' : 'text-slate-600 hover:text-rose-700'
            }`
          }
        >
          Fitur Klinis
        </NavLink>
        <NavLink
          to="/cek-kesehatan"
          className={({ isActive }) =>
            `text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 px-3.5 py-1 rounded-full border shadow-2xs ${
              isActive
                ? 'bg-rose-600 text-white border-rose-600 shadow-rose-600/20'
                : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100/70'
            }`
          }
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cek Kesehatan</span>
        </NavLink>
      </div>

      {/* Right: Liquid Glass Circle (Desktop Only) */}
      <div className="hidden md:flex">
        <Link
          to="/cek-kesehatan"
          title="Mulai Cek Kesehatan"
          className="h-10 w-10 rounded-full liquid-glass-light flex items-center justify-center text-slate-700 hover:text-rose-700 hover:scale-105 transition-all cursor-pointer shadow-xs"
        >
          <CircleUserRound className="h-5 w-5" strokeWidth={1.5} />
        </Link>
      </div>

      {/* Right: Mobile Menu Toggle Button */}
      <div className="flex md:hidden z-50">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative h-10 w-10 rounded-full liquid-glass-light flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
        >
          <Menu
            className={`h-5 w-5 absolute transition-all duration-300 ${
              menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            className={`h-5 w-5 absolute transition-all duration-300 ${
              menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8 px-6"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-rose-700 hover:text-rose-900 transition-colors"
              >
                Beranda
              </Link>
              <Link
                to="/tentang"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-slate-600 hover:text-rose-700 transition-colors"
              >
                Tentang Aplikasi
              </Link>
              <Link
                to="/fitur"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-slate-600 hover:text-rose-700 transition-colors"
              >
                Fitur Klinis
              </Link>
              <Link
                to="/cek-kesehatan"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-rose-700 hover:text-rose-900 transition-colors"
              >
                Cek Kesehatan AI
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};
