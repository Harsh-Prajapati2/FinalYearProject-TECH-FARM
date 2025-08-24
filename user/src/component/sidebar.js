import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '28px',
    height: '24px',
    left: '24px',
    top: '24px',
    zIndex: 1001
  },
  bmBurgerBars: {
    background: '#2E7D32',
    height: '3px',
    borderRadius: '2px'
  },
  bmBurgerBarsHover: {
    background: '#4CAF50'
  },
  bmCrossButton: {
    height: '32px',
    width: '32px',
    right: '24px',
    top: '24px'
  },
  bmCross: {
    background: '#4CAF50',
    height: '3px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1000
  },
  bmMenu: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F5E8 100%)',
    padding: '2.5em 0 0',
    fontSize: '1.15em',
    boxShadow: '4px 0 20px rgba(46, 125, 50, 0.1)',
    height: '100%',
    overflow: 'auto'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#2C3E50',
    padding: '0.8em',
    height: 'calc(100% - 80px)', // Reduced space since no footer box
    overflow: 'auto'
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    marginBottom: '10px',
    color: '#2C3E50',
    transition: 'all 0.3s ease'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0,
    zIndex: 999
  }
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { to: "/", icon: "fa-home", label: "Tech-Farm", isHome: true },
    { to: "/Product", icon: "fa-shopping-bag", label: "Products", category: "marketplace" },
    { to: "/Equipment", icon: "fa-cogs", label: "Equipment", category: "marketplace" },
    { to: "/Sechemes", icon: "fa-file-text", label: "Schemes", category: "government" },
    { to: "/Subsidies", icon: "fa-money-bill-wave", label: "Subsidies", category: "government" },
    { to: "/Agriculture", icon: "fa-tree", label: "Agriculture", category: "farming" },
    { to: "/Fruit", icon: "fa-apple", label: "Fruit Farming", category: "farming" },
    { to: "/Vagetable", icon: "fa-carrot", label: "Vegetable Farming", category: "farming" },
    { to: "/Gardaning", icon: "fa-seedling", label: "Gardening", category: "farming" },
    { to: "/Fertilizer", icon: "fa-tint", label: "Fertilizers", category: "farming" },
    { to: "/Diseasecontrolandmanagement", icon: "fa-shield-alt", label: "Disease Control", category: "farming" }
  ];

  const getActiveLinkStyle = (itemPath, category) => {
    const isActiveLink = isActive(itemPath);
    
    let baseStyle = {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      textDecoration: 'none',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      gap: '16px',
      fontWeight: '500',
      fontSize: '0.95rem',
      background: 'transparent',
      color: '#2C3E50',
      marginBottom: '4px'
    };

    if (category === 'home') {
      baseStyle = {
        ...baseStyle,
        fontWeight: '600',
        fontSize: '1.1rem',
        color: '#2E7D32',
        background: isActiveLink ? 'linear-gradient(135deg, #C8E6C9, #A5D6A7)' : 'linear-gradient(135deg, #E8F5E8, #C8E6C9)'
      };
    }

    if (isActiveLink) {
      if (category === 'marketplace') {
        baseStyle.background = 'linear-gradient(135deg, #FF8F00, #FFC107)';
        baseStyle.color = '#FFFFFF';
        baseStyle.transform = 'translateX(8px)';
        baseStyle.boxShadow = '0 4px 12px rgba(255, 143, 0, 0.3)';
      } else if (category === 'government') {
        baseStyle.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
        baseStyle.color = '#FFFFFF';
        baseStyle.transform = 'translateX(8px)';
        baseStyle.boxShadow = '0 4px 12px rgba(33, 150, 243, 0.3)';
      } else if (category === 'farming') {
        baseStyle.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        baseStyle.color = '#FFFFFF';
        baseStyle.transform = 'translateX(8px)';
        baseStyle.boxShadow = '0 4px 12px rgba(46, 125, 50, 0.3)';
      }
    }

    return baseStyle;
  };

  const handleMouseEnter = (e, category, isActiveLink) => {
    if (!isActiveLink) {
      if (category === 'marketplace') {
        e.currentTarget.style.background = 'linear-gradient(135deg, #FF8F00, #FFC107)';
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.transform = 'translateX(8px)';
      } else if (category === 'government') {
        e.currentTarget.style.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.transform = 'translateX(8px)';
      } else if (category === 'farming') {
        e.currentTarget.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.transform = 'translateX(8px)';
      }
    }
  };

  const handleMouseLeave = (e, category, isActiveLink) => {
    if (!isActiveLink) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#2C3E50';
      e.currentTarget.style.transform = 'translateX(0)';
    }
  };

  return (
    <>
      <Menu 
        left 
        isOpen={isOpen}
        onStateChange={handleStateChange}
        styles={menuStyles}
        customBurgerIcon={
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>
            <span style={{ display: 'block', height: '3px', background: '#2E7D32', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', height: '3px', background: '#2E7D32', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', height: '3px', background: '#2E7D32', borderRadius: '2px' }}></span>
          </div>
        }
        customCrossIcon={
          <span style={{ 
            display: 'block', 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            color: '#4CAF50'
          }}>×</span>
        }
      >
        <div className="modern-sidebar-content" style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Sidebar Header */}
          <div className="sidebar-header" style={{ 
            padding: '24px', 
            borderBottom: '1px solid rgba(46, 125, 50, 0.1)',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <Link to="/" onClick={closeMenu} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: '#2E7D32',
              fontSize: '1.5rem',
              fontWeight: '700'
            }}>
              <i className="fa fa-leaf" style={{ fontSize: '2rem', color: '#FFC107' }}></i>
              <span>Tech-Farm</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="sidebar-nav" style={{ 
            flex: 1, 
            overflowY: 'auto',
            paddingBottom: '20px'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {/* Home Link */}
              {menuItems.filter(item => item.isHome).map((item, index) => (
                <li key={index} style={{ margin: '8px 16px' }}>
                  <Link 
                    to={item.to} 
                    onClick={closeMenu}
                    className="sidebar-nav-link home-link"
                    style={getActiveLinkStyle(item.to, 'home')}
                  >
                    <span className="sidebar-nav-icon" style={{
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className={`fa ${item.icon}`} style={{ fontSize: '18px' }}></i>
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}

              {/* Marketplace Section */}
              <li style={{ margin: '24px 16px 8px', padding: '0 20px' }}>
                <div style={{
                  color: '#FF8F00',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className="fa fa-store" style={{ fontSize: '14px' }}></i>
                  Marketplace
                </div>
              </li>
              {menuItems.filter(item => item.category === 'marketplace').map((item, index) => {
                const isActiveLink = isActive(item.to);
                return (
                  <li key={index} style={{ margin: '4px 16px' }}>
                    <Link 
                      to={item.to} 
                      onClick={closeMenu}
                      className="sidebar-nav-link"
                      style={getActiveLinkStyle(item.to, 'marketplace')}
                      onMouseEnter={(e) => handleMouseEnter(e, 'marketplace', isActiveLink)}
                      onMouseLeave={(e) => handleMouseLeave(e, 'marketplace', isActiveLink)}
                    >
                      <span className="sidebar-nav-icon" style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className={`fa ${item.icon}`} style={{ fontSize: '16px' }}></i>
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* Government Support Section */}
              <li style={{ margin: '24px 16px 8px', padding: '0 20px' }}>
                <div style={{
                  color: '#2196F3',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className="fa fa-university" style={{ fontSize: '14px' }}></i>
                  Government Support
                </div>
              </li>
              {menuItems.filter(item => item.category === 'government').map((item, index) => {
                const isActiveLink = isActive(item.to);
                return (
                  <li key={index} style={{ margin: '4px 16px' }}>
                    <Link 
                      to={item.to} 
                      onClick={closeMenu}
                      className="sidebar-nav-link"
                      style={getActiveLinkStyle(item.to, 'government')}
                      onMouseEnter={(e) => handleMouseEnter(e, 'government', isActiveLink)}
                      onMouseLeave={(e) => handleMouseLeave(e, 'government', isActiveLink)}
                    >
                      <span className="sidebar-nav-icon" style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className={`fa ${item.icon}`} style={{ fontSize: '16px' }}></i>
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* Farming Topics Section */}
              <li style={{ margin: '24px 16px 8px', padding: '0 20px' }}>
                <div style={{
                  color: '#4CAF50',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className="fa fa-leaf" style={{ fontSize: '14px' }}></i>
                  Farming Topics
                </div>
              </li>
              {menuItems.filter(item => item.category === 'farming').map((item, index) => {
                const isActiveLink = isActive(item.to);
                return (
                  <li key={index} style={{ margin: '4px 16px' }}>
                    <Link 
                      to={item.to} 
                      onClick={closeMenu}
                      className="sidebar-nav-link"
                      style={getActiveLinkStyle(item.to, 'farming')}
                      onMouseEnter={(e) => handleMouseEnter(e, 'farming', isActiveLink)}
                      onMouseLeave={(e) => handleMouseLeave(e, 'farming', isActiveLink)}
                    >
                      <span className="sidebar-nav-icon" style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className={`fa ${item.icon}`} style={{ fontSize: '16px' }}></i>
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* Growing Together Section - Simple green text like other headers */}
              <li style={{ margin: '24px 16px 8px', padding: '0 20px' }}>
                <div style={{
                  color: '#4CAF50',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '14px' }}>🌱</span>
                  Growing Together
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Menu>

      {/* Custom styles for better handling */}
      <style jsx>{`
        .sidebar-nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .sidebar-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .sidebar-nav-link.active::before {
          background: #4CAF50;
        }
        
        /* Custom scrollbar for nav */
        .sidebar-nav::-webkit-scrollbar {
          width: 6px;
        }
        
        .sidebar-nav::-webkit-scrollbar-track {
          background: rgba(46, 125, 50, 0.1);
          border-radius: 3px;
        }
        
        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(46, 125, 50, 0.3);
          border-radius: 3px;
        }
        
        .sidebar-nav::-webkit-scrollbar-thumb:hover {
          background: rgba(46, 125, 50, 0.5);
        }
      `}</style>
    </>
  );
}

export default Sidebar;