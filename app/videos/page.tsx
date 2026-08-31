import type { Metadata } from "next";
import Image from "next/image";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { videos } from "@/data/content";

export const metadata: Metadata = { title: "Vídeos", description: "Videoteca artística de Nellva Sântana." };

const thumbnails = ["video-stizzoso.jpg", "video-an-die-musik.jpg", "video-ave-maria.jpg", "video-amor-que-nao-vivi.jpg", "video-pai-nosso.jpg", "video-xote-das-meninas.jpg", "video-uirapuru.jpg", "video-canto-veronica.jpg"];

export default function VideosPage() {
  return <><PageHero eyebrow="Videoteca" title="Canções em" italic="cena" intro="Um arquivo de interpretações, encontros e repertórios que atravessam a trajetória de Nellva Sântana." />
    <section className="video-library">{videos.map((title, index) => <article key={title}><div className="video-frame"><Image src={`/images/${thumbnails[index]}`} alt={`Miniatura do vídeo ${title}`} fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="play" aria-hidden="true">▶</span></div><h2>{title}</h2><p>Vídeo identificado no acervo. Reprodução disponível após confirmação do link oficial.</p></article>)}</section><Booking /></>;
}
