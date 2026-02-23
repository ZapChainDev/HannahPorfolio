"use client";

import { useState, useRef } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Social Media Management",
    short: "Strategy & Growth",
    description:
      "I help businesses grow their online presence through strategic social media management—creating engaging content, managing communities, and optimizing performance to boost brand visibility and drive results.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <circle cx="12" cy="20" r="3.5" fill="#8f9f84" />
        <circle cx="28" cy="13" r="3.5" fill="#8f9f84" />
        <circle cx="28" cy="27" r="3.5" fill="#8f9f84" />
        <line
          x1="15.1"
          y1="18.3"
          x2="24.9"
          y2="14.8"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
        <line
          x1="15.1"
          y1="21.7"
          x2="24.9"
          y2="25.2"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Content Creation",
    short: "Visuals & Storytelling",
    description:
      "I create engaging, high-quality content tailored to your brand—designed to capture attention, connect with your audience, and drive meaningful engagement across social media platforms.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <rect
          x="11"
          y="13"
          width="18"
          height="14"
          rx="2"
          stroke="#8f9f84"
          strokeWidth="1.4"
        />
        <line
          x1="14"
          y1="18"
          x2="26"
          y2="18"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
        <line
          x1="14"
          y1="22"
          x2="22"
          y2="22"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
        <circle
          cx="28"
          cy="26"
          r="4"
          fill="#4a5a44"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
        <line
          x1="27"
          y1="26"
          x2="29"
          y2="26"
          stroke="#8f9f84"
          strokeWidth="1"
        />
        <line
          x1="28"
          y1="25"
          x2="28"
          y2="27"
          stroke="#8f9f84"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Advertising & Management",
    short: "Reach & Performance",
    description:
      "I provide strategic advertising and account management services to help brands maximize reach, optimize campaigns, and achieve measurable growth through data-driven marketing.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <polyline
          points="11,27 16,20 21,23 26,15 29,17"
          stroke="#8f9f84"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="17" r="2" fill="#8f9f84" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Branding",
    short: "Identity & Design",
    description:
      "I help businesses build strong, memorable brands through cohesive visuals, clear messaging, and strategic identity design that connects with their audience.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <polygon
          points="20,11 23.5,17.5 31,18.5 25.5,23.8 26.9,31.2 20,27.5 13.1,31.2 14.5,23.8 9,18.5 16.5,17.5"
          stroke="#8f9f84"
          strokeWidth="1.3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Web Design",
    short: "UI & Experience",
    description:
      "I design clean, modern, and conversion-focused websites that reflect your brand identity—creating seamless user experiences that look stunning and perform beautifully across all devices.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <rect
          x="10"
          y="13"
          width="20"
          height="14"
          rx="2"
          stroke="#8f9f84"
          strokeWidth="1.4"
        />
        <line
          x1="10"
          y1="17"
          x2="30"
          y2="17"
          stroke="#8f9f84"
          strokeWidth="1.2"
        />
        <circle cx="13" cy="15" r="1" fill="#8f9f84" />
        <circle cx="16" cy="15" r="1" fill="#8f9f84" />
        <circle cx="19" cy="15" r="1" fill="#8f9f84" />
        <line
          x1="13"
          y1="21"
          x2="27"
          y2="21"
          stroke="#8f9f84"
          strokeWidth="1"
        />
        <line
          x1="13"
          y1="24"
          x2="22"
          y2="24"
          stroke="#8f9f84"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Funnel Design",
    short: "Convert & Scale",
    description:
      "I build high-converting sales funnels that guide your audience from awareness to action—strategically designed to capture leads, nurture prospects, and drive consistent revenue growth.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="19" stroke="#8f9f84" strokeWidth="1.5" />
        <path
          d="M10,12 L30,12 L24,20 L24,29 L16,26 L16,20 Z"
          stroke="#8f9f84"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
        <line
          x1="10"
          y1="12"
          x2="30"
          y2="12"
          stroke="#8f9f84"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Header text slides from RIGHT
      tl.from(
        ".svc-eyebrow",
        { x: 40, opacity: 0, duration: 1.0, immediateRender: false },
        0,
      )
        .from(
          ".svc-heading",
          { x: 40, opacity: 0, duration: 1.1, immediateRender: false },
          0.18,
        )
        .from(
          ".svc-divider",
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.85,
            transformOrigin: "center",
            immediateRender: false,
          },
          0.34,
        );

      // Cards alternate: even from LEFT, odd from RIGHT
      gsap.utils.toArray<Element>(".svc-card").forEach((card, i) => {
        tl.from(
          card,
          {
            x: i % 2 === 0 ? -40 : 40,
            opacity: 0,
            duration: 1.0,
            immediateRender: false,
            ease: "power2.out",
          },
          0.45 + i * 0.13,
        );
      });

      // Decorative shapes float continuously
      gsap.to(".svc-shape", {
        y: -16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 5,
        stagger: 1.2,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        backgroundColor: "#e8ede0",
        padding: isMobile
          ? "24px 16px 60px"
          : isTablet
            ? "24px 32px 80px"
            : "24px 48px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint decorative circle top-right */}
      <div
        className="svc-shape"
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(143,159,132,0.15)",
          top: -140,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        className="svc-shape"
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(143,159,132,0.1)",
          top: -60,
          right: -20,
          pointerEvents: "none",
        }}
      />
      {/* Faint circle bottom-left */}
      <div
        className="svc-shape"
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(74,90,68,0.07)",
          bottom: 20,
          left: -80,
          pointerEvents: "none",
        }}
      />

      {/* Section heading */}
      <div
        style={{ textAlign: "center", marginBottom: 12, position: "relative" }}
      >
        <p
          className="svc-eyebrow"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "0.8rem",
            letterSpacing: "0.35em",
            color: "#8f9f84",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}
        >
          What I Offer
        </p>
        <h2
          className="svc-heading"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#4a5a44",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          My Services
        </h2>
      </div>

      {/* Decorative divider */}
      <div
        className="svc-divider"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: "20px 0 60px",
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "#8f9f84",
            opacity: 0.5,
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
            opacity: 0.5,
          }}
        />
      </div>

      {/* Service card grid */}
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: isMobile ? 20 : 28,
        }}
      >
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} className="svc-card" />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  className,
}: {
  service: (typeof services)[0];
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#4a5a44" : "#f2f5ed",
        borderRadius: 24,
        padding: isMobile ? "32px 24px" : "44px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        border: "1px solid rgba(143,159,132,0.25)",
        boxShadow: hovered
          ? "0 20px 60px rgba(74,90,68,0.22)"
          : "0 4px 24px rgba(74,90,68,0.07)",
        transition: "all 0.35s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background arc decoration */}
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: `1px solid ${hovered ? "rgba(143,159,132,0.12)" : "rgba(74,90,68,0.04)"}`,
          bottom: -60,
          right: -50,
          transition: "border-color 0.35s ease",
          pointerEvents: "none",
        }}
      />

      {/* Number + icon row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "2.8rem",
            fontStyle: "italic",
            color: hovered ? "rgba(143,159,132,0.35)" : "rgba(74,90,68,0.1)",
            lineHeight: 1,
            transition: "color 0.35s ease",
          }}
        >
          {service.number}
        </span>
        <div
          style={{
            opacity: hovered ? 1 : 0.7,
            transition: "opacity 0.35s ease",
          }}
        >
          {service.icon}
        </div>
      </div>

      {/* Short tag */}
      <p
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#8f9f84",
          margin: 0,
        }}
      >
        {service.short}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1.25rem",
          fontWeight: 400,
          color: hovered ? "#e8ede0" : "#4a5a44",
          margin: 0,
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          transition: "color 0.35s ease",
        }}
      >
        {service.title}
      </h3>

      {/* Gold rule */}
      <div
        style={{
          width: 40,
          height: 1.5,
          backgroundColor: "#8f9f84",
          borderRadius: 2,
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.88rem",
          fontStyle: "italic",
          lineHeight: 1.8,
          color: hovered ? "rgba(232,237,224,0.8)" : "rgba(74,90,68,0.65)",
          margin: 0,
          transition: "color 0.35s ease",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}
