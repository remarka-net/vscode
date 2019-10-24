import React from 'react';
import HeaderTag from './HeaderMenu/HeaderTag';
import './index.css';
import NavigationBar from './NavBar/NavigationBar';

function Header() {
  return (
    <div className="list">
      <HeaderTag />
      <NavigationBar />
    </div>
  );
}

export default Header;
