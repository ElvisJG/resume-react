import React from 'react';
import home from '../../images/home.jpg';
import homeRetina from '../../images/home-retina.jpg';
import styled from '@emotion/styled';
export const Img = styled.img`
  height: 100vh;
  max-width: 100%;
  object-fit: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;

  @media (min-width: 1336px) {
    width: 100vw;
  }
`;
const alt =
  'beautiful image of kayaks with mountains in the background and a dense forest to the side';

export default function background() {
  function checkRetina() {
    return window.devicePixelRatio > 1 ? homeRetina : home;
  }
  return (
    <div>
      <Img src={checkRetina()} alt={alt} />
    </div>
  );
}

// Large image for retina, testing to see if it is too slow
// @media (-webkit-min-device-pixel-ratio: 2),
// (min-resolution: 192dpi) {
//   .home-wrapper {
//     .splash-img {}
//   }
// }
