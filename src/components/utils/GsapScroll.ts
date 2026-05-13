import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let mm: gsap.MatchMedia | null = null;

export function setSceneTimeline() {
  mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Reset to visible at page load
    gsap.set(".character-model", { opacity: 1, x: 0, pointerEvents: "auto" });
    gsap.set(".character-rim", { opacity: 0 }); // rim animates in via CSS keyframe

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
      // Fade out landing text
      .to(".landing-container", { opacity: 0, duration: 0.35 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
      // Photo fades out using fromTo so reverse-scrub restores it correctly
      .fromTo(".character-model", { opacity: 1 }, { opacity: 0, duration: 0.55, pointerEvents: "none" }, 0.3)
      // About text rises into view
      .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

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
      .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 30%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).fromTo(".career-section", { y: 0 }, { y: "20%", duration: 0.5 }, 0);
  });

  mm.add("all", () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".career-info",
        start: "top 60%",
        end: "bottom 55%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).fromTo(
      ".career-timeline",
      { maxHeight: "0%", opacity: 0 },
      { maxHeight: "100%", opacity: 1, duration: 1 },
      0
    );

    gsap.set(".career-info-box", { opacity: 0, y: 20 });
    ScrollTrigger.create({
      trigger: ".career-section",
      start: "top 95%",
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
  });
}

export function cleanupSceneTimeline() {
  if (mm) {
    mm.revert();
    mm.kill();
    mm = null;
  }
}
