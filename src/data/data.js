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
import reduxGreenLogo from "../../src/images/redux-green.jpg";
import reduxLogo from "../../src/images/redux.jpg";
import reactRouterLogo from "../images/react-router.jpg";
import reactRouterLogoGreen from "../images/react-router-green.jpg";
import styledComponentsLogo from "../../src/images/styled-components.jpg";
import styledComponentsGreenLogo from "../../src/images/styled-components-green.jpg";
import gitGreenLogo from "../../src/images/git-green.jpg";
import gitLogo from "../../src/images/git.jpg";
import habana from "../../src/images/habana.jpg";
import university from "../../src/images/university-min.jpg";
import research from "../../src/images/lab-min.jpg";
import lyon from "../../src/images/lyon-min.jpg";
import madrid from "../../src/images/madrid-min.jpg";
import adalab from "../../src/images/adalab-min.jpg";
import series from "../../src/images/series.jpg";
import rickAndMorty from "../../src/images/rick-and-morty.jpg";
import myFirsGameByJs from "../../src/images/my-firs-game.jpg";
import myWebsite from "../../src/images/my-website.jpg";
import github from "../../src/images/github.png";
import profileCard from "../../src/images/profile-cards.jpg";
import nodeLogo from "../../src/images/node.jpg";
import nodeLogoGreen from "../../src/images/nodejs-green.jpg";
import number from "../../src/images/number.jpg";

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
    id: "Javascript3",
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
    name: "styled-components",
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
    id: "sass3",
  },
  {
    name: "react-router",
    greenImageTechnologie: reactRouterLogoGreen,
    imgeTechnologie: reactRouterLogo,
    level: "junior",
    id: "react-router4",
  },
  {
    name: "redux",
    greenImageTechnologie: reduxGreenLogo,
    imgeTechnologie: reduxLogo,
    level: "learning",
    id: "redux5",
  },
];
const others = [
  {
    name: "git",
    greenImageTechnologie: gitGreenLogo,
    imgeTechnologie: gitLogo,
    level: "junior",
    id: "react",
  },
  {
    name: "nodejs",
    greenImageTechnologie: nodeLogoGreen,
    imgeTechnologie: nodeLogo,
    level: "learning",
    id: "styled-component2",
  },
];
const aboutMeData = [
  {
    name: "Cuba",
    img: habana,
    message: "My beautiful island. I’m Cuban and I love to dance, specially Salsa. ",
  },
  {
    name: "University",
    img: university,
    message: "I studied Microbiology at the University of Havana. ",
  },
  {
    name: "Research",
    img: research,
    message:
      "My first passion. I was part of a research project team looking to find a vaccine that would prevent cancer. ",
  },
  {
    name: "Lyon",
    img: lyon,
    message: "The second most beautiful city of France. I lived here and fall in love with the French language",
  },
  {
    name: "Madrid",
    img: madrid,
    message: "Where the sun is as bright as in Cuba. I live here",
  },
  {
    name: "Adalab",
    img: adalab,
    message: "Here I found my new passion, Frontend Development",
  },
];

const myWorks = [
  {
    name: "My personal website",
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
    urlweb: "https://lissms.github.io/modulo-2-evaluacion-final-lissms/.",
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
    urlweb: "http://bmatillavaras.github.io/project-promo-k-module-3-team-7/",
  },
  {
    name: "Adivina el número",
    img: number,
    urlGithub: "https://github.com/lissms/modulo-2-evaluacion-intermedia-lissms",
    icoGithub: github,
    id: "seis",
    web: "web app",
    urlweb: "http://lissms.github.io/modulo-2-evaluacion-intermedia-lissms/",
  },
];

export default {
  languages: languages,
  libraries: libraries,
  others: others,
  aboutMeData: aboutMeData,
  myWorks: myWorks,
};
