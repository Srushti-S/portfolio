import gsap from "gsap";

/** Wraps each character in overflow:hidden + inner translateY span */
function splitChars(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const inners: HTMLElement[] = [];
  [...text].forEach((ch) => {
    const wrap = document.createElement("span");
    wrap.style.cssText = "overflow:hidden;display:inline-block;line-height:inherit;";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.textContent = ch === " " ? "\u00A0" : ch;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    inners.push(inner);
  });
  return inners;
}

export function initialFX(resumeLenis: () => void) {
  // Resume smooth scroll
  resumeLenis();

  // Trigger the main-active fade-in on <main>
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) mainEl.classList.add("main-active");

  // Body background transition from white (loading screen) to dark
  gsap.to("body", { backgroundColor: "#0b080c", duration: 0.5, delay: 1 });

  // ── Animate landing intro: "Hello! I'm" + "SRUSHTI / SONAVANE" ──
  const introEls: HTMLElement[] = [
    ...Array.from(document.querySelectorAll<HTMLElement>(".landing-info h3")),
    ...Array.from(document.querySelectorAll<HTMLElement>(".landing-intro h2")),
    ...Array.from(document.querySelectorAll<HTMLElement>(".landing-intro h1")),
  ];
  const introChars: HTMLElement[] = [];
  introEls.forEach((el) => introChars.push(...splitChars(el)));

  gsap.fromTo(
    introChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // ── Animate "Engineer" role label ──
  const infoH2Els = document.querySelectorAll<HTMLElement>(".landing-h2-info");
  const infoH2Chars: HTMLElement[] = [];
  infoH2Els.forEach((el) => infoH2Chars.push(...splitChars(el)));

  gsap.fromTo(
    infoH2Chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // ── "Engineer / Builder" gradient heading ──
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 }
  );

  // ── Nav bar + social icons + nav fade gradient ──
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  // ── Cycling text loop: "Engineer" ↔ "Builder" ──
  const h2Info1El = document.querySelector<HTMLElement>(".landing-h2-info-1");
  const h2_1El    = document.querySelector<HTMLElement>(".landing-h2-1");
  const h2_2El    = document.querySelector<HTMLElement>(".landing-h2-2");

  if (h2Info1El && h2_1El && h2_2El) {
    const chars1 = splitChars(h2Info1El);
    const chars2 = splitChars(h2_1El);
    const chars3 = splitChars(h2_2El);
    loopText(infoH2Chars, chars1);
    loopText(chars2, chars3);
  }
}

function loopText(chars1: HTMLElement[], chars2: HTMLElement[]) {
  const tl    = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay  = 4;
  const delay2 = delay * 2 + 1;

  tl
    .fromTo(chars2, { opacity: 0, y: 80 },
      { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay }, 0)
    .fromTo(chars1, { y: 80 },
      { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(chars1, { y: 0 },
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay }, 0)
    .to(chars2,
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}
