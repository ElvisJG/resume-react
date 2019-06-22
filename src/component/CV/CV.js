import React from 'react';
import './CV.css';

import Aside from './Aside';
import Int from './Interests';
import Edu from './Education';
import Exp from './Experience';

export default () => {
  return (
    <div className='cv-wrapper'>
      <div className='cv-title'>
        <h1>Elvis Gonzalez</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <Aside />
      <Int />
      <Edu />
      <Exp />
    </div>
  );
};
