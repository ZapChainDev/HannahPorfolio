"use client";

import { useState, useEffect } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const offset = 68;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update active based on scroll position
      const sections = navItems.map((n) => ({
        label: n.label,
        el: document.querySelector(n.href),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && s.el.getBoundingClientRect().top <= 120) {
          setActive(s.label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: scrolled
          ? "rgba(232,237,224,0.92)"
          : "rgba(232,237,224,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(74,90,68,0.16)"
          : "1px solid rgba(74,90,68,0.09)",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 1100,
          justifyContent: isMobile ? "space-between" : "center",
          padding: isMobile ? "0 24px" : "0 48px",
        }}
      >
        {/* ── Left links ── */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: 44,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {navItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                active={active === item.label}
                onClick={() => {
                  setActive(item.label);
                  scrollTo(item.href);
                }}
              />
            ))}
            <span
              style={{
                width: 1,
                height: 22,
                backgroundColor: "rgba(74,90,68,0.22)",
                marginLeft: 8,
                flexShrink: 0,
              }}
            />
          </div>
        )}

        {/* ── Centre monogram ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 0 : "0 44px",
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {!isMobile && (
            <span
              style={{
                position: "absolute",
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "1px solid rgba(74,90,68,0.22)",
              }}
            />
          )}
          {!isMobile && (
            <span
              style={{
                position: "absolute",
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "1px solid rgba(74,90,68,0.12)",
              }}
            />
          )}
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: isMobile ? "1.5rem" : "1.25rem",
              fontWeight: 700,
              color: "#4a5a44",
              letterSpacing: "0.12em",
              userSelect: "none",
              lineHeight: 1,
              position: "relative",
              zIndex: 1,
            }}
          >
            VH
          </span>
        </button>

        {/* ── Right links ── */}
        {!isMobile && (
          <div
            style={{ display: "flex", gap: 44, flex: 1, alignItems: "center" }}
          >
            <span
              style={{
                width: 1,
                height: 22,
                backgroundColor: "rgba(74,90,68,0.22)",
                marginRight: 8,
                flexShrink: 0,
              }}
            />
            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                active={active === item.label}
                onClick={() => {
                  setActive(item.label);
                  scrollTo(item.href);
                }}
              />
            ))}
          </div>
        )}

        {/* ── Hamburger ── */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              padding: 8,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 22,
                  height: 1.5,
                  backgroundColor: "#4a5a44",
                  borderRadius: 1,
                  display: "block",
                  transition:
                    "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                  transform:
                    i === 0 && menuOpen
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2 && menuOpen
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : "translateY(0) rotate(0deg)",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* ── Mobile dropdown ── */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            backgroundColor: "rgba(232,237,224,0.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: menuOpen ? "1px solid rgba(74,90,68,0.12)" : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            boxShadow: menuOpen ? "0 12px 32px rgba(74,90,68,0.1)" : "none",
            // Animate open/close with maxHeight + opacity + translateY
            maxHeight: menuOpen ? "320px" : "0px",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
            pointerEvents: menuOpen ? "auto" : "none",
            transition:
              "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
            padding: "8px 0 16px",
          }}
        >
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => {
                setActive(item.label);
                setMenuOpen(false);
                scrollTo(item.href);
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  active === item.label
                    ? "1px solid rgba(74,90,68,0.35)"
                    : "1px solid transparent",
                cursor: "pointer",
                color: "#4a5a44",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "13px 0",
                width: "100%",
                textAlign: "center",
                opacity: menuOpen ? (active === item.label ? 1 : 0.65) : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
                transition: `opacity 0.28s ease ${menuOpen ? idx * 0.055 : 0}s, transform 0.32s ease ${menuOpen ? idx * 0.055 : 0}s`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#4a5a44",
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "0.72rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        padding: "4px 0 6px",
        opacity: active || hovered ? 1 : 0.58,
        transition: "opacity 0.22s ease",
        position: "relative",
        borderBottom: active
          ? "1px solid #8f9f84"
          : hovered
            ? "1px solid rgba(143,159,132,0.5)"
            : "1px solid transparent",
      }}
    >
      {label}
    </button>
  );
}
