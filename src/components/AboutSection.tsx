"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { isMobile, isTablet, width } = useBreakpoint();
  const stacked = isMobile || isTablet;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Photo slides in from LEFT
      tl.from(
        ".about-photo",
        { x: -60, opacity: 0, duration: 1.4, immediateRender: false },
        0,
      )
        // Text slides in from RIGHT
        .from(
          ".about-greeting",
          { x: 45, opacity: 0, duration: 1.1, immediateRender: false },
          0.25,
        )
        .from(
          ".about-heading",
          { x: 45, opacity: 0, duration: 1.2, immediateRender: false },
          0.42,
        )
        .from(
          ".about-body",
          { x: 45, opacity: 0, duration: 1.15, immediateRender: false },
          0.58,
        )
        // Sparkles pop in
        .from(
          ".about-sparkle",
          {
            scale: 0,
            opacity: 0,
            duration: 0.65,
            ease: "back.out(2.5)",
            stagger: 0.18,
            immediateRender: false,
          },
          0.75,
        );

      // Sparkles float continuously
      gsap.to(".about-sparkle", {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.8,
        stagger: 0.6,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#4a5a44",
        padding: stacked ? "60px 20px 0" : "80px 48px 0",
        marginTop: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          flexDirection: stacked ? "column" : "row",
          alignItems: "center",
          gap: stacked ? 40 : 60,
        }}
      >
        <LeftContent stacked={stacked} />
        <div className="about-photo">
          <RightPhoto screenWidth={width} stacked={stacked} />
        </div>
      </div>
    </section>
  );
}

/* ─── LEFT: Text content ─── */
function LeftContent({ stacked }: { stacked: boolean }) {
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: stacked ? 16 : 24,
        maxWidth: 560,
        alignItems: stacked ? "center" : undefined,
        textAlign: stacked ? "center" : undefined,
      }}
    >
      {/* "Hi!" */}
      <p
        className="about-greeting"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "#e8ede0",
          margin: 0,
          letterSpacing: "0.05em",
        }}
      >
        Hi!
      </p>

      {/* "I'm Hana" */}
      <h2
        className="about-heading"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
          fontWeight: 400,
          color: "#e8ede0",
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        I&rsquo;m Hana
      </h2>

      {/* Description paragraph */}
      <p
        className="about-body"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "#e8ede0",
          margin: 0,
          textAlign: stacked ? "center" : "justify",
          maxWidth: 480,
          fontStyle: "italic",
        }}
      >
        A results driven Social Media Manager passionate about helping brands
        grow their online presence. With a keen eye for content strategy,
        engagement, and analytics, I work closely with businesses to craft
        tailored social media strategies that resonate with their target
        audience. From creating compelling content to driving meaningful
        interactions, I thrive on helping brands connect with their communities
        and achieve measurable success. Let&rsquo;s take your social media to
        the next level and turn followers into loyal fans!
      </p>
    </div>
  );
}

/* ─── RIGHT: Arch photo overlapping right side of cream arch ─── */
function RightPhoto({
  screenWidth,
  stacked,
}: {
  screenWidth: number;
  stacked: boolean;
}) {
  // Scale based on screen width
  const scale = stacked
    ? Math.min(1, (screenWidth - 40) / 560)
    : Math.min(1, screenWidth / 1400);

  // Cream arch — shifted left so photo overlaps rightward
  const creamW = Math.round(340 * scale);
  const creamH = Math.round(620 * scale);
  const creamR = creamW / 2;
  const creamLeft = 0;
  const creamTop = Math.round(40 * scale);
  // Photo arch — wider, positioned to overlap right side of cream arch
  const photoW = Math.round(370 * scale);
  const photoR = photoW / 2;
  const photoLeft = Math.round(120 * scale);
  const photoTop = Math.round(110 * scale);
  // Container — wide enough for the photo overhang + accent lines
  const containerW = photoLeft + photoW + Math.round(60 * scale);
  const containerH = creamH + creamTop;
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
      {/* ── 1. Cream arch background — shifted left ── */}
      <svg
        style={{
          position: "absolute",
          left: creamLeft,
          top: creamTop,
          zIndex: 1,
        }}
        width={creamW}
        height={creamH}
        viewBox={`0 0 ${creamW} ${creamH}`}
        fill="none"
      >
        <path
          d={`
            M 0,${creamH}
            L 0,${creamR}
            A ${creamR},${creamR} 0 0,1 ${creamW},${creamR}
            L ${creamW},${creamH}
            Z
          `}
          fill="#e8ede0"
        />
      </svg>

      {/* ── 2. Accent circle — upper-left of cream arch ── */}
      <div
        style={{
          position: "absolute",
          width: 72,
          height: 72,
          borderRadius: "50%",
          backgroundColor: "#8f9f84",
          top: creamTop + 40,
          left: creamLeft - 22,
          zIndex: 25,
        }}
      />

      {/* ── 3. Right-side curved accent lines ── */}
      <svg
        style={{
          position: "absolute",
          left: photoLeft,
          top: photoTop - 20,
          zIndex: 2,
          pointerEvents: "none",
        }}
        width={photoW + 70}
        height={photoH + 20}
        viewBox={`0 0 ${photoW + 70} ${photoH + 20}`}
        fill="none"
      >
        <path
          d={`
            M ${photoW + 18},${photoH + 20}
            L ${photoW + 18},${photoR + 10}
            A ${photoR + 18},${photoR + 10} 0 0,0 ${photoW / 2},${10}
          `}
          stroke="rgba(232,237,224,0.5)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d={`
            M ${photoW + 36},${photoH + 20}
            L ${photoW + 36},${photoR + 18}
            A ${photoR + 36},${photoR + 18} 0 0,0 ${photoW / 2},${0}
          `}
          stroke="rgba(232,237,224,0.28)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* ── 4. Curved "SOCIAL MEDIA MANAGER" text ── */}
      <ArcText creamLeft={creamLeft} creamTop={creamTop} creamW={creamW} />

      {/* ── 5. Sparkle stars — upper-right of arch ── */}
      <Sparkle
        className="about-sparkle"
        style={{
          left: creamLeft + creamW - 40,
          top: creamTop + 20,
          width: 13,
          zIndex: 30,
        }}
      />
      <Sparkle
        className="about-sparkle"
        style={{
          left: creamLeft + creamW - 15,
          top: creamTop + 10,
          width: 20,
          zIndex: 30,
        }}
      />
      <Sparkle
        className="about-sparkle"
        style={{
          left: creamLeft + creamW + 2,
          top: creamTop + 42,
          width: 15,
          zIndex: 30,
        }}
      />

      {/* ── 6. Photo arch — overlaps right side of cream arch ── */}
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
          backgroundColor: "#c8c8c8",
        }}
      >
        <Image
          src="/hannahAboutpic.jpg"
          alt="Hannah"
          fill
          style={{ objectFit: "cover", objectPosition: "center 12%" }}
          priority
        />
      </div>
    </div>
  );
}

/* ─── Arc text curving around the cream arch ─── */
function ArcText({
  creamLeft,
  creamTop,
  creamW,
}: {
  creamLeft: number;
  creamTop: number;
  creamW: number;
}) {
  const size = creamW + 50;
  const cx = size / 2;
  const cy = size / 2 + 22;
  const r = creamW / 2 + 10;

  return (
    <svg
      style={{
        position: "absolute",
        left: creamLeft - 25,
        top: creamTop - 60,
        zIndex: 30,
        pointerEvents: "none",
      }}
      width={size}
      height={size * 0.5}
      viewBox={`0 0 ${size} ${size * 0.5}`}
    >
      <defs>
        <path
          id="aboutArcPath"
          d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
          fill="none"
        />
      </defs>
      <text
        fontSize="14"
        fontFamily="Georgia, serif"
        fill="#e8ede0"
        letterSpacing="7"
        fontWeight="400"
      >
        <textPath href="#aboutArcPath" startOffset="50%" textAnchor="middle">
          SOCIAL MEDIA MANAGER
        </textPath>
      </text>
    </svg>
  );
}

/* ─── 4-point sparkle star (cream colored for dark bg) ─── */
function Sparkle({
  style,
  className,
}: {
  style: CSSProperties;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#e8ede0"
      className={className}
      style={{ position: "absolute", ...style }}
    >
      <path d="M12 0 L13.3 9.7 L24 12 L13.3 14.3 L12 24 L10.7 14.3 L0 12 L10.7 9.7 Z" />
    </svg>
  );
}
