import React from 'react';
import './CV.css';

import Nav from '../Navigation/Navbar';
import Title from './Title';
import Aside from './Aside';
import Int from './Interests';
import Edu from './Education';
import Exp from './Experience';

export default props => {
  return (
    <div className='page'>
      <Nav />
      <div className='cv-wrapper'>
        <Title main={props.main} />
        <Aside main={props.main} resume={props.resume} />
        <div className='main-section'>
          <Int main={props.main} />
          <Exp resume={props.resume} />
          <Edu resume={props.resume} />
        </div>
      </div>
    </div>
  );
};
