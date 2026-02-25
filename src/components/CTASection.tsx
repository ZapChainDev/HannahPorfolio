"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL =
  "https://calendly.com/hanavahub/30min?background_color=f5f2ec&text_color=3d4d38&primary_color=4a5a44&hide_gdpr_banner=1";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const calRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGCircleElement>(null);
  const ring2Ref = useRef<SVGCircleElement>(null);

  // Load Calendly widget script
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  useGSAP(
    () => {
      // Headline word-split
      gsap.fromTo(
        ".cta-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        },
      );

      // Subtext
      gsap.fromTo(
        ".cta-sub",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        },
      );

      // Button
      gsap.fromTo(
        ".cta-btn",
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.8)",
          delay: 0.55,
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        },
      );

      // Photo arch slides up
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      // SVG rings spin slowly
      if (ring1Ref.current) {
        gsap.to(ring1Ref.current.closest("svg"), {
          rotate: 360,
          duration: 22,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center",
        });
      }

      // Calendly card fades in
      gsap.fromTo(
        calRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: calRef.current, start: "top 80%" },
        },
      );

      // Sparkle dots pulse
      gsap.to(".cta-sparkle", {
        scale: 1.6,
        opacity: 0.2,
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--sage-dark)" }}
    >
      {/* ── SUBTLE BACKGROUND TEXTURE ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(197,204,176,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(197,204,176,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
        {/* ──────────── LEFT: CTA Content ──────────── */}
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start gap-10">
          {/* Photo arch */}
          <div ref={photoRef} className="relative w-64 md:w-72 mx-auto lg:mx-0">
            {/* Arch SVG frame */}
            <svg
              className="absolute -top-6 -left-6 w-[calc(100%+48px)] h-auto pointer-events-none"
              viewBox="0 0 340 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer arch */}
              <path
                d="M30 420 L30 140 Q30 30 170 30 Q310 30 310 140 L310 420"
                stroke="rgba(197,204,176,0.35)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Middle arch */}
              <path
                d="M55 420 L55 148 Q55 58 170 58 Q285 58 285 148 L285 420"
                stroke="rgba(197,204,176,0.2)"
                strokeWidth="1"
                fill="none"
              />
              {/* Inner arch */}
              <path
                d="M80 420 L80 156 Q80 86 170 86 Q260 86 260 156 L260 420"
                stroke="rgba(197,204,176,0.12)"
                strokeWidth="1"
                fill="none"
              />
              {/* Accent circle top-right */}
              <circle
                cx="288"
                cy="68"
                r="22"
                fill="var(--sage-mid)"
                opacity="0.6"
              />
              <circle
                cx="288"
                cy="68"
                r="14"
                fill="var(--sage-light)"
                opacity="0.4"
              />
              {/* Slow-spinning dashed ring */}
              <circle
                ref={ring1Ref}
                cx="170"
                cy="30"
                r="18"
                stroke="rgba(197,204,176,0.4)"
                strokeWidth="1"
                strokeDasharray="4 5"
                fill="none"
              />
              {/* Sparkle dots */}
              <circle
                cx="58"
                cy="400"
                r="3"
                fill="var(--sage-light)"
                opacity="0.5"
                className="cta-sparkle"
              />
              <circle
                cx="282"
                cy="410"
                r="3"
                fill="var(--sage-light)"
                opacity="0.5"
                className="cta-sparkle"
              />
              {/* Bottom horizontal lines */}
              <line
                x1="30"
                y1="418"
                x2="120"
                y2="418"
                stroke="rgba(197,204,176,0.3)"
                strokeWidth="1"
              />
              <line
                x1="220"
                y1="418"
                x2="310"
                y2="418"
                stroke="rgba(197,204,176,0.3)"
                strokeWidth="1"
              />
            </svg>

            {/* Photo */}
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                borderRadius: "9999px 9999px 1rem 1rem",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/HannahPhoto1.jpg"
                alt="Hana"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 70vw, 300px"
                priority
              />
            </div>
          </div>

          {/* Headline + sub + button */}
          <div ref={textRef} className="text-center lg:text-left">
            {/* Label */}
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color: "var(--sage-light)", opacity: 0.65 }}
            >
              Let's work together
            </p>

            {/* Headline */}
            <h2
              className="leading-[0.92] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.8rem,7vw,5.5rem)",
                color: "#fff",
              }}
            >
              {["Ready", "To", "Level", "Up?"].map((w) => (
                <span
                  key={w}
                  className="inline-block overflow-hidden mr-3 last:mr-0"
                >
                  <span className="cta-word inline-block">{w}</span>
                </span>
              ))}
            </h2>

            {/* Subtext */}
            <p
              className="cta-sub text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Not sure which package fits your business? No problem — book a
              free call and we&apos;ll craft a custom plan tailored exactly to
              your needs.
            </p>

            {/* CTA Button */}
            <a
              href={`https://calendly.com/hanavahub/30min?month=2026-02`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--sage-dark)",
              }}
            >
              <span>Book a Call</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Trust micro-copy */}
            <p
              className="mt-4 text-xs tracking-wide"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Free 30-minute consultation · No commitment required
            </p>
          </div>
        </div>

        {/* ──────────── RIGHT: Calendly Embed ──────────── */}
        <div
          ref={calRef}
          className="w-full lg:w-[52%] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            backgroundColor: "var(--cream)",
            border: "1px solid rgba(197,204,176,0.2)",
          }}
        >
          {/* Styled Calendly header bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "rgba(143,159,132,0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: "var(--sage-dark)",
                  color: "var(--cream)",
                }}
              >
                H
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "var(--foreground)" }}
                >
                  Hana · Virtual Social Media Manager
                </p>
                <p
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "var(--sage-mid)" }}
                >
                  30-Min Strategy Call
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--sage-light)" }}
              />
              <span
                className="text-[10px] tracking-wide"
                style={{ color: "var(--sage-mid)" }}
              >
                Free
              </span>
            </div>
          </div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full"
            data-url={CALENDLY_URL}
            style={{ minWidth: "300px", height: "660px" }}
          />
        </div>
      </div>

      {/* ── BOTTOM MARQUEE STRIP ── */}
      <div
        className="w-full overflow-hidden py-5 border-t"
        style={{ borderColor: "rgba(197,204,176,0.12)" }}
      >
        <div
          className="flex gap-16 whitespace-nowrap animate-[marquee_18s_linear_infinite]"
          style={{
            color: "rgba(197,204,176,0.25)",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="uppercase tracking-widest shrink-0">
              ✦ Strategy &nbsp;·&nbsp; Content Creation &nbsp;·&nbsp; Social
              Media Management &nbsp;·&nbsp; Brand Growth &nbsp;·&nbsp;
              Analytics
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
