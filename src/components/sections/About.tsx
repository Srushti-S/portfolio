import { useScrollReveal } from '../../hooks/useGSAP';
import { personal, skills, education, stats } from '../../data/portfolio';
import Marquee from '../ui/Marquee';

// Flatten skills object → string[]
const allSkills = Object.values(skills as Record<string, string[]>).flat();

export default function About() {
  useScrollReveal();

  const bioLines: string[] = Array.isArray(personal.bio)
    ? (personal.bio as string[])
    : personal.bio ? [personal.bio as unknown as string] : [];

  return (
    <section id="about" className="pt-32 md:pt-48">

      {/* ── Skills marquee (top of section, like moncy.dev) ── */}
      <Marquee items={allSkills} />

      {/* ── Main content ── */}
      <div className="px-6 py-24 md:px-10 md:py-36">

        {/* Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="sr-line block h-px w-10 bg-border" />
          <span className="label">About</span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

          {/* Left — heading */}
          <div>
            <h2 className="sr-chars text-section text-primary" data-nobreak="true">
              Engineer by skill,
            </h2>
            <h2 className="sr-chars text-section text-primary">
              builder by nature.
            </h2>

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="sr-stagger mt-14 grid grid-cols-2 gap-8">
                {stats.map((s: { number: string; suffix: string; label: string }) => (
                  <div key={s.label} className="sr-item">
                    <p className="text-3xl font-bold tracking-tighter text-primary">
                      {s.number}
                      <span className="text-accent">{s.suffix}</span>
                    </p>
                    <p className="label mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — bio + education */}
          <div className="flex flex-col gap-8 md:pt-2">
            {bioLines.slice(0, 2).map((line, i) => (
              <p key={i} className="sr-up text-sm leading-relaxed text-secondary md:text-base">
                {line}
              </p>
            ))}

            <a
              href={`mailto:${personal.email}`}
              className="sr-up inline-block text-sm text-accent hover:text-primary transition-colors duration-300"
            >
              {personal.email} ↗
            </a>

            {/* Education */}
            <div className="sr-stagger mt-4 space-y-0 border-t border-border pt-8">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="sr-item flex flex-col gap-1 border-b border-border py-5 last:border-0 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-primary">{edu.school}</p>
                    <p className="label mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="label">{edu.period}</p>
                    {edu.gpa && <p className="mt-0.5 text-xs text-accent">GPA {edu.gpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
