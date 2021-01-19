import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ItemH2, ContainerItemH2, ItemP } from "./aboutMe.styled";

function AboutMe(props) {
  const [isHover, setIsHover] = useState(true);

  const handleMessage = () => {
    setIsHover(isHover ? false : true);
  };

  return (
    <div image={props.image} name={props.name} onClick={handleMessage}>
      <ContainerItemH2 name={props.name} message={props.message} isHover={isHover}>
        {isHover ? <ItemH2>{props.name}</ItemH2> : <ItemP>{props.message}</ItemP>}
      </ContainerItemH2>
    </div>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
