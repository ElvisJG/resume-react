import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links() {
  return (
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
  );
}
