import React from "react";
import PropTypes from "prop-types";
import AboutMeList from "../about-me/AboutMeList";

function SectionAboutMe(props) {
  return (
    <div id="sectionAboutMe">
      <AboutMeList data={props.data.aboutMeData} />
    </div>
  );
}

SectionAboutMe.propTypes = {};

export default SectionAboutMe;
