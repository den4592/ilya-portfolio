import { FiServer } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills">
          <h1 className="title-black">
            <span>Skills</span>
          </h1>
          <div className="skills__container">
            <div className="skills__container-content">
              <p className="icon black-icon">
                <RiComputerLine />
              </p>
              <p className="content-title">Front-end.</p>
              <ul className="skills-text blue-text">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript(ES6+)</li>
                <li>React</li>
                <li>Sass</li>
              </ul>
            </div>
            <div className="skills__container-content">
              <p className="icon mint-icon">
                <FiServer />
              </p>
              <p className="content-title">Back-end.</p>
              <ul className="skills-text mint-text">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="skills__container-content">
              <p className="icon black-icon">
                <AiOutlineSetting />
              </p>
              <p className="content-title">Etc.</p>
              <ul className="skills-text blue-text">
                <li>Git</li>
                <li>Github</li>
                <li>Slack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
