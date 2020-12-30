import React from "react";
import PropTypes from "prop-types";
import AboutMeList from "../about-me/AboutMeList";

function SectionAboutMe(props) {
  return (
    <>
      <AboutMeList data={props.data.aboutMeData} />
    </>
  );
}

SectionAboutMe.propTypes = {};

export default SectionAboutMe;
