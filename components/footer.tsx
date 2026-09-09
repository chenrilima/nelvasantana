import Image from "next/image";
import Link from "next/link";

export function Booking() {
  return <section className="booking one-booking" id="contato" tabIndex={-1}>
    <figure className="booking-photo"><Image src="/images/nellva-booking.jpg" alt="Nellva cantando ao microfone, com violonista ao fundo" width={6240} height={4160} sizes="(max-width: 760px) 100vw, 55vw" /></figure><div><p className="eyebrow">Booking · parcerias · imprensa</p><h2>Vamos levar <em>brasilidade</em><br /> ao seu evento?</h2></div>
    <div><p>Para contratações, parcerias ou imprensa, entre em contato pelo e-mail.</p><a className="text-link light" href="mailto:contato@nellvasantana.com">contato@nellvasantana.com <span>↗</span></a></div>
  </section>;
}

export function Footer() {
  return <footer><Link className="brand" href="#inicio"><span>Nellva</span> <em>Sântana</em></Link><p>Raízes profundas. A mesma essência em cada canção.</p><div><Link href="#artista">A artista</Link><Link href="#performances">Performances</Link><Link href="#projetos">Projetos</Link><Link href="#imprensa">Imprensa</Link></div><small>© {new Date().getFullYear()} Nellva Sântana</small></footer>;
}
