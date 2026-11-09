import gsap from "gsap";

function splitChars(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const inners: HTMLElement[] = [];
  text.split(" ").forEach((word, w, words) => {
    const wordEl = document.createElement("span");
    wordEl.style.cssText = "display:inline-block;white-space:nowrap;";
    wordEl.setAttribute("aria-hidden", "true");
    [...word].forEach((ch) => {
      const wrap = document.createElement("span");
      wrap.style.cssText = "overflow:hidden;display:inline-block;line-height:inherit;vertical-align:top;";
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = ch;
      wrap.appendChild(inner);
      wordEl.appendChild(wrap);
      inners.push(inner);
    });
    el.appendChild(wordEl);
    if (w < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  return inners;
}

export function initialFX(resumeLenis: () => void, reduceMotion = false) {
  resumeLenis();
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) mainEl.classList.add("main-active");

  if (reduceMotion) {
    gsap.set("body", { backgroundColor: "#05080f" });
    return;
  }

  gsap.to("body", { backgroundColor: "#05080f", duration: 0.5, delay: 1 });

  const nameEl = document.querySelector<HTMLElement>(".hero-name");
  if (nameEl) {
    gsap.fromTo(
      splitChars(nameEl),
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.inOut",
        stagger: 0.025,
        delay: 0.2,
      }
    );
  }

  gsap.fromTo(
    [".hero-status", ".hero-role", ".hero-pitch", ".hero-now", ".hero-ctas"],
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.08, delay: 0.45 }
  );

  gsap.fromTo(
    ".hero-demo",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.7 }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );
}
