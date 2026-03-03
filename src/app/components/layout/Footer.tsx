import { Link } from 'react-router';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ShieldCheck,
  Star,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS, SITE_BASE_URL } from '@/app/config/site';
import logo from 'asset/91feb0d897fe4eff5945be1f445e0abfe2d2e4ca.png?w=400&format=webp';

const FONT = "'Poppins', sans-serif";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Footer Navigation',
    hasPart: [
      { '@type': 'WebPage', name: 'Residential Electrical', url: `${SITE_BASE_URL}/services/residential` },
      { '@type': 'WebPage', name: 'Commercial Electrical', url: `${SITE_BASE_URL}/services/commercial` },
      { '@type': 'WebPage', name: 'Panel Upgrades', url: `${SITE_BASE_URL}/services/panel-upgrades` },
      { '@type': 'WebPage', name: 'EV Charger Installation', url: `${SITE_BASE_URL}/services/ev-charging` },
      { '@type': 'WebPage', name: 'Generator Installation', url: `${SITE_BASE_URL}/services/generators` },
      { '@type': 'WebPage', name: 'Electrician Sarasota', url: `${SITE_BASE_URL}/locations/sarasota` },
      { '@type': 'WebPage', name: 'Electrician Bradenton', url: `${SITE_BASE_URL}/locations/bradenton` },
      { '@type': 'WebPage', name: 'Electrician Lakewood Ranch', url: `${SITE_BASE_URL}/locations/lakewood-ranch` },
      { '@type': 'WebPage', name: 'Contact Us', url: `${SITE_BASE_URL}/contact` },
    ],
  };

  return (
    <footer
      className="bg-[var(--sidebar)] text-white border-t border-white/10"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />

      {/* Hidden microdata for crawlers */}
      <meta itemProp="name" content={BUSINESS.legalName} />
      <meta itemProp="telephone" content={BUSINESS.phone} />
      <meta itemProp="url" content={SITE_BASE_URL} />
      <meta itemProp="priceRange" content="$$" />
      <meta itemProp="image" content={`${SITE_BASE_URL}/logo.png`} />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <meta itemProp="streetAddress" content={BUSINESS.address.street} />
        <meta itemProp="addressLocality" content={BUSINESS.address.city} />
        <meta itemProp="addressRegion" content={BUSINESS.address.region} />
        <meta itemProp="postalCode" content={BUSINESS.address.postalCode} />
        <meta itemProp="addressCountry" content={BUSINESS.address.country} />
      </div>
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" className="hidden">
        <meta itemProp="latitude" content="27.3364" />
        <meta itemProp="longitude" content="-82.5307" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">

          {/* Brand + NAP Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src={logo}
                alt="Majors Electrical Services - Licensed Electricians in Sarasota, FL"
                className="h-12 w-auto object-contain"
                width={200}
                height={48}
              />
            </Link>
            <p
              className="text-sm text-gray-400 leading-relaxed max-w-sm"
              style={{ fontFamily: FONT }}
            >
              Majors Electrical Services is Sarasota's trusted licensed
              electrician for residential and commercial electrical work.
              From panel upgrades and EV charger installation to whole-home
              rewiring and generator installation — we power the Gulf Coast
              with safety, reliability, and code-compliant craftsmanship.
            </p>

            {/* NAP Block */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[var(--primary-light)] shrink-0 mt-0.5" />
                <address
                  className="text-sm text-gray-300 not-italic leading-snug"
                  style={{ fontFamily: FONT }}
                >
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postalCode}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--primary-light)] shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
                  style={{ fontFamily: FONT }}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--primary-light)] shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: FONT }}
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[var(--primary-light)] shrink-0" />
                <span
                  className="text-sm text-gray-300"
                  style={{ fontFamily: FONT }}
                >
                  Mon–Fri 8:00 AM – 5:00 PM
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/majorselectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--primary-light)] transition-colors"
                aria-label="Majors Electrical on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/majorselectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--primary-light)] transition-colors"
                aria-label="Majors Electrical on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/majorselectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--primary-light)] transition-colors"
                aria-label="Majors Electrical on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Electrical Services Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] mb-5"
              style={{ fontFamily: FONT }}
            >
              Electrical Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/services/residential', label: 'Residential Electrical' },
                { to: '/services/commercial', label: 'Commercial Electrical' },
                { to: '/services/panel-upgrades', label: 'Panel Upgrades' },
                { to: '/services/whole-home-rewire', label: 'Whole Home Rewire' },
                { to: '/services/ev-charging', label: 'EV Charger Installation' },
                { to: '/services/generators', label: 'Generator Installation' },
                { to: '/services/recessed-lighting', label: 'Recessed Lighting' },
                { to: '/services/surge-protection', label: 'Surge Protection' },
                { to: '/services/smart-switches', label: 'Smart Switches' },
                { to: '/services/safety-inspections', label: 'Safety Inspections' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm text-[var(--primary-light)] font-medium hover:text-white transition-colors mt-1"
                  style={{ fontFamily: FONT }}
                >
                  All Services <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] mb-5"
              style={{ fontFamily: FONT }}
            >
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/locations/sarasota', label: 'Electrician in Sarasota' },
                { to: '/locations/bradenton', label: 'Electrician in Bradenton' },
                { to: '/locations/lakewood-ranch', label: 'Electrician in Lakewood Ranch' },
                { to: '/locations/venice', label: 'Electrician in Venice' },
                { to: '/locations/north-port', label: 'Electrician in North Port' },
                { to: '/locations/palmetto', label: 'Electrician in Palmetto' },
                { to: '/locations/siesta-key', label: 'Electrician in Siesta Key' },
                { to: '/locations/longboat-key', label: 'Electrician in Longboat Key' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-1 text-sm text-[var(--primary-light)] font-medium hover:text-white transition-colors mt-1"
                  style={{ fontFamily: FONT }}
                >
                  All Locations <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Trust Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] mb-5"
              style={{ fontFamily: FONT }}
            >
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/careers', label: 'Careers' },
                { to: '/offers', label: 'Special Offers' },
                { to: '/who-we-serve/homeowners', label: 'Homeowners' },
                { to: '/who-we-serve/commercial', label: 'Commercial Clients' },
                { to: '/who-we-serve/property-managers', label: 'Property Managers' },
                { to: '/contact', label: 'Contact & Scheduling' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: FONT }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badge */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400 shrink-0" />
                <span
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: FONT }}
                >
                  Licensed & Insured
                </span>
              </div>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: FONT }}
              >
                FL License #{BUSINESS.license}
              </p>
              <div className="flex items-center gap-1.5 pt-1">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <span
                  className="text-xs text-gray-400 ml-1"
                  style={{ fontFamily: FONT }}
                >
                  {BUSINESS.aggregateRating.ratingValue}/5 ({BUSINESS.aggregateRating.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO-rich sentence */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p
            className="text-xs text-gray-500 leading-relaxed max-w-4xl"
            style={{ fontFamily: FONT }}
          >
            Majors Electrical Services is a full-service{' '}
            <Link to="/locations/sarasota" className="text-gray-400 hover:text-white underline underline-offset-2">
              electrical contractor in Sarasota, FL
            </Link>{' '}
            providing{' '}
            <Link to="/services/residential" className="text-gray-400 hover:text-white underline underline-offset-2">
              residential electrical services
            </Link>
            ,{' '}
            <Link to="/services/commercial" className="text-gray-400 hover:text-white underline underline-offset-2">
              commercial electrical services
            </Link>
            ,{' '}
            <Link to="/services/panel-upgrades" className="text-gray-400 hover:text-white underline underline-offset-2">
              electrical panel upgrades
            </Link>
            ,{' '}
            <Link to="/services/ev-charging" className="text-gray-400 hover:text-white underline underline-offset-2">
              EV charger installation
            </Link>
            , and{' '}
            <Link to="/services/generators" className="text-gray-400 hover:text-white underline underline-offset-2">
              generator installation
            </Link>{' '}
            across{' '}
            <Link to="/locations/bradenton" className="text-gray-400 hover:text-white underline underline-offset-2">
              Bradenton
            </Link>
            ,{' '}
            <Link to="/locations/lakewood-ranch" className="text-gray-400 hover:text-white underline underline-offset-2">
              Lakewood Ranch
            </Link>
            ,{' '}
            <Link to="/locations/venice" className="text-gray-400 hover:text-white underline underline-offset-2">
              Venice
            </Link>
            , and the greater Tampa Bay area. Licensed #{BUSINESS.license}.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-gray-500 text-center md:text-left"
            style={{ fontFamily: FONT }}
          >
            &copy; {currentYear} {BUSINESS.legalName}. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Link
              to="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontFamily: FONT }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontFamily: FONT }}
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontFamily: FONT }}
            >
              Sitemap
            </Link>
            <span
              className="text-xs text-gray-500"
              style={{ fontFamily: FONT }}
            >
              Partner:{' '}
              <a
                href="https://www.majorsfiresecurity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Majors Fire & Security
              </a>
            </span>
          </div>
        </div>

        {/* Dinko Design Signoff */}
        <div className="pt-4 pb-20 lg:pb-0 flex justify-center text-center">
          <p
            className="text-[10px] text-gray-600 uppercase tracking-widest"
            style={{ fontFamily: FONT }}
          >
            Sarasota Web Design Agency{' '}
            <a
              href="https://www.dinkodesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[var(--primary-light)] ml-1"
            >
              DINKO DESIGN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
