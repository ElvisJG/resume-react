import React from 'react';
import './Home.css';
import home from './home.jpg';

export default props => {
  const { name, occupation, address, description } = props.main;
  return (
    <div className='home-wrapper'>
      <img className='splash-img' src={home} alt='Underwater Image' />
      <div className='hero-text-wrapper'>
        <div className='hero-text'>
          <h1>Hi,</h1>
          <h1>I'm {name}</h1>
          <h3>
            I am a {occupation} located in {address.city}, {address.state}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
