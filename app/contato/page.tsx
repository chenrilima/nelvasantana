import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Contato", description: "Booking, parcerias e contato de imprensa de Nellva Sântana." };

export default function ContactPage() {
  return <><PageHero eyebrow="Booking" title="Vamos levar" italic="brasilidade ao seu evento?" intro="Para contratações, parcerias ou imprensa, entre em contato através dos canais oficiais. Nossa equipe retornará o mais breve possível." /><section className="contact-sheet"><div><p className="eyebrow">Canal oficial</p><h2>E-mail</h2></div><a href="mailto:contato@nellvasantana.com">contato@nellvasantana.com <span>↗</span></a><p>Booking · contratação · parcerias · imprensa</p></section></>;
}
