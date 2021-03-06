import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Contact from './ContactForm';
import { ModalOverlay } from './index';

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
            <>
              <ModalOverlay onClick={hide} />
              <Contact hide={hide} />
            </>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
