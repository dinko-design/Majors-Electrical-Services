import { Helmet } from 'react-helmet-async';
import type { GalleryImage } from '@/app/components/ui/lightbox-gallery';

interface ServiceSchemaProps {
  serviceId: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  faqs?: { question: string; answer: string }[];
  galleryImages?: GalleryImage[];
}

const BASE_URL = 'https://majorselectrical.com';

export function ServiceSchema({
  serviceId,
  title,
  description,
  image,
  features,
  faqs,
  galleryImages,
}: ServiceSchemaProps) {
  const serviceUrl = `${BASE_URL}/services/${serviceId}`;
  const imageUrl = image.startsWith('/') ? `${BASE_URL}${image}` : image;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: serviceUrl,
    image: imageUrl,
    serviceType: title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Majors Electrical Services',
      telephone: '+1-941-320-9868',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sarasota',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.3364,
        longitude: -82.5307,
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Sarasota' },
      { '@type': 'City', name: 'Bradenton' },
      { '@type': 'City', name: 'Lakewood Ranch' },
      { '@type': 'City', name: 'Venice' },
      { '@type': 'City', name: 'North Port' },
      { '@type': 'City', name: 'Palmetto' },
      { '@type': 'City', name: 'Ellenton' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${title} Services`,
      itemListElement: features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
    offers: {
      '@type': 'Offer',
      name: 'Web Special - $50 Off',
      description: `Save $50 on your first ${title.toLowerCase()} service when you book online`,
      priceCurrency: 'USD',
      price: '50',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '50',
        priceCurrency: 'USD',
        priceType: 'https://schema.org/SalePrice',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${BASE_URL}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: serviceUrl,
      },
    ],
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  const gallerySchema =
    galleryImages && galleryImages.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: `${title} Gallery - Majors Electrical Services`,
          url: serviceUrl,
          image: galleryImages.map((img, i) => ({
            '@type': 'ImageObject',
            contentUrl: img.src.startsWith('/')
              ? `${BASE_URL}${img.src}`
              : img.src,
            name: img.alt,
            ...(img.caption && { caption: img.caption }),
            position: i + 1,
          })),
        }
      : null;

  return (
    <Helmet>
      <title>{`${title} in Sarasota & Tampa Bay | Majors Electrical Services`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={serviceUrl} />
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {gallerySchema && (
        <script type="application/ld+json">
          {JSON.stringify(gallerySchema)}
        </script>
      )}
    </Helmet>
  );
}
