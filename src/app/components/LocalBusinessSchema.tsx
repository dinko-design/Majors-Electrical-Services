import { Helmet } from 'react-helmet-async';
import { SITE_BASE_URL, BUSINESS } from '@/app/config/site';

/**
 * LocalBusiness + Organization JSON-LD for rich results and local SEO.
 * Rendered on all pages so crawlers can associate the site with the business.
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Electrician',
        '@id': `${SITE_BASE_URL}/#business`,
        name: BUSINESS.legalName,
        alternateName: BUSINESS.name,
        url: SITE_BASE_URL,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.city,
          addressRegion: BUSINESS.address.region,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
        areaServed: BUSINESS.areaServed.map((city) => ({
          '@type': 'City',
          name: city,
          addressRegion: 'FL',
          addressCountry: 'US',
        })),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: BUSINESS.aggregateRating.ratingValue,
          reviewCount: BUSINESS.aggregateRating.reviewCount,
          bestRating: BUSINESS.aggregateRating.bestRating,
          worstRating: '1',
        },
        priceRange: '$$',
        image: `${SITE_BASE_URL}/logo.png`,
        sameAs: [
          'https://www.facebook.com/majorselectrical',
          'https://www.google.com/maps/place/Majors+Electrical',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_BASE_URL}/#organization`,
        name: BUSINESS.legalName,
        url: SITE_BASE_URL,
        logo: `${SITE_BASE_URL}/logo.png`,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
