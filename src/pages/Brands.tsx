import React from 'react';
import {
  BadgeCheck,
  BatteryCharging,
  BriefcaseBusiness,
  Bus,
  Car,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Sun,
  TimerReset,
  Zap
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../i18n';

interface Brand {
  id: string;
  logoSrc: string;
  logoClassName?: string;
  name: string;
  desc: string;
}

export default function Brands() {
  const { t } = useLanguage();
  const genusBenefits = t.brands.features.map(([title, description], index) => ({
    title,
    description,
    Icon: [Zap, ShieldCheck, BatteryCharging][index] ?? CheckCircle2
  }));
  const genusWhyChooseIcons = [Zap, Sun, TimerReset, Sparkles, BadgeCheck, ShieldCheck];
  const genusRangeIcons = [Car, Bus, BatteryCharging, BriefcaseBusiness];
  const genusProductImages = [
    "/assets/images/home/genus-featured-brand/genus-efb-series.png",
    "/assets/images/home/genus-featured-brand/genus-smf-60b24rs.png",
    "/assets/images/home/genus-featured-brand/genus-agm-start-stop.png",
    "/assets/images/home/genus-featured-brand/genus-afb-technology.png"
  ];
  const genusProducts = t.brands.featuredProducts.map(([accent, rest, description, alt], index) => ({
    accent,
    rest,
    description,
    alt,
    image: genusProductImages[index]
  }));

  const brandsList: Brand[] = [
    {
      id: "brandGenus",
      logoSrc: "/assets/brand/genus-logo-brand-card.png",
      logoClassName: "brand-logo-image--genus",
      name: "Genus",
      desc: t.brands.brandDescs[0]
    },
    {
      id: "brandKviron",
      logoSrc: "/assets/brand/k-viron-logo.jpg",
      logoClassName: "brand-logo-image--kviron",
      name: "K-viron",
      desc: t.brands.brandDescs[1]
    },
    {
      id: "brandAmaron",
      logoSrc: "/assets/brand/amaron-logo.jpg",
      name: "Amaron",
      desc: t.brands.brandDescs[2]
    },
    {
      id: "brandBosch",
      logoSrc: "/assets/brand/bosch-logo.svg",
      name: "Bosch",
      desc: t.brands.brandDescs[3]
    },
    {
      id: "brandVarta",
      logoSrc: "/assets/brand/varta-logo.png",
      name: "Varta",
      desc: t.brands.brandDescs[4]
    },
    {
      id: "brandCentury",
      logoSrc: "/assets/brand/century-logo.webp",
      name: "Century",
      desc: t.brands.brandDescs[5]
    }
  ];

  return (
    <PageTransition>
      <section id="brands" className="brands-section section-padding" style={{ paddingTop: '140px', paddingBottom: '60px', minHeight: 'auto' }}>
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center animate-on-scroll fade-up" id="brandsTitleWrap">
            <span className="section-subtitle">{t.brands.subtitle}</span>
            <h1 className="section-title" id="brandsHeader">{t.brands.title}</h1>
            <p className="section-description mx-auto" id="brandsSubtext">
              {t.brands.desc}
            </p>
          </div>
          
          {/* Brands Logo Grid */}
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 mb-5 stagger-group" id="brandsGrid">
            {brandsList.map((brand) => (
              <div 
                key={brand.id} 
                className="col animate-on-scroll fade-up" 
                id={brand.id}
              >
                <div className="brand-card">
                  <div className="brand-logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={brand.logoSrc}
                      alt={`${brand.name} battery logo`}
                      className={`brand-logo-image ${brand.logoClassName ?? ''}`.trim()}
                    />
                  </div>
                  <h4>{brand.name}</h4>
                  <span>{brand.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BRAND: GENUS BATTERIES */}
      <section 
        id="genus-featured" 
        className="genus-featured-section" 
      >
        <picture className="genus-featured-bg" aria-hidden="true">
          <source srcSet="/assets/images/home/genus-featured-brand/genus-hero-background.webp" type="image/webp" />
          <img src="/assets/images/home/genus-featured-brand/genus-hero-background.jpg" alt="" loading="lazy" decoding="async" />
        </picture>
        <img
          className="genus-featured-lightning"
          src="/assets/images/home/genus-featured-brand/lightning-accent.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="genus-featured-shell">
          <div className="genus-featured-main animate-on-scroll fade-up" id="genusFeaturedContent">
            <div className="genus-featured-copy">
              <span className="genus-featured-badge">{t.brands.featured}</span>
              <h2 className="genus-featured-title">
                {t.brands.featuredTitleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="genus-featured-tagline">
                <Zap size={18} aria-hidden="true" />
                {t.brands.featuredTagline}
              </p>

              <div className="genus-featured-text">
                <p>{t.brands.paragraph1}</p>
                <p>{t.brands.paragraph2Featured}</p>
              </div>

              <div className="genus-featured-benefits" aria-label="Genus battery core features">
                {genusBenefits.map(({ title, description, Icon }) => (
                  <div className="genus-featured-benefit" key={title}>
                    <div className="genus-featured-benefit-icon">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="genus-featured-products stagger-group" id="genusFeaturedProducts" aria-label="Genus battery product showcase">
              {genusProducts.map((product) => (
                <article className="genus-featured-product-card animate-on-scroll fade-up" key={`${product.accent}-${product.rest}`}>
                  <div className="genus-featured-product-image">
                    <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="genus-featured-product-copy">
                    <h3>
                      <span>{product.accent}</span> {product.rest}
                    </h3>
                    <p>{product.description}</p>
                    <div className="genus-featured-product-rule" aria-hidden="true"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="genus-featured-proof animate-on-scroll fade-up" id="genusFeaturedWhyChoose">
            <div className="genus-featured-proof-header">
              <div className="genus-featured-proof-kicker">
                <BatteryCharging size={20} aria-hidden="true" />
                <h2>{t.brands.whyChooseTitle}</h2>
              </div>
              <p>{t.brands.whyChooseIntro}</p>
            </div>

            <div className="genus-featured-proof-grid stagger-group">
              {t.brands.whyChooseItems.map(([title, description], index) => {
                const Icon = genusWhyChooseIcons[index] ?? CheckCircle2;

                return (
                  <article className="genus-featured-proof-card animate-on-scroll fade-up" key={title}>
                    <div className="genus-featured-proof-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="genus-featured-range animate-on-scroll fade-up" id="genusFeaturedProductRange">
            <div className="genus-featured-range-header">
              <span>{t.brands.productRangeEyebrow}</span>
              <h2>{t.brands.productRangeTitle}</h2>
              <p>{t.brands.productRangeIntro}</p>
            </div>

            <div className="genus-featured-range-grid stagger-group">
              {t.brands.productRangeItems.map(([title, description], index) => {
                const Icon = genusRangeIcons[index] ?? BatteryCharging;

                return (
                  <article className="genus-featured-range-card animate-on-scroll fade-up" key={title}>
                    <div className="genus-featured-range-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                );
              })}
            </div>

            <div className="genus-featured-range-closing">
              <BatteryCharging size={18} aria-hidden="true" />
              <p>{t.brands.productRangeClosing}</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
