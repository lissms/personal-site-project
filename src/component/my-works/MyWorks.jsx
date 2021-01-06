import React from "react";
import PropTypes from "prop-types";
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd, TecnologiesContainer } from "../skills/skills.styled";
import MyWorksList from "./MyWorksList";

function MyWorks(props) {
  return (
    <ContainerSkills>
      <SkillsDiv>
        <SkillsH2>My works</SkillsH2>
      </SkillsDiv>
      <TecnologiesContainer>
        <MyWorksList data={props.data.myWorks} />
      </TecnologiesContainer>
      <ShadowInTheEnd />
    </ContainerSkills>
  );
}

MyWorks.propTypes = {};

export default MyWorks;
