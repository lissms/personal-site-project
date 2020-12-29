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
