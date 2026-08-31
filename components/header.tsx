"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Home"], ["/artista", "A artista"], ["/trajetoria", "Trajetória"],
  ["/projetos", "Projetos"], ["/musica", "Música"], ["/videos", "Vídeos"],
  ["/galeria", "Galeria"], ["/agenda", "Agenda"], ["/imprensa", "Imprensa"], ["/contato", "Contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab") {
        const nodes = document.querySelectorAll<HTMLElement>("#site-menu button, #site-menu a");
        const first = nodes[0]; const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); };
  }, [open]);

  return <>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Nellva Sântana — página inicial"><span>Nellva</span> <em>Sântana</em></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.slice(1, 6).map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}
      </nav>
      <button ref={triggerRef} className="menu-trigger" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}><span /><span /><span /><b>Abrir menu</b></button>
    </header>
    <div id="site-menu" className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-atmosphere" aria-hidden="true"><span>Voz</span><span>Memória</span><span>Brasil</span></div>
      <div className="menu-panel">
        <button ref={closeRef} className="menu-close" type="button" onClick={() => { setOpen(false); triggerRef.current?.focus(); }} aria-label="Fechar menu">×</button>
        <p className="eyebrow">Navegação</p>
        <nav aria-label="Menu completo">{links.map(([href, label], index) => <Link key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><small>{String(index + 1).padStart(2, "0")}</small>{label}</Link>)}</nav>
        <a className="menu-email" href="mailto:contato@nellvasantana.com" tabIndex={open ? 0 : -1}>contato@nellvasantana.com</a>
      </div>
    </div>
  </>;
}
