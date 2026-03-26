import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '@/hooks/useGSAP'
import { projects } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

type Project = typeof projects[number]

// ─── Arrow icon ─────────────────────────────────────────────────────────────
function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Featured (highlight) card — full width ──────────────────────────────────
function FeaturedCard({ item }: { item: Project }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true } }
    )
  }, [])

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: 0,
        position: 'relative',
        background: '#111113',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1.25rem',
        padding: '2.8rem',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '3rem',
        alignItems: 'flex-end',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        cursor: 'default',
        marginBottom: '1.5rem',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      {/* Accent left bar */}
      <div
        className="group-hover-accent-bar"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '3px', height: '100%',
          background: '#c8a96e',
          transform: 'scaleY(0)',
          transformOrigin: 'bottom',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        ref={el => {
          if (!el) return
          const card = el.parentElement
          if (!card) return
          card.addEventListener('mouseenter', () => { el.style.transform = 'scaleY(1)' })
          card.addEventListener('mouseleave', () => { el.style.transform = 'scaleY(0)' })
        }}
      />

      <div>
        {/* Featured tag */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#c8a96e', background: 'rgba(200,169,110,0.12)',
            border: '1px solid rgba(200,169,110,0.2)',
            borderRadius: '100px', padding: '0.25rem 0.7rem',
            marginBottom: '1.4rem',
          }}
        >
          ★ Featured project
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-[#f0ede8]"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: '1.15', marginBottom: '1rem' }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.95rem', color: '#8a8884', fontWeight: 300, lineHeight: '1.8', maxWidth: '60ch', marginBottom: '1.6rem' }}>
          {item.description}
        </p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.stack.map(s => (
            <span key={s} className="skill-chip" style={{ fontSize: '0.72rem', padding: '0.3rem 0.85rem' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end', flexShrink: 0 }}>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          GitHub <ArrowUpRight />
        </a>
        {item.live && (
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Live <ArrowUpRight />
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Regular project card ────────────────────────────────────────────────────
function ProjectCard({ item, index }: { item: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        delay: (index % 3) * 0.08,
      }
    )
  }, [index])

  return (
    <div
      ref={ref}
      className="edu-card group"
      style={{
        opacity: 0,
        background: '#111113',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%',
      }}
    >
      {/* Index + link row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          className="font-display"
          style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.06)', letterSpacing: '0.1em' }}
        >
          {String(index + 2).padStart(2, '0')}
        </span>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 32, height: 32, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#4a4845',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(200,169,110,0.4)'
            el.style.color = '#c8a96e'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(255,255,255,0.07)'
            el.style.color = '#4a4845'
          }}
        >
          <ArrowUpRight />
        </a>
      </div>

      {/* Title */}
      <h3
        className="font-display font-bold text-[#f0ede8]"
        style={{ fontSize: '1.05rem', lineHeight: '1.3' }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.88rem', color: '#8a8884', fontWeight: 300, lineHeight: '1.75', flex: 1 }}>
        {item.description}
      </p>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {item.stack.map(s => (
          <span key={s} className="skill-chip" style={{ fontSize: '0.68rem', padding: '0.25rem 0.7rem' }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function Projects() {
  const labelRef   = useScrollReveal<HTMLDivElement>()
  const headingRef = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.06 })

  const featured  = projects.filter(p => p.highlight)
  const rest      = projects.filter(p => !p.highlight)

  return (
    <section
      id="projects"
      className="relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div style={{ padding: '8rem 3rem' }}>

        {/* Section label */}
        <div ref={labelRef} className="section-label opacity-0">Projects</div>

        {/* Header */}
        <div
          ref={headingRef}
          className="exp-header flex items-end justify-between opacity-0"
          style={{ marginBottom: '4rem' }}
        >
          <h2
            className="font-display font-bold text-[#f0ede8]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Things I've<br />
            <em style={{ color: '#c8a96e', fontStyle: 'italic' }}>built &amp; shipped</em>
          </h2>

          <a
            href="https://github.com/Srushti-S"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}
          >
            All on GitHub <ArrowUpRight />
          </a>
        </div>

        {/* Featured card */}
        {featured.map(p => <FeaturedCard key={p.title} item={p} />)}

        {/* Regular 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="projects-grid"
        >
          {rest.map((p, i) => (
            <ProjectCard key={p.title} item={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
