import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TicketPercent, ArrowRight, CheckCircle2, Clock, Copy,
  Layers, ShieldCheck, Star, Phone, Percent, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/app/components/ui/utils';
import { 
  offers, 
  getFeaturedOffers, 
  getOffersByAudience, 
  guarantees, 
  getMaxStackSavings 
} from '@/app/data/offers';

const FONT = "'Poppins', sans-serif";

export function Offers() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const featured = getFeaturedOffers();
  const filteredOffers = filter === 'all' 
    ? offers 
    : offers.filter(o => o.audience === filter || o.audience === 'all');

  const stackableOffers = offers.filter(o => o.stackable);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-[var(--sidebar)] py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/15 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-5xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 mb-6">
              <TicketPercent className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-[var(--primary)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                Limited Time Special Offers
              </span>
            </div>

            <h1 
              className="text-[var(--sidebar-foreground)] mb-4"
              style={{ fontSize: 'clamp(32px, 5vw, var(--text-h2))', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, lineHeight: '1.15' }}
            >
              Save Up to {getMaxStackSavings()} <br className="hidden md:block" />
              When You Stack Offers
            </h1>
            <p 
              className="text-[var(--sidebar-foreground)]/70 max-w-2xl mx-auto mb-8"
              style={{ fontSize: '18px', fontFamily: FONT, lineHeight: '1.6' }}
            >
              Quality electrical work at a price that makes sense. Many of our offers are <strong className="text-[var(--secondary)]">stackable</strong> — combine multiple codes for maximum savings.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                Get a Quote & Redeem
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+19413209868"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius)] border border-[var(--sidebar-foreground)]/20 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-foreground)]/5 transition-colors"
                style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                <Phone className="h-4 w-4" />
                Call 941-320-9868
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stacking Explainer Bar */}
      <section className="bg-emerald-500/5 border-b border-emerald-500/15 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-500" />
            <span className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
              How Offer Stacking Works:
            </span>
          </div>
          <div className="flex items-center gap-4 text-[var(--muted-foreground)]" style={{ fontSize: '13px', fontFamily: FONT }}>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] inline-flex items-center justify-center" style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)' }}>1</span>
              Pick your main offer
            </span>
            <span className="text-[var(--border)]/30">→</span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] inline-flex items-center justify-center" style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)' }}>2</span>
              Add stackable offers
            </span>
            <span className="text-[var(--border)]/30">→</span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] inline-flex items-center justify-center" style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)' }}>3</span>
              Mention all codes when booking
            </span>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 
              className="text-[var(--foreground)] mb-2"
              style={{ fontSize: '28px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              Featured This Month
            </h2>
            <p className="text-[var(--muted-foreground)]" style={{ fontSize: 'var(--text-base)', fontFamily: FONT }}>
              Our most popular offers — available for a limited time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((offer, i) => (
              <motion.div
                key={offer.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="relative border-2 border-dashed border-[var(--primary)]/25 bg-[var(--card)] rounded-[var(--radius-card)] p-6 hover:border-[var(--primary)]/50 transition-colors group"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[var(--background)] border-r border-[var(--border)]/15" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[var(--background)] border-l border-[var(--border)]/15" />

                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-[var(--radius)] ${offer.bgColor} ${offer.borderColor} border`}>
                    <offer.icon className={`h-5 w-5 ${offer.color}`} />
                  </div>
                  {offer.stackable && (
                    <span 
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600"
                      style={{ fontSize: '10px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      <Layers className="h-3 w-3" />
                      STACKABLE
                    </span>
                  )}
                </div>

                <h3 
                  className="text-[var(--foreground)] mb-2"
                  style={{ fontSize: '20px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  {offer.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4" style={{ fontSize: '14px', fontFamily: FONT }}>
                  {offer.description}
                </p>

                {/* Code */}
                <div className="bg-[var(--muted)] p-3 rounded-[var(--radius)] mb-4 flex items-center justify-between border border-[var(--border)]/10">
                  <div>
                    <span className="text-[var(--muted-foreground)] block" style={{ fontSize: '10px', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: '1px' }}>Code</span>
                    <span className="text-[var(--foreground)] tracking-wider" style={{ fontSize: '18px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Courier New', monospace" }}>
                      {offer.code}
                    </span>
                  </div>
                  <button
                    onClick={() => copyCode(offer.code)}
                    className="p-2 rounded-[var(--radius)] hover:bg-[var(--primary)]/10 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {copiedCode === offer.code ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[var(--muted-foreground)] mb-5">
                  <Clock className="h-3.5 w-3.5" />
                  <span style={{ fontSize: '12px', fontFamily: FONT }}>{offer.validThrough}</span>
                </div>

                <Link 
                  to={`/offers/${offer.slug}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-sm transition-all"
                  style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  View Details & Redeem
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Offers with Filter */}
      <section className="py-16 bg-[var(--muted)]/20 border-y border-[var(--border)]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 
                className="text-[var(--foreground)]"
                style={{ fontSize: '28px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                All Special Offers
              </h2>
              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '14px', fontFamily: FONT }}>
                {filteredOffers.length} offers available · {stackableOffers.length} stackable
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[var(--background)] rounded-[var(--radius)] border border-[var(--border)]/10 p-1">
              {(['all', 'residential', 'commercial'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-3 py-1.5 rounded-[var(--radius-sm)] transition-colors",
                    filter === f
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                  style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOffers.map((offer) => (
              <Link
                key={offer.id}
                to={`/offers/${offer.slug}`}
                className="flex items-start gap-4 p-5 rounded-[var(--radius-card)] bg-[var(--background)] border border-[var(--border)]/10 hover:border-[var(--primary)]/30 transition-all group"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-[var(--radius)] ${offer.bgColor} ${offer.borderColor} border shrink-0`}>
                  <offer.icon className={`h-5 w-5 ${offer.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="text-[var(--foreground)]"
                      style={{ fontSize: '16px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      {offer.title}
                    </span>
                    {offer.stackable && (
                      <span 
                        className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 shrink-0"
                        style={{ fontSize: '9px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                      >
                        <Layers className="h-2.5 w-2.5" />
                        STACK
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-2" style={{ fontSize: '13px', fontFamily: FONT }}>
                    {offer.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--foreground)] tracking-wider" style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Courier New', monospace" }}>
                      {offer.code}
                    </span>
                    <span className="text-[var(--muted-foreground)]" style={{ fontSize: '11px', fontFamily: FONT }}>
                      · {offer.validThrough}
                    </span>
                    <span 
                      className="ml-auto text-[var(--secondary)] group-hover:underline shrink-0"
                      style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[var(--foreground)] text-center mb-10"
            style={{ fontSize: '28px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
          >
            Backed by Our Guarantees
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {guarantees.map((g, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 rounded-[var(--radius-card)] bg-[var(--card)] border border-[var(--border)]/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 mb-3">
                  <g.icon className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <span className="text-[var(--foreground)] block mb-1" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  {g.title}
                </span>
                <span className="text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                  {g.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--sidebar)] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/15 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[var(--sidebar-foreground)] mb-4"
            style={{ fontSize: '32px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
          >
            Ready to Save on Your Project?
          </h2>
          <p 
            className="text-[var(--sidebar-foreground)]/70 max-w-xl mx-auto mb-8"
            style={{ fontSize: 'var(--text-base)', fontFamily: FONT }}
          >
            Contact us today, mention your offer code(s), and we'll apply your savings to your free quote. It's that simple.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-lg transition-all hover:shadow-xl"
              style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+19413209868"
              className="inline-flex items-center gap-2 px-6 py-3 text-[var(--sidebar-foreground)]/80 hover:text-[var(--sidebar-foreground)] transition-colors"
              style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              <Phone className="h-4 w-4" />
              Call 941-320-9868
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
