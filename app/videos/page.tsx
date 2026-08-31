import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { videos } from "@/data/content";

export const metadata: Metadata = { title: "Vídeos", description: "Videoteca artística de Nellva Sântana." };

export default function VideosPage() {
  return <><PageHero eyebrow="Videoteca" title="Canções em" italic="cena" intro="Um arquivo de interpretações, encontros e repertórios que atravessam a trajetória de Nellva Sântana." />
    <section className="video-library">{videos.map((title, index) => <article key={title}><div className="video-frame"><span>{String(index + 1).padStart(2, "0")}</span><span className="play" aria-hidden="true">▶</span></div><h2>{title}</h2><p>Vídeo identificado no acervo. Reprodução disponível após confirmação do link oficial.</p></article>)}</section><Booking /></>;
}
