import "./styles/Publications.css";
import { publications, artifacts } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";

const Publications = () => {
  return (
    <div className="pubs-section section-container" id="publications">
      <div className="pubs-container">
        <h2>
          Research &amp; <span>Publications</span>
        </h2>
        <div className="pubs-grid">
          {publications.map((pub) => (
            <a
              className="pub-card"
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              key={pub.link}
              data-cursor="disable"
            >
              <div className="pub-top">
                <span className="pub-credit">{pub.credit}</span>
                <span className="pub-venue">
                  {pub.venue} · {pub.year}
                </span>
              </div>
              <h4>
                {pub.title}
                <MdArrowOutward className="pub-arrow" />
              </h4>
            </a>
          ))}
        </div>
        <div className="pubs-artifacts">
          {artifacts.map((artifact) => (
            <a
              href={artifact.link}
              target="_blank"
              rel="noreferrer"
              key={artifact.link}
              data-cursor="disable"
            >
              {artifact.label} <MdArrowOutward />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
