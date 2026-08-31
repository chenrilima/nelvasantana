import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Agenda", description: "Agenda de apresentações de Nellva Sântana." };

export default function AgendaPage() {
  return <><PageHero eyebrow="Próximos encontros" title="Agenda" italic="ao vivo" intro="Apresentações, concertos e encontros de Nellva Sântana com o público." /><section className="empty-agenda"><span aria-hidden="true">—</span><h2>Novas apresentações serão anunciadas em breve.</h2><p>Esta página está preparada para receber datas, cidades, locais e informações oficiais.</p></section><Booking /></>;
}
