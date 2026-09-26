import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Send, Calculator, ShieldCheck, Sparkles } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, quotePrefill, submitQuoteForm, products, services } = useApp();

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

  useEffect(() => {
    if (quotePrefill) {
      setFormData(prev => ({
        ...prev,
        productType: quotePrefill.productType || prev.productType,
        requiredService: quotePrefill.requiredService || prev.requiredService,
        fabricSpecs: quotePrefill.fabricSpecs || prev.fabricSpecs,
        quantity: quotePrefill.quantity || prev.quantity,
        unit: quotePrefill.unit || prev.unit
      }));
    }
  }, [quotePrefill]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.quantity) {
      return;
    }
    setIsSubmitting(true);
    const success = await submitQuoteForm(formData);
    setIsSubmitting(false);
    if (success) {
      closeQuoteModal();
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#0B192C] border border-[#D4AF37]/40 rounded-2xl w-full max-w-2xl text-white shadow-2xl overflow-hidden relative my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#070D1E] to-[#12243F] px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-brand text-white">
                Request Manufacturing & Processing Quotation
              </h3>
              <p className="text-xs text-slate-300">
                Al-Noor Processing And Textile Mills (Pvt.) Ltd. • Sargodha Road, Faisalabad
              </p>
            </div>
          </div>
          <button
            onClick={closeQuoteModal}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Muhammad Farooq"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Company Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Apparel Sourcing Ltd"
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="procurement@company.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Row 3: Product Type & Required Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Target Product / Fabric
              </label>
              <select
                value={formData.productType}
                onChange={e => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all"
              >
                <option value="">-- Select Product / Custom Spec --</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.gsm})
                  </option>
                ))}
                <option value="Custom Buyer Greige Fabric">Custom Buyer Greige Fabric (Twill / Poplin / Sheeting)</option>
                <option value="Institutional Hospital / Uniform Fabric">Institutional Hospital / Uniform Fabric</option>
                <option value="Home Textile Wide-Width Fabric">Home Textile Wide-Width Fabric (280-320cm)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Required Service <span className="text-[#D4AF37]">*</span>
              </label>
              <select
                value={formData.requiredService}
                onChange={e => setFormData({ ...formData, requiredService: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all"
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

          {/* Row 4: Quantity & Unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Estimated Order Quantity <span className="text-[#D4AF37]">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="500"
                  step="500"
                  required
                  placeholder="e.g. 10000"
                  value={formData.quantity}
                  onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
                />
                <select
                  value={formData.unit}
                  onChange={e => setFormData({ ...formData, unit: e.target.value as any })}
                  className="px-3 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-xs font-medium focus:border-[#D4AF37] focus:outline-none shrink-0"
                >
                  <option value="Meters">Meters</option>
                  <option value="Yards">Yards</option>
                  <option value="Kilograms">Kg</option>
                  <option value="Rolls">Rolls</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Required Delivery Target Date
              </label>
              <input
                type="date"
                value={formData.targetDate}
                onChange={e => setFormData({ ...formData, targetDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 5: Fabric Specifications */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Fabric Specifications / Target Colors
            </label>
            <input
              type="text"
              placeholder="e.g. 240 GSM, 58 inch width, 100% Cotton, Navy / Olive Pantone shades, Peach finish"
              value={formData.fabricSpecs}
              onChange={e => setFormData({ ...formData, fabricSpecs: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500"
            />
          </div>

          {/* Row 6: Additional Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Additional Details / Tolerances / Testing Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Mention any specific fastness requirements (e.g. ISO 105-C06), shrinkage allowance, packaging style..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#12243F]/80 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-slate-500 resize-none"
            />
          </div>

          {/* Security & Response SLA badge */}
          <div className="p-3 rounded-lg bg-[#12243F]/50 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Quotation SLA: Response within 24 business hours</span>
            </div>
            <span className="hidden sm:inline text-amber-300/80 font-medium">Sargodha Rd Mill Desk</span>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={closeQuoteModal}
              className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#D4AF37]/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
