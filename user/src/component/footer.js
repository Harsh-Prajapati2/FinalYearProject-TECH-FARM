
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="modern-footer">
        <div className="container-modern">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div style={{ marginBottom: '24px' }}>
                <Link to="/" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: '#FFC107',
                  fontSize: '2rem',
                  fontWeight: '700'
                }}>
                  <i className="fa fa-leaf" style={{ fontSize: '2.5rem' }}></i>
                  <span>Tech-Farm</span>
                </Link>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontSize: '1rem'
              }}>
                Empowering farmers with modern technology and sustainable solutions 
                for a greener, more productive future in agriculture.
              </p>
              
              {/* Social Links */}
              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { icon: 'fa-facebook', color: '#1877F2' },
                  { icon: 'fa-twitter', color: '#1DA1F2' },
                  { icon: 'fa-instagram', color: '#E4405F' },
                  { icon: 'fa-linkedin', color: '#0A66C2' },
                  { icon: 'fa-youtube', color: '#FF0000' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: social.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-4px) scale(1.1)';
                      e.target.style.boxShadow = `0 8px 24px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className={`fa ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 style={{ color: '#FFC107', marginBottom: '20px', fontSize: '1.3rem' }}>
                <i className="fa fa-link" style={{ marginRight: '8px' }}></i>
                Quick Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { to: "/", label: "Home", icon: "fa-home" },
                  { to: "/Product", label: "Products", icon: "fa-leaf" },
                  { to: "/Equipment", label: "Equipment", icon: "fa-cogs" },
                  { to: "/Subsidies", label: "Subsidies", icon: "fa-money" },
                  { to: "/Sechemes", label: "Schemes", icon: "fa-file-text" },
                  { to: "/About", label: "About Us", icon: "fa-info-circle" }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <Link 
                      to={link.to} 
                      className="footer-link"
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '1rem',
                        padding: '4px 0',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#FFC107';
                        e.target.style.transform = 'translateX(8px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      <i className={`fa ${link.icon}`} style={{ width: '16px' }}></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 style={{ color: '#FFC107', marginBottom: '20px', fontSize: '1.3rem' }}>
                <i className="fa fa-cogs" style={{ marginRight: '8px' }}></i>
                Our Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Crop Management",
                  "Soil Analysis",
                  "Weather Monitoring", 
                  "Equipment Rental",
                  "Expert Consultation",
                  "Market Analysis"
                ].map((service, index) => (
                  <li key={index} style={{ 
                    marginBottom: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1rem'
                  }}>
                    <i className="fa fa-check-circle" style={{ color: '#4CAF50', fontSize: '0.9rem' }}></i>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 style={{ color: '#FFC107', marginBottom: '20px', fontSize: '1.3rem' }}>
                <i className="fa fa-phone" style={{ marginRight: '8px' }}></i>
                Contact Us
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <i className="fa fa-phone" style={{ color: '#FFC107', fontSize: '1.1rem' }}></i>
                    <span style={{ color: '#FFFFFF', fontWeight: '600' }}>Help Line</span>
                  </div>
                  <a 
                    href="tel:+917283818506"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}
                  >
                    +91 7283818506
                  </a>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <i className="fa fa-envelope" style={{ color: '#FFC107', fontSize: '1.1rem' }}></i>
                    <span style={{ color: '#FFFFFF', fontWeight: '600' }}>Email Support</span>
                  </div>
                  <a 
                    href="mailto:techfarm@gmail.com"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}
                  >
                    techfarm@gmail.com
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h4 style={{ 
                  color: '#FFFFFF', 
                  marginBottom: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  📧 Stay Updated
                </h4>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  marginBottom: '16px',
                  fontSize: '0.9rem'
                }}>
                  Get the latest agricultural tips and updates
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '0.9rem'
                    }}
                  />
                  <button 
                    className="btn-agriculture"
                    style={{
                      padding: '10px 16px',
                      fontSize: '0.9rem',
                      background: '#FFC107',
                      border: 'none'
                    }}
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '48px',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.95rem'
            }}>
              © 2025 Tech-Farm. All Rights Reserved. Made with ❤️ for farmers.
            </div>
            
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFC107'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            gap: 32px;
            text-align: center;
          }
          
          .footer-section {
            text-align: center;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
            gap: 16px !important;
          }
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        input:focus {
          outline: none;
          border-color: #FFC107;
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  )
}

export default Footer