import decodemeThumbnail from "../assets/thumbnails/DecodeMeThumbnail.gif";
import MotekRewardsThumbnail from "../assets/thumbnails/MotekRewardsThumbnail.gif";
import CookBookThumbnail from "../assets/thumbnails/CookBookThumbnail.png";
const Projects = () => {
  return (
    <div id="Projects">
      <h2 className="title-h2">Projects</h2>
      <div id="DecodeMe">
        <div>
          <a href="https://alextor2625.github.io/decodeme/">
            <div className="project-title-container">
              <h3 className="project-title">DecodeMe</h3>
            </div>
            <img
              src={decodemeThumbnail}
              alt="decodeme-thumbnail"
              className="thumbnail"
            />
          </a>
          <p className="description">
            Implementation of the Caesar Cipher as a browser web game.
          </p>
        </div>
      </div>
      <div id="MotekRewards">
        <div>
          <a href="https://motekrewards.adaptable.app">
            <div className="project-title-container">
              <h3 className="project-title">Motek Rewards</h3>
            </div>
            <img
              src={MotekRewardsThumbnail}
              alt="motekRewards-thumbnail"
              className="thumbnail"
            />
          </a>
          <p className="description">
            IronHack project Webdev and UX/UI classes working together.
          </p>
        </div>
      </div>
      <div id="CookBook">
        <div>
          <a href="https://cookbookrecipe.netlify.app">
            <div className="project-title-container">
              <h3 className="project-title">CookBook</h3>
            </div>
            <img
              src={CookBookThumbnail}
              alt="cookbook-thumbnail"
              className="thumbnail"
            />
          </a>
          <p className="description">
            Ironhack React Project, this app a Cookbook webapp. Allows users to
            add cooking recipes into their cookbooks either by adding their own
            recipe manually or adding other's recipes. This is the Frontend of
            the webapp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
