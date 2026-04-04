import "./styles/Work.css";
import WorkCard from "./WorkCard";
import { projects } from "../data/portfolio";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-heading">Projects</h2>
        <div className="work-heading-line" />
        <p className="work-subtitle">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
        <div className="work-grid">
          {projects.map((project, index) => (
            <WorkCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack ?? []}
              github={project.github}
              live={project.live}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;