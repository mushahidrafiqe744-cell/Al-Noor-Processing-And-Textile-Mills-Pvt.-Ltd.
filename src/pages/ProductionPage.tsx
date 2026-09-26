import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import {
  Factory,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Package,
  Users,
  Gauge,
  CheckCircle2,
  ArrowRight,
  Flame,
  Droplet
} from 'lucide-react';

export const ProductionPage: React.FC = () => {
  const { settings, openQuoteModal, openLightbox } = useApp();

  const facilities = [
    {
      title: 'Continuous Bleaching & Pre-Treatment Range',
      description: 'Continuous open-width scouring and peroxide bleaching range removing waxes, pectin, and seed particles with uniform absorbency.',
      capacity: '80,000 m/day',
      image: IMAGES.heroTextileMill,
      specs: ['Open-width tensionless washing', 'Chainless caustic mercerization', 'Neutralized core pH 6.5–7.0']
    },
    {
      title: 'Continuous Pad-Steam Reactive & Vat Dyeing',
      description: 'Computerized dye liquor feeding, infrared pre-dryer, and saturated steam fixation chambers ensuring zero side-to-side shade variance.',
      capacity: '60,000 m/day',
      image: IMAGES.fabricDyeing,
      specs: ['Datacolor spectrophotometer integration', 'Low-salt eco dyestuffs', 'Color fastness grade 4-5']
    },
    {
      title: 'Multi-Chamber Stenter & Heat-Setting Frames',
      description: 'Automated Mahlo optical weft straighteners, multi-zone gas heated chambers for precise width control, curing, and specialty finishes.',
      capacity: '75,000 m/day',
      image: IMAGES.textileFinishing,
      specs: ['Width handling 44" to 126"', 'Automated bow & skew correction', 'Silicone, Teflon & Peach finishes']
    },
    {
      title: 'Compressive Rubber-Belt Sanforizing Unit',
      description: 'Heavy-duty zero-shrinkage rubber belt compressive shrinking ensuring residual washing shrinkage remains under 2% warp and weft.',
      capacity: '50,000 m/day',
      image: IMAGES.textileFinishing,
      specs: ['Woven twill, poplin & canvas preshrunk', 'Steam conditioning damper', 'Permanent dimensional stability']
    },
    {
      title: 'In-House Testing Laboratory & QA Light Booths',
      description: 'Calibrated laboratory with D65/TL84 light boxes, computerized crockmeters, Elmendorf tear testers, and shrinkage ovens.',
      capacity: 'Continuous 24/6 Testing',
      image: IMAGES.qualityLab,
      specs: ['ASTM & ISO standard compliance', 'Color delta-E < 0.8 batch consistency', 'Tensile & crocking test reports']
    },
    {
      title: 'Finished Fabric Logistics & Humidity Controlled Warehouse',
      description: 'Automated poly-wrapping, barcode lot labeling, and high-bay racking ensuring clean, moisture-protected fabric storage for shipping.',
      capacity: '500,000 m storage capacity',
      image: IMAGES.textileWarehouse,
      specs: ['Individual roll poly wrapping', 'Batch traceability barcodes', 'Rapid container loading dock']
    }
  ];

  return (
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. Page Banner */}
      <section className="bg-[#070D1E] text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Industrial Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              Production & Mill Facilities
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our modern wet processing machinery, continuous dyeing ranges, and computerized testing laboratories located in Sargodha Road, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Facility Highlights Stats */}
      <section className="bg-[#0B192C] text-white border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-brand">75,000+</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Meters Daily Capacity</div>
          </div>
          <div className="p-4 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-brand">126"</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Max Fabric Width</div>
          </div>
          <div className="p-4 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-brand">&lt; 2.0%</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Guaranteed Sanforized Shrinkage</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-brand">24/6</div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Operational Shift Cycles</div>
          </div>
        </div>
      </section>

      {/* 3. Facility Stations Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Integrated Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mt-2">
              Key Machinery & Plant Sections
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Each section is operated by qualified technicians adhering to standardized quality control protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-[#FAFBFC] rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col group shadow-xs hover:shadow-lg"
              >
                <div
                  className="relative h-52 overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => openLightbox({ url: fac.image, title: fac.title, category: 'Facilities' })}
                >
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B192C]/90 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#D4AF37]/30">
                    {fac.capacity}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] font-brand">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {fac.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200/60 mt-4 space-y-1.5">
                      {fac.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openQuoteModal({ requiredService: fac.title })}
                    className="w-full py-2 rounded-lg text-xs font-bold text-slate-900 bg-amber-50 hover:bg-[#D4AF37] hover:text-slate-950 transition-colors uppercase tracking-wider text-center"
                  >
                    Inquire Capacity
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Plant Infrastructure Features */}
      <section className="py-20 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-brand">Dedicated Energy & Steam Generation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual fuel steam boilers and heat recovery exchangers ensure uninterruptible continuous dyeing runs regardless of grid volatility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B]">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-brand">Water Softening & RO Filtration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Demineralized soft water supply guarantees consistent chemical reactivity, zero mineral deposits, and pure brilliant shades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-brand">Skilled Workforce & Safety Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over 50 trained technicians undergo regular occupational safety drills, chemical handling safety, and ISO standards training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Production Inquiry CTA */}
      <section className="py-16 bg-[#0B192C] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
            Schedule a Facility Visit on Sargodha Road
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We welcome technical audits and plant visits from buyer procurement teams and textile merchandisers.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 cursor-pointer"
            >
              Request Processing Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
