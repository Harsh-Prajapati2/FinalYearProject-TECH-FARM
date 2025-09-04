import React from "react";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-header">
          <a href="/" className="brand">
            <img src="./resources/assets/images/logo.png" alt="Logo" className="logo-images" />
          </a>
        </div>

        <ul className="sidebar-nav">
          <li className="nav-item">
            <a href="/Dashboard" className="nav-link">
              <i className="feather icon-home"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_agriculture" className="nav-link">
              <i className="feather icon-box"></i> Manage Agriculture
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_fruit" className="nav-link">
              <i className="feather icon-box"></i> Manage Fruit
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_vegetable" className="nav-link">
              <i className="feather icon-box"></i> Manage Vegetable
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_gardening" className="nav-link">
              <i className="feather icon-box"></i> Manage Gardening
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_fertilizer" className="nav-link">
              <i className="feather icon-box"></i> Manage Fertilizer
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_disease" className="nav-link">
              <i className="feather icon-box"></i> Manage Disease & Management
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_product" className="nav-link">
              <i className="feather icon-box"></i> Manage Product
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_equipment" className="nav-link">
              <i className="feather icon-box"></i> Manage Equipment
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_scheme" className="nav-link">
              <i className="feather icon-box"></i> Manage Scheme
            </a>
          </li>
          <li className="nav-item">
            <a href="/Manage_subside" className="nav-link">
              <i className="feather icon-box"></i> Manage Subside
            </a>
          </li>
        </ul>
      </aside>

      <style jsx>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          background: #4caf50;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .sidebar-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .brand {
          display: inline-block;
        }
        .logo-images {
          max-width: 140px;
          height: auto;
        }
        .sidebar-nav {
          list-style: none;
          padding-left: 0;
          margin: 0;
          flex: 1;
          overflow-y: auto;
        }
        .nav-item {
          margin-bottom: 12px;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-left: 4px solid transparent;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .nav-link:hover {
          background-color: #388e3c;
          border-left-color: #c8e6c9;
          color: #c8e6c9;
        }
        .nav-link i {
          font-size: 18px;
        }
        /* Scrollbar styling */
        .sidebar-nav::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-nav::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
