(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/DesignFilesPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignFilesPanel",
    ()=>DesignFilesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/srcdoc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/fileSystemErrors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/visualStability.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$designArtifacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-files/designArtifacts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$pluginFolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-files/pluginFolders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LiveArtifactBadges.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SketchPreview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
// Section render order. Empty categories are skipped; the FOLDERS section is
// pinned above all of these from the directory list.
const SECTION_ORDER = [
    'html',
    'stylesheet',
    'code',
    'document',
    'text',
    'image',
    'sketch',
    'pdf',
    'presentation',
    'spreadsheet',
    'video',
    'audio',
    'binary'
];
const STYLESHEET_EXTENSIONS = new Set([
    'css',
    'scss',
    'sass',
    'less'
]);
function fileCategory(file) {
    const dot = file.name.lastIndexOf('.');
    const ext = dot >= 0 ? file.name.slice(dot + 1).toLowerCase() : '';
    if (STYLESHEET_EXTENSIONS.has(ext)) return 'stylesheet';
    return file.kind;
}
function buildActionNotice(message, url) {
    const trimmedMessage = message.trim();
    const trimmedUrl = url?.trim();
    if (!trimmedUrl) return {
        message: trimmedMessage
    };
    const normalizedMessage = trimmedMessage.replace(new RegExp(`\\s*${escapeRegExp(trimmedUrl)}\\s*$`), '');
    return {
        message: normalizedMessage.trim() || trimmedUrl,
        url: trimmedUrl
    };
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function ActionNoticeView({ notice }) {
    if (!notice) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: notice.message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            notice.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: notice.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: notice.url
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true);
}
_c = ActionNoticeView;
// Useful-info tips that rotate one at a time in the panel footer, ordered as
// a loose journey: file basics → feeding context → generating → iterating →
// exporting/sharing → community. A tip with a `url` renders its typed line as
// a link to that destination.
const USEFUL_TIPS = [
    {
        key: 'designFiles.usefulInfoTip'
    },
    {
        key: 'designFiles.usefulInfoTip2'
    },
    {
        key: 'designFiles.usefulInfoTip9'
    },
    {
        key: 'designFiles.usefulInfoTip10'
    },
    {
        key: 'designFiles.usefulInfoTip4'
    },
    {
        key: 'designFiles.usefulInfoTip11'
    },
    {
        key: 'designFiles.usefulInfoTip12'
    },
    {
        key: 'designFiles.usefulInfoTip13'
    },
    {
        key: 'designFiles.usefulInfoTip14'
    },
    {
        key: 'designFiles.usefulInfoTip15'
    },
    {
        key: 'designFiles.usefulInfoTip5'
    },
    {
        key: 'designFiles.usefulInfoTip6',
        url: 'https://discord.gg/9ptkbbqRu'
    },
    {
        key: 'designFiles.usefulInfoTip7',
        url: 'https://github.com/nexu-io/open-design'
    },
    {
        key: 'designFiles.usefulInfoTip8',
        url: 'https://x.com/OpenDesignHQ'
    }
];
const TIP_TYPE_MS = 32; // per-character typing speed
const TIP_HOLD_MS = 3800; // pause on a fully-typed tip before advancing
function prefersReducedMotion() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
// Footer "tip" line that types out one tip at a time (typewriter), holds, then
// advances to the next — mirroring Claude Design's empty-state hint. Under
// prefers-reduced-motion the full tip is shown immediately and just cycles.
function RotatingTip() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Resolve tips each render but read them through a ref so the typing effect
    // depends only on `index` — depending on the (re-created) array would reset
    // the typewriter on every render and never advance.
    const tipsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    tipsRef.current = USEFUL_TIPS.map(({ key })=>t(key));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingTip.useEffect": ()=>{
            const tips = tipsRef.current;
            const full = tips[index] ?? '';
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()) {
                setIndex(0);
                setTyped(tips[0] ?? '');
                return;
            }
            if (prefersReducedMotion()) {
                setTyped(full);
                if (tips.length < 2) return;
                const hold = window.setTimeout({
                    "RotatingTip.useEffect.hold": ()=>setIndex({
                            "RotatingTip.useEffect.hold": (i)=>(i + 1) % tips.length
                        }["RotatingTip.useEffect.hold"])
                }["RotatingTip.useEffect.hold"], TIP_HOLD_MS);
                return ({
                    "RotatingTip.useEffect": ()=>window.clearTimeout(hold)
                })["RotatingTip.useEffect"];
            }
            setTyped('');
            let i = 0;
            let holdTimer = 0;
            const typeTimer = window.setInterval({
                "RotatingTip.useEffect.typeTimer": ()=>{
                    i += 1;
                    setTyped(full.slice(0, i));
                    if (i >= full.length) {
                        window.clearInterval(typeTimer);
                        if (tips.length < 2) return;
                        holdTimer = window.setTimeout({
                            "RotatingTip.useEffect.typeTimer": ()=>setIndex({
                                    "RotatingTip.useEffect.typeTimer": (p)=>(p + 1) % tips.length
                                }["RotatingTip.useEffect.typeTimer"])
                        }["RotatingTip.useEffect.typeTimer"], TIP_HOLD_MS);
                    }
                }
            }["RotatingTip.useEffect.typeTimer"], TIP_TYPE_MS);
            return ({
                "RotatingTip.useEffect": ()=>{
                    window.clearInterval(typeTimer);
                    window.clearTimeout(holdTimer);
                }
            })["RotatingTip.useEffect"];
        }
    }["RotatingTip.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "df-useful-info",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "df-useful-info-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "sparkles",
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "df-useful-info-label",
                        children: t('designFiles.usefulInfoLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "df-useful-info-tip",
                children: [
                    USEFUL_TIPS[index]?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "df-tip-link",
                        href: USEFUL_TIPS[index].url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: typed
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this) : typed,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "df-tip-caret",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_s(RotatingTip, "ajUTggHfIvEayXlS2HdAVO8jOcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c1 = RotatingTip;
function DesignFilesPanel({ projectId, rootDirName, reloading, running = false, files, folders, liveArtifacts, onOpenFile, onOpenLiveArtifact, onRenameFile, onDeleteFile, onDeleteFiles, onUpload, onUploadFiles, onPaste, onNewSketch, uploadError = null, onClearUploadError, preferredPreviewFile = null, autoPreviewDesignArtifacts = false, onCurrentDirChange, onPluginFolderAgentAction, activePluginActionPaths = new Set(), hiddenPluginActionPaths = new Set(), navState, onNavStateChange }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const [draggingFiles, setDraggingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropReadError, setDropReadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragDepthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuPos, setMenuPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const MENU_ESTIMATED_HEIGHT = 145;
    const MENU_SAFE_PADDING = 8;
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoPreviewAppliedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const lastKeyPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [installingFolder, setInstallingFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sharingFolder, setSharingFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [installNotice, setInstallNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renaming, setRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentDir, setCurrentDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignFilesPanel.useState": ()=>navState?.currentDir ?? ''
    }["DesignFilesPanel.useState"]);
    // Keep the parent's create-target in sync with the folder being viewed, so
    // uploads / pastes / new sketches / dropped files land in the open folder
    // rather than the project root.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            onCurrentDirChange?.(currentDir);
        }
    }["DesignFilesPanel.useEffect"], [
        currentDir,
        onCurrentDirChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            onNavStateChange?.({
                kindFilter: navState?.kindFilter ?? new Set(),
                currentDir,
                page: 0,
                pageSize: 30
            });
        }
    }["DesignFilesPanel.useEffect"], [
        currentDir,
        navState?.kindFilter,
        onNavStateChange
    ]);
    // Derive immediate subdirectories and files at the current directory level
    // from the flat files list. Files with names like "a/b/c.html" contribute
    // "a" as a directory when currentDir is '' and "b" when currentDir is "a".
    const { dirsAtCurrentDir, filesAtCurrentDir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignFilesPanel.useMemo": ()=>{
            const prefix = currentDir === '' ? '' : `${currentDir}/`;
            const dirs = new Set();
            const localFiles = [];
            for (const f of files){
                if (!f.name.startsWith(prefix)) continue;
                const remainder = f.name.slice(prefix.length);
                const slashIdx = remainder.indexOf('/');
                if (slashIdx === -1) {
                    localFiles.push(f);
                } else {
                    dirs.add(remainder.slice(0, slashIdx));
                    if (currentDir === '') localFiles.push(f);
                }
            }
            // Also surface persisted folders (including empty ones with no files under
            // them) as immediate children of the current directory.
            for (const folder of folders ?? []){
                if (!folder.path.startsWith(prefix)) continue;
                const remainder = folder.path.slice(prefix.length);
                if (!remainder) continue; // the current directory itself
                const slashIdx = remainder.indexOf('/');
                dirs.add(slashIdx === -1 ? remainder : remainder.slice(0, slashIdx));
            }
            return {
                dirsAtCurrentDir: [
                    ...dirs
                ].sort({
                    "DesignFilesPanel.useMemo": (a, b)=>a.localeCompare(b)
                }["DesignFilesPanel.useMemo"]),
                filesAtCurrentDir: localFiles
            };
        }
    }["DesignFilesPanel.useMemo"], [
        files,
        folders,
        currentDir
    ]);
    // Group files at the current level into semantic sections, ordered by
    // SECTION_ORDER. Files within a section sort most-recently-modified first.
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignFilesPanel.useMemo[sections]": ()=>{
            const grouped = new Map();
            for (const f of filesAtCurrentDir){
                const category = fileCategory(f);
                const bucket = grouped.get(category) ?? [];
                bucket.push(f);
                grouped.set(category, bucket);
            }
            for (const bucket of grouped.values()){
                bucket.sort({
                    "DesignFilesPanel.useMemo[sections]": (a, b)=>b.mtime - a.mtime
                }["DesignFilesPanel.useMemo[sections]"]);
            }
            return SECTION_ORDER.filter({
                "DesignFilesPanel.useMemo[sections]": (category)=>grouped.has(category)
            }["DesignFilesPanel.useMemo[sections]"]).map({
                "DesignFilesPanel.useMemo[sections]": (category)=>[
                        category,
                        grouped.get(category)
                    ]
            }["DesignFilesPanel.useMemo[sections]"]);
        }
    }["DesignFilesPanel.useMemo[sections]"], [
        filesAtCurrentDir
    ]);
    // Reset selection and renaming state when the user navigates into or out of
    // a directory.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            setSelected(new Set());
            setRenaming(null);
        }
    }["DesignFilesPanel.useEffect"], [
        currentDir
    ]);
    // Navigate up to the nearest ancestor that still exists when the current
    // directory disappears (e.g. after deleting the last file in a subfolder).
    // A directory "exists" if it has files under it OR is a persisted folder
    // (possibly empty) — otherwise navigating into an empty folder would bounce
    // straight back to the root.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            if (currentDir === '') return;
            const dirExists = {
                "DesignFilesPanel.useEffect.dirExists": (dir)=>files.some({
                        "DesignFilesPanel.useEffect.dirExists": (f)=>f.name.startsWith(`${dir}/`)
                    }["DesignFilesPanel.useEffect.dirExists"]) || (folders ?? []).some({
                        "DesignFilesPanel.useEffect.dirExists": (fo)=>fo.path === dir || fo.path.startsWith(`${dir}/`)
                    }["DesignFilesPanel.useEffect.dirExists"])
            }["DesignFilesPanel.useEffect.dirExists"];
            if (dirExists(currentDir)) return;
            const parts = currentDir.split('/');
            for(let i = parts.length - 1; i > 0; i--){
                const ancestor = parts.slice(0, i).join('/');
                if (dirExists(ancestor)) {
                    setCurrentDir(ancestor);
                    return;
                }
            }
            setCurrentDir('');
        }
    }["DesignFilesPanel.useEffect"], [
        files,
        folders,
        currentDir
    ]);
    const pluginFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignFilesPanel.useMemo[pluginFolders]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$pluginFolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPluginFolderCandidates"])(files)
    }["DesignFilesPanel.useMemo[pluginFolders]"], [
        files
    ]);
    // Prune selections that no longer exist in the current file list
    // (e.g. after a refresh or delete within the same project).
    // Cross-project leaks are handled by the parent remounting this
    // component via key={projectId}.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            setSelected({
                "DesignFilesPanel.useEffect": (prev)=>{
                    if (prev.size === 0) return prev;
                    const names = new Set(files.map({
                        "DesignFilesPanel.useEffect": (f)=>f.name
                    }["DesignFilesPanel.useEffect"]));
                    const next = new Set(prev);
                    let changed = false;
                    for (const n of next){
                        if (!names.has(n)) {
                            next.delete(n);
                            changed = true;
                        }
                    }
                    return changed ? next : prev;
                }
            }["DesignFilesPanel.useEffect"]);
        }
    }["DesignFilesPanel.useEffect"], [
        files
    ]);
    const previewFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignFilesPanel.useMemo[previewFile]": ()=>files.find({
                "DesignFilesPanel.useMemo[previewFile]": (f)=>f.name === preview
            }["DesignFilesPanel.useMemo[previewFile]"]) ?? null
    }["DesignFilesPanel.useMemo[previewFile]"], [
        preview,
        files
    ]);
    const initialPreviewFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignFilesPanel.useMemo[initialPreviewFile]": ()=>autoPreviewDesignArtifacts ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$designArtifacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectInitialDesignPreviewFile"])(files, preferredPreviewFile) : null
    }["DesignFilesPanel.useMemo[initialPreviewFile]"], [
        autoPreviewDesignArtifacts,
        files,
        preferredPreviewFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            if (autoPreviewAppliedRef.current) return;
            if (!initialPreviewFile) return;
            autoPreviewAppliedRef.current = true;
            setPreview(initialPreviewFile.name);
        }
    }["DesignFilesPanel.useEffect"], [
        initialPreviewFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            if (!preview) return;
            if (files.some({
                "DesignFilesPanel.useEffect": (f)=>f.name === preview
            }["DesignFilesPanel.useEffect"])) return;
            setPreview(null);
        }
    }["DesignFilesPanel.useEffect"], [
        files,
        preview
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignFilesPanel.useEffect": ()=>{
            if (!menuPos) return;
            const close = {
                "DesignFilesPanel.useEffect.close": ()=>setMenuPos(null)
            }["DesignFilesPanel.useEffect.close"];
            const onKey = {
                "DesignFilesPanel.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') close();
                }
            }["DesignFilesPanel.useEffect.onKey"];
            window.addEventListener('mousedown', close);
            window.addEventListener('keydown', onKey);
            return ({
                "DesignFilesPanel.useEffect": ()=>{
                    window.removeEventListener('mousedown', close);
                    window.removeEventListener('keydown', onKey);
                }
            })["DesignFilesPanel.useEffect"];
        }
    }["DesignFilesPanel.useEffect"], [
        menuPos
    ]);
    function toggleSelect(name) {
        setSelected((prev)=>{
            const next = new Set(prev);
            if (next.has(name)) {
                next.delete(name);
            } else {
                next.add(name);
            }
            return next;
        });
    }
    function clearSelection() {
        setSelected(new Set());
    }
    function openMenuFor(name, el) {
        const rect = el.closest('.df-row-menu')?.getBoundingClientRect();
        if (!rect) return;
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        let top;
        if (spaceBelow >= MENU_ESTIMATED_HEIGHT + MENU_SAFE_PADDING) {
            top = rect.bottom + 4;
        } else if (spaceAbove >= MENU_ESTIMATED_HEIGHT + MENU_SAFE_PADDING) {
            top = rect.top - MENU_ESTIMATED_HEIGHT - 4;
        } else {
            top = Math.max(MENU_SAFE_PADDING, viewportHeight - MENU_ESTIMATED_HEIGHT - MENU_SAFE_PADDING);
        }
        const left = Math.max(MENU_SAFE_PADDING, rect.right - 160);
        setMenuPos({
            name,
            top,
            left
        });
    }
    function startRename(name) {
        setMenuPos(null);
        setPreview(name);
        const draft = currentDir === '' ? name : name.slice(currentDir.length + 1);
        setRenaming({
            name,
            draft,
            saving: false
        });
    }
    async function commitRename(name, draft) {
        const nextBasename = draft.trim();
        if (!nextBasename) {
            setRenaming(null);
            return;
        }
        const nextName = currentDir === '' ? nextBasename : `${currentDir}/${nextBasename}`;
        if (nextName === name) {
            setRenaming(null);
            return;
        }
        setRenaming({
            name,
            draft,
            saving: true
        });
        try {
            const renamed = await onRenameFile(name, nextName);
            if (!renamed) throw new Error('Rename failed');
            setPreview((curr)=>curr === name ? renamed.name : curr);
            setSelected((prev)=>{
                if (!prev.has(name)) return prev;
                const next = new Set(prev);
                next.delete(name);
                next.add(renamed.name);
                return next;
            });
            setRenaming(null);
        } catch (err) {
            alert(err instanceof Error ? err.message : String(err));
            setRenaming({
                name,
                draft,
                saving: false
            });
        }
    }
    async function handleBatchDelete() {
        if (deleting) return;
        const fileList = [
            ...selected
        ];
        if (fileList.length === 0) return;
        setDeleting(true);
        try {
            await onDeleteFiles(fileList);
        // Don't clear `selected` here: confirm-cancel and all-fail paths
        // should leave the user's selection intact for retry. The
        // `useEffect` above prunes successfully-deleted names automatically
        // once `files` refreshes.
        } finally{
            setDeleting(false);
        }
    }
    function renderFileRow(f, category) {
        const active = preview === f.name;
        const isSelected = selected.has(f.name);
        const isHovered = hover === f.name;
        const renameState = renaming?.name === f.name ? renaming : null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-testid": `design-file-row-${f.name}`,
            className: `df-row df-file-row ${active ? 'active' : ''} ${isSelected ? 'selected' : ''}`,
            onMouseEnter: ()=>setHover(f.name),
            onMouseLeave: ()=>setHover((c)=>c === f.name ? null : c),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-check",
                    onClick: (e)=>{
                        e.stopPropagation();
                        toggleSelect(f.name);
                    },
                    role: "checkbox",
                    "aria-checked": isSelected,
                    tabIndex: 0,
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleSelect(f.name);
                        }
                    },
                    children: isSelected ? '☑' : '☐'
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 582,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-icon df-row-openable",
                    "data-kind": category,
                    "aria-hidden": true,
                    onClick: ()=>setPreview(f.name),
                    onDoubleClick: ()=>onOpenFile(f.name),
                    children: categoryGlyph(category)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 601,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "df-row-name-wrap",
                    children: renameState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        autoFocus: true,
                        className: "df-rename-input",
                        value: renameState.draft,
                        disabled: renameState.saving,
                        onChange: (e)=>setRenaming({
                                ...renameState,
                                draft: e.target.value
                            }),
                        onClick: (e)=>e.stopPropagation(),
                        onDoubleClick: (e)=>e.stopPropagation(),
                        onBlur: (e)=>{
                            if (e.currentTarget.dataset.skipRenameCommit === '1') return;
                            void commitRename(f.name, renameState.draft);
                        },
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                e.currentTarget.dataset.skipRenameCommit = '1';
                                void commitRename(f.name, renameState.draft);
                            } else if (e.key === 'Escape') {
                                e.preventDefault();
                                e.currentTarget.dataset.skipRenameCommit = '1';
                                setRenaming(null);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 612,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "df-row-name-btn",
                        onClick: ()=>setPreview(f.name),
                        onDoubleClick: ()=>onOpenFile(f.name),
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                const now = Date.now();
                                const last = lastKeyPress.current.get(f.name) ?? 0;
                                if (now - last < 300) {
                                    lastKeyPress.current.delete(f.name);
                                    onOpenFile(f.name);
                                } else {
                                    lastKeyPress.current.set(f.name, now);
                                    setPreview(f.name);
                                }
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "df-row-name-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "df-row-name",
                                    title: currentDir === '' ? f.name : f.name.slice(currentDir.length + 1),
                                    children: currentDir === '' ? f.name : f.name.slice(currentDir.length + 1)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 658,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "df-row-sub",
                                    children: categoryLabel(category, t)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 664,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 657,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 637,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 610,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-time df-row-openable",
                    onClick: ()=>setPreview(f.name),
                    onDoubleClick: ()=>onOpenFile(f.name),
                    children: relativeTime(f.mtime, t)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 669,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-testid": `design-file-menu-${f.name}`,
                    className: "df-row-menu",
                    style: isHovered || active ? {
                        opacity: 1
                    } : undefined,
                    role: "button",
                    tabIndex: 0,
                    "aria-label": t('designFiles.rowMenu'),
                    onClick: (e)=>{
                        e.stopPropagation();
                        openMenuFor(f.name, e.target);
                    },
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            openMenuFor(f.name, e.currentTarget);
                        }
                    },
                    children: "⋯"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 676,
                    columnNumber: 9
                }, this)
            ]
        }, f.name, true, {
            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
            lineNumber: 575,
            columnNumber: 7
        }, this);
    }
    function renderDirRow(dirName) {
        const fullPath = currentDir === '' ? dirName : `${currentDir}/${dirName}`;
        const prefix = `${fullPath}/`;
        const count = files.filter((f)=>f.name.startsWith(prefix)).length;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "df-row df-dir-row",
            onClick: ()=>setCurrentDir(fullPath),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-check",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 707,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-icon",
                    "data-kind": "folder",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "folder",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 708,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "df-row-name-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "df-row-name-btn",
                        onClick: ()=>setCurrentDir(fullPath),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "df-row-name-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "df-row-name",
                                    title: dirName,
                                    children: dirName
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "df-row-sub",
                                    children: t('designFiles.folderCount', {
                                        n: count
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 715,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 713,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 711,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-time"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 719,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-row-menu df-row-menu-placeholder",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this)
            ]
        }, `dir:${fullPath}`, true, {
            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
            lineNumber: 706,
            columnNumber: 7
        }, this);
    }
    async function handleBatchDownload() {
        const fileList = [
            ...selected
        ];
        if (fileList.length === 0) return;
        try {
            const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/archive/batch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: fileList
                })
            });
            if (!resp.ok) {
                const err = await resp.json().catch(()=>null);
                throw new Error(err?.message || `request failed (${resp.status})`);
            }
            const blob = await resp.blob();
            const header = resp.headers.get('content-disposition') || '';
            const star = /filename\*=UTF-8''([^;]+)/i.exec(header);
            let filename = 'project.zip';
            if (star && star[1]) {
                try {
                    filename = decodeURIComponent(star[1]);
                } catch  {
                    filename = star[1];
                }
            }
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(()=>URL.revokeObjectURL(url), 60_000);
        } catch (err) {
            console.warn('[batchDownload] failed:', err);
        }
    }
    async function handleDrop(ev) {
        ev.preventDefault();
        dragDepthRef.current = 0;
        setDraggingFiles(false);
        setDropReadError(null);
        try {
            const dropped = await filesFromDataTransfer(ev.dataTransfer);
            if (dropped.length > 0) onUploadFiles(dropped);
        } catch (error) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFileSystemReadError"])(error)) throw error;
            setDropReadError(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_SYSTEM_READ_ERROR_MESSAGE"]);
        }
    }
    async function handlePluginFolderAgentAction(relativePath, action) {
        if (!onPluginFolderAgentAction || installingFolder || sharingFolder) return;
        setInstallNotice(null);
        if (action === 'install') {
            setInstallingFolder(relativePath);
        } else {
            setSharingFolder(`${action}:${relativePath}`);
        }
        try {
            const outcome = await onPluginFolderAgentAction(relativePath, action);
            const url = outcome && typeof outcome === 'object' && typeof outcome.url === 'string' ? outcome.url : '';
            const message = outcome && typeof outcome === 'object' && typeof outcome.message === 'string' ? outcome.message : '';
            if (message || url) setInstallNotice(buildActionNotice(message || url, url));
        } catch (err) {
            setInstallNotice({
                message: err instanceof Error ? err.message : String(err)
            });
        } finally{
            setInstallingFolder(null);
            setSharingFolder(null);
        }
    }
    const fileActions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "df-actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onNewSketch,
                title: t('designFiles.newSketch'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "pencil",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 807,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('designFiles.newSketch')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 808,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 806,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onPaste,
                title: t('designFiles.paste.title'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "copy",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('designFiles.paste.label')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "data-testid": "design-files-upload-trigger",
                onClick: onUpload,
                title: t('designFiles.upload.title'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "upload",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('designFiles.upload.label')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 821,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 814,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 805,
        columnNumber: 5
    }, this);
    const breadcrumbs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "df-breadcrumbs",
        "aria-label": t('designFiles.crumbs'),
        children: [
            currentDir === '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "df-breadcrumb-current",
                children: rootDirName ?? t('designFiles.crumbs')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 829,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "df-breadcrumb-btn",
                onClick: ()=>setCurrentDir(''),
                children: rootDirName ?? t('designFiles.crumbs')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 833,
                columnNumber: 9
            }, this),
            currentDir.split('/').filter(Boolean).map((segment, idx, parts)=>{
                const path = parts.slice(0, idx + 1).join('/');
                const isLast = idx === parts.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "df-breadcrumb-segment",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "df-breadcrumb-sep",
                            "aria-hidden": true,
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 846,
                            columnNumber: 13
                        }, this),
                        isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "df-breadcrumb-current",
                            children: segment
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 848,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "df-breadcrumb-btn",
                            onClick: ()=>setCurrentDir(path),
                            children: segment
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 850,
                            columnNumber: 15
                        }, this)
                    ]
                }, path, true, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 845,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 827,
        columnNumber: 5
    }, this);
    const visibleUploadError = uploadError ?? dropReadError;
    const hasSelection = selected.size > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `df-panel ${previewFile ? '' : 'no-preview'} ${hasSelection ? 'has-selection' : ''}`,
        children: [
            reloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "df-reloading-overlay",
                "data-testid": "design-files-reloading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "loading-spinner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "spinner",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 872,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "loading-spinner-label",
                            children: t('common.loading')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 873,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 871,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 870,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "df-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-topbar-left",
                                children: breadcrumbs
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 879,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-topbar-right",
                                children: fileActions
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 880,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 878,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-body",
                        onDragEnter: (ev)=>{
                            ev.preventDefault();
                            dragDepthRef.current += 1;
                            setDraggingFiles(true);
                        },
                        onDragOver: (ev)=>{
                            ev.preventDefault();
                            ev.dataTransfer.dropEffect = 'copy';
                        },
                        onDragLeave: (ev)=>{
                            if (!ev.currentTarget.contains(ev.relatedTarget)) {
                                dragDepthRef.current = 0;
                                setDraggingFiles(false);
                                return;
                            }
                            dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
                            if (dragDepthRef.current === 0) setDraggingFiles(false);
                        },
                        onDrop: handleDrop,
                        children: [
                            visibleUploadError && !preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-upload-banner",
                                "data-testid": "upload-error-banner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: visibleUploadError
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 906,
                                        columnNumber: 15
                                    }, this),
                                    onClearUploadError || dropReadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-testid": "upload-error-dismiss",
                                        onClick: ()=>{
                                            setDropReadError(null);
                                            onClearUploadError?.();
                                        },
                                        children: "Dismiss"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 908,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 905,
                                columnNumber: 13
                            }, this) : null,
                            hasSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-batch-bar",
                                "data-testid": "design-files-batch-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "df-batch-count",
                                        children: t('designFiles.downloadSelected', {
                                            n: selected.size
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 923,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "df-batch-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                                        page_name: 'file_manager',
                                                        area: 'file_manager',
                                                        element: 'download_as_zip'
                                                    });
                                                    void handleBatchDownload();
                                                },
                                                title: t('designFiles.downloadSelected', {
                                                    n: selected.size
                                                }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "download",
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                        lineNumber: 939,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('designFiles.download')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 927,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "danger",
                                                "data-testid": "design-files-batch-delete",
                                                disabled: deleting,
                                                onClick: ()=>void handleBatchDelete(),
                                                title: t('designFiles.deleteSelected', {
                                                    n: selected.size
                                                }),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('designFiles.delete')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "df-batch-clear",
                                                onClick: clearSelection,
                                                children: t('designFiles.clearSelection')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 926,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 922,
                                columnNumber: 13
                            }, this) : null,
                            files.length === 0 && liveArtifacts.length === 0 && (folders?.length ?? 0) === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-empty",
                                "data-testid": "design-files-empty",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "df-empty-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "df-empty-title",
                                            children: t('designFiles.empty')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                            lineNumber: 961,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "df-empty-cta",
                                            "data-testid": "design-files-empty-new-sketch",
                                            onClick: onNewSketch,
                                            title: t('designFiles.newSketch'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "pencil",
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('designFiles.newSketch')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 972,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 960,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 959,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    liveArtifacts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "df-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "df-section-label",
                                                children: t('designFiles.sectionLiveArtifacts')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 980,
                                                columnNumber: 19
                                            }, this),
                                            liveArtifacts.map((artifact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "data-testid": `design-file-row-${artifact.tabId}`,
                                                    className: "df-row df-row-live-artifact",
                                                    onDoubleClick: ()=>onOpenLiveArtifact(artifact.tabId),
                                                    onClick: ()=>onOpenLiveArtifact(artifact.tabId),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "df-row-icon",
                                                            "data-kind": "live-artifact",
                                                            "aria-hidden": true,
                                                            children: "◉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 990,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "df-row-name-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "df-row-name",
                                                                    title: artifact.title,
                                                                    children: artifact.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 994,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "df-row-sub",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: t('designFiles.kindLiveArtifact')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                            lineNumber: 998,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveArtifactBadges"], {
                                                                            compact: true,
                                                                            status: artifact.status,
                                                                            refreshStatus: artifact.refreshStatus
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                            lineNumber: 999,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 997,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "df-row-time",
                                                            children: relativeTime(Date.parse(artifact.updatedAt) || Date.now(), t)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, artifact.artifactId, true, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, "live-artifacts", true, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 979,
                                        columnNumber: 17
                                    }, this) : null,
                                    pluginFolders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "df-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "df-section-label",
                                                children: [
                                                    "Plugin folders",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "df-section-count",
                                                        children: pluginFolders.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 19
                                            }, this),
                                            installNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "df-inline-notice",
                                                role: "status",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionNoticeView, {
                                                    notice: installNotice
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 21
                                            }, this) : null,
                                            pluginFolders.filter((folder)=>!hiddenPluginActionPaths.has(folder.path)).map((folder)=>{
                                                const actionBusy = activePluginActionPaths.has(folder.path);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "df-row df-row-plugin-folder",
                                                    "data-testid": `design-plugin-folder-${folder.path}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "df-row-folder-main",
                                                            onClick: ()=>setPreview(folder.manifestPath),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "df-row-icon",
                                                                    "data-kind": "folder",
                                                                    "aria-hidden": true,
                                                                    children: "DIR"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "df-row-name-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "df-row-name",
                                                                            children: folder.path
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                            lineNumber: 1041,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "df-row-sub",
                                                                            children: [
                                                                                folder.fileCount,
                                                                                " files · ready to add to My plugins"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                            lineNumber: 1042,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 1040,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "df-row-time",
                                                            children: relativeTime(folder.updatedAt, t)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 23
                                                        }, this),
                                                        onPluginFolderAgentAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "df-plugin-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "df-plugin-install",
                                                                    "data-testid": `design-plugin-folder-install-${folder.path}`,
                                                                    disabled: actionBusy || installingFolder !== null || sharingFolder !== null,
                                                                    onClick: ()=>void handlePluginFolderAgentAction(folder.path, 'install'),
                                                                    children: installingFolder === folder.path ? 'Sending…' : 'Add to My plugins'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 1050,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "df-plugin-install",
                                                                    "data-testid": `design-plugin-folder-publish-${folder.path}`,
                                                                    disabled: actionBusy || installingFolder !== null || sharingFolder !== null,
                                                                    onClick: ()=>void handlePluginFolderAgentAction(folder.path, 'publish'),
                                                                    children: sharingFolder === `publish:${folder.path}` ? 'Sending…' : 'Publish repo'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 1061,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "df-plugin-install",
                                                                    "data-testid": `design-plugin-folder-contribute-${folder.path}`,
                                                                    disabled: actionBusy || installingFolder !== null || sharingFolder !== null,
                                                                    onClick: ()=>void handlePluginFolderAgentAction(folder.path, 'contribute'),
                                                                    children: sharingFolder === `contribute:${folder.path}` ? 'Sending…' : 'Open Design PR'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                                    lineNumber: 1072,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    ]
                                                }, folder.path, true, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 1027,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, "plugin-folders", true, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 1014,
                                        columnNumber: 17
                                    }, this) : null,
                                    dirsAtCurrentDir.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "df-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "df-section-label",
                                                children: [
                                                    t('designFiles.sectionFolders'),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "df-section-count",
                                                        children: dirsAtCurrentDir.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 19
                                            }, this),
                                            dirsAtCurrentDir.map((d)=>renderDirRow(d))
                                        ]
                                    }, "folders", true, {
                                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 17
                                    }, this) : null,
                                    sections.map(([category, sectionFiles])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "df-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "df-section-label",
                                                    children: [
                                                        sectionLabel(category, t),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "df-section-count",
                                                            children: sectionFiles.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                            lineNumber: 1102,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 1100,
                                                    columnNumber: 19
                                                }, this),
                                                sectionFiles.map((f)=>renderFileRow(f, category))
                                            ]
                                        }, `cat:${category}`, true, {
                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                            lineNumber: 1099,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "df-footer-info",
                                children: running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingTip, {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "df-drop-hint",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "df-drop-hint-label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "upload",
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                                    lineNumber: 1115,
                                                    columnNumber: 19
                                                }, this),
                                                t('designFiles.dropLabel')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                            lineNumber: 1114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "df-drop-hint-desc",
                                            children: t('designFiles.dropDesc')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 1109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 882,
                        columnNumber: 9
                    }, this),
                    draggingFiles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-drop-overlay",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "df-drop-overlay-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "upload",
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label",
                                    children: t('designFiles.dropTitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "desc",
                                    children: t('designFiles.dropDesc')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                    lineNumber: 1128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 1125,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1124,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 877,
                columnNumber: 7
            }, this),
            preview && previewFile ? // Key on the file name so React unmounts the previous DfPreview
            // (and its iframe / image element) when the user clicks a
            // different file. Without this, React diffing reuses the same
            // iframe DOM node and the browser keeps showing the first
            // file's contents — only the `src` prop changes but the iframe
            // never actually navigates.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DfPreview, {
                projectId: projectId,
                file: previewFile,
                onOpen: ()=>onOpenFile(previewFile.name),
                onClose: ()=>setPreview(null)
            }, previewFile.name, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 1140,
                columnNumber: 9
            }, this) : null,
            menuPos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-testid": "design-file-menu-popover",
                className: "df-row-popover",
                style: {
                    top: menuPos.top,
                    left: menuPos.left
                },
                onMouseDown: (e)=>e.stopPropagation(),
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>{
                            e.stopPropagation();
                            const name = menuPos.name;
                            setMenuPos(null);
                            onOpenFile(name);
                        },
                        children: t('designFiles.openInTab')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>{
                            e.stopPropagation();
                            startRename(menuPos.name);
                        },
                        children: t('common.rename')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, menuPos.name),
                        download: menuPos.name,
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>{
                                e.stopPropagation();
                                setMenuPos(null);
                            },
                            children: t('designFiles.download')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                            lineNumber: 1181,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "danger",
                        "data-testid": `design-file-delete-${menuPos.name}`,
                        onClick: (e)=>{
                            e.stopPropagation();
                            e.preventDefault();
                            const name = menuPos.name;
                            setMenuPos(null);
                            onDeleteFile(name);
                        },
                        children: t('designFiles.delete')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 1149,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 868,
        columnNumber: 5
    }, this);
}
_s1(DesignFilesPanel, "CsfjEVR1jWhh0AIfLSbDxsQr94A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c2 = DesignFilesPanel;
function DfPreview({ projectId, file, onOpen, onClose }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, file.name);
    const rendersSketchJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRenderableSketchJson"])(file);
    const openPreviewLabel = `${t('designFiles.previewOpen')} ${file.name}`;
    const thumbCanOpen = file.kind !== 'audio' && file.kind !== 'video';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "df-preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "df-preview-close",
                onClick: onClose,
                title: t('designFiles.previewClose'),
                "aria-label": t('designFiles.previewClose'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "close",
                    size: 13
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                    lineNumber: 1236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 1229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `df-preview-thumb${thumbCanOpen ? ' is-openable' : ''}`,
                children: [
                    rendersSketchJson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchPreview"], {
                        projectId: projectId,
                        file: file
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1240,
                        columnNumber: 11
                    }, this) : file.kind === 'image' || file.kind === 'sketch' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${url}?v=${Math.round(file.mtime)}`,
                        alt: file.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1242,
                        columnNumber: 11
                    }, this) : file.kind === 'html' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HtmlPreviewThumbnail, {
                        projectId: projectId,
                        file: file
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1244,
                        columnNumber: 11
                    }, this) : file.kind === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: `${url}?v=${Math.round(file.mtime)}`,
                        controls: true,
                        playsInline: true,
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1246,
                        columnNumber: 11
                    }, this) : file.kind === 'audio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        src: `${url}?v=${Math.round(file.mtime)}`,
                        controls: true,
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1253,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-faint)',
                            fontSize: 38
                        },
                        children: categoryGlyph(fileCategory(file))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1255,
                        columnNumber: 11
                    }, this),
                    thumbCanOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "df-preview-thumb-open",
                        onClick: onOpen,
                        title: openPreviewLabel,
                        "aria-label": openPreviewLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1270,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 1238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "df-preview-meta",
                "data-testid": "design-file-preview",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "df-preview-open-cta",
                        onClick: onOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "eye",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 1281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('designFiles.previewOpen')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 1282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-preview-name",
                        children: file.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-preview-kind",
                        children: categoryLabel(fileCategory(file), t)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-preview-stats",
                        children: t('designFiles.modifiedExt', {
                            time: relativeTime(file.mtime, t),
                            size: humanBytes(file.size),
                            ext: fileExtensionLabel(file.name)
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "df-preview-download",
                        href: url,
                        download: file.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "download",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 1294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('designFiles.download')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                                lineNumber: 1295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                        lineNumber: 1293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
                lineNumber: 1279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 1228,
        columnNumber: 5
    }, this);
}
_s2(DfPreview, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c3 = DfPreview;
function HtmlPreviewThumbnail({ projectId, file }) {
    _s3();
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, file.name);
    const [srcDoc, setSrcDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlPreviewThumbnail.useEffect": ()=>{
            let cancelled = false;
            void fetch(`${url}?v=${Math.round(file.mtime)}`).then({
                "HtmlPreviewThumbnail.useEffect": (response)=>response.ok ? response.text() : null
            }["HtmlPreviewThumbnail.useEffect"]).then({
                "HtmlPreviewThumbnail.useEffect": (html)=>{
                    if (cancelled || html === null) return;
                    setSrcDoc((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrcdoc"])(html, {
                        baseHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, baseDirForFile(file.name))
                    }));
                }
            }["HtmlPreviewThumbnail.useEffect"]).catch({
                "HtmlPreviewThumbnail.useEffect": ()=>{
                    if (!cancelled) setSrcDoc(null);
                }
            }["HtmlPreviewThumbnail.useEffect"]);
            return ({
                "HtmlPreviewThumbnail.useEffect": ()=>{
                    cancelled = true;
                }
            })["HtmlPreviewThumbnail.useEffect"];
        }
    }["HtmlPreviewThumbnail.useEffect"], [
        file.mtime,
        file.name,
        projectId,
        url
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        title: file.name,
        src: srcDoc ? undefined : url,
        srcDoc: srcDoc ?? undefined,
        sandbox: "allow-scripts allow-downloads"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignFilesPanel.tsx",
        lineNumber: 1328,
        columnNumber: 5
    }, this);
}
_s3(HtmlPreviewThumbnail, "SPIH7VeZSSKD1hfuPuApEsXIB+Y=");
_c4 = HtmlPreviewThumbnail;
function baseDirForFile(name) {
    const index = name.lastIndexOf('/');
    return index >= 0 ? name.slice(0, index + 1) : '';
}
function fileExtensionLabel(name) {
    const dot = name.lastIndexOf('.');
    if (dot < 0 || dot === name.length - 1) return '';
    return name.slice(dot + 1).toUpperCase();
}
// Plural section header for a category. Reuses existing plural labels where a
// dedicated one exists; otherwise falls back to the singular type label so
// each category gets a distinct, readable header.
function sectionLabel(category, t) {
    switch(category){
        case 'html':
            return t('designFiles.sectionPages');
        case 'stylesheet':
            return t('designFiles.sectionStylesheets');
        case 'code':
            return t('designFiles.sectionScripts');
        case 'document':
            return t('designFiles.sectionDocuments');
        case 'image':
            return t('designFiles.sectionImages');
        case 'sketch':
            return t('designFiles.sectionSketches');
        case 'binary':
            return t('designFiles.sectionOther');
        default:
            return categoryLabel(category, t);
    }
}
// Singular row subtitle for a category.
function categoryLabel(category, t) {
    if (category === 'stylesheet') return t('designFiles.kindStylesheet');
    return kindLabel(category, t);
}
function categoryGlyph(category) {
    if (category === 'stylesheet') return '#';
    return kindGlyph(category);
}
async function filesFromDataTransfer(dataTransfer) {
    const items = Array.from(dataTransfer.items ?? []);
    const fallbackFiles = Array.from(dataTransfer.files ?? []);
    if (items.length === 0) return fallbackFiles;
    const results = await Promise.allSettled(items.map(filesFromDataTransferItem));
    const rejected = results.find((result)=>result.status === 'rejected');
    if (rejected) {
        if (fallbackFiles.length > 0) return fallbackFiles;
        throw rejected.reason;
    }
    const files = results.flatMap((result)=>result.status === 'fulfilled' ? result.value : []);
    return files.length > 0 ? files : fallbackFiles;
}
async function filesFromDataTransferItem(item) {
    const entry = item.webkitGetAsEntry?.();
    if (!entry) {
        const file = item.kind === 'file' ? item.getAsFile() : null;
        return file ? [
            file
        ] : [];
    }
    return filesFromFileSystemEntry(entry);
}
async function filesFromFileSystemEntry(entry) {
    if (entry.isFile) return [
        await fileFromEntry(entry)
    ];
    if (!entry.isDirectory) return [];
    const reader = entry.createReader?.();
    if (!reader) return [];
    const files = [];
    for(;;){
        const entries = await readEntryBatch(reader);
        if (entries.length === 0) break;
        const nested = await Promise.all(entries.map(filesFromFileSystemEntry));
        files.push(...nested.flat());
    }
    return files;
}
function fileFromEntry(entry) {
    return new Promise((resolve, reject)=>{
        entry.file(resolve, (error)=>{
            reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystemReadError"])('Could not read dropped file', error));
        });
    });
}
function readEntryBatch(reader) {
    return new Promise((resolve, reject)=>{
        reader.readEntries(resolve, (error)=>{
            reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystemReadError"])('Could not read dropped folder', error));
        });
    });
}
function kindGlyph(kind) {
    if (kind === 'html') return '⟨⟩';
    if (kind === 'image') return '▣';
    if (kind === 'sketch') return '✎';
    if (kind === 'text') return '¶';
    if (kind === 'code') return '{}';
    if (kind === 'pdf') return 'PDF';
    if (kind === 'document') return 'DOC';
    if (kind === 'presentation') return 'PPT';
    if (kind === 'spreadsheet') return 'XLS';
    return '·';
}
function kindLabel(kind, t) {
    if (kind === 'html') return t('designFiles.kindHtml');
    if (kind === 'image') return t('designFiles.kindImage');
    if (kind === 'sketch') return t('designFiles.kindSketch');
    if (kind === 'text') return t('designFiles.kindText');
    if (kind === 'code') return t('designFiles.kindCode');
    if (kind === 'pdf') return t('designFiles.kindPdf');
    if (kind === 'document') return t('designFiles.kindDocument');
    if (kind === 'presentation') return t('designFiles.kindPresentation');
    if (kind === 'spreadsheet') return t('designFiles.kindSpreadsheet');
    return t('designFiles.kindBinary');
}
function relativeTime(ts, t) {
    const diff = Date.now() - ts;
    const min = 60_000;
    const hr = 60 * min;
    const day = 24 * hr;
    if (diff < min) return t('common.justNow');
    if (diff < hr) return t('common.minutesAgo', {
        n: Math.floor(diff / min)
    });
    if (diff < day) return t('common.hoursAgo', {
        n: Math.floor(diff / hr)
    });
    if (diff < 7 * day) return t('common.daysAgo', {
        n: Math.floor(diff / day)
    });
    if (diff < 30 * day) return t('designFiles.weeksAgo', {
        n: Math.floor(diff / (7 * day))
    });
    return new Date(ts).toLocaleDateString();
}
function humanBytes(n) {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ActionNoticeView");
__turbopack_context__.k.register(_c1, "RotatingTip");
__turbopack_context__.k.register(_c2, "DesignFilesPanel");
__turbopack_context__.k.register(_c3, "DfPreview");
__turbopack_context__.k.register(_c4, "HtmlPreviewThumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_DesignFilesPanel_tsx_12k71m9._.js.map