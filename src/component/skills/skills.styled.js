import styled from "styled-components";

export const SkillsDiv = styled.div`
  @media (min-width: 768px) {
    width: 698px;
    height: 163px;
    transform: rotate(-90deg);
    position: absolute;
    top: 309px;
    left: -281px;
  }
`;
export const SkillsH2 = styled.h2`
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 80px;
  letter-spacing: 2px;
  color: #073cb4;
  border-bottom: dotted #073cb4 5px;
  @media (min-width: 768px) {
    border-bottom: none;
    font-family: Gugi;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: end;
    color: #073cb4;
  }
`;

export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  padding: 16px 32px;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin: 0px;
    padding: 50px;
  }
`;
export const ShadowInTheEnd = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(270deg, #ffffff 72.16%, rgba(255, 255, 255, 0) 100%);
    width: 140px;
    height: 820px;
    z-index: 1;
  }
`;

export const TecnologiesContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 36px;
    border-left: dotted #073cb4 5px;
    overflow: hidden;
    margin-left: 100px;
  }
`;
