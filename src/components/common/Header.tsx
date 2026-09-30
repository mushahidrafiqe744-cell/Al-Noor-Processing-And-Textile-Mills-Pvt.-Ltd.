import React, { useState, useEffect } from 'react';
import { useApp, PageRoute } from '../../context/AppContext';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Lock,
  ShieldCheck
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
    { label: 'Processing', route: 'services' },
    { label: 'Products', route: 'products' },
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
      {/* 1. SLIM TOP INFORMATION BAR */}
      <div className="bg-[#042F2B] text-[#F6F5EF]/85 text-[11px] border-b border-primary/20 hidden lg:block py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A7E85A]" />
              <span>Chak No. 7-JB, Sargodha Road, Faisalabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#A7E85A]" />
              <a href={`tel:${settings.primaryPhone}`} className="hover:text-white transition-colors font-mono">
                {settings.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#A7E85A]" />
              <a href={`mailto:${settings.primaryEmail}`} className="hover:text-white transition-colors">
                {settings.primaryEmail}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A7E85A]" />
              <span>{settings.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C8A95A]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A7E85A]" />
              <span>B2B Global Standards</span>
            </span>
            <span className="text-[#F6F5EF]/30">|</span>
            <button
              onClick={() => handleNav('admin')}
              className="flex items-center gap-1 text-[#F6F5EF]/70 hover:text-[#A7E85A] transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'Admin Active' : 'Staff Login'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (Zone 1 - Zone 2 - Zone 3) */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#063F3A]/95 backdrop-blur-md shadow-xl border-b border-primary/30 py-3'
            : 'bg-[#063F3A] border-b border-primary/20 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Emblem */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Logo Emblem - Dark Forest Green & Muted Gold Accent */}
            <div className="w-10 h-10 rounded bg-[#042F2B] border border-[#C8A95A]/30 flex items-center justify-center p-1.5 shadow-inner group-hover:border-[#A7E85A]/50 transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#C8A95A" />
                <circle cx="50" cy="32" r="4.5" fill="#A7E85A" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-brand tracking-wider text-white uppercase leading-none group-hover:text-[#A7E85A] transition-colors">
                AL-NOOR <span className="text-[#C8A95A]">TEXTILE MILLS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#F6F5EF]/60 leading-none mt-1">
                Processing & Finishing (Pvt.) Ltd.
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all py-1.5 border-b-2 hover:text-[#A7E85A] ${
                    isActive
                      ? 'text-[#A7E85A] border-[#A7E85A]'
                      : 'text-[#F6F5EF]/85 border-transparent hover:border-[#A7E85A]/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: B2B Action Point */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#A7E85A]/10 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
            </button>
          </div>

          {/* Mobile Menu Action Bar */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-[#F6F5EF] hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#063F3A]/80 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#042F2B] border-l border-primary/20 p-6 flex flex-col justify-between shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center p-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#C8A95A" />
                    </svg>
                  </div>
                  <span className="font-bold text-white text-xs tracking-wider uppercase">AL-NOOR TEXTILE</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#F6F5EF]/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 flex flex-col gap-1.5">
                {navLinks.map(link => {
                  const isActive = currentPage === link.route;
                  return (
                    <button
                      key={link.route}
                      onClick={() => handleNav(link.route)}
                      className={`flex items-center justify-between px-3 py-3 rounded text-sm font-semibold transition-colors text-left ${
                        isActive
                          ? 'bg-[#063F3A] text-[#A7E85A] border-l-4 border-[#A7E85A]'
                          : 'text-[#F6F5EF]/85 hover:bg-[#063F3A]/50 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#A7E85A]" />
                    </button>
                  );
                })}

                <button
                  onClick={() => handleNav('admin')}
                  className="flex items-center gap-2 px-3 py-3 mt-4 text-xs text-[#F6F5EF]/60 hover:text-white"
                >
                  <Lock className="w-3.5 h-3.5 text-[#C8A95A]" />
                  <span>Admin Panel Access</span>
                </button>
              </div>
            </div>

            {/* Mobile Contact Information */}
            <div className="pt-6 border-t border-primary/20 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] text-center shadow-lg shadow-[#A7E85A]/10"
              >
                Request a Quote
              </button>
              <div className="text-[10px] text-[#F6F5EF]/50 text-center leading-relaxed">
                <span>Chak No. 7-JB, Sargodha Road, Faisalabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
