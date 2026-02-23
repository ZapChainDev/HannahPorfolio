"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ─────────────────────────────────────────────────────
   INTRO OVERLAY
   Full-screen curtain that plays once on first visit,
   then slides up to reveal the page.
───────────────────────────────────────────────────── */

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1 — monogram drops in
      tl.from(".intro-monogram", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        // 2 — thin line expands
        .from(
          ".intro-line",
          { scaleX: 0, duration: 0.65, ease: "power2.inOut" },
          0.55,
        )
        // 3 — tagline fades up
        .from(
          ".intro-tagline",
          { y: 10, opacity: 0, duration: 0.55, ease: "power2.out" },
          0.9,
        )
        // 4 — pause, then slide the whole curtain UP
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 1.05,
          ease: "power3.inOut",
          delay: 0.55,
          onComplete: () => setHidden(true),
        });
    },
    { scope: overlayRef },
  );

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#4a5a44",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        pointerEvents: "all",
      }}
    >
      {/* Decorative ring behind monogram */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {/* Outer ring */}
        <div
          className="intro-monogram"
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            border: "1px solid rgba(232,237,224,0.18)",
            position: "absolute",
          }}
        />
        {/* Inner ring */}
        <div
          className="intro-monogram"
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            border: "1px solid rgba(232,237,224,0.30)",
            position: "absolute",
          }}
        />
        {/* Monogram letters */}
        <span
          className="intro-monogram"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2rem, 6vw, 2.8rem)",
            fontStyle: "italic",
            letterSpacing: "0.18em",
            color: "#eaede2",
            lineHeight: 1,
            position: "relative",
            zIndex: 1,
            paddingLeft: "0.18em",
          }}
        >
          HS
        </span>
      </div>

      {/* Expanding thin line */}
      <div
        className="intro-line"
        style={{
          width: "clamp(60px, 14vw, 120px)",
          height: 1,
          backgroundColor: "rgba(197,204,176,0.55)",
          transformOrigin: "center",
          marginBottom: 16,
        }}
      />

      {/* Tagline */}
      <p
        className="intro-tagline"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(0.62rem, 1.4vw, 0.74rem)",
          letterSpacing: "0.28em",
          color: "rgba(232,237,224,0.6)",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Social Media Manager
      </p>
    </div>
  );
}
