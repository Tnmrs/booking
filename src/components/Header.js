import React from 'react';
import { Link } from 'react-router-dom';
import '../auth.css';
import '../main.css';
const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li className="logo-name">Simple Hotel Check</li>
        </ul>
        <ul className="right">
          <Link className="header-title" style={{ textDecoration: 'none' }} to="/login">
            <li>Выйти</li>
          </Link>
          <img src="exit.svg" alt="exit" />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
