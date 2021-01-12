import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ItemH2, ContainerItemH2, ItemP } from "./aboutMe.styled";

function AboutMe(props) {
  const [message, setMessage] = useState(<ItemH2>{props.name}</ItemH2>);

  const handleMessage = () => {
    setMessage(<ItemP>{props.message}</ItemP>);
  };
  const handleName = () => {
    setMessage(<ItemH2>{props.name}</ItemH2>);
  };

  return (
    <div image={props.image} name={props.name} id="sectionAboutMe">
      <ContainerItemH2 name={props.name} onMouseOver={handleMessage} onMouseOut={handleName}>
        {message}
      </ContainerItemH2>
    </div>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
