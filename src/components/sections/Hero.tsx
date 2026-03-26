import { useHeroReveal } from '@/hooks/useGSAP'
import { personal } from '@/data/portfolio'

export default function Hero() {
  const ref = useHeroReveal()

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-svh flex flex-col justify-end overflow-hidden"
      style={{ padding: '0 3rem 5rem' }}
    >
      <div>
        {/* Eyebrow — CSS class handles ::before gold line */}
        <div data-hero="eyebrow" className="hero-eyebrow" style={{ opacity: 0 }}>
          {personal.title}
        </div>

        {/* Name — outer span clips, inner span slides up via GSAP */}
        <h1
          className="font-display font-black"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            lineHeight: '0.92',
            letterSpacing: '-0.02em',
          }}
        >
          {/* Line 1: Srushti — white */}
          <span data-hero="line" className="block" style={{ overflow: 'hidden' }}>
            <span className="block" style={{ opacity: 0 }}>
              {personal.firstName}
            </span>
          </span>

          {/* Line 2: Sonavane — italic gold */}
          <span data-hero="line" className="block" style={{ overflow: 'hidden' }}>
            <span className="block italic" style={{ opacity: 0, color: '#c8a96e' }}>
              {personal.lastName}
            </span>
          </span>
        </h1>

        {/* Descriptor row */}
        <div
          data-hero="desc"
          className="flex items-start gap-16"
          style={{ marginTop: '2.5rem', opacity: 0 }}
        >
          <div
            className="font-light"
            style={{ fontSize: '1rem', color: '#8a8884', maxWidth: '28ch', lineHeight: '1.6' }}
          >
            <strong
              className="block font-normal"
              style={{ color: '#f0ede8', marginBottom: '0.3rem' }}
            >
              {personal.tagline}
            </strong>
            Building thoughtful software at the intersection of elegant interfaces and solid engineering.
          </div>

          {/* CTAs */}
          <div data-hero="cta" className="flex flex-col items-start gap-3" style={{ opacity: 0 }}>
            <a href="#about" className="btn btn-primary">Read my story ↓</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex flex-col items-center gap-2"
        style={{
          bottom: '2rem',
          right: '3rem',
          opacity: 0,
          animation: 'heroFadeIn 1s 1.8s forwards',
        }}
      >
        <div className="scroll-line" />
        <span
          className="uppercase"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: '#4a4845',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`@keyframes heroFadeIn { to { opacity: 1; } }`}</style>
    </section>
  )
}
