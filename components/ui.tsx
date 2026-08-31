import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, italic, intro }: { eyebrow: string; title: string; italic?: string; intro?: string }) {
  return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}{italic && <><br /><em>{italic}</em></>}</h1>{intro && <p className="lede">{intro}</p>}<div className="hero-mark" aria-hidden="true">NS</div></section>;
}

export function SectionTitle({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return <header className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{children}</h2>{intro && <p>{intro}</p>}</header>;
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>{children}<span>↗</span></Link>;
}
