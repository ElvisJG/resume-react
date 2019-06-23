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
            <h1>Wanderlust</h1>
            <h3>
              Wanderlust's Marketing Page, developed using HTML, CSS, SCSS, and
              JS
            </h3>
            <a href='https://marketing-wanderlust.netlify.com/'>
              <button>Visit Wanderlust</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
