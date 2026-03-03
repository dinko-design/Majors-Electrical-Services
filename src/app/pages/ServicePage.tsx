import { useParams, Link, Navigate } from 'react-router';
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Star, 
  Clock, 
  UserCheck,
  CalendarCheck,
  Zap,
  Building2,
  Quote
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { services } from '@/app/data/services';
import { teamMembers } from '@/app/data/team';
import { motion } from 'motion/react';
import { QuickServiceForm } from '@/app/components/forms/QuickServiceForm';

export function ServicePage() {
  const { serviceId } = useParams();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  // Mock Gallery Images (in a real app, these would be filtered by service type)
  const galleryImages = [
    service.image,
    "https://images.unsplash.com/photo-1629735064254-89171d7b4366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    "https://images.unsplash.com/photo-1591117573987-3a481519705f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    "https://images.unsplash.com/photo-1627431995640-12601870d4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  ];

  const reviews = [
    {
      name: "Jennifer M.",
      location: "Sarasota, FL",
      rating: 5,
      text: "Majors Electrical was fantastic! They arrived on time, fixed our issue quickly, and left everything clean. Highly recommend.",
      date: "2 months ago"
    },
    {
      name: "Robert D.",
      location: "Bradenton, FL",
      rating: 5,
      text: "Professional and knowledgeable. They upgraded our panel and installed a new EV charger. The whole process was seamless.",
      date: "1 month ago"
    },
    {
      name: "Sarah L.",
      location: "Lakewood Ranch, FL",
      rating: 5,
      text: "I called for an emergency repair and they were there within 2 hours. Excellent service and fair pricing.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[600px] py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
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
                <Link to="/services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>{service.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {service.title} <br/>
                <span className="text-primary">in Sarasota & Tampa Bay</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {service.subtitle} Professional, code-compliant installation and repair by your local electrical experts.
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
                  More Details
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
                  <span className="text-foreground">5.0/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Licensed & Insured</span>
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
              <QuickServiceForm serviceTitle={service.title} />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* Overview & Local Presence */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Local {service.title} Experts</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  {service.description}
                </p>
                <p className="mb-4">
                  At Majors Electrical, we understand the unique electrical challenges of the Florida Gulf Coast—from salt air corrosion to lightning protection. Our team is locally based in Sarasota and serves the entire region up to Tampa Bay.
                </p>
                <p>
                  Whether you're renovating a historic home in Bradenton or fitting out a new office in Lakewood Ranch, we bring the same level of precision, safety, and respect to every job site. We don't just fix wires; we power your peace of mind.
                </p>
              </div>
            </motion.section>

            {/* What We Offer - Expanded Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">What Our Service Includes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeIn}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm"
                  >
                    <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">{feature}</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional execution with premium materials and full code compliance.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Who This Is For */}
            <section className="bg-muted/30 -mx-6 p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Who We Serve</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">Homeowners</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhance your living space with safety upgrades and modern conveniences.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">Businesses</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimize downtime with reliable power infrastructure for your operations.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold">Property Managers</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick response times and detailed reporting for your rental units.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Process */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-8">Our Process</h3>
              <div className="relative border-l-2 border-primary/20 pl-8 space-y-10 ml-4">
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <h4 className="text-lg font-bold mb-2">1. Consultation & Quote</h4>
                  <p className="text-muted-foreground">We discuss your needs over the phone or visit your property for a detailed assessment, providing a transparent, upfront price.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <h4 className="text-lg font-bold mb-2">2. Scheduling & Prep</h4>
                  <p className="text-muted-foreground">Our office team coordinates a time that works for you. We pull any necessary permits and handle logistics.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <h4 className="text-lg font-bold mb-2">3. Expert Installation</h4>
                  <p className="text-muted-foreground">Our licensed electricians arrive on time, uniformed, and ready to work. We protect your property and clean up after ourselves.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <h4 className="text-lg font-bold mb-2">4. Final Inspection</h4>
                  <p className="text-muted-foreground">We test everything to ensure safety and function, and walk you through the new system before we leave.</p>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section>
               <h3 className="text-2xl font-bold text-foreground mb-8">Customer Reviews</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {reviews.map((review, i) => (
                   <div key={i} className={`bg-card p-6 rounded-xl border border-border shadow-sm ${i === 2 ? 'md:col-span-2' : ''}`}>
                     <div className="flex gap-1 mb-4">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                       ))}
                     </div>
                     <p className="text-muted-foreground mb-6 italic relative">
                       <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 rotate-180" />
                       "{review.text}"
                     </p>
                     <div className="flex items-center justify-between">
                       <div>
                         <p className="font-bold text-foreground">{review.name}</p>
                         <p className="text-xs text-muted-foreground">{review.location}</p>
                       </div>
                       <span className="text-xs text-muted-foreground">{review.date}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Gallery */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-8">Recent Projects</h3>
              <div className="grid grid-cols-2 gap-4 h-auto md:h-[600px]">
                <div className="col-span-1 h-[300px] md:h-full rounded-2xl overflow-hidden border border-border shadow-sm group">
                   <ImageWithFallback
                    src={galleryImages[0]}
                    alt="Project Main"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-1 grid grid-rows-2 gap-4 h-[300px] md:h-full">
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm group">
                     <ImageWithFallback
                      src={galleryImages[1]}
                      alt="Project Detail 1"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm group">
                       <ImageWithFallback
                        src={galleryImages[2]}
                        alt="Project Detail 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm group relative">
                       <ImageWithFallback
                        src={galleryImages[3]}
                        alt="Project Detail 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">
                        + More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Offer Card */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">
                  WEB OFFER
                </div>
                <h3 className="text-2xl font-bold mb-2">Save $50</h3>
                <p className="text-primary-foreground/90 mb-6 text-sm">
                  Book your {service.title.toLowerCase()} service online and receive $50 off your first invoice.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-primary font-bold py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Claim Offer
                </Link>
                <p className="text-xs text-center mt-3 text-primary-foreground/70">
                  *Valid for new customers in Sarasota & Manatee counties.
                </p>
              </div>
            </div>

            {/* Meet the Team Preview */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">Meet the Experts</h3>
              <div className="space-y-4">
                {teamMembers.slice(0, 2).map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-border">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="block mt-4 text-sm text-primary font-medium hover:underline text-center">
                View Full Team &rarr;
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="bg-muted/50 p-6 rounded-xl border border-border/50 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Licensed #EC 13007355</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">5-Star Rated on Google</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Same-Day Service Avail.</span>
              </div>
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Easy Online Scheduling</span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Areas Served
              </h4>
              <ul className="space-y-2">
                {[
                  'Sarasota', 'Bradenton', 'Lakewood Ranch', 'Venice', 
                  'North Port', 'Siesta Key', 'Longboat Key', 'Ellenton'
                ].map((city) => (
                  <li key={city}>
                    <Link 
                      to={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {city}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/locations" className="text-sm font-medium text-primary hover:underline block text-center">
                  View Service Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#111] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your property?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact Majors Electrical today for safe, reliable {service.title.toLowerCase()} in Sarasota and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all"
              >
                Schedule Service Now
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
