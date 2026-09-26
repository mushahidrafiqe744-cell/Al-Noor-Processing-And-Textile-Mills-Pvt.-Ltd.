export interface Product {
  id: string;
  name: string;
  category: 'Processed Fabrics' | 'Dyed Fabrics' | 'Finished Fabrics' | 'Custom Textile Solutions';
  description: string;
  weave: string;
  gsm: string;
  width: string;
  composition: string;
  finishType: string;
  dyeingMethod: string;
  minOrder: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyBenefits: string[];
  capabilities: string[];
  processSteps: {
    step: number;
    name: string;
    description: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Factory' | 'Machines' | 'Production' | 'Team' | 'Fabrics';
  image: string;
  description: string;
  dimensions?: string;
  date?: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
  internalNotes?: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  productType: string;
  quantity: string;
  unit: 'Meters' | 'Yards' | 'Kilograms' | 'Rolls';
  requiredService: string;
  fabricSpecs: string;
  targetDate?: string;
  message: string;
  status: 'pending' | 'reviewing' | 'quoted' | 'fulfilled';
  estimatedPrice?: string;
  createdAt: string;
  internalNotes?: string;
}

export interface CompanySettings {
  companyName: string;
  legalName: string;
  tagline: string;
  subtitle: string;
  heroDescription: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  primaryPhone: string;
  secondaryPhone: string;
  primaryEmail: string;
  supportEmail: string;
  whatsappNumber: string;
  whatsappMessage: string;
  workingHours: string;
  yearsExperience: number;
  employeesCount: number;
  metersProcessed: string;
  qualityFocus: number;
  mission: string;
  vision: string;
  googleMapsEmbedUrl: string;
}

export interface EmailNotificationLog {
  id: string;
  type: 'contact' | 'quote';
  recipient: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  preview: string;
  sentAt: string;
  status: 'sent' | 'delivered';
}
