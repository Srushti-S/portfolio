import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useGSAP';
import { personal } from '../../data/portfolio';

/// <reference types="vite/client" />

const linkedInHandle = personal.linkedin
  ? personal.linkedin.replace(/\/$/, '').split('/').pop() ?? 'srushtis7'
  : 'srushtis7';

export default function Contact() {
  useScrollReveal();

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  const fieldCls =
    'w-full bg-transparent border-b border-border py-4 text-sm text-primary placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors duration-300';

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-36">

      {/* ── Header ── */}
      <div className="mb-16 flex items-center gap-4">
        <span className="sr-line block h-px w-10 bg-border" />
        <span className="label">Contact</span>
      </div>

      {/* ── Big CTA heading ── */}
      <div className="mb-20">
        <h2 className="sr-chars text-section text-primary">
          Let's work
        </h2>
        <h2 className="sr-chars text-section">
          <span className="text-primary">together</span>
          <span className="text-accent">.</span>
        </h2>
      </div>

      {/* ── Two columns ── */}
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-28">

        {/* Left — links */}
        <div className="flex flex-col gap-10">
          <p className="sr-up max-w-sm text-sm leading-relaxed text-secondary">
            Have a role in mind, a project to collaborate on, or just want to
            say hi? My inbox is always open.
          </p>

          <div className="space-y-6">
            {/* Email — large */}
            <a
              href={`mailto:${personal.email}`}
              className="sr-up group flex items-center justify-between border-b border-border pb-5 hover:border-accent/50 transition-colors duration-300"
            >
              <div>
                <p className="label mb-1 text-muted">Email</p>
                <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                  {personal.email}
                </p>
              </div>
              <svg className="text-secondary group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>

            {/* LinkedIn */}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="sr-up group flex items-center justify-between border-b border-border pb-5 hover:border-accent/50 transition-colors duration-300"
              >
                <div>
                  <p className="label mb-1 text-muted">LinkedIn</p>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    /in/{linkedInHandle}
                  </p>
                </div>
                <svg className="text-secondary group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            )}

            {/* GitHub */}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="sr-up group flex items-center justify-between border-b border-border pb-5 hover:border-accent/50 transition-colors duration-300"
              >
                <div>
                  <p className="label mb-1 text-muted">GitHub</p>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    @Srushti-S
                  </p>
                </div>
                <svg className="text-secondary group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Right — form */}
        <div className="sr-up">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <input type="text"   name="user_name"  required placeholder="Name"    className={fieldCls} />
            <input type="email"  name="user_email" required placeholder="Email"   className={fieldCls} />
            <textarea            name="message"    required placeholder="Message" rows={4} className={`${fieldCls} resize-none`} />

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="label group flex items-center gap-3 border border-border px-7 py-3.5 text-secondary transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-40"
            >
              {status === 'idle'    && <><span>Send Message</span><span className="group-hover:translate-x-1 transition-transform duration-300">→</span></>}
              {status === 'sending' && 'Sending…'}
              {status === 'sent'    && 'Sent ✓'}
              {status === 'error'   && 'Error — try again'}
            </button>
          </form>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-32 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
        <p className="label text-muted">© 2025 Srushti Sonavane. All rights reserved.</p>
        <p className="label text-muted">Designed & built with React · GSAP · Three.js</p>
      </div>
    </section>
  );
}
