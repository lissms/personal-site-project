import React from "react";
import PropTypes from "prop-types";
import { BurgerMenu } from "./menu.styled";

function Menu(props) {
  let isOpen = false;
  const handleClick = () => {
    isOpen = true;
  };

  return (
    <BurgerMenu onClick={handleClick}>
      <div className="top-blue"></div>
      <div className="green"></div>
      <div className="bottom-blue"></div>
    </BurgerMenu>
  );
}

Menu.propTypes = {};

export default Menu;
