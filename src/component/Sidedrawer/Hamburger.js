import React from 'react';
import './Sidedrawer.css';

export default function Hamburger() {
  return (
    <button className='hamburger__btn'>
      <div className='hamburger__btn-line' />
      <div className='hamburger__btn-line' />
      <div className='hamburger__btn-line' />
    </button>
  );
}
