(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginPreviewHero",
    ()=>PluginPreviewHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Hero preview surface for the PluginDetailsModal.
//
// Renders example outputs declared in the manifest's
// `od.useCase.exampleOutputs[]` as a sandboxed iframe inside a
// browser-chrome frame, with a tab pill row when more than one
// example exists. The daemon serves each example via
// `/api/plugins/:id/example/:name` with the §9.2 CSP +
// `sandbox="allow-scripts"` envelope, so the preview is safe to
// embed inline. When the plugin ships no examples we render
// nothing (the modal hides the hero entirely).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function PluginPreviewHero({ pluginId, pluginTitle, examples }) {
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginPreviewHero.useMemo[items]": ()=>examples.map({
                "PluginPreviewHero.useMemo[items]": (e, idx)=>normalize(pluginId, e, idx)
            }["PluginPreviewHero.useMemo[items]"])
    }["PluginPreviewHero.useMemo[items]"], [
        pluginId,
        examples
    ]);
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[0]?.key ?? null);
    if (items.length === 0) return null;
    const active = items.find((it)=>it.key === activeKey) ?? items[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugin-details-modal__hero",
        "data-testid": "plugin-details-hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__hero-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__hero-eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__hero-dot",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            "What it produces"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    items.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__hero-tabs",
                        role: "tablist",
                        "aria-label": "Example outputs",
                        children: items.map((it)=>{
                            const isActive = it.key === active.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": isActive,
                                className: `plugin-details-modal__hero-tab${isActive ? ' is-active' : ''}`,
                                onClick: ()=>setActiveKey(it.key),
                                children: it.name
                            }, it.key, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__hero-frame",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__hero-chrome",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__hero-light is-red",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__hero-light is-yellow",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__hero-light is-green",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__hero-url",
                                title: active.name,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "eye",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: active.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "plugin-details-modal__hero-popout",
                                href: active.href,
                                target: "_blank",
                                rel: "noreferrer",
                                title: "Open this example in a new tab",
                                "data-testid": "plugin-details-hero-popout",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "external-link",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: `${pluginTitle} — ${active.name}`,
                        src: active.href,
                        sandbox: "allow-scripts",
                        loading: "lazy",
                        className: "plugin-details-modal__hero-iframe",
                        "data-testid": "plugin-details-hero-iframe"
                    }, active.key, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(PluginPreviewHero, "MBsnoMDCQ/4WnjavIgIY6dWFUH4=");
_c = PluginPreviewHero;
function normalize(pluginId, entry, index) {
    const segments = entry.path.split(/[\\/]/).filter(Boolean);
    const base = segments[segments.length - 1] ?? `${index}`;
    const stem = base.replace(/\.[^.]+$/, '');
    const name = entry.title ?? stem;
    const href = `/api/plugins/${encodeURIComponent(pluginId)}/example/${encodeURIComponent(stem)}`;
    return {
        key: `${entry.path}-${index}`,
        name,
        stem,
        href
    };
}
var _c;
__turbopack_context__.k.register(_c, "PluginPreviewHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginMetaSections",
    ()=>PluginMetaSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Plugin metadata sections — the manifest-driven inspector body that
// every detail variant (scenario / media / html / design-system)
// renders alongside its kind-specific hero.
//
// Surfaces every plugin-common field a user might want to inspect
// before applying:
//
//   - About            (description; optional, parents hide when
//                       the header / subtitle already shows it)
//   - Example query    (the prompt body; optional, hidden by media
//                       variants that already render it inline)
//   - Inputs           (declared variables + types + defaults)
//   - Context bundles  (skills, design system, craft, atoms, MCP,
//                       claude plugins)
//   - Workflow         (pipeline stages + atoms)
//   - GenUI surfaces   (interactive prompts the plugin may surface)
//   - Connectors       (required + optional)
//   - Capabilities     (granted permissions)
//   - Source           (origin, fs path, ref, marketplace id,
//                       installed timestamp, contribute link)
//
// Variants that already show a field through their hero/header pass
// it through `omit` so the body never duplicates information the
// user is already looking at.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TrustBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$plugin$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/plugin-source.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function PluginMetaSections({ record, omit, compact, heading, variant = 'full' }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const manifest = record.manifest ?? {};
    const specVersion = typeof manifest.specVersion === 'string' ? manifest.specVersion : '';
    const od = manifest.od ?? {};
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(od.useCase?.query);
    const inputs = od.inputs ?? [];
    const ctx = od.context ?? {};
    const stages = od.pipeline?.stages ?? [];
    const surfaces = od.genui?.surfaces ?? [];
    const required = od.connectors?.required ?? [];
    const optional = od.connectors?.optional ?? [];
    const capabilities = od.capabilities ?? [];
    const hasContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginMetaSections.useMemo[hasContext]": ()=>{
            if (!ctx) return false;
            return Boolean(ctx.skills && ctx.skills.length > 0 || ctx.designSystem || ctx.craft && ctx.craft.length > 0 || ctx.assets && ctx.assets.length > 0 || ctx.mcp && ctx.mcp.length > 0 || ctx.atoms && ctx.atoms.length > 0 || ctx.claudePlugins && ctx.claudePlugins.length > 0);
        }
    }["PluginMetaSections.useMemo[hasContext]"], [
        ctx
    ]);
    function copyQuery() {
        if (!query) return;
        void navigator.clipboard.writeText(query).then(()=>{
            setCopied(true);
            window.setTimeout(()=>setCopied(false), 1500);
        });
    }
    function refLabel(r) {
        return r.ref ?? r.path ?? '';
    }
    function formattedInstalledAt() {
        try {
            return new Date(record.installedAt).toLocaleString();
        } catch  {
            return String(record.installedAt);
        }
    }
    const installedLabel = formattedInstalledAt();
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginMetaSections.useMemo[links]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$plugin$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivePluginSourceLinks"])(record)
    }["PluginMetaSections.useMemo[links]"], [
        record
    ]);
    const hasAuthorBlock = Boolean(links.authorName || links.authorProfileUrl || links.homepageUrl);
    const showDescription = !omit?.description && Boolean(description);
    const showQuery = !omit?.query && Boolean(query);
    const showInputs = !omit?.inputs && inputs.length > 0;
    const wrapperClass = `plugin-meta-sections${compact ? ' is-compact' : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        "data-testid": "plugin-meta-sections",
        children: [
            heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "plugin-meta-sections__heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugin-meta-sections__heading-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "v",
                                    record.version
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                trust: record.trust
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            record.sourceKind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: record.sourceKind
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this) : null,
            !omit?.byline && hasAuthorBlock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Author",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugin-details-modal__byline",
                    "data-testid": "plugin-details-author",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorAvatar, {
                            name: links.authorName,
                            avatarUrl: links.authorAvatarUrl
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plugin-details-modal__byline-meta",
                            children: [
                                links.authorName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__byline-name",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__byline-prefix",
                                            children: "by"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__author-name",
                                            children: links.authorName
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__byline-links",
                                    children: [
                                        links.authorProfileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                            href: links.authorProfileUrl,
                                            icon: "github",
                                            testId: "plugin-details-author-profile",
                                            children: githubProfileLabel(links.authorProfileUrl)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this) : null,
                                        links.homepageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                            href: links.homepageUrl,
                                            icon: "external-link",
                                            testId: "plugin-details-author-homepage",
                                            children: "Homepage"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this) : null,
            showDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "About",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "plugin-details-modal__description",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this) : null,
            showQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Example query",
                hint: "Inserted into the prompt textarea when you apply this plugin.",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "plugin-details-modal__chip-btn",
                    onClick: copyQuery,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "copy",
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this),
                        copied ? 'Copied' : 'Copy'
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                    lineNumber: 218,
                    columnNumber: 13
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "plugin-details-modal__query",
                    children: query
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this) : null,
            ((advanced)=>variant === 'minimal' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "plugin-meta-sections__advanced",
                    "data-testid": "plugin-meta-advanced",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "plugin-meta-sections__advanced-summary",
                            children: "Developer details"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        advanced
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this) : advanced)(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    showInputs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Inputs",
                        count: inputs.length,
                        hint: "Variables substituted into the example query at apply time.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "plugin-details-modal__inputs",
                            children: inputs.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "plugin-details-modal__input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__input-head",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: field.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                field.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__badge is-required",
                                                    children: "required"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this) : null,
                                                field.type ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__badge is-type",
                                                    children: field.type
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        field.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__muted",
                                            children: field.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this) : null,
                                        field.placeholder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__muted plugin-details-modal__small",
                                            children: [
                                                "e.g. ",
                                                field.placeholder
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this) : null,
                                        field.options && field.options.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__chips plugin-details-modal__chips--inline",
                                            children: field.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__chip",
                                                    children: opt
                                                }, opt, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this) : null,
                                        field.default !== undefined && field.default !== null && String(field.default).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__muted plugin-details-modal__small",
                                            children: [
                                                "default: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: String(field.default)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, field.name, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this) : null,
                    hasContext ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Context bundles",
                        hint: "Skills, design systems, MCP servers and other refs the plugin will pull in at apply time.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plugin-details-modal__context",
                            children: [
                                ctx.skills && ctx.skills.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Skills",
                                    count: ctx.skills.length,
                                    children: ctx.skills.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip",
                                            children: refLabel(s)
                                        }, `skill-${i}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.designSystem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Design system",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "plugin-details-modal__chip",
                                        children: [
                                            refLabel(ctx.designSystem),
                                            ctx.designSystem.primary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "plugin-details-modal__badge is-primary",
                                                children: "primary"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 319,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.craft && ctx.craft.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Craft",
                                    count: ctx.craft.length,
                                    children: ctx.craft.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip",
                                            children: c
                                        }, `craft-${c}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.atoms && ctx.atoms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Atoms",
                                    count: ctx.atoms.length,
                                    children: ctx.atoms.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip",
                                            children: a
                                        }, `atom-${a}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 338,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.assets && ctx.assets.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Assets",
                                    count: ctx.assets.length,
                                    children: ctx.assets.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip plugin-details-modal__chip--mono",
                                            children: a
                                        }, `asset-${a}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.mcp && ctx.mcp.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "MCP servers",
                                    count: ctx.mcp.length,
                                    children: ctx.mcp.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip",
                                            children: m.name
                                        }, `mcp-${m.name}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this) : null,
                                ctx.claudePlugins && ctx.claudePlugins.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextGroup, {
                                    label: "Claude plugins",
                                    count: ctx.claudePlugins.length,
                                    children: ctx.claudePlugins.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "plugin-details-modal__chip",
                                            children: refLabel(p)
                                        }, `cp-${i}`, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this) : null,
                    stages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Workflow",
                        count: stages.length,
                        hint: "Pipeline stages run in order. Atoms inside a stage run sequentially unless the stage repeats.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "plugin-details-modal__stages",
                            children: stages.map((stage, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "plugin-details-modal__stage",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__stage-head",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__stage-num",
                                                    children: idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "plugin-details-modal__stage-id",
                                                    children: stage.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                stage.repeat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__badge is-repeat",
                                                    children: "repeat"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, this) : null,
                                                stage.onFailure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__badge is-failure",
                                                    children: [
                                                        "on failure: ",
                                                        stage.onFailure
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this),
                                        stage.atoms && stage.atoms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__stage-atoms",
                                            children: stage.atoms.map((atom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "plugin-details-modal__atom",
                                                    children: atom
                                                }, `${stage.id}-${atom}`, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 405,
                                            columnNumber: 19
                                        }, this) : null,
                                        stage.until ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__muted plugin-details-modal__small",
                                            children: [
                                                "until: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: stage.until
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, `${stage.id}-${idx}`, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this) : null,
                    surfaces.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "GenUI surfaces",
                        count: surfaces.length,
                        hint: "Interactive prompts the plugin may surface during a run.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "plugin-details-modal__surfaces",
                            children: surfaces.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "plugin-details-modal__surface",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__surface-head",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: s.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__badge is-type",
                                                    children: s.kind
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this),
                                                s.persist ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__muted plugin-details-modal__small",
                                                    children: [
                                                        "persists at ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: s.persist
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this),
                                        s.prompt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__surface-prompt",
                                            children: [
                                                "“",
                                                s.prompt,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 435,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this) : null,
                    required.length > 0 || optional.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Connectors",
                        children: [
                            required.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorList, {
                                label: "Required",
                                items: required,
                                variant: "required"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this) : null,
                            optional.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorList, {
                                label: "Optional",
                                items: optional,
                                variant: "optional"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this) : null,
                    capabilities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Capabilities",
                        count: capabilities.length,
                        hint: "Permissions the plugin requests when applied.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plugin-details-modal__caps",
                            children: capabilities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "plugin-details-modal__atom is-cap",
                                    children: c
                                }, c, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Source",
                        action: links.contributeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "plugin-details-modal__chip-btn",
                            href: links.contributeUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            "data-testid": "plugin-details-contribute",
                            title: links.contributeOnGithub ? 'Open an issue on GitHub' : 'Open the contribute page',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: links.contributeOnGithub ? 'github' : 'external-link',
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                "Contribute"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this) : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "plugin-details-modal__source",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Origin"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 512,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "plugin-details-modal__source-kind",
                                                    children: links.sourceKindLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 15
                                                }, this),
                                                links.sourceUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                                    href: links.sourceUrl,
                                                    icon: record.sourceKind === 'github' ? 'github' : 'external-link',
                                                    testId: "plugin-details-source-link",
                                                    children: links.sourceLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: links.sourceLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 513,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 511,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Path"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 533,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: record.fsPath
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 535,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 534,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 532,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Version"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 539,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: [
                                                    "v",
                                                    record.version
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 540,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 538,
                                    columnNumber: 11
                                }, this),
                                specVersion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Spec"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: [
                                                    "v",
                                                    specVersion
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Trust"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 553,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                                trust: record.trust
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 555,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 554,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 552,
                                    columnNumber: 11
                                }, this),
                                record.pinnedRef ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Pinned ref"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: record.pinnedRef
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 562,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this) : null,
                                record.sourceMarketplaceId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Marketplace ID"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: record.sourceMarketplaceId
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this) : null,
                                manifest.license ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "License"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: manifest.license
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Installed"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 583,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: installedLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                            lineNumber: 584,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                    lineNumber: 582,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                            lineNumber: 510,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 485,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(PluginMetaSections, "DJXsUFeRpTkmDZ3qz5boG9SLDEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c = PluginMetaSections;
function Section({ title, count, hint, action, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugin-details-modal__section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__section-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "plugin-details-modal__section-title",
                        children: [
                            title,
                            typeof count === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__section-count",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 609,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__section-action",
                        children: action
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "plugin-details-modal__section-hint",
                children: hint
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 617,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__section-body",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 604,
        columnNumber: 5
    }, this);
}
_c1 = Section;
function ContextGroup({ label, count, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-details-modal__ctx-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__ctx-label",
                children: [
                    label,
                    typeof count === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugin-details-modal__ctx-count",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 636,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__chips",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 632,
        columnNumber: 5
    }, this);
}
_c2 = ContextGroup;
function AuthorAvatar({ name, avatarUrl }) {
    _s1();
    const [broken, setBroken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (avatarUrl && !broken) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "plugin-details-modal__avatar",
            src: avatarUrl,
            alt: name ? `${name} avatar` : 'Author avatar',
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: ()=>setBroken(true)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
            lineNumber: 653,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "plugin-details-modal__avatar plugin-details-modal__avatar--fallback",
        "aria-hidden": true,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$plugin$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorInitials"])(name)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 664,
        columnNumber: 5
    }, this);
}
_s1(AuthorAvatar, "wVCH4vDNG5sG9XLLwmSRdZx6Srg=");
_c3 = AuthorAvatar;
function ExternalLink({ href, icon, children, testId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "plugin-details-modal__ext-link",
        href: href,
        target: "_blank",
        rel: "noreferrer",
        "data-testid": testId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                size: 12
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 690,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 682,
        columnNumber: 5
    }, this);
}
_c4 = ExternalLink;
function githubProfileLabel(url) {
    try {
        const parsed = new URL(url);
        if (/^(?:www\.)?github\.com$/.test(parsed.hostname)) {
            const segments = parsed.pathname.split('/').filter(Boolean);
            if (segments.length >= 2) return `${segments[0]}/${segments[1].replace(/\.git$/, '')}`;
            if (segments.length === 1) return `@${segments[0]}`;
        }
        return parsed.hostname + parsed.pathname.replace(/\/$/, '');
    } catch  {
        return url;
    }
}
function ConnectorList({ label, items, variant }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-details-modal__connector-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "plugin-details-modal__sub-title",
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `plugin-details-modal__badge is-${variant}`,
                        children: items.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 720,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "plugin-details-modal__connectors",
                children: items.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "plugin-details-modal__connector",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: c.id
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this),
                            c.tools && c.tools.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-details-modal__muted plugin-details-modal__small",
                                children: [
                                    "· ",
                                    c.tools.join(', ')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                                lineNumber: 732,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, `${variant}-${c.id}`, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                        lineNumber: 726,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
                lineNumber: 724,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx",
        lineNumber: 717,
        columnNumber: 5
    }, this);
}
_c5 = ConnectorList;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "PluginMetaSections");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "ContextGroup");
__turbopack_context__.k.register(_c3, "AuthorAvatar");
__turbopack_context__.k.register(_c4, "ExternalLink");
__turbopack_context__.k.register(_c5, "ConnectorList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginShareMenu",
    ()=>PluginShareMenu,
    "buildPluginShareUrl",
    ()=>buildPluginShareUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Plugin-specific detail actions.
//
// Surfaces the small set of actions a user wants when they need to install,
// identify, audit, or embed a plugin:
//
//   - Copy plugin id          (raw `<id>` for paste-into-yaml)
//   - Copy install command    (`od plugin install <ref>`)
//   - Copy README badge       (Open Design powered, includes link)
//   - Open source on GitHub   (when the source is a github repo)
//   - Open homepage           (when manifest.homepage is set)
//   - Open in marketplace     (always — the canonical detail page)
//
// We render the popover next to the template Share control in every
// detail variant header so plugin-specific actions stay available without
// competing with the user's primary "share this template" intent. A tiny inline
// toast confirms every copy action so the user trusts the click landed.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$plugin$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/plugin-source.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const PUBLIC_OPEN_DESIGN_MARKETPLACE_ID = 'official';
const PUBLIC_COMMUNITY_MARKETPLACE_ID = 'community';
function buildInstallCommand(record) {
    // The daemon's install resolver accepts the raw `record.source`
    // shape for every kind (github:owner/repo[@ref][/sub], https URL,
    // local path, marketplace id), so we mirror it verbatim. For
    // marketplace records should use the registry entry name when
    // provenance preserved it; sourceMarketplaceId names the catalog,
    // not the plugin package.
    if (typeof record.sourceMarketplaceEntryName === 'string') {
        return `od plugin install ${record.sourceMarketplaceEntryName}`;
    }
    if (record.sourceKind === 'marketplace' && typeof record.sourceMarketplaceId === 'string') {
        return `od plugin install ${record.sourceMarketplaceId}`;
    }
    return `od plugin install ${record.source}`;
}
function buildPluginShareUrl(record) {
    // Only plugins with a public detail page on open-design.ai get a shareable
    // link: bundled (`_official`) plugins and ones installed from the official
    // or community marketplace. Local/github installs have no public page, so
    // no link — never leak a local tools-dev origin (127.0.0.1:<port>).
    const hasPublicPage = record.sourceKind === 'bundled' || record.sourceMarketplaceId === PUBLIC_OPEN_DESIGN_MARKETPLACE_ID || record.sourceMarketplaceId === PUBLIC_COMMUNITY_MARKETPLACE_ID;
    if (!hasPublicPage) return null;
    // Community marketplace entry names use the `community/<folder>` path form
    // (e.g. `community/registry-starter`). pluginDetailSlug takes the last
    // slash-separated segment, producing `registry-starter` — the same
    // single-segment slug the landing page emits via routeId. Community plugin
    // manifest names carry a `community-` prefix, so using them directly would
    // produce a mismatched slug (`community-registry-starter`).
    const id = record.sourceMarketplaceId === PUBLIC_COMMUNITY_MARKETPLACE_ID && typeof record.sourceMarketplaceEntryName === 'string' ? record.sourceMarketplaceEntryName : record.manifest?.name ?? record.id;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginShareUrl"])(id);
}
function buildPluginMarketplacePath(record) {
    return `/marketplace/${encodeURIComponent(record.id)}`;
}
function buildMarkdownBadge(record, url) {
    return `[![${record.title} — Open Design plugin](https://img.shields.io/badge/Open%20Design-${encodeURIComponent(record.title)}-d65a31?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2C)](${url})`;
}
function PluginShareMenu({ record, variant = 'default' }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyFeedback, setCopyFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$plugin$2d$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivePluginSourceLinks"])(record);
    const publicShareUrl = buildPluginShareUrl(record);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginShareMenu.useEffect": ()=>{
            if (!open) return;
            const onDoc = {
                "PluginShareMenu.useEffect.onDoc": (e)=>{
                    if (!wrapRef.current) return;
                    if (!wrapRef.current.contains(e.target)) setOpen(false);
                }
            }["PluginShareMenu.useEffect.onDoc"];
            const onKey = {
                "PluginShareMenu.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') setOpen(false);
                }
            }["PluginShareMenu.useEffect.onKey"];
            document.addEventListener('mousedown', onDoc);
            document.addEventListener('keydown', onKey);
            return ({
                "PluginShareMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', onDoc);
                    document.removeEventListener('keydown', onKey);
                }
            })["PluginShareMenu.useEffect"];
        }
    }["PluginShareMenu.useEffect"], [
        open
    ]);
    async function copyPluginShareText(text, key) {
        if (!text) return;
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(text);
        setCopyFeedback({
            key,
            ok
        });
        window.setTimeout(()=>{
            setCopyFeedback((current)=>current?.key === key ? null : current);
        }, 1600);
    }
    const items = [
        {
            key: 'install',
            label: t('plugins.actions.copyInstallCommand'),
            icon: 'copy',
            copies: true,
            onSelect: ()=>copyPluginShareText(buildInstallCommand(record), 'install')
        },
        {
            key: 'id',
            label: t('plugins.actions.copyPluginId'),
            icon: 'copy',
            copies: true,
            onSelect: ()=>copyPluginShareText(record.id, 'id')
        }
    ];
    if (publicShareUrl) {
        items.push({
            key: 'badge',
            label: t('plugins.actions.copyReadmeBadge'),
            icon: 'copy',
            copies: true,
            onSelect: ()=>copyPluginShareText(buildMarkdownBadge(record, publicShareUrl), 'badge')
        });
    }
    // Open-in-tab actions are real anchors so users can right-click,
    // copy the link address, or open in a new tab from browser chrome.
    const openItems = [];
    if (links.sourceUrl) {
        openItems.push({
            key: 'source',
            label: record.sourceKind === 'github' || links.sourceUrl.includes('github.com/') ? t('plugins.actions.openSourceGithub') : t('plugins.actions.openSource'),
            icon: links.sourceUrl.includes('github.com/') ? 'github' : 'external-link',
            href: links.sourceUrl
        });
    }
    if (links.homepageUrl) {
        openItems.push({
            key: 'homepage',
            label: t('plugins.actions.openHomepage'),
            icon: 'external-link',
            href: links.homepageUrl
        });
    }
    openItems.push({
        key: 'marketplace',
        label: t('plugins.actions.openMarketplace'),
        icon: 'eye',
        // Prefer the public open-design.ai detail page; fall back to the in-app
        // /marketplace route only for local/github installs with no public page.
        href: publicShareUrl ?? buildPluginMarketplacePath(record)
    });
    const triggerClass = variant === 'inline' ? 'ghost plugin-share-trigger' : 'plugin-share-trigger plugin-share-trigger--solo';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-share-menu",
        ref: wrapRef,
        "data-testid": `plugin-share-${record.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: triggerClass,
                "aria-haspopup": "menu",
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                title: t('designs.menuMore'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "more-horizontal",
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('homeHero.moreShortcuts')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-share-popover",
                role: "menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-share-popover__group",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "menuitem",
                                className: "plugin-share-item",
                                onClick: ()=>void item.onSelect(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: copyFeedback?.key === item.key ? copyFeedback.ok ? 'check' : 'close' : item.icon,
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: copyFeedback?.key === item.key ? copyFeedback.ok ? t('preview.shareCopied') : t('preview.shareCopyFailed') : item.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-share-popover__divider"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-share-popover__group",
                        children: openItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                role: "menuitem",
                                className: "plugin-share-item",
                                href: item.href,
                                target: "_blank",
                                rel: "noreferrer",
                                onClick: ()=>setOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: item.icon,
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(PluginShareMenu, "RYWJ/aU2WGmMjKptQs53ecnKAJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = PluginShareMenu;
var _c;
__turbopack_context__.k.register(_c, "PluginShareMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/pluginUseMenu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared builder for the plugin detail modal's "Use plugin" split-button
// menu. Mirrors the home plugin-card use-menu (`plugins-home/PluginCard`):
// when a plugin ships an `od.useCase.query`, the primary CTA grows a caret
// that offers two variants (replicate-content first) —
//   • "Use with query"  → attach the chip AND load the example prompt into
//                          the composer (action 'use-with-query')
//   • "Use plugin"      → attach the plugin chip only (action 'use')
// Plugins without a usable query keep the plain single-action button, so the
// menu is `undefined` in that case.
__turbopack_context__.s([
    "buildPluginUseMenu",
    ()=>buildPluginUseMenu,
    "pluginUsePrimaryAction",
    ()=>pluginUsePrimaryAction
]);
function pluginUsePrimaryAction(record, t) {
    const hasQuery = Boolean(record.manifest?.od?.useCase?.query);
    return hasQuery ? {
        label: t('preview.replicateContent'),
        action: 'use-with-query'
    } : {
        label: t('preview.usePlugin'),
        action: 'use'
    };
}
function buildPluginUseMenu(record, onUse, t) {
    const hasQuery = Boolean(record.manifest?.od?.useCase?.query);
    if (!hasQuery) return undefined;
    // Replicate-content leads: the menu only exists when the plugin ships an
    // example query, and reproducing the previewed result is what most users
    // open it for — structure-only use is the secondary path.
    return [
        {
            label: t('preview.replicateContent'),
            description: t('preview.replicateContentDesc'),
            onClick: ()=>onUse(record, 'use-with-query'),
            testId: `plugin-details-use-with-query-${record.id}`
        },
        {
            label: t('preview.usePluginOnly'),
            description: t('preview.usePluginOnlyDesc'),
            onClick: ()=>onUse(record, 'use'),
            testId: `plugin-details-use-option-${record.id}`
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginScenarioDetail",
    ()=>PluginScenarioDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Inspector-style detail surface for plain scenario plugins.
//
// Used as the fallback when `inferPluginPreview` returns `text` —
// the plugin ships no image/video poster, no runnable HTML preview,
// and no design-system signal. The body delegates to
// `PluginMetaSections` so the same manifest-driven inspector surface
// is reused by every other variant; this file owns the modal shell
// (backdrop, header, byline, hero, footer with Use plugin CTA).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TrustBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginPreviewHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginPreviewHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/pluginUseMenu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function PluginScenarioDetail({ record, onClose, onUse, isApplying, hideUseAction }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The text/scenario fallback modal gets the same split "Use plugin /
    // Replicate this content" affordance as the HTML/design/media variants, so a
    // scenario plugin with an `od.useCase.query` still offers use-with-query.
    const useMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginUseMenu"])(record, onUse, t);
    const [useMenuOpen, setUseMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const useMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginScenarioDetail.useEffect": ()=>{
            if (!useMenuOpen) return;
            const onDoc = {
                "PluginScenarioDetail.useEffect.onDoc": (e)=>{
                    if (!useMenuRef.current?.contains(e.target)) setUseMenuOpen(false);
                }
            }["PluginScenarioDetail.useEffect.onDoc"];
            document.addEventListener('mousedown', onDoc);
            return ({
                "PluginScenarioDetail.useEffect": ()=>document.removeEventListener('mousedown', onDoc)
            })["PluginScenarioDetail.useEffect"];
        }
    }["PluginScenarioDetail.useEffect"], [
        useMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginScenarioDetail.useEffect": ()=>{
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return ({
                "PluginScenarioDetail.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["PluginScenarioDetail.useEffect"];
        }
    }["PluginScenarioDetail.useEffect"], []);
    // Move focus to the close button on mount so keyboard users land
    // somewhere sensible without trapping them inside the long body.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginScenarioDetail.useEffect": ()=>{
            closeRef.current?.focus();
        }
    }["PluginScenarioDetail.useEffect"], []);
    const manifest = record.manifest ?? {};
    const od = manifest.od ?? {};
    const examples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginScenarioDetail.useMemo[examples]": ()=>od.useCase?.exampleOutputs ?? []
    }["PluginScenarioDetail.useMemo[examples]"], [
        od.useCase?.exampleOutputs
    ]);
    const tags = manifest.tags ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        backdropClassName: "plugin-details-modal-backdrop",
        className: "plugin-details-modal",
        includeChromeClassName: false,
        ariaLabel: `${record.title} details`,
        onClose: onClose,
        closeOnEscape: true,
        "data-testid": "plugin-details-modal",
        "data-plugin-id": record.id,
        "data-detail-variant": "scenario",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "plugin-details-modal__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__head-titles",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__head-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "plugin-details-modal__title",
                                        children: record.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                        trust: record.trust
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "v",
                                            record.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    od.taskKind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "· ",
                                            od.taskKind
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 100,
                                        columnNumber: 30
                                    }, this) : null,
                                    od.kind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "· ",
                                            od.kind
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 101,
                                        columnNumber: 26
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "· ",
                                            record.sourceKind
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    tags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "plugin-details-modal__meta-tags",
                                        children: tags.slice(0, 4).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "plugin-details-modal__tag",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__head-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginShareMenu"], {
                                record: record,
                                variant: "default"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: closeRef,
                                type: "button",
                                className: "plugin-details-modal__close",
                                onClick: onClose,
                                "aria-label": "Close details",
                                title: "Close (Esc)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__body",
                children: [
                    examples.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginPreviewHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginPreviewHero"], {
                        pluginId: record.id,
                        pluginTitle: record.title,
                        examples: examples
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginMetaSections"], {
                        record: record
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "plugin-details-modal__foot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "plugin-details-modal__secondary",
                        onClick: onClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    hideUseAction ? null : useMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-details-modal__use-split",
                        ref: useMenuRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugin-details-modal__primary plugin-details-modal__use-main",
                                onClick: ()=>onUse(record, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).action),
                                disabled: isApplying,
                                "aria-busy": isApplying ? 'true' : undefined,
                                "data-testid": `plugin-details-use-${record.id}`,
                                children: isApplying ? 'Applying…' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugin-details-modal__primary plugin-details-modal__use-caret",
                                onClick: ()=>setUseMenuOpen((v)=>!v),
                                disabled: isApplying,
                                "aria-haspopup": "menu",
                                "aria-expanded": useMenuOpen,
                                "aria-label": `More ways to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).label}`,
                                "data-testid": `plugin-details-use-${record.id}-menu`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-down",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            useMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__use-menu",
                                role: "menu",
                                children: useMenu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        className: "plugin-details-modal__use-menu-item",
                                        onMouseDown: (e)=>e.preventDefault(),
                                        onClick: ()=>{
                                            setUseMenuOpen(false);
                                            item.onClick();
                                        },
                                        ...item.testId ? {
                                            'data-testid': item.testId
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "plugin-details-modal__use-menu-label",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                                lineNumber: 188,
                                                columnNumber: 23
                                            }, this),
                                            item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "plugin-details-modal__use-menu-desc",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                                lineNumber: 192,
                                                columnNumber: 25
                                            }, this) : null
                                        ]
                                    }, item.testId ?? `${item.label}-${index}`, true, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                        lineNumber: 176,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "plugin-details-modal__primary",
                        onClick: ()=>onUse(record, 'use'),
                        disabled: isApplying,
                        "aria-busy": isApplying ? 'true' : undefined,
                        "data-testid": `plugin-details-use-${record.id}`,
                        children: isApplying ? 'Applying…' : t('preview.usePlugin')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginScenarioDetail.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(PluginScenarioDetail, "Eiw2Z5nK8JGk/BKm9IaPFp6cOq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c = PluginScenarioDetail;
var _c;
__turbopack_context__.k.register(_c, "PluginScenarioDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginExampleDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginExampleDetail",
    ()=>PluginExampleDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// HTML-preview detail surface for plugins that ship a runnable
// `od.preview` entry or example output (the same surface ExamplesTab
// uses for skill cards). Wraps the shared PreviewModal so the user
// gets the full chrome — sandboxed iframe, Fullscreen, merged Share menu —
// plus a primary
// "Use plugin" action that routes through the home applyPlugin flow.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/pluginUseMenu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function PluginExampleDetail({ record, exampleStem, onClose, onUse, isApplying, hideUseAction, onSharePopoverItemClick }) {
    _s();
    const { t, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const localizedTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, record);
    const [html, setHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unavailableKind, setUnavailableKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PluginExampleDetail.useCallback[load]": async ()=>{
            if (inFlightRef.current) return;
            inFlightRef.current = true;
            try {
                setHtml(null);
                setError(null);
                setUnavailableKind(null);
                const result = exampleStem ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPluginExampleHtml"])(record.id, exampleStem) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPluginPreviewHtml"])(record.id);
                if ('html' in result) {
                    setHtml(result.html);
                } else if ('error' in result) {
                    setError(result.error);
                    setHtml(undefined);
                } else {
                    // unavailable: the plugin's manifest declares no shipped
                    // preview entry (or the daemon 404s on its /preview path —
                    // common for bundled plugins like example-live-artifact whose
                    // manifest references an example file that doesn't ship).
                    // Forward to PreviewModal as a typed unavailable view so it
                    // renders the calm "no shipped preview" placeholder instead
                    // of the misleading "Couldn't load this example." error. The
                    // skill helper has had this treatment since #897; the plugin
                    // helper gained it later — keep both consumers in lockstep.
                    setUnavailableKind(result.kind);
                    setHtml(undefined);
                }
            } finally{
                inFlightRef.current = false;
            }
        }
    }["PluginExampleDetail.useCallback[load]"], [
        record.id,
        exampleStem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginExampleDetail.useEffect": ()=>{
            void load();
        }
    }["PluginExampleDetail.useEffect"], [
        load
    ]);
    // Stable identity for PreviewModal's onView so its mount-time
    // effect doesn't re-fire on every render.
    const onView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PluginExampleDetail.useCallback[onView]": ()=>{
            void load();
        }
    }["PluginExampleDetail.useCallback[onView]"], [
        load
    ]);
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record);
    const isDeck = record.manifest?.od?.mode === 'deck';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewModal"], {
        title: localizedTitle,
        subtitle: description || undefined,
        views: [
            {
                id: 'preview',
                label: t('examples.previewLabel'),
                html,
                error,
                // Pass the surface-appropriate noun so the unavailable placeholder
                // reads "this plugin" / "this template" instead of falling back to
                // the legacy skills-only "this skill" copy. Issue #3216.
                unavailable: unavailableKind ? {
                    kind: unavailableKind,
                    noun: isDeck ? 'template' : 'plugin'
                } : null,
                deck: isDeck
            }
        ],
        onView: onView,
        exportTitleFor: ()=>localizedTitle,
        shareTarget: {
            title: localizedTitle,
            description: description || undefined,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginShareUrl"])(record)
        },
        onClose: onClose,
        sidebar: {
            // Surface every plugin-common manifest field — workflow, context
            // bundles, connectors, file paths, source provenance — alongside
            // the rendered HTML preview. Designers are the primary audience
            // here, so the sidebar starts COLLAPSED — the preview is the
            // hero and gets the full stage by default — and when opened it
            // shows a designer-first slice (author + example query) with the
            // developer manifest detail tucked behind a "Developer details"
            // disclosure (variant="minimal"). Fullscreen still gives an
            // immersive view when needed.
            label: 'Plugin info',
            defaultOpen: false,
            contentKey: record.id,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-info-pane",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginMetaSections"], {
                    record: record,
                    omit: {
                        description: true
                    },
                    compact: true,
                    heading: "Plugin info",
                    variant: "minimal"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginExampleDetail.tsx",
                    lineNumber: 139,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginExampleDetail.tsx",
                lineNumber: 138,
                columnNumber: 11
            }, this)
        },
        primaryAction: hideUseAction ? undefined : {
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).label,
            onClick: ()=>onUse(record, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).action),
            busy: !!isApplying,
            busyLabel: 'Applying…',
            testId: `plugin-details-use-${record.id}`,
            menu: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginUseMenu"])(record, onUse, t)
        },
        hideSidebarToggle: true,
        onSharePopoverItemClick: onSharePopoverItemClick
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginExampleDetail.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(PluginExampleDetail, "y4CYQBuvv6oYh+AJu0YR6Mx/9vs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c = PluginExampleDetail;
var _c;
__turbopack_context__.k.register(_c, "PluginExampleDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginDesignSystemDetail",
    ()=>PluginDesignSystemDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Design-system detail surface for plugins that ship as part of the
// design-systems family. Mirrors the existing DesignSystemPreviewModal:
//
//   - Showcase tab — the marketing-style HTML page rendered from the
//     referenced design system (`/api/design-systems/:slug/showcase`)
//   - Tokens tab   — the palette / typography / components inspector
//     (`/api/design-systems/:slug/preview`)
//   - Plugin info sidebar — manifest metadata first, with the raw
//     DESIGN.md spec included as a section underneath
//     (`/api/plugins/:id/asset/DESIGN.md`)
//
// Falls back gracefully when the plugin does not reference an
// upstream design system (some bundles ship DESIGN.md only): the
// tabs collapse and the modal renders the spec sidebar by default.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSpecView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSpecView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/pluginUseMenu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function designSystemRef(record) {
    const ds = record.manifest?.od?.context?.designSystem;
    if (!ds) return null;
    if (typeof ds.ref === 'string' && ds.ref.length > 0) return ds.ref;
    return null;
}
function specAssetPath(record) {
    // Most design-system plugins ship `DESIGN.md` at the bundle root,
    // but `od.context.assets[0]` may point at a different relpath when
    // the bundle has co-located docs. Prefer the assets entry when it
    // smells like a markdown spec; otherwise fall back to the canonical
    // filename so the sidebar still has something to load.
    const assets = record.manifest?.od?.context?.assets ?? [];
    const md = assets.find((a)=>/\.md$/i.test(a));
    return md ?? './DESIGN.md';
}
function PluginDesignSystemDetail({ record, onClose, onUse, isApplying, hideUseAction, onSharePopoverItemClick }) {
    _s();
    const { t, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const localizedTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, record);
    const localizedDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record);
    const dsRef = designSystemRef(record);
    const assetPath = specAssetPath(record);
    const [showcaseHtml, setShowcaseHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [tokensHtml, setTokensHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [specBody, setSpecBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Reset caches when the modal swaps to a different plugin.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginDesignSystemDetail.useEffect": ()=>{
            setShowcaseHtml(undefined);
            setTokensHtml(undefined);
            setSpecBody(undefined);
        }
    }["PluginDesignSystemDetail.useEffect"], [
        record.id
    ]);
    const handleView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PluginDesignSystemDetail.useCallback[handleView]": (viewId)=>{
            if (!dsRef) return;
            if (viewId === 'showcase' && showcaseHtml === undefined) {
                setShowcaseHtml(null);
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemShowcase"])(dsRef).then({
                    "PluginDesignSystemDetail.useCallback[handleView]": (html)=>setShowcaseHtml(html)
                }["PluginDesignSystemDetail.useCallback[handleView]"]);
            }
            if (viewId === 'tokens' && tokensHtml === undefined) {
                setTokensHtml(null);
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemPreview"])(dsRef).then({
                    "PluginDesignSystemDetail.useCallback[handleView]": (html)=>setTokensHtml(html)
                }["PluginDesignSystemDetail.useCallback[handleView]"]);
            }
        }
    }["PluginDesignSystemDetail.useCallback[handleView]"], [
        dsRef,
        showcaseHtml,
        tokensHtml
    ]);
    const handleSidebarToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PluginDesignSystemDetail.useCallback[handleSidebarToggle]": (open)=>{
            if (!open || specBody !== undefined) return;
            setSpecBody(null);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPluginAssetText"])(record.id, assetPath).then({
                "PluginDesignSystemDetail.useCallback[handleSidebarToggle]": (body)=>setSpecBody(body)
            }["PluginDesignSystemDetail.useCallback[handleSidebarToggle]"]);
        }
    }["PluginDesignSystemDetail.useCallback[handleSidebarToggle]"], [
        record.id,
        assetPath,
        specBody
    ]);
    // When no upstream design system is referenced we still need a view
    // for the iframe stage so PreviewModal has something to render. Fall
    // back to a minimal placeholder that explains the design spec lives
    // in the plugin-info sidebar; the user can still apply the plugin
    // from the primary CTA.
    const views = dsRef ? [
        {
            id: 'showcase',
            label: t('ds.showcase'),
            html: showcaseHtml
        },
        {
            id: 'tokens',
            label: t('ds.tokens'),
            html: tokensHtml
        }
    ] : [
        {
            id: 'spec',
            label: 'Spec',
            html: '<!doctype html><meta charset="utf-8"><body style="font:14px system-ui;color:#666;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;padding:0 24px;margin:0;">This plugin ships only the design spec — open Plugin info to read DESIGN.md.</body>'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewModal"], {
        title: localizedTitle,
        subtitle: localizedDescription || dsRef || undefined,
        views: views,
        initialViewId: dsRef ? 'showcase' : 'spec',
        onView: handleView,
        exportTitleFor: (viewId)=>`${localizedTitle} — ${viewId}`,
        shareTarget: {
            title: localizedTitle,
            description: localizedDescription || dsRef || undefined,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginShareUrl"])(record)
        },
        onClose: onClose,
        sidebar: {
            label: 'Plugin info',
            defaultOpen: true,
            onToggle: handleSidebarToggle,
            contentKey: record.id,
            // Design-system plugins are still plugins, so the inspector
            // comes first. DESIGN.md remains available in the same sidebar,
            // but as a spec section below the plugin-common metadata.
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-design-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-info-pane",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginMetaSections"], {
                            record: record,
                            omit: {
                                description: true
                            },
                            compact: true,
                            heading: "Plugin info"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "plugin-design-sidebar__spec",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-design-sidebar__spec-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "DESIGN.md"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: assetPath.replace(/^\.\//, '')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSpecView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSpecView"], {
                                source: specBody,
                                loadingLabel: t('ds.specLoading')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
                lineNumber: 163,
                columnNumber: 11
            }, this)
        },
        primaryAction: hideUseAction ? undefined : {
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).label,
            onClick: ()=>onUse(record, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).action),
            busy: !!isApplying,
            busyLabel: 'Applying…',
            testId: `plugin-details-use-${record.id}`,
            menu: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginUseMenu"])(record, onUse, t)
        },
        headerExtras: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginShareMenu"], {
            record: record,
            variant: "inline"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
            lineNumber: 195,
            columnNumber: 21
        }, this),
        onSharePopoverItemClick: onSharePopoverItemClick
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginDesignSystemDetail.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(PluginDesignSystemDetail, "4N+UmeQYFccPWbGFFCx7y7x2iN0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c = PluginDesignSystemDetail;
var _c;
__turbopack_context__.k.register(_c, "PluginDesignSystemDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginMediaDetail",
    ()=>PluginMediaDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Image / video / audio detail surface for the home plugin gallery.
//
// Visually this variant now matches the html-example and design-system
// modals — it reuses PreviewModal so every plugin variant shares the
// same chrome (title + subtitle, primary `Use plugin` CTA, sidebar
// toggle, fullscreen, plugin actions, close). The stage hosts the
// type-specific media (image / video / audio) via PreviewModal's
// `custom` view kind, and the right-side sidebar carries the prompt
// body + PluginMetaSections so users can read the prompt and inspect
// the manifest from the same column.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginMetaSections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/PluginShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugin-details/pluginUseMenu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function readMedia(record) {
    const preview = record.manifest?.od?.preview;
    if (!preview) {
        return {
            poster: null,
            videoUrl: null,
            audioUrl: null,
            isVideo: false,
            isAudio: false
        };
    }
    const poster = typeof preview.poster === 'string' ? preview.poster : null;
    const video = typeof preview.video === 'string' ? preview.video : null;
    const gif = typeof preview.gif === 'string' ? preview.gif : null;
    const audio = typeof preview.audio === 'string' ? preview.audio : null;
    const t = typeof preview.type === 'string' ? preview.type.toLowerCase() : '';
    const isVideo = t === 'video' || Boolean(video);
    const isAudio = t === 'audio' || Boolean(audio);
    return {
        poster: poster ?? gif,
        videoUrl: video,
        audioUrl: audio,
        isVideo,
        isAudio
    };
}
function PluginMediaDetail({ record, onClose, onUse, isApplying, hideUseAction, onSharePopoverItemClick }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const manifest = record.manifest ?? {};
    const od = manifest.od ?? {};
    const description = manifest.description ?? '';
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(od.useCase?.query);
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginMediaDetail.useMemo[media]": ()=>readMedia(record)
    }["PluginMediaDetail.useMemo[media]"], [
        record
    ]);
    const hasAsset = Boolean(media.poster || media.videoUrl || media.audioUrl);
    // Reset transient state when the active record swaps so the next
    // open never inherits the previous plugin's copied flag.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginMediaDetail.useEffect": ()=>{
            setCopied(false);
        }
    }["PluginMediaDetail.useEffect"], [
        record.id
    ]);
    function handleCopy() {
        if (!query) return;
        void navigator.clipboard.writeText(query).then(()=>{
            setCopied(true);
            window.setTimeout(()=>setCopied(false), 2000);
        });
    }
    // Stage content — image / video / audio renderer placed in a
    // centered scrollable container so portrait and landscape assets
    // both look good on a wide modal stage.
    const stage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-media-stage",
        "data-detail-variant": "media",
        "data-testid": "plugin-details-modal",
        "data-plugin-id": record.id,
        children: !hasAsset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plugin-media-stage__empty",
            children: t('fileViewer.previewUnavailable')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
            lineNumber: 128,
            columnNumber: 9
        }, this) : media.isVideo && media.videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            className: "plugin-media-stage__video",
            src: media.videoUrl,
            poster: media.poster ?? undefined,
            controls: true,
            preload: "none",
            playsInline: true
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
            lineNumber: 132,
            columnNumber: 9
        }, this) : media.isAudio && media.audioUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plugin-media-stage__audio",
            children: [
                media.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "plugin-media-stage__audio-poster",
                    src: media.poster,
                    alt: record.title,
                    referrerPolicy: "no-referrer",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                    lineNumber: 143,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugin-media-stage__audio-glyph",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "play",
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                        lineNumber: 155,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    className: "plugin-media-stage__audio-player",
                    src: media.audioUrl,
                    controls: true,
                    preload: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
            lineNumber: 141,
            columnNumber: 9
        }, this) : media.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "plugin-media-stage__image",
            src: media.poster,
            alt: record.title,
            loading: "lazy",
            referrerPolicy: "no-referrer"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
            lineNumber: 166,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
    const views = [
        {
            id: 'media',
            label: media.isVideo ? 'Video' : media.isAudio ? 'Audio' : 'Image',
            custom: stage
        }
    ];
    // Sidebar — prompt body sits at the top so users see the example
    // prompt as soon as the panel opens; the manifest inspector
    // (PluginMetaSections) stacks underneath so workflow / capabilities
    // / source provenance are part of the same scroll column.
    const sidebar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-info-pane plugin-media-sidebar",
        children: [
            query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "plugin-media-sidebar__prompt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "plugin-media-sidebar__prompt-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugin-media-sidebar__prompt-label",
                                children: t('promptTemplates.promptLabel')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugin-media-sidebar__prompt-copy",
                                onClick: handleCopy,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: copied ? 'check' : 'copy',
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    copied ? t('promptTemplates.copyDone') : t('promptTemplates.copyPrompt')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "plugin-media-sidebar__prompt-body",
                        children: query
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginMetaSections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginMetaSections"], {
                record: record,
                omit: {
                    description: true,
                    query: true
                },
                compact: true,
                heading: "Plugin info"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewModal"], {
        title: record.title,
        subtitle: description || undefined,
        views: views,
        exportTitleFor: ()=>record.title,
        shareTarget: {
            title: record.title,
            description: description || undefined,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginShareUrl"])(record)
        },
        onClose: onClose,
        sidebar: {
            label: 'Plugin info',
            defaultOpen: true,
            contentKey: record.id,
            content: sidebar
        },
        primaryAction: hideUseAction ? undefined : {
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).label,
            onClick: ()=>onUse(record, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginUsePrimaryAction"])(record, t).action),
            busy: !!isApplying,
            busyLabel: 'Applying…',
            testId: `plugin-details-use-${record.id}`,
            menu: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$pluginUseMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginUseMenu"])(record, onUse, t)
        },
        headerExtras: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugin$2d$details$2f$PluginShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginShareMenu"], {
            record: record,
            variant: "inline"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
            lineNumber: 248,
            columnNumber: 21
        }, this),
        onSharePopoverItemClick: onSharePopoverItemClick
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugin-details/PluginMediaDetail.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(PluginMediaDetail, "y360YdHv52JvMzeEqK8fXhpJoa4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = PluginMediaDetail;
var _c;
__turbopack_context__.k.register(_c, "PluginMediaDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_plugin-details_0wmxn9j._.js.map