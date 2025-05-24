// Navbar.js
import React from 'react';
import '../assets/css/navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.webp"

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear stored user data
    setIsAuthenticated(false); // Update state to reflect logout
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-user-icon" onClick={handleLogout} style={{ cursor: 'pointer' }}>
        <i className="fa fa-sign-out"></i>
      </div>
    </nav>
  );
};

export default Navbar;