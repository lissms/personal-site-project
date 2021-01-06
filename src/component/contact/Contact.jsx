import React from "react";
import PropTypes from "prop-types";

import {
  CoverPhotoLn,
  ImgLinkdn,
  ContainerImgAndCover,
  ContainerLinkdn,
  ProfileLink,
  Name,
  FrontenDeveloper,
  University,
  ContainerSection,
  ViewProfile,
  LinkProfile,
  LinkedinLogo,
  Form,
} from "./contact.styled";
import linkedinLogo from "../../images/Linkedin-Logo.png";

function Contact(props) {
  return (
    <ContainerSection>
      <ProfileLink>
        <ContainerImgAndCover>
          <CoverPhotoLn />
          <ImgLinkdn />
        </ContainerImgAndCover>
        <ContainerLinkdn>
          <Name>Lissandra Méndez</Name>
          <FrontenDeveloper>Frontend developer</FrontenDeveloper>
          <University>Universidad de La Habama Adalab </University>
          <LinkProfile href="https://www.linkedin.com/in/lissandramendezsanchez/" target="_blank">
            <ViewProfile>View Profile </ViewProfile>
          </LinkProfile>
          <LinkedinLogo src={linkedinLogo} alt="linkedin" />
        </ContainerLinkdn>
      </ProfileLink>
      <Form action="">
        <input type="text" name="name" id="name" placeholder="Your Name" />
        <input type="email" name="e-mail" id="e-mail" placeholder="Your e-mail" />
        <textarea name="" id="" cols="30" rows="10" placeholder="A message for me"></textarea>
        <input type="button" value="Send Message" />
      </Form>
    </ContainerSection>
  );
}

Contact.propTypes = {};

export default Contact;
