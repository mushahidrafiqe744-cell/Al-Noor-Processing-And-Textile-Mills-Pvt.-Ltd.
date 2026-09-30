import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Microscope,
  Gauge,
  Eye,
  Award,
  Layers,
  Sparkles,
  ClipboardList
} from 'lucide-react';

export const QualityPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const qualitySteps = [
    {
      step: '01',
      title: 'Raw Greige Material Audit',
      description: 'Incoming greige lot yarn count, reed/pick density, moisture content, and contamination grading before lot release to processing floor.',
      icon: Layers
    },
    {
      step: '02',
      title: 'Controlled Wet Processing',
      description: 'Continuous chemical dosing, regulated temperature profiles, and constant liquor concentration during scouring, bleaching, and mercerizing.',
      icon: Gauge
    },
    {
      step: '03',
      title: 'In-Process Shade & Pickup Inspection',
      description: 'Real-time color matching with Datacolor spectrophotometer against buyer master standard to keep Delta-E under 0.8.',
      icon: Microscope
    },
    {
      step: '04',
      title: 'Finishing & Compressive Shrinkage',
      description: 'Stenter optical weft alignment and compressive sanforizing ensuring width regularity and residual wash shrinkage < 2%.',
      icon: Sparkles
    },
    {
      step: '05',
      title: '100% 4-Point ASTM Fabric Inspection',
      description: 'Roll-by-roll inspection under high-intensity daylight illumination on motorized inspection frames with defect point mapping.',
      icon: Eye
    },
    {
      step: '06',
      title: 'Certified Lab Release & Dispatch',
      description: 'Final physical testing (tensile strength, tear resistance, crocking, wash fastness) and issuance of batch test certificate.',
      icon: FileCheck2
    }
  ];

  const labParameters = [
    { name: 'Color Fastness to Washing', standard: 'ISO 105-C06 / AATCC 61', expectation: 'Grade 4-5 (Change & Staining)' },
    { name: 'Color Fastness to Crocking (Rubbing)', standard: 'ISO 105-X12 / AATCC 8', expectation: 'Dry Grade 4, Wet Grade 3-4' },
    { name: 'Color Fastness to Light', standard: 'ISO 105-B02 / AATCC 16', expectation: 'Grade 4+ (Blue Wool Scale)' },
    { name: 'Dimensional Stability (Shrinkage)', standard: 'ISO 6330 / AATCC 135', expectation: 'Warp & Weft ≤ ±2.0%' },
    { name: 'Tensile & Breaking Strength', standard: 'ISO 13934-1 / ASTM D5034', expectation: 'Exceeds Buyer Minimum (Grab Test)' },
    { name: 'Tear Resistance', standard: 'ISO 13937-1 / ASTM D1424', expectation: 'Elmendorf Pendulum Standard' },
    { name: 'Fabric pH Value', standard: 'ISO 3071 / AATCC 81', expectation: '6.5 - 7.5 (Skin neutral)' },
    { name: 'Bow & Skewness Tolerance', standard: 'ASTM D3882', expectation: '≤ 1.5% maximum allowable' }
  ];

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Zero-Defect Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Quality Assurance & Testing Standards
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Precision testing, 100% illuminated fabric inspection, and computerized color management adhering to ISO and ASTM international standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 6-Step Process Timeline */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
              End-to-End Quality Flow
            </h2>
            <p className="text-[#123C38]/85 text-sm mt-3">
              Raw Material → Processing → Inspection → Finishing → Final Quality Check → Delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F5EF] p-8 rounded border border-primary/10 hover:border-[#C8A95A] transition-all space-y-4 shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-[#063F3A] text-[#A7E85A] border border-[#C8A95A]/30 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-extrabold text-[#C8A95A] font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#063F3A] group-hover:text-[#C8A95A] font-brand">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#123C38]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. In-House Laboratory Testing Table */}
      <section className="py-24 bg-[#063F3A] text-white border-b border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                Calibrated Testing
              </span>
              <h2 className="text-3xl font-extrabold text-white font-brand leading-snug">
                In-House Testing Laboratory Standards
              </h2>
              <p className="text-xs sm:text-sm text-[#F6F5EF]/80 leading-relaxed">
                Our internal laboratory on Sargodha Road performs comprehensive physical and chemical audits on every dye lot prior to roll packing.
              </p>

              <div
                className="rounded overflow-hidden border border-primary/15 shadow-xl cursor-pointer"
                onClick={() => openLightbox({ url: IMAGES.productFinishedFabrics, title: 'Spectrophotometer Testing Booth', category: 'Laboratory' })}
              >
                <img
                  src={IMAGES.productFinishedFabrics}
                  alt="Laboratory Testing"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#042F2B]/90 rounded border border-primary/20 p-6 overflow-x-auto">
                <table className="w-full text-left text-xs text-[#F6F5EF]/85">
                  <thead className="text-[10px] uppercase tracking-widest text-[#A7E85A] border-b border-primary/20">
                    <tr>
                      <th className="py-3.5 px-4">Test Parameter</th>
                      <th className="py-3.5 px-4">Methodology / Standard</th>
                      <th className="py-3.5 px-4">Tolerance Guarantee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/10">
                    {labParameters.map((param, pIdx) => (
                      <tr key={pIdx} className="hover:bg-[#063F3A]/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">{param.name}</td>
                        <td className="py-3.5 px-4 text-[#F6F5EF]/60 font-mono text-[10px]">{param.standard}</td>
                        <td className="py-3.5 px-4 text-[#A7E85A] font-bold font-mono">{param.expectation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inspection System */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F5EF] p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-white border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <ClipboardList className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">ASTM 4-Point System</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Standardized defect penalty points based on size: 1pt (&lt;3"), 2pts (3"-6"), 3pts (6"-9"), 4pts (&gt;9"). Rolls exceeding buyer points threshold are automatically rejected.
              </p>
            </div>

            <div className="bg-[#F6F5EF] p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-white border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <Microscope className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Spectrophotometer Delta-E</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Spectrophotometric spectral readings under multiple illuminants (D65 daylight, TL84 department store, Incandescent A) ensure metamerism-free shade reproduction.
              </p>
            </div>

            <div className="bg-[#F6F5EF] p-8 rounded border border-primary/5 space-y-4">
              <div className="w-10 h-10 rounded bg-white border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A]">
                <ShieldCheck className="w-5 h-5 text-[#C8A95A]" />
              </div>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Batch Traceability</h3>
              <p className="text-xs text-[#123C38]/85 leading-relaxed">
                Each fabric roll is tagged with unique lot tracking barcodes detailing machine run date, chemical batch recipe, operator ID, and QA inspection sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-[#063F3A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-10" />
        <div className="max-w-3xl mx-auto px-6 space-y-5 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
            Request Certified Lab Swatches & Dips
          </h2>
          <p className="text-xs sm:text-sm text-[#F6F5EF]/80">
            Submit your Pantone reference or target fabric swatch for rapid lab dip formulation.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all cursor-pointer shadow-md"
            >
              Request Lab Dip / Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
