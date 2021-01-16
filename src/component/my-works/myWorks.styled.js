import styled from "styled-components";
import { keyframes } from "styled-components";

export const MyWorksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media all and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 36px;
    border-left: dotted #073cb4 5px;
    overflow: hidden;
    margin-left: 100px;
    margin-bottom: 50px;
  }
`;

/* ____________________________- */

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
  @media all and (min-width: 1200px) {
    display: flex;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    background-color: #073cb4;
    z-index: 10;
    position: absolute;
    bottom: 5%;
    right: 10%;
    cursor: pointer;
    & .arrow {
      width: 27.38px;
      height: 2.96px;
      background: #76f09b;
      transform: ${(props) =>
        props.hasFlag ? `rotate(-145deg) translate(-23px,-20px)` : `rotate(45deg) translate(19px, 1px)`};
      transition: transform ease 0.5s;
    }
    & .arrow-bottom {
      width: 27.38px;
      height: 2.96px;
      background: #76f09b;
      transform: ${(props) =>
        props.hasFlag ? ` rotate(145deg) translate(24px,-1px);` : ` rotate(-45deg) translate(-32px, 13px);`};
      transition: transform ease 0.5s;
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
