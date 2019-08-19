import React from 'react';
import './Portfolio.css';

export default props => {
  return (
    <div className='page-portfolio'>
      <div className='portfolio-wrapper'>
        {props.portfolio.project.map(p => (
          <div className='profile-card' key={p.title}>
            <div className='mapwrapper'>
              <img
                className='portfolio-img'
                src={require(`${p.source}`)}
                alt={p.alt}
              />
              <div className='portfolio-hero'>
                <div className='portfolio-hero-text'>
                  <h1>{p.title}</h1>
                  <h3>{p.category}</h3>
                  <a href={p.url} target='_blank' rel='noopener noreferrer'>
                    <button>Visit {p.title}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
