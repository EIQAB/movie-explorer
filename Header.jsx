import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-logo">
        <h1>Movie<span>Explorer</span></h1>
      </div>
      <nav>
        <ul className="header-links">
          {/* تأكد إن الأسماء هون بدون أي إضافات */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register" className="btn-register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;