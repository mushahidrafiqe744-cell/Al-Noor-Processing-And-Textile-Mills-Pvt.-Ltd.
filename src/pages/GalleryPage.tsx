import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery, openLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Factory', 'Machines', 'Production', 'Team', 'Fabrics'];

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') return gallery;
    return gallery.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());
  }, [gallery, activeCategory]);

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Visual Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Factory & Mill Gallery
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Explore our production machinery, processing floors, testing labs, finished rolls warehouse, and skilled team at Sargodha Road, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <div className="bg-white border-b border-primary/10 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#063F3A] text-[#A7E85A] shadow-sm'
                    : 'bg-[#F6F5EF] text-[#123C38] hover:bg-[#F6F5EF]/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden md:block text-xs text-[#123C38]/60 font-semibold">
            Click any photo for high-resolution inspection
          </div>
        </div>
      </div>

      {/* 3. Masonry / Responsive Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox({ url: item.image, title: item.title, category: item.category, description: item.description })}
              className="group relative bg-[#063F3A] rounded overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063F3A]/90 via-[#063F3A]/25 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-[#063F3A]/95 text-[#A7E85A] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#A7E85A] text-[#063F3A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="text-sm font-bold font-brand text-white group-hover:text-[#A7E85A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#F6F5EF]/80 line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
