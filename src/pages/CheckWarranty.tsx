import { CalendarCheck, Search, ShieldCheck, HelpCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function CheckWarranty() {
  return (
    <PageTransition>
      <section 
        id="check-warranty" 
        className="maintenance-section section-padding d-flex align-items-center" 
        style={{ 
          paddingTop: '160px', 
          paddingBottom: '100px',
          minHeight: '85vh', 
          background: 'radial-gradient(circle at top left, var(--color-accent-dim) 0%, var(--color-primary) 100%)' 
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10 col-12 reveal-on-scroll revealed" id="maintenanceCardContainer">
              <div 
                className="coming-soon-card p-5 rounded-4 shadow-lg border border-1 text-center" 
                style={{ 
                  backgroundColor: 'var(--color-secondary)', 
                  borderColor: 'var(--color-accent-dim-strong)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Visual Accent Glow */}
                <div 
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '70px', 
                    height: '70px', 
                    backgroundColor: 'var(--color-accent-dim)', 
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-accent-dim-strong)',
                    boxShadow: '0 0 20px var(--color-accent-dim-strong)'
                  }}
                >
                  <ShieldCheck size={30} />
                </div>

                <div className="mb-2">
                  <span 
                    className="badge text-uppercase fw-bold px-3 py-2 rounded-pill mb-3"
                    style={{ 
                      backgroundColor: 'var(--color-accent-dim)', 
                      color: 'var(--color-accent)', 
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      border: '1px solid var(--color-accent-dim-strong)'
                    }}
                  >
                    Warranty Check Coming Soon
                  </span>
                </div>

                <h2 className="text-white fw-extrabold mb-3 font-sans tracking-tight" style={{ fontSize: '1.85rem' }}>
                  Check Battery Warranty
                </h2>
                
                <p className="mb-4 font-sans px-2" style={{ color: 'var(--color-gray-300)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Soon you will be able to verify your Genus or K-Viron battery warranty using the battery serial number or purchase details. Check whether your warranty is active, review the registered purchase date, and get clear next steps for support or replacement claims.
                </p>

                {/* Simulated Warranty Serial Search */}
                <div className="mb-4">
                  <div className="input-group" style={{ maxWidth: '450px', margin: '0 auto' }}>
                    <span className="input-group-text border-0" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-gray-400)' }}>
                      <Search size={18} />
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-0" 
                      placeholder="Enter battery serial number" 
                      disabled 
                      style={{ 
                        backgroundColor: 'var(--color-secondary)', 
                        color: 'var(--color-white)',
                        cursor: 'not-allowed',
                        padding: '12px 16px'
                      }}
                    />
                    <button 
                      className="btn btn-warning" 
                      disabled 
                      style={{ 
                        cursor: 'not-allowed',
                        fontWeight: '600',
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-accent)',
                        border: 'none',
                        padding: '0 20px',
                        opacity: 0.8
                      }}
                    >
                      Check
                    </button>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-3 text-start mt-3 border-top border-secondary pt-4">
                  <div className="col d-flex gap-2">
                    <ShieldCheck size={18} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-white mb-0 font-sans small fw-bold">Warranty Status</h6>
                      <p className="small mb-0 font-sans" style={{ color: 'var(--color-gray-400)' }}>Confirm active battery coverage</p>
                    </div>
                  </div>
                  <div className="col d-flex gap-2">
                    <CalendarCheck size={18} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-white mb-0 font-sans small fw-bold">Purchase Record</h6>
                      <p className="small mb-0 font-sans" style={{ color: 'var(--color-gray-400)' }}>View purchase and expiry dates</p>
                    </div>
                  </div>
                  <div className="col d-flex gap-2">
                    <HelpCircle size={18} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-white mb-0 font-sans small fw-bold">Claim Guidance</h6>
                      <p className="small mb-0 font-sans" style={{ color: 'var(--color-gray-400)' }}>Know what to prepare for support</p>
                    </div>
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
