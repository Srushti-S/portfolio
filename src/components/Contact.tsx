import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import { personal } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const linkedInHandle = personal.linkedin
    ? personal.linkedin.replace(/\/$/, "").split("/").pop()
    : "srushtis7";

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-grid">

          { }
          <div className="contact-left">
            <h2 className="contact-headline">
              Let's build<br />
              <em>something together</em>
            </h2>
            <p className="contact-sub">
              I'm currently open to full-time roles, internships, and interesting
              collaborations. Whether you have a position to discuss or just want
              to say hi — my inbox is always open.
            </p>

            { }
            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link-row" data-cursor="disable">
                <span className="contact-link-label">EMAIL</span>
                <span className="contact-link-value">
                  {personal.email} <MdArrowOutward />
                </span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link-row" data-cursor="disable">
                <span className="contact-link-label">LINKEDIN</span>
                <span className="contact-link-value">
                  linkedin.com/in/{linkedInHandle} <MdArrowOutward />
                </span>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link-row" data-cursor="disable">
                <span className="contact-link-label">GITHUB</span>
                <span className="contact-link-value">
                  github.com/Srushti-S <MdArrowOutward />
                </span>
              </a>
            </div>

            { }
            <div className="contact-badge">
              <span className="contact-badge-dot" />
              Available for opportunites 
            </div>
          </div>

          { }
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label className="contact-field-label">YOUR NAME</label>
                <input
                  name="user_name"
                  required
                  placeholder="Srushti Sonavane"
                  className="contact-input"
                  data-cursor="disable"
                />
              </div>
              <div className="contact-field">
                <label className="contact-field-label">YOUR EMAIL</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="hello@example.com"
                  className="contact-input"
                  data-cursor="disable"
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-field-label">SUBJECT</label>
              <input
                name="subject"
                placeholder="What's on your mind?"
                className="contact-input"
                data-cursor="disable"
              />
            </div>

            <div className="contact-field">
              <label className="contact-field-label">MESSAGE</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or opportunity…"
                className="contact-input contact-textarea"
                data-cursor="disable"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="contact-submit"
              data-cursor="disable"
            >
              {status === "idle"    && "Send message →"}
              {status === "sending" && "Sending…"}
              {status === "sent"    && "Message sent ✓"}
              {status === "error"   && "Error — try again"}
            </button>
          </form>
        </div>

        { }
        <div className="contact-footer">
          <span>Designed &amp; developed by <strong>Srushti Sonavane</strong></span>
          <span className="contact-copy">
            Inspired by <a href="https://www.moncy.dev/" target="_blank" rel="noreferrer">moncy.dev</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
