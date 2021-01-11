import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd, TecnologiesContainer } from "../skills/skills.styled";
import { ButtonOtherProject } from "./myWorks.styled";
import MyWorksList from "./MyWorksList";
import MyWorksListOtherWorks from "./MyWorksListOtherWorks";

function MyWorks(props) {
  const [hasFlag, setHasFlag] = useState(true);

  const handlerFWork = () => {
    setHasFlag(hasFlag ? false : true);
  };
  /* por que no me retrocede el asunto */
  return (
    <ContainerSkills id="myWorks">
      <SkillsDiv>
        <SkillsH2>My works</SkillsH2>
      </SkillsDiv>
      <TecnologiesContainer>
        {hasFlag ? <MyWorksListOtherWorks data={props.data.myWorks} /> : <MyWorksList data={props.data.myWorks} />}
      </TecnologiesContainer>
      <ButtonOtherProject onClick={handlerFWork}>{hasFlag ? <p>&#62;</p> : <p>&#60;</p>}</ButtonOtherProject>
      <ShadowInTheEnd />
    </ContainerSkills>
  );
}

MyWorks.propTypes = {};

export default MyWorks;
