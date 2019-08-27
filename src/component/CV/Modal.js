import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Contact from './Contact';

const Modal = ({ isShowing, hide }) => {
  const ref = useRef();
  useKeyUp('Escape', hide);
  useOnClickOutside(ref, hide);

  return (
    <>
      {isShowing
        ? ReactDOM.createPortal(
            <div className='modal-overlay'>
              <Contact hide={hide} ref={ref} />
            </div>,
            document.body
          )
        : null}
    </>
  );
};

function useKeyUp(targetKey, handler) {
  const onKeyUp = ({ key }) => {
    if (key === targetKey) handler();
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default Modal;
