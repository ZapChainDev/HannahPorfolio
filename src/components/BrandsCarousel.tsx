"use client";

// ── NEW FILE ──
const _unused = null;
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BossBaeLogo() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
      {/* Pink hashtag */}
      <svg
        width="30"
        height="38"
        viewBox="0 0 30 38"
        fill="none"
        style={{ flexShrink: 0, marginTop: 2 }}
      >
        <line
          x1="4"
          y1="13"
          x2="27"
          y2="13"
          stroke="#d4637a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="23"
          x2="25"
          y2="23"
          stroke="#d4637a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="6"
          x2="7"
          y2="32"
          stroke="#d4637a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="6"
          x2="17"
          y2="32"
          stroke="#d4637a"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1.65rem",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          bossbae
        </span>
        <span
          style={{
            fontFamily: "Georgia,serif",
            fontSize: "0.5rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#d4637a",
          }}
        >
          consulting
        </span>
      </div>
    </div>
  );
}

function SeedCompanyLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {/* Left botanical branch */}
      <svg width="34" height="72" viewBox="0 0 34 72" fill="none">
        <path
          d="M17 70 C17 55 15 38 17 8"
          stroke="#3d6040"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M17 55 Q7 46 4 36 Q11 41 17 50"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 42 Q6 33 3 22 Q11 28 17 38"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 29 Q8 20 7 11 Q13 17 17 25"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 50 Q27 41 30 31 Q23 36 17 46"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 37 Q28 28 31 17 Q24 23 17 33"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 24 Q26 15 27 6 Q21 12 17 20"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <circle cx="4" cy="35" r="1.6" fill="#3d6040" opacity="0.55" />
        <circle cx="31" cy="30" r="1.6" fill="#3d6040" opacity="0.55" />
        <circle cx="6" cy="21" r="1.2" fill="#3d6040" opacity="0.4" />
        <circle cx="28" cy="16" r="1.2" fill="#3d6040" opacity="0.4" />
        <path
          d="M17 8 Q19 2 24 4 Q20 0 17 2"
          stroke="#3d6040"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "0.65rem",
            fontStyle: "italic",
            color: "#3d6040",
            letterSpacing: "0.14em",
          }}
        >
          the
        </span>
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#2e5030",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
          }}
        >
          seed
        </span>
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "0.7rem",
            fontStyle: "italic",
            color: "#3d6040",
            letterSpacing: "0.06em",
          }}
        >
          company
        </span>
      </div>

      {/* Right branch (mirrored) */}
      <svg
        width="34"
        height="72"
        viewBox="0 0 34 72"
        fill="none"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M17 70 C17 55 15 38 17 8"
          stroke="#3d6040"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M17 55 Q7 46 4 36 Q11 41 17 50"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 42 Q6 33 3 22 Q11 28 17 38"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 29 Q8 20 7 11 Q13 17 17 25"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 50 Q27 41 30 31 Q23 36 17 46"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 37 Q28 28 31 17 Q24 23 17 33"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <path
          d="M17 24 Q26 15 27 6 Q21 12 17 20"
          stroke="#3d6040"
          strokeWidth="0.9"
          fill="#3d6040"
          fillOpacity="0.18"
        />
        <circle cx="4" cy="35" r="1.6" fill="#3d6040" opacity="0.55" />
        <circle cx="31" cy="30" r="1.6" fill="#3d6040" opacity="0.55" />
        <circle cx="6" cy="21" r="1.2" fill="#3d6040" opacity="0.4" />
        <circle cx="28" cy="16" r="1.2" fill="#3d6040" opacity="0.4" />
        <path
          d="M17 8 Q19 2 24 4 Q20 0 17 2"
          stroke="#3d6040"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

function WillaLaneLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1.7rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#b05530",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          willa
        </span>

        {/* Botanical emblem */}
        <svg width="30" height="38" viewBox="0 0 30 38" fill="none">
          <line
            x1="15"
            y1="36"
            x2="15"
            y2="4"
            stroke="#b05530"
            strokeWidth="1"
          />
          <path
            d="M15 28 Q6 22 3 14 Q10 18 15 26"
            fill="#b05530"
            opacity="0.85"
          />
          <path
            d="M15 28 Q24 22 27 14 Q20 18 15 26"
            fill="#b05530"
            opacity="0.85"
          />
          <path
            d="M15 18 Q7 12 5 5 Q12 10 15 16"
            fill="#b05530"
            opacity="0.7"
          />
          <path
            d="M15 18 Q23 12 25 5 Q18 10 15 16"
            fill="#b05530"
            opacity="0.7"
          />
          <circle cx="15" cy="4" r="2.2" fill="#b05530" />
          <circle cx="9" cy="6" r="1.4" fill="#b05530" opacity="0.65" />
          <circle cx="21" cy="6" r="1.4" fill="#b05530" opacity="0.65" />
          <circle cx="3" cy="13" r="1.3" fill="#b05530" opacity="0.5" />
          <circle cx="27" cy="13" r="1.3" fill="#b05530" opacity="0.5" />
        </svg>

        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1.7rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#b05530",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          lane
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 20,
            height: 1,
            backgroundColor: "#b05530",
            opacity: 0.55,
          }}
        />
        <span
          style={{
            fontFamily: "Georgia,serif",
            fontSize: "0.5rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#b05530",
          }}
        >
          photography
        </span>
        <div
          style={{
            width: 20,
            height: 1,
            backgroundColor: "#b05530",
            opacity: 0.55,
          }}
        />
      </div>
    </div>
  );
}

function SarahJonesLogo() {
  return (
    <div style={{ position: "relative", width: 112, height: 112 }}>
      <svg
        width="112"
        height="112"
        viewBox="0 0 112 112"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Dashed ring */}
        <circle
          cx="56"
          cy="56"
          r="51"
          stroke="#bca870"
          strokeWidth="0.9"
          strokeDasharray="2.5 3.5"
          opacity="0.65"
        />
        <circle
          cx="56"
          cy="56"
          r="44"
          stroke="#bca870"
          strokeWidth="0.4"
          opacity="0.3"
        />

        {/* Top-left teal feathers */}
        <path
          d="M20 30 Q12 18 18 10 Q22 18 20 30"
          fill="#6aacac"
          opacity="0.75"
        />
        <path
          d="M27 22 Q21 10 28 5 Q30 14 27 22"
          fill="#75b5b0"
          opacity="0.65"
        />
        <path
          d="M14 22 Q6 13 10 6 Q16 13 14 22"
          fill="#80baba"
          opacity="0.55"
        />
        <line
          x1="20"
          y1="30"
          x2="18"
          y2="10"
          stroke="#6aacac"
          strokeWidth="0.7"
          opacity="0.6"
        />
        <line
          x1="27"
          y1="22"
          x2="28"
          y2="5"
          stroke="#75b5b0"
          strokeWidth="0.7"
          opacity="0.5"
        />
        <line
          x1="14"
          y1="22"
          x2="10"
          y2="6"
          stroke="#80baba"
          strokeWidth="0.7"
          opacity="0.45"
        />

        {/* Top-right gold berries */}
        <circle cx="80" cy="14" r="3" fill="#c8a835" opacity="0.75" />
        <circle cx="88" cy="20" r="2.2" fill="#c8a835" opacity="0.65" />
        <circle cx="85" cy="9" r="1.8" fill="#d4b840" opacity="0.6" />
        <circle cx="93" cy="28" r="2" fill="#c8a835" opacity="0.55" />
        <circle cx="95" cy="16" r="1.4" fill="#d4b840" opacity="0.45" />
        <path
          d="M80 14 Q84 24 85 34"
          stroke="#c8a835"
          strokeWidth="0.7"
          opacity="0.45"
          fill="none"
        />
        <path
          d="M88 20 Q89 30 88 38"
          stroke="#c8a835"
          strokeWidth="0.6"
          opacity="0.35"
          fill="none"
        />

        {/* Bottom-right feathers */}
        <path
          d="M84 84 Q94 88 92 98 Q86 90 84 84"
          fill="#6aacac"
          opacity="0.65"
        />
        <path
          d="M90 76 Q100 80 100 90 Q93 83 90 76"
          fill="#75b5b0"
          opacity="0.55"
        />
        <line
          x1="84"
          y1="84"
          x2="92"
          y2="98"
          stroke="#6aacac"
          strokeWidth="0.7"
          opacity="0.5"
        />
        <line
          x1="90"
          y1="76"
          x2="100"
          y2="90"
          stroke="#75b5b0"
          strokeWidth="0.7"
          opacity="0.4"
        />

        {/* Bottom-left small leaves & berries */}
        <path
          d="M24 84 Q15 92 17 100 Q24 92 24 84"
          fill="#90b880"
          opacity="0.5"
        />
        <circle cx="32" cy="96" r="2" fill="#c8a835" opacity="0.5" />
        <circle cx="25" cy="101" r="1.5" fill="#c8a835" opacity="0.4" />
      </svg>

      {/* Center text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#2a2a2a",
            lineHeight: 1.25,
            textAlign: "center",
          }}
        >
          sarah
        </span>
        <span
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#2a2a2a",
            lineHeight: 1.25,
            textAlign: "center",
          }}
        >
          jones
        </span>
        <span
          style={{
            fontFamily: "Georgia,serif",
            fontSize: "0.4rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#bca870",
            marginTop: 3,
          }}
        >
          photography
        </span>
      </div>
    </div>
  );
}

const _unused2 = null;

export default function BrandsCarousel() {
  const set = [
    <BossBaeLogo key="bb" />,
    <SeedCompanyLogo key="sc" />,
    <WillaLaneLogo key="wl" />,
    <SarahJonesLogo key="sj" />,
  ];
  const track = [...set, ...set];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });
      tl.from(
        ".brands-heading",
        { y: 22, opacity: 0, duration: 0.65, immediateRender: false },
        0,
      ).from(
        ".brands-logo",
        {
          y: 28,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          immediateRender: false,
        },
        0.2,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#f2f5ed",
        borderTop: "1px solid rgba(74,90,68,0.08)",
        borderBottom: "1px solid rgba(74,90,68,0.08)",
        overflow: "hidden",
        paddingTop: 48,
        paddingBottom: 52,
      }}
    >
      {/* Heading */}
      <div
        className="brands-heading"
        style={{ textAlign: "center", marginBottom: 44 }}
      >
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#4a5a44",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Brands I&rsquo;ve Worked With
        </h2>
      </div>

      {/* Scrolling rail */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #f2f5ed, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #f2f5ed, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="brands-logo"
              style={{
                padding: "0 64px",
                borderRight: "1px solid rgba(74,90,68,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                opacity: 0.85,
                transition: "opacity 0.3s ease",
                minWidth: 220,
                height: 110,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "0.85")
              }
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
