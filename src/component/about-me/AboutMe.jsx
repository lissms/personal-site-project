import React from "react";
import PropTypes from "prop-types";
import { ItemH2, ContainerItemH2, ContainerItemli } from "./aboutMe.styled";

function AboutMe(props) {
  return (
    <ContainerItemli image={props.image}>
      <ContainerItemH2>
        <ItemH2>{props.name}</ItemH2>
      </ContainerItemH2>
    </ContainerItemli>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
