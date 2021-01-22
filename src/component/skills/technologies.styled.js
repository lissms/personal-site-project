import styled from "styled-components";
import { keyframes } from "styled-components";

export const TechnologieContariner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 250px;
  box-shadow: 3px 4px 7px -4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;

export const TechnologieName = styled.p`
  color: #76f09b;
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 2px;
  color: #76f09b;
`;
export const TechnologieLevel = styled.p`
  font-family: Gugi;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  color: #1c2ed7;
`;

export const TechnologieImage = styled.div`
  height: 125px;
  width: 125px;

  background-image: ${(props) => `url(${props.greenImageTechnologie})`};
  &:hover {
    background-image: ${(props) => `url(${props.imgeTechnologie})`};
  }
  background-repeat: no-repeat;
  background-size: contain;
`;
export const LevelContainer = styled.div`
  width: 154px;
  height: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
`;
export const Completed = styled.div`
  background: #76f09b;
  border-radius: 30px;
  width: 34px;
  height: 8px;
`;
export const Incomplete = styled.div`
  background: #e7e7e7;
  border-radius: 30px;
  width: 34px;
  height: 8px;
`;

const animationLevel = keyframes`
 0% {  
  background: #e7e7e7;}
  50%{ 
    background: #76f09b;}
  100% {  
    background: #e7e7e7;}
 
`;

export const InProcess = styled.div`
  border-radius: 30px;
  width: 34px;
  height: 8px;
  animation-name: ${animationLevel};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
`;
