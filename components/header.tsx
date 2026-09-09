"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  ["#artista", "A artista"], ["#identidade", "Identidade"], ["#performances", "Performances"],
  ["#projetos", "Projetos"], ["#videos", "Vídeos"], ["#musica", "Música"],
  ["#galeria", "Galeria"], ["#agenda", "Agenda"], ["#imprensa", "Imprensa"], ["#contato", "Contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const focusFrame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button");
        if (!nodes?.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (!dialogRef.current?.contains(document.activeElement)) { event.preventDefault(); first.focus(); }
        else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => { cancelAnimationFrame(focusFrame); document.body.classList.remove("menu-open"); window.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  const close = () => { setOpen(false); triggerRef.current?.focus(); };
  const navigate = (href: string) => {
    setOpen(false);
    requestAnimationFrame(() => document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }));
  };
  return <>
    <header className="site-header">
      <Link className="brand" href="#inicio" aria-label="Nellva Sântana — início"><span>Nellva</span> <em>Sântana</em></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.slice(0, 6).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <button ref={triggerRef} className="menu-trigger" type="button" aria-label="Abrir menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}><span /><span /><span /></button>
    </header>
    <div onTransitionEnd={event => { if (open && event.target === event.currentTarget && event.propertyName === "opacity") closeRef.current?.focus(); }} ref={dialogRef} inert={!open} id="site-menu" className={`menu-overlay ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu de navegação" aria-hidden={!open}>
      <div className="menu-atmosphere" aria-hidden="true"><span>Voz</span><span>Memória</span><span>Brasil</span></div>
      <div className="menu-panel">
        <button ref={closeRef} className="menu-close" type="button" aria-label="Fechar menu" onClick={close}>×</button>
        <p className="eyebrow">Navegação</p>
        <nav aria-label="Menu completo">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => navigate(href)}>{label}</Link>)}</nav>
        <a className="menu-email" href="mailto:contato@nellvasantana.com">contato@nellvasantana.com</a>
      </div>
    </div>
  </>;
}
