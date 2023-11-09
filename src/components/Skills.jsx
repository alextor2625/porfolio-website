import reactLogo from "../assets/logos/reactLogo.png";
// import expressjsLogo from "../assets/logos/expressjsLogo.png";
import nodeJSLogo from "../assets/logos/nodeJSLogo.png";
import JavaScriptLogo from "../assets/logos/JavaScriptLogo.png";
import MongoDBLogo from "../assets/logos/MongoDBLogo.png";
import PythonLogo from "../assets/logos/PythonLogo.png";


const Skills = () => {
  return (
    <div id="Skills">
      <div style={{ marginLeft: "50px" }} data-aos="fade-down">
          <h2 className="title-h2">Skills</h2>
      </div>
      <div className="center-list-container">
        <ul className="no-list-decoration grid-list">
          <li className="logos-skill">
            <div className="container-skill glowing-image-reactLogo" data-aos="zoom-in">
              <img
                src={reactLogo}
                alt="react logo"
                className="rotate"
                id="reactLogo"
              />
              <span id="react-title">
                <strong>React JS</strong>
              </span>
            </div>
          </li>
          <li className="logos-skill">
            <div className="container-skill" data-aos="zoom-out">
              {/* <img src={expressjsLogo} alt="expressjs logo" className='glowing-image-expressLogo' id='expressjsLogo'/> */}
              <div id="expressjsLogo" className="glowing-image-expressLogo">
                <p>Express</p>
              </div>
            </div>
          </li>
          <li className="logos-skill">
            <div className="container-skill" data-aos="zoom-in">
              <img
                src={nodeJSLogo}
                alt="nodeJS logo"
                className="glowing-image-nodeJSLogo"
                id="nodeJSLogo"
              />
            </div>
          </li>
          <li className="logos-skill">
            <div className="container-skill" data-aos="zoom-in">
              <img
                src={JavaScriptLogo}
                alt="JavaScript logo"
                className="glowing-image-JavaScriptLogo"
                id="JavaScriptLogo"
              />
            </div>
          </li>
          <li className="logos-skill">
            <div className="container-skill" data-aos="zoom-out">
              <img
                src={MongoDBLogo}
                alt="MongoDB logo"
                className="glowing-image-MongoDBLogo"
                id="MongoDBLogo"
              />
            </div>
          </li>
          <li className="logos-skill">
            <div className="container-skill" data-aos="zoom-in">
              <img
                src={PythonLogo}
                alt="Python logo"
                className="glowing-image-PythonLogo"
                id="PythonLogo"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
