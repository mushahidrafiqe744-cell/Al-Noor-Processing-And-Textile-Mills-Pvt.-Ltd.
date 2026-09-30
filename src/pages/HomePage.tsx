import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../assets/images';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Factory,
  Users,
  Award,
  Layers,
  Droplets,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { products, navigate, openQuoteModal, openLightbox, settings } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'machinery' | 'fabrics'>('all');

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: '', companyName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  const galleryImages = [
    { url: IMAGES.heroTextileFactory, title: 'Continuous Dyeing & Processing Floor', category: 'machinery' },
    { url: IMAGES.aboutTextileProcessing, title: 'Advanced Stenter Machine', category: 'machinery' },
    { url: IMAGES.productProcessedFabrics, title: 'High-Density Raw Processed Fabrics', category: 'fabrics' },
    { url: IMAGES.productDyedFabrics, title: 'Uniform Vat and Reactive Dyeing', category: 'fabrics' },
    { url: IMAGES.productFinishedFabrics, title: 'Finished Fabric Inspection & QA', category: 'fabrics' },
    { url: IMAGES.productCustomProcessing, title: 'Logistics and Roll Dispatch Center', category: 'machinery' }
  ];

  const filteredGallery = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#063F3A] text-white min-h-[95vh] flex items-center overflow-hidden border-b border-[#063F3A]/20">
        {/* Background Textile Factory Photo with Premium Deep Green Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroTextileFactory}
            alt="Al-Noor Textile Mills Industrial Production Floor"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.82] scale-100 transition-transform duration-1000"
          />
          {/* Multi-layered Deep Forest Scrim for WCAG AA 4.5:1 Contrast on Left, transparent on Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#063F3A]/90 via-[#063F3A]/40 to-[#063F3A]/10" />
          <div className="absolute inset-0 textile-grid-dark" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            {/* Small Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#063F3A]/80 border border-[#C8A95A]/35 text-[#C8A95A] text-[11px] font-bold uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7E85A] animate-ping" />
              <span>AL-NOOR PROCESSING & TEXTILE MILLS</span>
            </div>

            {/* Large Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-brand mb-6 text-wrap">
              Quality Textile Processing,<br />
              Built for <span className="text-[#A7E85A]">Global Standards</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F6F5EF]/85 leading-relaxed max-w-2xl mb-10 font-normal">
              Delivering reliable textile processing solutions with a commitment to quality, consistency and customer satisfaction. Located in the heart of Faisalabad’s premier industrial zone.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('services')}
                className="px-7 py-4 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#A7E85A]/10 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
              </button>

              <button
                onClick={() => navigate('contact')}
                className="px-6 py-4 rounded text-xs uppercase tracking-wider font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Clean Trust Indicators Bar */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#063F3A]/80 border border-[#C8A95A]/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#A7E85A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quality Focused</h4>
                <p className="text-[11px] text-[#F6F5EF]/70 mt-0.5">Strict ASTM 4-Point Standardized Auditing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#063F3A]/80 border border-[#C8A95A]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-[#A7E85A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Modern Processing</h4>
                <p className="text-[11px] text-[#F6F5EF]/70 mt-0.5">Continuous Pad-Steam and Optical Weft Correction</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#063F3A]/80 border border-[#C8A95A]/30 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5 text-[#A7E85A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Reliable Delivery</h4>
                <p className="text-[11px] text-[#F6F5EF]/70 mt-0.5">Transparent Production Yield Tracking & Lead Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT AL-NOOR SECTION */}
      <section className="py-24 bg-[#F6F5EF] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Industrial Image & Floating Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded overflow-hidden border border-primary/10 shadow-xl bg-white">
                <img
                  src={IMAGES.aboutTextileProcessing}
                  alt="Industrial fabric stenter and processing line"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063F3A]/60 via-transparent to-transparent" />
              </div>
              {/* Floating Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#063F3A] text-white p-5 rounded border border-[#C8A95A]/30 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#042F2B] border border-[#A7E85A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#A7E85A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#A7E85A] font-bold">Verified Trust</div>
                  <div className="text-sm font-bold text-white">Established Textile Processing Company</div>
                </div>
              </div>
            </div>

            {/* Right Column: Introduction */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                <span>ABOUT AL-NOOR</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand leading-tight">
                Committed to Quality in Every Process
              </h2>

              <p className="text-[#123C38]/85 text-sm sm:text-base leading-relaxed">
                Located in the prominent industrial fabric hub of Chak No. 7-JB on Sargodha Road, Faisalabad, <strong>Al-Noor Processing & Textile Mills (Pvt.) Ltd.</strong> has spent over two decades developing high-performance pre-treatment, reactive dyeing, stentered heat setting, and compressive sanforizing solutions.
              </p>

              <p className="text-[#123C38]/85 text-sm leading-relaxed">
                We operate continuous open-width preparation lines, pad-dry-steam range configurations, and highly-calibrated color kitchen machinery that empower B2B buyers and apparel exporters to achieve precise shade repeatability and strict wash-fastness benchmarks.
              </p>

              {/* Verified Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary/10">
                <div>
                  <div className="text-3xl font-extrabold font-brand text-[#063F3A] tracking-tight">22+ Years</div>
                  <div className="text-xs uppercase tracking-wider text-[#123C38]/70 mt-1">Established Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-brand text-[#063F3A] tracking-tight">10M+ Meters</div>
                  <div className="text-xs uppercase tracking-wider text-[#123C38]/70 mt-1">Processed Annually</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('about')}
                  className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-white bg-[#063F3A] hover:bg-[#063F3A]/90 transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Learn More →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE PROCESSING SECTION */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Manufacturing Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
              Our Textile Processing Capabilities
            </h2>
            <p className="text-[#123C38]/80 text-sm mt-3">
              We manage a streamlined B2B fabric processing workflow, optimizing color fastness, dimensional stability, and tactile performance.
            </p>
          </div>

          {/* Visual Process Timeline Block (No cards within cards - clean editorial line) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative pt-6">
            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 01</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Fabric Preparation</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Meticulous singeing to eliminate protruding surface hairs, followed by enzyme desizing, scouring, and optical bleaching to establish an evenly absorbent foundation.
              </p>
            </div>

            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 02</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Dyeing</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Continuous reactive and vat dyeing on pad-dry-pad-steam ranges. Fully computerized color recipe matching with Spectrophotometer calibration.
              </p>
            </div>

            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 03</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Washing & Finishing</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Multi-stage hot washing to strip unfixed hydrolyzed dyes, followed by multi-chamber stenter frame stretching and optical weft-alignment for straight grains.
              </p>
            </div>

            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 04</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Quality Inspection</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Comprehensive 100% lighted inspection tables utilizing the ASTM 4-Point grading system to precisely catalog and map any physical fabric variances.
              </p>
            </div>

            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 05</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Final Processing</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Compressive mechanical sanforizing to assure residual wash shrinkage is under 2%, followed by silicone calender top-coatings to lock in hand feel.
              </p>
            </div>

            <div className="space-y-3 relative pl-8 border-l border-[#C8A95A]/35">
              <div className="absolute left-0 top-1 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#A7E85A] ring-4 ring-[#F6F5EF]" />
              <div className="text-xs font-bold font-mono text-[#C8A95A] tracking-wider">PROCESS 06</div>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">Packing & Dispatch</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Moisture-proof tight tube-wrapping, detailed labeling with batch traceability ID logs, and stacked horizontal storage prepared for direct shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION */}
      <section className="py-24 bg-[#F6F5EF] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                Woven Product Catalogue
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
                Our Premium Fabric Solutions
              </h2>
              <p className="text-[#123C38]/80 text-sm mt-3 max-w-xl">
                Processed, dyed, and custom finished woven bases manufactured to withstand industrial applications, luxury home apparel, and B2B specifications.
              </p>
            </div>

            <button
              onClick={() => navigate('products')}
              className="px-6 py-3 rounded text-xs uppercase tracking-wider font-bold text-white bg-[#063F3A] hover:bg-[#063F3A]/90 transition-all inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>View Full Catalogue →</span>
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded border border-primary/10 hover:border-[#C8A95A] transition-all duration-300 overflow-hidden flex flex-col group shadow-sm hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-[#F6F5EF]">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#063F3A]/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-[#063F3A] font-brand leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#123C38]/80 line-clamp-3 leading-relaxed mt-2">
                      {product.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-primary/5 space-y-1.5 text-xs text-[#123C38]/90">
                      <div className="flex justify-between">
                        <span className="text-[#123C38]/60 font-medium">Composition:</span>
                        <span className="font-semibold">{product.composition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#123C38]/60 font-medium">GSM:</span>
                        <span className="font-semibold font-mono">{product.gsm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#123C38]/60 font-medium">Width:</span>
                        <span className="font-semibold">{product.width}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      openQuoteModal({
                        productType: product.name,
                        fabricSpecs: `Composition: ${product.composition}, GSM: ${product.gsm}, Width: ${product.width}`
                      })
                    }
                    className="w-full py-2.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all text-center cursor-pointer font-brand"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY SECTION (DARK GREEN BACKGROUND) */}
      <section className="py-24 bg-[#063F3A] text-white border-b border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              B2B Trust Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-brand mt-2">
              Quality You Can Trust
            </h2>
            <p className="text-[#F6F5EF]/80 text-sm mt-3">
              We apply standard physical and chemical quality audits to verify that every yard of finished textile conforms to international export standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#042F2B]/90 p-8 rounded border border-primary/25 hover:border-[#C8A95A]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center text-[#A7E85A]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-brand">Quality Control</h3>
              <p className="text-xs text-[#F6F5EF]/75 leading-relaxed">
                Inward greige inspections, in-line process temperature checks, and lighted inspection frames post-processing.
              </p>
            </div>

            <div className="bg-[#042F2B]/90 p-8 rounded border border-primary/25 hover:border-[#C8A95A]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center text-[#A7E85A]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-brand">Consistent Processing</h3>
              <p className="text-xs text-[#F6F5EF]/75 leading-relaxed">
                Automated chemical dosing kitchen recipes ensuring repeatable shades within Delta-E &lt; 0.8 color fastness tolerance.
              </p>
            </div>

            <div className="bg-[#042F2B]/90 p-8 rounded border border-primary/25 hover:border-[#C8A95A]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center text-[#A7E85A]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-brand">Professional Inspection</h3>
              <p className="text-xs text-[#F6F5EF]/75 leading-relaxed">
                Audited to ASTM D5430 4-point standard system with detailed yield scoring reports delivered per consignment roll.
              </p>
            </div>

            <div className="bg-[#042F2B]/90 p-8 rounded border border-primary/25 hover:border-[#C8A95A]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center text-[#A7E85A]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-brand">Customer Satisfaction</h3>
              <p className="text-xs text-[#F6F5EF]/75 leading-relaxed">
                Complete accountability, prompt feedback loops, custom laboratory sample developments, and transparent batch tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FACTORY / GALLERY */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                Visual Proof of Scale
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
                Our Production Facility
              </h2>
            </div>

            {/* Segmented Interactive controls */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F6F5EF] rounded self-start md:self-auto border border-primary/5">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#063F3A] text-white shadow-sm'
                    : 'text-[#123C38]/70 hover:text-[#063F3A]'
                }`}
              >
                All Images
              </button>
              <button
                onClick={() => setActiveTab('machinery')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  activeTab === 'machinery'
                    ? 'bg-[#063F3A] text-white shadow-sm'
                    : 'text-[#123C38]/70 hover:text-[#063F3A]'
                }`}
              >
                Machinery & Lines
              </button>
              <button
                onClick={() => setActiveTab('fabrics')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  activeTab === 'fabrics'
                    ? 'bg-[#063F3A] text-white shadow-sm'
                    : 'text-[#123C38]/70 hover:text-[#063F3A]'
                }`}
              >
                Fabrics & QA
              </button>
            </div>
          </div>

          {/* Masonry / Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox({ url: img.url, title: img.title })}
                className="group relative rounded overflow-hidden cursor-pointer border border-primary/5 bg-[#F6F5EF] h-64 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063F3A]/90 via-[#063F3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h4 className="text-sm font-bold tracking-wide font-brand">{img.title}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-[#A7E85A] mt-1 font-semibold">Click to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE AL-NOOR */}
      <section className="py-24 bg-[#F6F5EF] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Operational Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand mt-2">
              Why Choose Al-Noor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded border border-primary/5 hover:border-[#A7E85A]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col space-y-3">
              <span className="text-xs font-bold text-[#C8A95A] font-mono">01 / CAPABILITY</span>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Reliable Processing</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Consistency across both small testing lots and major 100,000+ meter continuous dyeing runs.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-primary/5 hover:border-[#A7E85A]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col space-y-3">
              <span className="text-xs font-bold text-[#C8A95A] font-mono">02 / STANDARD</span>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Quality Focus</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Applying Datacolor electronic kitchens and ISO-graded checking rigs for defect-free fabrics.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-primary/5 hover:border-[#A7E85A]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col space-y-3">
              <span className="text-xs font-bold text-[#C8A95A] font-mono">03 / EQUIPMENT</span>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Modern Operations</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Our mill is engineered with advanced stenters, sanforizing rollers, and mercerizing chambers.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-primary/5 hover:border-[#A7E85A]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col space-y-3">
              <span className="text-xs font-bold text-[#C8A95A] font-mono">04 / DIALOGUE</span>
              <h3 className="text-base font-bold text-[#063F3A] font-brand">Customer Support</h3>
              <p className="text-xs text-[#123C38]/80 leading-relaxed">
                Dedicated technical coordinators, fast dispatch schedules, and prompt WhatsApp response loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (With Map Integration) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                  CONNECT WITH OUR OFFICE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063F3A] tracking-tight font-brand leading-none">
                  Let's Work Together
                </h2>
                <p className="text-[#123C38]/80 text-sm leading-relaxed pt-2">
                  Have an export fabric run or custom pre-treatment schedule to discuss? Send us your requirements or visit our mill on Sargodha Road.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/30 flex items-center justify-center text-[#063F3A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#123C38]/50">Mill Address</h4>
                    <p className="text-sm font-semibold text-[#063F3A] mt-1">
                      Chak No. 7-JB, Sargodha Road, Faisalabad, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/30 flex items-center justify-center text-[#063F3A] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#123C38]/50">Direct Lines</h4>
                    <p className="text-sm font-semibold text-[#063F3A] mt-1 font-mono">
                      +92 41 8781200 / +92 300 8654321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/30 flex items-center justify-center text-[#063F3A] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#123C38]/50">Business Email</h4>
                    <p className="text-sm font-semibold text-[#063F3A] mt-1">
                      info@alnoortextile.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/30 flex items-center justify-center text-[#063F3A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#123C38]/50">Office Hours</h4>
                    <p className="text-sm font-semibold text-[#063F3A] mt-1">
                      Monday - Saturday: 8:00 AM - 6:00 PM PKT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7 bg-[#F6F5EF] p-8 rounded border border-primary/10 shadow-sm">
              <h3 className="text-lg font-bold text-[#063F3A] font-brand mb-6">Inquiry Submission</h3>
              
              {formSubmitted ? (
                <div className="p-6 bg-white border-l-4 border-[#A7E85A] rounded text-sm text-[#063F3A] space-y-2">
                  <p className="font-bold">✓ Thank You for Your Submission</p>
                  <p className="text-xs text-[#123C38]/80">Your textile processing requirement log has been dispatched to Al-Noor head office. A specialist will follow up shortly with pricing estimates.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123C38]/60 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))}
                        className="w-full text-sm bg-white rounded border border-primary/10 px-4 py-3 focus:outline-none focus:border-[#C8A95A]"
                        placeholder="e.g. Muhammad Raza"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123C38]/60 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData(p => ({ ...p, companyName: e.target.value }))}
                        className="w-full text-sm bg-white rounded border border-primary/10 px-4 py-3 focus:outline-none focus:border-[#C8A95A]"
                        placeholder="e.g. Faisalabad Garment Co."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123C38]/60 mb-1.5">Business Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full text-sm bg-white rounded border border-primary/10 px-4 py-3 focus:outline-none focus:border-[#C8A95A]"
                        placeholder="e.g. partner@firm.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123C38]/60 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full text-sm bg-white rounded border border-primary/10 px-4 py-3 focus:outline-none focus:border-[#C8A95A] font-mono"
                        placeholder="e.g. +92 300 1234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123C38]/60 mb-1.5">Requirement Specifications</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full text-sm bg-white rounded border border-primary/10 px-4 py-3 focus:outline-none focus:border-[#C8A95A] resize-none"
                      placeholder="e.g. Need continuous reactive dyeing and soft-silicone finishing for 20,000 meters of combed cotton twill."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all font-brand cursor-pointer shadow-md shadow-[#A7E85A]/10 text-center"
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Map Embed Section */}
          <div className="mt-16 rounded overflow-hidden border border-primary/10 shadow-sm h-96 relative bg-[#F6F5EF]">
            <iframe
              src="https://maps.google.com/maps?q=Sargodha+Road+Faisalabad+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-none opacity-95"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al-Noor Processing & Textile Mills Faisalabad Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
