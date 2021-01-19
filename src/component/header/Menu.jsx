import PropTypes from "prop-types";
import { BurgerMenu } from "./menu.styled";

function Menu(props) {
  return (
    <BurgerMenu onClick={props.handleClick} isOpen={props.isOpen}>
      <div className="top-blue"></div>
      <div className="green"></div>
      <div className="bottom-blue"></div>
    </BurgerMenu>
  );
}

Menu.propTypes = {};

export default Menu;
