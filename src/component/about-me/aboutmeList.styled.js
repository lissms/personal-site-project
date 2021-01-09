import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0;
  grid-template-areas: "Cuba University Recherche" "Lyon Madrid Adalab";
`;

export const Li = styled.li`
  /*  width: 474px;
  height: 352px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`;
