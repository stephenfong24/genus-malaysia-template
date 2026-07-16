export const siteConfig = {
  name: 'GENUS MALAYSIA SDN BHD',
  shortName: 'Genus Malaysia',
  siteUrl: normalizeSiteUrl(
    getViteEnv('VITE_SITE_URL') ||
      'https://genus-malaysia-template.vercel.app',
  ),
  locale: 'en_MY',
  language: 'en-MY',
  themeColor: '#111827',
  author: 'GENUS MALAYSIA SDN BHD',
  phone: '+603-8962 2111',
  whatsapp: '+60 16-262 7528',
  email: 'genusmalaysia@gmail.com',
  address: {
    streetAddress: 'Jalan Taming 5, Taman Taming Jaya',
    addressLocality: 'Balakong',
    addressRegion: 'Selangor',
    postalCode: '43200',
    addressCountry: 'MY',
  },
  socialProfiles: ['https://www.facebook.com/profile.php?id=61585586459271'],
  assets: {
    logo: '/assets/brand/genus-logo-updated.png',
    favicon: '/assets/brand/favicon.jpg',
    ogImage: '/assets/seo/og-default.jpg',
  },
};

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  imageAlt: string;
  robots?: string;
};

const defaultRobots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export const routeSeo: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    title: 'Trusted Automotive Battery Wholesaler | GENUS MALAYSIA SDN BHD',
    description:
      'GENUS MALAYSIA SDN BHD is a trusted car battery wholesaler in Malaysia, supplying Genus, K-Viron and premium automotive batteries for dealers, workshops, fleets and retailers, with delivery, warranty and installation support available.',
    keywords: [
      'car battery wholesaler Malaysia',
      'automotive battery supplier Malaysia',
      'Genus battery Malaysia',
      'K-Viron battery',
      'automotive battery supplier',
      'battery wholesale delivery Malaysia',
      'Balakong battery supplier',
    ],
    imageAlt: 'GENUS MALAYSIA automotive battery wholesale supply and support',
  },
  '/why-us': {
    path: '/why-us',
    title: 'Why Choose GENUS | GENUS MALAYSIA SDN BHD',
    description:
      'Learn why Malaysian dealers, workshops, fleets and retailers choose GENUS MALAYSIA for reliable wholesale battery supply, dealer pricing and product support.',
    keywords: [
      'why choose Genus Malaysia',
      'automotive battery dealer supplier',
      'wholesale battery pricing',
      'battery wholesaler Selangor',
      'reliable battery supply Malaysia',
    ],
    imageAlt: 'GENUS MALAYSIA wholesale battery supply support in Malaysia',
  },
  '/brands': {
    path: '/brands',
    title: 'Car Battery Brands | GENUS MALAYSIA SDN BHD',
    description:
      'Explore Genus, K-Viron and other premium automotive battery brands supplied by GENUS MALAYSIA, including calcium-silver and EFB battery technology.',
    keywords: [
      'Genus battery',
      'K-Viron battery',
      'car battery brands Malaysia',
      'calcium silver battery',
      'EFB battery Malaysia',
      'premium automotive batteries',
    ],
    imageAlt: 'Premium Genus and K-Viron car batteries supplied in Malaysia',
  },
  '/faq': {
    path: '/faq',
    title: 'Car Battery FAQ | GENUS MALAYSIA SDN BHD',
    description:
      'Find answers about wholesale battery supply, delivery support, installation assistance, warranty coverage, operating hours and available car battery brands from GENUS MALAYSIA.',
    keywords: [
      'car battery FAQ',
      'battery warranty Malaysia',
      'wholesale battery delivery questions',
      'car battery installation support FAQ',
      'Genus Malaysia support',
    ],
    imageAlt: 'GENUS MALAYSIA wholesale battery supply and warranty FAQ',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact GENUS Malaysia | GENUS MALAYSIA SDN BHD',
    description:
      'Contact GENUS MALAYSIA in Balakong, Selangor for high-performance car batteries, wholesale supply, WhatsApp support and headquarters location details.',
    keywords: [
      'contact Genus Malaysia',
      'Genus Malaysia Balakong',
      'battery supplier Selangor contact',
      'car battery WhatsApp Malaysia',
      'battery wholesaler contact',
    ],
    imageAlt: 'GENUS MALAYSIA headquarters and contact information',
  },
  '/check-warranty': {
    path: '/check-warranty',
    title: 'Check Battery Warranty | GENUS MALAYSIA SDN BHD',
    description:
      'Check battery warranty information for Genus and K-Viron batteries, including coverage status, purchase records, expiry dates and claim guidance.',
    keywords: [
      'check battery warranty',
      'Genus battery warranty',
      'K-Viron warranty check',
      'car battery warranty Malaysia',
      'battery warranty claim',
    ],
    imageAlt: 'GENUS MALAYSIA battery warranty check service',
  },
  '/login': {
    path: '/login',
    title: 'Dealer Portal Access | GENUS MALAYSIA SDN BHD',
    description:
      'GENUS MALAYSIA dealer portal access for wholesale ordering and dealer network support.',
    keywords: ['Genus Malaysia dealer portal', 'battery dealer login', 'wholesale battery portal'],
    imageAlt: 'GENUS MALAYSIA dealer portal access',
    robots: 'noindex, nofollow',
  },
};

export const publicSitemapRoutes = Object.values(routeSeo).filter(
  (route) => route.robots !== 'noindex, nofollow',
);

export function getRouteSeo(pathname: string): RouteSeo {
  return routeSeo[normalizePath(pathname)] || routeSeo['/'];
}

export function canonicalUrl(pathname: string): string {
  return absoluteUrl(normalizePath(pathname));
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function getRobots(route: RouteSeo): string {
  return route.robots || defaultRobots;
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
}

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/g, '');
}

function getViteEnv(key: string): string | undefined {
  return (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.[key];
}
