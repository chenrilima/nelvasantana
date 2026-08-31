import type { Metadata } from "next";
import Image from "next/image";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Galeria", description: "Coleções fotográficas de Nellva Sântana." };

export default function GalleryPage() {
  return <><PageHero eyebrow="Momentos" title="Galeria" intro="Imagens que revelam diferentes dimensões da presença artística de Nellva Sântana." />
    <section className="collection"><header><p className="eyebrow">Coleção 01</p><h2>Nos Palcos</h2><p>Momentos de presença, música e expressão em cena.</p></header><div className="photo-grid">{["nellva-identidade.jpg", "mulheres-que-cantam.jpg", "direcao-musical.jpg", "danca-de-oz.jpg", "paixao-de-cristo.jpg"].map((src, index) => <figure key={src}><Image src={`/images/${src}`} alt={`Nellva Sântana em apresentação — registro ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 35vw" /></figure>)}</div></section>
    <section className="collection quiet"><header><p className="eyebrow">Coleção 02 · Em breve</p><h2>Bastidores</h2><p>Os gestos, encontros e instantes que antecedem a cena.</p></header><div className="empty-collection"><p>Fotografias em breve.</p></div></section><Booking /></>;
}
