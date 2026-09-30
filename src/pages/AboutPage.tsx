import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import { COMPANY_TIMELINE, CORE_VALUES } from '../data/initialData';
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
  Eye,
  Check,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, openQuoteModal, navigate } = useApp();

  const iconMap: Record<string, any> = {
    Award,
    ShieldCheck,
    Lightbulb,
    Users
  };

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              About Al-Noor Processing & Textile Mills
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Two decades of continuous advancement in wet textile processing, continuous reactive dyeing, and precision fabric finishing in Faisalabad, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Company Introduction */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                <span>Corporate Identity</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand leading-tight">
                Rooted in Pakistan's Textile Capital, Serving Global Standards
              </h2>
              <p className="text-[#123C38]/85 text-sm sm:text-base leading-relaxed">
                Founded on Sargodha Road, Faisalabad, <strong>Al-Noor Processing & Textile Mills (Pvt.) Ltd.</strong> is a dedicated processing facility focused on delivering consistent color reproduction, optimal tensile strength retention, and customized fabric finishes.
              </p>
              <p className="text-[#123C38]/85 text-sm leading-relaxed">
                Our plant processes a wide spectrum of fabrics including 100% cotton twills, poplin shirting, heavyweight drills, poly-cotton blends, and high-thread-count beddings. We operate continuous bleaching, pad-steam dyeing, and multi-chamber stenter finishing lines backed by experienced master dyers and textile engineers.
              </p>

              <div className="p-5 rounded bg-[#F6F5EF] border border-primary/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#063F3A]">
                  Key Operational Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#123C38]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A7E85A] stroke-[3px]" />
                    <span>Daily Capacity: 75,000+ Meters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A7E85A] stroke-[3px]" />
                    <span>Widths: 44" up to 126"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A7E85A] stroke-[3px]" />
                    <span>ASTM 4-Point Inspection Tables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A7E85A] stroke-[3px]" />
                    <span>Datacolor Spectrophotometers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded overflow-hidden border border-primary/10 shadow-2xl">
                <img
                  src={IMAGES.aboutTextileProcessing}
                  alt="Al-Noor Factory Production"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#063F3A] text-white p-6 rounded border border-[#C8A95A]/30 shadow-xl hidden sm:block max-w-xs">
                <div className="text-2xl font-extrabold text-[#A7E85A] font-brand">22+ Years</div>
                <div className="text-xs text-[#F6F5EF]/75 mt-1 leading-relaxed">Continuous Processing Leadership in Sargodha Road, Faisalabad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-[#F6F5EF] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded border border-primary/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded bg-[#F6F5EF] border border-[#C8A95A]/30 flex items-center justify-center text-[#063F3A]">
                <Target className="w-6 h-6 text-[#A7E85A]" />
              </div>
              <h3 className="text-xl font-bold text-[#063F3A] font-brand">Our Mission</h3>
              <p className="text-sm text-[#123C38]/85 leading-relaxed">
                {settings.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#063F3A] text-white p-8 rounded border border-primary/20 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 textile-grid-dark opacity-10" />
              <div className="relative z-10 w-12 h-12 rounded bg-[#042F2B] border border-[#C8A95A]/30 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#A7E85A]" />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white font-brand">Our Vision</h3>
              <p className="relative z-10 text-sm text-[#F6F5EF]/85 leading-relaxed">
                {settings.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
              Our Core Values
            </h2>
            <p className="text-[#123C38]/80 text-sm mt-3">
              The operational guidelines governing every processing batch, dye recipe, and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F5EF] p-8 rounded border border-primary/5 hover:border-[#C8A95A] hover:bg-white transition-all space-y-4 group"
                >
                  <div className="w-10 h-10 rounded bg-white border border-primary/5 group-hover:border-[#A7E85A] flex items-center justify-center text-[#063F3A] transition-colors shadow-sm">
                    <IconComp className="w-5 h-5 text-[#C8A95A]" />
                  </div>
                  <h3 className="text-base font-bold text-[#063F3A] font-brand">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#123C38]/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Company Timeline */}
      <section className="py-24 bg-[#063F3A] text-white border-b border-primary/25 relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-brand mt-2">
              Two Decades of Textile Innovation
            </h2>
            <p className="text-[#F6F5EF]/85 text-sm mt-3">
              Tracing the evolution of Al-Noor Processing from local batch dyeing to a modernized continuous processing mill.
            </p>
          </div>

          {/* Timeline block */}
          <div className="relative border-l-2 border-[#C8A95A]/30 ml-4 md:ml-32 space-y-12 max-w-4xl mx-auto">
            {COMPANY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Marker on Left */}
                <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full bg-[#042F2B] border-2 border-[#C8A95A] flex items-center justify-center text-[#A7E85A] text-[10px] font-bold shadow-lg">
                  {idx + 1}
                </div>

                <div className="bg-[#042F2B]/90 p-6 rounded border border-primary/20 group-hover:border-[#C8A95A]/50 transition-all">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-sm font-extrabold text-[#A7E85A] font-mono tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-[#F6F5EF]/30">•</span>
                    <h3 className="text-base font-bold text-white font-brand">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F6F5EF]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-[#063F3A]">
            Partner With Al-Noor Processing & Textile Mills
          </h2>
          <p className="text-xs sm:text-sm text-[#123C38]/85 max-w-xl mx-auto leading-relaxed">
            Submit your B2B processing inquiries, target color swatches, or scheduled pilot trials directly to our technical desk in Faisalabad.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all cursor-pointer shadow-md"
            >
              Get a Quote →
            </button>
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold text-[#063F3A] bg-transparent border border-primary/20 hover:bg-primary/5 transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
