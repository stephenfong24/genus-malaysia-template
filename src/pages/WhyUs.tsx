import { Users, Tag, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import whyUsImg from '../assets/images/roadside_assistance_malaysia_1783501379081.jpg';

export default function WhyUs() {
  return (
    <PageTransition>
      <section id="why-us" className="why-section section-padding" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Visual Image/Mockup */}
            <div className="col-lg-6 col-md-12 reveal-on-scroll revealed" id="whyUsVisualWrap">
              <div className="why-image-wrapper">
                <img 
                  src={whyUsImg} 
                  alt="Professional Automotive technician changing car battery on-site in Malaysia" 
                  className="why-img" 
                  id="whyUsContextImage"
                />
                
                {/* Premium floating detail */}
                <div 
                  className="why-floating-badge" 
                  id="whyFloatingBadge" 
                  style={{ 
                    background: 'var(--color-secondary, rgba(15, 23, 42, 0.9))', 
                    border: '1px solid var(--color-accent-dim-strong, rgba(251, 191, 36, 0.2))', 
                    backdropFilter: 'blur(8px)' 
                  }}
                >
                  <h4 style={{ color: 'var(--color-accent, #FBBF24)' }}>EXPERT</h4>
                  <p>Wholesale Supplier</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-lg-6 col-md-12 ps-lg-5 mt-5 mt-lg-0 reveal-on-scroll revealed stagger-1" id="whyUsTextWrap">
              <span className="section-subtitle">Our Advantage</span>
              <h2 className="section-title mb-4" id="whyUsHeader">Why Workshops & Drivers Choose GENUS</h2>
              <p className="mb-5" id="whyUsOverviewText">
                At GENUS MALAYSIA SDN BHD, we’re your trusted car battery experts. We specialise in high-performance Genus and K-viron car batteries, including calcium-silver technology & EFB Glass mat technology for longer-lasting durability.
              </p>
              
              {/* Feature Lists */}
              <div className="why-list" id="whyReasonsList">
                {/* Reason 1 */}
                <div className="why-item" id="whyReasonTech">
                  <div className="why-item-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} />
                  </div>
                  <div className="why-item-text">
                    <h4>Professional Technicians</h4>
                    <p>Our staff are thoroughly trained to install car batteries for standard, luxury, and hybrid vehicles without harming vehicle ECU systems.</p>
                  </div>
                </div>
                {/* Reason 2 */}
                <div className="why-item" id="whyReasonPrice">
                  <div className="why-item-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag size={20} />
                  </div>
                  <div className="why-item-text">
                    <h4>Transparent & Honest Pricing</h4>
                    <p>No hidden charges or unexpected callback fees. The battery price we quote includes delivery, installation, and alternator testing.</p>
                  </div>
                </div>
                {/* Reason 3 */}
                <div className="why-item" id="whyReasonSpeed">
                  <div className="why-item-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={20} />
                  </div>
                  <div className="why-item-text">
                    <h4>Reliable Supply Chain</h4>
                    <p>With extensive inventory levels and robust wholesale logistics, we guarantee that you get the right battery, right when you need it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
