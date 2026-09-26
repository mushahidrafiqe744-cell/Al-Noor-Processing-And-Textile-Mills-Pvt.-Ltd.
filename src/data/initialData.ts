import { Product, Service, GalleryItem, CompanySettings, ContactMessage, QuoteRequest } from '../types';
import { IMAGES } from '../assets/images';

export const INITIAL_COMPANY_SETTINGS: CompanySettings = {
  companyName: 'Al-Noor Processing And Textile Mills',
  legalName: 'Al-Noor Processing And Textile Mills (Pvt.) Ltd.',
  tagline: 'Quality Textile Processing for a Better Future',
  subtitle: 'Delivering reliable textile processing solutions through modern technology, skilled expertise and a strong commitment to quality.',
  heroDescription: 'Equipped with continuous dyeing ranges, stenters, sanforizing machines, and in-house computerized QA labs in the heart of Faisalabad’s textile hub.',
  address: 'Chak No. 07 JB, Sargodha Road',
  city: 'Faisalabad',
  country: 'Pakistan',
  postalCode: '38000',
  primaryPhone: '+92 41 8781200',
  secondaryPhone: '+92 300 8654321',
  primaryEmail: 'info@alnoortextile.com',
  supportEmail: 'mushahidrafiqe744@gmail.com',
  whatsappNumber: '+923008654321',
  whatsappMessage: 'Hello Al-Noor Textile Mills, I would like to inquire regarding textile processing services.',
  workingHours: 'Monday - Saturday: 8:00 AM - 6:00 PM PKT',
  yearsExperience: 20,
  employeesCount: 50,
  metersProcessed: '10M+',
  qualityFocus: 100,
  mission: 'To deliver superior textile dyeing, printing, and fabric finishing solutions with precision, consistent color fastness, and ethical operational standards that empower apparel and home textile manufacturers worldwide.',
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
    fullDesc: 'Our integrated textile processing plant prepares greige fabric through advanced continuous open-width desizing, scouring, peroxide bleaching, and chainless mercerization. This ensures optimal absorbency, maximum tensile retention, and uniform base readiness for flawless dye uptake.',
    image: IMAGES.heroTextileMill,
    keyBenefits: [
      'Chainless mercerization for enhanced fabric luster & tensile strength',
      'Continuous open-width scouring reducing fabric tension & creasing',
      'Neutralizing core alkaline residue for superior dye affinity',
      'Consistent whiteness index (Berger Whiteness 75+)'
    ],
    capabilities: [
      'Greige to ready-for-dyeing (RFD)',
      'Peroxide bleaching on continuous ranges',
      'High-absorbency scour for twill, drill & poplin',
      'Capacity: 75,000 meters per day'
    ],
    processSteps: [
      { step: 1, name: 'Greige Fabric Inspection & Mending', description: 'Batch grading and removal of weaving defects and loose threads.' },
      { step: 2, name: 'Singeing & Enzymatic Desizing', description: 'Protruding fiber elimination and starch degradation under controlled temp.' },
      { step: 3, name: 'Continuous Scouring & Bleaching', description: 'Alkaline cleansing and hydrogen peroxide whitening without fiber degradation.' },
      { step: 4, name: 'Chainless Caustic Mercerization', description: 'Fiber swelling for improved dye reception, dimensional stability, and luster.' }
    ]
  },
  {
    id: 'srv-2',
    title: 'Continuous & Batch Dyeing',
    slug: 'dyeing',
    icon: 'Droplets',
    shortDesc: 'Precision shade reproduction using continuous pad-steam, thermosol, and soft-flow reactive dyeing equipment.',
    fullDesc: 'We specialize in continuous reactive, vat, disperse, and pigment dyeing on automated pad-dry-pad-steam ranges and high-temperature soft-flow jet machines. Our computerized color kitchen and spectrophotometer recipe management guarantee lab-dip-to-bulk delta-E < 0.8 tolerance.',
    image: IMAGES.fabricDyeing,
    keyBenefits: [
      'Computerized color recipe formulation with Datacolor spectrophotometer',
      'High color fastness to washing (ISO 105-C06 Grade 4-5)',
      'Excellent rubbing fastness (wet & dry Grade 4)',
      'Even side-to-side and end-to-end shade consistency'
    ],
    capabilities: [
      'Continuous Pad-Steam (CPB) & Thermosol ranges',
      'Reactive, Vat, Disperse, and Direct Dyeing',
      '100% Cotton, Poly-Cotton (PC), CVC, Linen blends',
      'Batch sizes from 1,000 to 100,000+ meters'
    ],
    processSteps: [
      { step: 1, name: 'Lab Dip Formulation & Color Kitchen', description: 'Spectrophotometric shade matching and electronic recipe dispensing.' },
      { step: 2, name: 'Padding & Controlled Pre-Drying', description: 'Infra-red pre-drying to avoid dye migration before fixing.' },
      { step: 3, name: 'Steam / Thermosol Dye Fixation', description: 'Saturated steam fixation at 102°C or dry thermosol at 210°C.' },
      { step: 4, name: 'Multi-Compartment Wash & Soap Off', description: 'Thorough rinsing to remove unfixed surface hydrolyzed dyestuff.' }
    ]
  },
  {
    id: 'srv-3',
    title: 'Fabric Finishing',
    slug: 'finishing',
    icon: 'Sparkles',
    shortDesc: 'Stentering, sanforizing, anti-shrink, water repellent, and soft resin finishes for institutional and fashion fabrics.',
    fullDesc: 'Our multi-chamber stenter frames with weft-straightening optics and compressive shrinkage sanforizers impart luxurious hand feel, precise dimensional stability (residual shrinkage < 2%), and specialized chemical finishes tailored to client specifications.',
    image: IMAGES.textileFinishing,
    keyBenefits: [
      'Automatic optical weft-straightener correcting bow & skew (<1.5%)',
      'Rubber belt compressive shrinking (Sanforized zero-shrink finish)',
      'Custom chemical top-treatments (water-repellent, anti-bacterial, easy-care)',
      'Silicone, micro-emulsion, and peach skin soft hand feels'
    ],
    capabilities: [
      'Hot air multi-chamber stenter with Mahlo weft straighteners',
      'Sanforizing range for guaranteed wash dimensional stability',
      'Calendering for chintz, glaze, and smooth surface luster',
      'Width capability from 44 inches to 126 inches'
    ],
    processSteps: [
      { step: 1, name: 'Finishing Chemical Application', description: 'Padder impregnation of softeners, crosslinkers, or water repellents.' },
      { step: 2, name: 'Stenter Heat Setting & Weft Alignment', description: 'High-temperature curing, width control, and bow/skew correction.' },
      { step: 3, name: 'Controlled Rubber-Belt Sanforizing', description: 'Pre-shrinking to lock warp and weft dimensions for garment wash.' },
      { step: 4, name: 'Cooling & Batch Rolling', description: 'Tension-free cooling zone and precision rolling.' }
    ]
  },
  {
    id: 'srv-4',
    title: 'Custom Fabric Processing',
    slug: 'fabric-processing',
    icon: 'Cpu',
    shortDesc: 'Tailored processing for workwear, hospital linens, uniform twills, bedding fabrics, and export grade textiles.',
    fullDesc: 'From heavy-duty industrial workwear fabrics requiring high-crock fastness and crease resistance to soft high-thread-count sateen bedding, Al-Noor delivers custom chemical formulations and mechanical treatments matching exact buyer requirements.',
    image: IMAGES.textileWarehouse,
    keyBenefits: [
      'Customized processing recipes formulated per buyer specs',
      'Versatile handling from lightweight 80 GSM voile to 400 GSM heavy drill',
      'Flexible lot sizes catering to both trial runs and high-volume orders',
      'Dedicated technical account manager for every processing batch'
    ],
    capabilities: [
      'Workwear Drill & Twill processing (hospitality & industrial)',
      'Bedding Sheeting, Sateen & Percale processing up to 300cm width',
      'Pocketing fabric, lining, and fusible canvas treatments',
      'Flameretardant, soil-release, and antimicrobial coatings'
    ],
    processSteps: [
      { step: 1, name: 'Technical Requirement Analysis', description: 'Reviewing client fabric construction, target shade, and wash specs.' },
      { step: 2, name: 'Pilot Batch Trial & Approval', description: 'Executing sample run and delivering master swatch for sign-off.' },
      { step: 3, name: 'Full-Scale Production Execution', description: 'Monitored processing across synchronized machinery lines.' },
      { step: 4, name: 'Quality Sign-Off & Packaging', description: 'Detailed inspection protocol before dispatch.' }
    ]
  },
  {
    id: 'srv-5',
    title: 'Quality Control & Lab Testing',
    slug: 'quality-control',
    icon: 'ShieldCheck',
    shortDesc: 'Rigorous 4-point inspection system, color spectrophotometer audits, tensile strength, and shrinkage verification.',
    fullDesc: 'Quality is non-negotiable at Al-Noor. Every roll undergoes 100% lighted inspection tables applying the internationally recognized 4-Point System (ASTM D5430). Our internal laboratory verifies tensile strength, tear resistance, colorfastness, crocking, and shrinkage under ISO and AATCC standards.',
    image: IMAGES.qualityLab,
    keyBenefits: [
      '100% 4-Point ASTM fabric inspection with detailed defect mapping',
      'Internal physical & chemical testing lab with calibrated instruments',
      'Complete traceability from greige lot number to packaged roll',
      'Inspection certificates issued with every dispatched consignment'
    ],
    capabilities: [
      'Color fastness testing (Wash, Water, Rubbing, Perspiration, Light)',
      'Dimensional stability & spirality / skewness measurement',
      'Tensile & tear strength testing using computerized Elmendorf testers',
      'Fabric pH and formaldehyde free compliance'
    ],
    processSteps: [
      { step: 1, name: 'Greige Inward Audit', description: 'Checking raw yarn quality, EPI/PPI count, and contamination levels.' },
      { step: 2, name: 'In-Line Machine Monitoring', description: 'Real-time temperature, pH, chemical pickup, and speed audits.' },
      { step: 3, name: '100% 4-Point Table Inspection', description: 'Continuous flaw marking, point scoring, and width monitoring.' },
      { step: 4, name: 'Laboratory Standard Certification', description: 'Physical and chemical testing under ISO & AATCC protocols.' }
    ]
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: '100% Combed Cotton Dyed Twill 3/1',
    category: 'Dyed Fabrics',
    description: 'Heavyweight premium dyed cotton twill engineered for luxury workwear, jackets, chinos, and institutional uniforms.',
    weave: '3/1 Twill',
    gsm: '240 GSM (7.0 oz/yd²)',
    width: '58/60 inches (150 cm)',
    composition: '100% Ring Spun Combed Cotton',
    finishType: 'Soft Peach Skin & Sanforized (<2% shrinkage)',
    dyeingMethod: 'Continuous Pad-Steam Vat / Reactive Dyeing',
    minOrder: '3,000 Meters',
    image: IMAGES.fabricDyeing,
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Poly-Cotton CVC Poplin Shirting',
    category: 'Processed Fabrics',
    description: 'Crisp, breathable poplin with high tear strength and wrinkle resistance, ideal for corporate shirts and healthcare scrubs.',
    weave: 'Plain 1/1 Weave',
    gsm: '120 GSM (3.5 oz/yd²)',
    width: '58 inches (147 cm)',
    composition: '65% Cotton / 35% Polyester (CVC)',
    finishType: 'Easy Care, Crease Resistant & Mercerized',
    dyeingMethod: 'Thermosol Disperse / Reactive Dyeing',
    minOrder: '5,000 Meters',
    image: IMAGES.heroTextileMill,
    featured: true
  },
  {
    id: 'prod-3',
    name: 'High-Luster Cotton Sateen Bedding Fabric',
    category: 'Finished Fabrics',
    description: 'Silky smooth 300–400 thread count sateen for luxury hotel bedding and retail home textiles with exceptional drapability.',
    weave: '4/1 Sateen Weave',
    gsm: '145 GSM (4.2 oz/yd²)',
    width: '110–126 inches (280–320 cm)',
    composition: '100% Long Staple Cotton',
    finishType: 'Double Mercerized & Ultra Soft Silicone Calender',
    dyeingMethod: 'Low-Salt Eco Reactive Dyeing (Oeko-Tex Standard)',
    minOrder: '3,000 Meters',
    image: IMAGES.textileFinishing,
    featured: true
  },
  {
    id: 'prod-4',
    name: 'Industrial Heavy Duck Canvas',
    category: 'Custom Textile Solutions',
    description: 'High tensile density canvas processed for heavy-duty tote bags, military equipment covers, upholstery, and footwear.',
    weave: '2/2 Plain Basket Weave',
    gsm: '380 GSM (11.2 oz/yd²)',
    width: '60 inches (152 cm)',
    composition: '100% Heavy Cotton Yarn',
    finishType: 'Water Repellent & Mildew Resistant Finish',
    dyeingMethod: 'Direct / Reactive Continuous Impregnation',
    minOrder: '2,000 Meters',
    image: IMAGES.textileWarehouse,
    featured: true
  },
  {
    id: 'prod-5',
    name: 'Hospitality Plain Sheeting Fabric',
    category: 'Processed Fabrics',
    description: 'Durable, high-bleach-resistant white sheeting designed to withstand repeated commercial laundry and institutional wash cycles.',
    weave: '1/1 Sheeting Weave',
    gsm: '135 GSM (4.0 oz/yd²)',
    width: '90–120 inches (228–305 cm)',
    composition: '50% Cotton / 50% Polyester',
    finishType: 'Chlorine-Fast White Optical Bleach & Stentered',
    dyeingMethod: 'Continuous Hydrogen Peroxide Bleaching',
    minOrder: '5,000 Meters',
    image: IMAGES.heroTextileMill,
    featured: false
  },
  {
    id: 'prod-6',
    name: 'Anti-Static Flame Retardant Workwear Drill',
    category: 'Custom Textile Solutions',
    description: 'Engineered protective fabric with woven carbon antistatic grid and flame-retardant finish for oil & gas refinery workwear.',
    weave: '2/1 Left Hand Twill',
    gsm: '260 GSM (7.6 oz/yd²)',
    width: '58 inches (147 cm)',
    composition: '99% Cotton / 1% Carbon Antistatic Fiber',
    finishType: 'Pyrovatex / Proban Flame Retardant + Oil Repellent',
    dyeingMethod: 'Vat Dyeing with Maximum Light & Wash Fastness',
    minOrder: '2,500 Meters',
    image: IMAGES.qualityLab,
    featured: true
  },
  {
    id: 'prod-7',
    name: 'Premium Slub Linen-Cotton Blend Fabric',
    category: 'Dyed Fabrics',
    description: 'Textured casual wear fabric with natural slub aesthetic, soft garment-dyed appeal for summer shirts and trousers.',
    weave: 'Plain with textured slub filling',
    gsm: '160 GSM (4.7 oz/yd²)',
    width: '56 inches (142 cm)',
    composition: '70% Cotton / 30% Natural Linen',
    finishType: 'Tumble Aero Soft Air-Flow Finish',
    dyeingMethod: 'Continuous Reactive Dyeing with Muted Earthy Tones',
    minOrder: '3,000 Meters',
    image: IMAGES.fabricDyeing,
    featured: false
  },
  {
    id: 'prod-8',
    name: 'Silicone Finished Micro-Peached Twill',
    category: 'Finished Fabrics',
    description: 'Ultra-soft hand feel micro-sanded twill for high-end fashion apparel, jackets, and cargo pants.',
    weave: '2/1 Right Hand Twill',
    gsm: '210 GSM (6.2 oz/yd²)',
    width: '58 inches (147 cm)',
    composition: '98% Cotton / 2% Elastane Spandex',
    finishType: 'Carbon Brush Peaching + Nano Silicone Softening',
    dyeingMethod: 'Continuous Pad-Steam Dyeing',
    minOrder: '3,500 Meters',
    image: IMAGES.textileFinishing,
    featured: false
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Processing & Stenter Hall',
    category: 'Factory',
    image: IMAGES.heroTextileMill,
    description: 'Panoramic view of the primary finishing and processing floor at Sargodha Road, Faisalabad.',
    date: '2026'
  },
  {
    id: 'gal-2',
    title: 'Continuous Reactive Dyeing Range',
    category: 'Machines',
    image: IMAGES.fabricDyeing,
    description: 'Modern pad-steam dyeing section processing continuous 100% cotton rolls.',
    date: '2026'
  },
  {
    id: 'gal-3',
    title: 'Multi-Chamber Stenter with Optical Weft Straightener',
    category: 'Machines',
    image: IMAGES.textileFinishing,
    description: 'High-speed stenter ensuring accurate width control and heat setting.',
    date: '2026'
  },
  {
    id: 'gal-4',
    title: 'Computerized Color & Quality Testing Lab',
    category: 'Production',
    image: IMAGES.qualityLab,
    description: 'Spectrophotometric shade matching and tensile strength measurement under D65 illuminants.',
    date: '2026'
  },
  {
    id: 'gal-5',
    title: 'Finished Fabric Rolls Logistics Center',
    category: 'Production',
    image: IMAGES.textileWarehouse,
    description: 'Wrapped and labeled finished textile consignments prepared for domestic and export shipment.',
    date: '2026'
  },
  {
    id: 'gal-6',
    title: 'Precision Dye Kitchen & Recipe Formulation',
    category: 'Production',
    image: IMAGES.fabricDyeing,
    description: 'Automated chemical dosing system ensuring batch-to-batch repeatability.',
    date: '2026'
  },
  {
    id: 'gal-7',
    title: 'Skilled Machine Operators & Engineers',
    category: 'Team',
    image: IMAGES.qualityLab,
    description: 'Senior textile technicians monitoring tension, temperature and chemical pick-up.',
    date: '2026'
  },
  {
    id: 'gal-8',
    title: 'Premium Combed Cotton Twill & Sateen Swatches',
    category: 'Fabrics',
    image: IMAGES.textileFinishing,
    description: 'Inspection of high-density weave fabric rolls post-sanforizing.',
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
    message: 'We require continuous reactive dyeing for approximately 45,000 meters of 240 GSM 3/1 cotton twill in Navy, Khaki, and Black. Please let us know machine lead times and sample dispatch.',
    status: 'read',
    createdAt: '2026-09-22T10:15:00Z',
    internalNotes: 'Contacted over phone. Sample lab dip swatches requested.'
  },
  {
    id: 'msg-2',
    fullName: 'David Richardson',
    email: 'david.r@richardsontextiles.co.uk',
    phone: '+44 7911 123456',
    company: 'Richardson Textiles Ltd, UK',
    subject: 'Export Processing for Hospital Bedding Fabrics',
    message: 'Looking for a reliable processing mill in Faisalabad for bleaching and sanforizing 50/50 poly-cotton sheeting 280cm width with chlorine bleach resistance.',
    status: 'unread',
    createdAt: '2026-09-23T14:30:00Z'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'quote-101',
    name: 'Muhammad Farooq',
    companyName: 'Kohinoor Garments (Pvt) Ltd',
    email: 'm.farooq@kohinoorgarments.pk',
    phone: '+92 321 9876543',
    productType: '100% Combed Cotton Dyed Twill 3/1',
    quantity: '25000',
    unit: 'Meters',
    requiredService: 'Continuous & Batch Dyeing',
    fabricSpecs: '240 GSM, 58" width, 20x16 / 128x60, Color: Olive Green & Navy',
    targetDate: '2026-10-15',
    message: 'Need urgent processing schedule for upcoming winter uniform export consignment.',
    status: 'reviewing',
    estimatedPrice: 'PKR 145/Meter Processing',
    createdAt: '2026-09-21T09:20:00Z',
    internalNotes: 'Initial pricing shared via WhatsApp, awaiting client greige fabric arrival.'
  },
  {
    id: 'quote-102',
    name: 'Sarah Khan',
    companyName: 'Loom & Thread Home Textiles',
    email: 'sarah@loomandthread.com',
    phone: '+92 333 4567890',
    productType: 'High-Luster Cotton Sateen Bedding Fabric',
    quantity: '12000',
    unit: 'Meters',
    requiredService: 'Fabric Finishing',
    fabricSpecs: '400 Thread Count, 120" Width, Super Soft Silicone Finish',
    targetDate: '2026-10-25',
    message: 'Looking for high luster finish with zero shrinkage warranty for export to Europe.',
    status: 'pending',
    createdAt: '2026-09-24T03:10:00Z'
  }
];

export const COMPANY_TIMELINE = [
  {
    year: '2004',
    title: 'Founding & Inception',
    description: 'Al-Noor Processing was established on Sargodha Road, Faisalabad with initial batch jigger dyeing and stentering capabilities.'
  },
  {
    year: '2010',
    title: 'Continuous Range Expansion',
    description: 'Commissioned modern pad-dry-pad-steam continuous dyeing lines to handle large volume institutional and export workwear.'
  },
  {
    year: '2016',
    title: 'Sanforizing & High-Width Finishing',
    description: 'Installed compressive shrinkage sanforizers and 3.2-meter wide-width finishing stenter frames for home textiles and beddings.'
  },
  {
    year: '2020',
    title: 'Computerized QA Lab & Spectrophotometry',
    description: 'Upgraded in-house testing laboratory with Datacolor spectrophotometers, automated chemical dispensing, and ISO standard test equipment.'
  },
  {
    year: '2026',
    title: 'Next-Gen Processing & Sustainability',
    description: 'Processed over 10M+ meters annually with automated heat recovery, reduced water footprints, and serving top apparel exporters.'
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
  },
  {
    title: 'Integrity',
    description: 'Transparent dealings, accurate yield tracking, honest fabric grading, and ethical manufacturing practices.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Sustainability',
    description: 'Efficient water recycling, thermal energy conservation, and eco-friendly certified dyestuffs.',
    icon: 'Leaf'
  }
];
