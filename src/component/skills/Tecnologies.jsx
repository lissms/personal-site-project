import React from "react";
import PropTypes from "prop-types";
import { TechnologieContariner, TechnologieName, TechnologieImage } from "./technologies.styled";

function Tecnologies(props) {
  return (
    <TechnologieContariner>
      <TechnologieName>{props.name}</TechnologieName>
      <TechnologieImage
        imgeTechnologie={props.imgeTechnologie}
        greenImageTechnologie={props.greenImageTechnologie}
      ></TechnologieImage>
    </TechnologieContariner>
  );
}

Tecnologies.propTypes = {};

export default Tecnologies;
