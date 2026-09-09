"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

export function ScrollRail({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * rail.current.clientWidth * .78, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  return <div className={`rail-shell ${className}`}>
    <div className="rail-controls"><button type="button" onClick={() => move(-1)} aria-label={`Voltar em ${label}`}>←</button><button type="button" onClick={() => move(1)} aria-label={`Avançar em ${label}`}>→</button></div>
    <div className="scroll-rail" ref={rail} role="region" aria-label={label} tabIndex={0} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
      if (event.key === "Home" || event.key === "End") { event.preventDefault(); rail.current?.scrollTo({ left: event.key === "Home" ? 0 : rail.current.scrollWidth }); }
    }}>{children}</div>
  </div>;
}
