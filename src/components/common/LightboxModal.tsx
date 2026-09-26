import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { lightboxImage, closeLightbox } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#0B192C] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#070D1E] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-[#12243F] border border-[#D4AF37]/40 text-[#D4AF37] font-semibold">
              {lightboxImage.category || 'Al-Noor Mill Asset'}
            </span>
            <h4 className="text-sm font-semibold text-white truncate max-w-md">
              {lightboxImage.title}
            </h4>
          </div>

          <button
            onClick={closeLightbox}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative flex-1 bg-black/50 flex items-center justify-center min-h-[300px] max-h-[70vh] overflow-hidden">
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[70vh] object-contain select-none"
            onError={e => {
              // Fallback
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%230B192C"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D4AF37" font-family="sans-serif" font-size="20">Al-Noor Textile Mills</text></svg>';
            }}
          />
        </div>

        {/* Description Footer */}
        {lightboxImage.description && (
          <div className="px-6 py-4 bg-[#070D1E] border-t border-slate-800 text-xs text-slate-300">
            <p>{lightboxImage.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
