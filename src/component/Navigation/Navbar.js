import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='sections'>
        <NavLink exact to='/'>
          Home{' '}
          <span role='img' aria-label='house'>
            🏚
          </span>
        </NavLink>
        <NavLink exact to='/cv'>
          CV{' '}
          <span role='img' aria-label='paper'>
            📄
          </span>
        </NavLink>
        <NavLink exact to='/portfolio'>
          Portfolio{' '}
          <span role='img' aria-label='computer'>
            🖥
          </span>
        </NavLink>
        <NavLink exact to='/contact'>
          Contact{' '}
          <span role='img' aria-label='mail'>
            📨{' '}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
