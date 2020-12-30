import React from "react";
import Header from "./component/header/Header";
import Skills from "./component/skills/Skills";
import data from "./data/data";

function App() {
  return (
    <>
      <Header />
      <Skills data={data} />
    </>
  );
}
console.log("data.languges", data);
export default App;
