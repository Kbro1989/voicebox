(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/BrandPreviewCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo,
    "BrandPreviewCard",
    ()=>BrandPreviewCard,
    "fontStack",
    ()=>fontStack,
    "hostnameOf",
    ()=>hostnameOf,
    "isLightHex",
    ()=>isLightHex,
    "useBrandFonts",
    ()=>useBrandFonts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Shared rich brand preview.
//
// The Brand Kit tab renders a full master-detail preview of a brand (cover,
// identity, logo, typography specimens, palette, voice, imagery, the embedded
// design-system kit, and brand asset tiles). The same visual is reused in
// every design-system picker so selecting a brand shows the real brand kit
// instead of a thin one-line summary.
//
//   - `variant='panel'`  — the full Brand Kit tab preview, including the
//                          Use / Open project / Delete actions.
//   - `variant='compact'`— a trimmed pane sized for a narrow picker popover:
//                          cover, name/tagline/domain, identity, typography,
//                          and palette only (no actions or iframe-heavy
//                          sections that would be too heavy in a small popup).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/home-intent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BrandPreviewCard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function hostnameOf(rawUrl) {
    try {
        return new URL(rawUrl).hostname.replace(/^www\./, '');
    } catch  {
        return rawUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0] || rawUrl;
    }
}
function BrandLogo({ id, host, name, faviconSize, className, fallbackClassName }) {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('brand');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandLogo.useEffect": ()=>{
            setStage('brand');
        }
    }["BrandLogo.useEffect"], [
        id
    ]);
    const src = stage === 'brand' ? `/api/brands/${encodeURIComponent(id)}/logo` : stage === 'favicon' && host ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${faviconSize}` : null;
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BrandLogo.useCallback[advance]": ()=>{
            setStage({
                "BrandLogo.useCallback[advance]": (s)=>s === 'brand' ? 'favicon' : 'letter'
            }["BrandLogo.useCallback[advance]"]);
        }
    }["BrandLogo.useCallback[advance]"], []);
    if (!src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: fallbackClassName,
            "aria-hidden": true,
            children: name.slice(0, 1).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: className,
        src: src,
        alt: "",
        loading: "lazy",
        referrerPolicy: "no-referrer",
        onError: advance
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(BrandLogo, "dF0YdDsMUWhTCcpgyTPTufx+OKI=");
_c = BrandLogo;
/** How many imagery samples render inline before the rest are gated behind a
 *  subtle "show all" toggle, so a long sample set never floods the panel. */ const IMAGE_CAP = 8;
function fontStack(spec) {
    const families = [
        spec.family,
        ...spec.fallbacks ?? []
    ].filter(Boolean);
    if (families.length === 0) return 'ui-sans-serif, system-ui, sans-serif';
    return families.map((f)=>/\s/.test(f) ? `'${f}'` : f).join(', ');
}
function isLightHex(hex) {
    if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return true;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 150;
}
function useBrandFonts(projectId, fonts) {
    _s1();
    const googleUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBrandFonts.useMemo[googleUrls]": ()=>{
            const urls = fonts.map({
                "useBrandFonts.useMemo[googleUrls].urls": (f)=>f.googleFontsUrl
            }["useBrandFonts.useMemo[googleUrls].urls"]).filter({
                "useBrandFonts.useMemo[googleUrls].urls": (u)=>Boolean(u && /^https:\/\/fonts\.googleapis\.com\//i.test(u))
            }["useBrandFonts.useMemo[googleUrls].urls"]);
            return Array.from(new Set(urls));
        }
    }["useBrandFonts.useMemo[googleUrls]"], [
        fonts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrandFonts.useEffect": ()=>{
            const links = googleUrls.map({
                "useBrandFonts.useEffect.links": (href)=>{
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    document.head.appendChild(link);
                    return link;
                }
            }["useBrandFonts.useEffect.links"]);
            return ({
                "useBrandFonts.useEffect": ()=>{
                    for (const link of links)link.remove();
                }
            })["useBrandFonts.useEffect"];
        }
    }["useBrandFonts.useEffect"], [
        googleUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrandFonts.useEffect": ()=>{
            if (!projectId) return;
            let cancelled = false;
            let styleEl = null;
            void ({
                "useBrandFonts.useEffect": async ()=>{
                    try {
                        const resp = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, 'fonts/manifest.json'), {
                            cache: 'no-store'
                        });
                        if (!resp.ok) return;
                        const data = await resp.json();
                        const files = Array.isArray(data?.files) ? data.files : [];
                        if (cancelled || files.length === 0) return;
                        const css = files.map({
                            "useBrandFonts.useEffect.css": (f)=>{
                                const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, `fonts/${f.file}`);
                                return [
                                    '@font-face {',
                                    `  font-family: '${f.family.replace(/'/g, '')}';`,
                                    `  src: url('${url}') format('${f.format}');`,
                                    `  font-weight: ${f.weight};`,
                                    `  font-style: ${f.style};`,
                                    '  font-display: swap;',
                                    '}'
                                ].join('\n');
                            }
                        }["useBrandFonts.useEffect.css"]).join('\n');
                        styleEl = document.createElement('style');
                        styleEl.dataset.brandFonts = projectId;
                        styleEl.textContent = css;
                        document.head.appendChild(styleEl);
                    } catch  {
                    // A missing or malformed manifest is expected for some brands; the
                    // specimens simply fall back to the system stack.
                    }
                }
            })["useBrandFonts.useEffect"]();
            return ({
                "useBrandFonts.useEffect": ()=>{
                    cancelled = true;
                    if (styleEl) styleEl.remove();
                }
            })["useBrandFonts.useEffect"];
        }
    }["useBrandFonts.useEffect"], [
        projectId
    ]);
}
_s1(useBrandFonts, "aoVGey2KwDtCljVzELIb0j//0dk=");
function BrandPreviewCard({ summary, variant = 'panel', onChanged, onBeforeMutation, onApplyDesignSystem, onOpenProject, actionsDisabled = false }) {
    _s2();
    var _s = __turbopack_context__.k.signature();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const compact = variant === 'compact';
    const { meta, brand } = summary;
    const host = hostnameOf(meta.sourceUrl);
    const name = brand?.name?.trim() || host;
    const extracting = meta.status === 'extracting';
    const needsInput = meta.status === 'needs_input';
    const failed = meta.status === 'failed';
    const ready = meta.status === 'ready';
    const projectId = meta.projectId;
    const [backingProjectMissing, setBackingProjectMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dsTheme, setDsTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [imagesExpanded, setImagesExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const colors = brand?.colors ?? [];
    const fonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandPreviewCard.useMemo[fonts]": ()=>{
            if (!brand) return [];
            const out = [];
            if (brand.typography.display) out.push({
                font: brand.typography.display,
                label: 'Display'
            });
            if (brand.typography.body) out.push({
                font: brand.typography.body,
                label: 'Body'
            });
            if (brand.typography.mono) out.push({
                font: brand.typography.mono,
                label: 'Mono'
            });
            return out;
        }
    }["BrandPreviewCard.useMemo[fonts]"], [
        brand
    ]);
    useBrandFonts(projectId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandPreviewCard.useBrandFonts.useMemo": ()=>fonts.map({
                "BrandPreviewCard.useBrandFonts.useMemo": (f)=>f.font
            }["BrandPreviewCard.useBrandFonts.useMemo"])
    }["BrandPreviewCard.useBrandFonts.useMemo"], [
        fonts
    ]));
    // Logo candidates (primary first, then alternates), de-duped. These resolve
    // under the backing project's raw file route — the same convention the
    // rendered brand.html uses. Only meaningful once the brand has a project.
    const logoCandidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandPreviewCard.useMemo[logoCandidates]": ()=>{
            const primary = brand?.logo?.primary ?? null;
            const all = [
                primary,
                ...brand?.logo?.alternates ?? []
            ].filter({
                "BrandPreviewCard.useMemo[logoCandidates].all": (c)=>Boolean(c)
            }["BrandPreviewCard.useMemo[logoCandidates].all"]);
            return Array.from(new Set(all));
        }
    }["BrandPreviewCard.useMemo[logoCandidates]"], [
        brand
    ]);
    const [activeLogo, setActiveLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeLogoSrc = logoCandidates[activeLogo] ?? logoCandidates[0] ?? null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandPreviewCard.useEffect": ()=>{
            setActiveLogo(0);
            setImagesExpanded(false);
            setLightbox(null);
        }
    }["BrandPreviewCard.useEffect"], [
        meta.id
    ]);
    const samples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandPreviewCard.useMemo[samples]": ()=>{
            const list = brand?.imagery?.samples;
            return Array.isArray(list) ? list.filter({
                "BrandPreviewCard.useMemo[samples]": (s)=>s && s.file
            }["BrandPreviewCard.useMemo[samples]"]) : [];
        }
    }["BrandPreviewCard.useMemo[samples]"], [
        brand
    ]);
    const adjectives = brand?.voice?.adjectives ?? [];
    const tone = brand?.voice?.tone?.trim() || '';
    const pillars = brand?.voice?.messagingPillars ?? [];
    const vocabUse = brand?.voice?.vocabulary?.use ?? [];
    const vocabAvoid = brand?.voice?.vocabulary?.avoid ?? [];
    const imagery = brand?.imagery;
    const layout = brand?.layout;
    // The compact picker preview deliberately drops the iframe-heavy sections
    // (embedded kit, asset tiles, image gallery) — they are too heavy for a
    // small popover and need a live project the popover may not warrant.
    const showSystem = Boolean(!compact && ready && projectId);
    // Fetch the six engine tokens the design-system chips show. Best-effort and
    // gated on a finalized brand (the system/ dir only exists post-finalize).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandPreviewCard.useEffect": ()=>{
            if (!showSystem || !projectId) {
                setTokens(null);
                return;
            }
            let cancelled = false;
            void ({
                "BrandPreviewCard.useEffect": async ()=>{
                    try {
                        const resp = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, 'system/tokens.default.json'), {
                            cache: 'no-store'
                        });
                        if (!resp.ok) return;
                        const raw = await resp.json();
                        if (cancelled) return;
                        const next = {};
                        if (typeof raw.colorPrimary === 'string') next.colorPrimary = raw.colorPrimary;
                        if (typeof raw.colorPrimaryBg === 'string') next.colorPrimaryBg = raw.colorPrimaryBg;
                        if (typeof raw.colorPrimaryHover === 'string') next.colorPrimaryHover = raw.colorPrimaryHover;
                        if (typeof raw.colorPrimaryActive === 'string') {
                            next.colorPrimaryActive = raw.colorPrimaryActive;
                        }
                        if (typeof raw.fontSize === 'number') next.fontSize = raw.fontSize;
                        if (typeof raw.borderRadius === 'number') next.borderRadius = raw.borderRadius;
                        setTokens(next.colorPrimary ? next : null);
                    } catch  {
                    // Token chips are decorative; a missing file just hides them.
                    }
                }
            })["BrandPreviewCard.useEffect"]();
            return ({
                "BrandPreviewCard.useEffect": ()=>{
                    cancelled = true;
                }
            })["BrandPreviewCard.useEffect"];
        }
    }["BrandPreviewCard.useEffect"], [
        showSystem,
        projectId
    ]);
    const useInChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BrandPreviewCard.useCallback[useInChat]": async ()=>{
            if (actionsDisabled) return;
            const designSystemId = meta.designSystemId;
            if (!designSystemId || busy) return;
            setBusy(true);
            try {
                // The brand registered a `user:<id>` design system. Apply it as the
                // global default through the web config channel so the Home composer
                // immediately preselects it; a bare daemon PATCH left React config stale
                // (composer kept showing "No design system") and a later config sync
                // could clobber it back. Fall back to a direct PATCH if the parent did
                // not thread the setter (e.g. a standalone mount).
                if (onApplyDesignSystem) {
                    onApplyDesignSystem(designSystemId);
                } else {
                    await fetch('/api/app-config', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            designSystemId
                        })
                    });
                }
                // Default the new chat to the Prototype scenario: it surfaces the design
                // system field and is the most common brand-applied build, so the user
                // lands ready to generate with the brand instead of in the generic path.
                // Carry a confirmation notice so Home shows a visible "Using <brand>"
                // banner — otherwise the navigate+apply is silent and the CTA reads as a
                // no-op (the reported bug).
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestHomeChip"])('prototype', {
                    notice: t('brand.appliedToChat', {
                        name
                    })
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'home'
                });
            } finally{
                setBusy(false);
            }
        }
    }["BrandPreviewCard.useCallback[useInChat]"], [
        actionsDisabled,
        meta.designSystemId,
        busy,
        onApplyDesignSystem,
        t,
        name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandPreviewCard.useEffect": ()=>{
            setBackingProjectMissing(false);
        }
    }["BrandPreviewCard.useEffect"], [
        projectId
    ]);
    const openProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BrandPreviewCard.useCallback[openProject]": async ()=>{
            if (actionsDisabled) return;
            if (!projectId) return;
            if (onOpenProject) {
                const opened = await onOpenProject(projectId);
                if (opened === false) setBackingProjectMissing(true);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId,
                fileName: null,
                conversationId: null
            });
        }
    }["BrandPreviewCard.useCallback[openProject]"], [
        actionsDisabled,
        onOpenProject,
        projectId
    ]);
    const deleteBrand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BrandPreviewCard.useCallback[deleteBrand]": async ()=>{
            if (actionsDisabled) return;
            if (busy) return;
            const ok = window.confirm(t('brandDetail.deleteConfirm').replace('{name}', name));
            if (!ok) return;
            setBusy(true);
            try {
                const resp = await fetch(`/api/brands/${encodeURIComponent(meta.id)}`, {
                    method: 'DELETE'
                });
                if (!resp.ok) throw new Error('Brand delete failed');
                // Drop the now-stale `/brands/:id` selection before refreshing the list.
                onBeforeMutation?.();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'brands'
                }, {
                    replace: true
                });
                await onChanged?.();
            } catch  {
                setBusy(false);
            }
        }
    }["BrandPreviewCard.useCallback[deleteBrand]"], [
        actionsDisabled,
        busy,
        meta.id,
        name,
        onBeforeMutation,
        onChanged,
        t
    ]);
    const dsKitFile = dsTheme === 'dark' ? 'system/kit.dark.html' : 'system/kit.html';
    const assetTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandPreviewCard.useMemo[assetTiles]": ()=>[
                {
                    kind: 'landing',
                    label: 'Landing page',
                    file: 'system/artifacts/landing.html'
                },
                {
                    kind: 'deck',
                    label: 'Pitch deck',
                    file: 'system/artifacts/deck.html'
                },
                {
                    kind: 'poster',
                    label: 'Poster',
                    file: 'system/artifacts/poster.html'
                },
                {
                    kind: 'email',
                    label: 'Email',
                    file: 'system/artifacts/email.html'
                },
                {
                    kind: 'newsletter',
                    label: 'Newsletter',
                    file: 'system/artifacts/newsletter.html'
                },
                {
                    kind: 'form',
                    label: 'Form page',
                    file: 'system/artifacts/form.html'
                }
            ]
    }["BrandPreviewCard.useMemo[assetTiles]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewInner} ${compact ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compact : ''}`,
        "data-testid": "brand-preview-card",
        "data-variant": variant,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandLogo, {
                    id: meta.id,
                    host: host,
                    name: name,
                    faviconSize: 128,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverLogo,
                    fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverLogoFallback
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewHead,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewHeadText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewTitleRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewName,
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    needsInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeNeedsInput}`,
                                        role: "status",
                                        children: t('brand.needsInput')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this) : extracting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeBusy}`,
                                        role: "status",
                                        children: t('brand.extracting')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this) : failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeFailed}`,
                                        role: "status",
                                        children: t('brand.failed')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            brand?.tagline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewTagline,
                                children: brand.tagline
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 445,
                                columnNumber: 29
                            }, this) : null,
                            host ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewDomain,
                                href: meta.sourceUrl,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: [
                                    host,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalGlyph, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    compact ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                onClick: _s(()=>{
                                    _s();
                                    return void useInChat();
                                }, "WZSDO6hzlB27AZJ79mC5gt2bwT4=", false, function() {
                                    return [
                                        useInChat
                                    ];
                                }),
                                disabled: actionsDisabled || busy || !meta.designSystemId,
                                "data-testid": "brand-preview-use",
                                children: t('brandDetail.useInChat')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>void openProject(),
                                disabled: actionsDisabled || busy || backingProjectMissing,
                                "data-testid": "brand-preview-open-project",
                                children: t('brandDetail.openProject')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 469,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>void deleteBrand(),
                                disabled: actionsDisabled || busy,
                                "data-testid": "brand-preview-delete",
                                children: t('brandDetail.delete')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            backingProjectMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missingProjectNotice,
                role: "status",
                children: t('project.missing')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this) : null,
            needsInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missingProjectNotice,
                role: "status",
                children: t('brand.needsInputHint')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, this) : null,
            failed && meta.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missingProjectNotice,
                role: "status",
                children: meta.error
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this) : null,
            brand?.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.identity'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.identity')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                        children: brand.description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, this) : null,
            !compact && projectId && activeLogoSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.logo'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.logo')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoStage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoStageImg,
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, activeLogoSrc),
                            alt: name
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, this),
                    logoCandidates.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoThumbs,
                        children: logoCandidates.map((cand, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoThumb} ${i === activeLogo ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoThumbActive : ''}`,
                                onClick: ()=>setActiveLogo(i),
                                "aria-pressed": i === activeLogo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, cand),
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                    lineNumber: 531,
                                    columnNumber: 19
                                }, this)
                            }, cand, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 524,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 522,
                        columnNumber: 13
                    }, this) : null,
                    brand?.logo?.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoNotes,
                        children: brand.logo.notes
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 536,
                        columnNumber: 33
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 516,
                columnNumber: 9
            }, this) : null,
            fonts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.typography'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.typography')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTiles,
                        children: fonts.map(({ font, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTileAg,
                                        style: {
                                            fontFamily: fontStack(font)
                                        },
                                        children: "Ag"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 546,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTileMeta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTileName,
                                                children: font.family
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 550,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontTileRole,
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `tile-${label}-${font.family}`, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 545,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this),
                    compact ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontList,
                        children: fonts.map(({ font, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontItemHead,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontRole,
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 561,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontFamily,
                                                children: [
                                                    font.family,
                                                    font.weights.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontWeights,
                                                        children: [
                                                            " · ",
                                                            font.weights.join('/')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 562,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 560,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontSpecimen,
                                        style: {
                                            fontFamily: fontStack(font)
                                        },
                                        children: label === 'Mono' ? 'const brand = await extract(url);' : name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 569,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, `row-${label}-${font.family}`, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 559,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 557,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this) : null,
            colors.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.palette'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.palette')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paletteGrid,
                        children: colors.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchChip,
                                        style: {
                                            background: c.hex
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchHex,
                                            style: {
                                                color: isLightHex(c.hex) ? 'rgba(0,0,0,.65)' : 'rgba(255,255,255,.9)'
                                            },
                                            children: c.hex
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                            lineNumber: 586,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchName,
                                                children: c.name || c.role
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 594,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchRole,
                                                children: c.role
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            !compact && c.usage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchUsage,
                                                children: c.usage
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 596,
                                                columnNumber: 42
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 593,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${c.role}-${i}`, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, this) : null,
            !compact && (adjectives.length > 0 || tone || pillars.length > 0 || vocabUse.length > 0 || vocabAvoid.length > 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.voiceTone'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.voiceTone')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this),
                    adjectives.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pills,
                        children: adjectives.map((adj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                children: adj
                            }, `${adj}-${i}`, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 615,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 613,
                        columnNumber: 13
                    }, this) : null,
                    tone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aesthetic,
                        children: tone
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 621,
                        columnNumber: 19
                    }, this) : null,
                    pillars.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillars,
                        children: pillars.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: p
                            }, `pillar-${i}`, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 625,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 623,
                        columnNumber: 13
                    }, this) : null,
                    vocabUse.length > 0 || vocabAvoid.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocab,
                        children: [
                            vocabUse.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabCol,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabUse,
                                        children: t('brandDetail.useLabel')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 633,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabVals,
                                        children: vocabUse.join(' · ')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 634,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 632,
                                columnNumber: 17
                            }, this) : null,
                            vocabAvoid.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabCol,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabAvoid,
                                        children: t('brandDetail.avoidLabel')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 639,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vocabVals,
                                        children: vocabAvoid.join(' · ')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 640,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 638,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 630,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 610,
                columnNumber: 9
            }, this) : null,
            !compact && (imagery?.style || (imagery?.subjects?.length ?? 0) > 0 || imagery?.treatment || (imagery?.avoid?.length ?? 0) > 0 || (layout?.postureRules?.length ?? 0) > 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.imageryLayout'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.imageryLayout')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 655,
                        columnNumber: 11
                    }, this),
                    imagery?.style ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                        children: imagery.style
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 656,
                        columnNumber: 29
                    }, this) : null,
                    (imagery?.subjects?.length ?? 0) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryLine,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryKey,
                                children: [
                                    t('brandDetail.subjects'),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 659,
                                columnNumber: 15
                            }, this),
                            ' ',
                            imagery?.subjects.join(', ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 658,
                        columnNumber: 13
                    }, this) : null,
                    imagery?.treatment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryLine,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryKey,
                                children: [
                                    t('brandDetail.treatment'),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 665,
                                columnNumber: 15
                            }, this),
                            ' ',
                            imagery.treatment
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 664,
                        columnNumber: 13
                    }, this) : null,
                    (imagery?.avoid?.length ?? 0) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryLine,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageryKeyAvoid,
                                children: [
                                    t('brandDetail.avoidLabel'),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 671,
                                columnNumber: 15
                            }, this),
                            ' ',
                            imagery?.avoid.join(', ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 670,
                        columnNumber: 13
                    }, this) : null,
                    (layout?.postureRules?.length ?? 0) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posture,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subTitle,
                                children: t('brandDetail.layoutPosture')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 677,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].postureList,
                                children: layout?.postureRules.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: r
                                    }, `posture-${i}`, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 680,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 678,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 676,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 654,
                columnNumber: 9
            }, this) : null,
            !compact && projectId && samples.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.images'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsHead,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: t('brandDetail.images')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            samples.length > IMAGE_CAP ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionAction,
                                onClick: ()=>setImagesExpanded((v)=>!v),
                                children: imagesExpanded ? t('brandDetail.viewLess') : t('brandDetail.viewMore').replace('{count}', String(samples.length))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 693,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 690,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                        children: (imagesExpanded ? samples : samples.slice(0, IMAGE_CAP)).map((s, i)=>{
                            const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, s.file);
                            const cap = s.caption || s.kind || name;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shot,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shotFrame,
                                        onClick: ()=>setLightbox({
                                                src,
                                                caption: cap
                                            }),
                                        "aria-label": cap,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: cap,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                            lineNumber: 716,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 710,
                                        columnNumber: 19
                                    }, this),
                                    s.caption || s.kind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shotMeta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shotCap,
                                                children: s.caption || s.kind
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 720,
                                                columnNumber: 23
                                            }, this),
                                            s.caption && s.kind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shotKind,
                                                children: s.kind
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 722,
                                                columnNumber: 25
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 719,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, `${s.file}-${i}`, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 709,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 689,
                columnNumber: 9
            }, this) : null,
            showSystem && projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.designSystem'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsHead,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: t('brandDetail.designSystem')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 736,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsOpen,
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, 'system/index.html'),
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: [
                                    t('brandDetail.openFullSystem'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalGlyph, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 744,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 735,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsFrameWrap,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTabs,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTab} ${dsTheme === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTabActive : ''}`,
                                                onClick: ()=>setDsTheme('light'),
                                                "aria-pressed": dsTheme === 'light',
                                                children: t('brandDetail.themeLight')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTab} ${dsTheme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTabActive : ''}`,
                                                onClick: ()=>setDsTheme('dark'),
                                                "aria-pressed": dsTheme === 'dark',
                                                children: t('brandDetail.themeDark')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                                lineNumber: 758,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsCap,
                                        children: "system/kit.html"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 748,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsFrame,
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, dsKitFile),
                                loading: "lazy",
                                sandbox: "",
                                title: t('brandDetail.designSystem')
                            }, `${meta.id}:${projectId}:${dsKitFile}`, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 769,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 747,
                        columnNumber: 11
                    }, this),
                    tokens?.colorPrimary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dsTokens,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenChip, {
                                label: "colorPrimary",
                                hex: tokens.colorPrimary
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 780,
                                columnNumber: 15
                            }, this),
                            tokens.colorPrimaryBg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenChip, {
                                label: "colorPrimaryBg",
                                hex: tokens.colorPrimaryBg
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 782,
                                columnNumber: 17
                            }, this) : null,
                            tokens.colorPrimaryHover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenChip, {
                                label: "colorPrimaryHover",
                                hex: tokens.colorPrimaryHover
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 785,
                                columnNumber: 17
                            }, this) : null,
                            tokens.colorPrimaryActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenChip, {
                                label: "colorPrimaryActive",
                                hex: tokens.colorPrimaryActive
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 788,
                                columnNumber: 17
                            }, this) : null,
                            tokens.fontSize != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueChip, {
                                label: "fontSize",
                                value: String(tokens.fontSize)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 791,
                                columnNumber: 17
                            }, this) : null,
                            tokens.borderRadius != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueChip, {
                                label: "borderRadius",
                                value: String(tokens.borderRadius)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 794,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 779,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 734,
                columnNumber: 9
            }, this) : null,
            showSystem && projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                "aria-label": t('brandDetail.brandAssets'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: t('brandDetail.brandAssets')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 803,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assets,
                        children: assetTiles.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].asset,
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, a.file),
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assetFrame,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, a.file),
                                            loading: "lazy",
                                            tabIndex: -1,
                                            "aria-hidden": "true",
                                            sandbox: "",
                                            title: a.label
                                        }, `${meta.id}:${projectId}:${a.file}`, false, {
                                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                            lineNumber: 814,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 813,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assetMeta,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assetName,
                                            children: a.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                            lineNumber: 825,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, a.kind, true, {
                                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                                lineNumber: 806,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 804,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 802,
                columnNumber: 9
            }, this) : null,
            lightbox ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lightbox,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": lightbox.caption,
                onClick: ()=>setLightbox(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lightboxClose,
                        onClick: ()=>setLightbox(null),
                        "aria-label": t('newBrand.close'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseGlyph, {}, void 0, false, {
                            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                            lineNumber: 847,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 841,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lightboxImg,
                        src: lightbox.src,
                        alt: lightbox.caption,
                        onClick: (e)=>e.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 834,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s2(BrandPreviewCard, "ThtEy0abfeO1Sep03Hx7LyGAX30=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        useBrandFonts
    ];
});
_c1 = BrandPreviewCard;
function TokenChip({ label, hex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tok,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokSwatch,
                style: {
                    background: hex
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 864,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokText,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokKey,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 866,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokHex,
                        children: hex
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 865,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 863,
        columnNumber: 5
    }, this);
}
_c2 = TokenChip;
function ValueChip({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tok,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokValue,
                children: value
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 876,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokKey,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
                lineNumber: 877,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 875,
        columnNumber: 5
    }, this);
}
_c3 = ValueChip;
function ExternalGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        width: "11",
        height: "11",
        fill: "none",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 3.5h6.5V10M12.5 3.5L6.5 9.5M9 3.5H4.5a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
            lineNumber: 885,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 884,
        columnNumber: 5
    }, this);
}
_c4 = ExternalGlyph;
function CloseGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "none",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4l8 8M12 4l-8 8",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
            lineNumber: 899,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/BrandPreviewCard.tsx",
        lineNumber: 898,
        columnNumber: 5
    }, this);
}
_c5 = CloseGlyph;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BrandLogo");
__turbopack_context__.k.register(_c1, "BrandPreviewCard");
__turbopack_context__.k.register(_c2, "TokenChip");
__turbopack_context__.k.register(_c3, "ValueChip");
__turbopack_context__.k.register(_c4, "ExternalGlyph");
__turbopack_context__.k.register(_c5, "CloseGlyph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_BrandPreviewCard_tsx_12jj2li._.js.map