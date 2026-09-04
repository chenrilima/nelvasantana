export const biography = [
  "Nascida e criada no interior da Bahia, Nellva Sântana traz em sua essência as cores, os ritmos e as narrativas que moldam a identidade cultural do Nordeste brasileiro. Cresceu imersa em manifestações populares como as Festas Juninas, a Folia de Reis, o Bumba Meu Boi e o Carnaval, vivências que despertaram, desde cedo, sua relação profunda com a música e permanecem como alicerce de sua identidade artística.",
  "Ao longo da sua formação, ampliou esse universo ao dedicar-se também ao estudo da canção brasileira, da música de concerto e de diferentes repertórios vocais, construindo uma trajetória marcada pelo diálogo entre tradição e técnica, memória e interpretação.",
  "Hoje, transita com naturalidade entre projetos dedicados à música tradicional nordestina, à música brasileira e a apresentações em repertório lírico, sempre preservando uma característica que atravessa toda a sua atuação: o compromisso com interpretações sensíveis, autênticas e conectadas às histórias que cada canção carrega.",
  "Mais do que percorrer diferentes estilos, Nellva reúne experiências musicais diversas sem perder de vista suas raízes. Sua voz encontra na cultura brasileira o ponto de partida para construir encontros entre tradição, emoção e contemporaneidade.",
];

export const identity = [
  "Sua formação musical conta com estudos em canto erudito, construiu um repertório que transita por Canção Erudita Brasileira, Árias de Ópera, Lied e Canto Coral Sacro e Popular e passagens pela EMESP Tom Jobim.",
  "Essa base técnica refinada alia-se, de forma orgânica, à expressividade da música popular brasileira, revelando versatilidade e profundo compromisso com a valorização da cultura brasileira onde interpreta MPB, Bossa Nova e músicas tradicionais nordestinas com autenticidade e profundidade.",
  "Nellva Sântana destaca-se pela qualidade vocal, presença artística e interpretação carregada de verdade, um tributo vivo às suas raízes nordestinas e à riqueza da musicalidade brasileira. Cada canção que interpreta carrega memória, identidade e um compromisso genuíno com a preservação e valorização da cultura do seu povo.",
];

export const performances = [
  { title: "66ª Paixão de Cristo", place: "Taboão da Serra", year: "2025", text: "Na Encenação da Paixão de Cristo, deu vida ao emblemático personagem Sentimento de Maria, emocionando o público com intensa presença cênica e interpretação de Ave Maria, de Franz Schubert — um marco de sua trajetória artística, onde voz, emoção e teatro se encontram." },
  { title: "64ª Paixão de Cristo", place: "Taboão da Serra", year: "2023", text: "Na 64ª edição do espetáculo 'Encenação da Paixão de Cristo', deu vida à marcante personagem Verônica, atuando como atriz e solista na interpretação do tradicional Canto de Verônica, em uma performance que uniu expressividade cênica e excelência vocal." },
  { title: "63ª Paixão de Cristo", place: "Taboão da Serra", year: "2019", text: "Entre voz e emoção, interpretou a personagem Anjo na 63ª edição da Encenação da Paixão de Cristo de Taboão da Serra, apresentando Ave Maria, de Franz Schubert, em uma performance de intensa expressividade cênica e sensibilidade musical." },
  { title: "Mulheres que Cantam", place: "Teatro Adamastor", year: "2023", text: "Participação no programa realizado no Teatro Adamastor, em apresentação ao vivo com público e transmissão pelo YouTube, celebrando a força da voz feminina na música brasileira." },
  { title: "Direção Musical", place: "Taboão da Serra", year: "2023", text: "Na direção musical de Quase Cinquenta – É Pra Rir ou Chorar, deu forma à identidade sonora da montagem, unindo repertório, arranjos e direção vocal em uma proposta marcada por sensibilidade, expressividade e unidade cênica." },
  { title: "A Dança de OZ", place: "São Paulo", year: "2017", text: "No espetáculo de dança A Dança de OZ, uniu canto e movimento em cena, atuando como cantora e bailarina em uma performance marcada pela expressividade, versatilidade artística e presença de palco." },
];

export const projects = [
  { title: "Noutra Bossa", summary: "Músicas autorais e releituras em parceria, disponíveis no Spotify e YouTube.", text: "Entre a criação e a reinvenção, o Noutra Bossa apresenta um repertório de músicas autorais e releituras em parceria, revelando uma identidade musical singular. Disponível no Spotify e no YouTube, o projeto amplia o diálogo entre tradição, sensibilidade e contemporaneidade." },
  { title: "Canção Erudita Brasileira", summary: "Concerto de Música de Câmara dedicado à Canção Erudita Brasileira.", text: "Concerto de Música de Câmara dedicado à Canção Erudita Brasileira, apresentando obras autorais em parceria com compositores. O repertório valoriza a criação contemporânea e a identidade musical brasileira." },
];

export type MediaAsset = { src: string; alt: string; fit?: "cover" | "contain"; position?: string };
export type Video = { id: string; title: string; thumbnail: MediaAsset; youtubeUrl?: string; featured?: boolean };

export const performanceImages: Array<MediaAsset | undefined> = [
  { src: "/images/paixao-de-cristo.jpg", alt: "Detalhe de figurino em cena na Paixão de Cristo", fit: "contain" },
  undefined,
  undefined,
  { src: "/images/mulheres-que-cantam.jpg", alt: "Registro panorâmico de Nellva Sântana no Mulheres que Cantam", fit: "contain" },
  { src: "/images/direcao-musical.jpg", alt: "Nellva Sântana cantando ao lado de músico com violão" },
  { src: "/images/danca-de-oz.jpg", alt: "Nellva Sântana em cena no espetáculo A Dança de OZ", fit: "contain" },
];

const videoData = [
  ["stizzoso", "Nellva Sântana — Stizzoso, mio stizzoso (La Serva Padrona — G. B. Pergolesi)", "video-stizzoso.jpg"],
  ["an-die-musik", "Soprano Nellva Sântana — An die Musik (Franz Schubert)", "video-an-die-musik.jpg"],
  ["ave-maria", "Ave Maria — Franz Schubert (64ª Paixão de Cristo — Taboão da Serra)", "video-ave-maria.jpg"],
  ["amor-que-nao-vivi", "Amor Que Não Vivi — Duo Intime — Canção Erudita Brasileira", "video-amor-que-nao-vivi.jpg"],
  ["pai-nosso", "Nellva Sântana — Pai Nosso (Carlos Zink)", "video-pai-nosso.jpg"],
  ["xote-das-meninas", "Mulheres que Cantam — Xote das Meninas — Luiz Gonzaga", "video-xote-das-meninas.jpg"],
  ["uirapuru", "Uirapuru — Waldemar Henrique — Série Lendas Amazônicas", "video-uirapuru.jpg"],
  ["canto-veronica", "Canto de Verônica — Paixão de Cristo", "video-canto-veronica.jpg"],
] as const;

export const videos: Video[] = videoData.map(([id, title, image]) => ({ id, title, thumbnail: { src: `/images/${image}`, alt: `Miniatura de ${title}` } }));
