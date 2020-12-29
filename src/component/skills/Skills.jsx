import React from "react";
import { SkillsDiv, SkillsH2, ContainerSkills } from "./skills.styled";
import TechnologiesList from "./TechnologiesList";

function Skills(props) {
  return (
    <ContainerSkills>
      <SkillsDiv>
        <SkillsH2>Skills</SkillsH2>
      </SkillsDiv>
      <TechnologiesList title="languages" data={props.data} />
      {/*  <TechnologiesList title="libraries" /> */}
    </ContainerSkills>
  );
}

export default Skills;
