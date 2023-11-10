import decodemeThumbnail from "../assets/thumbnails/DecodeMeThumbnail.gif";
import MotekRewardsThumbnail from "../assets/thumbnails/MotekRewardsThumbnail.gif";
import CookBookThumbnail from "../assets/thumbnails/CookBookThumbnail.png";

const Projects = () => {
  return (
    <div id="Projects">
      <h2 className="title-h2" data-aos="fade-down">
        Projects
      </h2>
      <div id="CookBook" className="project" data-aos="fade-left">
        <div className="project-box">
          <a
            href="https://cookbookrecipe.netlify.app"
            className="project-container"
          >
            <div>
              <div className="project-title-container">
                <h3>CookBook</h3>
              </div>
              <img
                src={CookBookThumbnail}
                alt="cookbook-thumbnail"
                className="thumbnail"
              />
            </div>
            <span className="description">
              Full-stack web application that allows users to create, manage,
              share, and review other people's cooking recipes. This web app was
              developed using React , NodeJs, Express, Vite and JavaScript.
            </span>
          </a>
        </div>
      </div>

      <div id="MotekRewards" className="project" data-aos="fade-right">
        <div className="project-box">
          <a
            href="https://motekrewards.adaptable.app"
            className="project-container"
          >
            <div className="project-title-container">
              <h3>Motek Rewards</h3>
            </div>
            <span className="description">
              Web Page that adds a rewards feature to Motek Cafe's website based
              on how much you eat in the restaurant. This project was developed
              using NodeJs, Express, JavaScript, HTML5 and Handlebars.
            </span>
            <img
              src={MotekRewardsThumbnail}
              alt="motekRewards-thumbnail"
              className="thumbnail"
            />
          </a>
        </div>
      </div>
      <div id="DecodeMe" className="project" data-aos="fade-left">
        <div className="project-box">
          <a
            href="https://alextor2625.github.io/decodeme"
            className="project-container"
          >
            <div>
              <div className="project-title-container">
                <h3>DecodeMe</h3>
              </div>
              <img
                src={decodemeThumbnail}
                alt="decodeme-thumbnail"
                className="thumbnail"
              />
            </div>
            <span className="description">
              Implementation of Caesar Cipher as a browser web game using DOM
              manipulation with JavaScript. The goal of the game is to decrypt
              at least 5 words before the timer runs out, you lose if you submit
              3 incorrect answers or if the timer runs out before you complete 5
              words.
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
