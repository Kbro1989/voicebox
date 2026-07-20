(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/EntryShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntryShell",
    ()=>EntryShell,
    "OnboardingDropdown",
    ()=>OnboardingDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// EntryShell — the centered-hero entry layout.
//
// This component owns the entire JSX render and local UI state for
// the redesigned home view (left rail + sticky settings cog + hero +
// recent projects + plugins section + new-project modal). It is
// intentionally a sibling of `EntryView` so that upstream `main`
// changes to `EntryView` (props, connector lifecycle, helpers, exports)
// can be rebased without touching this file. `EntryView` becomes a
// thin wrapper that passes data and callbacks through to this shell.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/amr-attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/amr-auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/onboarding-session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BrandsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryNavRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/EntryNavRail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UpdaterPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/UpdaterPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GithubStarBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/GithubStarBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useDiscordPresence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/useDiscordPresence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/HomeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/home-hero/plugin-authoring.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AgentIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LanguageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LanguageMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IntegrationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/IntegrationsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$InlineModelSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/InlineModelSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntrySettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/EntrySettingsMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NewProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/NewProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TasksView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TasksView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/apiProtocols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$onboarding$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/onboarding-profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$connection$2d$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/connection-test.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$provider$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/provider-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/amrLoginPolling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$useBrandExtract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/useBrandExtract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandReferencePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BrandReferencePicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AmrLoginPill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$smoothScrollToTop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/smoothScrollToTop.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/projectName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providerModelsCache.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
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
// Persist the entry nav-rail open/collapsed state so it survives both a
// home -> project -> home navigation (EntryShell unmounts on the project
// route) and a full reload. Without this the rail always reset to its
// collapsed default on return.
const RAIL_OPEN_STORAGE_KEY = 'od.entry.railOpen';
function readStoredRailOpen() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(RAIL_OPEN_STORAGE_KEY) === 'true';
    } catch  {
        return false;
    }
}
function writeStoredRailOpen(open) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(RAIL_OPEN_STORAGE_KEY, open ? 'true' : 'false');
    } catch  {
    /* ignore quota / disabled storage */ }
}
const DISCORD_URL = 'https://discord.gg/9ptkbbqRu';
const X_URL = 'https://x.com/OpenDesignHQ';
const ONBOARDING_DROPDOWN_OPEN_EVENT = 'open-design:onboarding-dropdown-open';
// The topbar chips (GitHub star, model switcher, Use everywhere)
// collapse into the settings dropdown when the viewport gets
// narrow. The transition is driven entirely by CSS @media queries
// in `entry-layout.css` so server and client render identical
// markup — both surfaces are always present, and CSS toggles
// `display` based on `--compact-topbar` breakpoint (900px).
// Default scenario plugin for each project kind/intent. The mapping
// lives in `@open-design/contracts` so the daemon's `/api/projects`
// and `/api/runs` fallbacks resolve to the same plugin id when no
// `pluginId` is on the request body — plan §3.3 of
// `specs/current/plugin-driven-flow-plan.md`.
// Newsletter signup endpoint. Lives on the marketing site (Cloudflare Pages
// Function backed by KV), so this is a cross-origin POST from the desktop
// client. Overridable at build time via NEXT_PUBLIC_NEWSLETTER_URL — e.g. point
// it at a local `wrangler pages dev` instance during development.
const NEWSLETTER_SUBSCRIBE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_NEWSLETTER_URL ?? 'https://open-design.ai/subscribe';
const NEWSLETTER_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ONBOARDING_BYOK_AUTO_FETCH_DELAY_MS = 300;
const ONBOARDING_BYOK_AUTO_TEST_DELAY_MS = 500;
function defaultPluginIdForMetadata(metadata) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultScenarioPluginIdForProjectMetadata"])(metadata);
}
function defaultPluginInputsForCreate(input, pluginId) {
    const kind = input.metadata.kind;
    const projectName = input.name.trim();
    if (pluginId === 'example-web-prototype') {
        return {
            artifactKind: input.metadata.includeLandingPage ? 'landing page' : 'web prototype',
            fidelity: input.metadata.fidelity ?? 'high-fidelity',
            audience: 'product evaluators',
            designSystem: 'the active project design system',
            template: input.metadata.templateLabel ?? 'the bundled web prototype seed'
        };
    }
    if (pluginId === 'example-simple-deck') {
        return {
            deckType: 'pitch deck',
            topic: projectName || 'the user brief',
            audience: 'decision makers',
            slideCount: '10-15 pages',
            speakerNotes: input.metadata.speakerNotes ? 'include speaker notes' : 'no speaker notes',
            designSystem: 'the active project design system'
        };
    }
    if (pluginId === 'od-new-generation') {
        const templateLabel = input.metadata.templateLabel?.trim();
        const artifactKind = kind === 'template' ? 'artifact based on a saved template' : kind === 'other' ? 'custom design artifact' : `${kind} artifact`;
        return {
            artifactKind,
            audience: 'product and design reviewers',
            topic: templateLabel || projectName || 'the user brief'
        };
    }
    if (pluginId !== 'od-media-generation') return null;
    if (kind !== 'image' && kind !== 'video' && kind !== 'audio') return null;
    const promptTemplate = input.metadata.promptTemplate;
    const subject = promptTemplate?.prompt?.trim() || projectName || promptTemplate?.title?.trim() || `${kind} concept`;
    const style = promptTemplate?.summary?.trim() || 'cinematic, high-quality, on-brand';
    const aspect = kind === 'image' ? input.metadata.imageAspect : kind === 'video' ? input.metadata.videoAspect : undefined;
    return {
        mediaKind: kind,
        subject,
        style,
        ...aspect ? {
            aspect
        } : {}
    };
}
// Map an EntryNavRail view id to the analytics `element` enum on
// `home/nav` ui_click. Returns `null` for views without a dedicated nav
// button (the rail's "Home" target is the brand logo, which gets its own
// element value via the logo click handler — not the changeView path).
function navElementForView(next) {
    switch(next){
        case 'home':
            return 'home';
        case 'projects':
            return 'projects';
        case 'tasks':
            return 'automations';
        case 'plugins':
            return 'plugins';
        case 'design-systems':
            return 'design_systems';
        case 'brands':
            // No dedicated brands analytics element yet; reuse the design_systems
            // slot since Brands replaces that nav destination.
            return 'design_systems';
        case 'integrations':
            return 'integrations';
        default:
            return null;
    }
}
// Tab views stay mounted (so previews/thumbnails survive a tab switch) but the
// inactive ones must leave layout, the accessibility tree, and tab order.
// `content-visibility: hidden` still reserves the hidden pane's block size,
// which pushes later sidebar destinations far below the sticky topbar.
function inactiveViewProps(active) {
    return {
        style: active ? undefined : {
            display: 'none'
        },
        inert: !active,
        'aria-hidden': !active
    };
}
function EntryShell({ skills, designTemplates, designSystems, projects, templates, onDeleteTemplate, promptTemplates, defaultDesignSystemId, connectors, connectorsLoading, integrationInitialTab = 'mcp', composioConfigLoading = false, skillsLoading = false, designSystemsLoading = false, projectsLoading = false, config, providerModelsCache: sharedProviderModelsCache, onProviderModelsCacheChange, agents, agentsLoading = false, daemonLive, onModeChange, onAgentChange, onAgentModelChange, onApiProtocolChange, onApiModelChange, onConfigPersist, onRefreshAgents, onThemeChange, onCreateProject, onCreatePluginShareProject, onImportClaudeDesign, onImportFolder, onImportFolderResponse, onOpenProject, onOpenLiveArtifact, onDeleteProject, onRenameProject, onProjectsRefresh, onChangeDefaultDesignSystem, onCreateDesignSystem, onOpenDesignSystem, onDesignSystemsRefresh, onPersistComposioKey, onOpenSettings, onCompleteOnboarding }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const discordPresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useDiscordPresence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiscordPresence"])();
    // Each entry sub-view (home / projects / design-systems) is its own
    // URL now, so the browser back/forward buttons work and a deep link
    // to /design-systems lands on that section. We derive the active
    // view from the route rather than keeping it in component state.
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"])();
    const view = route.kind === 'home' ? route.view : 'home';
    const [previewSystemId, setPreviewSystemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newProjectOpen, setNewProjectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // The entry nav rail is collapsed by default (Manus-style) so the entry
    // view opens clean and full-width; the panel toggle in the topbar opens it
    // as an overlay that dismisses on selection / backdrop click / Escape.
    // Its open/collapsed state is persisted (localStorage) so it survives a
    // home -> project -> home round trip (EntryShell unmounts on the project
    // route) and a reload, instead of snapping back to collapsed.
    const [railOpen, setRailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readStoredRailOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryShell.useEffect": ()=>{
            writeStoredRailOpen(railOpen);
        }
    }["EntryShell.useEffect"], [
        railOpen
    ]);
    const [localProviderModelsCache, setLocalProviderModelsCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const hasSharedProviderModelsCache = Boolean(sharedProviderModelsCache) && Boolean(onProviderModelsCacheChange);
    const activeProviderModelsCache = hasSharedProviderModelsCache ? sharedProviderModelsCache : localProviderModelsCache;
    const activeSetProviderModelsCache = hasSharedProviderModelsCache ? onProviderModelsCacheChange : setLocalProviderModelsCache;
    const [newProjectInitialTab, setNewProjectInitialTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('prototype');
    const [integrationTab, setIntegrationTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(integrationInitialTab);
    const [homePromptHandoff, setHomePromptHandoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const entryMainScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const discordOnlineLabel = discordPresence ? t('entry.discordOnlineLabel', {
        count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useDiscordPresence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDiscordPresenceCount"])(discordPresence.onlineCount)
    }) : null;
    const discordAriaLabel = discordOnlineLabel ? t('entry.discordAriaWithOnline', {
        online: discordOnlineLabel
    }) : t('entry.discordAria');
    function changeView(next) {
        const navElement = navElementForView(next);
        if (navElement) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackHomeNavClick"])(analytics.track, {
                page_name: 'home',
                area: 'nav',
                element: navElement
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
            kind: 'home',
            view: next
        });
    }
    function startPluginAuthoring(goal) {
        setHomePromptHandoff((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginAuthoringHandoff"])(Date.now(), goal));
        changeView('home');
    }
    function usePluginFromLibrary(record, action = 'use') {
        setHomePromptHandoff((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$home$2d$hero$2f$plugin$2d$authoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginUseHandoff"])(Date.now(), record.id, {
            action
        }));
        changeView('home');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryShell.useEffect": ()=>{
            if (view !== 'home' || !homePromptHandoff) return;
            const frame = window.requestAnimationFrame({
                "EntryShell.useEffect.frame": ()=>{
                    const scrollContainer = entryMainScrollRef.current;
                    if (!scrollContainer) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$smoothScrollToTop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smoothScrollToTop"])(scrollContainer);
                }
            }["EntryShell.useEffect.frame"]);
            return ({
                "EntryShell.useEffect": ()=>window.cancelAnimationFrame(frame)
            })["EntryShell.useEffect"];
        }
    }["EntryShell.useEffect"], [
        homePromptHandoff?.id,
        view
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryShell.useEffect": ()=>{
            setIntegrationTab(integrationInitialTab);
        }
    }["EntryShell.useEffect"], [
        integrationInitialTab
    ]);
    function openIntegrationTab(tab) {
        setIntegrationTab(tab);
        changeView('integrations');
    }
    function openNewProject(tab = 'prototype') {
        setNewProjectInitialTab(tab);
        setNewProjectOpen(true);
    }
    const previewSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntryShell.useMemo[previewSystem]": ()=>previewSystemId ? designSystems.find({
                "EntryShell.useMemo[previewSystem]": (d)=>d.id === previewSystemId
            }["EntryShell.useMemo[previewSystem]"]) ?? null : null
    }["EntryShell.useMemo[previewSystem]"], [
        designSystems,
        previewSystemId
    ]);
    function handleCreate(input) {
        // The NewProjectModal no longer asks the user to pick a plugin.
        // Each project kind is silently bound to its default scenario
        // pipeline at creation time so the user lands in a running flow
        // without having to reason about pipeline internals. The mapping
        // is intentionally explicit so future kind-specific scenarios
        // (e.g. a deck- or image-specialized pipeline) can take over a
        // single row without touching the form.
        const pluginId = defaultPluginIdForMetadata(input.metadata);
        const pluginInputs = defaultPluginInputsForCreate(input, pluginId);
        return onCreateProject({
            ...input,
            ...pluginId ? {
                pluginId
            } : {},
            ...pluginInputs ? {
                pluginInputs
            } : {}
        });
    }
    // Plan §3.F5 — the home prompt-loop submit path. The user picks a
    // plugin (which calls /api/plugins/:id/apply and binds a snapshot),
    // edits the rendered example query if any, then presses Enter. We
    // derive a project name from the active plugin (or prompt head),
    // forward the pluginId so POST /api/projects pins the snapshot to
    // project + conversation, and request auto-send of the first
    // message so the user lands inside a running pipeline.
    //
    // Stage B of plugin-driven-flow-plan: the rail can stamp a
    // `projectKind` on the payload so the created project records the
    // chosen surface (image / video / audio, etc.). Free-form Home
    // submits now arrive with the hidden od-default router plugin and
    // projectKind='other', so the agent asks for the exact task type
    // before continuing.
    // Forwards onCreateProject's result so HomeView can hold its sending
    // state until the creation roundtrip settles, and recover on failure
    // (#4082).
    function handlePluginLoopSubmit(payload) {
        const summarizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeProjectNameFromPrompt"])(payload.prompt);
        const head = payload.prompt.trim().split(/\s+/).slice(0, 8).join(' ');
        const firstAttachmentName = payload.attachments?.[0]?.name ?? '';
        const fallbackName = summarizedName || (head.length > 0 ? head : firstAttachmentName || 'Untitled');
        const name = payload.pluginTitle && payload.pluginTitle.trim().length > 0 ? payload.pluginTitle.trim() : fallbackName;
        const metadata = {
            ...payload.projectMetadata ?? {},
            kind: payload.projectKind ?? payload.projectMetadata?.kind ?? 'prototype',
            nameSource: 'prompt',
            ...payload.contextPlugins && payload.contextPlugins.length > 0 ? {
                contextPlugins: payload.contextPlugins
            } : {},
            ...payload.contextMcpServers && payload.contextMcpServers.length > 0 ? {
                contextMcpServers: payload.contextMcpServers
            } : {},
            ...payload.contextConnectors && payload.contextConnectors.length > 0 ? {
                contextConnectors: payload.contextConnectors
            } : {},
            // The Home working-directory picker grants the agent read-only
            // awareness of a local folder (via `--add-dir`), it does NOT import
            // that folder into Design Files. So the picked path becomes the new
            // project's `linkedDirs` rather than its `baseDir`/`userWorkingDir`:
            // Design Files stays the managed `.od/projects/<id>` artifact store,
            // independent of the user's local files.
            ...payload.workingDir ? {
                linkedDirs: [
                    payload.workingDir
                ]
            } : {},
            ...payload.examplePromptContext ? {
                examplePrompt: true,
                examplePromptTitle: payload.examplePromptContext.title,
                examplePromptBrief: payload.examplePromptContext.brief
            } : {}
        };
        return onCreateProject({
            name,
            skillId: payload.skillId ?? null,
            designSystemId: payload.designSystemId ?? null,
            metadata,
            pendingPrompt: payload.prompt,
            ...payload.pluginId ? {
                pluginId: payload.pluginId
            } : {},
            ...payload.pluginType ? {
                pluginType: payload.pluginType
            } : {},
            ...payload.appliedPluginSnapshotId ? {
                appliedPluginSnapshotId: payload.appliedPluginSnapshotId
            } : {},
            ...payload.pluginInputs ? {
                pluginInputs: payload.pluginInputs
            } : {},
            ...payload.conversationMode ? {
                conversationMode: payload.conversationMode
            } : {},
            ...payload.attachments && payload.attachments.length > 0 ? {
                pendingFiles: payload.attachments
            } : {},
            // No `userWorkingDirToken`: linkedDirs grant read-only `--add-dir`
            // access and are validated by the daemon at create time, so they do
            // not need the desktop main-process trust token that baseDir imports
            // require for write access.
            autoSendFirstMessage: true
        });
    }
    function finishOnboarding() {
        onCompleteOnboarding();
        changeView('home');
    }
    const avatarMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntrySettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntrySettingsMenu"], {
        config: config,
        onThemeChange: onThemeChange,
        onOpenSettings: onOpenSettings,
        onTrackTriggerClick: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackHomeToolbarClick"])(analytics.track, {
                page_name: 'home',
                area: 'toolbar',
                element: 'settings'
            });
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 677,
        columnNumber: 5
    }, this);
    if (view === 'onboarding') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "entry-shell entry-shell--no-header entry-shell--onboarding",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "entry-onboarding-modal",
                "aria-label": t('settings.welcomeTitle'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingView, {
                    config: config,
                    agents: agents,
                    agentsLoading: agentsLoading,
                    providerModelsCache: activeProviderModelsCache,
                    onProviderModelsCacheChange: activeSetProviderModelsCache,
                    daemonLive: daemonLive,
                    onModeChange: onModeChange,
                    onAgentChange: onAgentChange,
                    onAgentModelChange: onAgentModelChange,
                    onApiProtocolChange: onApiProtocolChange,
                    onApiModelChange: onApiModelChange,
                    onConfigPersist: onConfigPersist,
                    onRefreshAgents: onRefreshAgents,
                    onFinish: finishOnboarding,
                    onThemeChange: onThemeChange
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 696,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 695,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
            lineNumber: 694,
            columnNumber: 7
        }, this);
    }
    const executionSwitcher = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$InlineModelSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineModelSwitcher"], {
        config: config,
        agents: agents,
        providerModelsCache: activeProviderModelsCache,
        onProviderModelsCacheChange: activeSetProviderModelsCache,
        daemonLive: daemonLive,
        onModeChange: onModeChange,
        onAgentChange: onAgentChange,
        onAgentModelChange: onAgentModelChange,
        onApiProtocolChange: onApiProtocolChange,
        onApiModelChange: onApiModelChange,
        onOpenSettings: onOpenSettings
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 719,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "entry-shell entry-shell--no-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `entry${railOpen ? ' entry--rail-open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryNavRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntryNavRail"], {
                        view: view,
                        onViewChange: changeView,
                        onNewProject: ()=>openNewProject(),
                        open: railOpen,
                        onClose: ()=>setRailOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "entry-main entry-main--scroll",
                        ref: entryMainScrollRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "entry-main__topbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "entry-rail-toggle",
                                        onClick: ()=>setRailOpen((prev)=>!prev),
                                        "aria-label": t('entry.navExpand'),
                                        "aria-expanded": railOpen,
                                        "data-testid": "entry-rail-toggle",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "panel-left",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 746,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "entry-main__topbar-chips entry-main__topbar-chips--icon-only",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GithubStarBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GithubStarBadge"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                lineNumber: 757,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "entry-discord-badge od-tooltip",
                                                href: DISCORD_URL,
                                                "aria-label": discordAriaLabel,
                                                "data-tooltip": discordAriaLabel,
                                                "data-tooltip-placement": "bottom",
                                                "data-testid": "entry-discord-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "discord",
                                                        size: 14,
                                                        className: "entry-discord-badge__icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "entry-discord-badge__label",
                                                        children: t('entry.discordLabel')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 17
                                                    }, this),
                                                    discordOnlineLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "entry-discord-badge__sep",
                                                                "aria-hidden": true,
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "entry-discord-badge__online",
                                                                children: discordOnlineLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                lineNumber: 758,
                                                columnNumber: 15
                                            }, this),
                                            executionSwitcher,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "use-everywhere-chip od-tooltip",
                                                onClick: ()=>{
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackHomeToolbarClick"])(analytics.track, {
                                                        page_name: 'home',
                                                        area: 'toolbar',
                                                        element: 'use_everywhere'
                                                    });
                                                    openIntegrationTab('use-everywhere');
                                                },
                                                "data-tooltip": t('entry.useEverywhereTitle'),
                                                "data-tooltip-placement": "bottom",
                                                "aria-label": t('entry.useEverywhereAria'),
                                                "data-testid": "entry-use-everywhere-button",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "use-everywhere-chip__icon",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "hammer",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "use-everywhere-chip__label",
                                                        children: t('entry.useEverywhereTitle')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                lineNumber: 780,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 756,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UpdaterPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdaterPopup"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 804,
                                        columnNumber: 13
                                    }, this),
                                    avatarMenu
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `entry-main__inner${view === 'home' ? '' : ' entry-main__inner--wide'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-home",
                                        "data-active": view === 'home' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'home'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeView"], {
                                            isActive: view === 'home',
                                            projects: projects,
                                            projectsLoading: projectsLoading,
                                            designSystems: designSystems,
                                            defaultDesignSystemId: defaultDesignSystemId,
                                            onSubmit: handlePluginLoopSubmit,
                                            onOpenProject: onOpenProject,
                                            onViewAllProjects: ()=>changeView('projects'),
                                            onBrowseRegistry: ()=>changeView('plugins'),
                                            onOpenIntegrations: ()=>openIntegrationTab('connectors'),
                                            onOpenMcp: ()=>openIntegrationTab('mcp'),
                                            onOpenNewProject: (tab)=>{
                                                openNewProject(tab);
                                            },
                                            promptHandoff: homePromptHandoff,
                                            skills: skills,
                                            skillsLoading: skillsLoading,
                                            connectors: connectors,
                                            promptTemplates: promptTemplates
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-projects",
                                        "data-active": view === 'projects' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'projects'),
                                        children: projectsLoading || skillsLoading || designSystemsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenteredLoader"], {
                                            label: t('common.loading')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "entry-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "entry-section__head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "entry-section__title",
                                                        children: t('entry.navProjects')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignsTab"], {
                                                    projects: projects,
                                                    skills: skills,
                                                    designSystems: designSystems,
                                                    onOpen: onOpenProject,
                                                    onOpenLiveArtifact: onOpenLiveArtifact,
                                                    onDelete: onDeleteProject,
                                                    onRename: onRenameProject,
                                                    onNewProject: ()=>openNewProject(),
                                                    onRefresh: onProjectsRefresh,
                                                    isActive: view === 'projects'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 839,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 835,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-tasks",
                                        "data-active": view === 'tasks' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'tasks'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TasksView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TasksView"], {
                                            skills: skills,
                                            designTemplates: designTemplates,
                                            connectors: connectors,
                                            connectorsLoading: connectorsLoading
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 859,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-plugins",
                                        "data-active": view === 'plugins' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'plugins'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsView"], {
                                            onCreatePlugin: startPluginAuthoring,
                                            onUsePlugin: usePluginFromLibrary,
                                            onCreatePluginShareProject: onCreatePluginShareProject
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 867,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 866,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-design-systems",
                                        "data-active": view === 'design-systems' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'design-systems'),
                                        children: designSystemsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenteredLoader"], {
                                            label: t('common.loading')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 875,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "entry-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "entry-section__head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "entry-section__title",
                                                        children: t('entry.navDesignSystems')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemsTab"], {
                                                    systems: designSystems,
                                                    templates: templates,
                                                    selectedId: defaultDesignSystemId,
                                                    onSelect: onChangeDefaultDesignSystem,
                                                    onCreate: onCreateDesignSystem,
                                                    onOpenSystem: onOpenDesignSystem,
                                                    onSystemsRefresh: onDesignSystemsRefresh,
                                                    onPreview: (id)=>setPreviewSystemId(id)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 877,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testid": "entry-view-brands",
                                        "data-active": view === 'brands' ? 'true' : 'false',
                                        ...inactiveViewProps(view === 'brands'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandsTab"], {
                                            onApplyDesignSystem: onChangeDefaultDesignSystem,
                                            onOpenProject: onOpenProject
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 894,
                                        columnNumber: 13
                                    }, this),
                                    view === 'integrations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IntegrationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntegrationsView"], {
                                        config: config,
                                        initialTab: integrationTab,
                                        composioConfigLoading: composioConfigLoading,
                                        onPersistComposioKey: onPersistComposioKey
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: previewSystem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemPreviewModal"], {
                    system: previewSystem,
                    onClose: ()=>setPreviewSystemId(null)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 913,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NewProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewProjectModal"], {
                open: newProjectOpen,
                initialTab: newProjectInitialTab,
                skills: skills,
                designSystems: designSystems,
                defaultDesignSystemId: defaultDesignSystemId,
                templates: templates,
                ...onDeleteTemplate ? {
                    onDeleteTemplate
                } : {},
                promptTemplates: promptTemplates,
                mediaProviders: config.mediaProviders,
                connectors: connectors,
                connectorsLoading: connectorsLoading,
                loading: skillsLoading,
                onCreate: handleCreate,
                onImportClaudeDesign: onImportClaudeDesign,
                ...onImportFolder ? {
                    onImportFolder
                } : {},
                ...onImportFolderResponse ? {
                    onImportFolderResponse
                } : {},
                onOpenConnectorsTab: ()=>{
                    setNewProjectOpen(false);
                    openIntegrationTab('connectors');
                },
                onClose: ()=>setNewProjectOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 919,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 735,
        columnNumber: 5
    }, this);
}
_s(EntryShell, "GfRZ83rlpJZWQfAODtk0ywlL07w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useDiscordPresence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiscordPresence"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c = EntryShell;
function OnboardingView({ config, providerModelsCache: sharedProviderModelsCache, onProviderModelsCacheChange, agents, agentsLoading = false, daemonLive, onModeChange, onAgentChange, onAgentModelChange, onApiProtocolChange, onApiModelChange, onConfigPersist, onRefreshAgents, onFinish, onThemeChange }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [runtime, setRuntime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Connect step (step 0) faces: the minimal cloud sign-in landing (null), or
    // a single dedicated setup page for the local CLI or BYOK that the landing's
    // two secondary links open directly. AMR has no card anymore — it signs in
    // straight from the landing's primary button.
    const [connectExpanded, setConnectExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [apiKeyVisible, setApiKeyVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cliScanStatus, setCliScanStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [amrStatus, setAmrStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 初始登录状态是否已拉到（无论登录与否）。登录页按钮用它判断是否还在「加载中…」。
    const [amrStatusResolved, setAmrStatusResolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // True while the one-shot AMR re-probe (fired when the cold-start stream
    // settled without surfacing AMR) is in flight. Combined with
    // `agentsLoading`, this is the full window during which AMR availability
    // is still undecided — and the AMR cloud card renders its skeleton.
    const [amrLoginPending, setAmrLoginPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [amrLoginCancelPending, setAmrLoginCancelPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newsletterSubmitting, setNewsletterSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Optional brand extraction on the final onboarding step. The hook
    // drives a 3-stage SSE progress model against POST /api/brands; the
    // local URL string is the only extra state the panel needs. Extraction
    // is entirely optional — it never blocks the Finish/Continue button
    // (see handlePrimaryAction, which has no brand awareness).
    const [brandUrl, setBrandUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { state: brandExtractState, run: runBrandExtract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$useBrandExtract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBrandExtract"])();
    const brandExtractActive = brandExtractState.phase === 'starting';
    const brandExtractDone = brandExtractState.phase === 'done';
    const brandExtractFailed = brandExtractState.phase === 'error';
    // Clicking Extract here behaves exactly like the Brands tab: stand up the
    // extraction project, then finish onboarding and open it so the agent runs
    // the extraction live (with a browser tab on the target site).
    const handleOnboardingBrandExtract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnboardingView.useCallback[handleOnboardingBrandExtract]": async (explicitUrl)=>{
            // An explicit URL (a picked reference brand) wins over the input, whose
            // state update may not have committed yet when the picker fires.
            const trimmed = (explicitUrl ?? brandUrl).trim();
            if (!trimmed || brandExtractActive) return;
            const result = await runBrandExtract(trimmed);
            if (!result) return;
            try {
                window.sessionStorage.setItem(`od:auto-send-first:${result.projectId}`, '1');
            } catch  {
            // Private-mode storage failures should not block navigation.
            }
            onFinish();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: result.projectId,
                fileName: null,
                conversationId: result.conversationId
            });
        }
    }["OnboardingView.useCallback[handleOnboardingBrandExtract]"], [
        brandUrl,
        brandExtractActive,
        runBrandExtract,
        onFinish
    ]);
    // The onboarding picker fills the URL field and immediately starts extraction.
    const handleOnboardingPickReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnboardingView.useCallback[handleOnboardingPickReference]": (brand)=>{
            if (brandExtractActive) return;
            setBrandUrl(brand.domain);
            void handleOnboardingBrandExtract(brand.domain);
        }
    }["OnboardingView.useCallback[handleOnboardingPickReference]"], [
        brandExtractActive,
        handleOnboardingBrandExtract
    ]);
    const [amrLoginError, setAmrLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleAgentIds, setVisibleAgentIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [providerTestState, setProviderTestState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    const [providerModelsState, setProviderModelsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    const [localProviderModelsCache, setLocalProviderModelsCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const hasSharedProviderModelsCache = Boolean(sharedProviderModelsCache) && Boolean(onProviderModelsCacheChange);
    const activeProviderModelsCache = hasSharedProviderModelsCache ? sharedProviderModelsCache : localProviderModelsCache;
    const activeSetProviderModelsCache = hasSharedProviderModelsCache ? onProviderModelsCacheChange : setLocalProviderModelsCache;
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        role: '',
        orgSize: '',
        useCase: [],
        source: '',
        email: ''
    });
    // Live mirror of `profile` so closures that fire faster than React
    // commits (rapid dropdown picks, the Finish-setup click after the
    // last onChange) read the latest selection instead of the value the
    // closure captured at render-time. Multi-select use_case in
    // particular needed this: two quick adds within one commit cycle
    // both read `previous = new Set(profile.useCase = stale [])` and
    // emitted on both — fine — but reading any cumulative summary off
    // `profile` directly missed the second pick until the next commit.
    const profileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(profile);
    const lastPersistedOnboardingProfileBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            profileRef.current = profile;
        }
    }["OnboardingView.useEffect"], [
        profile
    ]);
    const agentRevealTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cliScanTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cliScanTelemetryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cliRefreshPendingTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const amrLoginPollCancelledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const amrAgentRefreshAttemptedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const providerModelsAutoFetchKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerAutoTestKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerModelAutoSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        model: config.model,
        providerModelsInputKey: '',
        runtime,
        step
    });
    const apiProtocol = config.apiProtocol ?? 'anthropic';
    const providerTestInputKey = [
        apiProtocol,
        config.baseUrl.trim(),
        config.model.trim(),
        config.apiKey.trim(),
        config.apiVersion?.trim() ?? ''
    ].join('\n');
    const providerModelsInputKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerModelsCacheKey"])(apiProtocol, config.baseUrl, config.apiKey, config.apiVersion ?? '');
    providerModelAutoSelectRef.current = {
        model: config.model,
        providerModelsInputKey,
        runtime,
        step
    };
    const canTestProvider = Boolean(config.apiKey.trim()) && Boolean(config.baseUrl.trim()) && Boolean(config.model.trim());
    const canFetchProviderModels = apiProtocol !== 'azure' && apiProtocol !== 'ollama' && Boolean(config.apiKey.trim()) && Boolean(config.baseUrl.trim()) && isLikelyHttpUrl(config.baseUrl);
    const visibleProviderTestState = providerTestState.status !== 'idle' && providerTestState.inputKey === providerTestInputKey ? providerTestState : {
        status: 'idle'
    };
    const visibleProviderModelsState = providerModelsState.status !== 'idle' && providerModelsState.inputKey === providerModelsInputKey ? providerModelsState : {
        status: 'idle'
    };
    const selectedProvider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].find((provider)=>provider.protocol === apiProtocol && provider.baseUrl === (config.apiProviderBaseUrl ?? config.baseUrl)) ?? null;
    const availableCliAgents = agents.filter((agent)=>agent.available && agent.id !== 'amr');
    const visibleAgents = availableCliAgents.filter((agent)=>visibleAgentIds.includes(agent.id));
    const amrAgent = agents.find((agent)=>agent.id === 'amr' && agent.available) ?? null;
    const amrSignedIn = amrStatus?.loggedIn === true;
    const amrSelectedAndSignedOut = runtime === 'amr' && !amrSignedIn;
    const selectedAgent = visibleAgents.find((agent)=>agent.id === config.agentId) ?? null;
    const selectedAgentChoice = selectedAgent ? config.agentModels?.[selectedAgent.id] ?? {} : {};
    // Connect-step (step 0) gate. Continue may only advance once the selected
    // runtime is actually usable: AMR signed in, an available local CLI chosen,
    // or a BYOK provider whose connection test passed. AMR-selected-but-signed-out
    // is the deliberate exception — there the primary CTA turns into "Sign in to
    // continue" and must stay enabled so the user can trigger the login that
    // satisfies the gate (see handlePrimaryAction / amrSelectedAndSignedOut).
    const byokConnectionVerified = visibleProviderTestState.status === 'done' && visibleProviderTestState.result.ok;
    const connectStepRuntimeReady = runtime === 'amr' && amrSignedIn || runtime === 'local' && selectedAgent !== null || runtime === 'byok' && byokConnectionVerified;
    const connectStepBlocked = step === 0 && !amrSelectedAndSignedOut && !connectStepRuntimeReady;
    // Which Connect gate is in the way, for the Continue tooltip. The three
    // "blocked" reasons hold Continue disabled; `amr_signed_out` is the
    // "Sign in to continue" CTA — still clickable, but the tooltip explains why
    // the next steps need a runtime first.
    const connectGateReason = step !== 0 ? null : amrSelectedAndSignedOut ? 'amr_signed_out' : connectStepBlocked ? runtime === 'local' ? 'local_agent_unavailable' : runtime === 'byok' ? 'byok_unverified' : 'no_runtime' : null;
    const connectGateTooltip = connectGateReason === 'amr_signed_out' ? t('settings.onboardingGateTooltipAmr') : connectGateReason === 'local_agent_unavailable' ? t('settings.onboardingGateTooltipLocal') : connectGateReason === 'byok_unverified' ? t('settings.onboardingGateTooltipByok') : connectGateReason === 'no_runtime' ? t('settings.onboardingGateTooltipNoRuntime') : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            return ({
                "OnboardingView.useEffect": ()=>{
                    amrLoginPollCancelledRef.current = true;
                    agentRevealTimersRef.current.forEach({
                        "OnboardingView.useEffect": (timer)=>clearTimeout(timer)
                    }["OnboardingView.useEffect"]);
                    agentRevealTimersRef.current = [];
                }
            })["OnboardingView.useEffect"];
        }
    }["OnboardingView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            if (!amrAgent || runtime !== null) return;
            setRuntime('amr');
            onModeChange('daemon');
            onAgentChange('amr');
        }
    }["OnboardingView.useEffect"], [
        amrAgent,
        onAgentChange,
        onModeChange,
        runtime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            if (runtime !== 'local') return;
            const scanToken = cliScanTokenRef.current;
            if (cliRefreshPendingTokenRef.current === scanToken) return;
            const currentAvailableAgents = agents.filter({
                "OnboardingView.useEffect.currentAvailableAgents": (agent)=>agent.available && agent.id !== 'amr'
            }["OnboardingView.useEffect.currentAvailableAgents"]);
            if (currentAvailableAgents.length > 0) {
                const selectedCliAgent = selectDefaultCliAgent(currentAvailableAgents);
                showCliAgents(scanToken, currentAvailableAgents, {
                    stagger: false
                });
                setCliScanStatus('done');
                emitPendingCliScanResult(scanToken, {
                    result: 'success',
                    detected: agents.length,
                    available: currentAvailableAgents.length,
                    selectedCliId: selectedCliAgent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIdToTracking"])(selectedCliAgent.id) : undefined
                });
                return;
            }
            if (!agentsLoading && cliScanStatus === 'scanning') {
                setCliScanStatus('done');
                emitPendingCliScanResult(scanToken, {
                    result: 'failed',
                    detected: agents.length,
                    available: 0,
                    errorCode: 'NO_AVAILABLE_CLI'
                });
            }
        }
    }["OnboardingView.useEffect"], [
        agents,
        agentsLoading,
        cliScanStatus,
        config.agentId,
        runtime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            // The cold-start stream finished without AMR. Re-probe once before we
            // conclude AMR is unavailable, so the cloud sign-in stays usable even when
            // AMR was slow to surface in the initial agent list.
            if (amrAgent || amrAgentRefreshAttemptedRef.current || agentsLoading) return;
            amrAgentRefreshAttemptedRef.current = true;
            void Promise.resolve(onRefreshAgents()).catch({
                "OnboardingView.useEffect": ()=>undefined
            }["OnboardingView.useEffect"]);
        }
    }["OnboardingView.useEffect"], [
        amrAgent,
        agentsLoading,
        onRefreshAgents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            // 挂载时立即拉取登录状态（与 agent 列表加载并行，不再等 amrAgent），
            // 让登录页按钮尽快从「加载中…」settle 到「登录」/「继续（已登录）」。
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().then({
                "OnboardingView.useEffect": (next)=>{
                    if (!cancelled && next) setAmrStatus(next);
                }
            }["OnboardingView.useEffect"]).finally({
                "OnboardingView.useEffect": ()=>{
                    if (!cancelled) setAmrStatusResolved(true);
                }
            }["OnboardingView.useEffect"]);
            return ({
                "OnboardingView.useEffect": ()=>{
                    cancelled = true;
                }
            })["OnboardingView.useEffect"];
        }
    }["OnboardingView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            if (runtime === 'amr') return;
            amrLoginPollCancelledRef.current = true;
            setAmrLoginPending(false);
            setAmrLoginCancelPending(false);
        }
    }["OnboardingView.useEffect"], [
        runtime
    ]);
    // Onboarding step exposure. Design-system intake used to live here
    // as step 3, but it is temporarily removed from first-run
    // onboarding and remains available from the app surfaces.
    //
    // We do NOT clear on unmount: route changes can remount the shell
    // during first-run setup. Back / last-step Continue clear inline in
    // their respective handlers below; abandoned sessions clear on
    // sessionStorage tab close.
    const onboardingSessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    if (!onboardingSessionIdRef.current) {
        onboardingSessionIdRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateOnboardingSessionId"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            const onboardingSessionId = onboardingSessionIdRef.current;
            if (!onboardingSessionId) return;
            const info = stepInfo(step);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'onboarding',
                area: info.area,
                step_index: info.stepIndex,
                step_name: info.stepName,
                onboarding_session_id: onboardingSessionId
            });
        }
    }["OnboardingView.useEffect"], [
        analytics.track,
        step
    ]);
    // Onboarding analytics helpers. Wall-clock start so the lifecycle
    // result event can carry `duration_ms`; `runtime` state is the user's
    // current pick at click time so `runtime_type` rides along on every
    // click. The `_lifecycleReportedRef` guards against double-firing the
    // completion event if a submit path and unmount happen in the same tick
    // (the unmount path also clears the session id; see the PR #2453 follow-up).
    const onboardingStartedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const lifecycleReportedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Guards `about_you_submit` to exactly one emit per onboarding session,
    // independent of how many times the user crosses the About-you step via
    // the clickable stepper or Back/Continue.
    const aboutYouReportedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    function currentRuntimeType() {
        if (runtime === 'amr') return 'amr_cloud';
        if (runtime === 'local') return 'local_cli';
        if (runtime === 'byok') return 'byok';
        return 'none';
    }
    function stepInfo(stepIdx) {
        if (stepIdx === 0) return {
            area: 'runtime',
            stepIndex: '1',
            stepName: 'connect'
        };
        if (stepIdx === 1) return {
            area: 'about_you',
            stepIndex: '2',
            stepName: 'about_you'
        };
        if (stepIdx === 2) return {
            area: 'newsletter',
            stepIndex: '3',
            stepName: 'newsletter'
        };
        return {
            area: 'brand',
            stepIndex: '4',
            stepName: 'brand_extract'
        };
    }
    function emitOnboardingClick(element, action, extra = {}) {
        const onboardingSessionId = onboardingSessionIdRef.current;
        if (!onboardingSessionId) return;
        const info = stepInfo(step);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackOnboardingClick"])(analytics.track, {
            page_name: 'onboarding',
            area: info.area,
            element,
            action,
            step_index: info.stepIndex,
            step_name: info.stepName,
            onboarding_session_id: onboardingSessionId,
            ...extra
        });
    }
    function emitOnboardingComplete(result, completionType, extra = {}) {
        if (lifecycleReportedRef.current) return;
        const onboardingSessionId = onboardingSessionIdRef.current;
        if (!onboardingSessionId) return;
        lifecycleReportedRef.current = true;
        const info = stepInfo(step);
        const snapshot = extra.sourceSnapshot;
        // Onboarding no longer hosts a design-system step, so a completion
        // never carries a DS request unless a caller passes an explicit
        // snapshot (none do today).
        const hasRequest = snapshot ? snapshot.sourceCount > 0 || snapshot.hasBrandDescription : false;
        const sourceCount = snapshot ? snapshot.sourceCount : 0;
        // Read from `profileRef` for the same reason `emitAboutYouSubmit`
        // does: a Finish-setup click may fire before React commits the
        // latest dropdown pick, leaving `profile` (closure-captured at
        // render time) one tick behind.
        const liveProfile = profileRef.current;
        const hasAboutYou = Boolean(liveProfile.role || liveProfile.orgSize || liveProfile.useCase.length > 0 || liveProfile.source);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackOnboardingCompleteResult"])(analytics.track, {
            page_name: 'onboarding',
            area: 'onboarding',
            result,
            exit_step_name: info.stepName,
            completion_type: completionType,
            runtime_type: currentRuntimeType(),
            has_about_you: hasAboutYou,
            has_design_system_request: hasRequest,
            source_count: sourceCount,
            ...extra.errorCode ? {
                error_code: extra.errorCode
            } : {},
            duration_ms: Math.max(0, Date.now() - onboardingStartedAtRef.current),
            onboarding_session_id: onboardingSessionId,
            // Survey-snapshot mirror of `about_you_submit` so the funnel has
            // a second carrier for the user's picks. Only attached when the
            // user actually touched the About-you step.
            ...hasAboutYou ? {
                role: liveProfile.role || 'unknown',
                organization_size: liveProfile.orgSize || 'unknown',
                use_cases: liveProfile.useCase.length > 0 ? liveProfile.useCase : [
                    'unknown'
                ],
                discovery_source: liveProfile.source || 'unknown'
            } : {}
        });
    }
    const steps = [
        t('settings.onboardingStepConnect'),
        t('settings.onboardingStepProfile'),
        t('settings.onboardingStepNewsletter'),
        t('newBrand.extract')
    ];
    const isLastStep = step === steps.length - 1;
    const roleOptions = [
        {
            value: 'agency',
            label: t('settings.onboardingRoleAgency')
        },
        {
            value: 'pm',
            label: t('settings.onboardingRolePm')
        },
        {
            value: 'designer',
            label: t('settings.onboardingRoleDesigner')
        },
        {
            value: 'engineer',
            label: t('settings.onboardingRoleEngineer')
        },
        {
            value: 'growth',
            label: t('settings.onboardingRoleGrowth')
        },
        {
            value: 'ops',
            label: t('settings.onboardingRoleOps')
        },
        {
            value: 'founder',
            label: t('settings.onboardingRoleFounder')
        },
        {
            value: 'student',
            label: t('settings.onboardingRoleStudent')
        },
        {
            value: 'other',
            label: t('settings.onboardingRoleOther')
        }
    ];
    const orgSizeOptions = [
        {
            value: 'solo',
            label: t('settings.onboardingOrgSolo')
        },
        {
            value: 'team',
            label: t('settings.onboardingOrgTeam')
        },
        {
            value: 'startup',
            label: t('settings.onboardingOrgStartup')
        },
        {
            value: 'growth',
            label: t('settings.onboardingOrgGrowth')
        },
        {
            value: 'midmarket',
            label: t('settings.onboardingOrgMidMarket')
        },
        {
            value: 'enterprise',
            label: t('settings.onboardingOrgEnterprise')
        }
    ];
    const useCaseOptions = [
        {
            value: 'product',
            label: t('settings.onboardingUseProduct')
        },
        {
            value: 'design-system',
            label: t('settings.onboardingUseDesignSystem')
        },
        {
            value: 'prototype',
            label: t('settings.onboardingUsePrototype')
        },
        {
            value: 'landing',
            label: t('settings.onboardingUseLanding')
        },
        {
            value: 'marketing',
            label: t('settings.onboardingUseMarketing')
        },
        {
            value: 'ads',
            label: t('settings.onboardingUseAds')
        },
        {
            value: 'dashboard',
            label: t('settings.onboardingUseDashboard')
        },
        {
            value: 'deck',
            label: t('settings.onboardingUseDeck')
        },
        {
            value: 'engineering',
            label: t('settings.onboardingUseEngineering')
        },
        {
            value: 'agency',
            label: t('settings.onboardingUseAgency')
        }
    ];
    const sourceOptions = [
        {
            value: 'github',
            label: t('settings.onboardingSourceGithub')
        },
        {
            value: 'friend',
            label: t('settings.onboardingSourceFriend')
        },
        {
            value: 'social',
            label: t('settings.onboardingSourceSocial')
        },
        {
            value: 'product-hunt',
            label: t('settings.onboardingSourceProductHunt')
        },
        {
            value: 'community',
            label: t('settings.onboardingSourceCommunity')
        },
        {
            value: 'youtube',
            label: t('settings.onboardingSourceYoutube')
        },
        {
            value: 'blog',
            label: t('settings.onboardingSourceBlog')
        },
        {
            value: 'ai-tool',
            label: t('settings.onboardingSourceAiTool')
        },
        {
            value: 'search',
            label: t('settings.onboardingSourceSearch')
        },
        {
            value: 'event',
            label: t('settings.onboardingSourceEvent')
        }
    ];
    function cleanOnboardingOptionLabel(label) {
        const trimmed = label.trim();
        return trimmed.replace(/^[^\p{L}\p{N}]+/u, '').trim() || trimmed;
    }
    function optionLabel(options, value) {
        const option = options.find((item)=>item.value === value);
        return cleanOnboardingOptionLabel(option?.label ?? value);
    }
    function buildOnboardingProfileBody(snapshot) {
        const fields = [];
        if (snapshot.role) {
            fields.push([
                'Role',
                optionLabel(roleOptions, snapshot.role)
            ]);
        }
        if (snapshot.orgSize) {
            fields.push([
                'Organization size',
                optionLabel(orgSizeOptions, snapshot.orgSize)
            ]);
        }
        if (snapshot.useCase.length > 0) {
            fields.push([
                'Use cases',
                snapshot.useCase.map((value)=>optionLabel(useCaseOptions, value)).join(', ')
            ]);
        }
        if (snapshot.source) {
            fields.push([
                'Discovery source',
                optionLabel(sourceOptions, snapshot.source)
            ]);
        }
        return fields.map(([label, value])=>`- ${label}: ${value}`).join('\n');
    }
    async function persistOnboardingProfileToMemory() {
        const body = buildOnboardingProfileBody(profileRef.current);
        if (!body || body === lastPersistedOnboardingProfileBodyRef.current) return;
        const payload = {
            type: 'profile',
            name: t('settings.memoryProfileName'),
            description: t('settings.memoryProfileDescription'),
            body
        };
        try {
            const resp = await fetch(`/api/memory/${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE_MEMORY_ID"])}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (resp.ok) {
                lastPersistedOnboardingProfileBodyRef.current = body;
            }
        } catch  {
        // Onboarding completion should not fail because local memory is unavailable.
        }
    }
    const byokProviderOptions = [
        {
            value: '',
            label: t('settings.customProvider')
        },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].filter((provider)=>provider.protocol === apiProtocol).map((provider)=>({
                value: provider.baseUrl,
                label: provider.label
            }))
    ];
    const agentModelOptions = selectedAgent?.models?.map((model)=>({
            value: model.id,
            label: model.label ?? model.id
        })) ?? [];
    const fetchedProviderModels = activeProviderModelsCache[providerModelsInputKey] ?? [];
    const byokModelOptions = mergeOnboardingProviderModelOptions(fetchedProviderModels, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_MODELS_BY_PROTOCOL"][apiProtocol], config.model).map((model)=>({
            value: model.id,
            label: onboardingProviderModelLabel(model)
        }));
    function updateApiConfig(patch) {
        const protocol = config.apiProtocol ?? 'anthropic';
        const currentConfig = {
            apiKey: config.apiKey,
            baseUrl: config.baseUrl,
            model: config.model,
            apiVersion: config.apiVersion ?? '',
            apiProviderBaseUrl: config.apiProviderBaseUrl ?? null
        };
        const nextProtocolConfig = {
            ...currentConfig,
            ...patch
        };
        const nextConfig = {
            ...config,
            mode: 'api',
            apiProtocol: protocol,
            apiKey: nextProtocolConfig.apiKey,
            baseUrl: nextProtocolConfig.baseUrl,
            model: nextProtocolConfig.model,
            apiVersion: protocol === 'azure' ? nextProtocolConfig.apiVersion ?? '' : '',
            apiProviderBaseUrl: nextProtocolConfig.apiProviderBaseUrl ?? null,
            apiProtocolConfigs: {
                ...config.apiProtocolConfigs ?? {},
                [protocol]: nextProtocolConfig
            }
        };
        void onConfigPersist(nextConfig);
    }
    function selectFirstProviderModelWhenEmpty(models, expectedInputKey) {
        const firstModel = models[0];
        const current = providerModelAutoSelectRef.current;
        if (!firstModel || current.runtime !== 'byok' || current.step !== 0 || current.providerModelsInputKey !== expectedInputKey || current.model.trim()) {
            return;
        }
        onApiModelChange(firstModel.id);
        updateApiConfig({
            model: firstModel.id
        });
    }
    function clearAgentRevealTimers() {
        agentRevealTimersRef.current.forEach((timer)=>clearTimeout(timer));
        agentRevealTimersRef.current = [];
    }
    function selectDefaultCliAgent(availableAgents) {
        const selectedAgent = availableAgents.find((agent)=>agent.id === config.agentId) ?? availableAgents[0] ?? null;
        if (!selectedAgent) return null;
        if (selectedAgent.id !== config.agentId) {
            onAgentChange(selectedAgent.id);
        }
        return selectedAgent;
    }
    function emitPendingCliScanResult(token, args) {
        const telemetry = cliScanTelemetryRef.current;
        if (!telemetry || telemetry.token !== token) return;
        cliScanTelemetryRef.current = null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackOnboardingRuntimeScanResult"])(analytics.track, {
            page_name: 'onboarding',
            area: 'runtime',
            runtime_type: 'local_cli',
            result: args.result,
            detected_cli_count: args.detected,
            available_cli_count: args.available,
            ...args.selectedCliId ? {
                selected_cli_id: args.selectedCliId
            } : {},
            ...args.errorCode ? {
                error_code: args.errorCode
            } : {},
            duration_ms: Math.max(0, Date.now() - telemetry.startedAt),
            onboarding_session_id: telemetry.onboardingSessionId
        });
    }
    function beginCliScan(options) {
        const scanToken = cliScanTokenRef.current + 1;
        cliScanTokenRef.current = scanToken;
        clearAgentRevealTimers();
        setRuntime('local');
        onModeChange('daemon');
        setCliScanStatus('scanning');
        if (options.clearVisible) setVisibleAgentIds([]);
        const onboardingSessionId = onboardingSessionIdRef.current;
        cliScanTelemetryRef.current = onboardingSessionId ? {
            token: scanToken,
            startedAt: Date.now(),
            onboardingSessionId
        } : null;
        return scanToken;
    }
    function showCliAgents(token, availableAgents, options) {
        if (!options.stagger) {
            const nextIds = availableAgents.map((agent)=>agent.id);
            setVisibleAgentIds((current)=>current.length === nextIds.length && current.every((id, index)=>id === nextIds[index]) ? current : nextIds);
            return;
        }
        availableAgents.forEach((agent, index)=>{
            const timer = setTimeout(()=>{
                if (cliScanTokenRef.current !== token) return;
                setVisibleAgentIds((current)=>current.includes(agent.id) ? current : [
                        ...current,
                        agent.id
                    ]);
                if (index === availableAgents.length - 1) {
                    setCliScanStatus('done');
                }
            }, 110 * (index + 1));
            agentRevealTimersRef.current.push(timer);
        });
    }
    function handleBackWithTracking() {
        if (newsletterSubmitting) return;
        // The secondary button only renders for step > 0 — the Connect step has no
        // earlier step and no Skip affordance — so this is always a real Back.
        // (The former step-0 "Skip" path, which emitted the onboarding `skip` /
        // `skipped` events, was removed when Skip was dropped; those enums are now
        // deprecated and unused. See packages/contracts/src/analytics/events.ts.)
        emitOnboardingClick('back', 'back');
        setStep((current)=>current - 1);
    }
    async function handlePrimaryAction() {
        if (newsletterSubmitting) return;
        // Connect gate: the button is `aria-disabled` (not natively disabled, so it
        // can still surface its tooltip on hover), so guard the click here — a
        // blocked Continue must not advance past the Connect step.
        if (connectStepBlocked) return;
        if (step === 0 && amrSelectedAndSignedOut) {
            const attribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'onboarding_amr_sign_in_continue', new Date(), {
                metricsConsent: config.telemetry?.metrics === true,
                reuseExistingFrom: [
                    'onboarding_amr_card'
                ]
            });
            void handleAmrSignInToContinue(attribution);
            return;
        }
        if (isLastStep) {
            // Emit the About-you survey snapshot on the completion path, before
            // the continue/complete pair. Reading `profileRef` captures the
            // user's final role / org size / use case / discovery source picks
            // even on a fast Finish. Gating it here — rather than when the user
            // leaves the About-you step — keeps it exactly-once no matter how the
            // final step was reached: primary CTA, Back-then-Continue, or a
            // forward jump via the clickable stepper. `emitAboutYouSubmit` is
            // additionally idempotent per session (see its `aboutYouReportedRef`
            // guard). The snapshot click + the survey fields on
            // `onboarding_complete_result` give the funnel two independent
            // carriers for the same data.
            emitAboutYouSubmit();
            void persistOnboardingProfileToMemory();
            const newsletterEmail = profileRef.current.email;
            const shouldSubmitNewsletter = NEWSLETTER_EMAIL_RE.test(newsletterEmail.trim().toLowerCase());
            if (shouldSubmitNewsletter) {
                setNewsletterSubmitting(true);
                await submitNewsletterEmail(newsletterEmail);
            }
            emitOnboardingClick('continue', 'continue');
            // Last-step Continue without a DS generation = "completed
            // without design system". The Generate path inside the
            // embedded DesignSystemCreationFlow takes a different route
            // (navigation to project) and emits its own completion.
            emitOnboardingComplete('completed', 'completed_without_design_system');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearOnboardingSessionId"])();
            onFinish();
            return;
        }
        emitOnboardingClick('continue', 'continue');
        if (step === 1) {
            void persistOnboardingProfileToMemory();
        }
        setStep((current)=>current + 1);
    }
    // Cloud-landing primary CTA: pick the AMR cloud runtime and kick off the
    // Open Design Cloud sign-in in one gesture. Mirrors the AMR card's
    // selection side effects (mode/agent) followed by the AMR-sign-in path that
    // the runtime chooser's gated Continue uses, so a successful login advances
    // to the next onboarding step exactly the same way.
    async function handleCloudSignIn() {
        if (amrLoginPending || amrLoginCancelPending) return;
        const cardAttribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'onboarding_amr_card', new Date(), {
            metricsConsent: config.telemetry?.metrics === true
        });
        setRuntime('amr');
        onModeChange('daemon');
        onAgentChange('amr');
        const attribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'onboarding_amr_sign_in_continue', new Date(), {
            metricsConsent: config.telemetry?.metrics === true,
            reuseExistingFrom: [
                'onboarding_amr_card'
            ]
        }) ?? cardAttribution;
        await handleAmrSignInToContinue(attribution);
    }
    async function handleAmrSignInToContinue(attribution) {
        if (amrLoginPending || amrLoginCancelPending) return;
        amrLoginPollCancelledRef.current = false;
        setAmrLoginError(null);
        setAmrLoginPending(true);
        try {
            const currentStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])();
            if (amrLoginPollCancelledRef.current) return;
            if (currentStatus) setAmrStatus(currentStatus);
            if (currentStatus?.loggedIn) {
                setStep((current)=>current + 1);
                return;
            }
            if (amrLoginPollCancelledRef.current) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beginAmrAuthTracking"])(attribution);
            const odDeviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrHandoffDeviceId"])({
                metricsConsent: config.telemetry?.metrics === true,
                resolvedDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedDeviceId"])(),
                installationId: config.installationId
            });
            const loginResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startVelaLogin"])(attribution, odDeviceId);
            if (amrLoginPollCancelledRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'cancelled');
                if (loginResult.ok || loginResult.alreadyRunning) {
                    const cancelResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelVelaLogin"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeAmrActivationWindowBestEffort"])();
                    if (!cancelResult.ok) {
                        setAmrLoginError(t('settings.amrLoginErrorCompact'));
                        return;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAmrLoginStatusChanged"])('login-canceled');
                }
                return;
            }
            if (!loginResult.ok && !loginResult.alreadyRunning) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'failed', 'spawn_failed');
                setAmrLoginError(loginResult.error || t('settings.amrLoginErrorCompact'));
                return;
            }
            if (await pollAmrLoginCompletion()) {
                setStep((current)=>current + 1);
            }
        } finally{
            setAmrLoginPending(false);
        }
    }
    async function handleCancelAmrLogin() {
        if (!amrLoginPending || amrLoginCancelPending) return;
        amrLoginPollCancelledRef.current = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'cancelled');
        setAmrLoginError(null);
        setAmrLoginCancelPending(true);
        setAmrStatus((current)=>current ? {
                ...current,
                loggedIn: false,
                loginInFlight: false,
                user: null
            } : current);
        setAmrLoginPending(false);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelVelaLogin"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeAmrActivationWindowBestEffort"])();
        setAmrLoginCancelPending(false);
        if (!result.ok) {
            setAmrLoginError(t('settings.amrLoginErrorCompact'));
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAmrLoginStatusChanged"])('login-canceled');
    }
    async function pollAmrLoginCompletion() {
        const startedAt = Date.now();
        while(!amrLoginPollCancelledRef.current){
            await new Promise((resolve)=>window.setTimeout(resolve, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_POLL_INTERVAL_MS"]));
            if (amrLoginPollCancelledRef.current) return false;
            const nextStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])();
            if (nextStatus) setAmrStatus(nextStatus);
            const outcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrLoginPollOutcome"])(nextStatus, startedAt);
            if (outcome === 'signed-in') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'success', undefined, {
                    signedInUserId: nextStatus?.user?.id ?? null
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAmrLoginStatusChanged"])();
                return true;
            }
            if (outcome === 'stopped' || outcome === 'timed-out') {
                if (outcome === 'timed-out') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'timeout', 'login_timeout');
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelVelaLogin"])();
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAmrAuthTracking"])(analytics.track, 'failed', 'login_stopped');
                }
                setAmrLoginError(t('settings.amrLoginErrorCompact'));
                return false;
            }
        }
        return false;
    }
    // Survey snapshot. Reads `profileRef.current` rather than `profile`
    // because Finish-setup may fire within the same render commit as the
    // user's last dropdown pick, before React has rebound the closure to
    // the latest state. `'unknown'` covers an untouched field on the
    // About-you step (the spec keeps the wire type open-string so a new
    // role / use-case option doesn't force a contract bump).
    //
    // This now fires from the completion path (the final brand-extraction step),
    // so it stamps the About-you step coordinates explicitly instead of
    // reading the live `step` via `emitOnboardingClick`: the event describes
    // the About-you submission, not whatever step the user finished on. The
    // `aboutYouReportedRef` guard keeps it exactly-once per session.
    function emitAboutYouSubmit() {
        if (aboutYouReportedRef.current) return;
        const onboardingSessionId = onboardingSessionIdRef.current;
        if (!onboardingSessionId) return;
        aboutYouReportedRef.current = true;
        const snapshot = profileRef.current;
        // Persist the survey so later AMR entries (outside onboarding) can forward
        // the visitor's profile to AMR for paid-conversion segmentation.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$onboarding$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOnboardingProfile"])({
            role: snapshot.role,
            orgSize: snapshot.orgSize,
            useCase: snapshot.useCase,
            source: snapshot.source
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncAmrAttributionWithOnboardingProfile"])({
            role: snapshot.role,
            orgSize: snapshot.orgSize,
            useCase: snapshot.useCase,
            source: snapshot.source
        }, {
            metricsConsent: config.telemetry?.metrics === true,
            odDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrHandoffDeviceId"])({
                metricsConsent: config.telemetry?.metrics === true,
                resolvedDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedDeviceId"])(),
                installationId: config.installationId
            })
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackOnboardingClick"])(analytics.track, {
            page_name: 'onboarding',
            area: 'about_you',
            element: 'about_you_submit',
            action: 'continue',
            step_index: '2',
            step_name: 'about_you',
            onboarding_session_id: onboardingSessionId,
            role: snapshot.role || 'unknown',
            organization_size: snapshot.orgSize || 'unknown',
            use_cases: snapshot.useCase.length > 0 ? snapshot.useCase : [
                'unknown'
            ],
            discovery_source: snapshot.source || 'unknown'
        });
    }
    // Optional newsletter signup captured on the Newsletter step. The last-step
    // button shows loading while this settles; failures are swallowed so
    // onboarding completion never depends on the marketing site. A blank or
    // malformed email is simply skipped. Only a boolean opt-in is tracked — the
    // address itself is never sent to analytics.
    async function submitNewsletterEmail(rawEmail) {
        const email = rawEmail.trim().toLowerCase();
        if (!email || !NEWSLETTER_EMAIL_RE.test(email)) return;
        emitOnboardingClick('newsletter_email', 'subscribe', {
            newsletter_opt_in: true
        });
        const controller = new AbortController();
        const timeout = window.setTimeout(()=>controller.abort(), 5000);
        try {
            await fetch(NEWSLETTER_SUBSCRIBE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    source: 'client'
                }),
                signal: controller.signal
            });
        } catch  {
        // Swallow — onboarding completion must not depend on the marketing site.
        } finally{
            window.clearTimeout(timeout);
        }
    }
    async function scanCliAgents(options = {}) {
        const scanToken = beginCliScan({
            clearVisible: !options.preferExisting
        });
        const currentAvailableAgents = agents.filter((agent)=>agent.available && agent.id !== 'amr');
        if (options.preferExisting && currentAvailableAgents.length > 0) {
            const selectedCliAgent = selectDefaultCliAgent(currentAvailableAgents);
            showCliAgents(scanToken, currentAvailableAgents, {
                stagger: false
            });
            setCliScanStatus('done');
            emitPendingCliScanResult(scanToken, {
                result: 'success',
                detected: agents.length,
                available: currentAvailableAgents.length,
                selectedCliId: selectedCliAgent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIdToTracking"])(selectedCliAgent.id) : undefined
            });
            return currentAvailableAgents;
        }
        if (options.preferExisting && agentsLoading) {
            showCliAgents(scanToken, currentAvailableAgents, {
                stagger: false
            });
            return currentAvailableAgents;
        }
        cliRefreshPendingTokenRef.current = scanToken;
        try {
            const nextAgents = await onRefreshAgents();
            if (cliScanTokenRef.current !== scanToken) return;
            cliRefreshPendingTokenRef.current = null;
            const availableAgents = nextAgents.filter((agent)=>agent.available && agent.id !== 'amr');
            const selectedCliAgent = selectDefaultCliAgent(availableAgents);
            // Scan-result semantics: zero available CLIs is a `failed` outcome
            // because the user's runtime path is blocked, even though the
            // detect call itself returned successfully. `detected_cli_count`
            // separately reports the raw catalog so the dashboard can split
            // "user has no CLI installed" from "detect crashed".
            if (availableAgents.length === 0) {
                setCliScanStatus('done');
                emitPendingCliScanResult(scanToken, {
                    result: 'failed',
                    detected: nextAgents.length,
                    available: 0,
                    errorCode: 'NO_AVAILABLE_CLI'
                });
                return;
            }
            emitPendingCliScanResult(scanToken, {
                result: 'success',
                detected: nextAgents.length,
                available: availableAgents.length,
                ...selectedCliAgent ? {
                    selectedCliId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIdToTracking"])(selectedCliAgent.id)
                } : {}
            });
            showCliAgents(scanToken, availableAgents, {
                stagger: true
            });
        } catch (err) {
            if (cliScanTokenRef.current === scanToken) {
                cliRefreshPendingTokenRef.current = null;
                setCliScanStatus('done');
                emitPendingCliScanResult(scanToken, {
                    result: 'failed',
                    detected: 0,
                    available: 0,
                    errorCode: err instanceof Error ? err.message : 'AGENT_REFRESH_THREW'
                });
            }
        }
    }
    async function testProviderInline() {
        if (!canTestProvider || providerTestState.status === 'running') return;
        const inputKey = providerTestInputKey;
        providerAutoTestKeyRef.current = inputKey;
        setProviderTestState({
            status: 'running',
            inputKey
        });
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$connection$2d$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testApiProvider"])({
                protocol: apiProtocol,
                baseUrl: config.baseUrl,
                apiKey: config.apiKey,
                model: config.model,
                apiVersion: apiProtocol === 'azure' ? config.apiVersion?.trim() || undefined : undefined
            });
            setProviderTestState({
                status: 'done',
                inputKey,
                result
            });
        } catch (error) {
            setProviderTestState({
                status: 'done',
                inputKey,
                result: {
                    ok: false,
                    kind: 'unknown',
                    latencyMs: 0,
                    model: config.model,
                    detail: error instanceof Error ? error.message : 'Test request failed'
                }
            });
        }
    }
    async function fetchProviderModelsInline() {
        if (!canFetchProviderModels || providerModelsState.status === 'running') return;
        const inputKey = providerModelsInputKey;
        providerModelsAutoFetchKeyRef.current = inputKey;
        const cachedModels = activeProviderModelsCache[inputKey];
        if (cachedModels) {
            selectFirstProviderModelWhenEmpty(cachedModels, inputKey);
            setProviderModelsState({
                status: 'done',
                inputKey,
                result: {
                    ok: true,
                    kind: 'success',
                    latencyMs: 0,
                    models: cachedModels
                }
            });
            return;
        }
        setProviderModelsState({
            status: 'running',
            inputKey
        });
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$provider$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProviderModels"])({
                protocol: apiProtocol,
                baseUrl: config.baseUrl,
                apiKey: config.apiKey
            });
            if (result.ok && result.models?.length) {
                selectFirstProviderModelWhenEmpty(result.models, inputKey);
                activeSetProviderModelsCache((current)=>({
                        ...current,
                        [inputKey]: result.models ?? []
                    }));
            }
            setProviderModelsState({
                status: 'done',
                inputKey,
                result
            });
        } catch (error) {
            setProviderModelsState({
                status: 'done',
                inputKey,
                result: {
                    ok: false,
                    kind: 'unknown',
                    latencyMs: 0,
                    detail: error instanceof Error ? error.message : 'Model list request failed'
                }
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            if (runtime !== 'byok' || step !== 0) return;
            if (!canFetchProviderModels) return;
            if (providerModelsState.status === 'running') return;
            if (providerModelsAutoFetchKeyRef.current === providerModelsInputKey) return;
            const timer = window.setTimeout({
                "OnboardingView.useEffect.timer": ()=>{
                    void fetchProviderModelsInline();
                }
            }["OnboardingView.useEffect.timer"], ONBOARDING_BYOK_AUTO_FETCH_DELAY_MS);
            return ({
                "OnboardingView.useEffect": ()=>window.clearTimeout(timer)
            })["OnboardingView.useEffect"];
        }
    }["OnboardingView.useEffect"], [
        canFetchProviderModels,
        providerModelsInputKey,
        providerModelsState.status,
        runtime,
        step
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingView.useEffect": ()=>{
            if (runtime !== 'byok' || step !== 0) return;
            if (!canTestProvider) return;
            if (providerTestState.status === 'running') return;
            if (providerAutoTestKeyRef.current === providerTestInputKey) return;
            const timer = window.setTimeout({
                "OnboardingView.useEffect.timer": ()=>{
                    void testProviderInline();
                }
            }["OnboardingView.useEffect.timer"], ONBOARDING_BYOK_AUTO_TEST_DELAY_MS);
            return ({
                "OnboardingView.useEffect": ()=>window.clearTimeout(timer)
            })["OnboardingView.useEffect"];
        }
    }["OnboardingView.useEffect"], [
        canTestProvider,
        providerTestInputKey,
        providerTestState.status,
        runtime,
        step
    ]);
    const onboardingNavigationLocked = newsletterSubmitting;
    const primaryActionLabel = isLastStep && newsletterSubmitting ? t('common.loading') : step === 0 && amrLoginPending ? t('settings.amrSigningIn') : step === 0 && amrSelectedAndSignedOut ? t('settings.amrSignInToContinue') : isLastStep ? t('settings.onboardingFinish') : t('settings.onboardingContinue');
    // Connect step, default face: a minimal, centered Open Design Cloud sign-in
    // landing. No stepper, no runtime cards — just the cloud CTA, a secondary
    // link into the full runtime chooser, and a top-left language/theme bar.
    if (step === 0 && connectExpanded === null) {
        const activeTheme = config.theme ?? 'system';
        // Resolve what the user is actually *seeing* right now: an explicit dark,
        // or system that currently maps to the OS's dark preference. The toggle
        // then flips straight to the opposite explicit theme, so every click
        // produces a visible change — no dead first click on `system → light`
        // (both light) before `light → dark` finally darkens on the second.
        const resolvedDark = activeTheme === 'dark' || activeTheme === 'system' && ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const themeIcon = resolvedDark ? 'moon' : 'sun';
        const cloudBusy = amrLoginPending;
        // 登录态尚未拉到时显示「加载中…」并禁用，避免先闪一下「登录」再翻成「继续（已登录）」。
        // 现在状态在挂载时就并行拉取，所以这个窗口很短。
        const amrStatusResolving = !amrStatusResolved;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "onboarding-view onboarding-view--cloud",
            "aria-label": t('settings.welcomeTitle'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "onboarding-cloud__topbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LanguageMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageMenu"], {
                            compact: true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "onboarding-cloud__theme",
                            "aria-label": resolvedDark ? t('settings.themeLight') : t('settings.themeDark'),
                            title: resolvedDark ? t('settings.themeLight') : t('settings.themeDark'),
                            onClick: ()=>onThemeChange(resolvedDark ? 'light' : 'dark'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: themeIcon,
                                size: 25
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 2191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "onboarding-cloud__center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "onboarding-cloud__logo",
                            role: "img",
                            "aria-label": "Open Design"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "onboarding-cloud__title",
                            children: t('settings.onboardingCloudTitle')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "onboarding-cloud__body",
                            children: t('settings.onboardingCloudBody')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "onboarding-cloud__primary",
                            onClick: ()=>{
                                if (amrStatusResolving) return;
                                if (amrSignedIn) {
                                    // 已登录：不再触发登录，但仍记一次 AMR 归因，否则
                                    // “已登录直接继续”的用户在 AMR 归因漏斗里会整段隐形
                                    // （登录流程的用户由 handleCloudSignIn 记录）。
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'onboarding_amr_card', new Date(), {
                                        metricsConsent: config.telemetry?.metrics === true
                                    });
                                    // Pin the runtime explicitly (mirroring handleCloudSignIn)
                                    // rather than leaning on the amrAgent effect, so the
                                    // completion event records runtime_type='amr_cloud' even if
                                    // amrAgent hasn't resolved yet when Continue is clicked.
                                    setRuntime('amr');
                                    onModeChange('daemon');
                                    onAgentChange('amr');
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'onboarding_amr_sign_in_continue', new Date(), {
                                        metricsConsent: config.telemetry?.metrics === true,
                                        reuseExistingFrom: [
                                            'onboarding_amr_card'
                                        ]
                                    });
                                    setStep((current)=>current + 1);
                                    return;
                                }
                                void handleCloudSignIn();
                            },
                            disabled: cloudBusy || amrLoginCancelPending || amrStatusResolving,
                            "aria-busy": cloudBusy || amrStatusResolving ? true : undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "orbit",
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: cloudBusy ? t('settings.amrSigningIn') : amrStatusResolving ? t('common.loading') : amrSignedIn ? t('settings.onboardingCloudContinue') : t('settings.onboardingCloudSignIn')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2248,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2211,
                            columnNumber: 11
                        }, this),
                        amrLoginError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "onboarding-cloud__error",
                            role: "alert",
                            children: amrLoginError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2259,
                            columnNumber: 13
                        }, this) : null,
                        cloudBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "onboarding-cloud__cancel",
                            onClick: handleCancelAmrLogin,
                            disabled: amrLoginCancelPending,
                            children: t('settings.amrCancelSignIn')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2264,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-cloud__alts",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-cloud__secondary",
                                    onClick: ()=>{
                                        emitOnboardingClick('local_coding_agent', 'select_runtime', {
                                            runtime_type: 'local_cli'
                                        });
                                        setRuntime('local');
                                        onModeChange('daemon');
                                        void scanCliAgents({
                                            preferExisting: true
                                        });
                                        setConnectExpanded('local');
                                    },
                                    children: t('settings.onboardingLocalTitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2274,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "onboarding-cloud__alts-or",
                                    children: t('settings.onboardingCloudOr')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-cloud__secondary",
                                    onClick: ()=>{
                                        emitOnboardingClick('byok', 'select_runtime', {
                                            runtime_type: 'byok'
                                        });
                                        setRuntime('byok');
                                        onModeChange('api');
                                        setConnectExpanded('byok');
                                    },
                                    children: t('settings.onboardingByokTitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2273,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 2203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "onboarding-cloud__footer",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Open Design · ",
                        t('settings.onboardingCloudRights')
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 2307,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
            lineNumber: 2187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "onboarding-view",
        "aria-label": t('settings.welcomeTitle'),
        children: [
            t('settings.welcomeKicker') || t('settings.welcomeSubtitle') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "onboarding-view__hero",
                children: [
                    t('settings.welcomeKicker') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "onboarding-view__kicker",
                        children: t('settings.welcomeKicker')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2319,
                        columnNumber: 13
                    }, this) : null,
                    t('settings.welcomeSubtitle') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t('settings.welcomeSubtitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2321,
                        columnNumber: 44
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2317,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "onboarding-view__content",
                    children: [
                        step === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-view__panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-view__back-to-cloud",
                                    onClick: ()=>setConnectExpanded(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-left",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.onboardingBack')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingPanelHeader, {
                                    title: connectExpanded === 'byok' ? t('settings.onboardingByokTitle') : t('settings.onboardingLocalTitle'),
                                    body: connectExpanded === 'byok' ? t('settings.onboardingByokBody') : t('settings.onboardingLocalBody')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "onboarding-view__runtime-stack",
                                    children: [
                                        connectExpanded === 'local' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingCliSetupPanel, {
                                            agents: visibleAgents,
                                            daemonLive: daemonLive,
                                            selectedAgentId: config.agentId,
                                            selectedAgent: selectedAgent,
                                            selectedModel: selectedAgentChoice.model ?? selectedAgent?.models?.[0]?.id ?? '',
                                            modelOptions: agentModelOptions,
                                            scanStatus: cliScanStatus,
                                            onRefresh: ()=>void scanCliAgents(),
                                            onSelectAgent: (agentId)=>{
                                                onModeChange('daemon');
                                                onAgentChange(agentId);
                                            },
                                            onSelectModel: (model)=>{
                                                if (!selectedAgent) return;
                                                onAgentModelChange(selectedAgent.id, {
                                                    model
                                                });
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2350,
                                            columnNumber: 19
                                        }, this) : null,
                                        connectExpanded === 'byok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingByokSetupPanel, {
                                            apiProtocol: apiProtocol,
                                            apiKey: config.apiKey,
                                            baseUrl: config.baseUrl,
                                            model: config.model,
                                            selectedProvider: selectedProvider,
                                            providerOptions: byokProviderOptions,
                                            apiKeyVisible: apiKeyVisible,
                                            onToggleApiKey: ()=>setApiKeyVisible((current)=>!current),
                                            onProtocolChange: (protocol)=>{
                                                onApiProtocolChange(protocol);
                                            },
                                            onProviderChange: (baseUrl)=>{
                                                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].find((item)=>item.protocol === apiProtocol && item.baseUrl === baseUrl);
                                                updateApiConfig({
                                                    baseUrl: provider?.baseUrl ?? '',
                                                    model: provider?.model ?? '',
                                                    apiProviderBaseUrl: provider?.baseUrl ?? null
                                                });
                                            },
                                            onApiKeyChange: (apiKey)=>updateApiConfig({
                                                    apiKey
                                                }),
                                            onModelChange: (model)=>{
                                                onApiModelChange(model);
                                                updateApiConfig({
                                                    model
                                                });
                                            },
                                            onBaseUrlChange: (baseUrl)=>updateApiConfig({
                                                    baseUrl,
                                                    apiProviderBaseUrl: null
                                                }),
                                            modelOptions: byokModelOptions,
                                            testState: visibleProviderTestState,
                                            canTest: canTestProvider,
                                            onTest: ()=>void testProviderInline(),
                                            modelsState: visibleProviderModelsState,
                                            canFetchModels: canFetchProviderModels,
                                            onFetchModels: ()=>void fetchProviderModelsInline()
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2370,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2348,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2327,
                            columnNumber: 13
                        }, this) : null,
                        step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-view__panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-view__back-to-cloud",
                                    onClick: handleBackWithTracking,
                                    disabled: onboardingNavigationLocked,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-left",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.onboardingBack')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2422,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingPanelHeader, {
                                    title: t('settings.onboardingProfileTitle'),
                                    body: t('settings.onboardingProfileBody')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2424,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "onboarding-view__form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingChipField, {
                                            label: t('settings.onboardingRoleLabel'),
                                            value: profile.role,
                                            options: roleOptions,
                                            onChange: (value)=>{
                                                if (typeof value === 'string' && value) {
                                                    emitOnboardingClick('role', 'select_option', {
                                                        role: value
                                                    });
                                                }
                                                setProfile((current)=>({
                                                        ...current,
                                                        role: value
                                                    }));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingChipField, {
                                            label: t('settings.onboardingOrgSizeLabel'),
                                            value: profile.orgSize,
                                            options: orgSizeOptions,
                                            onChange: (value)=>{
                                                if (typeof value === 'string' && value) {
                                                    emitOnboardingClick('organization_size', 'select_option', {
                                                        organization_size: value
                                                    });
                                                }
                                                setProfile((current)=>({
                                                        ...current,
                                                        orgSize: value
                                                    }));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingChipField, {
                                            label: t('settings.onboardingUseCaseLabel'),
                                            value: profile.useCase,
                                            options: useCaseOptions,
                                            multiple: true,
                                            onChange: (value)=>{
                                                if (!Array.isArray(value)) return;
                                                // Multi-select: emit one click per newly added
                                                // value (delta), not per render of the whole
                                                // selection. The dashboard then sees one row per
                                                // use_case chosen. Compare against `profileRef`
                                                // not `profile` — rapid picks can fire onChange
                                                // before React commits the previous pick, so a
                                                // closure-captured `profile.useCase` is one tick
                                                // behind and re-emits the prior pick on every
                                                // subsequent change.
                                                const previousSet = new Set(profileRef.current.useCase);
                                                for (const v of value){
                                                    if (!previousSet.has(v)) {
                                                        emitOnboardingClick('use_case', 'select_option', {
                                                            use_case: v
                                                        });
                                                    }
                                                }
                                                setProfile((current)=>({
                                                        ...current,
                                                        useCase: value
                                                    }));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2455,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingChipField, {
                                            label: t('settings.onboardingSourceLabel'),
                                            value: profile.source,
                                            options: sourceOptions,
                                            onChange: (value)=>{
                                                if (typeof value === 'string' && value) {
                                                    emitOnboardingClick('hear_about_us', 'select_option', {
                                                        discovery_source: value
                                                    });
                                                }
                                                setProfile((current)=>({
                                                        ...current,
                                                        source: value
                                                    }));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2480,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2428,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2414,
                            columnNumber: 13
                        }, this) : null,
                        step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-view__panel onboarding-view__panel--newsletter",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-view__back-to-cloud",
                                    onClick: handleBackWithTracking,
                                    disabled: onboardingNavigationLocked,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-left",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2505,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.onboardingBack')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2506,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2499,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingPanelHeader, {
                                    title: t('settings.onboardingNewsletterTitle'),
                                    body: t('settings.onboardingNewsletterBody')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "onboarding-view__email-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onboarding-view__email-label",
                                            children: t('newsletter.label')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2513,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "onboarding-view__email-input",
                                            type: "email",
                                            autoComplete: "email",
                                            inputMode: "email",
                                            placeholder: t('newsletter.placeholder'),
                                            value: profile.email,
                                            onChange: (event)=>setProfile((current)=>({
                                                        ...current,
                                                        email: event.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2516,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2512,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2498,
                            columnNumber: 13
                        }, this) : null,
                        step === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-view__panel onboarding-view__panel--newsletter",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-view__back-to-cloud",
                                    onClick: handleBackWithTracking,
                                    disabled: onboardingNavigationLocked,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-left",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.onboardingBack')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2540,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2533,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingPanelHeader, {
                                    title: t('onboarding.brandTitle'),
                                    body: t('onboarding.brandSubtitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "onboarding-view__email-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onboarding-view__email-label",
                                            children: t('newBrand.urlLabel')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2547,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "onboarding-view__brand-url-input",
                                            type: "url",
                                            autoComplete: "url",
                                            inputMode: "url",
                                            placeholder: t('newBrand.urlPlaceholder'),
                                            value: brandUrl,
                                            disabled: brandExtractActive,
                                            onChange: (event)=>setBrandUrl(event.target.value),
                                            onKeyDown: (event)=>{
                                                if (event.key === 'Enter' && brandUrl.trim() && !brandExtractActive) {
                                                    event.preventDefault();
                                                    void handleOnboardingBrandExtract();
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2550,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "onboarding-view__brand-action-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `onboarding-view__mini-button${brandExtractActive ? ' is-loading' : ''}`,
                                            onClick: ()=>{
                                                void handleOnboardingBrandExtract();
                                            },
                                            disabled: !brandUrl.trim() || brandExtractActive,
                                            children: brandExtractActive ? t('brand.extracting') : t('newBrand.extract')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2572,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "onboarding-view__secondary",
                                            onClick: handlePrimaryAction,
                                            disabled: newsletterSubmitting,
                                            "aria-busy": newsletterSubmitting ? true : undefined,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('settings.onboardingFinish')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                                lineNumber: 2591,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2584,
                                            columnNumber: 17
                                        }, this),
                                        brandExtractActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onboarding-view__action-status",
                                            role: "status",
                                            children: t('brand.extracting')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2594,
                                            columnNumber: 19
                                        }, this) : null,
                                        brandExtractDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onboarding-view__action-status",
                                            role: "status",
                                            children: t('onboarding.brandDone')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2602,
                                            columnNumber: 19
                                        }, this) : null,
                                        brandExtractFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onboarding-view__action-status is-error",
                                            role: "alert",
                                            children: brandExtractState.error || t('brand.failed')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 2607,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 22,
                                        paddingTop: 18,
                                        borderTop: '1px solid var(--border)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandReferencePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandReferencePicker"], {
                                        variant: "compact",
                                        busy: brandExtractActive,
                                        error: brandExtractFailed ? brandExtractState.error || t('brand.failed') : null,
                                        onPick: handleOnboardingPickReference
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 2622,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2615,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2532,
                            columnNumber: 13
                        }, this) : null,
                        !isLastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "onboarding-view__actions",
                            children: [
                                step === 0 && amrLoginError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "onboarding-view__action-status is-error",
                                    role: "alert",
                                    children: amrLoginError
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2639,
                                    columnNumber: 15
                                }, this) : null,
                                step === 0 && amrLoginPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "onboarding-view__secondary",
                                    onClick: handleCancelAmrLogin,
                                    disabled: amrLoginCancelPending,
                                    children: t('settings.amrCancelSignIn')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2644,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `onboarding-view__primary${connectGateTooltip ? ' od-tooltip' : ''}`,
                                    onClick: handlePrimaryAction,
                                    // The Connect gate uses `aria-disabled`, not the native `disabled`
                                    // attribute, so the button still receives hover/focus and can show
                                    // its tooltip explaining what to configure. `handlePrimaryAction`
                                    // guards the click. Truly-busy states stay natively disabled.
                                    disabled: amrLoginPending || amrLoginCancelPending || newsletterSubmitting,
                                    "aria-disabled": connectStepBlocked || undefined,
                                    "data-tooltip": connectGateTooltip ?? undefined,
                                    "data-tooltip-placement": "top",
                                    "aria-busy": newsletterSubmitting ? true : undefined,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: primaryActionLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 2669,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 2653,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                            lineNumber: 2637,
                            columnNumber: 11
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                    lineNumber: 2325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 2315,
        columnNumber: 5
    }, this);
}
_s1(OnboardingView, "q/HLa0sAfVhpgYP9PxNV3SDS11I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$useBrandExtract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBrandExtract"]
    ];
});
_c1 = OnboardingView;
function OnboardingCliSetupPanel({ agents, daemonLive, selectedAgentId, selectedAgent, selectedModel, modelOptions, scanStatus, onRefresh, onSelectAgent, onSelectModel }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const scanning = scanStatus === 'scanning';
    const showEmpty = scanStatus === 'done' && agents.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "onboarding-view__setup-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__setup-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: t('settings.localCli')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2709,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: daemonLive ? t('settings.codeAgentHint') : t('settings.modeDaemonOffline')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2710,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2708,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `onboarding-view__mini-button${scanning ? ' is-loading' : ''}`,
                        onClick: onRefresh,
                        disabled: scanning,
                        children: scanning ? t('settings.rescanRunning') : t('settings.rescan')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2712,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2707,
                columnNumber: 7
            }, this),
            scanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__scan-copy",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "onboarding-view__scan-status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "spinner",
                                size: 13,
                                className: "icon-spin"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2724,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('settings.rescanRunning')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2725,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2723,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "onboarding-view__scan-hint",
                        children: t('settings.onboardingCliScanHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2727,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2722,
                columnNumber: 9
            }, this) : null,
            agents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__agent-strip",
                children: agents.map((agent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `onboarding-view__agent-chip${selectedAgentId === agent.id ? ' is-selected' : ''}`,
                        style: {
                            animationDelay: `${index * 45}ms`
                        },
                        onClick: ()=>onSelectAgent(agent.id),
                        "aria-pressed": selectedAgentId === agent.id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentIcon"], {
                                id: agent.id,
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2745,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: agent.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 2747,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: agent.version ?? t('common.installed')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                        lineNumber: 2748,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2746,
                                columnNumber: 15
                            }, this)
                        ]
                    }, agent.id, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2735,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2733,
                columnNumber: 9
            }, this) : null,
            showEmpty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__empty-slice",
                children: t('settings.noAgentsDetected')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2755,
                columnNumber: 9
            }, this) : null,
            selectedAgent && modelOptions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingDropdown, {
                label: `${t('settings.modelPicker')} · ${selectedAgent.name}`,
                placeholder: t('settings.modelSourceFallback'),
                value: selectedModel,
                options: modelOptions,
                onChange: onSelectModel,
                searchable: true,
                searchPlaceholder: t('newproj.modelSearch')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2760,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 2706,
        columnNumber: 5
    }, this);
}
_s2(OnboardingCliSetupPanel, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c2 = OnboardingCliSetupPanel;
function OnboardingByokSetupPanel({ apiProtocol, apiKey, baseUrl, model, selectedProvider, providerOptions, apiKeyVisible, onToggleApiKey, onProtocolChange, onProviderChange, onApiKeyChange, onModelChange, onBaseUrlChange, modelOptions, testState, canTest, onTest, modelsState, canFetchModels, onFetchModels }) {
    _s3();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const running = testState.status === 'running';
    const fetchingModels = modelsState.status === 'running';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "onboarding-view__setup-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__setup-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: t('settings.modeApiMeta')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2830,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t('settings.modeApi')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2831,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2829,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "onboarding-view__setup-head-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `onboarding-view__mini-button${fetchingModels ? ' is-loading' : ''}`,
                                onClick: onFetchModels,
                                disabled: fetchingModels || !canFetchModels,
                                title: t('settings.fetchModelsTitle'),
                                children: fetchingModels ? t('settings.fetchModelsRunning') : t('settings.fetchModels')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2834,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `onboarding-view__mini-button${running ? ' is-loading' : ''}`,
                                onClick: onTest,
                                disabled: running || !canTest,
                                title: t('settings.testTitle'),
                                children: running ? t('settings.testRunning') : t('settings.test')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2843,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2833,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2828,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__protocol-strip",
                role: "tablist",
                "aria-label": t('settings.protocolAria'),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_PROTOCOL_TABS"].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": apiProtocol === tab.id,
                        className: apiProtocol === tab.id ? 'is-selected' : '',
                        onClick: ()=>onProtocolChange(tab.id),
                        children: tab.title
                    }, tab.id, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2860,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2854,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingDropdown, {
                label: t('settings.quickFillProvider'),
                placeholder: t('settings.customProvider'),
                value: selectedProvider?.baseUrl ?? '',
                options: providerOptions,
                onChange: onProviderChange,
                searchable: true,
                searchPlaceholder: t('settings.quickFillProvider')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "onboarding-view__inline-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('settings.apiKey')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2882,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "onboarding-view__field-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: apiKeyVisible ? 'text' : 'password',
                                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_KEY_PLACEHOLDERS"][apiProtocol],
                                value: apiKey,
                                onChange: (event)=>onApiKeyChange(event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2884,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleApiKey,
                                children: apiKeyVisible ? t('settings.hide') : t('settings.show')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2890,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2883,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__compact-fields",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "onboarding-view__inline-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('settings.baseUrl')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2897,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                inputMode: "url",
                                value: baseUrl,
                                placeholder: selectedProvider?.baseUrl ?? 'https://api.anthropic.com',
                                onChange: (event)=>onBaseUrlChange(event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2898,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2896,
                        columnNumber: 9
                    }, this),
                    modelOptions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingDropdown, {
                        label: t('settings.model'),
                        placeholder: selectedProvider?.model ?? 'claude-sonnet-4-5',
                        value: model,
                        options: modelOptions,
                        onChange: onModelChange,
                        placement: "top",
                        searchable: true,
                        searchPlaceholder: t('newproj.modelSearch')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2907,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "onboarding-view__inline-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('settings.model')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2919,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: model,
                                placeholder: selectedProvider?.model ?? 'claude-sonnet-4-5',
                                onChange: (event)=>onModelChange(event.target.value.trim())
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 2920,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 2918,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2895,
                columnNumber: 7
            }, this),
            modelsState.status === 'running' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "onboarding-view__test-status is-running",
                role: "status",
                children: t('settings.fetchModelsRunning')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2930,
                columnNumber: 9
            }, this) : modelsState.status === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `onboarding-view__test-status is-${onboardingProviderModelsVariant(modelsState.result)}`,
                role: modelsState.result.ok ? 'status' : 'alert',
                children: renderOnboardingProviderModelsMessage(t, modelsState.result)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2934,
                columnNumber: 9
            }, this) : null,
            testState.status === 'running' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "onboarding-view__test-status is-running",
                role: "status",
                children: t('settings.testRunning')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2944,
                columnNumber: 9
            }, this) : testState.status === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `onboarding-view__test-status is-${onboardingTestVariant(testState.result)}`,
                role: testState.result.ok ? 'status' : 'alert',
                children: renderOnboardingProviderTestMessage(t, testState.result, model)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 2948,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 2827,
        columnNumber: 5
    }, this);
}
_s3(OnboardingByokSetupPanel, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c3 = OnboardingByokSetupPanel;
function onboardingTestVariant(result) {
    if (result.ok) return 'success';
    if (result.kind === 'rate_limited') return 'warn';
    return 'error';
}
function onboardingProviderModelsVariant(result) {
    if (result.ok) return 'success';
    if (result.kind === 'rate_limited' || result.kind === 'no_models') return 'warn';
    return 'error';
}
function isLikelyHttpUrl(value) {
    try {
        const parsed = new URL(value.trim());
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch  {
        return false;
    }
}
function mergeOnboardingProviderModelOptions(fetchedModels, suggestedModelIds, currentModel) {
    const seen = new Set();
    const out = [];
    const add = (model)=>{
        const id = model.id.trim();
        if (!id || seen.has(id)) return;
        seen.add(id);
        out.push({
            id,
            label: model.label.trim() || id
        });
    };
    for (const model of fetchedModels)add(model);
    for (const id of suggestedModelIds)add({
        id,
        label: id
    });
    if (currentModel.trim()) add({
        id: currentModel.trim(),
        label: currentModel.trim()
    });
    return out;
}
function onboardingProviderModelLabel(model) {
    return model.label && model.label !== model.id ? `${model.label} (${model.id})` : model.id;
}
function renderOnboardingProviderTestMessage(t, result, fallbackModel) {
    const ms = Math.max(0, Math.round(result.latencyMs));
    const sample = result.sample ?? '';
    const testedModel = result.model ?? fallbackModel;
    if (result.ok) {
        const baseMessage = t('settings.testSuccessApi', {
            ms,
            sample
        });
        return result.detail ? `${baseMessage} ${result.detail}` : baseMessage;
    }
    switch(result.kind){
        case 'auth_failed':
            return t('settings.testAuthFailed');
        case 'forbidden':
            return t('settings.testForbidden');
        case 'not_found_model':
            return t('settings.testNotFoundModel', {
                model: testedModel
            });
        case 'invalid_model_id':
            return t('settings.testInvalidModelId', {
                model: testedModel
            });
        case 'invalid_base_url':
            return t('settings.testInvalidBaseUrl');
        case 'rate_limited':
            return t('settings.testRateLimited');
        case 'upstream_unavailable':
            return t('settings.testUpstream', {
                status: result.status ?? 0
            });
        case 'timeout':
            return t('settings.testTimeout', {
                ms
            });
        default:
            return t('settings.testUnknown', {
                detail: result.detail ?? ''
            });
    }
}
function renderOnboardingProviderModelsMessage(t, result) {
    if (result.ok) {
        return t('settings.fetchModelsSuccess', {
            count: result.models?.length ?? 0
        });
    }
    switch(result.kind){
        case 'auth_failed':
            return t('settings.testAuthFailed');
        case 'forbidden':
            return t('settings.testForbidden');
        case 'invalid_base_url':
            return t('settings.testInvalidBaseUrl');
        case 'rate_limited':
            return t('settings.testRateLimited');
        case 'upstream_unavailable':
            return t('settings.testUpstream', {
                status: result.status ?? 0
            });
        case 'timeout':
            return t('settings.testTimeout', {
                ms: Math.max(0, Math.round(result.latencyMs))
            });
        case 'no_models':
            return t('settings.fetchModelsEmpty');
        case 'unsupported_protocol':
            return t('settings.fetchModelsUnsupported');
        default:
            return t('settings.fetchModelsFailed', {
                detail: result.detail ?? ''
            });
    }
}
function OnboardingPanelHeader({ title, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "onboarding-view__panel-head",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3081,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: body
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3082,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 3080,
        columnNumber: 5
    }, this);
}
_c4 = OnboardingPanelHeader;
// Profile fields render their options as a flat row of toggleable chips
// instead of a dropdown, so a pick is one tap with every choice already in
// view. Single-select chips behave as a radio (re-tapping clears); multi
// select chips toggle independently.
function OnboardingChipField(props) {
    const { label, options } = props;
    const selected = props.multiple ? props.value : props.value ? [
        props.value
    ] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "onboarding-chip-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "onboarding-chip-field__label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-chip-field__chips",
                children: options.map((option)=>{
                    const active = selected.includes(option.value);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `onboarding-chip${active ? ' is-selected' : ''}`,
                        "aria-pressed": active,
                        onClick: ()=>{
                            if (props.multiple) {
                                props.onChange(active ? props.value.filter((value)=>value !== option.value) : [
                                    ...props.value,
                                    option.value
                                ]);
                            } else {
                                props.onChange(active ? '' : option.value);
                            }
                        },
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 3121,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 3115,
        columnNumber: 5
    }, this);
}
_c5 = OnboardingChipField;
function OnboardingDropdown(props) {
    _s4();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const { label, placeholder, value, options, placement = 'bottom', multiple = false, searchable = false, searchPlaceholder, sourceTone } = props;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resolvedPlacement, setResolvedPlacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(placement);
    const [menuMaxHeight, setMenuMaxHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(240);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(`onboarding-dropdown-${Math.random().toString(36).slice(2)}`);
    const selectedValues = Array.isArray(value) ? value : value ? [
        value
    ] : [];
    const selectedOptions = options.filter((option)=>selectedValues.includes(option.value));
    const selectedOption = selectedOptions[0];
    const hasValue = selectedOptions.length > 0;
    const selectedLabel = multiple ? selectedOptions.map((option)=>option.label).join(', ') : selectedOption?.label;
    const triggerLabel = selectedLabel || placeholder;
    const normalizedQuery = query.trim().toLowerCase();
    const visibleOptions = searchable && normalizedQuery ? options.filter((option)=>`${option.label} ${option.value}`.toLowerCase().includes(normalizedQuery)) : options;
    const emptyMessage = searchable ? t('homeHero.footer.noMatches') : t('settings.fetchModelsEmpty');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "OnboardingDropdown.useLayoutEffect": ()=>{
            if (!open) return;
            function measureMenu() {
                const root = rootRef.current;
                if (!root) return;
                const rect = root.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 720;
                const spaceBelow = viewportHeight - rect.bottom;
                const spaceAbove = rect.top;
                const nextPlacement = placement === 'top' || spaceBelow < 260 && spaceAbove > spaceBelow ? 'top' : 'bottom';
                const availableSpace = nextPlacement === 'top' ? spaceAbove : spaceBelow;
                setResolvedPlacement(nextPlacement);
                setMenuMaxHeight(Math.max(48, Math.min(240, availableSpace - 16)));
            }
            measureMenu();
            window.addEventListener('resize', measureMenu);
            window.addEventListener('scroll', measureMenu, true);
            return ({
                "OnboardingDropdown.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', measureMenu);
                    window.removeEventListener('scroll', measureMenu, true);
                }
            })["OnboardingDropdown.useLayoutEffect"];
        }
    }["OnboardingDropdown.useLayoutEffect"], [
        open,
        placement,
        options.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingDropdown.useEffect": ()=>{
            if (!open) return;
            function handlePointerDown(event) {
                if (!rootRef.current?.contains(event.target)) {
                    setOpen(false);
                }
            }
            function handleKeyDown(event) {
                if (event.key === 'Escape') {
                    setOpen(false);
                }
            }
            document.addEventListener('pointerdown', handlePointerDown);
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "OnboardingDropdown.useEffect": ()=>{
                    document.removeEventListener('pointerdown', handlePointerDown);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["OnboardingDropdown.useEffect"];
        }
    }["OnboardingDropdown.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingDropdown.useEffect": ()=>{
            if (!open) {
                setQuery('');
            }
        }
    }["OnboardingDropdown.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingDropdown.useEffect": ()=>{
            function handlePeerOpen(event) {
                if (event.detail !== dropdownIdRef.current) {
                    setOpen(false);
                }
            }
            window.addEventListener(ONBOARDING_DROPDOWN_OPEN_EVENT, handlePeerOpen);
            return ({
                "OnboardingDropdown.useEffect": ()=>{
                    window.removeEventListener(ONBOARDING_DROPDOWN_OPEN_EVENT, handlePeerOpen);
                }
            })["OnboardingDropdown.useEffect"];
        }
    }["OnboardingDropdown.useEffect"], []);
    function toggleOpen() {
        setOpen((current)=>{
            const nextOpen = !current;
            if (nextOpen) {
                window.dispatchEvent(new CustomEvent(ONBOARDING_DROPDOWN_OPEN_EVENT, {
                    detail: dropdownIdRef.current
                }));
            }
            return nextOpen;
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "onboarding-view__select-field",
        "data-placement": resolvedPlacement,
        "data-open": open || undefined,
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "onboarding-view__select-label",
                "data-source-tone": sourceTone || undefined,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `onboarding-view__select-trigger${open ? ' is-open' : ''}${hasValue ? ' has-value' : ''}`,
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                title: triggerLabel,
                onClick: toggleOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: triggerLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 3313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevron-down",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 3314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3303,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onboarding-view__select-menu",
                "data-searchable": searchable || undefined,
                style: {
                    '--onboarding-select-menu-max-height': `${menuMaxHeight}px`
                },
                children: [
                    searchable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "onboarding-view__select-search",
                        onClick: (event)=>event.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "search",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 3327,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                value: query,
                                placeholder: searchPlaceholder || placeholder,
                                "aria-label": searchPlaceholder || label,
                                autoFocus: true,
                                onChange: (event)=>setQuery(event.target.value),
                                onKeyDown: (event)=>{
                                    if (event.key !== 'Escape') {
                                        event.stopPropagation();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 3328,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 3323,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "onboarding-view__select-options",
                        role: "listbox",
                        "aria-label": label,
                        "aria-multiselectable": multiple || undefined,
                        children: [
                            visibleOptions.map((option)=>{
                                const selected = selectedValues.includes(option.value);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `onboarding-view__select-option${selected ? ' is-selected' : ''}`,
                                    role: "option",
                                    "aria-selected": selected,
                                    onClick: ()=>{
                                        if (props.multiple) {
                                            props.onChange(selected ? selectedValues.filter((selectedValue)=>selectedValue !== option.value) : [
                                                ...selectedValues,
                                                option.value
                                            ]);
                                            return;
                                        }
                                        props.onChange(option.value);
                                        setOpen(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: option.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 3371,
                                            columnNumber: 19
                                        }, this),
                                        selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                            lineNumber: 3372,
                                            columnNumber: 31
                                        }, this) : null
                                    ]
                                }, option.value, true, {
                                    fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                    lineNumber: 3352,
                                    columnNumber: 17
                                }, this);
                            }),
                            visibleOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "onboarding-view__select-empty",
                                children: emptyMessage
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                                lineNumber: 3377,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                        lineNumber: 3343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/EntryShell.tsx",
                lineNumber: 3317,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/EntryShell.tsx",
        lineNumber: 3291,
        columnNumber: 5
    }, this);
} // Placeholder for the AMR cloud card shown while AMR availability is still
 // being probed (the cold-start detection stream / one-shot re-probe). It
 // mirrors the real card's footprint exactly — same featured/amr grid, same
 // 246px min-height — so resolving to the real card causes no layout jump.
 // The AMR brand (icon + name) is known up-front and rendered solid; only the
 // version meta, benefit list, and model picker — the parts that depend on the
 // probe result — shimmer. Non-interactive and announced via role="status".
_s4(OnboardingDropdown, "1CgyIiHSRzMpIC6tfxHzaeqfaZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c6 = OnboardingDropdown;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "EntryShell");
__turbopack_context__.k.register(_c1, "OnboardingView");
__turbopack_context__.k.register(_c2, "OnboardingCliSetupPanel");
__turbopack_context__.k.register(_c3, "OnboardingByokSetupPanel");
__turbopack_context__.k.register(_c4, "OnboardingPanelHeader");
__turbopack_context__.k.register(_c5, "OnboardingChipField");
__turbopack_context__.k.register(_c6, "OnboardingDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_EntryShell_tsx_0fep--1._.js.map