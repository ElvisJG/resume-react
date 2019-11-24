import React from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import useModal from "../../hooks/useModal";
import Modal from "../UI/Modal";

export default function HomeLinks() {
  const { isShowing, toggle } = useModal();
  const dropOne = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-100px)" },
    delay: "4000"
  });
  const dropTwo = useSpring({
    opacity: 1,
    tension: 180,
    friction: 12,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-100px)" },
    delay: "4500"
  });
  const dropThree = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-100px)" },
    delay: "5000"
  });
  return (
    <div className="home-links">
      <animated.div style={dropOne} className="animated-link">
        <NavLink exact to="/cv" className="home__links">
          CV
        </NavLink>
      </animated.div>
      <animated.div style={dropTwo} className="animated-link">
        <NavLink exact to="/portfolio" className="home__links">
          Portfolio
        </NavLink>
      </animated.div>
      <animated.div style={dropThree} className="animated-link">
        <button onClick={toggle} className="home__links btn">
          Contact
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </animated.div>
    </div>
  );
}
