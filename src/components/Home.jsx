import githubLogo from "../assets/logos/githubLogo.png";
import linkedinLogo from "../assets/logos/linkedinLogo.png";
import gmailLogo from "../assets/logos/gmailLogo.png";


const Home = () => {
  return (
    <div id="Home" className="component">
      <img src="" alt="myImage" />
      <h1>Alexander Torres</h1>
      <p>
        Full Stack Developer - React | Express | NodeJs | JavaScript | MongoDB |
        Python
      </p>
      <div className="logos">
        <div className="container">
          <a href="https://github.com/alextor2625">
          <img src={githubLogo} id="githubLogo" alt="Github Logo" />
          </a>
          <a href="https://www.linkedin.com/in/alexandertorresrivera/">
          <img src={linkedinLogo} id="linkedinLogo" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:alextor2625@gmail.com">
          <img src={gmailLogo} id="gmailLogo" alt="Email Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
