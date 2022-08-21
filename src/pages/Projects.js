import { ProjectList } from "../helpers/ProjectList";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects">
          <h1 className="title title-black">
            <span>Projects</span>
          </h1>
          <ul className="items">
            {ProjectList.map((project, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    navigate("/projects/" + idx);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img src={project.img} />
                  <div className="inner-text">
                    <h2>{project.title}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
