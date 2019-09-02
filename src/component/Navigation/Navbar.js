import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import Links from './Links';

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='logo'>
        <NavLink exact to='/'>
          <Logo />
        </NavLink>
      </div>
      <div className='link-effect'>
        <Links />
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
