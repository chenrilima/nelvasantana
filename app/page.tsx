import Image from "next/image";
import { VideoCard } from "@/components/video-card";
import { Booking } from "@/components/footer";
import { ScrollRail } from "@/components/scroll-rail";
import { SectionTitle } from "@/components/ui";
import { biography, gallery, heroSocialLinks, identity, identityStyles, orderedVideos, performanceImages, performances, projects, videos } from "@/data/content";

export default function Home() {
  return <>
    <section className="one-hero" id="inicio" tabIndex={-1}>
      <div className="one-hero-copy">
        <p className="eyebrow">Cantora · intérprete · artista brasileira</p>
        <h1 aria-label="Nellva Sântana"><span className="hero-first-name"><span className="hero-initial">N</span>ellva</span>{" "}<span className="hero-surname">Sântana</span></h1>
        <p className="hero-line">Minha voz, meu canto...</p>
        <div className="hero-social-links">
          {heroSocialLinks.map(({ id, name, href }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} de Nellva Sântana`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                {id === "instagram" && <g stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></g>}
                {id === "youtube" && <><path d="M21 7.2a2.7 2.7 0 0 0-1.9-1.9C17.4 4.8 12 4.8 12 4.8s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 7.2 28 28 0 0 0 2.5 12 28 28 0 0 0 3 16.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .5-4.8 28 28 0 0 0-.5-4.8Z" stroke="currentColor" strokeWidth="1.7" /><path d="m10 8.5 6 3.5-6 3.5Z" fill="currentColor" /></>}
                {id === "facebook" && <path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.8 1.8-1.8H18V2.4a26 26 0 0 0-2.8-.2c-2.8 0-4.7 1.7-4.7 4.8v2.5H7V13h3.5v9Z" fill="currentColor" />}
              </svg>
            </a>
          ))}
        </div>
        <a className="hero-cue" href="#artista">A artista <span aria-hidden="true">↓</span></a>
      </div>
      <figure className="one-hero-photo"><Image src="/images/nellva-hero.jpg" alt="Nellva Sântana cantando ao microfone, de vestido floral" fill loading="eager" sizes="(max-width: 900px) 100vw, 900px" /></figure>
      <p className="hero-origin">Nordeste, Brasil</p>
    </section>

    <section className="artist-chapter anchor-section" id="artista" tabIndex={-1}>
      <aside><p className="eyebrow">A artista</p><h2>Raízes<br /><em>profundas.</em></h2><p className="artist-motto">A mesma essência em cada canção.</p><dl><div><dt>Base</dt><dd>Nordeste, Brasil</dd></div><div><dt>Influências</dt><dd>Baião, Xote, MPB, Canção</dd></div></dl></aside>
      <div className="artist-copy">{biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <section className="identity-chapter anchor-section" id="identidade" tabIndex={-1}>
      <figure><Image src="/images/nellva-identidade.jpg" alt="Nellva Sântana sorrindo e aplaudindo diante do microfone" width={1357} height={2048} sizes="(max-width: 760px) 100vw, 42vw" /></figure>
      <div><SectionTitle eyebrow="Essência">Sons da Diversidade<br /><em>Cultural Brasileira</em></SectionTitle>{identity.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <ul className="identity-styles" aria-label="Vertentes musicais">
        {identityStyles.map(({ symbol, name, description }) => (
          <li key={name} className="identity-style">
            <span className="identity-style-symbol" aria-hidden="true">{symbol}</span>
            <h3>{name}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>

    <section className="performances-chapter anchor-section" id="performances" tabIndex={-1}>
      <SectionTitle eyebrow="A voz em cena" intro="Momentos em que música, cultura e presença artística se encontram.">Performances</SectionTitle>
      <div className="performance-stack">{performances.map((item, index) => {
        const asset = performanceImages[index];
        return <article key={item.title} className={asset ? "" : "text-only"}>{asset && <figure className="performance-photo"><Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 760px) 100vw, 48vw" /></figure>}<div><p className="eyebrow">{item.place} · {item.year}</p><h3>{item.title}</h3><p>{item.text}</p></div></article>;
      })}</div>
    </section>

    <section className="projects-chapter anchor-section" id="projetos" tabIndex={-1}>
      <SectionTitle eyebrow="Projetos artísticos" intro="Cada projeto é concebido como uma narrativa em que som, cultura e sentimento se entrelaçam.">A curadoria <em>da canção</em></SectionTitle>
      <div className="one-projects">{projects.map((project, index) => <article key={project.title}><figure className={index ? "contain" : ""}><Image src={index ? "/images/projeto-cancao-erudita.jpg" : "/images/projeto-noutra-bossa.jpg"} alt={`Imagem do projeto ${project.title}`} fill sizes="(max-width: 760px) 100vw, 48vw" /></figure><div><p className="eyebrow">Obra artística</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p>{project.text}</p></div></article>)}</div>
    </section>

    <section className="videos-chapter anchor-section" id="videos" tabIndex={-1}>
      <div className="chapter-heading"><SectionTitle eyebrow="Videoteca">Canções <em>em cena</em></SectionTitle><p>Interpretações, encontros e repertórios reunidos em um arquivo audiovisual. Da música brasileira ao repertório lírico.</p></div>
      <ScrollRail label="Videoteca de Nellva Sântana" className="video-rail">{orderedVideos(videos).map(video => <VideoCard key={video.id} video={video} />)}</ScrollRail>
    </section>

    <section className="music-chapter anchor-section" id="musica" tabIndex={-1}>
      <p className="eyebrow">Música</p><h2>Sua música em<br /><em>todas as plataformas.</em></h2><p>Da canção brasileira ao repertório de concerto, descubra diferentes encontros com a voz de Nellva.</p><a className="text-link" href="#videos">Ouça nas apresentações <span>↑</span></a>
    </section>

    <section className="gallery-chapter anchor-section" id="galeria" tabIndex={-1}>
      <div className="chapter-heading"><SectionTitle eyebrow="Galeria">Presença, música <em>e expressão.</em></SectionTitle><p>Imagens que revelam diferentes dimensões da presença artística de Nellva Sântana.</p></div>
      <ScrollRail label="Galeria de fotografias" className="gallery-rail">{gallery.map((image) => <figure className={image.width > image.height ? "landscape" : "portrait"} key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 82vw, 55vw" /><figcaption>{image.caption}</figcaption></figure>)}</ScrollRail>
    </section>

    <section className="agenda-chapter anchor-section" id="agenda" tabIndex={-1}><p className="eyebrow">Agenda</p><h2>Novas apresentações<br /><em>serão anunciadas em breve.</em></h2></section>

    <section className="press-chapter anchor-section" id="imprensa" tabIndex={-1}>
      <div><p className="eyebrow">Imprensa & materiais profissionais</p><h2>Informação clara.<br /><em>Identidade preservada.</em></h2></div>
      <div><p>Para jornalistas, produtores e curadores: entre em contato para solicitar release, fotografias de divulgação e informações sobre os projetos.</p><a className="text-link" href="mailto:contato@nellvasantana.com?subject=Solicitação%20de%20material%20de%20imprensa">Solicitar materiais <span>↗</span></a></div>
    </section>
    <Booking />
  </>;
}
