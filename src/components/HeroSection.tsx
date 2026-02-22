"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function HeroSection() {
  const { isMobile, isTablet, width } = useBreakpoint();
  const stacked = isMobile || isTablet;

  return (
    <section
      style={{
        backgroundColor: "#e8ede0",
        display: "flex",
        alignItems: stacked ? "center" : "flex-end",
        justifyContent: "center",
        paddingTop: 40,
        paddingBottom: 0,
        paddingLeft: stacked ? 20 : 48,
        paddingRight: stacked ? 20 : 48,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          flexDirection: stacked ? "column" : "row",
          alignItems: "center",
          gap: stacked ? 32 : 40,
          margin: "0 auto",
        }}
      >
        <LeftColumn screenWidth={width} stacked={stacked} />
        <RightColumn stacked={stacked} isMobile={isMobile} />
      </div>
    </section>
  );
}

/* ─── LEFT: Arch photo frame with decorations ─── */
function LeftColumn({
  screenWidth,
  stacked,
}: {
  screenWidth: number;
  stacked: boolean;
}) {
  // Scale everything based on screen width
  const scale = stacked
    ? Math.min(1, (screenWidth - 40) / 660)
    : Math.min(1, screenWidth / 1400);

  // Photo arch dimensions
  const photoW = Math.round(400 * scale);
  const photoR = photoW / 2;
  // Large navy background arch
  const navyW = Math.round(560 * scale);
  const navyH = Math.round(700 * scale);
  const navyR = navyW / 2;
  // Navy background offset
  const navyLeft = Math.round(100 * scale);
  const navyTop = Math.round(20 * scale);
  // Container
  const containerW = Math.round(660 * scale);
  const containerH = navyH + navyTop;
  // Position the photo arch
  const photoLeft = Math.round(50 * scale);
  const photoTop = Math.round(120 * scale);
  const photoH = containerH - photoTop;

  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: containerW,
        height: containerH,
        margin: stacked ? "0 auto" : undefined,
      }}
    >
      {/* ── 1. Navy arch background ── */}
      <svg
        style={{
          position: "absolute",
          left: navyLeft,
          top: navyTop,
          zIndex: 1,
        }}
        width={navyW}
        height={navyH}
        viewBox={`0 0 ${navyW} ${navyH}`}
        fill="none"
      >
        <path
          d={`
            M 0,${navyH}
            L 0,${navyR}
            A ${navyR},${navyR} 0 0,1 ${navyW},${navyR}
            L ${navyW},${navyH}
            Z
          `}
          fill="#4a5a44"
        />
      </svg>

      {/* ── 2. Accent circle ── */}
      <div
        style={{
          position: "absolute",
          width: Math.round(80 * scale),
          height: Math.round(80 * scale),
          borderRadius: "50%",
          backgroundColor: "#8f9f84",
          top: navyTop + Math.round(10 * scale),
          left: navyLeft + navyW - Math.round(130 * scale),
          zIndex: 25,
        }}
      />

      {/* ── 3. Decorative arch lines ── */}
      {[
        { expand: 60, opacity: 0.75, strokeW: 3 },
        { expand: 120, opacity: 0.5, strokeW: 2.5 },
      ].map(({ expand, opacity, strokeW }, i) => {
        const exp = Math.round(expand * scale);
        const lw = photoW + exp;
        const lh = photoH + exp / 2;
        const lr = lw / 2;
        const lx = photoLeft - exp / 2;
        const ly = photoTop - exp / 4;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: lw,
              height: lh,
              left: lx,
              top: ly,
              borderTopLeftRadius: `${lr}px ${lr}px`,
              borderTopRightRadius: `${lr}px ${lr}px`,
              border: `${strokeW}px solid rgba(143,159,132,${opacity})`,
              borderBottom: "none",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* ── 4. Photo arch ── */}
      <div
        style={{
          position: "absolute",
          width: photoW,
          height: photoH,
          left: photoLeft,
          top: photoTop,
          borderTopLeftRadius: `${photoR}px ${photoR}px`,
          borderTopRightRadius: `${photoR}px ${photoR}px`,
          overflow: "hidden",
          zIndex: 11,
        }}
      >
        <div style={{ position: "absolute", inset: "0" }}>
          <Image
            src="/HannahPhoto1.jpg"
            alt="Hannah"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
          />
        </div>
      </div>

      {/* ── 5. Sparkle stars ── */}
      <Sparkle
        style={{
          left: Math.round(20 * scale),
          top: Math.round(70 * scale),
          width: Math.round(28 * scale),
        }}
      />
      <Sparkle
        style={{
          left: Math.round(55 * scale),
          top: Math.round(48 * scale),
          width: Math.round(18 * scale),
        }}
      />
      <Sparkle
        style={{
          left: Math.round(78 * scale),
          top: Math.round(95 * scale),
          width: Math.round(12 * scale),
        }}
      />
    </div>
  );
}

/* ─── RIGHT: Badge, quote, CTA, swatches ─── */
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
        gap: isMobile ? 16 : 24,
        paddingLeft: 0,
        width: stacked ? "100%" : undefined,
      }}
    >
      {/* Curved "Social Media Manager" arc badge */}
      <ArcBadge isMobile={isMobile} />

      {/* Main headline */}
      <h1
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: isMobile ? "1.6rem" : "clamp(2.2rem, 4vw, 3.2rem)",
          lineHeight: 1.15,
          color: "#4a5a44",
          fontStyle: "italic",
          fontWeight: 400,
          margin: 0,
          letterSpacing: "-0.01em",
          textAlign: "center",
          width: "100%",
          maxWidth: 480,
        }}
      >
        &ldquo;Don&rsquo;t Let Your Socials
        <br />
        Stay Silent!&rdquo;
      </h1>

      {/* CTA button */}
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CTAButton isMobile={isMobile} />
      </div>

      {/* Color palette swatches */}
      <div
        style={{
          display: "flex",
          marginTop: 8,
          width: "100%",
          maxWidth: 480,
          justifyContent: "center",
        }}
      >
        {["#c5ccb0", "#a8b399", "#8f9f84", "#7d8e76", "#5f6f58"].map(
          (color, i) => (
            <div
              key={i}
              style={{
                width: isMobile ? 40 : 56,
                height: isMobile ? 40 : 56,
                borderRadius: "50%",
                backgroundColor: color,
                border:
                  color === "#c5ccb0" ? "1px solid rgba(0,0,0,0.08)" : "none",
                marginLeft: i === 0 ? 0 : isMobile ? -10 : -14,
                zIndex: 4 - i,
              }}
            />
          ),
        )}
      </div>
    </div>
  );
}

/* ─── Arc badge with semi-circle text + vertical line ─── */
function ArcBadge({ isMobile }: { isMobile: boolean }) {
  const size = isMobile ? 260 : 360;
  const cx = size / 2;
  const cy = size / 2 + (isMobile ? 14 : 20);
  const r = isMobile ? 105 : 145;
  const lineTop = cy - r + 10;
  const diamondY = cy + (isMobile ? 28 : 40);
  const lineBottom = diamondY + (isMobile ? 40 : 60);
  const dSize = isMobile ? 7 : 9;

  return (
    <div
      style={{
        width: size,
        height: lineBottom + 20,
        position: "relative",
        alignSelf: "center",
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${lineBottom + 20}`}
        width={size}
        height={lineBottom + 20}
        style={{ overflow: "visible" }}
      >
        <defs>
          <path
            id="arcTextPath"
            d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
            fill="none"
          />
        </defs>

        {/* Arc text */}
        <text
          fontSize={isMobile ? "12" : "16"}
          fontFamily="Georgia, serif"
          fill="#4a5a44"
          letterSpacing={isMobile ? "5" : "8"}
          fontWeight="500"
        >
          <textPath href="#arcTextPath" startOffset="50%" textAnchor="middle">
            SOCIAL MEDIA MANAGER
          </textPath>
        </text>

        {/* Vertical line above diamond */}
        <line
          x1={cx}
          y1={lineTop}
          x2={cx}
          y2={diamondY - dSize}
          stroke="#4a5a44"
          strokeWidth="1.2"
        />

        {/* Diamond */}
        <rect
          x={cx - dSize}
          y={diamondY - dSize}
          width={dSize * 2}
          height={dSize * 2}
          fill="#4a5a44"
          transform={`rotate(45 ${cx} ${diamondY})`}
        />

        {/* Vertical line below diamond */}
        <line
          x1={cx}
          y1={diamondY + dSize}
          x2={cx}
          y2={lineBottom}
          stroke="#4a5a44"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

/* ─── CTA Button ─── */
function CTAButton({ isMobile }: { isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? "14px 40px" : "16px 56px",
        borderRadius: 9999,
        border: "2px solid #4a5a44",
        backgroundColor: hovered ? "#4a5a44" : "transparent",
        color: hovered ? "#e8ede0" : "#4a5a44",
        fontFamily: "Georgia, serif",
        fontSize: "1.1rem",
        letterSpacing: "0.1em",
        cursor: "pointer",
        transition: "all 0.28s ease",
      }}
    >
      Work With Me!
    </button>
  );
}

/* ─── 4-point sparkle star ─── */
function Sparkle({ style }: { style: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#4a5a44"
      style={{ position: "absolute", ...style }}
    >
      <path d="M12 0 L13.3 9.7 L24 12 L13.3 14.3 L12 24 L10.7 14.3 L0 12 L10.7 9.7 Z" />
    </svg>
  );
}
