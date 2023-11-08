import decodemeThumbnail from "../assets/thumbnails/DecodeMeThumbnail.gif";
import MotekRewardsThumbnail from "../assets/thumbnails/MotekRewardsThumbnail.gif";
import CookBookThumbnail from "../assets/thumbnails/CookBookThumbnail.png";

const Projects = () => {
  return (
    <div id="Projects">
      <h2 className="title-h2" data-aos="fade-down">Projects</h2>
      <div id="DecodeMe" className="project">
        <div className="project-box" data-aos="fade-left">
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
      <div id="MotekRewards" className="project">
        <div className="project-box" data-aos="fade-right">
          <a
            href="https://motekrewards.adaptable.app"
            className="project-container"
          >
            <div className="project-title-container">
              <h3>Motek Rewards</h3>
            </div>
            <span className="description">
              IronHack project Webdev and UX/UI classes working together.
            </span>
            <img
              src={MotekRewardsThumbnail}
              alt="motekRewards-thumbnail"
              className="thumbnail"
            />
          </a>
        </div>
      </div>
      <div id="CookBook" className="project" data-aos="fade-left">
  <div className="project-box">
    <a href="https://cookbookrecipe.netlify.app" className="project-container">
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
        Ironhack React Project, this app is a Cookbook web app. Allows users to
        add cooking recipes into their cookbooks either by adding their own
        recipe manually or adding other's recipes.
      </span>
    </a>
  </div>
</div>
    </div>
  );
};

export default Projects;
