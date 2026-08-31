import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Great_Vibes, Inter, Manrope, Oswald, Prata } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const elegant = Prata({ subsets: ["latin"], variable: "--font-elegant", weight: "400", display: "swap" });
const script = Great_Vibes({ subsets: ["latin"], variable: "--font-script", weight: "400", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"], display: "swap" });
const systemSans = Inter({ subsets: ["latin"], variable: "--font-system", display: "swap" });
const condensed = Oswald({ subsets: ["latin"], variable: "--font-condensed", weight: ["400", "500"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: "Nellva Sântana — Site Oficial", template: "%s | Nellva Sântana" },
  description: "Site oficial de Nellva Sântana, artista cuja trajetória conecta raízes nordestinas, cultura brasileira, interpretação e presença cênica.",
  alternates: { canonical: "/" }, openGraph: { type: "website", locale: "pt_BR", title: "Nellva Sântana — Site Oficial", description: "Raízes profundas. A mesma essência em cada canção.", siteName: "Nellva Sântana" },
  twitter: { card: "summary_large_image", title: "Nellva Sântana", description: "Raízes profundas. A mesma essência em cada canção." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "Person", name: "Nellva Sântana", url: siteUrl, jobTitle: "Artista" };
  return <html lang="pt-BR"><body className={`${serif.variable} ${display.variable} ${elegant.variable} ${script.variable} ${sans.variable} ${systemSans.variable} ${condensed.variable}`}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
