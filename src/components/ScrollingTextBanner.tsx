"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────
   SCROLL-DRIVEN TEXT BANNER
   Two repeating rows slide in opposite directions
   as the user scrolls — tied 1:1 to scroll position.
───────────────────────────────────────────────────── */

const ROW_1 =
  "SOCIAL MEDIA MANAGER · CONTENT CREATION · BRAND STRATEGY · COMMUNITY GROWTH · ";
const ROW_2 =
  "INSTAGRAM · TIKTOK · PINTEREST · LINKEDIN · CONTENT PLANNING · ANALYTICS · ";

// Repeat enough times so the strip is always full-width + overflow
const REPEAT = 6;

export default function ScrollingTextBanner() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Row 1 — slides LEFT as page scrolls down
      gsap.to(".stb-row-1", {
        x: "-18vw",
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Row 2 — slides RIGHT (opposite direction)
      gsap.to(".stb-row-2", {
        x: "18vw",
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: wrapRef },
  );

  return (
    <div
      ref={wrapRef}
      style={{
        backgroundColor: "#4a5a44",
        overflow: "hidden",
        paddingTop: 18,
        paddingBottom: 18,
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Row 1 — moves left on scroll */}
      <div
        className="stb-row-1"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          marginBottom: 6,
        }}
      >
        {Array.from({ length: REPEAT }).map((_, i) => (
          <TextFragment key={i} text={ROW_1} />
        ))}
      </div>

      {/* Row 2 — moves right on scroll */}
      <div
        className="stb-row-2"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          transform: "translateX(-18vw)", // start offset so it fills edge from the start
        }}
      >
        {Array.from({ length: REPEAT }).map((_, i) => (
          <TextFragment key={i} text={ROW_2} accent />
        ))}
      </div>
    </div>
  );
}

function TextFragment({
  text,
  accent = false,
}: {
  text: string;
  accent?: boolean;
}) {
  return (
    <span
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(0.68rem, 1.1vw, 0.82rem)",
        letterSpacing: "0.22em",
        color: accent ? "rgba(197,204,176,0.75)" : "rgba(232,237,224,0.9)",
        textTransform: "uppercase",
        paddingRight: "2em",
        lineHeight: 1.5,
        flexShrink: 0,
      }}
    >
      {text}
    </span>
  );
}
