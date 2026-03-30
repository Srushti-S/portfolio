import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitChars?: HTMLElement[];
  splitWords?: HTMLElement[];
}

function splitIntoChars(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const chars: HTMLElement[] = [];
  [...text].forEach((ch) => {
    const wrap = document.createElement("span");
    wrap.style.overflow = "hidden";
    wrap.style.display = "inline-block";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.textContent = ch === " " ? "\u00A0" : ch;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    chars.push(inner);
  });
  return chars;
}

function splitIntoWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const words: HTMLElement[] = [];
  text.split(/\s+/).filter(Boolean).forEach((word, i, arr) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = word;
    el.appendChild(span);
    if (i < arr.length - 1) el.appendChild(document.createTextNode(" "));
    words.push(span);
  });
  return words;
}

let refreshListenerAdded = false;

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<SplitElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<SplitElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: SplitElement) => {
    para.classList.add("visible");
    if (para.anim) para.anim.progress(1).kill();
    const words = splitIntoWords(para);
    para.splitWords = words;
    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: SplitElement) => {
    if (title.anim) title.anim.progress(1).kill();
    const chars = splitIntoChars(title);
    title.splitChars = chars;
    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  if (!refreshListenerAdded) {
    ScrollTrigger.addEventListener("refresh", () => setSplitText());
    refreshListenerAdded = true;
  }
}
