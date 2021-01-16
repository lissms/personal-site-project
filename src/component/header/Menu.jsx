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

/* ---------- */
/* function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen ? true : false);
  };

  return (
    <BurgerMenu
      onClick={handleClick}
      closeTop="rotate(0deg) translateY(-6px)"
      openTop="rotate(45deg) translateY(0px)"
      closeBottom="rotate(0deg) translateY(6px)"
      openBottom="trotate(131deg) translateY(0px)"
      closeGreem="scale(1)"
      openGeem="scale(0)"
    >
      {isOpen === false ? (
        <BurgerMenu
          closeTop="rotate(0deg) translateY(-6px)"
          closeBottom="rotate(0deg) translateY(6px)"
          closeGreem="scale(1)"
        />
      ) : (
        <BurgerMenu
          openTop="rotate(45deg) translateY(0px)"
          openBottom="trotate(131deg) translateY(0px)"
          openGeem="scale(0)"
        />
      )}
      <div className="top-blue"></div>
      <div className="green"></div>
      <div className="bottom-blue"></div>
    </BurgerMenu>
  );
}

Menu.propTypes = {};

export default Menu;
 */
