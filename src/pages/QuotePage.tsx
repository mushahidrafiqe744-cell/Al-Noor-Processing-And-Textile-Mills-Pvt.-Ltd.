import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const { products, services, submitQuoteForm } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    unit: 'Meters' as 'Meters' | 'Yards' | 'Kilograms' | 'Rolls',
    requiredService: 'Continuous & Batch Dyeing',
    fabricSpecs: '',
    targetDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.quantity) {
      return;
    }
    setIsSubmitting(true);
    const success = await submitQuoteForm(formData);
    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        unit: 'Meters',
        requiredService: 'Continuous & Batch Dyeing',
        fabricSpecs: '',
        targetDate: '',
        message: ''
      });
    }
  };

  return (
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. Page Banner */}
      <section className="bg-[#070D1E] text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Commercial Sourcing Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              Request a Manufacturing & Processing Quotation
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Submit your fabric construction specs, required meters, and finishing chemistry. Our commercial team in Faisalabad will deliver a tailored cost estimate within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quotation Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 sm:p-12 relative">
          {isSuccess && (
            <div className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-emerald-900">Quotation Request Successfully Logged!</h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                  Thank you for your RFQ submission. An automated notification has been dispatched to our Faisalabad mill office. Our senior technical merchandiser will review your yardage and shade parameters and provide an official quotation via email and WhatsApp.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900 font-brand">
                1. Client & Organization Information
              </h3>
              <p className="text-xs text-slate-500">Provide direct contact info for quotation delivery.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-[#B8860B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Farooq"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company / Mill Name <span className="text-[#B8860B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kohinoor Garments (Pvt) Ltd"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Official Email Address <span className="text-[#B8860B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="procurement@company.pk"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Direct Phone / WhatsApp <span className="text-[#B8860B]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="border-b border-slate-100 pt-4 pb-4">
              <h3 className="text-lg font-bold text-slate-900 font-brand">
                2. Fabric & Processing Specifications
              </h3>
              <p className="text-xs text-slate-500">Specify yardage, weave construction, and target chemistry.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Product / Fabric Type
                </label>
                <select
                  value={formData.productType}
                  onChange={e => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                >
                  <option value="">-- Select Catalog Product or Custom --</option>
                  {products.map(p => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.gsm})
                    </option>
                  ))}
                  <option value="Custom Buyer Greige Fabric (Twill / Drill)">Custom Buyer Greige Fabric (Twill / Drill)</option>
                  <option value="Poplin & Shirting Fabrics">Poplin & Shirting Fabrics</option>
                  <option value="Wide Width Bedding Sheeting (120 inches)">Wide Width Bedding Sheeting (120 inches)</option>
                  <option value="Industrial Workwear & Canvas">Industrial Workwear & Canvas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Required Service <span className="text-[#B8860B]">*</span>
                </label>
                <select
                  value={formData.requiredService}
                  onChange={e => setFormData({ ...formData, requiredService: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                >
                  {services.map(s => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Greige to Finished Package">Complete Greige to Finished Package</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Estimated Quantity <span className="text-[#B8860B]">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="500"
                    step="500"
                    required
                    placeholder="e.g. 15000"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                  />
                  <select
                    value={formData.unit}
                    onChange={e => setFormData({ ...formData, unit: e.target.value as any })}
                    className="px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shrink-0 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Meters">Meters</option>
                    <option value="Yards">Yards</option>
                    <option value="Kilograms">Kg</option>
                    <option value="Rolls">Rolls</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Dispatch Date
                </label>
                <input
                  type="date"
                  value={formData.targetDate}
                  onChange={e => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Technical Specifications & Target Shades
              </label>
              <input
                type="text"
                placeholder="e.g. 240 GSM, 58 inch width, 100% Cotton, Navy Pantone 19-4024 TCX, Soft Sanforized finish"
                value={formData.fabricSpecs}
                onChange={e => setFormData({ ...formData, fabricSpecs: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Additional Instructions / Packaging / Lab Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Detail testing requirements (ISO 105, AATCC), roll diameter, plastic film wrapping, or specific buyer fastness criteria..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* SLA Trust Strip */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>Commercial confidentiality guaranteed. No data shared with 3rd parties.</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-[#B8860B]" />
                <span>24-Hour Quotation Turnaround</span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Calculating & Submitting RFQ...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Manufacturing Quotation Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
