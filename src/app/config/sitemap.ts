import { services } from '@/app/data/services';
import { locations } from '@/app/data/locations';
import { segmentData } from '@/app/data/segmentData';
import { offers } from '@/app/data/offers';
import { SITE_BASE_URL } from './site';

const STATIC_PATHS = [
  '',
  '/about',
  '/contact',
  '/careers',
  '/offers',
  '/who-we-serve',
  '/services',
  '/locations',
  '/privacy',
  '/terms',
  '/sitemap',
];

/**
 * All relative pathnames for the sitemap (no leading base URL).
 */
export function getSitemapPaths(): string[] {
  const paths = [...STATIC_PATHS];

  Object.keys(services).forEach((id) => paths.push(`/services/${id}`));
  Object.keys(locations).forEach((id) => paths.push(`/locations/${id}`));
  Object.keys(segmentData).forEach((id) => paths.push(`/who-we-serve/${id}`));
  offers.forEach((o) => paths.push(`/offers/${o.slug}`));

  return paths;
}

/**
 * Full URLs for sitemap.xml (with SITE_BASE_URL).
 */
export function getSitemapUrls(): string[] {
  return getSitemapPaths().map((path) => `${SITE_BASE_URL}${path || '/'}`);
}
