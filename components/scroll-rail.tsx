"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

export function ScrollRail({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * rail.current.clientWidth * .78, behavior: "smooth" });
  return <div className={`rail-shell ${className}`}>
    <div className="rail-controls"><button type="button" onClick={() => move(-1)} aria-label={`Voltar em ${label}`}>←</button><button type="button" onClick={() => move(1)} aria-label={`Avançar em ${label}`}>→</button></div>
    <div className="scroll-rail" ref={rail} role="region" aria-label={label} tabIndex={0}>{children}</div>
  </div>;
}
