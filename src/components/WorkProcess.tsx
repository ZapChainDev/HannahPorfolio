"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Strategy Development",
    body: "We start by understanding your brand, goals, and target audience to create a tailored social media plan that drives results.",
    accent: "var(--sage-light)",
  },
  {
    num: "02",
    title: "Content Creation & Optimization",
    body: "Next, we craft engaging and visually appealing content that aligns with your brand voice and is optimised for each platform.",
    accent: "var(--cream)",
  },
  {
    num: "03",
    title: "Engagement & Analytics",
    body: "Finally, we monitor performance, interact with your community, and refine strategies based on insights to ensure continuous growth.",
    accent: "var(--sage-light)",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Title reveal
      gsap.fromTo(
        ".wp-title",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".wp-title-wrap", start: "top 85%" },
        },
      );

      // Sub-label
      gsap.fromTo(
        ".wp-label",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: ".wp-title-wrap", start: "top 85%" },
        },
      );

      // Vertical line grows downward as you scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: ".wp-steps",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1.2,
            },
          },
        );
      }

      // Each step card
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        const isLeft = i % 2 === 0;

        gsap.fromTo(
          step.querySelector(".wp-card"),
          { opacity: 0, x: isLeft ? -70 : 70, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 82%" },
          },
        );

        gsap.fromTo(
          step.querySelector(".wp-ghost"),
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: { trigger: step, start: "top 82%" },
          },
        );

        gsap.fromTo(
          step.querySelector(".wp-dot"),
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(3)",
            delay: 0.3,
            scrollTrigger: { trigger: step, start: "top 82%" },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--sage-dark)" }}
    >
      {/* ── HEADER ── */}
      <div className="wp-title-wrap relative pt-24 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
        {/* Process label */}
        <p
          className="wp-label text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "var(--sage-light)", opacity: 0.7 }}
        >
          How it works
        </p>

        {/* Big title with overflow clip */}
        <div className="overflow-hidden">
          <h2
            className="wp-title leading-[0.9] tracking-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem,9vw,8rem)",
              color: "#fff",
            }}
          >
            My Work
            <br />
            <span style={{ color: "var(--sage-light)" }}>Process</span>
          </h2>
        </div>

        {/* Thin rule */}
        <div
          className="mt-10 w-full h-[1px]"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        />
      </div>

      {/* ── STEPS ── */}
      <div className="wp-steps relative max-w-6xl mx-auto px-8 md:px-16 pb-28">
        {/* Vertical connector line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:block pointer-events-none"
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "rgba(197,204,176,0.1)",
          }}
        >
          <div
            ref={lineRef}
            className="w-full h-full"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(197,204,176,0.35) 0px, rgba(197,204,176,0.35) 6px, transparent 6px, transparent 14px)",
              transformOrigin: "top center",
            }}
          />
        </div>

        {steps.map((s, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative flex items-center mb-20 last:mb-0 gap-8 md:gap-0 ${
                isLeft ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div
                className={`wp-card w-full md:w-[44%] relative group ${
                  isLeft ? "md:pr-16" : "md:pl-16"
                }`}
              >
                {/* Ghost number */}
                <span
                  className="wp-ghost absolute select-none pointer-events-none font-black leading-none"
                  style={{
                    fontSize: "clamp(6rem,14vw,11rem)",
                    color: "rgba(255,255,255,0.04)",
                    top: "-0.25em",
                    right: isLeft ? undefined : "-0.1em",
                    left: !isLeft ? undefined : "-0.1em",
                  }}
                  aria-hidden
                >
                  {s.num}
                </span>

                {/* Card inner */}
                <div
                  className="relative z-10 p-8 rounded-2xl border transition-all duration-300 group-hover:border-white/20"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {/* Step badge */}
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase mb-4 px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(197,204,176,0.12)",
                      color: "var(--sage-light)",
                    }}
                  >
                    Step {s.num}
                  </span>

                  <h3
                    className="text-xl md:text-2xl font-bold mb-4 leading-snug"
                    style={{ color: "#fff" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.body}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-6 w-10 h-[2px] rounded-full transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: s.accent }}
                  />
                </div>
              </div>

              {/* Centre dot (desktop) */}
              <div className="hidden md:flex w-[12%] justify-center shrink-0 relative z-10">
                <div
                  className="wp-dot w-4 h-4 rounded-full border-2 shadow-lg"
                  style={{
                    backgroundColor: "var(--sage-dark)",
                    borderColor: "var(--sage-light)",
                    boxShadow: "0 0 0 4px rgba(197,204,176,0.15)",
                  }}
                />
              </div>

              {/* Empty right/left half (spacer) */}
              <div className="hidden md:block w-[44%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
