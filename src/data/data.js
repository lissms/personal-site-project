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
import styledComponentsLogo from "../../src/images/styled-components.jpg";
import styledComponentsGreenLogo from "../../src/images/styled-components-green.jpg";
import habana from "../../src/images/habana.jpg";
import university from "../../src/images/university-min.jpg";
import recherche from "../../src/images/lab-min.jpg";
import lyon from "../../src/images/lyon-min.jpg";
import madrid from "../../src/images/madrid-min.jpg";
import adalab from "../../src/images/adalab-min.jpg";
import series from "../../src/images/series.jpg";
import rickAndMorty from "../../src/images/rick-and-morty.jpg";
import myFirsGameByJs from "../../src/images/my-firs-game.jpg";
import myWebsite from "../../src/images/my-website.jpg";
import github from "../../src/images/github.png";
import profileCard from "../../src/images/profile-cards.jpg";

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
    greenImageTechnologie: styledComponentsGreenLogo,
    imgeTechnologie: styledComponentsLogo,
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
const aboutMeData = [
  {
    name: "Cuba",
    img: habana,
  },
  {
    name: "University",
    img: university,
  },
  {
    name: "Recherche",
    img: recherche,
  },
  {
    name: "Lyon",
    img: lyon,
  },
  {
    name: "Madrid",
    img: madrid,
  },
  {
    name: "Adalab",
    img: adalab,
  },
];

const myWorks = [
  {
    name: "My personal web site, you are here",
    img: myWebsite,
    urlGithub: "https://github.com/lissms/personal-site-project",
    icoGithub: github,
    id: "uno",
    web: "web site",
    urlweb: "https://lissa.website/",
  },
  {
    name: "My first game with JS",
    img: myFirsGameByJs,
    urlGithub: "https://github.com/lissms/my-firs-game-by-js",
    icoGithub: github,
    id: "dos",
    web: "web app",
    urlweb: "https://lissms.github.io/my-firs-game-by-js/",
  },
  {
    name: "Buscador de series",
    img: series,
    urlGithub: "https://github.com/lissms/modulo-2-evaluacion-final-lissms",
    icoGithub: github,
    id: "tres",
    web: "web app",
    urlweb: "https://beta.adalab.es/modulo-2-evaluacion-final-lissms/",
  },
  {
    name: "Rick and morty",
    img: rickAndMorty,
    urlGithub: "https://github.com/lissms/modulo-3-evaluacion-final-lissms",
    icoGithub: github,
    id: "cuatro",
    web: "web app",
    urlweb: "https://lissms.github.io/modulo-3-evaluacion-final-lissms/#/",
  },
  {
    name: "Profile Card",
    img: profileCard,
    urlGithub: "https://github.com/Adalab/project-promo-k-module-3-team-7",
    icoGithub: github,
    id: "cinco",
    web: "web app",
    urlweb: "https://beta.adalab.es/project-promo-k-module-3-team-7/#/",
  },
];

export default {
  languages: languages,
  libraries: libraries,
  aboutMeData: aboutMeData,
  myWorks: myWorks,
};
