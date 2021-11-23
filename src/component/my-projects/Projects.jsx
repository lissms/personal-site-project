import React from "react";
import { NameWorksH2, ContainerProjectsDiv, LinkToWebSiteContainer, WebSiteTitle, GithubIcon } from "./projects.styled";

function Projects(props) {
  return (
    <ContainerProjectsDiv imageWork={props.imageWork} id={props.id}>
      <NameWorksH2>{props.name}</NameWorksH2>
      <LinkToWebSiteContainer href={props.urlweb} target="_blank">
        <WebSiteTitle>{props.web}</WebSiteTitle>
      </LinkToWebSiteContainer>
      <div>
        <a href={props.urlGithub} target="_blank">
          <GithubIcon src={props.icoGithub} alt="gitHubLink" />
        </a>
      </div>
    </ContainerProjectsDiv>
  );
}

Projects.propTypes = {};

export default Projects;
