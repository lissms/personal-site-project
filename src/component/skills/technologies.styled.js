import styled from "styled-components";

export const TechnologieContariner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 249px;
  box-shadow: 3px 4px 7px -4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-right: 30px;
`;

export const TechnologieName = styled.p`
  color: #76f09b;
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.14em;
  color: #76f09b;
`;
export const TechnologieLevel = styled.p`
  font-family: Gugi;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.14em;
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
  background-size: cover;
`;
