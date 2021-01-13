import styled from "styled-components";
import { keyframes } from "styled-components";

const animationButton = keyframes`
 0% {  
    left: -4px;}
  50%{ 
    left: 3px;}
  100% {  
    left: -4px;}

 
`;
export const ButtonOtherProject = styled.div`
  display: none;
  @media all and (min-width: 768px) {
    display: flex;
    width: 49px;
    height: 36px;
    border-radius: 100px;
    background-color: #073cb4;
    z-index: 10;
    position: relative;
    cursor: pointer;
    & p {
      color: #76f09b;
      font-size: 40px;
      position: absolute;
      top: -13px;
      left: -4px;
      margin: 0;
      animation-name: ${animationButton};
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
  }
`;

/* _______________-- */

/* const animationButton = keyframes`
 0% {  
    left: -4px;}
  50%{ 
    left: 3px;}
  100% {  
    left: -4px;}
 
`;
export const ButtonOtherProject = styled.div`
  width: 49px;
  height: 36px;
  border-radius: 100px;
  background-color: #073cb4;
  z-index: 10;
  position: relative;
  cursor: pointer;
  & p {
    color: #76f09b;
    font-size: 40px;
    position: absolute;
    top: -13px;
    left: -4px;
    margin: 0;
    animation-name: ${animationButton};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
 */
