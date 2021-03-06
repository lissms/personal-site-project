import React from "react";
import PropTypes from "prop-types";
import Tecnologies from "./Tecnologies";
import { TitleTechnologies, UL } from "./technologyList.styled";

function TechnologiesList(props) {
  const languages = props.data.map((language) => {
    return (
      <li key={language.id}>
        <Tecnologies
          name={language.name}
          id={language.id}
          imgeTechnologie={language.imgeTechnologie}
          greenImageTechnologie={language.greenImageTechnologie}
          level={language.level}
        />
      </li>
    );
  });
  return (
    <>
      <TitleTechnologies>{props.title}</TitleTechnologies>
      <UL>{languages}</UL>
    </>
  );
}

TechnologiesList.propTypes = {};

export default TechnologiesList;
