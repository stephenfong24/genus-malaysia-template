import React from 'react';
import {
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Sun,
  TimerReset,
  Zap
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import genusBatteryMalaysiaImg from '../assets/images/genus_gs650_battery_uploaded_1783755776844.jpg';
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
  const whyChooseIcons = [Zap, Sun, TimerReset, Sparkles, BadgeCheck, ShieldCheck];

  const brandsList: Brand[] = [
    {
      id: "brandGenus",
      logoSrc: "/assets/brand/genus-logo.png",
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

      {/* NEW SECTION: GENUS BATTERIES */}
      <section 
        id="genus-featured" 
        className="genus-featured-section section-padding" 
        style={{ 
          background: 'radial-gradient(circle at 10% 90%, var(--color-secondary) 0%, var(--color-primary) 100%)', 
          paddingTop: '80px', 
          paddingBottom: '100px',
          borderTop: '1px solid var(--color-accent-dim, rgba(251, 191, 36, 0.1))',
          borderBottom: '1px solid var(--color-accent-dim, rgba(251, 191, 36, 0.1))'
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content Column */}
            <div className="col-lg-7 col-12 text-white animate-on-scroll fade-up" id="genusFeaturedContent">
              <span 
                className="badge text-uppercase fw-bold px-3 py-2 rounded-pill mb-3"
                style={{ 
                  backgroundColor: 'var(--color-accent-dim, rgba(251, 191, 36, 0.1))', 
                  color: 'var(--color-accent, #FBBF24)', 
                  fontSize: '0.75rem',
                  letterSpacing: '1px',
                  border: '1px solid var(--color-accent-dim-strong, rgba(251, 191, 36, 0.2))'
                }}
              >
                {t.brands.featured}
              </span>
              <h2 className="fw-extrabold mb-4 font-sans tracking-tight text-white" style={{ fontSize: '2.5rem' }}>
                {t.brands.genusTitle}
              </h2>
              
              <p className="mb-3 font-sans opacity-90" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-gray-200)' }}>
                {t.brands.paragraph1}
              </p>
              
              <p className="mb-4 font-sans opacity-90" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-gray-200)' }}>
                {t.brands.paragraph2}
              </p>

              <div className="genus-core-features" aria-label="Genus battery core features">
                {t.brands.features.map(([title, description]) => (
                  <div className="genus-core-feature" key={title}>
                    <CheckCircle2 size={20} />
                    <div>
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-5 col-12 animate-on-scroll fade-scale stagger-1" id="genusFeaturedImageCol">
              <div 
                className="position-relative overflow-hidden rounded-4 shadow-lg border"
                style={{ 
                  borderColor: 'var(--color-accent-dim-strong, rgba(251, 191, 36, 0.2))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Visual Accent Glow effect */}
                <div 
                  className="position-absolute w-100 h-100" 
                  style={{ 
                    background: 'linear-gradient(185deg, var(--color-accent-dim, rgba(251, 191, 36, 0.08)) 0%, rgba(0,0,0,0) 50%)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />
                <img 
                  src={genusBatteryMalaysiaImg} 
                  alt="Premium Genus Battery Malaysia" 
                  className="w-100 h-auto d-block" 
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.0)';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="genus-why-panel animate-on-scroll fade-up" id="genusWhyChoose">
            <div className="genus-why-header">
              <div className="genus-why-kicker">
                <BatteryCharging size={18} />
                <span>{t.brands.whyChooseTitle}</span>
              </div>
              <p>{t.brands.whyChooseIntro}</p>
            </div>

            <div className="genus-why-grid">
              {t.brands.whyChooseItems.map(([title, description], index) => {
                const Icon = whyChooseIcons[index] ?? CheckCircle2;

                return (
                  <article className="genus-why-card" key={title}>
                    <div className="genus-why-icon">
                      <Icon size={22} />
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
        </div>
      </section>
    </PageTransition>
  );
}
