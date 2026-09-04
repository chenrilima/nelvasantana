import type { Metadata } from "next";
import Image from "next/image";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { videos } from "@/data/content";

export const metadata: Metadata = { title: "Vídeos", description: "Videoteca artística de Nellva Sântana." };

export default function VideosPage() {
  return <><PageHero eyebrow="Videoteca" title="Canções em" italic="cena" intro="Um arquivo de interpretações, encontros e repertórios que atravessam a trajetória de Nellva Sântana." />
    <section className="video-library">{videos.map((video) => <article key={video.id}><div className="video-frame"><Image src={video.thumbnail.src} alt={video.thumbnail.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><h2>{video.title}</h2><p>Vídeo identificado no acervo. Reprodução disponível após confirmação do link oficial.</p></article>)}</section><Booking /></>;
}
