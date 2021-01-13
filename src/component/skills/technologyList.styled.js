import styled from "styled-components";

export const TitleTechnologies = styled.p`
  color: #073cb4;
  font-family: Gugi;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: 0.14em;
  margin: 0;
  text-align: center;
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  @media (min-width: 768px) {
    background-color: red;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  & li {
    margin: 0;
  }
`;
