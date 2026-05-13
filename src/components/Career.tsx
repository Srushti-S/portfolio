import "./styles/Career.css";
import { experience } from "../data/portfolio";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">

        { }
        <h2>My <span>Experience</span></h2>

        { }
        <div className="career-info">

          { }
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          { }
          {experience.map((job, i) => (
            <div
              className={`career-info-box ${i % 2 === 0 ? "career-box--left" : "career-box--right"}`}
              key={`${job.company}-${i}`}
            >
              { }
              <div className="career-card-content">
                <span className="career-date-pill">
                  {job.current
                    ? `${job.period.split("–")[0].trim()} – Present`
                    : job.period}
                </span>
                <h4>{job.role}</h4>
                <h5>{job.company}</h5>
                {job.location && (
                  <p className="career-location">⊙ {job.location}</p>
                )}
              </div>

              {}
              <div className="career-node-wrap">
                <div className="career-node"></div>
              </div>

              { }
              <div className="career-side-empty"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Career;
