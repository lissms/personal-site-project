import React from "react";
import Header from "./component/header/Header";
import Skills from "./component/skills/Skills";
import languages from "./data/data";

function App() {
  return (
    <>
      <Header />
      <Skills data={languages} />
    </>
  );
}
console.log("data.languges", languages);
export default App;
