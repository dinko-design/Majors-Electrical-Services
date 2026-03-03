import { 
  Home, 
  ShieldCheck, 
  Lightbulb, 
  Wifi, 
  Building2, 
  Zap, 
  Wrench, 
  Fan, 
  Cable, 
  Hammer,
  AlertTriangle,
  Bell,
  FileCheck,
  Sun,
  Eye,
  Star,
  Battery,
  Network,
  Video,
  Tv,
  Store,
  Briefcase
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 'essential',
    title: 'Home Essentials',
    icon: Home,
    description: 'Core electrical services for every homeowner.',
    items: [
      { title: 'Panel Upgrades', href: '/services/panel-upgrades', icon: Zap, desc: '200A service upgrades & fuse replacements.' },
      { title: 'Outlet & Switch', href: '/services/outlet-switch', icon: Wrench, desc: 'Repair dead outlets and install dimmers.' },
      { title: 'Ceiling Fans', href: '/services/ceiling-fans', icon: Fan, desc: 'Installation, balancing & control wiring.' },
      { title: 'Whole Home Rewire', href: '/services/rewire', icon: Cable, desc: 'Replace old cloth or aluminum wiring.' },
      { title: 'Appliance Circuits', href: '/services/appliance-circuits', icon: Hammer, desc: 'Dedicated power for dryers, ranges, AC.' },
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Protection',
    icon: ShieldCheck,
    description: 'Protect your family and property from hazards.',
    items: [
      { title: 'Generators', href: '/services/generators', icon: AlertTriangle, desc: 'Whole-home standby & portable interlocks.' },
      { title: 'Surge Protection', href: '/services/surge-protection', icon: ShieldCheck, desc: 'Whole-house defense against spikes.' },
      { title: 'Smoke & CO Detectors', href: '/services/smoke-detectors', icon: Bell, desc: 'Hardwired systems with battery backup.' },
      { title: 'Safety Inspections', href: '/services/safety-inspections', icon: FileCheck, desc: 'Comprehensive NEC code compliance audits.' },
      { title: 'Arc Fault Breakers', href: '/services/arc-fault', icon: Zap, desc: 'Advanced fire prevention technology.' },
    ]
  },
  {
    id: 'lighting',
    title: 'Lighting & Decor',
    icon: Lightbulb,
    description: 'Beautiful, efficient lighting design.',
    items: [
      { title: 'Recessed Lighting', href: '/services/recessed-lighting', icon: Lightbulb, desc: 'Modern, efficient LED can lighting.' },
      { title: 'Landscape Lighting', href: '/services/landscape-lighting', icon: Sun, desc: 'Low-voltage pathway & garden lights.' },
      { title: 'Security Lighting', href: '/services/security-lighting', icon: Eye, desc: 'Motion-activated floodlights.' },
      { title: 'Under Cabinet', href: '/services/under-cabinet', icon: Zap, desc: 'Task lighting for kitchens & workspaces.' },
      { title: 'Chandelier Install', href: '/services/chandelier', icon: Star, desc: 'Expert hanging for high ceilings.' },
    ]
  },
  {
    id: 'tech',
    title: 'Smart Tech & EV',
    icon: Wifi,
    description: 'Modernize your home with smart integration.',
    items: [
      { title: 'EV Charging', href: '/services/ev-charging', icon: Battery, desc: 'Level 2 chargers for Tesla & all EVs.' },
      { title: 'Smart Switches', href: '/services/smart-switches', icon: Wifi, desc: 'Lutron Caseta & voice control setups.' },
      { title: 'Data Cabling', href: '/services/data-cabling', icon: Network, desc: 'Cat6 ethernet & mesh wifi backhaul.' },
      { title: 'Security Cameras', href: '/services/security-cameras', icon: Video, desc: 'Ring, Nest, & POE camera wiring.' },
      { title: 'Home Theater', href: '/services/home-theater', icon: Tv, desc: 'Mounted TVs with concealed wiring.' },
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: Building2,
    description: 'Reliable power for your business.',
    items: [
      { title: 'Office Build-outs', href: '/services/office-build-outs', icon: Briefcase, desc: 'Power & data for new workspaces.' },
      { title: 'LED Retrofits', href: '/services/led-retrofits', icon: Lightbulb, desc: 'Energy saving upgrades for warehouses.' },
      { title: 'Dedicated Circuits', href: '/services/commercial-circuits', icon: Zap, desc: 'Clean power for sensitive equipment.' },
      { title: 'Parking Lot Lights', href: '/services/parking-lights', icon: Sun, desc: 'Pole lighting repair & maintenance.' },
      { title: 'Signage Power', href: '/services/signage', icon: Store, desc: 'Electrical feeds for business signs.' },
    ]
  }
];
