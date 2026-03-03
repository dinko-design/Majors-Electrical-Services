import { Link } from 'react-router';
import { motion } from 'motion/react';
import { TicketPercent, ArrowRight, Layers } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { getFeaturedOffers } from '@/app/data/offers';

const FONT = "'Poppins', sans-serif";

export function OfferCallout() {
  const offers = getFeaturedOffers().slice(0, 2);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765862835326-14b5070fdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwbGlnaHRpbmclMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc3MDE4NjAzMXww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Modern Home Lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--sidebar)]/90 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 mb-6"
              >
                <TicketPercent className="h-4 w-4 mr-2 text-[var(--primary)] animate-pulse" />
                <span className="text-[var(--primary)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  Limited Time Offers
                </span>
              </div>
              <h2 
                className="text-[var(--sidebar-foreground)] mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, lineHeight: '1.15' }}
              >
                Save on Your <br />
                <span className="text-[var(--primary)]">Next Project</span>
              </h2>
              <p 
                className="text-[var(--sidebar-foreground)]/70 mb-6"
                style={{ fontSize: '18px', fontFamily: FONT, lineHeight: '1.6' }}
              >
                Quality electrical work shouldn't break the bank. Our offers are <span className="text-[var(--secondary)]">stackable</span> — combine codes for maximum savings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/offers"
                  className="inline-flex items-center justify-center rounded-[var(--radius)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90 transition-all h-12 px-8 shadow-lg hover:-translate-y-0.5 group"
                  style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  View All Offers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-[var(--radius)] border border-[var(--sidebar-foreground)]/20 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-foreground)]/5 transition-all h-12 px-8"
                  style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link
                    to={`/offers/${offer.slug}`}
                    className="block relative group bg-[var(--sidebar)]/50 border border-[var(--sidebar-foreground)]/10 rounded-[var(--radius-card)] p-8 hover:border-[var(--primary)]/50 transition-all duration-300 overflow-hidden backdrop-blur-md"
                  >
                    {/* Decorative Gradient Blob */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-[var(--primary)]" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`h-12 w-12 rounded-[var(--radius)] ${offer.bgColor} ${offer.borderColor} border flex items-center justify-center`}>
                          <offer.icon className={`h-6 w-6 ${offer.color}`} />
                        </div>
                        {offer.stackable && (
                          <span 
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400"
                            style={{ fontSize: '10px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                          >
                            <Layers className="h-3 w-3" />
                            STACKABLE
                          </span>
                        )}
                      </div>
                      
                      <h3 
                        className="text-[var(--sidebar-foreground)] mb-3"
                        style={{ fontSize: '22px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                      >
                        {offer.title}
                      </h3>
                      <p 
                        className="text-[var(--sidebar-foreground)]/60 mb-6 flex-grow"
                        style={{ fontSize: '14px', fontFamily: FONT }}
                      >
                        {offer.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-[var(--sidebar-foreground)]/10 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span 
                            className="text-[var(--sidebar-foreground)]/40"
                            style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: '1px' }}
                          >
                            Use Code
                          </span>
                          <span 
                            className="text-[var(--primary)] tracking-wide"
                            style={{ fontSize: '18px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Courier New', monospace" }}
                          >
                            {offer.code}
                          </span>
                        </div>
                        <div 
                          className="p-3 rounded-full bg-[var(--sidebar-foreground)]/5 group-hover:bg-[var(--primary)] text-[var(--sidebar-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
