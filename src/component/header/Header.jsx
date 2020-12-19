import React from "react";
import { HeaderContainer, Logo, NavLogoContainer, Ul, Li, Nav } from "./header.styled";
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
            <Li>Contact</Li>
          </Ul>
        </Nav>
      </NavLogoContainer>

      <div className="Container__image-title">
        <img src="" alt="my personal image" />
        <div className="title">
          <h1>
            <span>Fronted</span> developer
          </h1>
        </div>
      </div>
      <div className="mouse-decorative">
        <div className="decorative"></div>
      </div>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
