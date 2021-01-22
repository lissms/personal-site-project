import React from "react";
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd, TecnologiesContainer } from "./skills.styled";
import TechnologiesList from "./TechnologiesList";

function Skills(props) {
  return (
    <ContainerSkills id="skills">
      <SkillsDiv>
        <SkillsH2>Skills</SkillsH2>
      </SkillsDiv>
      <TecnologiesContainer>
        <TechnologiesList title="languages" data={props.data.languages} />
        <TechnologiesList title="libraries" data={props.data.libraries} />
        <TechnologiesList title="others" data={props.data.others} />
      </TecnologiesContainer>
      <ShadowInTheEnd />
    </ContainerSkills>
  );
}

export default Skills;
