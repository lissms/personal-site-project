import styled from "styled-components";

export const ContainerProjectsDiv = styled.div`
  position: relative;
  height: 350px;
  background-image: ${(props) => ` url(${props.imageWork})`};
  border-radius: 4px;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(118, 240, 155, 0.8);
  }
`;
export const NameWorksH2 = styled.h2`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 35px;
  text-align: right;
  letter-spacing: 2px;
  color: #1c2ed7;
  position: relative;
  padding: 25px 35px 0 0;
  width: 90%;
  margin: 0;
  float: right;
`;
export const LinkToWebSiteContainer = styled.a`
  width: 80%;
  height: 64px;
  background: #073cb4;
  border-radius: 4px 0px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 274px;
  right: -12px;
  text-decoration: none;

  @media (min-width: 768px) {
    width: 254px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    right: -0;
    z-index: -1;
    width: 0;
    height: 0;
    border-bottom: 20px solid #506ba7;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;
export const WebSiteTitle = styled.p`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #ffffff;
`;
export const GithubIcon = styled.img`
  width: 50px;
  position: absolute;
  bottom: 20px;
  left: 14px;
`;
