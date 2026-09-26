import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import { COMPANY_TIMELINE, CORE_VALUES } from '../data/initialData';
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  CheckCircle2,
  Leaf,
  Target,
  Eye,
  Building2,
  Check,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, openQuoteModal, navigate } = useApp();

  const iconMap: Record<string, any> = {
    Award,
    ShieldCheck,
    Lightbulb,
    Users,
    CheckCircle2,
    Leaf
  };

  return (
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. Page Banner */}
      <section className="bg-[#070D1E] text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Company Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              About Al-Noor Processing And Textile Mills
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Two decades of continuous advancement in wet textile processing, continuous reactive dyeing, and precision fabric finishing in Faisalabad, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Company Introduction */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                <span>Corporate Identity</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand">
                Rooted in Pakistan's Textile Capital, Serving Global Standards
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded on Sargodha Road, Faisalabad, <strong>Al-Noor Processing And Textile Mills (Pvt.) Ltd.</strong> is a dedicated processing facility focused on delivering consistent color reproduction, optimal tensile strength retention, and customized fabric finishes.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our plant processes a wide spectrum of fabrics including 100% cotton twills, poplin shirting, heavyweight drills, poly-cotton blends, and high-thread-count beddings up to 320 cm in width. We operate continuous bleaching, pad-steam dyeing, and multi-chamber stenter finishing lines backed by experienced master dyers and textile engineers.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Operational Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Daily Capacity: 75,000+ Meters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Widths: 44" up to 126"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>ASTM 4-Point Inspection Tables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Datacolor Spectrophotometers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src={IMAGES.heroTextileMill}
                  alt="Al-Noor Factory Production"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0B192C] text-white p-5 rounded-xl border border-[#D4AF37]/40 shadow-xl hidden sm:block max-w-xs">
                <div className="text-2xl font-extrabold text-[#D4AF37] font-brand">20+ Years</div>
                <div className="text-xs text-slate-300 mt-1">Continuous Processing Leadership in Sargodha Road, Faisalabad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-[#D4AF37] flex items-center justify-center text-[#B8860B]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-brand">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {settings.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0B192C] text-white p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-brand">Our Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {settings.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mt-2">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              The operational guidelines governing every processing batch, dye recipe, and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFC] p-6 rounded-2xl border border-slate-200/80 hover:border-[#D4AF37] hover:bg-white transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 group-hover:border-[#D4AF37] flex items-center justify-center text-[#B8860B] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-brand">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Company Interactive Timeline */}
      <section className="py-20 bg-[#070D1E] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-brand mt-2">
              Two Decades of Textile Innovation
            </h2>
            <p className="text-slate-300 text-sm mt-3">
              Tracing the evolution of Al-Noor Processing from local batch dyeing to a modernized continuous processing mill.
            </p>
          </div>

          <div className="relative border-l-2 border-[#D4AF37]/40 ml-4 md:ml-32 space-y-12">
            {COMPANY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Marker on Left */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B192C] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-xs font-bold shadow-lg">
                  {idx + 1}
                </div>

                <div className="bg-[#0B192C] p-6 rounded-xl border border-slate-800 group-hover:border-[#D4AF37]/50 transition-all max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-extrabold text-[#D4AF37] font-brand tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-slate-600">·</span>
                    <h3 className="text-base font-bold text-white font-brand">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="py-16 bg-[#0B192C] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
            Partner With Al-Noor Textile Mills
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Visit our Sargodha Road facility or submit your fabric processing inquiry online.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all cursor-pointer"
            >
              Get a Quote
            </button>
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-all cursor-pointer border border-slate-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
