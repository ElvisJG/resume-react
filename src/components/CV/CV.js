import React from 'react';

import Nav from '../Navigation/Navbar';
import Title from './Title';
import Aside from './Aside';
import Int from './Interests';
import Exp from './Experience';
import Edu from './Education';

export default props => {
  return (
    <div className='page-CV'>
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
