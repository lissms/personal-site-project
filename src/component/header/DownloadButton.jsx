import React from "react";
import { ButtonContainer } from "./downloadButton.styled";
import downloadIcon from "./../../images/download-icon.png";

function DownloadButton() {
  return (
    <ButtonContainer>
      <img src={downloadIcon} alt="download icon" />
      <a
        href={"https://lissa.website/static/media/Frontend_Developer-CV_Lissandra_Mendez_Sanchez.c78bf52a.pdf"}
        target="_blank"
      >
        Download my CV
      </a>
    </ButtonContainer>
  );
}

DownloadButton.propTypes = {};

export default DownloadButton;
