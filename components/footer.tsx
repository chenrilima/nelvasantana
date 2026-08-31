import Link from "next/link";

export function Booking() {
  return <section className="booking">
    <div><p className="eyebrow">Booking · parcerias · imprensa</p><h2>Vamos levar <em>brasilidade</em><br /> ao seu evento?</h2></div>
    <div><p>Para contratações, parcerias ou imprensa, entre em contato através dos canais oficiais. Nossa equipe retornará o mais breve possível.</p><a className="text-link light" href="mailto:contato@nellvasantana.com">contato@nellvasantana.com <span>↗</span></a></div>
  </section>;
}

export function Footer() {
  return <footer><Link className="brand" href="/"><span>Nellva</span> <em>Sântana</em></Link><p>Raízes profundas. A mesma essência em cada canção.</p><div><Link href="/artista">A artista</Link><Link href="/trajetoria">Trajetória</Link><Link href="/projetos">Projetos</Link><Link href="/imprensa">Imprensa</Link></div><small>© {new Date().getFullYear()} Nellva Sântana</small></footer>;
}
