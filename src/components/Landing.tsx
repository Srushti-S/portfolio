import { Fragment } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { personal } from "../data/portfolio";
import RunPanel from "./RunPanel";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="hero-copy">
          <div className="hero-status">
            <img
              className="hero-avatar"
              src="/images/photo.jpg"
              alt={personal.name}
              width={52}
              height={52}
            />
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              {personal.openTo}
            </span>
          </div>

          <h1 className="hero-name">{personal.name}</h1>
          <p className="hero-role">
            {personal.role.split(" · ").map((part, i, parts) => (
              <Fragment key={part}>
                <span className="hero-role-part">
                  {part}
                  {i < parts.length - 1 && " ·"}
                </span>
                {i < parts.length - 1 && " "}
              </Fragment>
            ))}
          </p>
          <p className="hero-pitch">{personal.pitch}</p>
          <p className="hero-now">{personal.now}</p>

          <div className="hero-ctas">
            <a
              className="hero-btn hero-btn--primary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              View resume
            </a>
            <a className="hero-btn" href="#contact" data-cursor="disable">
              Get in touch
            </a>
            <div className="hero-socials">
              <a
                className="hero-icon"
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-cursor="disable"
              >
                <FaGithub />
              </a>
              <a
                className="hero-icon"
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor="disable"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-demo">
          <RunPanel />
        </div>
      </div>
    </div>
  );
};

export default Landing;
