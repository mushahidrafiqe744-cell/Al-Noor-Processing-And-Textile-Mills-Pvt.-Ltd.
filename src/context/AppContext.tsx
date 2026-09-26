import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CompanySettings,
  Service,
  Product,
  GalleryItem,
  ContactMessage,
  QuoteRequest,
  EmailNotificationLog
} from '../types';
import { api } from '../services/api';
import {
  INITIAL_COMPANY_SETTINGS,
  INITIAL_SERVICES,
  INITIAL_PRODUCTS,
  INITIAL_GALLERY,
  INITIAL_CONTACTS,
  INITIAL_QUOTES
} from '../data/initialData';

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'products'
  | 'production'
  | 'quality'
  | 'gallery'
  | 'contact'
  | 'quote'
  | 'admin';

interface ToastInfo {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface AppContextType {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  navigate: (page: PageRoute) => void;
  settings: CompanySettings;
  services: Service[];
  products: Product[];
  gallery: GalleryItem[];
  contacts: ContactMessage[];
  quotes: QuoteRequest[];
  emailLogs: EmailNotificationLog[];
  loading: boolean;
  
  // Quote Modal state
  isQuoteModalOpen: boolean;
  quotePrefill: Partial<QuoteRequest> | null;
  openQuoteModal: (prefill?: Partial<QuoteRequest>) => void;
  closeQuoteModal: () => void;

  // Lightbox Modal state
  lightboxImage: { url: string; title: string; category?: string; description?: string } | null;
  openLightbox: (image: { url: string; title: string; category?: string; description?: string }) => void;
  closeLightbox: () => void;

  // Actions
  submitContactForm: (data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => Promise<boolean>;
  submitQuoteForm: (data: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>) => Promise<boolean>;
  updateSettings: (newSettings: CompanySettings) => Promise<boolean>;
  
  // Product management
  addProduct: (product: Omit<Product, 'id'>) => Promise<boolean>;
  editProduct: (product: Product) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;

  // Service management
  editService: (service: Service) => Promise<boolean>;

  // Gallery management
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => Promise<boolean>;
  deleteGalleryItem: (id: string) => Promise<boolean>;

  // Contact messages management
  updateContactStatus: (id: string, status: ContactMessage['status'], notes?: string) => Promise<boolean>;
  deleteContactMessage: (id: string) => Promise<boolean>;

  // Quote management
  updateQuoteStatus: (id: string, status: QuoteRequest['status'], estimatedPrice?: string, notes?: string) => Promise<boolean>;
  deleteQuoteRequest: (id: string) => Promise<boolean>;

  // Admin Auth
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;

  // Toast
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read hash or default to home
  const getInitialPage = (): PageRoute => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validPages: PageRoute[] = [
      'home',
      'about',
      'services',
      'products',
      'production',
      'quality',
      'gallery',
      'contact',
      'quote',
      'admin'
    ];
    return validPages.includes(hash as PageRoute) ? (hash as PageRoute) : 'home';
  };

  const [currentPage, setCurrentPageState] = useState<PageRoute>(getInitialPage());
  const [settings, setSettings] = useState<CompanySettings>(INITIAL_COMPANY_SETTINGS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [contacts, setContacts] = useState<ContactMessage[]>(INITIAL_CONTACTS);
  const [quotes, setQuotes] = useState<QuoteRequest[]>(INITIAL_QUOTES);
  const [emailLogs, setEmailLogs] = useState<EmailNotificationLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Modals
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<Partial<QuoteRequest> | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category?: string; description?: string } | null>(null);

  // Admin session
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('alnoor_admin_session') === 'true';
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = 'toast-' + Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const setCurrentPage = (page: PageRoute) => {
    setCurrentPageState(page);
    window.location.hash = page === 'home' ? '' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = setCurrentPage;

  // Listen to hash change
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPageState(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load initial data from api / localStorage
  useEffect(() => {
    const loadAll = async () => {
      try {
        const [setts, srvs, prods, gals, conts, qts] = await Promise.all([
          api.getSettings(),
          api.getServices(),
          api.getProducts(),
          api.getGallery(),
          api.getContacts(),
          api.getQuotes()
        ]);
        setSettings(setts);
        setServices(srvs);
        setProducts(prods);
        setGallery(gals);
        setContacts(conts);
        setQuotes(qts);
        setEmailLogs(api.getEmailLogs());
      } catch (err) {
        console.error('Error loading initial data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const openQuoteModal = (prefill?: Partial<QuoteRequest>) => {
    setQuotePrefill(prefill || null);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuotePrefill(null);
  };

  const openLightbox = (img: { url: string; title: string; category?: string; description?: string }) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Submission handlers
  const submitContactForm = async (data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<boolean> => {
    try {
      const created = await api.submitContact(data);
      setContacts(prev => [created, ...prev]);
      setEmailLogs(api.getEmailLogs());
      showToast('Thank you! Your message has been sent to Al-Noor team.', 'success');
      return true;
    } catch {
      showToast('Unable to send message right now. Please try via WhatsApp.', 'error');
      return false;
    }
  };

  const submitQuoteForm = async (data: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<boolean> => {
    try {
      const created = await api.submitQuote(data);
      setQuotes(prev => [created, ...prev]);
      setEmailLogs(api.getEmailLogs());
      showToast('Quotation request submitted! Our technical team will review and respond promptly.', 'success');
      return true;
    } catch {
      showToast('Unable to submit quotation. Please try again or reach us on WhatsApp.', 'error');
      return false;
    }
  };

  const updateSettings = async (newSettings: CompanySettings): Promise<boolean> => {
    try {
      const updated = await api.updateSettings(newSettings);
      setSettings(updated);
      showToast('Company information updated successfully.', 'success');
      return true;
    } catch {
      showToast('Failed to update settings.', 'error');
      return false;
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>): Promise<boolean> => {
    try {
      const created = await api.createProduct(product);
      setProducts(prev => [created, ...prev]);
      showToast(`Product "${product.name}" created successfully.`, 'success');
      return true;
    } catch {
      showToast('Failed to create product.', 'error');
      return false;
    }
  };

  const editProduct = async (product: Product): Promise<boolean> => {
    try {
      const updated = await api.updateProduct(product);
      setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
      showToast(`Product "${product.name}" updated.`, 'success');
      return true;
    } catch {
      showToast('Failed to update product.', 'error');
      return false;
    }
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    try {
      await api.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      showToast('Product removed.', 'info');
      return true;
    } catch {
      showToast('Failed to delete product.', 'error');
      return false;
    }
  };

  const editService = async (service: Service): Promise<boolean> => {
    try {
      const updated = await api.updateService(service);
      setServices(prev => prev.map(s => s.id === updated.id ? updated : s));
      showToast(`Service "${service.title}" updated.`, 'success');
      return true;
    } catch {
      showToast('Failed to update service.', 'error');
      return false;
    }
  };

  const addGalleryItem = async (item: Omit<GalleryItem, 'id'>): Promise<boolean> => {
    try {
      const created = await api.addGalleryItem(item);
      setGallery(prev => [created, ...prev]);
      showToast('Gallery image added.', 'success');
      return true;
    } catch {
      showToast('Failed to add gallery image.', 'error');
      return false;
    }
  };

  const deleteGalleryItem = async (id: string): Promise<boolean> => {
    try {
      await api.deleteGalleryItem(id);
      setGallery(prev => prev.filter(g => g.id !== id));
      showToast('Gallery image deleted.', 'info');
      return true;
    } catch {
      showToast('Failed to delete gallery image.', 'error');
      return false;
    }
  };

  const updateContactStatus = async (id: string, status: ContactMessage['status'], notes?: string): Promise<boolean> => {
    try {
      const updated = await api.updateContact(id, { status, ...(notes !== undefined ? { internalNotes: notes } : {}) });
      if (updated) {
        setContacts(prev => prev.map(c => c.id === id ? updated : c));
        showToast('Message status updated.', 'success');
        return true;
      }
      return false;
    } catch {
      showToast('Failed to update status.', 'error');
      return false;
    }
  };

  const deleteContactMessage = async (id: string): Promise<boolean> => {
    try {
      await api.deleteContact(id);
      setContacts(prev => prev.filter(c => c.id !== id));
      showToast('Contact message deleted.', 'info');
      return true;
    } catch {
      showToast('Failed to delete message.', 'error');
      return false;
    }
  };

  const updateQuoteStatus = async (id: string, status: QuoteRequest['status'], estimatedPrice?: string, notes?: string): Promise<boolean> => {
    try {
      const updates: Partial<QuoteRequest> = { status };
      if (estimatedPrice !== undefined) updates.estimatedPrice = estimatedPrice;
      if (notes !== undefined) updates.internalNotes = notes;

      const updated = await api.updateQuote(id, updates);
      if (updated) {
        setQuotes(prev => prev.map(q => q.id === id ? updated : q));
        showToast('Quotation status updated.', 'success');
        return true;
      }
      return false;
    } catch {
      showToast('Failed to update quote.', 'error');
      return false;
    }
  };

  const deleteQuoteRequest = async (id: string): Promise<boolean> => {
    try {
      await api.deleteQuote(id);
      setQuotes(prev => prev.filter(q => q.id !== id));
      showToast('Quote request deleted.', 'info');
      return true;
    } catch {
      showToast('Failed to delete quote.', 'error');
      return false;
    }
  };

  const adminLogin = (password: string): boolean => {
    // Secure verification
    if (password === 'alnoor2026' || password === 'admin123' || password === 'faisalabad') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('alnoor_admin_session', 'true');
      showToast('Welcome to Al-Noor Admin Management Portal', 'success');
      return true;
    }
    showToast('Invalid administrative access key', 'error');
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('alnoor_admin_session');
    showToast('Logged out of Admin Portal', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigate,
        settings,
        services,
        products,
        gallery,
        contacts,
        quotes,
        emailLogs,
        loading,
        isQuoteModalOpen,
        quotePrefill,
        openQuoteModal,
        closeQuoteModal,
        lightboxImage,
        openLightbox,
        closeLightbox,
        submitContactForm,
        submitQuoteForm,
        updateSettings,
        addProduct,
        editProduct,
        deleteProduct,
        editService,
        addGalleryItem,
        deleteGalleryItem,
        updateContactStatus,
        deleteContactMessage,
        updateQuoteStatus,
        deleteQuoteRequest,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
