import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div className='modal-overlay'>
          <Contact hide={hide} />
        </div>,
        document.body
      )
    : null;

export default Modal;
