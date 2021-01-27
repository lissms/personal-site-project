import React from "react";
import { ButtonContainer } from "./downloadButton.styled";
import downloadIcon from "./../../images/download-icon.png";
import pdf from "./../../Frontend_Developer-CV_Lissandra_Mendez_Sanchez.pdf";

function DownloadButton() {
  return (
    <ButtonContainer>
      <img src={downloadIcon} alt="download icon" />
      <a href={pdf} target="_blank">
        Download my CV
      </a>
    </ButtonContainer>
  );
}

DownloadButton.propTypes = {};

export default DownloadButton;
