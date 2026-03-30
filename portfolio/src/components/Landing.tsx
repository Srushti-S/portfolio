import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* Left block */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            {/*
              Two separate h1s — one per name line.
              initialFX targets .landing-intro h1 which selects BOTH,
              each with its own textContent, so splitChars works correctly
              and the line break is preserved naturally.
            */}
            <h1 className="name-line">SRUSHTI</h1>
            <h1 className="name-line">SONAVANE</h1>
          </div>

          {/* Right block — role cycling text */}
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
              <div className="landing-h2-2">Builder</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Builder</div>
            </h2>
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;
