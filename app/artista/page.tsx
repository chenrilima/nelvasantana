import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero, SectionTitle } from "@/components/ui";
import { biography, identity } from "@/data/content";

export const metadata: Metadata = { title: "A artista", description: "Conheça as raízes, a formação e a identidade artística de Nellva Sântana." };

export default function ArtistPage() {
  return <><PageHero eyebrow="A artista" title="Raízes profundas." italic="A mesma essência em cada canção." intro="Uma trajetória construída no encontro entre memória, interpretação, tradição e contemporaneidade." />
    <section className="editorial-story"><aside><p className="eyebrow">Origem</p><strong>Nordeste,<br />Brasil</strong><div className="origin-mark" aria-hidden="true">BA</div></aside><div>{biography.map(p => <p key={p}>{p}</p>)}</div></section>
    <section className="identity-page" id="identidade"><div><SectionTitle eyebrow="Essência">Sons da Diversidade<br /><em>Cultural Brasileira</em></SectionTitle>{identity.map(p => <p key={p}>{p}</p>)}</div><aside className="identity-poster"><p>Voz</p><p>Cultura</p><p>Brasil</p><span>Nellva Sântana</span></aside></section>
    <section className="influences"><article><span>01</span><h3>MPB</h3><p>Canção Erudita Brasileira e MPB clássica.</p></article><article><span>02</span><h3>Baião</h3><p>A força rítmica e o balanço do sertão baiano.</p></article><article><span>03</span><h3>Xote</h3><p>Melodia, sentimento e memória.</p></article><article><span>04</span><h3>Bossa Nova</h3><p>Suavidade e balanço integrados à voz nordestina.</p></article><article><span>05</span><h3>Canto erudito</h3><p>Árias de Ópera, Lied e Canto Coral Sacro.</p></article></section><Booking /></>;
}
