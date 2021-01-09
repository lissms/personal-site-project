import styled from "styled-components";
import { keyframes } from "styled-components";

export const ItemH2 = styled.h2`
  font-family: Gugi;
  font-size: 47px;
  line-height: 59px;
  letter-spacing: 0.14em;
  color: #ffffff;
  text-transform: uppercase;
`;

/* __________________________ */
const animationMessage = keyframes`
 0% {  
  
  
}
  100% {  
    }
 
`;
export const ItemP = styled.p`
  font-family: Gugi;
  font-size: 20px;
  letter-spacing: 0.14em;
  color: #ffffff;
  background-color: blue;
  animation-name: ${animationMessage};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

/* _____________________ */

export const ContainerItemH2 = styled.div`
  width: 380px;
  height: 101px;
  left: 51px;
  top: 1746px;
  background: rgba(7, 60, 180, 0.3);
  border: 5px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerItemli = styled.div`
  width: 474px;
  height: 352px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.image})`};
  grid-area: ${(props) => `${props.name}`};
`;
