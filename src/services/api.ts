import {
  Product,
  Service,
  GalleryItem,
  CompanySettings,
  ContactMessage,
  QuoteRequest,
  EmailNotificationLog
} from '../types';
import {
  INITIAL_COMPANY_SETTINGS,
  INITIAL_SERVICES,
  INITIAL_PRODUCTS,
  INITIAL_GALLERY,
  INITIAL_CONTACTS,
  INITIAL_QUOTES
} from '../data/initialData';

const STORAGE_KEYS = {
  SETTINGS: 'alnoor_settings',
  SERVICES: 'alnoor_services',
  PRODUCTS: 'alnoor_products',
  GALLERY: 'alnoor_gallery',
  CONTACTS: 'alnoor_contacts',
  QUOTES: 'alnoor_quotes',
  EMAIL_LOGS: 'alnoor_email_logs',
  AUTH_TOKEN: 'alnoor_auth_token'
};

// Helper for local state fallback
function getLocal<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Local storage error', e);
  }
}

export const api = {
  // Settings
  async getSettings(): Promise<CompanySettings> {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.SETTINGS, data);
        return data;
      }
    } catch {
      // Fallback
    }
    return getLocal(STORAGE_KEYS.SETTINGS, INITIAL_COMPANY_SETTINGS);
  },

  async updateSettings(settings: CompanySettings): Promise<CompanySettings> {
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || ''}`
        },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.SETTINGS, data);
        return data;
      }
    } catch {
      // Fallback
    }
    setLocal(STORAGE_KEYS.SETTINGS, settings);
    return settings;
  },

  // Services
  async getServices(): Promise<Service[]> {
    try {
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.SERVICES, data);
        return data;
      }
    } catch {}
    return getLocal(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  },

  async updateService(service: Service): Promise<Service> {
    const list = await this.getServices();
    const updated = list.map(s => s.id === service.id ? service : s);
    setLocal(STORAGE_KEYS.SERVICES, updated);
    try {
      await fetch(`/api/services/${service.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(service)
      });
    } catch {}
    return service;
  },

  // Products
  async getProducts(): Promise<Product[]> {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.PRODUCTS, data);
        return data;
      }
    } catch {}
    return getLocal(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
  },

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct: Product = {
      ...product,
      id: 'prod-' + Date.now()
    };
    const list = await this.getProducts();
    const updated = [newProduct, ...list];
    setLocal(STORAGE_KEYS.PRODUCTS, updated);
    try {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
    } catch {}
    return newProduct;
  },

  async updateProduct(product: Product): Promise<Product> {
    const list = await this.getProducts();
    const updated = list.map(p => p.id === product.id ? product : p);
    setLocal(STORAGE_KEYS.PRODUCTS, updated);
    try {
      await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
    } catch {}
    return product;
  },

  async deleteProduct(id: string): Promise<boolean> {
    const list = await this.getProducts();
    const updated = list.filter(p => p.id !== id);
    setLocal(STORAGE_KEYS.PRODUCTS, updated);
    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
    } catch {}
    return true;
  },

  // Gallery
  async getGallery(): Promise<GalleryItem[]> {
    try {
      const res = await fetch('/api/gallery');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.GALLERY, data);
        return data;
      }
    } catch {}
    return getLocal(STORAGE_KEYS.GALLERY, INITIAL_GALLERY);
  },

  async addGalleryItem(item: Omit<GalleryItem, 'id'>): Promise<GalleryItem> {
    const newItem: GalleryItem = { ...item, id: 'gal-' + Date.now() };
    const list = await this.getGallery();
    const updated = [newItem, ...list];
    setLocal(STORAGE_KEYS.GALLERY, updated);
    try {
      await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
    } catch {}
    return newItem;
  },

  async deleteGalleryItem(id: string): Promise<boolean> {
    const list = await this.getGallery();
    const updated = list.filter(g => g.id !== id);
    setLocal(STORAGE_KEYS.GALLERY, updated);
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    } catch {}
    return true;
  },

  // Contacts
  async getContacts(): Promise<ContactMessage[]> {
    try {
      const res = await fetch('/api/contacts');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.CONTACTS, data);
        return data;
      }
    } catch {}
    return getLocal(STORAGE_KEYS.CONTACTS, INITIAL_CONTACTS);
  },

  async submitContact(msg: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<ContactMessage> {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      status: 'unread',
      createdAt: new Date().toISOString()
    };
    const list = await this.getContacts();
    const updated = [newMsg, ...list];
    setLocal(STORAGE_KEYS.CONTACTS, updated);

    // Email notification simulation
    this.logEmailNotification({
      id: 'email-' + Date.now(),
      type: 'contact',
      recipient: 'mushahidrafiqe744@gmail.com, info@alnoortextile.com',
      senderName: msg.fullName,
      senderEmail: msg.email,
      subject: `[Al-Noor Website Inquiry] ${msg.subject || 'New Contact Message'}`,
      preview: `From: ${msg.fullName} (${msg.company || 'N/A'})\nPhone: ${msg.phone}\nMessage: ${msg.message.slice(0, 140)}...`,
      sentAt: new Date().toISOString(),
      status: 'delivered'
    });

    try {
      await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMsg)
      });
    } catch {}
    return newMsg;
  },

  async updateContact(id: string, updates: Partial<ContactMessage>): Promise<ContactMessage | null> {
    const list = await this.getContacts();
    let updatedItem: ContactMessage | null = null;
    const updated = list.map(c => {
      if (c.id === id) {
        updatedItem = { ...c, ...updates };
        return updatedItem;
      }
      return c;
    });
    setLocal(STORAGE_KEYS.CONTACTS, updated);
    try {
      await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch {}
    return updatedItem;
  },

  async deleteContact(id: string): Promise<boolean> {
    const list = await this.getContacts();
    const updated = list.filter(c => c.id !== id);
    setLocal(STORAGE_KEYS.CONTACTS, updated);
    try {
      await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    } catch {}
    return true;
  },

  // Quotes
  async getQuotes(): Promise<QuoteRequest[]> {
    try {
      const res = await fetch('/api/quotes');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.QUOTES, data);
        return data;
      }
    } catch {}
    return getLocal(STORAGE_KEYS.QUOTES, INITIAL_QUOTES);
  },

  async submitQuote(quote: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<QuoteRequest> {
    const newQuote: QuoteRequest = {
      ...quote,
      id: 'quote-' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    const list = await this.getQuotes();
    const updated = [newQuote, ...list];
    setLocal(STORAGE_KEYS.QUOTES, updated);

    // Email notification simulation
    this.logEmailNotification({
      id: 'email-' + Date.now(),
      type: 'quote',
      recipient: 'mushahidrafiqe744@gmail.com, info@alnoortextile.com',
      senderName: quote.name,
      senderEmail: quote.email,
      subject: `[New RFQ Request] ${quote.productType || quote.requiredService} - ${quote.quantity} ${quote.unit}`,
      preview: `Quotation requested by ${quote.name} (${quote.companyName}).\nQuantity: ${quote.quantity} ${quote.unit}\nService: ${quote.requiredService}\nSpecs: ${quote.fabricSpecs}`,
      sentAt: new Date().toISOString(),
      status: 'delivered'
    });

    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuote)
      });
    } catch {}
    return newQuote;
  },

  async updateQuote(id: string, updates: Partial<QuoteRequest>): Promise<QuoteRequest | null> {
    const list = await this.getQuotes();
    let updatedItem: QuoteRequest | null = null;
    const updated = list.map(q => {
      if (q.id === id) {
        updatedItem = { ...q, ...updates };
        return updatedItem;
      }
      return q;
    });
    setLocal(STORAGE_KEYS.QUOTES, updated);
    try {
      await fetch(`/api/quotes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch {}
    return updatedItem;
  },

  async deleteQuote(id: string): Promise<boolean> {
    const list = await this.getQuotes();
    const updated = list.filter(q => q.id !== id);
    setLocal(STORAGE_KEYS.QUOTES, updated);
    try {
      await fetch(`/api/quotes/${id}`, { method: 'DELETE' });
    } catch {}
    return true;
  },

  // Email Notification logs
  getEmailLogs(): EmailNotificationLog[] {
    return getLocal(STORAGE_KEYS.EMAIL_LOGS, [
      {
        id: 'email-init-1',
        type: 'quote',
        recipient: 'mushahidrafiqe744@gmail.com, info@alnoortextile.com',
        senderName: 'Muhammad Farooq',
        senderEmail: 'm.farooq@kohinoorgarments.pk',
        subject: '[New RFQ Request] 100% Combed Cotton Dyed Twill 3/1 - 25000 Meters',
        preview: 'Quotation requested by Muhammad Farooq (Kohinoor Garments (Pvt) Ltd). Specs: 240 GSM, 58" width.',
        sentAt: '2026-09-21T09:20:05Z',
        status: 'delivered'
      },
      {
        id: 'email-init-2',
        type: 'contact',
        recipient: 'mushahidrafiqe744@gmail.com, info@alnoortextile.com',
        senderName: 'David Richardson',
        senderEmail: 'david.r@richardsontextiles.co.uk',
        subject: '[Al-Noor Website Inquiry] Export Processing for Hospital Bedding Fabrics',
        preview: 'Looking for a reliable processing mill in Faisalabad for bleaching and sanforizing 50/50 poly-cotton sheeting.',
        sentAt: '2026-09-23T14:30:10Z',
        status: 'delivered'
      }
    ]);
  },

  logEmailNotification(log: EmailNotificationLog): void {
    const logs = this.getEmailLogs();
    const updated = [log, ...logs];
    setLocal(STORAGE_KEYS.EMAIL_LOGS, updated);
  }
};
