import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <div className="center">
      <div className="component">
        <Navbar />
      </div>
      <div className="component">
        <Home />
      </div>
      <div className="component">
        <AboutMe />
      </div>
      <div className="component">
        <Skills />
      </div>
      <div className="component">
        <Projects />
      </div>
    </div>
  );
}

export default App;
