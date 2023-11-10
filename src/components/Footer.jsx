import githubLogo from "../assets/logos/githubLogo.png";
import linkedinLogo from "../assets/logos/linkedinLogo.png";
import gmailLogo from "../assets/logos/gmailLogo.png";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <footer>
      <p>
        <TypeAnimation
          sequence={[
            "Built",
            500,
            "And",
            500,
            "Designed",
            500,
            "By",
            500,
            "Alexander Torres Rivera",
            2000,
          ]}
          speed={70}
        //   cursor= {false}
          // style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </p>
      {/* <p>Built and Designed by Alexander Torres</p> */}
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
      <div className="button-container-footer" data-aos="zoom-in">
        <a href="https://drive.google.com/file/d/1-70uIPMn-P89CUOD8n5Wt_5tl_8-drCo/view?usp=sharing" id="Resume-Button-Footer">
          <span>Resume</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
