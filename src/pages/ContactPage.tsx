import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, submitContactForm } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      return;
    }
    setIsSubmitting(true);
    const success = await submitContactForm(formData);
    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
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
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              Contact Mill Management
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Reach our plant office on Sargodha Road, Faisalabad for processing inquiries, lab dip sampling, bulk contracts, or facility visits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Info & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                Mill Headquarters
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 font-brand mt-1">
                Al-Noor Processing And Textile Mills (Pvt.) Ltd.
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We are strategically positioned along Sargodha Road, the prime textile processing corridor of Faisalabad with rapid access to national highways and dry ports.
              </p>
            </div>

            {/* Direct Information Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Mill Address</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    {settings.address}, {settings.city}, {settings.country}
                  </div>
                  <div className="text-[11px] text-slate-500">Postal Code: {settings.postalCode}</div>
                </div>
              </div>

              {/* Phones */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Telephone / Mobile</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    <a href={`tel:${settings.primaryPhone}`} className="hover:text-[#B8860B] transition-colors">
                      {settings.primaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    <a href={`tel:${settings.secondaryPhone}`} className="hover:text-[#B8860B] transition-colors">
                      {settings.secondaryPhone} (Marketing Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Electronic Mail</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    <a href={`mailto:${settings.primaryEmail}`} className="hover:text-[#B8860B] transition-colors">
                      {settings.primaryEmail}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Direct inquiries: {settings.supportEmail}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Operating Schedule</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    {settings.workingHours}
                  </div>
                  <div className="text-[11px] text-slate-500">24/6 Continuous Manufacturing Floor</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="p-5 rounded-2xl bg-[#0B192C] text-white border border-[#D4AF37]/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Fast Response</div>
                <div className="text-sm font-semibold text-white">Instant WhatsApp Chat</div>
              </div>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 font-brand">
                  Send a Direct Message to Mill Management
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the details below. All inquiries are securely stored and dispatched directly to our executive team.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Message sent successfully!</strong> Thank you for reaching out to Al-Noor Processing And Textile Mills. Our team will contact you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Crescent Apparel Sourcing"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / Mobile <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 7654321"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Inquiry regarding 240 GSM Cotton Twill Dyeing"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Processing Requirements <span className="text-[#B8860B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details of fabric construction, required yardage/meters, finishing specs, delivery targets..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Google Maps Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                Mill Coordinates
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-brand">
                Sargodha Road, Faisalabad, Pakistan
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Sargodha+Road+Faisalabad+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0B192C] hover:text-[#B8860B] flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-md h-80 sm:h-96 w-full relative bg-slate-100">
            <iframe
              title="Al-Noor Textile Mills Location Map"
              src={settings.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
