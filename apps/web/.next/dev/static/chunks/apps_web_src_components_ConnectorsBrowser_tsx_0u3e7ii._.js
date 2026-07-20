(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/ConnectorsBrowser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectorsBrowser",
    ()=>ConnectorsBrowser,
    "clearConnectorAuthorizationCancelFailuresForConnected",
    ()=>clearConnectorAuthorizationCancelFailuresForConnected,
    "clearConnectorAuthorizationErrorsForConnected",
    ()=>clearConnectorAuthorizationErrorsForConnected,
    "clearConnectorAuthorizationPending",
    ()=>clearConnectorAuthorizationPending,
    "getConnectorDisplayToolCount",
    ()=>getConnectorDisplayToolCount,
    "hasLoadedAllAdvertisedConnectorTools",
    ()=>hasLoadedAllAdvertisedConnectorTools,
    "mergeConnectorActionResult",
    ()=>mergeConnectorActionResult,
    "mergeConnectorToolPreview",
    ()=>mergeConnectorToolPreview,
    "pruneConnectorAuthorizationPending",
    ()=>pruneConnectorAuthorizationPending,
    "updateConnectorAuthorizationPendingFromConnectResponse",
    ()=>updateConnectorAuthorizationPendingFromConnectResponse,
    "updateConnectorAuthorizationPendingFromStatuses",
    ()=>updateConnectorAuthorizationPendingFromStatuses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/visually-hidden.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/EntryView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ConnectorLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
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
const CONNECTOR_AUTH_PENDING_STORAGE_KEY = 'od-connectors-authorization-pending';
const CONNECTOR_AUTH_PENDING_POLL_MS = 2_000;
const CONNECTOR_TOOL_PREVIEW_LIMIT = 50;
const AUTHORIZATION_CANCEL_FAILED_MESSAGE = "Couldn't cancel authorization. Try again.";
const CONNECTOR_AUTH_CONTINUE_LABEL = 'Continue in browser';
function mergeConnectors(current, incoming) {
    if (current.length === 0) return incoming;
    const incomingById = new Map(incoming.map((connector)=>[
            connector.id,
            connector
        ]));
    const merged = current.map((connector)=>{
        const next = incomingById.get(connector.id);
        if (!next) return connector;
        return {
            ...connector,
            ...next,
            tools: next.tools.length > 0 ? next.tools : connector.tools,
            toolCount: next.toolCount ?? connector.toolCount,
            toolsNextCursor: next.toolsNextCursor ?? connector.toolsNextCursor,
            toolsHasMore: next.toolsHasMore ?? connector.toolsHasMore
        };
    });
    const currentIds = new Set(current.map((connector)=>connector.id));
    for (const connector of incoming){
        if (!currentIds.has(connector.id)) merged.push(connector);
    }
    return merged;
}
function loadConnectorAuthorizationPending() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.sessionStorage.getItem(CONNECTOR_AUTH_PENDING_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
        const pending = {};
        for (const [connectorId, state] of Object.entries(parsed)){
            if (!connectorId) continue;
            if (state && typeof state === 'object' && !Array.isArray(state)) {
                const expiresAt = state.expiresAt;
                const redirectUrl = state.redirectUrl;
                pending[connectorId] = {
                    ...typeof expiresAt === 'string' && expiresAt.trim() ? {
                        expiresAt
                    } : {},
                    ...typeof redirectUrl === 'string' && redirectUrl.trim() ? {
                        redirectUrl
                    } : {}
                };
            } else {
                pending[connectorId] = {};
            }
        }
        return pruneConnectorAuthorizationPending(pending);
    } catch  {
        return {};
    }
}
function saveConnectorAuthorizationPending(pending) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (Object.keys(pending).length === 0) {
            window.sessionStorage.removeItem(CONNECTOR_AUTH_PENDING_STORAGE_KEY);
        } else {
            window.sessionStorage.setItem(CONNECTOR_AUTH_PENDING_STORAGE_KEY, JSON.stringify(pending));
        }
    } catch  {
    /* Ignore unavailable sessionStorage. */ }
}
function pruneConnectorAuthorizationPending(pending, nowMs = Date.now()) {
    const next = {};
    for (const [connectorId, state] of Object.entries(pending)){
        const expiresAtMs = state.expiresAt ? Date.parse(state.expiresAt) : Number.NaN;
        if (Number.isFinite(expiresAtMs) && expiresAtMs <= nowMs) continue;
        next[connectorId] = {
            ...state.expiresAt ? {
                expiresAt: state.expiresAt
            } : {},
            ...state.redirectUrl ? {
                redirectUrl: state.redirectUrl
            } : {}
        };
    }
    return next;
}
function updateConnectorAuthorizationPendingFromConnectResponse(pending, response, nowMs = Date.now()) {
    const connectorId = response.connector.id;
    const next = {
        ...pending
    };
    if (response.auth?.kind === 'redirect_required' || response.auth?.kind === 'pending') {
        next[connectorId] = {
            ...response.auth.expiresAt ? {
                expiresAt: response.auth.expiresAt
            } : {},
            ...response.auth.redirectUrl ? {
                redirectUrl: response.auth.redirectUrl
            } : {}
        };
        return pruneConnectorAuthorizationPending(next, nowMs);
    }
    delete next[connectorId];
    return pruneConnectorAuthorizationPending(next, nowMs);
}
function updateConnectorAuthorizationPendingFromStatuses(pending, statuses, nowMs = Date.now()) {
    const next = {
        ...pending
    };
    for (const [connectorId, status] of Object.entries(statuses)){
        if (status.status === 'connected') delete next[connectorId];
    }
    return pruneConnectorAuthorizationPending(next, nowMs);
}
function clearConnectorAuthorizationErrorsForConnected(errors, statuses) {
    let mutated = false;
    const next = {
        ...errors
    };
    for (const [connectorId, status] of Object.entries(statuses)){
        if (status.status === 'connected' && next[connectorId] !== undefined) {
            delete next[connectorId];
            mutated = true;
        }
    }
    return mutated ? next : errors;
}
function clearConnectorAuthorizationCancelFailuresForConnected(failures, statuses) {
    let mutated = false;
    const next = {
        ...failures
    };
    for (const [connectorId, status] of Object.entries(statuses)){
        if (status.status === 'connected' && next[connectorId] !== undefined) {
            delete next[connectorId];
            mutated = true;
        }
    }
    return mutated ? next : failures;
}
function clearConnectorAuthorizationPending(pending, connectorId) {
    if (pending[connectorId] === undefined) return pending;
    const next = {
        ...pending
    };
    delete next[connectorId];
    return next;
}
function getConnectorDisplayToolCount(connector) {
    return connector.toolCount ?? connector.tools.length;
}
function hasLoadedAllAdvertisedConnectorTools(connector) {
    if (connector.toolsNextCursor) return false;
    if (connector.toolCount === undefined) return connector.tools.length > 0;
    return connector.tools.length >= connector.toolCount;
}
function mergeConnectorTools(current, incoming) {
    const seen = new Set();
    const merged = [];
    for (const tool of [
        ...current,
        ...incoming
    ]){
        if (seen.has(tool.name)) continue;
        seen.add(tool.name);
        merged.push(tool);
    }
    return merged;
}
function mergeConnectorToolPreview(current, next, append) {
    const merged = {
        ...current,
        ...next,
        tools: append ? mergeConnectorTools(current.tools, next.tools) : next.tools,
        toolCount: next.toolCount ?? current.toolCount,
        toolsHasMore: next.toolsHasMore ?? false,
        featuredToolNames: next.featuredToolNames ?? current.featuredToolNames
    };
    if (next.toolsNextCursor !== undefined) return {
        ...merged,
        toolsNextCursor: next.toolsNextCursor
    };
    const { toolsNextCursor: _toolsNextCursor, ...withoutCursor } = merged;
    return withoutCursor;
}
function mergeConnectorActionResult(current, next) {
    return {
        ...current,
        ...next,
        tools: next.tools.length > 0 ? next.tools : current.tools,
        toolCount: next.toolCount ?? current.toolCount,
        featuredToolNames: next.featuredToolNames ?? current.featuredToolNames
    };
}
function applyConnectorStatuses(current, statuses) {
    if (Object.keys(statuses).length === 0) return current;
    return current.map((connector)=>{
        const next = statuses[connector.id];
        if (!next) return connector;
        const { accountLabel: _accountLabel, lastError: _lastError, ...base } = connector;
        return {
            ...base,
            ...next
        };
    });
}
/**
 * Connector cards + search, lifted out of the entry-view top tab so it can
 * live under Settings → Connectors. Owns its own data lifecycle: fetches the
 * catalog on mount, lazily enriches with Composio discovery when the user
 * actually opens the surface, and rehydrates statuses on window focus and
 * OAuth callback messages.
 */ /**
 * Provider tab definition. Today this is just Composio, but the surface is
 * structured as a list-of-tabs because the next provider integration (e.g.
 * a self-hosted MCP registry) is expected to drop in here without rework.
 *
 * `match` decides whether a given catalog entry belongs to this provider:
 * the entry's `auth.provider` is the source of truth, falling back to the
 * lowercased display `provider` for catalog rows that don't carry an auth
 * payload yet.
 */ const PROVIDER_TABS = [
    {
        id: 'composio',
        label: 'Composio',
        match: (connector)=>{
            const provider = connector.auth?.provider ?? connector.provider.toLowerCase();
            return provider === 'composio';
        }
    }
];
const DEFAULT_PROVIDER_TAB_ID = 'composio';
const CONNECTOR_CATEGORY_KEYS = {
    'accounting': 'connectors.category.accounting',
    'admin': 'connectors.category.admin',
    'ads & conversion': 'connectors.category.advertising',
    'advertising': 'connectors.category.advertising',
    'ai agents': 'connectors.category.aiAgents',
    'ai chatbots': 'connectors.category.aiAgents',
    'ai infrastructure': 'connectors.category.aiInfrastructure',
    'ai meeting assistants': 'connectors.category.meetings',
    'analytics': 'connectors.category.analytics',
    'artificial intelligence': 'connectors.category.aiAgents',
    'automation': 'connectors.category.automation',
    'bookmark managers': 'connectors.category.personal',
    'calendar': 'connectors.category.calendar',
    'cms': 'connectors.category.cms',
    'code': 'connectors.category.developer',
    'commerce': 'connectors.category.commerce',
    'communication': 'connectors.category.communication',
    'connectors': 'connectors.category.integration',
    'contacts': 'connectors.category.contacts',
    'crm': 'connectors.category.crm',
    'customer support': 'connectors.category.support',
    'data platform': 'connectors.category.dataPlatform',
    'database': 'connectors.category.database',
    'databases': 'connectors.category.database',
    'design': 'connectors.category.design',
    'developer': 'connectors.category.developer',
    'developer tools': 'connectors.category.developer',
    'documents': 'connectors.category.documentation',
    'documentation': 'connectors.category.documentation',
    'ecommerce': 'connectors.category.commerce',
    'education': 'connectors.category.education',
    'email': 'connectors.category.email',
    'email newsletters': 'connectors.category.email',
    'erp': 'connectors.category.erp',
    'electronics': 'connectors.category.commerce',
    'events': 'connectors.category.events',
    'event management': 'connectors.category.events',
    'example': 'connectors.category.integration',
    'feedback': 'connectors.category.surveys',
    'field service': 'connectors.category.fieldService',
    'file management & storage': 'connectors.category.storage',
    'finance': 'connectors.category.finance',
    'fitness': 'connectors.category.fitness',
    'forms': 'connectors.category.forms',
    'forms & surveys': 'connectors.category.forms',
    'fundraising': 'connectors.category.nonprofit',
    'gaming': 'connectors.category.gaming',
    'hospitality': 'connectors.category.hospitality',
    'hr': 'connectors.category.hr',
    'hr talent & recruitment': 'connectors.category.recruiting',
    'human resources': 'connectors.category.hr',
    'images & design': 'connectors.category.design',
    'important': 'connectors.category.integration',
    'integration': 'connectors.category.integration',
    'itsm': 'connectors.category.itsm',
    'it operations': 'connectors.category.itsm',
    'localization': 'connectors.category.localization',
    'logistics': 'connectors.category.logistics',
    'maps': 'connectors.category.maps',
    'marketing': 'connectors.category.marketing',
    'marketing automation': 'connectors.category.marketing',
    'media': 'connectors.category.media',
    'meetings': 'connectors.category.meetings',
    'model context protocol': 'connectors.category.developer',
    'news & lifestyle': 'connectors.category.media',
    'nonprofit': 'connectors.category.nonprofit',
    'notes': 'connectors.category.documentation',
    'notifications': 'connectors.category.communication',
    'observability': 'connectors.category.observability',
    'online courses': 'connectors.category.education',
    'payments': 'connectors.category.payments',
    'payment processing': 'connectors.category.payments',
    'personal': 'connectors.category.personal',
    'phone & sms': 'connectors.category.communication',
    'presentations': 'connectors.category.presentations',
    'premium': 'connectors.category.integration',
    'procurement': 'connectors.category.procurement',
    'product': 'connectors.category.product',
    'product management': 'connectors.category.product',
    'productivity': 'connectors.category.productivity',
    'productivity & project management': 'connectors.category.projectManagement',
    'project management': 'connectors.category.projectManagement',
    'proposal & invoice management': 'connectors.category.accounting',
    'recruiting': 'connectors.category.recruiting',
    'research': 'connectors.category.research',
    'sales': 'connectors.category.salesIntelligence',
    'sales intelligence': 'connectors.category.salesIntelligence',
    'scheduling': 'connectors.category.scheduling',
    'scheduling & booking': 'connectors.category.scheduling',
    'search': 'connectors.category.search',
    'security': 'connectors.category.security',
    'security & identity tools': 'connectors.category.security',
    'server monitoring': 'connectors.category.observability',
    'signing': 'connectors.category.signing',
    'signatures': 'connectors.category.signing',
    'social': 'connectors.category.social',
    'social media accounts': 'connectors.category.social',
    'social media marketing': 'connectors.category.marketing',
    'spreadsheets': 'connectors.category.spreadsheets',
    'storage': 'connectors.category.storage',
    'support': 'connectors.category.support',
    'surveys': 'connectors.category.surveys',
    'task management': 'connectors.category.tasks',
    'tasks': 'connectors.category.tasks',
    'team chat': 'connectors.category.communication',
    'team collaboration': 'connectors.category.communication',
    'time tracking': 'connectors.category.timeTracking',
    'time tracking software': 'connectors.category.timeTracking',
    'url shortener': 'connectors.category.marketing',
    'video': 'connectors.category.video',
    'video & audio': 'connectors.category.video',
    'video conferencing': 'connectors.category.meetings',
    'website builders': 'connectors.category.cms',
    'whiteboard': 'connectors.category.whiteboard'
};
function ConnectorsBrowser({ composioConfigured, catalogRefreshKey = 0, onConnectorsTabClick, onConnectorAuthResult }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [connectors, setConnectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toolsLoading, setToolsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toolsLoaded, setToolsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingConnectorAction, setPendingConnectorAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectorAuthorizationPending, setConnectorAuthorizationPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConnectorsBrowser.useState": ()=>loadConnectorAuthorizationPending()
    }["ConnectorsBrowser.useState"]);
    const [connectorAuthorizationCancelFailed, setConnectorAuthorizationCancelFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [connectorAuthorizationError, setConnectorAuthorizationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [detailConnectorId, setDetailConnectorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toolPreviewLoadingIds, setToolPreviewLoadingIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toolPreviewFetchedIds, setToolPreviewFetchedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toolPreviewFailedIds, setToolPreviewFailedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PROVIDER_TAB_ID);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const connectorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(connectors);
    const logoTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"])();
    const toolPreviewRetryToken = `${composioConfigured ? 'configured' : 'unconfigured'}:${String(catalogRefreshKey)}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            connectorsRef.current = connectors;
        }
    }["ConnectorsBrowser.useEffect"], [
        connectors
    ]);
    const reloadConnectorStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConnectorsBrowser.useCallback[reloadConnectorStatuses]": async ()=>{
            const statuses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorStatuses"])();
            const statusChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasConnectorStatusChanges"])(connectorsRef.current, statuses);
            setConnectors({
                "ConnectorsBrowser.useCallback[reloadConnectorStatuses]": (curr)=>applyConnectorStatuses(curr, statuses)
            }["ConnectorsBrowser.useCallback[reloadConnectorStatuses]"]);
            setConnectorAuthorizationPending({
                "ConnectorsBrowser.useCallback[reloadConnectorStatuses]": (curr)=>updateConnectorAuthorizationPendingFromStatuses(curr, statuses)
            }["ConnectorsBrowser.useCallback[reloadConnectorStatuses]"]);
            setConnectorAuthorizationError({
                "ConnectorsBrowser.useCallback[reloadConnectorStatuses]": (curr)=>clearConnectorAuthorizationErrorsForConnected(curr, statuses)
            }["ConnectorsBrowser.useCallback[reloadConnectorStatuses]"]);
            setConnectorAuthorizationCancelFailed({
                "ConnectorsBrowser.useCallback[reloadConnectorStatuses]": (curr)=>clearConnectorAuthorizationCancelFailuresForConnected(curr, statuses)
            }["ConnectorsBrowser.useCallback[reloadConnectorStatuses]"]);
            if (statusChanged) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
            return statuses;
        }
    }["ConnectorsBrowser.useCallback[reloadConnectorStatuses]"], []);
    const connectorAuthorizationPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(connectorAuthorizationPending);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            connectorAuthorizationPendingRef.current = connectorAuthorizationPending;
        }
    }["ConnectorsBrowser.useEffect"], [
        connectorAuthorizationPending
    ]);
    const cancelStaleAuthorizations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": async (pendingBeforeReload, statuses, nowMs = Date.now())=>{
            const stuck = Object.keys(pendingBeforeReload).filter({
                "ConnectorsBrowser.useCallback[cancelStaleAuthorizations].stuck": (connectorId)=>{
                    if (statuses[connectorId]?.status === 'connected') return false;
                    const expiresAt = pendingBeforeReload[connectorId]?.expiresAt;
                    if (!expiresAt) return false;
                    const expiresAtMs = Date.parse(expiresAt);
                    return Number.isFinite(expiresAtMs) && expiresAtMs <= nowMs;
                }
            }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations].stuck"]);
            if (stuck.length === 0) return;
            await Promise.allSettled(stuck.map({
                "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": async (connectorId)=>{
                    let connector = null;
                    try {
                        connector = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelConnectorAuthorization"])(connectorId);
                    } catch  {
                        connector = null;
                    }
                    if (!connector) {
                        setConnectorAuthorizationCancelFailed({
                            "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": (curr)=>({
                                    ...curr,
                                    [connectorId]: true
                                })
                        }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"]);
                        return;
                    }
                    updateConnector(connector);
                    setConnectorAuthorizationCancelFailed({
                        "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": (curr)=>{
                            if (curr[connectorId] === undefined) return curr;
                            const next = {
                                ...curr
                            };
                            delete next[connectorId];
                            return next;
                        }
                    }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"]);
                    setConnectorAuthorizationError({
                        "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": (curr)=>{
                            if (curr[connectorId] === undefined) return curr;
                            const next = {
                                ...curr
                            };
                            delete next[connectorId];
                            return next;
                        }
                    }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"]);
                    setConnectorAuthorizationPending({
                        "ConnectorsBrowser.useCallback[cancelStaleAuthorizations]": (curr)=>clearConnectorAuthorizationPending(curr, connectorId)
                    }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"]);
                }
            }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"]));
        }
    }["ConnectorsBrowser.useCallback[cancelStaleAuthorizations]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            saveConnectorAuthorizationPending(connectorAuthorizationPending);
        }
    }["ConnectorsBrowser.useEffect"], [
        connectorAuthorizationPending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            if (Object.keys(connectorAuthorizationPending).length === 0) return;
            const interval = window.setInterval({
                "ConnectorsBrowser.useEffect.interval": ()=>{
                    setConnectorAuthorizationPending({
                        "ConnectorsBrowser.useEffect.interval": (curr)=>pruneConnectorAuthorizationPending(curr)
                    }["ConnectorsBrowser.useEffect.interval"]);
                    void reloadConnectorStatuses();
                }
            }["ConnectorsBrowser.useEffect.interval"], CONNECTOR_AUTH_PENDING_POLL_MS);
            return ({
                "ConnectorsBrowser.useEffect": ()=>window.clearInterval(interval)
            })["ConnectorsBrowser.useEffect"];
        }
    }["ConnectorsBrowser.useEffect"], [
        connectorAuthorizationPending,
        reloadConnectorStatuses
    ]);
    // Initial catalog fetch — always loads the lightweight registry payload so
    // already-configured connectors render immediately.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            let cancelled = false;
            setLoading(true);
            setToolsLoaded(false);
            ({
                "ConnectorsBrowser.useEffect": async ()=>{
                    const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectors"])();
                    if (cancelled) return;
                    setConnectors({
                        "ConnectorsBrowser.useEffect": (curr)=>mergeConnectors(curr, next)
                    }["ConnectorsBrowser.useEffect"]);
                    setLoading(false);
                }
            })["ConnectorsBrowser.useEffect"]();
            return ({
                "ConnectorsBrowser.useEffect": ()=>{
                    cancelled = true;
                }
            })["ConnectorsBrowser.useEffect"];
        }
    }["ConnectorsBrowser.useEffect"], [
        composioConfigured,
        catalogRefreshKey
    ]);
    // Lazy Composio discovery — enriched toolkit metadata + auth configuration.
    // Heavier round trip; only worth it once a Composio API key is actually
    // saved. Before that, discovery returns no live tools and the web-side
    // provider cache can otherwise keep those empty tool lists after Save key.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            if (!composioConfigured) {
                setToolsLoaded(false);
                setToolsLoading(false);
                return;
            }
            if (toolsLoaded) return;
            let cancelled = false;
            setToolsLoading(true);
            ({
                "ConnectorsBrowser.useEffect": async ()=>{
                    const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorDiscovery"])({
                        refresh: true
                    });
                    if (cancelled) return;
                    setConnectors({
                        "ConnectorsBrowser.useEffect": (curr)=>mergeConnectors(curr, next)
                    }["ConnectorsBrowser.useEffect"]);
                    setToolsLoaded(true);
                    setToolsLoading(false);
                }
            })["ConnectorsBrowser.useEffect"]();
            return ({
                "ConnectorsBrowser.useEffect": ()=>{
                    cancelled = true;
                    setToolsLoading(false);
                }
            })["ConnectorsBrowser.useEffect"];
        }
    }["ConnectorsBrowser.useEffect"], [
        composioConfigured,
        catalogRefreshKey,
        toolsLoaded
    ]);
    // OAuth callback: a popup or system-browser tab postMessages back when an
    // auth flow completes. Trust same-origin + localhost-loopback so packaged
    // dev URLs (different ports) keep working.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            function onMessage(event) {
                const data = event.data;
                if (!data || typeof data !== 'object' || data.type !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTOR_CALLBACK_MESSAGE_TYPE"]) return;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTrustedConnectorCallbackOrigin"])(event.origin)) return;
                void reloadConnectorStatuses();
            }
            window.addEventListener('message', onMessage);
            return ({
                "ConnectorsBrowser.useEffect": ()=>window.removeEventListener('message', onMessage)
            })["ConnectorsBrowser.useEffect"];
        }
    }["ConnectorsBrowser.useEffect"], [
        reloadConnectorStatuses
    ]);
    // System-browser auth flows have no opener to post back to; refresh
    // whenever the window regains focus so the UI catches up silently. If a
    // pending authorization is still not connected after the refresh, the
    // user closed the auth flow without completing it — auto-cancel so the
    // card recovers to its default state instead of staying stuck loading.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            async function refreshAfterReturn() {
                const pendingBeforeReload = connectorAuthorizationPendingRef.current;
                const statuses = await reloadConnectorStatuses();
                await cancelStaleAuthorizations(pendingBeforeReload, statuses);
            }
            function onVisibilityChange() {
                if (document.visibilityState !== 'visible') return;
                void refreshAfterReturn();
            }
            window.addEventListener('focus', refreshAfterReturn);
            window.addEventListener('pageshow', refreshAfterReturn);
            document.addEventListener('visibilitychange', onVisibilityChange);
            return ({
                "ConnectorsBrowser.useEffect": ()=>{
                    window.removeEventListener('focus', refreshAfterReturn);
                    window.removeEventListener('pageshow', refreshAfterReturn);
                    document.removeEventListener('visibilitychange', onVisibilityChange);
                }
            })["ConnectorsBrowser.useEffect"];
        }
    }["ConnectorsBrowser.useEffect"], [
        reloadConnectorStatuses,
        cancelStaleAuthorizations
    ]);
    // The local Composio API-key state is authoritative for masking. Cached
    // connector auth can be stale immediately after the user clears the key.
    const needsComposioKey = !composioConfigured;
    // Filter and rank connectors by user-visible fields. Exact/prefix matches
    // on connector name/provider are strongest; broad description matches stay
    // searchable but are down-ranked. The provider tab restricts the catalog
    // to a single backing provider before search runs so result rankings stay
    // tab-local.
    const providerScopedConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectorsBrowser.useMemo[providerScopedConnectors]": ()=>{
            const tab = PROVIDER_TABS.find({
                "ConnectorsBrowser.useMemo[providerScopedConnectors]": (p)=>p.id === selectedProvider
            }["ConnectorsBrowser.useMemo[providerScopedConnectors]"]) ?? PROVIDER_TABS.find({
                "ConnectorsBrowser.useMemo[providerScopedConnectors]": (p)=>p.id === DEFAULT_PROVIDER_TAB_ID
            }["ConnectorsBrowser.useMemo[providerScopedConnectors]"]);
            if (!tab) return connectors;
            return connectors.filter({
                "ConnectorsBrowser.useMemo[providerScopedConnectors]": (connector)=>tab.match(connector)
            }["ConnectorsBrowser.useMemo[providerScopedConnectors]"]);
        }
    }["ConnectorsBrowser.useMemo[providerScopedConnectors]"], [
        connectors,
        selectedProvider
    ]);
    const filteredConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectorsBrowser.useMemo[filteredConnectors]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntryView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortConnectorsForSearch"])(providerScopedConnectors, filter);
        }
    }["ConnectorsBrowser.useMemo[filteredConnectors]"], [
        providerScopedConnectors,
        filter
    ]);
    const hasQuery = filter.trim().length > 0;
    const hasNoResults = hasQuery && filteredConnectors.length === 0;
    const connectorPanelAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectorsBrowser.useMemo[connectorPanelAlerts]": ()=>{
            const alerts = [];
            for (const connector of connectors){
                if (connector.id === detailConnectorId) continue;
                const message = connectorAuthorizationError[connector.id];
                if (message) {
                    alerts.push({
                        connectorId: connector.id,
                        connectorName: connector.name,
                        message
                    });
                }
                if (connectorAuthorizationCancelFailed[connector.id]) {
                    alerts.push({
                        connectorId: connector.id,
                        connectorName: connector.name,
                        message: AUTHORIZATION_CANCEL_FAILED_MESSAGE
                    });
                }
            }
            return alerts;
        }
    }["ConnectorsBrowser.useMemo[connectorPanelAlerts]"], [
        connectorAuthorizationCancelFailed,
        connectorAuthorizationError,
        connectors,
        detailConnectorId
    ]);
    function updateConnector(next) {
        if (!next) return;
        setConnectors((curr)=>curr.map((connector)=>connector.id === next.id ? mergeConnectorActionResult(connector, next) : connector));
    }
    async function runConnectorAction(connectorId, action) {
        if (pendingConnectorAction) return;
        setPendingConnectorAction({
            connectorId,
            action
        });
        try {
            if (action === 'connect') {
                setConnectorAuthorizationCancelFailed((curr)=>{
                    if (curr[connectorId] === undefined) return curr;
                    const next = {
                        ...curr
                    };
                    delete next[connectorId];
                    return next;
                });
                setConnectorAuthorizationError((curr)=>{
                    if (curr[connectorId] === undefined) return curr;
                    const next = {
                        ...curr
                    };
                    delete next[connectorId];
                    return next;
                });
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectConnector"])(connectorId);
                    updateConnector(result.connector);
                    if (result.connector && !result.error) {
                        if (result.connector.status === 'connected') (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
                        setConnectorAuthorizationPending((curr)=>updateConnectorAuthorizationPendingFromConnectResponse(curr, {
                                connector: result.connector,
                                ...result.auth === undefined ? {} : {
                                    auth: result.auth
                                }
                            }));
                        onConnectorAuthResult?.({
                            connectorId,
                            action: 'connect',
                            result: 'success'
                        });
                    } else {
                        setConnectorAuthorizationPending((curr)=>clearConnectorAuthorizationPending(curr, connectorId));
                        if (result.error) {
                            setConnectorAuthorizationError((curr)=>({
                                    ...curr,
                                    [connectorId]: result.error
                                }));
                        }
                        onConnectorAuthResult?.({
                            connectorId,
                            action: 'connect',
                            result: 'failed',
                            ...result.error ? {
                                errorCode: result.error
                            } : {}
                        });
                    }
                } catch (err) {
                    onConnectorAuthResult?.({
                        connectorId,
                        action: 'connect',
                        result: 'failed',
                        errorCode: err instanceof Error ? err.message : String(err)
                    });
                    throw err;
                }
            } else {
                setConnectorAuthorizationPending((curr)=>clearConnectorAuthorizationPending(curr, connectorId));
                setConnectorAuthorizationError((curr)=>{
                    if (curr[connectorId] === undefined) return curr;
                    const next = {
                        ...curr
                    };
                    delete next[connectorId];
                    return next;
                });
                try {
                    updateConnector(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectConnector"])(connectorId));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
                    onConnectorAuthResult?.({
                        connectorId,
                        action: 'disconnect',
                        result: 'success'
                    });
                } catch (err) {
                    onConnectorAuthResult?.({
                        connectorId,
                        action: 'disconnect',
                        result: 'failed',
                        errorCode: err instanceof Error ? err.message : String(err)
                    });
                    throw err;
                }
            }
        } finally{
            setPendingConnectorAction(null);
        }
    }
    const detailConnector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectorsBrowser.useMemo[detailConnector]": ()=>detailConnectorId ? connectors.find({
                "ConnectorsBrowser.useMemo[detailConnector]": (c)=>c.id === detailConnectorId
            }["ConnectorsBrowser.useMemo[detailConnector]"]) ?? null : null
    }["ConnectorsBrowser.useMemo[detailConnector]"], [
        detailConnectorId,
        connectors
    ]);
    async function hydrateToolPreview(connectorId, cursor) {
        if (!composioConfigured) return;
        if (toolPreviewLoadingIds[connectorId]) return;
        setToolPreviewLoadingIds((curr)=>({
                ...curr,
                [connectorId]: true
            }));
        try {
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorDetail"])(connectorId, {
                hydrateTools: true,
                toolsLimit: CONNECTOR_TOOL_PREVIEW_LIMIT,
                ...cursor === undefined ? {} : {
                    toolsCursor: cursor
                }
            });
            if (next) {
                setConnectors((curr)=>curr.map((connector)=>connector.id === next.id ? mergeConnectorToolPreview(connector, next, cursor !== undefined) : connector));
                setToolPreviewFetchedIds((curr)=>({
                        ...curr,
                        [connectorId]: true
                    }));
                setToolPreviewFailedIds((curr)=>{
                    if (curr[connectorId] === undefined) return curr;
                    const nextFailed = {
                        ...curr
                    };
                    delete nextFailed[connectorId];
                    return nextFailed;
                });
            } else {
                setToolPreviewFailedIds((curr)=>({
                        ...curr,
                        [connectorId]: toolPreviewRetryToken
                    }));
            }
        } catch  {
            setToolPreviewFailedIds((curr)=>({
                    ...curr,
                    [connectorId]: toolPreviewRetryToken
                }));
        } finally{
            setToolPreviewLoadingIds((curr)=>({
                    ...curr,
                    [connectorId]: false
                }));
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorsBrowser.useEffect": ()=>{
            if (!detailConnector) return;
            if (!composioConfigured) return;
            if (hasLoadedAllAdvertisedConnectorTools(detailConnector)) return;
            if (toolPreviewFetchedIds[detailConnector.id]) return;
            if (toolPreviewFailedIds[detailConnector.id] === toolPreviewRetryToken) return;
            if (toolPreviewLoadingIds[detailConnector.id]) return;
            void hydrateToolPreview(detailConnector.id);
        }
    }["ConnectorsBrowser.useEffect"], [
        composioConfigured,
        detailConnector,
        toolPreviewFailedIds,
        toolPreviewFetchedIds,
        toolPreviewLoadingIds,
        toolPreviewRetryToken
    ]);
    function openConnectorDetails(connectorId) {
        setToolPreviewFailedIds((curr)=>{
            if (curr[connectorId] === undefined) return curr;
            const next = {
                ...curr
            };
            delete next[connectorId];
            return next;
        });
        setDetailConnectorId(connectorId);
    }
    async function cancelConnectorAuthorization(connectorId) {
        const connector = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelConnectorAuthorization"])(connectorId);
        if (connector) {
            updateConnector(connector);
            setConnectorAuthorizationCancelFailed((curr)=>{
                if (curr[connectorId] === undefined) return curr;
                const next = {
                    ...curr
                };
                delete next[connectorId];
                return next;
            });
            setConnectorAuthorizationError((curr)=>{
                if (curr[connectorId] === undefined) return curr;
                const next = {
                    ...curr
                };
                delete next[connectorId];
                return next;
            });
            setConnectorAuthorizationPending((curr)=>clearConnectorAuthorizationPending(curr, connectorId));
            return;
        }
        try {
            const statuses = await reloadConnectorStatuses();
            if (statuses[connectorId]?.status === 'connected') return;
        } catch  {
        // Keep the local failure visible when the status refresh itself fails.
        }
        setConnectorAuthorizationCancelFailed((curr)=>({
                ...curr,
                [connectorId]: true
            }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tab-panel connectors-panel connectors-panel-embedded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-panel-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-left connectors-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: t('connectors.title')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 844,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t('connectors.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 845,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "connectors-provider-tabs",
                                role: "tablist",
                                "aria-label": "Connector provider",
                                children: PROVIDER_TABS.map((provider)=>{
                                    const active = provider.id === selectedProvider;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "tab",
                                        "aria-selected": active,
                                        className: `connectors-provider-tab${active ? ' is-active' : ''}`,
                                        onClick: ()=>{
                                            onConnectorsTabClick?.('provider_chip');
                                            setSelectedProvider(provider.id);
                                        },
                                        "data-testid": `connectors-provider-tab-${provider.id}`,
                                        children: provider.label
                                    }, provider.id, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 857,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "toolbar-search connectors-search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "search-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "search",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 876,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: searchInputRef,
                                        type: "search",
                                        value: filter,
                                        onFocus: ()=>{
                                            if (searchTrackedRef.current) return;
                                            searchTrackedRef.current = true;
                                            onConnectorsTabClick?.('search_connectors');
                                        },
                                        onChange: (event)=>setFilter(event.target.value),
                                        onKeyDown: (event)=>{
                                            if (event.key === 'Escape' && filter) {
                                                event.preventDefault();
                                                event.stopPropagation();
                                                setFilter('');
                                            }
                                        },
                                        placeholder: t('connectors.searchPlaceholder'),
                                        "aria-label": t('connectors.searchAriaLabel'),
                                        disabled: needsComposioKey,
                                        "data-testid": "connectors-search-input"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 878,
                                        columnNumber: 13
                                    }, this),
                                    hasQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "toolbar-search-clear",
                                        "aria-label": t('connectors.searchClear'),
                                        onClick: ()=>{
                                            setFilter('');
                                            searchInputRef.current?.focus();
                                        },
                                        "data-testid": "connectors-search-clear",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "close",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 911,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 848,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 841,
                columnNumber: 7
            }, this),
            connectorPanelAlerts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "connector-panel-alerts",
                children: connectorPanelAlerts.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connector-panel-alert",
                        title: `${alert.connectorName}: ${alert.message}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "connector-panel-alert-copy",
                                role: "status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        title: alert.connectorName,
                                        children: alert.connectorName
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 926,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                        children: ": "
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 927,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        title: alert.message,
                                        children: alert.message
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 928,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 925,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-only connector-panel-alert-action",
                                "aria-label": t('connectors.openDetailsAria', {
                                    name: alert.connectorName
                                }),
                                title: t('connectors.openDetailsAria', {
                                    name: alert.connectorName
                                }),
                                onClick: ()=>openConnectorDetails(alert.connectorId),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "external-link",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 937,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 930,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${alert.connectorId}:${alert.message}`, true, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 920,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 918,
                columnNumber: 9
            }, this) : null,
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenteredLoader"], {
                label: t('common.loading')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 944,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `connector-grid-wrap${needsComposioKey ? ' is-masked' : ''}`,
                "data-testid": "connector-grid-wrap",
                children: [
                    hasNoResults && !needsComposioKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tab-empty connectors-empty",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "connectors-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "connectors-empty-title",
                                children: t('connectors.emptyNoMatchTitle', {
                                    query: filter.trim()
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 957,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "connectors-empty-body",
                                children: t('connectors.emptyNoMatchBody')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 960,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost connectors-empty-action",
                                onClick: ()=>{
                                    setFilter('');
                                    searchInputRef.current?.focus();
                                },
                                children: t('connectors.emptyNoMatchAction')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 961,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 951,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connector-grid",
                        "aria-hidden": needsComposioKey || undefined,
                        children: filteredConnectors.map((connector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorCard, {
                                connector: connector,
                                disabled: needsComposioKey,
                                pendingAction: pendingConnectorAction?.connectorId === connector.id ? pendingConnectorAction.action : null,
                                authorizationPending: connectorAuthorizationPending[connector.id],
                                authorizationCancelFailed: connectorAuthorizationCancelFailed[connector.id] === true,
                                toolsLoading: toolsLoading,
                                toolsLoaded: toolsLoaded,
                                logoTheme: logoTheme,
                                onConnect: (connectorId)=>runConnectorAction(connectorId, 'connect'),
                                onDisconnect: (connectorId)=>runConnectorAction(connectorId, 'disconnect'),
                                onCancelAuthorization: cancelConnectorAuthorization,
                                onOpenDetails: openConnectorDetails
                            }, connector.id, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 978,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 973,
                        columnNumber: 13
                    }, this),
                    needsComposioKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connector-gate",
                        role: "region",
                        "aria-label": t('connectors.gateTitle'),
                        "data-testid": "connector-gate",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "connector-gate-card",
                            href: "https://app.composio.dev",
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: ()=>onConnectorsTabClick?.('gate_card'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "connector-gate-icon",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "settings",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1014,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "connector-gate-title",
                                    children: t('connectors.gateTitle')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "connector-gate-body",
                                    children: t('connectors.gateBody')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "connector-gate-cta",
                                    children: [
                                        t('settings.connectorsGetApiKey'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "external-link",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1021,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1007,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 1001,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 946,
                columnNumber: 9
            }, this),
            detailConnector ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorDetailDrawer, {
                connector: detailConnector,
                disabled: needsComposioKey,
                pendingAction: pendingConnectorAction?.connectorId === detailConnector.id ? pendingConnectorAction.action : null,
                authorizationPending: connectorAuthorizationPending[detailConnector.id],
                authorizationCancelFailed: connectorAuthorizationCancelFailed[detailConnector.id] === true,
                authorizationError: connectorAuthorizationError[detailConnector.id] ?? null,
                toolsLoading: toolsLoading,
                toolsPreviewLoading: Boolean(toolPreviewLoadingIds[detailConnector.id]),
                toolsLoaded: Boolean(toolPreviewFetchedIds[detailConnector.id]) || toolPreviewFailedIds[detailConnector.id] === toolPreviewRetryToken || hasLoadedAllAdvertisedConnectorTools(detailConnector),
                logoTheme: logoTheme,
                onClose: ()=>setDetailConnectorId(null),
                onConnect: (connectorId)=>runConnectorAction(connectorId, 'connect'),
                onDisconnect: (connectorId)=>runConnectorAction(connectorId, 'disconnect'),
                onCancelAuthorization: cancelConnectorAuthorization,
                onLoadMoreTools: (connectorId, cursor)=>hydrateToolPreview(connectorId, cursor)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 1029,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
        lineNumber: 840,
        columnNumber: 5
    }, this);
}
_s(ConnectorsBrowser, "hdWuQLaY8RqtCKcFXbEelmysbkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"]
    ];
});
_c = ConnectorsBrowser;
function ConnectorCard({ connector, disabled = false, pendingAction, authorizationPending, authorizationCancelFailed, toolsLoading: _toolsLoading, toolsLoaded, logoTheme, onConnect, onDisconnect, onCancelAuthorization, onOpenDetails }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const isConnecting = pendingAction === 'connect';
    const isDisconnecting = pendingAction === 'disconnect';
    const isConnected = connector.status === 'connected';
    const isAuthorizationPending = !isConnected && authorizationPending !== undefined;
    const isPending = pendingAction !== null || isAuthorizationPending;
    const canConnect = !disabled && !isPending && connector.status === 'available';
    const canDisconnect = !disabled && !isPending && isConnected;
    const toolCount = getConnectorDisplayToolCount(connector);
    const showToolsBadge = connector.toolCount !== undefined || connector.tools.length > 0 || toolsLoaded;
    const toolsBadgeLabel = formatToolsBadge(toolCount, t);
    const categoryLabel = connectorCategoryLabel(connector.category, t);
    function openDetails() {
        if (disabled) return;
        onOpenDetails(connector.id);
    }
    function onKeyActivate(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        if (event.target !== event.currentTarget) return;
        event.preventDefault();
        openDetails();
    }
    function stop(event) {
        event.stopPropagation();
    }
    function continueAuthorization(event) {
        stop(event);
        if (!authorizationPending?.redirectUrl) return;
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openExternalUrl"])(authorizationPending.redirectUrl);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `connector-card status-${connector.status}${disabled ? ' is-locked' : ''}`,
        "data-connector-id": connector.id,
        role: "button",
        tabIndex: disabled ? -1 : 0,
        "aria-disabled": disabled || undefined,
        "aria-label": t('connectors.openDetailsAria', {
            name: connector.name
        }),
        onClick: openDetails,
        onKeyDown: onKeyActivate,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "connector-card-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorLogo"], {
                        connector: connector,
                        theme: logoTheme,
                        size: "sm"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 1133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connector-card-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "connector-card-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "connector-card-title-name",
                                        children: connector.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1144,
                                        columnNumber: 13
                                    }, this),
                                    isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `connector-status-dot connector-card-title-dot status-${connector.status}`,
                                        "aria-label": statusLabel(connector.status, t),
                                        title: statusLabel(connector.status, t),
                                        role: "img"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 15
                                    }, this) : isAuthorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "connector-status-dot connector-card-title-dot status-pending",
                                        "aria-label": t('connectors.authorizationPending'),
                                        title: t('connectors.authorizationPending'),
                                        role: "img"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "connector-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "connector-meta-item connector-meta-category",
                                        title: categoryLabel,
                                        children: categoryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "connector-meta-tools",
                                        "aria-hidden": !showToolsBadge,
                                        children: showToolsBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "connector-tools-badge is-ready",
                                            title: toolsBadgeLabel,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: toolsBadgeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 17
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 1134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "connector-card-actions",
                        children: [
                            isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `icon-only connector-action is-disconnect${isDisconnecting ? ' is-loading' : ''}`,
                                disabled: !canDisconnect,
                                "aria-busy": isDisconnecting || undefined,
                                "aria-label": t('connectors.disconnect'),
                                title: t('connectors.disconnect'),
                                tabIndex: disabled ? -1 : undefined,
                                onMouseDown: stop,
                                onKeyDown: stop,
                                onClick: (e)=>{
                                    stop(e);
                                    onDisconnect(connector.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: isDisconnecting ? 'spinner' : 'close',
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1187,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `icon-only connector-action is-connect${isConnecting || isAuthorizationPending ? ' is-loading' : ''}`,
                                disabled: !canConnect,
                                "aria-busy": isConnecting || isAuthorizationPending || undefined,
                                "aria-label": isAuthorizationPending ? t('connectors.authorizationPending') : t('connectors.connect'),
                                title: isAuthorizationPending ? t('connectors.authorizationPendingHint') : t('connectors.connect'),
                                tabIndex: disabled ? -1 : undefined,
                                onMouseDown: stop,
                                onKeyDown: stop,
                                onClick: (e)=>{
                                    stop(e);
                                    onConnect(connector.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: isConnecting || isAuthorizationPending ? 'spinner' : 'plus',
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1220,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1205,
                                columnNumber: 13
                            }, this),
                            isAuthorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-only connector-action is-cancel-authorization",
                                "aria-label": t('connectors.cancelAuthorization'),
                                title: t('connectors.cancelAuthorization'),
                                onMouseDown: stop,
                                onKeyDown: stop,
                                onClick: (e)=>{
                                    stop(e);
                                    onCancelAuthorization(connector.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1236,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1224,
                                columnNumber: 13
                            }, this) : null,
                            connector.status === 'error' || connector.status === 'disabled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `connector-status-pill status-${connector.status}`,
                                children: statusLabel(connector.status, t)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1240,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                        lineNumber: 1185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 1132,
                columnNumber: 7
            }, this),
            authorizationCancelFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "connector-authorization-hint connector-authorization-error",
                role: "alert",
                children: AUTHORIZATION_CANCEL_FAILED_MESSAGE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 1247,
                columnNumber: 9
            }, this) : null,
            isAuthorizationPending && authorizationPending.redirectUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "connector-authorization-link",
                title: t('connectors.authorizationPendingHint'),
                onClick: continueAuthorization,
                children: CONNECTOR_AUTH_CONTINUE_LABEL
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                lineNumber: 1252,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
        lineNumber: 1122,
        columnNumber: 5
    }, this);
}
_s1(ConnectorCard, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c1 = ConnectorCard;
function statusLabel(status, t) {
    switch(status){
        case 'available':
            return t('connectors.statusAvailable');
        case 'connected':
            return t('connectors.statusConnected');
        case 'error':
            return t('connectors.statusError');
        case 'disabled':
            return t('connectors.statusDisabled');
    }
}
function connectorCategoryLabel(category, t) {
    const normalized = category.trim().toLowerCase();
    const key = CONNECTOR_CATEGORY_KEYS[normalized];
    return key ? t(key) : category;
}
function formatToolsBadge(count, t) {
    if (count === 0) return t('connectors.toolsBadgeNone');
    if (count === 1) return t('connectors.toolsBadgeOne', {
        n: count
    });
    return t('connectors.toolsBadgeMany', {
        n: count
    });
}
function ConnectorDetailDrawer({ connector, disabled, pendingAction, authorizationPending, authorizationCancelFailed, authorizationError, toolsLoading, toolsPreviewLoading, toolsLoaded, logoTheme, onClose, onConnect, onDisconnect, onCancelAuthorization, onLoadMoreTools }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const isConnected = connector.status === 'connected';
    const isConnecting = pendingAction === 'connect';
    const isDisconnecting = pendingAction === 'disconnect';
    const isAuthorizationPending = !isConnected && authorizationPending !== undefined;
    const isPending = pendingAction !== null || isAuthorizationPending;
    const canConnect = !disabled && !isPending && connector.status === 'available';
    const canDisconnect = !disabled && !isPending && isConnected;
    const accountLabel = getDisplayableConnectorAccountLabel(connector);
    const actualToolCount = connector.tools.length;
    const toolCount = getConnectorDisplayToolCount(connector);
    const isLoadingTools = toolsPreviewLoading || !toolsLoaded || toolsLoading && actualToolCount === 0;
    const toolDetailsUnavailable = toolsLoaded && actualToolCount === 0 && toolCount > 0;
    const showToolsBadge = connector.toolCount !== undefined || actualToolCount > 0 || toolsLoaded;
    const closeBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryLabel = connectorCategoryLabel(connector.category, t);
    const toolsBadgeLabel = formatToolsBadge(toolCount, t);
    function continueAuthorization(event) {
        event.stopPropagation();
        if (!authorizationPending?.redirectUrl) return;
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openExternalUrl"])(authorizationPending.redirectUrl);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorDetailDrawer.useEffect": ()=>{
            function onKey(e) {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    onClose();
                }
            }
            document.addEventListener('keydown', onKey);
            closeBtnRef.current?.focus();
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return ({
                "ConnectorDetailDrawer.useEffect": ()=>{
                    document.removeEventListener('keydown', onKey);
                    document.body.style.overflow = previousOverflow;
                }
            })["ConnectorDetailDrawer.useEffect"];
        }
    }["ConnectorDetailDrawer.useEffect"], [
        onClose
    ]);
    const statusTone = isAuthorizationPending ? 'pending' : connector.status;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "connector-drawer-backdrop",
        role: "presentation",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "connector-drawer",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "connector-drawer-title",
            "data-testid": "connector-drawer",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "connector-drawer-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorLogo"], {
                            connector: connector,
                            theme: logoTheme,
                            size: "lg"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "connector-drawer-titles",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "connector-drawer-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: categoryLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "connector-meta-dot",
                                            "aria-hidden": true,
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: connector.provider
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "connector-drawer-title",
                                    children: connector.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "connector-drawer-status",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `connector-status-pill status-${statusTone}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "connector-status-dot",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 17
                                                }, this),
                                                isAuthorizationPending ? t('connectors.authorizationPending') : statusLabel(connector.status, t)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1392,
                                            columnNumber: 15
                                        }, this),
                                        showToolsBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "connector-drawer-tool-count-chip",
                                            title: toolsBadgeLabel,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: toolsBadgeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                lineNumber: 1398,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1397,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1391,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: closeBtnRef,
                            type: "button",
                            className: "ghost connector-drawer-close",
                            onClick: onClose,
                            "aria-label": t('common.close'),
                            "data-testid": "connector-drawer-close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1411,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                    lineNumber: 1382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "connector-drawer-body",
                    children: [
                        connector.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "connector-drawer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "connector-drawer-section-title",
                                    children: t('connectors.aboutLabel')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "connector-drawer-description",
                                    children: connector.description
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1419,
                                    columnNumber: 15
                                }, this),
                                isAuthorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "connector-authorization-block",
                                    role: "status",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "connector-authorization-hint",
                                            children: t('connectors.authorizationPendingHint')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1422,
                                            columnNumber: 19
                                        }, this),
                                        authorizationPending.redirectUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "connector-authorization-link",
                                            onClick: continueAuthorization,
                                            children: CONNECTOR_AUTH_CONTINUE_LABEL
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1426,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1421,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1417,
                            columnNumber: 13
                        }, this) : null,
                        authorizationError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "connector-authorization-hint connector-authorization-error",
                            role: "alert",
                            children: authorizationError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1439,
                            columnNumber: 13
                        }, this) : null,
                        authorizationCancelFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "connector-authorization-hint connector-authorization-error",
                            role: "alert",
                            children: AUTHORIZATION_CANCEL_FAILED_MESSAGE
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1444,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "connector-drawer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "connector-drawer-section-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "connector-drawer-section-title",
                                            children: t('connectors.detailsLabel')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1451,
                                            columnNumber: 15
                                        }, this),
                                        isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `ghost connector-drawer-inline-action connector-action is-disconnect${isDisconnecting ? ' is-loading' : ''}`,
                                            disabled: !canDisconnect,
                                            "aria-busy": isDisconnecting || undefined,
                                            onClick: ()=>onDisconnect(connector.id),
                                            children: [
                                                isDisconnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "spinner",
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1460,
                                                    columnNumber: 38
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('connectors.disconnect')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1461,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "connector-drawer-details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('connectors.statusLabel')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1467,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: statusLabel(connector.status, t)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1468,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('connectors.categoryLabel')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1471,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: categoryLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1472,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('connectors.providerLabel')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1475,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: connector.provider
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1476,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1474,
                                            columnNumber: 15
                                        }, this),
                                        accountLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('connectors.account')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1480,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: accountLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1481,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1479,
                                            columnNumber: 17
                                        }, this) : null,
                                        connector.lastError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "connector-drawer-details-error",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: t('connectors.statusError')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1486,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: connector.lastError
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1485,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1465,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "connector-drawer-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "connector-drawer-section-title",
                                    children: [
                                        t('connectors.toolsSection'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "connector-drawer-count",
                                            children: toolCount
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1495,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1494,
                                    columnNumber: 13
                                }, this),
                                isLoadingTools ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "connector-drawer-empty",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "spinner",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 53
                                        }, this),
                                        " ",
                                        t('connectors.toolsLoading')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1498,
                                    columnNumber: 15
                                }, this) : toolDetailsUnavailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "connector-drawer-empty",
                                    children: t('connectors.toolDetailsUnavailable', {
                                        n: toolCount
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 15
                                }, this) : actualToolCount === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "connector-drawer-empty",
                                    children: t('connectors.noToolsAvailable')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "connector-drawer-tools",
                                            children: connector.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "connector-drawer-tool",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "connector-drawer-tool-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "connector-drawer-tool-title",
                                                                    children: tool.title || tool.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                                    lineNumber: 1509,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `connector-drawer-tool-badge side-${tool.safety.sideEffect}`,
                                                                    title: tool.safety.reason,
                                                                    children: tool.safety.sideEffect
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                                    lineNumber: 1510,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                            lineNumber: 1508,
                                                            columnNumber: 23
                                                        }, this),
                                                        tool.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "connector-drawer-tool-desc",
                                                            children: tool.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                            lineNumber: 1518,
                                                            columnNumber: 25
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "connector-drawer-tool-name",
                                                            children: tool.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                            lineNumber: 1520,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tool.name, true, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1507,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1505,
                                            columnNumber: 17
                                        }, this),
                                        connector.toolsNextCursor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ghost connector-drawer-load-more",
                                            disabled: toolsPreviewLoading,
                                            onClick: ()=>onLoadMoreTools(connector.id, connector.toolsNextCursor),
                                            children: [
                                                toolsPreviewLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "spinner",
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1531,
                                                    columnNumber: 44
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('connectors.loadMoreTools')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                                    lineNumber: 1532,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                            lineNumber: 1525,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1493,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                    lineNumber: 1415,
                    columnNumber: 9
                }, this),
                !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "connector-drawer-foot",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `primary connector-action is-connect${isConnecting || isAuthorizationPending ? ' is-loading' : ''}`,
                            disabled: !canConnect,
                            "aria-busy": isConnecting || isAuthorizationPending || undefined,
                            onClick: ()=>onConnect(connector.id),
                            children: [
                                isConnecting || isAuthorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "spinner",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1549,
                                    columnNumber: 57
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isAuthorizationPending ? t('connectors.authorizationPending') : t('connectors.connect')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                    lineNumber: 1550,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1542,
                            columnNumber: 13
                        }, this),
                        isAuthorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ghost connector-action is-cancel-authorization",
                            onClick: ()=>onCancelAuthorization(connector.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('connectors.cancelAuthorization')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                                lineNumber: 1558,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                            lineNumber: 1553,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
                    lineNumber: 1541,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
            lineNumber: 1374,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ConnectorsBrowser.tsx",
        lineNumber: 1367,
        columnNumber: 5
    }, this);
}
_s2(ConnectorDetailDrawer, "05j8J/PxnH2nPPhxDn0tv84ya/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c2 = ConnectorDetailDrawer;
function getDisplayableConnectorAccountLabel(connector) {
    if (!connector.accountLabel) return undefined;
    const provider = connector.auth?.provider ?? connector.provider.toLowerCase();
    if (provider === 'composio') return undefined;
    return connector.accountLabel;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ConnectorsBrowser");
__turbopack_context__.k.register(_c1, "ConnectorCard");
__turbopack_context__.k.register(_c2, "ConnectorDetailDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_ConnectorsBrowser_tsx_0u3e7ii._.js.map