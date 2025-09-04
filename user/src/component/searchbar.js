import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './i18';

function Searchbar() {
  const { t } = useTranslation();
  const [searchword, setsearchword] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('mydata'));

  function logout() {
    alert("Logout Successfully");
    localStorage.clear();
    navigate("/");
  }

  function login() {
    navigate("/Login");
  }

  function profile() {
    navigate("/Profile");
  }

  function postsearch() {
    if (searchword.trim()) {
      setShowSearchModal(false);
      navigate(`/fff?search=${encodeURIComponent(searchword)}`);
    }
  }

  function openSearchModal() {
    setShowSearchModal(true);
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

  function toggleDropdown(menu) {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape" && showSearchModal) {
        closeSearchModal();
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showSearchModal]);

  return (
    <>
      <div className="container-modern">
        <button
          className="search-trigger-btn"
          onClick={openSearchModal}
          aria-haspopup="dialog"
          aria-expanded={showSearchModal}
          aria-controls="search-modal"
          style={{ display: 'none' }}
        >
          <i className="fa fa-search" style={{ marginRight: '6px' }}></i>
          Search
          <i className="fa fa-chevron-down" style={{ marginLeft: '6px', fontSize: '12px' }}></i>
        </button>

        <div className="modern-nav">
          <nav className="d-flex justify-content-center" aria-label="Primary navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle${activeDropdown === "products" ? " active" : ""}`}
                  onClick={() => toggleDropdown("products")}
                  aria-expanded={activeDropdown === "products"}
                  aria-haspopup="true"
                >
                  <i className="fa fa-shopping-bag"></i> Products & Equipment
                  <i className="fa fa-chevron-down caret"></i>
                </button>
                {activeDropdown === "products" && (
                  <ul className="dropdown-menu visible">
                    <li>
                      <Link to="/Product" className="dropdown-item">
                        <i className="fa fa-leaf" style={{ color: "#4CAF50" }}></i> Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/Equipment" className="dropdown-item">
                        <i className="fa fa-cogs" style={{ color: "#4CAF50" }}></i> Equipment
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle${activeDropdown === "schemes" ? " active" : ""}`}
                  onClick={() => toggleDropdown("schemes")}
                  aria-expanded={activeDropdown === "schemes"}
                  aria-haspopup="true"
                >
                  <i className="fa fa-university"></i> Schemes & Subsidies
                  <i className="fa fa-chevron-down caret"></i>
                </button>
                {activeDropdown === "schemes" && (
                  <ul className="dropdown-menu visible">
                    <li>
                      <Link to="/Sechemes" className="dropdown-item">
                        <i className="fa fa-file-text" style={{ color: "#FFC107" }}></i> Schemes
                      </Link>
                    </li>
                    <li>
                      <Link to="/Subsidies" className="dropdown-item">
                        <i className="fa fa-money" style={{ color: "#FFC107" }}></i> Subsidies
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {localStorage.getItem("mydata") && (
                <li className="nav-item">
                  <Link to="/Myorders" className="nav-link">
                    <i className="fa fa-list-alt"></i> My Orders
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  <i className="fa fa-info-circle"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contactus" className="nav-link">
                  <i className="fa fa-phone"></i> Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {showSearchModal && (
        <div
          className="search-modal-overlay"
          onClick={closeSearchModal}
          role="dialog"
          aria-modal="true"
          id="search-modal"
          aria-labelledby="search-modal-label"
        >
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <button className="close-btn" onClick={closeSearchModal} aria-label="Close search modal">
                <i className="fa fa-times"></i>
              </button>
            </div>

            <div className="search-modal-body">
              <div className="search-input-container">
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                <input
                  type="text"
                  className="modal-search-input"
                  placeholder="Search for a keyword"
                  value={searchword}
                  onChange={(e) => setsearchword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  aria-label="Search input"
                  autoFocus
                />
                <button className="modal-search-btn" onClick={postsearch} aria-label="Execute search">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
          padding-right: 200px;
          position: relative;
          z-index: 999
        }
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
          pointer-events: none;
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
          transition: caret-color 0.3s ease;
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
        .modern-nav {
          width: 100%;
          margin-top: 0;
          display: flex;
          justify-content: center;
          z-index: 998;
          padding: 0 40px;
          margin: 0;
          overflow: visible; /* Important for dropdown visibility */
          position: relative;
        }
        .nav-list {
          display: flex;
          background: white;
          border-radius: 18px;
          box-shadow: 0 2px 24px rgba(63, 119, 44, 0.10);
        .nav-link {
          background: none;
          border: none;
          color: #FFFFFF;
          font-weight: 500;
          font-size: 15px;
          padding: 7px 10px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background 0.2s;
          gap: 4px;
          white-space: nowrap;
        }
        .nav-link {
          background: none;
          border: none;
          color: #1452a3;
          font-weight: 500;
          font-size: 15px;
          padding: 7px 10px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background 0.2s;
          gap: 4px;
          white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active {
          background: #E8F5E8;
          color: #2E7D32;
        }
        .dropdown-toggle .caret {
          margin-left: 5px;
          font-size: 12px;
          color: #1452a3;
          transition: transform 0.2s;
        }
        .dropdown-toggle.active .caret {
          transform: rotate(180deg);
          color: #2E7D32;
        }
        .dropdown-menu {
          position: absolute;
          top: 105%;
          left: 0;
          z-index: 9999;
          min-width: 180px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(46, 125, 50, 0.11);
          padding: 10px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
          pointer-events: none; /* Prevent interaction when hidden */
        }
        .dropdown-menu.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto; /* Enable interaction when visible */
          display: block;
        }
        .dropdown-item {
          padding: 12px 24px;
          font-weight: 500;
          color: #2C3E50;
          text-decoration: none;
          border: 0;
          background: none;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .dropdown-item:hover {
          background: #E8F5E8;
          color: #2E7D32;
        }
        @media (max-width: 768px) {
          .search-trigger-btn {
            min-width: 100px;
            max-width: 130px;
            padding: 10px 16px;
            font-size: 13px;
            float: none !important;
            margin: 0 auto;
          }
          .search-button-container {
            padding-right: 15px;
            text-align: center !important;
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
            padding: 20px;
            margin: 20px;
            overflow: visible;
          }
          .nav-link {
            text-align: center;
            padding: 12px 16px;
            cursor: pointer;
            border: none;
            background: none;
            width: 100%;
          }
          .dropdown-menu {
            position: relative;
            background: #2f2f94ff;
            border-radius: 8px;
            margin-bottom: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            max-height: none;
            overflow: visible;
            display: none;
            opacity: 0;
            visibility: hidden;
            transform: none;
            pointer-events: none;
          }
          .dropdown-menu.visible {
            display: block !important;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
          .dropdown-item {
            color: white;
          }
          .dropdown-item:hover {
            background: #445fc8;
            color: white;
            transform: none;
          }
        }
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
      `}</style>
    </>
  );
}

export default Searchbar;