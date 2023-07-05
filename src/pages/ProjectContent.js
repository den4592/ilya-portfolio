import { TiArrowBack } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectContent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/projects");
  };

  return (
    <motion.div
      className="project-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container">
        <span className="back-btn" onClick={navigateBack}>
          <TiArrowBack />
        </span>
        {state && (
          <>
            <h1 className="title-black">{state.project.title}</h1>
            <div className="project-container">
              <img src={state.project.img} />
              <div className="used_skills-text">
                {state.project.build_stack.map((item, idx) => {
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
                {state.project.text}
              </p>
              <a href={state.project.link} target="_blank">
                <button type="button" className="link-btn">
                  See Live
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectContent;
