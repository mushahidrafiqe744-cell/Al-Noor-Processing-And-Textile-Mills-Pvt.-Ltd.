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
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Contact Mill Management
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Reach our plant office on Sargodha Road, Faisalabad for processing inquiries, lab dip sampling, bulk contracts, or facility visits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                Mill Headquarters
              </span>
              <h2 className="text-2xl font-extrabold text-[#063F3A] font-brand mt-1 leading-snug">
                Al-Noor Processing & Textile Mills (Pvt.) Ltd.
              </h2>
              <p className="text-xs text-[#123C38]/80 mt-2 leading-relaxed">
                We are strategically positioned along Sargodha Road, the prime textile processing corridor of Faisalabad with rapid access to national highways and dry ports.
              </p>
            </div>

            {/* Direct Information Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded bg-white border border-primary/10 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#123C38]/50">Mill Address</div>
                  <div className="text-xs sm:text-sm font-bold text-[#063F3A] mt-1.5">
                    {settings.address}, {settings.city}, {settings.country}
                  </div>
                  <div className="text-[11px] text-[#123C38]/70 mt-0.5">Postal Code: {settings.postalCode}</div>
                </div>
              </div>

              {/* Phones */}
              <div className="p-5 rounded bg-white border border-primary/10 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#123C38]/50">Telephone / Mobile</div>
                  <div className="text-xs sm:text-sm font-bold text-[#063F3A] mt-1.5 font-mono">
                    <a href={`tel:${settings.primaryPhone}`} className="hover:text-[#C8A95A] transition-colors">
                      {settings.primaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-[#123C38]/70 mt-1 font-mono">
                    <a href={`tel:${settings.secondaryPhone}`} className="hover:text-[#C8A95A] transition-colors">
                      {settings.secondaryPhone} (Marketing Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded bg-white border border-primary/10 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#123C38]/50">Electronic Mail</div>
                  <div className="text-xs sm:text-sm font-bold text-[#063F3A] mt-1.5">
                    <a href={`mailto:${settings.primaryEmail}`} className="hover:text-[#C8A95A] transition-colors">
                      {settings.primaryEmail}
                    </a>
                  </div>
                  <div className="text-xs text-[#123C38]/70 mt-1">
                    Direct support: {settings.supportEmail}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-5 rounded bg-white border border-primary/10 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded bg-[#F6F5EF] border border-[#C8A95A]/20 flex items-center justify-center text-[#063F3A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#123C38]/50">Operating Schedule</div>
                  <div className="text-xs sm:text-sm font-bold text-[#063F3A] mt-1.5">
                    {settings.workingHours}
                  </div>
                  <div className="text-[11px] text-[#123C38]/70 mt-0.5">24/6 Continuous Manufacturing Floor</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="p-6 rounded bg-[#063F3A] text-white border border-[#C8A95A]/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold text-[#A7E85A] uppercase tracking-widest">Fast Response</div>
                <div className="text-sm font-bold text-white mt-0.5">Instant WhatsApp Chat</div>
              </div>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded text-xs font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all flex items-center gap-1.5 shadow-md shadow-[#A7E85A]/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded border border-primary/10 shadow-sm relative">
              <div className="mb-6 pb-4 border-b border-primary/5">
                <h3 className="text-xl font-bold text-[#063F3A] font-brand">
                  Send a Direct Message to Mill Management
                </h3>
                <p className="text-xs text-[#123C38]/75 mt-1 leading-relaxed">
                  Fill out the details below. All inquiries are securely stored and dispatched directly to our executive team.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded bg-[#F6F5EF] border-l-4 border-[#A7E85A] text-[#063F3A] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#063F3A] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Message sent successfully!</strong> Thank you for reaching out to Al-Noor Processing And Textile Mills. Our team will contact you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Crescent Apparel Sourcing"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 7654321"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Inquiry regarding 240 GSM Cotton Twill Dyeing"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123C38]/60 uppercase tracking-widest mb-1.5">
                    Message / Processing Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details of fabric construction, required yardage/meters, finishing specs, delivery targets..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#F6F5EF] border border-primary/10 text-sm text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all placeholder:text-[#123C38]/40 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 font-brand"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#063F3A] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#063F3A]" />
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
      <section className="py-16 bg-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
                Mill Coordinates
              </span>
              <h3 className="text-lg font-bold text-[#063F3A] font-brand">
                Sargodha Road, Faisalabad, Pakistan
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Sargodha+Road+Faisalabad+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#063F3A] hover:text-[#C8A95A] flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C8A95A]" />
            </a>
          </div>

          <div className="rounded overflow-hidden border border-primary/10 shadow-md h-80 sm:h-96 w-full relative bg-[#F6F5EF]">
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
