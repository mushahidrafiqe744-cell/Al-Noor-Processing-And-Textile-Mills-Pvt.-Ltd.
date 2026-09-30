import { Product, Service, GalleryItem, CompanySettings, ContactMessage, QuoteRequest } from '../types';
import { IMAGES } from '../assets/images';

export const INITIAL_COMPANY_SETTINGS: CompanySettings = {
  companyName: 'Al-Noor Processing & Textile Mills',
  legalName: 'Al-Noor Processing & Textile Mills (Pvt.) Ltd.',
  tagline: 'Quality Textile Processing, Built for Global Standards',
  subtitle: 'Delivering reliable textile processing solutions with a commitment to quality, consistency and customer satisfaction.',
  heroDescription: 'Equipped with continuous dyeing ranges, stenters, sanforizing machines, and in-house computerized QA labs in Faisalabad, Pakistan.',
  address: 'Chak No. 7-JB, Sargodha Road',
  city: 'Faisalabad',
  country: 'Pakistan',
  postalCode: '38000',
  primaryPhone: '+92 41 8781200',
  secondaryPhone: '+92 300 8654321',
  primaryEmail: 'info@alnoortextile.com',
  supportEmail: 'mushahidrafiqe744@gmail.com',
  whatsappNumber: '+923008654321',
  whatsappMessage: 'Hello Al-Noor Processing & Textile Mills, I would like to inquire regarding textile processing services.',
  workingHours: 'Monday - Saturday: 8:00 AM - 6:00 PM PKT',
  yearsExperience: 22,
  employeesCount: 50,
  metersProcessed: '10M+',
  qualityFocus: 100,
  mission: 'To deliver superior textile dyeing, printing, and fabric finishing solutions with precision, consistent color fastness, and ethical operational standards.',
  vision: 'To be South Asia’s most trusted and sustainable textile processing partner, advancing innovation and technology on Sargodha Road, Faisalabad.',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Sargodha+Road+Faisalabad+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed',
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Textile Processing',
    slug: 'textile-processing',
    icon: 'Layers',
    shortDesc: 'Comprehensive pre-treatment, desizing, scouring, bleaching, and mercerizing for cotton and synthetic blends.',
    fullDesc: 'Our integrated textile processing plant prepares greige fabric through advanced continuous open-width desizing, scouring, peroxide bleaching, and chainless mercerization.',
    image: IMAGES.aboutTextileProcessing,
    keyBenefits: [
      'Chainless mercerization for enhanced fabric luster & tensile strength',
      'Continuous open-width scouring reducing fabric tension & creasing',
      'Neutralizing core alkaline residue for superior dye affinity',
      'Consistent whiteness index (Berger Whiteness 75+)'
    ],
    capabilities: [
      'Greige to ready-for-dyeing (RFD)',
      'Peroxide bleaching on continuous ranges',
      'High-absorbency scour for twill, drill & poplin'
    ],
    processSteps: [
      { step: 1, name: 'Fabric Preparation', description: 'Batch grading, singeing, and removal of starch via enzymatic desizing.' },
      { step: 2, name: 'Dyeing', description: 'Continuous pad-steam, thermosol, and soft-flow reactive dyeing lines.' },
      { step: 3, name: 'Washing & Finishing', description: 'Thorough soaping, rinsing, multi-chamber stenter heat setting, and sanforizing.' },
      { step: 4, name: 'Quality Inspection', description: '100% lighted inspection tables applying the internationally recognized ASTM 4-Point System.' },
      { step: 5, name: 'Final Processing', description: 'Silicone and nano top-treatments for luxurious soft feel or specialized coatings.' },
      { step: 6, name: 'Packing & Dispatch', description: 'Wrapped, labeled, and securely packaged rolls prepared for direct dispatch.' }
    ]
  },
  {
    id: 'srv-2',
    title: 'Precision Dyeing',
    slug: 'dyeing',
    icon: 'Droplets',
    shortDesc: 'Precision shade reproduction using continuous pad-steam, thermosol, and reactive dyeing equipment.',
    fullDesc: 'We specialize in continuous reactive, vat, disperse, and pigment dyeing on automated pad-dry-pad-steam ranges.',
    image: IMAGES.productDyedFabrics,
    keyBenefits: [
      'Computerized color recipe formulation with Datacolor spectrophotometer',
      'High color fastness to washing (ISO 105-C06 Grade 4-5)',
      'Excellent rubbing fastness (wet & dry Grade 4)',
      'Even side-to-side and end-to-end shade consistency'
    ],
    capabilities: [
      'Continuous Pad-Steam (CPB) & Thermosol ranges',
      'Reactive, Vat, Disperse, and Direct Dyeing',
      '100% Cotton, Poly-Cotton (PC), CVC, Linen blends'
    ],
    processSteps: [
      { step: 1, name: 'Fabric Preparation', description: 'Ready-for-dyeing base check.' },
      { step: 2, name: 'Dyeing Process', description: 'Precise pad application & pre-drying.' },
      { step: 3, name: 'Fixation & Washing', description: 'Pad-steam or dry heat curing with optimal rinsing.' },
      { step: 4, name: 'Quality Inspection', description: 'Spectrophotometric shade validation.' },
      { step: 5, name: 'Final Processing', description: 'Chemical softening for perfect drape.' },
      { step: 6, name: 'Packing & Dispatch', description: 'Premium roll packing.' }
    ]
  },
  {
    id: 'srv-3',
    title: 'Fabric Finishing',
    slug: 'finishing',
    icon: 'Sparkles',
    shortDesc: 'Stentering, sanforizing, anti-shrink, and specialized chemical finishes.',
    fullDesc: 'Our multi-chamber stenter frames with weft-straightening optics and compressive shrinkage sanforizers.',
    image: IMAGES.productFinishedFabrics,
    keyBenefits: [
      'Automatic optical weft-straightener correcting bow & skew (<1.5%)',
      'Rubber belt compressive shrinking (Sanforized zero-shrink finish)',
      'Custom chemical top-treatments (water-repellent, anti-bacterial)',
      'Silicone, micro-emulsion, and peach skin soft hand feels'
    ],
    capabilities: [
      'Hot air multi-chamber stenter with Mahlo weft straighteners',
      'Sanforizing range for guaranteed wash dimensional stability',
      'Calendering for chintz, glaze, and smooth surface luster'
    ],
    processSteps: [
      { step: 1, name: 'Chemical Padding', description: 'Application of softeners, crosslinkers, or water repellents.' },
      { step: 2, name: 'Heat Setting', description: 'Width control, straightening, and temperature curing.' },
      { step: 3, name: 'Sanforizing', description: 'Pre-shrinking to lock warp and weft dimensions.' },
      { step: 4, name: 'Inspection', description: 'Confirming dimensions, soft handle, and zero flaws.' },
      { step: 5, name: 'Post-Finishing', description: 'Precision luster calendering if required.' },
      { step: 6, name: 'Dispatch Packing', description: 'Secure packaging for domestic or export shipment.' }
    ]
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Processed Fabrics',
    category: 'Processed Fabrics',
    description: 'High-quality cotton and poly-cotton blends processed to international standards, optimized for apparel and home textiles.',
    weave: 'Plain & Twill options',
    gsm: '120 - 240 GSM',
    width: '58 to 126 inches',
    composition: '100% Cotton, Poly-Cotton, CVC',
    finishType: 'Bleached, Scoured, RFD Base ready for dyeing',
    dyeingMethod: 'Pre-treatment open-width lines',
    minOrder: '5,000 Meters',
    image: IMAGES.productProcessedFabrics,
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Dyed Fabrics',
    category: 'Dyed Fabrics',
    description: 'Precision continuous reactive or vat dyed fabrics with high color fastness and uniform shade consistency.',
    weave: 'Twill, Poplin & Sateen',
    gsm: '130 - 280 GSM',
    width: '58/60 inches',
    composition: '100% Ring Spun Combed Cotton or Blends',
    finishType: 'Sanforized, Mercerized, Crease-Resistant',
    dyeingMethod: 'Continuous Pad-Dry-Pad-Steam range',
    minOrder: '3,000 Meters',
    image: IMAGES.productDyedFabrics,
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Finished Fabrics',
    category: 'Finished Fabrics',
    description: 'Textiles top-treated with specialized finishes including peach skin brush peaching, water-repellency, or antimicrobial guards.',
    weave: 'Sateen, Canvas & Plain',
    gsm: '140 - 350 GSM',
    width: 'Up to 126 inches width capability',
    composition: 'Cotton, Cotton-Linen, CVC, Poly-Cotton',
    finishType: 'Double Mercerized, Tumble Soft, Calendered Luster',
    dyeingMethod: 'Low-Salt Eco-Reactive Dyeing / Bleached Base',
    minOrder: '3,000 Meters',
    image: IMAGES.productFinishedFabrics,
    featured: true
  },
  {
    id: 'prod-4',
    name: 'Custom Textile Processing',
    category: 'Custom Textile Solutions',
    description: 'Custom textile formulations engineered to specifications for workwear twills, protective uniforms, or hospitality bedding.',
    weave: 'Heavy Duck, Basket Weave, Twill',
    gsm: '150 - 400 GSM',
    width: 'Customized width specifications',
    composition: 'Cotton, Polyester/Cotton, Flame Retardant Blends',
    finishType: 'Water/Oil Repellent, Anti-Static, Proban Flame Retardant',
    dyeingMethod: 'Continuous Impregnation & Vat Dyeing',
    minOrder: '2,500 Meters',
    image: IMAGES.productCustomProcessing,
    featured: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Continuous Dyeing & Processing Floor',
    category: 'Factory',
    image: IMAGES.heroTextileFactory,
    description: 'State-of-the-art open width processing machinery hall on Sargodha Road, Faisalabad.',
    date: '2026'
  },
  {
    id: 'gal-2',
    title: 'Advanced Stenter & Finishing Machine',
    category: 'Machines',
    image: IMAGES.aboutTextileProcessing,
    description: 'Continuous chemical padding, drying and weft alignment alignment.',
    date: '2026'
  },
  {
    id: 'gal-3',
    title: 'High-Density Raw Processed Fabrics',
    category: 'Fabrics',
    image: IMAGES.productProcessedFabrics,
    description: 'Ready-for-dyeing organic cotton rolls post-bleaching.',
    date: '2026'
  },
  {
    id: 'gal-4',
    title: 'Uniform Vat and Reactive Dyeing Stacks',
    category: 'Fabrics',
    image: IMAGES.productDyedFabrics,
    description: 'Folded dyed fabrics ready for delivery to premium garment factories.',
    date: '2026'
  },
  {
    id: 'gal-5',
    title: 'Post-Processing Inspection & QA Calibration',
    category: 'Production',
    image: IMAGES.productFinishedFabrics,
    description: 'Lightbox spectrophotometric shade monitoring and fabric evaluation.',
    date: '2026'
  },
  {
    id: 'gal-6',
    title: 'Completed Textile Logistics Center',
    category: 'Machines',
    image: IMAGES.productCustomProcessing,
    description: 'Wrapped finished fabric rolls ready for dispatch to domestic and international clients.',
    date: '2026'
  }
];

export const INITIAL_CONTACTS: ContactMessage[] = [
  {
    id: 'msg-1',
    fullName: 'Tariq Mehmood',
    email: 'tariq.m@crescentapparel.com',
    phone: '+92 300 7654321',
    company: 'Crescent Apparel Sourcing',
    subject: 'Bulk Reactive Dyeing Inquiry for Cotton Twill',
    message: 'We require continuous reactive dyeing for approximately 45,000 meters of 240 GSM 3/1 cotton twill in Navy, Khaki, and Black.',
    status: 'read',
    createdAt: '2026-09-22T10:15:00Z',
    internalNotes: 'Contacted over phone. Sample lab dip swatches requested.'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'quote-101',
    name: 'Muhammad Farooq',
    companyName: 'Kohinoor Garments (Pvt) Ltd',
    email: 'm.farooq@kohinoorgarments.pk',
    phone: '+92 321 9876543',
    productType: 'Dyed Fabrics',
    quantity: '25000',
    unit: 'Meters',
    requiredService: 'Precision Dyeing',
    fabricSpecs: '240 GSM, 58" width, Color: Olive Green & Navy',
    targetDate: '2026-10-15',
    message: 'Need urgent processing schedule for upcoming winter uniform export consignment.',
    status: 'reviewing',
    estimatedPrice: 'PKR 145/Meter Processing',
    createdAt: '2026-09-21T09:20:00Z',
    internalNotes: 'Initial pricing shared via WhatsApp.'
  }
];

export const COMPANY_TIMELINE = [
  {
    year: '2004',
    title: 'Inception of Al-Noor Processing',
    description: 'Established as a specialized processing facility in Faisalabad with premium stenter frames and batch finishing.'
  },
  {
    year: '2012',
    title: 'Continuous Range Upgrade',
    description: 'Commissioned fully automated continuous open-width pad-steam ranges for uniform colors.'
  },
  {
    year: '2018',
    title: 'High-Width & Shrinkage Control',
    description: 'Acquired world-class compressive shrinkage sanforizers and wider stenters for B2B sheeting.'
  },
  {
    year: '2026',
    title: 'Digital Calibration and Green Initiative',
    description: 'Integrated Datacolor digital kitchen and state-of-the-art heat recovery setups for efficient processing.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Quality',
    description: 'Uncompromising standard adhering to international 4-point inspection and tight delta-E shade tolerances.',
    icon: 'Award'
  },
  {
    title: 'Trust',
    description: 'Two decades of steadfast relationships with Faisalabad and international garment manufacturers built on timely delivery.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'Continuous adoption of advanced chemistry, modern dyeing ranges, and automated process controls.',
    icon: 'Lightbulb'
  },
  {
    title: 'Customer Focus',
    description: 'Dedicated technical assistance, custom lab-dips, and responsive consultation tailored to each buyer’s specifications.',
    icon: 'Users'
  }
];
