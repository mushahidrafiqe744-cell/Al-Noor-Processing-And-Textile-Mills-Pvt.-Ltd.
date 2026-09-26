import React from 'react';
import { useApp, PageRoute } from '../../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, navigate, openQuoteModal } = useApp();

  const handleNav = (route: PageRoute) => {
    navigate(route);
  };

  return (
    <footer className="bg-[#070D1E] text-slate-400 border-t border-slate-800 relative z-10">
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-[#0B192C] via-[#12243F] to-[#0B192C] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white font-brand">
              Ready to Upgrade Your Fabric Processing Standards?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Contact our technical team in Faisalabad for customized dyeing formulations, stenter finishing, and bulk processing schedules.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap cursor-pointer"
            >
              Request a Quote
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#12243F] border border-[#D4AF37] flex items-center justify-center p-1.5 shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#D4AF37" />
                  <circle cx="50" cy="32" r="4.5" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="text-base font-bold text-white font-brand">
                AL-NOOR <span className="text-[#D4AF37]">TEXTILE MILLS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {settings.legalName} is a premier processing, dyeing, and finishing facility located on Sargodha Road, Faisalabad, serving Pakistan’s export and domestic textile sectors with advanced machinery and stringent quality compliance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>ISO & ASTM 4-Point Audited Process</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> About Us & History
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Textile Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Fabric Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('production')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Production & Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quality')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Quality Assurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Plant Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" /> Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Processing Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Continuous Pad-Steam Reactive Dyeing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Chainless Bleaching & Mercerizing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Multi-Chamber Stenter Finishing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Compressive Sanforizing (&lt;2% Shrinkage)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Wide-Width Home Textile Processing (up to 126")</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Computerized Spectrophotometer QA Lab</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Mill Address & Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{settings.address}, {settings.city}, {settings.country}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${settings.primaryPhone}`} className="hover:text-white transition-colors">
                {settings.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${settings.secondaryPhone}`} className="hover:text-white transition-colors">
                {settings.secondaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`mailto:${settings.primaryEmail}`} className="hover:text-white transition-colors">
                {settings.primaryEmail}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{settings.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {settings.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Sargodha Road, Faisalabad, Punjab, Pakistan</span>
            <button
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Management</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
