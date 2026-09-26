import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { GalleryItem } from '../types';
import { ZoomIn, Filter, Image as ImageIcon } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery, openLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Factory', 'Machines', 'Production', 'Team', 'Fabrics'];

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') return gallery;
    return gallery.filter(item => item.category === activeCategory);
  }, [gallery, activeCategory]);

  return (
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. Page Banner */}
      <section className="bg-[#070D1E] text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Visual Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              Factory & Mill Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our production machinery, processing floors, testing labs, finished rolls warehouse, and skilled team at Sargodha Road, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B192C] text-[#D4AF37] shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden sm:block text-xs text-slate-400 font-medium">
            Click any photo for high-resolution inspection
          </div>
        </div>
      </div>

      {/* 3. Masonry / Responsive Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox({ url: item.image, title: item.title, category: item.category, description: item.description })}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E]/90 via-[#070D1E]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B192C]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                  {item.category}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D4AF37] text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <h3 className="text-sm font-bold font-brand text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
