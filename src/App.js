import logo from "./logo.svg";
import "./App.css";
import cv from "./Frontend_Developer-CV_Lissandra_Mendez_Sanchez.pdf";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My personal website</h1>
      <a href={cv} target="_blank">
        Download my CV
      </a>
      <h2>Coming soon!</h2>
    </div>
  );
}

export default App;
