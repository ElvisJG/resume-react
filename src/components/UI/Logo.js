import React from 'react';
import styled from '@emotion/styled';

const LogoMain = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  float: left;
  color: #119983;
  margin-left: 5.5rem;
  padding: 0.5rem 0;
`;

export default function Logo() {
  const logoText = '<ElvisGonzalez />';
  return <LogoMain>{logoText}</LogoMain>;
}
