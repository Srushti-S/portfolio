import { useEffect, useState } from "react";
import { runs } from "../data/runs";
import { prefersReducedMotion } from "./utils/motion";
import "./styles/RunPanel.css";

const TYPE_MS = 28;
const LINE_MS = 380;
const HOLD_MS = 4200;

const RunPanel = () => {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(!reduceMotion);
  const [typed, setTyped] = useState(0);
  const [visible, setVisible] = useState(0);

  const run = runs[active];

  useEffect(() => {
    if (reduceMotion) {
      setTyped(run.command.length);
      setVisible(run.lines.length);
      return;
    }

    setTyped(0);
    setVisible(0);
    const timers: number[] = [];
    let t = 500;
    for (let i = 1; i <= run.command.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), t));
      t += TYPE_MS;
    }
    t += 300;
    for (let j = 1; j <= run.lines.length; j++) {
      timers.push(window.setTimeout(() => setVisible(j), t));
      t += LINE_MS;
    }
    if (auto) {
      timers.push(
        window.setTimeout(() => setActive((a) => (a + 1) % runs.length), t + HOLD_MS)
      );
    }
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [run, auto, reduceMotion]);

  const pick = (index: number) => {
    setAuto(false);
    setActive(index);
  };

  const done = visible >= run.lines.length;

  return (
    <figure className="run">
      <div className="run-panel">
        <div className="run-chrome">
          <span className="run-dots" aria-hidden="true">
            <i /><i /><i />
          </span>
          <div className="run-tabs" role="tablist" aria-label="Results from my work">
            {runs.map((r, i) => (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`run-tab ${i === active ? "is-active" : ""}`}
                onClick={() => pick(i)}
                data-cursor="disable"
              >
                {r.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="run-body" role="tabpanel" aria-label={run.tab}>
          <div className="run-cmd">
            <span className="run-prompt">$</span>
            <span>{run.command.slice(0, typed)}</span>
            {!done && <span className="run-caret" aria-hidden="true" />}
          </div>

          <dl className="run-lines">
            {run.lines.map((line, i) => (
              <div
                key={`${run.id}-${line.key}`}
                className={`run-line tone-${line.tone} ${i < visible ? "is-on" : ""}`}
              >
                <dt>{line.key}</dt>
                <dd>{line.value}</dd>
              </div>
            ))}
          </dl>

          <p className={`run-note ${done ? "is-on" : ""}`}>{run.note}</p>
        </div>
      </div>
      <figcaption className="run-caption">
        Real results from my work, condensed. Pick a tab to switch.
      </figcaption>
    </figure>
  );
};

export default RunPanel;
