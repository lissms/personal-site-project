import cssGreenLogo from "../../src/images/css-green.jpg";
import cssLogo from "../../src/images/css.jpg";
import htmlLogo from "../../src/images/html.jpg";
import htmlGreenLogo from "../../src/images/html-green.jpg";
import jsLogo from "../../src/images/js.jpg";
import jsGreenLogo from "../../src/images/js-green.jpg";
import reactLogo from "../../src/images/react.jpg";
import reactGreenLogo from "../../src/images/react-green.jpg";
import sassLogo from "../../src/images/sass.jpg";
import sassGreenLogo from "../../src/images/sass-green.jpg";

const languages = [
  {
    name: "css3",
    greenImageTechnologie: cssGreenLogo,
    imgeTechnologie: cssLogo,
    level: "junior",
    id: "css1",
  },
  {
    name: "html5",
    greenImageTechnologie: htmlGreenLogo,
    imgeTechnologie: htmlLogo,
    level: "junior",
    id: "html2",
  },
  {
    name: "javascript",
    greenImageTechnologie: jsGreenLogo,
    imgeTechnologie: jsLogo,
    level: "junior",
    id: "Javascript3" /* funcion para poner id, nombre+numero mas 1 */,
  },
];

const libraries = [
  {
    name: "react",
    greenImageTechnologie: reactGreenLogo,
    imgeTechnologie: reactLogo,
    level: "junior",
    id: "react",
  },
  {
    name: "styled-component",
    greenImageTechnologie: htmlGreenLogo,
    imgeTechnologie: htmlLogo,
    level: "junior",
    id: "styled-component2",
  },
  {
    name: "sass",
    greenImageTechnologie: sassGreenLogo,
    imgeTechnologie: sassLogo,
    level: "junior",
    id: "sass3" /* funcion para poner id, nombre+numero mas 1 */,
  },
  {
    name: "redux",
    greenImageTechnologie: htmlGreenLogo,
    imgeTechnologie: htmlLogo,
    level: "learning",
    id: "redux2",
  },
];
export default {
  languages: languages,
  libraries: libraries,
};
