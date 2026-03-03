import { 
  Zap, ShieldCheck, Battery, Lightbulb, Sun, Home, Building2,
  Users, Wrench, Fan, Percent, Gift, Clock, Star
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Offer {
  id: string;
  slug: string;
  title: string;
  headline: string;
  savings: string;
  description: string;
  longDescription: string;
  code: string;
  validThrough: string;
  terms: string[];
  stackable: boolean;
  stacksWith?: string[];
  category: 'new-customer' | 'seasonal' | 'service' | 'bundle' | 'referral';
  audience: 'residential' | 'commercial' | 'all';
  featured: boolean;
  monthlyRotation?: string; // e.g. "2026-02" for February 2026
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  relatedServices: string[];
}

export const offers: Offer[] = [
  {
    id: 'new-customer-50',
    slug: 'new-customer-discount',
    title: '$50 Off First Service',
    headline: 'Welcome to the Majors Family',
    savings: '$50',
    description: 'New to Majors Electrical? Enjoy $50 off any service call or installation over $250.',
    longDescription: 'We believe in earning customers for life. That\'s why we want to make your first experience with Majors Electrical Services as affordable as possible. Book any service call or installation valued at $250 or more, and we\'ll take $50 right off the top. No hoops, no fine print surprises.',
    code: 'NEW50',
    validThrough: 'Ongoing',
    terms: [
      'Valid for first-time Majors Electrical customers only',
      'Minimum service value of $250 required',
      'Must mention code at time of booking',
      'Can be stacked with seasonal offers'
    ],
    stackable: true,
    stacksWith: ['panel-upgrade-spring', 'free-safety-inspection', 'ev-charger-deal'],
    category: 'new-customer',
    audience: 'all',
    featured: true,
    icon: Gift,
    color: 'text-[var(--primary)]',
    bgColor: 'bg-[var(--primary)]/10',
    borderColor: 'border-[var(--primary)]/20',
    relatedServices: ['panel-upgrades', 'ev-charging', 'generators', 'recessed-lighting']
  },
  {
    id: 'panel-upgrade-spring',
    slug: 'panel-upgrade-special',
    title: '$150 Off Panel Upgrades',
    headline: 'Spring Into Safety',
    savings: '$150',
    description: 'Upgrade to a modern 200A electrical panel and save $150. Storm season prep starts now.',
    longDescription: 'Florida\'s storm season demands a reliable electrical panel. Older panels with Federal Pacific or Zinsco breakers are fire hazards. Upgrade to a modern 200-amp panel with arc-fault protection and whole-house surge suppression. This month, save $150 on the installation.',
    code: 'PANEL150',
    validThrough: 'March 31, 2026',
    terms: [
      'Applies to 200A panel upgrade installations only',
      'Residential properties only',
      'Cannot be combined with other panel upgrade offers',
      'Stackable with New Customer discount'
    ],
    stackable: true,
    stacksWith: ['new-customer-50', 'free-safety-inspection'],
    category: 'seasonal',
    audience: 'residential',
    featured: true,
    monthlyRotation: '2026-02',
    icon: Zap,
    color: 'text-[var(--primary)]',
    bgColor: 'bg-[var(--primary)]/10',
    borderColor: 'border-[var(--primary)]/20',
    relatedServices: ['panel-upgrades', 'surge-protection', 'whole-home-rewire']
  },
  {
    id: 'free-safety-inspection',
    slug: 'free-safety-inspection',
    title: 'Free Safety Inspection',
    headline: 'Peace of Mind, On Us',
    savings: '$149 Value',
    description: 'Get a complimentary whole-home electrical safety inspection with any service over $500.',
    longDescription: 'Our comprehensive safety inspection covers your main panel, grounding system, GFCI/AFCI protection, smoke detector placement, and overall wiring condition. Normally $149, it\'s yours free when you book any service valued at $500 or more. We\'ll deliver a detailed report with photos and recommendations.',
    code: 'SAFEFREE',
    validThrough: 'Ongoing',
    terms: [
      'Minimum service value of $500 required',
      'Residential properties only',
      'Inspection report delivered within 48 hours',
      'Stackable with most other offers'
    ],
    stackable: true,
    stacksWith: ['new-customer-50', 'panel-upgrade-spring', 'ev-charger-deal'],
    category: 'bundle',
    audience: 'residential',
    featured: true,
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    relatedServices: ['safety-inspections', 'panel-upgrades', 'smoke-&-co-detectors']
  },
  {
    id: 'ev-charger-deal',
    slug: 'ev-charger-installation',
    title: '$100 Off EV Charger Install',
    headline: 'Charge Smarter, Save More',
    savings: '$100',
    description: 'Get ready for the road ahead. Save $100 on Level 2 EV charger installation.',
    longDescription: 'Drive electric? Charge at home for a fraction of what public chargers cost. We install Tesla Wall Connectors, ChargePoint Home Flex, and all major Level 2 chargers. Save $100 on professional installation including dedicated 240V circuit, permits, and inspection.',
    code: 'CHARGE100',
    validThrough: 'April 30, 2026',
    terms: [
      'Applies to Level 2 charger installation labor only',
      'Charger unit purchased separately or customer-supplied',
      'Includes dedicated 240V circuit installation',
      'Stackable with New Customer discount'
    ],
    stackable: true,
    stacksWith: ['new-customer-50', 'free-safety-inspection'],
    category: 'service',
    audience: 'residential',
    featured: false,
    monthlyRotation: '2026-03',
    icon: Battery,
    color: 'text-[var(--secondary)]',
    bgColor: 'bg-[var(--secondary)]/10',
    borderColor: 'border-[var(--secondary)]/20',
    relatedServices: ['ev-charging', 'panel-upgrades', 'appliance-circuits']
  },
  {
    id: 'referral-reward',
    slug: 'referral-reward',
    title: '$75 Referral Reward',
    headline: 'Share the Love, Earn Rewards',
    savings: '$75 Each',
    description: 'Refer a friend — you both get $75 off your next service. No limit on referrals.',
    longDescription: 'Our best customers send us our best new customers. When you refer a friend, neighbor, or family member to Majors Electrical Services, you\'ll both receive $75 off your next service. There\'s no limit — refer 10 people and earn $750 in credits. It\'s our way of saying thanks.',
    code: 'REFER75',
    validThrough: 'Ongoing',
    terms: [
      'Both referrer and new customer receive $75 credit',
      'New customer must complete a service of $200 or more',
      'Credits can be applied to future services',
      'No limit on number of referrals'
    ],
    stackable: false,
    category: 'referral',
    audience: 'all',
    featured: false,
    icon: Users,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    relatedServices: []
  },
  {
    id: 'lighting-bundle',
    slug: 'whole-home-lighting',
    title: '15% Off Whole-Home Lighting',
    headline: 'Light Up Every Room',
    savings: '15% Off',
    description: 'Bundle recessed lighting for 3+ rooms and save 15% on the entire project.',
    longDescription: 'Transform your home with modern LED recessed lighting throughout. When you book recessed lighting installation for 3 or more rooms, we\'ll discount the entire project by 15%. Includes design consultation, all fixtures, dimmers, and a clean, professional installation.',
    code: 'LIGHT15',
    validThrough: 'March 31, 2026',
    terms: [
      'Minimum 3 rooms required for bundle pricing',
      'Includes recessed, under cabinet, and pendant lighting',
      'Design consultation included at no extra charge',
      'Stackable with New Customer discount'
    ],
    stackable: true,
    stacksWith: ['new-customer-50', 'free-safety-inspection'],
    category: 'bundle',
    audience: 'residential',
    featured: false,
    monthlyRotation: '2026-02',
    icon: Lightbulb,
    color: 'text-[var(--secondary)]',
    bgColor: 'bg-[var(--secondary)]/10',
    borderColor: 'border-[var(--secondary)]/20',
    relatedServices: ['recessed-lighting', 'under-cabinet', 'chandelier-install', 'interior-lighting']
  },
  {
    id: 'commercial-led',
    slug: 'commercial-led-retrofit',
    title: '20% Off LED Retrofits',
    headline: 'Cut Energy Costs in Half',
    savings: '20% Off',
    description: 'Commercial LED retrofit projects over $2,000 receive 20% off. ROI in under 18 months.',
    longDescription: 'Replace outdated fluorescent and HID lighting with energy-efficient LEDs. Our commercial clients typically see 40-60% reduction in lighting energy costs. Projects over $2,000 qualify for our 20% discount, plus we\'ll help you apply for utility rebates that can save even more.',
    code: 'BIZLED20',
    validThrough: 'June 30, 2026',
    terms: [
      'Minimum project value of $2,000 before discount',
      'Commercial and industrial properties only',
      'Includes energy audit and ROI analysis',
      'Utility rebate assistance included'
    ],
    stackable: false,
    category: 'service',
    audience: 'commercial',
    featured: false,
    icon: Building2,
    color: 'text-[var(--primary)]',
    bgColor: 'bg-[var(--primary)]/10',
    borderColor: 'border-[var(--primary)]/20',
    relatedServices: ['led-retrofits', 'office-build-outs', 'parking-lot-lights']
  },
  {
    id: 'generator-prep',
    slug: 'generator-storm-prep',
    title: '$200 Off Generator Install',
    headline: 'Hurricane Season Is Coming',
    savings: '$200',
    description: 'Don\'t wait for the storm. Save $200 on whole-home standby generator installation.',
    longDescription: 'Florida homeowners know: it\'s not if the power goes out, it\'s when. A whole-home standby generator keeps your AC, fridge, medical equipment, and security system running when the grid fails. Book your installation before storm season and save $200.',
    code: 'STORM200',
    validThrough: 'May 31, 2026',
    terms: [
      'Applies to whole-home standby generator installation',
      'Includes transfer switch and gas line coordination',
      'Permit and inspection fees included',
      'Stackable with Free Safety Inspection offer'
    ],
    stackable: true,
    stacksWith: ['new-customer-50', 'free-safety-inspection'],
    category: 'seasonal',
    audience: 'residential',
    featured: false,
    monthlyRotation: '2026-04',
    icon: Sun,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    relatedServices: ['generators', 'surge-protection', 'panel-upgrades']
  },
  {
    id: 'ceiling-fan-bundle',
    slug: 'ceiling-fan-bundle',
    title: 'Buy 3 Fans, Get 1 Free Install',
    headline: 'Stay Cool This Season',
    savings: 'Free Install',
    description: 'Having 3+ ceiling fans installed? The 4th fan installation is on us.',
    longDescription: 'Ceiling fans are one of the most cost-effective ways to cool your home and lower AC bills. When you book installation for 3 or more ceiling fans, we\'ll install a 4th fan absolutely free (you supply the fan). Perfect for whole-home upgrades.',
    code: 'FAN4FREE',
    validThrough: 'April 30, 2026',
    terms: [
      'Customer supplies all ceiling fan units',
      'Installation of 4th fan is free with purchase of 3 installations',
      'Standard ceiling height installations only',
      'High/vaulted ceiling surcharge may apply'
    ],
    stackable: true,
    stacksWith: ['new-customer-50'],
    category: 'bundle',
    audience: 'residential',
    featured: false,
    monthlyRotation: '2026-03',
    icon: Fan,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    relatedServices: ['ceiling-fans', 'interior-lighting']
  },
  {
    id: 'smart-home-starter',
    slug: 'smart-home-starter',
    title: 'Smart Home Starter — $299',
    headline: 'Start Your Smart Home Journey',
    savings: 'Package Deal',
    description: 'Get 5 smart switches installed with hub setup and app config for just $299.',
    longDescription: 'Upgrade to smart lighting control without the hassle. Our Smart Home Starter package includes professional installation of 5 Lutron Caseta smart dimmers, hub setup, app configuration, and voice assistant integration (Alexa, Google, or Siri). Everything you need to start controlling your lights from your phone.',
    code: 'SMART299',
    validThrough: 'March 31, 2026',
    terms: [
      'Includes 5 Lutron Caseta dimmer switches and hub',
      'App configuration for one mobile device',
      'Voice assistant pairing included',
      'Additional switches available at discounted rate'
    ],
    stackable: true,
    stacksWith: ['new-customer-50'],
    category: 'bundle',
    audience: 'residential',
    featured: false,
    monthlyRotation: '2026-02',
    icon: Home,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    relatedServices: ['smart-switches', 'data-cabling', 'security-cameras']
  }
];

// Get currently featured offers
export function getFeaturedOffers(): Offer[] {
  return offers.filter(o => o.featured);
}

// Get this month's rotating offers
export function getMonthlyOffers(): Offer[] {
  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  return offers.filter(o => o.monthlyRotation === currentMonth || o.featured);
}

// Get stackable combinations
export function getStackableOffers(offerId: string): Offer[] {
  const offer = offers.find(o => o.id === offerId);
  if (!offer?.stackable || !offer.stacksWith) return [];
  return offers.filter(o => offer.stacksWith!.includes(o.id));
}

// Get offers by audience
export function getOffersByAudience(audience: 'residential' | 'commercial'): Offer[] {
  return offers.filter(o => o.audience === audience || o.audience === 'all');
}

// Get offer by slug
export function getOfferBySlug(slug: string): Offer | undefined {
  return offers.find(o => o.slug === slug);
}

// Calculate max stacking savings
export function getMaxStackSavings(): string {
  // Find the best combo: new customer + panel upgrade + free inspection
  return '$349+';
}

// Guarantees data
export const guarantees = [
  {
    title: '100% Satisfaction',
    description: 'Not happy? We\'ll return and make it right — no questions asked.',
    icon: Star,
  },
  {
    title: '2-Year Workmanship Warranty',
    description: 'Every installation backed by our 2-year labor warranty.',
    icon: ShieldCheck,
  },
  {
    title: 'Upfront Pricing',
    description: 'The price we quote is the price you pay. No surprise charges.',
    icon: Percent,
  },
  {
    title: 'On-Time or It\'s Free',
    description: 'We respect your time. If we\'re late to your appointment, the service call is free.',
    icon: Clock,
  },
];

// Residential services for mega menu
export const residentialMegaMenuServices = [
  {
    category: 'Home Essentials',
    items: [
      { title: 'Panel Upgrades', href: '/services/panel-upgrades' },
      { title: 'Outlet & Switch Repair', href: '/services/outlet-&-switch' },
      { title: 'Ceiling Fan Install', href: '/services/ceiling-fans' },
      { title: 'Whole Home Rewire', href: '/services/whole-home-rewire' },
      { title: 'Appliance Circuits', href: '/services/appliance-circuits' },
    ]
  },
  {
    category: 'Lighting',
    items: [
      { title: 'Recessed Lighting', href: '/services/recessed-lighting' },
      { title: 'Landscape Lighting', href: '/services/landscape-lighting' },
      { title: 'Under Cabinet', href: '/services/under-cabinet' },
      { title: 'Chandelier Install', href: '/services/chandelier-install' },
      { title: 'Security Lighting', href: '/services/security-lighting' },
    ]
  },
  {
    category: 'Safety',
    items: [
      { title: 'Generators', href: '/services/generators' },
      { title: 'Surge Protection', href: '/services/surge-protection' },
      { title: 'Smoke & CO Detectors', href: '/services/smoke-&-co-detectors' },
      { title: 'Safety Inspections', href: '/services/safety-inspections' },
    ]
  },
  {
    category: 'Smart Home & EV',
    items: [
      { title: 'EV Charger Install', href: '/services/ev-charging' },
      { title: 'Smart Switches', href: '/services/smart-switches' },
      { title: 'Security Cameras', href: '/services/security-cameras' },
      { title: 'Home Theater', href: '/services/home-theater' },
      { title: 'Data Cabling', href: '/services/data-cabling' },
    ]
  }
];

// Commercial services for mega menu
export const commercialMegaMenuServices = [
  {
    category: 'Business Services',
    items: [
      { title: 'Office Build-outs', href: '/services/office-build-outs' },
      { title: 'LED Retrofits', href: '/services/led-retrofits' },
      { title: 'Dedicated Circuits', href: '/services/dedicated-circuits' },
      { title: 'Parking Lot Lights', href: '/services/parking-lot-lights' },
      { title: 'Signage Power', href: '/services/signage-power' },
    ]
  },
  {
    category: 'Construction',
    items: [
      { title: 'New Construction', href: '/services/new-construction' },
      { title: 'Home Remodels', href: '/services/home-remodels' },
      { title: 'Home Additions', href: '/services/home-additions' },
      { title: 'Data Cabling', href: '/services/data-cabling' },
    ]
  },
];
