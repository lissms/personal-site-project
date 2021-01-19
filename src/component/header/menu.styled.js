import styled from "styled-components";

export const BurgerMenu = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }

  & .top-blue {
    position: absolute;
    width: 24px;
    height: 3px;
    background: #073cb4;
    transform: ${(props) => (props.isOpen ? `rotate(0deg) translateY(-6px)` : `rotate(45deg) translateY(0px)`)};
    transition: transform ease 0.5s;
  }

  & .green {
    width: 24px;
    height: 3px;
    background: #76f09b;
    transform: ${(props) => (props.isOpen ? `scaleX(1)` : `scaleX(0);`)};
    transition: transform ease 0.5s ;
  }

  & .bottom-blue {
    position: absolute;
    width: 24px;
    height: 3px;
    background: #073cb4;
     transform: ${(props) => (props.isOpen ? `rotate(0deg) translateY(6px)` : `rotate(131deg) translateY(0px);`)};
    transition: transform ease 0.5s;

`;
