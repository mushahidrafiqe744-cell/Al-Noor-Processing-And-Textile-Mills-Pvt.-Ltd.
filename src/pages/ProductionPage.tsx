import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import {
  CheckCircle2,
  Flame,
  Droplet,
  Users,
  Award
} from 'lucide-react';

export const ProductionPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const facilities = [
    {
      title: 'Continuous Bleaching & Pre-Treatment Range',
      description: 'Continuous open-width scouring and peroxide bleaching range removing waxes, pectin, and seed particles with uniform absorbency.',
      capacity: '80,000 m/day',
      image: IMAGES.heroTextileFactory,
      specs: ['Open-width tensionless washing', 'Chainless caustic mercerization', 'Neutralized core pH 6.5–7.0']
    },
    {
      title: 'Continuous Pad-Steam Reactive & Vat Dyeing',
      description: 'Computerized dye liquor feeding, infrared pre-dryer, and saturated steam fixation chambers ensuring zero side-to-side shade variance.',
      capacity: '60,000 m/day',
      image: IMAGES.productDyedFabrics,
      specs: ['Datacolor spectrophotometer integration', 'Low-salt eco dyestuffs', 'Color fastness grade 4-5']
    },
    {
      title: 'Multi-Chamber Stenter & Heat-Setting Frames',
      description: 'Automated optical weft straighteners, multi-zone gas heated chambers for precise width control, curing, and specialty finishes.',
      capacity: '75,000 m/day',
      image: IMAGES.aboutTextileProcessing,
      specs: ['Width handling 44" to 126"', 'Automated bow & skew correction', 'Silicone, Teflon & Peach finishes']
    },
    {
      title: 'Compressive Rubber-Belt Sanforizing Unit',
      description: 'Heavy-duty zero-shrinkage rubber belt compressive shrinking ensuring residual washing shrinkage remains under 2% warp and weft.',
      capacity: '50,000 m/day',
      image: IMAGES.productFinishedFabrics,
      specs: ['Woven twill, poplin & canvas preshrunk', 'Steam conditioning damper', 'Permanent dimensional stability']
    },
    {
      title: 'In-House Testing Laboratory & QA Light Booths',
      description: 'Calibrated laboratory with D65/TL84 light boxes, computerized crockmeters, Elmendorf tear testers, and shrinkage ovens.',
      capacity: 'Continuous 24/6 Testing',
      image: IMAGES.productCustomProcessing,
      specs: ['ASTM & ISO standard compliance', 'Color delta-E < 0.8 batch consistency', 'Tensile & crocking test reports']
    }
  ];

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Industrial Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Production & Mill Facilities
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Explore our modern wet processing machinery, continuous dyeing ranges, and computerized testing laboratories located in Sargodha Road, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Facility Highlights Stats */}
      <section className="bg-[#042F2B] text-white border-b border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 border-r border-[#063F3A] last:border-r-0">
            <div className="text-3xl font-extrabold text-[#A7E85A] font-mono">75,000+</div>
            <div className="text-[10px] uppercase tracking-widest text-[#F6F5EF]/60 mt-2 font-bold">Meters Daily Capacity</div>
          </div>
          <div className="p-4 border-r border-[#063F3A] last:border-r-0">
            <div className="text-3xl font-extrabold text-[#A7E85A] font-mono">126"</div>
            <div className="text-[10px] uppercase tracking-widest text-[#F6F5EF]/60 mt-2 font-bold">Max Fabric Width</div>
          </div>
          <div className="p-4 border-r border-[#063F3A] last:border-r-0">
            <div className="text-3xl font-extrabold text-[#A7E85A] font-mono">&lt; 2.0%</div>
            <div className="text-[10px] uppercase tracking-widest text-[#F6F5EF]/60 mt-2 font-bold">Sanforized Shrinkage</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-extrabold text-[#A7E85A] font-mono">24/6</div>
            <div className="text-[10px] uppercase tracking-widest text-[#F6F5EF]/60 mt-2 font-bold">Operational Shifts</div>
          </div>
        </div>
      </section>

      {/* 3. Facility Stations Grid */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Integrated Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
              Key Machinery & Plant Sections
            </h2>
            <p className="text-[#123C38]/85 text-sm mt-3">
              Each section is operated by qualified technicians adhering to standardized quality control protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-[#F6F5EF] rounded border border-primary/10 hover:border-[#C8A95A] transition-all duration-300 overflow-hidden flex flex-col group shadow-sm hover:shadow-lg"
              >
                <div
                  className="relative h-52 overflow-hidden bg-[#063F3A] cursor-pointer"
                  onClick={() => openLightbox({ url: fac.image, title: fac.title, category: 'Facilities' })}
                >
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#063F3A]/90 text-[#A7E85A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {fac.capacity}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-[#063F3A] group-hover:text-[#C8A95A] font-brand leading-snug">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-[#123C38]/80 leading-relaxed mt-2.5">
                      {fac.description}
                    </p>

                    <div className="pt-4 border-t border-primary/5 mt-4 space-y-1.5">
                      {fac.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-[#123C38]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A7E85A] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openQuoteModal({ requiredService: fac.title })}
                    className="w-full py-2.5 rounded text-xs font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-colors uppercase tracking-wider text-center"
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
      <section className="py-24 bg-[#F6F5EF] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <Flame className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Dedicated Steam Generation</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Dual fuel steam boilers and heat recovery exchangers ensure uninterruptible continuous dyeing runs regardless of grid volatility.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <Droplet className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Water Softening & RO Filtration</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Demineralized soft water supply guarantees consistent chemical reactivity, zero mineral deposits, and pure brilliant shades.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <Users className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Skilled Safety Training</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Over 50 trained technicians undergo regular occupational safety drills, chemical handling safety, and ISO standards training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Production Inquiry CTA */}
      <section className="py-20 bg-[#063F3A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-10" />
        <div className="max-w-3xl mx-auto px-6 space-y-5 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
            Schedule a Facility Visit on Sargodha Road
          </h2>
          <p className="text-xs sm:text-sm text-[#F6F5EF]/85">
            We welcome technical audits and plant visits from buyer procurement teams and textile merchandisers.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all cursor-pointer"
            >
              Request Processing Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
