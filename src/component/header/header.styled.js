import styled from "styled-components";
import personalImage from "./../../images/20201107_113153.jpg";
import background from "./../../images/backgroundHeader.jpg";
import { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(194.08deg, rgba(118, 240, 155, 0.67) 0%, rgba(7, 60, 180, 0.67) 92.96%),
    url(/static/media/backgroundHeader.5d760ca6.jpg);
  margin: 0;
  background-position: 2px -202px;
  @media (min-width: 1200px) {
    background-image: linear-gradient(229.32deg, rgba(150, 237, 163, 0.78) 45.51%, rgba(7, 60, 180, 0.78) 118.95%),
      url(/static/media/backgroundHeader.5d760ca6.jpg);
  }
`;
export const Logo = styled.img`
  width: 142px;
  height: 60.13px;
`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 1px;
  padding: 0 30px 0 30px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 100;
  margin: 0;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const Ul = styled.ul`
  position: fixed;
  width: 70%;
  height: 80%;
  background: rgba(7, 60, 180, 0.91);
  top: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  transform: ${(props) => (props.isOpen ? `translateX(150%)` : `translateX(-3%)`)};
  transition: transform ease 0.5s;
  @media (min-width: 1200px) {
    position: absolute;
    top: 5%;
    right: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    height: 23px;
    font-size: 18px;
    transform: none;
    transition: none;
    background: none;
  }
`;
export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    font-family: Gugi;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.14em;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 35px;
  }
  @media (min-width: 1200px) {
    border-right: 2px solid #00de9b;
    align-items: center;
    padding: 0 38px;

    & a {
      font-family: Gugi;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.14em;
      color: #073cb4;
      margin-bottom: 0;
    }
  }
`;
export const LiContact = styled.li`
  align-items: center;
  padding: 0 38px;
  & a {
    text-decoration: none;
    font-family: Gugi;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.14em;
    color: #ffffff;
    text-transform: uppercase;
  }
  @media (min-width: 1200px) {
    align-items: center;
    padding: 0 38px;
    & a {
      text-decoration: none;
      font-family: Gugi;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.14em;
      color: #073cb4;
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }
`;

export const ContainerImgH1 = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: 10px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const PersonalImage = styled.div`
  background-image: url(${personalImage});
  border-radius: 200px;
  width: 224px;
  height: 224px;
  border: 10px #76f09b solid;
  border: 10px #76f09b solid;
  background-position: left;
  @media (min-width: 1200px) {
    width: 316px;
    height: 316px;
    border: 10px #76f09b solid;
    border: 10px #76f09b solid;
    background-position: left;
    margin-right: 200px;
  }
`;

export const H1 = styled.h1`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 52px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.14em;
  color: #ffffff;
  padding: 0 30px;
  border-radius: 12px;
  @media (min-width: 1200px) {
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
  }
`;

export const Span = styled.span`
  text-transform: uppercase;
`;
export const ContainerH1 = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 400px;
    & ::before {
      content: "";
      width: 10px;
      height: 159px;
      background: #1c2ed7;
      z-index: 1;
      position: absolute;
      top: 24px;
      left: 6px;
      border-radius: 12px;
    }
  }
  @media (min-width: 1200px) {
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
  }
`;

const animationMouse = keyframes`
 0% {  
  transform: translateY(-30px);}
  50%{ 
    transform: translateY(-10px);;}
  100% {  
    transform: translateY(-30px);}
 
`;

export const Mouse = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 25px;
    width: 49px;
    height: 77px;
    animation-name: ${animationMouse};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
export const Mousebutton = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    margin: 8px;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    border-radius: 25px;
    width: 10px;
    height: 18px;
  }
`;

export const MenuMovil = styled.div`
  position: fixed;

  font-family: "Gugi", cursive;
  line-height: 22.5px;
  color: #36677a;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: none;
  }
`;

/* __________ */

/* 

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(229.32deg, rgba(150, 237, 163, 0.78) 45.51%, rgba(7, 60, 180, 0.78) 118.95%),
    url(/static/media/backgroundHeader.5d760ca6.jpg);
  margin: 0;
  background-position: 2px -202px;
`;
export const Logo = styled.img`
  width: 142px;
  height: 60.13px;
`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 1px;
  padding: 0 30px 0 30px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 100;
`;

export const Ul = styled.ul`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 23px;
  font-size: 18px;

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    flex-direction: row;
  }
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
  margin-right: 200px;
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
  transform: translateY(0);}
  50%{ 
    transform: translateY(20px);;}
  100% {  
    transform: translateY(0);}
 
`;

export const Mouse = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  width: 49px;
  height: 77px;
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

export const MenuMovil = styled.div`
  position: fixed;

  left: 300px;
  font-family: "Gugi", cursive;
  line-height: 22.5px;
  color: #36677a;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: none;
  }
`;
 */
