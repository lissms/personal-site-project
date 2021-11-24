import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 35px;
  grid-template-areas:
    "  uno" "dos" "tres"
    "cuatro" "cinco" "seis" "siete";

  @media all and (min-width: 1200px) {
   display: none;
  }
  
`;
export const Li = styled.li`
  grid-area: ${(props) => `${props.id}`};
`;
