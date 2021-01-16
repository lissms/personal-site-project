import React, { useState } from "react";
import PropTypes from "prop-types";
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd } from "../skills/skills.styled";
import { ButtonOtherProject, MyWorksContainer } from "./myWorks.styled";
import MyWorksList from "./MyWorksList";
import MyWorksListOtherWorks from "./MyWorksListOtherWorks";

function MyWorks(props) {
  const [hasFlag, setHasFlag] = useState(true);

  const handlerFWork = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <ContainerSkills id="myWorks">
      <SkillsDiv>
        <SkillsH2>My works</SkillsH2>
      </SkillsDiv>
      <MyWorksContainer>
        {hasFlag ? <MyWorksListOtherWorks data={props.data.myWorks} /> : <MyWorksList data={props.data.myWorks} />}
      </MyWorksContainer>
      <ButtonOtherProject onClick={handlerFWork} hasFlag={hasFlag}>
        <div className="arrow"></div>
        <div className="arrow-bottom"></div>
      </ButtonOtherProject>
      {/*  <ButtonOtherProject onClick={handlerFWork}>{hasFlag ? <p>&#62;</p> : <p>&#60;</p>}</ButtonOtherProject> */}
      <ShadowInTheEnd />
    </ContainerSkills>
  );
}

MyWorks.propTypes = {};

export default MyWorks;
