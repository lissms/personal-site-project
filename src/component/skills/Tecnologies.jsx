import React from "react";
import PropTypes from "prop-types";
import {
  TechnologieContariner,
  TechnologieName,
  TechnologieImage,
  TechnologieLevel,
  LevelContainer,
  Completed,
  Incomplete,
  InProcess,
} from "./technologies.styled";

function Tecnologies(props) {
  let component = (
    <>
      <Completed /> <Completed /> <Incomplete />
    </>
  );
  if (props.level === "learning") {
    component = (
      <>
        <InProcess /> <Incomplete /> <Incomplete />
      </>
    );
  } else if (props.level === "senior") {
    component = (
      <>
        <Completed /> <Completed /> <Completed />
      </>
    );
  }

  return (
    <TechnologieContariner>
      <TechnologieName>{props.name}</TechnologieName>
      <TechnologieImage
        imgeTechnologie={props.imgeTechnologie}
        greenImageTechnologie={props.greenImageTechnologie}
      ></TechnologieImage>
      <TechnologieLevel>{props.level}</TechnologieLevel>
      <LevelContainer>{component}</LevelContainer>
    </TechnologieContariner>
  );
}

Tecnologies.propTypes = {};

export default Tecnologies;
