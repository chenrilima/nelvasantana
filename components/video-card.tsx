"use client";

import Image from "next/image";
import { useState } from "react";
import type { Video } from "@/data/content";

export function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const url = video.youtubeUrl ? new URL(video.youtubeUrl) : undefined;
  const youtubeId = url?.searchParams.get("v") || url?.pathname.split("/").pop();
  return <article className={video.featured ? "featured" : ""}>
    <figure>
      {playing && youtubeId ? <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <>
        {video.thumbnail && <Image src={video.thumbnail.src} alt={video.thumbnail.alt} fill sizes="(max-width: 760px) 86vw, 55vw" />}
        {youtubeId && <button className="video-play" onClick={() => setPlaying(true)} aria-label={`Reproduzir ${video.title}`}><span aria-hidden="true">▶</span></button>}
      </>}
    </figure>
    <p className="eyebrow">{video.featured ? "Em destaque" : "Vídeo do acervo"}</p>
    <h3>{video.title}</h3>
    {video.youtubeUrl && <a className="text-link light" href={video.youtubeUrl} target="_blank" rel="noreferrer">Assistir no YouTube <span>↗</span></a>}
  </article>;
}
