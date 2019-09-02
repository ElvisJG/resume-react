import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
import Particles from './Particles';

import './Portfolio.css';

export default props => {
  return (
    <div className='page-portfolio'>
      <Particles>
        <div className='portfolio-wrapper'>
          {props.portfolio.project.map(p => (
            <div className='profile-card' key={p.title}>
              <>
                <a href={p.url} target='_blank' rel='noopener noreferrer'>
                  <img
                    className='portfolio-img'
                    src={require(`${p.source}`)}
                    alt={p.alt}
                  />
                </a>
              </>

              <div className='portfolio-hero-text'>
                <div className='top-text'>
                  <h1>{p.title}</h1>
                  <h3>{p.category}</h3>
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

              <div className='button'>
                <a
                  href={p.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='anchor'
                >
                  <button className='gh-btn'>
                    Check out the
                    <DiGithubAlt
                      size='2.5rem'
                      className='gh-icon'
                      style={{
                        verticalAlign: 'text-top',
                        margin: '0 auto',
                        padding: '0'
                      }}
                    />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Particles>
    </div>
  );
};
