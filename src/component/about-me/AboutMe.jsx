import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ItemH2, ContainerItemH2, ContainerText, ItemP } from "./aboutMe.styled";

function AboutMe(props) {
  const [isHover, setIsHover] = useState(true);

  const handleMessage = () => {
    setIsHover(isHover ? false : true);
  };

  return (
    <ContainerText image={props.image} name={props.name} onClick={handleMessage}>
      <ContainerItemH2 name={props.name} message={props.message} isHover={isHover}>
        {isHover ? <ItemH2>{props.name}</ItemH2> : <ItemP>{props.message}</ItemP>}
      </ContainerItemH2>
    </ContainerText>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
