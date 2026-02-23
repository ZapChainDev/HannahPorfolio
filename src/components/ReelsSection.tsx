"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── SVG flower components ────────────────────────────────────────────────

function FlowerA({
  size = 48,
  color = "#c5ccb0",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ opacity }}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="30"
          rx="7"
          ry="14"
          fill={color}
          style={{
            transformOrigin: "30px 30px",
            transform: `rotate(${deg}deg)`,
          }}
          opacity="0.85"
        />
      ))}
      <circle cx="30" cy="30" r="7" fill="#f5f2ec" />
      <circle cx="30" cy="30" r="4" fill={color} opacity="0.9" />
    </svg>
  );
}

function FlowerB({
  size = 40,
  color = "#8f9f84",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ opacity }}
    >
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="30"
          rx="6"
          ry="16"
          fill={color}
          style={{
            transformOrigin: "30px 30px",
            transform: `rotate(${deg}deg)`,
          }}
          opacity="0.8"
        />
      ))}
      <circle cx="30" cy="30" r="8" fill="#eaede2" />
      <circle cx="30" cy="30" r="4.5" fill={color} />
    </svg>
  );
}

function FlowerC({
  size = 32,
  color = "#4a5a44",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ opacity }}
    >
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="30"
          rx="6"
          ry="15"
          fill={color}
          style={{
            transformOrigin: "30px 30px",
            transform: `rotate(${deg}deg)`,
          }}
          opacity="0.75"
        />
      ))}
      <circle cx="30" cy="30" r="7" fill="#f5f2ec" />
      <circle cx="30" cy="30" r="3.5" fill={color} />
    </svg>
  );
}

function Leaf({
  size = 28,
  color = "#8f9f84",
  rotate = 0,
  opacity = 0.7,
}: {
  size?: number;
  color?: string;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path d="M20 4 C28 12 32 28 20 36 C8 28 12 12 20 4Z" fill={color} />
      <path
        d="M20 8 Q20 22 20 34"
        stroke="#f5f2ec"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

const reels = [
  {
    id: 1,
    src: "/reel1.mp4",
  },
  {
    id: 2,
    src: "/reel2.mp4",
  },
  {
    id: 3,
    src: "/reel3.mp4",
  },
];

export default function ReelsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 88%",
          },
        },
      );

      const phones =
        phonesRef.current?.querySelectorAll<HTMLElement>(".phone-card");
      if (!phones || phones.length < 3) return;

      const [left, center, right] = Array.from(phones);

      // --- Entry animations: each phone flies in from a different direction ---
      gsap.fromTo(
        left,
        { opacity: 0, x: -100, y: 60, rotate: -10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: { trigger: phonesRef.current, start: "top 82%" },
        },
      );
      gsap.fromTo(
        center,
        { opacity: 0, y: 100, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.12,
          scrollTrigger: { trigger: phonesRef.current, start: "top 82%" },
        },
      );
      gsap.fromTo(
        right,
        { opacity: 0, x: 100, y: 60, rotate: 10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1.0,
          ease: "power3.out",
          delay: 0.06,
          scrollTrigger: { trigger: phonesRef.current, start: "top 82%" },
        },
      );

      // --- Flower bloom animations ---
      const flowers = section.querySelectorAll<HTMLElement>(".reel-flower");
      flowers.forEach((f, i) => {
        gsap.fromTo(
          f,
          { scale: 0, opacity: 0, rotate: -30 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.9,
            ease: "back.out(1.7)",
            delay: 0.3 + i * 0.08,
            scrollTrigger: { trigger: phonesRef.current, start: "top 82%" },
          },
        );
        // Gentle idle sway
        gsap.to(f, {
          rotate: `+=${i % 2 === 0 ? 8 : -8}`,
          y: -6,
          duration: 1.8 + (i % 4) * 0.35,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.15,
        });
      });
      gsap.to(left, {
        rotate: -6,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
      gsap.to(center, {
        y: -50,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
      gsap.to(right, {
        rotate: 6,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className="flex items-center justify-center gap-6 mb-16 md:mb-20 px-6"
      >
        <div
          className="flex-1 max-w-[180px] h-px"
          style={{ backgroundColor: "var(--sage-mid)" }}
        />
        <h2
          className="text-4xl md:text-5xl lg:text-6xl tracking-wide"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "var(--foreground)",
            letterSpacing: "0.06em",
          }}
        >
          Reels
        </h2>
        <div
          className="flex-1 max-w-[180px] h-px"
          style={{ backgroundColor: "var(--sage-mid)" }}
        />
      </div>

      {/* Phones row */}
      <div
        ref={phonesRef}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-10 px-6 md:px-10"
      >
        {reels.map((reel, i) => (
          <div
            key={reel.id}
            className="phone-card relative flex-shrink-0"
            style={{
              width: "clamp(220px, 26vw, 300px)",
              // Center phone is slightly taller / offset for visual hierarchy
              marginTop: i === 1 ? "-12px" : "0",
            }}
          >
            {/* ── Flowers for each phone ── */}
            {i === 0 && (
              <>
                {/* Top-left big bloom */}
                <div
                  className="reel-flower absolute -top-10 -left-8 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerA size={64} color="#c5ccb0" />
                </div>
                {/* Top-right small */}
                <div
                  className="reel-flower absolute -top-6 left-1/2 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerC size={36} color="#8f9f84" />
                </div>
                {/* Left side mid */}
                <div
                  className="reel-flower absolute top-1/3 -left-10 z-20"
                  style={{ transformOrigin: "center right" }}
                >
                  <FlowerB size={42} color="#4a5a44" opacity={0.85} />
                </div>
                {/* Leaf left */}
                <div
                  className="reel-flower absolute top-1/4 -left-6 z-10"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <Leaf size={32} color="#8f9f84" rotate={-40} opacity={0.7} />
                </div>
                {/* Tiny top */}
                <div
                  className="reel-flower absolute -top-14 left-1/3 z-10"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerC size={24} color="#c5ccb0" opacity={0.6} />
                </div>
              </>
            )}
            {i === 1 && (
              <>
                {/* Centre phone – flowers peek from top */}
                <div
                  className="reel-flower absolute -top-12 left-1/4 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerA size={72} color="#c5ccb0" />
                </div>
                <div
                  className="reel-flower absolute -top-16 left-1/2 -translate-x-1/2 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerB size={56} color="#4a5a44" opacity={0.9} />
                </div>
                <div
                  className="reel-flower absolute -top-10 right-1/4 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerC size={44} color="#8f9f84" />
                </div>
                {/* Sides */}
                <div
                  className="reel-flower absolute top-1/2 -left-10 z-20"
                  style={{ transformOrigin: "right center" }}
                >
                  <FlowerA size={38} color="#8f9f84" opacity={0.7} />
                </div>
                <div
                  className="reel-flower absolute top-1/2 -right-10 z-20"
                  style={{ transformOrigin: "left center" }}
                >
                  <FlowerB size={38} color="#c5ccb0" opacity={0.75} />
                </div>
                {/* Small leaf pair */}
                <div className="reel-flower absolute -top-8 left-[15%] z-10">
                  <Leaf size={30} color="#4a5a44" rotate={-20} opacity={0.65} />
                </div>
                <div className="reel-flower absolute -top-8 right-[15%] z-10">
                  <Leaf size={30} color="#4a5a44" rotate={20} opacity={0.65} />
                </div>
              </>
            )}
            {i === 2 && (
              <>
                {/* Right phone */}
                <div
                  className="reel-flower absolute -top-10 right-1/2 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerC size={38} color="#8f9f84" />
                </div>
                <div
                  className="reel-flower absolute -top-8 -right-8 z-20"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <FlowerA size={64} color="#c5ccb0" />
                </div>
                <div
                  className="reel-flower absolute top-1/3 -right-10 z-20"
                  style={{ transformOrigin: "left center" }}
                >
                  <FlowerB size={42} color="#4a5a44" opacity={0.85} />
                </div>
                <div className="reel-flower absolute top-1/4 -right-6 z-10">
                  <Leaf size={32} color="#8f9f84" rotate={40} opacity={0.7} />
                </div>
                <div className="reel-flower absolute -top-14 right-1/3 z-10">
                  <FlowerC size={24} color="#c5ccb0" opacity={0.6} />
                </div>
              </>
            )}
            {/* Phone outer frame */}
            <div
              className="relative w-full rounded-[2.8rem] overflow-hidden shadow-2xl"
              style={{
                background: "white",
                padding: "10px 8px",
                aspectRatio: "9/19.5",
                boxShadow:
                  "0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.12)",
              }}
            >
              {/* Side buttons left */}
              <div className="absolute left-0 top-[22%] flex flex-col gap-3 -translate-x-[4px] z-10">
                <div className="w-[4px] h-6 rounded-l bg-white/70" />
                <div className="w-[4px] h-8 rounded-l bg-white/70" />
                <div className="w-[4px] h-8 rounded-l bg-white/70" />
              </div>
              {/* Side button right */}
              <div className="absolute right-0 top-[30%] -translate-x-0 translate-x-[4px] z-10">
                <div className="w-[4px] h-12 rounded-r bg-white/70" />
              </div>

              {/* Inner screen */}
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-black">
                {/* Video */}
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  <div className="w-2 h-2 rounded-full bg-black/50" />
                  <div
                    className="h-3 rounded-full bg-black/40"
                    style={{ width: "52px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
