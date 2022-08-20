import clink from "../assets/img/clink.png";
import wcd from "../assets/img/world_countries_data.png";
import first_portfolio from "../assets/img/first_portfolio.png";
import memory_strike from "../assets/img/memorystrike.png";
import wedding_invitation from "../assets/img/wedding_invitation.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects">
          <h1 className="title title-black">
            <span>Projects</span>
          </h1>
          <ul className="items">
            <li>
              <img src={clink} />
              <div className="inner-text">
                <h2>clnk - 버즈비터즈</h2>
              </div>
            </li>
            <li>
              <img src={wcd} />
              <div className="inner-text">
                <h2>World Countries Data</h2>
              </div>
            </li>
            <li>
              <img src={first_portfolio} />
              <div className="inner-text">
                <h2>첫 포트폴리오</h2>
              </div>
            </li>
            <li>
              <img src={memory_strike} />
              <div className="inner-text">
                <h2>Memory Strike</h2>
              </div>
            </li>
            <li>
              <img src={wedding_invitation} />
              <div className="inner-text">
                <h2>Mobile Wedding Invitation</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
