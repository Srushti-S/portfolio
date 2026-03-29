import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setSceneTimeline() {
  if (window.innerWidth <= 1024) {
    setCareerTimeline();
    return;
  }

  // tl1 — landing: photo shifts left, text fades
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  tl1
    .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
    .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
    .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
    .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

  // tl2 — about: photo fades out
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  tl2
    .to(".about-section", { y: "30%", duration: 6 }, 0)
    .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
    .fromTo(".character-model", { pointerEvents: "inherit" },
      { pointerEvents: "none", opacity: 0, duration: 4, delay: 1 }, 0)
    .fromTo(".character-rim", { opacity: 0.6 },
      { opacity: 0, scale: 0, y: "-70%", duration: 4, delay: 1 }, 0);

  setCareerTimeline();
}

function setCareerTimeline() {
  // Line draws in as you scroll through .career-info (the items container)
  // trigger: ".career-info" so it starts RIGHT at the first card, below heading
  gsap.timeline({
    scrollTrigger: {
      trigger: ".career-info",
      start: "top 60%",
      end: "bottom 55%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  })
    .fromTo(".career-timeline",
      { maxHeight: "0%", opacity: 0 },
      { maxHeight: "100%", opacity: 1, duration: 1 },
      0
    );

  // Cards stagger in on enter (not scrub — fires once so they're always visible)
  gsap.set(".career-info-box", { opacity: 0, y: 20 });
  ScrollTrigger.create({
    trigger: ".career-info",
    start: "top 75%",
    onEnter: () => {
      gsap.to(".career-info-box", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
  });

  // Dot flicker stops when fully loaded
  gsap.set(".career-dot", { animationIterationCount: "infinite" });

  // Desktop section parallax
  if (window.innerWidth > 1024) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 30%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).fromTo(".career-section", { y: 0 }, { y: "20%", duration: 0.5 }, 0);
  }
}
