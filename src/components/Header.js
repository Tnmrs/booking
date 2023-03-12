import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li className="logo-name">Simple Hotel Check</li>
        </ul>
        <ul className="right">
          <Link to="/login">
            <li>Выйти</li>
          </Link>
          <img src="exit.svg" alt="exit" />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
