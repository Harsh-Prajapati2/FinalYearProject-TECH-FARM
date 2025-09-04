import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import './style/DashboardLayout.css';

function DashboardLayout() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      category: 'Dashboard',
      items: [
        { icon: '📊', text: 'Overview', path: '/dashboard' }
      ]
    },
    {
      category: 'Upload',
      items: [
        { icon: '🌾', text: 'Agriculture', path: '/Agriculture' },
        { icon: '🍎', text: 'Fruits', path: '/fruits' },
        { icon: '🥕', text: 'Vegetables', path: '/Vegetable' },
        { icon: '🌺', text: 'Gardening', path: '/Gardening' },
        { icon: '🧪', text: 'Fertilizer', path: '/Fertilizer' },
        { icon: '📦', text: 'Product', path: '/Product' },
        { icon: '🔧', text: 'Equipment', path: '/Equipment' },
        { icon: '📜', text: 'Scheme', path: '/Scheme' },
        { icon: '🦠', text: 'Disease', path: '/Disease' }
      ]
    },
    {
      category: 'Management',
      items: [
        { icon: '🌾', text: 'Agriculture', path: '/Manage_agriculture' },
        { icon: '🍎', text: 'Fruits', path: '/Manage_fruit' },
        { icon: '🥕', text: 'Vegetables', path: '/Manage_vegetable' },
        { icon: '�', text: 'Gardening', path: '/Manage_gardening' },
        { icon: '🧪', text: 'Fertilizer', path: '/Manage_fertilizer' },
        { icon: '🦠', text: 'Disease', path: '/Manage_disease' },
        { icon: '📦', text: 'Product', path: '/Manage_product' },
        { icon: '🔧', text: 'Equipment', path: '/Manage_equipment' },
        { icon: '📜', text: 'Scheme', path: '/Manage_scheme' },
        { icon: '💰', text: 'Subside', path: '/Manage_subside' }
      ]
    },
    {
      category: 'Other',
      items: [
        { icon: '👤', text: 'Profile', path: '/Profile' },
        { icon: '💳', text: 'Payment', path: '/Payment' },
        { icon: '⭐', text: 'Review', path: '/Review' },
        { icon: '💰', text: 'Subside', path: '/Subside' },
        { icon: '💬', text: 'Support', path: '/Support' }
      ]
    }
  ];

  const handleActionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-layout">
      <button 
        className="toggle-sidebar"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="sidebar-header">
          <Link to="/dashboard" className="brand">
            Tech Farm
          </Link>
        </div>
        <nav className="nav-menu">
          {navItems.map((category, index) => (
            <div key={index}>
              <div className="nav-category">{category.category}</div>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.text}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {location.pathname === '/' || location.pathname === '/dashboard' ? (
          <section className="get-started">
            <h1 className="welcome-text">Welcome to Tech Farm Dashboard</h1>
            <p className="welcome-subtitle">
              Manage your products, vegetables, and agriculture items all in one place.
            </p>

            <div className="quick-actions">
              <div 
                className="action-card"
                onClick={() => handleActionClick('/manage_product')}
              >
                <div className="action-icon products-icon">📦</div>
                <h3 className="action-title">Manage Products</h3>
                <p className="action-description">
                  Add, edit, or remove products from your inventory
                </p>
              </div>

              <div 
                className="action-card"
                onClick={() => handleActionClick('/manage_vegetable')}
              >
                <div className="action-icon vegetables-icon">🥕</div>
                <h3 className="action-title">Manage Vegetables</h3>
                <p className="action-description">
                  Update your vegetable listings and inventory
                </p>
              </div>

              <div 
                className="action-card"
                onClick={() => handleActionClick('/manage_agriculture')}
              >
                <div className="action-icon agriculture-icon">🌾</div>
                <h3 className="action-title">Manage Agriculture</h3>
                <p className="action-description">
                  Control your agriculture products and supplies
                </p>
              </div>
            </div>
          </section>
        ) : null}
        
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
