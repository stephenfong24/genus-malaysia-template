import { useState, useEffect } from 'react';
import { 
  BadgeCheck, 
  Zap, 
  ShieldCheck, 
  UserCheck, 
  MessageCircle, 
  Package, 
  Cpu, 
  Star,
  Phone,
  Truck,
  Wrench,
  Activity,
  FileCheck
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import { useLanguage } from '../i18n';

// Images
import avatarSuresh from '../assets/images/avatar_suresh_1783577525736.jpg';
import avatarSarah from '../assets/images/avatar_sarah_1783577539432.jpg';
import avatarMarcus from '../assets/images/avatar_marcus_1783577553748.jpg';

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

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suresh Kumar",
    location: "Petaling Jaya, Selangor",
    text: "My car battery died completely at my condominium parking lot in PJ. Called Genus, and their mobile technician arrived in just 25 minutes! Extremely professional service, did a free starter health test, and replaced it cleanly. 10/10!",
    rating: 5,
    avatar: avatarSuresh
  },
  {
    id: 2,
    name: "Sarah Ahmad",
    location: "KLCC, Kuala Lumpur",
    text: "The level of professionalism was stellar. There were no hidden fees. The price they quoted over the WhatsApp message was exactly what I paid. He even showed me how to read the official warranty slip. Highly recommended.",
    rating: 5,
    avatar: avatarSarah
  },
  {
    id: 3,
    name: "Marcus Tan",
    location: "Workshop Owner, Subang Jaya",
    text: "As a workshop owner, finding a reliable car battery wholesaler is crucial. Genus Malaysia supplies us with top-tier Genus and K-viron batteries on time. Their calcium-silver technology is highly requested by our clients for its incredible longevity!",
    rating: 5,
    avatar: avatarMarcus
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
    desc: "Fast, reliable dispatch and delivery of premium car batteries directly to your workshop, home, or office during standard business hours."
  },
  {
    id: "serviceCardInstallation",
    icon: <Wrench size={24} className="text-warning" />,
    title: "Onsite Installation",
    desc: "Precision onsite installation conducted by certified battery experts following manufacturer specifications for ultimate safety."
  },
  {
    id: "serviceCardHealthCheck",
    icon: <Activity size={24} className="text-warning" />,
    title: "Battery Diagnostics",
    desc: "Comprehensive battery, alternator, and starter diagnostics using professional digital testers to verify health metrics."
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
    desc: "Submit our digital form or send a WhatsApp message with your battery requirements or vehicle model. We reply immediately with competitive distributor pricing."
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
    desc: "We arrange prompt delivery directly to your home, office, or workshop within our standard business hours."
  },
  {
    num: 4,
    id: "step4",
    icon: <Wrench size={20} className="me-2 d-inline-block align-middle" />,
    title: "Step 4: Expert Installation",
    desc: "Our skilled technicians perform a clean and safe installation on-site, including a diagnostic check of your vehicle's alternator charging system."
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
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  const localizedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    name: t.home.testimonials[index][0],
    location: t.home.testimonials[index][1],
    text: t.home.testimonials[index][2],
  }));

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
                    src="/assets/images/home/genus-battery-cutout.png"
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
          <div className="row g-4 stagger-group" id="servicesGrid">
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

      {/* 8. TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials-section section-padding">
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center animate-on-scroll fade-up" id="testimonialsTitleWrap">
            <span className="section-subtitle" style={{ color: 'var(--color-accent, #FBBF24)' }}>{t.home.testimonialsSubtitle}</span>
            <h2 className="section-title light" id="testimonialsHeader">{t.home.testimonialsTitle}</h2>
            <p className="section-description mx-auto text-light opacity-75" id="testimonialsSubtext">
              {t.home.testimonialsDesc}
            </p>
          </div>
          
          {/* Custom React Carousel Slider */}
          <div className="testimonial-carousel-container animate-on-scroll fade-up stagger-1" id="testimonialCarouselWrap">
            <div className="carousel slide">
              {/* Carousel Indicators */}
              <div className="carousel-indicators carousel-indicators-custom">
                {localizedTestimonials.map((_, index) => (
                  <button 
                    key={index}
                    type="button" 
                    className={activeSlide === index ? 'active' : ''}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              {/* Slides content */}
              <div className="carousel-inner">
                {localizedTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`carousel-item ${activeSlide === index ? 'active d-block' : 'd-none'}`}
                    style={{ transition: 'opacity 0.6s ease' }}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-avatar-wrap">
                        <img 
                          src={testimonial.avatar} 
                          alt={`${testimonial.name} portrait`} 
                          className="testimonial-avatar" 
                        />
                      </div>
                      <div className="testimonial-rating d-flex justify-content-center align-items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="var(--color-accent, #FBBF24)" color="var(--color-accent, #FBBF24)" className="mx-0.5" />
                        ))}
                      </div>
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="testimonial-author">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
