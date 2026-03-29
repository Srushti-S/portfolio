import { useScrollReveal } from '../../hooks/useGSAP';
import { projects } from '../../data/portfolio';

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects" className="px-6 py-24 md:px-10 md:py-36">

      {/* ── Header ── */}
      <div className="mb-16 flex items-center gap-4">
        <span className="sr-line block h-px w-10 bg-border" />
        <span className="label">Selected Work</span>
      </div>

      <h2 className="sr-chars text-section mb-16 text-primary">
        Things I've built.
      </h2>

      {/* ── Project rows ── */}
      <div className="sr-stagger divide-y divide-border border-y border-border">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.github || '#'}
            target={project.github ? '_blank' : undefined}
            rel="noreferrer"
            className="sr-item group flex flex-col gap-5 py-9 transition-colors duration-500 md:flex-row md:items-start md:gap-12 md:py-10"
          >
            {/* Index */}
            <span className="label w-7 shrink-0 pt-1 text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4">
              {/* Title row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent md:text-2xl">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <span className="label text-secondary group-hover:text-accent transition-colors duration-300">
                      GitHub ↗
                    </span>
                  )}
                  {project.live && (
                    <span className="label text-accent">
                      Live ↗
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-sm leading-relaxed text-secondary">
                {project.description}
              </p>

              {/* Stack */}
              {project.stack?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-[10px] tracking-widest uppercase text-muted transition-colors duration-300 group-hover:border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Arrow indicator */}
            <div className="hidden md:flex items-center justify-center h-9 w-9 shrink-0 rounded-full border border-border text-secondary transition-all duration-300 group-hover:border-accent group-hover:text-accent">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
