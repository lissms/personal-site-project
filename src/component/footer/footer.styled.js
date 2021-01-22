import styled from "styled-components";

export const FooterDiv = styled.div`
  height: 156px;
  background: #2f4858;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Date = styled.p`
  font-family: Gugi;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #ffffff;
`;
