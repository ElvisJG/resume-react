import React from 'react';
import home from '../../images/home.jpg';
import homeRetina from '../../images/home-retina.jpg';

const alt =
  'beautiful image of kayaks with mountains in the background and a dense forest to the side';

export default function background() {
  function checkRetina() {
    return window.devicePixelRatio > 1 ? homeRetina : home;
  }
  return (
    <div>
      <img className='background' src={checkRetina()} alt={alt} />
    </div>
  );
}
