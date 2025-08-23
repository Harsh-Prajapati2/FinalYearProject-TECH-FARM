import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './searchbar'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container-modern">
                    <div className="d-flex align-items-center justify-content-between" style={{ padding: '16px 0' }}>
                        {/* Brand Logo */}
                        <Link to="/" className="header-brand">
                            <i className="fa fa-leaf" style={{ fontSize: '2rem', color: '#FFC107' }}></i>
                            <span>Tech-Farm</span>
                        </Link>

                        {/* Quick Actions */}
                        <div className="d-flex align-items-center" style={{ gap: '16px' }}>
                            {/* Language Selector */}
                            <select 
                                className="form-control" 
                                style={{ 
                                    width: 'auto', 
                                    padding: '8px 16px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    borderRadius: '25px'
                                }}
                            >
                                <option value="en">English</option>
                                <option value="hi">हिन्दी</option>
                                <option value="gu">ગુજરાતી</option>
                            </select>

                            {/* User Actions */}
                            <div className="d-flex align-items-center" style={{ gap: '12px' }}>
                                {localStorage.getItem("mydata") ? (
                                    <>
                                        <Link to="/Cart" className="btn-agriculture-outline" style={{ 
                                            padding: '8px 16px',
                                            fontSize: '14px',
                                            background: 'rgba(255,255,255,0.2)',
                                            border: '2px solid rgba(255,255,255,0.3)',
                                            color: 'white'
                                        }}>
                                            <i className="fa fa-shopping-cart"></i>
                                            <span className="ml-2">Cart</span>
                                        </Link>
                                        <Link to="/Profile" className="btn-agriculture" style={{ padding: '8px 16px', fontSize: '14px' }}>
                                            <i className="fa fa-user"></i>
                                            <span className="ml-2">Profile</span>
                                        </Link>
                                    </>
                                ) : (
                                    <Link to="/Login" className="btn-agriculture" style={{ padding: '8px 16px', fontSize: '14px' }}>
                                        <i className="fa fa-sign-in"></i>
                                        <span className="ml-2">Login</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Search Bar Section */}
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px 0' }}>
                    <Searchbar />
                </div>
            </div>

            <style jsx>{`
                .modern-header {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                
                .modern-header.scrolled {
                    background: linear-gradient(135deg, rgba(46, 125, 50, 0.95) 0%, rgba(76, 175, 80, 0.95) 100%);
                    backdrop-filter: blur(10px);
                }
                
                .header-brand:hover {
                    transform: translateY(-2px);
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 768px) {
                    .d-flex {
                        flex-direction: column;
                        gap: 16px;
                    }
                    
                    .header-brand {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </>
    )
}

export default Header