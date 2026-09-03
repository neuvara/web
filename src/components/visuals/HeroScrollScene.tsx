"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function HeroScrollScene() {
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const setProgress = (progress: number) => {
      const p = clamp(progress, 0, 1);

      hero.style.setProperty("--hero-p", p.toFixed(3));
      hero.style.setProperty("--hero-slow-y", `${(-34 * p).toFixed(1)}px`);
      hero.style.setProperty("--hero-mid-y", `${(-76 * p).toFixed(1)}px`);
      hero.style.setProperty("--hero-fast-y", `${(-124 * p).toFixed(1)}px`);
      hero.style.setProperty("--hero-left-shift", `${(-44 * p).toFixed(1)}px`);
      hero.style.setProperty("--hero-scale", (1 + p * 0.055).toFixed(3));
      hero.style.setProperty("--hero-mri-opacity", (0.66 - p * 0.38).toFixed(3));
      hero.style.setProperty("--hero-neural-opacity", (0.18 + p * 0.78).toFixed(3));
      hero.style.setProperty("--hero-line-offset", `${(640 * (1 - p)).toFixed(1)}`);
      hero.style.setProperty("--hero-chip-opacity", (0.18 + p * 0.78).toFixed(3));
      hero.style.setProperty("--hero-copy-y", `${(-18 * p).toFixed(1)}px`);
      hero.style.setProperty("--hero-copy-opacity", (1 - p * 0.08).toFixed(3));
      hero.style.setProperty("--hero-visual-blur", `${(p * 1.1).toFixed(2)}px`);

      [
        [-36, 18, -7],
        [-18, 8, -3],
        [0, 0, 0],
        [20, -8, 4],
        [38, -18, 8]
      ].forEach(([x, y, rotate], index) => {
        const factor = 1 - p * 0.72;
        hero.style.setProperty(`--slice-${index + 1}-x`, `${(x * factor).toFixed(1)}px`);
        hero.style.setProperty(`--slice-${index + 1}-y`, `${(y * factor).toFixed(1)}px`);
        hero.style.setProperty(`--slice-${index + 1}-rotate`, `${(rotate * factor).toFixed(2)}deg`);
      });
    };

    const update = () => {
      frame = 0;
      if (reduceMotion.matches) {
        setProgress(0.18);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const travel = Math.max(520, rect.height * 0.68);
      setProgress(clamp(-rect.top / travel, 0, 1));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", update);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="hero-scroll-scene">
      <div className="hero-medical-stack">
        {[0, 1, 2, 3, 4].map((slice) => (
          <span className="hero-scan-slice" key={slice} />
        ))}
      </div>

      <svg
        className="hero-neural-map"
        fill="none"
        viewBox="0 0 560 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="hero-brain-outline"
          d="M177 274c-39-4-68-31-72-68-4-34 17-59 45-67 8-50 45-82 93-76 24-31 68-34 98-10 34-12 74 1 93 32 40 5 70 37 71 78 1 33-16 58-43 72-1 46-33 79-78 80-22 31-68 37-100 12-32 18-76 11-101-15-3-10-5-23-6-38Z"
          stroke="#B8EDFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          className="hero-neural-path hero-neural-path-a"
          d="M153 205c60-24 107-10 141 42 38 58 95 71 170 42"
          stroke="#48D4C0"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          className="hero-neural-path hero-neural-path-b"
          d="M205 139c24 39 47 75 71 108 26 36 54 66 91 92"
          stroke="#69B8FF"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          className="hero-neural-path hero-neural-path-c"
          d="M141 248c70 16 126 11 168-16 47-30 92-36 137-17"
          stroke="#B8EDFF"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
        {[
          [153, 205],
          [205, 139],
          [294, 247],
          [367, 339],
          [446, 215],
          [464, 289]
        ].map(([cx, cy]) => (
          <circle className="hero-neural-node" cx={cx} cy={cy} key={`${cx}-${cy}`} r="5.5" />
        ))}
      </svg>
    </div>
  );
}
