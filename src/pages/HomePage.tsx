import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Droplets,
  Sparkles,
  Cpu,
  CheckCircle2,
  Factory,
  Users,
  Compass,
  FileText,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { settings, services, products, navigate, openQuoteModal, openLightbox } = useApp();

  const iconMap: Record<string, any> = {
    Layers: Layers,
    Droplets: Droplets,
    Sparkles: Sparkles,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#070D1E] text-white min-h-[90vh] flex items-center overflow-hidden border-b border-slate-800">
        {/* Background Textile Factory Photo with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroTextileMill}
            alt="Al-Noor Textile Mills Factory Floor"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 scale-100 transition-transform duration-1000"
            onError={e => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          {/* Deep Navy Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E] via-[#0B192C]/90 to-[#070D1E]/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 textile-grid-dark" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12243F]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span>Sargodha Road, Faisalabad • Certified Textile Mills</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-brand mb-4">
              Al-Noor Processing And <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Textile Mills</span> (Pvt.) Ltd.
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-semibold text-amber-200/90 mb-4 tracking-normal">
              "{settings.tagline}"
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
              {settings.subtitle}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('services')}
                className="px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Animated Statistics Strip */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#12243F]/60 backdrop-blur-sm border border-slate-800 p-4 sm:p-5 rounded-xl">
              <div className="text-2xl sm:text-3xl font-extrabold font-brand text-[#D4AF37] tabular-nums">
                {settings.yearsExperience}+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-1">
                Years of Experience
              </div>
            </div>

            <div className="bg-[#12243F]/60 backdrop-blur-sm border border-slate-800 p-4 sm:p-5 rounded-xl">
              <div className="text-2xl sm:text-3xl font-extrabold font-brand text-[#D4AF37] tabular-nums">
                {settings.employeesCount}+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-1">
                Skilled Employees
              </div>
            </div>

            <div className="bg-[#12243F]/60 backdrop-blur-sm border border-slate-800 p-4 sm:p-5 rounded-xl">
              <div className="text-2xl sm:text-3xl font-extrabold font-brand text-[#D4AF37] tabular-nums">
                {settings.metersProcessed}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-1">
                Meters Processed
              </div>
            </div>

            <div className="bg-[#12243F]/60 backdrop-blur-sm border border-slate-800 p-4 sm:p-5 rounded-xl">
              <div className="text-2xl sm:text-3xl font-extrabold font-brand text-[#D4AF37] tabular-nums">
                {settings.qualityFocus}%
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-1">
                Quality Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Imagery Grid */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={IMAGES.fabricDyeing}
                  alt="Textile processing machinery at Al-Noor"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                    Continuous Pad-Steam Range
                  </span>
                  <p className="text-sm font-medium">Precision reactive & vat dyeing in Faisalabad</p>
                </div>
              </div>

              {/* Floating Quality Callout Box */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#0B192C] text-white p-5 rounded-xl border border-[#D4AF37]/40 shadow-2xl items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-lg bg-[#12243F] border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Standard</div>
                  <div className="text-sm font-bold text-white">ASTM 4-Point & ISO 105 Fastness</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                <span>About Al-Noor Textile Mills</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand">
                Precision Textile Processing & Continuous Dyeing Since 2004
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Located on Sargodha Road in Faisalabad, Pakistan’s textile capital, <strong>Al-Noor Processing And Textile Mills (Pvt.) Ltd.</strong> has established itself as an industry benchmark in fabric pre-treatment, continuous dyeing, stentering, and compressive sanforizing.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We partner with high-volume garment exporters, workwear producers, and luxury home textile manufacturers who demand rigorous shade reproducibility, high tensile retention, and predictable delivery timelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>State-of-the-art Stenter Chambers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Computerized QA Lab & D65 Booths</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Compressive Sanforizing Range</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Custom Buyer Formulations</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('about')}
                  className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-[#0B192C] hover:bg-[#12243F] transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-[#FAFBFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Integrated Industrial Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mt-2">
              Our Core Textile Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Complete end-to-end textile processing solutions engineered for consistent color fastness, dimensional stability, and luxury hand feel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComp = iconMap[service.icon] || Layers;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#0B192C]/90 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[11px] font-semibold text-[#B8860B] uppercase tracking-wider mb-1">
                        Service 0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B192C] font-brand">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => navigate('services')}
                        className="text-xs font-bold text-[#0B192C] group-hover:text-[#B8860B] inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => openQuoteModal({ requiredService: service.title })}
                        className="text-xs font-semibold px-3 py-1.5 rounded bg-amber-50 text-amber-900 hover:bg-[#D4AF37] hover:text-slate-950 transition-colors"
                      >
                        Quote Service
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION & MACHINERY SECTION */}
      <section className="py-20 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Infrastructure & Technology
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-brand">
                Modern Machinery & High-Efficiency Processing Lines
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our mill on Sargodha Road houses advanced processing infrastructure designed for high daily throughput without sacrificing quality precision.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#12243F]/80 border border-slate-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#070D1E] border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Modern Continuous Machinery</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Continuous pad-steam dyeing ranges, multi-chamber stenters with automated Mahlo weft straighteners, and chainless mercerizers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#12243F]/80 border border-slate-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#070D1E] border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Efficient Production & Capacity</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Daily processing capacity exceeding 75,000 meters across lightweight voiles, twills, heavyweight drills, and wide home textiles.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#12243F]/80 border border-slate-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#070D1E] border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Skilled Workforce & Shift Supervisors</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      50+ experienced textile technologists, master dyers, and laboratory chemists monitoring process parameters 24/6.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#12243F]/80 border border-slate-700/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#070D1E] border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Quality Inspection & Lab Approval</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      100% lighted inspection tables, computerized spectrophotometer color verification, tensile testers, and shrinkage audit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('production')}
                  className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                >
                  <span>Explore Facilities & Machinery</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Images Showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="rounded-xl overflow-hidden border border-slate-700 shadow-xl cursor-pointer group"
                  onClick={() => openLightbox({ url: IMAGES.textileFinishing, title: 'Multi-Chamber Stenter Frame', category: 'Machines' })}
                >
                  <img
                    src={IMAGES.textileFinishing}
                    alt="Finishing Stenter"
                    referrerPolicy="no-referrer"
                    className="w-full h-44 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div
                  className="rounded-xl overflow-hidden border border-slate-700 shadow-xl cursor-pointer group"
                  onClick={() => openLightbox({ url: IMAGES.qualityLab, title: 'In-House Testing Laboratory', category: 'Quality' })}
                >
                  <img
                    src={IMAGES.qualityLab}
                    alt="Testing Lab"
                    referrerPolicy="no-referrer"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div
                  className="rounded-xl overflow-hidden border border-slate-700 shadow-xl cursor-pointer group"
                  onClick={() => openLightbox({ url: IMAGES.fabricDyeing, title: 'Continuous Dyeing Range', category: 'Production' })}
                >
                  <img
                    src={IMAGES.fabricDyeing}
                    alt="Dyeing Range"
                    referrerPolicy="no-referrer"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div
                  className="rounded-xl overflow-hidden border border-slate-700 shadow-xl cursor-pointer group"
                  onClick={() => openLightbox({ url: IMAGES.textileWarehouse, title: 'Finished Goods Logistics Center', category: 'Warehouse' })}
                >
                  <img
                    src={IMAGES.textileWarehouse}
                    alt="Textile Warehouse"
                    referrerPolicy="no-referrer"
                    className="w-full h-44 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS CATALOG */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                Engineered Fabrics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mt-1">
                Featured Textile Solutions
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Processed, dyed, and finished woven fabrics manufactured for institutional workwear, home textiles, and export apparel.
              </p>
            </div>

            <button
              onClick={() => navigate('products')}
              className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-[#0B192C] bg-slate-100 hover:bg-[#0B192C] hover:text-white transition-all inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <div
                key={product.id}
                className="bg-[#FAFBFC] rounded-xl border border-slate-200/90 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col group shadow-sm hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-[#D4AF37]/30">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-[#0B192C]">
                      {product.name}
                    </h3>
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Weight:</span>
                        <span className="font-semibold text-slate-900">{product.gsm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Weave:</span>
                        <span className="font-semibold text-slate-900">{product.weave}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Width:</span>
                        <span className="font-semibold text-slate-900">{product.width}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      openQuoteModal({
                        productType: product.name,
                        fabricSpecs: `${product.gsm}, ${product.weave}, ${product.width}`
                      })
                    }
                    className="w-full py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all text-center cursor-pointer shadow-sm"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALITY COMMITMENT SECTION (PREMIUM DARK NAVY) */}
      <section className="py-20 bg-[#070D1E] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Non-Negotiable Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-brand mt-2">
              Our 100% Quality Assurance Commitment
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              We apply standardized testing protocols at every stage of wet processing, guaranteeing that every meter dispatched meets tight tolerance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 hover:border-[#D4AF37]/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Quality Control</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                4-Point ASTM fabric grading and continuous flaw tracking on illuminated inspection tables.
              </p>
            </div>

            <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 hover:border-[#D4AF37]/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Modern Technology</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Spectrophotometer recipe formulation and computerized tension controls across all ranges.
              </p>
            </div>

            <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 hover:border-[#D4AF37]/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Skilled Workforce</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Decades of hands-on expertise from Faisalabad's seasoned textile masters and technicians.
              </p>
            </div>

            <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 hover:border-[#D4AF37]/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Consistent Results</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Repeatable shade matching (Delta-E &lt; 0.8) and guaranteed residual shrinkage under 2%.
              </p>
            </div>

            <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 hover:border-[#D4AF37]/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#12243F] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white">Customer Satisfaction</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent test reports, batch traceability, and rapid consultation on every inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0B192C] to-[#070D1E] text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12243F] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <span>Direct Mill Sourcing • Faisalabad, Pakistan</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand">
            Looking for a Reliable Textile Processing Partner?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you require trial lot development or high-volume continuous processing, our Sargodha Road facility is ready to serve your production requirements.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('contact')}
              className="px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition-all cursor-pointer"
            >
              <span>Contact Mill Office</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
