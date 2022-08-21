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
        <img src={project.img} />
        <p className="used_skills-text">Used Skills : {project.build_stack}</p>
      </div>
    </div>
  );
};

export default ProjectContent;
