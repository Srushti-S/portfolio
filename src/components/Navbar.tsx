import { useEffect, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ lenisRef }: { lenisRef: React.MutableRefObject<any> }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const section = element.getAttribute("data-href");
        if (section && lenisRef.current) {
          e.preventDefault();
          lenisRef.current.scrollTo(section, { duration: 1.5 });
        }
        setMenuOpen(false);
      });
    });
  }, []);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <div className={`header ${menuOpen ? "menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          Srushti Sonavane
        </a>
        <a
          href="mailto:srushtisonavane@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          srushtisonavane@gmail.com
        </a>

        { }
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          data-cursor="disable"
        >
          <span className="hamburger-line hamburger-line--1" />
          <span className="hamburger-line hamburger-line--2" />
          <span className="hamburger-line hamburger-line--3" />
        </button>

        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={closeMenu}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={closeMenu}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={closeMenu}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}

      { }
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
