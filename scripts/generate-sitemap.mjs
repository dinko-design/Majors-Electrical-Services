/**
 * Generates public/sitemap.xml from app routes and data.
 * Run before build: npm run generate:sitemap
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const BASE_URL = 'https://majorselectricalservices.com';

const staticPaths = [
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

function extractObjectKeys(content) {
  const keys = [];
  const re = /^\s*'([^']+)':\s*\{/gm;
  let m;
  while ((m = re.exec(content)) !== null) keys.push(m[1]);
  return keys;
}

function extractOfferSlugs(content) {
  const slugs = [];
  const re = /slug:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(content)) !== null) slugs.push(m[1]);
  return slugs;
}

const servicesPath = path.join(root, 'src/app/data/services.ts');
const locationsPath = path.join(root, 'src/app/data/locations.ts');
const segmentPath = path.join(root, 'src/app/data/segmentData.tsx');
const offersPath = path.join(root, 'src/app/data/offers.ts');

const servicesContent = fs.readFileSync(servicesPath, 'utf8');
const locationsContent = fs.readFileSync(locationsPath, 'utf8');
const segmentContent = fs.readFileSync(segmentPath, 'utf8');
const offersContent = fs.readFileSync(offersPath, 'utf8');

const serviceIds = extractObjectKeys(servicesContent);
const locationIds = extractObjectKeys(locationsContent);
const segmentIds = extractObjectKeys(segmentContent);
const offerSlugs = extractOfferSlugs(offersContent);

const paths = [
  ...staticPaths,
  ...serviceIds.map((id) => `/services/${id}`),
  ...locationIds.map((id) => `/locations/${id}`),
  ...segmentIds.map((id) => `/who-we-serve/${id}`),
  ...offerSlugs.map((slug) => `/offers/${slug}`),
];

const urls = paths.map((p) => `${BASE_URL}${p || '/'}`);

const lastmod = new Date().toISOString().slice(0, 10);
const urlEntries = urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${loc === BASE_URL + '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote sitemap.xml with ${urls.length} URLs.`);
