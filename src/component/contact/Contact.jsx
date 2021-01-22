import React from "react";
import PropTypes from "prop-types";

import {
  CoverPhotoLn,
  ImgLinkdnContainer,
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
  NameEmail,
  Messsage,
  Btn,
} from "./contact.styled";
import linkedinLogo from "../../images/Linkedin-Logo.png";

function Contact(props) {
  return (
    <ContainerSection id="contact">
      <ProfileLink>
        <ContainerImgAndCover>
          <CoverPhotoLn />
          <ImgLinkdnContainer>
            <ImgLinkdn />
          </ImgLinkdnContainer>
        </ContainerImgAndCover>
        <ContainerLinkdn>
          <Name>Lissandra Méndez</Name>
          <FrontenDeveloper>Frontend developer</FrontenDeveloper>
          <University>Universidad de La Habama</University>
          <University>Adalab</University>
          <LinkProfile href="https://www.linkedin.com/in/lissandramendezsanchez/" target="_blank">
            <ViewProfile>View Profile </ViewProfile>
          </LinkProfile>
          <LinkedinLogo src={linkedinLogo} alt="linkedin" />
        </ContainerLinkdn>
      </ProfileLink>
      <Form action="https://formspree.io/f/xqkgwlzy" method="POST">
        <NameEmail type="text" name="name" id="name" placeholder="Your Name" />
        <NameEmail type="email" name="e-mail" id="e-mail" placeholder="Your e-mail*" required />
        <Messsage name="comments" id="comments" cols="30" rows="10" placeholder="A message for me"></Messsage>
        <Btn type="submit" value="Send Message" />
      </Form>
    </ContainerSection>
  );
}

Contact.propTypes = {};

export default Contact;
