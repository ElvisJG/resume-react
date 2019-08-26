import React from 'react';

import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

export default props => {
  const { email, spoken, notions, address } = props.main;

  return (
    <div className='aside'>
      <div className='aside-section'>
        <h2>About</h2>
        <p>{address.city}</p>
        <p>{address.state}</p>
        <br />
        <p>{email}</p>
      </div>

      <div className='aside-section'>
        <h2>Links</h2>
        <div className='icons'>
          <a href='mailto:ElvisJGonzalez@gmail.com' rel='noopener noreferrer'>
            <FaEnvelope size='3rem' />
          </a>
          <a
            href='https://www.linkedin.com/in/elvisjg/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size='3rem' />
          </a>
          <a
            href='https://github.com/ElvisJG'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare size='3rem' />
          </a>
        </div>
      </div>
      <div className='aside-section'>
        <h2>Languages</h2>
        <p>{spoken}</p>
        <p>{notions}</p>
      </div>
    </div>
  );
};
