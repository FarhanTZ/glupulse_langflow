import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HealthCheckPage } from './pages/HealthCheckPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Halaman Beranda (100vh Liquid Glass Hero + 3D Ruby Heart) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />

        {/* Halaman Tentang Aplikasi (Arsitektur Klinis & RAG) */}
        <Route path="/tentang" element={<AboutPage />} />

        {/* Halaman Fitur Klinis (Gatekeeper, Nutrition, Rules) */}
        <Route path="/fitur" element={<FeaturesPage />} />

        {/* Halaman Cek Kesehatan (Formulir Satu Klik & Langflow Assistant) */}
        <Route path="/cek-kesehatan" element={<HealthCheckPage />} />

        {/* Fallback ke beranda jika rute tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
