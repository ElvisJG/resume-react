import React from 'react';
import { useState } from 'react';
import Burger from './Burger';
import DrawerLinks from './DrawerLinks';

const Plating = () => {
  const [cooking, setCooking] = useState(false);

  function flipBurger() {
    setCooking(!cooking);
  }

  return (
    <>
      <Burger onClick={() => flipBurger()} />
      {cooking ? <DrawerLinks /> : null}
    </>
  );
};

export default Plating;
