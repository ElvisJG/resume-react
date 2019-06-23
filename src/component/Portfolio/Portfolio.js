import React from 'react';
import './Portfolio.css';
import wanderlust from './wanderlust.jpg';

export default () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='profile-card'>
        <img
          className='portfolio-img'
          src={wanderlust}
          alt='Underwater Image'
        />
        <div className='portfolio-hero'>
          <div className='portfolio-hero-text'>
            <h1>title</h1>
            <h3>category</h3>
            <a href='url'>
              <button>Visit title</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
