"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";

gsap.registerPlugin(ScrollTrigger);

const allImages = [
  { id: 1, src: "/port1.jpg", category: "Branding" },
  { id: 2, src: "/port2.jpg", category: "Social Media" },
  { id: 3, src: "/port3.jpg", category: "Branding" },
  { id: 4, src: "/port4.jpg", category: "Content" },
  { id: 5, src: "/port5.jpg", category: "Social Media" },
  { id: 6, src: "/port6.jpg", category: "Branding" },
  { id: 7, src: "/port7.jpg", category: "Content" },
  { id: 8, src: "/port8.jpg", category: "Social Media" },
  { id: 9, src: "/port9.jpg", category: "Branding" },
  { id: 10, src: "/port10.jpg", category: "Content" },
  { id: 11, src: "/port11.jpg", category: "Social Media" },
  { id: 12, src: "/port12.jpg", category: "Branding" },
  { id: 13, src: "/port13.jpg", category: "Content" },
  { id: 14, src: "/port14.jpg", category: "Social Media" },
  { id: 16, src: "/port16.jpg", category: "Branding" },
  { id: 17, src: "/port17.jpg", category: "Content" },
  { id: 18, src: "/port18.jpg", category: "Social Media" },
];

const categories = ["All", "Branding", "Social Media", "Content"];

// Corner clip-path origins cycle through 4 corners
const clipOrigins = [
  "inset(0 100% 100% 0)", // top-right → top-left
  "inset(100% 0 0 100%)", // bottom-left
  "inset(0 0 100% 100%)", // top-left
  "inset(100% 100% 0 0)", // bottom-right
];

// ── Tilt card ──────────────────────────────────────────────────────────────
function PortCard({
  img,
  index,
  onOpen,
}: {
  img: (typeof allImages)[0];
  index: number;
  onOpen: (src: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;

    gsap.to(el, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
    });

    if (glow) {
      gsap.to(glow, {
        x: x - 80,
        y: y - 80,
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (el) {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.6)",
      });
    }
    if (glow) {
      gsap.to(glow, { opacity: 0, duration: 0.3 });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="port-item relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        aspectRatio: "3/4",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(img.src)}
    >
      {/* Image */}
      <Image
        src={img.src}
        alt={`Portfolio ${img.id}`}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Cursor spotlight glow */}
      <div
        ref={glowRef}
        className="absolute w-40 h-40 rounded-full pointer-events-none"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          transform: "translate(0px, 0px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom gradient + category */}
      <div
        className="port-overlay absolute inset-0 flex flex-col justify-end p-4"
        style={{
          background:
            "linear-gradient(to top, rgba(42,56,38,0.88) 0%, rgba(42,56,38,0.3) 45%, transparent 70%)",
          opacity: 0,
          transition: "opacity 0.35s ease",
        }}
      >
        <div className="overflow-hidden">
          <span
            className="port-cat-text block text-xs font-bold tracking-[0.25em] uppercase translate-y-full"
            style={{
              color: "var(--sage-light)",
              transition: "transform 0.4s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {img.category}
          </span>
        </div>
        <div className="mt-1 overflow-hidden">
          <span
            className="port-view-text block text-[10px] tracking-widest uppercase translate-y-full"
            style={{
              color: "rgba(255,255,255,0.5)",
              transition: "transform 0.4s cubic-bezier(.22,1,.36,1) 0.05s",
            }}
          >
            View
          </span>
        </div>
      </div>

      {/* Corner bracket – top left */}
      <div className="absolute top-3 left-3 pointer-events-none">
        <div
          className="w-5 h-5 border-t-2 border-l-2 rounded-tl-sm opacity-0 port-bracket"
          style={{ borderColor: "var(--sage-light)" }}
        />
      </div>
      {/* Corner bracket – bottom right */}
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <div
          className="w-5 h-5 border-b-2 border-r-2 rounded-br-sm opacity-0 port-bracket"
          style={{ borderColor: "var(--sage-light)" }}
        />
      </div>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  // Refs for each scroll strip (rows on desktop, cols on mobile)
  const stripRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { isMobile } = useBreakpoint();

  const filtered =
    active === "All"
      ? allImages
      : allImages.filter((img) => img.category === active);

  // ── Build strips ──────────────────────────────────────────────────────────
  // Desktop: rows of 4 images each, scroll horizontally
  // Mobile: 2 columns (even / odd), scroll vertically
  const COLS = isMobile ? 2 : 4;
  const rows: (typeof allImages)[] = [];
  if (!isMobile) {
    for (let i = 0; i < filtered.length; i += COLS) {
      rows.push(filtered.slice(i, i + COLS));
    }
  }
  const mobileCol0 = filtered.filter((_, i) => i % 2 === 0);
  const mobileCol1 = filtered.filter((_, i) => i % 2 === 1);

  useGSAP(
    () => {
      // Kill old ScrollTriggers from previous renders
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id === "port-strip" || st.vars.id === "port-item-reveal")
          st.kill();
      });

      // ── Title ────────────────────────────────────────────────────────────
      gsap.fromTo(
        ".port-title-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
        },
      );
      gsap.fromTo(
        ".port-title-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
        },
      );
      gsap.fromTo(
        ".port-count",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
          delay: 0.5,
          scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
        },
      );

      // ── Scroll-parallax strips ───────────────────────────────────────────
      const strips = stripRefs.current.filter(Boolean);
      strips.forEach((strip, i) => {
        if (!strip) return;
        if (!isMobile) {
          // Desktop: rows slide left / right while section scrolls through viewport
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            strip,
            { x: dir * 60 },
            {
              x: dir * -60,
              ease: "none",
              scrollTrigger: {
                id: "port-strip",
                trigger: gridRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            },
          );
        } else {
          // Mobile: columns slide up / down
          const dir = i === 0 ? -1 : 1;
          gsap.fromTo(
            strip,
            { y: dir * 50 },
            {
              y: dir * -50,
              ease: "none",
              scrollTrigger: {
                id: "port-strip",
                trigger: gridRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            },
          );
        }
      });

      // ── Per-card clip-path reveal + idle float ───────────────────────────
      const items = gridRef.current?.querySelectorAll(".port-item");
      if (items) {
        items.forEach((item, i) => {
          const origin = clipOrigins[i % 4];
          gsap.fromTo(
            item,
            { clipPath: origin, opacity: 0, scale: 0.92 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              delay: i * 0.045,
              scrollTrigger: {
                id: "port-item-reveal",
                trigger: gridRef.current,
                start: "top 84%",
              },
            },
          );

          gsap.to(item, {
            y: i % 2 === 0 ? -6 : 6,
            duration: 2.2 + (i % 5) * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: (i % 7) * 0.25,
          });
        });

        // Hover overlay wiring
        const handleOver = (e: Event) => {
          const card = e.currentTarget as HTMLElement;
          const overlay = card.querySelector(
            ".port-overlay",
          ) as HTMLElement | null;
          const catText = card.querySelector(
            ".port-cat-text",
          ) as HTMLElement | null;
          const viewText = card.querySelector(
            ".port-view-text",
          ) as HTMLElement | null;
          const brackets = card.querySelectorAll(".port-bracket");
          const img = card.querySelector("img");
          if (overlay) overlay.style.opacity = "1";
          if (catText) catText.style.transform = "translateY(0)";
          if (viewText) viewText.style.transform = "translateY(0)";
          if (img)
            gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power2.out" });
          brackets.forEach((b) => gsap.to(b, { opacity: 1, duration: 0.3 }));
        };
        const handleOut = (e: Event) => {
          const card = e.currentTarget as HTMLElement;
          const overlay = card.querySelector(
            ".port-overlay",
          ) as HTMLElement | null;
          const catText = card.querySelector(
            ".port-cat-text",
          ) as HTMLElement | null;
          const viewText = card.querySelector(
            ".port-view-text",
          ) as HTMLElement | null;
          const brackets = card.querySelectorAll(".port-bracket");
          const img = card.querySelector("img");
          if (overlay) overlay.style.opacity = "0";
          if (catText) catText.style.transform = "translateY(100%)";
          if (viewText) viewText.style.transform = "translateY(100%)";
          if (img)
            gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.inOut" });
          brackets.forEach((b) => gsap.to(b, { opacity: 0, duration: 0.3 }));
        };
        items.forEach((item) => {
          item.addEventListener("mouseenter", handleOver);
          item.addEventListener("mouseleave", handleOut);
        });
        return () => {
          items.forEach((item) => {
            item.removeEventListener("mouseenter", handleOver);
            item.removeEventListener("mouseleave", handleOut);
          });
        };
      }
    },
    { scope: sectionRef, dependencies: [active, isMobile] },
  );

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* ── TITLE ── */}
      <div
        ref={titleRef}
        className="flex items-center justify-center gap-6 mb-10 px-6"
      >
        <div
          className="port-title-line flex-1 max-w-[180px] h-px origin-left"
          style={{ backgroundColor: "var(--sage-mid)" }}
        />
        <div className="relative flex items-center gap-3">
          <h2
            className="port-title-text text-4xl md:text-5xl lg:text-6xl tracking-wide"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--foreground)",
              letterSpacing: "0.06em",
            }}
          >
            Portfolio
          </h2>
          <sup
            className="port-count text-xs font-bold tracking-widest px-2 py-0.5 rounded-full self-start mt-2"
            style={{
              backgroundColor: "var(--sage-dark)",
              color: "var(--cream)",
            }}
          >
            {filtered.length}
          </sup>
        </div>
        <div
          className="port-title-line flex-1 max-w-[180px] h-px origin-right"
          style={{
            backgroundColor: "var(--sage-mid)",
            transformOrigin: "right center",
          }}
        />
      </div>

      {/* ── FILTER PILLS ── */}
      <div className="flex items-center justify-center flex-wrap gap-3 mb-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="relative px-5 py-2 rounded-full text-sm tracking-widest overflow-hidden transition-colors duration-300"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.14em",
              backgroundColor:
                active === cat ? "var(--sage-dark)" : "transparent",
              color: active === cat ? "var(--cream)" : "var(--sage-dark)",
              border: "1px solid var(--sage-mid)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── GRID ── */}
      <div
        ref={gridRef}
        className="px-6 md:px-10 lg:px-16"
        style={{ perspective: "1200px" }}
      >
        {isMobile ? (
          /* ── Mobile: 2 independent columns that scroll in opposite Y directions ── */
          <div className="flex gap-3">
            {/* Column 0 – slides up */}
            <div
              className="flex-1 flex flex-col gap-3"
              ref={(el) => {
                stripRefs.current[0] = el;
              }}
            >
              {mobileCol0.map((img, i) => (
                <PortCard
                  key={img.id}
                  img={img}
                  index={i * 2}
                  onOpen={setLightbox}
                />
              ))}
            </div>
            {/* Column 1 – slides down */}
            <div
              className="flex-1 flex flex-col gap-3"
              ref={(el) => {
                stripRefs.current[1] = el;
              }}
            >
              {mobileCol1.map((img, i) => (
                <PortCard
                  key={img.id}
                  img={img}
                  index={i * 2 + 1}
                  onOpen={setLightbox}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── Desktop: rows that slide left / right alternately ── */
          <div className="flex flex-col gap-4">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                ref={(el) => {
                  stripRefs.current[rowIdx] = el;
                }}
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${COLS}, minmax(0,1fr))`,
                  willChange: "transform",
                }}
              >
                {row.map((img, i) => (
                  <PortCard
                    key={img.id}
                    img={img}
                    index={rowIdx * COLS + i}
                    onOpen={setLightbox}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{
            backgroundColor: "rgba(42,56,38,0.94)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-3xl leading-none transition-transform hover:rotate-90 duration-300"
            style={{ color: "var(--cream)" }}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div
            className="relative max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Portfolio preview"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "90vh" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
