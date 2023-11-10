import githubLogo from "../assets/logos/githubLogo.png";
import linkedinLogo from "../assets/logos/linkedinLogo.png";
import gmailLogo from "../assets/logos/gmailLogo.png";
import myProfilePicture from "../assets/myProfilePicture.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="Home">
      <img src={myProfilePicture} alt="myImage" id="profile-image" data-aos="zoom-out"/>
      <div>
        <h1>
        <TypeAnimation
          sequence={[
            "Hi", 1000, "My Name Is",1000, "Alexander Torres Rivera"]}
          speed={10}
          // cursor= {false}
          // style={{ fontSize: "2em" }}
          // repeat={Infinity}
        />
        </h1>
      </div>
      <p>Full Stack Developer</p>
      <div className="logos">
        <div className="container">
          <a href="https://github.com/alextor2625" data-aos="zoom-in">
            <img src={githubLogo} id="githubLogo" alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandertorresrivera/"
            data-aos="zoom-out"
          >
            <img src={linkedinLogo} id="linkedinLogo" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:alextor2625@gmail.com" data-aos="zoom-in">
            <img src={gmailLogo} id="gmailLogo" alt="Email Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
