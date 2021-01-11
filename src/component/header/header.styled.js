import styled from "styled-components";
import personalImage from "./../../images/20201107_113153.jpg";
import background from "./../../images/backgroundHeader.jpg";
import { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  height: 730px;
  margin: 0;
  background-size: cover;
  background-image: url(/static/media/backgroundHeader.5d760ca6.jpg);
  height: 730px;
  margin: 0;
  background-position: 2px -202px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(229.32deg, rgba(150, 237, 163, 0.78) 45.51%, rgba(7, 60, 180, 0.78) 118.95%);
  }
`;
export const Logo = styled.img`
  width: 142px;
  height: 60.13px;
  margin-left: 30px;
  margin-top: 44px;
  z-index: 1;
`;
export const NavLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const Ul = styled.ul`
  justify-content: space-around;
  display: flex;
  list-style: none;
  height: 23px;
  margin-top: 63px;
  font-size: 18px;
  /*  position: fixed;
  right: 60px;
  top: -50px; */
`;
export const Li = styled.li`
  border-right: 2px solid #00de9b;
  align-items: center;
  padding: 0 38px;
  & a {
    text-decoration: none;
    font-family: "Gugi", cursive;
    line-height: 22.5px;
    color: #36677a;
    text-transform: uppercase;
  }
`;
export const LiContact = styled.li`
  align-items: center;
  padding: 0 38px;
  & a {
    text-decoration: none;
    font-family: "Gugi", cursive;
    line-height: 22.5px;
    color: #36677a;
    text-transform: uppercase;
  }
`;

export const ContainerImgH1 = styled.div`
  margin: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

export const PersonalImage = styled.div`
  background-image: url(${personalImage});
  border-radius: 200px;
  width: 316px;
  height: 316px;
  border: 10px #76f09b solid;
  border: 10px #76f09b solid;
  background-position: left;
  z-index: 1;
`;

export const H1 = styled.h1`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  line-height: 91px;
  letter-spacing: 0.14em;
  color: #ffffff;

  padding: 0 30px;
  width: 389px;
  margin: 82px;
  border-radius: 12px;
`;

export const Span = styled.span`
  text-transform: uppercase;
`;
export const ContainerH1 = styled.div`
  position: relative;
  & ::before {
    content: "";
    width: 10px;
    height: 159px;
    background: #1c2ed7;
    z-index: 1;
    position: absolute;
    top: 92px;
    left: 76px;
    border-radius: 12px;
  }
`;
const animationMouse = keyframes`
 0% {  
  top: 622px;}
  50%{ 
  top: 637px;}
  100% {  
  top: 622px;}
 
`;

export const Mouse = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  width: 49px;
  height: 77px;
  left: 694px;
  top: 622px;
  animation-name: ${animationMouse};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
export const Mousebutton = styled.div`
  margin: 8px;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  width: 10px;
  height: 18px;
  left: 714px;
  top: 638px;
`;
