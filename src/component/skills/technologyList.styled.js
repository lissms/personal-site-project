import styled from "styled-components";

export const TitleTechnologies = styled.p`
  color: #073cb4;
  font-family: Gugi;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: 0.14em;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: start;
  }
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 0;
  }

  & li {
    margin: 0;
  }
`;
