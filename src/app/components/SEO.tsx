import { Helmet } from 'react-helmet-async';
import { SITE_BASE_URL, SITE_NAME } from '@/app/config/site';

interface SEOProps {
  title: string;
  description: string;
  /** Path (e.g. /services/panel-upgrades). Canonical URL will be SITE_BASE_URL + path. */
  path?: string;
  /** Optional OG image URL (absolute). */
  image?: string;
}

export function SEO({ title, description, path = '', image }: SEOProps) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  const ogImage = image ?? `${SITE_BASE_URL}/og-default.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
