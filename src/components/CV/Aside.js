import React from 'react';

import useModal from '../../hooks/useModal';
import Modal from '../UI/Modal';

import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

export default props => {
  const {
    spoken,
    notions,
    address: { city, state }
  } = props.main;
  const { isShowing, toggle } = useModal();

  return (
    <div className='aside'>
      <div className='aside-section'>
        <h2>About</h2>
        <p>{city}</p>
        <p>{state}</p>
      </div>

      <div className='aside-section'>
        <h2>Links</h2>
        <div className='icons'>
          <button onClick={toggle} className='modal-open-btn'>
            <FaEnvelope size='3rem' />
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
          <a
            href='https://www.linkedin.com/in/elvisjg/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size='3rem' className='linkedin' />
          </a>
          <a
            href='https://github.com/ElvisJG'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare size='3rem' className='github' />
          </a>
        </div>
      </div>

      <div className='aside-section'>
        <h2 className='lang'>Languages</h2>
        <div className='spoken-notions'>
          <p>{spoken}</p>
          <p>{notions}</p>
        </div>
      </div>
    </div>
  );
};
