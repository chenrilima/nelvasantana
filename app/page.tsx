import Image from "next/image";
import { Booking } from "@/components/footer";
import { ScrollRail } from "@/components/scroll-rail";
import { SectionTitle } from "@/components/ui";
import { biography, identity, performanceImages, performances, projects, videos } from "@/data/content";

const gallery = [
  { src: "/images/nellva-identidade.jpg", alt: "Nellva Sântana sorrindo e aplaudindo diante do microfone", className: "portrait" },
  { src: "/images/mulheres-que-cantam.jpg", alt: "Registro panorâmico de Nellva Sântana no palco do Mulheres que Cantam", className: "landscape contain" },
  { src: "/images/direcao-musical.jpg", alt: "Nellva Sântana cantando ao lado de músico com violão", className: "landscape" },
  { src: "/images/danca-de-oz.jpg", alt: "Nellva Sântana cantando em cena no espetáculo A Dança de OZ", className: "landscape contain" },
  { src: "/images/paixao-de-cristo.jpg", alt: "Detalhe de figurino em cena na Paixão de Cristo", className: "landscape contain" },
] as const;

export default function Home() {
  return <>
    <section className="one-hero" id="inicio">
      <div className="one-hero-copy">
        <p className="eyebrow">Cantora · intérprete · artista brasileira</p>
        <h1>Nellva <em>Sântana</em></h1>
        <p className="hero-line">Raízes profundas.<br />A mesma essência em cada canção.</p>
        <a className="hero-cue" href="#artista">Conheça pela rolagem <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="one-hero-photo"><Image src="/images/nellva-identidade.jpg" alt="Nellva Sântana sorrindo e aplaudindo diante do microfone" fill priority sizes="(max-width: 760px) 100vw, 48vw" /></figure>
      <p className="hero-origin">Nordeste, Brasil</p>
    </section>

    <section className="artist-chapter anchor-section" id="artista">
      <aside><p className="eyebrow">A artista</p><h2>Raízes<br /><em>profundas.</em></h2><dl><div><dt>Base</dt><dd>Nordeste, Brasil</dd></div><div><dt>Influências</dt><dd>Baião, Xote, MPB, Canção</dd></div></dl></aside>
      <div className="artist-copy">{biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <section className="identity-chapter anchor-section" id="identidade">
      <figure><Image src="/images/nellva-identidade.jpg" alt="Retrato de Nellva Sântana durante uma apresentação musical" fill sizes="(max-width: 760px) 100vw, 42vw" /></figure>
      <div><SectionTitle eyebrow="Identidade artística">Sons da Diversidade<br /><em>Cultural Brasileira</em></SectionTitle>{identity.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="influence-line" aria-label="Vertentes musicais"><span>MPB</span><span>Baião</span><span>Xote</span><span>Bossa Nova</span><span>Canto erudito</span></div></div>
    </section>

    <section className="performances-chapter anchor-section" id="performances">
      <SectionTitle eyebrow="A voz em cena" intro="Momentos em que música, cultura e presença artística se encontram.">Performances</SectionTitle>
      <div className="performance-stack">{performances.map((item, index) => {
        const asset = performanceImages[index];
        return <article key={item.title} className={asset ? "" : "text-only"}>{asset && <figure className={asset.fit === "contain" ? "contain" : ""}><Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 760px) 100vw, 48vw" /></figure>}<div><p className="eyebrow">{item.place} · {item.year}</p><h3>{item.title}</h3><p>{item.text}</p></div></article>;
      })}</div>
    </section>

    <section className="projects-chapter anchor-section" id="projetos">
      <SectionTitle eyebrow="Projetos artísticos" intro="Cada projeto é concebido como uma narrativa em que som, cultura e sentimento se entrelaçam.">A curadoria <em>da canção</em></SectionTitle>
      <div className="one-projects">{projects.map((project, index) => <article key={project.title}><figure className={index ? "contain" : ""}><Image src={index ? "/images/projeto-cancao-erudita.jpg" : "/images/projeto-noutra-bossa.jpg"} alt={`Imagem do projeto ${project.title}`} fill sizes="(max-width: 760px) 100vw, 48vw" /></figure><div><p className="eyebrow">Obra artística</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p>{project.text}</p></div></article>)}</div>
    </section>

    <section className="videos-chapter anchor-section" id="videos">
      <div className="chapter-heading"><SectionTitle eyebrow="Videoteca">Canções <em>em cena</em></SectionTitle><p>Interpretações, encontros e repertórios reunidos em um arquivo audiovisual. A reprodução será ativada quando os links oficiais forem confirmados.</p></div>
      <ScrollRail label="Videoteca de Nellva Sântana" className="video-rail">{videos.map((video) => <article key={video.id} className={video.featured ? "featured" : ""}><figure><Image src={video.thumbnail.src} alt={video.thumbnail.alt} fill sizes="(max-width: 760px) 86vw, 55vw" /></figure><p className="eyebrow">Vídeo do acervo</p><h3>{video.title}</h3></article>)}</ScrollRail>
    </section>

    <section className="music-chapter anchor-section" id="musica">
      <p className="eyebrow">Música</p><h2>Sua música em<br /><em>todas as plataformas.</em></h2><p>Acompanhe os lançamentos oficiais e playlists selecionadas. Os acessos ao Spotify e ao YouTube Music serão publicados aqui quando os perfis oficiais forem confirmados.</p>
    </section>

    <section className="gallery-chapter anchor-section" id="galeria">
      <div className="chapter-heading"><SectionTitle eyebrow="Galeria">Presença, música <em>e expressão.</em></SectionTitle><p>Imagens que revelam diferentes dimensões da presença artística de Nellva Sântana.</p></div>
      <ScrollRail label="Galeria de fotografias" className="gallery-rail">{gallery.map((image) => <figure className={image.className} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 82vw, 38vw" /></figure>)}</ScrollRail>
    </section>

    <section className="agenda-chapter anchor-section" id="agenda"><p className="eyebrow">Agenda</p><h2>Novas apresentações<br /><em>serão anunciadas em breve.</em></h2></section>

    <section className="press-chapter anchor-section" id="imprensa">
      <div><p className="eyebrow">Imprensa & materiais profissionais</p><h2>Informação clara.<br /><em>Identidade preservada.</em></h2></div>
      <div><p>Área voltada a jornalistas, produtores, contratantes, curadores, casas de espetáculo e parceiros. Releases, press kit, fotos em alta resolução e créditos serão disponibilizados somente após a aprovação dos arquivos oficiais.</p><a className="text-link" href="mailto:contato@nellvasantana.com?subject=Solicitação%20de%20material%20de%20imprensa">Solicitar materiais <span>↗</span></a></div>
    </section>
    <Booking />
  </>;
}
