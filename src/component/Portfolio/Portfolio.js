import React from 'react';
import TextLoop from 'react-text-loop';

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
                  <div className='notable-tech'>
                    <div className='tech'>
                      <h3>
                        Technologies Used:{' '}
                        <TextLoop springConfig={{ stiffness: 150, damping: 8 }}>
                          {p.technologies.map(tech => {
                            return <span>{tech}</span>;
                          })}
                        </TextLoop>
                      </h3>
                    </div>
                    <div className='notable'>
                      <h3>Notable Features</h3>
                      {p.notable.map(tech => {
                        return (
                          <ul>
                            <li>{tech}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
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
