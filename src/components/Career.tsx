import "./styles/Career.css";
import { experience } from "../data/portfolio";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">

        {/* Heading — sits ABOVE .career-info, so line never overlaps it */}
        <h2>My <span>Experience</span></h2>

        {/* .career-info has position:relative — timeline anchors here */}
        <div className="career-info">

          {/* Timeline line + glowing dot — positioned absolute inside .career-info */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Alternating cards */}
          {experience.map((job, i) => (
            <div
              className={`career-info-box ${i % 2 === 0 ? "career-box--left" : "career-box--right"}`}
              key={`${job.company}-${i}`}
            >
              {/* Card content */}
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

              {/* Center node connector */}
              <div className="career-node-wrap">
                <div className="career-node"></div>
              </div>

              {/* Empty spacer on the other side */}
              <div className="career-side-empty"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Career;
