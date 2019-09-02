import { useState } from 'react';

const useHamburger = () => {
  const [isShowingBurger, setIsShowingBurger] = useState(false);

  function toggleBurger() {
    setIsShowingBurger(!isShowingBurger);
  }

  return {
    isShowingBurger,
    toggleBurger
  };
};

export default useHamburger;
