import React from "react";
import SectionAboutMe from "./component/about-me/SectionAboutMe";
import Header from "./component/header/Header";
import MyWorks from "./component/my-works/MyWorks";
import Skills from "./component/skills/Skills";
import data from "./data/data";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Skills data={data} />
      <SectionAboutMe data={data} />
      <MyWorks data={data} />
      <Contact />
      <Footer />
    </>
  );
}
console.log("data.languges", data);
export default App;
