import { 
  ShieldCheck, 
  Clock, 
  Search, 
  UserCheck, 
  Zap, 
  FileText, 
  Briefcase, 
  HardHat, 
  TrendingUp, 
  CalendarCheck,
  LayoutDashboard,
  DollarSign
} from 'lucide-react';
import { SegmentData } from '@/app/pages/SegmentLandingPage';

export const segmentData: Record<string, SegmentData> = {
  homeowners: {
    id: 'homeowners',
    title: 'Homeowners',
    subtitle: 'Residential Electrical Services',
    heroImage: 'https://images.unsplash.com/photo-1630184604932-665d42cfcc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGVsZWN0cmljaWFuJTIwaGFwcHklMjBmYW1pbHklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMTg2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1920',
    heroHeadline: 'Electrical Service That Respects Your Home & Family',
    heroSubheadline: 'Licensed, background-checked, and committed to leaving your home cleaner than we found it. Experience the Majors difference.',
    ctaText: 'Schedule Service',
    painPoints: {
      title: 'Tired of "Contractor Nightmares"?',
      points: [
        'Technicians who show up late (or not at all)',
        'Hidden fees added to the bill after work starts',
        'Messy workspaces and tracked-in dirt',
        'Unsafe work that puts your family at risk'
      ]
    },
    valueProps: [
      {
        title: 'White Glove Service',
        description: 'We wear shoe covers, use drop cloths, and vacuum every work area. Your home is sacred to us.',
        icon: UserCheck
      },
      {
        title: 'Upfront Pricing',
        description: 'Know the exact cost before we start. No surprises, no hourly guessing games.',
        icon: DollarSign
      },
      {
        title: 'Safety First',
        description: 'Every visit includes a complimentary safety check of your main panel and grounding system.',
        icon: ShieldCheck
      }
    ],
    services: [
      { title: 'Panel Upgrades', description: 'Modernize your power supply for safety and capacity.' },
      { title: 'EV Charging Stations', description: 'Level 2 charger installation for all vehicle makes.' },
      { title: 'Lighting Design', description: 'Recessed lighting, chandeliers, and landscape accents.' },
      { title: 'Smart Home', description: 'Video doorbells, smart switches, and automation.' },
      { title: 'Troubleshooting', description: 'Expert diagnosis for flickering lights and dead outlets.' },
      { title: 'Generators', description: 'Whole-home standby power solutions.' }
    ],
    testimonial: {
      quote: "Finally an electrician I feel comfortable having in my home. They were polite, explained everything clearly, and left the room spotless.",
      author: "Jennifer M.",
      role: "Sarasota Homeowner"
    },
    faq: [
      {
        question: "Do you charge by the hour?",
        answer: "We provide upfront, flat-rate pricing for most jobs. This means the price we quote is the price you pay, regardless of how long the work takes."
      },
      {
        question: "Are your technicians insured?",
        answer: "Yes, we are fully licensed and insured in the state of Florida. All our technicians are also background-checked and drug-tested for your peace of mind."
      },
      {
        question: "How quickly can you get here?",
        answer: "We offer same-day and next-day appointments for urgent issues. For emergencies, we have dispatchers available."
      }
    ]
  },
  'business-owners': {
    id: 'business-owners',
    title: 'Business Owners',
    subtitle: 'Commercial Electrical Services',
    heroImage: 'https://images.unsplash.com/photo-1564514186755-212b99a8d9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidXNpbmVzcyUyMGJ1c3RsaW5nJTIwcmV0YWlsJTIwc3RvcmV8ZW58MXx8fHwxNzcwMTg2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1920',
    heroHeadline: 'Keep Your Business Powered, Safe, and Profitable',
    heroSubheadline: 'Minimize downtime with rapid commercial electrical services. We understand that in business, time is money.',
    ctaText: 'Get Commercial Quote',
    painPoints: {
      title: 'Is Your Electrical System Holding You Back?',
      points: [
        'Power outages causing lost revenue',
        'Flickering lights creating a bad customer impression',
        'High energy bills eating into profits',
        'Code violations risking fines or shutdown'
      ]
    },
    valueProps: [
      {
        title: 'Rapid Response',
        description: 'Priority dispatch for commercial accounts to get you back up and running fast.',
        icon: Zap
      },
      {
        title: 'After-Hours Work',
        description: 'We can work evenings or weekends to avoid disrupting your daily operations.',
        icon: Clock
      },
      {
        title: 'ROI Focused',
        description: 'Energy-efficient LED retrofits and controls that pay for themselves.',
        icon: TrendingUp
      }
    ],
    services: [
      { title: 'LED Retrofits', description: 'Upgrade outdated lighting to save up to 60% on energy.' },
      { title: 'Dedicated Circuits', description: 'Clean power for servers, POS systems, and machinery.' },
      { title: 'Data Cabling', description: 'Structured Cat6 wiring for reliable networking.' },
      { title: 'Parking Lot Lighting', description: 'Repair and maintenance for pole lights and signage.' },
      { title: 'Tenant Build-outs', description: 'Electrical remodeling for new office or retail spaces.' },
      { title: 'Backup Power', description: 'Commercial generators to keep critical systems running.' }
    ],
    testimonial: {
      quote: "Majors Electrical managed our entire office relocation. They coordinated perfectly with our IT team and finished ahead of schedule.",
      author: "Robert T.",
      role: "Operations Director"
    },
    faq: [
      {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we offer customized maintenance agreements to regularly inspect your systems, change bulbs/ballasts, and prevent costly emergency repairs."
      },
      {
        question: "Can you work around our business hours?",
        answer: "Absolutely. We understand the need to maintain productivity and can schedule work during evenings, weekends, or early mornings."
      }
    ]
  },
  'property-managers': {
    id: 'property-managers',
    title: 'Property Managers',
    subtitle: 'Property Management Solutions',
    heroImage: 'https://images.unsplash.com/photo-1760119097393-e022c73027d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZXIlMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDE4NjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1920',
    heroHeadline: 'The Electrical Partner That Makes Your Job Easier',
    heroSubheadline: 'One call resolves your electrical tickets. Fast response, detailed reporting, and tenant coordination you can trust.',
    ctaText: 'Setup Vendor Account',
    painPoints: {
      title: 'Common Property Management Headaches',
      points: [
        'Vendors who are unresponsive or hard to schedule',
        'Vague invoices that owners refuse to pay',
        'Angry tenants waiting days for repairs',
        'Recurring issues that never get fixed properly'
      ]
    },
    valueProps: [
      {
        title: 'Detailed Reporting',
        description: 'Invoices include before/after photos and clear descriptions for owner approval.',
        icon: FileText
      },
      {
        title: 'Tenant Coordination',
        description: 'We handle the scheduling directly with tenants, saving you the phone tag.',
        icon: UserCheck
      },
      {
        title: 'Multi-Site Support',
        description: 'Consistent service across all your properties with one point of contact.',
        icon: Briefcase
      }
    ],
    services: [
      { title: 'Unit Turnovers', description: 'Fast safety checks and repairs between tenants.' },
      { title: 'Safety Inspections', description: 'Annual checks for smoke detectors and panels.' },
      { title: 'Meter Banks', description: 'Repair and labeling for multi-tenant meter centers.' },
      { title: 'Outdoor Lighting', description: 'Security and landscape lighting maintenance.' },
      { title: 'Aluminum Wiring', description: ' remediation and safety certification.' },
      { title: 'Emergency Service', description: '24/7 availability for urgent tenant issues.' }
    ],
    testimonial: {
      quote: "I manage 200 units and Majors is my first call. Their documentation is perfect for my owners, and my tenants love them.",
      author: "Sarah K.",
      role: "Property Manager"
    },
    faq: [
      {
        question: "Do you have liability insurance?",
        answer: "Yes, we carry adequate general liability and workers' compensation insurance. We can provide a COI with your company listed as additional insured."
      },
      {
        question: "How do you handle billing?",
        answer: "We offer net-30 terms for established property management accounts and can integrate with portals like AppFolio or Buildium if needed."
      }
    ]
  },
  'general-contractors': {
    id: 'general-contractors',
    title: 'General Contractors',
    subtitle: 'Construction Partner',
    heroImage: 'https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYmx1ZXByaW50cyUyMGNvbnRyYWN0b3IlMjBlbGVjdHJpY2lhbiUyMHdvcmtlcnxlbnwxfHx8fDE3NzAxODY0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1920',
    heroHeadline: 'We Keep Your Project On Schedule & Up To Code',
    heroSubheadline: 'Reliable electrical subcontractors for new construction and remodels. We read the plans, show up on time, and pass inspections.',
    ctaText: 'Send Plans for Bid',
    painPoints: {
      title: 'Stop Dealing With Flaky Subs',
      points: [
        'Delays causing the whole project to slip',
        'Failed inspections pushing back closing dates',
        'Poor communication and unanswered calls',
        'Excessive change orders for "missed" items'
      ]
    },
    valueProps: [
      {
        title: 'Schedule Adherence',
        description: 'We commit to your timeline. If we say we will be there, we are there.',
        icon: CalendarCheck
      },
      {
        title: 'Plan Accuracy',
        description: 'Our estimators and leads read the prints thoroughly to catch conflicts early.',
        icon: Search
      },
      {
        title: 'Project Management',
        description: 'Dedicated PMs for larger projects to ensure material flow and manpower.',
        icon: LayoutDashboard
      }
    ],
    services: [
      { title: 'New Construction', description: 'Ground-up electrical for custom homes and commercial.' },
      { title: 'Remodels & Additions', description: 'Complex rewiring and integration of old/new systems.' },
      { title: 'Low Voltage', description: 'Wiring for data, audio/video, and security.' },
      { title: 'Temp Power', description: 'Reliable site power for the duration of construction.' },
      { title: 'Service Upgrades', description: 'Coordinating with utilities for heavy-ups.' },
      { title: 'Plan Review', description: 'Value engineering and code compliance consulting.' }
    ],
    testimonial: {
      quote: "Majors is the only sub I don't have to babysit. They hit every rough-in and trim-out deadline on our last 5 custom homes.",
      author: "Mike D.",
      role: "Custom Home Builder"
    },
    faq: [
      {
        question: "What is your bidding process?",
        answer: "Send us your plans (PDF link preferred). We typically turn around detailed bids within 3-5 business days depending on project size."
      },
      {
        question: "How large of a crew can you supply?",
        answer: "We have a team of 15+ electricians and can scale our crew size to meet aggressive deadlines for larger commercial or multi-family projects."
      }
    ]
  }
};
