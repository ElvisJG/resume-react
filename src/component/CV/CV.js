import React from 'react';
import './CV.css';

import Nav from '../Navigation/Navbar';
import Title from './Title';
import Aside from './Aside';
import Int from './Interests';
import Exp from './Experience';
import Edu from './Education';

// import useBurger from '../hooks/useHamburger';
// import BurgerModal from '../Sidedrawer/BurgerModal';
// import Hamburger from '../Sidedrawer/Hamburger';

export default props => {
  // const { isShowingBurger, toggleBurger } = useBurger();
  return (
    <div className='page-CV'>
      <Nav />
      {/* <Hamburger onClick={toggleBurger} />
      <BurgerModal
        isShowingBurger={isShowingBurger}
        hideBurger={toggleBurger}
      /> */}
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
