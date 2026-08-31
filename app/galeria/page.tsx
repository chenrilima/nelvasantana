import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Galeria", description: "Coleções fotográficas de Nellva Sântana." };

export default function GalleryPage() {
  return <><PageHero eyebrow="Momentos" title="Galeria" intro="Imagens que revelam diferentes dimensões da presença artística de Nellva Sântana." />
    <section className="collection"><header><p className="eyebrow">Coleção 01</p><h2>Nos Palcos</h2><p>Momentos de presença, música e expressão em cena.</p></header><div className="photo-awaiting"><span>Fotografias oficiais<br />aguardando os arquivos originais</span></div></section>
    <section className="collection quiet"><header><p className="eyebrow">Coleção 02 · Em breve</p><h2>Bastidores</h2><p>Os gestos, encontros e instantes que antecedem a cena.</p></header><div className="empty-collection"><p>Fotografias em breve.</p></div></section><Booking /></>;
}
