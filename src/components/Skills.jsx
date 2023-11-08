import reactLogo from '../assets/logos/reactLogo.png'
import expressjsLogo from '../assets/logos/expressjsLogo.png'
import nodeJSLogo from '../assets/logos/nodeJSLogo.png'
import JavaScriptLogo from '../assets/logos/JavaScriptLogo.png'
import MongoDBLogo from '../assets/logos/MongoDBLogo.png'
import PythonLogo from '../assets/logos/PythonLogo.png'

const Skills = () => {
  return (
    <div id="Skills">
      <h2>Skills</h2>
      <ul className="no-list-decoration">
        <li className='logos-skill'>
          <div className='container-skill'>
            <img src={reactLogo} alt="react logo" className='rotate glowing-image' id='reactLogo'/>
            <span><strong>React JS</strong></span>
          </div>
        </li>
        <li className='logos-skill'>
        <div className='container-skill'>
            <img src={expressjsLogo} alt="expressjs logo" className='glowing-image-expressLogo' id='expressjsLogo'/>
          </div>
        </li>
        <li className='logos-skill'>
        <div className='container-skill'>
            <img src={nodeJSLogo} alt="nodeJS logo" className='glowing-image-nodeJSLogo' id='nodeJSLogo'/>
          </div>
        </li>
        <li className='logos-skill'>
        <div className='container-skill'>
            <img src={JavaScriptLogo} alt="JavaScript logo" className='glowing-image-JavaScriptLogo' id='JavaScriptLogo'/>
          </div>
        </li>
        <li className='logos-skill'>
        <div className='container-skill'>
            <img src={MongoDBLogo} alt="MongoDB logo" className='glowing-image-MongoDBLogo' id='MongoDBLogo'/>
          </div>
        </li>
        <li className='logos-skill'>
        <div className='container-skill'>
            <img src={PythonLogo} alt="Python logo" className='glowing-image-PythonLogo' id='PythonLogo'/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
