import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo-white.svg";
import { FooterDiv, Date } from "./footer.styled";

function Footer() {
  return (
    <FooterDiv>
      <img src={logo} alt="logo" />
      <Date>2021</Date>
    </FooterDiv>
  );
}

Footer.propTypes = {};

export default Footer;
