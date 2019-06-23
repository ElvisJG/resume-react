import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default () => {
  return (
    <div className='aside'>
      <div className='aside-section'>
        <h2>About</h2>
        <p>Charleston</p>
        <p>South Carolina</p>
        <br />
        <p>ElvisJGonzalez@gmail.com</p>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/elvisjg/'>
            <FaLinkedin size='3rem' />
          </a>
          <a href='https://github.com/elvisjg'>
            <FaGithubSquare size='3rem' />
          </a>
        </div>
      </div>
      <div className='aside-section'>
        <h2>Languages</h2>
        <p>Bilingual English/Spanish</p>
        <p>French & Italian Notions</p>
      </div>
      <div className='aside-section'>
        <h2>Programming</h2>
        <p>JavaScript</p>
        <p>(ES6, Node.js)</p>
        <p>Python, Java, Visual Basic</p>
        <p>CSS3 & HTML5</p>
      </div>
    </div>
  );
};
