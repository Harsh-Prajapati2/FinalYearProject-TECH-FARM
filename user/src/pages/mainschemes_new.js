import Axios from "axios";
import Searchbar from "../component/searchbar";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../agriculture-theme.css';

function Mainschemes() {
  const [schemeData, setSchemeData] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // Check if we have scheme data from the navigation state
    if (location.state && location.state.schemeData) {
      setSchemeData(location.state.schemeData);
    } else if (location.state && location.state.scsb) {
      // Fallback to API call for backward compatibility
      const _id = location.state.scsb;
      Axios.get('http://localhost:1137/api/mainpost', {params: {_id: _id}})
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setSchemeData(response.data[0]);
          }
        })
        .catch((error) => {
          console.error('Error fetching scheme data:', error);
        });
    }
  }, [location.state]);
  
  if (!schemeData) {
    return (
      <>
        <Searchbar />
        <div className="agriculture-container" style={{padding: '60px 20px', textAlign: 'center'}}>
          <div className="loading-spinner" style={{
            width: '50px',
            height: '50px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid var(--agriculture-primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Loading scheme details...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Searchbar />
      <div className="agriculture-container">
        {/* Hero Section */}
        <div className="scheme-hero" style={{
          background: 'linear-gradient(135deg, var(--agriculture-primary), var(--agriculture-secondary))',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><path d=\'M0 0h100v100H0z\' fill=\'none\'/><path d=\'M20 20h60v60H20z\' fill=\'%23ffffff\' opacity=\'0.1\'/></svg>") repeat',
            opacity: 0.1
          }}></div>
          
          <div style={{position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto'}}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              {schemeData.post_title}
            </h1>
            
            {schemeData.scheme_type && (
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.2)',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginTop: '20px'
              }}>
                {schemeData.scheme_type}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '60px 20px'
        }}>
          <div className="scheme-content agriculture-card" style={{
            background: 'white',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '40px'
          }}>
            
            {/* Main Image */}
            {schemeData.post_file && (
              <div style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                <img 
                  src={
                    schemeData.post_file.startsWith('http') 
                      ? schemeData.post_file 
                      : `http://localhost:1137/public/${schemeData.post_file}`
                  } 
                  alt={schemeData.post_title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x300/4CAF50/white?text=${encodeURIComponent(schemeData.post_title)}`;
                  }}
                />
              </div>
            )}

            {/* Description */}
            <div style={{marginBottom: '40px'}}>
              <h2 style={{
                color: 'var(--agriculture-primary)',
                fontSize: '2rem',
                marginBottom: '20px',
                borderBottom: '3px solid var(--agriculture-light)',
                paddingBottom: '10px'
              }}>
                Scheme Overview
              </h2>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '30px',
                textAlign: 'justify'
              }}>
                {schemeData.post_decrisption || schemeData.post_description}
              </p>

              {schemeData.post_extradecrisption && (
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '30px',
                  textAlign: 'justify'
                }}>
                  {schemeData.post_extradecrisption}
                </p>
              )}
            </div>

            {/* Additional Information */}
            {schemeData.post_subtitle && (
              <div style={{marginBottom: '40px'}}>
                <h3 style={{
                  color: 'var(--agriculture-secondary)',
                  fontSize: '1.5rem',
                  marginBottom: '15px'
                }}>
                  {schemeData.post_subtitle}
                </h3>
                
                {schemeData.post_subdecrisption && (
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#555',
                    textAlign: 'justify'
                  }}>
                    {schemeData.post_subdecrisption}
                  </p>
                )}
              </div>
            )}

            {/* Benefits Section */}
            {schemeData.benefit_amount && (
              <div className="benefits-section" style={{
                background: 'var(--agriculture-light)',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px'
              }}>
                <h3 style={{
                  color: 'var(--agriculture-primary)',
                  fontSize: '1.5rem',
                  marginBottom: '15px'
                }}>
                  Financial Benefits
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--agriculture-secondary)'
                }}>
                  {schemeData.benefit_amount}
                </p>
              </div>
            )}

            {/* PDF Resource */}
            {schemeData.postpdffile && (
              <div className="resource-section" style={{
                background: 'var(--agriculture-primary)',
                color: 'white',
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{marginBottom: '15px', fontSize: '1.3rem'}}>
                  📄 Additional Resources
                </h3>
                <a 
                  href={`http://localhost:1137/public/${schemeData.postpdffile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agriculture-btn"
                  style={{
                    display: 'inline-block',
                    background: 'white',
                    color: 'var(--agriculture-primary)',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Download Detailed Information PDF →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainschemes
