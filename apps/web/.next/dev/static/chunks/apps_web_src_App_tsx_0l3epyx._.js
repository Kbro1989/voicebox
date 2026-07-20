(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App,
    "buildPersistedConfig",
    ()=>buildPersistedConfig,
    "isAutosaveDraftOnlyChange",
    ()=>isAutosaveDraftOnlyChange,
    "persistComposioConfigChange",
    ()=>persistComposioConfigChange,
    "resolveSettingsCloseConfig",
    ()=>resolveSettingsCloseConfig,
    "shouldSyncMediaProvidersOnSave",
    ()=>shouldSyncMediaProvidersOnSave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/upload-tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/identity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/EntryView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MarketplaceView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MarketplaceView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginDetailView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MemoryToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/PetOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$taskCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/taskCenter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/pets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ProjectView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TooltipLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TooltipLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$WorkspaceTabsBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/WorkspaceTabsBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/IframeKeepAlivePool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/SettingsDialog.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PrivacyConsentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PrivacyConsentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/amrLoginPolling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/appearance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModalWindowDragGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useModalWindowDragGuard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/types.ts [app-client] (ecmascript)");
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
;
const APP_CONFIG_CHANGED_EVENT = 'open-design:app-config-changed';
const AMR_AGENT_ID = 'amr';
const AMR_PROFILE_ENV_KEY = 'OPEN_DESIGN_AMR_PROFILE';
const AGENT_FOCUS_REFRESH_THROTTLE_MS = 10_000;
function shouldSyncMediaProvidersOnSave(mediaProviders, options) {
    return Boolean(options?.force) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasAnyConfiguredProvider"])(mediaProviders);
}
function normalizeSavedComposioConfig(config) {
    const apiKey = config?.apiKey?.trim() ?? '';
    if (apiKey) {
        return {
            ...config,
            apiKey: '',
            apiKeyConfigured: true,
            apiKeyTail: apiKey.slice(-4)
        };
    }
    return {
        ...config ?? {}
    };
}
function amrProfileForConfig(config) {
    const profile = config.agentCliEnv?.[AMR_AGENT_ID]?.[AMR_PROFILE_ENV_KEY];
    return typeof profile === 'string' && profile ? profile : null;
}
function sameAgentModelChoice(left, right) {
    return (left?.model ?? null) === (right?.model ?? null) && (left?.reasoning ?? null) === (right?.reasoning ?? null);
}
function clearStaleAmrModelChoiceOnProfileChange(previous, next) {
    if (amrProfileForConfig(previous) === amrProfileForConfig(next)) return next;
    const previousChoice = previous.agentModels?.[AMR_AGENT_ID];
    const nextChoice = next.agentModels?.[AMR_AGENT_ID];
    if (!nextChoice || !sameAgentModelChoice(previousChoice, nextChoice)) return next;
    const nextAgentModels = {
        ...next.agentModels ?? {}
    };
    delete nextAgentModels[AMR_AGENT_ID];
    return {
        ...next,
        agentModels: nextAgentModels
    };
}
async function persistComposioConfigChange(current, composio, sync = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncComposioConfigToDaemon"]) {
    const saved = await sync(composio);
    if (!saved) throw new Error('Composio config save failed');
    return {
        ...current,
        composio: normalizeSavedComposioConfig(composio)
    };
}
function buildPersistedConfig(next, current) {
    const stalePrivacySnapshot = current.privacyDecisionAt != null && next.privacyDecisionAt == null;
    return {
        ...next,
        onboardingCompleted: current.onboardingCompleted ? true : next.onboardingCompleted,
        ...stalePrivacySnapshot ? {
            installationId: current.installationId,
            privacyDecisionAt: current.privacyDecisionAt,
            telemetry: current.telemetry
        } : {},
        composio: next.composio ? {
            apiKey: '',
            apiKeyConfigured: Boolean(next.composio.apiKeyConfigured),
            apiKeyTail: next.composio.apiKeyTail ?? ''
        } : next.composio
    };
}
function isAutosaveDraftOnlyChange(next, last) {
    return JSON.stringify(buildPersistedConfig(next, next)) === JSON.stringify(buildPersistedConfig(last, last));
}
function resolveSettingsCloseConfig(rendered, latestPersisted) {
    const base = latestPersisted === rendered ? rendered : latestPersisted;
    return base.onboardingCompleted ? base : {
        ...base,
        onboardingCompleted: true
    };
}
function mergeAmrModelsIntoAgents(agents, amrModels) {
    if (!amrModels || amrModels.models.length === 0) return agents;
    return agents.map((agent)=>{
        if (agent.id !== 'amr') return agent;
        const shouldPreferAgentModels = amrModels.source === 'preset' && Array.isArray(agent.models) && agent.models.length > 0;
        if (shouldPreferAgentModels) return agent;
        return {
            ...agent,
            models: amrModels.models,
            modelsSource: 'live'
        };
    });
}
const CANONICAL_AGENT_ORDER = [
    'amr',
    'claude',
    'codex',
    'devin',
    'gemini',
    'opencode',
    'hermes',
    'trae-cli',
    'grok-build',
    'kimi',
    'cursor-agent',
    'qwen',
    'qoder',
    'copilot',
    'pi',
    'kiro',
    'kilo',
    'vibe',
    'deepseek',
    'aider',
    'antigravity',
    'reasonix'
];
const CANONICAL_AGENT_ORDER_INDEX = new Map(CANONICAL_AGENT_ORDER.map((id, index)=>[
        id,
        index
    ]));
function orderAgentsByRegistry(agents) {
    return agents.map((agent, index)=>({
            agent,
            index
        })).sort((left, right)=>{
        const leftRank = CANONICAL_AGENT_ORDER_INDEX.get(left.agent.id) ?? CANONICAL_AGENT_ORDER.length;
        const rightRank = CANONICAL_AGENT_ORDER_INDEX.get(right.agent.id) ?? CANONICAL_AGENT_ORDER.length;
        if (leftRank !== rightRank) return leftRank - rightRank;
        return left.index - right.index;
    }).map(({ agent })=>agent);
}
function upsertAgent(agents, agent) {
    const index = agents.findIndex((item)=>item.id === agent.id);
    if (index === -1) return [
        ...agents,
        agent
    ];
    const next = agents.slice();
    next[index] = agent;
    return next;
}
function isAbortError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && err.name === 'AbortError';
}
function App() {
    // `reducedMotion="user"` makes every motion/react component honor the OS
    // `prefers-reduced-motion` setting: transform/layout animations are zeroed
    // out while opacity-only changes are kept. The CSS `@media (prefers-reduced-
    // motion: reduce)` block covers the CSS-keyframe surfaces, but the dialogs,
    // toasts and popovers that moved to motion/react need this gate too — without
    // it they keep springing/sliding for users who asked us not to animate.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: "user",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeKeepAliveProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppInner, {}, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/App.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
_c = App;
function AppInner() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const iframeKeepAlivePool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframeKeepAlivePool"])();
    const clientType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[clientType]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectClientType"])()
    }["AppInner.useMemo[clientType]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModalWindowDragGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalWindowDragGuard"])();
    // Observability marker. `apps/web/src/observability/white-screen.ts`
    // keys its "app actually mounted" success condition on this attribute
    // because the dynamic-import loading shell (`<div class="od-loading-shell">
    // Loading Open Design…</div>`) is itself >MIN_VISIBLE_TEXT and would
    // otherwise be mistaken for a real mount. Survives subsequent render
    // crashes — once App has mounted at least once, it's no longer a white
    // screen (subsequent failures show up as `$exception`).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (typeof document !== 'undefined') {
                document.documentElement.setAttribute('data-od-app-mounted', '1');
            }
        }
    }["AppInner.useEffect"], []);
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AppInner.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadConfig"])()
    }["AppInner.useState"]);
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    configRef.current = config;
    const latestPersistedConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    latestPersistedConfigRef.current = config;
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Surfaced when a Home-picked working dir could not be applied to a freshly
    // created project (expired/invalid desktop token, daemon rejection). Without
    // this the failure was swallowed and the user believed their folder was in
    // effect while the project actually stayed in the managed root.
    const [workingDirError, setWorkingDirError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [projectOpenError, setProjectOpenError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [settingsWelcome, setSettingsWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsInitialSection, setSettingsInitialSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('execution');
    const [settingsHighlight, setSettingsHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [integrationInitialTab, setIntegrationInitialTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mcp');
    const [daemonLive, setDaemonLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const amrModelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const amrPollGenerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const agentStreamRequestSeqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const agentFocusRefreshLastRunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const [amrPollRestartToken, setAmrPollRestartToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [providerModelsCache, setProviderModelsCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Functional skills (capabilities the agent invokes mid-task) — stays
    // small and lives under the Settings → Skills surface.
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Design templates (rendering catalogue: decks, prototypes, image/video/
    // audio templates) — sourced from /api/design-templates and shown in the
    // EntryView Templates tab. See specs/current/skills-and-design-templates.md.
    const [designTemplates, setDesignTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [designSystems, setDesignSystems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingDesignSystemRevisionJobs, setPendingDesignSystemRevisionJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const projectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(projects);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            projectsRef.current = projects;
        }
    }["AppInner.useEffect"], [
        projects
    ]);
    const [petTaskCenter, setPetTaskCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        running: [],
        queued: [],
        recent: []
    });
    const pendingLocalProjectIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const locallyDeletedProjectIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const projectListMutationVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const projectListRequestGenerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const latestAppliedProjectListGenerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [promptTemplates, setPromptTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [appVersionInfo, setAppVersionInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [daemonMediaProviders, setDaemonMediaProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [daemonMediaProvidersFetchState, setDaemonMediaProvidersFetchState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [mediaProvidersNotice, setMediaProvidersNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Per-resource loading flags. Each goes false the moment its own fetch
    // resolves so each entry-view tab can render as its data lands instead of
    // every tab waiting on the slowest endpoint (typically `/api/agents`,
    // which probes CLI versions and can take seconds on cold start). The entry
    // view picks the right flag for whichever tab the user is currently on.
    const [agentsLoading, setAgentsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [skillsLoading, setSkillsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [dsLoading, setDsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [projectsLoading, setProjectsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [promptTemplatesLoading, setPromptTemplatesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Goes true once the daemon-persisted config (agentId/designSystemId/etc.)
    // has merged into local state. Auto-selection effects below wait on this
    // so they don't race ahead of the daemon-stored choice and overwrite it
    // with a freshly picked first-available agent.
    const [daemonConfigLoaded, setDaemonConfigLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Narrower flag dedicated to the Composio API key hydration. The key is
    // persisted by the daemon (and only reflected back via apiKeyConfigured
    // + apiKeyTail), so after a dev-server restart there is a window where
    // the dialog can render an empty Composio input even though a saved key
    // exists. Settings → Connectors uses this to render a skeleton over the
    // input + buttons instead of an empty input that the user might
    // mistake for "no key saved" — and to disable Save/Clear so a misclick
    // can't overwrite the saved state with `''` before hydration lands.
    const [composioConfigLoading, setComposioConfigLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const beginAgentStreamRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[beginAgentStreamRequest]": ()=>{
            agentStreamRequestSeqRef.current += 1;
            return agentStreamRequestSeqRef.current;
        }
    }["AppInner.useCallback[beginAgentStreamRequest]"], []);
    const isCurrentAgentStreamRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[isCurrentAgentStreamRequest]": (requestId)=>{
            return agentStreamRequestSeqRef.current === requestId;
        }
    }["AppInner.useCallback[isCurrentAgentStreamRequest]"], []);
    const restartAmrPolling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[restartAmrPolling]": ()=>{
            amrPollGenerationRef.current += 1;
            setAmrPollRestartToken({
                "AppInner.useCallback[restartAmrPolling]": (current)=>current + 1
            }["AppInner.useCallback[restartAmrPolling]"]);
        }
    }["AppInner.useCallback[restartAmrPolling]"], []);
    // v2 schema removed the standalone `app_launch` event; the initial
    // page_view fires from each top-level page surface (home / projects /
    // automations / plugins / design_systems / integrations) instead.
    // `detectClientType` still feeds analytics identity via the provider.
    void __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectClientType"];
    const rememberLocalProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[rememberLocalProject]": (projectId)=>{
            pendingLocalProjectIdsRef.current.add(projectId);
            locallyDeletedProjectIdsRef.current.delete(projectId);
            projectListMutationVersionRef.current += 1;
        }
    }["AppInner.useCallback[rememberLocalProject]"], []);
    const clearLocalProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[clearLocalProject]": (projectId, options)=>{
            pendingLocalProjectIdsRef.current.delete(projectId);
            projectListMutationVersionRef.current += 1;
            if (options?.deleted) {
                locallyDeletedProjectIdsRef.current.set(projectId, projectListMutationVersionRef.current);
            }
        }
    }["AppInner.useCallback[clearLocalProject]"], []);
    const beginProjectListRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[beginProjectListRequest]": ()=>{
            projectListRequestGenerationRef.current += 1;
            return {
                generation: projectListRequestGenerationRef.current,
                mutationVersion: projectListMutationVersionRef.current
            };
        }
    }["AppInner.useCallback[beginProjectListRequest]"], []);
    const reconcileFetchedProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[reconcileFetchedProjects]": (list, request)=>{
            const pendingLocalProjectIds = pendingLocalProjectIdsRef.current;
            const locallyDeletedProjectIds = locallyDeletedProjectIdsRef.current;
            const fetchedIds = new Set(list.map({
                "AppInner.useCallback[reconcileFetchedProjects]": (project)=>project.id
            }["AppInner.useCallback[reconcileFetchedProjects]"]));
            if (request.generation < latestAppliedProjectListGenerationRef.current) {
                const visibleList = locallyDeletedProjectIds.size > 0 ? list.filter({
                    "AppInner.useCallback[reconcileFetchedProjects]": (project)=>!locallyDeletedProjectIds.has(project.id)
                }["AppInner.useCallback[reconcileFetchedProjects]"]) : list;
                if (visibleList.length === 0) return false;
                const hydratableProjects = visibleList.filter({
                    "AppInner.useCallback[reconcileFetchedProjects].hydratableProjects": (project)=>pendingLocalProjectIds.has(project.id)
                }["AppInner.useCallback[reconcileFetchedProjects].hydratableProjects"]);
                if (hydratableProjects.length === 0) return false;
                const hydratableById = new Map(hydratableProjects.map({
                    "AppInner.useCallback[reconcileFetchedProjects]": (project)=>[
                            project.id,
                            project
                        ]
                }["AppInner.useCallback[reconcileFetchedProjects]"]));
                for (const project of hydratableProjects){
                    pendingLocalProjectIds.delete(project.id);
                }
                setProjects({
                    "AppInner.useCallback[reconcileFetchedProjects]": (current)=>{
                        let changed = false;
                        const currentIds = new Set();
                        const next = current.map({
                            "AppInner.useCallback[reconcileFetchedProjects].next": (project)=>{
                                currentIds.add(project.id);
                                const hydrated = hydratableById.get(project.id);
                                if (!hydrated) return project;
                                changed = true;
                                hydratableById.delete(project.id);
                                return hydrated;
                            }
                        }["AppInner.useCallback[reconcileFetchedProjects].next"]);
                        for (const project of hydratableById.values()){
                            if (currentIds.has(project.id)) continue;
                            changed = true;
                            next.push(project);
                        }
                        return changed ? next : current;
                    }
                }["AppInner.useCallback[reconcileFetchedProjects]"]);
                return true;
            }
            latestAppliedProjectListGenerationRef.current = request.generation;
            for (const id of fetchedIds)pendingLocalProjectIds.delete(id);
            for (const [id, deletedAtMutationVersion] of locallyDeletedProjectIds){
                if (request.mutationVersion >= deletedAtMutationVersion && !fetchedIds.has(id)) {
                    locallyDeletedProjectIds.delete(id);
                }
            }
            const activeDeletedProjectIds = new Set(locallyDeletedProjectIds.keys());
            const visibleList = activeDeletedProjectIds.size > 0 ? list.filter({
                "AppInner.useCallback[reconcileFetchedProjects]": (project)=>!activeDeletedProjectIds.has(project.id)
            }["AppInner.useCallback[reconcileFetchedProjects]"]) : list;
            const visibleFetchedIds = activeDeletedProjectIds.size > 0 ? new Set(visibleList.map({
                "AppInner.useCallback[reconcileFetchedProjects]": (project)=>project.id
            }["AppInner.useCallback[reconcileFetchedProjects]"])) : fetchedIds;
            setProjects({
                "AppInner.useCallback[reconcileFetchedProjects]": (current)=>{
                    const preserved = current.filter({
                        "AppInner.useCallback[reconcileFetchedProjects].preserved": (project)=>pendingLocalProjectIds.has(project.id) && !visibleFetchedIds.has(project.id) && !activeDeletedProjectIds.has(project.id)
                    }["AppInner.useCallback[reconcileFetchedProjects].preserved"]);
                    return preserved.length > 0 ? [
                        ...preserved,
                        ...visibleList
                    ] : visibleList;
                }
            }["AppInner.useCallback[reconcileFetchedProjects]"]);
            return true;
        }
    }["AppInner.useCallback[reconcileFetchedProjects]"], []);
    // Propagate the Privacy toggle through to PostHog without a reload —
    // posthog-js's opt_out_capturing flips a localStorage flag that makes
    // every subsequent capture() a no-op. When the user opts back in we
    // call opt_in_capturing to resume.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            analytics.setConsent(config.telemetry?.metrics === true);
        }
    }["AppInner.useEffect"], [
        analytics.setConsent,
        config.telemetry?.metrics
    ]);
    // Sync PostHog's distinct_id with the anonymous installationId, both on
    // first opt-in (when the daemon stamps a fresh id) and on Delete-my-data
    // rotation (when PrivacySection.tsx generates a new one). posthog-js
    // caches the previous id in localStorage; identify() alone would stitch
    // the two ids together, so applyIdentity() does reset() first to
    // guarantee the new session is fully decoupled from the deleted one.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (config.telemetry?.metrics !== true) return;
            analytics.setIdentity(config.installationId ?? null);
        }
    }["AppInner.useEffect"], [
        analytics.setIdentity,
        config.installationId,
        config.telemetry?.metrics
    ]);
    // App-level AMR sign-in state — declared here because the configure
    // globals effect below reads it; the sync effects live next to the
    // other AMR plumbing further down.
    const [amrLoginStatus, setAmrLoginStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // v2 analytics requires every event to carry the configure-state
    // triplet (has_available_configure_cli / configure_type /
    // configure_availability). We push it into the PostHog global register
    // whenever the user's execution-mode config or the detected agent list
    // changes; the next capture inherits the fresh values, so dashboards
    // can segment by execution setup without per-helper boilerplate.
    //
    // Gated on `agentsLoading` so the cold-start probe (`fetchAgentsStream()`
    // lands asynchronously after this effect's first run) does not stamp
    // the first home/projects/plugins page_view with
    // has_available_configure_cli=false / configure_availability=unavailable
    // on machines that DO have an installed CLI. While the probe is in
    // flight we leave the boot defaults ('unknown'/'unknown') in place,
    // matching what the helper would return for an empty agent list with
    // no mode pinned.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (agentsLoading) return;
            const byokConfigured = ({
                "AppInner.useEffect.byokConfigured": ()=>{
                    const protocols = config.apiProtocolConfigs;
                    if (!protocols) return Boolean(config.apiKey?.trim());
                    return Object.values(protocols).some({
                        "AppInner.useEffect.byokConfigured": (cfg)=>Boolean(cfg?.apiKey?.trim())
                    }["AppInner.useEffect.byokConfigured"]);
                }
            })["AppInner.useEffect.byokConfigured"]();
            const globals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveConfigureGlobals"])({
                mode: config.mode,
                agentId: config.agentId,
                agents: agents.map({
                    "AppInner.useEffect.globals": (a)=>({
                            id: a.id,
                            available: a.available
                        })
                }["AppInner.useEffect.globals"]),
                byokConfigured,
                amrAuthorized: amrLoginStatus?.loggedIn === true
            });
            analytics.setConfigureGlobals(globals);
        }
    }["AppInner.useEffect"], [
        analytics.setConfigureGlobals,
        agentsLoading,
        amrLoginStatus,
        config.mode,
        config.agentId,
        config.apiKey,
        config.apiProtocolConfigs,
        agents
    ]);
    // Sync theme preference to the <html> element so CSS variables pick it up.
    // useLayoutEffect (vs useEffect) fires before the browser paints, so a
    // live theme switch in Settings applies atomically — no 1-frame flash of
    // the old theme. Safe here because the component tree is ssr:false.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "AppInner.useLayoutEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAppearanceToDocument"])({
                theme: config.theme ?? 'system',
                accentColor: config.accentColor
            });
        }
    }["AppInner.useLayoutEffect"], [
        config.theme,
        config.accentColor
    ]);
    // Tell the daemon what the user is currently looking at, so the MCP
    // server can surface it as `get_active_context` to a coding agent in
    // another repo. Best-effort fire-and-forget; the daemon holds it in
    // memory with a short TTL and the MCP layer falls back to
    // {active:false} if this hasn't run.
    const activeProjectId = route.kind === 'project' ? route.projectId : null;
    const activeFileName = route.kind === 'project' ? route.fileName : null;
    // Gate the privacy banner on three things:
    //   1. Daemon config has hydrated (privacyDecisionAt is daemon-owned).
    //   2. The user has not yet made a privacy decision.
    //   3. Onboarding is complete (Skip and design-system creation both flip
    //      onboardingCompleted to true; see handleCompleteOnboarding wiring).
    // Once onboarding is done the banner is allowed on any route — including
    // the project view the design-system finish path drops the user into, so
    // they can read and acknowledge the disclosure while the first generation
    // is running. Settings is irrelevant to visibility; the banner sits above
    // the modal-backdrop layer in index.css so opening Settings does not hide
    // it.
    const showPrivacyConsent = daemonConfigLoaded && config.privacyDecisionAt == null && config.onboardingCompleted === true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            const body = activeProjectId ? {
                projectId: activeProjectId,
                fileName: activeFileName
            } : {
                active: false
            };
            fetch('/api/active', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).catch({
                "AppInner.useEffect": ()=>{
                // Daemon down or transient network — not worth surfacing.
                }
            }["AppInner.useEffect"]);
        }
    }["AppInner.useEffect"], [
        activeProjectId,
        activeFileName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (!daemonLive) return;
            let cancelled = false;
            let timer = null;
            const pollGeneration = amrPollGenerationRef.current + 1;
            amrPollGenerationRef.current = pollGeneration;
            const pollDelayMs = 1_000;
            const maxPresetPolls = 10;
            let presetPolls = 0;
            const applyAmrModels = {
                "AppInner.useEffect.applyAmrModels": async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAmrModels"])();
                    if (cancelled || amrPollGenerationRef.current !== pollGeneration || !result || !Array.isArray(result.models) || result.models.length === 0) {
                        return;
                    }
                    amrModelsRef.current = result;
                    setAgents({
                        "AppInner.useEffect.applyAmrModels": (current)=>mergeAmrModelsIntoAgents(current, result)
                    }["AppInner.useEffect.applyAmrModels"]);
                    const shouldPollPreset = result.source === 'preset' && !result.remoteError && presetPolls < maxPresetPolls;
                    if (shouldPollPreset) {
                        presetPolls += 1;
                        timer = window.setTimeout({
                            "AppInner.useEffect.applyAmrModels": ()=>{
                                void applyAmrModels();
                            }
                        }["AppInner.useEffect.applyAmrModels"], pollDelayMs);
                    }
                }
            }["AppInner.useEffect.applyAmrModels"];
            void applyAmrModels();
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                    if (timer !== null) window.clearTimeout(timer);
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        amrPollRestartToken,
        daemonLive
    ]);
    // App-level AMR sign-in state. Feeds two analytics globals: the
    // `amr` configure_type bucket (deriveConfigureGlobals below) and the
    // `user_id` public param (the AMR account id is the only join key
    // between this PostHog project and the AMR-side one). Child surfaces
    // push status changes up via onAmrLoginStatusChange; the global
    // AMR_LOGIN_STATUS_EVENT covers logins finishing in surfaces that
    // unmounted before their poll settled.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            let cancelled = false;
            const sync = {
                "AppInner.useEffect.sync": async ()=>{
                    const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])();
                    if (!cancelled && status) setAmrLoginStatus(status);
                }
            }["AppInner.useEffect.sync"];
            void sync();
            const onStatusEvent = {
                "AppInner.useEffect.onStatusEvent": ()=>{
                    void sync();
                }
            }["AppInner.useEffect.onStatusEvent"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], onStatusEvent);
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], onStatusEvent);
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        daemonLive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            analytics.setUserId(amrLoginStatus?.loggedIn === true ? amrLoginStatus.user?.id ?? null : null);
        }
    }["AppInner.useEffect"], [
        analytics.setUserId,
        amrLoginStatus
    ]);
    const handleAmrLoginStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleAmrLoginStatusChange]": (status)=>{
            if (status) setAmrLoginStatus(status);
            if (status?.loggedIn !== true) return;
            restartAmrPolling();
        }
    }["AppInner.useCallback[handleAmrLoginStatusChange]"], [
        restartAmrPolling
    ]);
    // Bootstrap — detect daemon, then fan out independent fetches so each
    // entry-view tab can render the moment its own data lands. Earlier this
    // was one Promise.all behind a global "Loading workspace…" placeholder,
    // which made the slowest endpoint (typically `/api/agents` on cold start)
    // gate every tab including the ones that don't need agents at all.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            let cancelled = false;
            const agentStreamAbort = new AbortController();
            ({
                "AppInner.useEffect": async ()=>{
                    const alive = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daemonIsLive"])();
                    if (cancelled) return;
                    setDaemonLive(alive);
                    if (!alive) {
                        // No daemon — clear every loading flag so empty states render
                        // instead of the entry view sitting on indefinite spinners.
                        setAgentsLoading(false);
                        setSkillsLoading(false);
                        setDsLoading(false);
                        setProjectsLoading(false);
                        setPromptTemplatesLoading(false);
                        setDaemonConfigLoaded(true);
                        // Composio hydration also depends on the daemon. With no daemon
                        // we just keep whatever localStorage already held; drop the
                        // skeleton so the Settings → Connectors input reflects state.
                        setComposioConfigLoading(false);
                        return;
                    }
                    const agentRequestId = beginAgentStreamRequest();
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAgentsStream"])({
                        signal: agentStreamAbort.signal,
                        onAgent: {
                            "AppInner.useEffect": (agent)=>{
                                if (cancelled || !isCurrentAgentStreamRequest(agentRequestId)) return;
                                setAgents({
                                    "AppInner.useEffect": (current)=>mergeAmrModelsIntoAgents(upsertAgent(current, agent), amrModelsRef.current)
                                }["AppInner.useEffect"]);
                            }
                        }["AppInner.useEffect"]
                    }).then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled || !isCurrentAgentStreamRequest(agentRequestId)) return;
                            setAgents(mergeAmrModelsIntoAgents(orderAgentsByRegistry(list), amrModelsRef.current));
                        }
                    }["AppInner.useEffect"]).catch({
                        "AppInner.useEffect": (err)=>{
                            if (cancelled || isAbortError(err) || !isCurrentAgentStreamRequest(agentRequestId)) {
                                return;
                            }
                            setAgents([]);
                        }
                    }["AppInner.useEffect"]).finally({
                        "AppInner.useEffect": ()=>{
                            if (cancelled || !isCurrentAgentStreamRequest(agentRequestId)) return;
                            setAgentsLoading(false);
                        }
                    }["AppInner.useEffect"]);
                    // Functional skills + design templates land independently. Both
                    // gate `skillsLoading` together so the EntryView stops rendering
                    // its loader once both registries respond — neither tab would have
                    // a complete picture if we cleared the flag on the first reply.
                    let functionalReady = false;
                    let templatesReady = false;
                    const maybeClearLoading = {
                        "AppInner.useEffect.maybeClearLoading": ()=>{
                            if (functionalReady && templatesReady) setSkillsLoading(false);
                        }
                    }["AppInner.useEffect.maybeClearLoading"];
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSkills"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            setSkills(list);
                            functionalReady = true;
                            maybeClearLoading();
                        }
                    }["AppInner.useEffect"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignTemplates"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            setDesignTemplates(list);
                            templatesReady = true;
                            maybeClearLoading();
                        }
                    }["AppInner.useEffect"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystems"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            setDesignSystems(list);
                            setDsLoading(false);
                        }
                    }["AppInner.useEffect"]);
                    const request = beginProjectListRequest();
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            reconcileFetchedProjects(list, request);
                            setProjectsLoading(false);
                        }
                    }["AppInner.useEffect"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listTemplates"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            setTemplates(list);
                        }
                    }["AppInner.useEffect"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPromptTemplates"])().then({
                        "AppInner.useEffect": (list)=>{
                            if (cancelled) return;
                            setPromptTemplates(list);
                            setPromptTemplatesLoading(false);
                        }
                    }["AppInner.useEffect"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAppVersionInfo"])().then({
                        "AppInner.useEffect": (info)=>{
                            if (cancelled) return;
                            setAppVersionInfo(info);
                        }
                    }["AppInner.useEffect"]);
                    // Daemon-persisted config + composio config + media provider config land
                    // together so the welcome-modal decision and daemon-backed settings
                    // apply in one merge, avoiding a flash where local-only state is shown
                    // before daemon overrides it.
                    void Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDaemonConfig"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchComposioConfigFromDaemon"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMediaProvidersFromDaemon"])()
                    ]).then({
                        "AppInner.useEffect": ([daemonConfig, daemonComposioConfig, daemonMediaProvidersResult])=>{
                            if (cancelled) return;
                            const daemonMediaProvidersLoaded = daemonMediaProvidersResult.status === 'ok' ? daemonMediaProvidersResult.providers : null;
                            setDaemonMediaProviders(daemonMediaProvidersLoaded);
                            setDaemonMediaProvidersFetchState(daemonMediaProvidersResult.status);
                            setMediaProvidersNotice(daemonMediaProvidersResult.status === 'error' ? t('settings.mediaProviderLoadError') : null);
                            // Compute the next config outside the setConfig updater so we can
                            // both (a) call navigate() after setConfig returns — calling it
                            // inside the updater would trigger a Router setState during React's
                            // render phase — and (b) read next.onboardingCompleted synchronously,
                            // since React batches setConfig and the updater doesn't run until
                            // the next render. latestPersistedConfigRef is kept in sync with
                            // the rendered config and is safe to read here.
                            const baseConfig = latestPersistedConfigRef.current;
                            const migratedLocalMediaProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSyncLocalMediaProvidersToDaemon"])(baseConfig.mediaProviders, daemonMediaProvidersLoaded);
                            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDaemonMediaProviders"])(clearStaleAmrModelChoiceOnProfileChange(baseConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDaemonConfig"])(baseConfig, daemonConfig)), daemonMediaProvidersLoaded);
                            const hasLocalComposioKey = Boolean(next.composio?.apiKey?.trim());
                            if (!hasLocalComposioKey && daemonComposioConfig) {
                                next.composio = daemonComposioConfig;
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                            if (daemonMediaProvidersResult.status === 'ok' && migratedLocalMediaProviders && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasAnyConfiguredProvider"])(next.mediaProviders)) {
                                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncMediaProvidersToDaemon"])(next.mediaProviders, {
                                    daemonProviders: daemonMediaProvidersLoaded
                                });
                            }
                            // Migrate localStorage prefs to daemon on first boot with the new
                            // endpoint. If daemon already had values the merge above used them;
                            // writing back is idempotent and keeps both sides in sync.
                            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
                            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncComposioConfigToDaemon"])(next.composio);
                            latestPersistedConfigRef.current = next;
                            setConfig(next);
                            // Route first-run users through the global onboarding panel.
                            // The onboarding panel and the privacy banner have independent
                            // lifecycles: onboarding keys off `onboardingCompleted`, the
                            // banner keys off `privacyDecisionAt`. They may coexist on the
                            // first launch; the banner sits above the modal layer so it
                            // stays actionable regardless of the active view.
                            if (!next.onboardingCompleted) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                                    kind: 'home',
                                    view: 'onboarding'
                                }, {
                                    replace: true
                                });
                            }
                            setDaemonConfigLoaded(true);
                            // Composio key hydration is part of this same daemon-config
                            // fetch — by the time we land here the daemon has either
                            // returned the saved-key shape (apiKeyConfigured + tail) or
                            // it errored and we kept whatever localStorage held. Either
                            // way it is safe to drop the skeleton.
                            setComposioConfigLoading(false);
                        }
                    }["AppInner.useEffect"]);
                }
            })["AppInner.useEffect"]();
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                    agentStreamAbort.abort();
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        beginAgentStreamRequest,
        beginProjectListRequest,
        isCurrentAgentStreamRequest,
        reconcileFetchedProjects
    ]);
    // Auto-pick the first available agent once both the daemon-stored config
    // and the agents listing have landed. Splitting this out of bootstrap
    // avoids racing the local-config initial value against a slow agents
    // probe — by the time this runs, daemonConfig has already overlaid the
    // user's previous choice, so we only fill an empty slot.
    //
    // First-run onboarding is the one time we must NOT do this: the onboarding
    // flow is the sole authority for the initial agent pick (AMR is the
    // recommended default there), and AMR (vela) detection is asynchronous. If
    // this fallback fires during onboarding while AMR is still being detected it
    // snaps the slot to the registry-first *detected* agent (Claude) and
    // persists it to the daemon, which then races and clobbers the user's AMR
    // selection on the next launch. Gate on onboardingCompleted so this only
    // backfills an empty slot for returning users.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (!daemonConfigLoaded || agentsLoading) return;
            if (config.onboardingCompleted !== true) return;
            if (config.agentId) return;
            const firstAvailable = agents.find({
                "AppInner.useEffect.firstAvailable": (a)=>a.available
            }["AppInner.useEffect.firstAvailable"]);
            if (!firstAvailable) return;
            setConfig({
                "AppInner.useEffect": (prev)=>{
                    if (prev.agentId) return prev;
                    const next = {
                        ...prev,
                        agentId: firstAvailable.id
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
                    return next;
                }
            }["AppInner.useEffect"]);
        }
    }["AppInner.useEffect"], [
        daemonConfigLoaded,
        agentsLoading,
        agents,
        config.agentId,
        config.onboardingCompleted
    ]);
    // Auto-pick the default design system the same way — only after daemon
    // config has merged so we never overwrite a daemon-stored selection.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (!daemonConfigLoaded || dsLoading) return;
            if (config.designSystemId) return;
            if (designSystems.length === 0) return;
            const id = designSystems.find({
                "AppInner.useEffect": (d)=>d.id === 'default'
            }["AppInner.useEffect"])?.id ?? designSystems[0].id;
            setConfig({
                "AppInner.useEffect": (prev)=>{
                    if (prev.designSystemId) return prev;
                    const next = {
                        ...prev,
                        designSystemId: id
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
                    return next;
                }
            }["AppInner.useEffect"]);
        }
    }["AppInner.useEffect"], [
        daemonConfigLoaded,
        dsLoading,
        designSystems,
        config.designSystemId
    ]);
    // One-shot self-healing migration for pets adopted before the
    // overlay learned atlas-row switching. If the stored pet is a
    // custom / codex pet whose imageUrl is a single-row strip
    // (no atlas), we silently re-download the full spritesheet so
    // hover, drag, and idle-ambient variety all light up on next render.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            let cancelled = false;
            void ({
                "AppInner.useEffect": async ()=>{
                    const upgraded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["migrateCustomPetAtlas"])(config);
                    if (!upgraded || cancelled) return;
                    setConfig({
                        "AppInner.useEffect": (prev)=>{
                            if (!prev.pet) return prev;
                            const next = {
                                ...prev,
                                pet: {
                                    ...prev.pet,
                                    custom: upgraded
                                }
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                            return next;
                        }
                    }["AppInner.useEffect"]);
                }
            })["AppInner.useEffect"]();
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                }
            })["AppInner.useEffect"];
        // Snapshot the config at mount; migration is one-shot per session
        // and should not re-run every time config changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AppInner.useEffect"], []);
    const refreshProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshProjects]": async ()=>{
            const request = beginProjectListRequest();
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])();
            reconcileFetchedProjects(list, request);
        }
    }["AppInner.useCallback[refreshProjects]"], [
        beginProjectListRequest,
        reconcileFetchedProjects
    ]);
    const refreshProjectsStrict = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshProjectsStrict]": async ()=>{
            const request = beginProjectListRequest();
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])({
                throwOnError: true
            });
            reconcileFetchedProjects(list, request);
        }
    }["AppInner.useCallback[refreshProjectsStrict]"], [
        beginProjectListRequest,
        reconcileFetchedProjects
    ]);
    const refreshDesignSystems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshDesignSystems]": async ()=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystems"])();
            setDesignSystems(list);
        }
    }["AppInner.useCallback[refreshDesignSystems]"], []);
    const refreshSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshSkills]": async ()=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSkills"])();
            setSkills(list);
        }
    }["AppInner.useCallback[refreshSkills]"], []);
    const refreshTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshTemplates]": async ()=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listTemplates"])();
            setTemplates(list);
        }
    }["AppInner.useCallback[refreshTemplates]"], []);
    const handleDeleteTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleDeleteTemplate]": async (id)=>{
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTemplate"])(id);
            if (ok) await refreshTemplates();
            return ok;
        }
    }["AppInner.useCallback[handleDeleteTemplate]"], [
        refreshTemplates
    ]);
    const reloadMediaProvidersFromDaemon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[reloadMediaProvidersFromDaemon]": async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMediaProvidersFromDaemon"])();
            if (result.status !== 'ok') {
                setDaemonMediaProvidersFetchState('error');
                setMediaProvidersNotice(t('settings.mediaProviderLoadError'));
                return null;
            }
            setDaemonMediaProviders(result.providers);
            setDaemonMediaProvidersFetchState('ok');
            setMediaProvidersNotice(null);
            setConfig({
                "AppInner.useCallback[reloadMediaProvidersFromDaemon]": (prev)=>{
                    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDaemonMediaProviders"])(prev, result.providers);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(merged);
                    return merged;
                }
            }["AppInner.useCallback[reloadMediaProvidersFromDaemon]"]);
            return result.providers;
        }
    }["AppInner.useCallback[reloadMediaProvidersFromDaemon]"], []);
    /**
   * Autosave-driven persistence path. The settings dialog calls this on
   * every committed edit (via a debounced effect) so localStorage and
   * the daemon stay in lock-step with the user's draft. We deliberately
   * do NOT touch the Composio secret here — it has its own gesture
   * (handleConfigPersistComposioKey) so partial keys never leave the
   * browser. Onboarding is also left alone; the dialog's close path
   * is the canonical "I'm done" signal.
   */ const handleConfigPersist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleConfigPersist]": async (next, options)=>{
            // Strip the in-flight Composio secret before anything hits disk so
            // a half-typed key can't survive in localStorage. If the dialog is
            // closing, preserve any onboarding completion that the close gesture
            // already committed so an unmount autosave cannot re-open the welcome flow.
            const persisted = buildPersistedConfig(next, configRef.current);
            latestPersistedConfigRef.current = persisted;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(persisted);
            setConfig(persisted);
            const shouldSyncMediaProviders = daemonMediaProvidersFetchState === 'ok' && shouldSyncMediaProvidersOnSave(persisted.mediaProviders, {
                force: options?.forceMediaProviderSync
            });
            await Promise.all([
                shouldSyncMediaProviders ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncMediaProvidersToDaemon"])(persisted.mediaProviders, {
                    force: options?.forceMediaProviderSync,
                    daemonProviders: daemonMediaProviders,
                    throwOnError: options?.forceMediaProviderSync
                }) : Promise.resolve(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(persisted, {
                    throwOnError: true
                })
            ]);
        }
    }["AppInner.useCallback[handleConfigPersist]"], [
        daemonMediaProviders,
        daemonMediaProvidersFetchState
    ]);
    /**
   * Explicit Composio API-key save. Called from the section-local
   * "Save key" button so secrets never ride the autosave keystroke
   * loop. Once the daemon confirms, we normalize the saved config
   * (strip the secret, store apiKeyConfigured + apiKeyTail) and feed
   * it back into local state so the saved-key badge appears.
   */ const handleConfigPersistComposioKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleConfigPersistComposioKey]": async (composio)=>{
            const next = await persistComposioConfigChange(config, composio);
            setConfig({
                "AppInner.useCallback[handleConfigPersistComposioKey]": (curr)=>{
                    const merged = {
                        ...curr,
                        composio: next.composio
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(merged);
                    return merged;
                }
            }["AppInner.useCallback[handleConfigPersistComposioKey]"]);
        }
    }["AppInner.useCallback[handleConfigPersistComposioKey]"], [
        config
    ]);
    const handleModeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleModeChange]": (mode)=>{
            const next = {
                ...config,
                mode
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleModeChange]"], [
        config
    ]);
    // Quick theme switch from the settings dropdown in the entry view.
    // Skips the full SettingsDialog round-trip so the appearance flip
    // feels instantaneous; the live preview comes for free because the
    // `useLayoutEffect` above re-runs `applyAppearanceToDocument` the
    // moment `config.theme` changes. We still persist to localStorage
    // and the daemon so the choice survives reloads.
    const handleThemeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleThemeChange]": (theme)=>{
            const next = {
                ...config,
                theme
            };
            // Apply to the DOM synchronously inside the click handler so the theme
            // flips instantly. Otherwise the visible switch waits on the (heavier)
            // React re-render of the whole tree before the layout effect re-applies
            // it — which reads as a perceptible lag after the click.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAppearanceToDocument"])({
                theme: theme ?? 'system',
                accentColor: config.accentColor
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleThemeChange]"], [
        config
    ]);
    const handleAgentChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleAgentChange]": (agentId)=>{
            const next = {
                ...config,
                agentId
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleAgentChange]"], [
        config
    ]);
    const handleAgentModelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleAgentModelChange]": (agentId, choice)=>{
            const prev = config.agentModels?.[agentId] ?? {};
            const merged = {
                ...prev,
                ...choice
            };
            const nextAgentModels = {
                ...config.agentModels ?? {},
                [agentId]: merged
            };
            const next = {
                ...config,
                agentModels: nextAgentModels
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleAgentModelChange]"], [
        config
    ]);
    // BYOK protocol switch — also flips `mode` to 'api' so the user does
    // not have to take a second step after picking a provider from the
    // inline switcher. The helper preserves any per-protocol fields the
    // user had previously configured for the target protocol.
    const handleApiProtocolChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleApiProtocolChange]": (protocol)=>{
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["switchApiProtocolConfig"])(config, protocol);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleApiProtocolChange]"], [
        config
    ]);
    // BYOK model picker — patches `model` (and the per-protocol shadow
    // copy) without touching apiKey/baseUrl so the user can swap models
    // mid-session without retyping their key.
    const handleApiModelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleApiModelChange]": (model)=>{
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateCurrentApiProtocolConfig"])(config, {
                model
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleApiModelChange]"], [
        config
    ]);
    const handleChangeDefaultDesignSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleChangeDefaultDesignSystem]": (designSystemId)=>{
            const next = {
                ...config,
                designSystemId
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleChangeDefaultDesignSystem]"], [
        config
    ]);
    const refreshAgents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[refreshAgents]": async (options)=>{
            if (options && Object.prototype.hasOwnProperty.call(options, 'agentCliEnv')) {
                const nextConfig = clearStaleAmrModelChoiceOnProfileChange(config, {
                    ...config,
                    agentCliEnv: options.agentCliEnv ?? {}
                });
                amrModelsRef.current = null;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(nextConfig);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(nextConfig);
                setConfig(nextConfig);
            }
            const agentRequestId = beginAgentStreamRequest();
            setAgentsLoading(true);
            try {
                const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAgentsStream"])({
                    onAgent: {
                        "AppInner.useCallback[refreshAgents]": (agent)=>{
                            if (!isCurrentAgentStreamRequest(agentRequestId)) return;
                            setAgents({
                                "AppInner.useCallback[refreshAgents]": (current)=>mergeAmrModelsIntoAgents(upsertAgent(current, agent), amrModelsRef.current)
                            }["AppInner.useCallback[refreshAgents]"]);
                        }
                    }["AppInner.useCallback[refreshAgents]"]
                });
                const ordered = orderAgentsByRegistry(next);
                if (isCurrentAgentStreamRequest(agentRequestId)) {
                    setAgents(mergeAmrModelsIntoAgents(ordered, amrModelsRef.current));
                    setAgentsLoading(false);
                }
                return ordered;
            } catch (err) {
                if (!isCurrentAgentStreamRequest(agentRequestId)) return [];
                setAgentsLoading(false);
                if (options?.throwOnError) throw err;
                setAgents([]);
                return [];
            }
        }
    }["AppInner.useCallback[refreshAgents]"], [
        beginAgentStreamRequest,
        config,
        isCurrentAgentStreamRequest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (!daemonLive || agentsLoading) return;
            const refreshIfDue = {
                "AppInner.useEffect.refreshIfDue": ()=>{
                    if (document.visibilityState === 'hidden') return;
                    const now = Date.now();
                    if (now - agentFocusRefreshLastRunRef.current < AGENT_FOCUS_REFRESH_THROTTLE_MS) return;
                    agentFocusRefreshLastRunRef.current = now;
                    void refreshAgents();
                }
            }["AppInner.useEffect.refreshIfDue"];
            const handleVisibilityChange = {
                "AppInner.useEffect.handleVisibilityChange": ()=>{
                    if (document.visibilityState === 'visible') refreshIfDue();
                }
            }["AppInner.useEffect.handleVisibilityChange"];
            window.addEventListener('focus', refreshIfDue);
            document.addEventListener('visibilitychange', handleVisibilityChange);
            return ({
                "AppInner.useEffect": ()=>{
                    window.removeEventListener('focus', refreshIfDue);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        agentsLoading,
        daemonLive,
        refreshAgents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            const handleAppConfigChanged = {
                "AppInner.useEffect.handleAppConfigChanged": ()=>{
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDaemonConfig"])().then({
                        "AppInner.useEffect.handleAppConfigChanged": (daemonConfig)=>{
                            const next = clearStaleAmrModelChoiceOnProfileChange(latestPersistedConfigRef.current, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDaemonConfig"])(latestPersistedConfigRef.current, daemonConfig));
                            latestPersistedConfigRef.current = next;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                            setConfig(next);
                            amrModelsRef.current = null;
                            restartAmrPolling();
                            void refreshAgents();
                        }
                    }["AppInner.useEffect.handleAppConfigChanged"]);
                }
            }["AppInner.useEffect.handleAppConfigChanged"];
            window.addEventListener(APP_CONFIG_CHANGED_EVENT, handleAppConfigChanged);
            return ({
                "AppInner.useEffect": ()=>window.removeEventListener(APP_CONFIG_CHANGED_EVENT, handleAppConfigChanged)
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        refreshAgents,
        restartAmrPolling
    ]);
    const handleCreateProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleCreateProject]": async (input)=>{
            // Honor an explicit `null` design system — the create panel defaults
            // to "None" for every kind now, and the user expects that to land
            // as a no-design-system project rather than silently inheriting the
            // workspace default.
            const derivedPendingPrompt = input.pendingPrompt ?? (input.metadata?.promptTemplate?.prompt?.trim() || undefined);
            const kind = input.metadata?.kind ?? null;
            const fidelity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fidelityToTracking"])(input.metadata?.fidelity ?? null);
            const creationSource = kind === 'template' ? 'template' : 'blank';
            let result;
            try {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProject"])({
                    name: input.name,
                    skillId: input.skillId,
                    designSystemId: input.designSystemId,
                    pendingPrompt: derivedPendingPrompt,
                    metadata: input.metadata,
                    ...input.conversationMode ? {
                        conversationMode: input.conversationMode
                    } : {},
                    ...input.pluginId ? {
                        pluginId: input.pluginId
                    } : {},
                    ...input.appliedPluginSnapshotId ? {
                        appliedPluginSnapshotId: input.appliedPluginSnapshotId
                    } : {},
                    ...input.pluginInputs ? {
                        pluginInputs: input.pluginInputs
                    } : {}
                });
            } catch (err) {
                const errorCode = err instanceof Error && err.message.trim() ? err.message : 'CREATE_REQUEST_FAILED';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectCreateResult"])(analytics.track, {
                    page_name: 'home',
                    area: 'new_project',
                    project_source: 'create_button',
                    project_id: null,
                    project_kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(kind),
                    fidelity,
                    result: 'failed',
                    error_code: errorCode
                }, {
                    requestId: input.requestId
                });
                throw err;
            }
            if (!result) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectCreateResult"])(analytics.track, {
                    page_name: 'home',
                    area: 'new_project',
                    project_source: 'create_button',
                    project_id: null,
                    project_kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(kind, input.metadata?.videoModel),
                    fidelity,
                    ...input.pluginId ? {
                        plugin_id: input.pluginId
                    } : {},
                    ...input.pluginType ? {
                        plugin_type: input.pluginType
                    } : {},
                    result: 'failed',
                    error_code: 'CREATE_REQUEST_FAILED'
                }, {
                    requestId: input.requestId
                });
                return false;
            }
            const pendingFiles = Array.isArray(input.pendingFiles) ? input.pendingFiles.filter({
                "AppInner.useCallback[handleCreateProject]": (file)=>file instanceof File
            }["AppInner.useCallback[handleCreateProject]"]) : [];
            // Flip the project onto the user-picked working directory BEFORE
            // uploading staged Home attachments. `replaceProjectWorkingDir` changes
            // `metadata.baseDir`, so the project starts reading from the external
            // folder. If we uploaded first, the staged files would land in the
            // temporary managed `.od/projects/<id>` root and then silently vanish
            // from Design Files and the first auto-send context once the working
            // dir flips. Doing the handoff first means the initial upload lands in
            // the final tree.
            const userWorkingDir = input.metadata?.userWorkingDir;
            let workingDirHandoffFailed = false;
            if (userWorkingDir) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceProjectWorkingDir"])(result.project.id, userWorkingDir, input.userWorkingDirToken);
                } catch (err) {
                    // The desktop working-dir token is short-lived (~60s TTL); if the
                    // user lingered on Home or the POST was otherwise rejected, the
                    // handoff fails AFTER the project already exists. Do NOT swallow
                    // this and do NOT proceed: uploading staged attachments or
                    // auto-sending the first message would target the managed
                    // `.od/projects/<id>` root the user did not choose. Mark the
                    // handoff as failed so the upload + auto-send branches below are
                    // skipped, then surface a create-time error so the user can
                    // re-pick the working directory from inside the project.
                    console.warn('Failed to set working directory for new project', userWorkingDir, err);
                    workingDirHandoffFailed = true;
                    setWorkingDirError(`Couldn't apply the chosen folder "${userWorkingDir}". The project was created in the default location — re-pick the working directory from the project before uploading files or sending a message.`);
                }
            }
            let firstMessageAttachments = [];
            if (!workingDirHandoffFailed && pendingFiles.length > 0) {
                // Home composer attaches stay client-side until submit lands a
                // project; the actual upload happens here. v2 doc wants one
                // file_upload_result per surface — `page_name='home'` /
                // `area='chat_composer'` so it's distinguishable from the
                // file_manager Upload button and the chat_panel composer.
                const cohort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveUploadCohort"])(pendingFiles);
                const uploadResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(result.project.id, pendingFiles);
                firstMessageAttachments = uploadResult.uploaded;
                const partial = uploadResult.failed.length > 0;
                if (partial) {
                    console.warn('Some Home attachments failed to upload', uploadResult.failed);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                    page_name: 'home',
                    area: 'chat_composer',
                    project_id: result.project.id,
                    ...cohort,
                    result: partial ? 'failed' : 'success',
                    ...partial && uploadResult.error ? {
                        error_code: uploadResult.error
                    } : {}
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackProjectCreateResult"])(analytics.track, {
                page_name: 'home',
                area: 'new_project',
                project_source: 'create_button',
                project_id: result.project.id,
                project_kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(kind, input.metadata?.videoModel),
                fidelity,
                ...input.pluginId ? {
                    plugin_id: input.pluginId
                } : {},
                ...input.pluginType ? {
                    plugin_type: input.pluginType
                } : {},
                result: 'success'
            }, {
                requestId: input.requestId
            });
            // PluginLoopHome flow: the user already typed (or accepted) the
            // first message on Home. Mark this project so ProjectView fires
            // sendMessage(pendingPrompt) once on mount instead of just
            // pre-filling the composer. Scoped to sessionStorage so a page
            // reload after the run has started does not refire.
            if (!workingDirHandoffFailed && input.autoSendFirstMessage && (derivedPendingPrompt !== undefined || firstMessageAttachments.length > 0)) {
                try {
                    window.sessionStorage.setItem(`od:auto-send-first:${result.project.id}`, '1');
                    if (firstMessageAttachments.length > 0) {
                        window.sessionStorage.setItem(`od:auto-send-attachments:${result.project.id}`, JSON.stringify(firstMessageAttachments));
                    } else {
                        window.sessionStorage.removeItem(`od:auto-send-attachments:${result.project.id}`);
                    }
                } catch  {
                /* sessionStorage may be unavailable (e.g. SSR / private mode); fall
             back to manual send. */ }
            }
            const project = result.appliedPluginSnapshotId ? {
                ...result.project,
                appliedPluginSnapshotId: result.appliedPluginSnapshotId
            } : result.project;
            rememberLocalProject(project.id);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                "AppInner.useCallback[handleCreateProject]": ()=>{
                    setProjects({
                        "AppInner.useCallback[handleCreateProject]": (curr)=>[
                                project,
                                ...curr.filter({
                                    "AppInner.useCallback[handleCreateProject]": (p)=>p.id !== project.id
                                }["AppInner.useCallback[handleCreateProject]"])
                            ]
                    }["AppInner.useCallback[handleCreateProject]"]);
                }
            }["AppInner.useCallback[handleCreateProject]"]);
            const projectRoute = {
                kind: 'project',
                projectId: project.id,
                fileName: null
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$WorkspaceTabsBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWorkspaceTab"])(projectRoute);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])(projectRoute);
            return true;
        }
    }["AppInner.useCallback[handleCreateProject]"], [
        analytics.track,
        rememberLocalProject
    ]);
    const handleCreatePluginShareProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleCreatePluginShareProject]": async (pluginId, action, locale)=>{
            const outcome = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginShareProject"])(pluginId, action, locale);
            if (!outcome.ok) return outcome;
            try {
                window.sessionStorage.setItem(`od:auto-send-first:${outcome.project.id}`, '1');
            } catch  {
            // If sessionStorage is unavailable, the project still opens with
            // the prepared prompt in the composer.
            }
            const project = outcome.appliedPluginSnapshotId ? {
                ...outcome.project,
                appliedPluginSnapshotId: outcome.appliedPluginSnapshotId
            } : outcome.project;
            rememberLocalProject(project.id);
            setProjects({
                "AppInner.useCallback[handleCreatePluginShareProject]": (curr)=>[
                        project,
                        ...curr.filter({
                            "AppInner.useCallback[handleCreatePluginShareProject]": (p)=>p.id !== project.id
                        }["AppInner.useCallback[handleCreatePluginShareProject]"])
                    ]
            }["AppInner.useCallback[handleCreatePluginShareProject]"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: project.id,
                fileName: null
            });
            return outcome;
        }
    }["AppInner.useCallback[handleCreatePluginShareProject]"], [
        rememberLocalProject
    ]);
    const handleImportClaudeDesign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleImportClaudeDesign]": async (file)=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importClaudeDesignZip"])(file);
                rememberLocalProject(result.project.id);
                setProjects({
                    "AppInner.useCallback[handleImportClaudeDesign]": (curr)=>[
                            result.project,
                            ...curr.filter({
                                "AppInner.useCallback[handleImportClaudeDesign]": (p)=>p.id !== result.project.id
                            }["AppInner.useCallback[handleImportClaudeDesign]"])
                        ]
                }["AppInner.useCallback[handleImportClaudeDesign]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: result.project.id,
                    fileName: result.entryFile
                });
                return {
                    ok: true
                };
            } catch (err) {
                return {
                    ok: false,
                    message: err instanceof Error ? err.message : 'The ZIP could not be imported.'
                };
            }
        }
    }["AppInner.useCallback[handleImportClaudeDesign]"], [
        rememberLocalProject
    ]);
    const handleImportFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleImportFolder]": async (baseDir)=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importFolderProject"])({
                baseDir
            });
            rememberLocalProject(result.project.id);
            setProjects({
                "AppInner.useCallback[handleImportFolder]": (curr)=>[
                        result.project,
                        ...curr.filter({
                            "AppInner.useCallback[handleImportFolder]": (p)=>p.id !== result.project.id
                        }["AppInner.useCallback[handleImportFolder]"])
                    ]
            }["AppInner.useCallback[handleImportFolder]"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: result.project.id,
                fileName: null
            });
        }
    }["AppInner.useCallback[handleImportFolder]"], [
        rememberLocalProject
    ]);
    // PR #974: on desktop, the host bridge owns the picker and import POST
    // atomically. The renderer never sees the path, token, or daemon DTO;
    // it receives host-owned project identifiers and refreshes project state
    // through the normal daemon API.
    const handleImportFolderResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleImportFolderResponse]": async (result)=>{
            rememberLocalProject(result.projectId);
            const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(result.projectId);
            if (project != null) {
                setProjects({
                    "AppInner.useCallback[handleImportFolderResponse]": (curr)=>[
                            project,
                            ...curr.filter({
                                "AppInner.useCallback[handleImportFolderResponse]": (p)=>p.id !== project.id
                            }["AppInner.useCallback[handleImportFolderResponse]"])
                        ]
                }["AppInner.useCallback[handleImportFolderResponse]"]);
            } else {
                // Daemon hasn't materialized the full record yet (race between the
                // host's import POST and our /api/projects read). Seed a minimal
                // placeholder so the route stays alive and ProjectView mounts; the
                // pending-local id keeps reconcileFetchedProjects from evicting the
                // stub until a project-list snapshot actually includes it, and the
                // next refresh swaps it for the real Project record. Without the
                // stub, a stale `[]` list response would replace `projects` with `[]`
                // and the route-guard effect would bounce the user back to Home.
                const stub = {
                    id: result.projectId,
                    name: '',
                    skillId: null,
                    designSystemId: null,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                };
                setProjects({
                    "AppInner.useCallback[handleImportFolderResponse]": (curr)=>[
                            stub,
                            ...curr.filter({
                                "AppInner.useCallback[handleImportFolderResponse]": (p)=>p.id !== stub.id
                            }["AppInner.useCallback[handleImportFolderResponse]"])
                        ]
                }["AppInner.useCallback[handleImportFolderResponse]"]);
                const request = beginProjectListRequest();
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])();
                reconcileFetchedProjects(list, request);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: result.projectId,
                fileName: null
            });
        }
    }["AppInner.useCallback[handleImportFolderResponse]"], [
        beginProjectListRequest,
        rememberLocalProject,
        reconcileFetchedProjects
    ]);
    const handleOpenProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleOpenProject]": async (id)=>{
            if (projectsRef.current.some({
                "AppInner.useCallback[handleOpenProject]": (project)=>project.id === id
            }["AppInner.useCallback[handleOpenProject]"])) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: id,
                    fileName: null
                });
                return true;
            }
            try {
                const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(id);
                if (project) {
                    setProjects({
                        "AppInner.useCallback[handleOpenProject]": (curr)=>[
                                project,
                                ...curr.filter({
                                    "AppInner.useCallback[handleOpenProject]": (candidate)=>candidate.id !== project.id
                                }["AppInner.useCallback[handleOpenProject]"])
                            ]
                    }["AppInner.useCallback[handleOpenProject]"]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                        kind: 'project',
                        projectId: id,
                        fileName: null
                    });
                    return true;
                }
                const request = beginProjectListRequest();
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])();
                reconcileFetchedProjects(list, request);
                const fetchedProject = locallyDeletedProjectIdsRef.current.has(id) ? undefined : list.find({
                    "AppInner.useCallback[handleOpenProject]": (candidate)=>candidate.id === id
                }["AppInner.useCallback[handleOpenProject]"]);
                if (fetchedProject) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                        kind: 'project',
                        projectId: id,
                        fileName: null
                    });
                    return true;
                }
            } catch  {
            // Fall through to the same visible missing-project state. The daemon can
            // return 404 or transiently fail while reconciling a deleted backing
            // project; either way the user needs feedback instead of a silent bounce.
            }
            setProjectOpenError(t('project.missing'));
            return false;
        }
    }["AppInner.useCallback[handleOpenProject]"], [
        beginProjectListRequest,
        reconcileFetchedProjects,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (!config.pet?.enabled || !daemonLive) {
                setPetTaskCenter({
                    running: [],
                    queued: [],
                    recent: []
                });
                return;
            }
            let cancelled = false;
            const refresh = {
                "AppInner.useEffect.refresh": async ()=>{
                    const runs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjectRuns"])();
                    if (cancelled) return;
                    setPetTaskCenter((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$taskCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPetTaskCenter"])(projects, runs));
                }
            }["AppInner.useEffect.refresh"];
            const handleRunsChanged = {
                "AppInner.useEffect.handleRunsChanged": ()=>{
                    void refresh();
                }
            }["AppInner.useEffect.handleRunsChanged"];
            void refresh();
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNS_CHANGED_EVENT"], handleRunsChanged);
            const id = window.setInterval(refresh, 2000);
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNS_CHANGED_EVENT"], handleRunsChanged);
                    window.clearInterval(id);
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        config.pet?.enabled,
        daemonLive,
        projects
    ]);
    const handleOpenLiveArtifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleOpenLiveArtifact]": (projectId, artifactId)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId,
                fileName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveArtifactTabId"])(artifactId)
            });
        }
    }["AppInner.useCallback[handleOpenLiveArtifact]"], []);
    const handleDeleteProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleDeleteProject]": async (id)=>{
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProject"])(id);
            if (!ok) return false;
            clearLocalProject(id, {
                deleted: true
            });
            iframeKeepAlivePool.evictProject(id, {
                includeActive: true
            });
            setProjects({
                "AppInner.useCallback[handleDeleteProject]": (curr)=>curr.filter({
                        "AppInner.useCallback[handleDeleteProject]": (p)=>p.id !== id
                    }["AppInner.useCallback[handleDeleteProject]"])
            }["AppInner.useCallback[handleDeleteProject]"]);
            if (route.kind === 'project' && route.projectId === id) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'home'
                });
            }
            return true;
        }
    }["AppInner.useCallback[handleDeleteProject]"], [
        clearLocalProject,
        iframeKeepAlivePool,
        route
    ]);
    const handleRenameProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleRenameProject]": async (id, name)=>{
            const trimmed = name.trim();
            if (!trimmed) return;
            setProjects({
                "AppInner.useCallback[handleRenameProject]": (curr)=>curr.map({
                        "AppInner.useCallback[handleRenameProject]": (p)=>p.id === id ? {
                                ...p,
                                name: trimmed
                            } : p
                    }["AppInner.useCallback[handleRenameProject]"])
            }["AppInner.useCallback[handleRenameProject]"]);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(id, {
                name: trimmed
            });
        }
    }["AppInner.useCallback[handleRenameProject]"], []);
    const handleBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleBack]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'home',
                view: 'home'
            });
        }
    }["AppInner.useCallback[handleBack]"], []);
    const handleClearPendingPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleClearPendingPrompt]": ()=>{
            const projectId = route.kind === 'project' ? route.projectId : null;
            if (!projectId) return;
            setProjects({
                "AppInner.useCallback[handleClearPendingPrompt]": (curr)=>curr.map({
                        "AppInner.useCallback[handleClearPendingPrompt]": (p)=>p.id === projectId ? {
                                ...p,
                                pendingPrompt: undefined
                            } : p
                    }["AppInner.useCallback[handleClearPendingPrompt]"])
            }["AppInner.useCallback[handleClearPendingPrompt]"]);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
                pendingPrompt: null
            });
        }
    }["AppInner.useCallback[handleClearPendingPrompt]"], [
        route
    ]);
    const handleTouchProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleTouchProject]": ()=>{
            const projectId = route.kind === 'project' ? route.projectId : null;
            if (!projectId) return;
            const updatedAt = Date.now();
            setProjects({
                "AppInner.useCallback[handleTouchProject]": (curr)=>curr.map({
                        "AppInner.useCallback[handleTouchProject]": (p)=>p.id === projectId ? {
                                ...p,
                                updatedAt
                            } : p
                    }["AppInner.useCallback[handleTouchProject]"])
            }["AppInner.useCallback[handleTouchProject]"]);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
                updatedAt
            });
        }
    }["AppInner.useCallback[handleTouchProject]"], [
        route
    ]);
    const handleProjectChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleProjectChange]": (updated)=>{
            setProjects({
                "AppInner.useCallback[handleProjectChange]": (curr)=>{
                    const previous = curr.find({
                        "AppInner.useCallback[handleProjectChange].previous": (p)=>p.id === updated.id
                    }["AppInner.useCallback[handleProjectChange].previous"]);
                    if (previous && (previous.skillId !== updated.skillId || previous.designSystemId !== updated.designSystemId || previous.customInstructions !== updated.customInstructions)) {
                        iframeKeepAlivePool.evictProject(updated.id, {
                            includeActive: true
                        });
                    }
                    return curr.map({
                        "AppInner.useCallback[handleProjectChange]": (p)=>p.id === updated.id ? updated : p
                    }["AppInner.useCallback[handleProjectChange]"]);
                }
            }["AppInner.useCallback[handleProjectChange]"]);
        }
    }["AppInner.useCallback[handleProjectChange]"], [
        iframeKeepAlivePool
    ]);
    // ProjectView's prompt-context signature derives from SkillSummary /
    // DesignSystemSummary fields, so a body-only registry edit (same name,
    // description, etc.) leaves every signature unchanged and the active
    // preview keeps serving stale prompt context. Settings → Skills /
    // Settings → Design Systems call back through these handlers after
    // every successful mutation; we drop any pool entry whose project
    // depends on the affected id — active or parked — so the next mount
    // recomposes the system prompt with the new body.
    const handleSkillsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleSkillsChanged]": (affectedSkillId)=>{
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSkills"])().then({
                "AppInner.useCallback[handleSkillsChanged]": (list)=>setSkills(list)
            }["AppInner.useCallback[handleSkillsChanged]"]);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignTemplates"])().then({
                "AppInner.useCallback[handleSkillsChanged]": (list)=>setDesignTemplates(list)
            }["AppInner.useCallback[handleSkillsChanged]"]);
            iframeKeepAlivePool.evictMatching({
                "AppInner.useCallback[handleSkillsChanged]": (entry)=>{
                    const proj = projectsRef.current.find({
                        "AppInner.useCallback[handleSkillsChanged].proj": (p)=>p.id === entry.projectId
                    }["AppInner.useCallback[handleSkillsChanged].proj"]);
                    if (!proj) return false;
                    if (affectedSkillId) return proj.skillId === affectedSkillId;
                    return proj.skillId != null;
                }
            }["AppInner.useCallback[handleSkillsChanged]"], {
                includeActive: true
            });
        }
    }["AppInner.useCallback[handleSkillsChanged]"], [
        iframeKeepAlivePool
    ]);
    const handleDesignSystemsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleDesignSystemsChanged]": (affectedDesignSystemId)=>{
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystems"])().then({
                "AppInner.useCallback[handleDesignSystemsChanged]": (list)=>setDesignSystems(list)
            }["AppInner.useCallback[handleDesignSystemsChanged]"]);
            iframeKeepAlivePool.evictMatching({
                "AppInner.useCallback[handleDesignSystemsChanged]": (entry)=>{
                    const proj = projectsRef.current.find({
                        "AppInner.useCallback[handleDesignSystemsChanged].proj": (p)=>p.id === entry.projectId
                    }["AppInner.useCallback[handleDesignSystemsChanged].proj"]);
                    if (!proj) return false;
                    if (affectedDesignSystemId) {
                        return proj.designSystemId === affectedDesignSystemId;
                    }
                    return proj.designSystemId != null;
                }
            }["AppInner.useCallback[handleDesignSystemsChanged]"], {
                includeActive: true
            });
        }
    }["AppInner.useCallback[handleDesignSystemsChanged]"], [
        iframeKeepAlivePool
    ]);
    const handleDesignSystemImportRebuildJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleDesignSystemImportRebuildJob]": (designSystemId, job)=>{
            setPendingDesignSystemRevisionJobs({
                "AppInner.useCallback[handleDesignSystemImportRebuildJob]": (current)=>({
                        ...current,
                        [designSystemId]: job
                    })
            }["AppInner.useCallback[handleDesignSystemImportRebuildJob]"]);
        }
    }["AppInner.useCallback[handleDesignSystemImportRebuildJob]"], []);
    const handleDesignSystemRevisionJobConsumed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleDesignSystemRevisionJobConsumed]": (designSystemId, jobId)=>{
            setPendingDesignSystemRevisionJobs({
                "AppInner.useCallback[handleDesignSystemRevisionJobConsumed]": (current)=>{
                    if (current[designSystemId]?.id !== jobId) return current;
                    const next = {
                        ...current
                    };
                    delete next[designSystemId];
                    return next;
                }
            }["AppInner.useCallback[handleDesignSystemRevisionJobConsumed]"]);
        }
    }["AppInner.useCallback[handleDesignSystemRevisionJobConsumed]"], []);
    const loadedActiveProject = route.kind === 'project' ? projects.find((p)=>p.id === route.projectId) ?? null : null;
    const routeProjectPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[routeProjectPlaceholder]": ()=>{
            if (route.kind !== 'project') return null;
            const now = Date.now();
            return {
                id: route.projectId,
                name: 'Untitled',
                skillId: null,
                designSystemId: null,
                createdAt: now,
                updatedAt: now
            };
        }
    }["AppInner.useMemo[routeProjectPlaceholder]"], [
        route
    ]);
    const activeProject = loadedActiveProject ?? routeProjectPlaceholder;
    // Deep-linked route to a project we don't have yet (e.g. after a refresh
    // that finishes after the project list comes back). Fetch it in the
    // background so the view can render rather than bouncing to home.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (route.kind !== 'project') return;
            if (loadedActiveProject) return;
            if (!projects.length && !daemonLive) return;
            if (projects.some({
                "AppInner.useEffect": (p)=>p.id === route.projectId
            }["AppInner.useEffect"])) return;
            let cancelled = false;
            ({
                "AppInner.useEffect": async ()=>{
                    const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(route.projectId).catch({
                        "AppInner.useEffect": ()=>null
                    }["AppInner.useEffect"]);
                    if (cancelled) return;
                    if (project) {
                        setProjects({
                            "AppInner.useEffect": (curr)=>{
                                const existingIndex = curr.findIndex({
                                    "AppInner.useEffect.existingIndex": (candidate)=>candidate.id === project.id
                                }["AppInner.useEffect.existingIndex"]);
                                if (existingIndex < 0) {
                                    return [
                                        ...curr,
                                        project
                                    ];
                                }
                                return curr.map({
                                    "AppInner.useEffect": (candidate)=>candidate.id === project.id ? project : candidate
                                }["AppInner.useEffect"]);
                            }
                        }["AppInner.useEffect"]);
                        return;
                    }
                    const request = beginProjectListRequest();
                    const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjects"])().catch({
                        "AppInner.useEffect": ()=>[]
                    }["AppInner.useEffect"]);
                    if (cancelled) return;
                    const applied = reconcileFetchedProjects(list, request);
                    if (!applied) return;
                    const fetchedProject = locallyDeletedProjectIdsRef.current.has(route.projectId) ? undefined : list.find({
                        "AppInner.useEffect": (p)=>p.id === route.projectId
                    }["AppInner.useEffect"]);
                    const staleRequest = request.mutationVersion < projectListMutationVersionRef.current;
                    const knownLocalProject = staleRequest && pendingLocalProjectIdsRef.current.has(route.projectId);
                    if (!fetchedProject && !knownLocalProject) {
                        setProjectOpenError(t('project.missing'));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                            kind: 'home',
                            view: 'home'
                        }, {
                            replace: true
                        });
                    }
                }
            })["AppInner.useEffect"]();
            return ({
                "AppInner.useEffect": ()=>{
                    cancelled = true;
                }
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        route,
        loadedActiveProject,
        projects,
        daemonLive,
        beginProjectListRequest,
        reconcileFetchedProjects,
        t
    ]);
    const openSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openSettings]": (section = 'execution', opts)=>{
            if (section === 'composio' || section === 'mcpClient' || section === 'integrations') {
                setIntegrationInitialTab(section === 'composio' ? 'connectors' : section === 'mcpClient' ? 'mcp' : 'use-everywhere');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'integrations'
                });
                return;
            }
            setSettingsWelcome(false);
            setSettingsInitialSection(section);
            setSettingsHighlight(opts?.highlight ?? null);
            setSettingsOpen(true);
        }
    }["AppInner.useCallback[openSettings]"], []);
    // Entry point from the failed-run AMR nudge: open Settings on the execution
    // section and flag the AMR agent card for a one-shot scroll-into-view +
    // highlight (and a sign-in coachmark when not yet authorized).
    const openAmrSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openAmrSettings]": ()=>{
            openSettings('execution', {
                highlight: 'amr'
            });
        }
    }["AppInner.useCallback[openAmrSettings]"], [
        openSettings
    ]);
    const openPetSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openPetSettings]": ()=>{
            setSettingsWelcome(false);
            setSettingsInitialSection('pet');
            setSettingsOpen(true);
        }
    }["AppInner.useCallback[openPetSettings]"], []);
    const openMcpSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openMcpSettings]": ()=>{
            setIntegrationInitialTab('mcp');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'home',
                view: 'integrations'
            });
        }
    }["AppInner.useCallback[openMcpSettings]"], []);
    // The composer "+" menu's "add plugin" / "add connector" rows route to the
    // home plugin-registry / connector-integration surfaces.
    const openPluginRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openPluginRegistry]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'home',
                view: 'plugins'
            });
        }
    }["AppInner.useCallback[openPluginRegistry]"], []);
    const openConnectorIntegrations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[openConnectorIntegrations]": ()=>{
            setIntegrationInitialTab('connectors');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'home',
                view: 'integrations'
            });
        }
    }["AppInner.useCallback[openConnectorIntegrations]"], []);
    const handleCompleteOnboarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleCompleteOnboarding]": ()=>{
            const current = latestPersistedConfigRef.current;
            if (current.onboardingCompleted) return;
            const next = {
                ...current,
                onboardingCompleted: true
            };
            latestPersistedConfigRef.current = next;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            setConfig(next);
        }
    }["AppInner.useCallback[handleCompleteOnboarding]"], []);
    // Cmd+, (mac) / Ctrl+, (win/linux) opens Settings. Capture phase so we
    // beat the browser's default Preferences dialog. Platform-gated so
    // meta/ctrl don't conflict across OS.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            const onKeyDown = {
                "AppInner.useEffect.onKeyDown": (e)=>{
                    const primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacPlatform"])() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
                    if (primary && !e.shiftKey && !e.altKey && e.key === ',') {
                        if (e.isComposing) return;
                        e.preventDefault();
                        openSettings();
                    }
                }
            }["AppInner.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown, {
                capture: true
            });
            return ({
                "AppInner.useEffect": ()=>window.removeEventListener('keydown', onKeyDown, {
                        capture: true
                    })
            })["AppInner.useEffect"];
        }
    }["AppInner.useEffect"], [
        openSettings
    ]);
    // Explicit enabled toggle — true = wake, false = tuck. Persists to
    // localStorage so the overlay state survives across reloads. We keep
    // `adopted` untouched so the entry-view CTA does not regress to
    // "adopt me" once the user has already chosen.
    const handleSetPetEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleSetPetEnabled]": (enabled)=>{
            setConfig({
                "AppInner.useCallback[handleSetPetEnabled]": (curr)=>{
                    const prev = curr.pet ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"];
                    const next = {
                        ...curr,
                        pet: {
                            ...prev,
                            enabled
                        }
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                    return next;
                }
            }["AppInner.useCallback[handleSetPetEnabled]"]);
        }
    }["AppInner.useCallback[handleSetPetEnabled]"], []);
    const handleTuckPet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleTuckPet]": ()=>handleSetPetEnabled(false)
    }["AppInner.useCallback[handleTuckPet]"], [
        handleSetPetEnabled
    ]);
    // Toggle wake/tuck — used by the pet rail and the composer button.
    const handleTogglePet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleTogglePet]": ()=>{
            setConfig({
                "AppInner.useCallback[handleTogglePet]": (curr)=>{
                    const prev = curr.pet ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"];
                    const next = {
                        ...curr,
                        pet: {
                            ...prev,
                            enabled: !prev.enabled
                        }
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                    return next;
                }
            }["AppInner.useCallback[handleTogglePet]"]);
        }
    }["AppInner.useCallback[handleTogglePet]"], []);
    // Inline adopt — the right-hand pet rail and the composer's pet menu
    // both call this to switch pets without bouncing the user into
    // Settings. It always wakes the overlay so the change is visible.
    const handleAdoptPet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppInner.useCallback[handleAdoptPet]": (petId)=>{
            setConfig({
                "AppInner.useCallback[handleAdoptPet]": (curr)=>{
                    const prev = curr.pet ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"];
                    const next = {
                        ...curr,
                        pet: {
                            ...prev,
                            adopted: true,
                            enabled: true,
                            petId
                        }
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                    return next;
                }
            }["AppInner.useCallback[handleAdoptPet]"]);
        }
    }["AppInner.useCallback[handleAdoptPet]"], []);
    // When the user lands on the entry view (route.kind === 'home'), pull
    // a fresh template list. The template store is global — if they just
    // saved a template inside a project, returning home should reflect it
    // immediately in the From-template tab without forcing a page reload.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInner.useEffect": ()=>{
            if (route.kind !== 'home') return;
            void refreshTemplates();
        }
    }["AppInner.useEffect"], [
        route.kind,
        refreshTemplates
    ]);
    // Existing card grids (DesignsTab, ProjectView), pickers (NewProjectPanel,
    // ChatComposer mention) all look skills up by id without caring whether
    // the id resolves to a functional skill or a design template. Pass them
    // the union so the post-split refactor stays invisible to those callers.
    const allSkillSummaries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[allSkillSummaries]": ()=>[
                ...skills,
                ...designTemplates
            ]
    }["AppInner.useMemo[allSkillSummaries]"], [
        skills,
        designTemplates
    ]);
    const enabledSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[enabledSkills]": ()=>allSkillSummaries.filter({
                "AppInner.useMemo[enabledSkills]": (s)=>!(config.disabledSkills ?? []).includes(s.id)
            }["AppInner.useMemo[enabledSkills]"])
    }["AppInner.useMemo[enabledSkills]"], [
        allSkillSummaries,
        config.disabledSkills
    ]);
    // Functional-skills-only enabled subset — what ProjectView's chat
    // composer @-picker should see. Without this, a skill the user has
    // disabled in Settings still appears in an existing project's @-mention
    // popover and can ride along to the daemon via skillIds, breaking the
    // Library toggle for projects opened on the post-split branch.
    const enabledFunctionalSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[enabledFunctionalSkills]": ()=>skills.filter({
                "AppInner.useMemo[enabledFunctionalSkills]": (s)=>!(config.disabledSkills ?? []).includes(s.id)
            }["AppInner.useMemo[enabledFunctionalSkills]"])
    }["AppInner.useMemo[enabledFunctionalSkills]"], [
        skills,
        config.disabledSkills
    ]);
    // Templates-only enabled subset — what the EntryView Templates gallery
    // actually renders. Filtering in App keeps the EntryView prop surface
    // narrow ("here are the templates the user has not disabled").
    const enabledDesignTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[enabledDesignTemplates]": ()=>designTemplates.filter({
                "AppInner.useMemo[enabledDesignTemplates]": (s)=>!(config.disabledSkills ?? []).includes(s.id)
            }["AppInner.useMemo[enabledDesignTemplates]"])
    }["AppInner.useMemo[enabledDesignTemplates]"], [
        designTemplates,
        config.disabledSkills
    ]);
    const enabledDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppInner.useMemo[enabledDS]": ()=>designSystems.filter({
                "AppInner.useMemo[enabledDS]": (d)=>!(config.disabledDesignSystems ?? []).includes(d.id)
            }["AppInner.useMemo[enabledDS]"])
    }["AppInner.useMemo[enabledDS]"], [
        designSystems,
        config.disabledDesignSystems
    ]);
    // Phase 2B / spec §11.6 — marketplace deep UI dispatch. The
    // /marketplace and /marketplace/:id routes render outside the
    // EntryView / ProjectView split so the discovery surface stays
    // independent of any active project.
    let appMain;
    const pendingFirstRunOnboardingRoute = route.kind === 'home' && route.view === 'home' && config.onboardingCompleted !== true && !daemonConfigLoaded;
    if (pendingFirstRunOnboardingRoute) {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "entry-shell entry-shell--no-header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenteredLoader"], {
                label: t('entry.loadingWorkspace')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2097,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2096,
            columnNumber: 7
        }, this);
    } else if (route.kind === 'marketplace') {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MarketplaceView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketplaceView"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2101,
            columnNumber: 15
        }, this);
    } else if (route.kind === 'marketplace-detail') {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginDetailView"], {
            pluginId: route.pluginId
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2103,
            columnNumber: 15
        }, this);
    } else if (route.kind === 'design-system-create') {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemCreationFlow"], {
            onBack: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'design-systems'
                }),
            onCreated: (projectId, project)=>{
                if (project) {
                    setProjects((curr)=>[
                            project,
                            ...curr.filter((p)=>p.id !== project.id)
                        ]);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId,
                    conversationId: null,
                    fileName: null
                });
            },
            onProjectPrepared: (project)=>{
                setProjects((curr)=>[
                        project,
                        ...curr.filter((p)=>p.id !== project.id)
                    ]);
            },
            onSystemsRefresh: refreshDesignSystems,
            config: config,
            onOpenConnectorsTab: ()=>openSettings('composio')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2106,
            columnNumber: 7
        }, this);
    } else if (route.kind === 'design-system-detail') {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemDetailView"], {
            id: route.designSystemId,
            selectedId: config.designSystemId,
            config: config,
            agents: agents,
            onBack: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'home',
                    view: 'design-systems'
                }),
            onOpenProject: (projectId)=>void handleOpenProject(projectId),
            onSetDefault: handleChangeDefaultDesignSystem,
            onSystemsRefresh: refreshDesignSystems,
            onProjectsRefresh: refreshProjects,
            initialRevisionJob: pendingDesignSystemRevisionJobs[route.designSystemId] ?? null,
            onInitialRevisionJobConsumed: (jobId)=>handleDesignSystemRevisionJobConsumed(route.designSystemId, jobId)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2130,
            columnNumber: 7
        }, this);
    } else if (activeProject) {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectView"], {
            project: activeProject,
            routeFileName: route.kind === 'project' ? route.fileName : null,
            routeConversationId: route.kind === 'project' ? route.conversationId : null,
            config: config,
            agents: agents,
            skills: enabledFunctionalSkills,
            designTemplates: designTemplates,
            designSystems: designSystems,
            daemonLive: daemonLive,
            onModeChange: handleModeChange,
            onAgentChange: handleAgentChange,
            onAgentModelChange: handleAgentModelChange,
            onApiModelChange: handleApiModelChange,
            onRefreshAgents: refreshAgents,
            onThemeChange: handleThemeChange,
            onOpenSettings: openSettings,
            onOpenAmrSettings: openAmrSettings,
            onOpenMcpSettings: openMcpSettings,
            onBrowsePlugins: openPluginRegistry,
            onOpenConnectors: openConnectorIntegrations,
            onAdoptPetInline: handleAdoptPet,
            onTogglePet: handleTogglePet,
            onOpenPetSettings: openPetSettings,
            onBack: handleBack,
            onClearPendingPrompt: handleClearPendingPrompt,
            onTouchProject: handleTouchProject,
            onProjectChange: handleProjectChange,
            onProjectsRefresh: refreshProjects,
            onChangeDefaultDesignSystem: handleChangeDefaultDesignSystem,
            onDesignSystemsRefresh: refreshDesignSystems
        }, activeProject.id, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2148,
            columnNumber: 7
        }, this);
    } else {
        appMain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntryView"], {
            skills: enabledSkills,
            designTemplates: enabledDesignTemplates,
            designSystems: enabledDS,
            projects: projects,
            templates: templates,
            onDeleteTemplate: handleDeleteTemplate,
            promptTemplates: promptTemplates,
            defaultDesignSystemId: config.designSystemId,
            agents: agents,
            agentsLoading: agentsLoading,
            config: config,
            providerModelsCache: providerModelsCache,
            onProviderModelsCacheChange: setProviderModelsCache,
            integrationInitialTab: integrationInitialTab,
            composioConfigLoading: composioConfigLoading,
            daemonLive: daemonLive,
            onModeChange: handleModeChange,
            onAgentChange: handleAgentChange,
            onAgentModelChange: handleAgentModelChange,
            onApiProtocolChange: handleApiProtocolChange,
            onApiModelChange: handleApiModelChange,
            onConfigPersist: handleConfigPersist,
            onRefreshAgents: refreshAgents,
            onThemeChange: handleThemeChange,
            skillsLoading: skillsLoading,
            designSystemsLoading: dsLoading,
            projectsLoading: projectsLoading,
            promptTemplatesLoading: promptTemplatesLoading,
            onCreateProject: handleCreateProject,
            onCreatePluginShareProject: handleCreatePluginShareProject,
            onImportClaudeDesign: handleImportClaudeDesign,
            onImportFolder: handleImportFolder,
            onImportFolderResponse: handleImportFolderResponse,
            onOpenProject: handleOpenProject,
            onOpenLiveArtifact: handleOpenLiveArtifact,
            onDeleteProject: handleDeleteProject,
            onRenameProject: handleRenameProject,
            onProjectsRefresh: refreshProjectsStrict,
            onChangeDefaultDesignSystem: handleChangeDefaultDesignSystem,
            onCreateDesignSystem: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'design-system-create'
                }),
            onOpenDesignSystem: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'design-system-detail',
                    designSystemId: id
                }),
            onDesignSystemsRefresh: refreshDesignSystems,
            onPersistComposioKey: handleConfigPersistComposioKey,
            onOpenSettings: openSettings,
            onCompleteOnboarding: handleCompleteOnboarding
        }, void 0, false, {
            fileName: "[project]/apps/web/src/App.tsx",
            lineNumber: 2184,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `workspace-shell workspace-shell--${clientType}`,
                "data-client-type": clientType,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$WorkspaceTabsBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceTabsBar"], {
                        route: route,
                        projects: projects,
                        onboardingCompleted: config.onboardingCompleted === true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/App.tsx",
                        lineNumber: 2239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workspace-shell__body",
                        children: appMain
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/App.tsx",
                        lineNumber: 2244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2235,
                columnNumber: 7
            }, this),
            clientType === 'desktop' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PetOverlay"], {
                pet: config.pet?.enabled ? config.pet : undefined,
                taskCenter: petTaskCenter,
                onOpenProject: handleOpenProject
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TooltipLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipLayer"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: settingsOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SettingsDialog"], {
                    initial: config,
                    agents: agents,
                    agentsLoading: agentsLoading,
                    daemonLive: daemonLive,
                    appVersionInfo: appVersionInfo,
                    welcome: settingsWelcome,
                    initialSection: settingsInitialSection,
                    initialHighlight: settingsHighlight,
                    composioConfigLoading: composioConfigLoading,
                    onPersist: handleConfigPersist,
                    onPersistComposioKey: handleConfigPersistComposioKey,
                    onClose: ()=>{
                        // Closing the dialog is the canonical "I'm done" gesture
                        // now that there is no global Save button. We mark
                        // onboardingCompleted on close so the welcome modal stops
                        // re-prompting on every refresh, regardless of whether
                        // the user changed anything during the session.
                        const next = resolveSettingsCloseConfig(config, latestPersistedConfigRef.current);
                        if (!next.onboardingCompleted || !config.onboardingCompleted) {
                            latestPersistedConfigRef.current = next;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
                            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
                            setConfig(next);
                        }
                        setSettingsOpen(false);
                        setSettingsHighlight(null);
                    },
                    onRefreshAgents: refreshAgents,
                    onAmrLoginStatusChange: handleAmrLoginStatusChange,
                    onSkillsRefresh: refreshSkills,
                    daemonMediaProviders: daemonMediaProviders,
                    daemonMediaProvidersFetchState: daemonMediaProvidersFetchState,
                    mediaProvidersNotice: mediaProvidersNotice,
                    onReloadMediaProviders: reloadMediaProvidersFromDaemon,
                    onProjectsRefresh: refreshProjects,
                    onSkillsChanged: handleSkillsChanged,
                    onDesignSystemsChanged: handleDesignSystemsChanged,
                    onDesignSystemImportRebuildJob: handleDesignSystemImportRebuildJob,
                    providerModelsCache: providerModelsCache,
                    onProviderModelsCacheChange: setProviderModelsCache
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/App.tsx",
                    lineNumber: 2258,
                    columnNumber: 9
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryToast"], {
                onOpenMemory: ()=>openSettings('memory')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2302,
                columnNumber: 7
            }, this),
            workingDirError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: workingDirError,
                role: "alert",
                onDismiss: ()=>setWorkingDirError(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2304,
                columnNumber: 9
            }, this) : null,
            projectOpenError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: projectOpenError,
                role: "alert",
                tone: "error",
                onDismiss: ()=>setProjectOpenError(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2311,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPrivacyConsent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.97
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.97
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 28
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PrivacyConsentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacyConsentModal"], {
                        onAccept: ()=>{
                            // Default opt-in: clicking "I get it" enables the same telemetry
                            // surface the previous two-button "Share usage data" path opted
                            // into. The banner footer + PrivacySection give the user a
                            // one-click path to flip everything off later.
                            // The banner owns only the privacy decision; it does not drive
                            // navigation. Onboarding is gated by `onboardingCompleted` on
                            // its own and runs in parallel.
                            const installationId = generateInstallationIdSafe();
                            void handleConfigPersist({
                                ...latestPersistedConfigRef.current,
                                installationId,
                                privacyDecisionAt: Date.now(),
                                telemetry: {
                                    metrics: true,
                                    content: true
                                }
                            });
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/App.tsx",
                        lineNumber: 2333,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/App.tsx",
                    lineNumber: 2327,
                    columnNumber: 9
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/App.tsx",
                lineNumber: 2325,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AppInner, "s7yfJB1QoNFsYnDIgpAZxmqwFu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframeKeepAlivePool"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModalWindowDragGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalWindowDragGuard"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = AppInner;
function generateInstallationIdSafe() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `inst-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "App");
__turbopack_context__.k.register(_c1, "AppInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_App_tsx_0l3epyx._.js.map