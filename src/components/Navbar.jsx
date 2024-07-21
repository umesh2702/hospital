import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ login, toggleLogin }) => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for Hospitals, Labs" className="search-input" />
        </div>
        {login ? (
          <div className="dropdown-end">
            <div role="button" className="avatar" onClick={toggleAvatarDropdown}>
              <div className="avatar-image">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            {isAvatarDropdownOpen && (
              <div className="menu-dropdown">
                <Link to="/profile" style={{ textAlign: 'center' }}>Account Details</Link>
                <Link to="/help" style={{ textAlign: 'center' }}>Help & Support</Link>
                <p
                  style={{ color: "red", textAlign: "center", marginTop: "8px", marginBottom: '0px' }}
                  onClick={toggleLogin}
                >
                  SIGN OUT
                </p>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={toggleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
