import React from "react";
import Searchbar from "../component/searchbar";
import { useState, useEffect } from "react";
import  Axios  from "axios";
import { Link } from "react-router-dom";
import '../agriculture-theme.css';

function Equipment(){
  const [list, Setlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    Axios.get('http://localhost:1137/api/equipment_fetch')
      .then((response) => {
        Setlist(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching equipment:', error)
        setError('Failed to load equipment. Please check if the server is running.')
        setLoading(false)
        // Set fallback data
        const fallbackEquipment = [
          {
            _id: 1,
            post_title: "Smart Irrigation System",
            post_price: 15999,
            post_file: null,
            post_description: "Automated drip irrigation with IoT sensors"
          },
          {
            _id: 2,
            post_title: "Heavy Duty Tractor",
            post_price: 850000,
            post_file: null,
            post_description: "45 HP agricultural tractor for all farm operations"
          },
          {
            _id: 3,
            post_title: "Seed Planting Machine",
            post_price: 25000,
            post_file: null,
            post_description: "Precision seed planter for optimal spacing"
          }
        ]
        Setlist(fallbackEquipment)
      })
  }, [])

  return (
    <>
      <Searchbar />
      <div className="agriculture-container">
        {/* Hero Section */}
        <div className="equipment-hero" style={{
          background: 'linear-gradient(135deg, var(--agriculture-secondary), var(--agriculture-accent))',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '50px'
        }}>
          <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px'}}>
            Farm Equipment
          </h1>
          <p style={{fontSize: '1.3rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto'}}>
            Modern machinery and tools to boost your agricultural productivity
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{textAlign: 'center', padding: '60px 20px'}}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid var(--agriculture-secondary)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p>Loading equipment...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '600px',
            textAlign: 'center',
            color: '#856404'
          }}>
            <i className="fas fa-exclamation-triangle" style={{marginRight: '10px'}}></i>
            {error}
          </div>
        )}

        {/* Equipment Grid */}
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <div className="equipment-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {list.map((val) => (
              <div key={val._id} className="agriculture-card equipment-card" style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--agriculture-secondary)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}>
                
                <Link to="/Mainproduct" state={{ prid: val._id }} style={{textDecoration: 'none', color: 'inherit'}}>
                  {/* Equipment Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'var(--agriculture-secondary)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    zIndex: 2
                  }}>
                    <i className="fas fa-cogs" style={{marginRight: '5px'}}></i>
                    Equipment
                  </div>

                  {/* Equipment Image */}
                  <div style={{
                    height: '280px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'var(--agriculture-light)'
                  }}>
                    <img 
                      src={
                        val.post_file 
                          ? `http://localhost:1137/public/${val.post_file}`
                          : `https://via.placeholder.com/350x280/2196F3/white?text=${encodeURIComponent(val.post_title.substring(0, 15))}`
                      }
                      alt={val.post_title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/350x280/2196F3/white?text=${encodeURIComponent(val.post_title.substring(0, 15))}`;
                      }}
                    />
                    
                    {/* Price Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '15px',
                      background: 'var(--agriculture-accent)',
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '25px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      ₹{val.post_price?.toLocaleString()}
                    </div>
                  </div>
                  
                  {/* Equipment Details */}
                  <div style={{padding: '25px'}}>
                    <h3 style={{
                      color: 'var(--agriculture-secondary)',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      lineHeight: '1.3',
                      height: '65px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {val.post_title}
                    </h3>
                    
                    {val.post_description && (
                      <p style={{
                        color: '#666',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        height: '48px',
                        overflow: 'hidden'
                      }}>
                        {val.post_description.substring(0, 85)}...
                      </p>
                    )}
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '20px'
                    }}>
                      <div style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: 'var(--agriculture-accent)'
                      }}>
                        ₹{val.post_price?.toLocaleString()}
                      </div>
                      
                      <div className="agriculture-btn btn-secondary" style={{
                        background: 'var(--agriculture-secondary)',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--agriculture-accent)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--agriculture-secondary)';
                        e.target.style.transform = 'translateY(0)';
                      }}>
                        View Details
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}export default Equipment;