import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { useState } from "react";
import './i18';

function Searchbar() {
    const { t } = useTranslation();
    const [searchword, setsearchword] = useState('');
    let user = JSON.parse(localStorage.getItem('mydata'));

    function logout() {
        alert("Logout Successfully");
        localStorage.clear()
        window.location = "/";
    }

    function login() {
        window.location = "/Login"
    }

    function profile() {
        window.location = "/Profile"
    }

    function postsearch() {
        // Search functionality
    }

    return (
        <>
            <div className="container-modern">
                {/* Main Search Section */}
                <div className="modern-search" style={{ marginBottom: '24px' }}>
                    <i className="fa fa-search search-icon"></i>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search for products, schemes, or farming tips..." 
                        value={searchword}
                        onChange={(e) => setsearchword(e.target.value)}
                    />
                    <Link to="/fff" state={{ srch: searchword }}>
                        <button className="search-btn" onClick={postsearch}>
                            <i className="fa fa-search"></i>
                        </button>
                    </Link>
                </div>

                {/* Modern Navigation */}
                <div className="modern-nav">
                    <nav className="d-flex justify-content-center">
                        <ul style={{ 
                            display: 'flex', 
                            listStyle: 'none', 
                            margin: 0, 
                            padding: 0,
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fa fa-home" style={{ marginRight: '8px' }}></i>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <i className="fa fa-shopping-bag" style={{ marginRight: '8px' }}></i>
                                    Products & Equipment
                                </a>
                                <ul className="dropdown-menu agriculture-card" style={{ border: 'none', marginTop: '8px' }}>
                                    <li><Link to="/Product" className="dropdown-item">
                                        <i className="fa fa-leaf" style={{ marginRight: '8px', color: '#4CAF50' }}></i>
                                        Products
                                    </Link></li>
                                    <li><Link to="/Equipment" className="dropdown-item">
                                        <i className="fa fa-cogs" style={{ marginRight: '8px', color: '#4CAF50' }}></i>
                                        Equipment
                                    </Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <i className="fa fa-university" style={{ marginRight: '8px' }}></i>
                                    Schemes & Subsidies
                                </a>
                                <ul className="dropdown-menu agriculture-card" style={{ border: 'none', marginTop: '8px' }}>
                                    <li><Link to="/Sechemes" className="dropdown-item">
                                        <i className="fa fa-file-text" style={{ marginRight: '8px', color: '#FFC107' }}></i>
                                        Schemes
                                    </Link></li>
                                    <li><Link to="/Subsidies" className="dropdown-item">
                                        <i className="fa fa-money" style={{ marginRight: '8px', color: '#FFC107' }}></i>
                                        Subsidies
                                    </Link></li>
                                </ul>
                            </li>

                            {localStorage.getItem("mydata") && (
                                <li className="nav-item">
                                    <Link to="/Myorders" className="nav-link">
                                        <i className="fa fa-list-alt" style={{ marginRight: '8px' }}></i>
                                        My Orders
                                    </Link>
                                </li>
                            )}

                            <li className="nav-item">
                                <Link to="/About" className="nav-link">
                                    <i className="fa fa-info-circle" style={{ marginRight: '8px' }}></i>
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Contactus" className="nav-link">
                                    <i className="fa fa-phone" style={{ marginRight: '8px' }}></i>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <style jsx>{`
                .dropdown:hover .dropdown-menu {
                    display: block;
                    animation: fadeInUp 0.3s ease;
                }
                
                .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    z-index: 1000;
                    min-width: 200px;
                    padding: 8px 0;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(46, 125, 50, 0.1);
                }
                
                .dropdown-item {
                    display: block;
                    width: 100%;
                    padding: 12px 20px;
                    clear: both;
                    font-weight: 400;
                    color: #2C3E50;
                    text-decoration: none;
                    white-space: nowrap;
                    border: 0;
                    transition: all 0.3s ease;
                }
                
                .dropdown-item:hover {
                    background: #E8F5E8;
                    color: #2E7D32;
                    transform: translateX(4px);
                }
                
                @media (max-width: 768px) {
                    .modern-nav ul {
                        flex-direction: column;
                    }
                    
                    .nav-link {
                        text-align: center;
                        padding: 12px 16px;
                    }
                    
                    .dropdown-menu {
                        position: static;
                        display: block;
                        width: 100%;
                        margin-top: 0;
                        box-shadow: none;
                        background: #F5F5F5;
                        border-radius: 8px;
                        margin-bottom: 8px;
                    }
                }
            `}</style>
        </>
    )
}

export default Searchbar