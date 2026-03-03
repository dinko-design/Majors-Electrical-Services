export interface ServiceContentSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ServiceExtendedContent {
  content: {
    intro: string;
    sections: ServiceContentSection[];
    safetyNote?: string;
  };
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  galleryImages: ServiceGalleryImage[];
}

export const serviceContent: Record<string, ServiceExtendedContent> = {

  'residential': {
    content: {
      intro:
        'Majors Electrical provides comprehensive residential electrical services throughout Sarasota, Bradenton, and the greater Gulf Coast region. Whether your home needs a panel upgrade, whole-house rewiring, or a simple outlet repair, our licensed electricians deliver code-compliant workmanship backed by years of experience in Florida\'s unique climate and building conditions.',
      sections: [
        {
          heading: 'Why Sarasota Homes Need Expert Electrical Work',
          body:
            'Homes on Florida\'s Gulf Coast face challenges most regions never encounter—persistent humidity, salt-air corrosion on terminals and enclosures, and one of the highest lightning-strike densities in the country. These factors accelerate wear on wiring, breakers, and grounding systems far faster than national averages. Majors Electrical understands the local environment and specifies marine-grade hardware, UV-rated conduit, and corrosion-resistant lugs to ensure long-lasting installations.',
          bullets: [
            'Corrosion-resistant panel hardware rated for coastal environments',
            'Whole-home surge protection against Florida\'s frequent lightning',
            'GFCI and AFCI protection per NEC 210.8 and 210.12 requirements',
            'Energy-efficient LED lighting upgrades to reduce cooling loads',
            'Hurricane-rated exterior fixtures and weatherproof enclosures',
          ],
        },
        {
          heading: 'Our Residential Service Process',
          body:
            'Every job begins with a thorough walk-through and load calculation so we understand exactly what your home needs before any work begins. We pull all required permits with Sarasota County or your local jurisdiction and schedule inspections so you never have to worry about compliance. Our trucks are fully stocked, which means most repairs are completed in a single visit.',
          bullets: [
            'Free on-site estimates with transparent, upfront pricing',
            'Permit coordination with Sarasota County Building Services',
            'Clean, respectful work—we protect floors, walls, and furniture',
            'Post-installation testing with documented results',
          ],
        },
        {
          heading: 'Keeping Your Home Up to Code',
          body:
            'Florida adopts the NEC on a three-year cycle, and Sarasota County often adds local amendments that go beyond the national standard. Older homes may have Federal Pacific or Zinsco panels, ungrounded two-prong outlets, or cloth-insulated wiring that no longer meets code. Majors Electrical identifies these issues during our initial inspection and provides a prioritized remediation plan so you can address the most critical safety concerns first.',
          bullets: [
            'Federal Pacific and Zinsco panel replacements',
            'Two-prong to three-prong outlet upgrades with proper grounding',
            'Tamper-resistant receptacles required by NEC 406.12',
            'Smoke and CO detector placement per NFPA 72',
          ],
        },
      ],
      safetyNote:
        'Never ignore flickering lights, warm outlets, or a burning smell near your panel. These are signs of a serious electrical hazard. Turn off the affected breaker and call a licensed electrician immediately.',
    },
    faqs: [
      {
        question: 'How much does a residential electrical panel upgrade cost in Sarasota?',
        answer:
          'A standard 200-amp panel upgrade in Sarasota typically ranges from $2,500 to $4,500 depending on the condition of your existing wiring, meter base requirements from FPL, and whether your service entrance cable needs replacement. Majors Electrical provides a detailed written estimate after an on-site evaluation so there are no surprises.',
      },
      {
        question: 'Do I need a permit for electrical work in Sarasota County?',
        answer:
          'Yes. Florida Statute 553.79 requires permits for most electrical work beyond simple device replacements. Sarasota County Building Services issues permits for panel upgrades, new circuits, rewiring, and EV charger installations. Majors Electrical handles the entire permitting process on your behalf, including scheduling the required inspections.',
      },
      {
        question: 'How do I know if my home\'s wiring is outdated or dangerous?',
        answer:
          'Warning signs include frequently tripped breakers, discolored or warm outlet covers, two-prong ungrounded outlets, a fuse box instead of a breaker panel, and any visible cloth-covered wiring in the attic. Homes built before 1975 are especially likely to have aluminum branch wiring, which requires special connectors or replacement to prevent overheating at connections.',
      },
      {
        question: 'Can Majors Electrical work on older historic homes in Sarasota?',
        answer:
          'Absolutely. We regularly work on homes in historic neighborhoods like Laurel Park, Burns Court, and Indian Beach-Sapphire Shores. We take care to preserve architectural character while bringing the electrical system up to current NEC standards, using methods that minimize damage to original plaster walls and woodwork.',
      },
      {
        question: 'What residential services does Majors Electrical offer for hurricane preparedness?',
        answer:
          'We install whole-home standby generators with automatic transfer switches, whole-house surge protection, battery backup systems, and hurricane-rated exterior fixtures. We also perform pre-storm inspections to verify your panel, grounding, and outdoor connections can withstand severe weather.',
      },
    ],
    relatedServices: ['panel-upgrades', 'whole-home-rewire', 'maintenance', 'surge-protection'],
    galleryImages: [
      { src: '/gallery/residential-panel-upgrade-sarasota.webp', alt: 'Completed 200-amp residential panel upgrade in a Sarasota home', caption: '200A panel upgrade with whole-home surge protection' },
      { src: '/gallery/residential-wiring-sarasota.webp', alt: 'New residential wiring installation in Sarasota attic', caption: 'Attic wiring run with properly supported NM-B cable' },
      { src: '/gallery/residential-outlet-installation.webp', alt: 'Tamper-resistant GFCI outlet installed in a Sarasota kitchen', caption: 'GFCI protection in kitchen per NEC 210.8(A)' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical service van parked at a residential jobsite in Sarasota', caption: 'Fully stocked service vehicles for single-visit repairs' },
      { src: '/gallery/residential-ceiling-fan-install.webp', alt: 'Electrician installing a ceiling fan in a Sarasota living room', caption: 'Ceiling fan installation with fan-rated junction box' },
    ],
  },

  'commercial': {
    content: {
      intro:
        'Majors Electrical delivers reliable commercial electrical services to businesses across Sarasota, Lakewood Ranch, and the Tampa Bay corridor. From tenant build-outs and LED retrofits to three-phase power distribution and emergency lighting, our commercial team understands that downtime costs money—and we plan every project to minimize disruption to your operations.',
      sections: [
        {
          heading: 'Commercial Electrical Expertise on the Gulf Coast',
          body:
            'Commercial facilities in Southwest Florida must contend with high cooling loads, corrosive coastal air, and stringent fire-alarm tie-in requirements. Our electricians hold master-level licenses and are experienced with the specific permitting processes in Sarasota County, Manatee County, and the City of Sarasota. We coordinate closely with general contractors, fire marshals, and utility providers to keep your project on schedule.',
          bullets: [
            'Three-phase power distribution and transformer coordination',
            'Emergency and exit lighting per NEC Article 700 and NFPA 101',
            'ADA-compliant outlet and switch heights',
            'Fire-alarm circuit rough-in and low-voltage coordination',
            'FPL commercial service upgrades and demand metering',
          ],
        },
        {
          heading: 'Industries We Serve',
          body:
            'Our commercial portfolio spans medical offices, restaurants, retail storefronts, warehouses, and multi-tenant office buildings. Each industry has specific code requirements—restaurants need dedicated circuits for commercial kitchen equipment per NEC 210.23, while medical offices require isolated-ground receptacles and emergency power per NEC 517. We tailor our approach to your industry\'s unique needs.',
          bullets: [
            'Restaurant and commercial kitchen electrical',
            'Medical and dental office power and data',
            'Retail storefront lighting and signage circuits',
            'Warehouse high-bay LED lighting and 480V distribution',
          ],
        },
        {
          heading: 'Minimizing Business Disruption',
          body:
            'We offer after-hours and weekend scheduling for projects that cannot interrupt your business operations. Our project managers create phased work plans so critical systems stay energized while upgrades happen in stages. For emergency repairs, our 24/7 response team can typically arrive on-site within 60 minutes anywhere in the Sarasota-Bradenton area.',
          bullets: [
            'After-hours and weekend work available',
            'Phased project plans to maintain operations',
            'Dedicated project manager for every commercial job',
            'Rapid 24/7 emergency response for business-critical failures',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Does Majors Electrical handle commercial tenant build-outs in Sarasota?',
        answer:
          'Yes. We work directly with landlords, tenants, and general contractors on commercial build-outs throughout Sarasota and Manatee counties. Our scope typically includes power distribution, lighting layout, data cabling, and fire-alarm circuit coordination. We handle all permitting and inspections to ensure the space passes final occupancy review.',
      },
      {
        question: 'Can you upgrade our commercial building to three-phase power?',
        answer:
          'We coordinate three-phase service upgrades with FPL, including transformer sizing, meter base installation, and main distribution panel setup. The timeline depends on FPL\'s engineering review, but we manage the entire process from application through final inspection. A typical commercial three-phase upgrade in our area takes four to eight weeks from application to energization.',
      },
      {
        question: 'What is the ROI on a commercial LED retrofit?',
        answer:
          'Most commercial LED retrofits pay for themselves within 18 to 36 months through reduced energy consumption and lower maintenance costs. A typical warehouse switching from 400W metal halide high-bays to 150W LED equivalents sees a 60% reduction in lighting energy costs. We provide a detailed ROI analysis with every proposal, and we help you apply for any available FPL rebates.',
      },
      {
        question: 'Do you provide commercial electrical maintenance contracts?',
        answer:
          'Yes. Our preventive maintenance programs include quarterly inspections, thermal imaging of panels and connections, emergency and exit light testing per NFPA 101, and priority scheduling for any repairs. A maintenance contract reduces the risk of unexpected failures and extends the life of your electrical infrastructure.',
      },
    ],
    relatedServices: ['office-build-outs', 'led-retrofits', 'dedicated-circuits', 'parking-lot-lights'],
    galleryImages: [
      { src: '/gallery/commercial-panel-installation.webp', alt: 'Three-phase commercial electrical panel installed in a Sarasota office building', caption: '400A three-phase distribution panel installation' },
      { src: '/gallery/commercial-led-retrofit.webp', alt: 'LED high-bay lights installed in a Sarasota warehouse', caption: 'LED high-bay retrofit reducing energy costs by 60%' },
      { src: '/gallery/commercial-office-wiring.webp', alt: 'Power and data cabling during a commercial build-out in Lakewood Ranch', caption: 'Office build-out with integrated power and data' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical service van at a commercial project site', caption: 'On-site at a Sarasota commercial project' },
      { src: '/gallery/commercial-emergency-lighting.webp', alt: 'Emergency exit lighting installation in a Sarasota retail space', caption: 'NEC Article 700-compliant emergency lighting' },
    ],
  },

  'maintenance': {
    content: {
      intro:
        'Proactive electrical maintenance prevents costly emergencies, extends equipment life, and keeps your Sarasota home or business running safely. Majors Electrical offers scheduled maintenance programs tailored to residential and commercial clients across the Gulf Coast, combining visual inspections, thermal imaging, and functional testing to catch problems before they become hazards.',
      sections: [
        {
          heading: 'Why Preventive Electrical Maintenance Matters in Florida',
          body:
            'Florida\'s heat, humidity, and lightning activity create conditions that accelerate electrical wear. Connections loosen from thermal cycling, moisture corrodes terminals, and surge damage accumulates over time. NFPA 70B recommends scheduled maintenance for all electrical systems, and insurance companies increasingly require documented inspections for policy renewals. Regular maintenance catches these issues early, saving you from emergency repair costs and potential fire hazards.',
          bullets: [
            'Thermal imaging detects hot spots in panels and connections before failure',
            'Torque verification on breaker lugs prevents loose-connection fires',
            'GFCI and AFCI functional testing per manufacturer recommendations',
            'Grounding system integrity checks critical in Florida\'s lightning-prone climate',
            'Documentation for insurance compliance and property sales',
          ],
        },
        {
          heading: 'Our Maintenance Programs',
          body:
            'We offer annual residential inspections and quarterly commercial programs. Each visit includes a detailed written report with photographs documenting the condition of your electrical system. For commercial clients, we test emergency and exit lighting per NFPA 101 and verify generator transfer switch operation. All findings are prioritized by severity so you can plan and budget repairs effectively.',
          bullets: [
            'Annual residential electrical health check',
            'Quarterly commercial inspection and testing programs',
            'Emergency and exit light functional testing',
            'Generator load-bank testing and transfer switch verification',
            'Prioritized findings report with cost estimates for repairs',
          ],
        },
      ],
      safetyNote:
        'If you hear buzzing from your electrical panel, notice a burning smell, or see scorch marks around outlets, do not delay—these are signs of an imminent failure. Turn off the main breaker and call us for an emergency inspection.',
    },
    faqs: [
      {
        question: 'How often should I have my home\'s electrical system inspected in Florida?',
        answer:
          'We recommend an annual electrical inspection for all homes, and more frequently for homes older than 30 years or those with known issues like aluminum wiring or Federal Pacific panels. Florida\'s extreme weather puts additional stress on electrical systems, making regular inspections especially important in our region.',
      },
      {
        question: 'What does a Majors Electrical maintenance visit include?',
        answer:
          'A standard maintenance visit includes a panel inspection with thermal imaging, breaker torque verification, GFCI/AFCI functional testing, grounding system check, and a visual inspection of accessible wiring, outlets, and fixtures. You receive a written report with photos and prioritized recommendations within 48 hours.',
      },
      {
        question: 'Does electrical maintenance help with homeowners insurance in Florida?',
        answer:
          'Yes. Many Florida insurers require a four-point inspection that includes the electrical system, especially for homes older than 25 years. Our maintenance reports document the condition of your panel, wiring, and safety devices in a format that insurance companies accept. Regular maintenance can also help you qualify for lower premiums.',
      },
      {
        question: 'Can you perform maintenance on commercial generator systems?',
        answer:
          'Absolutely. We service Generac, Kohler, and Cummins standby generators, including oil and filter changes, battery testing, load-bank testing, and automatic transfer switch verification. NFPA 110 requires monthly and annual testing for emergency power systems, and our maintenance contracts keep you in compliance.',
      },
    ],
    relatedServices: ['safety-inspections', 'panel-upgrades', 'generators', 'surge-protection'],
    galleryImages: [
      { src: '/gallery/maintenance-thermal-imaging.webp', alt: 'Thermal imaging scan of an electrical panel during a maintenance inspection in Sarasota', caption: 'Infrared scan identifies hot connections before failure' },
      { src: '/gallery/maintenance-panel-inspection.webp', alt: 'Electrician performing a detailed panel inspection in a Sarasota home', caption: 'Annual panel inspection with torque verification' },
      { src: '/gallery/maintenance-gfci-testing.webp', alt: 'GFCI outlet testing during a residential maintenance visit', caption: 'Functional testing of all GFCI-protected circuits' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van arriving for a scheduled maintenance appointment', caption: 'Prompt, scheduled maintenance visits across Sarasota County' },
    ],
  },

  'new-construction': {
    content: {
      intro:
        'Building a new home in Sarasota, Lakewood Ranch, or anywhere on Florida\'s Gulf Coast requires an electrical contractor who understands both the Florida Building Code and the real-world demands of modern living. Majors Electrical partners with custom home builders and homeowners to design and install complete residential electrical systems—from temporary power poles through final trim-out—ensuring your new home is safe, energy-efficient, and future-ready.',
      sections: [
        {
          heading: 'Designing Your New Home\'s Electrical System',
          body:
            'We begin every new construction project with a comprehensive electrical design that accounts for your family\'s lifestyle, appliance choices, and future needs. Our load calculations follow NEC Article 220 to properly size your service entrance—most new Sarasota homes require a minimum 200-amp service, and many larger custom homes benefit from 320-amp or 400-amp services to accommodate pools, EV chargers, and home automation systems.',
          bullets: [
            'NEC Article 220 load calculations for proper service sizing',
            'Smart home pre-wiring for lighting control, audio, and security',
            'Dedicated circuits for kitchen appliances per NEC 210.52(B)',
            'EV charger-ready garage wiring with 240V/50A capacity',
            'Structured wiring for Cat6 data, coax, and speaker cables',
          ],
        },
        {
          heading: 'Florida-Specific Construction Requirements',
          body:
            'New construction in Florida must meet the Florida Building Code, which adopts the NEC with state-specific amendments. In wind-borne debris regions like Sarasota County, exterior electrical equipment must be rated for the applicable wind speed—typically 150 mph in our area. We also install ground rods and bonding systems designed for Florida\'s sandy, high-resistivity soils, often requiring supplemental grounding electrodes per NEC 250.53.',
          bullets: [
            'Wind-rated meter bases and exterior disconnects for hurricane zones',
            'Enhanced grounding systems for Florida\'s sandy soil conditions',
            'AFCI protection on all habitable room circuits per NEC 210.12',
            'Whole-home surge protection—essential in Florida\'s lightning corridor',
          ],
        },
        {
          heading: 'From Rough-In to Final Trim',
          body:
            'Our construction process follows a structured three-phase approach: underground and slab work before the pour, rough-in wiring after framing, and final device and fixture installation after drywall and paint. We coordinate closely with your builder, plumber, and HVAC contractor to avoid conflicts and keep the construction timeline on track. Every phase is inspected by the local building department before proceeding.',
          bullets: [
            'Underground conduit and slab stub-ups before concrete pour',
            'Rough-in wiring coordinated with framing and insulation schedules',
            'Final trim including devices, fixtures, and panel labeling',
            'Permit management and inspection coordination throughout',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What size electrical panel do I need for a new home in Sarasota?',
        answer:
          'Most new homes in Sarasota require a 200-amp service, which is the current standard for single-family residential construction. However, if your home will include a pool with an electric heater, EV charger, induction range, or extensive HVAC equipment, we often recommend a 320-amp or 400-amp service to ensure adequate capacity without the need for a future upgrade.',
      },
      {
        question: 'Should I pre-wire for smart home technology during construction?',
        answer:
          'Absolutely. Pre-wiring during construction costs a fraction of retrofitting later because the walls are open. We typically recommend running Cat6 data cables to every room, speaker wire for audio zones, and dedicated neutrals at all switch locations for smart switch compatibility. This infrastructure gives you flexibility to adopt smart home technology at your own pace after move-in.',
      },
      {
        question: 'How long does the electrical phase of new construction take?',
        answer:
          'For a typical 2,000–3,500 square foot Sarasota home, the rough-in phase takes three to five working days, and the final trim takes two to three days. The timeline can extend for larger homes or those with complex automation systems. We schedule around other trades to prevent delays and coordinate all required inspections.',
      },
      {
        question: 'Does Majors Electrical install temporary power poles for construction sites?',
        answer:
          'Yes. We install temporary power poles (construction poles) and coordinate with FPL to energize them before construction begins. The temporary pole provides 200-amp service for construction equipment and is later removed when the permanent service is connected to the home.',
      },
      {
        question: 'What is the cost of electrical work for new construction in Sarasota?',
        answer:
          'Electrical costs for new construction typically run $8,000 to $20,000+ depending on the home\'s size, complexity, and feature set. A straightforward 2,000 sq ft home will be on the lower end, while a 4,000+ sq ft custom home with whole-home automation, pool equipment wiring, and a generator transfer switch will be on the higher end. We provide detailed proposals based on your builder\'s plans.',
      },
    ],
    relatedServices: ['residential', 'home-additions', 'solar-systems', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/new-construction-rough-in.webp', alt: 'Electrical rough-in wiring in a new construction home in Sarasota', caption: 'Rough-in phase with organized home runs to the panel' },
      { src: '/gallery/new-construction-panel.webp', alt: 'New 200-amp electrical panel installed in a Sarasota new build', caption: 'New 200A panel with labeled circuits and surge protection' },
      { src: '/gallery/new-construction-slab-work.webp', alt: 'Underground electrical conduit before concrete pour in Sarasota', caption: 'Underground conduit and stub-ups before slab pour' },
      { src: '/gallery/new-construction-smart-wiring.webp', alt: 'Structured wiring installation for a smart home in Lakewood Ranch', caption: 'Structured wiring for data, audio, and security' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a new construction site in Sarasota', caption: 'On-site at a custom new build in Sarasota' },
    ],
  },

  'home-remodels': {
    content: {
      intro:
        'Kitchen renovations, bathroom remodels, and open-concept conversions are among the most popular home improvement projects in Sarasota—and nearly all of them require significant electrical modifications. Majors Electrical specializes in remodel electrical work, handling circuit relocation, load upgrades, and new lighting designs that bring your remodeled space to life while meeting current NEC requirements.',
      sections: [
        {
          heading: 'Electrical Requirements for Kitchen Remodels',
          body:
            'Modern kitchens are the most electrically demanding rooms in the home. NEC 210.52(B) requires a minimum of two 20-amp small-appliance branch circuits for countertop receptacles, and every point along the countertop must be within 24 inches of an outlet. Island countertops need their own receptacle, and dishwashers, disposals, and microwaves each require dedicated circuits. Majors Electrical designs kitchen electrical layouts that meet these requirements while keeping outlets positioned for maximum convenience.',
          bullets: [
            'Two dedicated 20A small-appliance circuits per NEC 210.52(B)',
            'GFCI protection for all countertop receptacles per NEC 210.8(A)',
            'Dedicated circuits for dishwasher, disposal, and microwave',
            'Under-cabinet LED task lighting with dimmer control',
            'Pendant and recessed lighting layout for the new design',
          ],
        },
        {
          heading: 'Updating Electrical for Open-Concept Layouts',
          body:
            'Removing walls during a remodel often means relocating circuits, switches, and junction boxes that were inside or attached to those walls. Majors Electrical carefully reroutes wiring through the attic or crawlspace, maintains proper junction box accessibility per NEC 314.29, and ensures that the merged space has adequate lighting and receptacle coverage for the new floor plan.',
          bullets: [
            'Circuit relocation when walls are removed',
            'Proper junction box accessibility maintained per NEC 314.29',
            'New lighting plans for the open, combined space',
            'Additional receptacle outlets to meet spacing requirements',
          ],
        },
        {
          heading: 'Permitting and Inspection for Sarasota Remodels',
          body:
            'Any remodel that involves new circuits, relocated wiring, or panel modifications requires an electrical permit in Sarasota County. We handle the permit application, coordinate with the building department, and schedule inspections at the appropriate construction phase. Our work consistently passes inspection on the first visit, keeping your remodel on schedule.',
          bullets: [
            'Electrical permit acquisition and management',
            'Coordination with general contractors and other trades',
            'First-pass inspection success rate',
            'As-built documentation for your records',
          ],
        },
      ],
      safetyNote:
        'During a remodel, never assume a wire is dead just because the switch is off. Multiple circuits can pass through the same wall cavity. Always have a licensed electrician verify circuits are de-energized before any demolition work.',
    },
    faqs: [
      {
        question: 'Do I need to upgrade my electrical panel for a kitchen remodel in Sarasota?',
        answer:
          'Not always, but it is common. A kitchen remodel typically adds four to six new dedicated circuits. If your existing panel is already near capacity—especially if it is a 100-amp or 150-amp panel—an upgrade to 200-amp service is recommended. We perform a load calculation to determine whether your existing panel can handle the additional circuits.',
      },
      {
        question: 'How many outlets do I need on a kitchen island?',
        answer:
          'NEC 210.52(B)(2) requires at least one receptacle on a kitchen island with a long dimension of 24 inches or greater, and at least two receptacles on islands with a long dimension of 36 inches or greater. Pop-up outlets are a popular option that keeps the island surface clean when receptacles are not in use.',
      },
      {
        question: 'Can you add recessed lighting during a bathroom remodel?',
        answer:
          'Yes. We install IC-rated (insulation contact) recessed lights in bathrooms and ensure they are positioned per code—wet-location-rated fixtures are required over tubs and showers per NEC 410.10(D). We also add vanity sconce circuits and exhaust fan wiring as part of a complete bathroom electrical update.',
      },
      {
        question: 'What happens to the wiring when a wall is removed during a remodel?',
        answer:
          'Any circuits passing through the wall must be rerouted to maintain continuous, code-compliant wiring. This typically involves running new cable through the attic or crawlspace and installing accessible junction boxes where splices are needed. Majors Electrical ensures all rerouted wiring is properly supported, protected, and accessible for future maintenance.',
      },
    ],
    relatedServices: ['residential', 'interior-lighting', 'appliance-circuits', 'panel-upgrades'],
    galleryImages: [
      { src: '/gallery/remodel-kitchen-electrical.webp', alt: 'Kitchen remodel electrical rough-in with new circuits in a Sarasota home', caption: 'Kitchen electrical rough-in with dedicated appliance circuits' },
      { src: '/gallery/remodel-recessed-lighting.webp', alt: 'Recessed lighting installed during a Sarasota bathroom remodel', caption: 'IC-rated recessed lighting in a remodeled bathroom' },
      { src: '/gallery/remodel-open-concept-wiring.webp', alt: 'Circuit relocation during an open-concept remodel in Sarasota', caption: 'Rerouting circuits for an open-concept conversion' },
      { src: '/gallery/remodel-under-cabinet-lights.webp', alt: 'Under-cabinet LED lighting in a remodeled Sarasota kitchen', caption: 'Hardwired LED under-cabinet lighting with dimmer' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a home remodel project', caption: 'Remodel electrical services across Sarasota County' },
    ],
  },

  'home-additions': {
    content: {
      intro:
        'Expanding your Sarasota home with a new bedroom, guest suite, garage, or outdoor living area requires careful electrical planning to ensure the addition integrates seamlessly with your existing system. Majors Electrical performs detailed load calculations and designs sub-panel installations that provide ample power for the new space while keeping your main panel within its rated capacity.',
      sections: [
        {
          heading: 'Load Calculations and Sub-Panel Sizing',
          body:
            'Every home addition must begin with an NEC Article 220 load calculation to determine whether your existing service can support the additional square footage and appliances. In many cases, a sub-panel fed from the main panel is the most efficient approach—it keeps the new space\'s circuits organized and makes future troubleshooting easier. If your main service is undersized, we coordinate a service upgrade with FPL before the addition work begins.',
          bullets: [
            'NEC Article 220 load calculations to verify service capacity',
            'Sub-panel installation with dedicated feeder from main panel',
            'Service upgrade coordination with FPL when necessary',
            'Proper wire sizing and conduit for the feeder run',
          ],
        },
        {
          heading: 'Matching Existing Electrical Infrastructure',
          body:
            'The goal is for the addition\'s electrical system to look and function as if it was part of the original home. We match existing device styles (Decora or toggle), wire the same way the home was originally wired, and integrate lighting controls so the addition feels seamless. For additions built on a slab, we install underground conduit before the pour; for raised-floor additions, we run wiring through the floor system.',
          bullets: [
            'Device style matching for visual consistency',
            'Underground conduit for slab-on-grade additions',
            'Integration with existing lighting and switch systems',
            'Smoke and CO detector interconnection with existing devices',
          ],
        },
        {
          heading: 'Common Home Addition Types in Sarasota',
          body:
            'Popular additions in our area include lanai-to-living-room conversions, detached guest suites (ADUs), garage conversions, and second-story additions. Each has unique electrical requirements—a detached structure needs its own sub-panel and underground feeder, while a second-story addition requires careful routing through the existing home\'s wall cavities and attic.',
          bullets: [
            'Lanai and pool cage enclosure conversions',
            'Detached guest suites and accessory dwelling units (ADUs)',
            'Garage conversions with HVAC and lighting',
            'Second-story additions with attic and wall routing',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Will my home addition require a panel upgrade?',
        answer:
          'It depends on your existing panel\'s capacity and the electrical load of the addition. If your home currently has 100-amp service, an addition with air conditioning, a kitchen, or heavy appliance loads will almost certainly require an upgrade to 200-amp service. We perform a load calculation during the design phase and advise you before any work begins.',
      },
      {
        question: 'Do I need a separate electrical panel for a home addition?',
        answer:
          'A sub-panel is the standard approach for home additions and is required when the addition is a detached structure. Even for attached additions, a sub-panel keeps the new circuits organized and reduces the length of individual circuit runs. Sub-panels are typically sized at 60 to 125 amps depending on the addition\'s needs.',
      },
      {
        question: 'Can I add an accessory dwelling unit (ADU) to my Sarasota property?',
        answer:
          'Sarasota County has updated its zoning to allow ADUs on many residential properties. The electrical requirements include a separate sub-panel, underground feeder conduit, and compliance with all NEC requirements for a dwelling unit, including kitchen circuits, bathroom GFCI protection, and smoke detector interconnection. We handle the complete electrical scope for ADU construction.',
      },
      {
        question: 'How is electrical run to a detached addition or outbuilding?',
        answer:
          'We install underground feeder cable (UF-B) or run individual conductors through schedule 40 PVC conduit buried at least 18 inches deep per NEC 300.5. The feeder terminates at a sub-panel in the detached structure, which provides its own overcurrent protection and grounding electrode system.',
      },
    ],
    relatedServices: ['residential', 'new-construction', 'panel-upgrades', 'interior-lighting'],
    galleryImages: [
      { src: '/gallery/addition-sub-panel.webp', alt: 'Sub-panel installation for a home addition in Sarasota', caption: '100A sub-panel for a new guest suite addition' },
      { src: '/gallery/addition-underground-conduit.webp', alt: 'Underground conduit run to a detached home addition in Sarasota', caption: 'Underground PVC conduit for a detached ADU feeder' },
      { src: '/gallery/addition-rough-in-wiring.webp', alt: 'Electrical rough-in for a Sarasota home addition', caption: 'Rough-in wiring in a second-story addition' },
      { src: '/gallery/addition-finished-room.webp', alt: 'Completed electrical work in a finished home addition in Sarasota', caption: 'Finished addition with integrated lighting and outlets' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a home addition project', caption: 'Home addition electrical services throughout the Gulf Coast' },
    ],
  },

  'interior-lighting': {
    content: {
      intro:
        'Interior lighting transforms the way you experience your Sarasota home—enhancing ambiance, improving functionality, and increasing property value. Majors Electrical designs and installs complete interior lighting systems, from recessed LED layouts and pendant installations to whole-home dimming controls and smart lighting automation. We combine technical expertise with design sensibility to create lighting that looks as good as it performs.',
      sections: [
        {
          heading: 'Lighting Design for Florida Living',
          body:
            'Sarasota homes are known for their open floor plans, high ceilings, and abundant natural light. Our lighting designs complement these architectural features by layering ambient, task, and accent lighting to create balanced illumination throughout the day and into the evening. We specify LED fixtures with appropriate color temperatures—warmer tones (2700K–3000K) for living areas and cooler tones (3500K–4000K) for kitchens and workspaces.',
          bullets: [
            'Layered lighting: ambient, task, and accent for complete coverage',
            'Color temperature selection matched to room function',
            'High-ceiling solutions including cable-hung pendants and chandeliers',
            'Daylight integration to reduce energy consumption',
            'Dimming controls for adjustable ambiance',
          ],
        },
        {
          heading: 'LED Technology and Energy Savings',
          body:
            'LED fixtures consume 75% less energy than incandescent bulbs and last 25 times longer, making them ideal for Florida homes where air conditioning costs are already significant—every watt of lighting also produces heat that your AC must remove. Majors Electrical installs IC-rated LED recessed lights, LED-compatible dimmers, and whole-home LED retrofits that dramatically reduce your electrical consumption while improving light quality.',
          bullets: [
            'LED recessed lights (wafer-style for minimal ceiling penetration)',
            'LED-compatible dimmer switches to prevent flicker',
            'Color-tunable fixtures for circadian rhythm support',
            'Reduced heat output lowers air conditioning costs',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How many recessed lights do I need in a room?',
        answer:
          'A common guideline is to space recessed lights four to six feet apart, with the first row two to three feet from the wall. For a typical 12x14 foot Sarasota living room with eight-foot ceilings, we usually recommend six to eight 6-inch recessed LED lights. We create a photometric layout based on your room dimensions and desired light levels to ensure even, shadow-free coverage.',
      },
      {
        question: 'What is the best color temperature for home lighting in Florida?',
        answer:
          'For most living spaces, 2700K (warm white) creates a comfortable, inviting atmosphere similar to traditional incandescent bulbs. Kitchens, bathrooms, and home offices benefit from 3000K to 3500K for a slightly cooler, more energizing light. We often install color-tunable fixtures in bedrooms so you can shift from cool daylight tones in the morning to warm tones in the evening.',
      },
      {
        question: 'Can you install pendant lights where there is no existing ceiling box?',
        answer:
          'Yes. We install new ceiling boxes rated for the fixture weight, run the circuit from the nearest power source, and mount the pendant wherever you want it. In homes with attic access above the installation point, this is straightforward. For concrete ceilings or areas without attic access, we use surface-mount conduit or decorative cable systems.',
      },
      {
        question: 'Do LED recessed lights work with dimmer switches?',
        answer:
          'Yes, but they require LED-compatible dimmers. Standard incandescent dimmers can cause LEDs to flicker, buzz, or have a limited dimming range. We install dimmers specifically designed for LED loads, such as the Lutron Diva CL or Caseta series, which provide smooth dimming from 100% down to as low as 1%.',
      },
      {
        question: 'How much does it cost to install recessed lighting in a Sarasota home?',
        answer:
          'A typical recessed lighting installation costs $150 to $250 per light, including the fixture, wiring, and switch. A full-room layout with six lights and a dimmer switch typically runs $1,200 to $1,800. Costs vary based on attic access, ceiling type, and the specific fixtures selected. We provide a detailed quote after evaluating your space.',
      },
    ],
    relatedServices: ['recessed-lighting', 'under-cabinet', 'chandelier-install', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/interior-lighting-recessed-living.webp', alt: 'Recessed LED lighting installation in a Sarasota living room', caption: 'Six-inch LED recessed layout with dimmer control' },
      { src: '/gallery/interior-lighting-pendant-kitchen.webp', alt: 'Pendant lights installed over a kitchen island in a Sarasota home', caption: 'Pendant lighting over a kitchen island' },
      { src: '/gallery/interior-lighting-chandelier-foyer.webp', alt: 'Chandelier installed in a two-story foyer in Sarasota', caption: 'Statement chandelier in a two-story foyer' },
      { src: '/gallery/interior-lighting-under-cabinet.webp', alt: 'Under-cabinet LED lighting in a Sarasota kitchen', caption: 'Hardwired LED under-cabinet task lighting' },
      { src: '/gallery/interior-lighting-bathroom-vanity.webp', alt: 'Vanity lighting installation in a Sarasota bathroom remodel', caption: 'Vanity sconces flanking a bathroom mirror' },
    ],
  },

  'exterior-lighting': {
    content: {
      intro:
        'Well-designed exterior lighting enhances your Sarasota home\'s curb appeal, improves safety on walkways and driveways, and deters intruders—all while withstanding Florida\'s intense UV exposure, salt air, and driving rain. Majors Electrical installs weather-rated exterior lighting systems that look beautiful year-round and stand up to the Gulf Coast climate.',
      sections: [
        {
          heading: 'Exterior Lighting for Gulf Coast Homes',
          body:
            'Every exterior fixture we install is rated for wet locations per NEC 410.10 and constructed from corrosion-resistant materials suited to Sarasota\'s coastal environment. We use marine-grade stainless steel, powder-coated aluminum, and brass fixtures that resist salt-air degradation. All exterior wiring is run through UV-rated conduit with weatherproof junction boxes and in-use covers on receptacles per NEC 406.9(B).',
          bullets: [
            'Wet-location-rated fixtures per NEC 410.10',
            'Corrosion-resistant marine-grade and powder-coated materials',
            'In-use weatherproof receptacle covers per NEC 406.9(B)',
            'UV-rated conduit and weather-tight junction boxes',
            'Dark Sky-compliant options to reduce light pollution',
          ],
        },
        {
          heading: 'Popular Exterior Lighting Applications',
          body:
            'Sarasota homeowners frequently request soffit downlights for architectural wash lighting, coach lights flanking the front door, post lights along driveways, and patio string light circuits for outdoor entertaining. We also install motion-activated floodlights for security and photocell-controlled fixtures that turn on automatically at dusk. Every installation includes a dedicated circuit and appropriate switching or smart control.',
          bullets: [
            'Soffit downlights for clean architectural illumination',
            'Coach lights and sconces for entryways and garages',
            'Driveway and walkway post lighting',
            'Patio and outdoor kitchen lighting circuits',
            'Motion-activated floodlights and photocell controls',
          ],
        },
      ],
      safetyNote:
        'Exterior electrical work involves wet-location wiring and exposure to weather. All outdoor circuits must be GFCI-protected per NEC 210.8(A)(3). Never install indoor-rated fixtures in exterior locations—they are not sealed against moisture and can create a shock hazard.',
    },
    faqs: [
      {
        question: 'What type of exterior lighting fixtures hold up best in Sarasota\'s climate?',
        answer:
          'Fixtures made from solid brass, marine-grade stainless steel (316 grade), or powder-coated die-cast aluminum perform best in Sarasota\'s salt-air environment. Avoid painted steel fixtures, which will rust within a year or two near the coast. We specify fixtures with sealed gaskets and stainless hardware to ensure longevity.',
      },
      {
        question: 'Do exterior outlets need to be on a GFCI-protected circuit?',
        answer:
          'Yes. NEC 210.8(A)(3) requires GFCI protection for all outdoor receptacles at dwelling units. Additionally, NEC 406.9(B) requires in-use weatherproof covers on outdoor receptacles—these covers protect the plug and cord while they are connected, not just when the outlet is empty. We install both as standard practice.',
      },
      {
        question: 'Can you install lights on my lanai or screened porch?',
        answer:
          'Yes. Screened porches and lanais in Florida are generally classified as damp locations, requiring damp-rated fixtures. If the area is subject to direct rain exposure, wet-rated fixtures are required instead. We assess your specific space and select appropriately rated fixtures. Ceiling fans with light kits are also a popular lanai addition.',
      },
      {
        question: 'How do I control exterior lights automatically?',
        answer:
          'We offer several options: photocell sensors that turn lights on at dusk and off at dawn, astronomical timers that adjust automatically with seasonal changes, motion sensors for security lighting, and smart switches that you can control and schedule from your phone. Many homeowners combine photocell-controlled fixtures with motion-activated floodlights for comprehensive exterior lighting automation.',
      },
    ],
    relatedServices: ['landscape-lighting', 'security-lighting', 'outdoor-security', 'automatic-timer-lighting'],
    galleryImages: [
      { src: '/gallery/exterior-lighting-soffit.webp', alt: 'Soffit downlights illuminating the exterior of a Sarasota home', caption: 'LED soffit downlights for clean architectural wash lighting' },
      { src: '/gallery/exterior-lighting-coach-lights.webp', alt: 'Coach lights installed at a Sarasota home entry', caption: 'Brass coach lights flanking the front entry' },
      { src: '/gallery/exterior-lighting-patio.webp', alt: 'Outdoor patio lighting at a Sarasota home', caption: 'Patio lighting circuit for outdoor entertaining' },
      { src: '/gallery/exterior-lighting-floodlight.webp', alt: 'Motion-activated LED floodlight installed on a Sarasota home', caption: 'Motion-activated LED floodlight for security' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an exterior lighting installation', caption: 'Exterior lighting installation in Sarasota' },
    ],
  },

  'landscape-lighting': {
    content: {
      intro:
        'Professional landscape lighting transforms your Sarasota property after dark, highlighting architectural features, illuminating pathways, and creating a stunning outdoor atmosphere. Majors Electrical designs and installs low-voltage LED landscape lighting systems that are energy-efficient, safe around pools and landscaping, and built to withstand Florida\'s heat, rain, and salt air.',
      sections: [
        {
          heading: 'Low-Voltage Landscape Lighting Design',
          body:
            'Low-voltage (12V) landscape lighting is the standard for residential installations because it is safe, energy-efficient, and does not require the same burial depth as line-voltage wiring. Our designs use a combination of path lights, uplights, wash lights, and accent fixtures to create depth and visual interest. We size transformers based on total wattage and cable run lengths to ensure consistent brightness across all fixtures, accounting for voltage drop over distance.',
          bullets: [
            'Custom lighting plans designed for your specific landscape',
            'Low-voltage (12V) systems safe around pools, gardens, and play areas',
            'LED fixtures with 50,000+ hour lifespan and minimal heat output',
            'Transformer sizing with voltage-drop calculations for consistent brightness',
            'Waterproof wire connections rated for direct burial',
          ],
        },
        {
          heading: 'Landscape Lighting Techniques',
          body:
            'We employ professional techniques including uplighting to dramatize palm trees and oaks, moonlighting from high canopy positions for natural-looking illumination, grazing to highlight textured walls or stone, and silhouetting to create dramatic backlit profiles against garden walls. Path lighting provides both safety and ambiance along walkways and driveways. Each technique is layered to create a cohesive, inviting outdoor environment.',
          bullets: [
            'Uplighting for palm trees, oaks, and architectural features',
            'Moonlighting from elevated positions for natural, dappled light',
            'Grazing and wall washing for textured surfaces',
            'Path lighting for safe navigation along walkways and driveways',
            'Silhouetting and backlighting for dramatic focal points',
          ],
        },
        {
          heading: 'Florida-Rated Materials and Installation',
          body:
            'Every landscape lighting component we install is selected for Florida conditions. We use brass or composite fixtures that won\'t corrode in salt air, direct-burial-rated cable connections with waterproof gel-filled connectors, and transformers mounted in ventilated enclosures protected from flooding. In Sarasota\'s sandy soil, we secure fixtures with concrete-set stakes where necessary to prevent shifting during heavy rains.',
          bullets: [
            'Brass and composite fixtures resistant to salt-air corrosion',
            'Gel-filled waterproof wire connectors for direct burial',
            'Transformers mounted above flood level with proper ventilation',
            'Secure fixture mounting in Florida\'s sandy soil conditions',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How much does landscape lighting cost in Sarasota?',
        answer:
          'A professional landscape lighting system for a typical Sarasota home ranges from $3,000 to $8,000, depending on the number of fixtures, the complexity of the design, and the length of cable runs. A basic pathway and entry lighting package with eight to ten fixtures starts around $3,000, while a comprehensive design with 20+ fixtures covering the entire property can exceed $8,000. We provide detailed proposals after an on-site consultation.',
      },
      {
        question: 'Is low-voltage landscape lighting safe around my pool?',
        answer:
          'Yes. Low-voltage (12V) systems are inherently safer around water than line-voltage systems because the voltage is too low to cause dangerous shock. However, NEC Article 680 still requires proper bonding and specific clearances for any electrical equipment near pools and bodies of water. We ensure all installations comply with these requirements.',
      },
      {
        question: 'How are landscape lights controlled and scheduled?',
        answer:
          'Most systems use a transformer with a built-in timer or photocell. We typically install astronomical timers that automatically adjust on/off times based on sunrise and sunset throughout the year—no manual adjustment needed. For smart home integration, we can connect landscape lighting transformers to Wi-Fi-enabled controllers that you manage from your phone.',
      },
      {
        question: 'Will landscape lighting increase my electric bill significantly?',
        answer:
          'LED landscape lighting is very energy-efficient. A typical system with 15 LED fixtures consuming a total of 75 watts costs approximately $3 to $5 per month to operate for six hours nightly. That is comparable to running a single 75-watt incandescent bulb, making LED landscape lighting one of the most cost-effective ways to enhance your property.',
      },
    ],
    relatedServices: ['exterior-lighting', 'automatic-timer-lighting', 'outdoor-security', 'security-lighting'],
    galleryImages: [
      { src: '/gallery/landscape-lighting-pathway.webp', alt: 'Low-voltage path lighting along a walkway at a Sarasota home', caption: 'Brass path lights illuminating a front walkway' },
      { src: '/gallery/landscape-lighting-palm-uplight.webp', alt: 'Palm tree uplighting in a Sarasota landscape lighting design', caption: 'LED uplights highlighting Royal Palms' },
      { src: '/gallery/landscape-lighting-architectural.webp', alt: 'Architectural wash lighting on a Sarasota home exterior', caption: 'Wall wash lighting on a textured stone facade' },
      { src: '/gallery/landscape-lighting-garden.webp', alt: 'Garden accent lighting in a Sarasota residential landscape', caption: 'Accent lighting through garden beds and plantings' },
      { src: '/gallery/landscape-lighting-transformer.webp', alt: 'Low-voltage transformer installation for landscape lighting in Sarasota', caption: 'Professional transformer installation with timer control' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a landscape lighting project', caption: 'Landscape lighting design and installation in Sarasota' },
    ],
  },

  'parking-lot-lights': {
    content: {
      intro:
        'Well-maintained parking lot lighting is essential for customer safety, employee security, and liability protection at commercial properties across Sarasota, Bradenton, and the greater Tampa Bay area. Majors Electrical services, repairs, and upgrades parking lot pole lights—from simple bulb replacements and ballast repairs to complete LED head conversions that dramatically reduce energy costs and improve light output.',
      sections: [
        {
          heading: 'Parking Lot Lighting Maintenance and Repair',
          body:
            'Parking lot lights take a beating from Florida\'s UV exposure, salt air, driving rain, and hurricane-force winds. Common failures include burned-out lamps, failed ballasts, corroded sockets, broken photocells, and damaged pole bases. Our bucket truck and lift equipment allow us to service pole heights up to 40 feet, and we stock common replacement components to complete most repairs in a single visit.',
          bullets: [
            'Lamp replacement for HID, metal halide, and LED fixtures',
            'Ballast and driver replacement',
            'Photocell and timer troubleshooting and replacement',
            'Pole base inspection and corrosion repair',
            'Bucket truck service for poles up to 40 feet',
          ],
        },
        {
          heading: 'LED Parking Lot Light Upgrades',
          body:
            'Converting old metal halide or high-pressure sodium fixtures to LED parking lot heads reduces energy consumption by 50–70% while delivering more uniform, brighter illumination. LED fixtures also eliminate the warm-up delay of HID lamps—they reach full brightness instantly, which is critical for security. Majors Electrical provides photometric studies to ensure the LED conversion meets IES (Illuminating Engineering Society) standards for your parking lot classification.',
          bullets: [
            '50–70% energy savings over HID and metal halide fixtures',
            'Instant-on capability with no warm-up period',
            'Photometric studies to verify light levels meet IES standards',
            'Reduced maintenance with 100,000+ hour LED fixture lifespan',
            'FPL rebate assistance for qualifying LED upgrades',
          ],
        },
      ],
      safetyNote:
        'Non-functioning parking lot lights create a significant liability risk. Property owners can be held responsible for injuries that occur in poorly lit parking areas. Maintain regular lighting inspections and repair outages promptly.',
    },
    faqs: [
      {
        question: 'How much does it cost to replace a parking lot light in Sarasota?',
        answer:
          'A single lamp replacement typically costs $150 to $300 including the service call and bucket truck time. A complete LED head conversion on an existing pole runs $600 to $1,200 per fixture, depending on the wattage and whether the existing wiring and photocell need updating. For multi-fixture projects, per-unit costs decrease with volume.',
      },
      {
        question: 'How often should parking lot lights be inspected?',
        answer:
          'We recommend quarterly inspections for commercial parking lot lighting. This includes checking all lamps for operation, verifying photocell function, inspecting pole bases for corrosion, and checking electrical connections in hand holes at the base of each pole. A quarterly schedule catches failures before they become safety and liability issues.',
      },
      {
        question: 'Are there energy rebates for parking lot LED conversions in Florida?',
        answer:
          'FPL and Duke Energy both offer rebates for commercial LED lighting upgrades, including parking lot fixtures. Rebate amounts vary by fixture wattage and are subject to change, but they can offset 20–30% of the conversion cost. We handle the rebate paperwork as part of our LED upgrade proposals.',
      },
      {
        question: 'Can you add new parking lot light poles to an existing lot?',
        answer:
          'Yes. We install new concrete pole bases, set aluminum or steel poles, run underground conduit and conductors, and install LED fixtures with photocell control. New pole installations require a Sarasota County electrical permit. We also coordinate with paving contractors to minimize disruption to your parking surface.',
      },
    ],
    relatedServices: ['commercial', 'led-retrofits', 'security-lighting', 'automatic-timer-lighting'],
    galleryImages: [
      { src: '/gallery/parking-lot-led-upgrade.webp', alt: 'LED parking lot light heads installed on poles at a Sarasota commercial property', caption: 'LED head conversion on existing parking lot poles' },
      { src: '/gallery/parking-lot-pole-repair.webp', alt: 'Parking lot light pole base repair at a Sarasota business', caption: 'Pole base corrosion repair and rewiring' },
      { src: '/gallery/parking-lot-bucket-truck.webp', alt: 'Majors Electrical bucket truck servicing a parking lot light in Sarasota', caption: 'Bucket truck service for poles up to 40 feet' },
      { src: '/gallery/parking-lot-photocell.webp', alt: 'Photocell replacement on a parking lot light fixture', caption: 'Photocell replacement for automatic dusk-to-dawn operation' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical service vehicle at a commercial parking lot', caption: 'Commercial parking lot lighting service in Sarasota' },
    ],
  },

  'automatic-timer-lighting': {
    content: {
      intro:
        'Automatic lighting timers bring convenience, energy savings, and enhanced security to homes and businesses across Sarasota and the Gulf Coast. Majors Electrical installs astronomical timers, photocell sensors, and smart scheduling systems that ensure your lights operate on the exact schedule you need—adjusting automatically with seasonal changes so you never have to touch a switch.',
      sections: [
        {
          heading: 'Astronomical Timers vs. Standard Timers',
          body:
            'Standard timers require manual adjustment as daylight hours shift through the seasons. Astronomical timers contain a microprocessor pre-programmed with sunrise and sunset times for your GPS coordinates—in Sarasota, that means sunset shifts from about 5:38 PM in December to 8:28 PM in June. An astronomical timer handles this automatically, turning your lights on and off at the precise time each day without any manual intervention.',
          bullets: [
            'Automatic sunrise/sunset adjustment based on GPS coordinates',
            'No seasonal reprogramming required',
            'Multiple on/off events per day for complex schedules',
            'Battery backup to retain programming during power outages',
            'Compatible with exterior lighting, landscape lighting, and signage',
          ],
        },
        {
          heading: 'Smart Lighting Automation',
          body:
            'For homeowners who want control beyond simple timers, smart switches and smart relays offer app-based scheduling, voice control through Alexa and Google Home, and integration with home automation platforms. Majors Electrical installs Lutron Caseta, Leviton, and other smart systems that allow you to create lighting scenes, set schedules from your phone, and receive notifications when lights turn on or off—perfect for vacation home monitoring.',
          bullets: [
            'App-based scheduling and remote on/off control',
            'Voice control through Alexa, Google Home, and Siri',
            'Vacation mode and random lighting for security',
            'Energy monitoring to track lighting consumption',
            'Integration with existing smart home ecosystems',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What is the best timer for exterior lights in Sarasota?',
        answer:
          'We recommend an astronomical timer for most exterior lighting applications. The Intermatic EJ500 and Honeywell RPLS740B are reliable models that automatically adjust for Sarasota\'s sunrise and sunset times year-round. For homeowners with a smart home system, a Lutron Caseta smart switch provides the same automation plus app-based control and voice integration.',
      },
      {
        question: 'Can a timer be installed on existing outdoor lights?',
        answer:
          'Yes. In most cases, we can replace your existing switch with an in-wall astronomical timer or smart switch without any additional wiring. The timer fits in the same wall box and connects to the same wiring. If the fixture is currently controlled by a photocell only, we can add a timer in the circuit for more precise scheduling control.',
      },
      {
        question: 'Do lighting timers save energy?',
        answer:
          'Absolutely. Timers eliminate the common problem of lights being left on during daylight hours or forgotten overnight. For businesses, a timer on exterior signage and parking lot lights typically reduces lighting run-time by two to four hours per day, which can save hundreds of dollars annually on electricity costs.',
      },
      {
        question: 'Can I control holiday lighting with an automatic timer?',
        answer:
          'Yes. We install weatherproof outdoor timer outlets and smart plugs that let you schedule your holiday decorations to turn on at sunset and off at a specific time. This saves energy, protects against overheating, and means you never have to trek outside in the dark to unplug your lights.',
      },
    ],
    relatedServices: ['exterior-lighting', 'landscape-lighting', 'smart-switches', 'security-lighting'],
    galleryImages: [
      { src: '/gallery/timer-astronomical-install.webp', alt: 'Astronomical timer installation for exterior lighting in a Sarasota home', caption: 'Astronomical timer for automatic sunset/sunrise scheduling' },
      { src: '/gallery/timer-smart-switch.webp', alt: 'Smart lighting switch installation in a Sarasota home', caption: 'Lutron Caseta smart switch with app-based scheduling' },
      { src: '/gallery/timer-photocell-exterior.webp', alt: 'Photocell sensor installed on an exterior light fixture in Sarasota', caption: 'Photocell sensor for dusk-to-dawn automation' },
      { src: '/gallery/timer-landscape-transformer.webp', alt: 'Landscape lighting transformer with built-in timer in Sarasota', caption: 'Landscape transformer with integrated astronomical timer' },
    ],
  },

  'solar-systems': {
    content: {
      intro:
        'Sarasota averages over 260 sunny days per year, making it one of the best locations in the country for residential and commercial solar energy. Majors Electrical provides the critical electrical integration that connects your solar panel system to your home\'s power infrastructure—including inverter installation, AC disconnect switches, net metering connections with FPL, and panel upgrades to accommodate solar backfeed.',
      sections: [
        {
          heading: 'Solar Electrical Integration',
          body:
            'While solar panel installation is typically performed by a solar installer, the electrical integration requires a licensed electrician. This scope includes installing the inverter (string or microinverters), running AC conduit from the inverter to the main panel, installing a dedicated solar breaker with proper backfeed protection per NEC 705.12, and mounting the required AC disconnect and production meter. Majors Electrical coordinates directly with your solar installer to ensure seamless integration.',
          bullets: [
            'Inverter installation (string, micro, or hybrid configurations)',
            'AC conduit run from inverter array to main electrical panel',
            'Solar breaker installation with NEC 705.12 backfeed protection',
            'AC disconnect switch and production meter per FPL requirements',
            'Panel bus rating evaluation—120% rule compliance per NEC 705.12(B)(2)',
          ],
        },
        {
          heading: 'Net Metering and FPL Interconnection',
          body:
            'Florida\'s net metering policy allows residential solar customers to receive credit for excess energy exported to the grid. Majors Electrical handles the electrical side of the FPL interconnection application, ensures your system meets FPL\'s technical requirements, and installs the bi-directional meter base if required. We also verify that your main panel has adequate capacity for the solar backfeed without exceeding the 120% busbar rule.',
          bullets: [
            'FPL interconnection application support',
            'Bi-directional meter base installation when required',
            '120% busbar rule compliance verification',
            'System commissioning and production verification',
          ],
        },
        {
          heading: 'Solar-Plus-Storage: Battery Integration',
          body:
            'Pairing solar panels with a battery system like the Tesla Powerwall or Enphase IQ Battery allows you to store excess solar production for use during evening hours or power outages—critical in hurricane-prone Sarasota. Majors Electrical designs and installs the electrical infrastructure for solar-plus-storage systems, including the critical transfer switch that allows your battery to island from the grid during outages.',
          bullets: [
            'Solar-plus-battery system design and installation',
            'Automatic transfer switch for grid islanding during outages',
            'Critical load panel setup to prioritize essential circuits',
            'Time-of-use optimization to maximize savings',
          ],
        },
      ],
      safetyNote:
        'Solar panels produce DC voltage whenever exposed to sunlight and cannot be simply turned off. Rapid shutdown systems are required by NEC 690.12 to protect firefighters and service personnel. Never attempt to work on solar electrical connections without proper training and lockout/tagout procedures.',
    },
    faqs: [
      {
        question: 'Do I need to upgrade my electrical panel for solar in Sarasota?',
        answer:
          'Possibly. NEC 705.12(B)(2) limits the total amperage connected to your panel busbar to 120% of its rating. For a standard 200-amp panel with a 200-amp busbar, the maximum solar breaker is 40 amps (about 7.6kW of solar). If your system is larger, or your panel busbar is already loaded, an upgrade or solar-ready panel may be needed. We evaluate this during our initial site assessment.',
      },
      {
        question: 'How does net metering work with FPL in Sarasota?',
        answer:
          'Under FPL\'s net metering program, your bi-directional meter tracks both the electricity you consume from the grid and the excess solar energy you export. Exported kilowatt-hours are credited at the retail rate on your monthly bill. At the end of each billing period, you only pay for the net difference. If you export more than you use, the credit rolls forward to the next month.',
      },
      {
        question: 'Can Majors Electrical install the solar panels themselves?',
        answer:
          'Our primary scope is the electrical integration—inverters, conduit, panel connections, disconnects, and metering. We partner with reputable solar installers in the Sarasota area for the panel mounting and racking. This collaborative approach ensures each trade performs the work they specialize in, resulting in a higher-quality installation.',
      },
      {
        question: 'What is a rapid shutdown system and why is it required?',
        answer:
          'NEC 690.12 requires rapid shutdown systems on all new solar installations. These systems reduce the DC voltage on rooftop conductors to safe levels within 30 seconds of activation, protecting firefighters and utility workers who may need to access the roof during an emergency. Most modern microinverter and power optimizer systems comply with rapid shutdown requirements by design.',
      },
      {
        question: 'Is solar worth it in Sarasota with our electricity rates?',
        answer:
          'Sarasota receives an average of 5.5 peak sun hours per day, and FPL\'s residential rates have been trending upward. A typical 8kW residential solar system can offset 80–100% of an average Sarasota home\'s electricity consumption and pays for itself in seven to ten years. When paired with a battery system and federal tax credits, the financial case is even stronger.',
      },
    ],
    relatedServices: ['battery-systems', 'energy-management', 'panel-upgrades', 'surge-protection'],
    galleryImages: [
      { src: '/gallery/solar-inverter-installation.webp', alt: 'Solar inverter installed on the side of a Sarasota home', caption: 'String inverter installation with AC disconnect' },
      { src: '/gallery/solar-panel-connection.webp', alt: 'Electrical integration of a rooftop solar system in Sarasota', caption: 'Solar panel electrical integration at the main panel' },
      { src: '/gallery/solar-meter-base.webp', alt: 'Bi-directional meter base installed for net metering in Sarasota', caption: 'Bi-directional meter base for FPL net metering' },
      { src: '/gallery/solar-conduit-run.webp', alt: 'AC conduit run from solar inverter to panel on a Sarasota home', caption: 'Clean conduit run from inverter to main panel' },
      { src: '/gallery/solar-battery-system.webp', alt: 'Solar-plus-battery system installed in a Sarasota garage', caption: 'Solar-plus-storage with Tesla Powerwall integration' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a solar installation project in Sarasota', caption: 'Solar electrical integration services in Sarasota' },
    ],
  },

  'battery-systems': {
    content: {
      intro:
        'Home battery storage systems provide energy independence, hurricane resilience, and optimized electricity savings for Sarasota homeowners. Majors Electrical installs and integrates leading battery systems—including Tesla Powerwall, Enphase IQ Battery, and Franklin WH—connecting them to your electrical panel with proper transfer switching so your home stays powered during grid outages and stores surplus solar energy for nighttime use.',
      sections: [
        {
          heading: 'Why Battery Storage Makes Sense in Sarasota',
          body:
            'Sarasota sits in one of the most hurricane-prone regions in the United States, and extended power outages after major storms are a reality of Gulf Coast living. A home battery system provides automatic backup power within milliseconds of a grid failure—far faster than a standby generator. Paired with solar panels, a battery system can sustain your essential loads indefinitely during extended outages, as the solar array recharges the battery each day.',
          bullets: [
            'Automatic backup power during hurricanes and grid outages',
            'Millisecond switchover—no interruption to sensitive electronics',
            'Solar recharging for sustained backup during extended outages',
            'Silent operation with no fuel, fumes, or maintenance compared to generators',
            'Time-of-use rate optimization to reduce electricity bills',
          ],
        },
        {
          heading: 'Battery System Options We Install',
          body:
            'We install and integrate the major residential battery platforms, each with distinct advantages. The Tesla Powerwall (13.5 kWh) is the most popular choice for whole-home backup, the Enphase IQ Battery (3.36–10.08 kWh per unit, stackable) pairs seamlessly with Enphase microinverter solar systems, and the Franklin WH (13.6 kWh) offers robust off-grid capability. We help you select the right system based on your backup requirements, solar setup, and budget.',
          bullets: [
            'Tesla Powerwall: 13.5 kWh, 7kW peak / 5kW continuous output',
            'Enphase IQ Battery: modular, stackable, microinverter-native',
            'Franklin WH: 13.6 kWh with strong off-grid performance',
            'System sizing based on your critical load requirements',
          ],
        },
        {
          heading: 'Installation and Electrical Integration',
          body:
            'Battery installation involves mounting the unit (garage wall or exterior), installing a gateway or automatic transfer switch, creating a critical loads panel for essential circuits, and configuring the system for your preferred operating mode—backup-only, self-consumption, or time-of-use optimization. All installations comply with NEC Article 706 for energy storage systems and include required disconnects and overcurrent protection.',
          bullets: [
            'Indoor or outdoor mounting per manufacturer specifications',
            'Automatic transfer switch or gateway installation',
            'Critical loads panel for essential circuits (fridge, lights, Wi-Fi, medical)',
            'NEC Article 706 compliance for energy storage systems',
            'System commissioning, app setup, and homeowner training',
          ],
        },
      ],
      safetyNote:
        'Battery energy storage systems contain high-voltage DC components and lithium-ion cells. Installation must be performed by a licensed electrician following the manufacturer\'s specifications and NEC Article 706. Never attempt to open, modify, or service a battery unit yourself.',
    },
    faqs: [
      {
        question: 'How long will a Tesla Powerwall power my Sarasota home during an outage?',
        answer:
          'A single Tesla Powerwall (13.5 kWh) can power essential loads—refrigerator, lights, Wi-Fi, phone chargers, and a few outlets—for approximately 12 to 24 hours depending on consumption. Paired with a solar system, the Powerwall recharges each day, potentially providing indefinite backup during extended outages. For whole-home backup including air conditioning, two or more Powerwalls are typically recommended.',
      },
      {
        question: 'Can I install a battery system without solar panels?',
        answer:
          'Yes. A battery system can charge from the grid during off-peak hours and provide backup power during outages, even without solar. However, pairing with solar maximizes the value by allowing the battery to recharge from free solar energy during the day and discharge at night or during peak rate periods.',
      },
      {
        question: 'What is a critical loads panel and do I need one?',
        answer:
          'A critical loads panel (also called a backed-up loads panel) is a sub-panel containing only the circuits you want powered during an outage—typically refrigerator, lighting, internet, garage door, and medical equipment. Most battery installations include a critical loads panel because the battery capacity is limited and you want to prioritize essential circuits rather than trying to power the entire home.',
      },
      {
        question: 'How much does a home battery system cost in Sarasota?',
        answer:
          'A Tesla Powerwall installed in Sarasota typically costs $12,000 to $16,000 including the battery, gateway, electrical work, and permitting. Enphase IQ Battery systems range from $10,000 to $20,000 depending on the number of units. The federal Investment Tax Credit (ITC) currently covers 30% of the installed cost when the battery is charged by solar, significantly reducing the net investment.',
      },
      {
        question: 'Is a battery system better than a generator for hurricane backup?',
        answer:
          'Each has advantages. Batteries provide instant, silent, maintenance-free backup and work seamlessly with solar for extended outages, but have limited energy capacity. Generators provide unlimited runtime as long as fuel is available and can power an entire home including heavy loads like central AC. Many Sarasota homeowners install both—a battery for instant backup of essentials and a generator for extended whole-home power during major storms.',
      },
    ],
    relatedServices: ['solar-systems', 'generators', 'energy-management', 'panel-upgrades'],
    galleryImages: [
      { src: '/gallery/battery-powerwall-install.webp', alt: 'Tesla Powerwall installed on a garage wall in a Sarasota home', caption: 'Tesla Powerwall 3 garage wall installation' },
      { src: '/gallery/battery-gateway-panel.webp', alt: 'Battery gateway and critical loads panel installed in a Sarasota home', caption: 'Gateway with critical loads panel for essential circuits' },
      { src: '/gallery/battery-enphase-system.webp', alt: 'Enphase IQ Battery system installed in a Sarasota garage', caption: 'Enphase IQ Battery system with microinverter integration' },
      { src: '/gallery/solar-battery-system.webp', alt: 'Integrated solar-plus-battery system in a Sarasota home', caption: 'Solar-plus-battery for complete energy independence' },
      { src: '/gallery/battery-app-monitoring.webp', alt: 'Homeowner monitoring battery system performance on a smartphone app', caption: 'Real-time energy monitoring via manufacturer app' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a battery installation project', caption: 'Battery system installation in Sarasota' },
    ],
  },

  'energy-management': {
    content: {
      intro:
        'Energy management systems give Sarasota homeowners and business owners real-time visibility and intelligent control over their electricity consumption—critical in a region where summer cooling loads can double monthly FPL bills. Majors Electrical designs and installs energy monitoring hardware, smart sub-metering, and load-control systems that help Gulf Coast properties reduce energy waste, optimize peak-demand charges, and integrate seamlessly with solar and battery storage.',
      sections: [
        {
          heading: 'Whole-Property Energy Monitoring',
          body:
            'Modern energy management begins with accurate measurement. We install current-transformer (CT) based monitoring systems at your main panel that track consumption on every circuit in real time, streaming data to a dashboard on your phone or computer. These systems reveal which appliances, HVAC zones, and lighting circuits consume the most energy so you can make informed decisions about upgrades and usage habits—especially valuable during Sarasota\'s peak summer months when FPL demand charges are highest.',
          bullets: [
            'Circuit-level monitoring with CT clamps on every breaker',
            'Real-time dashboards accessible from phone, tablet, or computer',
            'Historical trending to identify consumption patterns and anomalies',
            'Alerts for unusual spikes that may indicate equipment failure',
            'Integration with FPL rate structures to calculate true cost per circuit',
          ],
        },
        {
          heading: 'Smart Load Control and Demand Response',
          body:
            'Beyond monitoring, advanced energy management systems actively control loads to reduce peak demand. Smart thermostats, water heater timers, and pool pump schedulers shift energy-intensive operations to off-peak hours when electricity rates are lower. For commercial properties, demand-response controllers can shed non-critical loads during peak periods to avoid costly FPL demand charges that can represent 30–50% of a commercial electric bill.',
          bullets: [
            'Automated load shifting to off-peak rate windows',
            'Smart thermostat integration for HVAC optimization',
            'Pool pump and water heater scheduling for demand reduction',
            'Commercial demand-response controllers to limit peak kW charges',
          ],
        },
        {
          heading: 'Solar and Battery System Integration',
          body:
            'Energy management systems reach their full potential when paired with solar panels and battery storage. The management platform coordinates solar production, battery charge/discharge cycles, and grid import to minimize your electricity cost. During sunny hours, excess solar charges the battery; during peak rate hours, the battery discharges to offset grid consumption. Majors Electrical configures these systems for maximum savings based on your specific FPL rate schedule and consumption profile.',
          bullets: [
            'Coordinated solar production and battery dispatch',
            'Time-of-use optimization based on your FPL rate structure',
            'Self-consumption maximization to reduce grid dependence',
            'Exportable energy tracking for net metering credit optimization',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How much can an energy management system save on my Sarasota electric bill?',
        answer:
          'Most homeowners see 10–25% reduction in electricity costs through a combination of behavioral changes informed by real-time data and automated load shifting. Commercial properties often save even more—15–35%—by reducing peak demand charges. The savings depend on your current consumption patterns and the specific controls installed.',
      },
      {
        question: 'What is the difference between energy monitoring and energy management?',
        answer:
          'Energy monitoring passively tracks and displays your electricity consumption. Energy management goes further by actively controlling loads—shifting HVAC operation, scheduling pool pumps, and coordinating battery discharge to optimize when and how you use electricity. Monitoring tells you what is happening; management does something about it automatically.',
      },
      {
        question: 'Can an energy management system work with my existing solar panels?',
        answer:
          'Yes. Most energy management platforms integrate with existing solar inverters from SolarEdge, Enphase, and other major brands. We connect the monitoring hardware to both your main panel and your solar system so the platform sees total production, self-consumption, and grid export in a single unified dashboard.',
      },
      {
        question: 'Do I need a panel upgrade to install an energy management system?',
        answer:
          'Typically no. Energy monitoring hardware installs inside your existing panel using CT clamps that wrap around individual breaker conductors—no new breakers or wiring are required. If you add load-control devices like smart relays, those may require a small amount of additional wiring but generally do not require a panel upgrade.',
      },
      {
        question: 'Is energy management worth it for a Sarasota rental or vacation property?',
        answer:
          'Absolutely. Vacation homes often have inefficient consumption patterns—HVAC running when no one is present, pool pumps operating during peak rate hours, and water heaters cycling unnecessarily. An energy management system with remote access lets you monitor and control the property from anywhere, preventing wasted energy between guest stays.',
      },
    ],
    relatedServices: ['solar-systems', 'battery-systems', 'smart-switches', 'panel-upgrades'],
    galleryImages: [
      { src: '/gallery/energy-management-monitor.webp', alt: 'Energy monitoring system installed in a Sarasota home electrical panel', caption: 'Circuit-level energy monitoring with CT clamps' },
      { src: '/gallery/energy-management-dashboard.webp', alt: 'Energy management dashboard showing real-time consumption data', caption: 'Real-time consumption dashboard on a tablet' },
      { src: '/gallery/energy-management-smart-controls.webp', alt: 'Smart load control devices installed for energy management in Sarasota', caption: 'Smart load controllers for demand optimization' },
      { src: '/gallery/solar-battery-system.webp', alt: 'Integrated solar-plus-battery with energy management in Sarasota', caption: 'Solar and battery integration for whole-home energy management' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an energy management installation', caption: 'Energy management system installation in Sarasota' },
    ],
  },

  'swimming-pools': {
    content: {
      intro:
        'Swimming pool electrical work in Sarasota demands specialized expertise—NEC Article 680 governs every conductor, motor, light, and bonding connection within the pool zone, and Florida\'s high water table, lightning exposure, and salt-air corrosion make compliance even more critical. Majors Electrical provides complete pool electrical services across the Gulf Coast, from new pool construction wiring and pump circuits to underwater lighting upgrades and equipotential bonding grid installation.',
      sections: [
        {
          heading: 'NEC Article 680: Pool Electrical Safety Requirements',
          body:
            'NEC Article 680 establishes strict requirements for electrical installations in and around swimming pools. All pool pump motors must be connected to a dedicated branch circuit with GFCI protection per NEC 680.22(B), and a disconnecting means must be located within sight of the pool equipment and at least five feet from the pool edge. Underwater luminaires must be listed for pool use and supplied by circuits not exceeding 150 volts to ground. Majors Electrical ensures every pool electrical installation meets these requirements and satisfies Sarasota County inspection standards.',
          bullets: [
            'GFCI-protected dedicated circuits for all pool equipment per NEC 680.22(B)',
            'Disconnecting means within sight and at least 5 feet from pool edge',
            'Listed underwater luminaires on circuits not exceeding 150V to ground',
            'Receptacle outlets at least 6 feet from pool edge per NEC 680.22(A)',
            'Equipment bonding per NEC 680.26 including the equipotential bonding grid',
          ],
        },
        {
          heading: 'Equipotential Bonding Grid',
          body:
            'One of the most critical—and commonly misunderstood—pool electrical requirements is the equipotential bonding grid mandated by NEC 680.26. This system connects all metallic pool components, reinforcing steel, pool equipment, and perimeter conductive surfaces to a common bonding grid, equalizing voltage potential and eliminating the risk of shock. In Sarasota\'s sandy, high-resistivity soil, proper bonding is especially important because the earth itself provides less natural fault-current dissipation.',
          bullets: [
            'Bonding of all metal pool components, ladders, handrails, and diving boards',
            'Perimeter bonding grid or alternative per NEC 680.26(C)',
            'Reinforcing steel bonding in the pool shell per NEC 680.26(B)',
            'Connection of pool pump, heater, and filter housings to bonding system',
            'Bonding verification with resistance testing after installation',
          ],
        },
        {
          heading: 'Pool Equipment Circuits and Lighting',
          body:
            'A typical Sarasota pool requires dedicated circuits for the variable-speed pump, salt chlorine generator, pool heater (gas or heat pump), automation controller, and lighting. Majors Electrical sizes and installs each circuit with the proper wire gauge, conduit protection, and overcurrent device. We also upgrade older incandescent pool lights to energy-efficient LED color-changing fixtures that transform your pool area and last 50,000+ hours.',
          bullets: [
            'Dedicated circuits for pump, heater, chlorinator, and automation',
            'Variable-speed pump wiring with proper motor protection',
            'LED pool light upgrades with color-changing capability',
            'Pool automation system integration (Pentair, Hayward, Jandy)',
          ],
        },
      ],
      safetyNote:
        'Electrical shock drowning (ESD) is a silent, invisible hazard in pools with improper wiring or missing bonding. If anyone in or near a pool reports tingling sensations, evacuate the pool immediately, de-energize all pool equipment at the breaker, and call a licensed electrician. Never enter the water to rescue someone experiencing ESD—turn off the power first.',
    },
    faqs: [
      {
        question: 'Does my Sarasota pool pump need to be on a GFCI-protected circuit?',
        answer:
          'Yes. NEC 680.22(B) requires GFCI protection for all pool pump motor branch circuits. This applies to single-speed, dual-speed, and variable-speed pumps. The GFCI protection can be provided by a GFCI breaker in the panel or a GFCI-protected disconnect at the pool equipment pad. Majors Electrical installs GFCI breakers that are rated for the motor\'s inrush current to prevent nuisance tripping.',
      },
      {
        question: 'What is an equipotential bonding grid and why is it required for pools?',
        answer:
          'The equipotential bonding grid, required by NEC 680.26, connects all metallic pool components and surrounding conductive surfaces to a common bonding conductor. This equalizes voltage potential across all surfaces a swimmer might touch simultaneously, preventing electric shock. In Sarasota\'s sandy soil, which has high electrical resistance, proper bonding is even more critical because the ground itself is less effective at dissipating stray voltage.',
      },
      {
        question: 'Can I upgrade my pool lights to LED in Sarasota?',
        answer:
          'Yes. LED pool lights are a popular upgrade that provides dramatic color-changing capability while using a fraction of the energy of older incandescent fixtures. In many cases, the existing light niche and junction box can be reused, keeping the conversion simple. We verify that the existing wiring and GFCI protection meet current NEC 680 requirements as part of every pool light upgrade.',
      },
      {
        question: 'How far from the pool do electrical outlets need to be in Florida?',
        answer:
          'NEC 680.22(A) requires that receptacle outlets be located at least six feet from the inside wall of a pool. At least one convenience receptacle must be located between 6 and 20 feet from the pool. All receptacles within 20 feet of the pool must have GFCI protection. Majors Electrical ensures your pool area receptacles comply with these specific distance and protection requirements.',
      },
      {
        question: 'What pool electrical work requires a permit in Sarasota County?',
        answer:
          'All new pool construction electrical work, pool equipment replacement that involves new wiring, bonding grid installation, and lighting modifications require an electrical permit in Sarasota County. Simple device replacements like swapping a pump of the same type on existing wiring may not require a permit, but we recommend confirming with the building department. Majors Electrical handles permit applications and inspection scheduling for all pool electrical projects.',
      },
    ],
    relatedServices: ['spas-and-hot-tubs', 'outdoor-security', 'exterior-lighting', 'panel-upgrades'],
    galleryImages: [
      { src: '/gallery/pool-equipment-wiring.webp', alt: 'Pool equipment pad wiring with dedicated circuits at a Sarasota home', caption: 'Pool equipment pad with GFCI-protected dedicated circuits' },
      { src: '/gallery/pool-bonding-grid.webp', alt: 'Equipotential bonding grid installation for a pool in Sarasota', caption: 'Equipotential bonding grid per NEC 680.26' },
      { src: '/gallery/pool-led-lighting.webp', alt: 'LED color-changing pool light installed in a Sarasota swimming pool', caption: 'LED color-changing pool light upgrade' },
      { src: '/gallery/pool-automation-panel.webp', alt: 'Pool automation control panel installed at a Sarasota residence', caption: 'Pentair pool automation system integration' },
      { src: '/gallery/pool-disconnect-gfci.webp', alt: 'GFCI disconnect switch at a pool equipment pad in Sarasota', caption: 'GFCI-protected disconnect within sight of pool equipment' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a pool electrical project in Sarasota', caption: 'Swimming pool electrical services in Sarasota' },
    ],
  },

  'spas-and-hot-tubs': {
    content: {
      intro:
        'Hot tub and spa electrical installation in Sarasota requires the same specialized NEC Article 680 expertise as swimming pool work—with additional considerations for 240-volt GFCI-protected circuits, outdoor enclosure ratings, and the unique load demands of spa heaters and jet pumps. Majors Electrical provides complete spa and hot tub electrical services throughout the Gulf Coast, from running the dedicated circuit and installing the disconnect to final connection and inspection.',
      sections: [
        {
          heading: 'Spa and Hot Tub Circuit Requirements',
          body:
            'Most permanently installed spas and hot tubs require a dedicated 240-volt, 50-amp circuit protected by a GFCI breaker per NEC 680.44. The wire size is typically 6 AWG copper in appropriate conduit, and the run from your panel to the spa location must account for voltage drop—especially important for longer runs common in Sarasota properties with expansive outdoor living areas. Portable plug-in hot tubs on a 120-volt, 20-amp GFCI-protected circuit are an exception, but most quality spas require 240V service for adequate heater and pump performance.',
          bullets: [
            'Dedicated 240V/50A GFCI-protected circuit per NEC 680.44',
            '6 AWG copper conductors with proper conduit protection',
            'Voltage drop calculations for long outdoor runs',
            '120V/20A GFCI circuits for smaller plug-in spa models',
            'Proper wire sizing based on spa manufacturer specifications',
          ],
        },
        {
          heading: 'Disconnect and Access Requirements',
          body:
            'NEC 680.12 requires a disconnecting means for spas and hot tubs that is readily accessible, within sight of the unit, and at least five feet from the inside wall of the spa. This disconnect must be lockable and must disconnect all ungrounded conductors. In Sarasota\'s outdoor environments, we install weather-rated NEMA 3R disconnect enclosures that withstand driving rain and UV exposure while remaining easily accessible for emergency shutoff.',
          bullets: [
            'GFCI-protected disconnect within sight and at least 5 feet from spa',
            'NEMA 3R weather-rated enclosure for outdoor installations',
            'Lockable disconnect for maintenance safety per NEC 680.12',
            'Equipment bonding per NEC 680.42 for all spa metal components',
          ],
        },
      ],
      safetyNote:
        'Never operate a hot tub or spa without verified GFCI protection. The combination of water, electricity, and the human body\'s lowered resistance when submerged creates a potentially lethal hazard. Test the GFCI disconnect monthly by pressing the test button and confirming the circuit de-energizes completely.',
    },
    faqs: [
      {
        question: 'What size electrical circuit does a hot tub need in Sarasota?',
        answer:
          'Most 240-volt spas require a dedicated 50-amp or 60-amp circuit with 6 AWG or 4 AWG copper conductors, depending on the manufacturer\'s specifications and the distance from the panel. The circuit must have GFCI protection per NEC 680.44. Smaller 120-volt plug-in models need a dedicated 20-amp GFCI-protected receptacle. Majors Electrical sizes the circuit based on your specific spa model\'s electrical requirements.',
      },
      {
        question: 'Do I need a permit to install a hot tub in Sarasota County?',
        answer:
          'Yes. Any new electrical circuit for a permanently installed spa or hot tub requires an electrical permit in Sarasota County. The permit ensures the circuit, disconnect, GFCI protection, and bonding all meet NEC Article 680 requirements. Majors Electrical handles the permit application and schedules the required inspection after installation.',
      },
      {
        question: 'How far does the electrical disconnect need to be from my hot tub?',
        answer:
          'NEC 680.12 requires the disconnecting means to be at least five feet from the inside wall of the spa and within line of sight. It must also be readily accessible—not behind a locked gate or inside a building that is not adjacent to the spa. We position the disconnect for both code compliance and practical convenience.',
      },
      {
        question: 'Can my existing electrical panel support a hot tub circuit?',
        answer:
          'A 50-amp spa circuit represents a significant load. If your panel is a 100-amp service, adding a spa may push you beyond capacity, especially if you also have an electric range, dryer, and air conditioning. We perform a load calculation per NEC Article 220 to determine whether your existing service can accommodate the spa or if a panel upgrade is needed first.',
      },
    ],
    relatedServices: ['swimming-pools', 'panel-upgrades', 'outdoor-security', 'dedicated-circuits'],
    galleryImages: [
      { src: '/gallery/spa-disconnect-installation.webp', alt: 'GFCI disconnect switch installed for a hot tub at a Sarasota home', caption: '50A GFCI disconnect for a 240V hot tub installation' },
      { src: '/gallery/spa-circuit-wiring.webp', alt: 'Dedicated 240-volt circuit run to a hot tub in Sarasota', caption: 'Dedicated 240V/50A circuit with 6 AWG copper' },
      { src: '/gallery/spa-outdoor-installation.webp', alt: 'Hot tub electrical hookup on a Sarasota patio', caption: 'Outdoor spa electrical connection with weather-rated components' },
      { src: '/gallery/spa-panel-breaker.webp', alt: 'GFCI breaker installed in panel for a spa circuit in Sarasota', caption: '50A GFCI breaker in main panel for spa circuit' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a hot tub installation in Sarasota', caption: 'Spa and hot tub electrical services in Sarasota' },
    ],
  },

  'outdoor-security': {
    content: {
      intro:
        'Outdoor security electrical systems protect Sarasota homes and businesses with motion-activated floodlights, perimeter lighting, camera power circuits, and automated gate operators—all hardwired for reliability and designed to withstand Florida\'s harsh coastal weather. Majors Electrical designs integrated outdoor security electrical packages that deter intruders, illuminate dark zones, and provide power to your surveillance and access-control equipment.',
      sections: [
        {
          heading: 'Security Lighting Design and Installation',
          body:
            'Effective security lighting eliminates dark hiding spots around your property without creating harsh glare or light trespass. We install LED motion-activated floodlights at building corners and entry points, dusk-to-dawn perimeter lights along fences and property lines, and pathway lighting that guides visitors while discouraging trespassers. All fixtures are wet-location rated per NEC 410.10 and built from corrosion-resistant materials suited to Sarasota\'s salt-air environment.',
          bullets: [
            'Motion-activated LED floodlights with adjustable sensitivity and range',
            'Dusk-to-dawn perimeter lighting with photocell control',
            'Dark-sky-compliant fixtures to minimize neighbor light trespass',
            'Corrosion-resistant materials for Gulf Coast salt-air durability',
            'GFCI-protected outdoor circuits per NEC 210.8(A)(3)',
          ],
        },
        {
          heading: 'Security Camera and Access-Control Power',
          body:
            'Modern security cameras, video doorbells, automated gate operators, and access-control keypads all require reliable, dedicated power. Majors Electrical installs weatherproof outdoor outlets, low-voltage transformer circuits for camera systems, and 240V circuits for motorized gate operators. We route conduit underground or along building exteriors to provide clean, concealed power runs that don\'t detract from your property\'s appearance.',
          bullets: [
            'Weatherproof GFCI outlets for camera and equipment power',
            'Low-voltage wiring for PoE (Power over Ethernet) camera systems',
            'Dedicated 240V circuits for gate operators and barrier arms',
            'Underground conduit runs for concealed, protected wiring',
            'Backup power integration for security systems during outages',
          ],
        },
        {
          heading: 'Automation and Remote Monitoring',
          body:
            'Smart outdoor security systems let you monitor and control your property\'s lighting and cameras from anywhere. Majors Electrical integrates outdoor security lighting with smart switches, timers, and home automation platforms so you can arm perimeter lights remotely, receive motion alerts, and simulate occupancy while traveling—especially valuable for Sarasota\'s many seasonal and vacation homes that sit unoccupied for months.',
          bullets: [
            'Smart switch integration for remote security light control',
            'Motion-triggered alerts sent to your smartphone',
            'Vacation mode with randomized lighting patterns',
            'Integration with Ring, Arlo, and other security ecosystems',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What is the best type of outdoor security light for a Sarasota home?',
        answer:
          'We recommend LED motion-activated floodlights with a detection range of 70+ feet, adjustable sensitivity, and a dusk-to-dawn photocell override option. Look for 3000K to 4000K color temperature for good facial recognition in security camera footage. The fixture should be wet-location rated and constructed from die-cast aluminum or marine-grade materials to handle Sarasota\'s salt-air corrosion.',
      },
      {
        question: 'Can you add outdoor outlets for security cameras around my property?',
        answer:
          'Yes. We install GFCI-protected, in-use-cover weatherproof outlets at camera mounting locations around your property\'s perimeter. For PoE camera systems, we run Cat6 cable from a central switch or NVR to each camera location, which carries both data and power on a single cable. All wiring is run through UV-rated conduit or underground PVC for protection.',
      },
      {
        question: 'Do outdoor security lights deter break-ins?',
        answer:
          'Studies consistently show that well-lit properties experience significantly fewer burglary attempts. Motion-activated lighting is particularly effective because the sudden illumination startles intruders and draws attention from neighbors. Combined with visible security cameras, a properly designed security lighting system is one of the most cost-effective deterrents available.',
      },
      {
        question: 'Can outdoor security systems work during a power outage?',
        answer:
          'Yes, with proper planning. We can connect your security lighting and camera circuits to a battery backup system or generator transfer switch so they remain operational during FPL outages. For smaller systems, a UPS (uninterruptible power supply) at the camera NVR and router provides several hours of continued recording and monitoring.',
      },
    ],
    relatedServices: ['security-lighting', 'security-cameras', 'exterior-lighting', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/outdoor-security-floodlight.webp', alt: 'Motion-activated LED floodlight installed at a Sarasota home', caption: 'Motion-activated LED floodlight at building corner' },
      { src: '/gallery/outdoor-security-camera-power.webp', alt: 'Weatherproof outlet installed for a security camera in Sarasota', caption: 'Weatherproof GFCI outlet for security camera power' },
      { src: '/gallery/outdoor-security-perimeter.webp', alt: 'Perimeter security lighting along a Sarasota property fence line', caption: 'Dusk-to-dawn perimeter security lighting' },
      { src: '/gallery/outdoor-security-gate-wiring.webp', alt: 'Electrical wiring for an automated gate operator in Sarasota', caption: 'Automated gate operator electrical installation' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an outdoor security installation in Sarasota', caption: 'Outdoor security electrical services in Sarasota' },
    ],
  },

  'emergency-service': {
    content: {
      intro:
        'Electrical emergencies don\'t wait for business hours—a tripped main breaker at midnight, a burning smell from your panel during a thunderstorm, or a complete power loss with a vulnerable family member at home all demand immediate, expert response. Majors Electrical provides 24-hour emergency electrical service throughout Sarasota, Bradenton, Lakewood Ranch, and the surrounding Gulf Coast communities, with licensed electricians dispatched to your location within 60 minutes.',
      sections: [
        {
          heading: 'When to Call for Emergency Electrical Service',
          body:
            'Not every electrical issue is an emergency, but certain situations require immediate attention to prevent fire, shock, or property damage. Burning smells from outlets, panels, or walls indicate overheating conductors and are a fire risk. Sparking or arcing at a panel or receptacle means an active fault. A complete power loss not caused by an FPL outage suggests a main breaker failure or service entrance problem. If you experience any of these, turn off the main breaker if safe to do so and call Majors Electrical immediately.',
          bullets: [
            'Burning smell from outlets, panels, or behind walls',
            'Visible sparks or arcing at any electrical device or panel',
            'Complete power loss not caused by an FPL service outage',
            'Exposed or damaged wiring from storms, accidents, or construction',
            'Electrical shock experienced when touching an appliance or fixture',
          ],
        },
        {
          heading: 'Our Emergency Response Process',
          body:
            'When you call our 24/7 emergency line, a dispatcher assesses your situation and prioritizes your call based on safety severity. Our on-call electricians carry fully stocked trucks with common replacement breakers, wire, connectors, and safety devices, allowing us to resolve most emergencies on the first visit. We stabilize the hazard, perform the necessary repair, and document our findings so you have a clear record for insurance or follow-up work.',
          bullets: [
            'Dispatcher triage for immediate safety assessment',
            'Target 60-minute on-site response throughout the Sarasota area',
            'Fully stocked trucks for same-visit resolution of most emergencies',
            'Clear documentation of findings and repairs performed',
            'Follow-up recommendations for any additional work needed',
          ],
        },
        {
          heading: 'Storm and Hurricane Emergency Response',
          body:
            'Sarasota\'s position on the Gulf Coast makes it vulnerable to tropical storms and hurricanes that can cause widespread electrical damage—downed service entrance cables, water-damaged panels, generator failures, and storm surge damage to ground-level electrical equipment. Majors Electrical ramps up our emergency response team before and after named storms, and we prioritize calls involving safety hazards, medical equipment needs, and homes with compromised electrical service.',
          bullets: [
            'Pre-storm inspections to secure outdoor electrical equipment',
            'Post-storm damage assessment and emergency stabilization',
            'Temporary power solutions when permanent repair requires parts or permits',
            'Priority response for homes with medical equipment or vulnerable occupants',
          ],
        },
      ],
      safetyNote:
        'If you see a downed power line on your property or in the street, stay at least 35 feet away—the ground around a downed line can be energized. Call 911 and FPL at 1-800-4-OUTAGE. Do not attempt to move the line or touch anything in contact with it. Wait for the utility crew to arrive and de-energize the line.',
    },
    faqs: [
      {
        question: 'How quickly can Majors Electrical respond to an electrical emergency in Sarasota?',
        answer:
          'Our target response time is 60 minutes or less throughout the Sarasota-Bradenton metropolitan area. During severe weather events, response times may be longer due to road conditions and high call volume, but we triage all calls by safety severity and dispatch to the most critical situations first.',
      },
      {
        question: 'What should I do if I smell something burning from my electrical panel?',
        answer:
          'Turn off the main breaker immediately if it is safe to do so—do not touch the panel if you see scorching, melting, or active flames. Move your family outside the home and call Majors Electrical\'s emergency line and 911 if you see smoke or fire. A burning smell from the panel typically indicates overheated connections, a failing breaker, or melting wire insulation—all of which are fire hazards that require immediate professional attention.',
      },
      {
        question: 'Does emergency electrical service cost more than a regular service call?',
        answer:
          'Emergency calls outside of regular business hours include an after-hours service fee to cover the on-call electrician\'s availability. We provide the after-hours rate upfront when you call, before we dispatch, so there are no surprises. The repair costs themselves are the same as during regular hours—only the service call fee differs.',
      },
      {
        question: 'Can you repair electrical storm damage in Sarasota?',
        answer:
          'Yes. We repair all types of storm-related electrical damage including damaged service entrance cables, water-infiltrated panels, lightning-damaged surge protectors and equipment, and wind-damaged exterior fixtures and conduit. If the damage involves the utility-side service (meter base or service drop), we coordinate directly with FPL to restore your connection.',
      },
      {
        question: 'What if my power is out but my neighbors still have power?',
        answer:
          'If your neighbors have power and your home does not, the issue is on your side of the meter—typically a failed main breaker, tripped service disconnect, or damaged service entrance cable. Do not attempt to reset a main breaker that has tripped due to unknown causes, as this could re-energize a fault. Call Majors Electrical for diagnosis and repair.',
      },
    ],
    relatedServices: ['panel-upgrades', 'surge-protection', 'generators', 'safety-inspections'],
    galleryImages: [
      { src: '/gallery/emergency-panel-repair.webp', alt: 'Emergency electrical panel repair at a Sarasota home at night', caption: 'After-hours emergency panel repair in Sarasota' },
      { src: '/gallery/emergency-storm-damage.webp', alt: 'Storm-damaged electrical service entrance being repaired in Sarasota', caption: 'Post-storm service entrance repair and stabilization' },
      { src: '/gallery/emergency-breaker-replacement.webp', alt: 'Emergency breaker replacement in a Sarasota residential panel', caption: 'Emergency breaker replacement to restore power' },
      { src: '/gallery/electrical-panel-upgrade.webp', alt: 'Electrical panel requiring emergency service in Sarasota', caption: 'Emergency panel assessment and repair' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical emergency response van in Sarasota', caption: '24/7 emergency electrical response across Sarasota County' },
    ],
  },

  'panel-upgrades': {
    content: {
      intro:
        'Your electrical panel is the heart of your home\'s power distribution system, and in Sarasota—where aging Federal Pacific and Zinsco panels are still found in thousands of homes—upgrading to a modern, properly rated panel is one of the most important investments you can make for safety and capacity. Majors Electrical performs complete electrical panel upgrades throughout the Gulf Coast, from 100-amp to 200-amp service upgrades to damaged panel replacements, coordinating with FPL and Sarasota County Building Services for a seamless, code-compliant result.',
      sections: [
        {
          heading: 'Why Panel Upgrades Are Critical in Sarasota',
          body:
            'Many homes in Sarasota\'s established neighborhoods were built with 100-amp or 150-amp panels that simply cannot handle modern electrical demands—central air conditioning, electric water heaters, EV chargers, pool equipment, and home offices have dramatically increased residential loads since these homes were built. Beyond capacity, older panels from manufacturers like Federal Pacific Electric (FPE) and Zinsco have well-documented safety defects, with breakers that fail to trip during overcurrent events. These panels are a known fire hazard and should be replaced regardless of capacity needs.',
          bullets: [
            'Federal Pacific Electric (FPE) Stab-Lok panels—documented breaker failure rates',
            'Zinsco/GTE Sylvania panels with aluminum bus bar corrosion issues',
            '100-amp services inadequate for modern electrical loads',
            'Corrosion and salt-air damage to panel components in coastal homes',
            'Insurance companies increasingly requiring panel upgrades for policy renewal',
          ],
        },
        {
          heading: 'The Panel Upgrade Process',
          body:
            'A panel upgrade involves replacing the circuit breaker panel, and often the meter base and service entrance cable, to increase your home\'s electrical capacity and bring the installation up to current NEC standards. The process starts with a load calculation per NEC Article 220, followed by a permit application with Sarasota County. We coordinate with FPL for the meter pull and reconnection—FPL must disconnect and reconnect the meter, which means a planned outage of four to eight hours on the day of installation.',
          bullets: [
            'NEC Article 220 load calculation to size the new service',
            'Sarasota County electrical permit and inspection coordination',
            'FPL meter pull coordination and reconnection scheduling',
            'New panel, meter base, and service entrance cable as needed',
            'Whole-home surge protection installed with every panel upgrade',
            'All circuits labeled and documented in the new panel',
          ],
        },
        {
          heading: 'What Gets Upgraded',
          body:
            'A full panel upgrade typically includes a new 200-amp main breaker panel with copper bus bars, a new meter base rated for the upgraded service, a new service entrance cable from the meter to the panel, new grounding electrode conductors, and a whole-home surge protector. We reuse existing branch circuit wiring when it is in good condition, but we replace any wiring with damaged insulation, improper connections, or undersized conductors discovered during the upgrade.',
          bullets: [
            '200-amp main breaker panel with copper bus bars',
            'New meter base (100-amp meter bases cannot accept 200-amp service)',
            'Service entrance cable (SER) from meter to panel',
            'Grounding electrode system upgrade per NEC 250.50',
            'Whole-home surge protection device (SPD) per NEC 230.67',
          ],
        },
      ],
      safetyNote:
        'If you have a Federal Pacific or Zinsco panel, do not wait for a problem to occur. These panels have well-documented failure modes where breakers do not trip during overcurrent or short-circuit events, creating a serious fire risk. Contact Majors Electrical for a free panel evaluation.',
    },
    faqs: [
      {
        question: 'How much does an electrical panel upgrade cost in Sarasota?',
        answer:
          'A standard 200-amp panel upgrade in Sarasota ranges from $2,500 to $4,500 depending on whether the meter base and service entrance cable also need replacement. If FPL requires a new mast or weatherhead, or if the grounding system needs significant work, the cost can reach $5,500. We provide a detailed written estimate after an on-site evaluation.',
      },
      {
        question: 'How do I know if I have a Federal Pacific or Zinsco panel?',
        answer:
          'Federal Pacific panels are typically labeled "Federal Pacific Electric" or "FPE" on the panel door and use distinctive orange-handled "Stab-Lok" breakers. Zinsco panels display the "Zinsco" or "GTE Sylvania" name and use breakers with colored handles (red, blue, green). If you find either brand in your home, we recommend scheduling a panel evaluation. Both brands have documented safety concerns that warrant replacement.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'A standard residential panel upgrade takes six to ten hours to complete, including the FPL meter pull, old panel removal, new panel and meter base installation, circuit reconnection, testing, and FPL reconnection. Your power will be off for the duration of the work. We schedule the FPL meter pull first thing in the morning and typically have power restored by late afternoon.',
      },
      {
        question: 'Will my homeowners insurance require a panel upgrade?',
        answer:
          'Many Florida insurance carriers flag homes with Federal Pacific, Zinsco, or undersized panels during the four-point inspection required for policies on older homes. Some carriers will decline coverage or charge significantly higher premiums until the panel is replaced. A Majors Electrical panel upgrade resolves these insurance concerns and provides documentation for your carrier.',
      },
      {
        question: 'Do I need a panel upgrade to add an EV charger or pool equipment?',
        answer:
          'Possibly. An EV charger requires a 40-amp or 50-amp circuit, and a pool with a heat pump can draw 50+ amps. If your panel is at or near capacity, these additions may exceed its rating. We perform a load calculation to determine whether your current panel can accommodate the new load. If not, a panel upgrade is typically the most cost-effective long-term solution.',
      },
    ],
    relatedServices: ['residential', 'whole-home-rewire', 'surge-protection', 'safety-inspections'],
    galleryImages: [
      { src: '/gallery/panel-upgrade-before-after.webp', alt: 'Before and after of an electrical panel upgrade in a Sarasota home', caption: 'Federal Pacific to Square D 200A panel upgrade' },
      { src: '/gallery/electrical-panel-upgrade.webp', alt: 'New 200-amp electrical panel installed in a Sarasota home', caption: 'New 200A panel with whole-home surge protection' },
      { src: '/gallery/panel-upgrade-meter-base.webp', alt: 'New meter base installed during a panel upgrade in Sarasota', caption: 'New meter base for 200A service with FPL coordination' },
      { src: '/gallery/panel-upgrade-grounding.webp', alt: 'Grounding electrode system upgrade during a panel replacement in Sarasota', caption: 'Grounding electrode system upgrade per NEC 250.50' },
      { src: '/gallery/panel-upgrade-labeled.webp', alt: 'Properly labeled electrical panel after upgrade in a Sarasota home', caption: 'All circuits labeled and documented after upgrade' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a panel upgrade project in Sarasota', caption: 'Panel upgrade services throughout Sarasota County' },
    ],
  },

  'outlet-&-switch': {
    content: {
      intro:
        'Faulty outlets and switches are among the most common—and most frequently ignored—electrical problems in Sarasota homes, yet they can signal serious underlying wiring issues that pose fire and shock hazards. Majors Electrical diagnoses and repairs all types of outlet and switch problems, from loose receptacles and dead outlets to sparking switches, warm cover plates, and upgrading ungrounded two-prong outlets to modern, code-compliant devices with GFCI and AFCI protection.',
      sections: [
        {
          heading: 'Common Outlet and Switch Problems',
          body:
            'Outlets and switches experience more wear than any other part of your electrical system because they are used daily. Over time, the internal contacts loosen, springs weaken, and connections deteriorate—especially in Florida\'s humid climate where moisture accelerates corrosion on terminals and backstab connections. Warning signs include outlets that don\'t hold plugs firmly, switches that are warm to the touch, cover plates with discoloration or scorch marks, and intermittent power that suggests a loose wire connection inside the device box.',
          bullets: [
            'Loose outlets that don\'t hold plugs securely',
            'Switches that feel warm, buzz, or spark when toggled',
            'Discolored or scorched outlet and switch cover plates',
            'Intermittent power indicating loose internal connections',
            'Dead outlets caused by tripped upstream GFCI or a broken wire',
          ],
        },
        {
          heading: 'Code-Compliant Outlet and Switch Upgrades',
          body:
            'Current NEC requirements mandate safety features that many older Sarasota homes lack. NEC 406.12 requires tamper-resistant receptacles in all new and replacement installations in dwelling units. NEC 210.8 requires GFCI protection in kitchens, bathrooms, garages, outdoors, crawlspaces, and laundry areas. NEC 210.12 requires AFCI protection on most bedroom and living area circuits. When we replace an outlet or switch, we bring the device up to current code requirements—protecting your family and satisfying insurance and inspection standards.',
          bullets: [
            'Tamper-resistant receptacles per NEC 406.12 for child safety',
            'GFCI protection in kitchens, baths, garages, and outdoors per NEC 210.8',
            'AFCI protection on bedroom and living area circuits per NEC 210.12',
            'Two-prong to three-prong upgrades with proper grounding verification',
            'USB outlet installation for convenient device charging',
          ],
        },
        {
          heading: 'Diagnosing Hidden Wiring Issues',
          body:
            'A failing outlet or switch is sometimes a symptom of a deeper wiring problem. Backstab connections—where the wire is pushed into a spring-loaded hole rather than secured under a screw—are notorious for loosening over time and creating hot spots. Aluminum branch wiring, found in homes built between 1965 and 1975, requires special anti-oxidant compound and CO/ALR-rated devices to prevent overheating at the connection point. Majors Electrical identifies these issues during every outlet and switch repair.',
          bullets: [
            'Backstab connection identification and replacement with screw terminals',
            'Aluminum wiring compatibility assessment and proper connectors',
            'Wire insulation condition inspection inside the device box',
            'Grounding verification with impedance testing',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Why is my outlet warm to the touch?',
        answer:
          'A warm outlet indicates excessive resistance at the wire connection, a failing device, or an overloaded circuit. The most common cause is a loose backstab connection inside the outlet box. This is a fire hazard and should be addressed promptly. Turn off the breaker serving that outlet and call Majors Electrical for diagnosis and repair.',
      },
      {
        question: 'Can I replace a two-prong outlet with a three-prong outlet?',
        answer:
          'Yes, but the proper method depends on whether a grounding conductor exists in the box. If a ground wire is present, a standard three-prong receptacle can be installed. If no ground wire exists, NEC 406.4(D)(2) permits installing a GFCI receptacle or using a GFCI breaker to protect the circuit, which must be labeled "No Equipment Ground." Simply swapping in a three-prong outlet without verifying the ground is a code violation.',
      },
      {
        question: 'What is a tamper-resistant receptacle and are they required?',
        answer:
          'Tamper-resistant receptacles (TR) have internal shutters that prevent children from inserting objects into the outlet slots. Both prongs of a plug must be inserted simultaneously to open the shutters. NEC 406.12 requires tamper-resistant receptacles in all dwelling units for new installations and most replacements. They look and function identically to standard receptacles for normal use.',
      },
      {
        question: 'How much does it cost to replace an outlet or switch in Sarasota?',
        answer:
          'A standard outlet or switch replacement typically costs $125 to $200 per device, including the device, cover plate, and labor. GFCI outlets cost more due to the device price, typically $175 to $275 installed. If wiring repairs are needed inside the box—such as correcting backstab connections or replacing damaged wire—the cost may be slightly higher. We provide exact pricing before beginning any work.',
      },
    ],
    relatedServices: ['residential', 'safety-inspections', 'whole-home-rewire', 'arc-fault-breakers'],
    galleryImages: [
      { src: '/gallery/outlet-switch-gfci-install.webp', alt: 'GFCI outlet installation in a Sarasota kitchen', caption: 'GFCI outlet upgrade in a kitchen per NEC 210.8' },
      { src: '/gallery/outlet-switch-tamper-resistant.webp', alt: 'Tamper-resistant receptacle installed in a Sarasota home', caption: 'Tamper-resistant receptacle per NEC 406.12' },
      { src: '/gallery/outlet-switch-dimmer.webp', alt: 'Dimmer switch installation in a Sarasota living room', caption: 'Dimmer switch upgrade for LED-compatible lighting control' },
      { src: '/gallery/outlet-switch-usb-outlet.webp', alt: 'USB outlet installed in a Sarasota home', caption: 'USB receptacle for convenient device charging' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an outlet and switch service call', caption: 'Outlet and switch repair services in Sarasota' },
    ],
  },

  'ceiling-fans': {
    content: {
      intro:
        'Ceiling fans are essential in Sarasota homes—they reduce perceived temperature by up to 8 degrees, allowing you to raise your thermostat setting and save 15–20% on air conditioning costs during Florida\'s long, hot summers. Majors Electrical installs ceiling fans throughout the Gulf Coast with proper fan-rated junction boxes, balanced wiring, and optional smart controls, ensuring safe and reliable operation in every room.',
      sections: [
        {
          heading: 'Why Proper Ceiling Fan Installation Matters',
          body:
            'A ceiling fan can weigh 50 pounds or more and generates significant rotational force. NEC 314.27(C) requires that all ceiling fans be mounted to a junction box specifically listed and rated for fan support—a standard lighting box is not sufficient and can fail under the dynamic load, causing the fan to fall. Majors Electrical verifies or installs a fan-rated box for every ceiling fan installation, whether it is replacing an existing light fixture or going into a new location.',
          bullets: [
            'Fan-rated junction box installation per NEC 314.27(C)',
            'Support bracing between joists for new-location installations',
            'Secure mounting hardware rated for the fan\'s weight and blade span',
            'Proper wire connections with no backstab terminals',
            'Balance verification to prevent wobble and noise',
          ],
        },
        {
          heading: 'Fan Selection for Florida Homes',
          body:
            'Sarasota homes benefit from fans with larger blade spans (52–72 inches) that move more air at lower speeds, operating quietly while delivering maximum cooling effect. For outdoor lanais and covered patios—among Sarasota\'s most popular living spaces—damp-rated or wet-rated fans are required depending on exposure. We help you choose the right fan for each location and ensure the motor, blade pitch, and CFM rating deliver meaningful comfort.',
          bullets: [
            'Indoor fans for bedrooms, living rooms, and dining areas',
            'Damp-rated fans for covered lanais and screened porches',
            'Wet-rated fans for open patios and pergolas',
            'High-CFM models for large great rooms and vaulted ceilings',
            'Flush-mount and downrod options for different ceiling heights',
          ],
        },
        {
          heading: 'Smart Fan Controls and Wiring',
          body:
            'Modern ceiling fans can be controlled with wall-mounted fan speed controllers, remote controls, or smart home integration through platforms like Lutron, Bond, or manufacturer Wi-Fi modules. Majors Electrical wires fan locations with the appropriate number of conductors—a separate switch leg for the fan motor and the light kit allows independent control. For existing single-switch locations, we install smart fan controllers that enable independent speed and light control without additional wiring.',
          bullets: [
            'Independent fan and light switch wiring for new installations',
            'Smart fan controllers for single-switch retrofit locations',
            'Remote control setup and programming',
            'Integration with Alexa, Google Home, and HomeKit ecosystems',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Can I install a ceiling fan where I currently have a light fixture?',
        answer:
          'Yes, but the existing junction box must be verified or replaced with a fan-rated box per NEC 314.27(C). Standard light fixture boxes are only rated for 50 pounds of static load and are not designed for the dynamic rotational forces of a ceiling fan. We inspect the existing box, and if it is not fan-rated, we install an approved fan brace or fan-rated box before mounting the fan.',
      },
      {
        question: 'What size ceiling fan do I need for my room in Sarasota?',
        answer:
          'For rooms up to 100 square feet, a 36–42 inch fan is appropriate. Rooms between 100 and 225 square feet work well with a 44–52 inch fan. Larger rooms over 225 square feet benefit from a 54–72 inch fan or multiple fans. In Sarasota\'s warm climate, erring on the larger side delivers better cooling performance. We recommend specific models based on your room dimensions and ceiling height.',
      },
      {
        question: 'Do I need a special fan for my screened lanai in Sarasota?',
        answer:
          'Yes. Fans installed under covered outdoor areas like screened lanais must be damp-rated at minimum. If the fan will be exposed to direct rain—such as under a pergola or open patio—it must be wet-rated. Damp-rated and wet-rated fans use sealed motors and corrosion-resistant hardware designed for humidity and moisture exposure common in Florida\'s outdoor living spaces.',
      },
      {
        question: 'How much does ceiling fan installation cost in Sarasota?',
        answer:
          'Installing a ceiling fan in an existing location with a fan-rated box typically costs $150 to $275, not including the fan itself. If a new fan-rated box and support bracing are needed, add $75 to $150. For a brand-new location with no existing wiring, the cost is $350 to $600 depending on attic access and the length of the circuit run. We provide an exact quote before starting.',
      },
      {
        question: 'Can my ceiling fan run in reverse during winter?',
        answer:
          'Yes, and it should. Most ceiling fans have a reverse switch that changes the blade direction. In summer, blades should spin counterclockwise (pushing air down for a cooling breeze). In Florida\'s mild winters, switching to clockwise at low speed gently recirculates warm air that rises to the ceiling without creating a noticeable draft, reducing heating costs.',
      },
    ],
    relatedServices: ['interior-lighting', 'smart-switches', 'residential', 'home-remodels'],
    galleryImages: [
      { src: '/gallery/ceiling-fan-living-room.webp', alt: 'Large ceiling fan installed in a Sarasota living room with vaulted ceiling', caption: '72-inch ceiling fan in a great room with vaulted ceiling' },
      { src: '/gallery/ceiling-fan-lanai.webp', alt: 'Damp-rated ceiling fan installed on a screened lanai in Sarasota', caption: 'Damp-rated fan installation on a screened lanai' },
      { src: '/gallery/ceiling-fan-fan-box.webp', alt: 'Fan-rated junction box installed in ceiling framing', caption: 'Fan-rated support brace and junction box installation' },
      { src: '/gallery/ceiling-fan-smart-control.webp', alt: 'Smart ceiling fan wall control in a Sarasota bedroom', caption: 'Smart fan controller with speed and light dimming' },
      { src: '/gallery/residential-ceiling-fan-install.webp', alt: 'Electrician installing a ceiling fan in a Sarasota home', caption: 'Professional ceiling fan installation in Sarasota' },
    ],
  },

  'whole-home-rewire': {
    content: {
      intro:
        'A whole-home rewire replaces all of the branch circuit wiring in your Sarasota home—from the panel to every outlet, switch, and fixture—with modern, code-compliant conductors and devices. This is the definitive solution for homes with knob-and-tube wiring, cloth-insulated cables, aluminum branch wiring, or any wiring that has deteriorated beyond repair in Florida\'s demanding climate of heat, humidity, and pest intrusion.',
      sections: [
        {
          heading: 'When Your Sarasota Home Needs a Rewire',
          body:
            'Homes built before 1970 are the most common candidates for whole-home rewiring, but Florida\'s heat and humidity can degrade wiring in newer homes as well. Cloth-insulated wiring becomes brittle and cracks, exposing bare conductors. Aluminum branch wiring (1965–1975) develops high-resistance connections at devices that overheat. Knob-and-tube wiring lacks a grounding conductor entirely. Even NM-B (Romex) cable from the 1980s can develop insulation damage from attic temperatures that routinely exceed 140°F in Sarasota summers.',
          bullets: [
            'Cloth-insulated wiring with cracked or deteriorated insulation',
            'Aluminum branch circuit wiring with known overheating risks',
            'Knob-and-tube wiring with no grounding conductor',
            'Heat-damaged NM-B insulation from attic exposure above 140°F',
            'Rodent or pest damage to wire insulation in attics and crawlspaces',
          ],
        },
        {
          heading: 'The Rewiring Process',
          body:
            'A whole-home rewire is a significant project that typically takes three to five days for an average Sarasota home. We begin by installing a new panel (if not already upgraded), then systematically replace every branch circuit—running new NM-B cable through the attic and wall cavities, installing new outlets, switches, and junction boxes, and connecting everything to the new panel. We use minimally invasive techniques to limit drywall damage, accessing wall cavities from the attic whenever possible.',
          bullets: [
            'New NM-B copper wiring throughout the entire home',
            'Minimally invasive techniques to reduce drywall repairs',
            'Attic-first routing to avoid unnecessary wall openings',
            'New tamper-resistant outlets and Decora switches throughout',
            'AFCI and GFCI protection on all required circuits per current NEC',
            'Complete panel labeling and circuit documentation',
          ],
        },
        {
          heading: 'Benefits Beyond Safety',
          body:
            'A rewired home isn\'t just safer—it\'s more functional and more valuable. Modern wiring supports the electrical demands of today\'s appliances, home offices, and entertainment systems without overloaded circuits or tripped breakers. It eliminates the insurance surcharges and coverage limitations that come with outdated wiring, and it adds measurable value to your property. For Sarasota homeowners planning to sell, a documented rewire is a significant selling point that removes a major buyer concern.',
          bullets: [
            'Adequate capacity for modern appliances and technology',
            'Elimination of insurance surcharges for outdated wiring',
            'Increased home resale value with documented rewire',
            'Foundation for future upgrades like EV chargers and solar',
          ],
        },
      ],
      safetyNote:
        'If you can see cloth-covered wiring, knob-and-tube insulators, or exposed bare copper in your attic or crawlspace, avoid disturbing it—damaged insulation can expose live conductors. Do not lay insulation over knob-and-tube wiring, as it can cause overheating. Call Majors Electrical for an inspection before making any changes.',
    },
    faqs: [
      {
        question: 'How much does a whole-home rewire cost in Sarasota?',
        answer:
          'A whole-home rewire for a typical 1,500–2,500 square foot Sarasota home ranges from $8,000 to $18,000, depending on the number of circuits, accessibility of walls and attic spaces, and whether the panel also needs upgrading. Larger homes, multi-story homes, and homes with limited attic access will be at the higher end. We provide a detailed estimate after walking through your home.',
      },
      {
        question: 'How long does a whole-home rewire take?',
        answer:
          'Most residential rewires take three to five working days for the electrical work, not including any drywall repair and painting needed afterward. We coordinate with drywall contractors if needed and try to minimize the number of wall penetrations by routing as much wiring as possible through the attic. Your power will be off during each day\'s work and restored each evening.',
      },
      {
        question: 'Does my home insurance require a rewire if I have aluminum wiring?',
        answer:
          'Many Florida insurance carriers charge higher premiums or decline coverage for homes with aluminum branch circuit wiring. Some will accept a remediation approach using approved connectors (COPALUM or AlumiConn) at every connection point, while others require a full rewire. Majors Electrical can evaluate your wiring and help you understand the most cost-effective path to satisfying your insurer.',
      },
      {
        question: 'Can I live in my home during a rewire?',
        answer:
          'Yes. We work room by room, restoring power to completed areas each day. There will be some dust and noise, and certain rooms may be temporarily inaccessible during their rewiring phase. The kitchen and bathroom circuits are typically prioritized to minimize disruption to daily routines. Most families stay in their home during the process without significant inconvenience.',
      },
    ],
    relatedServices: ['panel-upgrades', 'residential', 'safety-inspections', 'arc-fault-breakers'],
    galleryImages: [
      { src: '/gallery/rewire-attic-wiring.webp', alt: 'New NM-B wiring being run through a Sarasota attic during a rewire', caption: 'New NM-B cable runs through the attic space' },
      { src: '/gallery/rewire-old-wiring-removal.webp', alt: 'Deteriorated cloth-insulated wiring removed from a Sarasota home', caption: 'Removing deteriorated cloth-insulated wiring' },
      { src: '/gallery/rewire-new-panel-connection.webp', alt: 'New circuits terminated at a modern panel during a Sarasota home rewire', caption: 'All new circuits terminated at a modern 200A panel' },
      { src: '/gallery/rewire-new-outlets.webp', alt: 'New tamper-resistant outlets installed during a Sarasota whole-home rewire', caption: 'New tamper-resistant outlets throughout the home' },
      { src: '/gallery/electrical-panel-upgrade.webp', alt: 'Panel upgrade completed as part of a whole-home rewire in Sarasota', caption: 'Panel upgrade paired with a complete rewire' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a whole-home rewire project in Sarasota', caption: 'Whole-home rewire services in Sarasota' },
    ],
  },

  'appliance-circuits': {
    content: {
      intro:
        'Modern kitchen appliances, HVAC equipment, workshop tools, and EV chargers each require their own dedicated circuit to operate safely and efficiently—sharing a circuit leads to tripped breakers, voltage drops that damage motors, and potential fire hazards from overloaded wiring. Majors Electrical installs dedicated appliance circuits throughout Sarasota homes, properly sized with the correct breaker, wire gauge, and receptacle type for each specific appliance per NEC requirements.',
      sections: [
        {
          heading: 'Why Dedicated Circuits Are Required',
          body:
            'The NEC requires dedicated circuits for many fixed appliances and high-draw equipment to prevent circuit overloading. NEC 210.23 limits the load on a branch circuit based on its ampere rating—a single heavy appliance on a shared circuit can exceed this limit, causing the breaker to trip or, worse, overheating the wiring without tripping a breaker. Common appliances requiring dedicated circuits include refrigerators, dishwashers, garbage disposals, microwaves, electric ranges, dryers, washers, HVAC equipment, and EV chargers.',
          bullets: [
            'Refrigerator: dedicated 20A/120V circuit per NEC 210.52(B)',
            'Dishwasher: dedicated 20A/120V circuit',
            'Electric range/oven: dedicated 40A or 50A/240V circuit',
            'Dryer: dedicated 30A/240V circuit per NEC 210.23',
            'EV charger: dedicated 40A or 50A/240V circuit per NEC 625',
          ],
        },
        {
          heading: 'How We Install Dedicated Circuits',
          body:
            'Installing a dedicated circuit involves running new wire from your electrical panel to the appliance location, installing the appropriately rated breaker, and terminating at the correct receptacle or hardwired connection. In existing homes, the cable route typically runs through the attic or crawlspace and down through the wall cavity. Majors Electrical uses minimally invasive techniques and fish tape to route wiring without unnecessary drywall cuts.',
          bullets: [
            'New home run from panel to appliance location',
            'Correct breaker size and type for the appliance load',
            'Proper receptacle configuration (NEMA 6-20, 10-30, 14-30, etc.)',
            'Minimally invasive wire routing through attic and wall cavities',
            'Circuit labeling at the panel for easy identification',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Which appliances need a dedicated circuit in my Sarasota home?',
        answer:
          'The NEC requires dedicated circuits for refrigerators, dishwashers, garbage disposals, microwaves, electric ranges, dryers, washers, bathroom heaters, HVAC equipment, garage door openers, sump pumps, and EV chargers. Any appliance with a motor or heating element that draws significant current should have its own circuit to prevent overloading and nuisance breaker trips.',
      },
      {
        question: 'How much does it cost to add a dedicated circuit in Sarasota?',
        answer:
          'A single dedicated 120V/20A circuit typically costs $250 to $450, depending on the distance from the panel to the appliance and the accessibility of the wire route. A 240V circuit for a dryer, range, or EV charger costs $400 to $700 due to the heavier gauge wire and higher-rated breaker required. We provide an exact quote after evaluating the specific route.',
      },
      {
        question: 'Can my existing panel accommodate additional circuits?',
        answer:
          'It depends on two factors: available breaker spaces and remaining electrical capacity. If your panel has open breaker slots and the load calculation per NEC Article 220 shows sufficient remaining amperage, we can add circuits immediately. If the panel is full but has capacity, we may be able to use tandem breakers where allowed. If the panel lacks capacity, a panel upgrade may be needed before adding circuits.',
      },
      {
        question: 'Why does my microwave keep tripping the breaker?',
        answer:
          'Most microwaves draw 12–15 amps, which is a significant load on a shared 15-amp or 20-amp circuit. If the microwave shares a circuit with other kitchen outlets, running the microwave while something else is plugged in can exceed the circuit\'s capacity. The solution is a dedicated 20-amp circuit for the microwave, which the NEC recommends as part of the kitchen small-appliance circuit requirements.',
      },
    ],
    relatedServices: ['panel-upgrades', 'home-remodels', 'residential', 'ev-charging'],
    galleryImages: [
      { src: '/gallery/appliance-circuit-panel.webp', alt: 'New dedicated appliance circuit breakers installed in a Sarasota panel', caption: 'Dedicated breakers for kitchen appliance circuits' },
      { src: '/gallery/appliance-circuit-range.webp', alt: 'Dedicated 50-amp circuit for an electric range in a Sarasota kitchen', caption: '50A/240V dedicated circuit for an electric range' },
      { src: '/gallery/appliance-circuit-ev-charger.webp', alt: 'Dedicated EV charger circuit installation in a Sarasota garage', caption: 'Dedicated 50A circuit for a Level 2 EV charger' },
      { src: '/gallery/appliance-circuit-laundry.webp', alt: 'Dedicated laundry circuits for washer and dryer in a Sarasota home', caption: 'Dedicated washer and dryer circuits in a laundry room' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an appliance circuit installation', caption: 'Dedicated appliance circuit services in Sarasota' },
    ],
  },

  'generators': {
    content: {
      intro:
        'Living on Florida\'s Gulf Coast means hurricane season is a reality every year from June through November—and extended power outages are the most disruptive consequence for Sarasota families. Majors Electrical installs whole-home standby generators that start automatically within seconds of a power failure, keeping your air conditioning, refrigerator, medical equipment, and security systems running through any storm. From compact 14kW units for essential circuits to 26kW+ whole-home systems, we handle every aspect of generator installation in the Sarasota area.',
      sections: [
        {
          heading: 'Why Sarasota Homes Need Standby Generators',
          body:
            'Sarasota sits in a high-risk hurricane zone, and FPL outages after major storms can last days to weeks depending on the severity of infrastructure damage. Unlike portable generators—which require manual setup, refueling, and present carbon monoxide risks—a whole-home standby generator is permanently installed on a concrete pad outside your home and connected through an automatic transfer switch (ATS) that senses a power loss and starts the generator within 10 to 30 seconds, without any action from you. This is especially critical for homes with medical equipment, elderly occupants, or home-based businesses.',
          bullets: [
            'Automatic start within 10–30 seconds of power loss—no manual action needed',
            'Permanent outdoor installation on a hurricane-rated concrete pad',
            'Natural gas or propane fuel eliminates gasoline storage and refueling',
            'Automatic transfer switch (ATS) provides seamless switchover and return',
            'Carbon monoxide-free operation with proper outdoor placement',
          ],
        },
        {
          heading: 'Generator Sizing and Selection',
          body:
            'Proper generator sizing begins with an NEC Article 220 load calculation to determine your home\'s electrical demand. A 14kW generator powers essential circuits—air conditioning, refrigerator, lights, and outlets. A 22kW generator handles most whole-home needs including a standard central AC system. Homes with multiple AC units, pool equipment, or electric cooking appliances may require a 24kW to 26kW unit or a managed system with load shedding. Majors Electrical installs Generac, Kohler, and Cummins generators based on your needs and budget.',
          bullets: [
            '14kW: essential circuits—AC, fridge, lights, and select outlets',
            '22kW: whole-home coverage for most Sarasota homes',
            '24kW–26kW+: large homes with multiple AC zones and heavy loads',
            'Load-managed systems that prioritize critical circuits automatically',
            'Generac, Kohler, and Cummins brands with nationwide warranty support',
          ],
        },
        {
          heading: 'Installation and Permitting',
          body:
            'Generator installation involves pouring a level concrete pad, setting the unit with proper clearances from the home and property lines, running a fuel line (natural gas from TECO or a propane tank installation), installing the automatic transfer switch at your main panel, and running power conductors between the generator and ATS. Sarasota County requires both an electrical permit and a mechanical/fuel permit for generator installations. Majors Electrical manages the complete installation, including permit acquisition, fuel line coordination, and final inspections.',
          bullets: [
            'Concrete pad with proper setback from home and property lines',
            'Automatic transfer switch installation at the main electrical panel',
            'Natural gas line coordination with TECO Peoples Gas',
            'Propane tank sizing and installation coordination',
            'Sarasota County electrical and mechanical permit management',
            'Start-up testing, homeowner training, and warranty registration',
          ],
        },
      ],
      safetyNote:
        'Never operate a portable generator indoors, in a garage, or near windows or doors. Carbon monoxide from generator exhaust is odorless and can be lethal within minutes. If you must use a portable generator during a storm, place it at least 20 feet from your home with the exhaust directed away from all openings. A permanently installed standby generator with proper outdoor placement eliminates this risk entirely.',
    },
    faqs: [
      {
        question: 'How much does a whole-home generator cost in Sarasota?',
        answer:
          'A complete standby generator installation in Sarasota—including the generator, concrete pad, automatic transfer switch, fuel line, electrical connections, and permits—typically ranges from $8,000 to $18,000. A 14kW essential-circuit system starts around $8,000, while a 22kW whole-home system averages $12,000 to $15,000. Larger systems and natural gas line extensions can exceed $18,000. We provide a detailed proposal after an on-site assessment.',
      },
      {
        question: 'Should I get a natural gas or propane generator in Sarasota?',
        answer:
          'If your home has natural gas service from TECO Peoples Gas, a natural gas generator is typically the best choice—it provides unlimited fuel supply without a storage tank. If natural gas is not available at your location, a propane generator with a 250–500 gallon tank is the standard alternative. Propane stores indefinitely without degradation, making it reliable for hurricane season. We help you choose based on your home\'s existing utilities.',
      },
      {
        question: 'How long does a generator installation take in Sarasota?',
        answer:
          'The installation itself takes one to two days once all permits and the concrete pad are in place. However, the total timeline from proposal to commissioning is typically three to six weeks, accounting for permit processing with Sarasota County, concrete pad preparation, fuel line installation by a plumber or gas company, and equipment delivery. We recommend starting the process before hurricane season begins in June.',
      },
      {
        question: 'Does a standby generator require maintenance?',
        answer:
          'Yes. Manufacturers recommend an annual maintenance visit that includes oil and filter changes, spark plug inspection, battery testing, air filter replacement, and a load-bank test to verify full-power operation. The generator also runs a brief weekly self-test (typically 15 minutes) to keep the engine lubricated and the battery charged. Majors Electrical offers maintenance contracts to keep your generator ready when you need it most.',
      },
      {
        question: 'Can a generator power my whole house including air conditioning?',
        answer:
          'A 22kW generator can power most Sarasota homes including one central AC system, which is critical for comfort and safety during extended summer outages. Homes with two or more AC units may need a larger generator or a load-management system that cycles between units. We size every generator based on a detailed load calculation that includes all of your critical equipment.',
      },
    ],
    relatedServices: ['panel-upgrades', 'surge-protection', 'emergency-service', 'battery-systems'],
    galleryImages: [
      { src: '/gallery/generator-install-sarasota.webp', alt: 'Whole-home standby generator installed on a concrete pad in Sarasota', caption: '22kW Generac generator on a hurricane-rated pad' },
      { src: '/gallery/generator-transfer-switch.webp', alt: 'Automatic transfer switch installed next to a main panel in Sarasota', caption: 'Automatic transfer switch at the main panel' },
      { src: '/gallery/generator-fuel-line.webp', alt: 'Natural gas line connection to a standby generator in Sarasota', caption: 'Natural gas line connection from TECO service' },
      { src: '/gallery/generator-concrete-pad.webp', alt: 'Generator concrete pad being poured at a Sarasota home', caption: 'Level concrete pad with proper setback clearances' },
      { src: '/gallery/electrical-panel-upgrade.webp', alt: 'Panel with generator transfer switch in a Sarasota home', caption: 'Panel integration with generator transfer switch' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a generator installation in Sarasota', caption: 'Generator installation services throughout Sarasota County' },
    ],
  },

  'surge-protection': {
    content: {
      intro:
        'Florida is the lightning capital of the United States, and the Sarasota–Tampa Bay corridor experiences more cloud-to-ground lightning strikes per square mile than almost anywhere else in the country. A single nearby lightning strike can send thousands of volts through your home\'s wiring, destroying electronics, appliances, HVAC control boards, and even starting fires. Majors Electrical installs whole-home surge protection devices (SPDs) that guard your entire electrical system at the panel, combined with point-of-use protection for your most sensitive equipment.',
      sections: [
        {
          heading: 'Why Whole-Home Surge Protection Is Essential in Sarasota',
          body:
            'Surge damage in Florida isn\'t a question of if—it\'s a question of when. Lightning doesn\'t need to strike your home directly; a strike on a nearby power line, transformer, or even the ground can induce a surge that travels through your wiring and damages anything connected to it. Modern electronics with microprocessors—TVs, computers, HVAC control boards, smart appliances, and garage door openers—are particularly vulnerable because their delicate circuits cannot tolerate voltage spikes. NEC 230.67 now requires Type 1 or Type 2 surge protection on all new dwelling unit services, recognizing the critical importance of this protection.',
          bullets: [
            'Florida averages 1.4 million lightning strikes per year',
            'Surges can enter through power lines, phone lines, and coaxial cable',
            'Modern electronics are far more vulnerable than older appliances',
            'A single surge can destroy $5,000–$15,000 worth of equipment',
            'NEC 230.67 requires surge protection on all new residential services',
          ],
        },
        {
          heading: 'How Whole-Home Surge Protection Works',
          body:
            'A whole-home surge protection device (SPD) installs directly at your electrical panel—typically as a dedicated two-pole breaker connection. When a voltage spike exceeds the normal 120/240V supply, the SPD diverts the excess energy to the grounding system in nanoseconds, preventing it from reaching your branch circuits and connected equipment. Quality SPDs are rated in kiloamps (kA) of surge current capacity; for Sarasota\'s lightning-prone environment, we install units rated at 50kA or higher with indicator lights that confirm operational status.',
          bullets: [
            'Type 2 SPD installed at the main panel for whole-home coverage',
            'Response time measured in nanoseconds—faster than lightning damage propagation',
            'Minimum 50kA surge current rating for Florida lightning conditions',
            'LED status indicators to verify the device is operational',
            'Connected to a dedicated two-pole breaker in the panel',
          ],
        },
        {
          heading: 'Layered Surge Protection Strategy',
          body:
            'For maximum protection, we recommend a layered approach: a whole-home SPD at the panel (Type 2) combined with point-of-use surge protectors at your most valuable electronics (Type 3). The panel-mounted SPD handles the large, high-energy surges from lightning and utility switching events, while point-of-use protectors handle smaller, repetitive surges from within the home—such as HVAC compressors cycling on and off. This two-tier strategy provides the most comprehensive surge protection available.',
          bullets: [
            'Type 2 SPD at the panel for primary lightning and utility surge protection',
            'Type 3 point-of-use protectors for sensitive electronics and home theaters',
            'Coaxial and telephone line surge protectors for data and communication equipment',
            'HVAC surge protectors at the condensing unit disconnect to protect control boards',
            'Proper grounding verification—surge protection is only as effective as your ground',
          ],
        },
      ],
      safetyNote:
        'During active thunderstorms, unplug sensitive electronics if you do not have whole-home surge protection. A power strip with a surge rating is better than nothing but cannot protect against a direct or near-direct lightning strike. Only a properly installed whole-home SPD with adequate grounding provides meaningful protection against Florida-intensity lightning surges.',
    },
    faqs: [
      {
        question: 'How much does whole-home surge protection cost in Sarasota?',
        answer:
          'A quality whole-home surge protection device installed at your electrical panel typically costs $300 to $600 including the device, dedicated breaker, and installation labor. Given that a single lightning surge can destroy thousands of dollars in electronics and appliances, this is one of the highest-ROI electrical investments available to Sarasota homeowners. We include whole-home surge protection with every panel upgrade at no additional charge.',
      },
      {
        question: 'Do I still need power strips if I have whole-home surge protection?',
        answer:
          'A whole-home SPD handles the large surges that enter through your electrical service, but it cannot eliminate 100% of surge energy on every circuit. For your most sensitive and valuable electronics—home theater systems, computers, and network equipment—we recommend a layered approach with point-of-use surge protectors as a second line of defense. Together, the two layers provide maximum protection.',
      },
      {
        question: 'Does surge protection wear out over time?',
        answer:
          'Yes. Surge protection devices use metal oxide varistors (MOVs) that degrade slightly with each surge they absorb. Over time, the protection capacity diminishes. Quality SPDs include LED indicators that show whether the device is still protecting. In Sarasota\'s high-lightning environment, we recommend replacing the whole-home SPD every five to seven years or sooner if the indicator light shows the device has reached end of life.',
      },
      {
        question: 'Can surge protection prevent damage from a direct lightning strike?',
        answer:
          'No surge protector can guarantee protection from a direct lightning strike on your home, which can deliver 300 million volts. However, direct strikes are relatively rare. The vast majority of lightning damage comes from induced surges—strikes on nearby power lines, transformers, or the ground—which a properly rated whole-home SPD can handle effectively. Proper grounding is equally important, as the SPD diverts surge energy to ground.',
      },
      {
        question: 'Does my HVAC system need separate surge protection?',
        answer:
          'We strongly recommend it. HVAC condensing units contain sensitive electronic control boards that are frequently damaged by lightning surges in Sarasota—an outdoor compressor is one of the most exposed pieces of equipment on your property. We install a dedicated surge protector at the AC disconnect, protecting the control board and compressor components. Replacing an HVAC control board costs $500–$1,200, making a $150 surge protector an obvious investment.',
      },
    ],
    relatedServices: ['panel-upgrades', 'residential', 'generators', 'safety-inspections'],
    galleryImages: [
      { src: '/gallery/surge-protection-panel-spd.webp', alt: 'Whole-home surge protection device installed at a Sarasota electrical panel', caption: 'Type 2 SPD installed at the main panel' },
      { src: '/gallery/surge-protection-hvac.webp', alt: 'HVAC surge protector installed at an AC disconnect in Sarasota', caption: 'Dedicated surge protector at the AC condensing unit disconnect' },
      { src: '/gallery/surge-protection-indicator.webp', alt: 'LED status indicator on a whole-home surge protector showing green protection status', caption: 'Green LED confirms active surge protection status' },
      { src: '/gallery/electrical-panel-upgrade.webp', alt: 'Modern panel with integrated surge protection in a Sarasota home', caption: 'Panel upgrade with integrated whole-home surge protection' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a surge protection installation in Sarasota', caption: 'Surge protection services throughout Sarasota County' },
    ],
  },

  'smoke-&-co-detectors': {
    content: {
      intro:
        'Properly installed smoke and carbon monoxide detectors are the single most effective life-safety measure in any Sarasota home. Majors Electrical installs, replaces, and interconnects hardwired smoke and CO detectors per NFPA 72 and the Florida Building Code, ensuring every bedroom, hallway, and living level in your home has the protection required by law—and the reliability your family depends on.',
      sections: [
        {
          heading: 'Florida Smoke & CO Detector Requirements',
          body:
            'The Florida Building Code adopts NFPA 72 for smoke alarm placement: detectors are required inside every sleeping room, outside each sleeping area, and on every level of the dwelling including the basement. For new construction and major remodels, these detectors must be hardwired with battery backup and interconnected so that when one alarm sounds, all alarms in the home activate simultaneously. Carbon monoxide detectors are required when the home has fuel-burning appliances, attached garages, or gas service.',
          bullets: [
            'Hardwired detectors with 10-year sealed lithium battery backup',
            'Interconnection so all alarms sound together per NFPA 72 29.5.2.1',
            'Smoke alarms inside every bedroom and outside each sleeping area',
            'CO detectors near fuel-burning appliances and attached garages',
            'Combination smoke/CO units to simplify installation and coverage',
          ],
        },
        {
          heading: 'When to Replace Your Detectors',
          body:
            'Smoke detectors have a 10-year lifespan regardless of whether they still chirp during testing—the ionization or photoelectric sensor degrades over time and becomes less responsive. CO detectors have a 5- to 7-year lifespan. If your Sarasota home still has detectors from the original construction and was built before 2014, those units are past their replacement date. Majors Electrical replaces old detectors with current dual-sensor (photoelectric + ionization) models that provide the best detection across both smoldering and fast-flaming fires.',
          bullets: [
            'Smoke alarms: replace every 10 years per NFPA 72',
            'CO alarms: replace every 5–7 years per manufacturer guidelines',
            'Dual-sensor smoke detectors for smoldering and fast-fire detection',
            'Date-of-manufacture check during every service visit',
          ],
        },
        {
          heading: 'Hardwired vs. Battery-Only Detectors',
          body:
            'Battery-only detectors are permitted in existing homes where no remodel triggers a code upgrade, but hardwired detectors with battery backup are far more reliable. Hardwired units draw constant power from a dedicated circuit and only rely on the battery during outages, eliminating the risk of a dead-battery failure. Majors Electrical can retrofit hardwired, interconnected detectors into existing homes by running wiring through attic space, often without opening walls.',
          bullets: [
            'Hardwired detectors with battery backup for maximum reliability',
            'Attic-access retrofit wiring to avoid opening finished walls',
            'Wireless interconnect options for homes where wiring is impractical',
            'Dedicated circuit for detector power per best practice',
          ],
        },
      ],
      safetyNote:
        'Test your smoke and CO detectors monthly by pressing the test button. If a detector chirps intermittently, replace the battery immediately. If it is older than 10 years, replace the entire unit—sensors degrade even if the alarm still sounds during testing.',
    },
    faqs: [
      {
        question: 'How many smoke detectors does my Sarasota home need?',
        answer:
          'NFPA 72 requires a smoke alarm inside every sleeping room, outside each separate sleeping area (hallway), and on every level of the home. A typical three-bedroom, two-story Sarasota home needs a minimum of five to seven smoke alarms. We assess your specific floor plan and ensure placement meets code while covering any additional areas recommended by NFPA for optimal detection.',
      },
      {
        question: 'Are carbon monoxide detectors required in Florida homes?',
        answer:
          'The Florida Building Code requires CO detectors in homes with fuel-burning appliances (gas water heaters, furnaces, or ranges) or attached garages. Even if your home is all-electric, we recommend CO detectors near attached garages since vehicle exhaust is a common source of carbon monoxide in residential settings. Combination smoke/CO detectors simplify compliance.',
      },
      {
        question: 'Can you add hardwired smoke detectors to an older Sarasota home without ripping out walls?',
        answer:
          'In most cases, yes. If your home has attic access above the detector locations, we run interconnect wiring through the attic and drop connections down to each ceiling-mounted detector. For single-story slab homes without attic access, we use wireless-interconnect smoke detectors that communicate via radio frequency, providing the same whole-home alarm activation without any wiring between units.',
      },
      {
        question: 'What type of smoke detector is best—ionization or photoelectric?',
        answer:
          'Each type excels at detecting different fire types: ionization detectors respond faster to fast-flaming fires, while photoelectric detectors are quicker to sense smoldering fires. We install dual-sensor detectors that combine both technologies in a single unit, providing comprehensive protection against all fire types as recommended by the National Fire Protection Association.',
      },
      {
        question: 'Do I need to replace smoke detectors when selling my Sarasota home?',
        answer:
          'Florida law requires that all smoke alarms in a home be functional at the time of sale. Buyers and inspectors check manufacture dates, and detectors older than 10 years will be flagged. Replacing detectors before listing avoids inspection issues and demonstrates that the home\'s safety systems are current.',
      },
    ],
    relatedServices: ['safety-inspections', 'arc-fault-breakers', 'residential', 'surge-protection'],
    galleryImages: [
      { src: '/gallery/smoke-detector-hardwired-install.webp', alt: 'Hardwired smoke detector installed on a ceiling in a Sarasota home', caption: 'Hardwired smoke detector with sealed lithium backup battery' },
      { src: '/gallery/smoke-co-combo-detector.webp', alt: 'Combination smoke and CO detector mounted in a Sarasota hallway', caption: 'Dual smoke/CO detector outside sleeping area per NFPA 72' },
      { src: '/gallery/smoke-detector-interconnect-wiring.webp', alt: 'Interconnect wiring for smoke detectors in a Sarasota attic', caption: 'Attic interconnect wiring for whole-home alarm activation' },
      { src: '/gallery/smoke-detector-replacement.webp', alt: 'Electrician replacing an expired smoke detector in a Sarasota home', caption: 'Replacing a 12-year-old detector past its expiration date' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a smoke detector installation project', caption: 'Smoke and CO detector services throughout Sarasota' },
    ],
  },

  'safety-inspections': {
    content: {
      intro:
        'Electrical safety inspections protect your Sarasota property, satisfy insurance requirements, and give you peace of mind that your wiring, panel, and safety devices are functioning correctly. Majors Electrical performs comprehensive electrical inspections for homeowners, buyers, sellers, and insurance companies—including the electrical portion of Florida\'s four-point inspection required by many insurers for homes 25 years and older.',
      sections: [
        {
          heading: 'Four-Point Inspections for Florida Insurance',
          body:
            'Many Florida insurance carriers require a four-point inspection before issuing or renewing a homeowner\'s policy on homes older than 25–30 years. The four systems inspected are HVAC, plumbing, roofing, and electrical. The electrical portion evaluates the service entrance, panel brand and condition, wiring type (copper, aluminum, or cloth), overcurrent protection, and the presence of GFCI/AFCI devices. Majors Electrical provides the electrical findings in the format insurance underwriters accept, including photographs and a clear pass/fail assessment.',
          bullets: [
            'Panel brand identification (Federal Pacific, Zinsco, and other recalled brands flagged)',
            'Wiring type assessment—copper, aluminum branch, cloth-insulated',
            'Overcurrent protection evaluation (breakers vs. fuses)',
            'GFCI protection verification in kitchens, baths, and exterior areas',
            'Service entrance and meter base condition documentation',
          ],
        },
        {
          heading: 'Pre-Purchase and Pre-Sale Electrical Inspections',
          body:
            'Buying or selling a Sarasota home? An electrical inspection identifies issues that a general home inspector may overlook—undersized wiring, improperly wired sub-panels, missing bonding, double-tapped breakers, and code violations hidden behind finished walls. Our detailed inspection report gives buyers negotiating leverage and gives sellers the opportunity to address issues before listing, avoiding last-minute deal complications.',
          bullets: [
            'Panel interior inspection with cover removed',
            'Circuit testing for proper polarity, grounding, and GFCI function',
            'Aluminum wiring identification and remediation recommendations',
            'Load calculation to verify the panel can support current usage',
            'Detailed written report with photographs and recommendations',
          ],
        },
        {
          heading: 'Annual Electrical Safety Checks',
          body:
            'Even if your home isn\'t being bought, sold, or insured, an annual electrical safety check catches developing problems before they become hazardous. Florida\'s heat, humidity, and lightning activity degrade electrical connections faster than in most other states. Our annual check includes thermal imaging of the panel, torque verification on connections, smoke detector testing, and a visual inspection of all accessible wiring and devices.',
          bullets: [
            'Thermal imaging to detect hot connections in the panel',
            'Torque verification on breaker lugs and neutral/ground bars',
            'Smoke and CO detector function testing and age verification',
            'Grounding electrode system integrity check',
            'Surge protection device status verification',
          ],
        },
      ],
      safetyNote:
        'If your insurance company has requested a four-point inspection and your home has a Federal Pacific, Zinsco, or Sylvania-branded panel, be prepared for a panel replacement requirement. These panels have documented failure rates and most Florida insurers will not write a policy until they are replaced.',
    },
    faqs: [
      {
        question: 'What is a four-point inspection and why does my Florida insurer require it?',
        answer:
          'A four-point inspection evaluates your home\'s four major systems—electrical, HVAC, plumbing, and roofing—to assess their condition and remaining useful life. Florida insurers require it for homes typically 25 years or older because these systems are more likely to have age-related failures that could cause claims. The electrical portion focuses on the panel, wiring type, and safety devices.',
      },
      {
        question: 'How much does an electrical safety inspection cost in Sarasota?',
        answer:
          'A standalone electrical inspection for a typical Sarasota single-family home ranges from $150 to $350 depending on the home\'s size and the scope of the inspection. A four-point electrical evaluation as part of a full four-point inspection is typically $75 to $150 for the electrical portion. We provide a detailed written report with photographs suitable for insurance submission.',
      },
      {
        question: 'Will a safety inspection fail my home if it has aluminum wiring?',
        answer:
          'Aluminum branch circuit wiring (common in homes built between 1965 and 1975) does not automatically fail an inspection, but it will be noted as a concern. Insurance companies may require remediation—typically COPALUM or AlumiConn connectors at every connection point—before issuing a policy. Majors Electrical performs aluminum wiring remediation and provides documentation that satisfies insurance underwriters.',
      },
      {
        question: 'How often should I have my home\'s electrical system inspected?',
        answer:
          'We recommend an annual inspection for all homes, with particular urgency for homes over 30 years old, homes with aluminum wiring, or homes that have undergone multiple renovations where DIY wiring may be present. Annual inspections are also advisable after any major weather event, especially hurricanes or nearby lightning strikes.',
      },
      {
        question: 'What panels will cause my Sarasota home to fail an insurance inspection?',
        answer:
          'Federal Pacific Electric (FPE/Stab-Lok), Zinsco, and certain Sylvania-branded panels are the most commonly rejected brands by Florida insurers due to documented breaker failure rates. If your home has one of these panels, most insurers will require replacement before issuing or renewing your policy. Majors Electrical specializes in these panel replacements and provides the updated documentation your insurer needs.',
      },
    ],
    relatedServices: ['panel-upgrades', 'smoke-&-co-detectors', 'maintenance', 'whole-home-rewire'],
    galleryImages: [
      { src: '/gallery/inspection-panel-interior.webp', alt: 'Electrical panel interior during a safety inspection in Sarasota', caption: 'Panel interior inspection with cover removed' },
      { src: '/gallery/inspection-thermal-imaging.webp', alt: 'Thermal camera image of an electrical panel showing hot connections', caption: 'Infrared scan identifies overheating connections' },
      { src: '/gallery/inspection-outlet-testing.webp', alt: 'Electrician testing outlet polarity and grounding during a Sarasota home inspection', caption: 'Circuit testing for proper wiring and GFCI function' },
      { src: '/gallery/inspection-written-report.webp', alt: 'Detailed electrical inspection report with photographs', caption: 'Comprehensive inspection report for insurance or buyer review' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van arriving for a safety inspection', caption: 'Electrical safety inspection services in Sarasota' },
    ],
  },

  'arc-fault-breakers': {
    content: {
      intro:
        'Arc fault circuit interrupter (AFCI) breakers are one of the most important electrical safety advances of the past two decades, detecting dangerous arcing conditions in wiring that standard breakers cannot sense. Majors Electrical installs AFCI breakers throughout Sarasota homes to meet NEC 210.12 requirements, protect against electrical fires caused by damaged wiring, and bring older homes up to current safety standards.',
      sections: [
        {
          heading: 'What AFCI Breakers Protect Against',
          body:
            'Standard circuit breakers only trip on overcurrent and short-circuit faults. They cannot detect series arc faults—the type of arcing that occurs when a wire is damaged by a nail, pinched by furniture, or degraded by age and heat. These low-level arcs generate intense heat at the fault point and are responsible for thousands of home electrical fires each year. AFCI breakers use electronic monitoring to detect the unique signature of an arcing fault and trip the circuit before ignition can occur.',
          bullets: [
            'Detects series and parallel arc faults that standard breakers miss',
            'Protects against fires from damaged, pinched, or deteriorated wiring',
            'Electronic waveform analysis distinguishes hazardous arcs from normal operation',
            'Required by NEC 210.12 in all habitable rooms for new installations',
            'Available as combination AFCI/GFCI breakers for dual protection',
          ],
        },
        {
          heading: 'NEC 210.12 AFCI Requirements',
          body:
            'NEC 210.12 requires AFCI protection on all 120-volt, 15- and 20-amp branch circuits supplying outlets and devices in kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms. In practical terms, nearly every circuit in a modern home requires AFCI protection. Majors Electrical ensures your home meets these requirements whether you are building new, remodeling, or proactively upgrading an older home.',
          bullets: [
            'Required in bedrooms since NEC 1999 edition',
            'Expanded to all habitable rooms in NEC 2014 and later editions',
            'Florida Building Code adopts current NEC AFCI requirements',
            'Triggered by any new circuit or panel replacement project',
            'Combination AFCI breakers protect entire branch circuit from panel to outlets',
          ],
        },
        {
          heading: 'Retrofitting AFCI Protection in Older Homes',
          body:
            'Older Sarasota homes were built before AFCI requirements existed, but that doesn\'t mean they can\'t benefit from this protection. Majors Electrical retrofits AFCI breakers into existing panels to provide fire-preventing arc detection on circuits that were originally wired without it. We test each circuit after installation to ensure compatibility with your existing wiring—older wiring with degraded insulation or improper splices may initially cause nuisance tripping, which we diagnose and resolve.',
          bullets: [
            'AFCI breaker retrofit into existing compatible panels',
            'Post-installation circuit testing for compatibility',
            'Diagnosis and correction of nuisance tripping causes',
            'Combination AFCI/GFCI breakers where both protections are needed',
          ],
        },
      ],
      safetyNote:
        'If an AFCI breaker trips repeatedly, do not simply replace it with a standard breaker to stop the tripping. The AFCI is detecting a real arcing condition in the circuit that could cause a fire. Call a licensed electrician to locate and repair the arc fault.',
    },
    faqs: [
      {
        question: 'What rooms require AFCI breakers under current NEC code?',
        answer:
          'NEC 210.12 requires AFCI protection on all 120V, 15A and 20A branch circuits supplying outlets or devices in kitchens, family rooms, dining rooms, living rooms, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar habitable spaces. Essentially, every room except bathrooms, garages, and unfinished basements requires AFCI protection under the current code as adopted by Florida.',
      },
      {
        question: 'Can AFCI breakers be installed in my existing electrical panel?',
        answer:
          'AFCI breakers are available for most modern panel brands including Square D, Eaton, Siemens, and GE. They fit in the same slot as a standard breaker but include an electronic monitoring module and a neutral pigtail that connects to the panel\'s neutral bar. If your panel is a Federal Pacific or Zinsco brand, AFCI breakers are not available—a panel replacement would be needed first.',
      },
      {
        question: 'Why does my AFCI breaker keep tripping?',
        answer:
          'Repeated AFCI tripping indicates the breaker is detecting an arcing condition somewhere on the circuit. Common causes include damaged wire insulation (often from nails or staples hitting cable in the wall), loose connections at outlets or switches, or incompatible devices like some older vacuum motors or dimmer switches. Majors Electrical uses specialized diagnostic equipment to locate the arc fault source and repair it.',
      },
      {
        question: 'What is the difference between AFCI and GFCI protection?',
        answer:
          'AFCI (arc fault) breakers protect against fire by detecting dangerous arcing in wiring. GFCI (ground fault) devices protect against shock by detecting current leaking to ground through a person or water. They protect against different hazards, and both are required in modern homes—AFCI in habitable rooms and GFCI in wet locations. Combination AFCI/GFCI breakers provide both protections on a single circuit.',
      },
    ],
    relatedServices: ['panel-upgrades', 'smoke-&-co-detectors', 'safety-inspections', 'whole-home-rewire'],
    galleryImages: [
      { src: '/gallery/afci-breaker-installation.webp', alt: 'AFCI breaker being installed in a residential panel in Sarasota', caption: 'Combination AFCI breaker installation in a 200A panel' },
      { src: '/gallery/afci-panel-upgrade.webp', alt: 'Electrical panel with AFCI breakers installed on all habitable room circuits', caption: 'Full AFCI protection on all habitable room circuits' },
      { src: '/gallery/afci-testing-device.webp', alt: 'Electrician testing AFCI breaker function with diagnostic equipment', caption: 'Post-installation AFCI function verification testing' },
      { src: '/gallery/afci-wiring-diagnosis.webp', alt: 'Diagnosing arc fault source in wall wiring at a Sarasota home', caption: 'Locating a damaged cable causing AFCI trips' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an AFCI installation project', caption: 'AFCI breaker installation services in Sarasota' },
    ],
  },

  'recessed-lighting': {
    content: {
      intro:
        'Recessed lighting delivers clean, modern illumination that transforms any room in your Sarasota home without the visual clutter of protruding fixtures. Majors Electrical designs and installs recessed LED lighting layouts—including wafer-thin fixtures, gimbal adjustable trims, and wet-rated shower lights—with precision spacing and proper dimming controls that create the exact ambiance you envision.',
      sections: [
        {
          heading: 'Recessed Lighting Layout and Design',
          body:
            'Proper recessed lighting starts with layout planning. Spacing that is too wide creates dark spots; spacing that is too tight wastes energy and creates an overlit, sterile look. Our standard approach for eight-foot ceilings uses six-inch fixtures spaced four to five feet apart, with the first row two to three feet from the wall to wash vertical surfaces with light. We adjust spacing, beam angle, and fixture count based on your ceiling height, room dimensions, and the activities the room supports.',
          bullets: [
            'Photometric layout based on room dimensions and ceiling height',
            'Four- to six-inch fixture sizing matched to room scale',
            'Wall wash positioning to illuminate vertical surfaces and artwork',
            'Task-specific placement over kitchen counters, reading areas, and vanities',
            'Layered with accent and decorative fixtures for visual depth',
          ],
        },
        {
          heading: 'LED Wafer Lights vs. Traditional Can Lights',
          body:
            'Modern LED wafer lights (also called slim or ultra-thin recessed lights) have largely replaced traditional recessed cans. Wafer fixtures are only half an inch thick and mount directly to the ceiling with a junction box—no bulky housing needed. This makes them ideal for Sarasota homes with shallow attic space, insulated ceilings, or rooms below a second floor where traditional cans won\'t fit. Majors Electrical installs both types and recommends the best option for your ceiling construction.',
          bullets: [
            'Wafer LEDs: 0.5-inch profile, no housing required',
            'IC-rated fixtures safe for insulation contact',
            'Airtight construction to maintain ceiling vapor barrier',
            'Available in 2700K–5000K color temperatures',
            'Wet-rated options for showers and outdoor soffits',
          ],
        },
        {
          heading: 'Dimming and Control Options',
          body:
            'Recessed lighting reaches its full potential when paired with dimming controls. Majors Electrical installs LED-compatible dimmers that provide smooth, flicker-free dimming from 100% down to as low as 1%. We specify dimmers matched to the LED driver type to avoid compatibility issues—a leading cause of dimmer buzz and LED flicker. For multi-zone control, we can wire separate dimming circuits for different areas of the same room.',
          bullets: [
            'LED-compatible dimmers (Lutron Diva CL, Caseta, or equivalent)',
            'Flicker-free dimming down to 1% for nighttime ambiance',
            'Multi-zone dimming for separate control of room areas',
            'Smart dimmer options for app and voice control',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How many recessed lights do I need for my living room in Sarasota?',
        answer:
          'For a typical 14×16-foot living room with eight-foot ceilings, we recommend six to eight six-inch recessed LED fixtures. The exact number depends on the room\'s natural light, wall colors (dark walls absorb more light), and whether recessed lights are the sole light source or supplemented by lamps and other fixtures. We create a layout during our consultation to ensure even, balanced coverage.',
      },
      {
        question: 'Can you install recessed lights in a home without attic access?',
        answer:
          'Yes. LED wafer fixtures are designed specifically for situations where there is no attic access above—including rooms below a second floor or concrete ceiling structures. The wafer fixture mounts directly to a junction box and sits nearly flush with the ceiling surface. We cut a small hole for the junction box and fish the circuit wiring through the ceiling cavity.',
      },
      {
        question: 'What size recessed lights should I choose—4-inch or 6-inch?',
        answer:
          'Six-inch fixtures are the standard for general ambient lighting in most rooms, providing broad, even coverage. Four-inch fixtures work well as accent lights, in smaller spaces like hallways and closets, or where you want a more refined, less visible light source. In kitchens, we often combine six-inch ambient fixtures with four-inch task lights over counters for layered illumination.',
      },
      {
        question: 'Why do my recessed LED lights flicker when dimmed?',
        answer:
          'LED flicker is almost always caused by an incompatible dimmer. Standard incandescent dimmers use a minimum load threshold that LEDs don\'t meet, causing the dimmer to cycle on and off rapidly. The solution is an LED-compatible dimmer rated for the wattage of your LED fixtures. Majors Electrical installs dimmers specifically designed for LED loads, eliminating flicker entirely.',
      },
      {
        question: 'How much does recessed lighting installation cost in Sarasota?',
        answer:
          'Recessed lighting installation typically costs $150 to $250 per light, including the fixture, wiring, switch, and a share of the circuit cost. A six-light layout with a dimmer switch for a single room usually runs $1,200 to $1,800. Whole-home recessed lighting packages with multiple zones and smart dimmers offer better per-light pricing. We provide detailed quotes after evaluating your home.',
      },
    ],
    relatedServices: ['interior-lighting', 'under-cabinet', 'chandelier-install', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/recessed-lighting-living-room.webp', alt: 'Recessed LED lighting installed in a Sarasota living room', caption: 'Six-inch LED recessed layout with smooth dimming' },
      { src: '/gallery/recessed-lighting-kitchen.webp', alt: 'Recessed lights over a kitchen countertop in a Sarasota home', caption: 'Task-oriented recessed lighting over kitchen workspace' },
      { src: '/gallery/recessed-lighting-wafer-install.webp', alt: 'Ultra-thin LED wafer light being installed in a Sarasota ceiling', caption: 'LED wafer fixture installation—no housing required' },
      { src: '/gallery/recessed-lighting-bathroom.webp', alt: 'Wet-rated recessed light installed above a shower in Sarasota', caption: 'Wet-rated recessed fixture above a tiled shower' },
      { src: '/gallery/recessed-lighting-dimmer.webp', alt: 'LED-compatible dimmer switch controlling recessed lights', caption: 'Lutron LED-compatible dimmer for flicker-free control' },
    ],
  },

  'security-lighting': {
    content: {
      intro:
        'Effective security lighting deters intruders, improves camera visibility, and provides safe navigation around your Sarasota property after dark. Majors Electrical designs and installs commercial and residential security lighting systems—including motion-activated floodlights, dusk-to-dawn wall packs, and integrated camera-light combinations—using LED fixtures built to withstand Florida\'s harsh UV, humidity, and salt-air conditions.',
      sections: [
        {
          heading: 'Security Lighting Design Principles',
          body:
            'Security lighting is most effective when it eliminates hiding spots, illuminates entry points, and creates clear contrast for security cameras. We position fixtures at eight to ten feet above grade to prevent tampering while maximizing coverage. High-output LED floodlights cover driveways and yards, wall-mounted fixtures illuminate doors and windows, and path lights ensure safe footing along walkways. Every design balances security coverage with neighbor-friendly light control to prevent glare and trespass light.',
          bullets: [
            'Entry point illumination—doors, windows, and garage access',
            'Driveway and parking area flood coverage for vehicles and cameras',
            'Elimination of dark zones along property perimeter',
            'Fixture mounting height of 8–10 feet to prevent tampering',
            'Shielded and directed fixtures to minimize light trespass',
          ],
        },
        {
          heading: 'Motion-Activated and Smart Security Lights',
          body:
            'Motion-activated lights startle intruders and alert homeowners while saving energy by operating only when triggered. Majors Electrical installs motion-sensing floodlights with adjustable detection range, sensitivity, and duration settings. For smart home integration, we install Wi-Fi-enabled fixtures that send phone alerts when motion is detected and can be controlled remotely—ideal for monitoring Sarasota vacation homes and snowbird properties.',
          bullets: [
            'Adjustable motion detection range up to 70 feet',
            'Sensitivity and duration settings to reduce false triggers',
            'Wi-Fi-enabled fixtures with smartphone alerts',
            'Integration with Ring, Arlo, and other security platforms',
            'Override options for manual and dusk-to-dawn operation',
          ],
        },
        {
          heading: 'Commercial Security Lighting',
          body:
            'Commercial properties in Sarasota require security lighting that meets insurance requirements and local ordinances while protecting employees, customers, and inventory. We install LED wall packs, high-output area lights, and loading dock fixtures on commercial buildings, with photocell and timer controls for automatic operation. All commercial installations include the wiring, circuit protection, and switching infrastructure needed for reliable, maintenance-free operation.',
          bullets: [
            'LED wall packs for building perimeters and entryways',
            'High-output area lights for storage yards and loading docks',
            'Photocell and timer controls for automatic scheduling',
            'Vandal-resistant and impact-rated fixture options',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What type of security lights are best for a Sarasota home?',
        answer:
          'We recommend LED motion-activated floodlights for driveways and backyards (typically 3000–5000 lumens per head), dusk-to-dawn wall-mounted fixtures at entry doors, and low-level path lighting along walkways. LED fixtures are ideal because they provide instant full brightness with no warm-up time, critical when motion activates a security light. For coastal Sarasota properties, we specify fixtures with corrosion-resistant housing.',
      },
      {
        question: 'How do I stop my motion security light from false triggering?',
        answer:
          'False triggers are usually caused by the detection zone being too wide, capturing passing cars, blowing landscaping, or small animals. We adjust the detection range, angle, and sensitivity settings, and can install fixtures with adjustable pet-immune sensors that ignore motion below a certain weight threshold. Proper aim and zone masking eliminates most nuisance activations.',
      },
      {
        question: 'Can security lights work with my existing security cameras?',
        answer:
          'Absolutely. We coordinate lighting placement with your camera positions to ensure even illumination without glare or hot spots in the camera\'s field of view. Properly positioned lights dramatically improve nighttime camera image quality. We work with Ring, Arlo, Nest, and other common security camera systems to create an integrated lighting and surveillance solution.',
      },
      {
        question: 'Do I need a dedicated circuit for security lighting?',
        answer:
          'For residential installations, security lights can typically share a circuit with other exterior fixtures. However, for commercial properties or homes with extensive security lighting, a dedicated circuit ensures that the security lights remain operational even if another device on a shared circuit trips the breaker. We evaluate your specific setup and recommend accordingly.',
      },
    ],
    relatedServices: ['exterior-lighting', 'outdoor-security', 'security-cameras', 'automatic-timer-lighting'],
    galleryImages: [
      { src: '/gallery/security-lighting-motion-flood.webp', alt: 'Motion-activated LED floodlight installed on a Sarasota home', caption: 'Dual-head LED motion floodlight covering driveway and yard' },
      { src: '/gallery/security-lighting-entry.webp', alt: 'Security lighting illuminating a Sarasota home entry', caption: 'Dusk-to-dawn fixture at the front entry' },
      { src: '/gallery/security-lighting-commercial-wallpack.webp', alt: 'LED wall pack security light on a Sarasota commercial building', caption: 'Commercial LED wall pack for building perimeter security' },
      { src: '/gallery/security-lighting-camera-integration.webp', alt: 'Coordinated security lighting and camera at a Sarasota property', caption: 'Security light positioned for optimal camera coverage' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a security lighting installation', caption: 'Security lighting installation in Sarasota' },
    ],
  },

  'under-cabinet': {
    content: {
      intro:
        'Under-cabinet lighting is the single most impactful kitchen lighting upgrade in Sarasota homes—eliminating shadows on countertops, improving task visibility for cooking and meal prep, and adding a warm ambient glow that enhances the entire kitchen. Majors Electrical installs hardwired LED under-cabinet systems with dimming controls, providing a clean, permanent installation with no visible cords or plug-in transformers.',
      sections: [
        {
          heading: 'Hardwired vs. Plug-In Under-Cabinet Lights',
          body:
            'Plug-in under-cabinet light strips are a quick DIY option, but they leave visible cords, occupy outlet space, and lack the polished look of a professional installation. Hardwired under-cabinet lighting connects directly to a dedicated circuit concealed inside the wall or cabinet, with a wall switch or dimmer for control. Majors Electrical runs wiring through the wall cavity behind the upper cabinets, keeping the installation completely hidden.',
          bullets: [
            'Concealed wiring through wall cavity—no visible cords',
            'Dedicated switch or dimmer for convenient control',
            'No outlet space consumed by plug-in adapters',
            'Clean, professional appearance that adds home value',
            'Compatible with smart switches for app and voice control',
          ],
        },
        {
          heading: 'LED Under-Cabinet Fixture Options',
          body:
            'We install three main types of under-cabinet LED fixtures: linear light bars for continuous illumination, LED tape/strip lights for flexible installations on curved or uneven cabinet bottoms, and puck lights for focused accent pools. For kitchen task lighting, continuous linear fixtures in 3000K provide even, shadow-free work light across the full counter length. We position fixtures toward the front edge of the cabinet to minimize shadows from the countertop backsplash.',
          bullets: [
            'Linear LED light bars for seamless, even countertop illumination',
            'LED tape/strip lights for flexible or curved installations',
            'Puck lights for accent lighting and display shelving',
            'CRI 90+ fixtures for accurate color rendering while cooking',
            'Front-of-cabinet positioning to minimize countertop shadows',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How much does hardwired under-cabinet lighting cost in Sarasota?',
        answer:
          'A typical Sarasota kitchen under-cabinet lighting installation with linear LED fixtures, a dimmer switch, and concealed wiring runs $800 to $1,500 depending on the number of cabinet sections and whether the circuit already exists. Larger kitchens with wraparound counters or separate island lighting will be at the higher end. We include all fixtures, wiring, switch, and labor in our proposals.',
      },
      {
        question: 'What color temperature is best for under-cabinet kitchen lights?',
        answer:
          'We recommend 3000K (warm white) for most kitchens—it provides a natural, warm light that renders food colors accurately without the yellowness of 2700K or the clinical feel of 4000K+. For kitchens with cool-toned countertops and modern cabinetry, 3500K can complement the aesthetic. We bring sample fixtures to your consultation so you can see the color temperature in your space.',
      },
      {
        question: 'Can under-cabinet lights be dimmed?',
        answer:
          'Yes. All of our hardwired LED under-cabinet installations include an LED-compatible dimmer switch for adjustable brightness. Full brightness provides excellent task lighting for cooking and meal prep, while lower settings create ambient mood lighting for evening entertaining. We can also connect the dimmer to a smart switch for app and voice control.',
      },
      {
        question: 'Can you install under-cabinet lighting without a kitchen remodel?',
        answer:
          'Absolutely. Under-cabinet lighting is one of the easiest electrical upgrades to add to an existing kitchen. In most Sarasota homes, we access the wiring route through the wall cavity above the cabinet or from the attic. The installation typically takes three to four hours and involves minimal disruption—no drywall work or painting required in the majority of installations.',
      },
    ],
    relatedServices: ['interior-lighting', 'recessed-lighting', 'home-remodels', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/under-cabinet-linear-led.webp', alt: 'Linear LED under-cabinet lighting in a Sarasota kitchen', caption: 'Continuous linear LED for even countertop illumination' },
      { src: '/gallery/under-cabinet-dimmer-switch.webp', alt: 'Dimmer switch controlling under-cabinet lights in a Sarasota kitchen', caption: 'LED-compatible dimmer for adjustable task and ambient lighting' },
      { src: '/gallery/under-cabinet-concealed-wiring.webp', alt: 'Concealed wiring behind upper cabinets during installation', caption: 'Concealed wiring through the wall cavity—no visible cords' },
      { src: '/gallery/under-cabinet-accent-puck.webp', alt: 'LED puck lights under display cabinets in a Sarasota home', caption: 'Puck lights for display shelving and accent areas' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an under-cabinet lighting installation', caption: 'Under-cabinet lighting installation in Sarasota kitchens' },
    ],
  },

  'chandelier-install': {
    content: {
      intro:
        'A statement chandelier can define a room—whether it\'s a cascading crystal fixture in a Sarasota foyer, a modern linear pendant over a dining table, or a wrought-iron piece in a great room with 20-foot ceilings. Majors Electrical handles chandelier installation safely and precisely, including ceiling box reinforcement, circuit wiring, dimmer installation, and the careful lifting and mounting that heavy or oversized fixtures demand.',
      sections: [
        {
          heading: 'Structural Support and Ceiling Box Requirements',
          body:
            'Chandeliers often weigh 25 to 100+ pounds, far exceeding the 50-pound limit of a standard ceiling box. Before installing any heavy fixture, we verify or upgrade the ceiling box to a fan/fixture-rated box secured directly to structural framing. For very heavy chandeliers, we install a steel support brace spanning between ceiling joists and rated for the fixture\'s weight. This structural step is critical—an improperly supported chandelier can fall, causing injury and damage.',
          bullets: [
            'Ceiling box rated for the chandelier\'s full weight',
            'Steel support brace spanning between joists for heavy fixtures',
            'Structural framing verification before mounting',
            'Proper hardware—threaded rod, hickey, or chain canopy as needed',
            'Safety cable as secondary support for fixtures over occupied areas',
          ],
        },
        {
          heading: 'High-Ceiling and Two-Story Foyer Installations',
          body:
            'Sarasota homes frequently feature two-story foyers, vaulted great rooms, and cathedral ceilings that require chandelier mounting at heights of 15 to 25 feet. Majors Electrical uses scaffolding and lifts to safely access these heights, and we pre-assemble fixtures at ground level whenever possible to minimize time working overhead. For future bulb changes and cleaning, we can install motorized chandelier hoists that lower the fixture to a reachable height at the push of a button.',
          bullets: [
            'Scaffolding and lift equipment for high ceilings up to 25+ feet',
            'Pre-assembly at ground level to reduce overhead work time',
            'Motorized chandelier hoists for easy future maintenance',
            'Proper chain and downrod length for optimal hanging height',
          ],
        },
        {
          heading: 'Dimming and Lighting Control',
          body:
            'Chandeliers deserve dimming control so you can set the perfect brightness for every occasion—full brightness for tasks, reduced for dining, and a low glow for ambiance. Majors Electrical installs LED-compatible dimmers matched to the chandelier\'s bulb type and total wattage. For chandeliers with multiple circuits (common in large fixtures with tiered lighting), we install multi-circuit dimmers or smart controls for independent zone dimming.',
          bullets: [
            'LED-compatible dimmer for smooth, full-range dimming',
            'Multi-circuit control for tiered or zoned chandeliers',
            'Smart dimmer options with scene presets and scheduling',
            'Bulb-type matching to ensure flicker-free operation',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Can my existing ceiling box support a heavy chandelier?',
        answer:
          'Standard ceiling boxes are rated for 50 pounds. If your chandelier weighs more than 50 pounds, the existing box must be replaced with a fixture-rated box secured to the ceiling framing, or a support brace must be installed. We check the existing box rating and framing before every chandelier installation and upgrade the support as needed to safely hold the fixture\'s full weight.',
      },
      {
        question: 'How high should a chandelier hang in a two-story foyer?',
        answer:
          'In a two-story foyer, the bottom of the chandelier should hang no lower than the height of the second-floor railing—typically 8 to 10 feet above the floor. This keeps the fixture visually centered in the vertical space while remaining clear of the second-floor walkway. For dining rooms, the standard is 30 to 36 inches above the table surface.',
      },
      {
        question: 'Can you install a chandelier where there is no existing light fixture?',
        answer:
          'Yes. We run a new circuit to the desired location, install a ceiling box rated for the chandelier\'s weight, and mount a wall switch or dimmer. In homes with attic access, the wiring runs through the attic. For locations without attic access, we use fishing techniques or surface-mount conduit matched to the room\'s aesthetic.',
      },
      {
        question: 'How do I change bulbs in a chandelier on a high ceiling?',
        answer:
          'For chandeliers mounted above 12 feet, we recommend installing a motorized chandelier hoist (also called a chandelier lift). This device mounts above the ceiling and lowers the fixture to a reachable height with a wall switch or remote control. It eliminates the need for ladders or scaffolding for routine bulb changes and cleaning. LED bulbs also help—they last 15,000 to 25,000 hours, dramatically reducing the frequency of bulb changes.',
      },
      {
        question: 'How much does chandelier installation cost in Sarasota?',
        answer:
          'Chandelier installation costs depend on the fixture\'s weight, ceiling height, and whether a new circuit is needed. A standard installation with an existing ceiling box and circuit runs $200 to $400. Heavy fixtures requiring structural support upgrades add $150 to $300. High-ceiling installations requiring scaffolding typically run $400 to $800. Motorized hoists are an additional $800 to $1,500 installed.',
      },
    ],
    relatedServices: ['interior-lighting', 'recessed-lighting', 'ceiling-fans', 'home-remodels'],
    galleryImages: [
      { src: '/gallery/chandelier-foyer-install.webp', alt: 'Large chandelier installed in a two-story foyer in Sarasota', caption: 'Crystal chandelier installation in a two-story foyer' },
      { src: '/gallery/chandelier-dining-room.webp', alt: 'Modern chandelier installed over a dining table in a Sarasota home', caption: 'Contemporary chandelier with LED-compatible dimmer' },
      { src: '/gallery/chandelier-support-brace.webp', alt: 'Steel support brace installed for a heavy chandelier', caption: 'Structural support brace rated for 150+ pound fixture' },
      { src: '/gallery/chandelier-motorized-hoist.webp', alt: 'Motorized chandelier hoist installed in a Sarasota home', caption: 'Motorized hoist for easy lowering and maintenance' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a chandelier installation project', caption: 'Chandelier installation services in Sarasota' },
    ],
  },

  'ev-charging': {
    content: {
      intro:
        'Sarasota\'s growing EV community needs reliable home charging—and a Level 2 charger installed in your garage is the most convenient way to start every day with a full battery. Majors Electrical installs Tesla Wall Connectors, ChargePoint Home Flex, Emporia, and other major EV charger brands, handling everything from panel load evaluation and circuit installation to final commissioning and permitting per NEC Article 625.',
      sections: [
        {
          heading: 'Level 2 EV Charger Installation',
          body:
            'Level 2 charging uses a 240-volt circuit to deliver 25 to 50 miles of range per hour—a full overnight charge for most electric vehicles. Majors Electrical installs a dedicated circuit from your electrical panel to the garage or carport, sized appropriately for your chosen charger. A 48-amp charger (the most common for Tesla and modern EVs) requires a 60-amp breaker and 6-gauge copper wire per NEC 625.40, which mandates the circuit be rated at 125% of the charger\'s maximum continuous load.',
          bullets: [
            'Dedicated 240V circuit from panel to charging location',
            'Circuit sizing per NEC 625.40—125% of maximum continuous load',
            '40A chargers on 50A circuit, 48A chargers on 60A circuit',
            '6-gauge or 4-gauge copper wire based on run length and load',
            'NEMA 14-50 outlet or hardwired connection per charger type',
          ],
        },
        {
          heading: 'Panel Capacity and Load Management',
          body:
            'Adding a 40A or 48A EV charger circuit to your Sarasota home requires available capacity in your electrical panel. Majors Electrical performs a load calculation per NEC Article 220 to verify your panel can support the added load. If your panel is near capacity—common in older 100-amp or 150-amp homes—we offer solutions ranging from a panel upgrade to 200 amps, installation of a load management device that shares capacity between the charger and other large loads, or a sub-panel specifically for the EV circuit.',
          bullets: [
            'NEC Article 220 load calculation to verify panel capacity',
            'Panel upgrade to 200A or 320A when additional capacity is needed',
            'Load management devices (e.g., DCC-9 or NeoCharge) for capacity-constrained panels',
            'Sub-panel option when main panel breaker spaces are exhausted',
            'FPL service upgrade coordination when required',
          ],
        },
        {
          heading: 'Charger Options We Install',
          body:
            'We install all major residential EV chargers and guide you to the best option for your vehicle and usage. The Tesla Wall Connector (48A, hardwired) is the fastest home option for Tesla vehicles and now supports other EVs via J1772 adapter. The ChargePoint Home Flex (16A–50A, adjustable) works with all EVs and offers Wi-Fi energy tracking. For budget-conscious installations, a NEMA 14-50 outlet with a portable Level 2 charger provides flexibility at a lower installed cost.',
          bullets: [
            'Tesla Wall Connector: 48A, up to 44 miles of range per hour',
            'ChargePoint Home Flex: adjustable 16A–50A, Wi-Fi enabled',
            'Emporia Smart EV Charger: 48A with energy monitoring',
            'NEMA 14-50 outlet for portable charger flexibility',
            'J1772 and Tesla connector compatibility options',
          ],
        },
      ],
      safetyNote:
        'Never use an extension cord or a standard 120V outlet long-term for EV charging. Extension cords can overheat under sustained high-amperage loads, and 120V charging pulls 12 amps continuously for 40+ hours to fully charge most EVs—stressing circuits not designed for that duration of continuous use.',
    },
    faqs: [
      {
        question: 'How much does EV charger installation cost in Sarasota?',
        answer:
          'A typical Level 2 EV charger installation in Sarasota runs $800 to $2,500, including the circuit, wiring, breaker, outlet or hardwired connection, and permitting. The main cost variable is the distance from your panel to the charging location—a garage adjacent to the panel is the most affordable, while a detached garage or long run through an attic costs more. The charger unit itself ($400–$700) is typically purchased separately.',
      },
      {
        question: 'Do I need a panel upgrade to install an EV charger?',
        answer:
          'Not always. Many homes with 200-amp service have sufficient capacity for a 48A EV charger circuit. Homes with 100-amp or 150-amp panels are more likely to require an upgrade, especially if they also have electric ranges, dryers, and heat pumps. We perform a load calculation before quoting to determine your exact capacity. Load management devices are an alternative to a full panel upgrade in some cases.',
      },
      {
        question: 'What is the difference between a 40-amp and 48-amp EV charger?',
        answer:
          'A 40-amp charger delivers approximately 9.6 kW and provides about 30 miles of range per hour of charging. A 48-amp charger delivers 11.5 kW and provides about 37–44 miles per hour. The 48-amp charger requires a 60-amp breaker (vs. 50-amp for the 40-amp unit) but charges roughly 20% faster. For most EV owners, the 48-amp option is worth the modest additional circuit cost for the faster charging speed.',
      },
      {
        question: 'Can I install an EV charger in a condo or townhouse in Sarasota?',
        answer:
          'Yes, but condo and HOA installations require additional coordination. You may need HOA board approval, a designated parking space with access to electrical infrastructure, and potentially a separate meter. Florida Statute 718.113(8) provides condominium owners the right to install EV chargers in their assigned parking spaces. Majors Electrical handles the technical and permitting requirements and can provide documentation for HOA submissions.',
      },
      {
        question: 'Is a permit required for EV charger installation in Sarasota County?',
        answer:
          'Yes. Sarasota County requires an electrical permit for EV charger installations, as the work involves a new 240-volt circuit. The permit process includes a plan review and a final inspection to verify the installation meets NEC 625 and local amendments. Majors Electrical handles the complete permit process on your behalf.',
      },
    ],
    relatedServices: ['panel-upgrades', 'dedicated-circuits', 'energy-management', 'solar-systems'],
    galleryImages: [
      { src: '/gallery/ev-charger-tesla-wall-connector.webp', alt: 'Tesla Wall Connector installed in a Sarasota garage', caption: 'Tesla Wall Connector hardwired on a 60A dedicated circuit' },
      { src: '/gallery/ev-charger-chargepoint-home.webp', alt: 'ChargePoint Home Flex EV charger installed in a Sarasota home', caption: 'ChargePoint Home Flex with Wi-Fi energy tracking' },
      { src: '/gallery/ev-charger-panel-circuit.webp', alt: 'Dedicated 60A circuit breaker installed for an EV charger in Sarasota', caption: '60A dedicated circuit with 6-gauge copper wire' },
      { src: '/gallery/ev-charger-nema-14-50.webp', alt: 'NEMA 14-50 outlet installed for EV charging in a Sarasota garage', caption: 'NEMA 14-50 outlet for portable Level 2 charger flexibility' },
      { src: '/gallery/ev-charger-outdoor-install.webp', alt: 'Outdoor EV charger installation at a Sarasota home driveway', caption: 'Weather-rated outdoor EV charger installation' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an EV charger installation', caption: 'EV charger installation services throughout Sarasota' },
    ],
  },

  'smart-switches': {
    content: {
      intro:
        'Smart switches and dimmers bring app control, voice integration, scheduling, and energy monitoring to your Sarasota home\'s lighting—all without changing a single light bulb. Majors Electrical installs Lutron Caseta, Leviton Decora Smart, and other leading platforms, ensuring proper wiring (including the neutral wire most smart switches require), reliable Wi-Fi connectivity, and seamless integration with Alexa, Google Home, and Apple HomeKit.',
      sections: [
        {
          heading: 'Smart Switch Benefits Beyond Convenience',
          body:
            'Smart switches do more than turn lights on from your phone. They enable automated schedules that deter burglars when you\'re away, dim lights automatically at bedtime for better sleep, track energy consumption per circuit, and respond to voice commands through your preferred assistant. For Sarasota snowbirds and vacation homeowners, smart switches provide remote monitoring and control of your home\'s lighting from anywhere in the world.',
          bullets: [
            'Automated scheduling—lights on at sunset, off at midnight',
            'Away-from-home randomization for security',
            'Voice control through Alexa, Google Home, and Siri',
            'Energy monitoring per switch to identify high-consumption circuits',
            'Remote access for snowbirds and vacation home monitoring',
          ],
        },
        {
          heading: 'Neutral Wire Requirements and Installation',
          body:
            'Most modern smart switches require a neutral wire at the switch box—a wire that was not always run to switch locations in homes built before the 1990s. Majors Electrical inspects your switch boxes before recommending a platform. If neutral wires are present, you have the full range of smart switch options. If not, we can either run a neutral wire to the switch box or install a platform like Lutron Caseta that does not require a neutral, using its proprietary Pico remotes and Smart Bridge hub.',
          bullets: [
            'Pre-installation switch box inspection for neutral wire presence',
            'Neutral wire installation where needed for full compatibility',
            'Lutron Caseta: no neutral required, uses Smart Bridge hub',
            'Leviton Decora Smart: requires neutral, native Wi-Fi (no hub)',
            'Three-way and four-way switch configurations supported',
          ],
        },
        {
          heading: 'Whole-Home Smart Lighting Systems',
          body:
            'For homeowners who want comprehensive control, Majors Electrical designs and installs whole-home smart lighting systems with scene control, room grouping, and centralized app management. A typical Sarasota smart lighting installation might include Caseta dimmers in every room, Pico remotes for convenient bedside and entry control, and integration with existing smart home ecosystems for unified voice and app operation.',
          bullets: [
            'Whole-home smart dimmer and switch rollout',
            'Scene control: "Movie Night," "Dinner," "Goodnight" presets',
            'Room and zone grouping for coordinated control',
            'Integration with smart thermostats, shades, and security systems',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Do smart switches work without Wi-Fi?',
        answer:
          'Smart switches continue to function as regular on/off switches when Wi-Fi is unavailable—you can always control them manually at the switch. However, app control, voice control, and automation features require an active Wi-Fi connection. Lutron Caseta operates on its own radio frequency and only needs Wi-Fi at the hub, making it more resilient to Wi-Fi interruptions than pure Wi-Fi switches.',
      },
      {
        question: 'Can I install smart switches in a home without neutral wires?',
        answer:
          'Yes. Lutron Caseta is our top recommendation for homes without neutral wires because it uses a proprietary radio protocol and does not require a neutral. The Caseta Smart Bridge hub plugs into your router, and each switch communicates wirelessly with the hub. This system works reliably in any Sarasota home regardless of wiring age.',
      },
      {
        question: 'What is the best smart switch brand for a whole-home installation?',
        answer:
          'For whole-home installations, we recommend Lutron Caseta for its reliability, compatibility with nearly all LED loads, and the convenience of Pico remotes that can be mounted anywhere without wiring. For homeowners who prefer a hub-free system with native Wi-Fi, Leviton Decora Smart switches are an excellent choice—each switch connects directly to your Wi-Fi network with no additional hub required.',
      },
      {
        question: 'Can smart switches control ceiling fans?',
        answer:
          'Yes, but you need a fan-speed-rated smart switch, not a standard smart dimmer. Standard dimmers can damage fan motors. Lutron Caseta makes a dedicated fan speed control that adjusts fan speed in four levels through the app or a Pico remote. We install these alongside a separate smart dimmer for the fan\'s light kit, giving you independent control of both.',
      },
      {
        question: 'How much does a whole-home smart switch installation cost in Sarasota?',
        answer:
          'A whole-home smart switch installation depends on the number of switches and the platform selected. Lutron Caseta switches average $60–$80 per switch (device cost), and installation runs $75–$150 per switch including the wiring verification, switch installation, programming, and hub setup. A typical 20-switch home runs $3,000 to $5,000 installed, including the Caseta Smart Bridge hub and Pico remotes.',
      },
    ],
    relatedServices: ['interior-lighting', 'automatic-timer-lighting', 'recessed-lighting', 'ev-charging'],
    galleryImages: [
      { src: '/gallery/smart-switch-caseta-install.webp', alt: 'Lutron Caseta smart dimmer installed in a Sarasota home', caption: 'Lutron Caseta smart dimmer with Pico remote' },
      { src: '/gallery/smart-switch-app-control.webp', alt: 'Homeowner controlling lights via smartphone app in a Sarasota home', caption: 'App-based control and scheduling from anywhere' },
      { src: '/gallery/smart-switch-voice-control.webp', alt: 'Voice-controlled smart lighting with Alexa in a Sarasota living room', caption: 'Voice control integration with Alexa and Google Home' },
      { src: '/gallery/smart-switch-three-way.webp', alt: 'Three-way smart switch installation in a Sarasota hallway', caption: 'Three-way smart switch configuration with Pico remote' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a smart switch installation project', caption: 'Smart switch installation services in Sarasota' },
    ],
  },

  'data-cabling': {
    content: {
      intro:
        'Reliable wired networking is the backbone of modern Sarasota homes and businesses—supporting gigabit internet, security cameras, VoIP phones, streaming, and smart building systems with speed and stability that Wi-Fi alone cannot match. Majors Electrical designs and installs structured data cabling systems using Cat6 and Cat6a cable per TIA/EIA-568 standards, providing future-proof connectivity that supports 10-Gigabit Ethernet and Power over Ethernet (PoE) devices.',
      sections: [
        {
          heading: 'Structured Cabling Design',
          body:
            'A structured cabling system follows a star topology: every data drop runs back to a central patch panel in a dedicated network closet or structured media enclosure. This home-run architecture meets TIA/EIA-568 standards and provides maximum flexibility—each port can be assigned to any switch, VLAN, or purpose without re-cabling. Majors Electrical designs cabling layouts for new construction, renovations, and retrofit installations, placing drops in living areas, offices, bedrooms, and outdoor AP locations.',
          bullets: [
            'Star topology with home-run cables to central patch panel',
            'TIA/EIA-568-C.2 compliant installation and termination',
            'Cat6 for Gigabit (up to 1 Gbps) or Cat6a for 10-Gigabit Ethernet',
            'Structured media enclosure or network rack for central distribution',
            'Cable certification testing with Fluke or equivalent test equipment',
          ],
        },
        {
          heading: 'Residential Data Cabling',
          body:
            'Sarasota homes increasingly need wired network connections for home offices, media streaming, gaming, security cameras, and Wi-Fi access points. A single Cat6 cable to each room provides a reliable gigabit connection, and two cables per location are recommended for flexibility (one for data, one for a future use or PoE device). Majors Electrical runs cables through attic space, interior walls, and conduit, terminating at keystones with faceplates that match your existing electrical devices.',
          bullets: [
            'Data drops in offices, bedrooms, media rooms, and common areas',
            'Outdoor-rated cable runs for security cameras and Wi-Fi access points',
            'PoE support for wireless access points, cameras, and smart devices',
            'Faceplate and keystone termination matching existing device style',
            'Attic and wall routing for concealed cable runs',
          ],
        },
        {
          heading: 'Commercial Data Cabling',
          body:
            'Commercial data cabling demands higher cable counts, proper cable management, and labeling per TIA/EIA standards. Majors Electrical installs commercial data infrastructure including server room cable tray, cable management in network racks, patch panel termination, and floor-to-floor backbone cabling. All installations are tested and certified to ensure every link meets Cat6 or Cat6a performance specifications across the full 100-meter channel distance.',
          bullets: [
            'Server room and IDF closet cable tray and management',
            'Rack-mounted patch panels with color-coded labeling',
            'Backbone cabling between floors and between buildings',
            'Fiber optic cabling for high-speed backbone and long runs',
            'As-built documentation with test results for every cable',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What is the difference between Cat6 and Cat6a cabling?',
        answer:
          'Cat6 supports Gigabit Ethernet (1 Gbps) at up to 100 meters and 10-Gigabit Ethernet at up to 55 meters. Cat6a supports 10-Gigabit Ethernet at the full 100-meter distance with improved shielding against crosstalk. For most Sarasota homes, Cat6 is sufficient since typical cable runs are under 55 meters. For commercial installations or future-proofing, Cat6a is the better investment.',
      },
      {
        question: 'Can data cabling be added to an existing Sarasota home without remodeling?',
        answer:
          'Yes. In most existing homes, we route cables through the attic and drop them down interior walls to wall plates or surface-mounted boxes. Single-story homes with attic access are the easiest to cable. For slab-on-grade homes without attic access to certain areas, we use exterior conduit or baseboard raceway as clean alternatives.',
      },
      {
        question: 'How many data drops do I need in my home?',
        answer:
          'We recommend at least one data drop in every bedroom and living area, two drops in home offices, and drops at each location where you plan to mount a security camera or Wi-Fi access point. A typical three-bedroom Sarasota home needs eight to twelve drops. Running extra cables now is far less expensive than adding them later once walls are closed.',
      },
      {
        question: 'Does Majors Electrical test and certify data cable installations?',
        answer:
          'Yes. We test every cable with a Fluke cable certifier that verifies performance across all eight conductors, measuring insertion loss, near-end crosstalk (NEXT), return loss, and cable length. Each cable receives a pass/fail report confirming it meets Cat6 or Cat6a specifications. Test results are provided as part of your project documentation.',
      },
      {
        question: 'Can you run data cables and electrical cables in the same pathway?',
        answer:
          'NEC Article 800.133(A)(2) requires data cables to be separated from power cables by at least two inches unless a physical barrier separates them, or the data cable is rated for the voltage. In practice, we maintain separation throughout the run and use separate pathways or divided raceway. Proper separation prevents electromagnetic interference that degrades network performance.',
      },
    ],
    relatedServices: ['security-cameras', 'home-theater', 'office-build-outs', 'new-construction'],
    galleryImages: [
      { src: '/gallery/data-cabling-patch-panel.webp', alt: 'Structured cabling patch panel in a Sarasota home network closet', caption: 'Cat6 patch panel with color-coded terminations' },
      { src: '/gallery/data-cabling-wall-plate.webp', alt: 'Data wall plate with Cat6 keystone jacks in a Sarasota home office', caption: 'Dual Cat6 keystone faceplate in a home office' },
      { src: '/gallery/data-cabling-attic-run.webp', alt: 'Cat6 cables being routed through a Sarasota home attic', caption: 'Organized cable routing through attic space' },
      { src: '/gallery/data-cabling-commercial-rack.webp', alt: 'Commercial network rack with cable management in a Sarasota office', caption: 'Commercial rack installation with cable management' },
      { src: '/gallery/data-cabling-certification-test.webp', alt: 'Fluke cable certifier testing a Cat6 data run', caption: 'Fluke certification testing for every cable run' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a data cabling project', caption: 'Structured data cabling installation in Sarasota' },
    ],
  },

  'security-cameras': {
    content: {
      intro:
        'A professionally wired security camera system provides Sarasota homeowners and business owners with reliable 24/7 surveillance that doesn\'t depend on Wi-Fi signal strength or battery life. Majors Electrical installs the power and data infrastructure for wired IP camera systems—including PoE cabling, NVR power circuits, and weatherproof exterior cable routing—so your cameras deliver uninterrupted, high-definition footage day and night.',
      sections: [
        {
          heading: 'Wired Camera Infrastructure',
          body:
            'While wireless cameras are popular for DIY installations, wired PoE (Power over Ethernet) cameras offer superior reliability, consistent video quality, and no battery maintenance. A single Cat6 cable delivers both power and HD video data to each camera, running back to a central PoE switch or NVR. Majors Electrical runs these cables through attic space, wall cavities, soffits, and exterior conduit, providing a clean installation with no visible wiring.',
          bullets: [
            'Cat6 PoE cabling delivers power and data on a single cable',
            'No battery changes, no Wi-Fi dropouts, no signal interference',
            'Concealed cable routing through attic, walls, and soffits',
            'Weatherproof exterior cable penetrations with drip loops',
            'Central NVR or PoE switch location with UPS backup power',
          ],
        },
        {
          heading: 'Camera Placement for Maximum Coverage',
          body:
            'Effective security camera placement follows a strategy: cover all entry points first (front door, back door, garage), then add perimeter cameras for driveways, side yards, and pool areas. Cameras should be mounted at 8 to 10 feet above grade to capture faces while remaining out of easy reach. Majors Electrical coordinates with your security provider or helps you design a camera layout that eliminates blind spots and maximizes your system\'s coverage.',
          bullets: [
            'Entry point coverage—front door, rear door, garage, and side entries',
            'Perimeter coverage for driveways, yards, and pool areas',
            'Mounting height of 8–10 feet for facial recognition and tamper resistance',
            'Coordination with security lighting for optimal nighttime footage',
            'Integration with existing alarm and smart home systems',
          ],
        },
        {
          heading: 'Commercial Camera Cabling',
          body:
            'Commercial properties require more extensive camera systems with higher camera counts, longer cable runs, and professional-grade NVR equipment. Majors Electrical installs commercial camera cabling in retail spaces, office buildings, warehouses, and restaurant properties throughout Sarasota. We coordinate with your security integrator or recommended partners to ensure the cabling infrastructure meets the camera system\'s requirements.',
          bullets: [
            'Multi-camera commercial installations (16, 32, or 64+ channels)',
            'Server room NVR power and network connectivity',
            'Cable tray and conduit for organized, accessible cable routing',
            'Outdoor-rated cable and conduit for parking lots and building perimeters',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What is the advantage of wired security cameras over wireless?',
        answer:
          'Wired PoE cameras provide constant, reliable connectivity without signal drops, deliver consistent video quality unaffected by Wi-Fi congestion, require no battery charging or replacement, and are significantly harder for intruders to jam. The single Cat6 cable carries both power and data, so each camera has a guaranteed connection to the NVR. For any property where surveillance reliability is critical, wired cameras are the professional standard.',
      },
      {
        question: 'How many security cameras does a typical Sarasota home need?',
        answer:
          'A typical single-family home needs four to eight cameras for comprehensive coverage: one at the front door, one at the back door, one covering the garage/driveway, one or two for side yards, and optionally one for the pool area and one interior camera. We design the system to eliminate blind spots based on your property\'s specific layout and entry points.',
      },
      {
        question: 'Can you install camera wiring in an existing home without visible cables?',
        answer:
          'In most Sarasota homes with attic access, we run camera cables through the attic and exit through the soffit or eave directly above the camera mounting location. This keeps all wiring concealed. For cameras on ground-floor walls without attic access above, we use exterior-rated conduit color-matched to the building or route cables behind gutters and trim for a clean appearance.',
      },
      {
        question: 'Do security cameras need a dedicated electrical circuit?',
        answer:
          'PoE cameras draw power from the PoE switch or NVR, which does need a reliable power source. We recommend a dedicated circuit for the NVR/switch location and strongly advise connecting it to a UPS (uninterruptible power supply) so your cameras continue recording during power outages. For systems with more than eight cameras, a dedicated 20A circuit is recommended for the PoE switch.',
      },
    ],
    relatedServices: ['data-cabling', 'security-lighting', 'outdoor-security', 'smart-switches'],
    galleryImages: [
      { src: '/gallery/security-camera-exterior-install.webp', alt: 'Exterior security camera installed on a Sarasota home soffit', caption: 'PoE camera mounted at the soffit with concealed cabling' },
      { src: '/gallery/security-camera-poe-switch.webp', alt: 'PoE switch and NVR setup for a Sarasota home camera system', caption: 'Central PoE switch and NVR with UPS backup' },
      { src: '/gallery/security-camera-driveway.webp', alt: 'Security camera covering a driveway at a Sarasota home', caption: 'Driveway camera for vehicle and visitor monitoring' },
      { src: '/gallery/security-camera-commercial.webp', alt: 'Commercial security camera installation at a Sarasota business', caption: 'Commercial multi-camera installation with cable management' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a security camera wiring project', caption: 'Security camera cabling services in Sarasota' },
    ],
  },

  'home-theater': {
    content: {
      intro:
        'A dedicated home theater transforms your Sarasota living room, media room, or bonus space into an immersive entertainment environment—but the magic depends on proper electrical and low-voltage infrastructure hidden behind the walls. Majors Electrical installs dedicated theater circuits, in-wall speaker wiring, HDMI and data cabling, projector power outlets, and lighting control systems that make your home theater perform at its best.',
      sections: [
        {
          heading: 'Home Theater Electrical Infrastructure',
          body:
            'A high-performance home theater requires more than a standard outlet. Large AV receivers, amplifiers, subwoofers, and projectors can collectively draw 15 to 20 amps, and sharing circuits with household loads introduces electrical noise that degrades audio quality. Majors Electrical installs dedicated 20-amp circuits for the AV equipment location, isolated-ground receptacles to minimize electromagnetic interference, and a ceiling outlet for projector mounting—all on circuits protected by whole-home surge protection.',
          bullets: [
            'Dedicated 20A circuits for AV equipment to prevent interference',
            'Isolated-ground receptacles (IG) for noise-sensitive audio gear',
            'Ceiling outlet and junction box for projector mounting',
            'Whole-home surge protection to protect expensive AV investment',
            'Recessed outlet boxes behind wall-mounted TVs for flush mounting',
          ],
        },
        {
          heading: 'Audio and Video Cabling',
          body:
            'In-wall cabling is the foundation of a clean, professional home theater. We run in-wall-rated speaker cable (14-gauge or 12-gauge CL2/CL3) to every surround-sound speaker location, HDMI 2.1 cables for 4K/8K video to the display, and Cat6 data cables for streaming devices. All cable routes are planned during the design phase and installed before drywall in new construction, or fished through finished walls for retrofit installations.',
          bullets: [
            'In-wall CL2/CL3-rated speaker cable (14 AWG or 12 AWG)',
            'In-wall HDMI 2.1 cable for 4K and 8K video',
            'Cat6 data cable for streaming devices and network connectivity',
            'Subwoofer cable run to the optimal low-frequency position',
            'Conduit for future cable upgrades and additions',
          ],
        },
        {
          heading: 'Theater Lighting Control',
          body:
            'Lighting sets the mood in a home theater. Majors Electrical installs dimmable recessed fixtures, LED step lights, and sconce circuits on independent dimmers so you can create a true cinema experience with a single button press. Smart lighting controllers like Lutron Caseta allow you to program a "Movie Mode" scene that dims all lights to the perfect level when you start a film.',
          bullets: [
            'Dimmable recessed LED fixtures with 1% minimum dimming',
            'LED step lights for aisle and walkway safety in dark rooms',
            'Sconce circuits for ambient wall lighting',
            'Smart scene control—"Movie Mode" with a single tap or voice command',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'What electrical work is needed for a home theater?',
        answer:
          'A proper home theater requires dedicated 20A circuits for the AV equipment rack, a ceiling outlet for the projector (if applicable), in-wall speaker cabling for surround sound, HDMI and data cable runs, a recessed outlet behind the TV or screen, and dimmable lighting on separate circuits. Majors Electrical designs the complete electrical and low-voltage scope for your theater based on your equipment and room layout.',
      },
      {
        question: 'Can you pre-wire for a home theater in a new construction home?',
        answer:
          'Pre-wiring during construction is the ideal time and costs significantly less than retrofitting. We install all speaker cables, HDMI runs, data cables, dedicated circuits, and conduit before drywall, based on a layout coordinated with your AV designer or equipment choices. Pre-wiring also allows us to install conduit for future cable upgrades.',
      },
      {
        question: 'How do I hide cables for a wall-mounted TV?',
        answer:
          'We install a recessed outlet box and low-voltage cable plate behind the TV mounting location, and a matching outlet and cable plate at the entertainment center below. Power and AV cables run through the wall cavity between the two boxes, creating a completely clean, cable-free appearance. This approach meets NEC requirements—power cables are run through listed in-wall-rated conduit or cable.',
      },
      {
        question: 'What size speaker wire should I use for in-wall surround sound?',
        answer:
          'For most home theater surround-sound setups, 14-gauge CL2-rated speaker wire is appropriate for runs up to 80 feet. For subwoofers, longer runs, or high-power amplifiers, we recommend 12-gauge wire to minimize resistance and signal loss. All speaker wire must be CL2 or CL3 rated for in-wall installation per NEC Article 725.',
      },
    ],
    relatedServices: ['data-cabling', 'recessed-lighting', 'smart-switches', 'dedicated-circuits'],
    galleryImages: [
      { src: '/gallery/home-theater-wiring-prewire.webp', alt: 'Home theater pre-wire installation during new construction in Sarasota', caption: 'Pre-wire with speaker, HDMI, and data cables before drywall' },
      { src: '/gallery/home-theater-tv-mount-recessed.webp', alt: 'Wall-mounted TV with recessed outlet in a Sarasota media room', caption: 'Recessed outlet for clean, cable-free TV mounting' },
      { src: '/gallery/home-theater-projector-outlet.webp', alt: 'Ceiling outlet and HDMI connection for a projector in a Sarasota home theater', caption: 'Ceiling-mounted projector outlet with HDMI termination' },
      { src: '/gallery/home-theater-lighting-control.webp', alt: 'Dimmable theater lighting with step lights in a Sarasota home', caption: 'Dimmable recessed and step lighting for cinema ambiance' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a home theater installation project', caption: 'Home theater electrical and AV cabling in Sarasota' },
    ],
  },

  'office-build-outs': {
    content: {
      intro:
        'Transforming raw commercial space into a functional office, clinic, or retail environment in Sarasota requires expert electrical planning and execution. Majors Electrical partners with general contractors, architects, and tenants to deliver complete electrical build-outs—from power distribution and lighting layout to data cabling, fire-alarm coordination, and ADA-compliant device placement—keeping your project on schedule and passing inspection on the first visit.',
      sections: [
        {
          heading: 'Commercial Build-Out Electrical Scope',
          body:
            'An office build-out typically includes distribution panel installation, branch circuit wiring to all receptacle and equipment locations, overhead and task lighting with switching controls, data and phone cabling infrastructure, and fire-alarm circuit coordination. Majors Electrical manages the complete electrical scope from permit application through final punch list, coordinating closely with HVAC, plumbing, and low-voltage trades to avoid conflicts and delays.',
          bullets: [
            'Sub-panel or distribution panel installation and circuit layout',
            'Branch circuit wiring for receptacles, equipment, and dedicated loads',
            'Commercial lighting layout—recessed, troffer, and track fixtures',
            'Exit and emergency lighting per NEC Article 700 and NFPA 101',
            'Fire-alarm circuit rough-in and device coordination',
          ],
        },
        {
          heading: 'Power and Data for Modern Offices',
          body:
            'Modern offices demand more power and data density than ever. Each workstation needs a minimum of three to four power outlets and one to two data drops. Conference rooms require floor boxes or wall panels with power, data, and HDMI. Break rooms need dedicated circuits for microwaves and refrigerators. Majors Electrical designs power and data layouts based on your furniture plan and technology requirements, ensuring every workspace has adequate connectivity from day one.',
          bullets: [
            'Workstation power: three to four outlets per desk position',
            'Data drops: Cat6 to every workstation and conference room',
            'Conference room AV connections—power, data, and HDMI',
            'Break room dedicated circuits per NEC 210.23',
            'Floor boxes for open-plan office configurations',
          ],
        },
        {
          heading: 'ADA Compliance and Permitting',
          body:
            'Commercial build-outs in Sarasota must comply with ADA requirements for switch and outlet heights (generally 15–48 inches above finished floor for forward reach), as well as local building department permitting and inspection requirements. Majors Electrical ensures all device placement meets ADA standards, handles the complete electrical permit process with Sarasota County or the City of Sarasota, and schedules inspections to align with the construction timeline.',
          bullets: [
            'ADA-compliant switch and outlet heights (15"–48" AFF)',
            'Accessible electrical panels with required clearances',
            'Sarasota County electrical permitting and inspection coordination',
            'As-built electrical drawings for tenant records and future modifications',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How long does the electrical phase of an office build-out take in Sarasota?',
        answer:
          'The timeline depends on the space size and complexity. A typical 1,500- to 3,000-square-foot office build-out requires three to five days for rough-in wiring and two to three days for final trim (devices, fixtures, and cover plates). We coordinate our schedule with the GC and other trades to avoid delays. Larger or more complex build-outs with server rooms and specialized equipment may take longer.',
      },
      {
        question: 'Does Majors Electrical handle the electrical permit for commercial build-outs?',
        answer:
          'Yes. We prepare the electrical permit application, submit it to the Sarasota County Building Department or the City of Sarasota (depending on jurisdiction), and schedule all required inspections—typically a rough-in inspection after wiring is installed and a final inspection after devices and fixtures are in place. Our experience with local inspectors and code requirements helps ensure first-pass approvals.',
      },
      {
        question: 'Can you add more power outlets to an existing office without a full renovation?',
        answer:
          'Yes. We frequently add outlets, circuits, and data drops to existing office spaces without major disruption. Depending on the building construction, we route new wiring through accessible ceiling plenums, wall cavities, or surface-mounted raceway (Wiremold). For slab floors, floor boxes with power and data can be added by core-drilling the concrete—we coordinate this with building management.',
      },
      {
        question: 'What lighting is best for a commercial office in Sarasota?',
        answer:
          'Modern office lighting standards call for 30–50 foot-candles of ambient light at desk height, achieved with 2x4 or 2x2 LED troffers, recessed LED panels, or linear LED fixtures. We specify 4000K color temperature for offices—it provides a bright, energizing light that promotes productivity without the harshness of 5000K. Dimmable fixtures and occupancy sensors further reduce energy costs.',
      },
    ],
    relatedServices: ['commercial', 'data-cabling', 'led-retrofits', 'dedicated-circuits'],
    galleryImages: [
      { src: '/gallery/office-buildout-rough-in.webp', alt: 'Electrical rough-in for a commercial office build-out in Sarasota', caption: 'Rough-in wiring for a 3,000 sq ft Sarasota office build-out' },
      { src: '/gallery/office-buildout-panel.webp', alt: 'Sub-panel installation for an office build-out in Lakewood Ranch', caption: 'Sub-panel installation with labeled circuits' },
      { src: '/gallery/office-buildout-lighting.webp', alt: 'LED troffer lighting installed in a Sarasota office', caption: 'LED troffer lighting layout at 4000K for productive workspace' },
      { src: '/gallery/office-buildout-data-cabling.webp', alt: 'Data cabling installation during an office build-out in Sarasota', caption: 'Structured cabling for workstations and conference rooms' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a commercial build-out project', caption: 'Office build-out electrical services in Sarasota' },
    ],
  },

  'led-retrofits': {
    content: {
      intro:
        'LED retrofits are the fastest way to reduce lighting energy costs and improve light quality in Sarasota homes and businesses. Majors Electrical replaces outdated fluorescent tubes, incandescent bulbs, and HID fixtures with energy-efficient LED equivalents—delivering 50–75% energy savings, dramatically longer fixture life, and superior light quality, all while qualifying for FPL utility rebates that offset your upfront investment.',
      sections: [
        {
          heading: 'Commercial LED Retrofit Solutions',
          body:
            'Commercial buildings in Sarasota—offices, warehouses, retail stores, and restaurants—often rely on aging T8 fluorescent tubes, 400W metal halide high-bays, or outdated recessed cans that waste energy and require frequent maintenance. Majors Electrical performs one-for-one LED replacements using Type A (plug-and-play), Type B (direct wire/ballast bypass), or Type C (external driver) LED tubes for fluorescent fixtures, and complete LED head replacements for high-bay and exterior fixtures.',
          bullets: [
            'T8/T12 fluorescent to LED tube conversion (Type A, B, or C)',
            'Metal halide and HPS high-bay to LED high-bay replacement',
            'Recessed can to LED retrofit module or wafer conversion',
            'Exterior wallpack, floodlight, and parking lot LED upgrades',
            '50–75% energy reduction on lighting circuits',
          ],
        },
        {
          heading: 'Residential LED Upgrades',
          body:
            'Many Sarasota homes still have incandescent or CFL bulbs, outdated recessed can trims, and fluorescent fixtures in kitchens and garages. Majors Electrical upgrades these to LED alternatives that use a fraction of the energy, last 15–25 years, and produce better-quality light. Residential LED upgrades also reduce the heat output of lighting fixtures—every watt saved on lighting is a watt your air conditioner doesn\'t have to remove, compounding the energy savings in Florida\'s hot climate.',
          bullets: [
            'Recessed can to LED wafer or retrofit module conversion',
            'Kitchen fluorescent to LED panel or fixture replacement',
            'Garage and utility fluorescent to LED wraparound or strip lights',
            'Dimmer switch upgrades for LED compatibility',
            'Reduced heat load lowers air conditioning costs',
          ],
        },
        {
          heading: 'FPL Rebates and ROI Analysis',
          body:
            'FPL offers rebates for qualifying commercial and residential LED upgrades that can offset 20–30% of the project cost. Majors Electrical includes rebate eligibility analysis in every LED retrofit proposal and handles the rebate paperwork on your behalf. We also provide a detailed ROI calculation showing your projected energy savings, payback period, and total return—most commercial LED retrofits pay for themselves within 18 to 36 months.',
          bullets: [
            'FPL rebate eligibility assessment and application assistance',
            'Detailed ROI analysis with projected energy savings',
            'Typical commercial payback period of 18–36 months',
            'Reduced maintenance costs (no more ballast or bulb replacements)',
            'Documentation for LEED, Energy Star, and sustainability reporting',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'How much can I save with a commercial LED retrofit in Sarasota?',
        answer:
          'The savings depend on your current fixtures and operating hours, but most commercial LED retrofits reduce lighting energy costs by 50–75%. A typical Sarasota office with 100 fluorescent fixtures operating 10 hours daily saves $3,000 to $5,000 annually after converting to LED. Warehouses with high-bay fixtures see even larger savings due to the high wattage of the fixtures being replaced.',
      },
      {
        question: 'What is the difference between Type A, Type B, and Type C LED tubes?',
        answer:
          'Type A (plug-and-play) LED tubes work with the existing fluorescent ballast—no rewiring needed, but you still depend on the ballast. Type B (direct wire/ballast bypass) LED tubes bypass the ballast entirely, connecting directly to line voltage—this eliminates future ballast failures. Type C LED tubes use an external LED driver mounted remotely. We recommend Type B for most commercial retrofits because it eliminates the ballast as a failure point.',
      },
      {
        question: 'Are there rebates for LED retrofits from FPL?',
        answer:
          'Yes. FPL\'s business and residential energy efficiency programs offer rebates for qualifying LED upgrades. Rebate amounts vary by fixture type and wattage reduction. We include FPL rebate analysis in every proposal and handle the application process. Rebates can offset 20–30% of the total project cost, significantly improving the payback timeline.',
      },
      {
        question: 'Can LED retrofits be done without shutting down my business?',
        answer:
          'In most cases, yes. We can retrofit fixtures area by area during business hours, or perform the work after hours and on weekends for minimal disruption. Each fixture conversion takes only a few minutes—a typical 100-fixture office can be completed in one to two days. We coordinate scheduling with your operations to ensure your business continues running smoothly.',
      },
      {
        question: 'How long do LED fixtures last compared to fluorescent?',
        answer:
          'LED fixtures and tubes last 50,000 to 100,000 hours compared to 20,000 to 30,000 hours for fluorescent tubes. At typical commercial operating hours (10 hours/day, 5 days/week), LEDs last 19 to 38 years—far longer than the 7- to 12-year life of fluorescent tubes. This dramatically reduces lamp replacement labor and material costs over time.',
      },
    ],
    relatedServices: ['commercial', 'interior-lighting', 'parking-lot-lights', 'energy-management'],
    galleryImages: [
      { src: '/gallery/led-retrofit-commercial-office.webp', alt: 'LED troffer retrofit in a Sarasota commercial office', caption: 'Fluorescent to LED troffer conversion in a Sarasota office' },
      { src: '/gallery/led-retrofit-warehouse-highbay.webp', alt: 'LED high-bay retrofit in a Sarasota warehouse', caption: 'Metal halide to LED high-bay retrofit—60% energy reduction' },
      { src: '/gallery/led-retrofit-residential-recessed.webp', alt: 'Recessed LED retrofit modules installed in a Sarasota home', caption: 'Residential recessed can to LED retrofit conversion' },
      { src: '/gallery/led-retrofit-parking-lot.webp', alt: 'LED parking lot light heads installed at a Sarasota commercial property', caption: 'Parking lot HPS to LED head conversion' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at an LED retrofit project', caption: 'LED retrofit services throughout Sarasota and Tampa Bay' },
    ],
  },

  'dedicated-circuits': {
    content: {
      intro:
        'Dedicated circuits provide exclusive, unshared electrical power to high-demand appliances and equipment—preventing tripped breakers, voltage drops, and the electrical interference that occurs when heavy loads share circuits with other devices. Majors Electrical installs dedicated circuits for appliances, workshops, home offices, and commercial equipment throughout Sarasota, properly sizing each circuit for its specific load per NEC Article 210.',
      sections: [
        {
          heading: 'Why Dedicated Circuits Are Necessary',
          body:
            'Modern homes and businesses contain appliances and equipment that draw significant current—air conditioners, electric ranges, EV chargers, welders, medical devices, and commercial kitchen equipment. When these heavy loads share a circuit with other devices, the combined current can exceed the circuit\'s rating, tripping the breaker or causing voltage drops that damage sensitive equipment. NEC Article 210 requires dedicated circuits for many of these loads, and Majors Electrical ensures your electrical system provides the isolated power each device needs.',
          bullets: [
            'Prevents breaker trips from overloaded shared circuits',
            'Eliminates voltage drops that damage sensitive electronics',
            'Required by NEC for ranges, dryers, dishwashers, and disposals',
            'Protects computer equipment and medical devices from interference',
            'Essential for EV chargers, workshop tools, and HVAC equipment',
          ],
        },
        {
          heading: 'Common Dedicated Circuit Applications',
          body:
            'Majors Electrical installs dedicated circuits for a wide range of residential and commercial applications. Residential dedicated circuits commonly serve kitchen appliances (microwave, dishwasher, disposal, refrigerator), laundry equipment (washer, dryer), HVAC systems, hot tubs, and home office equipment. Commercial dedicated circuits power server racks, commercial kitchen appliances, medical imaging equipment, and manufacturing machinery.',
          bullets: [
            'Kitchen: microwave, dishwasher, disposal, refrigerator (each on its own circuit)',
            'Laundry: washer (20A) and dryer (30A 240V)',
            'Home office: computer, printer, and network equipment',
            'Workshop: table saw, welder, air compressor',
            'Commercial: server rack, commercial refrigeration, medical equipment',
          ],
        },
        {
          heading: 'Circuit Sizing and Wire Selection',
          body:
            'Every dedicated circuit must be sized for the specific appliance or equipment it serves. Majors Electrical calculates the required amperage based on the device\'s nameplate rating, applies the NEC 80% continuous-load rule where applicable (NEC 210.20), and selects the appropriate wire gauge and breaker size. We also account for voltage drop on longer runs—runs over 50 feet in a residential setting may require upsizing the wire to maintain proper voltage at the device.',
          bullets: [
            'Wire gauge matched to breaker size: 12 AWG for 20A, 10 AWG for 30A, 8 AWG for 40A',
            'NEC 210.20 continuous-load rule: breaker rated at 125% of continuous load',
            'Voltage drop calculation for long runs—under 3% per NEC recommendation',
            'Proper circuit identification and panel labeling',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Which appliances require a dedicated circuit?',
        answer:
          'NEC requires dedicated circuits for permanently installed appliances including electric ranges, dryers, dishwashers, garbage disposals, and HVAC equipment. Kitchen countertop receptacles must be served by at least two dedicated 20A small-appliance circuits per NEC 210.52(B). Refrigerators, microwaves, washers, and garage door openers are strongly recommended for dedicated circuits as well. Majors Electrical evaluates your specific loads and recommends dedicated circuits accordingly.',
      },
      {
        question: 'How much does it cost to add a dedicated circuit in Sarasota?',
        answer:
          'A typical dedicated 20A/120V circuit installation in Sarasota runs $250 to $500, depending on the distance from the panel to the device location and the routing complexity. A 240V circuit (for a dryer, range, or EV charger) typically costs $400 to $800+ due to the heavier wire and double-pole breaker. We provide exact pricing after evaluating the panel location and cable route.',
      },
      {
        question: 'Can I add a dedicated circuit if my panel is full?',
        answer:
          'Yes, there are several options. We can install tandem (half-size) breakers where the panel is listed for them, freeing up slots for full-size dedicated circuits. If the panel doesn\'t accept tandem breakers or is at its maximum bus capacity, a sub-panel can be installed to provide additional circuit capacity. In some cases, a main panel upgrade is the most cost-effective long-term solution.',
      },
      {
        question: 'What happens if I don\'t have a dedicated circuit for my window AC unit?',
        answer:
          'Sharing a circuit with a window AC unit is a common cause of tripped breakers in Sarasota homes. A window AC draws 8–15 amps, and when combined with other devices on the same circuit, the total can exceed the 15A or 20A breaker rating. A dedicated circuit for the AC unit eliminates this problem and ensures the unit receives stable voltage for reliable, efficient operation.',
      },
    ],
    relatedServices: ['panel-upgrades', 'appliance-circuits', 'ev-charging', 'home-remodels'],
    galleryImages: [
      { src: '/gallery/dedicated-circuit-panel-breaker.webp', alt: 'Dedicated circuit breaker labeled in a Sarasota home panel', caption: 'Labeled dedicated circuit breaker for a kitchen dishwasher' },
      { src: '/gallery/dedicated-circuit-240v-outlet.webp', alt: '240V outlet installation for a dryer in a Sarasota home', caption: '30A/240V dedicated dryer circuit with NEMA 14-30 outlet' },
      { src: '/gallery/dedicated-circuit-workshop.webp', alt: 'Dedicated electrical circuits in a Sarasota home workshop', caption: 'Multiple dedicated circuits for workshop equipment' },
      { src: '/gallery/dedicated-circuit-home-office.webp', alt: 'Dedicated circuit installed for a home office in Sarasota', caption: 'Dedicated 20A circuit for home office equipment' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a dedicated circuit installation', caption: 'Dedicated circuit installation services in Sarasota' },
    ],
  },

  'signage-power': {
    content: {
      intro:
        'Illuminated business signage is your Sarasota storefront\'s most visible marketing asset—and it requires properly installed, code-compliant electrical power to operate safely and reliably. Majors Electrical provides the complete electrical infrastructure for illuminated signs, including dedicated circuits, time clock and photocell controls, disconnect switches per NEC Article 600, and coordination with sign manufacturers on voltage and amperage requirements.',
      sections: [
        {
          heading: 'NEC Article 600: Sign Electrical Requirements',
          body:
            'NEC Article 600 governs the installation of electric signs and outline lighting. Every commercial occupancy in Sarasota is required to have at least one dedicated 20-amp branch circuit for signage, regardless of whether a sign is installed at the time of build-out. Each sign must have a listed disconnect switch within sight of the sign, and all wiring must comply with the specific requirements for the sign type—neon, LED, fluorescent, or channel letter. Majors Electrical ensures your sign power meets every NEC 600 requirement.',
          bullets: [
            'Dedicated 20A branch circuit for signage per NEC 600.5(A)',
            'Listed disconnect switch within sight of the sign per NEC 600.6',
            'Proper circuit sizing based on sign manufacturer specifications',
            'Weatherproof wiring and connections for exterior sign installations',
            'Ground-fault protection for signs per NEC 600.7 where required',
          ],
        },
        {
          heading: 'Sign Lighting Controls',
          body:
            'Business signage in Sarasota should operate on an automated schedule—on at dusk and off at close of business or at a set time. Majors Electrical installs photocell sensors, astronomical timers, and smart controls that automate your sign operation, eliminating the need for manual switching and ensuring your sign is always illuminated during business-appropriate hours. For tenants in shopping centers, we coordinate with the property management\'s master lighting schedule.',
          bullets: [
            'Photocell sensors for automatic dusk-to-dawn operation',
            'Astronomical timers adjusting for seasonal daylight changes',
            'Smart controls with app-based scheduling and monitoring',
            'Time clock integration for business-hours-only operation',
            'Shopping center master lighting schedule coordination',
          ],
        },
        {
          heading: 'Sign Types and Power Requirements',
          body:
            'Different sign types have distinct electrical requirements. LED channel letter signs typically operate on 12V or 24V DC with a remote power supply. Neon signs require high-voltage transformers (up to 15,000V). Cabinet signs with fluorescent or LED modules need standard 120V or 277V circuits. Majors Electrical coordinates with your sign manufacturer to determine the exact power specifications and installs the appropriate circuit, transformer mounting, and disconnect for your specific sign.',
          bullets: [
            'LED channel letters: 12V/24V DC with remote power supply',
            'Neon signs: high-voltage transformer and GTO cable',
            'Illuminated cabinet signs: 120V or 277V LED module circuits',
            'Monument and pylon signs: underground power feed and disconnect',
            'Digital displays: dedicated circuit with surge protection',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Does my Sarasota business need a dedicated circuit for signage?',
        answer:
          'Yes. NEC 600.5(A) requires at least one dedicated 20-amp branch circuit for sign power at every commercial occupancy, even if no sign is currently installed. This requirement ensures that future sign installations have a ready power source without overloading other circuits. When we perform commercial build-outs, we always include the required sign circuit as part of the base electrical scope.',
      },
      {
        question: 'What kind of disconnect switch does my business sign need?',
        answer:
          'NEC 600.6 requires a listed disconnect switch located within sight of the sign and within 50 feet. For exterior signs, this is typically a weather-rated fused disconnect or non-fused switch mounted on the building exterior near the sign location. The disconnect allows sign service technicians to safely de-energize the sign without accessing the electrical panel inside the building.',
      },
      {
        question: 'Can you power a sign on the street side of my building if the panel is in the back?',
        answer:
          'Yes. We route the dedicated sign circuit from your panel through the building to the sign location, often running through the attic, above a drop ceiling, or along the exterior in weatherproof conduit. For monument or pylon signs away from the building, we run underground conduit from the building to the sign base, including a disconnect switch at the sign per NEC 600.6.',
      },
      {
        question: 'How do I automate my business sign to turn on and off?',
        answer:
          'We install a photocell sensor or astronomical timer on the sign circuit so the sign illuminates automatically at dusk. If you want the sign to turn off at a specific time (e.g., midnight) rather than running until dawn, a combination timer/photocell provides both dusk-on and time-off control. Smart controls add the ability to adjust schedules from your phone and receive alerts if the sign circuit loses power.',
      },
      {
        question: 'Does Majors Electrical install the signs themselves?',
        answer:
          'Our scope covers the electrical infrastructure—circuits, disconnects, controls, and wiring to the sign location. The physical sign fabrication and mounting are typically handled by a sign company. We coordinate directly with your sign manufacturer to ensure our electrical rough-in matches their connection requirements, and we perform the final electrical connection once the sign is mounted.',
      },
    ],
    relatedServices: ['commercial', 'automatic-timer-lighting', 'dedicated-circuits', 'led-retrofits'],
    galleryImages: [
      { src: '/gallery/signage-power-channel-letters.webp', alt: 'Electrical connection for LED channel letter sign at a Sarasota business', caption: 'Power supply and wiring for LED channel letter sign' },
      { src: '/gallery/signage-power-disconnect.webp', alt: 'Sign disconnect switch installed on a Sarasota commercial building', caption: 'NEC 600.6 compliant disconnect within sight of sign' },
      { src: '/gallery/signage-power-photocell.webp', alt: 'Photocell and timer control for business signage in Sarasota', caption: 'Photocell and timer for automated sign operation' },
      { src: '/gallery/signage-power-monument-conduit.webp', alt: 'Underground conduit run to a monument sign at a Sarasota business', caption: 'Underground power feed to a freestanding monument sign' },
      { src: '/gallery/majors-van-jobsite.webp', alt: 'Majors Electrical van at a commercial signage power installation', caption: 'Signage power installation services in Sarasota' },
    ],
  },

};
