import styled from "styled-components";
import coverLink from "../../images/linkedin.png";
import image from "../../images/20201107_113153.jpg";

export const CoverPhotoLn = styled.div`
  height: 112px;
  background-image: url(${coverLink});
  background-size: cover;
  border-radius: 4px 4px 0 0;
`;
export const ImgLinkdnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImgLinkdn = styled.div`
  border: 8px solid #21687c;
  border-radius: 200px;
  width: 120px;
  height: 120px;
  background-image: url(${image});
  background-size: cover;
  background-position: 120px -20px;
  position: absolute;
  bottom: -50%;
`;
export const ContainerImgAndCover = styled.div`
  position: relative;
`;
export const ContainerLinkdn = styled.div`
  background: #21687c;
  border-radius: 4px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileLink = styled.div`
  width: 100%;
  background: #21687c;
  border-radius: 4px;
  padding: 0;
  @media (min-width: 768px) {
    width: 45%;
    margin-left: 10px;
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
  letter-spacing: 2px;
  color: #ffffff;
  margin: 0 0 16px 0;
`;
export const University = styled.p`
  font-family: Roboto;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  margin: 0;
  padding: 0;
`;
export const ContainerSection = styled.div`
  background: linear-gradient(79.06deg, #76f09b 0.81%, #073cb4 125.73%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 64px 32px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    padding: 64px 124px;
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
  margin-top: 16px;
`;
export const LinkedinLogo = styled.img`
  width: 116px;
  height: 64px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
  width: 100%;

  @media (min-width: 480px) {
    width: 45%;
    margin-top: 0;
  }
`;
export const NameEmail = styled.input`
  width: 100%;
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
  margin-bottom: 12px;
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
`;
export const Messsage = styled.textarea`
  width: 100%;
  height: 267px;
  background: #f4f4f4;
  border: 2px solid #21687c;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Gugi;
  font-size: 17px;
  line-height: 21px;
  padding: 25px;
  margin-bottom: 12px;

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
`;
export const Btn = styled.input`
  width: 100%;
  height: 48px;
  background: #76f09b;
  border-radius: 4px;
  font-family: Gugi;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  color: #21687c;
  border: none;
  -webkit-appearance: none;
  -webkit-border-radius: none;
`;
