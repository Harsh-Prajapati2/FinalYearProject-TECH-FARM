import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Allproductslist() {
   const [list, Setlist] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      Axios.get('http://localhost:1137/api/allpostlist')
         .then((response) => {
            Setlist(response.data);
            setLoading(false);
         })
         .catch((error) => {
            console.error('Error fetching posts:', error);
            setError('Failed to load posts');
            setLoading(false);
         });
   }, []);

   if (loading) {
      return (
         <div className="container-modern section-padding">
            <div className="loading-spinner"></div>
            <p className="text-center" style={{ marginTop: '20px', color: '#7F8C8D' }}>
               Loading amazing content for you...
            </p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="container-modern section-padding">
            <div className="agriculture-card" style={{ padding: '40px', textAlign: 'center' }}>
               <i className="fa fa-exclamation-triangle" style={{ fontSize: '3rem', color: '#FFC107', marginBottom: '20px' }}></i>
               <h3 style={{ color: '#2C3E50', marginBottom: '16px' }}>Oops! Something went wrong</h3>
               <p style={{ color: '#7F8C8D' }}>{error}</p>
               <button 
                  className="btn-agriculture" 
                  onClick={() => window.location.reload()}
                  style={{ marginTop: '20px' }}
               >
                  <i className="fa fa-refresh" style={{ marginRight: '8px' }}></i>
                  Try Again
               </button>
            </div>
         </div>
      );
   }

   return (
      <>
         <div className="container-modern section-padding">
            {/* Hero Section */}
            <div className="text-center mb-4">
               <div className="fade-in-up">
                  <h1 style={{ 
                     fontSize: '3rem', 
                     fontWeight: '700',
                     background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     marginBottom: '16px'
                  }}>
                     <i className="fa fa-leaf" style={{ marginRight: '16px', color: '#FFC107' }}></i>
                     Latest Agricultural Posts
                  </h1>
                  <p style={{ 
                     fontSize: '1.2rem', 
                     color: '#7F8C8D', 
                     maxWidth: '600px', 
                     margin: '0 auto',
                     lineHeight: '1.6'
                  }}>
                     Discover the latest insights, tips, and innovations in modern agriculture. 
                     Stay updated with expert advice and proven farming techniques.
                  </p>
               </div>

               {/* Stats Bar */}
               <div className="d-flex justify-content-center" style={{ gap: '40px', marginTop: '40px' }}>
                  <div className="text-center slide-in-right">
                     <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2E7D32' }}>
                        {list.length}+
                     </div>
                     <div style={{ color: '#7F8C8D', fontSize: '0.9rem' }}>Expert Articles</div>
                  </div>
                  <div className="text-center slide-in-right" style={{ animationDelay: '0.2s' }}>
                     <div style={{ fontSize: '2rem', fontWeight: '700', color: '#4CAF50' }}>50K+</div>
                     <div style={{ color: '#7F8C8D', fontSize: '0.9rem' }}>Farmers Helped</div>
                  </div>
                  <div className="text-center slide-in-right" style={{ animationDelay: '0.4s' }}>
                     <div style={{ fontSize: '2rem', fontWeight: '700', color: '#FFC107' }}>100%</div>
                     <div style={{ color: '#7F8C8D', fontSize: '0.9rem' }}>Verified Content</div>
                  </div>
               </div>
            </div>

            {/* Products Grid */}
            <div className="product-grid">
               {list.map((val, index) => (
                  <div 
                     key={val._id} 
                     className="product-card fade-in-up"
                     style={{ animationDelay: `${index * 0.1}s` }}
                  >
                     <Link 
                        to="/Mainpost" 
                        state={{ pl: val._id }}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                     >
                        {/* Image Container */}
                        <div style={{ 
                           position: 'relative', 
                           overflow: 'hidden',
                           borderRadius: '12px 12px 0 0'
                        }}>
                           <img 
                              src={`http://localhost:1137/public/${val.post_file}`} 
                              alt={val.post_title}
                              className="product-image"
                              style={{
                                 width: '100%',
                                 height: '240px',
                                 objectFit: 'cover'
                              }}
                              onError={(e) => {
                                 e.target.src = 'https://via.placeholder.com/400x240/E8F5E8/2E7D32?text=Agricultural+Content';
                              }}
                           />
                           
                           {/* Category Badge */}
                           <div style={{
                              position: 'absolute',
                              top: '16px',
                              left: '16px',
                              background: 'linear-gradient(135deg, #FFC107, #FFB300)',
                              color: '#FFFFFF',
                              padding: '6px 16px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                           }}>
                              <i className="fa fa-star" style={{ marginRight: '4px' }}></i>
                              Featured
                           </div>

                           {/* Read Time Badge */}
                           <div style={{
                              position: 'absolute',
                              bottom: '16px',
                              right: '16px',
                              background: 'rgba(0, 0, 0, 0.7)',
                              color: '#FFFFFF',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: '500'
                           }}>
                              <i className="fa fa-clock-o" style={{ marginRight: '4px' }}></i>
                              5 min read
                           </div>
                        </div>

                        {/* Content */}
                        <div className="product-content">
                           <h4 className="product-title" style={{
                              fontSize: '1.3rem',
                              fontWeight: '600',
                              color: '#2C3E50',
                              marginBottom: '16px',
                              lineHeight: '1.4',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              lineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                           }}>
                              {val.post_title}
                           </h4>

                           <p className="product-description" style={{
                              color: '#7F8C8D',
                              lineHeight: '1.6',
                              marginBottom: '20px',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              lineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                           }}>
                              {val.post_decrisption?.substring(0, 120)}...
                           </p>

                           {/* Article Meta */}
                           <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '20px',
                              padding: '12px 0',
                              borderTop: '1px solid #E8F5E8'
                           }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                 }}>
                                    GS
                                 </div>
                                 <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#2C3E50' }}>
                                       Tech-Farm Expert
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#7F8C8D' }}>
                                       Agricultural Specialist
                                    </div>
                                 </div>
                              </div>
                              
                              <div style={{ textAlign: 'right' }}>
                                 <div style={{ fontSize: '0.8rem', color: '#7F8C8D' }}>
                                    <i className="fa fa-calendar" style={{ marginRight: '4px' }}></i>
                                    Recently Updated
                                 </div>
                              </div>
                           </div>

                           {/* Action Button */}
                           <div className="product-footer">
                              <button className="btn-agriculture" style={{
                                 width: '100%',
                                 padding: '12px 24px',
                                 fontSize: '1rem',
                                 fontWeight: '600',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 gap: '8px'
                              }}>
                                 <span>Read Full Article</span>
                                 <i className="fa fa-arrow-right"></i>
                              </button>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>

            {/* Call to Action Section */}
            {list.length === 0 && (
               <div className="agriculture-card" style={{ 
                  padding: '60px 40px', 
                  textAlign: 'center', 
                  marginTop: '40px',
                  background: 'linear-gradient(135deg, #E8F5E8, #C8E6C9)'
               }}>
                  <i className="fa fa-seedling" style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '24px' }}></i>
                  <h3 style={{ color: '#2E7D32', marginBottom: '16px', fontSize: '1.8rem' }}>
                     New Content Coming Soon!
                  </h3>
                  <p style={{ color: '#5D4037', fontSize: '1.1rem', marginBottom: '24px' }}>
                     Our agricultural experts are working hard to bring you the latest insights and innovations.
                  </p>
                  <button className="btn-agriculture">
                     <i className="fa fa-bell" style={{ marginRight: '8px' }}></i>
                     Notify Me When Available
                  </button>
               </div>
            )}
         </div>

         <style jsx>{`
            @media (max-width: 768px) {
               .product-grid {
                  grid-template-columns: 1fr;
                  gap: 20px;
                  padding: 20px 0;
               }
               
               .d-flex {
                  flex-direction: column;
                  gap: 20px !important;
               }
               
               h1 {
                  font-size: 2rem !important;
               }
               
               .product-content {
                  padding: 20px;
               }
            }
            
            .product-card:hover .product-image {
               transform: scale(1.05);
            }
            
            .product-card:hover {
               transform: translateY(-8px);
               box-shadow: 0 20px 60px rgba(46, 125, 50, 0.15);
            }
         `}</style>
      </>
   );
}

export default Allproductslist;