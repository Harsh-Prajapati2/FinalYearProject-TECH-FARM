import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./mainhead.css"

function Mainhead() {
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showSchemesDropdown, setShowSchemesDropdown] = useState(false);

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
                                            transition: 'all 0.3s ease'
                                        }}>Home</Link>
                                    </li>
                                    
                                    {/* Products & Equipments Dropdown */}
                                    <li style={{ position: 'relative' }}
                                        onMouseEnter={() => setShowProductsDropdown(true)}
                                        onMouseLeave={() => setShowProductsDropdown(false)}>
                                        <a href="#" style={{
                                            color: '#FFFFFF',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '12px 16px',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: showProductsDropdown ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                                        }}>
                                            Products & Equipment
                                            <i className="fa fa-chevron-down" style={{
                                                marginLeft: '5px', 
                                                fontSize: '12px',
                                                transform: showProductsDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}></i>
                                        </a>
                                        
                                        {showProductsDropdown && (
                                            <ul style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '0',
                                                background: '#FFFFFF',
                                                minWidth: '220px',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                borderRadius: '8px',
                                                padding: '8px 0',
                                                listStyle: 'none',
                                                margin: '0',
                                                zIndex: 9999,
                                                border: '1px solid rgba(0, 0, 0, 0.1)'
                                            }}>
                                                <li>
                                                    <Link to="/Product" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>Products</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Equipment" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>Equipment</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Productlist" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>All Items</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>

                                    {/* Schemes & Subsidies Dropdown */}
                                    <li style={{ position: 'relative' }}
                                        onMouseEnter={() => setShowSchemesDropdown(true)}
                                        onMouseLeave={() => setShowSchemesDropdown(false)}>
                                        <a href="#" style={{
                                            color: '#FFFFFF',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            padding: '12px 16px',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: showSchemesDropdown ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                                        }}>
                                            Schemes & Subsidies
                                            <i className="fa fa-chevron-down" style={{
                                                marginLeft: '5px', 
                                                fontSize: '12px',
                                                transform: showSchemesDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}></i>
                                        </a>
                                        
                                        {showSchemesDropdown && (
                                            <ul style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '0',
                                                background: '#FFFFFF',
                                                minWidth: '220px',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                                borderRadius: '8px',
                                                padding: '8px 0',
                                                listStyle: 'none',
                                                margin: '0',
                                                zIndex: 9999,
                                                border: '1px solid rgba(0, 0, 0, 0.1)'
                                            }}>
                                                <li>
                                                    <Link to="/Sechemes" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>Schemes</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Subsidies" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>Subsidies</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Agriculture" style={{
                                                        color: '#2C3E50',
                                                        textDecoration: 'none',
                                                        padding: '12px 20px',
                                                        display: 'block',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#4CAF50';
                                                        e.target.style.color = '#FFFFFF';
                                                        e.target.style.paddingLeft = '25px';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#2C3E50';
                                                        e.target.style.paddingLeft = '20px';
                                                    }}>Agriculture Support</Link>
                                                </li>
                                            </ul>
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
                            <div className="custom_menu">
                                <ul>
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option defaultValue>English</option>
                                        <option value="1">हिन्दी</option>
                                        <option value="2">ગુજરાતી</option>
                                    </select>
                                </ul>
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