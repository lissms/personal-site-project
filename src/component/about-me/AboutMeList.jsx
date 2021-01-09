import React from "react";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import { UL, Li } from "./aboutmeList.styled";

function AboutMeList(props) {
  const aboutMe = props.data.map((items, i) => {
    return (
      <Li key={i}>
        <AboutMe name={items.name} image={items.img} message={items.message} />
      </Li>
    );
  });

  console.log("props.data ****************", props.data);
  return <UL>{aboutMe}</UL>;
}
AboutMeList.propTypes = {};

export default AboutMeList;
