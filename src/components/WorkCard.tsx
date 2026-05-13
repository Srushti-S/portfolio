import "./styles/WorkCard.css";

const DashboardIllustration = () => (
  <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="wc-illustration">
    {[0,1,2,3].map(i => (
      <line key={i} x1="30" y1={140 - i*35} x2="300" y2={140 - i*35}
        stroke="rgba(0,229,204,0.07)" strokeWidth="1" />
    ))}
    {[
      { x: 50,  h: 70,  o: 0.9 },
      { x: 90,  h: 45,  o: 0.7 },
      { x: 130, h: 100, o: 1   },
      { x: 170, h: 55,  o: 0.75},
      { x: 210, h: 85,  o: 0.85},
      { x: 250, h: 40,  o: 0.6 },
    ].map(({ x, h, o }, i) => (
      <g key={i}>
        <rect x={x} y={140 - h} width="28" height={h} rx="4"
          fill={`rgba(0,229,204,${o * 0.18})`}
          stroke={`rgba(0,229,204,${o * 0.5})`} strokeWidth="1" />
        <rect x={x} y={140 - h} width="28" height="4" rx="2"
          fill={`rgba(0,229,204,${o * 0.7})`} />
      </g>
    ))}
    <polyline points="64,85 104,105 144,55 184,90 224,65 264,110"
      fill="none" stroke="rgba(0,106,255,0.6)" strokeWidth="1.5"
      strokeDasharray="4 2" strokeLinecap="round" />
    {[[64,85],[104,105],[144,55],[184,90],[224,65],[264,110]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#006aff" opacity="0.8" />
    ))}
    <text x="30" y="156" fontSize="9" fill="rgba(0,229,204,0.35)" fontFamily="monospace">INSPECTIONS / DISTRICT</text>
    <rect x="218" y="10" width="86" height="28" rx="6"
      fill="rgba(0,229,204,0.06)" stroke="rgba(0,229,204,0.2)" strokeWidth="1" />
    <text x="227" y="21" fontSize="8" fill="rgba(0,229,204,0.5)" fontFamily="monospace">PASS RATE</text>
    <text x="227" y="33" fontSize="11" fontWeight="700" fill="#00e5cc" fontFamily="monospace">94.2 %</text>
  </svg>
);

const NeuralIllustration = () => (
  <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="wc-illustration">
    {([[60,40],[60,80],[60,120]] as number[][]).flatMap(([x1,y1]) =>
      ([[160,30],[160,65],[160,100],[160,135]] as number[][]).map(([x2,y2],j) => (
        <line key={`a${x1}${j}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(0,229,204,0.1)" strokeWidth="1" />
      ))
    )}
    {([[160,30],[160,65],[160,100],[160,135]] as number[][]).flatMap(([x1,y1],i) =>
      ([[260,55],[260,105]] as number[][]).map(([x2,y2],j) => (
        <line key={`b${i}${j}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(0,229,204,0.15)" strokeWidth="1" />
      ))
    )}
    <line x1="60" y1="80" x2="160" y2="65" stroke="rgba(0,229,204,0.7)" strokeWidth="1.8" />
    <line x1="160" y1="65" x2="260" y2="55" stroke="rgba(0,229,204,0.7)" strokeWidth="1.8" />
    {[40,80,120].map((y,i) => (
      <g key={i}>
        <circle cx="60" cy={y} r="10" fill="rgba(0,229,204,0.08)" stroke="rgba(0,229,204,0.35)" strokeWidth="1.2" />
        <circle cx="60" cy={y} r="4" fill="rgba(0,229,204,0.6)" />
      </g>
    ))}
    {[30,65,100,135].map((y,i) => (
      <g key={i}>
        <circle cx="160" cy={y} r="10"
          fill={i===1 ? "rgba(0,229,204,0.15)" : "rgba(0,229,204,0.05)"}
          stroke={i===1 ? "rgba(0,229,204,0.6)" : "rgba(0,229,204,0.2)"} strokeWidth="1.2" />
        <circle cx="160" cy={y} r="4" fill={i===1 ? "#00e5cc" : "rgba(0,229,204,0.3)"} />
      </g>
    ))}
    {[55,105].map((y,i) => (
      <g key={i}>
        <circle cx="260" cy={y} r="12"
          fill={i===0 ? "rgba(0,229,204,0.18)" : "rgba(0,229,204,0.05)"}
          stroke={i===0 ? "rgba(0,229,204,0.7)" : "rgba(0,229,204,0.2)"} strokeWidth="1.5" />
        {i===0 && <circle cx="260" cy={y} r="5" fill="#00e5cc" />}
        {i===0 && <text x="276" y={y+4} fontSize="8" fill="rgba(0,229,204,0.7)" fontFamily="monospace">MATCH</text>}
      </g>
    ))}
    <text x="46" y="152" fontSize="8" fill="rgba(0,229,204,0.28)" fontFamily="monospace">INPUT</text>
    <text x="140" y="152" fontSize="8" fill="rgba(0,229,204,0.28)" fontFamily="monospace">HIDDEN</text>
    <text x="240" y="152" fontSize="8" fill="rgba(0,229,204,0.28)" fontFamily="monospace">OUTPUT</text>
  </svg>
);

const RentalIllustration = () => (
  <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="wc-illustration">
    {[
      { x:20,  y:35, w:80, h:100, label:"API",  sub:"REST" },
      { x:122, y:50, w:76, h:80,  label:"AUTH", sub:"JWT"  },
      { x:220, y:25, w:80, h:110, label:"DB",   sub:"PG"   },
    ].map(({ x, y, w, h, label, sub }, i) => (
      <g key={i}>
        <rect x={x} y={y} width={w} height={h} rx="7"
          fill="rgba(0,229,204,0.03)" stroke="rgba(0,229,204,0.2)" strokeWidth="1" />
        <rect x={x} y={y} width={w} height="20" rx="7" fill="rgba(0,229,204,0.09)" />
        <rect x={x} y={y+10} width={w} height="10" fill="rgba(0,229,204,0.09)" />
        <circle cx={x+10} cy={y+10} r="3.5" fill="rgba(0,229,204,0.5)" />
        <circle cx={x+20} cy={y+10} r="3.5" fill="rgba(0,106,255,0.45)" />
        <circle cx={x+30} cy={y+10} r="3.5" fill="rgba(255,100,100,0.35)" />
        <text x={x+w/2} y={y+55} textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(0,229,204,0.85)" fontFamily="monospace">{label}</text>
        <text x={x+w/2} y={y+72} textAnchor="middle" fontSize="9" fill="rgba(0,229,204,0.35)" fontFamily="monospace">{sub}</text>
        <rect x={x+10} y={y+85} width={w-20} height="5" rx="2" fill="rgba(0,229,204,0.08)" />
        <rect x={x+10} y={y+94} width={w-35} height="5" rx="2" fill="rgba(0,229,204,0.05)" />
        <rect x={x+10} y={y+103} width={w-25} height="5" rx="2" fill="rgba(0,229,204,0.06)" />
      </g>
    ))}
    <path d="M100 90 L120 90" stroke="rgba(0,229,204,0.45)" strokeWidth="1.5" fill="none" />
    <polygon points="118,87 122,90 118,93" fill="rgba(0,229,204,0.45)" />
    <path d="M198 90 L218 90" stroke="rgba(0,229,204,0.45)" strokeWidth="1.5" fill="none" />
    <polygon points="216,87 220,90 216,93" fill="rgba(0,229,204,0.45)" />
    <text x="20" y="155" fontSize="8" fill="rgba(0,229,204,0.28)" fontFamily="monospace">CONTAINERISED · ROLE-BASED · SCALABLE</text>
  </svg>
);

const EventIllustration = () => (
  <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" className="wc-illustration">
    {[0,1,2,3,4,5,6].map(col =>
      [0,1,2,3].map(row => {
        const hl = (col===1&&row===0)||(col===3&&row===1)||(col===5&&row===2)||(col===2&&row===3);
        const full = (col===0&&row===1)||(col===4&&row===0)||(col===6&&row===1);
        return (
          <g key={`${col}-${row}`}>
            <rect x={18 + col*42} y={8 + row*36} width="34" height="28" rx="5"
              fill={hl ? "rgba(0,229,204,0.14)" : full ? "rgba(0,106,255,0.08)" : "rgba(255,255,255,0.025)"}
              stroke={hl ? "rgba(0,229,204,0.45)" : full ? "rgba(0,106,255,0.28)" : "rgba(255,255,255,0.06)"}
              strokeWidth="1" />
            {hl && <circle cx={35+col*42} cy={22+row*36} r="4" fill="rgba(0,229,204,0.75)" />}
            {full && <text x={35+col*42} y={26+row*36} textAnchor="middle" fontSize="7" fill="rgba(0,106,255,0.75)" fontFamily="monospace">FULL</text>}
          </g>
        );
      })
    )}
    <text x="18" y="158" fontSize="8" fill="rgba(0,229,204,0.28)" fontFamily="monospace">EVENTS · HIGH-TRAFFIC · OPTIMISED QUERIES</text>
  </svg>
);

const illustrations = [
  DashboardIllustration,
  NeuralIllustration,
  RentalIllustration,
  EventIllustration,
];

interface WorkCardProps {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  index: number;
}

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const WorkCard = ({ title, description, stack, github, live, index }: WorkCardProps) => {
  const Illustration = illustrations[index % illustrations.length];

  return (
    <div className="wc-card">
      <div className="wc-visual">
        <div className="wc-visual-glow" />
        <Illustration />
      </div>

      <div className="wc-body">
        <h3 className="wc-title">{title}</h3>
        <p className="wc-desc">{description}</p>

        <div className="wc-tags">
          {stack.map((tech) => (
            <span key={tech} className="wc-tag">{tech}</span>
          ))}
        </div>

        <div className="wc-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="wc-link-btn">
              <GithubIcon />
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="wc-link-btn wc-link-btn--live">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;