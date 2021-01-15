import styled from "styled-components";

export const BurgerMenu = styled.div`
  position: relative;
  left: -300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 30px;

  & .top-blue {
    position: absolute;
    width: 27.38px;
    height: 2.96px;
    background: #073cb4;
    transform: rotate(0deg) translateY(-6px);
    transition: transform ease 1s, top ease 1s;
  }

  & .green {
    width: 27.38px;
    height: 2.96px;
    background: #76f09b;
    transform: scale(1);
    transition: transform ease 1s;
  }
  & .bottom-blue {
    position: absolute;
    width: 27.38px;
    height: 2.96px;
    background: #073cb4;
    transform: rotate(0deg) translateY(6px);
    transition: transform ease 1s, bottom ease 1s;
  }
  &:hover .top-blue {
    transform: rotate(45deg) translateY(0px);
  }
  &:hover .bottom-blue {
    transform: rotate(131deg) translateY(0px);
  }
  &:hover .green {
    transform: scale(0);
  }
`;
