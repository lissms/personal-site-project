import React from "react";
import PropTypes from "prop-types";
import Projects from "./Projects";
import { UL, Li } from "./myWorkList.styled";

function MyWorksList(props) {
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
  return (
    <>
      <UL>{projects}</UL>
    </>
  );
}

MyWorksList.propTypes = {};

export default MyWorksList;
