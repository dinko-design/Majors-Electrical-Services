import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Copy, Clock, 
  ShieldCheck, Star, TicketPercent, Layers, Phone
} from 'lucide-react';
import { 
  getOfferBySlug, 
  getStackableOffers, 
  offers as allOffers, 
  guarantees 
} from '@/app/data/offers';
import { useState } from 'react';

const FONT = "'Poppins', sans-serif";

export function OfferDetail() {
  const { slug } = useParams<{ slug: string }>();
  const offer = slug ? getOfferBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);

  if (!offer) {
    return <Navigate to="/offers" replace />;
  }

  const stackable = getStackableOffers(offer.id);
  const otherOffers = allOffers.filter(o => o.id !== offer.id).slice(0, 3);

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[var(--muted)]/30 py-16 md:py-20 border-b border-[var(--border)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/offers" 
            className="inline-flex items-center gap-1.5 text-[var(--secondary)] mb-6 hover:underline"
            style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
          >
            <ArrowLeft className="h-4 w-4" />
            All Special Offers
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-[var(--radius-card)] ${offer.bgColor} ${offer.borderColor} border`}>
                <offer.icon className={`h-6 w-6 ${offer.color}`} />
              </div>
              <div>
                {offer.stackable && (
                  <span 
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 mb-1"
                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                  >
                    <Layers className="h-3 w-3" />
                    STACKABLE OFFER
                  </span>
                )}
                <span 
                  className="block text-[var(--muted-foreground)]"
                  style={{ fontSize: '13px', fontFamily: FONT }}
                >
                  {offer.audience === 'residential' ? 'Residential' : offer.audience === 'commercial' ? 'Commercial' : 'All Customers'} · Code: {offer.code}
                </span>
              </div>
            </div>

            <h1 
              className="text-[var(--foreground)] mb-2"
              style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, lineHeight: '1.2' }}
            >
              {offer.headline}
            </h1>
            <p 
              className="text-[var(--primary)] mb-6"
              style={{ fontSize: '24px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              {offer.title} — Save {offer.savings}
            </p>
            <p 
              className="text-[var(--muted-foreground)] max-w-2xl"
              style={{ fontSize: 'var(--text-base)', fontFamily: FONT, lineHeight: '1.7' }}
            >
              {offer.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promo Code + CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Code Card */}
            <div className="border-2 border-dashed border-[var(--primary)]/30 bg-[var(--card)] rounded-[var(--radius-card)] p-8 text-center relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[var(--background)] border-r border-[var(--border)]/20" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[var(--background)] border-l border-[var(--border)]/20" />
              
              <span 
                className="inline-block px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4"
                style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                Active Offer
              </span>

              <div 
                className="text-[var(--foreground)] mb-2"
                style={{ fontSize: '20px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                {offer.title}
              </div>

              <div className="bg-[var(--muted)] p-4 rounded-[var(--radius)] mb-4 border border-[var(--border)]/10">
                <p className="text-[var(--muted-foreground)] mb-1" style={{ fontSize: '11px', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Promo Code
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span 
                    className="text-[var(--foreground)] tracking-wider select-all"
                    style={{ fontSize: '28px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Courier New', monospace" }}
                  >
                    {offer.code}
                  </span>
                  <button
                    onClick={copyCode}
                    className="p-2 rounded-[var(--radius)] bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors"
                  >
                    {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[var(--muted-foreground)] mb-4">
                <Clock className="h-3.5 w-3.5" />
                <span style={{ fontSize: '13px', fontFamily: FONT }}>Valid through: {offer.validThrough}</span>
              </div>

              {offer.stackable && (
                <div 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600"
                  style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  <Layers className="h-3.5 w-3.5" />
                  Can be combined with {stackable.length} other offer{stackable.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>

            {/* CTA & Terms */}
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-[var(--foreground)] mb-4"
                  style={{ fontSize: '18px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  How to Redeem
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span 
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shrink-0 mt-0.5"
                      style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      1
                    </span>
                    <span className="text-[var(--muted-foreground)]" style={{ fontSize: '14px', fontFamily: FONT }}>
                      Call us or request a quote online
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span 
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shrink-0 mt-0.5"
                      style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      2
                    </span>
                    <span className="text-[var(--muted-foreground)]" style={{ fontSize: '14px', fontFamily: FONT }}>
                      Mention code <strong className="text-[var(--foreground)]">{offer.code}</strong> when booking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span 
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shrink-0 mt-0.5"
                      style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                    >
                      3
                    </span>
                    <span className="text-[var(--muted-foreground)]" style={{ fontSize: '14px', fontFamily: FONT }}>
                      Discount applied to your invoice automatically
                    </span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  Claim This Offer
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+19413209868"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius)] border border-[var(--border)]/20 text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                  style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  <Phone className="h-4 w-4 text-[var(--primary)]" />
                  Call 941-320-9868
                </a>
              </div>

              <div className="bg-[var(--muted)]/50 rounded-[var(--radius)] p-4 border border-[var(--border)]/10">
                <h4 
                  className="text-[var(--foreground)] mb-2"
                  style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  Terms & Conditions
                </h4>
                <ul className="space-y-1.5">
                  {offer.terms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                      <span className="text-[var(--muted-foreground)] mt-0.5">•</span>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Stacking Section */}
      {offer.stackable && stackable.length > 0 && (
        <section className="py-12 bg-[var(--muted)]/20 border-y border-[var(--border)]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="h-5 w-5 text-emerald-500" />
              <h2 
                className="text-[var(--foreground)]"
                style={{ fontSize: '22px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                Stack & Save More
              </h2>
            </div>
            <p 
              className="text-[var(--muted-foreground)] mb-8"
              style={{ fontSize: '14px', fontFamily: FONT }}
            >
              This offer can be combined with the following offers for even bigger savings:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stackable.map((stackOffer) => (
                <Link
                  key={stackOffer.id}
                  to={`/offers/${stackOffer.slug}`}
                  className="flex items-center gap-4 p-4 rounded-[var(--radius-card)] bg-[var(--background)] border border-[var(--border)]/10 hover:border-[var(--primary)]/30 transition-colors group"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-[var(--radius)] ${stackOffer.bgColor} ${stackOffer.borderColor} border shrink-0`}>
                    <stackOffer.icon className={`h-5 w-5 ${stackOffer.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                      {stackOffer.title}
                    </div>
                    <div className="text-[var(--muted-foreground)] truncate" style={{ fontSize: '12px', fontFamily: FONT }}>
                      Save {stackOffer.savings} · Code: {stackOffer.code}
                    </div>
                  </div>
                  <div 
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 shrink-0"
                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                  >
                    + STACK
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-[var(--radius)] bg-emerald-500/5 border border-emerald-500/15">
              <div className="flex items-center gap-2">
                <TicketPercent className="h-5 w-5 text-emerald-500 shrink-0" />
                <p className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  Combined savings: Mention all codes when booking to maximize your discount.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guarantees */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 
            className="text-[var(--foreground)] mb-6 text-center"
            style={{ fontSize: '20px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
          >
            Every Job Backed by Our Guarantees
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {guarantees.map((g, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-[var(--radius)] bg-[var(--muted)]/30 border border-[var(--border)]/10">
                <g.icon className="h-5 w-5 text-[var(--primary)] mb-2" />
                <span className="text-[var(--foreground)] block mb-1" style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  {g.title}
                </span>
                <span className="text-[var(--muted-foreground)]" style={{ fontSize: '11px', fontFamily: FONT }}>
                  {g.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {offer.relatedServices.length > 0 && (
        <section className="py-8 border-t border-[var(--border)]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 
              className="text-[var(--foreground)] mb-4"
              style={{ fontSize: '18px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              Related Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {offer.relatedServices.map((svc) => (
                <Link
                  key={svc}
                  to={`/services/${svc}`}
                  className="px-3 py-1.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 border border-[var(--border)]/10 transition-colors"
                  style={{ fontSize: '13px', fontFamily: FONT }}
                >
                  {svc.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Offers */}
      <section className="py-12 bg-[var(--muted)]/20 border-t border-[var(--border)]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[var(--foreground)]" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
              More Special Offers
            </h3>
            <Link 
              to="/offers" 
              className="text-[var(--secondary)] hover:underline"
              style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherOffers.map((o) => (
              <Link
                key={o.id}
                to={`/offers/${o.slug}`}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--background)] border border-[var(--border)]/10 hover:border-[var(--primary)]/30 transition-colors group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-[var(--radius)] ${o.bgColor} ${o.borderColor} border mb-3`}>
                  <o.icon className={`h-5 w-5 ${o.color}`} />
                </div>
                <div className="text-[var(--foreground)]" style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  {o.title}
                </div>
                <p className="text-[var(--muted-foreground)] mt-1" style={{ fontSize: '13px', fontFamily: FONT }}>
                  {o.description}
                </p>
                <div className="mt-3 text-[var(--secondary)] group-hover:underline" style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
