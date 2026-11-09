import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import "./styles/ResumeButton.css";

const ResumeButton = () => {
  return (
    <div className="icons-section">
      <a className="resume-button" href="/resume.pdf" target="_blank" rel="noreferrer" data-cursor="disable">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default ResumeButton;
