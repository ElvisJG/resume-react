import React from 'react';

import Skills from './Skills';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

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
        <div className='icons'>
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
      <div className='aside-section'>
        <Skills resume={props.resume} />
      </div>
    </div>
  );
};
