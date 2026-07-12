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
    title: "BMW Battery Replacement",
    desc: "Delivering and preparing dual high-performance Genus batteries for onsite replacement on a BMW 3 Series."
  },
  {
    id: 2,
    img: galleryBmwFront,
    title: "Sleek Workshop Operations",
    desc: "A premium BMW sedan in our workshop undergoing starter, alternator, and electrical system diagnostics."
  },
  {
    id: 3,
    img: galleryTwoBatteries,
    title: "Genus vs OEM Battery",
    desc: "Comparing the premium calcium-silver Genus AGM battery side-by-side with the vehicle's factory battery."
  },
  {
    id: 4,
    img: galleryBatteryInstalled,
    title: "Clean Trunk Installation",
    desc: "A fresh Genus G59220 AGM battery securely installed in the trunk compartment with professional cabling."
  },
  {
    id: 5,
    img: galleryDeliveryVan,
    title: "Daily Battery Deliveries",
    desc: "Our delivery fleet stacked with fresh stocks of Genus and K-Viron car batteries ready to supply dealerships and workshops."
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
            <div className="col-lg-6 reveal-on-scroll revealed">
              <h1 className="hero-title" id="heroMainTitle">
                Trusted Car Battery<br /><span>Wholesaler & Experts</span>
              </h1>
              <p className="hero-subtitle" id="heroSubtext">
                We’re your trusted car battery experts — fast, reliable, and always ready to help. We specialise in high-performance Genus and K-viron car batteries, including calcium-silver technology & EFB Glass mat technology for longer-lasting durability.
              </p>
              
              {/* Trust Badges */}
              <div className="hero-badges" id="heroBadgeGrid">
                <div className="hero-badge-item" id="badgeGenuine">
                  <BadgeCheck size={18} className="text-warning me-1" />
                  <span>✓ Wholesaler Price</span>
                </div>
                <div className="hero-badge-item" id="badgeResponse">
                  <Zap size={18} className="text-warning me-1" />
                  <span>✓ Genus & K-Viron</span>
                </div>
                <div className="hero-badge-item" id="badgeWarranty">
                  <ShieldCheck size={18} className="text-warning me-1" />
                  <span>✓ Official Warranty</span>
                </div>
                <div className="hero-badge-item" id="badgeTechnician">
                  <UserCheck size={18} className="text-warning me-1" />
                  <span>✓ Certified Experts</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="hero-buttons" id="heroCtaWrap">
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Genus%20Malaysia,%20I%20would%20like%20to%20enquire%20about%20your%20high-performance%20car%20batteries." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-premium-outline btn-ripple" 
                  id="heroWhatsappBtn"
                >
                  <MessageCircle size={18} className="text-success me-2" /> WhatsApp Now
                </a>
              </div>
            </div>
            
            {/* Visual/Artwork Canvas (Right) */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-visual-container reveal-on-scroll revealed stagger-1" id="heroVisual">
                <div 
                  className="glow-backdrop" 
                  id="visualGlowBackdrop" 
                  style={{ background: 'radial-gradient(circle, var(--color-accent-dim-strong) 0%, transparent 70%)' }}
                ></div>
                
                {/* Premium Embedded Interactive SVG Battery Illustration */}
                <svg className="hero-battery-art" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" id="batteryIllustrationSvg">
                  {/* Background electric pulse */}
                  <circle cx="250" cy="220" r="140" fill="none" stroke="var(--color-accent-dim-strong)" strokeWidth="2" strokeDasharray="10 15" />
                  <circle cx="250" cy="220" r="165" fill="none" stroke="var(--color-accent-dim)" strokeWidth="1.5" strokeDasharray="5 10" />
                  
                  {/* Battery Terminal Shadows */}
                  <rect x="145" y="65" width="40" height="25" rx="5" fill="var(--color-primary)" opacity="0.3"/>
                  <rect x="315" y="65" width="40" height="25" rx="5" fill="var(--color-primary)" opacity="0.3"/>
                  
                  {/* Battery Terminals */}
                  {/* Negative (-) */}
                  <rect x="140" y="60" width="40" height="25" rx="5" fill="#4B5563" />
                  <circle cx="160" cy="72" r="6" fill="#D1D5DB" />
                  <rect x="154" y="71" width="12" height="2" fill="#9CA3AF" />
                  
                  {/* Positive (+) */}
                  <rect x="320" y="60" width="40" height="25" rx="5" fill="#EF4444" />
                  <circle cx="340" cy="72" r="6" fill="#FCA5A5" />
                  <path d="M337 72h6M340 69v6" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Main Battery Body */}
                  <rect x="100" y="80" width="300" height="200" rx="16" fill="var(--color-secondary)" stroke="var(--color-accent-dim-strong)" strokeWidth="4" />
                  
                  {/* Premium Carbon Fiber Texture Overlay simulated via pattern */}
                  <rect x="110" y="90" width="280" height="180" rx="10" fill="var(--color-primary)" />
                  
                  {/* Branding Badge */}
                  <rect x="130" y="115" width="240" height="80" rx="8" fill="var(--color-secondary)" stroke="var(--color-accent-dim-strong)" strokeWidth="1.5" />
                  <text x="250" y="150" fill="#FFFFFF" fontFamily="'Poppins', sans-serif" fontWeight="800" fontSize="22" textAnchor="middle" letterSpacing="2">GENUS</text>
                  <text x="250" y="178" fill="var(--color-accent, #FBBF24)" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="12" textAnchor="middle" letterSpacing="5">MAX POWER</text>
                  
                  {/* Voltage Digital Display Panel */}
                  <rect x="140" y="215" width="90" height="36" rx="6" fill="var(--color-primary)" stroke="var(--color-accent-dim-strong)" strokeWidth="1" />
                  <text x="185" y="239" fill="var(--color-accent, #FBBF24)" fontFamily="monospace" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="1">12.8V</text>
                  
                  {/* Status Indicators */}
                  <rect x="255" y="215" width="105" height="36" rx="6" fill="var(--color-primary)" stroke="var(--color-accent-dim-strong)" strokeWidth="1" />
                  <circle cx="275" cy="233" r="5" fill="#10B981" />
                  <text x="290" y="238" fill="#10B981" fontFamily="'Poppins', sans-serif" fontWeight="600" fontSize="11">HEALTHY</text>
                </svg>
                
                {/* Floating Widgets */}
                <div className="floating-card floating-card-1" id="floatWidgetResponse" style={{ borderLeft: '4px solid var(--color-accent, #FBBF24)' }}>
                  <Package size={20} className="me-2" style={{ color: 'var(--color-accent, #FBBF24)' }} />
                  <div className="floating-card-text">
                    <h5>Wholesale Supply</h5>
                    <span>Trusted National Supplier</span>
                  </div>
                </div>
                
                <div className="floating-card floating-card-2" id="floatWidgetBrands" style={{ borderLeft: '4px solid var(--color-support, #2563EB)' }}>
                  <Cpu size={20} className="me-2" style={{ color: 'var(--color-support, #2563EB)' }} />
                  <div className="floating-card-text">
                    <h5>Genus & K-Viron</h5>
                    <span>Premium High-Performance</span>
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
          <div className="stats-card-container" id="statsGrid">
            {/* Stat Item 1 */}
            <div className="stats-card" id="statCustomers">
              <AnimatedCounter target={10000} suffix="+" />
              <div className="stats-label">Batteries Distributed</div>
            </div>
            {/* Stat Item 2 */}
            <div className="stats-card" id="statExperience">
              <AnimatedCounter target={15} suffix="+" />
              <div className="stats-label">Years Experience</div>
            </div>
            {/* Stat Item 3 */}
            <div className="stats-card" id="statResponse">
              <AnimatedCounter target={100} suffix="%" />
              <div className="stats-label">Genuine Warranty</div>
            </div>
            {/* Stat Item 4 */}
            <div className="stats-card" id="statGenuine">
              <AnimatedCounter target={100} suffix="%" />
              <div className="stats-label">Premium Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          {/* Title */}
          <div className="section-title-container text-center reveal-on-scroll revealed" id="servicesTitleWrap">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title" id="servicesHeader">Professional Automotive Battery Solutions</h2>
            <p className="section-description mx-auto" id="servicesSubtext">
              We provide a premium suite of car battery solutions to ensure your vehicles and dealership inventories remain powered with high-performance energy.
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="row g-4" id="servicesGrid">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                className="col-md-6 col-lg-4 reveal-on-scroll revealed" 
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
          <div className="section-title-container text-center reveal-on-scroll revealed" id="testimonialsTitleWrap">
            <span className="section-subtitle" style={{ color: 'var(--color-accent, #FBBF24)' }}>Customer Stories</span>
            <h2 className="section-title light" id="testimonialsHeader">What Malaysian Drivers Say</h2>
            <p className="section-description mx-auto text-light opacity-75" id="testimonialsSubtext">
              Read real, high-trust reviews from drivers and commercial workshops who have experienced our premium battery distribution and expert supply services.
            </p>
          </div>
          
          {/* Custom React Carousel Slider */}
          <div className="testimonial-carousel-container reveal-on-scroll revealed stagger-1" id="testimonialCarouselWrap">
            <div className="carousel slide">
              {/* Carousel Indicators */}
              <div className="carousel-indicators carousel-indicators-custom">
                {testimonials.map((_, index) => (
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
                {testimonials.map((testimonial, index) => (
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
          <div className="section-title-container text-center reveal-on-scroll revealed" id="timelineTitleWrap">
            <span className="section-subtitle">How It Works</span>
            <h2 className="section-title" id="timelineHeader">Our Simple 5-Step Supply Process</h2>
            <p className="section-description mx-auto" id="timelineSubtext">
              Acquiring high-performance car batteries is straightforward. We make battery supply, delivery, and professional installation completely hassle-free.
            </p>
          </div>
          
          {/* Timeline Structure */}
          <div className="timeline-wrapper" id="timelineContainer">
            <div className="timeline-line" style={{ backgroundColor: 'var(--color-accent-dim-strong, rgba(251, 191, 36, 0.2))' }}></div>
            
            {steps.map((step) => (
              <div 
                key={step.num} 
                className="timeline-item reveal-on-scroll revealed" 
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
          <div className="section-title-container text-center reveal-on-scroll revealed mb-5" id="galleryTitleWrap">
            <span className="section-subtitle" style={{ color: 'var(--color-accent, #FBBF24)' }}>Work Gallery</span>
            <h2 className="section-title text-white" id="galleryHeader">Onsite Operations & Distributions</h2>
            <p className="section-description mx-auto text-gray-300 opacity-80" id="gallerySubtext" style={{ maxWidth: '650px' }}>
              Take an inside look at our daily operations, professional automotive battery diagnostics, expert onsite installations, and premium inventory distribution.
            </p>
          </div>

          {/* Masonry Columns Grid */}
          <div className="gallery-masonry-container" id="galleryMasonryContainer">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-masonry-card mb-4 overflow-hidden rounded-4 border border-1" 
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
