import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../UI/Logo';
import Links from './Links';
import LinksMirror from './LinksMirror';

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
        <LinksMirror />
      </div>
    </div>
  );
};

export default Nav;
