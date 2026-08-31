import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Projetos", description: "Projetos artísticos de Nellva Sântana." };

export default function ProjectsPage() {
  return <><PageHero eyebrow="Projetos artísticos" title="A curadoria" italic="da canção" intro="A produção artística de Nellva Sântana reúne singles, EPs, colaborações e produções audiovisuais. Cada projeto é concebido como uma narrativa em que som, cultura e sentimento se entrelaçam, revelando uma identidade musical que aproxima a tradição, a sensibilidade da música contemporânea." />
    <section className="project-chapters">{projects.map((project, index) => <article key={project.title}><div className="project-emblem" aria-hidden="true"><small>Projeto 0{index + 1}</small><strong>{index ? "CEB" : "NB"}</strong></div><div><p className="eyebrow">Obra artística</p><h2>{project.title}</h2><p className="project-summary">{project.summary}</p><p>{project.text}</p><p className="availability">Links oficiais serão publicados quando disponibilizados.</p></div></article>)}</section><Booking /></>;
}
