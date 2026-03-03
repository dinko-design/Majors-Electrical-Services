import { 
  Home, 
  Zap, 
  Shield, 
  Lightbulb, 
  Battery, 
  Settings, 
  Building, 
  AlertTriangle, 
  Wrench, 
  Fan, 
  Cable, 
  Hammer, 
  Bell, 
  FileCheck, 
  Sun, 
  Eye, 
  Star, 
  Wifi, 
  Network, 
  Video, 
  Tv, 
  Briefcase, 
  Store,
  ShieldCheck,
  Clock,
  Phone,
  Activity,
  Waves
} from 'lucide-react';

import projectKitchen from 'asset/68d7140666521ac46ae1d65e1d45910472dbc85a.png?w=800&format=webp';
import projectOffice from 'asset/f42ed4e746c4c65ff1fb2011fbbe25c16fdc4e7e.png?w=800&format=webp';
import projectTech from 'asset/720377ac9610b8bd67f65e8a33a3361b5a8b55d9.png?w=800&format=webp';
import maintenanceImage from 'asset/859060effc5b00def49f2dda83f739383b7ba848.png?w=800&format=webp';
import projectSmartHome from 'asset/635d6e983d41d6188362ccf44610c1102fea01d1.png?w=800&format=webp';

export const services = {
  // Main Categories
  'residential': {
    title: 'Residential Electrical Services',
    subtitle: 'Safe, modern electrical solutions for your home.',
    description: 'From panel upgrades to smart home installations, we ensure your home power system is safe, efficient, and up to code.',
    image: projectKitchen,
    features: ['Panel Upgrades & Replacements', 'Whole Home Rewiring', 'Lighting Installation', 'Outlet & Switch Repair', 'EV Charger Installation', 'Surge Protection'],
    icon: Home
  },
  'commercial': {
    title: 'Commercial Electrical Services',
    subtitle: 'Powering businesses across the Gulf Coast.',
    description: 'We understand the unique demands of commercial electrical systems. Minimal downtime, maximum safety, and scalability for your growing business.',
    image: projectOffice,
    features: ['New Construction Wiring', 'Office Build-outs', 'Commercial Lighting', 'Data & Communications', 'Backup Power Systems', 'Code Compliance Audits'],
    icon: Building
  },
  'maintenance': {
    title: 'Maintenance & Service',
    subtitle: 'Proactive care for your electrical infrastructure.',
    description: 'Prevent costly outages and ensure safety with our scheduled maintenance programs and rapid-response troubleshooting.',
    image: maintenanceImage,
    features: ['Scheduled Inspections', 'Thermal Imaging', 'Emergency Repairs', 'Lighting Maintenance', 'Generator Service', 'Safety Certifications'],
    icon: Settings
  },

  // Construction & Renovations
  'new-construction': {
    title: 'New Construction Homes',
    subtitle: 'Wiring your dream home from the ground up.',
    description: 'We work with custom home builders and homeowners to design and install complete electrical systems for new construction projects, ensuring modern code compliance and future-proofing.',
    image: 'https://images.unsplash.com/photo-1768321911432-da0c5b6cf890?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Service Panel Installation', 'Whole Home Wiring', 'Lighting Design', 'Smart Home Pre-wiring', 'HVAC Power', 'Temporary Power Poles'],
    icon: Hammer
  },
  'home-remodels': {
    title: 'Home Remodels',
    subtitle: 'Updating power for your new layout.',
    description: 'Kitchens, bathrooms, and living spaces often require major electrical changes during a remodel. We move circuits, add lighting, and upgrade power to match your new design.',
    image: 'https://images.unsplash.com/photo-1722888879060-ed9d1e88c2c7?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Kitchen Island Power', 'Bathroom Vanity Lighting', 'Circuit Relocation', 'Appliance Hookups', 'Permitting Assistance', 'Recessed Lighting'],
    icon: Wrench
  },
  'home-additions': {
    title: 'Home Additions',
    subtitle: 'Seamlessly extending your electrical system.',
    description: 'Adding a room, garage, or guest suite? We calculate load requirements and extend your existing electrical system to power your new space safely and efficiently.',
    image: 'https://images.unsplash.com/photo-1768321911432-da0c5b6cf890?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Sub-panel Installation', 'Load Calculations', 'New Circuit Runs', 'Outlet Placement', 'Lighting Integration', 'Heating/Cooling Power'],
    icon: Home
  },

  // Lighting Services
  'interior-lighting': {
    title: 'Interior Lighting',
    subtitle: 'Ambiance and functionality combined.',
    description: 'From statement chandeliers to functional task lighting, we design and install interior lighting plans that transform the look and feel of your home.',
    image: 'https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Recessed Lighting', 'Pendant Lights', 'Track Lighting', 'Dimmer Controls', 'LED Upgrades', 'Art Lighting'],
    icon: Lightbulb
  },
  'exterior-lighting': {
    title: 'Exterior Lighting',
    subtitle: 'Curb appeal and security after dark.',
    description: 'Enhance your home\'s exterior with custom lighting solutions. We install coach lights, soffit lighting, and floodlights to make your home shine at night.',
    image: 'https://images.unsplash.com/photo-1767710924314-def0e691dbba?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Coach Lights', 'Soffit Lighting', 'Floodlights', 'Post Lights', 'Patio Lighting', 'Dark Sky Compliant'],
    icon: Sun
  },
  'landscape-lighting': {
    title: 'Landscape Lighting',
    subtitle: 'Beautify and secure your exterior.',
    description: 'Highlight your home\'s architecture and garden features with professional low-voltage landscape lighting. Adds curb appeal and security simultaneously.',
    image: 'https://images.unsplash.com/photo-1742786756827-aec2791e0f87?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Path & Walkway Lights', 'Up-lighting Trees', 'Architectural Accents', 'Low Voltage Transformers', 'Timer & Smart Control', 'Waterproof Connections'],
    icon: Sun
  },
  'parking-lot-lights': {
    title: 'Parking Lot Lights',
    subtitle: 'Safety for your customers and staff.',
    description: 'We repair and maintain parking lot pole lights. From bulb replacements to ballast kits and full LED head replacements.',
    image: 'https://images.unsplash.com/photo-1767074255793-f7459397da04?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Bulb Replacement', 'Ballast Repair', 'LED Head Upgrades', 'Pole Repair', 'Timer/Photocell Repair', 'Signage Lighting'],
    icon: Sun
  },
  'automatic-timer-lighting': {
    title: 'Automatic Timer Lighting',
    subtitle: 'Set it and forget it.',
    description: 'Automate your lighting for convenience and security. We install astronomical timers and smart switches that adjust to sunrise and sunset times automatically.',
    image: 'https://images.unsplash.com/photo-1699584996735-93278a03a5ba?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Astronomical Timers', 'Photocell Installation', 'Smart Schedules', 'Holiday Lighting Power', 'Energy Saving', 'Security Automation'],
    icon: Clock
  },

  // Green Energy & Efficiency
  'solar-systems': {
    title: 'Solar Systems',
    subtitle: 'Harness the Florida sun.',
    description: 'We provide electrical integration for solar panel systems, including inverter installation, AC disconnects, and net metering connections.',
    image: 'https://images.unsplash.com/photo-1761158495585-eac721decf1b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Inverter Installation', 'AC Disconnects', 'Net Metering Setup', 'Panel Integration', 'Solar Repair', 'Expansion Wiring'],
    icon: Sun
  },
  'battery-systems': {
    title: 'Battery Systems',
    subtitle: 'Store power for when you need it.',
    description: 'Install a home battery backup system like the Tesla Powerwall or Enphase IQ Battery to keep your home running during grid outages or to store solar energy.',
    image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Whole Home Backup', 'Load Management', 'Tesla Powerwall', 'Enphase IQ Battery', 'Grid Independence', 'ToU Optimization'],
    icon: Battery
  },
  'energy-management': {
    title: 'Energy Management Systems',
    subtitle: 'Monitor and control your usage.',
    description: 'Take control of your electricity bill with smart energy monitors. Track real-time usage, identify power hogs, and manage your consumption.',
    image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Span Smart Panel', 'Sense Energy Monitor', 'Usage Tracking', 'Remote Circuit Control', 'Efficiency Audits', 'Load Shedding'],
    icon: Activity
  },

  // Pools & Spas
  'swimming-pools': {
    title: 'Swimming Pools',
    subtitle: 'Powering your backyard oasis.',
    description: 'Pool pumps, heaters, and salt systems require specific electrical connections. We ensure your pool equipment is grounded, bonded, and powered safely.',
    image: 'https://images.unsplash.com/photo-1683885666954-7b7264589994?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Pool Pump Wiring', 'Heat Pump Circuits', 'Salt Chlorinators', 'Equipotential Bonding', 'Pool Lighting', 'Automation Centers'],
    icon: Waves
  },
  'spas-and-hot-tubs': {
    title: 'Spas & Hot Tubs',
    subtitle: 'Relax with safe, reliable power.',
    description: 'Hot tubs require dedicated high-amperage circuits and GFCI protection. We handle the heavy lifting of wiring your new spa so you can just relax.',
    image: 'https://images.unsplash.com/photo-1688047976588-55ec398e0436?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['240V Dedicated Circuits', 'GFCI Spa Panels', 'Disconnect Switches', 'Conduit Runs', 'Safety Inspections', 'Bonding Checks'],
    icon: Waves
  },

  // Security & Safety
  'outdoor-security': {
    title: 'Outdoor Security',
    subtitle: 'Protect what matters most.',
    description: 'Comprehensive outdoor security wiring including motion lights, floodlights, and power for surveillance cameras to deter intruders.',
    image: 'https://images.unsplash.com/photo-1769847933914-a29c8e17aae9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Floodlight Cameras', 'Motion Sensors', 'Perimeter Lighting', 'Gate Power', 'Video Doorbells', 'Smart Locks Power'],
    icon: ShieldCheck
  },
  'emergency-service': {
    title: '24 Hour Emergency Service',
    subtitle: 'Here when you need us most.',
    description: 'Electrical emergencies don\'t wait for business hours. Our on-call technicians are ready 24/7 to handle dangerous outages, sparks, or smoke.',
    image: 'https://images.unsplash.com/photo-1692939289734-11eb9fa20c79?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Power Outages', 'Burning Smells', 'Arcing Wires', 'Storm Damage', 'Panel Failures', 'Rapid Response'],
    icon: Phone
  },

  // Existing Essential Services
  'panel-upgrades': {
    title: 'Electrical Panel Upgrades',
    subtitle: 'Modernize your home\'s power center.',
    description: 'Is your panel older than 20 years? Are you adding new appliances or an EV charger? An upgraded panel ensures safety and capacity for modern electrical loads.',
    image: projectTech,
    features: ['200 Amp Service Upgrades', 'Fuse Box Replacements', 'Circuit Breaker Installation', 'Labeling & Organization', 'Code Compliance', 'Surge Protection Integration'],
    icon: Zap
  },
  'outlet-&-switch': {
    title: 'Outlet & Switch Repair',
    subtitle: 'Fixing the small things that matter most.',
    description: 'Dead outlets and flickering switches aren\'t just annoying—they can be fire hazards. We repair and replace faulty devices with modern, tamper-resistant and decorative options.',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['GFCI/AFCI Installation', 'Dimmer Switches', 'USB Outlets', 'Tamper Resistant Receptacles', 'Outdoor Outlets', 'Smart Switches'],
    icon: Wrench
  },
  'ceiling-fans': {
    title: 'Ceiling Fan Installation',
    subtitle: 'Stay cool and energy efficient.',
    description: 'Proper ceiling fan installation requires secure mounting and balanced blades. We handle high ceilings, new wiring for fans where none existed, and remote control setups.',
    image: 'https://images.unsplash.com/photo-1737473564653-532fbece6e15?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['New Fan Installation', 'Fan Replacement', 'High Ceiling Mounting', 'Remote Control Setup', 'Light Kit Installation', 'Balance & Noise Reduction'],
    icon: Fan
  },
  'whole-home-rewire': {
    title: 'Whole Home Rewire',
    subtitle: 'Replacing outdated wiring for safety.',
    description: 'If your home was built before the 1970s, it may have cloth or aluminum wiring that poses a fire risk. We perform complete rewires with minimal drywall damage.',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Cloth Wiring Removal', 'Aluminum Wiring Mitigation', 'Grounding Updates', 'New Circuit Installation', 'Minimal Drywall Impact', 'Code Compliance'],
    icon: Cable
  },
  'appliance-circuits': {
    title: 'Appliance Circuits',
    subtitle: 'Dedicated power for heavy loads.',
    description: 'Modern appliances like induction ranges, dryers, and AC units need dedicated circuits. We ensure your expensive appliances get the clean, dedicated power they require.',
    image: 'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['240V Range Circuits', 'Dryer Outlets', 'Hot Tub & Pool Wiring', 'AC/Heat Pump Circuits', 'Microwave Dedicated Lines', 'Workshop Power'],
    icon: Hammer
  },

  // Safety Services
  'generators': {
    title: 'Generator Installation',
    subtitle: 'Never be left in the dark.',
    description: 'Florida weather is unpredictable. Keep your essential systems running during hurricanes and outages with a standby generator.',
    image: 'https://images.unsplash.com/photo-1632901402347-6ac87c41d65a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Whole Home Standby Generators', 'Transfer Switch Installation', 'Portable Generator Interlocks', 'Gas Line Coordination', 'Maintenance Plans', 'Remote Monitoring'],
    icon: AlertTriangle
  },
  'surge-protection': {
    title: 'Surge Protection',
    subtitle: 'Defend your electronics from spikes.',
    description: 'Lightning and grid fluctuations can destroy sensitive electronics instantly. A whole-home surge protector at the panel stops surges before they enter your home wiring.',
    image: 'https://images.unsplash.com/photo-1646747149414-e0bd32b1a121?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Whole House Protection', 'Lightning Arrestors', 'Panel-Mounted Units', 'Warranty Backed', 'Data Line Protection', 'Cable/Coax Protection'],
    icon: Shield
  },
  'smoke-&-co-detectors': {
    title: 'Smoke & CO Detectors',
    subtitle: 'Early warning saves lives.',
    description: 'Interconnected smoke and carbon monoxide detectors are required by code and essential for safety. We install hardwired systems with battery backups.',
    image: 'https://images.unsplash.com/photo-1764757137717-78be1702848a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Hardwired Interconnection', '10-Year Battery Backup', 'Combo Smoke/CO Units', 'Smart Detector Installation', 'False Alarm Troubleshooting', 'Code Placement'],
    icon: Bell
  },
  'safety-inspections': {
    title: 'Safety Inspections',
    subtitle: 'Peace of mind for your property.',
    description: 'Buying a new home or worried about old wiring? Our comprehensive inspections check every aspect of your electrical system against current NEC codes.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Real Estate Inspections', 'Insurance 4-Point Insp.', 'Panel Safety Check', 'Grounding Verification', 'GFCI/AFCI Testing', 'Detailed Reports'],
    icon: FileCheck
  },
  'arc-fault-breakers': {
    title: 'Arc Fault Breakers',
    subtitle: 'Advanced fire prevention.',
    description: 'AFCI (Arc Fault Circuit Interrupter) breakers detect dangerous arcing conditions that standard breakers miss, preventing electrical fires before they start.',
    image: 'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['AFCI Installation', 'Troubleshooting Tripping', 'Code Compliance Updates', 'Bedroom Circuit Safety', 'Dual Function AFCI/GFCI', 'Panel Modernization'],
    icon: Zap
  },

  // More Lighting
  'recessed-lighting': {
    title: 'Recessed Lighting',
    subtitle: 'Sleek, modern, and efficient.',
    description: 'Upgrade your home with modern LED recessed lighting (can lights). We design layouts that eliminate dark spots and make your rooms feel larger and more inviting.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['LED Wafer Lights', '4-inch & 6-inch Cans', 'Gimbal/Directional Trim', 'Dimmer Compatibility', 'Kitchen & Living Layouts', 'Energy Efficiency'],
    icon: Lightbulb
  },
  'security-lighting': {
    title: 'Security Lighting',
    subtitle: 'Deter intruders with light.',
    description: 'Motion-activated floodlights and dusk-to-dawn fixtures keep your property illuminated and secure. A simple but effective crime deterrent.',
    image: 'https://images.unsplash.com/photo-1629375438015-f74506993e2c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Motion Sensors', 'LED Floodlights', 'Dusk-to-Dawn Photocells', 'Perimeter Lighting', 'Eave Mounted Fixtures', 'Smart Security Lights'],
    icon: Eye
  },
  'under-cabinet': {
    title: 'Under Cabinet Lighting',
    subtitle: 'Task lighting for your workspace.',
    description: 'Illuminate your countertops with concealed LED strip lighting. Perfect for kitchens, laundry rooms, and workshops, providing shadow-free task lighting.',
    image: projectKitchen,
    features: ['LED Tape Light', 'Hardwired Installation', 'Diffused Channels', 'Dimmer Control', 'Color Temperature Choice', 'Clean Hidden Wiring'],
    icon: Zap
  },
  'chandelier-install': {
    title: 'Chandelier Installation',
    subtitle: 'The centerpiece of your room.',
    description: 'Installing a heavy or high-hanging chandelier requires expertise and proper support. We safely install fixtures in foyers, dining rooms, and high ceilings.',
    image: 'https://images.unsplash.com/photo-1761157993834-13ad2799f662?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['High Ceiling Lifts', 'Box Support Reinforcement', 'Crystal Assembly', 'Sconce Installation', 'Dimmer Switches', 'Complex Fixtures'],
    icon: Star
  },

  // Tech Services
  'ev-charging': {
    title: 'EV Charger Installation',
    subtitle: 'Charge your vehicle safely at home.',
    description: 'We install Level 2 EV chargers for all major vehicle brands. Get faster charging speeds with a dedicated circuit installed by certified professionals.',
    image: 'https://images.unsplash.com/photo-1600490819734-6311c5c6f517?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Tesla Wall Connector Install', 'Universal Level 2 Chargers', 'Circuit Installation', 'Load Calculation', 'Permitting & Inspection', 'Hardwired or Plug-in Setup'],
    icon: Battery
  },
  'smart-switches': {
    title: 'Smart Switches',
    subtitle: 'Control your home from anywhere.',
    description: 'Upgrade to smart lighting control with Lutron Caseta, Leviton, or other smart systems. Control lights via phone, voice, or schedules.',
    image: projectSmartHome,
    features: ['Lutron Caseta Install', 'Voice Control Setup', 'App Configuration', '3-Way Smart Switches', 'Scene Programming', 'Hub Installation'],
    icon: Wifi
  },
  'data-cabling': {
    title: 'Data Cabling',
    subtitle: 'Reliable high-speed connections.',
    description: 'Wi-Fi is great, but nothing beats a hardwired Ethernet connection for speed and stability. We run Cat6 cabling for offices, gaming, and access points.',
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Cat6/Cat6a Runs', 'Ethernet Termination', 'Patch Panels', 'Wi-Fi Access Points', 'Home Network Setup', 'Structured Media Enclosures'],
    icon: Network
  },
  'security-cameras': {
    title: 'Security Cameras',
    subtitle: 'Watch over your property 24/7.',
    description: 'We install wiring for PoE (Power over Ethernet) cameras and floodlight cameras. Professional wiring means no ugly cables draped over your siding.',
    image: 'https://images.unsplash.com/photo-1762529484700-1a7aa5992aff?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['PoE Camera Wiring', 'Ring/Nest Floodlights', 'Video Doorbell Install', 'NVR System Setup', 'Concealed Wiring', 'Camera Mounting'],
    icon: Video
  },
  'home-theater': {
    title: 'Home Theater',
    subtitle: 'Cinema experience at home.',
    description: 'Wall-mounted TVs with concealed wiring and surround sound connections. We create a clean, wire-free look for your entertainment center.',
    image: 'https://images.unsplash.com/photo-1759735218086-67f9f853ab8b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['TV Mounting', 'In-Wall Cable Concealment', 'Surround Sound Wiring', 'Projector Installation', 'AV Rack Power', 'Speaker Mounting'],
    icon: Tv
  },

  // Commercial Services
  'office-build-outs': {
    title: 'Office Build-outs',
    subtitle: 'Powering your new workspace.',
    description: 'Tenant improvements and office remodels require precise electrical planning. We provide data, power, and lighting for modern office environments.',
    image: projectOffice,
    features: ['Cubicle Power Feeds', 'Conference Room AV', 'Emergency Lighting', 'Data Room Wiring', 'Lobby Lighting', 'Occupancy Sensors'],
    icon: Briefcase
  },
  'led-retrofits': {
    title: 'LED Retrofits',
    subtitle: 'Cut your energy bill in half.',
    description: 'Replace old fluorescent or HID lighting with energy-efficient LEDs. Better light quality, instant-on capability, and massive energy savings.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Warehouse High Bays', 'Office Troffer Retrofits', 'Exterior Wall Packs', 'Energy ROI Analysis', 'Rebate Assistance', 'Motion Control'],
    icon: Lightbulb
  },
  'dedicated-circuits': {
    title: 'Dedicated Circuits',
    subtitle: 'Reliable power for equipment.',
    description: 'Copiers, servers, medical equipment, and machinery need their own circuits to operate safely and without tripping breakers.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Server Room Circuits', 'Machinery Hookups', 'Isolated Ground Circuits', 'Copier/Printer Power', 'Medical Grade Outlets', 'Commercial Kitchen Power'],
    icon: Zap
  },
  'signage-power': {
    title: 'Signage Power',
    subtitle: 'Light up your brand.',
    description: 'We run the electrical feeds and make the connections for your illuminated business signs, ensuring they shine bright every night.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=800',
    features: ['Monument Sign Power', 'Storefront Channel Letters', 'Time Clock Control', 'Sign Disconnects', 'Maintenance & Repair', 'Neon to LED Conversion'],
    icon: Store
  }
};

import { serviceContent, type ServiceExtendedContent } from './service-content';

export type ServiceBase = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  icon: typeof Home;
};

export type ServiceData = ServiceBase & Partial<ServiceExtendedContent>;

export const servicesWithContent: Record<string, ServiceData> = Object.fromEntries(
  Object.entries(services).map(([key, service]) => [
    key,
    { ...service, ...(serviceContent[key] || {}) },
  ])
);
