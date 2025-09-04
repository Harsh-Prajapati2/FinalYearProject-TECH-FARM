import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./mainhead.css"

function Mainhead() {
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showSchemesDropdown, setShowSchemesDropdown] = useState(false);
    
    // Handle clicking outside dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.dropdown-toggle')) {
                setShowProductsDropdown(false);
                setShowSchemesDropdown(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Remove hover handlers as we're using click instead
    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.dropdown-toggle')) {
                setShowProductsDropdown(false);
                setShowSchemesDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Click outside to close dropdowns
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.sub-menu')) {
                setShowProductsDropdown(false);
                setShowSchemesDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <>
            {/* Top Navigation Section */}
            <div style={{
                background: '#2E7D32',
                padding: '15px 0',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 100
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="custom_menu">
                                <ul style={{
                                    display: 'flex',
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    alignItems: 'center',
                                    gap: '30px',
                                    justifyContent: 'center'
                                }}>
                                    <li>
                                        <Link to="/Postshow" style={{
                                            color: '#FFFFFF',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '12px 16px',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}>
                                            <i className="fas fa-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    {/* Products & Equipments Dropdown */}
                                    <li style={{ position: 'relative' }}>
                                        <button
                                            className="dropdown-toggle"
                                            onClick={() => {
                                                setShowSchemesDropdown(false);
                                                setShowProductsDropdown(!showProductsDropdown);
                                            }}
                                            style={{
                                                color: '#FFFFFF',
                                                background: showProductsDropdown ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '16px',
                                                padding: '12px 16px',
                                                borderRadius: '6px',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}
                                            /* onClick handled above */
                                            aria-expanded={showProductsDropdown}
                                        >
                                            <i className="fas fa-tractor" style={{ marginRight: '8px' }}></i>
                                            Products & Equipment
                                            <i className="fa fa-chevron-down" style={{
                                                marginLeft: '5px',
                                                fontSize: '12px',
                                                transform: showProductsDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}></i>
                                        </button>
                                        {showProductsDropdown && (
                                            <div className="sub-menu show" style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '0',
                                                background: '#FFFFFF',
                                                minWidth: '220px',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '12px',
                                                zIndex: 9999,
                                                border: '1px solid rgba(0, 0, 0, 0.1)'
                                            }}>
                                                <Link to="/Product" style={{
                                                    background: '#2E7D32',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    padding: '10px 24px',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    transition: 'background 0.2s'
                                                }}>Product</Link>
                                                <Link to="/Equipment" style={{
                                                    background: '#2E7D32',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    padding: '10px 24px',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    transition: 'background 0.2s'
                                                }}>Equipments</Link>
                                            </div>
                                        )}
                                    </li>
                                    {/* Schemes & Subsidies Dropdown */}
                                    <li style={{ position: 'relative' }}>
                                        <button
                                            className="dropdown-toggle"
                                            onClick={() => {
                                                setShowProductsDropdown(false);
                                                setShowSchemesDropdown(!showSchemesDropdown);
                                            }}
                                            style={{
                                                color: '#FFFFFF',
                                                background: showSchemesDropdown ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '16px',
                                                padding: '12px 16px',
                                                borderRadius: '6px',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}
                                            /* onClick handled above */
                                            aria-expanded={showSchemesDropdown}
                                        >
                                            <i className="fas fa-hand-holding-usd" style={{ marginRight: '8px' }}></i>
                                            Schemes & Subsidies
                                            <i className="fa fa-chevron-down" style={{
                                                marginLeft: '5px',
                                                fontSize: '12px',
                                                transform: showSchemesDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}></i>
                                        </button>
                                        {showSchemesDropdown && (
                                            <div className="sub-menu show" style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '0',
                                                background: '#FFFFFF',
                                                minWidth: '220px',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '12px',
                                                zIndex: 9999,
                                                border: '1px solid rgba(0, 0, 0, 0.1)'
                                            }}>
                                                <Link to="/Sechemes" style={{
                                                    background: '#2E7D32',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    padding: '10px 24px',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    transition: 'background 0.2s'
                                                }}>Schemes</Link>
                                                <Link to="/Subsidies" style={{
                                                    background: '#2E7D32',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    padding: '10px 24px',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    transition: 'background 0.2s'
                                                }}>Subsidies</Link>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <Link to="/About" style={{
                                            color: '#FFFFFF',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '12px 16px',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s ease'
                                        }}>About Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Bar Section - Below Navigation */}
            <div className="header_section">
                <div className="container">
                    <div className="containt_main">
                        <div className="main">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search this blog" />
                                <div className="input-group-append">
                                    <button className="srch" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header_box">
                            <div style={{ marginTop: '10px' }}>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option defaultValue>English</option>
                                    <option value="1">हिन्दी</option>
                                    <option value="2">ગુજરાતી</option>
                                </select>
                            </div>
                            <div className="login_menu">
                                <ul>
                                    <li>
                                        {/* <Link to="/Login"><i className="fa fa-user" aria-hidden="true">Login</i></Link> */}
                                    </li>
                                    <li><a href="#">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainhead