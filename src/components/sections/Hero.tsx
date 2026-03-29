import { useHeroReveal } from '../../hooks/useGSAP';
import GlobeMesh from '../../three/GlobeMesh';

export default function Hero() {
  useHeroReveal();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10"
    >
      {/* ── Main content row ── */}
      <div className="flex flex-1 flex-col justify-center md:flex-row md:items-center md:justify-between gap-10">

        {/* Left — big name block */}
        <div className="flex flex-col gap-4 md:gap-6">

          {/* Badge */}
          <div
            className="hero-badge flex items-center gap-2.5"
            style={{ opacity: 0 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="label">Full Stack Engineer · MS CS @ IU Bloomington</span>
          </div>

          {/* Name — each word on its own line, chars split by hook */}
          <h1 className="overflow-hidden leading-none" aria-label="Srushti Sonavane">
            <span
              className="hero-name text-hero block text-primary"
              aria-hidden="true"
            >
              Srushti
            </span>
          </h1>
          <h1 className="overflow-hidden leading-none" aria-label="">
            <span
              className="hero-name text-hero block text-primary"
              aria-hidden="true"
            >
              Sonavane
            </span>
          </h1>
        </div>

        {/* Right — 3D globe */}
        <div className="relative h-[280px] w-[280px] shrink-0 self-center md:h-[400px] md:w-[400px]">
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" />
          <GlobeMesh />
        </div>
      </div>

      {/* ── Bottom row — role description + scroll cue ── */}
      <div
        className="hero-sub flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center"
        style={{ opacity: 0 }}
      >
        <p className="max-w-md text-sm leading-relaxed text-secondary">
          Building fast, accessible, and delightful web experiences — from
          REST APIs and database design to pixel-tight frontends and NLP pipelines.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="label hover:text-primary transition-colors duration-300"
          >
            View Work ↓
          </a>
          <a
            href="#contact"
            className="label border-b border-accent pb-0.5 text-accent hover:text-primary hover:border-primary transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
