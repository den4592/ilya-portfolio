import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const ProjectContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectList[id];

  const navigateBack = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-content">
      <div className="container">
        <span className="back-btn" onClick={navigateBack}>
          <TiArrowBack />
        </span>
        <h1 className="title-black">{project.title}</h1>
        <div className="project-container">
          <img src={project.img} />
          <div className="used_skills-text">
            {project.build_stack.map((item, idx) => {
              return (
                <span className="skill-item" key={idx}>
                  {item}
                </span>
              );
            })}
          </div>
          <p className="project-introduction">
            <strong>프로젝트 소개 :</strong> <br />
            <br />
            {project.text}
          </p>
          <a href={project.link} target="_blank">
            <button type="button" className="link-btn">
              See Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
