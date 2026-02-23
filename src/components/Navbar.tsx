"use client";

import { useState, useEffect } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
            {["About", "Services"].map((item) => (
              <NavLink
                key={item}
                label={item}
                active={active === item}
                onClick={() => setActive(item)}
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
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 0 : "0 44px",
            flexShrink: 0,
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
            HS
          </span>
        </div>

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
            {["Portfolio", "Resume"].map((item) => (
              <NavLink
                key={item}
                label={item}
                active={active === item}
                onClick={() => setActive(item)}
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
                  transition: "all 0.3s ease",
                  transform:
                    i === 0 && menuOpen
                      ? "rotate(45deg) translateY(6.5px)"
                      : i === 2 && menuOpen
                        ? "rotate(-45deg) translateY(-6.5px)"
                        : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* ── Mobile dropdown ── */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            backgroundColor: "rgba(232,237,224,0.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(74,90,68,0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px 0 16px",
            animation: "fadeSlideIn 0.22s ease",
            boxShadow: "0 12px 32px rgba(74,90,68,0.1)",
          }}
        >
          {["About", "Services", "Portfolio", "Resume"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  active === item
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
                opacity: active === item ? 1 : 0.65,
                transition: "opacity 0.2s ease",
              }}
            >
              {item}
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
