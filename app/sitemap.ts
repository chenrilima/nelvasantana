import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; return ["", "/artista", "/trajetoria", "/projetos", "/musica", "/videos", "/galeria", "/agenda", "/imprensa", "/contato"].map(path => ({ url: `${base}${path}`, changeFrequency: path === "" ? "weekly" : "monthly" })); }
