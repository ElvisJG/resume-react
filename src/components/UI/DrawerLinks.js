import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import useModal from '../../hooks/useModal';
import Modal from './Modal';

export default function DrawerLinks() {
  const { isShowing, toggle } = useModal();
  const dropOne = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-70px,0)' },
    delay: '500'
  });
  const dropTwo = useSpring({
    opacity: 1,
    tension: 180,
    friction: 12,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-70px,0)' },
    delay: '1000'
  });
  const dropThree = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-70px,0)' },
    delay: '1500'
  });
  return (
    <div className='sidedrawer'>
      <animated.div style={dropOne} className='animated-link'>
        <NavLink exact to='/cv' className='drawer__links'>
          CV
        </NavLink>
      </animated.div>
      <animated.div style={dropTwo} className='animated-link'>
        <NavLink exact to='/portfolio' className='drawer__links'>
          Portfolio
        </NavLink>
      </animated.div>
      <animated.div style={dropThree} className='animated-link'>
        <button onClick={toggle} className='drawer__links'>
          Contact
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </animated.div>
    </div>
  );
}
