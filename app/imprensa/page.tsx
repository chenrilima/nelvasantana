import type { Metadata } from "next";
import { Booking } from "@/components/footer";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Imprensa", description: "Informações e contato de imprensa de Nellva Sântana." };

export default function PressPage() {
  return <><PageHero eyebrow="Imprensa & press kit" title="Materiais para" italic="comunicação" intro="Uma área profissional voltada a jornalistas, produtores, curadores, casas de espetáculo e parceiros culturais." />
    <section className="press-intro"><h2>Informação clara.<br /><em>Identidade preservada.</em></h2><p>Os materiais oficiais serão disponibilizados somente após o recebimento dos arquivos aprovados. Nenhum release, fotografia, crédito ou documento provisório é apresentado como definitivo.</p></section>
    <section className="press-index"><article><span>01</span><h3>Release oficial</h3><p>Arquivo ainda não fornecido.</p></article><article><span>02</span><h3>Press Kit PDF</h3><p>Arquivo ainda não fornecido.</p></article><article><span>03</span><h3>Fotos oficiais</h3><p>Originais em alta resolução ainda não fornecidos.</p></article><article><span>04</span><h3>Clipping & críticas</h3><p>Conteúdo ainda não fornecido.</p></article></section><Booking /></>;
}
