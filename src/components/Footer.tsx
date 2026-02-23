"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Website",
    value: "www.virtuallyhana.co",
    href: "https://www.virtuallyhana.co",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.56 11.5a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.47 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1.27-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Phone",
    value: "+63 (966) 154-1513",
    href: "tel:+639661541513",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polyline
          points="22,6 12,13 2,6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Email",
    value: "hanavahub@gmail.com",
    href: "mailto:hanavahub@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
    value: "@virtuallyhanaco",
    href: "https://www.instagram.com/virtuallyhanaco",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Facebook",
    value: "virtuallyhana",
    href: "https://www.facebook.com/virtuallyhana",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Big brand name reveals letter by letter
      gsap.fromTo(
        ".footer-brand-char",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.04,
          scrollTrigger: { trigger: ".footer-brand", start: "top 90%" },
        },
      );

      // Contact cards stagger in
      gsap.fromTo(
        ".footer-contact-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".footer-contacts", start: "top 90%" },
        },
      );

      // Nav links
      gsap.fromTo(
        ".footer-nav-link",
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".footer-bottom", start: "top 95%" },
        },
      );

      // Horizontal rule draw
      gsap.fromTo(
        ".footer-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: { trigger: ".footer-rule", start: "top 95%" },
        },
      );

      // Decorative circle
      gsap.to(".footer-deco-ring", {
        rotate: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });
    },
    { scope: footerRef },
  );

  const brandChars = "VIRTUALLY HANA".split("");

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1e2b1a" }}
    >
      {/* ── TOP decorative strip ── */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--sage-mid), var(--sage-light), var(--sage-mid), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* ── BRAND HEADLINE ── */}
        <div className="footer-brand relative pt-16 pb-6 overflow-hidden select-none">
          <h2
            className="leading-none tracking-tighter"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem,11vw,10rem)",
              color: "rgba(255,255,255,0.06)",
            }}
            aria-label="Virtually Hana"
          >
            {brandChars.map((ch, i) => (
              <span
                key={i}
                className="footer-brand-char inline-block"
                style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h2>

          {/* Overlay tagline centered on top of ghost text */}
          <div className="absolute inset-0 flex flex-col justify-center pl-1 pointer-events-none">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-2"
              style={{ color: "var(--sage-light)", opacity: 0.5 }}
            >
              Social Media Management & Strategy
            </p>
            <p
              className="font-light"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.1rem,2.5vw,1.6rem)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Elevating brands, one post at a time.
            </p>
          </div>

          {/* Decorative rotating ring */}
          <svg
            className="footer-deco-ring absolute top-8 right-0 md:right-8 opacity-10 pointer-events-none"
            width="180"
            height="180"
            viewBox="0 0 180 180"
          >
            <circle
              cx="90"
              cy="90"
              r="80"
              stroke="var(--sage-light)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 8"
            />
            <circle
              cx="90"
              cy="90"
              r="60"
              stroke="var(--sage-mid)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray="2 10"
            />
            <circle
              cx="90"
              cy="90"
              r="40"
              stroke="var(--sage-light)"
              strokeWidth="0.6"
              fill="none"
            />
          </svg>
        </div>

        {/* ── RULE ── */}
        <div
          className="footer-rule w-full h-px origin-left"
          style={{ backgroundColor: "rgba(197,204,176,0.12)" }}
        />

        {/* ── CONTACT CARDS ── */}
        <div className="footer-contacts grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-14">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="footer-contact-card group relative flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(197,204,176,0.1)",
              }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ backgroundColor: "rgba(197,204,176,0.06)" }}
              />

              {/* Icon circle */}
              <div
                className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(197,204,176,0.1)",
                  color: "var(--sage-light)",
                }}
              >
                {c.icon}
              </div>

              {/* Label */}
              <div className="relative z-10">
                <p
                  className="text-[10px] tracking-[0.25em] uppercase mb-1"
                  style={{ color: "rgba(197,204,176,0.4)" }}
                >
                  {c.label}
                </p>
                <p
                  className="text-sm font-medium leading-snug break-all transition-colors duration-300 group-hover:text-white"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {c.value}
                </p>
              </div>

              {/* Arrow on hover */}
              <svg
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="var(--sage-light)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* ── RULE ── */}
        <div
          className="footer-rule w-full h-px origin-left"
          style={{ backgroundColor: "rgba(197,204,176,0.08)" }}
        />

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="footer-nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-white cursor-pointer"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-[11px] tracking-widest text-center"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {new Date().getFullYear()} Virtually Hana · All rights reserved
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <span>Back to top</span>
            <span
              className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
