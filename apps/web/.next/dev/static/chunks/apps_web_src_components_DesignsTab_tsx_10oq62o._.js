(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/DesignsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignsTab",
    ()=>DesignsTab,
    "STATUS_LABEL_KEYS",
    ()=>STATUS_LABEL_KEYS,
    "STATUS_ORDER",
    ()=>STATUS_ORDER
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-system-project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LiveArtifactBadges.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
const DESIGNS_VIEW_STORAGE_KEY = "od:designs:view";
const PROJECTS_AUTO_REFRESH_MS = 15000;
const STATUS_ORDER = [
    "not_started",
    "running",
    "awaiting_input",
    "succeeded",
    "failed",
    "canceled"
];
const STATUS_LABEL_KEYS = {
    not_started: "designs.status.notStarted",
    queued: "designs.status.queued",
    running: "designs.status.running",
    awaiting_input: "designs.status.awaitingInput",
    succeeded: "designs.status.succeeded",
    failed: "designs.status.failed",
    canceled: "designs.status.canceled"
};
function DesignsTab({ projects, skills, designSystems, onOpen, onOpenLiveArtifact, onDelete, onRename, onNewProject, onRefresh, isActive = true }) {
    _s();
    const renameTitleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const confirmTitleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // P0 page_view page_name=projects — fire once when the tab mounts so
    // `/projects` landings register even before the user clicks anything.
    // ref-keyed to survive re-renders that flip parent state without
    // remounting DesignsTab, mirroring the pattern in HomeView.
    const projectsPageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            if (projectsPageViewFiredRef.current) return;
            projectsPageViewFiredRef.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'projects'
            });
        }
    }["DesignsTab.useEffect"], [
        analytics.track
    ]);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sub, setSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recent");
    const [liveArtifactsByProject, setLiveArtifactsByProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [coverByProject, setCoverByProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [menuOpenId, setMenuOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectMode, setSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toastIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [designsToast, setDesignsToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [projectsRefreshing, setProjectsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectsRefreshInFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [renameTarget, setRenameTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renameInput, setRenameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmTarget, setConfirmTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignsTab.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const storedView = window.localStorage.getItem(DESIGNS_VIEW_STORAGE_KEY);
                return storedView === "grid" || storedView === "kanban" ? storedView : "grid";
            } catch  {
                return "grid";
            }
        }
    }["DesignsTab.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            let cancelled = false;
            const projectIds = projects.map({
                "DesignsTab.useEffect.projectIds": (project)=>project.id
            }["DesignsTab.useEffect.projectIds"]);
            if (projectIds.length === 0) {
                setLiveArtifactsByProject({});
                return;
            }
            void Promise.all(projectIds.map({
                "DesignsTab.useEffect": async (projectId)=>[
                        projectId,
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLiveArtifacts"])(projectId)
                    ]
            }["DesignsTab.useEffect"])).then({
                "DesignsTab.useEffect": (entries)=>{
                    if (cancelled) return;
                    setLiveArtifactsByProject(Object.fromEntries(entries));
                }
            }["DesignsTab.useEffect"]);
            return ({
                "DesignsTab.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignsTab.useEffect"];
        }
    }["DesignsTab.useEffect"], [
        projects
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            let cancelled = false;
            if (projects.length === 0) {
                setCoverByProject({});
                return;
            }
            void Promise.all(projects.map({
                "DesignsTab.useEffect": async (project)=>{
                    const designSystemProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemProject"])(project);
                    // Brand projects render a generated logo/monogram cover (see
                    // projectCover) instead of a raw HTML file preview, so skip the
                    // file scan entirely for them.
                    if (project.metadata?.kind === "brand") return [
                        project.id,
                        null
                    ];
                    if (project.metadata?.entryFile && !designSystemProject) return [
                        project.id,
                        null
                    ];
                    let files;
                    try {
                        files = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFiles"])(project.id);
                    } catch  {
                        return [
                            project.id,
                            null
                        ];
                    }
                    if (designSystemProject) {
                        const logo = findDesignSystemLogoFile(files);
                        if (logo) {
                            return [
                                project.id,
                                {
                                    kind: "logo",
                                    name: logo.path ?? logo.name
                                }
                            ];
                        }
                        return [
                            project.id,
                            null
                        ];
                    }
                    const html = files.find({
                        "DesignsTab.useEffect": (f)=>(f.path ?? f.name) === "index.html"
                    }["DesignsTab.useEffect"]) ?? files.filter({
                        "DesignsTab.useEffect": (f)=>f.kind === "html"
                    }["DesignsTab.useEffect"]).sort({
                        "DesignsTab.useEffect": (a, b)=>b.mtime - a.mtime
                    }["DesignsTab.useEffect"])[0];
                    if (html) {
                        return [
                            project.id,
                            {
                                kind: "html",
                                name: html.path ?? html.name
                            }
                        ];
                    }
                    const image = files.filter({
                        "DesignsTab.useEffect": (f)=>f.kind === "image"
                    }["DesignsTab.useEffect"]).sort({
                        "DesignsTab.useEffect": (a, b)=>b.mtime - a.mtime
                    }["DesignsTab.useEffect"])[0];
                    if (image) {
                        return [
                            project.id,
                            {
                                kind: "image",
                                name: image.path ?? image.name
                            }
                        ];
                    }
                    const video = files.filter({
                        "DesignsTab.useEffect": (f)=>f.kind === "video"
                    }["DesignsTab.useEffect"]).sort({
                        "DesignsTab.useEffect": (a, b)=>b.mtime - a.mtime
                    }["DesignsTab.useEffect"])[0];
                    if (video) {
                        return [
                            project.id,
                            {
                                kind: "video",
                                name: video.path ?? video.name
                            }
                        ];
                    }
                    return [
                        project.id,
                        null
                    ];
                }
            }["DesignsTab.useEffect"])).then({
                "DesignsTab.useEffect": (entries)=>{
                    if (cancelled) return;
                    setCoverByProject(Object.fromEntries(entries));
                }
            }["DesignsTab.useEffect"]);
            return ({
                "DesignsTab.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignsTab.useEffect"];
        }
    }["DesignsTab.useEffect"], [
        projects
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            if (!menuOpenId) return;
            const onDocClick = {
                "DesignsTab.useEffect.onDocClick": (e)=>{
                    const el = menuContainerRef.current;
                    if (el && el.contains(e.target)) return;
                    setMenuOpenId(null);
                }
            }["DesignsTab.useEffect.onDocClick"];
            const onKey = {
                "DesignsTab.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpenId(null);
                }
            }["DesignsTab.useEffect.onKey"];
            window.addEventListener("mousedown", onDocClick);
            window.addEventListener("keydown", onKey);
            return ({
                "DesignsTab.useEffect": ()=>{
                    window.removeEventListener("mousedown", onDocClick);
                    window.removeEventListener("keydown", onKey);
                }
            })["DesignsTab.useEffect"];
        }
    }["DesignsTab.useEffect"], [
        menuOpenId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            // Drop selected ids that no longer exist
            setSelected({
                "DesignsTab.useEffect": (curr)=>{
                    const valid = new Set(projects.map({
                        "DesignsTab.useEffect": (p)=>p.id
                    }["DesignsTab.useEffect"]));
                    let changed = false;
                    const next = new Set();
                    curr.forEach({
                        "DesignsTab.useEffect": (id)=>{
                            if (valid.has(id)) next.add(id);
                            else changed = true;
                        }
                    }["DesignsTab.useEffect"]);
                    return changed ? next : curr;
                }
            }["DesignsTab.useEffect"]);
        }
    }["DesignsTab.useEffect"], [
        projects
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            try {
                window.localStorage.setItem(DESIGNS_VIEW_STORAGE_KEY, view);
            } catch  {}
        }
    }["DesignsTab.useEffect"], [
        view
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            if (view === "kanban" && selectMode) exitSelectMode();
        }
    }["DesignsTab.useEffect"], [
        selectMode,
        view
    ]);
    const refreshProjectsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignsTab.useCallback[refreshProjectsList]": async (source)=>{
            if (!onRefresh || projectsRefreshInFlightRef.current) return;
            projectsRefreshInFlightRef.current = true;
            setProjectsRefreshing(true);
            if (source === "manual") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                    page_name: "projects",
                    area: "list_controls",
                    element: "refresh"
                });
            }
            try {
                await onRefresh();
            } catch  {
                if (source === "manual") {
                    setDesignsToast({
                        id: toastIdRef.current += 1,
                        message: t("liveArtifact.refresh.networkFailure"),
                        role: "alert",
                        tone: "error"
                    });
                }
            } finally{
                projectsRefreshInFlightRef.current = false;
                setProjectsRefreshing(false);
            }
        }
    }["DesignsTab.useCallback[refreshProjectsList]"], [
        analytics.track,
        onRefresh,
        t
    ]);
    const refreshProjectsListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(refreshProjectsList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            refreshProjectsListRef.current = refreshProjectsList;
        }
    }["DesignsTab.useEffect"], [
        refreshProjectsList
    ]);
    const hasProjectsRefresh = Boolean(onRefresh);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignsTab.useEffect": ()=>{
            if (!isActive || !hasProjectsRefresh) return;
            const refreshIfVisible = {
                "DesignsTab.useEffect.refreshIfVisible": ()=>{
                    if (document.visibilityState !== "visible") return;
                    void refreshProjectsListRef.current("auto");
                }
            }["DesignsTab.useEffect.refreshIfVisible"];
            refreshIfVisible();
            const interval = window.setInterval(refreshIfVisible, PROJECTS_AUTO_REFRESH_MS);
            window.addEventListener("focus", refreshIfVisible);
            document.addEventListener("visibilitychange", refreshIfVisible);
            return ({
                "DesignsTab.useEffect": ()=>{
                    window.clearInterval(interval);
                    window.removeEventListener("focus", refreshIfVisible);
                    document.removeEventListener("visibilitychange", refreshIfVisible);
                }
            })["DesignsTab.useEffect"];
        }
    }["DesignsTab.useEffect"], [
        hasProjectsRefresh,
        isActive
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignsTab.useMemo[filtered]": ()=>{
            const q = filter.trim().toLowerCase();
            let list = projects.filter({
                "DesignsTab.useMemo[filtered].list": (project)=>!shouldHideProjectCard(project, liveArtifactsByProject[project.id] ?? [])
            }["DesignsTab.useMemo[filtered].list"]).map({
                "DesignsTab.useMemo[filtered].list": (project)=>({
                        type: "project",
                        project,
                        updatedAt: project.updatedAt,
                        createdAt: project.createdAt
                    })
            }["DesignsTab.useMemo[filtered].list"]);
            const liveItems = projects.flatMap({
                "DesignsTab.useMemo[filtered].liveItems": (project)=>(liveArtifactsByProject[project.id] ?? []).map({
                        "DesignsTab.useMemo[filtered].liveItems": (liveArtifact)=>({
                                type: "live-artifact",
                                project,
                                liveArtifact,
                                updatedAt: Date.parse(liveArtifact.updatedAt) || project.updatedAt,
                                createdAt: Date.parse(liveArtifact.createdAt) || project.createdAt
                            })
                    }["DesignsTab.useMemo[filtered].liveItems"])
            }["DesignsTab.useMemo[filtered].liveItems"]);
            list = [
                ...list,
                ...liveItems
            ];
            if (sub === "recent") {
                list = [
                    ...list
                ].sort({
                    "DesignsTab.useMemo[filtered]": (a, b)=>b.updatedAt - a.updatedAt
                }["DesignsTab.useMemo[filtered]"]);
            }
            if (sub === "yours") {
                list = [
                    ...list
                ].sort({
                    "DesignsTab.useMemo[filtered]": (a, b)=>b.createdAt - a.createdAt
                }["DesignsTab.useMemo[filtered]"]);
            }
            if (!q) return list;
            return list.filter({
                "DesignsTab.useMemo[filtered]": (item)=>{
                    if (item.project.name.toLowerCase().includes(q)) return true;
                    return item.type === "live-artifact" && item.liveArtifact.title.toLowerCase().includes(q);
                }
            }["DesignsTab.useMemo[filtered]"]);
        }
    }["DesignsTab.useMemo[filtered]"], [
        projects,
        liveArtifactsByProject,
        filter,
        sub
    ]);
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignsTab.useMemo[filteredProjects]": ()=>filtered.filter({
                "DesignsTab.useMemo[filteredProjects]": (item)=>item.type === "project"
            }["DesignsTab.useMemo[filteredProjects]"])
    }["DesignsTab.useMemo[filteredProjects]"], [
        filtered
    ]);
    const skillName = (id)=>skills.find((s)=>s.id === id)?.name ?? "";
    const dsName = (id)=>designSystems.find((d)=>d.id === id)?.title ?? "";
    const toggleSelected = (id)=>{
        setSelected((curr)=>{
            const next = new Set(curr);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const exitSelectMode = ()=>{
        setSelectMode(false);
        setSelected(new Set());
    };
    const handleRenameProject = (project)=>{
        setRenameTarget({
            id: project.id,
            original: project.name
        });
        setRenameInput(project.name);
    };
    const commitRename = ()=>{
        if (!renameTarget) return;
        const trimmed = renameInput.trim();
        if (trimmed && trimmed !== renameTarget.original) {
            onRename?.(renameTarget.id, trimmed);
        }
        setRenameTarget(null);
        setRenameInput("");
    };
    const cancelRename = ()=>{
        setRenameTarget(null);
        setRenameInput("");
    };
    const handleDeleteProject = (project)=>{
        setConfirmTarget({
            title: t("designs.deleteTitle"),
            message: t("designs.deleteConfirm", {
                name: project.name
            }),
            confirmLabel: t("designs.menuDelete"),
            onConfirm: ()=>onDelete(project.id)
        });
    };
    const handleBatchDelete = ()=>{
        const ids = Array.from(selected);
        if (ids.length === 0) return;
        setConfirmTarget({
            title: t("designs.deleteTitle"),
            message: t("designs.deleteSelectedConfirm", {
                n: ids.length
            }),
            confirmLabel: t("designs.deleteSelected"),
            onConfirm: async ()=>{
                const results = await Promise.all(ids.map(async (id)=>{
                    try {
                        const result = await onDelete(id);
                        return result !== false;
                    } catch  {
                        return false;
                    }
                }));
                const deleted = results.filter(Boolean).length;
                const failed = results.length - deleted;
                exitSelectMode();
                const message = failed > 0 ? t("designs.deleteSelectedPartial", {
                    deleted,
                    failed
                }) : t("designs.deleteSelectedSuccess", {
                    n: deleted
                });
                setDesignsToast({
                    id: toastIdRef.current += 1,
                    message,
                    tone: "success"
                });
            }
        });
    };
    const handleDeleteLiveArtifact = async (projectId, artifact)=>{
        setConfirmTarget({
            title: t("common.delete"),
            message: `${t("common.delete")} "${artifact.title}"?`,
            confirmLabel: t("designs.menuDelete"),
            onConfirm: async ()=>{
                const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteLiveArtifact"])(projectId, artifact.id);
                if (!ok) return;
                setLiveArtifactsByProject((current)=>({
                        ...current,
                        [projectId]: (current[projectId] ?? []).filter((candidate)=>candidate.id !== artifact.id)
                    }));
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `tab-panel${view === "kanban" ? " design-kanban-view" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-panel-toolbar designs-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "subtab-pill",
                            role: "group",
                            "aria-label": t("designs.filterAria"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-pressed": sub === "recent",
                                    className: sub === "recent" ? "active" : "",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                            page_name: "projects",
                                            area: "list_controls",
                                            element: "recent"
                                        });
                                        setSub("recent");
                                    },
                                    children: t("designs.subRecent")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 499,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-pressed": sub === "yours",
                                    className: sub === "yours" ? "active" : "",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                            page_name: "projects",
                                            area: "list_controls",
                                            element: "your_designs"
                                        });
                                        setSub("yours");
                                    },
                                    children: t("designs.subYours")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 513,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                            lineNumber: 494,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 493,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "toolbar-search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "search-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "search",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 532,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 531,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: t("designs.searchPlaceholder"),
                                        value: filter,
                                        onChange: (e)=>setFilter(e.target.value),
                                        onFocus: ()=>{
                                            // P0 ui_click area=list_controls element=search_input.
                                            // Tracked on focus rather than every keystroke so each
                                            // engagement counts once.
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                                page_name: "projects",
                                                area: "list_controls",
                                                element: "search_input"
                                            });
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 534,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 530,
                                columnNumber: 6
                            }, this),
                            onRefresh ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "designs-refresh-button",
                                onClick: ()=>void refreshProjectsList("manual"),
                                disabled: projectsRefreshing,
                                title: projectsRefreshing ? t("designs.statusRefreshing") : t("designFiles.refresh"),
                                "aria-label": projectsRefreshing ? t("designs.statusRefreshing") : t("designFiles.refresh"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: projectsRefreshing ? "spinner" : "refresh",
                                        size: 13,
                                        className: projectsRefreshing ? "icon-spin" : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 567,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: projectsRefreshing ? t("designs.statusRefreshing") : t("designFiles.refresh")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 572,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 551,
                                columnNumber: 7
                            }, this) : null,
                            view === "grid" && selectMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "designs-select-bar",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "designs-select-count",
                                        children: t("designs.selectedCount", {
                                            n: selected.size
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 581,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "designs-select-delete",
                                        disabled: selected.size === 0,
                                        onClick: handleBatchDelete,
                                        children: t("designs.deleteSelected")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 584,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "designs-select-cancel",
                                        onClick: exitSelectMode,
                                        children: t("designs.cancelSelect")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 592,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 580,
                                columnNumber: 7
                            }, this) : view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "designs-select-toggle",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                        page_name: "projects",
                                        area: "list_controls",
                                        element: "select"
                                    });
                                    setSelectMode(true);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 613,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("designs.selectMode")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 614,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 601,
                                columnNumber: 7
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "subtab-pill",
                                role: "group",
                                "aria-label": t("designs.viewToggleAria"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-pressed": view === "grid",
                                        className: view === "grid" ? "active" : "",
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                                page_name: "projects",
                                                area: "list_controls",
                                                element: "grid_view"
                                            });
                                            setView("grid");
                                        },
                                        title: t("designs.viewGrid"),
                                        "data-testid": "designs-view-grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "grid",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 636,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 622,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-pressed": view === "kanban",
                                        className: view === "kanban" ? "active" : "",
                                        onClick: ()=>{
                                            // Kanban view substitutes for the contract's
                                            // list_view element.
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                                page_name: "projects",
                                                area: "list_controls",
                                                element: "list_view"
                                            });
                                            setView("kanban");
                                        },
                                        title: t("designs.viewKanban"),
                                        "data-testid": "designs-view-kanban",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "kanban",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 654,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 638,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 617,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 529,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 492,
                columnNumber: 4
            }, this),
            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-empty",
                children: projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "designs-empty-state",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "designs-empty-title",
                            children: t("designs.emptyNoProjects")
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                            lineNumber: 663,
                            columnNumber: 8
                        }, this),
                        onNewProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "primary designs-empty-cta",
                            onClick: ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListControlsClick"])(analytics.track, {
                                    page_name: "projects",
                                    area: "list_controls",
                                    element: "create_project"
                                });
                                onNewProject();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("entry.navNewProject")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 679,
                                columnNumber: 10
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                            lineNumber: 667,
                            columnNumber: 9
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                    lineNumber: 662,
                    columnNumber: 7
                }, this) : t("designs.emptyNoMatch")
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 660,
                columnNumber: 5
            }, this) : view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "design-grid",
                children: filtered.map((item)=>{
                    const p = item.project;
                    const skill = skillName(p.skillId);
                    const ds = dsName(p.designSystemId);
                    if (item.type === "live-artifact") {
                        const artifact = item.liveArtifact;
                        const title = liveArtifactCardTitle(p, artifact);
                        const metaLead = liveArtifactCardMetaLead(p, artifact);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `design-card live-artifact-card status-${artifact.status} refresh-${artifact.refreshStatus}`,
                            role: "button",
                            tabIndex: 0,
                            onClick: ()=>onOpenLiveArtifact(p.id, artifact.id),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    onOpenLiveArtifact(p.id, artifact.id);
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "design-card-close",
                                    title: t("common.delete"),
                                    "aria-label": `${t("common.delete")} ${artifact.title}`,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        void handleDeleteLiveArtifact(p.id, artifact);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 721,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 711,
                                    columnNumber: 10
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "design-card-thumb live-artifact-thumb",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        className: "thumb-iframe",
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveArtifactPreviewUrl"])(p.id, artifact.id),
                                        title: "",
                                        loading: "lazy",
                                        sandbox: "allow-scripts",
                                        tabIndex: -1
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 727,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 723,
                                    columnNumber: 10
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "design-card-meta-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectTag, {
                                            category: "live-artifact"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 737,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveArtifactBadges"], {
                                            className: "design-card-badges",
                                            status: artifact.status,
                                            refreshStatus: artifact.refreshStatus
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 738,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "design-card-name",
                                            title: title,
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 743,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "design-card-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds",
                                                    children: metaLead
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 12
                                                }, this),
                                                " · ",
                                                artifactStatusLabel(artifact.status, artifact.refreshStatus, t),
                                                " · ",
                                                relativeTime(item.updatedAt, t)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 746,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 736,
                                    columnNumber: 10
                                }, this)
                            ]
                        }, `live:${artifact.id}`, true, {
                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                            lineNumber: 698,
                            columnNumber: 9
                        }, this);
                    }
                    const liveCount = liveArtifactsByProject[p.id]?.length ?? 0;
                    const status = p.status?.value ?? "not_started";
                    const cover = projectCover(p, coverByProject[p.id] ?? null);
                    const isSelected = selected.has(p.id);
                    const designSystemProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemProject"])(p);
                    const publishedDesignSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublishedDesignSystemProject"])(p, designSystems);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `design-card${isSelected ? " is-selected" : ""}${selectMode ? " select-mode" : ""}${designSystemProject ? " is-design-system-project" : ""}`,
                        role: "button",
                        tabIndex: 0,
                        onClick: ()=>{
                            if (selectMode) {
                                toggleSelected(p.id);
                            } else {
                                // P0 ui_click area=list element=project_card.
                                const projectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(p.metadata?.kind, p.metadata?.videoModel);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListClick"])(analytics.track, {
                                    page_name: "projects",
                                    area: "list",
                                    element: "project_card",
                                    project_id: p.id,
                                    ...projectKind ? {
                                        project_kind: projectKind
                                    } : {}
                                });
                                onOpen(p.id);
                            }
                        },
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                if (selectMode) toggleSelected(p.id);
                                else onOpen(p.id);
                            }
                        },
                        children: [
                            selectMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `design-card-checkbox${isSelected ? " checked" : ""}`,
                                "aria-hidden": true,
                                children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 803,
                                    columnNumber: 25
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 799,
                                columnNumber: 10
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "design-card-menu-anchor",
                                ref: menuOpenId === p.id ? menuContainerRef : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "design-card-more",
                                        "aria-label": t("designs.menuMore"),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": menuOpenId === p.id,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setMenuOpenId((cur)=>{
                                                const nextId = cur === p.id ? null : p.id;
                                                if (nextId === p.id) {
                                                    const projectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(p.metadata?.kind, p.metadata?.videoModel);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsListClick"])(analytics.track, {
                                                        page_name: "projects",
                                                        area: "list",
                                                        element: "more",
                                                        project_id: p.id,
                                                        ...projectKind ? {
                                                            project_kind: projectKind
                                                        } : {}
                                                    });
                                                }
                                                return nextId;
                                            });
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "more-horizontal",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 834,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 810,
                                        columnNumber: 11
                                    }, this),
                                    menuOpenId === p.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "design-card-menu",
                                        role: "menu",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "menuitem",
                                                onClick: ()=>{
                                                    const projectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(p.metadata?.kind, p.metadata?.videoModel);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsMorePopoverClick"])(analytics.track, {
                                                        page_name: "projects",
                                                        area: "projects_more_popover",
                                                        element: "rename",
                                                        project_id: p.id,
                                                        ...projectKind ? {
                                                            project_kind: projectKind
                                                        } : {}
                                                    });
                                                    setMenuOpenId(null);
                                                    handleRenameProject(p);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "pencil",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("designs.menuRename")
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 842,
                                                columnNumber: 12
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "menuitem",
                                                className: "danger",
                                                onClick: ()=>{
                                                    const projectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(p.metadata?.kind, p.metadata?.videoModel);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectsMorePopoverClick"])(analytics.track, {
                                                        page_name: "projects",
                                                        area: "projects_more_popover",
                                                        element: "delete",
                                                        project_id: p.id,
                                                        ...projectKind ? {
                                                            project_kind: projectKind
                                                        } : {}
                                                    });
                                                    setMenuOpenId(null);
                                                    handleDeleteProject(p);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "close",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("designs.menuDelete")
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 861,
                                                columnNumber: 12
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 837,
                                        columnNumber: 11
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 806,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `design-card-thumb project-thumb project-thumb-${cover.kind}`,
                                style: cover.style,
                                "aria-hidden": true,
                                children: [
                                    cover.kind === "brand" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectBrandCover, {
                                        brandId: cover.brandId,
                                        host: cover.brandHost,
                                        initial: cover.initial
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 891,
                                        columnNumber: 11
                                    }, this) : (cover.kind === "image" || cover.kind === "logo") && cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "thumb-media",
                                        src: cover.src,
                                        alt: "",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 897,
                                        columnNumber: 11
                                    }, this) : cover.kind === "video" && cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        className: "thumb-media",
                                        src: cover.src,
                                        muted: true,
                                        preload: "metadata",
                                        playsInline: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 899,
                                        columnNumber: 11
                                    }, this) : cover.kind === "html" && cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        className: "thumb-iframe",
                                        src: cover.src,
                                        title: "",
                                        loading: "lazy",
                                        sandbox: "allow-scripts",
                                        tabIndex: -1
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 901,
                                        columnNumber: 11
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "project-thumb-glyph",
                                        children: cover.initial
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 910,
                                        columnNumber: 11
                                    }, this),
                                    liveCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "design-live-count",
                                        children: t("designs.liveCount", {
                                            n: liveCount
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 913,
                                        columnNumber: 11
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 885,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "design-card-meta-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "design-card-tag-row",
                                        children: designSystemProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemProjectTag, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 921,
                                            columnNumber: 12
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectTag, {
                                            category: projectCategory(p)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                            lineNumber: 923,
                                            columnNumber: 12
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 919,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "design-card-name",
                                        title: p.name,
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 926,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "design-card-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "design-card-meta-main",
                                                children: [
                                                    ds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ds",
                                                        children: ds
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 13
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("designs.cardFreeform")
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 13
                                                    }, this),
                                                    skill ? ` · ${skill}` : "",
                                                    " · ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `design-card-status design-card-status-${publishedDesignSystem ? "published" : status}`,
                                                        children: publishedDesignSystem ? t("designs.status.published") : statusLabel(status, t)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 930,
                                                columnNumber: 11
                                            }, this),
                                            sub === "recent" || sub === "yours" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "design-card-meta-time",
                                                children: relativeTime(p.updatedAt, t)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 945,
                                                columnNumber: 12
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 929,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 918,
                                columnNumber: 9
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 769,
                        columnNumber: 8
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 688,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "design-kanban-board",
                children: STATUS_ORDER.map((status)=>{
                    const colProjects = filteredProjects.filter((item)=>normalizeStatus(item.project.status?.value ?? "not_started") === status);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "design-kanban-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "design-kanban-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: statusLabel(status, t)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 966,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "design-kanban-count",
                                        children: colProjects.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 967,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 965,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "design-kanban-list",
                                children: colProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "design-kanban-empty",
                                    children: t("designs.kanbanEmptyColumn")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                    lineNumber: 973,
                                    columnNumber: 11
                                }, this) : colProjects.map(({ project: p })=>{
                                    const skill = skillName(p.skillId);
                                    const ds = dsName(p.designSystemId);
                                    const designSystemProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemProject"])(p);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `design-kanban-card status-${status}${designSystemProject ? " is-design-system-project" : ""}`,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: ()=>onOpen(p.id),
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                onOpen(p.id);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "design-card-close",
                                                title: t("designs.deleteTitle"),
                                                "aria-label": t("designs.deleteAria", {
                                                    name: p.name
                                                }),
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    handleDeleteProject(p);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "close",
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 995,
                                                columnNumber: 14
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "design-kanban-card-name",
                                                title: p.name,
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 14
                                            }, this),
                                            designSystemProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "design-card-tag-row",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemProjectTag, {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 16
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 15
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "design-kanban-card-meta",
                                                children: [
                                                    ds ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ds",
                                                        children: ds
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 1021,
                                                        columnNumber: 16
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("designs.cardFreeform")
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 16
                                                    }, this),
                                                    skill ? ` · ${skill}` : "",
                                                    sub === "recent" || sub === "yours" ? ` · ${relativeTime(p.updatedAt, t)}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 14
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                        lineNumber: 982,
                                        columnNumber: 13
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 971,
                                columnNumber: 9
                            }, this)
                        ]
                    }, status, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 964,
                        columnNumber: 8
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 956,
                columnNumber: 5
            }, this),
            renameTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                as: "form",
                className: "modal-rename",
                onClose: cancelRename,
                closeOnEscape: true,
                ariaLabelledBy: renameTitleId,
                onSubmit: (e)=>{
                    e.preventDefault();
                    commitRename();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        id: renameTitleId,
                        children: t("designs.renameTitle")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1052,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            t("designs.renamePrompt", {
                                name: renameTarget.original
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: renameInput,
                                autoFocus: true,
                                onChange: (e)=>setRenameInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 1055,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1053,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: cancelRename,
                                children: t("designs.renameCancel")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 1063,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "primary",
                                disabled: !renameInput.trim() || renameInput.trim() === renameTarget.original,
                                children: t("designs.renameSave")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 1066,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1062,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 1041,
                columnNumber: 5
            }, this) : null,
            confirmTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                className: "modal-confirm",
                role: "alertdialog",
                onClose: ()=>setConfirmTarget(null),
                ariaLabelledBy: confirmTitleId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        id: confirmTitleId,
                        children: confirmTarget.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1086,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        className: "modal-confirm-message",
                        children: confirmTarget.message
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1087,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setConfirmTarget(null),
                                children: t("designs.renameCancel")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 1089,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "primary danger",
                                autoFocus: true,
                                onClick: ()=>{
                                    const run = confirmTarget.onConfirm;
                                    setConfirmTarget(null);
                                    run();
                                },
                                children: confirmTarget.confirmLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                                lineNumber: 1092,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                        lineNumber: 1088,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 1080,
                columnNumber: 5
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: designsToast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    message: designsToast.message,
                    role: designsToast.role,
                    tone: designsToast.tone,
                    onDismiss: ()=>setDesignsToast(null)
                }, designsToast.id, false, {
                    fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                    lineNumber: 1109,
                    columnNumber: 6
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
                lineNumber: 1107,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
        lineNumber: 489,
        columnNumber: 3
    }, this);
}
_s(DesignsTab, "vT3RiPdCfTDs+DIwCAdNl5Q/omA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c = DesignsTab;
function normalizeStatus(status) {
    return status === "queued" ? "running" : status;
}
function statusLabel(status, t) {
    return t(STATUS_LABEL_KEYS[status]);
}
function relativeTime(ts, t) {
    const diff = Date.now() - ts;
    const min = 60_000;
    const hr = 60 * min;
    const day = 24 * hr;
    if (diff < min) return t("common.justNow");
    if (diff < hr) return t("common.minutesAgo", {
        n: Math.floor(diff / min)
    });
    if (diff < day) return t("common.hoursAgo", {
        n: Math.floor(diff / hr)
    });
    if (diff < 7 * day) return t("common.daysAgo", {
        n: Math.floor(diff / day)
    });
    return new Date(ts).toLocaleDateString();
}
function artifactStatusLabel(status, refreshStatus, t) {
    if (status === "archived") return t("designs.statusArchived");
    if (status === "error") return t("designs.statusError");
    if (refreshStatus === "running") return t("designs.statusRefreshing");
    if (refreshStatus === "failed") return t("designs.statusRefreshFailed");
    if (refreshStatus === "succeeded") return t("designs.statusRefreshed");
    return t("designs.statusLive");
}
function shouldHideProjectCard(project, liveArtifacts) {
    if (liveArtifacts.length === 0) return false;
    return project.skillId === 'live-artifact' && isOrbitProject(project);
}
function liveArtifactCardTitle(project, liveArtifact) {
    return isCollapsedOrbitArtifactProject(project) ? project.name : liveArtifact.title;
}
function liveArtifactCardMetaLead(project, liveArtifact) {
    return isCollapsedOrbitArtifactProject(project) ? liveArtifact.title : project.name;
}
function isCollapsedOrbitArtifactProject(project) {
    return project.skillId === 'live-artifact' && isOrbitProject(project);
}
function isOrbitProject(project) {
    const metadata = project.metadata;
    return metadata?.kind === 'orbit';
}
function projectCover(project, override) {
    let h = 0;
    for(let i = 0; i < project.id.length; i++){
        h = h * 31 + project.id.charCodeAt(i) >>> 0;
    }
    const hue = h % 360;
    const hue2 = (hue + 38) % 360;
    const style = {
        background: `radial-gradient(circle at 30% 28%, hsl(${hue} 70% 78% / 0.55), transparent 42%), linear-gradient(135deg, hsl(${hue} 65% 88%), hsl(${hue2} 70% 90%))`
    };
    const trimmed = project.name.trim();
    const initial = (trimmed ? Array.from(trimmed)[0] : "?").toUpperCase();
    const meta = project.metadata;
    // Brand projects get a clean generated cover (extracted logo / site favicon
    // / monogram) rather than a raw scaled-down HTML page, which reads as broken
    // clipped text in the card. The brand color gradient mirrors the monogram
    // cards so brand kits sit consistently in the grid.
    if (meta?.kind === "brand") {
        return {
            kind: "brand",
            style,
            initial,
            brandId: meta.brandId,
            brandHost: brandHostname(meta.brandSourceUrl)
        };
    }
    if (override) {
        return {
            kind: override.kind,
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(project.id, override.name),
            style,
            initial
        };
    }
    const entry = meta?.entryFile;
    if (entry) {
        const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(project.id, entry);
        if (meta?.kind === "image") return {
            kind: "image",
            src,
            style,
            initial
        };
        if (meta?.kind === "video") return {
            kind: "video",
            src,
            style,
            initial
        };
        if (/\.html?$/i.test(entry)) return {
            kind: "html",
            src,
            style,
            initial
        };
    }
    return {
        kind: "fallback",
        style,
        initial
    };
}
// Best-effort hostname for the brand cover's favicon fallback. Mirrors the
// helper in BrandsTab; brand source URLs are always present in metadata even
// before extraction finishes.
function brandHostname(rawUrl) {
    if (!rawUrl) return undefined;
    try {
        return new URL(rawUrl).hostname.replace(/^www\./, "");
    } catch  {
        const stripped = rawUrl.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
        return stripped || undefined;
    }
}
// Brand project cover: shows the extracted brand logo when available, falling
// back to the site favicon, then a monogram. The image error chain lets a card
// degrade gracefully without leaving a broken image icon on the gradient.
function ProjectBrandCover({ brandId, host, initial }) {
    _s1();
    const sources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectBrandCover.useMemo[sources]": ()=>{
            const list = [];
            if (brandId) list.push(`/api/brands/${encodeURIComponent(brandId)}/logo`);
            if (host) {
                list.push(`https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`);
            }
            return list;
        }
    }["ProjectBrandCover.useMemo[sources]"], [
        brandId,
        host
    ]);
    const sourceKey = sources.join("|");
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectBrandCover.useEffect": ()=>{
            setIndex(0);
        }
    }["ProjectBrandCover.useEffect"], [
        sourceKey
    ]);
    const src = sources[index];
    if (!src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "project-thumb-glyph",
            children: initial
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
            lineNumber: 1282,
            columnNumber: 10
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "project-thumb-brand-logo",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "thumb-media",
            src: src,
            alt: "",
            loading: "lazy",
            onError: ()=>setIndex((current)=>current + 1)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
            lineNumber: 1286,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
        lineNumber: 1285,
        columnNumber: 3
    }, this);
}
_s1(ProjectBrandCover, "dsMPPmw8VHWDV2ej0XiARRHX7Ok=");
_c1 = ProjectBrandCover;
function projectCategory(project) {
    const meta = project.metadata;
    if (meta?.intent === "live-artifact" || project.skillId === "live-artifact") {
        return "live-artifact";
    }
    if (meta?.kind === "deck") return "slide";
    if (meta?.kind === "brand") return "brand";
    if (meta?.kind === "image" || meta?.kind === "video" || meta?.kind === "audio") {
        return "media";
    }
    return "prototype";
}
function ProjectTag({ category }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const label = category === "live-artifact" ? t("designs.tagLiveArtifact") : category === "slide" ? t("designs.tagSlide") : category === "brand" ? "Brand" : category === "media" ? t("designs.tagMedia") : t("designs.tagPrototype");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `design-card-tag tag-${category}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
        lineNumber: 1325,
        columnNumber: 3
    }, this);
}
_s2(ProjectTag, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c2 = ProjectTag;
function DesignSystemProjectTag() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "design-card-tag tag-design-system",
        children: "Design System"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignsTab.tsx",
        lineNumber: 1331,
        columnNumber: 3
    }, this);
}
_c3 = DesignSystemProjectTag;
function findDesignSystemLogoFile(files) {
    const logoCandidates = files.filter((file)=>file.type !== "dir").filter((file)=>{
        const name = file.path ?? file.name;
        return file.kind === "image" || /\.(svg|png|jpe?g|webp|gif)$/iu.test(name);
    });
    return logoCandidates.find((file)=>(file.path ?? file.name).toLowerCase() === "assets/logo.svg") ?? logoCandidates.find((file)=>/(^|\/)(logo|wordmark|brand-mark|brandmark|mark|icon|favicon)[^/]*\.(svg|png|jpe?g|webp|gif)$/iu.test(file.path ?? file.name)) ?? null;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DesignsTab");
__turbopack_context__.k.register(_c1, "ProjectBrandCover");
__turbopack_context__.k.register(_c2, "ProjectTag");
__turbopack_context__.k.register(_c3, "DesignSystemProjectTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_DesignsTab_tsx_10oq62o._.js.map