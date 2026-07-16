import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  canonicalUrl,
  getRobots,
  getRouteSeo,
  siteConfig,
  type RouteSeo,
} from '../config/seo';

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteSeo(location.pathname);
    const canonical = canonicalUrl(route.path);
    const imageUrl = absoluteUrl(siteConfig.assets.ogImage);

    document.documentElement.lang = siteConfig.language;
    document.title = route.title;

    setMeta('name', 'description', route.description);
    setMeta('name', 'keywords', route.keywords.join(', '));
    setMeta('name', 'author', siteConfig.author);
    setMeta('name', 'robots', getRobots(route));
    setMeta('name', 'googlebot', getRobots(route));
    setMeta('name', 'theme-color', siteConfig.themeColor);
    setMeta('name', 'format-detection', 'telephone=no');

    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', siteConfig.name);
    setMeta('property', 'og:title', route.title);
    setMeta('property', 'og:description', route.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:image:secure_url', imageUrl);
    setMeta('property', 'og:image:type', 'image/jpeg');
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', route.imageAlt);
    setMeta('property', 'og:locale', siteConfig.locale);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', route.title);
    setMeta('name', 'twitter:description', route.description);
    setMeta('name', 'twitter:image', imageUrl);
    setMeta('name', 'twitter:image:alt', route.imageAlt);

    setJsonLd(buildStructuredData(route, canonical, imageUrl));
  }, [location.pathname]);

  return null;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = Array.from(document.head.querySelectorAll<HTMLMetaElement>(selector));
  const tag = existing.shift() || document.createElement('meta');

  tag.setAttribute(attribute, key);
  tag.setAttribute('content', content);
  tag.setAttribute('data-seo-managed', 'true');

  if (!tag.parentElement) {
    document.head.appendChild(tag);
  }

  existing.forEach((duplicate) => duplicate.remove());
}

function setLink(rel: string, href: string) {
  const existing = Array.from(document.head.querySelectorAll<HTMLLinkElement>(`link[rel="${rel}"]`));
  const tag = existing.shift() || document.createElement('link');

  tag.setAttribute('rel', rel);
  tag.setAttribute('href', href);
  tag.setAttribute('data-seo-managed', 'true');

  if (!tag.parentElement) {
    document.head.appendChild(tag);
  }

  existing.forEach((duplicate) => duplicate.remove());
}

function setJsonLd(data: Record<string, unknown>) {
  const scriptId = 'structured-data-json-ld';
  const existing = document.getElementById(scriptId);
  const script = existing || document.createElement('script');

  script.id = scriptId;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);

  if (!script.parentElement) {
    document.head.appendChild(script);
  }
}

function buildStructuredData(route: RouteSeo, canonical: string, imageUrl: string) {
  const businessId = `${siteConfig.siteUrl}/#business`;
  const websiteId = `${siteConfig.siteUrl}/#website`;
  const webpageId = `${canonical}#webpage`;
  const logoUrl = absoluteUrl(siteConfig.assets.logo);

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.siteUrl,
    },
  ];

  if (route.path !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: route.title.replace(` | ${siteConfig.name}`, ''),
      item: canonical,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'AutomotiveBusiness'],
        '@id': businessId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.siteUrl,
        logo: logoUrl,
        image: imageUrl,
        description: routeSeoDescription(),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          ...siteConfig.address,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
          },
        ],
        sameAs: siteConfig.socialProfiles,
        areaServed: {
          '@type': 'Country',
          name: 'Malaysia',
        },
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Car battery wholesale supply',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Car battery delivery and installation support',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Battery warranty support',
            },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        publisher: {
          '@id': businessId,
        },
        inLanguage: siteConfig.language,
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: canonical,
        name: route.title,
        description: route.description,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': businessId,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        inLanguage: siteConfig.language,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
    ],
  };
}

function routeSeoDescription() {
  return 'Trusted car battery wholesaler and expert in Malaysia specialising in Genus, K-Viron and premium automotive batteries with delivery, installation and warranty support.';
}
