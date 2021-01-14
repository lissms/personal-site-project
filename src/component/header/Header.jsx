import React from "react";
import {
  HeaderContainer,
  Logo,
  Ul,
  Li,
  Nav,
  LiContact,
  ContainerImgH1,
  PersonalImage,
  H1,
  Span,
  Mouse,
  Mousebutton,
  ContainerH1,
  MenuMovil,
} from "./header.styled";
import logo from "./../../images/logo.svg";

function Header(props) {
  return (
    <HeaderContainer id="header">
      <Nav>
        <Logo src={logo} alt="Lissa" title="Lissa" />
        <MenuMovil>menú</MenuMovil>
        <Ul>
          <Li>
            <a href="#header">Home</a>
          </Li>
          <Li>
            <a href="#skills">Skills</a>
          </Li>
          <Li>
            <a href="#sectionAboutMe">About me</a>
          </Li>
          <Li>
            <a href="#myWorks">My works</a>
          </Li>
          <LiContact>
            <a href="#contact">Contact</a>
          </LiContact>
        </Ul>
      </Nav>

      <ContainerImgH1>
        <PersonalImage title="My personal image"></PersonalImage>
        <ContainerH1>
          <H1>
            <Span>Fronted</Span> developer
          </H1>
        </ContainerH1>
      </ContainerImgH1>

      <Mouse>
        <Mousebutton />
      </Mouse>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
