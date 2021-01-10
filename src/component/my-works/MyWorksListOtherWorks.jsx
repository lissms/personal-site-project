import React from "react";
import PropTypes from "prop-types";
import Projects from "./Projects";
import { OtherWorks, Li } from "./MyWorksListOtherWorks.styled";

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
      <OtherWorks>{projects}</OtherWorks>
    </>
  );
}

MyWorksList.propTypes = {};

export default MyWorksList;
