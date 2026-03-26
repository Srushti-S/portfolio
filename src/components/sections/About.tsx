import { useScrollReveal } from '@/hooks/useGSAP'
import { personal, stats, education, skillsRow1, skillsRow2 } from '@/data/portfolio'

const ACCENT = new Set(['React', 'Node.js', 'Django', 'LangChain', 'HuggingFace'])


function SkillChip({ label }: { label: string }) {
  return (
    <span className={`skill-chip${ACCENT.has(label) ? ' is-accent' : ''}`}>
      {label}
    </span>
  )
}

function SkillsMarquee({ skills, reverse = false }: { skills: string[]; reverse?: boolean }) {
  const doubled = [...skills, ...skills]
  return (
    <div className="marquee-wrap">
      <div className={`marquee-track ${reverse ? 'reverse' : 'forward'}`}>
        {doubled.map((s, i) => <SkillChip key={`${s}-${i}`} label={s} />)}
      </div>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

export default function About() {
  const sectionRef  = useScrollReveal<HTMLDivElement>()
  const headingRef  = useScrollReveal<HTMLHeadingElement>()
  const bioRef      = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.1 })
  const linksRef    = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.2 })
  const photoRef    = useScrollReveal<HTMLDivElement>({ y: 40 })
  const statsRef    = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: '.stat-card', delay: 0.1 })
  const currentRef  = useScrollReveal<HTMLDivElement>({ y: 20 })
  const skillsRef   = useScrollReveal<HTMLDivElement>({ y: 20 })
  const eduLabelRef = useScrollReveal<HTMLDivElement>()
  const edu0Ref     = useScrollReveal<HTMLDivElement>()
  const edu1Ref     = useScrollReveal<HTMLDivElement>({ delay: 0.1 })

  return (
    <section id="about" className="relative z-10">

      {/* ── ABOUT BIO ──────────────────────────────────────────────────── */}
      <div style={{ padding: '8rem 3rem' }}>

        <div ref={sectionRef} className="section-label opacity-0">About me</div>


        <div
          className="grid items-start"
          style={{ gridTemplateColumns: '1fr 1fr', gap: '5rem' }}
        >


          <div style={{ position: 'sticky', top: '8rem' }}>

            <h2
              ref={headingRef}
              className="font-display font-bold text-[#f0ede8] opacity-0"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              Engineer, researcher,<br />
              <em style={{ fontStyle: 'italic', color: '#c8a96e' }}>curious by nature</em>
            </h2>

            <div
              ref={bioRef}
              className="opacity-0"
              style={{ fontSize: '1rem', color: '#8a8884', fontWeight: 300, lineHeight: '1.85' }}
            >
              <p style={{ marginBottom: '1.2rem' }}>
                Hi — I'm Srushti, a{' '}
                <strong style={{ color: '#f0ede8', fontWeight: 400 }}>Full Stack Software Engineer</strong>{' '}
                currently pursuing my Master's in Computer Science at{' '}
                <strong style={{ color: '#f0ede8', fontWeight: 400 }}>Indiana University Bloomington</strong>,
                where I also work as a Web Development Assistant helping 70+ academic departments ship
                better digital experiences.
              </p>
              <p style={{ marginBottom: '1.2rem' }}>
                I care deeply about the craft — whether that's a clean REST API, a pixel-tight frontend,
                or an NLP pipeline that makes language actually useful. I've worked at the boundary of
                product and research: from building ETL pipelines at{' '}
                <strong style={{ color: '#f0ede8', fontWeight: 400 }}>Barclays</strong> to fine-tuning
                transformer models on low-resource Indic languages, to shipping production web apps that
                thousands of people use every day.
              </p>
              <p>
                Outside code, I'm energised by hard problems, good coffee, and the quiet satisfaction of
                a system that just <em>works</em>.
              </p>
            </div>

            <div
              ref={linksRef}
              className="flex flex-wrap gap-4 opacity-0"
              style={{ marginTop: '2.5rem' }}
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                GitHub ↗
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                LinkedIn ↗
              </a>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                Get in touch →
              </a>
            </div>
          </div>

          <div className="flex flex-col" style={{ gap: '2.5rem' }}>

            <div
              ref={photoRef}
              className="opacity-0"
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: '#1a1a1e',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ color: '#4a4845', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                <div
                  className="flex items-center justify-center font-display font-bold"
                  style={{
                    width: '6rem',
                    height: '6rem',
                    borderRadius: '50%',
                    background: 'rgba(200,169,110,0.12)',
                    border: '1px solid rgba(200,169,110,0.2)',
                    fontSize: '2rem',
                    color: '#c8a96e',
                  }}
                >
                  SS
                </div>
                <span>Your photo here</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem',
                  background: 'rgba(10,10,11,0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.5rem',
                  padding: '0.8rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#f0ede8' }}>
                  Srushti Sonavane
                </span>
                {/* tag-status uses CSS class for ::before green dot */}
                <span className="tag-status">Open to work</span>
              </div>
            </div>

            {/* Stats 2×2 */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map(({ number, suffix, label }, i) => (
                <div key={i} className="stat-card">
                  <div
                    className="font-display font-bold text-[#f0ede8] leading-none"
                    style={{ fontSize: '2rem', marginBottom: '0.3rem' }}
                  >
                    {number}
                    <span style={{ color: '#c8a96e', fontSize: '1.2rem' }}>{suffix}</span>
                  </div>
                  <div
                    style={{ fontSize: '0.72rem', letterSpacing: '0.05em', color: '#4a4845', textTransform: 'uppercase' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CURRENTLY ──────────────────────────────────────────────────── */}
      <div style={{ padding: '4rem 3rem 6rem' }}>
        <div
          ref={currentRef}
          className="opacity-0"
          style={{
            background: '#111113',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '1.25rem',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            {/* currently-label uses CSS class for ::before green dot */}
            <div className="currently-label">Currently</div>
            <div
              className="font-display font-bold text-[#f0ede8]"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: '1.2' }}
            >
              Web Development Assistant<br />
              <em style={{ fontStyle: 'italic', color: '#c8a96e' }}>@ Indiana Graduate School</em>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#8a8884', marginTop: '0.5rem' }}>
              Bloomington, Indiana · Full-time while pursuing MS CS
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#4a4845', letterSpacing: '0.06em' }}>
              May 2025 — Present
            </div>
          </div>
        </div>
      </div>

      {/* ── SKILLS MARQUEE ─────────────────────────────────────────────── */}
      <div
        ref={skillsRef}
        className="opacity-0"
        style={{ padding: '6rem 3rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="section-label">Tech I work with</div>
        <SkillsMarquee skills={skillsRow1} />
        <SkillsMarquee skills={skillsRow2} reverse />
      </div>

      {/* ── EDUCATION ──────────────────────────────────────────────────── */}
      <div style={{ padding: '6rem 3rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

        <div ref={eduLabelRef} className="section-label opacity-0">Education</div>

        <div className="grid grid-cols-2 gap-6">

          {/* Card 1 */}
          <div
            ref={edu0Ref}
            className="edu-card opacity-0"
            style={{
              background: '#111113',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '1rem',
              padding: '2rem',
            }}
          >
            <div
              className="inline-flex items-center"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c8a96e',
                background: 'rgba(200,169,110,0.12)',
                border: '1px solid rgba(200,169,110,0.2)',
                borderRadius: '100px',
                padding: '0.25rem 0.7rem',
                marginBottom: '1.2rem',
              }}
            >
              MS · Computer Science
            </div>
            <div
              className="font-display font-bold text-[#f0ede8]"
              style={{ fontSize: '1.1rem', lineHeight: '1.3', marginBottom: '0.4rem' }}
            >
              Indiana University Bloomington
            </div>
            <div style={{ fontSize: '0.85rem', color: '#8a8884', marginBottom: '1rem' }}>
              Bloomington, Indiana · USA
            </div>
            <div
              className="flex flex-wrap gap-4"
              style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[['GPA', '3.77 / 4.0'], ['Period', 'Aug 2024 – May 2026'], ['Focus', 'Software Eng · ML · Databases']].map(([k, v]) => (
                <div key={k} style={{ fontSize: '0.72rem', letterSpacing: '0.04em', color: '#4a4845', textTransform: 'uppercase' }}>
                  <strong style={{ color: '#8a8884', display: 'block', marginBottom: '0.15rem' }}>{k}</strong>
                  {v}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={edu1Ref}
            className="edu-card opacity-0"
            style={{
              background: '#111113',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '1rem',
              padding: '2rem',
            }}
          >
            <div
              className="inline-flex items-center"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c8a96e',
                background: 'rgba(200,169,110,0.12)',
                border: '1px solid rgba(200,169,110,0.2)',
                borderRadius: '100px',
                padding: '0.25rem 0.7rem',
                marginBottom: '1.2rem',
              }}
            >
              BE · Computer Engineering
            </div>
            <div
              className="font-display font-bold text-[#f0ede8]"
              style={{ fontSize: '1.1rem', lineHeight: '1.3', marginBottom: '0.4rem' }}
            >
              Pune University
            </div>
            <div style={{ fontSize: '0.85rem', color: '#8a8884', marginBottom: '1rem' }}>
              Pune, Maharashtra · India
            </div>
            <div
              className="flex flex-wrap gap-4"
              style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[['CGPA', '8.7 / 10'], ['Period', 'Oct 2021 – May 2024'], ['Focus', 'DSA · Cloud · Distributed Sys']].map(([k, v]) => (
                <div key={k} style={{ fontSize: '0.72rem', letterSpacing: '0.04em', color: '#4a4845', textTransform: 'uppercase' }}>
                  <strong style={{ color: '#8a8884', display: 'block', marginBottom: '0.15rem' }}>{k}</strong>
                  {v}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
