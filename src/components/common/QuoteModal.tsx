import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Send, Calculator, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="bg-[#063F3A] border border-[#C8A95A]/30 rounded w-full max-w-2xl text-white shadow-2xl overflow-hidden relative my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#042F2B] px-6 py-5 border-b border-[#063F3A]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#063F3A] border border-[#C8A95A]/30 flex items-center justify-center text-[#A7E85A]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-brand text-white leading-none">
                Request Manufacturing & Processing Quotation
              </h3>
              <p className="text-[11px] text-[#F6F5EF]/60 mt-1.5">
                Al-Noor Processing & Textile Mills (Pvt.) Ltd. • Sargodha Road, Faisalabad
              </p>
            </div>
          </div>
          <button
            onClick={closeQuoteModal}
            className="text-[#F6F5EF]/60 hover:text-white p-1 rounded hover:bg-[#063F3A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto bg-[#042F2B]">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Muhammad Farooq"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Apparel Sourcing Ltd"
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="procurement@company.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
              />
            </div>
          </div>

          {/* Row 3: Product Type & Required Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Target Product / Fabric
              </label>
              <select
                value={formData.productType}
                onChange={e => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all"
              >
                <option value="">-- Select Product / Custom Spec --</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Custom Buyer Greige Fabric">Custom Buyer Greige Fabric (Twill / Poplin / Sheeting)</option>
                <option value="Institutional Hospital / Uniform Fabric">Institutional Hospital / Uniform Fabric</option>
                <option value="Home Textile Wide-Width Fabric">Home Textile Wide-Width Fabric (280-320cm)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Required Service *
              </label>
              <select
                value={formData.requiredService}
                onChange={e => setFormData({ ...formData, requiredService: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all"
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
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Estimated Order Quantity *
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
                  className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
                />
                <select
                  value={formData.unit}
                  onChange={e => setFormData({ ...formData, unit: e.target.value as any })}
                  className="px-3 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-xs font-medium focus:border-[#C8A95A] focus:outline-none shrink-0"
                >
                  <option value="Meters">Meters</option>
                  <option value="Yards">Yards</option>
                  <option value="Kilograms">Kg</option>
                  <option value="Rolls">Rolls</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
                Required Delivery Target Date
              </label>
              <input
                type="date"
                value={formData.targetDate}
                onChange={e => setFormData({ ...formData, targetDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 5: Fabric Specifications */}
          <div>
            <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
              Fabric Specifications / Target Colors
            </label>
            <input
              type="text"
              placeholder="e.g. 240 GSM, 58 inch width, 100% Cotton, Navy / Olive Pantone shades, Peach finish"
              value={formData.fabricSpecs}
              onChange={e => setFormData({ ...formData, fabricSpecs: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30"
            />
          </div>

          {/* Row 6: Additional Message */}
          <div>
            <label className="block text-xs font-bold text-[#F6F5EF]/80 uppercase tracking-widest mb-1.5">
              Additional Details / Tolerances / Testing Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Mention any specific fastness requirements (e.g. ISO 105-C06), shrinkage allowance, packaging style..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded bg-[#063F3A]/90 border border-primary/10 text-white text-sm focus:border-[#C8A95A] focus:outline-none transition-all placeholder:text-[#F6F5EF]/30 resize-none"
            />
          </div>

          {/* SLA badge */}
          <div className="p-3 rounded bg-[#063F3A] border border-primary/20 flex items-center justify-between text-xs text-[#F6F5EF]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A7E85A]" />
              <span>Direct Quotation SLA: Response within 24 business hours</span>
            </div>
            <span className="hidden sm:inline text-[#C8A95A] font-bold">Mill Desk</span>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#063F3A]/20">
            <button
              type="button"
              onClick={closeQuoteModal}
              className="px-4 py-2.5 rounded text-xs font-bold text-[#F6F5EF]/60 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 font-brand"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-[#063F3A] border-t-transparent rounded-full animate-spin"></div>
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
