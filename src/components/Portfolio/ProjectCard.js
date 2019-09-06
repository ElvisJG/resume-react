import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
import { Button } from '../UI';

export default props => {
  const {
    portfolio: { project }
  } = props.cardData;

  return (
    <div className='portfolio-card-wrapper'>
      {project.map(p => (
        <div className='profile-card' key={p.title}>
          <div className='portfolio-hero-img'>
            <a href={p.url} target='_blank' rel='noopener noreferrer'>
              <img
                className='portfolio-img'
                src={require(`../../images/${p.source}`)}
                alt={p.alt}
              />
            </a>
          </div>

          <div className='portfolio-hero-text'>
            <div className='top-text'>
              <h1>{p.title}</h1>
              <h3>{p.category}</h3>
            </div>

            <div className='notable'>
              <h3>Notable Features</h3>
              {p.notable.map(tech => {
                return (
                  <ul key={tech}>
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
              <Button>
                Check out the
                <DiGithubAlt size='2.5rem' />
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
