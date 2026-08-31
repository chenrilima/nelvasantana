import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Música", description: "Música e plataformas oficiais de Nellva Sântana." };

export default function MusicPage() {
  return <><PageHero eyebrow="Streaming" title="Sua música em" italic="todas as plataformas." intro="Acompanhe os lançamentos oficiais e playlists selecionadas. Siga Nellva Sântana no seu player favorito e não perca nenhuma novidade musical." />
    <section className="platforms"><article><span aria-hidden="true">♪</span><p className="eyebrow">Plataforma</p><h2>Spotify</h2><p>Integração preparada para receber o perfil oficial e os destaques musicais.</p><small>Link oficial pendente</small></article><article><span aria-hidden="true">▶</span><p className="eyebrow">Plataforma</p><h2>YouTube Music</h2><p>Espaço preparado para o catálogo oficial de Nellva Sântana.</p><small>Link oficial pendente</small></article></section>
    <section className="listening-room"><p className="eyebrow">Ouça agora no Spotify</p><h2>Destaques Musicais</h2><div><span aria-hidden="true">♪</span><p>O player oficial será disponibilizado aqui assim que o endereço do perfil for confirmado.</p></div></section><Booking /></>;
}
