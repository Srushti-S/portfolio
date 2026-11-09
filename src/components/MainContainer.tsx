import { useEffect, useRef } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Publications from "./Publications";
import ResumeButton from "./ResumeButton";
import Work from "./Work";
import TechStack from "./TechStack";
import setSplitText from "./utils/splitText";
import { setSceneTimeline, cleanupSceneTimeline } from "./utils/GsapScroll";
import { initialFX } from "./utils/initialFX";
import { prefersReducedMotion } from "./utils/motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = prefersReducedMotion();
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: !reduceMotion,
      anchors: true,
    });
    lenisRef.current = lenis;

    lenis.start();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => {
      setSplitText();
      setSceneTimeline();
      ScrollTrigger.refresh();
      initialFX(() => {}, reduceMotion);
    }, 150);

    const resizeHandler = () => {
      setSplitText();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeHandler);
      lenis.destroy();
      cleanupSceneTimeline();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar lenisRef={lenisRef} />
      <ResumeButton />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <Career />
            <Work />
            <Publications />
            <TechStack />
            <Education />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
