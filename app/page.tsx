import { Booking } from "@/components/footer";
import { MoreLink, SectionTitle } from "@/components/ui";
import { identity, performances, projects } from "@/data/content";

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-orbit" aria-hidden="true"><span>Tradição</span><span>Interpretação</span><span>Contemporaneidade</span></div>
      <div className="hero-copy"><p className="eyebrow">Cantora · intérprete · artista brasileira</p><h1>Nellva<br /><em>Sântana</em></h1><p>Raízes profundas.<br />A mesma essência em cada canção.</p><MoreLink href="/artista">Conheça Nellva</MoreLink></div>
      <div className="hero-portrait"><Image src="/images/nellva-identidade.jpg" alt="Nellva Sântana cantando e aplaudindo no palco" fill priority sizes="(max-width: 760px) 100vw, 45vw" /></div>
      <p className="vertical-note">Nordeste, Brasil</p>
    </section>
    <section className="manifesto"><p className="eyebrow">A artista</p><h2>Uma voz que encontra na cultura brasileira o ponto de partida para unir <em>tradição, emoção e contemporaneidade.</em></h2><MoreLink href="/artista">Conheça sua história</MoreLink></section>
    <section className="identity-feature"><div className="abstract-frame"><Image src="/images/nellva-identidade.jpg" alt="Retrato de Nellva Sântana durante apresentação" fill sizes="(max-width: 760px) 100vw, 40vw" /></div><div><SectionTitle eyebrow="Essência">Sons da Diversidade<br /><em>Cultural Brasileira</em></SectionTitle><p>{identity[1]}</p><MoreLink href="/artista#identidade">Descubra sua identidade</MoreLink></div></section>
    <section className="home-projects"><SectionTitle eyebrow="Obras & projetos" intro="Cada projeto é concebido como uma narrativa em que som, cultura e sentimento se entrelaçam.">A curadoria<br /><em>da canção</em></SectionTitle><div className="project-pair">{projects.map((project, i) => <article key={project.title}><span className="project-number">0{i + 1}</span><div className="project-art"><Image src={i === 0 ? "/images/projeto-noutra-bossa.jpg" : "/images/projeto-cancao-erudita.jpg"} alt={`Imagem do projeto ${project.title}`} fill sizes="(max-width: 760px) 100vw, 48vw" /></div><h3>{project.title}</h3><p>{project.summary}</p><MoreLink href="/projetos">Explorar projeto</MoreLink></article>)}</div></section>
    <section className="scene-preview"><SectionTitle eyebrow="A voz em cena" intro="Momentos em que música, cultura e presença artística se encontram.">Trajetória em<br /><em>movimento</em></SectionTitle><div className="scene-list">{performances.slice(0, 3).map((item, i) => <article key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.place} · {item.year}</p></div></article>)}</div><MoreLink href="/trajetoria">Ver trajetória completa</MoreLink></section>
    <section className="music-band"><p className="eyebrow">Música</p><h2>Sua música em<br /><em>todas as plataformas.</em></h2><p>Acompanhe os lançamentos oficiais e playlists selecionadas. Siga Nellva Sântana no seu player favorito e não perca nenhuma novidade musical.</p><MoreLink href="/musica">Ouvir Nellva</MoreLink></section>
    <section className="gallery-teaser"><div><Image src="/images/mulheres-que-cantam.jpg" alt="Nellva Sântana no palco do projeto Mulheres que Cantam" fill sizes="(max-width: 760px) 50vw, 30vw" /></div><div><p className="eyebrow">Galeria</p><h2>Presença,<br /><em>música e expressão.</em></h2><MoreLink href="/galeria">Ver momentos</MoreLink></div><div><Image src="/images/danca-de-oz.jpg" alt="Nellva Sântana em cena no espetáculo A Dança de OZ" fill sizes="(max-width: 760px) 50vw, 30vw" /></div></section>
    <Booking />
  </>;
}
import Image from "next/image";
