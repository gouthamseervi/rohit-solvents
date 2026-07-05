export const COMPANY = {
  name: 'Rohit Solvents',
  tagline: 'Precision Solvents. Industrial Trust.',
  phone: '+91 80507 42946',
  phoneRaw: '918050742946',
  email: 'rohitsolvent@gmail.com',
  address: 'Sukadkatte, Bangalore 560091',
  yearsInBusiness: 20,
  productsCount: 40,
  industriesCount: 5,
  clientsCount: 250,
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
  'Hi Rohit Solvents, I would like to enquire about your solvents.'
)}`;

export const INDUSTRIES = [
  {
    id: 'paints',
    number: '01',
    name: 'Paints & Coatings',
    blurb:
      'High-purity aromatics, esters, and glycol ethers formulated to deliver flow, gloss and durability across decorative and industrial coatings.',
    products: ['Xylene', 'Toluene', 'Butyl Acetate', 'MIBK'],
    image: '/images/paints-and-coatings-4000x6000.png',
  },
  {
    id: 'inks',
    number: '02',
    name: 'Printing Inks',
    blurb:
      'Fast-evaporating, low-residue solvents engineered for gravure, flexo and screen inks — ensuring sharp registration and consistent color.',
    products: ['Ethyl Acetate', 'Isopropyl Alcohol', 'MEK', 'Toluene'],
    image:
      'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'pharma',
    number: '03',
    name: 'Pharmaceuticals',
    blurb:
      'Reagent and USP-grade solvents for API synthesis, crystallization and cleaning — supplied with documented CoA and traceability.',
    products: ['Methanol', 'Acetone', 'IPA', 'MDC'],
    image:
      'https://images.pexels.com/photos/15831822/pexels-photo-15831822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'printing',
    number: '04',
    name: 'Printing & Packaging',
    blurb:
      'Solvent blends optimized for press-ready viscosity, quick drying and press-side compatibility across substrates.',
    products: ['Ethyl Acetate', 'n-Propyl Acetate', 'Ethanol'],
    image: '/images/printing-and-packaging-4000x6000.png',
  },
  {
    id: 'cleaning',
    number: '05',
    name: 'Industrial Cleaning',
    blurb:
      'Degreasers and precision-cleaning solvents for metal parts, electronics and heavy equipment — engineered for residue-free finishes.',
    products: ['Perchloroethylene', 'MDC', 'IPA', 'Hexane'],
    image:
      'https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export const PRODUCT_CATEGORIES = [
  'All',
  'Aromatics',
  'Aliphatics',
  'Alcohols',
  'Ketones',
  'Esters',
  'Glycol Ethers',
  'Chlorinated',
];

export const PRODUCTS = [
  {
    name: 'Toluene',
    cas: '108-88-3',
    purity: '99.8%',
    category: 'Aromatics',
    apps: ['Paints', 'Inks', 'Adhesives'],
    packaging: '230 kg drums · Bulk tankers',
    formula: 'C₇H₈',
  },
  {
    name: 'Xylene (Mixed Isomers)',
    cas: '1330-20-7',
    purity: '98.5%',
    category: 'Aromatics',
    apps: ['Paints', 'Coatings', 'Rubber'],
    packaging: '215 kg drums · IBC',
    formula: 'C₈H₁₀',
  },
  {
    name: 'n-Hexane',
    cas: '110-54-3',
    purity: '99.0%',
    category: 'Aliphatics',
    apps: ['Extraction', 'Cleaning'],
    packaging: '160 kg drums',
    formula: 'C₆H₁₄',
  },
  {
    name: 'Isopropyl Alcohol (IPA)',
    cas: '67-63-0',
    purity: '99.9%',
    category: 'Alcohols',
    apps: ['Pharma', 'Cleaning', 'Electronics'],
    packaging: '160 kg drums · 25 L carboys',
    formula: 'C₃H₈O',
  },
  {
    name: 'n-Butanol',
    cas: '71-36-3',
    purity: '99.5%',
    category: 'Alcohols',
    apps: ['Coatings', 'Plasticizers'],
    packaging: '180 kg drums',
    formula: 'C₄H₁₀O',
  },
  {
    name: 'Acetone',
    cas: '67-64-1',
    purity: '99.8%',
    category: 'Ketones',
    apps: ['Pharma', 'Resins', 'Cleaning'],
    packaging: '160 kg drums',
    formula: 'C₃H₆O',
  },
  {
    name: 'Methyl Ethyl Ketone (MEK)',
    cas: '78-93-3',
    purity: '99.7%',
    category: 'Ketones',
    apps: ['Inks', 'Adhesives', 'Coatings'],
    packaging: '165 kg drums',
    formula: 'C₄H₈O',
  },
  {
    name: 'Methyl Isobutyl Ketone (MIBK)',
    cas: '108-10-1',
    purity: '99.5%',
    category: 'Ketones',
    apps: ['Paints', 'Rare-earth extraction'],
    packaging: '160 kg drums',
    formula: 'C₆H₁₂O',
  },
  {
    name: 'Ethyl Acetate',
    cas: '141-78-6',
    purity: '99.8%',
    category: 'Esters',
    apps: ['Inks', 'Coatings', 'Pharma'],
    packaging: '180 kg drums',
    formula: 'C₄H₈O₂',
  },
  {
    name: 'Butyl Acetate',
    cas: '123-86-4',
    purity: '99.5%',
    category: 'Esters',
    apps: ['Automotive coatings', 'Lacquers'],
    packaging: '180 kg drums',
    formula: 'C₆H₁₂O₂',
  },
  {
    name: 'Propylene Glycol Methyl Ether',
    cas: '107-98-2',
    purity: '99.5%',
    category: 'Glycol Ethers',
    apps: ['Coatings', 'Cleaners', 'Inks'],
    packaging: '190 kg drums',
    formula: 'C₄H₁₀O₂',
  },
  {
    name: 'Methylene Chloride (MDC)',
    cas: '75-09-2',
    purity: '99.9%',
    category: 'Chlorinated',
    apps: ['Paint stripping', 'Pharma'],
    packaging: '270 kg drums',
    formula: 'CH₂Cl₂',
  },
  {
    name: 'Perchloroethylene',
    cas: '127-18-4',
    purity: '99.9%',
    category: 'Chlorinated',
    apps: ['Dry cleaning', 'Degreasing'],
    packaging: '300 kg drums',
    formula: 'C₂Cl₄',
  },
  {
    name: 'Cyclohexane',
    cas: '110-82-7',
    purity: '99.5%',
    category: 'Aliphatics',
    apps: ['Solvent for resins', 'Chemical synthesis'],
    packaging: '200 kg drums',
    formula: 'C₆H₁₂',
  }
];

export const CERTIFICATIONS = [
  { code: 'ISO 9001', label: 'Quality Management' },
  { code: 'MSDS', label: 'Full Documentation' },
];

export const STATS = [
  { value: '32+', label: 'Years in industry' },
  { value: '40+', label: 'Solvent grades' },
  { value: '05', label: 'Industries served' },
  { value: '250+', label: 'Enterprise clients' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Consistency of purity across every consignment. Rohit Solvents has been our default supplier for MEK and Ethyl Acetate for over eight years.',
    author: 'Operations Lead',
    company: 'Flexo Printing Pvt Ltd',
  },
  {
    quote:
      'Fast dispatch, honest paperwork and reliable CoAs. They understand pharma-grade requirements better than most.',
    author: 'QA Manager',
    company: 'Karnataka Pharma Co.',
  },
  {
    quote:
      'From bulk tankers to 25L carboys — they scale with us. The technical team is genuinely helpful.',
    author: 'Purchase Head',
    company: 'Southern Coatings Industries',
  },
];
