"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  ["#artista", "A artista"], ["#identidade", "Identidade"], ["#performances", "Performances"],
  ["#projetos", "Projetos"], ["#videos", "Vídeos"], ["#musica", "Música"],
  ["#galeria", "Galeria"], ["#imprensa", "Imprensa"], ["#contato", "Contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  const close = () => setOpen(false);
  return <>
    <header className="site-header">
      <Link className="brand" href="#inicio" aria-label="Nellva Sântana — início"><span>Nellva</span> <em>Sântana</em></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.slice(0, 6).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <button ref={triggerRef} className="menu-trigger" type="button" aria-label="Abrir menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}><span /><span /><span /></button>
    </header>
    <div id="site-menu" className={`menu-overlay ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu de navegação" aria-hidden={!open}>
      <div className="menu-atmosphere" aria-hidden="true"><span>Voz</span><span>Memória</span><span>Brasil</span></div>
      <div className="menu-panel">
        <button ref={closeRef} className="menu-close" type="button" aria-label="Fechar menu" onClick={close}>×</button>
        <p className="eyebrow">Navegação</p>
        <nav aria-label="Menu completo">{links.map(([href, label]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}</nav>
        <a className="menu-email" href="mailto:contato@nellvasantana.com">contato@nellvasantana.com</a>
      </div>
    </div>
  </>;
}
