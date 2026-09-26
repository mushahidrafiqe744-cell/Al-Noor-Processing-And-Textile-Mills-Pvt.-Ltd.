import React, { useState, useEffect } from 'react';
import { useApp, PageRoute } from '../../context/AppContext';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPage, navigate, openQuoteModal, settings, isAdminLoggedIn } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Products', route: 'products' },
    { label: 'Production & Facilities', route: 'production' },
    { label: 'Quality', route: 'quality' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNav = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar (B2B Contact & Trust Bar) */}
      <div className="bg-[#070D1E] text-slate-300 text-xs border-b border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Chak No. 07 JB, Sargodha Road, Faisalabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <a href={`tel:${settings.primaryPhone}`} className="hover:text-white transition-colors">
                {settings.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <a href={`mailto:${settings.primaryEmail}`} className="hover:text-white transition-colors">
                {settings.primaryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ASTM 4-Point Standardized Processing</span>
            </span>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => handleNav('admin')}
              className="flex items-center gap-1 text-slate-400 hover:text-[#D4AF37] transition-colors"
              title="Admin Management Portal"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'Admin Panel' : 'Staff Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3'
            : 'bg-[#0B192C] border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Logo Emblem */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#12243F] to-[#070D1E] border border-[#D4AF37]/40 flex items-center justify-center p-1.5 shadow-md shadow-black/20 group-hover:border-[#D4AF37] transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#D4AF37" />
                <circle cx="50" cy="32" r="4.5" fill="#FFFFFF" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold font-brand tracking-tight text-white group-hover:text-amber-100 transition-colors">
                AL-NOOR <span className="text-[#D4AF37]">TEXTILE MILLS</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 hidden sm:block">
                Processing & Finishing (Pvt.) Ltd.
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map(link => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all py-1 border-b-2 ${
                    isActive
                      ? 'text-[#D4AF37] border-[#D4AF37]'
                      : 'text-slate-300 border-transparent hover:text-white hover:border-slate-500'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded-md text-[11px] font-bold text-slate-950 gold-gradient-bg whitespace-nowrap"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#0B192C] border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#12243F] border border-[#D4AF37] flex items-center justify-center p-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#D4AF37" />
                    </svg>
                  </div>
                  <span className="font-bold text-white text-sm">AL-NOOR TEXTILE</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <div className="py-6 flex flex-col gap-1">
                {navLinks.map(link => {
                  const isActive = currentPage === link.route;
                  return (
                    <button
                      key={link.route}
                      onClick={() => handleNav(link.route)}
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-[#12243F] text-[#D4AF37] font-semibold border-l-4 border-[#D4AF37]'
                          : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </button>
                  );
                })}

                <button
                  onClick={() => handleNav('admin')}
                  className="flex items-center justify-between px-3 py-3 mt-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800/40 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Admin Management
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Drawer Footer CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg text-center shadow-md shadow-[#D4AF37]/20"
              >
                Get a Quote
              </button>
              <div className="text-[11px] text-slate-400 text-center">
                <span>Chak No. 07 JB, Sargodha Road, Faisalabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
