"use client";

import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#4a5a44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 960,
          justifyContent: isMobile ? "space-between" : "center",
          padding: isMobile ? "0 20px" : "0 40px",
          gap: 0,
        }}
      >
        {/* Left links — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: 40,
              flex: 1,
              justifyContent: "flex-end",
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
          </div>
        )}

        {/* Center monogram */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#e8ede0",
            letterSpacing: "0.08em",
            userSelect: "none",
            padding: isMobile ? "0" : "0 52px",
            lineHeight: 1,
          }}
        >
          HS
        </div>

        {/* Right links — hidden on mobile */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 40, flex: 1 }}>
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

        {/* Hamburger — mobile only */}
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
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: "#e8ede0",
                borderRadius: 1,
                transition: "all 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: "#e8ede0",
                borderRadius: 1,
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: "#e8ede0",
                borderRadius: 1,
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            backgroundColor: "#4a5a44",
            borderTop: "1px solid rgba(232,237,224,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            padding: "12px 0",
            animation: "fadeSlideIn 0.25s ease",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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
                cursor: "pointer",
                color: "#e8ede0",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 0",
                width: "100%",
                textAlign: "center",
                opacity: active === item ? 1 : 0.75,
                borderBottom:
                  active === item
                    ? "1.5px solid #8f9f84"
                    : "1.5px solid transparent",
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
        color: "#e8ede0",
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "0.8rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "4px 0",
        opacity: active || hovered ? 1 : 0.8,
        transition: "opacity 0.25s ease",
        position: "relative",
        borderBottom: active
          ? "1.5px solid #8f9f84"
          : "1.5px solid transparent",
        paddingBottom: 6,
      }}
    >
      {label}
    </button>
  );
}
