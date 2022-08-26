import { ProjectList } from "../helpers/ProjectList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="projects">
          <h1 className="title title-black">
            <span>Projects</span>
          </h1>
          <ul className="items">
            {ProjectList.map((project, idx) => {
              return (
                <motion.li
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
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
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
