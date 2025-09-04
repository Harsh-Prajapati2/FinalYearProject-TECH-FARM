import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import Allproductslist from "./post_all/allproductlist";

function Home() {
    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <section className="hero-section" style={{
                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.9), rgba(76, 175, 80, 0.8)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                padding: '100px 0',
                color: '#FFFFFF',
                position: 'relative'
            }}>
                <div className="container-modern">
                    <div className="text-center">
                        <div className="fade-in-up">
                            <h1 style={{
                                fontSize: '4rem',
                                fontWeight: '800',
                                marginBottom: '24px',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                lineHeight: '1.2'
                            }}>
                                Welcome to <span style={{ color: '#FFC107' }}>Tech-Farm</span>
                            </h1>
                            <p style={{
                                fontSize: '1.5rem',
                                marginBottom: '40px',
                                maxWidth: '800px',
                                margin: '0 auto 40px',
                                lineHeight: '1.6',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                            }}>
                                Empowering farmers with modern agriculture technology, expert knowledge, 
                                and sustainable farming solutions for a greener tomorrow.
                            </p>
                            
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
                                <Link to="/Product" style={{ textDecoration: 'none', position: 'relative', zIndex: 10 }}>
                                    <button className="btn-agriculture" style={{
                                        padding: '16px 32px',
                                        fontSize: '1.1rem',
                                        background: 'linear-gradient(135deg, #FFC107, #FFB300)',
                                        boxShadow: '0 8px 24px rgba(255, 193, 7, 0.3)',
                                        border: 'none',
                                        borderRadius: '25px',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        zIndex: 10
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 12px 30px rgba(255, 193, 7, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(255, 193, 7, 0.3)';
                                    }}>
                                        <i className="fa fa-shopping-bag" style={{ marginRight: '8px' }}></i>
                                        Explore Products
                                    </button>
                                </Link>
                                <Link to="/Equipment" style={{ textDecoration: 'none', position: 'relative', zIndex: 10 }}>
                                    <button className="btn-agriculture-outline" style={{
                                        padding: '14px 30px',
                                        fontSize: '1.1rem',
                                        border: '2px solid #FFFFFF',
                                        background: 'transparent',
                                        color: '#FFFFFF',
                                        borderRadius: '25px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        zIndex: 10
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.background = 'transparent';
                                        e.target.style.boxShadow = 'none';
                                    }}>
                                        <i className="fa fa-cogs" style={{ marginRight: '8px' }}></i>
                                        View Equipment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating particles effect */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: '4px',
                                height: '4px',
                                background: '#FFC107',
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding" style={{ background: '#FFF8E1' }}>
                <div className="container-modern">
                    <div className="text-center mb-4">
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#2E7D32',
                            marginBottom: '16px'
                        }}>
                            Why Choose Tech-Farm?
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#7F8C8D',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Discover the features that make us the leading platform for modern agriculture
                        </p>
                    </div>

                    <div className="product-grid" style={{ marginTop: '60px' }}>
                        {[
                            {
                                icon: 'fa-leaf',
                                title: 'Organic Solutions',
                                description: 'Sustainable and eco-friendly farming practices that protect the environment while maximizing yield.',
                                color: '#4CAF50'
                            },
                            {
                                icon: 'fa-cogs',
                                title: 'Modern Equipment',
                                description: 'Access to the latest agricultural machinery and tools to streamline your farming operations.',
                                color: '#2196F3'
                            },
                            {
                                icon: 'fa-graduation-cap',
                                title: 'Expert Knowledge',
                                description: 'Learn from agricultural experts and stay updated with the latest farming techniques and innovations.',
                                color: '#FF9800'
                            },
                            {
                                icon: 'fa-mobile',
                                title: 'Smart Technology',
                                description: 'Leverage IoT, AI, and mobile apps to monitor crops, predict weather, and optimize farming decisions.',
                                color: '#9C27B0'
                            },
                            {
                                icon: 'fa-users',
                                title: 'Community Support',
                                description: 'Connect with a network of farmers, share experiences, and get support from our active community.',
                                color: '#FF5722'
                            },
                            {
                                icon: 'fa-chart-line',
                                title: 'Increased Yield',
                                description: 'Proven methods and technologies that help you achieve better crop yields and higher profits.',
                                color: '#795548'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="agriculture-card fade-in-up" style={{ 
                                animationDelay: `${index * 0.1}s`,
                                padding: '40px 30px',
                                textAlign: 'center',
                                background: 'linear-gradient(135deg, #FFFFFF, #F8F9FA)',
                                border: '1px solid rgba(46, 125, 50, 0.1)'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    boxShadow: `0 8px 24px ${feature.color}30`
                                }}>
                                    <i className={`fa ${feature.icon}`} style={{ fontSize: '2rem', color: '#FFFFFF' }}></i>
                                </div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '600',
                                    color: '#2C3E50',
                                    marginBottom: '16px'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: '#7F8C8D',
                                    lineHeight: '1.6',
                                    fontSize: '1rem'
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                padding: '80px 0',
                color: '#FFFFFF'
            }}>
                <div className="container-modern">
                    <div className="d-flex justify-content-center" style={{ gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { number: '50K+', label: 'Happy Farmers', icon: 'fa-users' },
                            { number: '500+', label: 'Products Available', icon: 'fa-shopping-bag' },
                            { number: '99%', label: 'Success Rate', icon: 'fa-chart-line' },
                            { number: '24/7', label: 'Support Available', icon: 'fa-headphones' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <i className={`fa ${stat.icon}`} style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '8px' }}>
                                    {stat.number}
                                </div>
                                <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Government Support Section */}
            <section className="section-padding" style={{ background: '#F8F9FA' }}>
                <div className="container-modern">
                    <div className="text-center mb-4">
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#2E7D32',
                            marginBottom: '16px'
                        }}>
                            Government Support & Resources
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#7F8C8D',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Access government schemes, subsidies, and support programs for farmers
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        marginTop: '60px'
                    }}>
                        {/* Schemes Card */}
                        <div className="agriculture-card" style={{
                            padding: '40px 30px',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF, #E8F5E8)',
                            border: '2px solid rgba(46, 125, 50, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(46, 125, 50, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                boxShadow: '0 8px 24px rgba(76, 175, 80, 0.3)'
                            }}>
                                <i className="fa fa-file-text" style={{ fontSize: '2rem', color: '#FFFFFF' }}></i>
                            </div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '600',
                                color: '#2C3E50',
                                marginBottom: '16px'
                            }}>
                                Government Schemes
                            </h3>
                            <p style={{
                                color: '#7F8C8D',
                                lineHeight: '1.6',
                                fontSize: '1rem',
                                marginBottom: '24px'
                            }}>
                                Explore PM-KISAN, PMFBY, and other government schemes designed to support farmers
                            </p>
                            <Link to="/Sechemes" style={{ textDecoration: 'none' }}>
                                <button style={{
                                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(76, 175, 80, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}>
                                    <i className="fa fa-arrow-right" style={{ marginRight: '8px' }}></i>
                                    View Schemes
                                </button>
                            </Link>
                        </div>

                        {/* Subsidies Card */}
                        <div className="agriculture-card" style={{
                            padding: '40px 30px',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #FFFFFF, #FFF8E1)',
                            border: '2px solid rgba(255, 193, 7, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                boxShadow: '0 8px 24px rgba(255, 193, 7, 0.3)'
                            }}>
                                <i className="fa fa-money-bill-wave" style={{ fontSize: '2rem', color: '#FFFFFF' }}></i>
                            </div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '600',
                                color: '#2C3E50',
                                marginBottom: '16px'
                            }}>
                                Agricultural Subsidies
                            </h3>
                            <p style={{
                                color: '#7F8C8D',
                                lineHeight: '1.6',
                                fontSize: '1rem',
                                marginBottom: '24px'
                            }}>
                                Access subsidies for fertilizers, equipment, irrigation, and other farming inputs
                            </p>
                            <Link to="/Subsidies" style={{ textDecoration: 'none' }}>
                                <button style={{
                                    background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(255, 193, 7, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}>
                                    <i className="fa fa-arrow-right" style={{ marginRight: '8px' }}></i>
                                    View Subsidies
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <Allproductslist />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @media (max-width: 768px) {
                    .hero-section h1 {
                        font-size: 2.5rem !important;
                    }
                    
                    .hero-section p {
                        font-size: 1.2rem !important;
                    }
                    
                    .d-flex {
                        flex-direction: column !important;
                        gap: 20px !important;
                    }
                    
                    .product-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </>
    );
}

export default Home;