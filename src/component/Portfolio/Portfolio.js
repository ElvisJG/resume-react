import React from 'react';
import './Portfolio.css';
import wanderlust from './wanderlust.jpg';

export default props => {
  return (
    <div className='portfolio-wrapper'>
      {props.portfolio.project.map(p => (
        <div className='profile-card' key={p.title}>
          <div className='mapwrapper'>
            <img className='portfolio-img' src={wanderlust} alt={p.alt} />
            <div className='portfolio-hero'>
              <div className='portfolio-hero-text'>
                <h1>{p.title}</h1>
                <h3>{p.category}</h3>
                <a href='https://marketing-wanderlust.netlify.com/'>
                  <button>Visit {p.title}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
