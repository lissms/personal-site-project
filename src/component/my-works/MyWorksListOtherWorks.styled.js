import styled from "styled-components";

export const OtherWorks = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 35px;
  grid-template-areas:
    "  uno" "dos" "tres"
    "cuatro" "cinco";
  @media (mix-width: 780px) {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px;
    grid-template-rows: 1fr 1fr;
    grid-gap: 35px;
    grid-template-areas:
      "dos dos dos tres tres uno uno uno"
      "cuatro cuatro cuatro cinco cinco seis seis seis";
  }
`;
export const Li = styled.li`
  grid-area: ${(props) => `${props.id}`};
`;