import React from 'react';
import HomeLinks from './HomeLinks';
import { useSpring, animated } from 'react-spring';
import Background from './Background';

export default props => {
  const { name, occupation, address, description } = props.main;
  // Home Animations
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    delay: '1400'
  });
  const fadeInTwo = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    delay: '2200'
  });
  const fadeInThree = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: '3500'
  });
  const fadeInLinks = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: '3500'
  });

  return (
    <div className='page-home'>
      <div className='home-wrapper'>
        <Background description={description} />
        <div className='hero-text-wrapper'>
          <div className='hero-text'>
            <animated.div style={fadeIn} className='animated-div'>
              <h1>Hi</h1>
            </animated.div>
            <animated.div style={fadeInTwo} className='animated-div'>
              <h2>I'm {name}</h2>
            </animated.div>
            <animated.div style={fadeInThree} className='animated-div'>
              <h3>
                A {occupation} located in {address.city}, {address.state}
              </h3>
            </animated.div>
          </div>
          <animated.div style={fadeInLinks} className='animated-div'>
            <HomeLinks />
          </animated.div>
        </div>
      </div>
    </div>
  );
};
