import styled from "styled-components";
import coverLink from "../../images/portadalink.jpg";
import image from "../../images/20201107_113153.jpg";

export const CoverPhotoLn = styled.div`
  height: 112px;
  background-image: url(${coverLink});
`;
export const ImgLinkdn = styled.div`
  border: 8px solid #21687c;
  border-radius: 200px;
  width: 161px;
  height: 161px;
  background-image: url(${image});
  background-size: cover;
  background-position: 168px -20px;
  position: absolute;
  top: 19px;
  left: 102px;
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    background-position: 126px -20px;
    top: 19px;
    left: 70px;
  }
`;
export const ContainerImgAndCover = styled.div`
  position: relative;
`;
export const ContainerLinkdn = styled.div`
  background: #21687c;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileLink = styled.div`
  width: 280px;
  height: 514px;
  background: #21687c;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    width: 389px;
  }
`;
export const Name = styled.p`
  font-family: Roboto;
  margin-top: 91px;
  margin-bottom: 0;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;
`;
export const FrontenDeveloper = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.14em;
  color: #ffffff;
  margin: 0;
`;
export const University = styled.p`
  font-family: Roboto;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  width: 192px;
  text-align: center;
`;
export const ContainerSection = styled.div`
  height: 684px;
  background: linear-gradient(79.06deg, #76f09b 0.81%, #073cb4 125.73%);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    height: 1000px;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const ViewProfile = styled.div`
  width: 159px;
  height: 41px;
  background: #76f09b;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkProfile = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #21687c;
`;
export const LinkedinLogo = styled.img`
  width: 116px;
  height: 64px;
`;
export const Form = styled.form`
  height: 514px;
  width: 389px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const NameEmail = styled.input`
  width: 280px;
  height: 48px;
  background: #f4f4f4;
  border: 2px solid #21687c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 25px;
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  &::-webkit-input-placeholder {
    color: #00c9b7;
  }

  &:-moz-placeholder {
    color: #00c9b7;
  }

  &::-moz-placeholder {
    color: #00c9b7;
  }

  &:-ms-input-placeholder {
    color: #00c9b7;
  }
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
`;
export const Messsage = styled.textarea`
  width: 280px;
  height: 267px;
  background: #f4f4f4;
  border: 2px solid #21687c;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Gugi;
  font-size: 17px;
  line-height: 21px;
  padding: 25px;

  &::-webkit-input-placeholder {
    color: #00c9b7;
  }

  &:-moz-placeholder {
    color: #00c9b7;
  }

  &::-moz-placeholder {
    color: #00c9b7;
  }

  &:-ms-input-placeholder {
    color: #00c9b7;
  }
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
`;
export const Btn = styled.input`
  width: 280px;
  height: 48px;
  background: #76f09b;
  border-radius: 4px;
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  color: #21687c;
  @media (max-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 388px;
  }
`;
