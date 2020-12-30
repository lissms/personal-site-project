import React from "react";
import PropTypes from "prop-types";
import { TechnologieContariner, TechnologieName, TechnologieImage, TechnologieLevel } from "./technologies.styled";

function Tecnologies(props) {
  return (
    <TechnologieContariner>
      <TechnologieName>{props.name}</TechnologieName>
      <TechnologieImage
        imgeTechnologie={props.imgeTechnologie}
        greenImageTechnologie={props.greenImageTechnologie}
      ></TechnologieImage>
      <TechnologieLevel>{props.level}</TechnologieLevel>
    </TechnologieContariner>
  );
}

Tecnologies.propTypes = {};

export default Tecnologies;
