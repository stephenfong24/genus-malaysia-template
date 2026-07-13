import { Lock, ArrowRight, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../i18n';

export default function Login() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <section 
        id="login" 
        className="login-section section-padding d-flex align-items-center" 
        style={{ 
          paddingTop: '160px', 
          paddingBottom: '100px',
          minHeight: '85vh', 
          background: 'radial-gradient(circle at top right, var(--color-accent-dim) 0%, var(--color-primary) 100%)' 
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 col-12 reveal-on-scroll revealed" id="loginCardContainer">
              <div 
                className="coming-soon-card text-center p-5 rounded-4 shadow-lg border border-1" 
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
                  <Lock size={30} />
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
                    {t.login.badge}
                  </span>
                </div>

                <h1 className="text-white fw-extrabold mb-3 font-sans tracking-tight" style={{ fontSize: '1.85rem' }}>
                  {t.login.title}
                </h1>
                
                <p className="mb-4 font-sans px-2" style={{ color: 'var(--color-gray-300)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.login.desc}
                </p>

                {/* Mock Form Structure */}
                <div className="text-start mb-4">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold font-sans mb-1" style={{ color: 'var(--color-gray-200)' }}>{t.login.dealerCode}</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. DL-88910" 
                      disabled
                      style={{ 
                        backgroundColor: 'var(--color-secondary)', 
                        borderColor: 'var(--color-accent-dim-strong)', 
                        color: 'var(--color-white)',
                        cursor: 'not-allowed'
                      }} 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold font-sans mb-1" style={{ color: 'var(--color-gray-200)' }}>{t.login.password}</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="••••••••••••" 
                      disabled 
                      style={{ 
                        backgroundColor: 'var(--color-secondary)', 
                        borderColor: 'var(--color-accent-dim-strong)', 
                        color: 'var(--color-white)',
                        cursor: 'not-allowed'
                      }}
                    />
                  </div>
                </div>

                <button 
                  className="btn btn-warning w-full py-2.5 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2" 
                  disabled
                  style={{ 
                    cursor: 'not-allowed', 
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-accent)',
                    border: 'none',
                    fontWeight: '700',
                    opacity: 0.8
                  }}
                >
                  <span>{t.login.button}</span>
                  <ArrowRight size={16} />
                </button>

                <div className="mt-4 pt-3 border-top border-secondary d-flex align-items-center justify-content-center gap-2 small" style={{ color: 'var(--color-gray-400)' }}>
                  <Shield size={14} style={{ color: 'var(--color-accent)' }} />
                  <span>{t.login.encryption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
