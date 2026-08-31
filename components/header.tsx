import Link from "next/link";

const links = [
  ["/", "Home"], ["/artista", "A artista"], ["/trajetoria", "Trajetória"],
  ["/projetos", "Projetos"], ["/musica", "Música"], ["/videos", "Vídeos"],
  ["/galeria", "Galeria"], ["/agenda", "Agenda"], ["/imprensa", "Imprensa"], ["/contato", "Contato"],
] as const;

export function Header() {
  return <>
    <input className="menu-toggle" id="menu-toggle" type="checkbox" aria-label="Abrir ou fechar menu" aria-controls="site-menu" />
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Nellva Sântana — página inicial"><span>Nellva</span> <em>Sântana</em></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.slice(1, 6).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <label className="menu-trigger" htmlFor="menu-toggle" aria-label="Abrir menu"><span /><span /><span /></label>
    </header>
    <div id="site-menu" className="menu-overlay" role="dialog" aria-label="Menu de navegação">
      <div className="menu-atmosphere" aria-hidden="true"><span>Voz</span><span>Memória</span><span>Brasil</span></div>
      <div className="menu-panel">
        <label className="menu-close" htmlFor="menu-toggle" aria-label="Fechar menu">×</label>
        <p className="eyebrow">Navegação</p>
        <nav aria-label="Menu completo">{links.map(([href, label], index) => <Link key={href} href={href}><small>{String(index + 1).padStart(2, "0")}</small>{label}</Link>)}</nav>
        <a className="menu-email" href="mailto:contato@nellvasantana.com">contato@nellvasantana.com</a>
      </div>
    </div>
  </>;
}
