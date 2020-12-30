import React from "react";
import SectionAboutMe from "./component/about-me/SectionAboutMe";
import Header from "./component/header/Header";
import Skills from "./component/skills/Skills";
import data from "./data/data";

function App() {
  return (
    <>
      <Header />
      <Skills data={data} />
      <SectionAboutMe data={data} />
    </>
  );
}
console.log("data.languges", data);
export default App;
