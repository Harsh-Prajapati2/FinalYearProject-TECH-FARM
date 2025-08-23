import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
import Searchbar from "../component/searchbar";
import '../agriculture-theme.css';

function Product() {
  const [list, Setlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    Axios.get('http://localhost:1137/api/product_fetch')
      .then((response) => {
        Setlist(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
        setError('Failed to load products. Please check if the server is running.')
        setLoading(false)
        // Set fallback data
        const fallbackProducts = [
          {
            _id: 1,
            post_title: "Organic Fertilizer Premium",
            post_price: 299,
            post_file: null,
            post_description: "High-quality organic fertilizer for better crop yield"
          },
          {
            _id: 2,
            post_title: "Pest Control Solution",
            post_price: 459,
            post_file: null,
            post_description: "Eco-friendly pest control for all crops"
          },
          {
            _id: 3,
            post_title: "Soil Testing Kit",
            post_price: 899,
            post_file: null,
            post_description: "Professional soil analysis kit for farmers"
          }
        ]
        Setlist(fallbackProducts)
      })
  }, [])

  return (
    <>
      <Searchbar />
      <div className="agriculture-container">
        {/* Hero Section */}
        <div className="products-hero" style={{
          background: 'linear-gradient(135deg, var(--agriculture-primary), var(--agriculture-secondary))',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '50px'
        }}>
          <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px'}}>
            Agricultural Products
          </h1>
          <p style={{fontSize: '1.3rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto'}}>
            Discover premium quality products to enhance your farming experience
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{textAlign: 'center', padding: '60px 20px'}}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid var(--agriculture-primary)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p>Loading products...</p>
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

        {/* Products Grid */}
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {list.map((val) => (
              <div key={val._id} className="agriculture-card product-card" style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--agriculture-primary)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}>
                
                <Link to="/Mainproduct" state={{ prid: val._id }} style={{textDecoration: 'none', color: 'inherit'}}>
                  {/* Product Image */}
                  <div style={{
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'var(--agriculture-light)'
                  }}>
                    <img 
                      src={
                        val.post_file 
                          ? `http://localhost:1137/public/${val.post_file}`
                          : `https://via.placeholder.com/320x250/4CAF50/white?text=${encodeURIComponent(val.post_title.substring(0, 15))}`
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
                        e.target.src = `https://via.placeholder.com/320x250/4CAF50/white?text=${encodeURIComponent(val.post_title.substring(0, 15))}`;
                      }}
                    />
                    
                    {/* Price Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'var(--agriculture-accent)',
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '25px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      ₹{val.post_price}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div style={{padding: '25px'}}>
                    <h3 style={{
                      color: 'var(--agriculture-primary)',
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      lineHeight: '1.4',
                      height: '60px',
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
                        {val.post_description.substring(0, 80)}...
                      </p>
                    )}
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '20px'
                    }}>
                      <div style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: 'var(--agriculture-secondary)'
                      }}>
                        ₹{val.post_price}
                      </div>
                      
                      <div className="agriculture-btn btn-primary" style={{
                        background: 'var(--agriculture-primary)',
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
                        e.target.style.background = 'var(--agriculture-secondary)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--agriculture-primary)';
                        e.target.style.transform = 'translateY(0)';
                      }}>
                        View Product
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
} export default Product