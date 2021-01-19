import styled from "styled-components";
import { keyframes } from "styled-components";

export const ItemH2 = styled.h2`
  font-family: Gugi;
  font-size: 47px;
  line-height: 59px;
  letter-spacing: 0.14em;
  color: #ffffff;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const ItemP = styled.p`
  font-family: Gugi;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.14em;
  color: #ffffff;
`;

export const ContainerItemH2 = styled.div`
  width: 380px;
  height: 101px;
  left: 51px;
  top: 1746px;
  padding: 10px;
  background: ${(props) => (props.isHover ? `rgba(7, 60, 180, 0.3);` : `rgba(7, 60, 180, 0.7);`)};
  border: 5px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 313px;
  }
`;
