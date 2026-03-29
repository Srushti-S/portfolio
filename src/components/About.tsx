import "./styles/About.css";
import { personal } from "../data/portfolio";

const About = () => {
  const bio = Array.isArray(personal.bio)
    ? (personal.bio as string[])[0]
    : (personal.bio as string);

  return (
    <div className="about-section" id="about">
      {/* Photo — fixed left, same as how Moncy's character sits */}
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

      {/* Text — right side */}
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{bio}</p>
      </div>
    </div>
  );
};

export default About;
