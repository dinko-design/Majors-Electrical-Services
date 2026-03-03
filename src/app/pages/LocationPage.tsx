import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock,
  Zap,
  Navigation
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { QuickServiceForm } from '@/app/components/forms/QuickServiceForm';
import { locations } from '@/app/data/locations';
import { motion } from 'motion/react';

// Approximate geo-coordinates for each service area
const geoCoords: Record<string, { lat: number; lng: number }> = {
  'sarasota':       { lat: 27.3364, lng: -82.5307 },
  'bradenton':      { lat: 27.4989, lng: -82.5748 },
  'lakewood-ranch': { lat: 27.4272, lng: -82.3941 },
  'venice':         { lat: 27.0998, lng: -82.4543 },
  'north-port':     { lat: 27.0442, lng: -82.2359 },
  'tampa-bay':      { lat: 27.9506, lng: -82.4572 },
};

export function LocationPage() {
  const { city } = useParams();
  const location = locations[city as keyof typeof locations];

  useEffect(() => {
    if (!location) return;

    const coords = geoCoords[location.slug];

    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Electrician'],
      '@id': `https://majorselectrical.com/locations/${location.slug}`,
      name: `Majors Electrical Services — ${location.name}`,
      description: location.description,
      url: `https://majorselectrical.com/locations/${location.slug}`,
      telephone: '+19413209868',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      ...(coords && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: coords.lat,
          longitude: coords.lng,
        },
      }),
      areaServed: {
        '@type': 'City',
        name: location.name,
        containedIn: { '@type': 'State', name: 'Florida' },
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Electrical Services in ${location.name}`,
        itemListElement: location.popularServices.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        })),
      },
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://majorselectrical.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://majorselectrical.com/locations' },
        { '@type': 'ListItem', position: 3, name: location.name,  item: `https://majorselectrical.com/locations/${location.slug}` },
      ],
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id   = `schema-location-${location.slug}`;
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id   = `schema-breadcrumb-${location.slug}`;
    breadcrumbScript.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(breadcrumbScript);

    document.title = `${location.tagline} | Majors Electrical Services`;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `${location.content.intro} Call Majors Electrical at (941) 320-9868 for fast, licensed service in ${location.name}, FL.`;

    return () => {
      document.getElementById(`schema-location-${location.slug}`)?.remove();
      document.getElementById(`schema-breadcrumb-${location.slug}`)?.remove();
    };
  }, [location]);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[600px] py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={location.heroImage}
            alt={`Electrician in ${location.name}, FL`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Link to="/locations" className="hover:underline">Service Areas</Link>
                <span>/</span>
                <span>{location.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {location.tagline}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {location.description} Local, licensed, and ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+19413209868"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (941) 320-9868
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-14 px-8 text-lg font-semibold transition-all hover:-translate-y-0.5"
                >
                  Book Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-foreground">5-Star Local Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Locally Owned</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <QuickServiceForm serviceTitle={`Electrical Service in ${location.name}`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* Intro Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Expert Electricians in {location.name}</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4 text-xl font-medium text-foreground/80">
                  {location.content.intro}
                </p>
                <p>
                  {location.content.details}
                </p>
              </div>
            </motion.section>

            {/* Popular Services Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Common Services in {location.name}</h3>
                <Link to="/services" className="text-primary font-semibold hover:underline hidden sm:block">View All Services</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.popularServices.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeIn}
                    className="flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Zap className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <Link to={service.link} className="block">
                      <h4 className="font-bold text-foreground text-lg mb-2 hover:text-primary transition-colors">{service.name}</h4>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {service.description}
                    </p>
                    <Link to={service.link} className="text-sm font-bold text-primary hover:underline mt-auto inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us */}
            <section className="bg-muted/30 -mx-6 p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why {location.name} Chooses Majors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">Permitting Experts</h4>
                  <p className="text-sm text-muted-foreground">
                    We handle all the paperwork with the local building department.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">On-Time Arrival</h4>
                  <p className="text-sm text-muted-foreground">
                    We respect your time and call when we are on the way.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">Upfront Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    No surprise bills. You approve the price before we start work.
                  </p>
                </div>
              </div>
            </section>

             {/* Neighborhoods List */}
             <section>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Navigation className="h-6 w-6 text-primary" />
                Neighborhoods We Serve
              </h3>
              <p className="text-muted-foreground mb-6">
                Our technicians are regularly in these {location.name} communities:
              </p>
              <div className="flex flex-wrap gap-3">
                {location.neighborhoods.map((hood) => (
                  <span 
                    key={hood}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                  >
                    <MapPin className="h-3 w-3 mr-2 text-primary" />
                    {hood}
                  </span>
                ))}
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-transparent text-sm font-medium text-muted-foreground">
                  + Many More
                </span>
              </div>
            </section>

            {/* Reviews */}
            {location.reviews && location.reviews.length > 0 && (
              <section>
                 <h3 className="text-2xl font-bold text-foreground mb-8">Local Reviews from {location.name}</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {location.reviews.map((review, i) => (
                     <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                       <div className="flex gap-1 mb-4">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                         ))}
                       </div>
                       <p className="text-muted-foreground mb-6 italic">
                         "{review.text}"
                       </p>
                       <div>
                         <p className="font-bold text-foreground">{review.author}</p>
                         <p className="text-xs text-muted-foreground">{review.location}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Offer Card */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-lg relative overflow-hidden sticky top-24">
              <div className="absolute -right-6 -top-6 h-24 w-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">
                  LOCAL SPECIAL
                </div>
                <h3 className="text-2xl font-bold mb-2">New Customer?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  Residents of {location.name} get $50 off their first service call or installation.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-primary font-bold py-3 rounded-lg hover:bg-white/90 transition-colors shadow-sm"
                >
                  Claim {location.name} Offer
                </Link>
                <p className="text-xs text-center mt-3 text-primary-foreground/70">
                  *Mention code "{location.slug.toUpperCase()}50" when booking.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">Other Service Areas</h4>
              <ul className="space-y-2">
                {Object.values(locations)
                  .filter(l => l.slug !== location.slug)
                  .map((loc) => (
                  <li key={loc.slug}>
                    <Link 
                      to={`/locations/${loc.slug}`}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {loc.name}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#111] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Electrician in {location.name}?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Don't wait. Contact Majors Electrical today for fast, reliable service in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all"
              >
                Schedule Service
              </Link>
              <a
                href="tel:+19413209868"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 h-14 px-8 text-lg font-semibold backdrop-blur-sm transition-colors"
              >
                Call (941) 320-9868
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}
