import { PropsWithChildren, useEffect, useRef, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import TechStack from "./TechStack";
import setSplitText from "./utils/splitText";
import { setSceneTimeline, cleanupSceneTimeline } from "./utils/GsapScroll";
import { initialFX } from "./utils/initialFX";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = ({
  children,
  onLenisReady,
}: PropsWithChildren<{ onLenisReady: (lenis: any) => void }>) => {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    onLenisReady(lenis);

    lenis.start();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => {
      setSplitText();
      setSceneTimeline();
      ScrollTrigger.refresh();
      setIsDesktopView(window.innerWidth > 1024);
      initialFX(() => {});
    }, 150);

    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
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
      <SocialIcons />

      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <Career />
            <Work />
            <TechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
