import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '@/hooks/useGSAP'
import { experience } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

type Exp = typeof experience[number]

function highlightNumbers(text: string): string {
  return text.replace(
    /(\d[\d,]*\+?)/g,
    '<strong style="color:#f0ede8;font-weight:400">$1</strong>'
  )
}

function ExperienceCard({ item, index }: { item: Exp; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      }
    )
  }, [])

  return (
    <div ref={cardRef} className="exp-entry group" style={{ opacity: 0 }}>

      {/* ── LEFT: meta ───────────────────────────────────────────────── */}
      <div style={{ paddingTop: '0.3rem' }}>

        {/* Index */}
        <div
          className="font-display"
          style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.06)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Period */}
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: '#4a4845', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {item.period}
        </div>

        {/* Location */}
        <div style={{ fontSize: '0.78rem', color: '#4a4845' }}>
          {item.location}
        </div>

        {/* Current badge */}
        {item.current && (
          <div
            style={{
              marginTop: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6dbfa0',
              background: 'rgba(109,191,160,0.1)',
              border: '1px solid rgba(109,191,160,0.25)',
              borderRadius: '100px',
              padding: '0.25rem 0.7rem',
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6dbfa0', flexShrink: 0, animation: 'pulseDot 2s ease-in-out infinite' }} />
            Current
          </div>
        )}
      </div>

      {/* ── RIGHT: content ───────────────────────────────────────────── */}
      <div>

        {/* Role */}
        <h3
          className="font-display font-bold text-[#f0ede8]"
          style={{ fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', lineHeight: '1.2', marginBottom: '0.25rem' }}
        >
          {item.role}
        </h3>

        {/* Company — italic gold */}
        <div
          style={{
            fontSize: '0.95rem',
            color: '#c8a96e',
            fontStyle: 'italic',
            fontFamily: '"Playfair Display", Georgia, serif',
            marginBottom: '1.6rem',
          }}
        >
          {item.company}
        </div>

        {/* Bullets */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.6rem' }}>
          {item.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span
                style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: 'rgba(200,169,110,0.45)',
                  flexShrink: 0, marginTop: '0.62rem',
                }}
              />
              <span
                style={{ fontSize: '0.92rem', color: '#8a8884', fontWeight: 300, lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: highlightNumbers(b) }}
              />
            </li>
          ))}
        </ul>

        {/* Stack chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.stack.map(s => (
            <span key={s} className="skill-chip" style={{ fontSize: '0.72rem', padding: '0.3rem 0.85rem' }}>
              {s}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

// ─── Main section ───────────────────────────────────────────────────────────
export default function Experience() {
  const labelRef   = useScrollReveal<HTMLDivElement>()
  const headingRef = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.06 })

  return (
    <section
      id="experience"
      className="relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div style={{ padding: '8rem 3rem' }}>

        {/* Section label */}
        <div ref={labelRef} className="section-label opacity-0">
          Experience
        </div>

        {/* Header */}
        <div
          ref={headingRef}
          className="exp-header flex items-end justify-between opacity-0"
          style={{ marginBottom: '1rem' }}
        >
          <h2
            className="font-display font-bold text-[#f0ede8]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Where I've<br />
            <em style={{ color: '#c8a96e', fontStyle: 'italic' }}>worked &amp; shipped</em>
          </h2>

          {/* Summary stat */}
          <div
            style={{
              textAlign: 'right',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4a4845',
              lineHeight: '1.7',
            }}
          >
            <div
              className="font-display font-bold text-[#f0ede8]"
              style={{ fontSize: '2.4rem', lineHeight: '1', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}
            >
              4
            </div>
            Roles across<br />industry &amp; research
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)', margin: '3rem 0 0' }} />

        {/* Entries */}
        {experience.map((item, i) => (
          <ExperienceCard key={`${item.company}-${i}`} item={item} index={i} />
        ))}

      </div>
    </section>
  )
}
