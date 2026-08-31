module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/videos/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideosPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Vídeos",
    description: "Videoteca artística de Nellva Sântana."
};
function VideosPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: "Videoteca",
                title: "Canções em",
                italic: "cena",
                intro: "Um arquivo de interpretações, encontros e repertórios que atravessam a trajetória de Nellva Sântana."
            }, void 0, false, {
                fileName: "[project]/app/videos/page.tsx",
                lineNumber: 9,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "video-library",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["videos"].map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/app/videos/page.tsx",
                                        lineNumber: 10,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "play",
                                        "aria-hidden": "true",
                                        children: "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/app/videos/page.tsx",
                                        lineNumber: 10,
                                        columnNumber: 169
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/videos/page.tsx",
                                lineNumber: 10,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/videos/page.tsx",
                                lineNumber: 10,
                                columnNumber: 225
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Vídeo identificado no acervo. Reprodução disponível após confirmação do link oficial."
                            }, void 0, false, {
                                fileName: "[project]/app/videos/page.tsx",
                                lineNumber: 10,
                                columnNumber: 241
                            }, this)
                        ]
                    }, title, true, {
                        fileName: "[project]/app/videos/page.tsx",
                        lineNumber: 10,
                        columnNumber: 70
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/videos/page.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Booking"], {}, void 0, false, {
                fileName: "[project]/app/videos/page.tsx",
                lineNumber: 10,
                columnNumber: 355
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/videos/page.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/videos/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/videos/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ui.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoreLink",
    ()=>MoreLink,
    "PageHero",
    ()=>PageHero,
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function PageHero({ eyebrow, title, italic, intro }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "page-hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 5,
                columnNumber: 41
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    title,
                    italic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 5,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: italic
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 5,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 5,
                        columnNumber: 99
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 5,
                columnNumber: 77
            }, this),
            intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lede",
                children: intro
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 5,
                columnNumber: 143
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-mark",
                "aria-hidden": "true",
                children: "NS"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 5,
                columnNumber: 175
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
function SectionTitle({ eyebrow, children, intro }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "section-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 80
            }, this),
            intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: intro
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 109
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
function MoreLink({ href, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        className: "text-link",
        href: href,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 60
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/data/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "biography",
    ()=>biography,
    "identity",
    ()=>identity,
    "performances",
    ()=>performances,
    "projects",
    ()=>projects,
    "videos",
    ()=>videos
]);
const biography = [
    "Nascida e criada no interior da Bahia, Nellva Sântana traz em sua essência as cores, os ritmos e as narrativas que moldam a identidade cultural do Nordeste brasileiro. Cresceu imersa em manifestações populares como as Festas Juninas, a Folia de Reis, o Bumba Meu Boi e o Carnaval, vivências que despertaram, desde cedo, sua relação profunda com a música e permanecem como alicerce de sua identidade artística.",
    "Ao longo da sua formação, ampliou esse universo ao dedicar-se também ao estudo da canção brasileira, da música de concerto e de diferentes repertórios vocais, construindo uma trajetória marcada pelo diálogo entre tradição e técnica, memória e interpretação.",
    "Hoje, transita com naturalidade entre projetos dedicados à música tradicional nordestina, à música brasileira e a apresentações em repertório lírico, sempre preservando uma característica que atravessa toda a sua atuação: o compromisso com interpretações sensíveis, autênticas e conectadas às histórias que cada canção carrega.",
    "Mais do que percorrer diferentes estilos, Nellva reúne experiências musicais diversas sem perder de vista suas raízes. Sua voz encontra na cultura brasileira o ponto de partida para construir encontros entre tradição, emoção e contemporaneidade."
];
const identity = [
    "Sua formação musical conta com estudos em canto erudito, construiu um repertório que transita por Canção Erudita Brasileira, Árias de Ópera, Lied e Canto Coral Sacro e Popular e passagens pela EMESP Tom Jobim.",
    "Essa base técnica refinada alia-se, de forma orgânica, à expressividade da música popular brasileira, revelando versatilidade e profundo compromisso com a valorização da cultura brasileira onde interpreta MPB, Bossa Nova e músicas tradicionais nordestinas com autenticidade e profundidade.",
    "Nellva Sântana destaca-se pela qualidade vocal, presença artística e interpretação carregada de verdade, um tributo vivo às suas raízes nordestinas e à riqueza da musicalidade brasileira. Cada canção que interpreta carrega memória, identidade e um compromisso genuíno com a preservação e valorização da cultura do seu povo."
];
const performances = [
    {
        title: "66ª Paixão de Cristo",
        place: "Taboão da Serra",
        year: "2025",
        text: "Na Encenação da Paixão de Cristo, deu vida ao emblemático personagem Sentimento de Maria, emocionando o público com intensa presença cênica e interpretação de Ave Maria, de Franz Schubert — um marco de sua trajetória artística, onde voz, emoção e teatro se encontram."
    },
    {
        title: "64ª Paixão de Cristo",
        place: "Taboão da Serra",
        year: "2023",
        text: "Na 64ª edição do espetáculo 'Encenação da Paixão de Cristo', deu vida à marcante personagem Verônica, atuando como atriz e solista na interpretação do tradicional Canto de Verônica, em uma performance que uniu expressividade cênica e excelência vocal."
    },
    {
        title: "63ª Paixão de Cristo",
        place: "Taboão da Serra",
        year: "2019",
        text: "Entre voz e emoção, interpretou a personagem Anjo na 63ª edição da Encenação da Paixão de Cristo de Taboão da Serra, apresentando Ave Maria, de Franz Schubert, em uma performance de intensa expressividade cênica e sensibilidade musical."
    },
    {
        title: "Mulheres que Cantam",
        place: "Teatro Adamastor",
        year: "2023",
        text: "Participação no programa realizado no Teatro Adamastor, em apresentação ao vivo com público e transmissão pelo YouTube, celebrando a força da voz feminina na música brasileira."
    },
    {
        title: "Direção Musical",
        place: "Taboão da Serra",
        year: "2023",
        text: "Na direção musical de Quase Cinquenta – É Pra Rir ou Chorar, deu forma à identidade sonora da montagem, unindo repertório, arranjos e direção vocal em uma proposta marcada por sensibilidade, expressividade e unidade cênica."
    },
    {
        title: "A Dança de OZ",
        place: "São Paulo",
        year: "2017",
        text: "No espetáculo de dança A Dança de OZ, uniu canto e movimento em cena, atuando como cantora e bailarina em uma performance marcada pela expressividade, versatilidade artística e presença de palco."
    }
];
const projects = [
    {
        title: "Noutra Bossa",
        summary: "Músicas autorais e releituras em parceria, disponíveis no Spotify e YouTube.",
        text: "Entre a criação e a reinvenção, o Noutra Bossa apresenta um repertório de músicas autorais e releituras em parceria, revelando uma identidade musical singular. Disponível no Spotify e no YouTube, o projeto amplia o diálogo entre tradição, sensibilidade e contemporaneidade."
    },
    {
        title: "Canção Erudita Brasileira",
        summary: "Concerto de Música de Câmara dedicado à Canção Erudita Brasileira.",
        text: "Concerto de Música de Câmara dedicado à Canção Erudita Brasileira, apresentando obras autorais em parceria com compositores. O repertório valoriza a criação contemporânea e a identidade musical brasileira."
    }
];
const videos = [
    "Nellva Sântana - Stizzoso, mio stizzoso (La Serva Padrona - G.B. Pergolesi)",
    "Soprano Nellva Sântana - An die Musik (Franz Schubert)",
    "Ave Maria - Franz Schubert (64ª Paixão de Cristo - Taboão da Serra) - 'Coração de Maria'",
    "'Amor Que Não Vivi' - 'Duo Intime' - Canção Erudita Brasileira - Autoral",
    "Nellva Sântana - Pai Nosso (Carlos Zink)",
    "Mulheres Que Cantam - Xote das Meninas - Luiz Gonzaga",
    "Uirapuru - Waldemar Henrique - Série Lenda Amazônicas",
    "Canto de Verônica (Paixão de Cristo - Taboão da Serra)"
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00ij0rh._.js.map