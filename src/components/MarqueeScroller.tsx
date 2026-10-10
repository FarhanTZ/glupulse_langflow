import React from 'react';

interface LogoItem {
  name: string;
  src: string;
  gradient: string;
}

const logos: LogoItem[] = [
  {
    name: 'Procure',
    src: 'https://svgl.app/library/procure.svg',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  },
  {
    name: 'Shopify',
    src: 'https://svgl.app/library/shopify.svg',
    gradient: 'linear-gradient(135deg, #a3e635 0%, #65a30d 100%)',
  },
  {
    name: 'Blender',
    src: 'https://svgl.app/library/blender.svg',
    gradient: 'linear-gradient(135deg, #f97316 0%, #2563eb 100%)',
  },
  {
    name: 'Figma',
    src: 'https://svgl.app/library/figma.svg',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  },
  {
    name: 'Spotify',
    src: 'https://svgl.app/library/spotify.svg',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)',
  },
  {
    name: 'Lottielab',
    src: 'https://svgl.app/library/lottielab.svg',
    gradient: 'linear-gradient(135deg, #eab308 0%, #10b981 100%)',
  },
  {
    name: 'Google Cloud',
    src: 'https://svgl.app/library/google-cloud.svg',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
  },
  {
    name: 'Bing',
    src: 'https://svgl.app/library/bing.svg',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0d9488 100%)',
  },
];

export const MarqueeScroller: React.FC = () => {
  // Render array twice to guarantee continuous seamless scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full mt-10 overflow-hidden marquee-mask py-4 select-none">
      <div className="animate-marquee flex items-center gap-6">
        {duplicatedLogos.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
          >
            {/* Gradient background with scale & opacity transition on group-hover */}
            <div
              className="absolute inset-0 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 rounded-full"
              style={{ background: item.gradient }}
            />
            
            {/* Logo image with brightness/invert effect on hover */}
            <img
              src={item.src}
              alt={item.name}
              loading="lazy"
              className="w-8 h-8 object-contain relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
