import React from "react";
import {
  HeaderContainer,
  Logo,
  NavLogoContainer,
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
} from "./header.styled";
import logo from "./../../images/logo.svg";

function Header(props) {
  return (
    <HeaderContainer>
      <NavLogoContainer>
        <Logo src={logo} alt="Lissa" title="Lissa" />
        <Nav>
          <Ul>
            <Li>Home</Li>
            <Li>Skills</Li>
            <Li>My works</Li>
            <Li>About me</Li>
            <LiContact>Contact</LiContact>
          </Ul>
        </Nav>
      </NavLogoContainer>

      <ContainerImgH1>
        <PersonalImage title="My personal image"></PersonalImage>

        <H1>
          <Span>Fronted</Span> developer
        </H1>
      </ContainerImgH1>

      <Mouse>
        <Mousebutton />
      </Mouse>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
