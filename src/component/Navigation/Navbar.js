import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='logo'>
        <NavLink exact to='/'>
          <Logo />
        </NavLink>
      </div>
      <div className='link-effect'>
        <div className='links'>
          <NavLink exact to='/cv' className='nav__link'>
            CV
          </NavLink>
          <NavLink exact to='/portfolio' className='nav__link'>
            Portfolio
          </NavLink>
          <NavLink exact to='/contact' className='nav__link'>
            Contact
          </NavLink>
        </div>
        <div className='link__mirror'>
          <p className='reflection'>CV</p>
          <p className='reflection'>Portfolio</p>
          <p className='reflection'>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
