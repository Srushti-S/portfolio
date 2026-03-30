import "./styles/TechStack.css";
import { skillsRow1, skillsRow2 } from "../data/portfolio";

// A handful of items to visually highlight (filled pill)
const highlighted = new Set(["React", "Node.js", "Python", "HuggingFace", "LangChain", "Docker"]);

interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
}

const MarqueeRow = ({ items, reverse = false }: MarqueeRowProps) => {
  // Duplicate 3× so the seamless loop never shows a gap
  const triple = [...items, ...items, ...items];
  return (
    <div className="tech-marquee-outer">
      <div className={`tech-marquee-track ${reverse ? "tech-marquee-track--reverse" : ""}`}>
        {triple.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`tech-pill ${highlighted.has(item) ? "tech-pill--active" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="tech-section">
      {/* Label row */}
      <div className="tech-label-row">
        <span className="tech-label">TECH I WORK WITH</span>
        <div className="tech-label-line" />
      </div>

      {/* Row 1 — scrolls left */}
      <MarqueeRow items={skillsRow1} />

      {/* Row 2 — scrolls right */}
      <MarqueeRow items={skillsRow2} reverse />
    </section>
  );
};

export default TechStack;
