(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/HomeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeView",
    ()=>HomeView,
    "shouldShowActivePluginChip",
    ()=>shouldShowActivePluginChip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Composed Home view — the top-down layout the entry view renders
// when the left nav rail's "Home" tab is active.
//
// Owns the prompt state + active plugin lifecycle and stitches
// together the smaller pieces (HomeHero, RecentProjectsStrip,
// PluginsHomeSection). Replaces the older left-side `PluginLoopHome`
// surface by lifting its plugin orchestration up here so the prompt
// textarea can live centered in the hero.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/mcp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$elevenlabs$2d$voices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/elevenlabs-voices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/aihubmix-image-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/inlineMentions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$smoothScrollToTop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/smoothScrollToTop.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/pluginRequiredInputs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/HomeHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$chips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/home-hero/chips.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/home-intent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brand$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/brand-intent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/home-hero/media-surfaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/home-hero/plugin-authoring.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginDetailsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeTemplatesReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/HomeTemplatesReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsHomeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginsHomeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$presetSeedPrompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/presetSeedPrompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RecentProjectsStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/RecentProjectsStrip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
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
const AUTHORING_DEFAULT_SCENARIO_INPUTS = {
    artifactKind: 'Open Design plugin',
    audience: 'Open Design plugin authors',
    topic: 'packaging a reusable workflow as an Open Design plugin'
};
const EMPTY_DESIGN_SYSTEMS = [];
const EMPTY_SKILLS = [];
const EMPTY_CONNECTORS = [];
const EMPTY_PROMPT_TEMPLATES = [];
function HomeView({ isActive = true, projects, projectsLoading, designSystems = EMPTY_DESIGN_SYSTEMS, defaultDesignSystemId = null, onSubmit, onOpenProject, onViewAllProjects, onBrowseRegistry, onOpenIntegrations, onOpenMcp, onOpenNewProject, promptHandoff, skills = EMPTY_SKILLS, skillsLoading = false, connectors = EMPTY_CONNECTORS, promptTemplates = EMPTY_PROMPT_TEMPLATES, executionSwitcher }) {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // P0 page_view page_name=home — fire once on mount. ref-keyed to survive
    // re-renders that flip parent state without remounting HomeView.
    const homePageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (homePageViewFiredRef.current) return;
            homePageViewFiredRef.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'home'
            });
        }
    }["HomeView.useEffect"], [
        analytics.track
    ]);
    const [plugins, setPlugins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pluginsLoading, setPluginsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendingApplyId, setPendingApplyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingChipId, setPendingChipId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingAuthoringChipId, setPendingAuthoringChipId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingAuthoringPrompt, setPendingAuthoringPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_AUTHORING_PROMPT"]);
    const [pendingAuthoringInputs, setPendingAuthoringInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomeView.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginAuthoringInputs"])(undefined)
    }["HomeView.useState"]);
    const [pendingPluginUseHandoff, setPendingPluginUseHandoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fallbackProjectKind, setFallbackProjectKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fallbackProjectMetadata, setFallbackProjectMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionMode, setSessionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('design');
    const [activeSkill, setActiveSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPluginContexts, setSelectedPluginContexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMcpContexts, setSelectedMcpContexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedConnectorContexts, setSelectedConnectorContexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stagedFiles, setStagedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workingDir, setWorkingDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Token paired with `workingDir` when picked through the desktop host's
    // native dialog. Spent on the post-creation working-dir POST so the
    // daemon's desktop-auth gate accepts the path. Null for web picks.
    const [workingDirToken, setWorkingDirToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Global most-recently-used working directories, surfaced in the picker's
    // "Recent folders" submenu. Loaded from the daemon's app-config and bumped
    // whenever the user picks a folder.
    const [recentDirs, setRecentDirs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRecentLinkedDirs"])().then({
                "HomeView.useEffect": (dirs)=>{
                    if (!cancelled) setRecentDirs(dirs);
                }
            }["HomeView.useEffect"]);
            return ({
                "HomeView.useEffect": ()=>{
                    cancelled = true;
                }
            })["HomeView.useEffect"];
        }
    }["HomeView.useEffect"], []);
    const rememberRecentDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeView.useCallback[rememberRecentDir]": async (dir)=>{
            // Optimistically promote the dir to the front so the submenu updates
            // immediately; the daemon also trims/de-dupes/caps the persisted list.
            setRecentDirs({
                "HomeView.useCallback[rememberRecentDir]": (prev)=>[
                        dir,
                        ...prev.filter({
                            "HomeView.useCallback[rememberRecentDir]": (d)=>d !== dir
                        }["HomeView.useCallback[rememberRecentDir]"])
                    ].slice(0, 5)
            }["HomeView.useCallback[rememberRecentDir]"]);
            const persisted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushRecentLinkedDir"])(dir);
            setRecentDirs(persisted);
        }
    }["HomeView.useCallback[rememberRecentDir]"], []);
    const [mcpServers, setMcpServers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mcpLoading, setMcpLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [promptEditedByUser, setPromptEditedByUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const examplePromptInfoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleExamplePromptStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeView.useCallback[handleExamplePromptStatusChange]": (info)=>{
            examplePromptInfoRef.current = info;
        }
    }["HomeView.useCallback[handleExamplePromptStatusChange]"], []);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // In-flight window between Send and the run starting (or failing) — the
    // project-creation roundtrip happens upstream of this component, so the
    // submit handler's promise is the only signal that it settled (#4082).
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elevenLabsVoices, setElevenLabsVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [elevenLabsVoicesLoading, setElevenLabsVoicesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Live AIHubMix image catalogue merged into the home media composer's model
    // picker (replaces the static aihubmix seeds when the fetch resolves).
    const aihubmixImageModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixImageModels"])();
    const composerImageModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[composerImageModels]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAihubmixImageModels"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_MODELS"], aihubmixImageModels)
    }["HomeView.useMemo[composerImageModels]"], [
        aihubmixImageModels
    ]);
    const [elevenLabsVoicesLoaded, setElevenLabsVoicesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elevenLabsVoicesError, setElevenLabsVoicesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailsRecord, setDetailsRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingReplacement, setPendingReplacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Surface_view fires when the replacement modal becomes visible. Tied
    // to the {before, after} pair so reopening with the same pair after a
    // close doesn't double-fire, but a fresh pair always does.
    const lastPluginReplacementViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (!pendingReplacement) {
                lastPluginReplacementViewRef.current = null;
                return;
            }
            const key = `${pendingReplacement.pluginBefore ?? ''}->${pendingReplacement.pluginAfter}`;
            if (lastPluginReplacementViewRef.current === key) return;
            lastPluginReplacementViewRef.current = key;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginReplacementModalSurfaceView"])(analytics.track, {
                page_name: 'home',
                area: 'plugin_replacement_modal'
            });
        }
    }["HomeView.useEffect"], [
        pendingReplacement,
        analytics.track
    ]);
    // Community gallery analytics. Opening a tile fires both a ui_click on
    // the card (the funnel's denominator) and a surface_view on the detail
    // modal it reveals (the numerator); the ↗ that jumps straight to the
    // real example page is its own ui_click so "go to the finished thing"
    // stays distinct from "open the detail modal". plugin_id / plugin_type
    // mirror PluginsView so the two surfaces join on the same keys.
    const handleCommunityOpenDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeView.useCallback[handleCommunityOpenDetails]": (record)=>{
            const pluginId = record.sourceMarketplaceEntryName ?? record.id;
            const pluginType = record.marketplaceTrust ?? 'official';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCommunityGalleryClick"])(analytics.track, {
                page_name: 'home',
                area: 'community_gallery',
                element: 'card',
                plugin_id: pluginId,
                plugin_type: pluginType
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginDetailModalSurfaceView"])(analytics.track, {
                page_name: 'home',
                area: 'plugin_detail_modal',
                plugin_id: pluginId,
                plugin_type: pluginType
            });
            setDetailsRecord(record);
        }
    }["HomeView.useCallback[handleCommunityOpenDetails]"], [
        analytics.track
    ]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const homeViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const consumedHandoffIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingPromptFocusEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const activePluginApplyRequestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollHomeToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomeView.useCallback[scrollHomeToTop]": ()=>{
            requestAnimationFrame({
                "HomeView.useCallback[scrollHomeToTop]": ()=>{
                    const scrollContainer = homeViewRef.current?.closest('.entry-main--scroll');
                    if (!(scrollContainer instanceof HTMLElement)) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$smoothScrollToTop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smoothScrollToTop"])(scrollContainer);
                }
            }["HomeView.useCallback[scrollHomeToTop]"]);
        }
    }["HomeView.useCallback[scrollHomeToTop]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            let cancelled = false;
            const load = {
                "HomeView.useEffect.load": ()=>{
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlugins"])().then({
                        "HomeView.useEffect.load": (rows)=>{
                            if (cancelled) return;
                            setPlugins(rows);
                            setPluginsLoading(false);
                        }
                    }["HomeView.useEffect.load"]);
                }
            }["HomeView.useEffect.load"];
            load();
            window.addEventListener('open-design:plugins-changed', load);
            return ({
                "HomeView.useEffect": ()=>{
                    cancelled = true;
                    window.removeEventListener('open-design:plugins-changed', load);
                }
            })["HomeView.useEffect"];
        }
    }["HomeView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMcpServers"])().then({
                "HomeView.useEffect": (result)=>{
                    if (cancelled) return;
                    setMcpServers(result?.servers ?? []);
                    setMcpLoading(false);
                }
            }["HomeView.useEffect"]);
            return ({
                "HomeView.useEffect": ()=>{
                    cancelled = true;
                }
            })["HomeView.useEffect"];
        }
    }["HomeView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (active?.mediaSurface !== 'audio' || active.inputs.model !== 'elevenlabs-v3') return;
            if (elevenLabsVoicesLoaded) return;
            const controller = new AbortController();
            setElevenLabsVoicesLoading(true);
            setElevenLabsVoicesError(null);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$elevenlabs$2d$voices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchElevenLabsVoiceOptions"])(controller.signal).then({
                "HomeView.useEffect": (voices)=>{
                    if (controller.signal.aborted) return;
                    setElevenLabsVoices(voices);
                    setElevenLabsVoicesLoaded(true);
                }
            }["HomeView.useEffect"]).catch({
                "HomeView.useEffect": (err)=>{
                    if (controller.signal.aborted) return;
                    setElevenLabsVoices([]);
                    setElevenLabsVoicesLoaded(true);
                    setElevenLabsVoicesError(err instanceof Error ? err.message : String(err));
                }
            }["HomeView.useEffect"]).finally({
                "HomeView.useEffect": ()=>{
                    if (controller.signal.aborted) return;
                    setElevenLabsVoicesLoading(false);
                }
            }["HomeView.useEffect"]);
            return ({
                "HomeView.useEffect": ()=>controller.abort()
            })["HomeView.useEffect"];
        }
    }["HomeView.useEffect"], [
        active?.mediaSurface,
        active?.inputs.model,
        elevenLabsVoicesLoaded
    ]);
    const elevenLabsVoiceWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[elevenLabsVoiceWarning]": ()=>{
            if (active?.mediaSurface !== 'audio' || active.inputs.model !== 'elevenlabs-v3') return null;
            if (elevenLabsVoicesError) return elevenLabsVoicesError;
            if (elevenLabsVoicesLoaded && elevenLabsVoices.length === 0) {
                return 'No configured ElevenLabs voices were returned. Using Rachel (default).';
            }
            return null;
        }
    }["HomeView.useMemo[elevenLabsVoiceWarning]"], [
        active?.mediaSurface,
        active?.inputs.model,
        elevenLabsVoicesError,
        elevenLabsVoicesLoaded,
        elevenLabsVoices.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (!active?.mediaSurface) return;
            const composer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHomeMediaComposer"])(active.mediaSurface, promptTemplates, active.inputs, elevenLabsVoices, {
                elevenLabsVoiceWarning,
                elevenLabsVoicesLoading,
                imageModels: composerImageModels
            });
            const nextRendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPluginBriefTemplate"])(composer.queryTemplate, composer.inputs);
            // When the plugin was bound through a type chip the user owns the
            // textarea; never back-fill from this effect even if external
            // lists (ElevenLabs voices, prompt templates) reload after the
            // chip click. lastRenderedPrompt stays null in that mode so we
            // don't mis-detect "the user hasn't typed" via the empty-string
            // branch either.
            if (!active.suppressPromptSync && (prompt === active.lastRenderedPrompt || prompt.trim().length === 0)) {
                setPrompt(nextRendered);
                setPromptEditedByUser(false);
            }
            setActive({
                "HomeView.useEffect": (prev)=>{
                    if (!prev?.mediaSurface) return prev;
                    return {
                        ...prev,
                        inputs: composer.inputs,
                        inputFields: composer.fields,
                        queryTemplate: composer.queryTemplate,
                        editableInputNames: composer.editableFieldNames,
                        inputsValid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginInputsAreValid"])(composer.fields, composer.inputs),
                        result: inputsEqual(prev.result?.appliedPlugin?.inputs, composer.inputs) ? prev.result : null,
                        lastRenderedPrompt: prev.suppressPromptSync ? prev.lastRenderedPrompt : nextRendered,
                        projectMetadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadataForHomeMediaComposer"])(prev.mediaSurface, composer.inputs, promptTemplates)
                    };
                }
            }["HomeView.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HomeView.useEffect"], [
        promptTemplates,
        elevenLabsVoices,
        elevenLabsVoiceWarning,
        elevenLabsVoicesLoading,
        composerImageModels
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (!pendingPromptFocusEndRef.current) return;
            pendingPromptFocusEndRef.current = false;
            inputRef.current?.focusEnd();
        }
    }["HomeView.useEffect"], [
        prompt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (!promptHandoff || consumedHandoffIdRef.current === promptHandoff.id) return;
            consumedHandoffIdRef.current = promptHandoff.id;
            setError(null);
            if (promptHandoff.source === 'plugin-use') {
                setPendingPluginUseHandoff({
                    pluginId: promptHandoff.pluginId,
                    action: promptHandoff.action ?? 'use',
                    ...promptHandoff.inputs ? {
                        inputs: promptHandoff.inputs
                    } : {}
                });
                if (promptHandoff.focus) {
                    focusPromptAtEnd();
                }
                scrollHomeToTop();
                return;
            }
            setActive(null);
            setActiveSkill(null);
            setSelectedPluginContexts([]);
            setSelectedMcpContexts([]);
            setSelectedConnectorContexts([]);
            setFallbackProjectKind('other');
            setFallbackProjectMetadata(null);
            if (promptHandoff.focus) {
                pendingPromptFocusEndRef.current = true;
            }
            setPrompt(promptHandoff.prompt);
            setPromptEditedByUser(false);
            setPendingAuthoringPrompt(promptHandoff.prompt);
            setPendingAuthoringInputs(promptHandoff.inputs);
            setPendingAuthoringChipId('create-plugin');
            setPendingChipId('create-plugin');
            scrollHomeToTop();
        }
    }["HomeView.useEffect"], [
        promptHandoff,
        scrollHomeToTop
    ]);
    const activeContextItemCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[activeContextItemCount]": ()=>active ? active.result?.contextItems?.length ?? estimatePluginContextItemCount(active.record) : 0
    }["HomeView.useMemo[activeContextItemCount]"], [
        active
    ]);
    // Inline-backed contexts are already represented in the composer as `@mention`
    // pills, so they must NOT also drive the active context row — otherwise
    // selecting only an inline-mentioned connector mounts an empty row (count
    // label, no visible children) above the editor. Context-only `Use` selections
    // have no inline representation, so they are the only ones the row should
    // surface (and count).
    const contextItemCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[contextItemCount]": ()=>{
            const contextOnlyPlugins = selectedPluginContexts.filter({
                "HomeView.useMemo[contextItemCount]": (item)=>!item.inlineBacked
            }["HomeView.useMemo[contextItemCount]"]).length;
            const contextOnlyMcp = selectedMcpContexts.filter({
                "HomeView.useMemo[contextItemCount]": (item)=>!item.inlineBacked
            }["HomeView.useMemo[contextItemCount]"]).length;
            const contextOnlyConnectors = selectedConnectorContexts.filter({
                "HomeView.useMemo[contextItemCount]": (item)=>!item.inlineBacked
            }["HomeView.useMemo[contextItemCount]"]).length;
            return activeContextItemCount + contextOnlyPlugins + contextOnlyMcp + contextOnlyConnectors + stagedFiles.length;
        }
    }["HomeView.useMemo[contextItemCount]"], [
        activeContextItemCount,
        selectedConnectorContexts,
        selectedMcpContexts,
        selectedPluginContexts,
        stagedFiles.length
    ]);
    // When the active plugin was bound through a chip, the badge shows
    // the chip label (e.g. "Prototype") instead of the underlying plugin
    // record title (e.g. "New generation (default scenario)"). Several
    // chips share od-new-generation, so surfacing the raw plugin title
    // would mislabel what the user actually picked.
    const activeBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[activeBadge]": ()=>{
            if (!active) return {
                title: null,
                isExplicitPlugin: false
            };
            // A type-chip's default-plugin binding stands in for the task chip: show the
            // chip label and defer clearing to the footer ActiveTypeChip. An explicit
            // pick (example-prompt preset / Community card / detail modal) always shows
            // its own plugin title and owns the clear (×) button — even when the
            // preset's plugin id equals the chip's default plugin.
            if (!active.explicitPick && active.chipId) {
                const defaultPluginId = defaultPluginIdForChip(active.chipId);
                const chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$chips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChip"])(active.chipId);
                if (chip && (defaultPluginId === null || defaultPluginId === active.record.id)) {
                    return {
                        title: homeHeroChipLabelForId(chip.id, t),
                        isExplicitPlugin: false
                    };
                }
            }
            return {
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, active.record),
                isExplicitPlugin: true
            };
        }
    }["HomeView.useMemo[activeBadge]"], [
        active,
        locale,
        t
    ]);
    const activeBadgeTitle = activeBadge.title;
    const activePluginIsExplicit = activeBadge.isExplicitPlugin;
    const showActivePluginChip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[showActivePluginChip]": ()=>shouldShowActivePluginChip(active)
    }["HomeView.useMemo[showActivePluginChip]"], [
        active
    ]);
    const selectableSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[selectableSkills]": ()=>skills.filter({
                "HomeView.useMemo[selectableSkills]": (skill)=>!skill.aggregatesExamples
            }["HomeView.useMemo[selectableSkills]"])
    }["HomeView.useMemo[selectableSkills]"], [
        skills
    ]);
    const enabledMcpServers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[enabledMcpServers]": ()=>mcpServers.filter({
                "HomeView.useMemo[enabledMcpServers]": (server)=>server.enabled
            }["HomeView.useMemo[enabledMcpServers]"])
    }["HomeView.useMemo[enabledMcpServers]"], [
        mcpServers
    ]);
    const designSystemPickerSystems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[designSystemPickerSystems]": ()=>selectableHomeDesignSystems(designSystems, defaultDesignSystemId)
    }["HomeView.useMemo[designSystemPickerSystems]"], [
        defaultDesignSystemId,
        designSystems
    ]);
    const defaultDesignSystemTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeView.useMemo[defaultDesignSystemTitle]": ()=>homeDefaultDesignSystemTitle(designSystems, defaultDesignSystemId, t)
    }["HomeView.useMemo[defaultDesignSystemTitle]"], [
        defaultDesignSystemId,
        designSystems,
        t
    ]);
    function focusPromptAtEnd() {
        requestAnimationFrame(()=>{
            inputRef.current?.focusEnd();
        });
    }
    async function usePlugin(record, nextPrompt, options) {
        const applyRequestId = activePluginApplyRequestRef.current + 1;
        activePluginApplyRequestRef.current = applyRequestId;
        setActiveSkill(null);
        const shouldResolveImmediately = options?.deferApply !== true;
        const inputFields = options?.inputFields ?? record.manifest?.od?.inputs ?? [];
        const optimisticInputs = hydratePluginInputs(inputFields, withHomeDesignSystemDefault(options?.inputs, inputFields, defaultDesignSystemTitle));
        const inputsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginInputsAreValid"])(inputFields, optimisticInputs);
        const queryTemplate = options?.queryTemplate !== undefined ? options.queryTemplate : nextPrompt !== undefined && nextPrompt !== null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(record.manifest?.od?.useCase?.query, locale) || null;
        const suppressPromptUpdate = options?.suppressPromptUpdate === true;
        const optimisticPrompt = nextPrompt !== undefined && nextPrompt !== null ? nextPrompt : queryTemplate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPluginBriefTemplate"])(queryTemplate, optimisticInputs) : null;
        if (options?.chipId && shouldResolveImmediately) setPendingChipId(options.chipId);
        setError(null);
        // Optimistic update: the chip already carries the inputs and the
        // plugin record's manifest already carries the query template, so
        // we can render the brief locally without waiting for the apply
        // roundtrip. The active badge + prompt appear on the same frame as
        // the click; applyPlugin then resolves the snapshot id and context
        // items in the background and we reconcile in place. Without this
        // the user sees a ~100-500ms freeze before the input back-fills,
        // which feels like the UI is jammed.
        setActive({
            record,
            result: null,
            inputs: optimisticInputs,
            inputFields,
            inputsValid,
            queryTemplate,
            queryTemplateAllowsPrefix: options?.queryTemplateAllowsPrefix === true,
            // When prompt updates are suppressed we leave lastRenderedPrompt
            // null so the inline pattern-extraction in handlePromptChange
            // doesn't claim ownership of the user's typed text.
            lastRenderedPrompt: suppressPromptUpdate ? null : optimisticPrompt,
            projectKind: options?.projectKind ?? null,
            chipId: options?.chipId ?? null,
            mediaSurface: options?.mediaSurface ?? null,
            projectMetadata: homeCreateProjectMetadata(options?.projectKind ?? null, optimisticInputs, options?.projectMetadata ?? null),
            editableInputNames: options?.editableInputNames ?? [],
            preserveInputFields: options?.preserveInputFields === true,
            suppressPromptSync: suppressPromptUpdate,
            explicitPick: options?.explicitPick === true
        });
        setFallbackProjectKind(null);
        setFallbackProjectMetadata(null);
        setDetailsRecord(null);
        if (!suppressPromptUpdate && optimisticPrompt !== null) {
            setPrompt(optimisticPrompt);
            setPromptEditedByUser(false);
        }
        focusPromptAtEnd();
        if (!inputsValid) {
            setPendingChipId(null);
            // Required inputs without defaults: the inputs form is the next step,
            // not Send.
            return false;
        }
        if (!shouldResolveImmediately) return true;
        const result = await resolveActivePlugin(record, optimisticInputs, applyRequestId);
        if (activePluginApplyRequestRef.current !== applyRequestId) return false;
        if (!result) {
            // Roll back the optimistic active so submit can't fire against a
            // plugin that never bound. Only clear when the in-flight apply
            // still matches the visible active state — concurrent clicks
            // would otherwise stomp a successful later apply.
            setActive((prev)=>prev?.record.id === record.id ? {
                    ...prev,
                    inputsValid: false
                } : prev);
            setError(`Failed to apply ${record.title}. Make sure the daemon is reachable.`);
            return false;
        }
        const reconciledInputs = {
            ...optimisticInputs
        };
        for (const field of result.inputs ?? []){
            if (field.default !== undefined && reconciledInputs[field.name] === undefined) {
                reconciledInputs[field.name] = field.default;
            }
        }
        const reconciledInputsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginInputsAreValid"])(options?.preserveInputFields ? inputFields : result.inputs ?? inputFields, reconciledInputs);
        setActive((prev)=>prev && prev.record.id === record.id ? {
                ...prev,
                result,
                inputs: reconciledInputs,
                inputFields: options?.preserveInputFields ? inputFields : result.inputs ?? inputFields,
                inputsValid: reconciledInputsValid,
                projectMetadata: homeCreateProjectMetadata(prev.projectKind, reconciledInputs, prev.projectMetadata)
            } : prev);
        // The daemon may have filled in `topic`/`audience` defaults the
        // optimistic render didn't know about (the manifest is inspected
        // client-side but field.default lives on the apply result). Re-
        // render the brief using the reconciled inputs, but only if the
        // user hasn't edited the prompt in the meantime — if they have,
        // current !== optimisticPrompt and the functional setter is a
        // no-op so their edits survive.
        if (!suppressPromptUpdate && (nextPrompt === undefined || nextPrompt === null)) {
            const reconciledQuery = options?.queryTemplate !== undefined ? options.queryTemplate : result.query || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(record.manifest?.od?.useCase?.query, locale);
            if (reconciledQuery) {
                const reconciledPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPluginBriefTemplate"])(reconciledQuery, reconciledInputs);
                if (reconciledPrompt !== optimisticPrompt) {
                    setPrompt((current)=>{
                        if (current !== optimisticPrompt) return current;
                        setPromptEditedByUser(false);
                        return reconciledPrompt;
                    });
                    setActive((prev)=>prev && prev.record.id === record.id ? {
                            ...prev,
                            lastRenderedPrompt: reconciledPrompt
                        } : prev);
                }
            }
        }
        return reconciledInputsValid;
    }
    async function resolveActivePlugin(record, inputs, applyRequestId) {
        setPendingApplyId(record.id);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPlugin"])(record.id, {
            locale,
            inputs
        });
        if (applyRequestId === undefined || activePluginApplyRequestRef.current === applyRequestId) {
            setPendingApplyId(null);
            setPendingChipId(null);
        }
        return result;
    }
    function requestActivePlugin(record, nextPrompt, options) {
        var _s = __turbopack_context__.k.signature();
        const replacement = previewPluginReplacement(record, nextPrompt, {
            inputs: withHomeDesignSystemDefault(options?.inputs, options?.inputFields ?? record.manifest?.od?.inputs ?? [], defaultDesignSystemTitle),
            inputFields: options?.inputFields,
            queryTemplate: options?.queryTemplate
        });
        const confirm = async ()=>{
            _s();
            await usePlugin(record, nextPrompt, options);
        };
        _s(confirm, "UJtdaqJw1ILOTXT+7c46U6wksvw=", false, function() {
            return [
                usePlugin
            ];
        });
        if (options?.replaceWithoutConfirmation) {
            void confirm();
            return;
        }
        runWithReplacementConfirmation(record.title, replacement, confirm, {
            before: active?.record.id ?? null,
            after: record.id
        });
    }
    // Picking "Use" on a plugin (from the library hand-off, the Home plugin
    // section, or the details modal) should make that plugin the routed
    // driver of the next run — i.e. set it as the active plugin so its own
    // pipeline + SKILL.md/asset context are applied — rather than only
    // attaching it as background context. Without this, the submit path
    // falls back to the hidden od-default scenario and the plugin's design
    // brief never reaches the agent.
    //
    // Prompt handling preserves the legacy context-use semantics:
    //   - `use-with-query` APPENDS the rendered plugin query to whatever the
    //     user has already typed (never replaces it), then routes the plugin
    //     with that combined prompt as the explicit seed.
    //   - plain `use` leaves the current draft untouched (suppressPromptUpdate)
    //     while still routing the plugin as the active driver.
    async function routePluginUse(record, action = 'use', inputs) {
        _s1();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackCommunityGalleryClick"])(analytics.track, {
            page_name: 'home',
            area: 'community_gallery',
            element: 'use_plugin',
            plugin_id: record.sourceMarketplaceEntryName ?? record.id,
            plugin_type: record.marketplaceTrust ?? 'official',
            action: action === 'use-with-query' ? 'use_with_query' : 'use'
        });
        if (action === 'use-with-query') {
            // "Replicate this content" seeds the composer with the SAME human-friendly
            // text the Home example-prompt cards use (examplePresetSeedPrompt), NOT the
            // raw `od.useCase.query` — which for many plugins is a generator-facing
            // meta-instruction ("follow the en field verbatim; start from example.html")
            // that reads as gibberish in the textarea. Fallback: plugin description /
            // title (the Home cards inject their richer structured-preview fallback).
            const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$presetSeedPrompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["examplePresetSeedPrompt"])(record, locale, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record).trim() || record.title);
            const trimmedSeed = seed.text.trim();
            const currentDraft = prompt.trim();
            // Append, don't replace: keep the user's draft and add the seed below it.
            const combined = !trimmedSeed ? prompt : !currentDraft ? trimmedSeed : `${prompt.trimEnd()}\n\n${trimmedSeed}`;
            // Preserve placeholder write-back ONLY when the seed IS the rendered
            // plugin query (a human-friendly, non-meta-instruction query): keep the
            // raw `{{...}}`-bearing template so editing a hydrated value in the
            // composer still flows back into `active.inputs` and submit resolves the
            // snapshot from what the user sees. When we fell back to a description /
            // meta-instruction seed there are no placeholders to extract, so null the
            // template (mirrors the example-prompt card path).
            const rawQueryTemplate = seed.fromRenderedQuery ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(record.manifest?.od?.useCase?.query, locale) || null : null;
            const hasTemplate = Boolean(rawQueryTemplate && trimmedSeed);
            const submittable = await usePlugin(record, combined, {
                ...inputs ? {
                    inputs
                } : {},
                queryTemplate: hasTemplate ? rawQueryTemplate : null,
                // Allow an arbitrary prefix whenever we track the query template, so the
                // placeholder extractor matches the query as a suffix even when the user
                // PREPENDS an intro AFTER the seed was inserted (the empty-draft → add
                // prefix → edit placeholder case). Suffix matching is equally correct
                // when there is no prefix at all.
                queryTemplateAllowsPrefix: hasTemplate,
                explicitPick: true
            });
            scrollHomeToTop();
            // Plugins with required inputs and no defaults land on the inputs
            // form, not Send — only cue Send when submit is actually unlocked.
            if (submittable) {
                inputRef.current?.pulseSend();
            }
            return;
        }
        const submittable = await usePlugin(record, undefined, {
            ...inputs ? {
                inputs
            } : {},
            suppressPromptUpdate: true,
            explicitPick: true
        });
        scrollHomeToTop();
        // Plain Use doesn't seed the composer; with no draft and no staged
        // files (or with required inputs still missing) the send button stays
        // disabled, and flashing a disabled button points at a dead end.
        if (submittable && (prompt.trim().length > 0 || stagedFiles.length > 0)) {
            inputRef.current?.pulseSend();
        }
    }
    _s1(routePluginUse, "UJtdaqJw1ILOTXT+7c46U6wksvw=", false, function() {
        return [
            usePlugin
        ];
    });
    function runWithReplacementConfirmation(title, replacementPrompt, confirm, pluginIds) {
        if (replacementPrompt !== null && promptEditedByUser && prompt.trim().length > 0 && prompt.trim() !== replacementPrompt.trim()) {
            setPendingReplacement({
                title,
                confirm,
                pluginBefore: pluginIds.before,
                pluginAfter: pluginIds.after
            });
            return;
        }
        void confirm();
    }
    function previewPluginReplacement(record, nextPrompt, options) {
        if (nextPrompt !== undefined && nextPrompt !== null) return nextPrompt;
        const query = options?.queryTemplate !== undefined ? options.queryTemplate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePluginQueryFallback"])(record.manifest?.od?.useCase?.query, locale);
        if (!query) return null;
        const fields = options?.inputFields ?? record.manifest?.od?.inputs ?? [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPluginBriefTemplate"])(query, hydratePluginInputs(fields, options?.inputs));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            if (!pendingPluginUseHandoff || pluginsLoading) return;
            const record = plugins.find({
                "HomeView.useEffect.record": (plugin)=>plugin.id === pendingPluginUseHandoff.pluginId
            }["HomeView.useEffect.record"]);
            setPendingPluginUseHandoff(null);
            if (!record) {
                setError(`Plugin "${pendingPluginUseHandoff.pluginId}" is not installed. Refresh Plugins and try again.`);
                return;
            }
            void routePluginUse(record, pendingPluginUseHandoff.action, pendingPluginUseHandoff.inputs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HomeView.useEffect"], [
        pendingPluginUseHandoff,
        pluginsLoading,
        plugins
    ]);
    function addPluginContext(record, nextPrompt) {
        setSelectedPluginContexts((prev)=>{
            if (prev.some((item)=>item.record.id === record.id)) return prev;
            return [
                ...prev,
                {
                    record,
                    inlineBacked: true
                }
            ];
        });
        if (nextPrompt !== null) setPrompt(nextPrompt);
        setError(null);
        focusPromptAtEnd();
    }
    function useExamplePlugin(record, chipId, promptText) {
        _s2();
        setError(null);
        // Picking a preset card *binds* the plugin (not just a textarea fill):
        // active switches to this exact preset so submit resolves its snapshot and
        // injects the plugin's SKILL.md + example.html as generation context — the
        // output faithfully recreates the reference. `promptText` is the short,
        // editable seed; the full build spec rides along in the plugin context.
        // deferApply mirrors the chip rail: bind now, resolve the snapshot on
        // submit (submit() already re-resolves), so a preset click stays instant
        // and doesn't fire an /apply roundtrip per card. The chip is already
        // active when preset cards are visible, so reuse its project kind/metadata.
        void usePlugin(record, promptText, {
            chipId,
            projectKind: active?.projectKind ?? undefined,
            projectMetadata: active?.projectMetadata ?? null,
            deferApply: true,
            explicitPick: true
        }).then((submittable)=>{
            if (submittable) inputRef.current?.pulseSend();
        });
        focusPromptAtEnd();
    }
    _s2(useExamplePlugin, "UJtdaqJw1ILOTXT+7c46U6wksvw=", false, function() {
        return [
            usePlugin
        ];
    });
    function removePluginContext(pluginId) {
        const record = selectedPluginContexts.find((item)=>item.record.id === pluginId)?.record ?? null;
        setSelectedPluginContexts((prev)=>prev.filter((item)=>item.record.id !== pluginId));
        if (record) {
            setPrompt((current)=>removePluginMentionFromPrompt(current, record));
            setPromptEditedByUser(true);
        }
    }
    function handlePromptChange(nextPrompt) {
        setPrompt(nextPrompt);
        setPromptEditedByUser(true);
        if (!active?.queryTemplate) return;
        const extracted = extractPluginInputsFromPrompt(active.queryTemplate, nextPrompt, active.inputFields, {
            allowPrefix: active.queryTemplateAllowsPrefix === true
        });
        if (!extracted) return;
        const nextInputs = {
            ...active.inputs,
            ...extracted
        };
        const normalizedInputs = active.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHomeMediaInputs"])(active.mediaSurface, nextInputs, promptTemplates, elevenLabsVoices, composerImageModels) : nextInputs;
        const inputsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginInputsAreValid"])(active.inputFields, normalizedInputs);
        const inputsChanged = !inputsEqual(active.inputs, normalizedInputs);
        setActive({
            ...active,
            inputs: normalizedInputs,
            inputsValid,
            projectMetadata: active.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadataForHomeMediaComposer"])(active.mediaSurface, normalizedInputs, promptTemplates) : homeCreateProjectMetadata(active.projectKind, normalizedInputs, active.projectMetadata),
            result: inputsChanged && !inputsEqual(active.result?.appliedPlugin?.inputs, normalizedInputs) ? null : active.result,
            lastRenderedPrompt: nextPrompt
        });
    }
    function stageFiles(files) {
        if (files.length === 0) return;
        setStagedFiles((current)=>[
                ...current,
                ...files
            ]);
        setError(null);
        focusPromptAtEnd();
    }
    function removeStagedFile(index) {
        setStagedFiles((current)=>current.filter((_, i)=>i !== index));
    }
    async function handlePickWorkingDir() {
        // On desktop the working-dir POST is gated behind a host-minted token, so
        // pick through the host bridge to capture { baseDir, token } together.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])()) {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickHostWorkingDir"])();
            if (result.ok) {
                setWorkingDir(result.baseDir);
                setWorkingDirToken(result.token);
                void rememberRecentDir(result.baseDir);
                return;
            }
            // The user explicitly cancelled the host picker — respect that and do
            // not pop a second dialog.
            if ('canceled' in result && result.canceled) return;
            // The host is present but could not service the pick (mixed-version
            // upgrade where the preload lacks `project.pickWorkingDir`, or a host
            // error). We must NOT fall back to openFolderDialog() here: the browser
            // dialog yields a raw path with no host-minted token, so the later
            // POST /api/projects/:id/working-dir would be rejected by the desktop
            // auth gate and surface as a confusing late create-time failure.
            // Surface the host error instead and keep the existing working dir.
            setError(`Couldn't open the folder picker (${'reason' in result ? result.reason : 'host unavailable'}). Please update Open Design and try again.`);
            return;
        }
        // Pure web path: no desktop host, so there is no token gate — the raw
        // browser folder path is the expected, working input.
        const picked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openFolderDialog"])();
        if (picked) {
            setWorkingDir(picked);
            setWorkingDirToken(null);
            void rememberRecentDir(picked);
        }
    }
    function updateActiveInputs(next) {
        if (!active) return;
        const normalized = active.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHomeMediaInputs"])(active.mediaSurface, next, promptTemplates, elevenLabsVoices, composerImageModels) : next;
        const mediaComposer = active.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHomeMediaComposer"])(active.mediaSurface, promptTemplates, normalized, elevenLabsVoices, {
            elevenLabsVoiceWarning,
            elevenLabsVoicesLoading,
            imageModels: composerImageModels
        }) : null;
        const inputFields = mediaComposer?.fields ?? active.inputFields;
        const queryTemplate = mediaComposer?.queryTemplate ?? active.queryTemplate;
        const projectMetadata = active.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadataForHomeMediaComposer"])(active.mediaSurface, normalized, promptTemplates) : homeCreateProjectMetadata(active.projectKind, normalized, active.projectMetadata);
        const inputsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginInputsAreValid"])(inputFields, normalized);
        const nextRendered = queryTemplate !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPluginBriefTemplate"])(queryTemplate, normalized) : active.lastRenderedPrompt;
        if (!active.suppressPromptSync && queryTemplate !== null && nextRendered !== null && (prompt === active.lastRenderedPrompt || prompt.trim().length === 0)) {
            setPrompt(nextRendered);
            setPromptEditedByUser(false);
        }
        setActive({
            ...active,
            inputs: normalized,
            inputFields,
            queryTemplate,
            projectMetadata,
            editableInputNames: mediaComposer?.editableFieldNames ?? active.editableInputNames,
            inputsValid,
            result: inputsEqual(active.result?.appliedPlugin?.inputs, normalized) ? active.result : null,
            lastRenderedPrompt: active.suppressPromptSync ? active.lastRenderedPrompt : nextRendered
        });
    }
    function clearActivePlugin() {
        activePluginApplyRequestRef.current += 1;
        setActive(null);
        setFallbackProjectKind(null);
        setFallbackProjectMetadata(null);
        setPendingApplyId(null);
        setPendingChipId(null);
        setPrompt('');
        setPromptEditedByUser(false);
    }
    function clearActiveChipSelection() {
        activePluginApplyRequestRef.current += 1;
        setActive(null);
        setFallbackProjectKind(null);
        setFallbackProjectMetadata(null);
        setPendingApplyId(null);
        setPendingChipId(null);
        setError(null);
        setPromptEditedByUser(prompt.trim().length > 0);
        focusPromptAtEnd();
    }
    function useSkill(skill, nextPrompt) {
        activePluginApplyRequestRef.current += 1;
        setActive(null);
        setPendingChipId(null);
        setPendingApplyId(null);
        setFallbackProjectKind(null);
        setFallbackProjectMetadata(null);
        setActiveSkill(skill);
        setError(null);
        const replacement = nextPrompt ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillPrompt"])(locale, skill) ?? '';
        if (replacement.trim().length > 0) {
            setPrompt(replacement);
            setPromptEditedByUser(false);
        }
        focusPromptAtEnd();
    }
    function useMcpServer(_server, nextPrompt) {
        setSelectedMcpContexts((current)=>current.some((item)=>item.server.id === _server.id) ? current : [
                ...current,
                {
                    server: _server,
                    inlineBacked: true
                }
            ]);
        setPrompt(nextPrompt);
        setError(null);
        focusPromptAtEnd();
    }
    function removeMcpContext(serverId) {
        const server = selectedMcpContexts.find((item)=>item.server.id === serverId)?.server ?? null;
        setSelectedMcpContexts((current)=>current.filter((item)=>item.server.id !== serverId));
        if (server) {
            setPrompt((current)=>removeContextMentionsFromPrompt(current, [
                    server.label || server.id,
                    server.id
                ]));
            setPromptEditedByUser(true);
        }
    }
    function useConnector(connector, nextPrompt) {
        setSelectedConnectorContexts((current)=>current.some((item)=>item.connector.id === connector.id) ? current : [
                ...current,
                {
                    connector,
                    inlineBacked: true
                }
            ]);
        setPrompt(nextPrompt);
        setPromptEditedByUser(false);
        setError(null);
        focusPromptAtEnd();
    }
    function removeConnectorContext(connectorId) {
        const connector = selectedConnectorContexts.find((item)=>item.connector.id === connectorId)?.connector ?? null;
        setSelectedConnectorContexts((current)=>current.filter((item)=>item.connector.id !== connectorId));
        if (connector) {
            setPrompt((current)=>removeContextMentionsFromPrompt(current, [
                    connector.name,
                    connector.id
                ]));
            setPromptEditedByUser(true);
        }
    }
    function queuePluginAuthoring(chipId, goal) {
        const nextInputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginAuthoringInputs"])(goal);
        const nextPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPluginAuthoringPromptForInputs"])(nextInputs);
        runWithReplacementConfirmation('Plugin authoring', nextPrompt, async ()=>{
            setActive(null);
            setActiveSkill(null);
            setFallbackProjectKind('other');
            setFallbackProjectMetadata(null);
            setError(null);
            setPrompt(nextPrompt);
            setPromptEditedByUser(false);
            setPendingAuthoringPrompt(nextPrompt);
            setPendingAuthoringInputs(nextInputs);
            setPendingAuthoringChipId(chipId ?? 'create-plugin');
            setPendingChipId(chipId ?? 'create-plugin');
            focusPromptAtEnd();
        }, {
            before: active?.record.id ?? null,
            after: 'od-plugin-authoring'
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_s3({
        "HomeView.useEffect": ()=>{
            _s3();
            if (!pendingAuthoringChipId || pluginsLoading) return;
            const authoringRecord = plugins.find({
                "HomeView.useEffect.authoringRecord": (plugin)=>plugin.id === 'od-plugin-authoring'
            }["HomeView.useEffect.authoringRecord"]);
            const record = authoringRecord ?? plugins.find({
                "HomeView.useEffect": (plugin)=>plugin.id === 'od-new-generation'
            }["HomeView.useEffect"]);
            setPendingAuthoringChipId(null);
            if (!record) {
                setPendingChipId(null);
                // The authoring scenario can be absent in a long-running dev
                // daemon that started before the bundled plugin was added. If
                // even the default scenario is missing, do not block the user:
                // keep the prompt in place and submit as a naked `other`
                // project so the server-side fallback can still attempt to bind.
                return;
            }
            void usePlugin(record, pendingAuthoringPrompt, {
                projectKind: 'other',
                chipId: pendingAuthoringChipId,
                inputs: authoringRecord ? pendingAuthoringInputs : AUTHORING_DEFAULT_SCENARIO_INPUTS,
                ...authoringRecord ? {
                    queryTemplate: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_AUTHORING_PROMPT_TEMPLATE"]
                } : {}
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HomeView.useEffect"], "UJtdaqJw1ILOTXT+7c46U6wksvw=", false, {
        "HomeView.useEffect": function() {
            return [
                usePlugin
            ];
        }
    }["HomeView.useEffect"]), [
        pendingAuthoringChipId,
        pendingAuthoringPrompt,
        pendingAuthoringInputs,
        pluginsLoading,
        plugins
    ]);
    // Stage B of plugin-driven-flow-plan: the chip rail dispatcher.
    // Pure UI-state mapping — the heavy lifting is delegated back to
    // existing handlers. Migration chips that don't have a bound plugin
    // (`open-template-picker`) forward to callbacks threaded in from EntryShell.
    function pickChip(chip) {
        setError(null);
        // P0 ui_click area=chat_composer element=plugin_chip|action_chip. The
        // chip's `action.kind` discriminates: plugin-bound chips
        // (apply-scenario / apply-figma-migration) route to a plugin; the rest
        // (create-plugin, open-template-picker) are action
        // shortcuts. Failure paths below still fire because the user did pick
        // the chip — error state belongs in the run lifecycle event.
        const chipElement = chip.action.kind === 'apply-scenario' || chip.action.kind === 'apply-figma-migration' ? 'plugin_chip' : 'action_chip';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackHomeChatComposerClick"])(analytics.track, {
            page_name: 'home',
            area: 'chat_composer',
            element: chipElement,
            chip_id: chip.id
        });
        switch(chip.action.kind){
            case 'apply-scenario':
            case 'apply-figma-migration':
                {
                    const targetId = chip.action.pluginId;
                    const record = plugins.find((p)=>p.id === targetId);
                    if (!record) {
                        setError(`Bundled scenario "${targetId}" is not installed. Reinstall the daemon to restore the default plugin set.`);
                        return;
                    }
                    const mediaSurface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeMediaSurfaceForChipId"])(chip.id);
                    if (mediaSurface) {
                        const composer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHomeMediaComposer"])(mediaSurface, promptTemplates, chip.action.inputs, elevenLabsVoices, {
                            elevenLabsVoiceWarning,
                            elevenLabsVoicesLoading,
                            imageModels: composerImageModels
                        });
                        requestActivePlugin(record, undefined, {
                            projectKind: composer.projectKind,
                            chipId: chip.id,
                            inputs: composer.inputs,
                            inputFields: composer.fields,
                            queryTemplate: composer.queryTemplate,
                            mediaSurface,
                            projectMetadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadataForHomeMediaComposer"])(mediaSurface, composer.inputs, promptTemplates),
                            editableInputNames: composer.editableFieldNames,
                            preserveInputFields: true,
                            // Media chips are a mode switch, just like Prototype and
                            // Slide deck: they no longer surface inline model/ratio/duration
                            // settings (the agent asks for those during the run), and they
                            // leave the textarea alone until the user picks a concrete
                            // template/preset or types their own prompt.
                            suppressPromptUpdate: true,
                            replaceWithoutConfirmation: true
                        });
                        return;
                    }
                    const pluginOptions = {
                        projectKind: chip.action.projectKind,
                        chipId: chip.id,
                        inputs: chip.action.inputs,
                        projectMetadata: chip.action.projectMetadata ?? null
                    };
                    // Output-type tabs (create group) are mode-selection gestures:
                    // switching between them should never prompt for confirmation,
                    // and they should NOT pre-fill the textarea with the rendered
                    // useCase.query — the preset cards are the explicit opt-in
                    // for that. Migrate-group chips (From Figma, etc.) still carry
                    // a meaningful prompt the user wants dropped in, so they keep
                    // the historical behavior.
                    if (chip.group === 'create') {
                        void usePlugin(record, undefined, {
                            ...pluginOptions,
                            suppressPromptUpdate: true,
                            deferApply: true
                        });
                    } else {
                        requestActivePlugin(record, undefined, pluginOptions);
                    }
                    return;
                }
            case 'create-plugin':
                {
                    queuePluginAuthoring(chip.id);
                    return;
                }
            case 'create-brand-kit':
                {
                    // Reuse the Brand Kit tab's own extraction flow: route to the tab and
                    // ask it to open its New Brand Kit modal (the same modal its "New Brand
                    // Kit" button opens), rather than reimplementing the extraction here.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brand$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestNewBrandKit"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                        kind: 'home',
                        view: 'brands'
                    });
                    return;
                }
            case 'open-template-picker':
                {
                    if (!onOpenNewProject) {
                        setError('Template picker is not available in this shell.');
                        return;
                    }
                    onOpenNewProject('template');
                    return;
                }
        }
    }
    // Consume a one-shot Home composer chip intent (e.g. "Use in new chat" on the
    // Brands tab requesting the Prototype scenario). The entry shell keeps
    // HomeView mounted across view switches, so we react to the intent event
    // rather than to mount.
    //
    // The producer (Brands tab) applies the brand's design system as the default
    // and fires the intent in the same synchronous click handler. Consuming the
    // chip inside the event listener would run `pickChip` before React commits
    // that config change, so the composer would seed its design-system field from
    // the stale (empty) default — showing "No design system" for the brand. We
    // therefore only bump a tick from the listener and consume the chip in a
    // separate effect: by the time that effect runs, the re-render has landed and
    // `defaultDesignSystemTitle` reflects the freshly-applied brand.
    const [chipIntentTick, setChipIntentTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            function bumpChipIntent() {
                setChipIntentTick({
                    "HomeView.useEffect.bumpChipIntent": (tick)=>tick + 1
                }["HomeView.useEffect.bumpChipIntent"]);
            }
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME_CHIP_INTENT_EVENT"], bumpChipIntent);
            return ({
                "HomeView.useEffect": ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME_CHIP_INTENT_EVENT"], bumpChipIntent)
            })["HomeView.useEffect"];
        }
    }["HomeView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeView.useEffect": ()=>{
            // Guard on the plugin catalog being loaded — chip dispatch resolves a
            // bundled plugin — and re-run when `plugins` arrives so an intent queued
            // before the catalog loaded is still honored once it does.
            if (plugins.length === 0) return;
            const chipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumePendingHomeChip"])();
            if (!chipId) return;
            // A confirmation notice queued alongside the chip (e.g. "Using Ramp Brand
            // Kit" from "Use in new chat") makes the navigate+apply visibly verifiable.
            const notice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$home$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumePendingHomeNotice"])();
            if (notice) setHomeNotice(notice);
            const chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$chips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChip"])(chipId);
            if (chip) pickChip(chip);
        // pickChip / defaultDesignSystemTitle are recreated each render; this effect
        // runs after the commit that bumped the tick, so the closure it captures
        // already reflects the latest default design system.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HomeView.useEffect"], [
        plugins,
        chipIntentTick
    ]);
    // One-shot success confirmation surfaced as a toast after a brand "Use in new
    // chat" lands on Home (cleared on dismiss / TTL).
    const [homeNotice, setHomeNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function submit() {
        // The send button disables itself while sending, but the Enter-to-send
        // path lands here directly — swallow re-entry during the in-flight window.
        if (sending) return;
        const trimmed = prompt.trim();
        if (!trimmed && stagedFiles.length === 0) return;
        // P0 ui_click area=chat_composer element=send_button. Fires before the
        // async plugin-apply roundtrip so the click count reflects user intent
        // even when the run is rejected (missing inputs, apply failure). The
        // subsequent run_created/run_finished events carry the result detail.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackHomeChatComposerClick"])(analytics.track, {
            page_name: 'home',
            area: 'chat_composer',
            element: 'send_button'
        });
        let submittedActive = active;
        if (submittedActive && !submittedActive.inputsValid) {
            const missing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$pluginRequiredInputs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["missingRequiredInputs"])(submittedActive.inputFields, submittedActive.inputs);
            setError(missing.length > 0 ? `Fill the required plugin ${missing.length === 1 ? 'parameter' : 'parameters'} before running: ${missing.join(', ')}.` : 'Fill the required plugin parameters before running.');
            return;
        }
        setError(null);
        // Sending covers the whole async tail — a pending plugin apply (when one
        // must resolve first) and the project-creation roundtrip are both windows
        // a second click could otherwise re-enter.
        setSending(true);
        try {
            const defaultInputs = {
                prompt: trimmed
            };
            const submittedDesignSystemId = homeDesignSystemSelectionForInputs(submittedActive?.inputs ?? null, designSystemPickerSystems, t('designSystemPicker.noneTitle'));
            // Composer inputs are forwarded as-is; the deferred footer/media fields are
            // stripped from this set just below to form the run-facing inputs.
            const submittedApplyInputs = submittedActive ? submittedActive.inputs : defaultInputs;
            // Inputs forwarded to the run AND used to build the run-facing snapshot:
            // drop every now-hidden footer/media setting so the first-turn
            // question-form flow collects them instead of inheriting a baked-in
            // default (`ratio: 16:9`, `duration: 5`, `audioType: speech`, …). The
            // snapshot is resolved from these stripped inputs too — the daemon renders
            // `## Plugin inputs` from `snapshot.inputs` and tells the agent not to
            // re-ask about anything listed there, so leaving the deferred defaults in
            // the snapshot would suppress the discovery flow even though
            // `onSubmit.pluginInputs` was stripped. Stripping only removes non-required
            // fields (`subject`/`style`/`aspect`/`mediaKind` stay), so the
            // od-media-generation apply still validates.
            const submittedPluginInputs = submittedActive ? stripArtifactFooterInputs(submittedApplyInputs) : defaultInputs;
            const activeInputsChangedForSubmit = submittedActive ? !inputsEqual(submittedActive.result?.appliedPlugin?.inputs ?? submittedActive.inputs, submittedPluginInputs) : false;
            if (submittedActive && (!submittedActive.result || activeInputsChangedForSubmit)) {
                const result = await resolveActivePlugin(submittedActive.record, submittedPluginInputs);
                if (!result) {
                    setError(`Failed to apply ${submittedActive.record.title}. Check the plugin parameters and try again.`);
                    return;
                }
                submittedActive = {
                    ...submittedActive,
                    result,
                    inputs: submittedPluginInputs
                };
                setActive(submittedActive);
            }
            // Reconcile each selected context against the serialized prompt text before
            // forwarding it. Inline-backed contexts (inserted as `@mention` pills) are
            // only sent while their token survives in the prompt — the Lexical composer
            // lets users delete a mention pill (backspace, edit), and when they do that
            // plugin/MCP/connector should stop being sent. Context-only `Use`
            // selections never carry a token, so they stay in the payload until the
            // user explicitly clears them.
            const contextPlugins = selectedPluginContexts.filter((item)=>!item.inlineBacked || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(trimmed, item.record.title)).map((item)=>({
                    id: item.record.id,
                    title: item.record.title,
                    ...item.record.manifest?.description ? {
                        description: item.record.manifest.description
                    } : {}
                }));
            const contextMcpServers = selectedMcpContexts.filter((item)=>!item.inlineBacked || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(trimmed, item.server.label || item.server.id)).map((item)=>({
                    id: item.server.id,
                    ...item.server.label ? {
                        label: item.server.label
                    } : {},
                    ...item.server.transport ? {
                        transport: item.server.transport
                    } : {},
                    ...item.server.url ? {
                        url: item.server.url
                    } : {},
                    ...item.server.command ? {
                        command: item.server.command
                    } : {}
                }));
            const contextConnectors = selectedConnectorContexts.filter((item)=>!item.inlineBacked || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(trimmed, item.connector.name)).map((item)=>({
                    id: item.connector.id,
                    name: item.connector.name,
                    provider: item.connector.provider,
                    category: item.connector.category,
                    status: item.connector.status,
                    ...item.connector.accountLabel ? {
                        accountLabel: item.connector.accountLabel
                    } : {}
                }));
            const submittedProjectKind = submittedActive?.projectKind ?? fallbackProjectKind ?? projectKindForSkill(activeSkill) ?? 'other';
            const submittedProjectMetadata = submittedActive?.mediaSurface ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$media$2d$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadataForHomeMediaComposer"])(submittedActive.mediaSurface, submittedActive.inputs, promptTemplates) : homeCreateProjectMetadata(submittedProjectKind, submittedActive?.inputs ?? null, submittedActive?.projectMetadata ?? fallbackProjectMetadata ?? null);
            // Scenario plugins (chips / preset cards) and explicit skill picks are
            // mutually exclusive routing sources — never send both (#2972).
            const resolvedSkillId = submittedActive ? null : activeSkill?.id ?? null;
            const routedPluginId = sessionMode === 'design' ? submittedActive?.record.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_UNSELECTED_SCENARIO_PLUGIN_ID"] : submittedActive?.record.id ?? null;
            // The example-prompt override is a one-shot marker. Decide whether to
            // send it now, but defer spending the marker until the create is
            // accepted — a rejected attempt stays retryable and must resend it.
            const examplePromptKey = 'od:example-prompt-used';
            const examplePromptToSend = examplePromptInfoRef.current != null && localStorage.getItem(examplePromptKey) == null ? examplePromptInfoRef.current : null;
            const accepted = await onSubmit({
                prompt: trimmed,
                pluginId: routedPluginId,
                pluginType: submittedActive?.record.marketplaceTrust ?? (routedPluginId ? 'official' : null),
                skillId: resolvedSkillId,
                appliedPluginSnapshotId: submittedActive?.result?.appliedPlugin?.snapshotId ?? null,
                pluginTitle: submittedActive?.record.title ?? null,
                taskKind: submittedActive?.result?.appliedPlugin?.taskKind ?? null,
                pluginInputs: submittedPluginInputs,
                projectKind: submittedProjectKind,
                projectMetadata: submittedProjectMetadata,
                designSystemId: submittedDesignSystemId,
                contextPlugins,
                contextMcpServers,
                contextConnectors,
                attachments: stagedFiles,
                ...workingDir ? {
                    workingDir
                } : {},
                ...workingDirToken ? {
                    workingDirToken
                } : {},
                conversationMode: sessionMode,
                ...examplePromptToSend ? {
                    examplePromptContext: examplePromptToSend
                } : {}
            });
            if (accepted === false) {
                setError('Failed to start the run. Make sure the daemon is reachable, then try again.');
                return;
            }
            // Create accepted — now it is safe to spend the one-shot marker.
            if (examplePromptToSend) localStorage.setItem(examplePromptKey, '1');
            // Only drop the staged contexts once the run actually started — a
            // rejected creation keeps them so the retry sends the same payload.
            setSelectedPluginContexts([]);
            setSelectedMcpContexts([]);
            setSelectedConnectorContexts([]);
        } catch (err) {
            // A submit handler that throws (instead of resolving false) lands on
            // the same recovery path as a rejected creation.
            console.warn('Home composer submit failed', err);
            setError('Failed to start the run. Make sure the daemon is reachable, then try again.');
        } finally{
            setSending(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home-view",
        "data-testid": "home-view",
        ref: homeViewRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeHero"], {
                ref: inputRef,
                active: isActive,
                firstRunGuide: projectsLoading ? undefined : projects.length === 0,
                prompt: prompt,
                onPromptChange: handlePromptChange,
                onSubmit: submit,
                sessionMode: sessionMode,
                onSessionModeChange: setSessionMode,
                activePluginTitle: activeBadgeTitle,
                activePluginIsExplicit: activePluginIsExplicit,
                activePluginRecord: active?.record ?? null,
                activeSkillId: activeSkill?.id ?? null,
                activeSkillTitle: activeSkill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, activeSkill) : null,
                activeChipId: active?.chipId ?? null,
                showActivePluginChip: showActivePluginChip,
                onClearActivePlugin: clearActivePlugin,
                onClearActiveChip: clearActiveChipSelection,
                onClearActiveSkill: ()=>setActiveSkill(null),
                selectedPluginContexts: selectedPluginContexts.map((item)=>item.record),
                selectedMcpContexts: selectedMcpContexts.map((item)=>item.server),
                selectedConnectorContexts: selectedConnectorContexts.map((item)=>item.connector),
                contextOnlyPlugins: selectedPluginContexts.filter((item)=>!item.inlineBacked).map((item)=>item.record),
                contextOnlyMcpServers: selectedMcpContexts.filter((item)=>!item.inlineBacked).map((item)=>item.server),
                contextOnlyConnectors: selectedConnectorContexts.filter((item)=>!item.inlineBacked).map((item)=>item.connector),
                onRemovePluginContext: removePluginContext,
                onRemoveMcpContext: removeMcpContext,
                onRemoveConnectorContext: removeConnectorContext,
                onAddPlugin: onBrowseRegistry,
                onAddConnector: onOpenIntegrations,
                onAddMcp: onOpenMcp,
                onOpenPluginDetails: setDetailsRecord,
                pluginInputFields: (active?.inputFields ?? []).filter((field)=>!ARTIFACT_FOOTER_FIELD_NAMES.has(field.name)),
                pluginInputValues: active?.inputs ?? {},
                pluginInputTemplate: active?.queryTemplate ?? null,
                onPluginInputValuesChange: updateActiveInputs,
                inlineEditableInputNames: active?.editableInputNames ?? [],
                footerInputNames: footerInputNamesForChip(active?.chipId ?? null),
                designSystems: designSystemPickerSystems,
                stagedFiles: stagedFiles,
                onAddFiles: stageFiles,
                onRemoveFile: removeStagedFile,
                pluginOptions: plugins,
                pluginsLoading: pluginsLoading,
                skillOptions: selectableSkills,
                skillsLoading: skillsLoading,
                mcpOptions: enabledMcpServers,
                mcpLoading: mcpLoading,
                connectorOptions: connectors.filter((connector)=>connector.status === 'connected'),
                pendingPluginId: pendingApplyId,
                pendingChipId: pendingChipId,
                submitDisabled: Boolean(pendingApplyId) || Boolean(pendingAuthoringChipId) || Boolean(active && !active.inputsValid),
                submitting: sending,
                onPickPlugin: (record, nextPrompt)=>addPluginContext(record, nextPrompt),
                onPickExamplePlugin: useExamplePlugin,
                onPickSkill: useSkill,
                onPickMcp: useMcpServer,
                onPickConnector: useConnector,
                onPickChip: pickChip,
                contextItemCount: contextItemCount,
                error: error,
                workingDir: workingDir,
                recentDirs: recentDirs,
                onPickWorkingDir: handlePickWorkingDir,
                onSelectRecentWorkingDir: (dir)=>{
                    setWorkingDir(dir);
                    // Recents come from the browser-side picker only; they carry no
                    // desktop trust token (and linkedDirs don't need one).
                    setWorkingDirToken(null);
                    void rememberRecentDir(dir);
                },
                onClearWorkingDir: ()=>{
                    setWorkingDir(null);
                    setWorkingDirToken(null);
                },
                onExamplePromptStatusChange: handleExamplePromptStatusChange,
                executionSwitcher: executionSwitcher
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RecentProjectsStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentProjectsStrip"], {
                projects: projects,
                designSystems: designSystems,
                ...projectsLoading !== undefined ? {
                    loading: projectsLoading
                } : {},
                onOpen: (id)=>{
                    // P0 ui_click area=recent_projects element=project_card — emit
                    // before navigation so the event isn't lost when the host
                    // re-renders into the project view.
                    const project = projects.find((p)=>p.id === id);
                    const projectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(project?.metadata?.kind, project?.metadata?.videoModel);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRecentProjectsClick"])(analytics.track, {
                        page_name: 'home',
                        area: 'recent_projects',
                        element: 'project_card',
                        project_id: id,
                        ...projectKind ? {
                            project_kind: projectKind
                        } : {}
                    });
                    onOpenProject(id);
                },
                onViewAll: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRecentProjectsClick"])(analytics.track, {
                        page_name: 'home',
                        area: 'recent_projects',
                        element: 'view_all'
                    });
                    onViewAllProjects();
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeTemplatesReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeTemplatesReveal"], {
                enabled: !projectsLoading && projects.length === 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsHomeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsHomeSection"], {
                    plugins: plugins,
                    loading: pluginsLoading,
                    activePluginId: active?.record.id ?? null,
                    pendingApplyId: pendingApplyId,
                    onUse: (record, action)=>void routePluginUse(record, action),
                    onOpenDetails: handleCommunityOpenDetails,
                    onBrowseRegistry: onBrowseRegistry,
                    preferDefaultFacet: false,
                    cardLayout: "gallery"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/HomeView.tsx",
                    lineNumber: 1765,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1762,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: detailsRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginDetailsModal"], {
                    record: detailsRecord,
                    onClose: ()=>{
                        // Covers the close button, Esc and the backdrop — every
                        // variant funnels dismissal through this single onClose.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginDetailModalClick"])(analytics.track, {
                            page_name: 'home',
                            area: 'plugin_detail_modal',
                            element: 'close',
                            plugin_id: detailsRecord.sourceMarketplaceEntryName ?? detailsRecord.id,
                            plugin_type: detailsRecord.marketplaceTrust ?? 'official'
                        });
                        setDetailsRecord(null);
                    },
                    onUse: (record, action)=>{
                        // Track here (not inside routePluginUse) so the gallery's
                        // own onUse keeps its community_gallery attribution; the
                        // kebab 'use-with-query' action maps to the dropdown face.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginDetailModalClick"])(analytics.track, {
                            page_name: 'home',
                            area: 'plugin_detail_modal',
                            element: action === 'use-with-query' ? 'use_plugin_dropdown' : 'use_plugin',
                            plugin_id: record.sourceMarketplaceEntryName ?? record.id,
                            plugin_type: record.marketplaceTrust ?? 'official'
                        });
                        void routePluginUse(record, action);
                    },
                    isApplying: pendingApplyId === detailsRecord.id,
                    onSharePopoverItemClick: (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginDetailModalSharePopoverClick"])(analytics.track, {
                            page_name: 'home',
                            area: 'plugin_detail_share_popover',
                            element: item,
                            plugin_id: detailsRecord.sourceMarketplaceEntryName ?? detailsRecord.id,
                            plugin_type: detailsRecord.marketplaceTrust ?? 'official'
                        })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/HomeView.tsx",
                    lineNumber: 1780,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1778,
                columnNumber: 7
            }, this),
            pendingReplacement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                backdropClassName: "home-hero-confirm__backdrop",
                className: "home-hero-confirm",
                includeChromeClassName: false,
                ariaLabelledBy: "home-hero-confirm-title",
                closeOnBackdrop: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        id: "home-hero-confirm-title",
                        children: t('homeHero.confirmReplaceTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/HomeView.tsx",
                        lineNumber: 1827,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t('homeHero.confirmReplaceBody', {
                            title: pendingReplacement.title
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/HomeView.tsx",
                        lineNumber: 1828,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "home-hero-confirm__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "home-hero-confirm__secondary",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginReplacementModalClick"])(analytics.track, {
                                        page_name: 'home',
                                        area: 'plugin_replacement_modal',
                                        element: 'cancel'
                                    });
                                    setPendingReplacement(null);
                                },
                                children: t('common.cancel')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                                lineNumber: 1832,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "home-hero-confirm__primary",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginReplacementModalClick"])(analytics.track, {
                                        page_name: 'home',
                                        area: 'plugin_replacement_modal',
                                        element: 'replace'
                                    });
                                    const pluginBefore = pendingReplacement.pluginBefore;
                                    const pluginAfter = pendingReplacement.pluginAfter;
                                    const action = pendingReplacement.confirm;
                                    setPendingReplacement(null);
                                    // `action()` now returns a promise that resolves when
                                    // the underlying plugin apply finishes (or rejects on
                                    // failure). Emitting the result event off the promise
                                    // settle is the only way to capture real success /
                                    // failure — the synchronous path used to mark every
                                    // attempt as a success and never observed the catch
                                    // branch.
                                    void (async ()=>{
                                        try {
                                            await action();
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginReplacementResult"])(analytics.track, {
                                                page_name: 'home',
                                                area: 'plugin_replacement',
                                                plugin_before: pluginBefore ?? '',
                                                plugin_after: pluginAfter,
                                                result: 'success'
                                            });
                                        } catch (err) {
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPluginReplacementResult"])(analytics.track, {
                                                page_name: 'home',
                                                area: 'plugin_replacement',
                                                plugin_before: pluginBefore ?? '',
                                                plugin_after: pluginAfter,
                                                result: 'failed',
                                                error_code: err instanceof Error ? err.message : String(err)
                                            });
                                        }
                                    })();
                                },
                                children: t('homeHero.confirmReplace')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                                lineNumber: 1846,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/HomeView.tsx",
                        lineNumber: 1831,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1820,
                columnNumber: 9
            }, this) : null,
            homeNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: homeNotice,
                tone: "success",
                placement: "bottom",
                ttlMs: 3200,
                onDismiss: ()=>setHomeNotice(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/HomeView.tsx",
                lineNumber: 1896,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/HomeView.tsx",
        lineNumber: 1647,
        columnNumber: 5
    }, this);
}
_s(HomeView, "KiSDiDRRt/b8Rp2orP6YBZn4rv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixImageModels"]
    ];
});
_c = HomeView;
function projectKindForSkill(skill) {
    if (!skill) return null;
    if (skill.mode === 'deck') return 'deck';
    if (skill.mode === 'prototype') return 'prototype';
    if (skill.mode === 'template') return 'template';
    if (skill.mode === 'image' || skill.surface === 'image') return 'image';
    if (skill.mode === 'video' || skill.surface === 'video') return 'video';
    if (skill.mode === 'audio' || skill.surface === 'audio') return 'audio';
    return 'other';
}
function defaultPluginIdForChip(chipId) {
    if (!chipId) return null;
    const chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$chips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChip"])(chipId);
    if (chip?.action.kind === 'apply-scenario' || chip?.action.kind === 'apply-figma-migration') {
        return chip.action.pluginId;
    }
    return null;
}
function shouldShowActivePluginChip(active) {
    if (!active) return false;
    // An explicit pick (example-prompt preset / Community card / detail modal)
    // always surfaces its own plugin chip — even when the preset's plugin id
    // equals the chip's default plugin.
    if (active.explicitPick) return true;
    if (!active.chipId) return true;
    // Otherwise a type chip whose default plugin IS this record stands in for the
    // task chip and suppresses a separate plugin chip.
    return active.record.id !== defaultPluginIdForChip(active.chipId);
}
function homeHeroChipLabelForId(chipId, t) {
    switch(chipId){
        case 'prototype':
            return t('homeHero.chip.prototype');
        case 'live-artifact':
            return t('homeHero.chip.liveArtifact');
        case 'deck':
            return t('homeHero.chip.deck');
        case 'image':
            return t('homeHero.chip.image');
        case 'video':
            return t('homeHero.chip.video');
        case 'hyperframes':
            return t('homeHero.chip.hyperframes');
        case 'audio':
            return t('homeHero.chip.audio');
        case 'create-brand-kit':
            return t('homeHero.chip.createBrandKit');
        case 'create-plugin':
            return t('homeHero.chip.createPlugin');
        case 'figma':
            return t('homeHero.chip.figma');
        case 'template':
            return t('homeHero.chip.template');
        default:
            return chipId;
    }
}
// Prototype/deck-specific settings (fidelity, slide count, speaker notes) are
// no longer promoted into the home composer footer — the agent asks for those
// via the first-turn discovery flow, so the prototype/deck footer keeps only
// the design-system picker. Media surfaces (image/video/audio/hyperframes)
// now defer the same way: image/video keep only the design-system picker and
// audio/hyperframes keep nothing, with model / ratio / resolution / duration /
// audio type collected by the agent via question-form during the run instead
// of inline pre-flight controls.
const ARTIFACT_FOOTER_FIELD_NAMES = new Set([
    'fidelity',
    'slideCount',
    'speakerNotes',
    // Media surfaces (image/video/audio/hyperframes) defer the same way. These
    // were dropped from the footer but `buildHomeMediaComposer` still seeds them
    // (`model: gpt-image-2`, `ratio: 16:9`, `duration: 5`, `audioType: speech`,
    // …) so they must be stripped before submission — otherwise the run arrives
    // with baked-in defaults and the first-turn question-form flow has nothing
    // left to ask. `subject` / `style` / `aspect` / `mediaKind` are intentionally
    // NOT listed: the od-media-generation apply still validates against them.
    'model',
    'ratio',
    'resolution',
    'duration',
    'audioType',
    'voice'
]);
// The prototype/deck footer no longer exposes these settings, so any plugin
// default for them must NOT be seeded into the Home composer's inputs — that
// would forward a prefilled value (e.g. `fidelity: high-fidelity`) to the run
// instead of leaving it "unknown" for the first-turn discovery flow to ask.
function stripArtifactFooterInputs(inputs) {
    if (!Object.keys(inputs).some((key)=>ARTIFACT_FOOTER_FIELD_NAMES.has(key))) {
        return inputs;
    }
    const next = {};
    for (const [key, value] of Object.entries(inputs)){
        if (ARTIFACT_FOOTER_FIELD_NAMES.has(key)) continue;
        next[key] = value;
    }
    return next;
}
function footerInputNamesForChip(chipId) {
    if (chipId === 'prototype' || chipId === 'deck') return [
        'designSystem'
    ];
    if (chipId === 'image' || chipId === 'video') return [
        'designSystem'
    ];
    // hyperframes / audio surface no pre-flight settings — the agent asks for
    // ratio / duration / model / audio kind via question-form during the run.
    return [];
}
function homeCreateProjectMetadata(projectKind, _inputs, existing) {
    const kind = projectKind ?? existing?.kind ?? null;
    if (!kind) return existing;
    // Artifact-specific settings (fidelity, speaker notes, slide count, …) are no
    // longer collected in the home composer; the agent asks for them via
    // question-form, so we only seed `kind` here and let those fields stay
    // unset (the system prompt then marks them "unknown — ask").
    const next = {
        ...existing ?? {},
        kind
    };
    return next;
}
// Selectable design systems for the home composer, sorted to match the picker:
// a user-owned ("Personal") default first, then by group (Personal → Official
// preset → Enterprise) and title. The shared DesignSystemPicker renders its own
// "不指定 / No design system" row, so it is NOT included here.
function selectableHomeDesignSystems(systems, defaultDesignSystemId) {
    const selectable = systems.filter((system)=>{
        if (!system.title) return false;
        if (system.source === 'user' || system.isEditable === true) return (system.status ?? 'draft') === 'published';
        return true;
    });
    const sorted = [
        ...selectable
    ].sort((a, b)=>{
        const groupDelta = designSystemGroupOrder(designSystemOptionGroup(a)) - designSystemGroupOrder(designSystemOptionGroup(b));
        if (groupDelta !== 0) return groupDelta;
        const aDefault = a.id === defaultDesignSystemId;
        const bDefault = b.id === defaultDesignSystemId;
        if (aDefault !== bDefault) return aDefault ? -1 : 1;
        return a.title.localeCompare(b.title);
    });
    const defaultSystem = sorted.find((system)=>system.id === defaultDesignSystemId && designSystemOptionGroup(system) === 'Personal');
    if (!defaultSystem) return sorted;
    return [
        defaultSystem,
        ...sorted.filter((system)=>system.id !== defaultSystem.id)
    ];
}
// The composer's default selection title. A user-owned ("Personal") default
// design system stays pre-selected; otherwise the composer defaults to
// "不指定 / No design system" so nothing is imposed implicitly and the project
// opens with an empty Design system.
function homeDefaultDesignSystemTitle(systems, defaultDesignSystemId, t) {
    const defaultSystem = systems.find((system)=>system.id === defaultDesignSystemId && Boolean(system.title) && designSystemOptionGroup(system) === 'Personal' && (system.status ?? 'draft') === 'published');
    return defaultSystem?.title ?? t('designSystemPicker.noneTitle');
}
function designSystemOptionGroup(system) {
    if (system.source === 'user' || system.isEditable === true) return 'Personal';
    if (system.source === 'installed') return 'Enterprise';
    return 'Official preset';
}
function designSystemGroupOrder(group) {
    if (group === 'Personal') return 0;
    if (group === 'Official preset') return 1;
    return 2;
}
// Seed the composer's `designSystem` plugin input with the default selection
// title when the plugin exposes the field and the user hasn't chosen one yet.
function withHomeDesignSystemDefault(provided, fields, defaultDesignSystemTitle) {
    if (!fields.some((field)=>field.name === 'designSystem')) return provided;
    const current = provided?.designSystem;
    const currentText = current === undefined || current === null ? '' : String(current).trim();
    if (currentText.length > 0 && currentText !== 'the active project design system') {
        return provided;
    }
    return {
        ...provided ?? {},
        designSystem: defaultDesignSystemTitle
    };
}
// Resolve the composer's `designSystem` input (a title string) to the
// designSystemId sent at submit. "不指定 / No design system" (or an unset
// value) resolves to null so the project is created without a design system.
function homeDesignSystemSelectionForInputs(inputs, systems, noneTitle) {
    const value = inputs?.designSystem;
    if (typeof value !== 'string') return null;
    const selectedTitle = value.trim();
    if (!selectedTitle || selectedTitle === noneTitle || selectedTitle === 'the active project design system') {
        return null;
    }
    return systems.find((system)=>system.title === selectedTitle)?.id ?? null;
}
function estimatePluginContextItemCount(record) {
    const context = record.manifest?.od?.context;
    if (!context) return 0;
    const assetCount = context.assets?.length ?? 0;
    const mcpCount = context.mcp?.length ?? 0;
    const claudePluginCount = context.claudePlugins?.length ?? 0;
    const atomCount = context.atoms?.length ?? 0;
    const craftCount = context.craft?.length ?? 0;
    return assetCount + mcpCount + claudePluginCount + atomCount + craftCount;
}
function hydratePluginInputs(fields, provided) {
    const next = {
        ...provided ?? {}
    };
    for (const field of fields){
        if (next[field.name] === undefined && field.default !== undefined) {
            next[field.name] = field.default;
        }
    }
    return next;
}
const TEMPLATE_INPUT_PATTERN = /\{\{\s*([a-zA-Z_][\w-]*)\s*\}\}/g;
function extractPluginInputsFromPrompt(template, prompt, fields, options) {
    TEMPLATE_INPUT_PATTERN.lastIndex = 0;
    const fieldByName = new Map(fields.map((field)=>[
            field.name,
            field
        ]));
    const keys = [];
    // `allowPrefix` matches the template as a suffix of the prompt with any
    // leading text allowed. Used by use-with-query, where the plugin query is
    // appended after a user-owned draft prefix: the prefix is mutable and must
    // not be baked into the anchored template, otherwise editing it would break
    // placeholder extraction and leave pluginInputs stale.
    let pattern = options?.allowPrefix ? '[\\s\\S]*?' : '^';
    let lastIndex = 0;
    let match;
    while((match = TEMPLATE_INPUT_PATTERN.exec(template)) !== null){
        const placeholder = match[0];
        const key = match[1];
        if (!key) continue;
        pattern += escapeRegExp(template.slice(lastIndex, match.index));
        pattern += '([\\s\\S]*?)';
        keys.push(key);
        lastIndex = match.index + placeholder.length;
    }
    if (keys.length === 0) return null;
    pattern += escapeRegExp(template.slice(lastIndex));
    const renderedMatch = new RegExp(pattern + '$').exec(prompt);
    if (!renderedMatch) return null;
    const next = {};
    keys.forEach((key, index)=>{
        const field = fieldByName.get(key);
        if (!field) return;
        const raw = renderedMatch[index + 1] ?? '';
        next[key] = coercePromptInputValue(raw, field);
    });
    return next;
}
function coercePromptInputValue(raw, field) {
    const rawType = field.type;
    const type = typeof rawType === 'string' ? rawType : 'string';
    const trimmed = raw.trim();
    if (type === 'number') {
        if (trimmed.length === 0) return undefined;
        const parsed = Number(trimmed);
        return Number.isFinite(parsed) ? parsed : raw;
    }
    if (type === 'boolean') {
        if (trimmed.toLowerCase() === 'true') return true;
        if (trimmed.toLowerCase() === 'false') return false;
    }
    if (type === 'select' && Array.isArray(field.options) && field.options.includes(trimmed)) {
        return trimmed;
    }
    return raw;
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function removePluginMentionFromPrompt(prompt, record) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(record.title);
    return prompt.replace(new RegExp(`(^|\\s)${escapeRegExp(token)}(?=\\s|$)`, 'g'), ' ').replace(/[ \t]{2,}/g, ' ').replace(/\n[ \t]+/g, '\n').trim();
}
function removeContextMentionsFromPrompt(prompt, labels) {
    const uniqueLabels = Array.from(new Set(labels.filter(Boolean)));
    return uniqueLabels.reduce((current, label)=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(label);
        return current.replace(new RegExp(`(^|[\\s([{"'])${escapeRegExp(token)}(?=$|\\s|[.,;:!?)}\\]"'])([^\\S\\r\\n])?`, 'g'), '$1');
    }, prompt);
}
function inputsEqual(left, right) {
    if (!left) return false;
    const leftKeys = Object.keys(left).sort();
    const rightKeys = Object.keys(right).sort();
    if (leftKeys.length !== rightKeys.length) return false;
    return leftKeys.every((key, idx)=>key === rightKeys[idx] && left[key] === right[key]);
}
var _c;
__turbopack_context__.k.register(_c, "HomeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_HomeView_tsx_0~tt_ah._.js.map