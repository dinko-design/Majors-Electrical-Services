import { services } from '@/app/data/services';
import { locations } from '@/app/data/locations';
import { segmentData } from '@/app/data/segmentData';
import { getOfferBySlug } from '@/app/data/offers';
import { SITE_NAME, SITE_DEFAULT_DESCRIPTION } from './site';

type SEO = { title: string; description: string };

const STATIC_ROUTES: Record<string, SEO> = {
  '': {
    title: `Electrician Sarasota FL | Residential & Commercial | ${SITE_NAME}`,
    description:
      'Licensed electricians in Sarasota, FL. Panel upgrades, EV charging, generators, 24/7 emergency service. Residential & commercial. Free estimates. (941) 320-9868.',
  },
  '/': {
    title: `Electrician Sarasota FL | Residential & Commercial | ${SITE_NAME}`,
    description:
      'Licensed electricians in Sarasota, FL. Panel upgrades, EV charging, generators, 24/7 emergency service. Residential & commercial. Free estimates. (941) 320-9868.',
  },
  '/about': {
    title: `About Us | Licensed Electricians Sarasota | ${SITE_NAME}`,
    description:
      'Family-owned electrical contractor serving Sarasota since 2006. Licensed, insured, 5-star rated. Meet our team and learn why we\'re Sarasota\'s trusted electricians.',
  },
  '/contact': {
    title: `Contact | Get a Free Quote | ${SITE_NAME}`,
    description:
      'Contact Majors Electrical in Sarasota, FL. Call (941) 320-9868 for estimates, emergency service, or schedule online. We respond quickly.',
  },
  '/careers': {
    title: `Careers | Join Our Team | ${SITE_NAME}`,
    description: `Join Majors Electrical Services. We're hiring licensed electricians and apprentices in the Sarasota area. Competitive pay, benefits, and growth.`,
  },
  '/offers': {
    title: `Special Offers & Discounts | ${SITE_NAME}`,
    description:
      'Current electrical service discounts and promotions. New customer offers, seasonal specials, and referral rewards. Valid in Sarasota, Bradenton, Venice & more.',
  },
  '/who-we-serve': {
    title: `Who We Serve | Residential & Commercial | ${SITE_NAME}`,
    description:
      'Majors Electrical serves homeowners, businesses, property managers, and contractors in Sarasota, Bradenton, Lakewood Ranch, Venice, North Port & Tampa Bay.',
  },
  '/services': {
    title: `Electrical Services | Sarasota FL | ${SITE_NAME}`,
    description:
      'Full-service electrical: panel upgrades, EV chargers, generators, lighting, rewiring, smart home & more. Licensed electricians in Sarasota and the Gulf Coast.',
  },
  '/locations': {
    title: `Service Areas | Sarasota, Bradenton, Venice & More | ${SITE_NAME}`,
    description:
      'We serve Sarasota, Bradenton, Lakewood Ranch, Venice, North Port, Tampa Bay and surrounding areas. Local electricians you can trust.',
  },
  '/privacy': {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: 'Privacy policy for Majors Electrical Services. How we collect, use, and protect your information.',
  },
  '/terms': {
    title: `Terms of Service | ${SITE_NAME}`,
    description: 'Terms of service for Majors Electrical Services website and services.',
  },
  '/sitemap': {
    title: `Sitemap | ${SITE_NAME}`,
    description: 'Browse all pages on the Majors Electrical Services website.',
  },
};

/**
 * Get title and meta description for a given pathname.
 * Used by Layout to set document head per route.
 */
export function getSEOForPath(pathname: string): SEO {
  const path = pathname.replace(/\/$/, '') || '/';
  const normalized = path === '' ? '/' : path;

  if (STATIC_ROUTES[normalized]) {
    return STATIC_ROUTES[normalized];
  }

  // /services/:id
  const servicesMatch = /^\/services\/(.+)$/.exec(normalized);
  if (servicesMatch) {
    const id = servicesMatch[1];
    const service = (services as Record<string, { title: string; description: string }>)[id];
    if (service) {
      return {
        title: `${service.title} | Sarasota FL | ${SITE_NAME}`,
        description:
          service.description.length > 155
            ? service.description.slice(0, 152) + '...'
            : service.description,
      };
    }
  }

  // /locations/:city
  const locationsMatch = /^\/locations\/(.+)$/.exec(normalized);
  if (locationsMatch) {
    const citySlug = locationsMatch[1];
    const location = (locations as Record<string, { name: string; description: string }>)[citySlug];
    if (location) {
      return {
        title: `Electrician ${location.name} FL | ${SITE_NAME}`,
        description:
          location.description.length > 155
            ? location.description.slice(0, 152) + '...'
            : location.description,
      };
    }
  }

  // /who-we-serve/:segmentId
  const segmentMatch = /^\/who-we-serve\/(.+)$/.exec(normalized);
  if (segmentMatch) {
    const segmentId = segmentMatch[1];
    const segment = (segmentData as Record<string, { title: string; heroSubheadline: string }>)[segmentId];
    if (segment) {
      return {
        title: `${segment.title} | Electrical Services | ${SITE_NAME}`,
        description:
          segment.heroSubheadline.length > 155
            ? segment.heroSubheadline.slice(0, 152) + '...'
            : segment.heroSubheadline,
      };
    }
  }

  // /offers/:slug
  const offersMatch = /^\/offers\/(.+)$/.exec(normalized);
  if (offersMatch) {
    const slug = offersMatch[1];
    const offer = getOfferBySlug(slug);
    if (offer) {
      return {
        title: `${offer.title} | Special Offer | ${SITE_NAME}`,
        description:
          offer.description.length > 155 ? offer.description.slice(0, 152) + '...' : offer.description,
      };
    }
  }

  return {
    title: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
  };
}
