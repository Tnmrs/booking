import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li className="logo-name">Simple Hotel Check</li>
        </ul>
        <ul className="right">
          <li>Выйти</li>
          <img src="exit.svg" alt="exit" />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
