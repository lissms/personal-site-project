import styled from "styled-components";
import personalImage from "./../../images/20201107_113153.jpg";

export const HeaderContainer = styled.header`
  background: linear-gradient(229.32deg, rgba(150, 237, 163, 0.78) 45.51%, rgba(7, 60, 180, 0.78) 118.95%);
  height: 730px;
  margin: 0;
`;
export const Logo = styled.img`
  width: 142px;
  height: 60.13px;
  margin-left: 30px;
  margin-top: 44px;
`;
export const NavLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Ul = styled.ul`
  justify-content: space-around;
  display: flex;
  list-style: none;
  height: 23px;
  margin-top: 63px;
  font-size: 18px;

  font-family: "Gugi", cursive;
  line-height: 22.5px;
  color: #36677a;
  text-transform: uppercase;
`;
export const Li = styled.li`
  border-right: 2px solid #00de9b;
  align-items: center;
  padding: 0 38px;
`;
export const LiContact = styled.li`
  align-items: center;
  padding: 0 38px;
`;

export const ContainerImgH1 = styled.div`
  margin: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PersonalImage = styled.div`
  background-image: url(${personalImage});
  border-radius: 200px;
  width: 316px;
  height: 316px;
  border: 10px #76f09b solid;
  border: 10px #76f09b solid;
  background-position: left;
`;

export const H1 = styled.h1`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  line-height: 91px;
  letter-spacing: 0.14em;
  color: #ffffff;
  border-left: solid 10px #1c2ed7;
  padding: 0 30px;
  width: 389px;
  margin: 82px;
  border-radius: 12px;
`;
export const Span = styled.span`
  text-transform: uppercase;
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
