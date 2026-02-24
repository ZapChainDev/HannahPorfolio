"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Tablet slides in from left
      gsap.fromTo(
        tabletRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      // Content fades in from right
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      // Logo ring spins in
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.7, rotate: -30 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "back.out(1.4)",
          delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      // Continuous slow spin of the circular text ring
      gsap.to(".branding-ring", {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-14 md:gap-10 lg:gap-16">
        {/* ── LEFT: Tablet frame + screen image ── */}
        <div ref={tabletRef} className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative flex-shrink-0"
            style={{
              width: "clamp(280px, 38vw, 460px)",
              background: "#1a1a1a",
              borderRadius: "2.4rem",
              padding: "14px 10px 18px",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.38), inset 0 0 0 1.5px rgba(255,255,255,0.07), 0 0 0 2px #111",
            }}
          >
            {/* Top bar — camera dot + sensors */}
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#3a3a3a" }}
              />
              <div
                className="w-3 h-1.5 rounded-full"
                style={{ background: "#3a3a3a" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#3a3a3a" }}
              />
            </div>

            {/* Side buttons left */}
            <div className="absolute left-0 top-[18%] flex flex-col gap-2.5 -translate-x-[5px]">
              <div
                className="w-[5px] h-7 rounded-l-sm"
                style={{ background: "#2a2a2a" }}
              />
              <div
                className="w-[5px] h-10 rounded-l-sm"
                style={{ background: "#2a2a2a" }}
              />
              <div
                className="w-[5px] h-10 rounded-l-sm"
                style={{ background: "#2a2a2a" }}
              />
            </div>

            {/* Side button right */}
            <div className="absolute right-0 top-[22%] translate-x-[5px]">
              <div
                className="w-[5px] h-14 rounded-r-sm"
                style={{ background: "#2a2a2a" }}
              />
            </div>

            {/* Screen — the actual image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/tabletpic.png"
                alt="Branding mockup"
                width={520}
                height={700}
                className="w-full h-auto object-cover block"
                priority
              />
            </div>

            {/* Bottom home bar */}
            <div className="flex justify-center mt-2.5">
              <div
                className="w-16 h-1 rounded-full"
                style={{ background: "#3a3a3a" }}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div
          ref={contentRef}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          {/* "BRANDING" label */}
          <p
            className="text-3xl md:text-4xl italic"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--foreground)",
              letterSpacing: "0.04em",
            }}
          >
            Branding
          </p>

          {/* Circular monogram logo */}
          <div
            ref={logoRef}
            className="relative flex items-center justify-center"
            style={{ width: 140, height: 140 }}
          >
            {/* Spinning ring text */}
            <svg
              className="branding-ring absolute inset-0 w-full h-full"
              viewBox="0 0 140 140"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                />
              </defs>
              <text
                fill="var(--sage-dark)"
                fontSize="9"
                fontFamily="Georgia, 'Times New Roman', serif"
                letterSpacing="3.2"
              >
                <textPath href="#circle-path">
                  VIRTUALLY HANA • VIRTUALLY HANA •{" "}
                </textPath>
              </text>
            </svg>

            {/* Center monogram */}
            <div
              className="relative z-10 flex flex-col items-center justify-center rounded-full border"
              style={{
                width: 80,
                height: 80,
                borderColor: "var(--sage-dark)",
                borderWidth: "1.5px",
              }}
            >
              <p
                className="text-2xl font-bold leading-none"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "var(--foreground)",
                  letterSpacing: "0.04em",
                }}
              >
                VH
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--foreground)",
            }}
          >
            IMPROVE YOUR <span className="italic font-normal">Brand</span> WITH
            ME
          </h2>

          {/* Subtitle */}
          <p
            className="text-xs md:text-sm leading-relaxed tracking-wide max-w-sm"
            style={{
              color: "var(--sage-dark)",
              letterSpacing: "0.06em",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            WITH MY HELP, TURN YOUR BRAND&apos;S STORY INTO AN CAPTIVATING
            NARRATIVE AND ATTRACT YOUR AUDIENCE WITH ENGAGING CONTENT.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="mt-2 inline-block px-10 py-4 rounded-full transition-all duration-300 hover:bg-[var(--sage-dark)] hover:text-[var(--cream)]"
            style={{
              border: "1.5px solid var(--foreground)",
              color: "var(--foreground)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            Work With Me!
          </a>
        </div>
      </div>
    </section>
  );
}
