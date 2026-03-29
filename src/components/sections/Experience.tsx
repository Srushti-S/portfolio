import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useGSAP';
import { experience } from '../../data/portfolio';

export default function Experience() {
  useScrollReveal();
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-36">

      {/* ── Header ── */}
      <div className="mb-16 flex items-center gap-4">
        <span className="sr-line block h-px w-10 bg-border" />
        <span className="label">Experience</span>
      </div>

      <h2 className="sr-chars text-section mb-16 text-primary">
        Where I've worked.
      </h2>

      {/* ── Accordion rows ── */}
      <div className="sr-stagger divide-y divide-border border-y border-border">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <div
              key={`${job.company}-${i}`}
              className="sr-item group"
            >
              {/* Row header — always visible, click to toggle */}
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="label w-7 shrink-0 text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-primary md:text-lg group-hover:text-accent transition-colors duration-300">
                      {job.company}
                    </p>
                    <p className="label mt-0.5 text-accent">{job.role}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-6">
                  <p className="label hidden md:block">{job.period}</p>
                  {/* Plus / minus icon */}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-secondary transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.2"
                        style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)', transformOrigin: 'center', transition: 'transform 0.25s ease' }}
                      />
                      <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <div className="pl-[52px] pb-8 pr-4">
                  {job.location && (
                    <p className="label mb-5 text-muted">{job.location} · {job.period}</p>
                  )}
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-secondary">
                        <span className="mt-1 shrink-0 text-muted">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {/* Stack tags */}
                  {job.stack && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.stack.map((tag: string) => (
                        <span key={tag} className="rounded-full border border-border px-3 py-1 text-[10px] tracking-widest uppercase text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
