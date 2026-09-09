# Refatoração final — Nellva Sântana

## Implementação

- Arquitetura Next.js 16.3.4 / App Router preservada. Sem backend ou novas dependências.
- `app/page.tsx`: mantém a apresentação contínua, biografia integral e identidade. Inclui as seis performances reais com imagem, local, ano e texto visíveis.
- `data/content.ts`: concentra biografia, identidade, performances, fotografias, projetos, vídeos e ordenação por destaque/prioridade.
- `components/header.tsx`: desenho preservado; Agenda incluída no menu completo, ciclo de foco, Escape, restauração de foco, conteúdo fechado inerte e foco na seção após navegação.
- `components/scroll-rail.tsx`: estrutura preservada; setas, Home/End e preferência por movimento reduzido. Sem autoplay, modal ou biblioteca adicional.
- `components/video-card.tsx`: fachada com reprodução sob demanda e alternativa no YouTube. Nenhum iframe no carregamento inicial.
- `components/footer.tsx`: assinatura e navegação preservadas; booking com nova fotografia e contato direto já existente no repositório.
- `app/globals.css`: preserva identidade e menu, clareia performances, usa areia em projetos e música, off-white na galeria e escuro pontual em vídeos/booking. Mantém proporções originais das fotos.
- `app/layout.tsx`: quatro famílias tipográficas (Cormorant Garamond, Great Vibes, Manrope e Oswald); metadados e JSON-LD preservados, URLs públicas dependem de configuração explícita.

## Fotografia

Todos os 19 arquivos foram inspecionados visualmente nas imagens fornecidas, comparados ao acervo antigo e importados sem corte, máscara, ampliação artificial ou alteração de cor. Os originais de Downloads não foram alterados. O `next/image` entrega versões otimizadas conforme a tela.

Hero: DSC_5397, inteira, com nome em área separada; no mobile a composição é vertical e sem overlay. Identidade: DSC_5387, distinta da Hero. Nenhuma fotografia reaparece como preenchimento de outra seção. A galeria complementa os registros das performances com fotografias diferentes.

As versões antigas de A Dança de OZ, Direção Musical, Mulheres que Cantam, Paixão de Cristo e Pai Nosso foram removidas após substituição e verificação de referências. Identidade, Amor Que Não Vivi e Canto de Verônica foram atualizados no mesmo caminho. Não foi possível identificar inequivocamente qual arquivo era chamado de “foto com faixa marrom”; as versões antigas correspondentes foram substituídas pelos arquivos entregues, sem simular a correção por crop.

| Original | Uso | Resolução | Asset local |
|---|---|---|---|
| DSC_5397.jpg | Hero | 1357 × 2048 | `/images/nellva-hero.jpg` |
| DSC_5387.jpg | Identidade | 1357 × 2048 | `/images/nellva-identidade.jpg` |
| FOTO DA CAPA- VÍDEO _AMOR QUE NÃO VIVI_.jpg | Capa de vídeo | 1079 × 1080 | `/images/video-amor-que-nao-vivi.jpg` |
| FOTO DA CAPA-VÍDEO _CANTO DE VERÔNICA_.jpg | Capa de vídeo | 1080 × 1080 | `/images/video-canto-veronica.jpg` |
| FOTO DA CAPA DO VÍDEO _PAI NOSSO_.png | Capa de vídeo | 2000 × 2000 | `/images/video-pai-nosso.png` |
| FOTO 08- A DANÇA DE OZ-SP-2017.png | Performance: A Dança de OZ | 2000 × 2000 | `/images/danca-de-oz.png` |
| FOTO 06 -MULHERES QUE CANTAM.png | Performance: Mulheres que Cantam | 1920 × 1080 | `/images/mulheres-que-cantam.png` |
| FOTO 07- DIREÇÃO MUSICAL - TABOÃO DA SERRA-2023.png | Performance: Direção Musical | 2000 × 2000 | `/images/direcao-musical.png` |
| FOTO 01- 66º PAIXÃO.png | Performance: 66ª Paixão | 1080 × 1350 | `/images/paixao-2025.png` |
| FOTO 02 -66º PAIXÃO.png | Galeria: 66ª Paixão | 1080 × 1350 | `/images/paixao-2025-retrato.png` |
| FOTO 03 -64º PAIXÃO.png | Galeria: 64ª Paixão | 1080 × 1350 | `/images/paixao-2023-cena.png` |
| FOTO 04- 64º PAIXÃO.png | Performance: 64ª Paixão | 1080 × 1350 | `/images/paixao-2023-veronica.png` |
| FOTO 05- 63º PAIXÃO.jpg | Performance: 63ª Paixão | 1024 × 830 | `/images/paixao-2019.jpg` |
| Nellva(43).JPG | Galeria | 3888 × 2592 | `/images/nellva-palco.jpg` |
| Nellva (149).JPG | Booking | 6240 × 4160 | `/images/nellva-booking.jpg` |
| Nellva (54).JPG | Galeria | 2592 × 3888 | `/images/nellva-contrabaixo.jpg` |
| Nellva (125).JPG | Galeria | 2592 × 3888 | `/images/nellva-cancao.jpg` |
| Nellva  Sântana.jpg | Galeria | 1280 × 682 | `/images/nellva-banda.jpg` |
| Nellva.JPG | Galeria | 3888 × 2592 | `/images/nellva-expressao.jpg` |

Fotografias de palco preservam corpo, músicos e cenário conforme o enquadramento recebido. Mulheres que Cantam ocupa uma linha panorâmica. Fotografias verticais não são convertidas em paisagens. A foto de 2019 (1024 × 830) e o registro de banda (1280 × 682) têm resolução mais limitada; não houve upscale. Não foram inventados nomes de fotógrafos, datas ou eventos para as fotos sem identificação.

## Conteúdo e rotas

- Artista: biografia do repositório mantida por inteiro; “Raízes profundas” e “A mesma essência em cada canção” visíveis.
- Identidade: textos completos e vertentes musicais preservados.
- Performances: seis trabalhos; 2019 e 2023 agora com as fotos corretas. Eliminada a experiência duplicada da antiga “Galeria de Performances”.
- Projetos: Noutra Bossa e Canção Erudita Brasileira mantêm capas existentes, resumo e descrição visíveis. As novas fotos não foram atribuídas a esses projetos sem confirmação.
- Vídeos: quatro URLs fornecidas associadas aos títulos. Xote das Meninas aparece primeiro entre os vídeos disponíveis. Bate Coração possui `featured: true` e `priority: 1`; basta adicionar `youtubeUrl` para assumir o destaque, mesmo sem thumbnail. Seu item não aparece vazio no site.
- Galeria: sete fotografias distintas com legendas, em trilho; sem categorias vazias ou numeração decorativa.
- Música: chamada preservada e acesso aos vídeos reais. Avisos internos de integração removidos; nenhum perfil Spotify/YouTube Music inventado.
- Agenda: as datas Recife/Salvador/João Pessoa citadas no pedido não estavam presentes no estado atual. Mantida somente a mensagem de novas apresentações.
- Imprensa: contato para solicitar material. Sem PDF, clipping, créditos ou downloads inventados; removidas as listas antigas de arquivos inexistentes.
- Booking: chamada solicitada preservada, fotografia nova e `contato@nellvasantana.com`, já presente no conteúdo original.
- Busca global em código: nenhum hotlink imgbb ou imagem remota temporária encontrado. Todas as imagens visíveis são locais. Removido CSS legado de placeholder.
- Rotas antigas `/artista`, `/trajetoria`, `/projetos`, `/videos`, `/musica`, `/galeria`, `/agenda`, `/imprensa`, `/contato`: classificadas como legado, substituídas por redirecionamentos permanentes para âncoras da Home. A rota `/trajetoria` leva a `/#performances`. Não há mais páginas concorrentes.
- Sitemap: somente Home quando o domínio público estiver configurado. Rotas utilitárias de ícone, Open Graph, robots, sitemap e 404 preservadas. A build ainda enumera as rotas de redirecionamento; isso não representa múltiplas experiências de conteúdo.

## Pendências reais

1. URL de Bate Coração.
2. URLs oficiais de Amor Que Não Vivi, Pai Nosso, Ave Maria e Canto de Verônica. Capas/títulos preservados, sem botões falsos.
3. Perfis oficiais de Spotify e YouTube Music.
4. Release/press kit e créditos fotográficos para disponibilizar downloads profissionais.
5. Novas datas oficiais de agenda.
6. `NEXT_PUBLIC_SITE_URL` com o domínio público confirmado. Sem configuração, não se publica canonical nem sitemap com endereço inventado; Next usa localhost como fallback para a imagem social na build local. Ver `.env.example`.

## Referências conceituais consultadas

[Carla Visi](https://carlavisi.com.br/), [Tulipa Ruiz](https://www.tuliparuiz.com.br/), [Vanessa da Mata](https://vanessadamata.com.br/) e [Ivete Sangalo](https://www.ivetesangalo.com.br/). Consulta de estrutura/conteúdo, sem copiar layouts ou importar dados dessas artistas.

## Validação

Resultados finais e evidências de navegador em `artifacts/browser-checks.json`, `artifacts/site-390.png` e `artifacts/site-1440.png`.

- `npm run lint`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou. Único aviso: domínio público ainda não configurado para metadados sociais.
- Testes existentes: não havia suíte nem script de testes no repositório.
- Verificação funcional com Playwright/Chromium: passou em 375, 390, 430, 768, 1024, 1280, 1440 e 1920 px, além de 844 × 390 e 1280 × 600. Sem overflow horizontal, âncoras ausentes ou imagens quebradas.
- Menu: foco inicial, Tab/Shift+Tab, Escape, restauração e foco na seção confirmados. O teste revelou e permitiu corrigir uma falha de foco durante a transição visual.
- Console e hidratação: nenhum erro observado no Chromium. Preferência por movimento reduzido e foco do menu confirmados.
- Trilho: teclado, botões e gesto touch emulado confirmados. Vídeo: zero iframes inicialmente; um iframe criado após clique. A reprodução efetiva de áudio/vídeo e a disponibilidade de incorporação no YouTube não foram atestadas.
- Rotas: nove respostas HTTP 308 com destinos corretos.
- Capturas completas desktop/mobile revisadas. Sem lightbox/modal de fotografia; a galeria funciona diretamente na página.
- A primeira execução que interrompia carregamentos entre navegações deixou respostas de otimização pendentes no processo local. Após reiniciar o servidor e aguardar os carregamentos entre dimensões, todas as imagens foram carregadas e verificadas. Nenhum bypass do otimizador foi adicionado.
- `git diff --check`: passou.
- Sem publicação ou commit. Arquivos gerados pela build foram retirados do diff, preservando a alteração preexistente em `.next/dev/trace`.
