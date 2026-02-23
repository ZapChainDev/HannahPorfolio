"use client";

import { useState, useRef } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    tier: "01",
    name: "Standard",
    tagline: "Perfect to get started",
    features: [
      "Logo",
      "Color palette & Fonts",
      "5 Social Media templates",
      "Business card",
      "Gift card",
    ],
    price: "$299",
    featured: false,
  },
  {
    tier: "02",
    name: "Premium",
    tagline: "Most popular choice",
    features: [
      "Logo",
      "Color palette & Fonts",
      "10 Social Media templates",
      "Gift package",
      "Gift card",
    ],
    price: "$399",
    featured: true,
  },
  {
    tier: "03",
    name: "Lux",
    tagline: "Elevate your brand",
    features: [
      "Logo",
      "Color palette & Fonts",
      "15 Social Media templates",
      "Gift package + Gift card",
      "Landing Page",
    ],
    price: "$799",
    featured: false,
  },
  {
    tier: "04",
    name: "VIP",
    tagline: "The full experience",
    features: [
      "Logo",
      "Color palette & Fonts",
      "30 Social Media templates",
      "Gift package + Gift card",
      "Full UI/UX design",
    ],
    price: "$899",
    featured: false,
  },
];

export default function PackageRates() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(
        ".pkg-eyebrow",
        { y: 16, opacity: 0, duration: 0.55, immediateRender: false },
        0,
      )
        .from(
          ".pkg-heading",
          { y: 24, opacity: 0, duration: 0.65, immediateRender: false },
          0.1,
        )
        .from(
          ".pkg-divider",
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.5,
            transformOrigin: "center",
            immediateRender: false,
          },
          0.22,
        )
        .from(
          ".pkg-card",
          {
            y: 44,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            immediateRender: false,
          },
          0.32,
        )
        .from(
          ".pkg-footer",
          { y: 16, opacity: 0, duration: 0.5, immediateRender: false },
          0.72,
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#e8ede0",
        padding: isMobile
          ? "60px 16px 60px"
          : isTablet
            ? "60px 32px 80px"
            : "80px 48px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(74,90,68,0.06)",
          top: -200,
          left: -150,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(74,90,68,0.05)",
          bottom: 0,
          right: -80,
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <p
          className="pkg-eyebrow"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "0.75rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#8f9f84",
            margin: "0 0 12px",
          }}
        >
          Investment
        </p>
        <h2
          className="pkg-heading"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#4a5a44",
            margin: 0,
          }}
        >
          Package Rates
        </h2>
      </div>

      {/* Diamond divider */}
      <div
        className="pkg-divider"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: "20px 0 64px",
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "#8f9f84",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            border: "1.5px solid #8f9f84",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "#8f9f84",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Cards grid */}
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: isMobile ? 20 : 24,
          alignItems: "stretch",
        }}
      >
        {packages.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} className="pkg-card" />
        ))}
      </div>

      {/* Footer note */}
      <p
        className="pkg-footer"
        style={{
          marginTop: 52,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.82rem",
          fontStyle: "italic",
          color: "rgba(74,90,68,0.55)",
          textAlign: "center",
          letterSpacing: "0.02em",
        }}
      >
        All packages are customizable. Reach out to discuss your unique needs.
      </p>
    </section>
  );
}

function PackageCard({
  pkg,
  className,
}: {
  pkg: (typeof packages)[0];
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || pkg.featured;

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 28,
        padding: "40px 32px 44px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        backgroundColor: active ? "#4a5a44" : "#ffffff",
        border: pkg.featured
          ? "1.5px solid #8f9f84"
          : "1.5px solid rgba(74,90,68,0.12)",
        boxShadow: active
          ? "0 24px 64px rgba(74,90,68,0.28)"
          : "0 4px 20px rgba(74,90,68,0.07)",
        transition: "all 0.35s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Featured banner */}
      {pkg.featured && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: -30,
            backgroundColor: "#8f9f84",
            color: "#e8ede0",
            fontFamily: "Georgia, serif",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "5px 40px",
            transform: "rotate(45deg)",
          }}
        >
          Popular
        </div>
      )}

      {/* Tier number */}
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "3rem",
          fontStyle: "italic",
          lineHeight: 1,
          color: active ? "rgba(143,159,132,0.3)" : "rgba(74,90,68,0.08)",
          transition: "color 0.35s ease",
          marginBottom: 20,
        }}
      >
        {pkg.tier}
      </span>

      {/* Name */}
      <h3
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1.45rem",
          fontWeight: 400,
          color: active ? "#e8ede0" : "#4a5a44",
          margin: "0 0 6px",
          letterSpacing: "0.02em",
          transition: "color 0.35s ease",
        }}
      >
        {pkg.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.75rem",
          fontStyle: "italic",
          color: active ? "rgba(232,237,224,0.55)" : "rgba(74,90,68,0.45)",
          margin: "0 0 24px",
          letterSpacing: "0.04em",
          transition: "color 0.35s ease",
        }}
      >
        {pkg.tagline}
      </p>

      {/* Sage rule */}
      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: active
            ? "rgba(143,159,132,0.35)"
            : "rgba(74,90,68,0.1)",
          marginBottom: 24,
          transition: "background-color 0.35s ease",
        }}
      />

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 11,
          flex: 1,
        }}
      >
        {pkg.features.map((feat, j) => (
          <li
            key={j}
            style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
          >
            {/* Checkmark */}
            <svg
              viewBox="0 0 14 14"
              width={14}
              height={14}
              style={{ flexShrink: 0, marginTop: 2 }}
            >
              <circle
                cx="7"
                cy="7"
                r="6.5"
                stroke={active ? "#8f9f84" : "rgba(74,90,68,0.25)"}
                strokeWidth="1"
                fill="none"
              />
              <polyline
                points="3.5,7 5.8,9.5 10.5,4.5"
                stroke={active ? "#8f9f84" : "rgba(74,90,68,0.35)"}
                strokeWidth="1.2"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "0.85rem",
                color: active
                  ? "rgba(232,237,224,0.82)"
                  : "rgba(74,90,68,0.72)",
                lineHeight: 1.5,
                transition: "color 0.35s ease",
              }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: `1px solid ${active ? "rgba(143,159,132,0.3)" : "rgba(74,90,68,0.1)"}`,
          transition: "border-color 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "2.4rem",
            fontWeight: 700,
            color: active ? "#e8ede0" : "#4a5a44",
            margin: 0,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            transition: "color 0.35s ease",
          }}
        >
          {pkg.price}
        </p>
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "0.72rem",
            fontStyle: "italic",
            color: active ? "rgba(232,237,224,0.45)" : "rgba(74,90,68,0.4)",
            margin: "6px 0 0",
            letterSpacing: "0.06em",
            transition: "color 0.35s ease",
          }}
        >
          one-time payment
        </p>
      </div>
    </div>
  );
}
