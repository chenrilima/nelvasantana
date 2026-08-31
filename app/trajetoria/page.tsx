import type { Metadata } from "next";
import Image from "next/image";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { performances } from "@/data/content";

export const metadata: Metadata = { title: "Trajetória", description: "Performances e momentos importantes da trajetória artística de Nellva Sântana." };

const performanceImages = ["paixao-de-cristo.jpg", "paixao-de-cristo.jpg", "paixao-de-cristo.jpg", "mulheres-que-cantam.jpg", "direcao-musical.jpg", "danca-de-oz.jpg"];

export default function TrajectoryPage() {
  return <><PageHero eyebrow="A voz em cena" title="Galeria de" italic="performances" intro="Momentos que traduzem a força da música, da cultura e da presença artística de Nellva Sântana nos palcos." />
    <section className="timeline">{performances.map((item, index) => <article key={item.title} className={index % 2 ? "reverse" : ""}><div className="performance-visual"><Image src={`/images/${performanceImages[index]}`} alt={`Nellva Sântana em ${item.title}`} fill sizes="(max-width: 760px) 100vw, 50vw" /><span>{String(index + 1).padStart(2, "0")}</span></div><div><p className="eyebrow">{item.place} · {item.year}</p><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</section><Booking /></>;
}
