import styled from "styled-components";
import { keyframes } from "styled-components";

export const ItemH2 = styled.h2`
  font-family: Gugi;
  font-size: 44px;
  font-weight: normal;
  line-height: 59px;
  letter-spacing: 2px;
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
  letter-spacing: 2px;
  color: #ffffff;
`;

export const ContainerText = styled.div`
  width: 90%;
`;

export const ContainerItemH2 = styled.div`
  width: 100%;
  height: 101px;
  padding: 16px;
  background: ${(props) => (props.isHover ? `rgba(7, 60, 180, 0.3);` : `rgba(7, 60, 180, 0.7);`)};
  border: 5px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
