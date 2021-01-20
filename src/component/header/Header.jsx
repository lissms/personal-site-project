import React, { useState } from "react";
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
} from "./header.styled";
import logo from "./../../images/Logo.png";
import Menu from "./Menu";
import DownloadButton from "./DownloadButton";

function Header(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(isOpen ? false : true);
  };
  return (
    <HeaderContainer id="header">
      <Nav>
        <Logo src={logo} alt="Lissa" title="Lissa" />
        <Menu id="menu" isOpen={isOpen} handleClick={handleClick} />

        <Ul isOpen={isOpen}>
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
            <Span>Frontend</Span>
            <br />
            developer
          </H1>
        </ContainerH1>
      </ContainerImgH1>

      <Mouse>
        <Mousebutton />
      </Mouse>
      <DownloadButton />
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
