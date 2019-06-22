import React from 'react';
import './Home.css';
import home from './home.jpg';

export default () => {
  return (
    <div className='home-wrapper'>
      <img className='splash-img' src={home} alt='Underwater Image' />
      <div className='hero-text-wrapper'>
        <div className='hero-text'>
          <h1>Hi,</h1>
          <h1>I'm Elvis Gonzalez</h1>
          <h3>
            I'm a Full Stack Web Developer located in Charleston, South Carolina
          </h3>
          <p>
            Techie and Foodie by heart. I am passionate about improving,
            learning, and teaching code!
          </p>
        </div>
      </div>
    </div>
  );
};
