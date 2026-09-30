import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Layers,
  Droplets,
  Sparkles,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  ChevronRight
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services, openQuoteModal, openLightbox } = useApp();
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id || 'srv-1');

  const iconMap: Record<string, any> = {
    Layers,
    Droplets,
    Sparkles,
    Cpu,
    ShieldCheck
  };

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Industrial Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Textile Processing & Finishing Services
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              State-of-the-art wet processing lines on Sargodha Road, Faisalabad engineered to deliver vibrant shades, uniform absorbency, and stable fabric dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Navigation Filter */}
      <div className="bg-white border-b border-primary/10 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {services.map(s => {
              const IconComp = iconMap[s.icon] || Layers;
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab(s.id);
                    const el = document.getElementById(s.slug);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`px-4 py-2 rounded text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#063F3A] text-[#A7E85A] shadow-sm'
                      : 'bg-[#F6F5EF] text-[#123C38] hover:bg-[#F6F5EF]/80'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Deep Service Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          const IconComp = iconMap[service.icon] || Layers;

          return (
            <section
              key={service.id}
              id={service.slug}
              className="scroll-mt-32 pt-8 border-t border-primary/10 first:border-t-0 first:pt-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    className="relative rounded overflow-hidden border border-primary/10 shadow-xl group cursor-pointer bg-[#063F3A]"
                    onClick={() => openLightbox({ url: service.image, title: service.title, category: 'Services' })}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063F3A]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[#A7E85A]">
                        Al-Noor Mill Asset
                      </div>
                      <div className="text-sm font-bold">{service.title}</div>
                    </div>
                  </div>

                  {/* Capabilities List Box */}
                  <div className="mt-6 p-6 rounded bg-white border border-primary/10 shadow-xs space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#063F3A]">
                      Technical Capabilities
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#123C38]/85">
                      {service.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A95A] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#063F3A] text-[#A7E85A] border border-[#C8A95A]/30 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                      Service Specification 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063F3A] font-brand">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#123C38]/85 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#063F3A]">
                      Key Benefits & Assurances
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.keyBenefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 p-3.5 rounded bg-[#F6F5EF] border border-primary/5 text-xs text-[#123C38] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#A7E85A] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step-by-Step Process */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#063F3A]">
                      Standard Operating Process Flow
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.processSteps.map(step => (
                        <div
                          key={step.step}
                          className="p-4 rounded bg-white border border-primary/10 shadow-xs space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#063F3A] text-[#A7E85A] text-[10px] font-bold flex items-center justify-center font-mono">
                              0{step.step}
                            </span>
                            <span className="text-xs font-bold text-[#063F3A]">{step.name}</span>
                          </div>
                          <p className="text-[11px] text-[#123C38]/70 pl-7 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA for this service */}
                  <div className="pt-4">
                    <button
                      onClick={() => openQuoteModal({ requiredService: service.title })}
                      className="px-6 py-3 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Calculator className="w-4 h-4 text-[#063F3A]" />
                      <span>Request Quote for {service.title}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
