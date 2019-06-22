import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='sections'>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/cv'>
          CV
        </NavLink>
        <NavLink exact to='/portfolio'>
          Portfolio
        </NavLink>
        <NavLink exact to='/contact'>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
