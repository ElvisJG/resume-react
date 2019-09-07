import React from 'react';
import styled from '@emotion/styled';

const LogoMain = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  float: left;
  color: #119983;
  margin-left: 5.5rem;
  padding: 1rem 0;

  /* The DREADED iPhone 5/SE */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    font-size: 2rem;
    margin-left: 0;
    padding: 30px 0 1.5rem;
  }

  /* Extra small devices (phones, up to 480px) */
  @media (min-width: 569px) and (max-width: 767px) {
    font-size: 2rem;
    margin-left: 0;
  }

  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 2.5rem;
    margin: 0 0.5rem;
  }

  /* tablets/desktops and up ----------- */
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 3rem;
    margin: 0 3rem;
  }
`;

export default function Logo() {
  const logoText = '<ElvisGonzalez />';
  return <LogoMain>{logoText}</LogoMain>;
}
