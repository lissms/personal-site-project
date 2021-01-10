import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd, TecnologiesContainer } from "../skills/skills.styled";
import { ButtonOtherProject } from "./myWorks.styled";
import MyWorksList from "./MyWorksList";
import MyWorksListOtherWorks from "./MyWorksListOtherWorks";

function MyWorks(props) {
  const [otherWork, SetotherWork] = useState(<MyWorksList data={props.data.myWorks} />);
  const handlerFWork = () => {
    SetotherWork(<MyWorksListOtherWorks data={props.data.myWorks} />);
  };

  return (
    <ContainerSkills id="myWorks">
      <SkillsDiv>
        <SkillsH2>My works</SkillsH2>
      </SkillsDiv>
      <TecnologiesContainer>{otherWork}</TecnologiesContainer>
      <ButtonOtherProject onClick={handlerFWork}>
        <p>&#60;</p>
      </ButtonOtherProject>
      <ShadowInTheEnd />
    </ContainerSkills>
  );
}

MyWorks.propTypes = {};

export default MyWorks;
