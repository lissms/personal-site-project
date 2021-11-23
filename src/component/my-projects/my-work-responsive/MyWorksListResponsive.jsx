import React from "react";
import PropTypes from "prop-types";
import Projects from "../Projects";
import { UL, Li } from "./myWorkListResponsive.styled";

function MyWorksListResponsive(props) {
  const projects = props.data.map((project) => {
    return (
      <Li key={project.id} id={project.id}>
        <Projects
          name={project.name}
          id={project.id}
          imageWork={project.img}
          icoGithub={project.icoGithub}
          urlGithub={project.urlGithub}
          web={project.web}
          urlweb={project.urlweb}
        />
      </Li>
    );
  });
  return <UL>{projects}</UL>;
}

MyWorksListResponsive.propTypes = {};

export default MyWorksListResponsive;
