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
  Building2,
  Quote,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Camera,
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { services, servicesWithContent } from '@/app/data/services';
import { teamMembers } from '@/app/data/team';
import { motion } from 'motion/react';
import { QuickServiceForm } from '@/app/components/forms/QuickServiceForm';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/app/components/ui/accordion';
import { LightboxGallery } from '@/app/components/ui/lightbox-gallery';
import { ServiceSchema } from '@/app/components/ServiceSchema';
import { VideoPlayer } from '@/app/components/VideoPlayer';
import { CTASection } from '@/app/components/layout/CTASection';

const FONT = "'Poppins', sans-serif";

export function ServicePage() {
  const { serviceId } = useParams();
  const service = serviceId
    ? servicesWithContent[serviceId]
    : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const reviews = [
    {
      name: 'Jennifer M.',
      location: 'Sarasota, FL',
      rating: 5,
      text: 'Majors Electrical was fantastic! They arrived on time, fixed our issue quickly, and left everything clean. Highly recommend.',
      date: '2 months ago',
    },
    {
      name: 'Robert D.',
      location: 'Bradenton, FL',
      rating: 5,
      text: 'Professional and knowledgeable. They upgraded our panel and installed a new EV charger. The whole process was seamless.',
      date: '1 month ago',
    },
    {
      name: 'Sarah L.',
      location: 'Lakewood Ranch, FL',
      rating: 5,
      text: 'I called for an emergency repair and they were there within 2 hours. Excellent service and fair pricing.',
      date: '3 weeks ago',
    },
  ];

  const relatedServicesList = (service.relatedServices || [])
    .filter((key) => key in services)
    .slice(0, 4)
    .map((key) => ({
      key,
      ...(services as Record<string, { title: string; subtitle: string; icon: typeof ShieldCheck }>)[key],
    }));

  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'what-we-offer', label: 'What We Offer' },
    ...(service.content?.sections || []).map((s, i) => ({
      id: `section-${i}`,
      label: s.heading,
    })),
    { id: 'our-process', label: 'Our Process' },
    ...(service.faqs && service.faqs.length > 0
      ? [{ id: 'faq', label: 'FAQ' }]
      : []),
    ...(service.galleryImages && service.galleryImages.length > 0
      ? [{ id: 'gallery', label: 'Gallery' }]
      : []),
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="w-full">
      {/* Schema */}
      <ServiceSchema
        serviceId={serviceId!}
        title={service.title}
        description={service.description}
        image={service.image}
        features={service.features}
        faqs={service.faqs}
        galleryImages={service.galleryImages}
      />

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
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-sm font-medium mb-4"
                style={{ fontFamily: FONT }}
              >
                <Link to="/" className="text-primary/70 hover:text-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <Link to="/services" className="text-primary/70 hover:text-primary transition-colors">
                  Services
                </Link>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <span className="text-primary font-semibold">{service.title}</span>
              </nav>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 leading-tight"
                style={{ fontFamily: FONT }}
              >
                {service.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)]">
                  in Sarasota & Tampa Bay
                </span>
              </h1>
              <p
                className="text-xl text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: FONT }}
              >
                {service.subtitle} Professional, code-compliant installation and
                repair by your local electrical experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+19413209868"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 h-14 px-8 text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5"
                  style={{ fontFamily: FONT }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (941) 320-9868
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-14 px-8 text-lg font-bold transition-all hover:-translate-y-0.5"
                  style={{ fontFamily: FONT }}
                >
                  Get a Free Quote
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
                  <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-foreground">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">~5 min read</span>
                </div>
              </div>
            </motion.div>

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Rich Overview */}
            <motion.section
              id="overview"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="scroll-mt-24"
            >
              <h2
                className="text-3xl font-black text-foreground mb-6"
                style={{ fontFamily: FONT }}
              >
                Local {service.title} Experts
              </h2>

              <div className="prose prose-lg max-w-none">
                {service.content?.intro ? (
                  <p
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                    style={{ fontFamily: FONT }}
                  >
                    {service.content.intro}
                  </p>
                ) : (
                  <p
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                    style={{ fontFamily: FONT }}
                  >
                    {service.description} At Majors Electrical, we understand
                    the unique electrical challenges of the Florida Gulf
                    Coast—from salt air corrosion to lightning protection. Our
                    team is locally based in Sarasota and serves the entire
                    region up to Tampa Bay.
                  </p>
                )}
              </div>

              {/* Safety Callout */}
              {service.content?.safetyNote && (
                <div className="mt-6 flex gap-4 p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4
                      className="font-bold text-amber-900 dark:text-amber-200 mb-1"
                      style={{ fontFamily: FONT }}
                    >
                      Safety Notice
                    </h4>
                    <p
                      className="text-sm text-amber-800 dark:text-amber-300"
                      style={{ fontFamily: FONT }}
                    >
                      {service.content.safetyNote}
                    </p>
                  </div>
                </div>
              )}
            </motion.section>

            {/* What We Offer Grid */}
            <motion.section
              id="what-we-offer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="scroll-mt-24"
            >
              <h2
                className="text-3xl font-black text-foreground mb-8"
                style={{ fontFamily: FONT }}
              >
                What Our Service Includes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-[var(--primary)]/40 transition-colors shadow-sm"
                  >
                    <div className="mt-0.5 h-8 w-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-foreground text-lg"
                        style={{ fontFamily: FONT }}
                      >
                        {feature}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mt-1"
                        style={{ fontFamily: FONT }}
                      >
                        Professional execution with premium materials and full
                        code compliance.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technical Content Sections */}
            {service.content?.sections?.map((section, idx) => (
              <motion.section
                key={idx}
                id={`section-${idx}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="scroll-mt-24"
              >
                <h3
                  className="text-2xl font-black text-foreground mb-4"
                  style={{ fontFamily: FONT }}
                >
                  {section.heading}
                </h3>
                <p
                  className="text-muted-foreground text-lg leading-relaxed mb-4"
                  style={{ fontFamily: FONT }}
                >
                  {section.body}
                </p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-muted-foreground"
                        style={{ fontFamily: FONT }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}

            {/* Our Process */}
            <section id="our-process" className="scroll-mt-24">
              <h2
                className="text-3xl font-black text-foreground mb-8"
                style={{ fontFamily: FONT }}
              >
                Our Process
              </h2>
              <div className="relative border-l-2 border-[var(--primary)]/20 pl-8 space-y-10 ml-4">
                {[
                  {
                    step: '1',
                    title: 'Consultation & Quote',
                    desc: 'We discuss your needs over the phone or visit your property for a detailed assessment, providing a transparent, upfront price.',
                  },
                  {
                    step: '2',
                    title: 'Scheduling & Prep',
                    desc: 'Our office team coordinates a time that works for you. We pull any necessary permits and handle logistics.',
                  },
                  {
                    step: '3',
                    title: 'Expert Installation',
                    desc: 'Our licensed electricians arrive on time, uniformed, and ready to work. We protect your property and clean up after ourselves.',
                  },
                  {
                    step: '4',
                    title: 'Final Inspection',
                    desc: 'We test everything to ensure safety and function, and walk you through the new system before we leave.',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-[var(--primary)]" />
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: FONT }}
                    >
                      {item.step}. {item.title}
                    </h4>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: FONT }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-24">
                <h2
                  className="text-3xl font-black text-foreground mb-8"
                  style={{ fontFamily: FONT }}
                >
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="border border-border/50 rounded-xl mb-3 px-5 last:mb-0 data-[state=open]:border-[var(--primary)]/30 data-[state=open]:bg-[var(--primary)]/5 transition-colors"
                    >
                      <AccordionTrigger
                        className="text-base font-bold text-left hover:no-underline"
                        style={{ fontFamily: FONT }}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p
                          className="text-muted-foreground leading-relaxed"
                          style={{ fontFamily: FONT }}
                        >
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* Lightbox Gallery */}
            {service.galleryImages && service.galleryImages.length > 0 && (
              <section id="gallery" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <Camera className="h-6 w-6 text-[var(--primary)]" />
                  <h2
                    className="text-3xl font-black text-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    Our Recent {service.title} Projects
                  </h2>
                </div>
                <LightboxGallery
                  images={service.galleryImages}
                  serviceName={service.title}
                  serviceUrl={`https://majorselectrical.com/services/${serviceId}`}
                />
              </section>
            )}

            {/* Video Player */}
            <section id="video" className="scroll-mt-24">
              <VideoPlayer serviceName={service.title} />
            </section>

            {/* Closing Content with Internal Links */}
            <section id="closing" className="scroll-mt-24">
              <h2
                className="text-3xl font-black text-foreground mb-6"
                style={{ fontFamily: FONT }}
              >
                Why Choose Majors for {service.title}
              </h2>

              <div className="prose prose-lg max-w-none">
                <p
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                  style={{ fontFamily: FONT }}
                >
                  Majors Electrical Services has earned a reputation as the
                  trusted choice for{' '}
                  <Link
                    to="/services"
                    className="text-[var(--primary)] font-medium hover:underline"
                  >
                    electrical services
                  </Link>{' '}
                  across the Sarasota and Tampa Bay region. Our licensed
                  electricians bring years of hands-on experience to every
                  project, whether it's a straightforward repair or a complex
                  installation.
                </p>

                <ul className="space-y-2 mb-6">
                  <li
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0 mt-1" />
                    <span>
                      Licensed, insured, and locally owned — we treat your
                      property like our own
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0 mt-1" />
                    <span>
                      Transparent pricing with no hidden fees — you always know
                      the cost upfront
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0 mt-1" />
                    <span>
                      All work is performed to NEC and Florida Building Code
                      standards
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0 mt-1" />
                    <span>
                      Same-day and emergency service available throughout{' '}
                      <Link
                        to="/locations/sarasota"
                        className="text-[var(--primary)] font-medium hover:underline"
                      >
                        Sarasota
                      </Link>
                      ,{' '}
                      <Link
                        to="/locations/bradenton"
                        className="text-[var(--primary)] font-medium hover:underline"
                      >
                        Bradenton
                      </Link>
                      , and{' '}
                      <Link
                        to="/locations/lakewood-ranch"
                        className="text-[var(--primary)] font-medium hover:underline"
                      >
                        Lakewood Ranch
                      </Link>
                    </span>
                  </li>
                </ul>

                {relatedServicesList.length > 0 && (
                  <p
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                    style={{ fontFamily: FONT }}
                  >
                    Looking for related services? We also provide{' '}
                    {relatedServicesList.map((rs, i) => (
                      <span key={rs.key}>
                        <Link
                          to={`/services/${rs.key}`}
                          className="text-[var(--primary)] font-medium hover:underline"
                        >
                          {rs.title.toLowerCase()}
                        </Link>
                        {i < relatedServicesList.length - 2
                          ? ', '
                          : i === relatedServicesList.length - 2
                            ? ', and '
                            : ''}
                      </span>
                    ))}
                    . Whether you're a{' '}
                    <Link
                      to="/who-we-serve/homeowners"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      homeowner
                    </Link>
                    ,{' '}
                    <Link
                      to="/who-we-serve/commercial"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      business owner
                    </Link>
                    , or{' '}
                    <Link
                      to="/who-we-serve/property-managers"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      property manager
                    </Link>
                    , our team is ready to help.
                  </p>
                )}

                <p
                  className="text-muted-foreground text-lg leading-relaxed"
                  style={{ fontFamily: FONT }}
                >
                  Ready to get started?{' '}
                  <Link
                    to="/contact"
                    className="text-[var(--primary)] font-bold hover:underline"
                  >
                    Contact Majors Electrical today
                  </Link>{' '}
                  for a free consultation and quote on your {service.title.toLowerCase()} project.
                </p>
              </div>
            </section>

            {/* Related Services */}
            {relatedServicesList.length > 0 && (
              <section id="related" className="scroll-mt-24">
                <h2
                  className="text-3xl font-black text-foreground mb-8"
                  style={{ fontFamily: FONT }}
                >
                  Related Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServicesList.map((rs) => {
                    const Icon = rs.icon;
                    return (
                      <Link
                        key={rs.key}
                        to={`/services/${rs.key}`}
                        className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-[var(--primary)]/40 hover:shadow-md transition-all"
                      >
                        <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-bold text-foreground group-hover:text-[var(--primary)] transition-colors truncate"
                            style={{ fontFamily: FONT }}
                          >
                            {rs.title}
                          </h4>
                          <p
                            className="text-sm text-muted-foreground truncate"
                            style={{ fontFamily: FONT }}
                          >
                            {rs.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Who We Serve */}
            <section className="bg-muted/30 -mx-4 sm:-mx-6 p-6 sm:p-8 rounded-2xl border border-border/50">
              <h3
                className="text-2xl font-black text-foreground mb-6"
                style={{ fontFamily: FONT }}
              >
                Who We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link
                  to="/who-we-serve/homeowners"
                  className="space-y-3 group"
                >
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm group-hover:border-[var(--primary)]/50 transition-colors">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h4
                    className="font-bold group-hover:text-[var(--primary)] transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    Homeowners
                  </h4>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    Enhance your living space with safety upgrades and modern
                    conveniences.
                  </p>
                </Link>
                <Link
                  to="/who-we-serve/commercial"
                  className="space-y-3 group"
                >
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm group-hover:border-[var(--primary)]/50 transition-colors">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h4
                    className="font-bold group-hover:text-[var(--primary)] transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    Businesses
                  </h4>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    Minimize downtime with reliable power infrastructure for
                    your operations.
                  </p>
                </Link>
                <Link
                  to="/who-we-serve/property-managers"
                  className="space-y-3 group"
                >
                  <div className="h-10 w-10 bg-background rounded-lg border border-border flex items-center justify-center text-foreground shadow-sm group-hover:border-[var(--primary)]/50 transition-colors">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4
                    className="font-bold group-hover:text-[var(--primary)] transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    Property Managers
                  </h4>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: FONT }}
                  >
                    Quick response times and detailed reporting for your rental
                    units.
                  </p>
                </Link>
              </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="scroll-mt-24">
              <h2
                className="text-3xl font-black text-foreground mb-8"
                style={{ fontFamily: FONT }}
              >
                Customer Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className={`bg-card p-6 rounded-xl border border-border shadow-sm ${
                      i === 2 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[var(--primary)]/10 rotate-180" />
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="font-bold text-foreground"
                          style={{ fontFamily: FONT }}
                        >
                          {review.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Table of Contents */}
            <div className="bg-card p-5 rounded-xl border border-border shadow-sm hidden lg:block">
              <h3
                className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider"
                style={{ fontFamily: FONT }}
              >
                On This Page
              </h3>
              <nav className="space-y-1">
                {tocSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-[var(--primary)] py-1 transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Offer Card */}
            <div className="bg-gradient-to-br from-[var(--primary)] to-sky-600 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 bg-white/20 rounded-full blur-xl" />
              <div className="relative z-10">
                <div
                  className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4"
                  style={{ fontFamily: FONT }}
                >
                  WEB OFFER
                </div>
                <h3
                  className="text-2xl font-black mb-2"
                  style={{ fontFamily: FONT }}
                >
                  Save $50
                </h3>
                <p
                  className="text-white/90 mb-6 text-sm"
                  style={{ fontFamily: FONT }}
                >
                  Book your {service.title.toLowerCase()} service online and
                  receive $50 off your first invoice.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-[var(--primary)] font-bold py-3 rounded-lg hover:bg-white/90 transition-colors"
                  style={{ fontFamily: FONT }}
                >
                  Claim Offer
                </Link>
                <p
                  className="text-xs text-center mt-3 text-white/70"
                  style={{ fontFamily: FONT }}
                >
                  *Valid for new customers in Sarasota & Manatee counties.
                </p>
              </div>
            </div>

            {/* Team Preview */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3
                className="text-lg font-bold text-foreground mb-4"
                style={{ fontFamily: FONT }}
              >
                Meet the Experts
              </h3>
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
                      <p
                        className="font-semibold text-sm"
                        style={{ fontFamily: FONT }}
                      >
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="block mt-4 text-sm text-[var(--primary)] font-medium hover:underline text-center"
                style={{ fontFamily: FONT }}
              >
                View Full Team &rarr;
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="bg-muted/50 p-6 rounded-xl border border-border/50 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: FONT }}
                >
                  Licensed #EC 13007355
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: FONT }}
                >
                  5-Star Rated on Google
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: FONT }}
                >
                  Same-Day Service Avail.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-[var(--primary)]" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: FONT }}
                >
                  Easy Online Scheduling
                </span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h4
                className="font-bold text-foreground mb-4 flex items-center gap-2"
                style={{ fontFamily: FONT }}
              >
                <MapPin className="h-4 w-4" /> Areas Served
              </h4>
              <ul className="space-y-2">
                {[
                  'Sarasota',
                  'Bradenton',
                  'Lakewood Ranch',
                  'Venice',
                  'North Port',
                  'Siesta Key',
                  'Longboat Key',
                  'Ellenton',
                ].map((city) => (
                  <li key={city}>
                    <Link
                      to={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-[var(--primary)] transition-colors group"
                      style={{ fontFamily: FONT }}
                    >
                      {city}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  to="/locations"
                  className="text-sm font-medium text-[var(--primary)] hover:underline block text-center"
                  style={{ fontFamily: FONT }}
                >
                  View Service Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection
        title={`Ready to upgrade your property?`}
        subtitle={`Contact Majors Electrical today for safe, reliable ${service.title.toLowerCase()} in Sarasota and beyond.`}
      />
    </div>
  );
}
