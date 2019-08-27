import React from 'react';
import './CV.css';

import Title from './Title';
import Aside from './Aside';
import Int from './Interests';
import Edu from './Education';
import Exp from './Experience';
import Contact from './Contact';

export default props => {
  return (
    <div className='page'>
      <div className='cv-wrapper'>
        <Title main={props.main} />
        <Aside main={props.main} resume={props.resume} />
        <div className='main-section'>
          <Int main={props.main} />
          <Exp resume={props.resume} />
          <Edu resume={props.resume} />
          <Contact />
        </div>
      </div>
    </div>
  );
};
