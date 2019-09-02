import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import DrawerLinks from './DrawerLinks';

const BurgerModal = ({ isShowingBurger, hideBurger }) => {
  const keyListenersMap = new Map([[27, hideBurger]]);

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  });

  return (
    <>
      {isShowingBurger
        ? createPortal(
            <>
              <div className='sidedrawer' />
              <DrawerLinks />
            </>,
            document.body
          )
        : null}
    </>
  );
};

export default BurgerModal;
