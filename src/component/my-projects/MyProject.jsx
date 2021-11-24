
import { SkillsDiv, SkillsH2, ContainerSkills, ShadowInTheEnd } from "../skills/skills.styled";
import { MyWorksContainer } from "./myProject.styled";
import MyProjectLis from "./MyProjectList";
import MyWorksList from "../my-works/MyWorksList";



function MyProject(props) {

  return (
    <ContainerSkills id="myWorks">
      <SkillsDiv>
        <SkillsH2>My works</SkillsH2>
      </SkillsDiv>
      <MyWorksContainer>
        <MyProjectLis data={props.data.myWorks} />
       <MyWorksList data={props.data.myWorks} />
      </MyWorksContainer>
  <ShadowInTheEnd /> 
    </ContainerSkills>
  );
}

MyProject.propTypes = {};

export default MyProject;
