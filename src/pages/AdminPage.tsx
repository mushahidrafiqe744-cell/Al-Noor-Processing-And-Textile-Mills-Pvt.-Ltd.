import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product, Service, GalleryItem, ContactMessage, QuoteRequest, CompanySettings } from '../types';
import {
  Lock,
  Unlock,
  Layers,
  Package,
  Image as ImageIcon,
  MessageSquare,
  Calculator,
  Settings,
  Mail,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  Eye,
  Search,
  Check,
  X,
  Send,
  Building,
  Save,
  ShieldAlert,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    isAdminLoggedIn,
    adminLogin,
    adminLogout,
    settings,
    updateSettings,
    products,
    addProduct,
    editProduct,
    deleteProduct,
    services,
    editService,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    contacts,
    updateContactStatus,
    deleteContactMessage,
    quotes,
    updateQuoteStatus,
    deleteQuoteRequest,
    emailLogs
  } = useApp();

  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'services' | 'gallery' | 'contacts' | 'quotes' | 'settings' | 'emails'>('overview');

  // Product modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    category: 'Dyed Fabrics',
    description: '',
    weave: '3/1 Twill',
    gsm: '240 GSM',
    width: '58 inches',
    composition: '100% Cotton',
    finishType: 'Sanforized',
    dyeingMethod: 'Pad-Steam Reactive',
    minOrder: '3,000 Meters',
    image: '/src/assets/images/fabric_dyeing_process_1790250563187.jpg'
  });

  // Service edit modal state
  const [editingService, setEditingService] = useState<Service | null>(null);

  // Gallery add state
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState<Omit<GalleryItem, 'id'>>({
    title: '',
    category: 'Factory',
    image: '/src/assets/images/hero_textile_mill_1790250536049.jpg',
    description: '',
    date: '2026'
  });

  // Settings form state
  const [settingsForm, setSettingsForm] = useState<CompanySettings>(settings);

  // Quote detail / edit state
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [quotePriceEstimate, setQuotePriceEstimate] = useState('');
  const [quoteNotes, setQuoteNotes] = useState('');

  // Contact detail state
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [contactNotes, setContactNotes] = useState('');

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#F6F5EF]">
        <div className="max-w-md w-full bg-[#063F3A] text-white p-8 rounded border border-[#C8A95A]/35 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded bg-[#042F2B] border border-[#C8A95A]/35 flex items-center justify-center mx-auto text-[#A7E85A]">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-brand text-white">Al-Noor Administrative Portal</h2>
            <p className="text-xs text-[#F6F5EF]/75">
              Enter authorized administrator credentials to manage mill inquiries, products, and website content.
            </p>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              adminLogin(passwordInput);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F6F5EF]/80 mb-1">
                Admin Security Key
              </label>
              <input
                type="password"
                required
                placeholder="Enter password (e.g. alnoor2026)"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded bg-[#042F2B] border border-primary/20 text-white text-sm focus:outline-none focus:border-[#C8A95A]"
              />
              <div className="text-[11px] text-[#F6F5EF]/60 mt-1.5 flex items-center gap-1">
                <span>Default administrative key:</span>
                <span className="font-mono text-[#A7E85A] font-bold">alnoor2026</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all cursor-pointer shadow-md font-brand"
            >
              Authenticate & Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  const unreadContacts = contacts.filter(c => c.status === 'unread').length;
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length;

  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-20">
      {/* Top Admin Bar */}
      <div className="bg-[#070D1E] text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#12243F] border border-[#D4AF37] flex items-center justify-center p-1 text-[#D4AF37]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white font-brand">
                Al-Noor Textile Mills <span className="text-[#D4AF37]">Admin Console</span>
              </h1>
              <span className="text-[10px] text-slate-400">Authenticated Session (Sargodha Road Mill)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSettingsForm(settings);
                adminLogout();
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-600/60 text-rose-200 hover:bg-rose-900 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="bg-[#0B192C] text-slate-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-2 overflow-x-auto no-scrollbar flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'overview' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'quotes' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            <span>Quote Requests</span>
            {pendingQuotes > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#D4AF37] text-slate-950 text-[10px] font-extrabold">
                {pendingQuotes}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'contacts' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            <span>Contact Inquiries</span>
            {unreadContacts > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold">
                {unreadContacts}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'products' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Manage Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'services' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Manage Services ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'gallery' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Manage Gallery ({gallery.length})
          </button>
          <button
            onClick={() => setActiveTab('emails')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'emails' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Email Notification Logs ({emailLogs.length})
          </button>
          <button
            onClick={() => {
              setSettingsForm(settings);
              setActiveTab('settings');
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'settings' ? 'bg-[#12243F] text-[#D4AF37] font-bold' : 'hover:text-white'
            }`}
          >
            Company Info & Settings
          </button>
        </div>
      </div>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Metric Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-slate-400">Total Products</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">{products.length}</div>
                <button
                  onClick={() => setActiveTab('products')}
                  className="text-xs text-[#B8860B] font-semibold mt-2 hover:underline inline-block"
                >
                  Manage items →
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-slate-400">Total Services</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">{services.length}</div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-xs text-[#B8860B] font-semibold mt-2 hover:underline inline-block"
                >
                  Edit services →
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-slate-400">Gallery Assets</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">{gallery.length}</div>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="text-xs text-[#B8860B] font-semibold mt-2 hover:underline inline-block"
                >
                  View photos →
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-slate-400">Quote Requests</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                  <span>{quotes.length}</span>
                  {pendingQuotes > 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      {pendingQuotes} pending
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setActiveTab('quotes')}
                  className="text-xs text-[#B8860B] font-semibold mt-2 hover:underline inline-block"
                >
                  Review RFQs →
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-slate-400">Contact Inquiries</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                  <span>{contacts.length}</span>
                  {unreadContacts > 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                      {unreadContacts} unread
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setActiveTab('contacts')}
                  className="text-xs text-[#B8860B] font-semibold mt-2 hover:underline inline-block"
                >
                  Open inbox →
                </button>
              </div>
            </div>

            {/* Quick Overview Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Quotes */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 font-brand flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#B8860B]" />
                    <span>Recent RFQ Quote Submissions</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('quotes')}
                    className="text-xs font-semibold text-[#B8860B] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {quotes.slice(0, 3).map(quote => (
                    <div
                      key={quote.id}
                      onClick={() => {
                        setSelectedQuote(quote);
                        setQuotePriceEstimate(quote.estimatedPrice || '');
                        setQuoteNotes(quote.internalNotes || '');
                        setActiveTab('quotes');
                      }}
                      className="p-3.5 rounded-lg bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">{quote.name} ({quote.companyName})</div>
                        <div className="text-[11px] text-slate-500">
                          {quote.quantity} {quote.unit} • {quote.requiredService}
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        quote.status === 'pending'
                          ? 'bg-amber-100 text-amber-900'
                          : quote.status === 'quoted'
                          ? 'bg-emerald-100 text-emerald-900'
                          : 'bg-blue-100 text-blue-900'
                      }`}>
                        {quote.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 font-brand flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#B8860B]" />
                    <span>Recent Contact Inquiries</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('contacts')}
                    className="text-xs font-semibold text-[#B8860B] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {contacts.slice(0, 3).map(msg => (
                    <div
                      key={msg.id}
                      onClick={() => {
                        setSelectedContact(msg);
                        setContactNotes(msg.internalNotes || '');
                        setActiveTab('contacts');
                      }}
                      className="p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">{msg.fullName} ({msg.company || 'Direct'})</div>
                        <div className="text-[11px] text-slate-500 truncate max-w-xs">{msg.subject || msg.message}</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        msg.status === 'unread' ? 'bg-rose-100 text-rose-900' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {msg.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: QUOTE REQUESTS */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-brand">Quotation Inquiries (RFQs)</h2>
                <p className="text-xs text-slate-500">Review commercial processing specs, calculate rate cards, and update status.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Quotes List */}
              <div className="lg:col-span-7 space-y-3">
                {quotes.map(quote => (
                  <div
                    key={quote.id}
                    onClick={() => {
                      setSelectedQuote(quote);
                      setQuotePriceEstimate(quote.estimatedPrice || '');
                      setQuoteNotes(quote.internalNotes || '');
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedQuote?.id === quote.id
                        ? 'bg-amber-50/50 border-[#D4AF37] shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-bold text-slate-900">{quote.name}</div>
                        <div className="text-xs font-semibold text-[#B8860B]">{quote.companyName}</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        quote.status === 'pending'
                          ? 'bg-amber-100 text-amber-900'
                          : quote.status === 'quoted'
                          ? 'bg-emerald-100 text-emerald-900'
                          : quote.status === 'reviewing'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {quote.status}
                      </span>
                    </div>

                    <div className="mt-2 text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Qty:</strong> {quote.quantity} {quote.unit}</span>
                      <span><strong>Service:</strong> {quote.requiredService}</span>
                      <span><strong>Date:</strong> {new Date(quote.createdAt).toLocaleDateString()}</span>
                    </div>

                    {quote.fabricSpecs && (
                      <div className="mt-2 text-[11px] text-slate-500 bg-white/70 p-2 rounded border border-slate-100">
                        {quote.fabricSpecs}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Selected Quote Detail & Management */}
              <div className="lg:col-span-5">
                {selectedQuote ? (
                  <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400">RFQ #{selectedQuote.id}</span>
                        <h3 className="text-base font-bold text-slate-900">{selectedQuote.companyName}</h3>
                      </div>
                      <button
                        onClick={() => deleteQuoteRequest(selectedQuote.id)}
                        className="text-rose-600 hover:text-rose-800 p-1"
                        title="Delete Quote"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div><strong>Contact Person:</strong> {selectedQuote.name}</div>
                      <div><strong>Email:</strong> <a href={`mailto:${selectedQuote.email}`} className="text-blue-600 hover:underline">{selectedQuote.email}</a></div>
                      <div><strong>Phone:</strong> <a href={`tel:${selectedQuote.phone}`} className="text-blue-600 hover:underline">{selectedQuote.phone}</a></div>
                      <div><strong>Service:</strong> {selectedQuote.requiredService}</div>
                      <div><strong>Product / Fabric:</strong> {selectedQuote.productType || 'Custom'}</div>
                      <div><strong>Quantity:</strong> {selectedQuote.quantity} {selectedQuote.unit}</div>
                      <div><strong>Specs:</strong> {selectedQuote.fabricSpecs || 'N/A'}</div>
                      <div><strong>Delivery Target:</strong> {selectedQuote.targetDate || 'Flexible'}</div>
                      {selectedQuote.message && (
                        <div className="p-3 bg-slate-50 rounded-lg text-slate-600 border border-slate-200">
                          <strong>Buyer Remarks:</strong> {selectedQuote.message}
                        </div>
                      )}
                    </div>

                    {/* Status & Pricing Update */}
                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Status Workflow</label>
                        <select
                          value={selectedQuote.status}
                          onChange={e => updateQuoteStatus(selectedQuote.id, e.target.value as any, quotePriceEstimate, quoteNotes)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900"
                        >
                          <option value="pending">Pending Review</option>
                          <option value="reviewing">Under Technical Review</option>
                          <option value="quoted">Quoted / Rate Sent</option>
                          <option value="fulfilled">Fulfilled / Contract Signed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Rate / Quote Value</label>
                        <input
                          type="text"
                          placeholder="e.g. PKR 140 / meter or $1.20 / yard"
                          value={quotePriceEstimate}
                          onChange={e => setQuotePriceEstimate(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Internal Mill Notes</label>
                        <textarea
                          rows={2}
                          placeholder="Lab dip sent, awaiting greige fabric inspection..."
                          value={quoteNotes}
                          onChange={e => setQuoteNotes(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 resize-none"
                        />
                      </div>

                      <button
                        onClick={() => updateQuoteStatus(selectedQuote.id, selectedQuote.status, quotePriceEstimate, quoteNotes)}
                        className="w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save RFQ Updates</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-xs text-slate-500">
                    Select a quotation request on the left to view details and update pricing.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT INQUIRIES */}
        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-brand">Contact Inquiries Inbox</h2>
              <p className="text-xs text-slate-500">Review direct messages from buyers, suppliers, and partners.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-3">
                {contacts.map(msg => (
                  <div
                    key={msg.id}
                    onClick={() => {
                      setSelectedContact(msg);
                      setContactNotes(msg.internalNotes || '');
                      if (msg.status === 'unread') {
                        updateContactStatus(msg.id, 'read');
                      }
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedContact?.id === msg.id
                        ? 'bg-amber-50/50 border-[#D4AF37] shadow-sm'
                        : msg.status === 'unread'
                        ? 'bg-rose-50/40 border-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{msg.fullName} ({msg.company || 'Individual'})</div>
                        <div className="text-xs font-semibold text-slate-700 mt-0.5">{msg.subject || 'Website Inquiry'}</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        msg.status === 'unread'
                          ? 'bg-rose-100 text-rose-800'
                          : msg.status === 'replied'
                          ? 'bg-emerald-100 text-emerald-900'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {msg.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-snug">{msg.message}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5">
                {selectedContact ? (
                  <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{selectedContact.fullName}</h3>
                        <span className="text-xs text-slate-500">{selectedContact.company}</span>
                      </div>
                      <button
                        onClick={() => deleteContactMessage(selectedContact.id)}
                        className="text-rose-600 hover:text-rose-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div><strong>Email:</strong> <a href={`mailto:${selectedContact.email}`} className="text-blue-600 hover:underline">{selectedContact.email}</a></div>
                      <div><strong>Phone:</strong> <a href={`tel:${selectedContact.phone}`} className="text-blue-600 hover:underline">{selectedContact.phone}</a></div>
                      <div><strong>Subject:</strong> {selectedContact.subject}</div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap">
                        {selectedContact.message}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                        <select
                          value={selectedContact.status}
                          onChange={e => updateContactStatus(selectedContact.id, e.target.value as any, contactNotes)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold"
                        >
                          <option value="unread">Unread</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Internal Notes</label>
                        <textarea
                          rows={2}
                          value={contactNotes}
                          onChange={e => setContactNotes(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs resize-none"
                        />
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`mailto:${selectedContact.email}?subject=Re: ${encodeURIComponent(selectedContact.subject || 'Al-Noor Textile Inquiry')}`}
                          className="flex-1 py-2 rounded-lg text-xs font-bold text-center bg-[#0B192C] text-white hover:bg-[#12243F]"
                        >
                          Direct Email Reply
                        </a>
                        <button
                          onClick={() => updateContactStatus(selectedContact.id, 'replied', contactNotes)}
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700"
                        >
                          Mark Replied
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-xs text-slate-500">
                    Select a message to view full text and reply.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE PRODUCTS */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-brand">Fabric Catalog Items</h2>
                <p className="text-xs text-slate-500">Add, edit, or remove fabrics displayed in the website catalog.</p>
              </div>

              <button
                onClick={() => {
                  setEditingProduct(null);
                  setProductForm({
                    name: '',
                    category: 'Dyed Fabrics',
                    description: '',
                    weave: '3/1 Twill',
                    gsm: '240 GSM',
                    width: '58 inches',
                    composition: '100% Cotton',
                    finishType: 'Sanforized',
                    dyeingMethod: 'Pad-Steam Reactive',
                    minOrder: '3,000 Meters',
                    image: '/src/assets/images/fabric_dyeing_process_1790250563187.jpg'
                  });
                  setIsProductModalOpen(true);
                }}
                className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Fabric</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(prod => (
                <div key={prod.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div className="relative h-40 bg-slate-100">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#0B192C]/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{prod.name}</h3>
                    <div className="text-[11px] text-slate-500 space-y-0.5">
                      <div>Weight: <span className="font-semibold text-slate-700">{prod.gsm}</span></div>
                      <div>Weave: <span className="font-semibold text-slate-700">{prod.weave}</span></div>
                      <div>Width: <span className="font-semibold text-slate-700">{prod.width}</span></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingProduct(prod);
                        setProductForm({
                          name: prod.name,
                          category: prod.category,
                          description: prod.description,
                          weave: prod.weave,
                          gsm: prod.gsm,
                          width: prod.width,
                          composition: prod.composition,
                          finishType: prod.finishType,
                          dyeingMethod: prod.dyeingMethod,
                          minOrder: prod.minOrder,
                          image: prod.image
                        });
                        setIsProductModalOpen(true);
                      }}
                      className="px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1"
                    >
                      <Edit2 className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(prod.id)}
                      className="px-3 py-1.5 rounded bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 hover:bg-rose-100 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: MANAGE SERVICES */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-brand">Core Textile Services</h2>
              <p className="text-xs text-slate-500">Edit detailed descriptions and technical benefits of company services.</p>
            </div>

            <div className="space-y-4">
              {services.map(srv => (
                <div key={srv.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#B8860B]">{srv.slug}</span>
                      <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
                    </div>
                    <button
                      onClick={() => setEditingService(srv)}
                      className="px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit Content
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{srv.fullDesc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                    {srv.keyBenefits.map((b, bi) => (
                      <div key={bi} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: MANAGE GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-brand">Plant & Machinery Gallery</h2>
                <p className="text-xs text-slate-500">Add or manage imagery showcasing Al-Noor’s Faisalabad facility.</p>
              </div>

              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" /> Add Gallery Image
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gallery.map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div className="relative h-44 bg-slate-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#0B192C]/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</div>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{item.description}</p>
                  </div>
                  <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => deleteGalleryItem(item.id)}
                      className="text-rose-600 hover:text-rose-800 text-xs font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: EMAIL NOTIFICATION LOGS */}
        {activeTab === 'emails' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-brand">Automated Email Notification Logs</h2>
              <p className="text-xs text-slate-500">
                Whenever a client submits a quote request or contact message, a real-time notification record is dispatched to:
                <span className="font-mono text-[#B8860B] font-bold ml-1">{settings.supportEmail}, {settings.primaryEmail}</span>.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Event Type</th>
                    <th className="py-3 px-4">Recipient</th>
                    <th className="py-3 px-4">Sender Info</th>
                    <th className="py-3 px-4">Subject & Preview</th>
                    <th className="py-3 px-4">Timestamp</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {emailLogs.map(log => (
                    <tr key={log.id} className="hover:bg-slate-50/60">
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          log.type === 'quote' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'
                        }`}>
                          {log.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-700">{log.recipient}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{log.senderName}</div>
                        <div className="text-[11px] text-slate-500">{log.senderEmail}</div>
                      </td>
                      <td className="py-3 px-4 max-w-sm">
                        <div className="font-semibold text-slate-900">{log.subject}</div>
                        <div className="text-[11px] text-slate-500 truncate">{log.preview}</div>
                      </td>
                      <td className="py-3 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                        {new Date(log.sentAt).toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Delivered
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 8: SETTINGS & CONTENT */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 max-w-4xl">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-brand">Company Information & Mill Content</h2>
              <p className="text-xs text-slate-500">Update company address, contact phone numbers, tagline, and operational statistics.</p>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                updateSettings(settingsForm);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Company Legal Name</label>
                  <input
                    type="text"
                    value={settingsForm.legalName}
                    onChange={e => setSettingsForm({ ...settingsForm, legalName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Brand Tagline</label>
                  <input
                    type="text"
                    value={settingsForm.tagline}
                    onChange={e => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Subtitle / Value Proposition</label>
                <input
                  type="text"
                  value={settingsForm.subtitle}
                  onChange={e => setSettingsForm({ ...settingsForm, subtitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mill Street Address</label>
                  <input
                    type="text"
                    value={settingsForm.address}
                    onChange={e => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={settingsForm.city}
                    onChange={e => setSettingsForm({ ...settingsForm, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={settingsForm.country}
                    onChange={e => setSettingsForm({ ...settingsForm, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Phone</label>
                  <input
                    type="text"
                    value={settingsForm.primaryPhone}
                    onChange={e => setSettingsForm({ ...settingsForm, primaryPhone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Email</label>
                  <input
                    type="email"
                    value={settingsForm.primaryEmail}
                    onChange={e => setSettingsForm({ ...settingsForm, primaryEmail: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={settingsForm.whatsappNumber}
                    onChange={e => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Years Experience</label>
                  <input
                    type="number"
                    value={settingsForm.yearsExperience}
                    onChange={e => setSettingsForm({ ...settingsForm, yearsExperience: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Skilled Employees</label>
                  <input
                    type="number"
                    value={settingsForm.employeesCount}
                    onChange={e => setSettingsForm({ ...settingsForm, employeesCount: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Meters Processed</label>
                  <input
                    type="text"
                    value={settingsForm.metersProcessed}
                    onChange={e => setSettingsForm({ ...settingsForm, metersProcessed: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Quality Focus %</label>
                  <input
                    type="number"
                    value={settingsForm.qualityFocus}
                    onChange={e => setSettingsForm({ ...settingsForm, qualityFocus: parseInt(e.target.value) || 100 })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mission Statement</label>
                <textarea
                  rows={2}
                  value={settingsForm.mission}
                  onChange={e => setSettingsForm({ ...settingsForm, mission: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Company Settings</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Product Add / Edit Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 font-brand">
                {editingProduct ? 'Edit Fabric Product' : 'Add New Fabric Product'}
              </h3>
              <button onClick={() => setIsProductModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                if (editingProduct) {
                  editProduct({ ...productForm, id: editingProduct.id });
                } else {
                  addProduct(productForm);
                }
                setIsProductModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Fabric Name *</label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category *</label>
                  <select
                    value={productForm.category}
                    onChange={e => setProductForm({ ...productForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  >
                    <option value="Processed Fabrics">Processed Fabrics</option>
                    <option value="Dyed Fabrics">Dyed Fabrics</option>
                    <option value="Finished Fabrics">Finished Fabrics</option>
                    <option value="Custom Textile Solutions">Custom Textile Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Weight / GSM *</label>
                  <input
                    type="text"
                    required
                    value={productForm.gsm}
                    onChange={e => setProductForm({ ...productForm, gsm: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Weave Pattern</label>
                  <input
                    type="text"
                    value={productForm.weave}
                    onChange={e => setProductForm({ ...productForm, weave: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Finished Width</label>
                  <input
                    type="text"
                    value={productForm.width}
                    onChange={e => setProductForm({ ...productForm, width: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Composition</label>
                  <input
                    type="text"
                    value={productForm.composition}
                    onChange={e => setProductForm({ ...productForm, composition: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Minimum Order</label>
                  <input
                    type="text"
                    value={productForm.minOrder}
                    onChange={e => setProductForm({ ...productForm, minOrder: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={productForm.description}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Image URL / Path</label>
                <input
                  type="text"
                  value={productForm.image}
                  onChange={e => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-xs uppercase font-bold text-slate-950 gold-gradient-bg hover:brightness-110"
                >
                  Save Fabric Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Service Edit Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 font-brand">
                Edit Service: {editingService.title}
              </h3>
              <button onClick={() => setEditingService(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                editService(editingService);
                setEditingService(null);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={editingService.shortDesc}
                  onChange={e => setEditingService({ ...editingService, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Comprehensive Full Description</label>
                <textarea
                  rows={4}
                  value={editingService.fullDesc}
                  onChange={e => setEditingService({ ...editingService, fullDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 resize-none"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-xs uppercase font-bold text-slate-950 gold-gradient-bg hover:brightness-110"
                >
                  Save Service Content
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Add Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 font-brand">Add Gallery Asset</h3>
              <button onClick={() => setIsGalleryModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                addGalleryItem(galleryForm);
                setIsGalleryModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={e => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={galleryForm.category}
                  onChange={e => setGalleryForm({ ...galleryForm, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <option value="Factory">Factory</option>
                  <option value="Machines">Machines</option>
                  <option value="Production">Production</option>
                  <option value="Team">Team</option>
                  <option value="Fabrics">Fabrics</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Image URL / Path *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.image}
                  onChange={e => setGalleryForm({ ...galleryForm, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description / Caption</label>
                <textarea
                  rows={2}
                  value={galleryForm.description}
                  onChange={e => setGalleryForm({ ...galleryForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 resize-none"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-xs uppercase font-bold text-slate-950 gold-gradient-bg hover:brightness-110"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
