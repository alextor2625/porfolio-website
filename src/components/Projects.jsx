import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div>
        <img src="" alt="decodeme-thumbnail" />
        <p>
          <Link to="">
              <h3>DecodeMe</h3>
              ====Description====
          </Link>
        </p>
      </div>
      <div>
        <img src="" alt="motekRewards-thumbnail" />
        <p>
          <Link to="">
              <h3>MotekRewards</h3>
              ====Description====
          </Link>
        </p>
      </div>
      <div>
        <img src="" alt="cookbook-thumbnail" />
        <p>
          <Link to="">
              <h3>CookBook</h3>
              ====Description====
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
