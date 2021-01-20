import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: rgba(118, 240, 155, 0.6);
  width: 70px;
  height: 70px;
  border-radius: 40px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  transition: width 0.5s ease-in-out;
  z-index: 1;
  transform: scale(0.7);

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    z-index: 2;
    transition: transform 1s ease 0.5s;
  }

  @media (min-width: 480px) {
    bottom: 24px;
    right: 24px;
    transform: scale(1);
  }

  &:hover {
    width: 232px;
  }

  &:hover::before {
    transform: translateX(-100%);
  }

  & img {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  & a {
    color: #1c2ed7;
    opacity: 0;
    font-family: "Gugi";
    position: absolute;
    top: 24px;
    right: 22px;
    font-size: 18px;
    transition: opacity 0s ease-in 0.2s;
    text-decoration: none;
    @media (min-width: 1200px) {
      bottom: 24px;
      right: 24px;
      transform: scale(1);
    }
  }

  &:hover a {
    opacity: 1;
    transition: opacity 0.5s ease-out 0.2s;
  }
`;
