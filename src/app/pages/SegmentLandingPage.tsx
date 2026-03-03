import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle2, ArrowRight, Star, ShieldCheck, Clock, FileCheck, Phone, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Feature {
  title: string;
  description: string;
  icon: any;
}

interface Service {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SegmentData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: {
    title: string;
    points: string[];
  };
  valueProps: Feature[];
  services: Service[];
  testimonial: Testimonial;
  ctaText: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

interface SegmentLandingPageProps {
  data: SegmentData;
}

export function SegmentLandingPage({ data }: SegmentLandingPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-neutral-900/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6 backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2" />
              For {data.title}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
              {data.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold h-14 px-8 text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-1"
              >
                {data.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+19413209868"
                className="inline-flex items-center justify-center rounded-md bg-white/10 text-white font-bold h-14 px-8 text-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                (941) 320-9868
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-neutral-400">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5 text-primary" />
                 <span>Licensed & Insured</span>
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="h-5 w-5 text-primary" />
                 <span>On-Time Guarantee</span>
               </div>
               <div className="flex items-center gap-2">
                 <Star className="h-5 w-5 text-primary" />
                 <span>5-Star Rated</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empathy / Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {data.painPoints.title}
              </h2>
              <div className="space-y-4">
                {data.painPoints.points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
                  >
                     <div className="min-w-6 mt-1 text-red-500">✕</div>
                     <p className="text-neutral-600 dark:text-neutral-400 font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">The Majors Difference</h3>
                 <p className="text-neutral-300 mb-8">
                   We built our business by solving exactly these problems. Here is what you can expect when you partner with us.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Clear, upfront communication</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Technicians who respect your time & space</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Work done right the first time</span>
                    </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props / Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why {data.title} Choose Us</h2>
            <p className="text-muted-foreground text-lg">
              Tailored specifically for your needs, our service standards set the bar for the industry.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {data.valueProps.map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Targeted Services */}
      <section className="py-20 bg-background border-y border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Services for {data.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {data.services.map((service, i) => (
                 <div key={i} className="flex flex-col p-6 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                 </div>
               ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/services" className="text-primary font-semibold hover:underline inline-flex items-center">
                View All Electrical Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
         </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full blur-[120px]"></div>
           <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="mb-8 flex justify-center">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="h-6 w-6 text-[#FBBC05] fill-[#FBBC05]" />
             ))}
           </div>
           <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-tight max-w-4xl mx-auto mb-8">
             "{data.testimonial.quote}"
           </blockquote>
           <div className="flex flex-col items-center">
             <cite className="not-italic font-bold text-lg">{data.testimonial.author}</cite>
             <span className="text-zinc-400">{data.testimonial.role}</span>
           </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
             {data.faq.map((item, i) => (
               <div key={i} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 font-semibold text-foreground">
                    {item.question}
                  </div>
                  <div className="p-4 bg-card text-muted-foreground border-t border-border">
                    {item.answer}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation. We are ready to help with your next {data.id === 'homeowners' ? 'home' : 'commercial'} project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold h-12 px-8 shadow-lg hover:-translate-y-1 transition-all"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+19413209868"
              className="inline-flex items-center justify-center rounded-md bg-background border border-border text-foreground font-bold h-12 px-8 hover:bg-muted transition-all"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (941) 320-9868
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
