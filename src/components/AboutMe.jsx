import { resumeLink } from "../services/ExternalLinks";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <h2 className="title-h2" data-aos="fade-down">
        About Me
      </h2>
      <p data-aos="zoom-out">
        Full Stack Web Developer with a solid background in computer science. I
        have a BS in computer science with a minor in cybersecurity. I thrive on
        self-improvement and actively seek opportunities to broaden my abilities
        and knowledge. I consider myself a calm problem solver who works well in
        collaborative team settings as well as on my own. When given a
        challenge, I give it my all.
      </p>
      <div className="button-container" data-aos="zoom-in">
        <a href={resumeLink} id="Resume-Button">
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
