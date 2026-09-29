# Galeria / Momentos — curadoria

36 originais inspecionados visualmente: Nos Palcos 9, Bastidores 16, Retratos 11. Seleção: 8, 8 e 7 (23 fotos). Nenhum hash SHA-256 repetido; nenhuma foto repetida na seleção. Todas as categorias seguem as pastas de origem. Originais preservados no diretório fornecido.

Tratamento técnico: orientação EXIF aplicada aos pixels, conversão sRGB/WebP qualidade 85, limite de 1920 px por lado sem ampliar, metadados removidos. Sem retoque generativo, alteração de cores ou recorte. As cores de palco, preto e branco e efeitos de iluminação dos retratos são originais.

Arquivos selecionados: 67.73 MB de origem → 3.99 MB em WebP (94.1% de redução). O next/image fornece tamanhos responsivos e carregamento lazy.

## Nos Palcos

Ordem no site: 01, 05, 02, 04, 03, 06, 08, 07.

| Original | Proporção após orientação | Decisão |
| --- | --- | --- |
| foto 01.jpg | 6240 × 4160 | Selecionada; composição integral. |
| foto 02.jpg | 6000 × 3376 | Selecionada; composição integral. |
| foto 03.jpg | 1080 × 720 | Selecionada; composição integral. |
| FOTO 04.jpg | 963 × 1280 | Selecionada; composição integral. |
| FOTO 05.jpg | 2496 × 3744 | Selecionada; composição integral. |
| FOTO 06.png | 1080 × 1350 | Selecionada; composição integral. |
| FOTO 07.jpg | 1280 × 720 | Selecionada; composição integral. |
| FOTO 08.jpg | 2048 × 1357 | Selecionada; composição integral. |
| FOTO 10.jpg | 552 × 368 | Baixa resolução (552 × 368) e poucos detalhes nas sombras; outras cenas representam melhor o palco. |

## Bastidores

Ordem no site: 06, 14, 02, 09, 11, 15, 13, 03.

| Original | Proporção após orientação | Decisão |
| --- | --- | --- |
| FOTO 01.jpg | 1884 × 4080 | Pessoa em primeiro plano encobre boa parte da artista; 03 e 14 mostram melhor o processo. |
| FOTO 02.jpg | 3060 × 4080 | Selecionada; composição integral. |
| FOTO 03.jpg | 4080 × 1884 | Selecionada; composição integral. |
| FOTO 05.jpg | 2160 × 3840 | Montagem com bordas e textos incorporados; priorizadas fotografias individuais. |
| FOTO 06.jpg | 4000 × 6016 | Selecionada; composição integral. |
| FOTO 07.jpg | 3264 × 2448 | Selfie com destaque maior para a placa; 15 representa o estúdio e a equipe. |
| FOTO 08.jpg | 720 × 1600 | Fotografia de projeção, escura e com menor definição. |
| FOTO 09.jpg | 2000 × 2000 | Selecionada; composição integral. |
| FOTO 10.jpg | 2000 × 2000 | Cena semelhante à 14, que mostra a equipe de forma mais completa. |
| FOTO 11.jpg | 1884 × 4080 | Selecionada; composição integral. |
| FOTO 12.jpg | 2000 × 2000 | Selfie próxima do microfone; 09 oferece composição mais legível. |
| FOTO 13.jpg | 2000 × 2000 | Selecionada; composição integral. |
| FOTO 14.jpg | 4080 × 1884 | Selecionada; composição integral. |
| FOTO 15.jpg | 3072 × 4096 | Selecionada; composição integral. |
| FOTO 16.jpg | 2000 × 2000 | Granulação forte e rosto parcialmente encoberto; 09 representa a gravação. |
| FOTO 17.jpg | 1884 × 4080 | Projeção com baixa definição e enquadramento estreito; 11 representa o mesmo figurino. |

## Retratos

Ordem no site: 10, 09, 02, 04, 03, 05, 01.

| Original | Proporção após orientação | Decisão |
| --- | --- | --- |
| FOTO 01.jpg | 1479 × 2048 | Selecionada; composição integral. |
| FOTO 02.jpg | 2000 × 2000 | Selecionada; composição integral. |
| FOTO 03.jpg | 2048 × 1365 | Selecionada; composição integral. |
| FOTO 04.jpg | 1365 × 2048 | Selecionada; composição integral. |
| FOTO 05.jpg | 1365 × 2048 | Selecionada; composição integral. |
| FOTO 06.jpg | 1365 × 2048 | Pose e figurino próximos de 04 e 09; priorizada variedade. |
| FOTO 07.png | 1080 × 1080 | Recorte original exclui olhos e parte do rosto; priorizados retratos com expressão visível. |
| FOTO 08.png | 1080 × 1080 | Recorte original exclui parte do rosto; priorizados enquadramentos mais completos. |
| FOTO 09.jpg | 2048 × 1365 | Selecionada; composição integral. |
| FOTO 10.jpg | 1442 × 2048 | Selecionada; composição integral. |
| FOTO 11.jpg | 1080 × 1080 | Menor definição e sombras extensas; priorizados retratos com mais detalhe. |

## Implementação e validação

- Abertura MOMENTOS / Galeria incluída conforme briefing, pois estava ausente nesta versão do código. Texto introdutório e composição tipográfica de “Presença, música e expressão.” mantidos, sem duplicar o parágrafo.
- Três blocos editoriais numerados, separados por respiro e linhas discretas. Cada bloco reaproveita ScrollRail com identificação própria. Nenhum componente compartilhado alterado.
- Desktop: larguras proporcionais aos originais, altura máxima de 480 px e alinhamento central; fotografias horizontais e verticais convivem sem recorte.
- Mobile: fotos limitadas a 84vw e 440 px de altura, alinhadas no topo; próxima foto parcialmente visível, rolagem nativa por toque e controles de 48 × 48 px.
- Nenhuma legenda inventada; alt individual descreve apenas conteúdo visível. Sem categoria não confirmada ou imagem duplicada.
- Typecheck, lint, build e git diff --check: aprovados. Build exibe aviso preexistente de metadataBase ausente, fora do escopo desta etapa.
- Chromium com build de produção: 375, 390, 430, 768, 1024, 1440 e 1920 px aprovados. Mobile repetido após ajuste de alinhamento. Sem overflow da página e sem erros de console.
- Verificadas todas as 23 imagens carregadas, proporções renderizadas, alt, lazy loading, ausência de duplicidades e nomes das categorias.
- Testados em todos os tamanhos: setas esquerda/direita, Home/End, Tab, Enter e botões. Gesto de deslizar testado por simulação touch em 375 px; não houve teste em aparelho físico.
- Todas as 23 fotografias renderizadas foram inspecionadas visualmente em 375 e 1440 px. Nenhum corte ou deformação introduzido.
- Nenhuma imagem da Galeria carregada na abertura do topo da página. Após percorrer as 23: aproximadamente 673 KB transferidos em 375 px e 814 KB em 1440 px (DPR 1, medição local, incluindo overhead das respostas). Estes valores não representam um benchmark de rede móvel.
- Evidências: galeria-validacao.json, galeria-375.png e galeria-1440.png. Nas capturas da seção, apenas header fixo e link de salto foram ocultados para não sobrepor o conteúdo da captura; o site mantém ambos intactos.

Arquivos de implementação: app/page.tsx, app/globals.css, data/content.ts, data/gallery.ts e 23 WebP em public/images/galeria/. Outras seções não foram alteradas.
