import styled from "styled-components";
import personalImage from "./../../images/20201107_113153.jpg";
import background from "./../../images/backgroun-liss.png";
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
  background-position: -100% 0;
  background-image: linear-gradient(194.08deg, rgba(118, 240, 155, 0.67) 0%, rgba(7, 60, 180, 0.67) 92.96%),
    url(${background});
  margin: 0;
  @media (min-width: 768px) {
    background-position: -255% 0;
  }
  @media (min-width: 1024px) {
    background-position: 0 0;
    background-image: linear-gradient(229.32deg, rgba(150, 237, 163, 0.78) 45.51%, rgba(7, 60, 180, 0.78) 118.95%),
      url(${background});
  }
`;
export const Logo = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 10vh;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 100;
  margin: 0;

  @media (min-width: 768px) {
    padding: 0 48px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const Ul = styled.ul`
  position: fixed;
  width: 85%;
  height: 90vh;
  right: 0;
  background: rgba(7, 60, 180, 0.95);
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  transform: ${(props) => (props.isOpen ? `translateX(150%)` : `translateX(0)`)};
  transition: transform ease 0.5s;

  @media (min-width: 1200px) {
    position: relative;
    width: auto;
    height: 70px;
    background: transparent;
    top: auto;
    flex-direction: row;
    transform: translate(0);
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
    letter-spacing: 2px;
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
      letter-spacing: 2px;
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
    letter-spacing: 2px;
    color: #ffffff;
    text-transform: uppercase;
  }
  @media (min-width: 1200px) {
    align-items: center;
    padding: 0 0 0 38px;
    & a {
      text-decoration: none;
      font-family: Gugi;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 2px;
      color: #073cb4;
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }
`;

export const ContainerImgH1 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 10vh;
  height: 90vh;

  @media (min-width: 768px) {
    justify-content: space-evenly;
    width: 100%;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const PersonalImage = styled.div`
  background-image: url(${personalImage});
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 10px #76f09b solid;
  border: 10px #76f09b solid;
  background-position: left;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1200px) {
    width: 316px;
    height: 316px;
    border: 10px #76f09b solid;
    border: 10px #76f09b solid;
  }
`;

export const H1 = styled.h1`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 2px;
  color: #ffffff;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    line-height: 65px;
    font-size: 48px;
    line-height: 1.5;
  }

  @media (min-width: 1200px) {
    padding-left: 40px;
    text-align: left;
  }
`;

export const Span = styled.span`
  text-transform: uppercase;
  font-size: 48px;

  @media (min-width: 768px) {
    font-size: 52px;
    margin-bottom: 12px;
  }
  @media (min-width: 768px) {
    font-size: 64px;
    margin-bottom: 12px;
  }
`;
export const ContainerH1 = styled.div`
  position: relative;

  @media (min-width: 1200px) {
    &::before {
      content: "";
      width: 10px;
      height: 159px;
      background: #1c2ed7;
      position: absolute;
      border-radius: 12px;
      top: 4px;
    }
  }
`;

const animationMouse = keyframes`
 0% {  
  transform: translateY(-30px) scale(0.6);
}
50%{ 
    transform: translateY(-10px) scale(0.6);
  }
100% {  
    transform: translateY(-30px) scale(0.6);
  }
 
`;

export const Mouse = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    position: absolute;
    bottom: -12px;
    justify-content: center;
    align-items: flex-start;
    border: 5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 24px;
    width: 48px;
    height: 77px;
    animation-name: ${animationMouse};
    animation-duration: 3s;
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

export const MobileHidden = styled.div`
  @media (max-width: 479px) {
    display: none;
  }
  @media (min-width: 480x) {
    display: block;
  }
`;
export const MobileShown = styled.div`
  @media (max-width: 479px) {
    display: block;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;
