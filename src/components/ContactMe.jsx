import linkedinLogo from "../assets/logos/linkedinLogo.png";
import gmailLogo from "../assets/logos/gmailLogo.png";
import { gmailLink, linkedInLink } from "../services/ExternalLinks";
const ContactMe = () => {
    

  return (
    <div id="ContactMe">
      <h1 data-aos="fade-down">Contact Me</h1>
      <div className="logos">
        <div className="container">
          <a
            href={linkedInLink}
            data-aos="zoom-out"
          >
            <img src={linkedinLogo} id="linkedinLogo" alt="LinkedIn Logo" />
          </a>
          <a href={gmailLink} data-aos="zoom-in">
            <img src={gmailLogo} id="gmailLogo" alt="Email Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;