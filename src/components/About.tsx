import "./styles/About.css";
import { personal, stats } from "../data/portfolio";

const About = () => {
  const paragraphs = Array.isArray(personal.bio) ? personal.bio : [personal.bio];
  const [lead, ...rest] = paragraphs;

  return (
    <div className="about-section" id="about">
      <div className="about-photo-col">
        <div className="about-photo-frame">
          <img
            src="/images/photo.jpg"
            alt="Srushti Sonavane"
            className="about-photo-img"
            onError={(e) => {
              (e.target as HTMLImageElement).parentElement!.style.opacity = "0";
            }}
          />
        </div>
      </div>

      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{lead}</p>
        {rest.map((text) => (
          <p className="para para-sub" key={text.slice(0, 24)}>
            {text}
          </p>
        ))}
        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <span className="about-stat-number">
                {stat.number}
                {stat.suffix}
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
