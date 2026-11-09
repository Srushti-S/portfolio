import "./styles/Work.css";
import WorkCard from "./WorkCard";
import { projects } from "../data/portfolio";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-heading">Projects</h2>
        <div className="work-heading-line" />
        <div className="work-grid">
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
