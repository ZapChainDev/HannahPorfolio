"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NAME_CHARS = "VIRTUALLY HANA".split("");

/* ─────────────────────────────────────────────────────
   INTRO OVERLAY — editorial splash screen
───────────────────────────────────────────────────── */
export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* ── 0 — dot-grid flickers in ── */
      tl.from(".intro-dot", {
        opacity: 0,
        scale: 0,
        stagger: { amount: 0.6, from: "center" },
        duration: 0.4,
        ease: "back.out(2)",
      });

      /* ── 1 — corner brackets draw in ── */
      tl.from(
        ".intro-brk-h",
        { scaleX: 0, duration: 0.5, ease: "power2.inOut", stagger: 0.06 },
        0.3,
      ).from(
        ".intro-brk-v",
        { scaleY: 0, duration: 0.5, ease: "power2.inOut", stagger: 0.06 },
        0.3,
      );

      /* ── 2 — botanical bloom ── */
      tl.from(
        ".intro-botanical",
        {
          scale: 0,
          opacity: 0,
          rotate: -30,
          duration: 0.9,
          ease: "back.out(1.5)",
        },
        0.5,
      );

      /* ── 3 — monogram rings expand ── */
      tl.from(
        ".intro-ring",
        {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.4)",
        },
        0.65,
      );

      /* ── 4 — HS text ── */
      tl.from(".intro-hs", { y: 24, opacity: 0, duration: 0.7 }, 0.9);

      /* ── 5 — decorative divider ── */
      tl.from(
        ".intro-divider",
        { scaleX: 0, duration: 0.6, ease: "power2.inOut" },
        1.1,
      );

      /* ── 6 — name chars stagger in ── */
      tl.from(
        ".intro-char",
        { y: 40, opacity: 0, duration: 0.55, stagger: 0.038 },
        1.2,
      );

      /* ── 7 — tagline ── */
      tl.from(".intro-tagline", { y: 12, opacity: 0, duration: 0.5 }, 1.7);

      /* ── 8 — progress bar fills ── */
      tl.from(
        ".intro-progress-fill",
        { scaleX: 0, duration: 1.1, ease: "power2.inOut" },
        1.8,
      );

      /* ── 9 — EXIT: panels slide up in stagger ── */
      tl.to(
        ".intro-panel",
        {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
          stagger: 0.09,
          delay: 0.3,
          onComplete: () => setHidden(true),
        },
        2.9,
      );
    },
    { scope: overlayRef },
  );

  if (hidden) return null;

  /* dot grid */
  const DOTS = 7 * 5;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "all",
      }}
    >
      {/* ── Three vertical panels (staggered exit) ── */}
      {[0, 1, 2].map((p) => (
        <div
          key={p}
          className="intro-panel"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${(p / 3) * 100}%`,
            width: "33.4%",
            backgroundColor: p === 1 ? "#3d4d38" : "#4a5a44",
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Content layer (above panels) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            padding: "48px 64px",
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: DOTS }).map((_, i) => (
            <div
              key={i}
              className="intro-dot"
              style={{
                placeSelf: "center",
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "rgba(197,204,176,0.18)",
              }}
            />
          ))}
        </div>

        {/* Corner brackets */}
        {/* Top-left */}
        <div style={{ position: "absolute", top: 28, left: 32 }}>
          <div
            className="intro-brk-h"
            style={{
              width: 36,
              height: 1.5,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "left",
              marginBottom: 0,
            }}
          />
          <div
            className="intro-brk-v"
            style={{
              width: 1.5,
              height: 36,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "top",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
        {/* Top-right */}
        <div style={{ position: "absolute", top: 28, right: 32 }}>
          <div
            className="intro-brk-h"
            style={{
              width: 36,
              height: 1.5,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "right",
            }}
          />
          <div
            className="intro-brk-v"
            style={{
              width: 1.5,
              height: 36,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "top",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        </div>
        {/* Bottom-left */}
        <div style={{ position: "absolute", bottom: 28, left: 32 }}>
          <div
            className="intro-brk-h"
            style={{
              width: 36,
              height: 1.5,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "left",
            }}
          />
          <div
            className="intro-brk-v"
            style={{
              width: 1.5,
              height: 36,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "bottom",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          />
        </div>
        {/* Bottom-right */}
        <div style={{ position: "absolute", bottom: 28, right: 32 }}>
          <div
            className="intro-brk-h"
            style={{
              width: 36,
              height: 1.5,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "right",
            }}
          />
          <div
            className="intro-brk-v"
            style={{
              width: 1.5,
              height: 36,
              backgroundColor: "rgba(197,204,176,0.5)",
              transformOrigin: "bottom",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </div>

        {/* Botanical SVG — left side */}
        <svg
          className="intro-botanical"
          style={{
            position: "absolute",
            left: "clamp(32px,8vw,100px)",
            top: "50%",
            transform: "translateY(-60%)",
            opacity: 0.22,
            pointerEvents: "none",
          }}
          width="90"
          height="160"
          viewBox="0 0 90 160"
          fill="none"
        >
          {/* stem */}
          <line
            x1="45"
            y1="155"
            x2="45"
            y2="20"
            stroke="#c5ccb0"
            strokeWidth="1.2"
          />
          {/* leaves */}
          <ellipse
            cx="45"
            cy="110"
            rx="22"
            ry="9"
            fill="#8f9f84"
            transform="rotate(-30 45 110)"
          />
          <ellipse
            cx="45"
            cy="80"
            rx="22"
            ry="9"
            fill="#8f9f84"
            transform="rotate(30 45 80)"
          />
          <ellipse
            cx="45"
            cy="52"
            rx="18"
            ry="8"
            fill="#c5ccb0"
            transform="rotate(-20 45 52)"
          />
          {/* flower head */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
            <ellipse
              key={i}
              cx={45 + 13 * Math.cos((a * Math.PI) / 180)}
              cy={22 + 13 * Math.sin((a * Math.PI) / 180)}
              rx="6"
              ry="3.5"
              fill="#c5ccb0"
              transform={`rotate(${a} ${45 + 13 * Math.cos((a * Math.PI) / 180)} ${22 + 13 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          <circle cx="45" cy="22" r="5.5" fill="#eaede2" />
        </svg>

        {/* Botanical SVG — right side (mirrored) */}
        <svg
          className="intro-botanical"
          style={{
            position: "absolute",
            right: "clamp(32px,8vw,100px)",
            top: "50%",
            transform: "translateY(-60%) scaleX(-1)",
            opacity: 0.22,
            pointerEvents: "none",
          }}
          width="90"
          height="160"
          viewBox="0 0 90 160"
          fill="none"
        >
          <line
            x1="45"
            y1="155"
            x2="45"
            y2="20"
            stroke="#c5ccb0"
            strokeWidth="1.2"
          />
          <ellipse
            cx="45"
            cy="110"
            rx="22"
            ry="9"
            fill="#8f9f84"
            transform="rotate(-30 45 110)"
          />
          <ellipse
            cx="45"
            cy="80"
            rx="22"
            ry="9"
            fill="#8f9f84"
            transform="rotate(30 45 80)"
          />
          <ellipse
            cx="45"
            cy="52"
            rx="18"
            ry="8"
            fill="#c5ccb0"
            transform="rotate(-20 45 52)"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
            <ellipse
              key={i}
              cx={45 + 13 * Math.cos((a * Math.PI) / 180)}
              cy={22 + 13 * Math.sin((a * Math.PI) / 180)}
              rx="6"
              ry="3.5"
              fill="#c5ccb0"
              transform={`rotate(${a} ${45 + 13 * Math.cos((a * Math.PI) / 180)} ${22 + 13 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          <circle cx="45" cy="22" r="5.5" fill="#eaede2" />
        </svg>

        {/* ── Centre content ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Monogram rings + HS */}
          <div
            style={{
              position: "relative",
              width: 120,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <div
              className="intro-ring"
              style={{
                position: "absolute",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(232,237,224,0.12)",
              }}
            />
            <div
              className="intro-ring"
              style={{
                position: "absolute",
                width: 96,
                height: 96,
                borderRadius: "50%",
                border: "1px solid rgba(232,237,224,0.22)",
              }}
            />
            <div
              className="intro-ring"
              style={{
                position: "absolute",
                width: 70,
                height: 70,
                borderRadius: "50%",
                border: "1px solid rgba(232,237,224,0.35)",
                borderStyle: "dashed",
              }}
            />
            <span
              className="intro-hs"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem,5vw,2.4rem)",
                fontStyle: "italic",
                letterSpacing: "0.16em",
                color: "#eaede2",
                lineHeight: 1,
                paddingLeft: "0.16em",
                position: "relative",
                zIndex: 1,
              }}
            >
              HS
            </span>
          </div>

          {/* Divider */}
          <div
            className="intro-divider"
            style={{
              width: "clamp(48px,10vw,100px)",
              height: 1,
              backgroundColor: "rgba(197,204,176,0.4)",
              transformOrigin: "center",
              marginBottom: 20,
            }}
          />

          {/* Full name — char by char */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 0,
              marginBottom: 14,
            }}
          >
            {NAME_CHARS.map((ch, i) => (
              <span
                key={i}
                className="intro-char"
                style={{
                  display: "inline-block",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.5rem,4.5vw,3rem)",
                  fontWeight: 400,
                  letterSpacing: ch === " " ? "0.6em" : "0.22em",
                  color: "#eaede2",
                  whiteSpace: ch === " " ? "pre" : "normal",
                  lineHeight: 1.1,
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p
            className="intro-tagline"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(0.58rem,1.3vw,0.72rem)",
              letterSpacing: "0.36em",
              color: "rgba(232,237,224,0.45)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Social Media Manager & Strategist
          </p>
        </div>

        {/* Progress bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(120px,22vw,200px)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(197,204,176,0.15)",
              overflow: "hidden",
            }}
          >
            <div
              className="intro-progress-fill"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(197,204,176,0.55)",
                transformOrigin: "left",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
