import React from 'react';
import { NavLink } from 'react-router-dom';
import useModal from '../hooks/useModal';
import Modal from '../CV/Modal';

export default function Links() {
  const { isShowing, toggle } = useModal();
  return (
    <div className='links'>
      <NavLink exact to='/cv' className='nav__link'>
        CV
      </NavLink>
      <NavLink exact to='/portfolio' className='nav__link'>
        Portfolio
      </NavLink>
      <button onClick={toggle} className='nav__link'>
        Contact
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
