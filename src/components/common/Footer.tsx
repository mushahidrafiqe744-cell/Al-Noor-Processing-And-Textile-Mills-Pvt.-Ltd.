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
    <footer className="bg-[#042F2B] text-[#F6F5EF]/80 border-t border-primary/20 relative z-10">
      {/* Pre-Footer Action Banner (B2B / EXPORT CTA) */}
      <div className="bg-[#063F3A] border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-brand leading-snug">
              Looking for a Reliable Textile Processing Partner?
            </h3>
            <p className="text-sm text-[#F6F5EF]/85 mt-2">
              Let's discuss your textile processing requirements. Contact our technical team in Faisalabad for customized dyeing formulations, stenter finishing, and bulk processing schedules.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#A7E85A]/10 whitespace-nowrap cursor-pointer"
            >
              Request a Quote →
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#063F3A] border border-[#F6F5EF]/20 hover:bg-[#042F2B] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#A7E85A]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center p-1.5 shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 75 L50 25 L80 75 L65 75 L50 48 L35 75 Z" fill="#C8A95A" />
                </svg>
              </div>
              <span className="text-base font-bold text-white font-brand">
                AL-NOOR <span className="text-[#C8A95A]">TEXTILE MILLS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#F6F5EF]/70">
              Al-Noor Processing & Textile Mills (Pvt.) Ltd. is a leading B2B processing, dyeing, and finishing facility located on Sargodha Road, Faisalabad, serving Pakistan’s export and domestic textile sectors with advanced machinery and stringent quality compliance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C8A95A] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#A7E85A]" />
              <span>ISO & ASTM 4-Point Audited Process</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#A7E85A] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Processing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quality')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Quality
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#A7E85A] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A95A]" /> Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Processing Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#A7E85A] pl-2.5">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Continuous Pad-Steam Reactive Dyeing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Chainless Bleaching & Mercerizing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Multi-Chamber Stenter Finishing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Compressive Sanforizing (&lt;2% Shrinkage)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Wide-Width Sheeting Processing (up to 126")</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A]"></span>
                <span>Spectrophotometer-Calibrated Quality Audits</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-[#A7E85A] pl-2.5">
              Contact Information
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#F6F5EF]/90">
              <MapPin className="w-4 h-4 text-[#A7E85A] shrink-0 mt-0.5" />
              <span>Chak No. 7-JB, Sargodha Road, Faisalabad, Punjab, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F6F5EF]/90">
              <Phone className="w-4 h-4 text-[#A7E85A] shrink-0" />
              <a href={`tel:${settings.primaryPhone}`} className="hover:text-white transition-colors font-mono">
                {settings.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F6F5EF]/90">
              <Mail className="w-4 h-4 text-[#A7E85A] shrink-0" />
              <a href={`mailto:${settings.primaryEmail}`} className="hover:text-white transition-colors">
                {settings.primaryEmail}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#F6F5EF]/90">
              <Clock className="w-4 h-4 text-[#A7E85A] shrink-0" />
              <span>{settings.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between text-xs text-[#F6F5EF]/60 gap-4">
          <p>© 2026 Al-Noor Processing & Textile Mills (Pvt.) Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <button
              onClick={() => handleNav('admin')}
              className="hover:text-[#A7E85A] transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-[#C8A95A]" />
              <span>Staff Management Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
