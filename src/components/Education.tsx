import "./styles/Education.css";
import { education } from "../data/portfolio";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>My <span>Education</span></h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div className="education-card" key={edu.school}>
              <div className="education-top">
                <span className="education-badge">{edu.badge}</span>
              </div>
              <h4>{edu.degree}</h4>
              <h5>{edu.school}</h5>
              <p className="education-meta">
                {edu.location} · {edu.period}
              </p>
              <div className="education-coursework">
                {edu.coursework.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
