import { Activity, Search, ShieldCheck, HelpCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function CheckMaintenance() {
  return (
    <PageTransition>
      <section 
        id="check-maintenance" 
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
            <div className="col-lg-6 col-md-10 col-12 reveal-on-scroll revealed" id="maintenanceCardContainer">
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
                  <Activity size={30} />
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
                    Feature Coming Soon
                  </span>
                </div>

                <h2 className="text-white fw-extrabold mb-3 font-sans tracking-tight" style={{ fontSize: '1.85rem' }}>
                  Battery Maintenance & Warranty Tracker
                </h2>
                
                <p className="mb-4 font-sans px-2" style={{ color: 'var(--color-gray-300)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  A brand new way to monitor your vehicle's energy. Soon you will be able to input your Genus or K-Viron battery's unique factory serial number to verify active warranty coverage, check detailed maintenance logs, and review electrical health logs from our onsite diagnostics.
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
                      placeholder="e.g. KV-991A-2026" 
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
                      Verify
                    </button>
                  </div>
                </div>

                <div className="row g-3 justify-content-center text-start mt-3 border-top border-secondary pt-4">
                  <div className="col-sm-6 d-flex gap-2">
                    <ShieldCheck size={18} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-white mb-0 font-sans small fw-bold">Active Registration</h6>
                      <p className="small mb-0 font-sans" style={{ color: 'var(--color-gray-400)' }}>Self-register purchase slips directly</p>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex gap-2">
                    <HelpCircle size={18} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-white mb-0 font-sans small fw-bold">Instant Diagnostics</h6>
                      <p className="small mb-0 font-sans" style={{ color: 'var(--color-gray-400)' }}>Review starter & alternator outputs</p>
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
