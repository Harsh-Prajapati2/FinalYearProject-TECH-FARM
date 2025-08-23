import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

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
    left: 0
  },
  bmMenu: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F5E8 100%)',
    padding: '2.5em 0 0',
    fontSize: '1.15em',
    boxShadow: '4px 0 20px rgba(46, 125, 50, 0.1)'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#2C3E50',
    padding: '0.8em'
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
    left: 0
  }
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

  return (
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
      <div className="modern-sidebar-content">
        {/* Sidebar Header */}
        <div className="sidebar-header" style={{ 
          padding: '24px', 
          borderBottom: '1px solid rgba(46, 125, 50, 0.1)',
          marginBottom: '20px'
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
        <nav className="sidebar-nav">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {/* Home Link */}
            {menuItems.filter(item => item.isHome).map((item, index) => (
              <li key={index} style={{ margin: '8px 16px' }}>
                <Link 
                  to={item.to} 
                  onClick={closeMenu}
                  className="sidebar-nav-link home-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 20px',
                    color: '#2E7D32',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    gap: '16px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #E8F5E8, #C8E6C9)'
                  }}
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
            {menuItems.filter(item => item.category === 'marketplace').map((item, index) => (
              <li key={index} style={{ margin: '4px 16px' }}>
                <Link 
                  to={item.to} 
                  onClick={closeMenu}
                  className="sidebar-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: '#2C3E50',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    gap: '16px',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #FF8F00, #FFC107)';
                    e.target.style.color = '#FFFFFF';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#2C3E50';
                    e.target.style.transform = 'translateX(0)';
                  }}
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
            ))}

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
            {menuItems.filter(item => item.category === 'government').map((item, index) => (
              <li key={index} style={{ margin: '4px 16px' }}>
                <Link 
                  to={item.to} 
                  onClick={closeMenu}
                  className="sidebar-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: '#2C3E50',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    gap: '16px',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
                    e.target.style.color = '#FFFFFF';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#2C3E50';
                    e.target.style.transform = 'translateX(0)';
                  }}
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
            ))}

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
            {menuItems.filter(item => item.category === 'farming').map((item, index) => (
              <li key={index} style={{ margin: '4px 16px' }}>
                <Link 
                  to={item.to} 
                  onClick={closeMenu}
                  className="sidebar-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: '#2C3E50',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    gap: '16px',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
                    e.target.style.color = '#FFFFFF';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#2C3E50';
                    e.target.style.transform = 'translateX(0)';
                  }}
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
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div style={{ 
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          right: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
          borderRadius: '12px',
          color: '#FFFFFF',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>
            🌱 Growing Together
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Smart Agriculture Solutions
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default Sidebar