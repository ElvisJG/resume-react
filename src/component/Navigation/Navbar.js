import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
// import { FaAddressBook } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='sections'>
        <NavLink exact to='/'>
          Home
          <span role='img' aria-label='house'>
            <FaHome />
          </span>
        </NavLink>
        <NavLink exact to='/cv'>
          CV
          <span role='img' aria-label='gradcap'>
            <FaGraduationCap />
          </span>
        </NavLink>
        <NavLink exact to='/portfolio'>
          Portfolio
          <span role='img' aria-label='book'>
            <FaBook />
          </span>
        </NavLink>
        {/* <NavLink exact to='/contact'>
          Contact{' '}
          <span role='img' aria-label='mail'>
            <FaAddressBook />
          </span>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Nav;
