import React from "react";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import { UL, Li } from "./aboutmeList.styled";

function AboutMeList(props) {
  const aboutMe = props.data.map((items, i) => {
    return (
      <Li key={i} name={items.name} image={items.img}>
        <AboutMe name={items.name} image={items.img} message={items.message} />
      </Li>
    );
  });

  return <UL>{aboutMe}</UL>;
}
AboutMeList.propTypes = {};

export default AboutMeList;
