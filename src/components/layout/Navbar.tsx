import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Animated in by useHeroReveal via .site-nav class
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={ref}
      style={{ opacity: 0 }}
      className={[
        'site-nav fixed top-0 left-0 right-0 z-50',
        'flex items-center justify-between',
        'px-6 md:px-10 py-5',
        'transition-all duration-700',
        scrolled ? 'bg-bg/75 backdrop-blur-2xl border-b border-border' : '',
      ].join(' ')}
    >
      {/* Left — name */}
      <a href="#" className="text-sm font-semibold tracking-tight text-primary hover:text-accent transition-colors duration-300">
        Srushti Sonavane
      </a>

      {/* Center — nav links (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-8">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="label hover:text-primary transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Right — availability pill */}
      <div className="flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
        <span className="label text-secondary">Available for work</span>
      </div>
    </header>
  );
}
