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
  MobileHidden,
  MobileShown,
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
            <a href="#header" onClick={handleClick}>
              Home
            </a>
          </Li>
          <Li>
            <a href="#skills" onClick={handleClick}>
              Skills
            </a>
          </Li>
          <Li>
            <a href="#sectionAboutMe" onClick={handleClick}>
              About me
            </a>
          </Li>
          <Li>
            <a href="#myWorks" onClick={handleClick}>
              My works
            </a>
          </Li>
          <LiContact>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </LiContact>
          <MobileShown>
            <DownloadButton />
          </MobileShown>
        </Ul>
      </Nav>

      <ContainerImgH1>
        <PersonalImage title="My personal image"></PersonalImage>
        <ContainerH1>
          <H1>
            <Span>Lissandra</Span>
            <br />
            frontend developer
          </H1>
        </ContainerH1>
      </ContainerImgH1>

      <Mouse>
        <Mousebutton />
      </Mouse>
      <MobileHidden>
        <DownloadButton />
      </MobileHidden>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
