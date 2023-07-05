import { ProjectList } from "../helpers/ProjectList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
                    navigate("/projects/" + project.id, {
                      state: {
                        project,
                      },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <LazyLoadImage
                    effect="blur"
                    src={project.img}
                    alt="project_image"
                  />

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
