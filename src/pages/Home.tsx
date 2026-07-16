import { Link } from 'react-router-dom';
import { 
  BadgeCheck, 
  BatteryCharging,
  CheckCircle2,
  Zap, 
  Gauge,
  ShieldCheck, 
  UserCheck, 
  MessageCircle, 
  Package, 
  Cpu, 
  Phone,
  Truck,
  Wrench,
  Activity,
  FileCheck,
  ThermometerSun
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import { useLanguage } from '../i18n';

// Images
import galleryBmwTrunk from '../assets/images/gallery_bmw_trunk_open_1783754835718.jpg';
import galleryBmwFront from '../assets/images/gallery_bmw_front_1783754848044.jpg';
import galleryTwoBatteries from '../assets/images/gallery_two_batteries_1783754862487.jpg';
import galleryBatteryInstalled from '../assets/images/gallery_battery_installed_1783754876700.jpg';
import galleryDeliveryVan from '../assets/images/gallery_delivery_van_1783754887817.jpg';

const galleryItems = [
  {
    id: 1,
    img: galleryBmwTrunk,
    title: "",
    desc: ""
  },
  {
    id: 2,
    img: galleryBmwFront,
    title: "",
    desc: ""
  },
  {
    id: 3,
    img: galleryTwoBatteries,
    title: "",
    desc: ""
  },
  {
    id: 4,
    img: galleryBatteryInstalled,
    title: "",
    desc: ""
  },
  {
    id: 5,
    img: galleryDeliveryVan,
    title: "",
    desc: ""
  }
];

const servicesList = [
  {
    id: "serviceCardReplacement",
    icon: <Package size={24} className="text-warning" />,
    title: "Battery Wholesaling",
    desc: "As a premier battery wholesaler, we offer high-performance batteries at competitive distributor prices for retailers, fleets, and workshops."
  },
  {
    id: "serviceCardDelivery",
    icon: <Truck size={24} className="text-warning" />,
    title: "Expert Battery Delivery",
    desc: "Fast, reliable battery dispatch to workshops, dealers, fleets, retailers, and business locations during standard business hours."
  },
  {
    id: "serviceCardInstallation",
    icon: <Wrench size={24} className="text-warning" />,
    title: "Installation Support",
    desc: "Installation support available for selected customers and vehicles, carried out by trained battery technicians."
  },
  {
    id: "serviceCardHealthCheck",
    icon: <Activity size={24} className="text-warning" />,
    title: "Battery Diagnostics",
    desc: "Battery testing and diagnostic support available to help workshops and customers confirm battery condition and charging performance."
  },
  {
    id: "serviceCardRoadside",
    icon: <ShieldCheck size={24} className="text-warning" />,
    title: "Genus & K-Viron Lines",
    desc: "We specialise in high-performance Genus and K-viron car batteries with calcium-silver technology & EFB Glass mat technology."
  },
  {
    id: "serviceCardWarranty",
    icon: <FileCheck size={24} className="text-warning" />,
    title: "Official Factory Warranty",
    desc: "Full factory warranty support ranging from 12 to 18 months, backed by our robust wholesaler replacement commitment."
  }
];

const steps = [
  {
    num: 1,
    id: "step1",
    icon: <Phone size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 1: Inquiry & Quote",
    desc: "Send your battery requirements, vehicle application, or order quantity through our enquiry form or WhatsApp. We reply with competitive distributor pricing."
  },
  {
    num: 2,
    id: "step2",
    icon: <Package size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 2: Order Fulfillment",
    desc: "Our warehouse team carefully prepares your high-performance Genus or K-viron batteries, ensuring they are fresh from the factory and fully tested."
  },
  {
    num: 3,
    id: "step3",
    icon: <Truck size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 3: Delivery Dispatch",
    desc: "We arrange prompt delivery to your workshop, dealership, fleet location, retail outlet, or business address within our standard business hours."
  },
  {
    num: 4,
    id: "step4",
    icon: <Wrench size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 4: Installation Support",
    desc: "Where installation support is required, our trained technicians can assist with safe battery fitting and basic charging-system checks."
  },
  {
    num: 5,
    id: "step5",
    icon: <FileCheck size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 5: Warranty Activation",
    desc: "Once completed, we activate your official 12 to 18-month warranty to guarantee long-term reliability and peace of mind."
  }
];

export default function Home() {
  const { t } = useLanguage();
  const featuredBrand = t.home.featuredBrand;

  const localizedServices = servicesList.map((service, index) => ({
    ...service,
    title: t.home.services[index][0],
    desc: t.home.services[index][1],
  }));

  const localizedSteps = steps.map((step, index) => ({
    ...step,
    title: t.home.steps[index][0],
    desc: t.home.steps[index][1],
  }));

  const localizedGalleryItems = galleryItems.map((item, index) => ({
    ...item,
    title: t.home.gallery[index][0],
    desc: t.home.gallery[index][1],
  }));

  const featuredBrandFeatures = [
    { id: 'powerful-starting', title: featuredBrand.features.powerfulStarting, Icon: Zap },
    { id: 'maintenance-free', title: featuredBrand.features.maintenanceFree, Icon: CheckCircle2 },
    { id: 'calcium-silver-technology', title: featuredBrand.features.calciumSilverTechnology, Icon: BatteryCharging },
    { id: 'high-heat-resistance', title: featuredBrand.features.highHeatResistance, Icon: ThermometerSun },
    { id: 'nationwide-warranty', title: featuredBrand.features.nationwideWarranty, Icon: ShieldCheck },
    { id: 'longer-service-life', title: featuredBrand.features.longerServiceLife, Icon: Gauge },
  ];

  return (
    <PageTransition>
      {/* 2. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Textual Content (Left) */}
            <div className="col-lg-6">
              <h1 className="hero-title animate-on-scroll fade-up hero-stagger-1" id="heroMainTitle">
                {t.home.heroTitleTop}<br /><span>{t.home.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle animate-on-scroll fade-up hero-stagger-2" id="heroSubtext">
                {t.home.heroSubtitle}
              </p>
              
              {/* Trust Badges */}
              <div className="hero-badges animate-on-scroll fade-up hero-stagger-3 stagger-group" id="heroBadgeGrid">
                <div className="hero-badge-item" id="badgeGenuine">
                  <BadgeCheck size={18} className="text-warning me-1" />
                  <span>{t.home.badges[0]}</span>
                </div>
                <div className="hero-badge-item" id="badgeResponse">
                  <Zap size={18} className="text-warning me-1" />
                  <span>{t.home.badges[1]}</span>
                </div>
                <div className="hero-badge-item" id="badgeWarranty">
                  <ShieldCheck size={18} className="text-warning me-1" />
                  <span>{t.home.badges[2]}</span>
                </div>
                <div className="hero-badge-item" id="badgeTechnician">
                  <UserCheck size={18} className="text-warning me-1" />
                  <span>{t.home.badges[3]}</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="hero-buttons animate-on-scroll fade-up hero-stagger-4" id="heroCtaWrap">
                <a 
                  href="https://wa.me/60162627528?text=Hi%20Genus%20Malaysia,%20I%20would%20like%20to%20enquire%20about%20your%20high-performance%20car%20batteries." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-premium-outline btn-ripple" 
                  id="heroWhatsappBtn"
                >
                  <MessageCircle size={18} className="text-success me-2" /> {t.home.whatsapp}
                </a>
              </div>
            </div>
            
            {/* Visual/Artwork Canvas (Right) */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-visual-container animate-on-scroll fade-scale hero-stagger-2" id="heroVisual">
                <div className="hero-visual-layer hero-watermark" aria-hidden="true">
                  <span>GENUS</span>
                  <small>MAX POWER</small>
                </div>
                <img className="hero-visual-layer hero-car-blueprint" src="/assets/images/home/car-blueprint.svg" alt="" aria-hidden="true" loading="lazy" />
                <div className="hero-visual-layer glow-backdrop" id="visualGlowBackdrop" aria-hidden="true"></div>
                <img className="hero-visual-layer hero-lightning hero-lightning-rear" src="/assets/images/home/battery-lightning-rear.svg" alt="" aria-hidden="true" loading="lazy" />
                <img className="hero-visual-layer hero-energy-platform" src="/assets/images/home/energy-platform.svg" alt="" aria-hidden="true" loading="lazy" />
                <img className="hero-visual-layer hero-particles" src="/assets/images/home/battery-particles.svg" alt="" aria-hidden="true" loading="lazy" />
                <div className="hero-battery-stage">
                  <img 
                    src="/assets/images/home/genus-battery-hero-new.png"
                    alt="GENUS Calcium-Silver Technology car battery"
                    className="hero-battery-art"
                    id="batteryIllustrationSvg"
                    decoding="async"
                  />
                </div>
                <img className="hero-visual-layer hero-lightning hero-lightning-front" src="/assets/images/home/battery-lightning-front.svg" alt="" aria-hidden="true" loading="lazy" />
                
                {/* Floating Widgets */}
                <div className="floating-card floating-card-1" id="floatWidgetResponse">
                  <Package size={20} className="me-2" style={{ color: 'var(--color-accent, #FBBF24)' }} />
                  <div className="floating-card-text">
                    <h5>{t.home.wholesaleSupply}</h5>
                    <span>{t.home.trustedSupplier}</span>
                  </div>
                </div>
                
                <div className="floating-card floating-card-2" id="floatWidgetBrands">
                  <Cpu size={20} className="me-2" style={{ color: 'var(--color-support, #2563EB)' }} />
                  <div className="floating-card-text">
                    <h5>{t.home.genusKviron}</h5>
                    <span>{t.home.premiumHighPerformance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="stats-card-container stagger-group" id="statsGrid">
            {/* Stat Item 1 */}
            <div className="stats-card animate-on-scroll fade-up" id="statCustomers">
              <AnimatedCounter target={10000} suffix="+" />
              <div className="stats-label">{t.home.stats[0]}</div>
            </div>
            {/* Stat Item 2 */}
            <div className="stats-card animate-on-scroll fade-up" id="statExperience">
              <AnimatedCounter target={15} suffix="+" />
              <div className="stats-label">{t.home.stats[1]}</div>
            </div>
            {/* Stat Item 3 */}
            <div className="stats-card animate-on-scroll fade-up" id="statResponse">
              <AnimatedCounter target={100} suffix="%" />
              <div className="stats-label">{t.home.stats[2]}</div>
            </div>
            {/* Stat Item 4 */}
            <div className="stats-card animate-on-scroll fade-up" id="statGenuine">
              <AnimatedCounter target={100} suffix="%" />
              <div className="stats-label">{t.home.stats[3]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          {/* Title */}
          <div className="section-title-container text-center animate-on-scroll fade-up" id="servicesTitleWrap">
            <span className="section-subtitle">{t.home.servicesSubtitle}</span>
            <h2 className="section-title" id="servicesHeader">{t.home.servicesTitle}</h2>
            <p className="section-description mx-auto" id="servicesSubtext">
              {t.home.servicesDesc}
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="row g-3 stagger-group" id="servicesGrid">
            {localizedServices.map((service) => (
              <div 
                key={service.id} 
                className="col-md-6 col-lg-4 animate-on-scroll fade-up" 
                id={service.id}
              >
                <div className="service-card">
                  <div className="service-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BRAND SECTION */}
      <section id="featured-brand" className="home-featured-brand-section section-padding" aria-labelledby="featuredBrandTitle">
        <div className="home-featured-brand-bg" aria-hidden="true">
          <img className="home-featured-brand-layer home-featured-brand-background" src="/assets/images/home/featured-brand/01-background.webp" alt="" loading="lazy" decoding="async" />
          <img className="home-featured-brand-layer home-featured-brand-lightning-left" src="/assets/images/home/featured-brand/05-lightning-left.png" alt="" loading="lazy" decoding="async" />
          <img className="home-featured-brand-layer home-featured-brand-lightning-right" src="/assets/images/home/featured-brand/06-lightning-right.png" alt="" loading="lazy" decoding="async" />
          <img className="home-featured-brand-layer home-featured-brand-smoke" src="/assets/images/home/featured-brand/07-smoke.png" alt="" loading="lazy" decoding="async" />
          <img className="home-featured-brand-layer home-featured-brand-particles" src="/assets/images/home/featured-brand/08-particles.png" alt="" loading="lazy" decoding="async" />
          <img className="home-featured-brand-layer home-featured-brand-glow" src="/assets/images/home/featured-brand/09-glow.png" alt="" loading="lazy" decoding="async" />
        </div>

        <div className="container home-featured-brand-container">
          <div className="home-featured-brand-header text-center animate-on-scroll fade-up" id="featuredBrandHeader">
            <span className="section-subtitle">{featuredBrand.eyebrow}</span>
            <h2 className="section-title light" id="featuredBrandTitle">{featuredBrand.title}</h2>
            <p className="section-description mx-auto">{featuredBrand.subtitle}</p>
          </div>

          <div className="home-featured-brand-showcase animate-on-scroll fade-up stagger-1" id="featuredBrandShowcase">
            <div className="home-featured-brand-feature-list home-featured-brand-feature-list-left stagger-group">
              {featuredBrandFeatures.slice(0, 3).map(({ id, title, Icon }) => (
                <div className="home-featured-brand-feature animate-on-scroll fade-up" key={id}>
                  <span className="home-featured-brand-feature-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>{title}</span>
                </div>
              ))}
            </div>

            <div className="home-featured-brand-stage" aria-label={featuredBrand.alt.battery}>
              <img className="home-featured-brand-stage-layer home-featured-brand-ring" src="/assets/images/home/featured-brand/03-energy-ring.png" alt="" loading="lazy" decoding="async" />
              <img className="home-featured-brand-stage-layer home-featured-brand-reflection" src="/assets/images/home/featured-brand/10-reflection.png" alt="" loading="lazy" decoding="async" />
              <img className="home-featured-brand-stage-layer home-featured-brand-pedestal" src="/assets/images/home/featured-brand/04-pedestal.png" alt="" loading="lazy" decoding="async" />
              <img className="home-featured-brand-battery" src="/assets/images/home/featured-brand/02-battery.png" alt={featuredBrand.alt.battery} loading="lazy" decoding="async" />
            </div>

            <div className="home-featured-brand-feature-list home-featured-brand-feature-list-right stagger-group">
              {featuredBrandFeatures.slice(3).map(({ id, title, Icon }) => (
                <div className="home-featured-brand-feature animate-on-scroll fade-up" key={id}>
                  <span className="home-featured-brand-feature-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-featured-brand-feature-grid stagger-group" aria-label={featuredBrand.labels.features}>
            {featuredBrandFeatures.map(({ id, title, Icon }) => (
              <div className="home-featured-brand-feature animate-on-scroll fade-up" key={id}>
                <span className="home-featured-brand-feature-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span>{title}</span>
              </div>
            ))}
          </div>

          <div className="home-featured-brand-actions animate-on-scroll fade-up">
            <Link to="/brands" className="btn btn-premium-accent btn-ripple">
              <BatteryCharging size={18} aria-hidden="true" />
              <span>{featuredBrand.actions.explore}</span>
            </Link>
            <Link to="/contact" className="btn btn-premium-outline btn-ripple">
              <MessageCircle size={18} aria-hidden="true" />
              <span>{featuredBrand.actions.contact}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="timeline" className="timeline-section section-padding">
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center animate-on-scroll fade-up" id="timelineTitleWrap">
            <span className="section-subtitle">{t.home.timelineSubtitle}</span>
            <h2 className="section-title" id="timelineHeader">{t.home.timelineTitle}</h2>
            <p className="section-description mx-auto" id="timelineSubtext">
              {t.home.timelineDesc}
            </p>
          </div>
          
          {/* Timeline Structure */}
          <div className="timeline-wrapper stagger-group" id="timelineContainer">
            <div className="timeline-line" style={{ backgroundColor: 'var(--color-accent-dim-strong, rgba(251, 191, 36, 0.2))' }}></div>
            
            {localizedSteps.map((step) => (
              <div 
                key={step.num} 
                className="timeline-item animate-on-scroll fade-up" 
                id={step.id}
              >
                <div className="timeline-badge" style={{ backgroundColor: 'var(--color-accent, #FBBF24)', color: 'var(--color-primary, #111827)' }}>
                  {step.num}
                </div>
                <div className="timeline-content">
                  <h3 className="d-flex align-items-center gap-1">
                    {step.icon}
                    <span>{step.title}</span>
                  </h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION (Dark Background, Responsive Masonry Layout) */}
      <section 
        id="gallery" 
        className="gallery-section section-padding" 
        style={{ 
          background: 'radial-gradient(circle at 10% 90%, var(--color-secondary) 0%, var(--color-primary) 100%)',
          borderTop: '1px solid var(--color-accent-dim, rgba(251, 191, 36, 0.08))'
        }}
      >
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center animate-on-scroll fade-up mb-5" id="galleryTitleWrap">
            <span className="section-subtitle" style={{ color: 'var(--color-accent, #FBBF24)' }}>{t.home.gallerySubtitle}</span>
            <h2 className="section-title text-white" id="galleryHeader">{t.home.galleryTitle}</h2>
            <p className="section-description mx-auto text-gray-300 opacity-80" id="gallerySubtext" style={{ maxWidth: '650px' }}>
              {t.home.galleryDesc}
            </p>
          </div>

          {/* Masonry Columns Grid */}
          <div className="gallery-masonry-container stagger-group" id="galleryMasonryContainer">
            {localizedGalleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-masonry-card animate-on-scroll fade-up mb-4 overflow-hidden rounded-4 border border-1" 
                id={`galleryCard${item.id}`}
                style={{ 
                  backgroundColor: 'var(--color-secondary, #111827)', 
                  borderColor: 'var(--color-accent-dim-strong, rgba(255, 255, 255, 0.08))'
                }}
              >
                <div className="overflow-hidden position-relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-100 h-auto d-block"
                    style={{ 
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    referrerPolicy="no-referrer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-white fw-bold mb-2 font-sans" style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                  <p className="mb-0 small" style={{ color: 'var(--color-gray-400)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
