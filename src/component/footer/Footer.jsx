import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo-white.svg";
import { FooterDiv, Date } from "./footer.styled";
import { Ul, Li, Nav, LiContact } from "../header/header.styled";

function Footer(props) {
  return (
    <FooterDiv>
      <img src={logo} alt="logo" />
      <Date>2020</Date>
      {/*       <Nav>
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
      </Nav> */}
    </FooterDiv>
  );
}

Footer.propTypes = {};

export default Footer;
