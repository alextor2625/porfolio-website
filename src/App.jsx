import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease'
})


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
      <div className="component">
        <ContactMe />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
