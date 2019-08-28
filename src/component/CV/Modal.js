import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Contact from './Contact';

const Modal = ({ isShowing, hide }) => {
  const keyListenersMap = new Map([[27, hide]]);

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
      {isShowing
        ? createPortal(
            <div className='modal-overlay'>
              <Contact hide={hide} />
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
