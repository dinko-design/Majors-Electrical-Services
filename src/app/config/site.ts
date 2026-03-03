/**
 * Canonical site URL for SEO (canonical tags, sitemap, schema).
 * Use https://majorselectricalservices.com as the official domain.
 */
export const SITE_BASE_URL = 'https://majorselectricalservices.com';

export const SITE_NAME = 'Majors Electrical Services';
export const SITE_DEFAULT_DESCRIPTION =
  'Licensed electricians in Sarasota, FL. Residential & commercial electrical services, panel upgrades, EV charging, generators & 24/7 emergency service. (941) 320-9868.';

/** NAP (Name, Address, Phone) for schema and consistency with Google Business Profile */
export const BUSINESS = {
  name: "Majors Electric Inc.",
  legalName: "Majors Electrical Services",
  address: {
    street: "4872 Old Ranch Road",
    city: "Sarasota",
    region: "FL",
    postalCode: "34241",
    country: "US",
  },
  phone: "+19413209868",
  phoneDisplay: "(941) 320-9868",
  email: "MajorsElectricalServices@hotmail.com",
  license: "EC 13007355",
  /** Service area cities for LocalBusiness areaServed */
  areaServed: ["Sarasota", "Bradenton", "Lakewood Ranch", "Venice", "North Port", "Tampa Bay"],
  /** Opening hours - adjust to match actual business hours */
  openingHours: "Mo-Fr 08:00-17:00",
  /** Aggregate rating - update to match Google/review count */
  aggregateRating: {
    ratingValue: "5",
    reviewCount: "17",
    bestRating: "5",
  },
} as const;
