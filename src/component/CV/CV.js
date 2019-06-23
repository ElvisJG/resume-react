import React from 'react';
import './CV.css';

import Aside from './Aside';
import Int from './Interests';
import Edu from './Education';
import Exp from './Experience';

export default props => {
  return (
    <div className='cv-wrapper'>
      <div className='cv-title'>
        <h1>{props.main.name}</h1>
        <h2>{props.main.cv_description}</h2>
      </div>
      <Aside main={props.main} resume={props.resume} />
      <div className='main-section'>
        <Int main={props.main} />
        <Edu resume={props.resume} />
        <Exp resume={props.resume} />
      </div>
    </div>
  );
};
