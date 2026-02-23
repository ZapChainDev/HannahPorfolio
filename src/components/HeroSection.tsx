"use client";

import { useState, useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ─────────────────────────────────────────
   HERO SECTION — luxury feminine editorial
───────────────────────────────────────── */
export default function HeroSection() {
  const { isMobile, isTablet, width } = useBreakpoint();
  const stacked = isMobile || isTablet;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-left", { x: -60, opacity: 0, duration: 1.1 }, 0)
        .from(
          ".hero-sparkle",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(3)",
            stagger: 0.14,
          },
          0.6,
        )
        .from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.65 }, 0.22)
        .from(".hero-badge", { y: 24, opacity: 0, duration: 0.7 }, 0.32)
        .from(".hero-headline", { y: 28, opacity: 0, duration: 0.75 }, 0.46)
        .from(
          ".hero-divider",
          { scaleX: 0, opacity: 0, duration: 0.55, transformOrigin: "center" },
          0.58,
        )
        .from(".hero-tagline", { y: 18, opacity: 0, duration: 0.6 }, 0.66)
        .from(".hero-cta", { y: 22, opacity: 0, duration: 0.6 }, 0.76)
        .from(
          ".hero-swatch",
          {
            scale: 0,
            opacity: 0,
            duration: 0.42,
            ease: "back.out(2)",
            stagger: 0.07,
          },
          0.86,
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#eaede2",
        minHeight: stacked ? "auto" : "calc(100vh - 68px)",
        display: "flex",
        alignItems: stacked ? "center" : "flex-end",
        justifyContent: "center",
        paddingTop: stacked ? 48 : 72,
        paddingBottom: 0,
        paddingLeft: stacked ? 20 : 56,
        paddingRight: stacked ? 20 : 56,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient radial glow */}
      <div
        style={{
          position: "absolute",
          width: stacked ? 300 : 580,
          height: stacked ? 300 : 580,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(143,159,132,0.14) 0%, rgba(143,159,132,0) 72%)",
          top: stacked ? 20 : -80,
          right: stacked ? -60 : -120,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1320,
          display: "flex",
          flexDirection: stacked ? "column" : "row",
          alignItems: stacked ? "center" : "flex-end",
          gap: stacked ? 36 : 64,
          margin: "0 auto",
        }}
      >
        <LeftColumn screenWidth={width} stacked={stacked} />
        <RightColumn stacked={stacked} isMobile={isMobile} />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   LEFT COLUMN — layered arch portrait frame
══════════════════════════════════════════ */
function LeftColumn({
  screenWidth,
  stacked,
}: {
  screenWidth: number;
  stacked: boolean;
}) {
  const scale = stacked
    ? Math.min(1, (screenWidth - 40) / 660)
    : Math.min(1, screenWidth / 1380);

  const photoW = Math.round(380 * scale);
  const photoR = photoW / 2;
  const archW = Math.round(540 * scale);
  const archH = Math.round(680 * scale);
  const archR = archW / 2;
  const archL = Math.round(100 * scale);
  const archT = Math.round(24 * scale);
  const ctrW = Math.round(660 * scale);
  const ctrH = archH + archT;
  const photoL = Math.round(58 * scale);
  const photoT = Math.round(108 * scale);
  const photoH = ctrH - photoT;

  const rings = [
    { expand: 48, opacity: 0.5, strokeW: 1.5 },
    { expand: 96, opacity: 0.28, strokeW: 1 },
  ];

  return (
    <div
      className="hero-left"
      style={{
        position: "relative",
        flexShrink: 0,
        width: ctrW,
        height: ctrH,
        margin: stacked ? "0 auto" : undefined,
      }}
    >
      {/* 1 — Soft cream backing circle */}
      <div
        style={{
          position: "absolute",
          width: Math.round(460 * scale),
          height: Math.round(460 * scale),
          borderRadius: "50%",
          backgroundColor: "rgba(213,207,192,0.25)",
          top: archT + Math.round(60 * scale),
          left: archL + Math.round(40 * scale),
          zIndex: 0,
        }}
      />

      {/* 2 — Main sage arch */}
      <svg
        style={{ position: "absolute", left: archL, top: archT, zIndex: 1 }}
        width={archW}
        height={archH}
        viewBox={`0 0 ${archW} ${archH}`}
        fill="none"
      >
        <defs>
          <linearGradient id="archGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a6b53" />
            <stop offset="100%" stopColor="#4a5a44" />
          </linearGradient>
        </defs>
        <path
          d={`M 0,${archH} L 0,${archR} A ${archR},${archR} 0 0,1 ${archW},${archR} L ${archW},${archH} Z`}
          fill="url(#archGrad)"
        />
      </svg>

      {/* 3 — Muted accent circle top-right */}
      <div
        style={{
          position: "absolute",
          width: Math.round(68 * scale),
          height: Math.round(68 * scale),
          borderRadius: "50%",
          backgroundColor: "#8f9f84",
          top: archT + Math.round(8 * scale),
          left: archL + archW - Math.round(112 * scale),
          zIndex: 25,
          boxShadow: "inset 0 3px 8px rgba(0,0,0,0.07)",
        }}
      />

      {/* 4 — Thin ring outlines */}
      {rings.map(({ expand, opacity, strokeW }, i) => {
        const exp = Math.round(expand * scale);
        const rw = photoW + exp;
        const rh = photoH + exp * 0.6;
        const rr = rw / 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: rw,
              height: rh,
              left: photoL - exp / 2,
              top: photoT - exp * 0.3,
              borderTopLeftRadius: `${rr}px ${rr}px`,
              borderTopRightRadius: `${rr}px ${rr}px`,
              border: `${strokeW}px solid rgba(143,159,132,${opacity})`,
              borderBottom: "none",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* 5 — Photo arch */}
      <div
        style={{
          position: "absolute",
          width: photoW,
          height: photoH,
          left: photoL,
          top: photoT,
          borderTopLeftRadius: `${photoR}px ${photoR}px`,
          borderTopRightRadius: `${photoR}px ${photoR}px`,
          overflow: "hidden",
          zIndex: 11,
          boxShadow: "0 28px 64px rgba(74,90,68,0.2)",
        }}
      >
        <Image
          src="/HannahPhoto1.jpg"
          alt="Hannah"
          fill
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
          priority
        />
      </div>

      {/* 6 — Corner geometric accent */}
      <div
        style={{
          position: "absolute",
          left: Math.round(8 * scale),
          bottom: 0,
          width: Math.round(30 * scale),
          height: Math.round(30 * scale),
          borderLeft: "1px solid rgba(74,90,68,0.3)",
          borderBottom: "1px solid rgba(74,90,68,0.3)",
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: Math.round(8 * scale),
          bottom: 0,
          width: Math.round(30 * scale),
          height: Math.round(30 * scale),
          borderRight: "1px solid rgba(74,90,68,0.3)",
          borderBottom: "1px solid rgba(74,90,68,0.3)",
          zIndex: 15,
        }}
      />

      {/* 7 — Sparkles */}
      <Sparkle
        style={{
          left: Math.round(16 * scale),
          top: Math.round(64 * scale),
          width: Math.round(26 * scale),
        }}
      />
      <Sparkle
        style={{
          left: Math.round(52 * scale),
          top: Math.round(42 * scale),
          width: Math.round(16 * scale),
        }}
      />
      <Sparkle
        style={{
          left: Math.round(76 * scale),
          top: Math.round(88 * scale),
          width: Math.round(10 * scale),
        }}
      />
      <Sparkle
        style={{
          left: archL + archW - Math.round(24 * scale),
          top: archT + Math.round(92 * scale),
          width: Math.round(13 * scale),
          opacity: 0.5,
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   RIGHT COLUMN — editorial typography block
══════════════════════════════════════════ */
function RightColumn({
  stacked,
  isMobile,
}: {
  stacked: boolean;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: stacked ? 40 : 72,
        width: stacked ? "100%" : undefined,
        maxWidth: stacked ? 520 : undefined,
        margin: stacked ? "0 auto" : undefined,
      }}
    >
      {/* Eyebrow — availability label */}
      <div
        className="hero-eyebrow"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: isMobile ? 14 : 18,
        }}
      >
        <span
          style={{
            width: 32,
            height: 1,
            backgroundColor: "rgba(74,90,68,0.28)",
            display: "block",
          }}
        />
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.66rem",
            letterSpacing: "0.3em",
            color: "#6b7a63",
            textTransform: "uppercase",
          }}
        >
          Available for Collaborations
        </span>
        <span
          style={{
            width: 32,
            height: 1,
            backgroundColor: "rgba(74,90,68,0.28)",
            display: "block",
          }}
        />
      </div>

      {/* Arc badge */}
      <div className="hero-badge" style={{ marginBottom: isMobile ? 2 : 4 }}>
        <ArcBadge isMobile={isMobile} />
      </div>

      {/* Headline */}
      <h1
        className="hero-headline"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: isMobile ? "1.75rem" : "clamp(2.2rem, 3.5vw, 3.4rem)",
          lineHeight: 1.1,
          color: "#3d4d38",
          fontStyle: "italic",
          fontWeight: 400,
          margin: 0,
          letterSpacing: "-0.015em",
          textAlign: "center",
          maxWidth: 460,
        }}
      >
        &ldquo;Don&rsquo;t Let Your Socials
        <br />
        Stay Silent!&rdquo;
      </h1>

      {/* Diamond rule */}
      <div
        className="hero-divider"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: isMobile ? "18px auto" : "26px auto",
          width: "100%",
          maxWidth: 300,
          justifyContent: "center",
        }}
      >
        <span
          style={{ flex: 1, height: 1, backgroundColor: "rgba(74,90,68,0.2)" }}
        />
        <DiamondIcon size={6} />
        <span
          style={{ flex: 1, height: 1, backgroundColor: "rgba(74,90,68,0.2)" }}
        />
      </div>

      {/* Tagline */}
      <p
        className="hero-tagline"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: isMobile ? "0.87rem" : "0.94rem",
          color: "#6b7a63",
          letterSpacing: "0.03em",
          margin: 0,
          textAlign: "center",
          maxWidth: 360,
          lineHeight: 1.7,
          marginBottom: isMobile ? 26 : 36,
        }}
      >
        Strategic content creation &amp; community growth
        <br />
        for elevated, intentional brands.
      </p>

      {/* CTA */}
      <div className="hero-cta" style={{ marginBottom: isMobile ? 30 : 40 }}>
        <CTAButton isMobile={isMobile} />
      </div>

      {/* Colour swatches */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 480,
          justifyContent: "center",
        }}
      >
        {["#c5ccb0", "#a8b399", "#8f9f84", "#7d8e76", "#5f6f58"].map(
          (color, i) => (
            <div
              key={i}
              className="hero-swatch"
              title={color}
              style={{
                width: isMobile ? 36 : 48,
                height: isMobile ? 36 : 48,
                borderRadius: "50%",
                backgroundColor: color,
                border:
                  color === "#c5ccb0" ? "1px solid rgba(0,0,0,0.1)" : "none",
                marginLeft: i === 0 ? 0 : isMobile ? -9 : -12,
                zIndex: 4 - i,
                boxShadow: "0 2px 8px rgba(74,90,68,0.1)",
              }}
            />
          ),
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ARC BADGE
══════════════════════════════════════════ */
function ArcBadge({ isMobile }: { isMobile: boolean }) {
  const size = isMobile ? 240 : 330;
  const cx = size / 2;
  const cy = size / 2 + (isMobile ? 16 : 22);
  const r = isMobile ? 96 : 132;
  const lineTop = cy - r + 8;
  const diamondY = cy + (isMobile ? 24 : 34);
  const lineBot = diamondY + (isMobile ? 36 : 52);
  const dSize = isMobile ? 5.5 : 7;

  return (
    <div
      style={{
        width: size,
        height: lineBot + 16,
        position: "relative",
        alignSelf: "center",
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${lineBot + 16}`}
        width={size}
        height={lineBot + 16}
        style={{ overflow: "visible" }}
      >
        <defs>
          <path
            id="arcPath"
            d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
            fill="none"
          />
        </defs>
        <text
          fontSize={isMobile ? "10.5" : "13.5"}
          fontFamily="Georgia, serif"
          fill="#4a5a44"
          letterSpacing={isMobile ? "6" : "9"}
          fontWeight="400"
        >
          <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
            SOCIAL MEDIA MANAGER
          </textPath>
        </text>
        <line
          x1={cx}
          y1={lineTop}
          x2={cx}
          y2={diamondY - dSize}
          stroke="#4a5a44"
          strokeWidth="1"
        />
        <rect
          x={cx - dSize}
          y={diamondY - dSize}
          width={dSize * 2}
          height={dSize * 2}
          fill="#4a5a44"
          transform={`rotate(45 ${cx} ${diamondY})`}
        />
        <line
          x1={cx}
          y1={diamondY + dSize}
          x2={cx}
          y2={lineBot}
          stroke="#4a5a44"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* ══════════════════════════
   CTA BUTTON
══════════════════════════ */
function CTAButton({ isMobile }: { isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? "13px 44px" : "15px 60px",
        borderRadius: 9999,
        border: "1.5px solid #4a5a44",
        backgroundColor: hovered ? "#4a5a44" : "transparent",
        color: hovered ? "#eaede2" : "#4a5a44",
        fontFamily: "Georgia, serif",
        fontSize: isMobile ? "0.88rem" : "0.92rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.28s ease",
        boxShadow: hovered
          ? "0 10px 32px rgba(74,90,68,0.22)"
          : "0 2px 12px rgba(74,90,68,0.07)",
      }}
    >
      Work With Me
    </button>
  );
}

/* ══════════════════════════
   DIAMOND ICON
══════════════════════════ */
function DiamondIcon({ size }: { size: number }) {
  return (
    <svg width={size * 2} height={size * 2} viewBox="0 0 12 12" fill="none">
      <rect
        x={1}
        y={1}
        width={10}
        height={10}
        fill="#8f9f84"
        transform="rotate(45 6 6)"
      />
    </svg>
  );
}

/* ══════════════════════════
   4-POINT SPARKLE
══════════════════════════ */
function Sparkle({ style }: { style: CSSProperties & { opacity?: number } }) {
  const { opacity = 1, ...rest } = style;
  return (
    <svg
      className="hero-sparkle"
      viewBox="0 0 24 24"
      fill="#4a5a44"
      style={{ position: "absolute", opacity, ...rest }}
    >
      <path d="M12 0 L13.2 9.8 L24 12 L13.2 14.2 L12 24 L10.8 14.2 L0 12 L10.8 9.8 Z" />
    </svg>
  );
}
