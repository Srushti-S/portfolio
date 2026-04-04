import "./styles/TechStack.css";
import { skills } from "../data/portfolio";

const allSkills = Object.values(skills).flat();

const buildInvertedRows = (items: string[]): string[][] => {
  const total = items.length;
  const numRows = total <= 10 ? 2 : total <= 18 ? 3 : 4;
  const step = 2;
  const start = Math.round((total + step * numRows * (numRows - 1) / 2) / numRows);
  const rows: string[][] = [];
  let idx = 0;
  for (let i = 0; i < numRows; i++) {
    const size = i === numRows - 1 ? total - idx : Math.max(start - i * step, 1);
    rows.push(items.slice(idx, idx + size));
    idx += size;
  }
  return rows;
};

const rows = buildInvertedRows(allSkills);

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2 className="tech-heading">Skills</h2>

      <div className="tech-spotlight-wrap">
        <div className="tech-spotlight-bar" />
        <div className="tech-spotlight-glow" />
      </div>

      <div className="tech-pills-grid">
        {rows.map((row, i) => (
          <div key={i} className="tech-row">
            {row.map((item) => (
              <span key={item} className="tech-pill">{item}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;