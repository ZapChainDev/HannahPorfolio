"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    num: "01",
    stars: 5,
    quote:
      "Working with Hana has been a game-changer for our business. Our Instagram engagement has doubled, and the campaigns Hana created brought in a wave of new customers. The creativity, consistency, and ability to understand our brand voice are unmatched. Highly recommend!",
    author: "Sarah M.",
    role: "Owner of Luxe Candle Co.",
    img1: "/client1.png",
    img2: "/client1.1.jpg",
  },
  {
    num: "02",
    stars: 5,
    quote:
      "I hired Hana to revamp my social media strategy, and the results have been incredible. From creating stunning visuals to implementing data-driven tactics, she has taken my brand's online presence to the next level. I've seen a 40% increase in website traffic within three months!",
    author: "Jimmy",
    role: "Content Creator at Jimmyfoodtron",
    img1: "/client2.png",
    img2: "/client2.2.jpg",
  },
  {
    num: "03",
    stars: 5,
    quote:
      "I was struggling to maintain consistency on my platforms, but Hana completely turned things around. She streamlined my content calendar, boosted engagement rates, and even taught me tips for creating better reels. I've never felt more confident in my brand's social media strategy!",
    author: "Emily T.",
    role: "Founder of Fernwood Candle Supply",
    img1: "/client3.jpg",
    img2: "/client3.3.jpg",
  },
];

export default function ClientTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Title word split reveal
      gsap.fromTo(
        ".ct-title-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".ct-title-wrap", start: "top 85%" },
        },
      );

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const isEven = i % 2 === 0;

        // Ghost number drifts in (opacity controlled by inline CSS only)
        gsap.fromTo(
          card.querySelector(".ct-ghost-num"),
          { x: isEven ? 40 : -40 },
          {
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%" },
          },
        );

        // Quote wipes in via clip-path
        gsap.fromTo(
          card.querySelector(".ct-quote-block"),
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.1,
            ease: "power3.inOut",
            delay: 0.1,
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );

        // Author slides up
        gsap.fromTo(
          card.querySelector(".ct-author"),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4,
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );

        // Back image slides from outer edge with tilt
        gsap.fromTo(
          card.querySelector(".ct-img1"),
          { opacity: 0, x: isEven ? 60 : -60, rotate: isEven ? 6 : -6 },
          {
            opacity: 1,
            x: 0,
            rotate: isEven ? 3 : -3,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.15,
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );

        // Front image slides from inner edge with counter-tilt
        gsap.fromTo(
          card.querySelector(".ct-img2"),
          { opacity: 0, x: isEven ? -40 : 40, rotate: isEven ? -6 : 6 },
          {
            opacity: 1,
            x: 0,
            rotate: isEven ? -4 : 4,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );

        // Stars pop in
        gsap.fromTo(
          card.querySelectorAll(".ct-star"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            stagger: 0.07,
            delay: 0.5,
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* ── HEADER ── */}
      <div className="ct-title-wrap relative flex flex-col items-center pt-24 pb-10 px-6 overflow-hidden">
        {/* Decorative ghost label */}
        <span
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-bold leading-none tracking-tighter uppercase"
          style={{
            fontSize: "clamp(5rem,18vw,15rem)",
            color: "var(--sage-light)",
            opacity: 0.18,
          }}
          aria-hidden
        >
          Reviews
        </span>
        <div className="relative">
          <h2
            className="flex flex-wrap justify-center gap-x-4 leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.2rem,5vw,4rem)",
              fontFamily: "var(--font-heading)",
              color: "var(--foreground)",
            }}
          >
            {["Client", "Testimonials"].map((w) => (
              <span key={w} className="overflow-hidden inline-block">
                <span className="ct-title-word inline-block">{w}</span>
              </span>
            ))}
          </h2>
        </div>
        <div
          className="mt-5 w-16 h-[2px] rounded-full"
          style={{ backgroundColor: "var(--sage-mid)" }}
        />
      </div>

      {/* ── CARDS ── */}
      <div className="flex flex-col">
        {testimonials.map((t, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative isolate w-full overflow-hidden"
              style={{
                backgroundColor: isEven
                  ? "var(--sage-dark)"
                  : "var(--background)",
              }}
            >
              {/* Ghost number watermark */}
              <span
                className="ct-ghost-num absolute top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold leading-none z-0"
                style={{
                  fontSize: "clamp(8rem,22vw,18rem)",
                  color: isEven ? "#ffffff" : "var(--sage-mid)",
                  opacity: isEven ? 0.04 : 0.07,
                  right: isEven ? "-0.05em" : undefined,
                  left: !isEven ? "-0.05em" : undefined,
                }}
                aria-hidden
              >
                {t.num}
              </span>

              <div
                className={`relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* ── TEXT SIDE ── */}
                <div className="w-full md:w-[55%] flex flex-col gap-7">
                  {/* Numbered pill */}
                  <div
                    className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border text-xs tracking-[0.2em] uppercase font-semibold"
                    style={{
                      borderColor: isEven
                        ? "rgba(255,255,255,0.25)"
                        : "var(--sage-mid)",
                      color: isEven
                        ? "rgba(255,255,255,0.6)"
                        : "var(--sage-mid)",
                    }}
                  >
                    <span>{t.num}</span>
                    <span
                      className="w-4 h-[1px]"
                      style={{
                        backgroundColor: isEven
                          ? "rgba(255,255,255,0.4)"
                          : "var(--sage-mid)",
                      }}
                    />
                    <span>Testimonial</span>
                  </div>

                  {/* Decorative quote mark */}
                  <svg
                    width="48"
                    height="36"
                    viewBox="0 0 48 36"
                    fill="none"
                    className="opacity-60"
                  >
                    <path
                      d="M0 36V21.6C0 9.6 7.2 2.4 21.6 0L24 4.8C16.8 6.4 12.8 10.4 12 16.8H21.6V36H0ZM26.4 36V21.6C26.4 9.6 33.6 2.4 48 0L50.4 4.8C43.2 6.4 39.2 10.4 38.4 16.8H48V36H26.4Z"
                      fill={isEven ? "#ffffff" : "var(--sage-mid)"}
                    />
                  </svg>

                  {/* Quote text with clip-path wipe */}
                  <div className="ct-quote-block overflow-hidden">
                    <p
                      className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
                      style={{
                        fontFamily: "Georgia, serif",
                        color: isEven
                          ? "rgba(255,255,255,0.88)"
                          : "var(--foreground)",
                      }}
                    >
                      {t.quote}
                    </p>
                  </div>

                  {/* Stars + Author */}
                  <div className="ct-author flex flex-col gap-3 mt-2">
                    <div className="flex gap-1">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <svg
                          key={si}
                          className="ct-star"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill={isEven ? "#ffffff" : "var(--sage-dark)"}
                        >
                          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-[1.5px] shrink-0"
                        style={{
                          backgroundColor: isEven
                            ? "rgba(255,255,255,0.4)"
                            : "var(--sage-mid)",
                        }}
                      />
                      <div>
                        <p
                          className="font-semibold text-sm tracking-wide"
                          style={{
                            color: isEven
                              ? "rgba(255,255,255,0.95)"
                              : "var(--foreground)",
                          }}
                        >
                          {t.author}
                        </p>
                        <p
                          className="text-xs tracking-wider uppercase mt-0.5"
                          style={{
                            color: isEven
                              ? "rgba(255,255,255,0.45)"
                              : "var(--sage-mid)",
                          }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── IMAGE SIDE ── */}
                <div className="w-full md:w-[45%] flex items-center justify-center">
                  <div className="relative w-72 h-80 md:w-80 md:h-96">
                    {/* Back image – arched, rotated outward */}
                    <div
                      className="ct-img1 absolute bottom-0 right-0 w-[62%] h-[75%] overflow-hidden shadow-2xl"
                      style={{
                        borderRadius: "999px 999px 8px 8px",
                        transformOrigin: "bottom center",
                      }}
                    >
                      <Image
                        src={t.img2}
                        alt={t.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    {/* Front image – arched, rotated inward, overlapping */}
                    <div
                      className="ct-img2 absolute top-0 left-0 w-[68%] h-[80%] overflow-hidden shadow-2xl"
                      style={{
                        borderRadius: "999px 999px 8px 8px",
                        transformOrigin: "bottom center",
                      }}
                    >
                      <Image
                        src={t.img1}
                        alt={t.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    {/* Floating star badge */}
                    <div
                      className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-[9px] font-bold tracking-widest"
                      style={{
                        borderColor: isEven
                          ? "rgba(255,255,255,0.2)"
                          : "var(--sage-light)",
                        color: isEven
                          ? "rgba(255,255,255,0.35)"
                          : "var(--sage-mid)",
                        backgroundColor: isEven
                          ? "rgba(255,255,255,0.04)"
                          : "var(--background)",
                      }}
                    >
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>

              {/* Wave divider between cards */}
              {i < testimonials.length - 1 && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden"
                  style={{
                    backgroundColor: isEven
                      ? "var(--background)"
                      : "var(--sage-dark)",
                  }}
                >
                  <svg
                    viewBox="0 0 1440 40"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    style={{
                      fill: isEven ? "var(--sage-dark)" : "var(--background)",
                    }}
                  >
                    <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── BOTTOM TAGLINE ── */}
      <div
        className="text-center py-16 px-6"
        style={{ backgroundColor: "var(--sage-dark)" }}
      >
        <p
          className="text-sm tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Trusted by creators &amp; brands worldwide
        </p>
      </div>
    </section>
  );
}
