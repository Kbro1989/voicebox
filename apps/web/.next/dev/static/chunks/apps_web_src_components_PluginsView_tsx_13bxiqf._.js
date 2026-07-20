(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/PluginsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginsView",
    ()=>PluginsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginDetailsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsHomeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginsHomeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TrustBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
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
;
const USER_SOURCE_KINDS = new Set([
    'user',
    'project',
    'marketplace',
    'github',
    'url',
    'local'
]);
const PLUGINS_TABS = [
    {
        id: 'installed'
    },
    {
        id: 'available'
    },
    {
        id: 'sources'
    },
    {
        id: 'team'
    }
];
const PLUGIN_SHARE_DETAILS = {
    'publish-github': {
        eyebrow: 'GitHub repository',
        fallbackTitle: 'Publish Plugin to GitHub',
        fallbackDescription: 'Creates a public GitHub repository for this local Open Design plugin.',
        confirmLabel: 'Start publishing',
        steps: [
            'Create a new Open Design project for the publish workflow.',
            'Copy this plugin into that project as isolated source context.',
            'Run the official publish action plugin against the local daemon.'
        ]
    },
    'contribute-open-design': {
        eyebrow: 'Open Design pull request',
        fallbackTitle: 'Contribute Plugin to Open Design',
        fallbackDescription: 'Opens a pull request that adds this plugin to the Open Design community catalog.',
        confirmLabel: 'Start contribution',
        steps: [
            'Create a new Open Design project for the contribution workflow.',
            'Copy this plugin into that project as isolated source context.',
            'Run the official contribution action plugin against the local daemon.'
        ]
    }
};
function PluginsView({ onCreatePlugin, onUsePlugin, onCreatePluginShareProject }) {
    _s();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const pluginsPageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginsView.useEffect": ()=>{
            if (pluginsPageViewFiredRef.current) return;
            pluginsPageViewFiredRef.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'plugins'
            });
        }
    }["PluginsView.useEffect"], [
        analytics.track
    ]);
    const [plugins, setPlugins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allInstalledPlugins, setAllInstalledPlugins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [marketplaces, setMarketplaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('installed');
    const [importOpen, setImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingApplyId, setPendingApplyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingInstallEntry, setPendingInstallEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingSourceAction, setPendingSourceAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingShareAction, setPendingShareAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activePlugin, setActivePlugin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailsRecord, setDetailsRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableDetails, setAvailableDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareConfirm, setShareConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function refresh() {
        setLoading(true);
        const [rows, allRows, catalogs] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlugins"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlugins"])({
                includeHidden: true
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPluginMarketplaces"])()
        ]);
        setPlugins(rows);
        setAllInstalledPlugins(allRows);
        setMarketplaces(catalogs);
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginsView.useEffect": ()=>{
            void refresh();
            window.addEventListener('open-design:plugins-changed', refresh);
            return ({
                "PluginsView.useEffect": ()=>window.removeEventListener('open-design:plugins-changed', refresh)
            })["PluginsView.useEffect"];
        }
    }["PluginsView.useEffect"], []);
    const userPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginsView.useMemo[userPlugins]": ()=>plugins.filter({
                "PluginsView.useMemo[userPlugins]": (plugin)=>USER_SOURCE_KINDS.has(plugin.sourceKind)
            }["PluginsView.useMemo[userPlugins]"])
    }["PluginsView.useMemo[userPlugins]"], [
        plugins
    ]);
    const availablePlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginsView.useMemo[availablePlugins]": ()=>buildAvailablePlugins(marketplaces, allInstalledPlugins)
    }["PluginsView.useMemo[availablePlugins]"], [
        marketplaces,
        allInstalledPlugins
    ]);
    async function finishImport(work, targetTab = 'installed') {
        setNotice(null);
        const outcome = await work();
        setNotice(outcome);
        if (outcome.ok) {
            setImportOpen(false);
            await refresh();
            setActiveTab(targetTab);
        }
        return outcome;
    }
    async function handleUsePlugin(record, action = 'use') {
        if (onUsePlugin) {
            setDetailsRecord(null);
            onUsePlugin(record, action);
            return;
        }
        setPendingApplyId(record.id);
        setNotice(null);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPlugin"])(record.id, {
            locale
        });
        setPendingApplyId(null);
        if (!result) {
            setNotice({
                ok: false,
                message: `Failed to apply ${record.title}. Make sure the daemon is reachable.`
            });
            return;
        }
        setActivePlugin({
            record,
            result
        });
        setDetailsRecord(null);
        setNotice({
            ok: true,
            message: `${record.title} is ready. Use it from Home with @ search or pick it from the gallery.`
        });
    }
    async function handleCreatePluginShareTask(record, action) {
        if (!onCreatePluginShareProject) {
            setNotice({
                ok: false,
                message: 'Plugin sharing is not available in this shell.'
            });
            setShareConfirm(null);
            return;
        }
        setPendingShareAction({
            pluginId: record.id,
            action
        });
        setNotice(null);
        const outcome = await onCreatePluginShareProject(record.id, action, locale);
        setPendingShareAction(null);
        setShareConfirm(null);
        if (!outcome.ok) {
            setNotice({
                ok: false,
                message: outcome.message
            });
        }
    }
    function requestPluginShareTask(record, action) {
        const actionRecord = plugins.find((plugin)=>plugin.id === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_SHARE_ACTION_PLUGIN_IDS"][action]) ?? null;
        setShareConfirm({
            sourceRecord: record,
            action,
            actionRecord
        });
    }
    async function handleInstallAvailable(plugin) {
        setPendingInstallEntry(plugin.key);
        try {
            const outcome = await finishImport(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installPluginSource"])(plugin.installSource ?? plugin.entry.name), 'installed');
            if (outcome.ok) setAvailableDetails(null);
        } finally{
            setPendingInstallEntry(null);
        }
    }
    async function handleMarketplaceMutation(actionKey, work) {
        setPendingSourceAction(actionKey);
        setNotice(null);
        const outcome = await work();
        setPendingSourceAction(null);
        setNotice(outcome);
        if (outcome.ok) await refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugins-view",
        "aria-labelledby": "plugins-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "plugins-view__hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "plugins-view__kicker",
                                children: t('entry.navPlugins')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "plugins-title",
                                className: "entry-section__title",
                                children: t('entry.navPlugins')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "plugins-view__lede",
                                children: t('pluginsView.lede')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-view__hero-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugins-view__primary",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsTopClick"])(analytics.track, {
                                        page_name: 'plugins',
                                        area: 'plugins',
                                        element: 'create_plugin'
                                    });
                                    onCreatePlugin?.();
                                },
                                "data-testid": "plugins-create-button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "edit",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('homeHero.chip.createPlugin')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugins-view__secondary",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsTopClick"])(analytics.track, {
                                        page_name: 'plugins',
                                        area: 'plugins',
                                        element: 'import_plugin'
                                    });
                                    setImportOpen(true);
                                },
                                "aria-haspopup": "dialog",
                                "data-testid": "plugins-import-button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "plus",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('pluginsView.importPlugin')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-view__badge",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "grid",
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('pluginsView.agentContext')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__stats",
                "aria-label": t('pluginsView.summaryAria'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: t('pluginsView.tab.installed'),
                        value: userPlugins.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: t('pluginsView.tab.available'),
                        value: availablePlugins.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: t('pluginsView.tab.sources'),
                        value: marketplaces.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "plugins-view__tabs",
                role: "tablist",
                "aria-label": t('pluginsView.areasAria'),
                children: PLUGINS_TABS.map((tab)=>{
                    const active = tab.id === activeTab;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": active,
                        className: [
                            'plugins-view__tab',
                            active ? ' is-active' : ''
                        ].filter(Boolean).join(''),
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsTopClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'plugins',
                                element: `${tab.id}_tab`
                            });
                            setActiveTab(tab.id);
                        },
                        "data-testid": `plugins-tab-${tab.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugins-view__tab-label",
                                children: pluginTabLabel(tab.id, t)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugins-view__tab-hint",
                                children: pluginTabHint(tab.id, t)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 346,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Notice, {
                outcome: notice
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 374,
                columnNumber: 17
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__gallery",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-view__empty",
                        children: t('pluginsView.loading')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 377,
                        columnNumber: 20
                    }, this) : null,
                    !loading && activeTab === 'installed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsHomeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsHomeSection"], {
                        plugins: userPlugins,
                        loading: false,
                        activePluginId: activePlugin?.record.id ?? null,
                        pendingApplyId: pendingApplyId,
                        pendingShareAction: pendingShareAction,
                        onUse: (record, action)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsInstalledTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'installed_tab',
                                element: action === 'use-with-query' ? 'templates_use_dropdown' : 'templates_use',
                                template_id: record.id,
                                template_type: record.sourceKind
                            });
                            if (action === 'use-with-query') {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsTemplatesDropdownClick"])(analytics.track, {
                                    page_name: 'plugins',
                                    area: 'templates_dropdown',
                                    element: 'use_with_query',
                                    template_id: record.id,
                                    template_type: record.sourceKind
                                });
                            } else {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsTemplatesDropdownClick"])(analytics.track, {
                                    page_name: 'plugins',
                                    area: 'templates_dropdown',
                                    element: 'use',
                                    template_id: record.id,
                                    template_type: record.sourceKind
                                });
                            }
                            void handleUsePlugin(record, action);
                        },
                        onOpenDetails: (record)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsInstalledTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'installed_tab',
                                element: 'templates_details',
                                template_id: record.id,
                                template_type: record.sourceKind
                            });
                            setDetailsRecord(record);
                        },
                        onPluginShareAction: (record, action)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsInstalledTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'installed_tab',
                                element: action === 'publish-github' ? 'templates_publish' : 'templates_contribute',
                                template_id: record.id,
                                template_type: record.sourceKind
                            });
                            requestPluginShareTask(record, action);
                        },
                        preferDefaultFacet: false,
                        title: t('pluginsView.installedTitle'),
                        subtitle: t('pluginsView.installedSubtitle'),
                        emptyMessage: t('pluginsView.installedEmpty')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this) : null,
                    !loading && activeTab === 'available' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvailablePluginsPanel, {
                        plugins: availablePlugins,
                        pendingKey: pendingInstallEntry,
                        onOpenDetails: (plugin)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsAvailableTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'available_tab',
                                element: 'details',
                                plugin_id: plugin.entry.name,
                                plugin_type: plugin.marketplace.trust
                            });
                            setAvailableDetails(plugin);
                        },
                        onUseInstalled: (record)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsAvailableTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'available_tab',
                                element: 'install',
                                plugin_id: record.sourceMarketplaceEntryName ?? record.id,
                                plugin_type: record.marketplaceTrust ?? 'official'
                            });
                            void handleUsePlugin(record, 'use');
                        },
                        onInstall: (plugin)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsAvailableTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'available_tab',
                                element: 'install',
                                plugin_id: plugin.entry.name,
                                plugin_type: plugin.marketplace.trust
                            });
                            void handleInstallAvailable(plugin);
                        },
                        onSearchInput: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsAvailableTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'available_tab',
                                element: 'search_input'
                            }),
                        onSourceDropdown: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsAvailableTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'available_tab',
                                element: 'source_dropdown'
                            }),
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this) : null,
                    !loading && activeTab === 'sources' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourcesPanel, {
                        marketplaces: marketplaces,
                        pendingAction: pendingSourceAction,
                        onAdd: (url, trust)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsSourcesTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'sources_tab',
                                element: 'add_source'
                            });
                            void handleMarketplaceMutation('add', ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPluginMarketplace"])({
                                    url,
                                    trust
                                }));
                        },
                        onSourceUrlInput: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsSourcesTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'sources_tab',
                                element: 'source_url_input'
                            }),
                        onRefresh: (marketplace)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsSourcesTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'sources_tab',
                                element: 'refresh'
                            });
                            void handleMarketplaceMutation(`refresh:${marketplace.id}`, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshPluginMarketplace"])(marketplace.id));
                        },
                        onRemove: (marketplace)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginsSourcesTabClick"])(analytics.track, {
                                page_name: 'plugins',
                                area: 'sources_tab',
                                element: 'remove'
                            });
                            void handleMarketplaceMutation(`remove:${marketplace.id}`, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePluginMarketplace"])(marketplace.id));
                        },
                        onTrust: (marketplace, trust)=>void handleMarketplaceMutation(`trust:${marketplace.id}:${trust}`, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPluginMarketplaceTrust"])(marketplace.id, trust)),
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this) : null,
                    activeTab === 'team' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamPanel, {
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 540,
                        columnNumber: 33
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: detailsRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginDetailsModal"], {
                    record: detailsRecord,
                    onClose: ()=>setDetailsRecord(null),
                    onUse: (record)=>void handleUsePlugin(record, 'use'),
                    isApplying: pendingApplyId === detailsRecord.id
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 545,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: availableDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvailablePluginDetailsModal, {
                    plugin: availableDetails,
                    pending: pendingInstallEntry === availableDetails.key,
                    onClose: ()=>{
                        if (pendingInstallEntry !== availableDetails.key) setAvailableDetails(null);
                    },
                    onUseInstalled: (record)=>void handleUsePlugin(record, 'use'),
                    onInstall: (plugin)=>void handleInstallAvailable(plugin)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 555,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            shareConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PluginShareConfirmModal, {
                sourceRecord: shareConfirm.sourceRecord,
                action: shareConfirm.action,
                actionRecord: shareConfirm.actionRecord,
                pending: pendingShareAction?.pluginId === shareConfirm.sourceRecord.id && pendingShareAction.action === shareConfirm.action,
                onClose: ()=>{
                    if (!pendingShareAction) setShareConfirm(null);
                },
                onConfirm: ()=>void handleCreatePluginShareTask(shareConfirm.sourceRecord, shareConfirm.action)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this) : null,
            importOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PluginImportModal, {
                onClose: ()=>setImportOpen(false),
                onInstallSource: (source)=>finishImport(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installPluginSource"])(source)),
                onUploadZip: (file)=>finishImport(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadPluginZip"])(file)),
                onUploadFolder: (files)=>finishImport(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadPluginFolder"])(files))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 587,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
}
_s(PluginsView, "3wFrL89w9dv7GC+AZOquNShFL/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c = PluginsView;
function PluginShareConfirmModal({ sourceRecord, action, actionRecord, pending, onClose, onConfirm }) {
    _s1();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const details = PLUGIN_SHARE_DETAILS[action];
    const actionTitle = actionRecord ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, actionRecord) : details.fallbackTitle;
    const actionDescription = (actionRecord ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, actionRecord) : '') || details.fallbackDescription;
    const actionQuery = readLocalizedUseCaseQuery(actionRecord);
    const stagedPath = `plugin-source/${pluginShareSlug(sourceRecord.id)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        backdropClassName: "plugin-details-modal-backdrop plugin-share-confirm",
        className: "plugin-details-modal plugin-share-confirm__panel",
        includeChromeClassName: false,
        ariaLabel: `${actionTitle} for ${sourceRecord.title}`,
        onClose: pending ? undefined : onClose,
        "data-testid": "plugin-share-confirm-modal",
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
                                        children: actionTitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                        trust: "official",
                                        label: "Action plugin"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 634,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: details.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "· for ",
                                            sourceRecord.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this),
                                    actionRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "· v",
                                            actionRecord.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 639,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "plugin-details-modal__close",
                        onClick: onClose,
                        disabled: pending,
                        "aria-label": "Close share confirmation",
                        title: "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 650,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 630,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-details-modal__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "plugin-details-modal__section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__section-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "plugin-details-modal__section-title",
                                    children: "What this starts"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 657,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "plugin-details-modal__description",
                                children: actionDescription
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "plugin-share-confirm__steps",
                                children: details.steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: step
                                    }, step, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 655,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "plugin-details-modal__section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__section-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "plugin-details-modal__section-title",
                                    children: "Source plugin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 673,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 672,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "plugin-share-confirm__facts",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Plugin"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 679,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: sourceRecord.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 680,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 678,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: sourceRecord.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Copied to"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 689,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: stagedPath
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 688,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Trust"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                                    trust: sourceRecord.trust
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 696,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 677,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 671,
                        columnNumber: 11
                    }, this),
                    actionQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "plugin-details-modal__section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-details-modal__section-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "plugin-details-modal__section-title",
                                    children: "Action prompt"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 706,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 705,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "plugin-details-modal__query",
                                children: actionQuery
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 704,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 654,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "plugin-details-modal__foot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "plugin-details-modal__secondary",
                        onClick: onClose,
                        disabled: pending,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 716,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "plugin-details-modal__primary",
                        onClick: onConfirm,
                        disabled: pending,
                        "aria-busy": pending ? 'true' : undefined,
                        "data-testid": "plugin-share-confirm-start",
                        children: pending ? 'Starting…' : details.confirmLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 724,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 715,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 622,
        columnNumber: 5
    }, this);
}
_s1(PluginShareConfirmModal, "Q3DiGAK/uyrnMqFoR5UpUumBmSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c1 = PluginShareConfirmModal;
function readLocalizedUseCaseQuery(record) {
    const query = record?.manifest?.od?.useCase?.query;
    if (typeof query === 'string' && query.trim()) return query.trim();
    if (!query || typeof query !== 'object') return null;
    const dict = query;
    const preferred = dict.en ?? Object.values(dict).find((value)=>typeof value === 'string');
    return typeof preferred === 'string' && preferred.trim() ? preferred.trim() : null;
}
function pluginShareSlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/(^[-._]+|[-._]+$)/g, '') || 'open-design-plugin';
}
function StatCard({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-view__stat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "plugins-view__stat-value",
                children: value
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "plugins-view__stat-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 759,
        columnNumber: 5
    }, this);
}
_c2 = StatCard;
function pluginTabLabel(id, t) {
    switch(id){
        case 'installed':
            return t('pluginsView.tab.installed');
        case 'available':
            return t('pluginsView.tab.available');
        case 'sources':
            return t('pluginsView.tab.sources');
        case 'team':
            return t('pluginsView.tab.team');
    }
}
function pluginTabHint(id, t) {
    switch(id){
        case 'installed':
            return t('pluginsView.tabHint.installed');
        case 'available':
            return t('pluginsView.tabHint.available');
        case 'sources':
            return t('pluginsView.tabHint.sources');
        case 'team':
            return t('pluginsView.tabHint.team');
    }
}
function Notice({ outcome }) {
    const warnings = 'warnings' in outcome ? outcome.warnings : [];
    const log = 'log' in outcome ? outcome.log : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `plugins-view__notice${outcome.ok ? ' is-success' : ' is-error'}`,
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: outcome.message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this),
            warnings.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__notice-sub",
                children: [
                    warnings.length,
                    " warning",
                    warnings.length === 1 ? '' : 's'
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 795,
                columnNumber: 9
            }, this) : null,
            log.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "plugins-view__notice-log",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Install log"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 801,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: log.map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: line
                            }, `${line}-${idx}`, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 804,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 802,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 800,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 792,
        columnNumber: 5
    }, this);
}
_c3 = Notice;
function AvailablePluginsPanel({ plugins, pendingKey, onOpenDetails, onUseInstalled, onInstall, onSearchInput, onSourceDropdown, t }) {
    _s2();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sourceFilter, setSourceFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const searchTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sourceTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sourceOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvailablePluginsPanel.useMemo[sourceOptions]": ()=>buildAvailableSourceOptions(plugins)
    }["AvailablePluginsPanel.useMemo[sourceOptions]"], [
        plugins
    ]);
    const filteredPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvailablePluginsPanel.useMemo[filteredPlugins]": ()=>filterAvailablePlugins(plugins, {
                query,
                sourceFilter
            })
    }["AvailablePluginsPanel.useMemo[filteredPlugins]"], [
        plugins,
        query,
        sourceFilter
    ]);
    const filterActive = query.trim().length > 0 || sourceFilter !== 'all';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugins-view__section",
        "aria-labelledby": "plugins-available-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__section-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "plugins-available-title",
                                children: t('pluginsView.availableTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t('pluginsView.availableSubtitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 875,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-view__section-count",
                        children: filteredPlugins.length === plugins.length ? plugins.length : `${filteredPlugins.length} of ${plugins.length}`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 877,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            plugins.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__available-controls",
                "aria-label": t('pluginsView.availableFiltersAria'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-view__search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "search",
                                size: 13,
                                className: "plugins-view__search-icon"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 886,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "plugins-available-search",
                                type: "search",
                                "aria-label": t('pluginsView.searchAvailableAria'),
                                value: query,
                                onFocus: ()=>{
                                    if (searchTrackedRef.current) return;
                                    searchTrackedRef.current = true;
                                    onSearchInput?.();
                                },
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: t('pluginsView.searchAvailablePlaceholder')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this),
                            query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugins-view__search-clear",
                                onClick: ()=>setQuery(''),
                                "aria-label": t('pluginsView.clearAvailableSearch'),
                                title: t('pluginsHome.clearSearch'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 908,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 901,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 885,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "plugins-view__filter",
                        htmlFor: "plugins-available-source",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('pluginsView.source')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 913,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "plugins-available-source",
                                value: sourceFilter,
                                onFocus: ()=>{
                                    if (sourceTrackedRef.current) return;
                                    sourceTrackedRef.current = true;
                                    onSourceDropdown?.();
                                },
                                onChange: (event)=>setSourceFilter(event.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: t('promptTemplates.allSources')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, this),
                                    sourceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option.id,
                                            children: option.label
                                        }, option.id, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 912,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 884,
                columnNumber: 9
            }, this) : null,
            plugins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__empty",
                children: t('pluginsView.availableEmptyInstalled')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 935,
                columnNumber: 9
            }, this) : filteredPlugins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__empty",
                children: filterActive ? t('pluginsView.availableEmptyFiltered') : t('pluginsView.availableEmptyNoSources')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 939,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__available-list",
                children: filteredPlugins.map((plugin)=>{
                    const title = availablePluginTitle(plugin.entry, locale);
                    const installedRecord = plugin.installedRecord ?? null;
                    const description = availablePluginDescription(plugin.entry, locale);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "plugins-view__available-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-view__available-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plugins-view__row-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 954,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                                trust: plugin.marketplace.trust
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 955,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 953,
                                        columnNumber: 19
                                    }, this),
                                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 957,
                                        columnNumber: 34
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plugins-view__meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: plugin.entry.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 959,
                                                columnNumber: 21
                                            }, this),
                                            plugin.entry.version ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "v",
                                                    plugin.entry.version
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 960,
                                                columnNumber: 45
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: plugin.marketplace.manifest.name ?? plugin.marketplace.url
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 961,
                                                columnNumber: 21
                                            }, this),
                                            plugin.entry.tags?.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tag
                                                }, `${plugin.key}:${tag}`, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 963,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 958,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 952,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-view__row-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-view__secondary",
                                        onClick: ()=>onOpenDetails(plugin),
                                        "data-testid": `plugins-available-details-${plugin.entry.name}`,
                                        children: t('homeHero.details')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 968,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-view__primary",
                                        onClick: ()=>installedRecord ? onUseInstalled(installedRecord) : onInstall(plugin),
                                        disabled: !installedRecord && pendingKey === plugin.key,
                                        "data-testid": `plugins-available-install-${plugin.entry.name}`,
                                        children: installedRecord ? t('pluginCard.use') : pendingKey === plugin.key ? t('pluginsView.installing') : t('pluginsView.install')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 976,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 967,
                                columnNumber: 17
                            }, this)
                        ]
                    }, plugin.key, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 951,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 945,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 871,
        columnNumber: 5
    }, this);
}
_s2(AvailablePluginsPanel, "G8MUFYReqnhd5XeF0DdJh17pbVA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c4 = AvailablePluginsPanel;
function AvailablePluginDetailsModal({ plugin, pending, onClose, onUseInstalled, onInstall }) {
    _s3();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const versions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvailablePluginDetailsModal.useMemo[versions]": ()=>availablePluginVersions(plugin.entry)
    }["AvailablePluginDetailsModal.useMemo[versions]"], [
        plugin.entry
    ]);
    const [selectedVersion, setSelectedVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AvailablePluginDetailsModal.useState": ()=>versions[0]?.version ?? plugin.entry.version ?? 'latest'
    }["AvailablePluginDetailsModal.useState"]);
    const [copiedInstall, setCopiedInstall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedVersionInfo = versions.find((version)=>version.version === selectedVersion) ?? versions[0] ?? null;
    const title = availablePluginTitle(plugin.entry, locale);
    const sourceName = plugin.marketplace.manifest.name ?? plugin.marketplace.url;
    const publisher = plugin.entry.publisher;
    const publisherLabel = publisher?.id ?? publisher?.github ?? publisher?.url ?? null;
    const tags = plugin.entry.tags ?? [];
    const capabilitySummary = plugin.entry.capabilitiesSummary ?? [];
    const permissions = plugin.entry.permissions ?? [];
    const installCommand = buildAvailableInstallCommand(plugin.entry, selectedVersion);
    const selectedRef = selectedVersionInfo?.ref ?? null;
    const selectedIntegrity = selectedVersionInfo?.integrity ?? selectedVersionInfo?.dist?.integrity ?? null;
    const provenance = buildAvailablePluginProvenance({
        plugin,
        sourceName,
        version: selectedVersionInfo,
        t
    });
    const installedRecord = plugin.installedRecord ?? null;
    async function copyInstallCommand() {
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(installCommand);
        if (!ok) return;
        setCopiedInstall(true);
        window.setTimeout(()=>setCopiedInstall(false), 1500);
    }
    function installSelectedVersion() {
        if (installedRecord) {
            onUseInstalled(installedRecord);
            return;
        }
        onInstall({
            ...plugin,
            key: `${plugin.key}:${selectedVersion}`,
            installSource: `${plugin.entry.name}${selectedVersion && selectedVersion !== 'latest' ? `@${selectedVersion}` : ''}`,
            entry: selectedEntryForVersion(plugin.entry, selectedVersion)
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-details-modal-backdrop",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "plugins-available-details-title",
        onClick: (event)=>{
            if (!pending && event.target === event.currentTarget) onClose();
        },
        "data-testid": "plugins-available-details-modal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plugin-details-modal",
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
                                            id: "plugins-available-details-title",
                                            className: "plugin-details-modal__title",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                            trust: plugin.marketplace.trust
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1087,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: plugin.entry.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 15
                                        }, this),
                                        selectedVersion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "· v",
                                                selectedVersion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1091,
                                            columnNumber: 34
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "· ",
                                                sourceName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1092,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1089,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1079,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugin-details-modal__close",
                            onClick: onClose,
                            disabled: pending,
                            "aria-label": "Close available plugin details",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1095,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1078,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugin-details-modal__body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: t('plugins.availableDetails.provenance')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugin-details-modal__provenance-line",
                                    "data-testid": "plugins-available-provenance",
                                    children: provenance
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugin-details-modal__description",
                                    children: availablePluginDescription(plugin.entry, locale) ?? 'No description provided.'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1122,
                            columnNumber: 11
                        }, this),
                        installedRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: "Installed"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugin-details-modal__section-hint",
                                    children: "This official catalog entry is bundled with Open Design and is ready to use."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1132,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: t('plugins.availableDetails.install')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugins-view__version-install",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "plugins-view__version-select",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('plugins.availableDetails.version')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    "aria-label": t('plugins.availableDetails.pluginVersion'),
                                                    value: selectedVersion,
                                                    onChange: (event)=>{
                                                        setSelectedVersion(event.target.value);
                                                        setCopiedInstall(false);
                                                    },
                                                    children: versions.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: version.version,
                                                            disabled: version.yanked,
                                                            children: [
                                                                version.version,
                                                                version.deprecated ? t('plugins.availableDetails.versionDeprecatedSuffix') : '',
                                                                version.yanked ? t('plugins.availableDetails.versionYankedSuffix') : ''
                                                            ]
                                                        }, version.version, true, {
                                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugins-view__install-command",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    "data-testid": "plugins-available-install-command",
                                                    children: installCommand
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "plugin-details-modal__chip-btn",
                                                    onClick: ()=>void copyInstallCommand(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "copy",
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                            lineNumber: 1186,
                                                            columnNumber: 21
                                                        }, this),
                                                        copiedInstall ? t('plugins.availableDetails.copied') : t('plugins.availableDetails.copyInstallCommand')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 15
                                }, this),
                                selectedVersionInfo?.deprecated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugin-details-modal__section-hint",
                                    children: t('plugins.availableDetails.deprecatedPrefix', {
                                        message: selectedVersionInfo.deprecated === true ? t('plugins.availableDetails.deprecatedFallback') : selectedVersionInfo.deprecated
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 17
                                }, this) : null,
                                selectedVersionInfo?.yanked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugin-details-modal__section-hint",
                                    children: selectedVersionInfo.yankReason ? t('plugins.availableDetails.yankedWithReason', {
                                        reason: selectedVersionInfo.yankReason
                                    }) : t('plugins.availableDetails.yanked')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: "Catalog"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "plugin-details-modal__source",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Source"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: selectedVersionInfo?.source ?? plugin.entry.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1222,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 15
                                        }, this),
                                        selectedRef ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('plugins.availableDetails.ref')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: selectedRef
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 17
                                        }, this) : null,
                                        selectedIntegrity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('plugins.availableDetails.integrity')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: selectedIntegrity
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1237,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1234,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Catalog"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1242,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: sourceName
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Catalog URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: plugin.marketplace.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: plugin.marketplace.url
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1248,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 15
                                        }, this),
                                        plugin.entry.license ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "License"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: plugin.entry.license
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1256,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1254,
                                            columnNumber: 17
                                        }, this) : null,
                                        publisherLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Publisher"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: publisher?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: publisher.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: publisherLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 23
                                                    }, this) : publisherLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1260,
                                            columnNumber: 17
                                        }, this) : null,
                                        plugin.entry.homepage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Homepage"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: plugin.entry.homepage,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: plugin.entry.homepage
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1214,
                            columnNumber: 11
                        }, this),
                        permissions.length > 0 || tags.length > 0 || capabilitySummary.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "plugin-details-modal__section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__section-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "plugin-details-modal__section-title",
                                        children: "Metadata"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1289,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugin-details-modal__context",
                                    children: [
                                        permissions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__ctx-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__ctx-label",
                                                    children: t('plugins.availableDetails.permissions')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__chips",
                                                    children: permissions.map((permission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "plugin-details-modal__chip plugin-details-modal__chip--mono",
                                                            children: permission
                                                        }, permission, false, {
                                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1293,
                                            columnNumber: 19
                                        }, this) : null,
                                        tags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__ctx-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__ctx-label",
                                                    children: "Tags"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__chips",
                                                    children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "plugin-details-modal__chip",
                                                            children: tag
                                                        }, tag, false, {
                                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                            lineNumber: 1314,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1310,
                                            columnNumber: 19
                                        }, this) : null,
                                        capabilitySummary.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plugin-details-modal__ctx-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__ctx-label",
                                                    children: t('plugins.availableDetails.capabilitySummary')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1323,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "plugin-details-modal__chips",
                                                    children: capabilitySummary.map((capability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "plugin-details-modal__chip plugin-details-modal__chip--mono",
                                                            children: capability
                                                        }, capability, false, {
                                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                            lineNumber: 1328,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1287,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "plugin-details-modal__foot",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugin-details-modal__secondary",
                            onClick: onClose,
                            disabled: pending,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1344,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugin-details-modal__primary",
                            onClick: installSelectedVersion,
                            disabled: pending,
                            "aria-busy": pending ? 'true' : undefined,
                            "data-testid": `plugins-available-details-install-${plugin.entry.name}`,
                            children: installedRecord ? t('pluginCard.use') : pending ? t('pluginsView.installing') : t('pluginsView.install')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1352,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1343,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
            lineNumber: 1077,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 1067,
        columnNumber: 5
    }, this);
}
_s3(AvailablePluginDetailsModal, "JoypdL/5WQofvsf7wKN5MJMCuOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c5 = AvailablePluginDetailsModal;
function SourcesPanel({ marketplaces, pendingAction, onAdd, onSourceUrlInput, onRefresh, onRemove, onTrust, t }) {
    _s4();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [trust, setTrust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('restricted');
    const trimmedUrl = url.trim();
    const sourceUrlTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugins-view__section",
        "aria-labelledby": "plugins-sources-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__section-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "plugins-sources-title",
                                children: t('pluginsView.sourcesTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t('pluginsView.sourcesSubtitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1400,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-view__section-count",
                        children: marketplaces.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "plugins-view__source-manager",
                onSubmit: (event)=>{
                    event.preventDefault();
                    if (!trimmedUrl) return;
                    onAdd(trimmedUrl, trust);
                    setUrl('');
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "plugin-marketplace-url",
                        children: t('pluginsView.sourceUrl')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-view__source-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "plugin-marketplace-url",
                                value: url,
                                onFocus: ()=>{
                                    if (sourceUrlTrackedRef.current) return;
                                    sourceUrlTrackedRef.current = true;
                                    onSourceUrlInput?.();
                                },
                                onChange: (event)=>setUrl(event.target.value),
                                placeholder: "https://example.com/open-design-marketplace.json",
                                disabled: pendingAction === 'add'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: trust,
                                onChange: (event)=>setTrust(event.target.value),
                                disabled: pendingAction === 'add',
                                "aria-label": t('pluginsView.defaultTrust'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "restricted",
                                        children: t('pluginsView.trust.restricted')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "trusted",
                                        children: t('pluginsView.trust.trusted')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "official",
                                        children: t('pluginsView.trust.official')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1436,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "plugins-view__primary",
                                disabled: !trimmedUrl || pendingAction === 'add',
                                children: pendingAction === 'add' ? t('pluginsView.adding') : t('pluginsView.addSource')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1438,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1405,
                columnNumber: 7
            }, this),
            marketplaces.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__empty",
                children: t('pluginsView.sourcesEmpty')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1449,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-view__marketplaces",
                children: marketplaces.map((marketplace)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "plugins-view__marketplace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: marketplace.manifest.name ?? marketplace.url
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1457,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: marketplace.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: marketplace.url
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1458,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plugins-view__meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                                trust: marketplace.trust
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pluginsView.pluginsCount', {
                                                    n: marketplace.manifest.plugins?.length ?? 0
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1463,
                                                columnNumber: 19
                                            }, this),
                                            marketplace.version ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pluginsView.catalogVersion', {
                                                    version: marketplace.version
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1464,
                                                columnNumber: 42
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1461,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1456,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-view__source-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: marketplace.trust,
                                        onChange: (event)=>onTrust(marketplace, event.target.value),
                                        "aria-label": t('pluginsView.trustFor', {
                                            name: marketplace.manifest.name ?? marketplace.url
                                        }),
                                        disabled: pendingAction?.startsWith(`trust:${marketplace.id}:`),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "restricted",
                                                children: t('pluginsView.trust.restricted')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "trusted",
                                                children: t('pluginsView.trust.trusted')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "official",
                                                children: t('pluginsView.trust.official')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1468,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-view__secondary",
                                        onClick: ()=>onRefresh(marketplace),
                                        disabled: pendingAction === `refresh:${marketplace.id}`,
                                        children: pendingAction === `refresh:${marketplace.id}` ? t('pluginsView.refreshing') : t('designFiles.refresh')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-view__danger",
                                        onClick: ()=>onRemove(marketplace),
                                        disabled: pendingAction === `remove:${marketplace.id}`,
                                        children: pendingAction === `remove:${marketplace.id}` ? t('pluginsView.removing') : t('chat.comments.remove')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, marketplace.id, true, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1455,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1453,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 1396,
        columnNumber: 5
    }, this);
}
_s4(SourcesPanel, "FI0oaoECSDg6zw0GV6In5KGCf5M=");
_c6 = SourcesPanel;
function PluginImportModal({ onClose, onInstallSource, onUploadZip, onUploadFolder }) {
    _s5();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const importModalViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PluginImportModal.useEffect": ()=>{
            if (importModalViewFiredRef.current) return;
            importModalViewFiredRef.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginImportModalSurfaceView"])(analytics.track, {
                page_name: 'plugins',
                area: 'import_modal'
            });
        }
    }["PluginImportModal.useEffect"], [
        analytics.track
    ]);
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('github');
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [zipFile, setZipFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [folderFiles, setFolderFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [working, setWorking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function selectKind(next) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginImportModalClick"])(analytics.track, {
            page_name: 'plugins',
            area: 'import_modal',
            element: 'source_tab',
            import_source: next
        });
        setKind(next);
    }
    async function runImport() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginImportModalClick"])(analytics.track, {
            page_name: 'plugins',
            area: 'import_modal',
            element: 'import',
            import_source: kind
        });
        setWorking(true);
        try {
            let outcome = null;
            if (kind === 'github') {
                const trimmed = source.trim();
                if (trimmed) outcome = await onInstallSource(trimmed);
            } else if (kind === 'zip' && zipFile) {
                outcome = await onUploadZip(zipFile);
            } else if (kind === 'folder' && folderFiles.length > 0) {
                outcome = await onUploadFolder(folderFiles);
            }
            if (outcome) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginImportResult"])(analytics.track, {
                    page_name: 'plugins',
                    area: 'import_modal',
                    import_source: kind,
                    result: outcome.ok ? 'success' : 'failed',
                    ...outcome.ok ? {} : {
                        error_code: outcome.message ?? 'unknown'
                    }
                });
            }
        } finally{
            setWorking(false);
        }
    }
    const canSubmit = kind === 'github' && source.trim().length > 0 || kind === 'zip' && zipFile !== null || kind === 'folder' && folderFiles.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-import-modal__backdrop",
        role: "presentation",
        onMouseDown: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "plugins-import-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "plugins-import-title",
            onMouseDown: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "plugins-import-modal__head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "plugins-view__kicker",
                                    children: "User plugins"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1592,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "plugins-import-title",
                                    children: "Import a plugin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1593,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugins-import-modal__close",
                            onClick: onClose,
                            "aria-label": "Close import dialog",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                lineNumber: 1601,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1595,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1590,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "plugins-import-modal__tabs",
                    "aria-label": "Import source",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportChoice, {
                            active: kind === 'github',
                            icon: "github",
                            title: "From GitHub",
                            body: "Install github:owner/repo paths.",
                            onClick: ()=>selectKind('github')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportChoice, {
                            active: kind === 'zip',
                            icon: "upload",
                            title: "Upload zip",
                            body: "Upload a plugin archive.",
                            onClick: ()=>selectKind('zip')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1613,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportChoice, {
                            active: kind === 'folder',
                            icon: "folder",
                            title: "Upload folder",
                            body: "Upload a plugin directory.",
                            onClick: ()=>selectKind('folder')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1620,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1605,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugins-import-modal__body",
                    children: [
                        kind === 'github' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plugins-view__install-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "plugin-source",
                                    children: "GitHub, archive, or marketplace source"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1632,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugins-view__source-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "plugin-source",
                                            value: source,
                                            onChange: (event)=>setSource(event.target.value),
                                            placeholder: "github:owner/repo@main/plugins/my-plugin",
                                            disabled: working
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "plugins-view__primary",
                                            onClick: runImport,
                                            disabled: working || !canSubmit,
                                            children: working ? 'Importing…' : 'Import'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1633,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plugins-view__source-help",
                                    children: [
                                        "Supports ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "github:owner/repo[@ref][/subpath]"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1651,
                                            columnNumber: 26
                                        }, this),
                                        ", HTTPS",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: ".tar.gz"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1652,
                                            columnNumber: 17
                                        }, this),
                                        "/",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: ".tgz"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                            lineNumber: 1652,
                                            columnNumber: 38
                                        }, this),
                                        " archives, or marketplace plugin names."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                                    lineNumber: 1650,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1631,
                            columnNumber: 13
                        }, this) : null,
                        kind === 'zip' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileImportPanel, {
                            title: "Upload zip",
                            body: "Choose a .zip archive containing open-design.json, SKILL.md, or .claude-plugin/plugin.json.",
                            accept: ".zip,application/zip",
                            working: working,
                            fileLabel: zipFile?.name ?? 'No zip selected',
                            onChange: (files)=>setZipFile(files[0] ?? null),
                            onImport: runImport,
                            canSubmit: canSubmit
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1658,
                            columnNumber: 13
                        }, this) : null,
                        kind === 'folder' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileImportPanel, {
                            title: "Upload folder",
                            body: "Choose a plugin folder. Relative paths are preserved and installed into your user plugin registry.",
                            working: working,
                            fileLabel: folderFiles.length > 0 ? `${folderFiles.length} file${folderFiles.length === 1 ? '' : 's'} selected` : 'No folder selected',
                            folder: true,
                            onChange: setFolderFiles,
                            onImport: runImport,
                            canSubmit: canSubmit
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1671,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1629,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "plugins-import-modal__foot",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Imported plugins are user plugins and are stored separately from bundled official plugins."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1690,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugins-view__secondary",
                            onClick: ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginImportModalClick"])(analytics.track, {
                                    page_name: 'plugins',
                                    area: 'import_modal',
                                    element: 'cancel'
                                });
                                onClose();
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                            lineNumber: 1694,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1689,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/PluginsView.tsx",
            lineNumber: 1583,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 1582,
        columnNumber: 5
    }, this);
}
_s5(PluginImportModal, "gvGJl+3y9nBMf+KIdcaJen5F34s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c7 = PluginImportModal;
function ImportChoice({ active, icon, title, body, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `plugins-import-modal__choice${active ? ' is-active' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "plugins-import-modal__choice-icon",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 1734,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "plugins-import-modal__choice-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: body
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1738,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1736,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 1728,
        columnNumber: 5
    }, this);
}
_c8 = ImportChoice;
function FileImportPanel({ title, body, accept, working, fileLabel, folder, canSubmit, onChange, onImport }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugins-view__install-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: body
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1769,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "plugins-import-modal__file",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        "data-testid": folder ? 'plugins-folder-input' : 'plugins-zip-input',
                        ...accept ? {
                            accept
                        } : {},
                        ...folder ? {
                            webkitdirectory: '',
                            directory: ''
                        } : {},
                        multiple: folder,
                        disabled: working,
                        onChange: (event)=>onChange(Array.from(event.currentTarget.files ?? []))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1772,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: fileLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 1781,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "plugins-view__primary",
                onClick: onImport,
                disabled: working || !canSubmit,
                children: working ? 'Importing…' : 'Import'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 1783,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 1766,
        columnNumber: 5
    }, this);
}
_c9 = FileImportPanel;
function buildAvailablePlugins(marketplaces, installed) {
    const installedByName = new Map();
    for (const plugin of installed){
        for (const key of pluginLookupKeys(plugin)){
            installedByName.set(key, plugin);
        }
    }
    return marketplaces.flatMap((marketplace)=>{
        const entries = marketplace.manifest.plugins ?? [];
        return entries.flatMap((entry)=>{
            const installedPlugin = installedByName.get(normalizePluginName(entry.name)) ?? null;
            if (installedPlugin && installedPlugin.sourceKind !== 'bundled') return [];
            const installedRecord = installedPlugin && bundledPluginMatchesMarketplaceEntry(installedPlugin, marketplace, entry) ? installedPlugin : null;
            return [
                {
                    key: `${marketplace.id}:${entry.name}:${entry.version ?? ''}`,
                    marketplace,
                    entry,
                    ...installedRecord ? {
                        installedRecord
                    } : {}
                }
            ];
        });
    });
}
function bundledPluginMatchesMarketplaceEntry(plugin, marketplace, entry) {
    return plugin.sourceKind === 'bundled' && plugin.sourceMarketplaceId === marketplace.id && normalizePluginName(plugin.sourceMarketplaceEntryName ?? '') === normalizePluginName(entry.name);
}
function availablePluginTitle(entry, locale) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])(entry.title_i18n, locale) || entry.title || entry.name;
}
function availablePluginDescription(entry, locale) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])(entry.description_i18n, locale) || entry.description || null;
}
function availablePluginVersions(entry) {
    const byVersion = new Map();
    if (entry.version) {
        byVersion.set(entry.version, {
            version: entry.version,
            source: entry.source,
            ...entry.ref ? {
                ref: entry.ref
            } : {},
            ...entry.dist ? {
                dist: entry.dist
            } : {},
            ...entry.integrity ? {
                integrity: entry.integrity
            } : {},
            ...entry.manifestDigest ? {
                manifestDigest: entry.manifestDigest
            } : {},
            ...entry.deprecated !== undefined ? {
                deprecated: entry.deprecated
            } : {},
            ...entry.yanked !== undefined ? {
                yanked: entry.yanked
            } : {},
            ...entry.yankedAt ? {
                yankedAt: entry.yankedAt
            } : {},
            ...entry.yankReason ? {
                yankReason: entry.yankReason
            } : {}
        });
    }
    for (const version of entry.versions ?? []){
        const isCurrentVersion = version.version === entry.version;
        byVersion.set(version.version, {
            ...version,
            source: version.source ?? entry.source,
            ...version.ref ?? (isCurrentVersion ? entry.ref : undefined) ? {
                ref: version.ref ?? entry.ref
            } : {},
            ...version.dist ?? (isCurrentVersion ? entry.dist : undefined) ? {
                dist: version.dist ?? entry.dist
            } : {},
            ...version.integrity ?? (isCurrentVersion ? entry.integrity : undefined) ? {
                integrity: version.integrity ?? entry.integrity
            } : {},
            ...version.manifestDigest ?? (isCurrentVersion ? entry.manifestDigest : undefined) ? {
                manifestDigest: version.manifestDigest ?? entry.manifestDigest
            } : {}
        });
    }
    if (byVersion.size === 0) {
        byVersion.set('latest', {
            version: 'latest',
            source: entry.source,
            ...entry.ref ? {
                ref: entry.ref
            } : {},
            ...entry.dist ? {
                dist: entry.dist
            } : {},
            ...entry.integrity ? {
                integrity: entry.integrity
            } : {},
            ...entry.manifestDigest ? {
                manifestDigest: entry.manifestDigest
            } : {},
            ...entry.deprecated !== undefined ? {
                deprecated: entry.deprecated
            } : {},
            ...entry.yanked !== undefined ? {
                yanked: entry.yanked
            } : {},
            ...entry.yankedAt ? {
                yankedAt: entry.yankedAt
            } : {},
            ...entry.yankReason ? {
                yankReason: entry.yankReason
            } : {}
        });
    }
    return Array.from(byVersion.values());
}
function selectedEntryForVersion(entry, version) {
    const selected = availablePluginVersions(entry).find((item)=>item.version === version);
    const { ref: _ref, dist: _dist, integrity: _integrity, manifestDigest: _manifestDigest, deprecated: _deprecated, yanked: _yanked, yankedAt: _yankedAt, yankReason: _yankReason, ...entryBase } = entry;
    return {
        ...entryBase,
        version,
        source: selected?.source ?? entry.source,
        ...selected?.ref ? {
            ref: selected.ref
        } : {},
        ...selected?.dist ? {
            dist: selected.dist
        } : {},
        ...selected?.integrity ? {
            integrity: selected.integrity
        } : {},
        ...selected?.manifestDigest ? {
            manifestDigest: selected.manifestDigest
        } : {},
        ...selected?.deprecated !== undefined ? {
            deprecated: selected.deprecated
        } : {},
        ...selected?.yanked !== undefined ? {
            yanked: selected.yanked
        } : {},
        ...selected?.yankedAt ? {
            yankedAt: selected.yankedAt
        } : {},
        ...selected?.yankReason ? {
            yankReason: selected.yankReason
        } : {}
    };
}
function buildAvailableInstallCommand(entry, version) {
    const suffix = version && version !== 'latest' ? `@${version}` : '';
    return `od plugin install ${entry.name}${suffix}`;
}
function buildAvailablePluginProvenance({ plugin, sourceName, version, t }) {
    const source = version?.source ?? plugin.entry.source;
    const ref = version?.ref ?? null;
    const integrity = version?.integrity ?? version?.dist?.integrity ?? null;
    const resolved = ref ? `${source}@${ref}` : source;
    if (integrity) {
        return t('plugins.availableDetails.provenanceLineWithIntegrity', {
            source: sourceName,
            trust: plugin.marketplace.trust,
            resolved,
            integrity
        });
    }
    return t('plugins.availableDetails.provenanceLine', {
        source: sourceName,
        trust: plugin.marketplace.trust,
        resolved
    });
}
function buildAvailableSourceOptions(plugins) {
    const byId = new Map();
    for (const plugin of plugins){
        if (byId.has(plugin.marketplace.id)) continue;
        byId.set(plugin.marketplace.id, {
            id: plugin.marketplace.id,
            label: plugin.marketplace.manifest.name ?? plugin.marketplace.url
        });
    }
    return Array.from(byId.values()).sort((a, b)=>a.label.localeCompare(b.label));
}
function filterAvailablePlugins(plugins, filters) {
    const terms = filters.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return plugins.filter((plugin)=>{
        if (filters.sourceFilter !== 'all' && plugin.marketplace.id !== filters.sourceFilter) {
            return false;
        }
        if (terms.length === 0) return true;
        const haystack = availablePluginSearchText(plugin);
        return terms.every((term)=>haystack.includes(term));
    });
}
function availablePluginSearchText(plugin) {
    const { entry, marketplace } = plugin;
    const parts = [
        entry.name,
        entry.title,
        ...localizedValues(entry.title_i18n),
        entry.description,
        ...localizedValues(entry.description_i18n),
        entry.source,
        entry.version,
        entry.homepage,
        entry.license,
        entry.publisher?.id,
        entry.publisher?.github,
        entry.publisher?.url,
        marketplace.id,
        marketplace.url,
        marketplace.trust,
        marketplace.manifest.name,
        ...entry.tags ?? [],
        ...entry.capabilitiesSummary ?? []
    ];
    return parts.filter((part)=>typeof part === 'string').join(' ').toLowerCase();
}
function localizedValues(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return [];
    return Object.values(value).filter((part)=>typeof part === 'string');
}
function pluginLookupKeys(plugin) {
    const keys = new Set();
    keys.add(normalizePluginName(plugin.id));
    if (plugin.manifest?.name) keys.add(normalizePluginName(plugin.manifest.name));
    if (plugin.sourceMarketplaceEntryName) {
        keys.add(normalizePluginName(plugin.sourceMarketplaceEntryName));
    }
    return Array.from(keys);
}
function normalizePluginName(name) {
    return name.trim().toLowerCase();
}
function TeamPanel({ t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "plugins-view__team",
        "aria-labelledby": "plugins-team-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "plugins-view__future-icon",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "sparkles",
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                    lineNumber: 2058,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 2057,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "plugins-view__kicker",
                        children: t('tasks.comingSoon')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 2061,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "plugins-team-title",
                        children: t('pluginsView.teamTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 2062,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t('pluginsView.teamBody')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                        lineNumber: 2063,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/PluginsView.tsx",
                lineNumber: 2060,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/PluginsView.tsx",
        lineNumber: 2056,
        columnNumber: 5
    }, this);
}
_c10 = TeamPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "PluginsView");
__turbopack_context__.k.register(_c1, "PluginShareConfirmModal");
__turbopack_context__.k.register(_c2, "StatCard");
__turbopack_context__.k.register(_c3, "Notice");
__turbopack_context__.k.register(_c4, "AvailablePluginsPanel");
__turbopack_context__.k.register(_c5, "AvailablePluginDetailsModal");
__turbopack_context__.k.register(_c6, "SourcesPanel");
__turbopack_context__.k.register(_c7, "PluginImportModal");
__turbopack_context__.k.register(_c8, "ImportChoice");
__turbopack_context__.k.register(_c9, "FileImportPanel");
__turbopack_context__.k.register(_c10, "TeamPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_PluginsView_tsx_13bxiqf._.js.map