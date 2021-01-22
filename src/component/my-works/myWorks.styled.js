import styled from "styled-components";
import { keyframes } from "styled-components";

export const MyWorksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 36px;
    border-left: dotted #073cb4 5px;
    margin-left: 100px;
    margin-bottom: 50px;
  }
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
    bottom: 3%;
    right: 10%;
    transform: rotate(90deg);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & .arrow {
      width: 24px;
      height: 3px;
      background: #76f09b;
      transform-origin: left;
      transform: ${(props) =>
        props.hasFlag ? `rotate(45deg) translateY(-11px);` : `rotate(-45deg) translateY(11px);`};
      transition: transform ease 0.5s;
    }
    & .arrow-bottom {
      width: 24px;
      height: 3px;
      background: #76f09b;
      transform-origin: right;
      transform: ${(props) =>
        props.hasFlag ? `rotate(-45deg) translateY(-11px);` : `rotate(45deg) translateY(11px);`};
      transition: transform ease 0.5s;
    }
  }
`;
