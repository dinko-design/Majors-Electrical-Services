import { useEffect } from 'react';
import { Link } from 'react-router';
import { MapPin, ArrowRight, Phone, Zap, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { locations as locationData } from '@/app/data/locations';
import { motion } from 'motion/react';

const locationsList = Object.values(locationData);

const stats = [
  { value: '6',   label: 'Service Areas' },
  { value: '30+', label: 'Neighborhoods' },
  { value: '50+', label: 'Services Offered' },
  { value: '24/7', label: 'Emergency Line' },
];

// Approximate pixel positions for each city on the SVG map (500×520 viewBox)
const cityMapPositions: Record<string, { x: number; y: number; anchor: 'start' | 'end' }> = {
  'tampa-bay':      { x: 375, y: 72,  anchor: 'start' },
  'bradenton':      { x: 278, y: 158, anchor: 'end'   },
  'lakewood-ranch': { x: 388, y: 198, anchor: 'start' },
  'sarasota':       { x: 252, y: 242, anchor: 'end'   },
  'venice':         { x: 218, y: 338, anchor: 'end'   },
  'north-port':     { x: 292, y: 390, anchor: 'start' },
};

function ServiceAreaMap() {
  const pairs: { a: string; b: string }[] = [];
  locationsList.forEach((loc, i) =>
    locationsList.slice(i + 1).forEach((loc2) => {
      const p1 = cityMapPositions[loc.slug];
      const p2 = cityMapPositions[loc2.slug];
      if (!p1 || !p2) return;
      const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
      if (dist < 130) pairs.push({ a: loc.slug, b: loc2.slug });
    })
  );

  return (
    <svg
      viewBox="0 0 500 520"
      className="w-full max-w-sm mx-auto lg:max-w-none"
      aria-label="Map showing Majors Electrical service areas on Florida Gulf Coast"
    >
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0E7EC0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#61C5D0" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2F4FC" />
          <stop offset="100%" stopColor="#E4E8F5" />
        </linearGradient>
        <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="coverageGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0E7EC0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0E7EC0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Water */}
      <path
        d="M 0,0 L 185,0 C 170,55 165,95 178,135 C 190,175 165,215 152,258 C 140,298 138,335 148,375 C 158,415 162,465 168,520 L 0,520 Z"
        fill="url(#waterGrad)"
      />
      {/* Land */}
      <path
        d="M 185,0 L 500,0 L 500,520 L 168,520 C 162,465 158,415 148,375 C 138,335 140,298 152,258 C 165,215 190,175 178,135 C 165,95 170,55 185,0 Z"
        fill="url(#landGrad)"
      />
      {/* Coastline */}
      <path
        d="M 185,0 C 170,55 165,95 178,135 C 190,175 165,215 152,258 C 140,298 138,335 148,375 C 158,415 162,465 168,520"
        fill="none"
        stroke="#0E7EC0"
        strokeWidth="2.5"
        strokeDasharray="8,5"
        opacity="0.55"
      />
      {/* Gulf of Mexico label */}
      <text
        x="76"
        y="265"
        textAnchor="middle"
        fill="#0E7EC0"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
        opacity="0.65"
        transform="rotate(-90 76 265)"
      >
        GULF OF MEXICO
      </text>
      {/* Coverage blob */}
      <ellipse cx="305" cy="228" rx="155" ry="200" fill="url(#coverageGrad)" />
      <ellipse
        cx="305" cy="228" rx="155" ry="200"
        fill="none"
        stroke="#0E7EC0"
        strokeWidth="1.5"
        strokeDasharray="6,4"
        opacity="0.22"
      />
      {/* Connection lines */}
      {pairs.map(({ a, b }) => {
        const p1 = cityMapPositions[a];
        const p2 = cityMapPositions[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={p1.x} y1={p1.y}
            x2={p2.x} y2={p2.y}
            stroke="#0E7EC0"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.28"
          />
        );
      })}
      {/* City markers */}
      {locationsList.map((loc) => {
        const pos = cityMapPositions[loc.slug];
        if (!pos) return null;
        return (
          <g key={loc.slug} filter="url(#dotGlow)">
            <circle cx={pos.x} cy={pos.y} r="14" fill="#0E7EC0" fillOpacity="0.14" />
            <circle cx={pos.x} cy={pos.y} r="8"  fill="white"   stroke="#0E7EC0" strokeWidth="2.5" />
            <circle cx={pos.x} cy={pos.y} r="4"  fill="#0E7EC0" />
            <text
              x={pos.anchor === 'start' ? pos.x + 16 : pos.x - 16}
              y={pos.y + 4}
              textAnchor={pos.anchor}
              fill="#111125"
              fontSize="12"
              fontWeight="700"
            >
              {loc.name}
            </text>
          </g>
        );
      })}
      <text x="420" y="492" textAnchor="middle" fill="#5C5C6F" fontSize="10" fontWeight="600" opacity="0.55">
        FLORIDA
      </text>
    </svg>
  );
}

export function Locations() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Electrician'],
      '@id': 'https://majorselectrical.com',
      name: 'Majors Electrical Services',
      description:
        'Licensed electricians serving the Florida Gulf Coast — Sarasota, Bradenton, Lakewood Ranch, Venice, North Port, and Tampa Bay.',
      url: 'https://majorselectrical.com',
      telephone: '+19413209868',
      priceRange: '$$',
      areaServed: locationsList.map((loc) => ({
        '@type': 'City',
        name: loc.name,
        containedIn: { '@type': 'State', name: 'Florida' },
      })),
      serviceType: 'Electrical Services',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://majorselectrical.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://majorselectrical.com/locations' },
      ],
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id   = 'schema-locations-hub';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id   = 'schema-locations-breadcrumb';
    breadcrumbScript.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(breadcrumbScript);

    document.title = 'Service Areas | Majors Electrical Services';

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Majors Electrical Services covers Sarasota, Bradenton, Lakewood Ranch, Venice, North Port, and Tampa Bay. Licensed local electricians for residential and commercial projects.';

    return () => {
      document.getElementById('schema-locations-hub')?.remove();
      document.getElementById('schema-locations-breadcrumb')?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111125] py-24 md:py-32">
        {/* Circuit grid */}
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0E7EC0" strokeWidth="0.8" />
                <circle cx="0"  cy="0"  r="2" fill="#0E7EC0" />
                <circle cx="48" cy="0"  r="2" fill="#0E7EC0" />
                <circle cx="0"  cy="48" r="2" fill="#0E7EC0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full opacity-[0.18]"
          style={{ background: 'radial-gradient(ellipse, #0E7EC0 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 text-sm font-semibold mb-8 text-[#61C5D0]">
              <MapPin className="h-4 w-4" />
              Florida Gulf Coast
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
              We Come{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #0E7EC0, #61C5D0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                To&nbsp;You.
              </span>
            </h1>

            <p className="text-xl text-white/55 max-w-2xl mx-auto mb-14 leading-relaxed">
              Majors Electrical proudly serves the Florida Gulf Coast. Professional, licensed electrical work delivered to your door.
            </p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/5 py-7 px-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Location Cards ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Service Areas</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Click any area to see local services, neighborhoods, and special offers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locationsList.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/locations/${loc.slug}`}
                  className="group relative block overflow-hidden rounded-2xl"
                  style={{ aspectRatio: '4/5' }}
                >
                  {/* Photo */}
                  <ImageWithFallback
                    src={loc.heroImage}
                    alt={`Electrician in ${loc.name}, FL`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Permanent dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
                  {/* Hover colour tint */}
                  <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                    <MapPin className="h-3 w-3 text-[#61C5D0]" />
                    {loc.neighborhoods.length} neighborhoods
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                    <Zap className="h-3 w-3 text-[#61C5D0]" />
                    {loc.popularServices.length} services
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 space-y-3">
                    <h3 className="text-2xl font-bold text-white">{loc.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{loc.description}</p>

                    {/* Service pills — animate in on hover */}
                    <div className="flex flex-wrap gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {loc.popularServices.slice(0, 3).map((s) => (
                        <span
                          key={s.name}
                          className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>

                    {/* CTA strip */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-sm font-semibold text-white">Explore {loc.name}</span>
                      <div className="h-8 w-8 rounded-full bg-primary/80 group-hover:bg-primary flex items-center justify-center transition-colors">
                        <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage Map ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                <div className="h-px w-8 bg-primary" />
                Coverage Area
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Covering the Florida Gulf Coast
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We travel throughout Sarasota, Manatee, and parts of Hillsborough and Charlotte counties. Our trucks are regularly in your neighborhood.
              </p>

              <ul className="space-y-3 mb-8">
                {locationsList.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="group flex items-center gap-3 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {loc.name}
                      </span>
                      <span className="text-muted-foreground hidden sm:inline">—</span>
                      <span className="text-muted-foreground hidden sm:inline line-clamp-1 flex-1">{loc.tagline}</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
                <p className="font-semibold text-foreground mb-1">Not sure if we cover your area?</p>
                <p className="text-sm text-muted-foreground mb-4">Give us a call — we'll confirm coverage and get you scheduled fast.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+19413209868"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Phone className="h-4 w-4" />
                    (941) 320-9868
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Book Online <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: SVG map */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl border border-border bg-white shadow-lg overflow-hidden p-6">
                <ServiceAreaMap />
                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary inline-block" />
                    Service city
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-6 border-t-2 border-dashed border-primary/50" />
                    Coverage zone
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#111125] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0E7EC0" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 border border-primary/30 mb-6 mx-auto">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book?</h2>
            <p className="text-white/55 text-xl mb-10 max-w-2xl mx-auto">
              Licensed, insured, and ready to help across the Florida Gulf Coast. Fast response. Upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-white h-14 px-8 text-base font-bold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: '0 0 24px rgba(14,126,192,0.35)' }}
              >
                Schedule Service
              </Link>
              <a
                href="tel:+19413209868"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 h-14 px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                (941) 320-9868
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
