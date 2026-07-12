import React from 'react';
import { 
  Award, 
  Gem, 
  Shield, 
  Settings, 
  Zap, 
  Star,
  CheckCircle2
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import genusBatteryMalaysiaImg from '../assets/images/genus_gs650_battery_uploaded_1783755776844.jpg';

interface Brand {
  id: string;
  icon: React.ReactNode;
  name: string;
  desc: string;
}

export default function Brands() {
  const brandsList: Brand[] = [
    {
      id: "brandGenus",
      icon: <Award size={40} className="brand-icon-accent" />,
      name: "Genus",
      desc: "Calcium-Silver / EFB"
    },
    {
      id: "brandKviron",
      icon: <Gem size={40} className="brand-icon-accent" />,
      name: "K-viron",
      desc: "Premium Durability"
    },
    {
      id: "brandAmaron",
      icon: <Shield size={40} className="brand-icon-accent" />,
      name: "Amaron",
      desc: "Long Life Battery"
    },
    {
      id: "brandBosch",
      icon: <Settings size={40} className="brand-icon-accent" />,
      name: "Bosch",
      desc: "German Technology"
    },
    {
      id: "brandVarta",
      icon: <Zap size={40} className="brand-icon-accent" />,
      name: "Varta",
      desc: "Premium European"
    },
    {
      id: "brandCentury",
      icon: <Star size={40} className="brand-icon-accent" />,
      name: "Century",
      desc: "Malaysian Pioneer"
    }
  ];

  return (
    <PageTransition>
      <section id="brands" className="brands-section section-padding" style={{ paddingTop: '140px', paddingBottom: '60px', minHeight: 'auto' }}>
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center reveal-on-scroll revealed animate-fade-in" id="brandsTitleWrap">
            <span className="section-subtitle">Premium Portfolios</span>
            <h2 className="section-title" id="brandsHeader">Authorized Battery Brands</h2>
            <p className="section-description mx-auto" id="brandsSubtext">
              We maintain robust inventory levels of high-performance car batteries specialising in Genus and K-viron brands alongside other global automotive brands.
            </p>
          </div>
          
          {/* Brands Logo Grid */}
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 mb-5" id="brandsGrid">
            {brandsList.map((brand) => (
              <div 
                key={brand.id} 
                className="col reveal-on-scroll revealed" 
                id={brand.id}
              >
                <div className="brand-card">
                  <div className="brand-logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {brand.icon}
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
            <div className="col-lg-7 col-12 text-white" id="genusFeaturedContent">
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
                Featured Brand
              </span>
              <h2 className="fw-extrabold mb-4 font-sans tracking-tight text-white" style={{ fontSize: '2.5rem' }}>
                Genus Batteries
              </h2>
              
              <p className="mb-3 font-sans opacity-90" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-gray-200)' }}>
                Genus Battery in Malaysia (often distributed by Panna Group) is a rising brand known for high-performance automotive and industrial energy solutions. Featuring advanced Calcium-Silver technology, their batteries deliver strong, stable starting power and are designed to resist high temperatures and frequent stopping-and-starting.
              </p>
              
              <p className="mb-4 font-sans opacity-90" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-gray-200)' }}>
                With a local hub located in Serdang, Selangor, Genus provides reliable, long-lasting power for everyday passenger cars (such as the Honda Jazz) as well as heavy-duty inverters and solar systems globally. Key features of their batteries include:
              </p>

              {/* Key Features List */}
              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="brand-icon-accent flex-shrink-0 mt-1">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-white font-sans" style={{ fontSize: '1.1rem' }}>Calcium-Silver Technology</h5>
                    <p className="mb-0 small opacity-80" style={{ color: 'var(--color-gray-300)' }}>Enhances cranking power and extends overall lifespan.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="brand-icon-accent flex-shrink-0 mt-1">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-white font-sans" style={{ fontSize: '1.1rem' }}>High Heat Resistance & Anti-Vibration</h5>
                    <p className="mb-0 small opacity-80" style={{ color: 'var(--color-gray-300)' }}>Built to withstand demanding tropical climates and rough road conditions.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="brand-icon-accent flex-shrink-0 mt-1">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-white font-sans" style={{ fontSize: '1.1rem' }}>Low Maintenance & Fast Charging</h5>
                    <p className="mb-0 small opacity-80" style={{ color: 'var(--color-gray-300)' }}>Engineered for convenience, deep discharge recovery, and rapid charge retention.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-5 col-12" id="genusFeaturedImageCol">
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
        </div>
      </section>
    </PageTransition>
  );
}
