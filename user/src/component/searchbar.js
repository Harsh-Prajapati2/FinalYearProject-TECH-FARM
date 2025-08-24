import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { useState } from "react";
import './i18';

function Searchbar() {
    const { t } = useTranslation();
    const [searchword, setsearchword] = useState('');
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
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
        if (searchword.trim()) {
            setShowSearchModal(false);
            window.location = `/fff?search=${encodeURIComponent(searchword)}`;
        }
    }

    function openSearchModal() {
        setShowSearchModal(true);
        // Don't auto-focus, let user click to focus
    }

    function closeSearchModal() {
        setShowSearchModal(false);
        setsearchword('');
        setIsInputFocused(false);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            postsearch();
        }
    }

    function handleInputFocus() {
        setIsInputFocused(true);
    }

    function handleInputBlur() {
        setIsInputFocused(false);
    }

    return (
        <>
            <div className="container-modern">
                {/* Search Button - Moved to right corner with reduced width */}
                <div className="search-button-container" style={{ 
                    textAlign: 'right', 
                    marginBottom: '24px',
                    position: 'relative'
                }}>
                    <button className="search-trigger-btn" onClick={openSearchModal}>
                        <i className="fa fa-search" style={{ marginRight: '6px' }}></i>
                        Search
                        <i className="fa fa-chevron-down" style={{ marginLeft: '6px', fontSize: '12px' }}></i>
                    </button>
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

            {/* Simplified Search Modal Popup - Much Smaller */}
            {showSearchModal && (
                <div className="search-modal-overlay" onClick={closeSearchModal}>
                    <div className="search-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="search-modal-header">
                            <button className="close-btn" onClick={closeSearchModal}>
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="search-modal-body">
                            <div className="search-input-container">
                                <i className="fa fa-search search-icon"></i>
                                <input 
                                    type="text" 
                                    className="modal-search-input" 
                                    placeholder="Search for a keyword"
                                    value={searchword}
                                    onChange={(e) => setsearchword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                <button className="modal-search-btn" onClick={postsearch}>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                /* Search Trigger Button - Moved to right corner with reduced width */
                .search-trigger-btn {
                    background: linear-gradient(135deg, #4CAF50, #45a049);
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 30px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 12px rgba(76, 175, 80, 0.3);
                    min-width: 120px;
                    max-width: 150px;
                    float: right;
                    position: relative;
                }

                .search-trigger-btn:hover {
                    background: linear-gradient(135deg, #45a049, #4CAF50);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
                }

                .search-button-container {
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 20px;
                }

                /* Simplified Search Modal - Much Smaller */
                .search-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 99999;
                    animation: fadeIn 0.3s ease;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .search-modal {
                    background: white;
                    border-radius: 15px;
                    width: 100%;
                    max-width: 500px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                    animation: slideUp 0.3s ease;
                    position: relative;
                    margin: auto;
                }

                .search-modal-header {
                    display: flex;
                    justify-content: flex-end;
                    padding: 15px 20px 0 20px;
                }

                .close-btn {
                    background: #f8f9fa;
                    border: none;
                    font-size: 16px;
                    color: #666;
                    cursor: pointer;
                    padding: 8px 10px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    position: relative;
                    z-index: 100;
                }

                .close-btn:hover {
                    background: #e9ecef;
                    color: #333;
                    transform: scale(1.1);
                }

                .search-modal-body {
                    padding: 20px 30px 30px 30px;
                }

                .search-input-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: #f8f9fa;
                    border-radius: 50px;
                    padding: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .search-icon {
                    position: absolute;
                    left: 20px;
                    color: #4CAF50;
                    font-size: 16px;
                    z-index: 1;
                }

                .modal-search-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    padding: 15px 20px 15px 45px;
                    font-size: 16px;
                    outline: none;
                    border-radius: 50px;
                    caret-color: ${isInputFocused ? '#4CAF50' : 'transparent'};
                }

                .modal-search-input::placeholder {
                    color: #999;
                    font-style: italic;
                    opacity: ${isInputFocused ? '0' : '1'};
                    transition: opacity 0.3s ease;
                }

                .modal-search-input:focus::placeholder {
                    opacity: 0;
                }

                .modal-search-input:not(:focus) {
                    caret-color: transparent;
                }

                .modal-search-input:focus {
                    caret-color: #4CAF50;
                }

                .modal-search-btn {
                    background: #4CAF50;
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-right: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                }

                .modal-search-btn:hover {
                    background: #45a049;
                    transform: scale(1.05);
                }

                /* Navigation Dropdown Styles */
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

                /* Animations */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .search-trigger-btn {
                        min-width: 100px;
                        max-width: 130px;
                        padding: 10px 16px;
                        font-size: 13px;
                    }

                    .search-button-container {
                        padding-right: 15px;
                        text-align: center !important;
                    }

                    .search-trigger-btn {
                        float: none !important;
                        margin: 0 auto;
                    }

                    .search-modal-overlay {
                        padding: 15px;
                    }

                    .search-modal {
                        width: 100%;
                        max-width: 400px;
                        border-radius: 12px;
                    }

                    .search-modal-header {
                        padding: 12px 15px 0 15px;
                    }

                    .close-btn {
                        width: 28px;
                        height: 28px;
                        font-size: 14px;
                    }

                    .search-modal-body {
                        padding: 15px 20px 25px 20px;
                    }

                    .modal-search-input {
                        padding: 12px 15px 12px 40px;
                        font-size: 15px;
                    }

                    .modal-search-btn {
                        width: 36px;
                        height: 36px;
                        padding: 10px;
                    }

                    .search-icon {
                        left: 15px;
                        font-size: 14px;
                    }

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