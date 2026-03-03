export const locations = {
  'sarasota': {
    name: 'Sarasota',
    slug: 'sarasota',
    tagline: 'Premier Electrical Services in Sarasota, FL',
    description: 'Serving the heart of the Suncoast with residential and commercial electrical expertise.',
    heroImage: 'https://images.unsplash.com/photo-1765318608597-29efe94730b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'From historic homes in Laurel Park to luxury condos downtown and new builds in Skye Ranch, Sarasota requires a diverse range of electrical expertise. Majors Electrical Services is your locally owned partner for all projects.',
      details: 'Sarasota involves a mix of aging infrastructure needing safety updates and cutting-edge smart home integrations. We understand local building codes specific to hurricane resilience and salt-air protection.'
    },
    popularServices: [
      { name: 'Panel Upgrades', description: 'Upgrading 100A panels to 200A+ for modern demands.', link: '/services/panel-upgrades' },
      { name: 'Historic Rewiring', description: 'Replacing cloth wiring in 1920s-50s homes.', link: '/services/whole-home-rewire' },
      { name: 'Landscape Lighting', description: 'Illuminating palms and pathways for safety and beauty.', link: '/services/landscape-lighting' },
      { name: 'Dock & Boat Lift Power', description: 'Safe, code-compliant power for your waterfront lifestyle.', link: '/services/appliance-circuits' }
    ],
    neighborhoods: ['Downtown Sarasota', 'Siesta Key', 'Palmer Ranch', 'The Meadows', 'Gulf Gate', 'Bird Key', 'Arlington Park'],
    reviews: [
      {
        text: "The best electrician we've hired in Sarasota. They rewired our 1950s bungalow and were incredibly respectful of the property.",
        author: "Emily R.",
        location: "Arlington Park"
      },
      {
        text: "Fast, professional service for our office on Main St. Highly recommended for commercial work.",
        author: "Mark T.",
        location: "Downtown"
      }
    ]
  },
  'bradenton': {
    name: 'Bradenton',
    slug: 'bradenton',
    tagline: 'Reliable Electricians for Manatee County',
    description: 'Trusted by Bradenton homeowners and businesses for over a decade.',
    heroImage: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'Bradenton is growing fast, and Majors Electrical is here to support that growth. Whether you are in West Bradenton, near the Riverwalk, or out east, our trucks are in your neighborhood.',
      details: 'We specialize in both residential service calls and commercial build-outs. Our team is familiar with Manatee County permitting processes, ensuring your project moves forward without delay.'
    },
    popularServices: [
      { name: 'Service Calls', description: 'Troubleshooting flickering lights and dead outlets.', link: '/services/residential' },
      { name: 'Kitchen Remodels', description: 'Under-cabinet lighting and appliance circuits.', link: '/services/residential' },
      { name: 'Generator Interlocks', description: 'Affordable backup power connections.', link: '/services/generators' },
      { name: 'Commercial Maintenance', description: 'Lighting repair for retail and office spaces.', link: '/services/maintenance' }
    ],
    neighborhoods: ['West Bradenton', 'River District', 'Palma Sola', 'Bayshore Gardens', 'Braden River'],
    reviews: [
      {
        text: "Fixed our breaker box quickly. The technician was polite and explained everything.",
        author: "Sarah L.",
        location: "West Bradenton"
      }
    ]
  },
  'lakewood-ranch': {
    name: 'Lakewood Ranch',
    slug: 'lakewood-ranch',
    tagline: 'Modern Electrical Solutions for LWR',
    description: 'Smart home integrations and EV charging for the region\'s fastest-growing community.',
    heroImage: 'https://images.unsplash.com/photo-1688250282372-611113265a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'Lakewood Ranch demands high-quality, modern electrical solutions. We work with homeowners in every village to enhance their new or existing homes with the latest technology.',
      details: 'From installing Tesla Wall Connectors to setting up whole-home surge protection for sensitive electronics, we are the tech-forward electricians LWR residents trust.'
    },
    popularServices: [
      { name: 'EV Charging', description: 'Licensed installation for Tesla, Rivian, and more.', link: '/services/ev-charging' },
      { name: 'Smart Home Setup', description: 'Lutron Caseta, Ring, and Nest integrations.', link: '/services/smart-switches' },
      { name: 'Pool Equipment Power', description: 'Heaters, pumps, and automation wiring.', link: '/services/appliance-circuits' },
      { name: 'Surge Protection', description: 'Whole-house defense against lightning strikes.', link: '/services/surge-protection' }
    ],
    neighborhoods: ['Waterside', 'Greenbrook', 'Country Club', 'Summerfield', 'Esplanade'],
    reviews: [
      {
        text: "Majors installed our EV charger in the garage. Clean work, looks factory installed.",
        author: "David K.",
        location: "Waterside"
      }
    ]
  },
  'venice': {
    name: 'Venice',
    slug: 'venice',
    tagline: 'Expert Service for Venice & South County',
    description: 'Protecting your island home with safety inspections and upgrades.',
    heroImage: 'https://images.unsplash.com/photo-1757025663044-0c5df136f030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'Venice Island and the surrounding mainland areas have a unique charm and unique electrical needs. We help maintain the safety and functionality of older homes while bringing modern power to new construction.',
      details: 'We are frequently on the island for service upgrades and renovation projects. Our team treats your home with the utmost respect.'
    },
    popularServices: [
      { name: 'Safety Inspections', description: 'Comprehensive checks for insurance and peace of mind.', link: '/services/safety-inspections' },
      { name: 'Ceiling Fans', description: 'Cooling your lanai and living spaces.', link: '/services/ceiling-fans' },
      { name: 'Outdoor Lighting', description: 'Security and aesthetic lighting for your yard.', link: '/services/landscape-lighting' },
      { name: 'Panel Changes', description: 'Replacing outdated Federal Pacific or Zinsco panels.', link: '/services/panel-upgrades' }
    ],
    neighborhoods: ['Venice Island', 'South Venice', 'Plantation', 'Grand Palm', 'Nokomis'],
    reviews: [
      {
        text: "Very professional. They replaced our old panel and labeled everything clearly.",
        author: "Janet P.",
        location: "Venice Island"
      }
    ]
  },
  'north-port': {
    name: 'North Port',
    slug: 'north-port',
    tagline: 'Powering North Port\'s Growth',
    description: 'Affordable, high-quality electrical service for our growing community.',
    heroImage: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'As one of the fastest growing cities in the area, North Port needs reliable tradespeople. Majors Electrical is committed to providing prompt, fair service to all North Port residents.',
      details: 'We handle everything from well pump power to new home wiring. Count on us for honest pricing and quality workmanship.'
    },
    popularServices: [
      { name: 'Well Equipment', description: 'Power for pumps and filtration systems.', link: '/services/appliance-circuits' },
      { name: 'New Construction', description: 'Complete wiring for new homes and additions.', link: '/services/residential' },
      { name: 'Generator Hookups', description: 'Portable generator interlock kits.', link: '/services/generators' },
      { name: 'Outlet Repair', description: 'Fixing dead plugs and switches.', link: '/services/outlet-&-switch' }
    ],
    neighborhoods: ['Warm Mineral Springs', 'North Port Estates', 'Bobcat Trail', 'Heron Creek'],
    reviews: [
      {
        text: "Great price and great service. Will use them again.",
        author: "Mike R.",
        location: "North Port"
      }
    ]
  },
  'tampa-bay': {
    name: 'Tampa Bay',
    slug: 'tampa-bay',
    tagline: 'Commercial & Residential Services in Tampa',
    description: 'Expanding our trusted services to the greater Tampa Bay region.',
    heroImage: 'https://images.unsplash.com/photo-1688250282372-611113265a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    content: {
      intro: 'Majors Electrical now serves select commercial and residential projects in the Tampa Bay area. We bring our signature reliability and professionalism north.',
      details: 'Focusing on larger projects, commercial build-outs, and estate work, we are the partner you can trust for complex electrical needs.'
    },
    popularServices: [
      { name: 'Commercial Service', description: 'Retail and office electrical maintenance.', link: '/services/commercial' },
      { name: 'Tenant Build-outs', description: 'Custom electrical for new business spaces.', link: '/services/office-build-outs' },
      { name: 'Lighting Retrofits', description: 'Energy-saving LED upgrades.', link: '/services/led-retrofits' },
      { name: 'Data Cabling', description: 'Structured wiring for business networks.', link: '/services/data-cabling' }
    ],
    neighborhoods: ['South Tampa', 'Brandon', 'Riverview', 'St. Petersburg'],
    reviews: [
      {
        text: "Majors handled our office renovation in St. Pete perfectly. On time and on budget.",
        author: "Tech Solutions Inc.",
        location: "St. Petersburg"
      }
    ]
  }
};
