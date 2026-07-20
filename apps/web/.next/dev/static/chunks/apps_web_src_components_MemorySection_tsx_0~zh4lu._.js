(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/MemorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemorySection",
    ()=>MemorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ConnectorLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/markdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryProfilePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MemoryProfilePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryHooksPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MemoryHooksPanel.tsx [app-client] (ecmascript)");
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
// All manually-selectable memory types. `profile` (the structured singleton)
// and `rule` (verified checks the POST loop enforces) join the original four
// so the editor type-picker and the saved-memory filter pills surface them.
const TYPES = [
    'profile',
    'user',
    'feedback',
    'project',
    'reference',
    'rule'
];
const EMPTY_DRAFT = {
    name: '',
    description: '',
    type: 'user',
    body: ''
};
// Small uppercase caption used above each form field. Centralised so
// every field renders with the same color/letter-spacing/baseline; this
// is what gives the editor a Settings-form rhythm rather than a stack
// of unlabelled inputs.
const FIELD_LABEL_STYLE = {
    display: 'block',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: 'var(--text-muted, #888)',
    marginBottom: 4
};
// Click-to-prefill examples shown above the editor when creating a new
// memory. Three starters cover the most common reasons a person writes
// a memory by hand: tell the assistant about themselves, lock in a
// repeated UI/output preference, or pin the current project. The
// strings live behind i18n keys so each chip stays localized.
const STARTERS = [
    {
        type: 'user',
        nameKey: 'settings.memoryStarterUserName',
        descKey: 'settings.memoryStarterUserDesc',
        bodyKey: 'settings.memoryStarterUserBody'
    },
    {
        type: 'feedback',
        nameKey: 'settings.memoryStarterFeedbackName',
        descKey: 'settings.memoryStarterFeedbackDesc',
        bodyKey: 'settings.memoryStarterFeedbackBody'
    },
    {
        type: 'project',
        nameKey: 'settings.memoryStarterProjectName',
        descKey: 'settings.memoryStarterProjectDesc',
        bodyKey: 'settings.memoryStarterProjectBody'
    }
];
const MEMORY_CONNECTOR_APP_IDS = [
    'notion',
    'figma',
    'linear',
    'google_drive',
    'github',
    'slack'
];
const MEMORY_CONNECTOR_APP_LABELS = {
    notion: 'Notion',
    figma: 'Figma',
    linear: 'Linear',
    google_drive: 'Google Drive',
    github: 'GitHub',
    slack: 'Slack'
};
const CONNECTOR_CALLBACK_MESSAGE_TYPE = 'open-design:connector-connected';
const MEMORY_CONNECTOR_PENDING_AUTH_STORAGE_KEY = 'od:memory:pending-connector-auth';
function isTrustedConnectorCallbackOrigin(origin) {
    const expectedOrigin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.origin;
    if (origin === expectedOrigin) return true;
    try {
        const url = new URL(origin);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
        return url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === '[::1]' || url.hostname === '::1';
    } catch  {
        return false;
    }
}
function readPendingConnectorAuthIds() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.sessionStorage.getItem(MEMORY_CONNECTOR_PENDING_AUTH_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        if (!Array.isArray(parsed)) return new Set();
        return new Set(parsed.filter((id)=>typeof id === 'string' && id.trim().length > 0));
    } catch  {
        return new Set();
    }
}
function writePendingConnectorAuthIds(ids) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (ids.size === 0) {
            window.sessionStorage.removeItem(MEMORY_CONNECTOR_PENDING_AUTH_STORAGE_KEY);
            return;
        }
        window.sessionStorage.setItem(MEMORY_CONNECTOR_PENDING_AUTH_STORAGE_KEY, JSON.stringify([
            ...ids
        ]));
    } catch  {
    // Session storage can be blocked; the in-memory state still works.
    }
}
async function fetchMemoryList() {
    const resp = await fetch('/api/memory');
    if (!resp.ok) {
        return {
            enabled: true,
            chatExtractionEnabled: true,
            profileEnabled: true,
            rewriteEnabled: true,
            verifyEnabled: true,
            rootDir: '',
            index: '',
            entries: [],
            extraction: null
        };
    }
    return await resp.json();
}
async function fetchMemoryTree() {
    const resp = await fetch('/api/memory/tree');
    if (!resp.ok) return [];
    const json = await resp.json();
    return json.tree ?? [];
}
async function fetchMemoryEntry(id) {
    const resp = await fetch(`/api/memory/${encodeURIComponent(id)}`);
    if (!resp.ok) return null;
    const json = await resp.json();
    return json.entry ?? null;
}
async function saveMemoryEntry(draft) {
    const url = draft.id ? `/api/memory/${encodeURIComponent(draft.id)}` : '/api/memory';
    const resp = await fetch(url, {
        method: draft.id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(draft)
    });
    if (!resp.ok) return null;
    const json = await resp.json();
    return json.entry ?? null;
}
function memoryEntryIdForConnectorSuggestion(suggestion) {
    return /^[a-z0-9_]+$/.test(suggestion.id) ? suggestion.id : undefined;
}
async function deleteMemoryEntry(id) {
    const resp = await fetch(`/api/memory/${encodeURIComponent(id)}`, {
        method: 'DELETE'
    });
    return resp.ok;
}
async function saveMemoryIndex(index) {
    const resp = await fetch('/api/memory/index', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            index
        })
    });
    return resp.ok;
}
async function setMemoryEnabled(enabled) {
    const resp = await fetch('/api/memory/config', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            enabled
        })
    });
    return resp.ok;
}
// Patch a single per-hook config flag. The PATCH parser merges any subset of
// { chatExtractionEnabled, profileEnabled, rewriteEnabled, verifyEnabled } so
// the hooks panel can flip one flag without re-sending the others.
async function patchMemoryConfigFlag(flag, value) {
    const resp = await fetch('/api/memory/config', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            [flag]: value
        })
    });
    return resp.ok;
}
async function fetchExtractions() {
    const resp = await fetch('/api/memory/extractions');
    if (!resp.ok) return [];
    const json = await resp.json();
    return json.extractions ?? [];
}
async function fetchMemoryConnectors() {
    const resp = await fetch('/api/connectors/discovery?hydrateTools=false');
    if (!resp.ok) return [];
    const json = await resp.json();
    return json.connectors ?? [];
}
async function suggestConnectorMemories(connectorIds, context = {}) {
    const body = {
        connectorIds
    };
    if (context.chatAgentId) body.chatAgentId = context.chatAgentId;
    if (context.chatModel) body.chatModel = context.chatModel;
    const resp = await fetch('/api/memory/connectors/suggest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!resp.ok) return null;
    return await resp.json();
}
function describeConnectorReadIssue(result) {
    const failed = result.connectors.filter((connector)=>connector.status === 'failed');
    const skipped = result.connectors.filter((connector)=>connector.status === 'skipped');
    const firstIssue = failed[0] ?? skipped[0];
    if (!firstIssue) return null;
    const connectorName = firstIssue.connectorName || MEMORY_CONNECTOR_APP_LABELS[firstIssue.connectorId] || firstIssue.connectorId;
    const reason = (firstIssue.error || firstIssue.summary || '').trim();
    const suffix = reason ? ` ${reason}` : '';
    if (failed.length > 0) {
        return `Couldn't read ${connectorName}.${suffix}`;
    }
    return `No readable content from ${connectorName}.${suffix}`;
}
function providerDisplayName(provider) {
    if (provider?.credentialSource === 'chat-cli') {
        if (provider.kind === 'anthropic') return 'Claude Code';
        return 'Local CLI';
    }
    switch(provider?.kind){
        case 'anthropic':
            return 'Anthropic';
        case 'azure':
            return 'Azure OpenAI';
        case 'google':
            return 'Google Gemini';
        case 'ollama':
            return 'Ollama';
        case 'openai':
            return 'OpenAI';
        default:
            return 'Memory model';
    }
}
function parseProviderError(raw) {
    const jsonStart = raw.indexOf('{');
    let message = raw.trim();
    let code = '';
    let status = null;
    if (jsonStart >= 0) {
        try {
            const parsed = JSON.parse(raw.slice(jsonStart));
            const error = parsed?.error;
            if (typeof error?.message === 'string') message = error.message;
            else if (typeof parsed?.message === 'string') message = parsed.message;
            if (typeof error?.code === 'string') code = error.code;
            else if (typeof parsed?.code === 'string') code = parsed.code;
            if (typeof parsed?.status === 'number') status = parsed.status;
            else if (typeof error?.status === 'number') status = error.status;
        } catch  {
        // Fall through to regex parsing below.
        }
    }
    const statusMatch = /\b(4\d\d|5\d\d)\b/.exec(raw);
    if (status === null && statusMatch?.[1]) status = Number(statusMatch[1]);
    return {
        message: message.replace(/\s+/g, ' ').trim(),
        code,
        status
    };
}
function describeExtractionFailure(record) {
    if (record.phase !== 'failed' || !record.error) return null;
    const providerName = providerDisplayName(record.provider);
    const usesChatCli = record.provider?.credentialSource === 'chat-cli';
    const parsed = parseProviderError(record.error);
    const haystack = `${parsed.message} ${parsed.code} ${record.error}`.toLowerCase();
    const source = record.kind === 'connector' ? 'Connected apps were read, but OpenDesign could not turn that context into memory.' : 'OpenDesign could not run memory extraction for this chat.';
    if (parsed.status === 401 || /token[_ -]?expired|authentication token has expired|invalid[_ -]?api[_ -]?key|unauthorized/.test(haystack)) {
        return {
            title: `${providerName} authentication expired`,
            detail: source,
            action: usesChatCli ? 'Sign in to the selected Local CLI or choose a different Memory model.' : 'Update the Memory extraction model key or sign in again.'
        };
    }
    if (parsed.status === 429 || /rate limit|quota|too many requests|insufficient_quota/.test(haystack)) {
        return {
            title: `${providerName} quota or rate limit hit`,
            detail: source,
            action: 'Try again later or switch the Memory extraction model.'
        };
    }
    if (/network|fetch failed|timeout|timed out|econnreset|enotfound/.test(haystack)) {
        return {
            title: `${providerName} request failed`,
            detail: source,
            action: usesChatCli ? 'Check the selected Local CLI and try again.' : 'Check the model provider connection and try again.'
        };
    }
    return {
        title: 'Memory extraction failed',
        detail: parsed.message || source,
        action: usesChatCli ? 'Try again after checking the selected Local CLI.' : 'Try again after checking the Memory extraction model settings.'
    };
}
function formatConnectorContextBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return 'No data';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(bytes < 10 * 1024 ? 1 : 0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function connectorAttemptName(attempt) {
    return attempt.connectorName || MEMORY_CONNECTOR_APP_LABELS[attempt.connectorId] || attempt.connectorId;
}
function connectorAttemptTitle(attempt) {
    const connectorName = connectorAttemptName(attempt);
    if (attempt.status === 'succeeded') return `Read ${connectorName}`;
    if (attempt.status === 'failed') return `Could not read ${connectorName}`;
    return `Skipped ${connectorName}`;
}
function connectorAttemptDetail(attempt) {
    const parts = [
        attempt.toolTitle || attempt.toolName,
        attempt.status === 'failed' ? attempt.error : null,
        attempt.summary
    ].map((part)=>part?.trim()).filter((part)=>Boolean(part));
    return parts.join(' · ');
}
function mergeMemoryConnector(current, next) {
    return {
        ...current,
        ...next,
        tools: next.tools.length > 0 ? next.tools : current.tools,
        toolCount: next.toolCount ?? current.toolCount,
        toolsNextCursor: next.toolsNextCursor ?? current.toolsNextCursor,
        toolsHasMore: next.toolsHasMore ?? current.toolsHasMore
    };
}
function upsertMemoryConnector(current, next) {
    if (!next) return current;
    let found = false;
    const merged = current.map((connector)=>{
        if (connector.id !== next.id) return connector;
        found = true;
        return mergeMemoryConnector(connector, next);
    });
    return found ? merged : [
        ...merged,
        next
    ];
}
function applyMemoryConnectorStatus(connector, status) {
    const { accountLabel: _accountLabel, lastError: _lastError, ...base } = connector;
    return {
        ...base,
        ...status
    };
}
function applyMemoryConnectorStatuses(current, statuses) {
    if (Object.keys(statuses).length === 0) return current;
    return current.map((connector)=>{
        const status = statuses[connector.id];
        if (!status) return connector;
        return applyMemoryConnectorStatus(connector, status);
    });
}
function connectorWithPendingAuthorization(connector) {
    const { accountLabel: _accountLabel, lastError: _lastError, ...base } = connector;
    return {
        ...base,
        status: base.status === 'disabled' ? 'disabled' : 'available'
    };
}
// Drop one extraction row server-side. Returns true on a 2xx — the
// listing always re-fetches from the SSE stream, so the UI doesn't need
// the new state back here.
async function deleteExtraction(id) {
    const resp = await fetch(`/api/memory/extractions/${encodeURIComponent(id)}`, {
        method: 'DELETE'
    });
    return resp.ok;
}
async function clearExtractionHistory() {
    const resp = await fetch('/api/memory/extractions', {
        method: 'DELETE'
    });
    return resp.ok;
}
// Map a record back to a single human label for the small badge that
// appears next to the row's preview text. Centralised so phase + skip
// reason render consistently across the empty banner and the list.
//
// `tone` only covers the four phases we actually render in the list —
// the `'deleted'` and `'cleared'` pseudo-phases ride the SSE channel
// and never show up in `extractions[]`, so they're filtered out before
// reaching describeRecord. We fall back to 'skipped' defensively in
// case a daemon-side regression sneaks one through.
function describeRecord(record, t) {
    const tone = record.phase === 'running' || record.phase === 'success' || record.phase === 'failed' ? record.phase : 'skipped';
    const phaseLabel = (()=>{
        switch(record.phase){
            case 'running':
                return t('settings.memoryExtractionPhaseRunning');
            case 'success':
                return t('settings.memoryExtractionPhaseSuccess');
            case 'skipped':
                return t('settings.memoryExtractionPhaseSkipped');
            case 'failed':
                return t('settings.memoryExtractionPhaseFailed');
            default:
                return record.phase;
        }
    })();
    const reasonLabel = (()=>{
        if (record.phase !== 'skipped') return null;
        const reason = record.reason;
        if (reason === 'no-provider') return t('settings.memoryExtractionSkipNoProvider');
        if (reason === 'memory-disabled') return t('settings.memoryExtractionSkipDisabled');
        if (reason === 'chat-disabled') return 'Chat conversation learning is off.';
        if (reason === 'empty-message') return t('settings.memoryExtractionSkipEmpty');
        if (reason === 'no-match') return t('settings.memoryExtractionSkipNoMatch');
        return null;
    })();
    // Records written before the `kind` field existed default to 'llm' —
    // that was the only writer at the time, so labelling them as such
    // keeps the history list legible after upgrading.
    const kind = record.kind ?? 'llm';
    const kindLabel = kind === 'heuristic' ? t('settings.memoryExtractionKindHeuristic') : kind === 'connector' ? 'Connected apps' : t('settings.memoryExtractionKindLlm');
    return {
        phaseLabel,
        reasonLabel,
        kindLabel,
        tone
    };
}
function formatRelativeTime(at, now) {
    const delta = Math.max(0, now - at);
    if (delta < 60_000) return `${Math.round(delta / 1000)}s`;
    if (delta < 3_600_000) return `${Math.round(delta / 60_000)}m`;
    if (delta < 86_400_000) return `${Math.round(delta / 3_600_000)}h`;
    return `${Math.round(delta / 86_400_000)}d`;
}
// Wall-clock timestamp shown next to the relative age. The user asked
// to "see when each extraction started" — relative ages on their own
// drift after the panel sits open for a few minutes, and "5m" gives no
// hint about whether that 5m was during today's session or a stale row
// from yesterday. We omit the date for same-day rows so the line stays
// short, and tack on the date for older rows.
function formatAbsoluteTime(at, now) {
    const date = new Date(at);
    const today = new Date(now);
    const sameDay = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
    const time = date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    if (sameDay) return time;
    const day = date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric'
    });
    return `${day} ${time}`;
}
function formatDuration(record) {
    if (!record.finishedAt) return null;
    const ms = Math.max(0, record.finishedAt - record.startedAt);
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60_000) return `${(ms / 1000).toFixed(1)}s`;
    return `${Math.round(ms / 1000)}s`;
}
function formatRelativeTimeAgo(at, now) {
    const relative = formatRelativeTime(at, now);
    return relative === '0s' ? 'just now' : `${relative} ago`;
}
function memoryCountLabel(count) {
    return count === 1 ? 'memory' : 'memories';
}
function extractionCardTitle(record, t) {
    const kind = record.kind ?? 'llm';
    if (kind !== 'connector') {
        return record.userMessagePreview || t('settings.memoryExtractions');
    }
    if (record.phase === 'running') return 'Scanning connected apps';
    if (record.phase === 'failed') return 'Connected app scan failed';
    if (record.phase === 'skipped') return 'Connected app scan skipped';
    if (record.phase === 'success') {
        const writtenCount = typeof record.writtenCount === 'number' ? record.writtenCount : null;
        if (writtenCount && writtenCount > 0) {
            return `Saved ${writtenCount} ${memoryCountLabel(writtenCount)}`;
        }
        return 'No new memories found';
    }
    return 'Connected app scan';
}
function extractionCardMeta(record, now, t) {
    const kind = record.kind ?? 'llm';
    const age = formatRelativeTimeAgo(record.startedAt, now);
    if (kind === 'connector') {
        if (record.phase === 'running') return 'Checking selected apps';
        if (record.phase === 'failed') return `Needs attention · ${age}`;
        if (record.phase === 'skipped') return `Skipped · ${age}`;
        if (record.phase === 'success') {
            const writtenCount = typeof record.writtenCount === 'number' ? record.writtenCount : null;
            const result = writtenCount && writtenCount > 0 ? 'From connected apps' : 'Checked selected apps';
            return `${result} · ${age}`;
        }
        return `Connected apps · ${age}`;
    }
    const duration = formatDuration(record);
    const parts = [
        formatAbsoluteTime(record.startedAt, now),
        formatRelativeTime(record.startedAt, now)
    ];
    if (duration) parts.push(`${t('settings.memoryExtractionDuration')} ${duration}`);
    if (record.phase === 'success' && typeof record.writtenCount === 'number') {
        parts.push(`${record.writtenCount} ${t('settings.memoryExtractionWritten')}`);
    }
    return parts.join(' · ');
}
function MemorySection({ onOpenConnectors, chatAgentId = null, chatModel = null } = {}) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const logoTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"])();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [chatExtractionEnabled, setChatExtractionEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // The three new per-hook flags (default-on). They live alongside the
    // existing chat-extraction flag and are surfaced through MemoryHooksPanel.
    const [profileEnabled, setProfileEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rewriteEnabled, setRewriteEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [verifyEnabled, setVerifyEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rootDir, setRootDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [indexDraft, setIndexDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memoryTree, setMemoryTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewId, setPreviewId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewBody, setPreviewBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [topTab, setTopTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('memories');
    const [addModalOpen, setAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [advancedModalOpen, setAdvancedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profile');
    // Brief inline confirmation after a manual save/create/delete. The
    // form vanishes on success and the existing list re-renders, but
    // those signals are subtle — a 1.8s pill makes "your click did
    // something" obvious without the heavyweight global toast.
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editingTarget = editing?.id ?? (editing ? 'new' : null);
    // Recent LLM-extraction attempts, newest first. Driven by a one-shot
    // fetch on mount + live SSE updates merged by id so phase transitions
    // (running → success) replace the row in place.
    const [extractions, setExtractions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectors, setConnectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectorStatuses, setConnectorStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [connectorsLoading, setConnectorsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedConnectorIds, setSelectedConnectorIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MemorySection.useState": ()=>new Set()
    }["MemorySection.useState"]);
    const [connectorExtracting, setConnectorExtracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectorSaving, setConnectorSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectorSuggestions, setConnectorSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSuggestionIds, setSelectedSuggestionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MemorySection.useState": ()=>new Set()
    }["MemorySection.useState"]);
    const [connectorAttempts, setConnectorAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectorContextBytes, setConnectorContextBytes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [connectorStatus, setConnectorStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectorError, setConnectorError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectingConnectorIds, setConnectingConnectorIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MemorySection.useState": ()=>new Set()
    }["MemorySection.useState"]);
    const [pendingConnectorAuthIds, setPendingConnectorAuthIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readPendingConnectorAuthIds);
    const [connectorConnectErrors, setConnectorConnectErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const connectorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(connectors);
    const fireFlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[fireFlash]": (kind)=>{
            setFlash({
                kind,
                key: Date.now()
            });
        }
    }["MemorySection.useCallback[fireFlash]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            if (!flash) return;
            const id = setTimeout({
                "MemorySection.useEffect.id": ()=>setFlash(null)
            }["MemorySection.useEffect.id"], 1800);
            return ({
                "MemorySection.useEffect": ()=>clearTimeout(id)
            })["MemorySection.useEffect"];
        }
    }["MemorySection.useEffect"], [
        flash
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            connectorsRef.current = connectors;
        }
    }["MemorySection.useEffect"], [
        connectors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            if (!editingTarget) return;
            editorRef.current?.scrollIntoView?.({
                block: 'start',
                behavior: 'smooth'
            });
            editorNameRef.current?.focus({
                preventScroll: true
            });
        }
    }["MemorySection.useEffect"], [
        editingTarget
    ]);
    const flashLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[flashLabel]": ()=>({
                created: t('settings.memoryFlashCreated'),
                saved: t('settings.memoryFlashSaved'),
                deleted: t('settings.memoryFlashDeleted'),
                indexSaved: t('settings.memoryFlashIndexSaved'),
                pathCopied: t('settings.memoryFlashPathCopied')
            })
    }["MemorySection.useMemo[flashLabel]"], [
        t
    ]);
    const onCopyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onCopyPath]": async ()=>{
            if (!rootDir) return;
            try {
                await navigator.clipboard.writeText(rootDir);
                fireFlash('pathCopied');
            } catch  {
                // Some sandboxed contexts block clipboard writes silently. Fall
                // back to a transient input so the user can still grab the path
                // with a manual select-all + copy.
                const input = document.createElement('input');
                input.value = rootDir;
                input.style.position = 'fixed';
                input.style.opacity = '0';
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                fireFlash('pathCopied');
            }
        }
    }["MemorySection.useCallback[onCopyPath]"], [
        rootDir,
        fireFlash
    ]);
    const TYPE_LABEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[TYPE_LABEL]": ()=>({
                profile: t('settings.memoryTypeProfile'),
                user: t('settings.memoryTypeUser'),
                feedback: t('settings.memoryTypeFeedback'),
                project: t('settings.memoryTypeProject'),
                reference: t('settings.memoryTypeReference'),
                rule: t('settings.memoryTypeRule')
            })
    }["MemorySection.useMemo[TYPE_LABEL]"], [
        t
    ]);
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[reload]": async ()=>{
            const [list, tree] = await Promise.all([
                fetchMemoryList(),
                fetchMemoryTree()
            ]);
            setEnabled(list.enabled);
            setChatExtractionEnabled(list.chatExtractionEnabled !== false);
            setProfileEnabled(list.profileEnabled !== false);
            setRewriteEnabled(list.rewriteEnabled !== false);
            setVerifyEnabled(list.verifyEnabled !== false);
            setRootDir(list.rootDir);
            setIndex(list.index);
            setEntries(list.entries);
            setMemoryTree(tree);
        }
    }["MemorySection.useCallback[reload]"], []);
    const reloadExtractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[reloadExtractions]": async ()=>{
            setIsRefreshing(true);
            try {
                const next = await fetchExtractions();
                setExtractions(next);
                return next;
            } finally{
                setIsRefreshing(false);
            }
        }
    }["MemorySection.useCallback[reloadExtractions]"], []);
    const reloadConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[reloadConnectors]": async ()=>{
            setConnectorsLoading(true);
            try {
                const statusesPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorStatuses"])();
                const connectorsPromise = fetchMemoryConnectors();
                const statuses = await statusesPromise;
                setConnectorStatuses(statuses);
                setConnectors({
                    "MemorySection.useCallback[reloadConnectors]": (prev)=>applyMemoryConnectorStatuses(prev, statuses)
                }["MemorySection.useCallback[reloadConnectors]"]);
                setConnectors(applyMemoryConnectorStatuses(await connectorsPromise, statuses));
            } finally{
                setConnectorsLoading(false);
            }
        }
    }["MemorySection.useCallback[reloadConnectors]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            void reload();
            void reloadExtractions();
        }
    }["MemorySection.useEffect"], [
        reload,
        reloadExtractions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            if (activeTab !== 'connected') return;
            void reloadConnectors();
        }
    }["MemorySection.useEffect"], [
        activeTab,
        reloadConnectors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            writePendingConnectorAuthIds(pendingConnectorAuthIds);
        }
    }["MemorySection.useEffect"], [
        pendingConnectorAuthIds
    ]);
    // Live updates: when the daemon emits a memory change event (chat
    // hook, LLM extractor, settings PATCH from a different tab, curl…),
    // re-fetch the list so what the user sees stays in sync. We
    // deliberately ignore events the user just triggered themselves
    // (manual upserts/deletes via this same panel) by listening only to
    // the broader signals — the local code already updated state
    // optimistically, but a re-fetch keeps mtime / index in sync anyway,
    // so we just always reload on any change. EventSource auto-reconnects
    // on temporary daemon hiccups.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            const es = new EventSource('/api/memory/events');
            es.addEventListener('change', {
                "MemorySection.useEffect": (raw)=>{
                    try {
                        const ev = JSON.parse(raw.data);
                        // Don't reload if the event payload is just a connection ping.
                        if (!ev || !ev.kind) return;
                        void reload();
                    } catch  {
                    // Malformed — ignore.
                    }
                }
            }["MemorySection.useEffect"]);
            es.addEventListener('extraction', {
                "MemorySection.useEffect": (raw)=>{
                    try {
                        const ev = JSON.parse(raw.data);
                        if (!ev || !ev.id) return;
                        // Pseudo-phases: the daemon emits these synthetically when a
                        // row is dropped from the buffer, either by the manual delete
                        // button per row or by the "Clear" affordance at the top.
                        if (ev.phase === 'cleared') {
                            setExtractions([]);
                            return;
                        }
                        if (ev.phase === 'deleted') {
                            setExtractions({
                                "MemorySection.useEffect": (prev)=>prev.filter({
                                        "MemorySection.useEffect": (r)=>r.id !== ev.id
                                    }["MemorySection.useEffect"])
                            }["MemorySection.useEffect"]);
                            return;
                        }
                        // Merge by id: phase transitions for an in-flight attempt
                        // collapse onto a single row instead of stacking N entries
                        // for the same attempt. New ids are unshifted so the latest
                        // appears at the top.
                        setExtractions({
                            "MemorySection.useEffect": (prev)=>{
                                const existing = prev.findIndex({
                                    "MemorySection.useEffect.existing": (r)=>r.id === ev.id
                                }["MemorySection.useEffect.existing"]);
                                if (existing >= 0) {
                                    const next = prev.slice();
                                    next[existing] = ev;
                                    return next;
                                }
                                return [
                                    ev,
                                    ...prev
                                ].slice(0, 30);
                            }
                        }["MemorySection.useEffect"]);
                    } catch  {
                    // Malformed — ignore.
                    }
                }
            }["MemorySection.useEffect"]);
            return ({
                "MemorySection.useEffect": ()=>{
                    es.close();
                }
            })["MemorySection.useEffect"];
        }
    }["MemorySection.useEffect"], [
        reload
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[filtered]": ()=>{
            if (filter === 'all') return entries;
            return entries.filter({
                "MemorySection.useMemo[filtered]": (e)=>e.type === filter
            }["MemorySection.useMemo[filtered]"]);
        }
    }["MemorySection.useMemo[filtered]"], [
        entries,
        filter
    ]);
    // The "no API key" banner only shows when the most recent attempt
    // skipped for that specific reason. We don't show it for
    // memory-disabled (the user's own toggle) or empty-message (a
    // routine no-op on tool-only turns); those skips just appear in the
    // history list with a muted subtitle.
    const showNoProviderBanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[showNoProviderBanner]": ()=>{
            const latest = extractions[0];
            return Boolean(latest && latest.phase === 'skipped' && latest.reason === 'no-provider');
        }
    }["MemorySection.useMemo[showNoProviderBanner]"], [
        extractions
    ]);
    // Now-clock for relative timestamps in the extraction list. Refresh
    // every 30s so "12s ago" doesn't get stuck reading "12s ago" five
    // minutes after the user opened the panel. Using state (not a ref)
    // keeps the re-render in the React scheduler.
    const [nowClock, setNowClock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MemorySection.useState": ()=>Date.now()
    }["MemorySection.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            const id = setInterval({
                "MemorySection.useEffect.id": ()=>setNowClock(Date.now())
            }["MemorySection.useEffect.id"], 30_000);
            return ({
                "MemorySection.useEffect": ()=>clearInterval(id)
            })["MemorySection.useEffect"];
        }
    }["MemorySection.useEffect"], []);
    const connectorExtractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[connectorExtractions]": ()=>extractions.filter({
                "MemorySection.useMemo[connectorExtractions]": (record)=>record.kind === 'connector'
            }["MemorySection.useMemo[connectorExtractions]"])
    }["MemorySection.useMemo[connectorExtractions]"], [
        extractions
    ]);
    const visibleExtractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[visibleExtractions]": ()=>filter === 'all' ? extractions.filter({
                "MemorySection.useMemo[visibleExtractions]": (record)=>record.kind !== 'connector'
            }["MemorySection.useMemo[visibleExtractions]"]) : []
    }["MemorySection.useMemo[visibleExtractions]"], [
        extractions,
        filter
    ]);
    const unifiedMemoryCount = filtered.length + visibleExtractions.length;
    const memoryConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[memoryConnectors]": ()=>{
            const byId = new Map(connectors.map({
                "MemorySection.useMemo[memoryConnectors]": (connector)=>[
                        connector.id,
                        connector
                    ]
            }["MemorySection.useMemo[memoryConnectors]"]));
            return MEMORY_CONNECTOR_APP_IDS.map({
                "MemorySection.useMemo[memoryConnectors]": (id)=>{
                    const connector = byId.get(id);
                    const status = connectorStatuses[id];
                    if (connector) {
                        return status ? applyMemoryConnectorStatus(connector, status) : connector;
                    }
                    return {
                        id,
                        name: MEMORY_CONNECTOR_APP_LABELS[id] ?? id,
                        provider: 'composio',
                        category: 'Memory source',
                        status: status?.status ?? 'available',
                        ...status?.accountLabel ? {
                            accountLabel: status.accountLabel
                        } : {},
                        ...status?.lastError ? {
                            lastError: status.lastError
                        } : {},
                        tools: []
                    };
                }
            }["MemorySection.useMemo[memoryConnectors]"]);
        }
    }["MemorySection.useMemo[memoryConnectors]"], [
        connectorStatuses,
        connectors
    ]);
    const connectorIdsWithDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[connectorIdsWithDetails]": ()=>new Set(connectors.map({
                "MemorySection.useMemo[connectorIdsWithDetails]": (connector)=>connector.id
            }["MemorySection.useMemo[connectorIdsWithDetails]"]))
    }["MemorySection.useMemo[connectorIdsWithDetails]"], [
        connectors
    ]);
    const connectedMemoryConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[connectedMemoryConnectors]": ()=>memoryConnectors.filter({
                "MemorySection.useMemo[connectedMemoryConnectors]": (connector)=>connector.status === 'connected'
            }["MemorySection.useMemo[connectedMemoryConnectors]"])
    }["MemorySection.useMemo[connectedMemoryConnectors]"], [
        memoryConnectors
    ]);
    const selectedConnectedConnectorIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[selectedConnectedConnectorIds]": ()=>[
                ...selectedConnectorIds
            ].filter({
                "MemorySection.useMemo[selectedConnectedConnectorIds]": (id)=>connectedMemoryConnectors.some({
                        "MemorySection.useMemo[selectedConnectedConnectorIds]": (connector)=>connector.id === id
                    }["MemorySection.useMemo[selectedConnectedConnectorIds]"])
            }["MemorySection.useMemo[selectedConnectedConnectorIds]"])
    }["MemorySection.useMemo[selectedConnectedConnectorIds]"], [
        selectedConnectorIds,
        connectedMemoryConnectors
    ]);
    const connectedCount = connectedMemoryConnectors.length;
    const connectorScanLabel = connectorExtracting ? 'Scanning apps' : selectedConnectedConnectorIds.length === 0 ? 'Select apps to scan' : 'Scan selected apps';
    const selectedConnectorSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[selectedConnectorSuggestions]": ()=>connectorSuggestions.filter({
                "MemorySection.useMemo[selectedConnectorSuggestions]": (suggestion)=>selectedSuggestionIds.has(suggestion.id)
            }["MemorySection.useMemo[selectedConnectorSuggestions]"])
    }["MemorySection.useMemo[selectedConnectorSuggestions]"], [
        connectorSuggestions,
        selectedSuggestionIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            setSelectedConnectorIds({
                "MemorySection.useEffect": (prev)=>{
                    const connectedIds = connectedMemoryConnectors.map({
                        "MemorySection.useEffect.connectedIds": (connector)=>connector.id
                    }["MemorySection.useEffect.connectedIds"]);
                    const connected = new Set(connectedIds);
                    const next = new Set([
                        ...prev
                    ].filter({
                        "MemorySection.useEffect": (id)=>connected.has(id)
                    }["MemorySection.useEffect"]));
                    return next.size === prev.size ? prev : next;
                }
            }["MemorySection.useEffect"]);
        }
    }["MemorySection.useEffect"], [
        connectedMemoryConnectors
    ]);
    const treeFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[treeFolders]": ()=>memoryTree.filter({
                "MemorySection.useMemo[treeFolders]": (node)=>node.kind === 'folder'
            }["MemorySection.useMemo[treeFolders]"])
    }["MemorySection.useMemo[treeFolders]"], [
        memoryTree
    ]);
    const treeChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[treeChildren]": ()=>{
            const map = new Map();
            for (const node of memoryTree){
                if (node.kind !== 'entry' || !node.parentId) continue;
                const list = map.get(node.parentId) ?? [];
                list.push(node);
                map.set(node.parentId, list);
            }
            return map;
        }
    }["MemorySection.useMemo[treeChildren]"], [
        memoryTree
    ]);
    const openPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[openPreview]": async (id)=>{
            if (previewId === id) {
                setPreviewId(null);
                setPreviewBody(null);
                return;
            }
            setPreviewId(id);
            setPreviewBody(null);
            const entry = await fetchMemoryEntry(id);
            setPreviewBody(entry?.body ?? '');
        }
    }["MemorySection.useCallback[openPreview]"], [
        previewId
    ]);
    const startEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[startEdit]": async (id)=>{
            const entry = await fetchMemoryEntry(id);
            if (!entry) return;
            setTopTab('memories');
            setAddModalOpen(true);
            setActiveTab('manual');
            setEditing({
                id: entry.id,
                name: entry.name,
                description: entry.description,
                type: entry.type,
                body: entry.body
            });
        }
    }["MemorySection.useCallback[startEdit]"], []);
    const startNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[startNew]": ()=>{
            setTopTab('memories');
            setAddModalOpen(true);
            setActiveTab('manual');
            setEditing({
                ...EMPTY_DRAFT
            });
        }
    }["MemorySection.useCallback[startNew]"], []);
    const cancelEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[cancelEdit]": ()=>{
            setEditing(null);
        }
    }["MemorySection.useCallback[cancelEdit]"], []);
    const toggleConnectorSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[toggleConnectorSelection]": (connectorId)=>{
            setSelectedConnectorIds({
                "MemorySection.useCallback[toggleConnectorSelection]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(connectorId)) {
                        next.delete(connectorId);
                    } else {
                        next.add(connectorId);
                    }
                    return next;
                }
            }["MemorySection.useCallback[toggleConnectorSelection]"]);
        }
    }["MemorySection.useCallback[toggleConnectorSelection]"], []);
    const refreshMemoryConnectorStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[refreshMemoryConnectorStatuses]": async ()=>{
            const statuses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorStatuses"])();
            const statusChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasConnectorStatusChanges"])(connectorsRef.current, statuses);
            setConnectorStatuses(statuses);
            setConnectors({
                "MemorySection.useCallback[refreshMemoryConnectorStatuses]": (prev)=>applyMemoryConnectorStatuses(prev, statuses)
            }["MemorySection.useCallback[refreshMemoryConnectorStatuses]"]);
            setPendingConnectorAuthIds({
                "MemorySection.useCallback[refreshMemoryConnectorStatuses]": (prev)=>{
                    const next = new Set(prev);
                    for (const connectorId of prev){
                        if (statuses[connectorId]?.status === 'connected') next.delete(connectorId);
                    }
                    return next.size === prev.size ? prev : next;
                }
            }["MemorySection.useCallback[refreshMemoryConnectorStatuses]"]);
            setConnectorConnectErrors({
                "MemorySection.useCallback[refreshMemoryConnectorStatuses]": (prev)=>{
                    let changed = false;
                    const next = {
                        ...prev
                    };
                    for (const [connectorId, status] of Object.entries(statuses)){
                        if (status.status === 'connected' && next[connectorId] !== undefined) {
                            delete next[connectorId];
                            changed = true;
                        }
                    }
                    return changed ? next : prev;
                }
            }["MemorySection.useCallback[refreshMemoryConnectorStatuses]"]);
            if (statusChanged) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
        }
    }["MemorySection.useCallback[refreshMemoryConnectorStatuses]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            if (pendingConnectorAuthIds.size === 0) return;
            const interval = window.setInterval({
                "MemorySection.useEffect.interval": ()=>{
                    void refreshMemoryConnectorStatuses();
                }
            }["MemorySection.useEffect.interval"], 2_000);
            const onFocus = {
                "MemorySection.useEffect.onFocus": ()=>{
                    void refreshMemoryConnectorStatuses();
                }
            }["MemorySection.useEffect.onFocus"];
            window.addEventListener('focus', onFocus);
            return ({
                "MemorySection.useEffect": ()=>{
                    window.clearInterval(interval);
                    window.removeEventListener('focus', onFocus);
                }
            })["MemorySection.useEffect"];
        }
    }["MemorySection.useEffect"], [
        pendingConnectorAuthIds,
        refreshMemoryConnectorStatuses
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemorySection.useEffect": ()=>{
            function onMessage(event) {
                const data = event.data;
                if (!data || typeof data !== 'object') return;
                if (data.type !== CONNECTOR_CALLBACK_MESSAGE_TYPE) return;
                if (!isTrustedConnectorCallbackOrigin(event.origin)) return;
                void refreshMemoryConnectorStatuses();
            }
            window.addEventListener('message', onMessage);
            return ({
                "MemorySection.useEffect": ()=>window.removeEventListener('message', onMessage)
            })["MemorySection.useEffect"];
        }
    }["MemorySection.useEffect"], [
        refreshMemoryConnectorStatuses
    ]);
    const onConnectMemoryConnector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onConnectMemoryConnector]": async (connectorId)=>{
            if (connectingConnectorIds.has(connectorId)) return;
            setConnectingConnectorIds({
                "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>new Set(prev).add(connectorId)
            }["MemorySection.useCallback[onConnectMemoryConnector]"]);
            setConnectorConnectErrors({
                "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>{
                    if (prev[connectorId] === undefined) return prev;
                    const next = {
                        ...prev
                    };
                    delete next[connectorId];
                    return next;
                }
            }["MemorySection.useCallback[onConnectMemoryConnector]"]);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectConnector"])(connectorId);
                if (result.connector?.status === 'connected') (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
                const requiresAuthorizationCompletion = result.auth?.kind === 'redirect_required' || result.auth?.kind === 'pending';
                setConnectors({
                    "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>upsertMemoryConnector(prev, requiresAuthorizationCompletion && result.connector ? connectorWithPendingAuthorization(result.connector) : result.connector)
                }["MemorySection.useCallback[onConnectMemoryConnector]"]);
                if (result.error) {
                    setConnectorConnectErrors({
                        "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>({
                                ...prev,
                                [connectorId]: result.error
                            })
                    }["MemorySection.useCallback[onConnectMemoryConnector]"]);
                    setPendingConnectorAuthIds({
                        "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>{
                            if (!prev.has(connectorId)) return prev;
                            const next = new Set(prev);
                            next.delete(connectorId);
                            return next;
                        }
                    }["MemorySection.useCallback[onConnectMemoryConnector]"]);
                    return;
                }
                if (result.auth?.kind === 'redirect_required' || result.auth?.kind === 'pending') {
                    setPendingConnectorAuthIds({
                        "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>new Set(prev).add(connectorId)
                    }["MemorySection.useCallback[onConnectMemoryConnector]"]);
                } else {
                    setPendingConnectorAuthIds({
                        "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>{
                            if (!prev.has(connectorId)) return prev;
                            const next = new Set(prev);
                            next.delete(connectorId);
                            return next;
                        }
                    }["MemorySection.useCallback[onConnectMemoryConnector]"]);
                }
                await refreshMemoryConnectorStatuses();
            } finally{
                setConnectingConnectorIds({
                    "MemorySection.useCallback[onConnectMemoryConnector]": (prev)=>{
                        if (!prev.has(connectorId)) return prev;
                        const next = new Set(prev);
                        next.delete(connectorId);
                        return next;
                    }
                }["MemorySection.useCallback[onConnectMemoryConnector]"]);
            }
        }
    }["MemorySection.useCallback[onConnectMemoryConnector]"], [
        connectingConnectorIds,
        refreshMemoryConnectorStatuses
    ]);
    const toggleConnectorSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[toggleConnectorSuggestion]": (suggestionId)=>{
            setSelectedSuggestionIds({
                "MemorySection.useCallback[toggleConnectorSuggestion]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(suggestionId)) {
                        next.delete(suggestionId);
                    } else {
                        next.add(suggestionId);
                    }
                    return next;
                }
            }["MemorySection.useCallback[toggleConnectorSuggestion]"]);
        }
    }["MemorySection.useCallback[toggleConnectorSuggestion]"], []);
    const onSuggestConnectorMemory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onSuggestConnectorMemory]": async ()=>{
            if (selectedConnectedConnectorIds.length === 0) return;
            setConnectorExtracting(true);
            setConnectorSuggestions([]);
            setSelectedSuggestionIds(new Set());
            setConnectorAttempts([]);
            setConnectorContextBytes(0);
            setConnectorStatus(null);
            setConnectorError(null);
            const startedAt = Date.now();
            try {
                const result = await suggestConnectorMemories(selectedConnectedConnectorIds, {
                    chatAgentId,
                    chatModel
                });
                if (!result) {
                    setConnectorError('Could not read connected apps. Try again from the Connectors tab.');
                    return;
                }
                const latestExtractions = await reloadExtractions();
                const latestFailure = latestExtractions.find({
                    "MemorySection.useCallback[onSuggestConnectorMemory].latestFailure": (record)=>record.kind === 'connector' && record.phase === 'failed' && record.startedAt >= startedAt - 5_000
                }["MemorySection.useCallback[onSuggestConnectorMemory].latestFailure"]);
                const friendlyFailure = latestFailure ? describeExtractionFailure(latestFailure) : null;
                setConnectorAttempts(result.connectors);
                setConnectorContextBytes(result.contextBytes);
                const succeeded = result.connectors.filter({
                    "MemorySection.useCallback[onSuggestConnectorMemory]": (connector)=>connector.status === 'succeeded'
                }["MemorySection.useCallback[onSuggestConnectorMemory]"]).length;
                if (friendlyFailure) {
                    setConnectorError([
                        friendlyFailure.title,
                        friendlyFailure.detail,
                        friendlyFailure.action
                    ].filter(Boolean).join(' '));
                } else if (result.suggestions.length > 0) {
                    setConnectorSuggestions(result.suggestions);
                    setSelectedSuggestionIds(new Set(result.suggestions.map({
                        "MemorySection.useCallback[onSuggestConnectorMemory]": (suggestion)=>suggestion.id
                    }["MemorySection.useCallback[onSuggestConnectorMemory]"])));
                    setConnectorStatus(`Found ${result.suggestions.length} suggested memor${result.suggestions.length === 1 ? 'y' : 'ies'} from ${succeeded} app${succeeded === 1 ? '' : 's'}. Review before saving.`);
                } else if (!result.attemptedLLM) {
                    setConnectorError(describeConnectorReadIssue(result) ?? 'No memory suggestions found. OpenDesign could not read useful content from the selected app yet.');
                } else {
                    setConnectorStatus(`Checked ${succeeded} selected app${succeeded === 1 ? '' : 's'}, but found no new memory suggestions.`);
                }
            } catch (err) {
                setConnectorError(err instanceof Error ? err.message : String(err));
            } finally{
                setConnectorExtracting(false);
            }
        }
    }["MemorySection.useCallback[onSuggestConnectorMemory]"], [
        chatAgentId,
        chatModel,
        reloadExtractions,
        selectedConnectedConnectorIds
    ]);
    const onDiscardConnectorSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onDiscardConnectorSuggestions]": ()=>{
            setConnectorSuggestions([]);
            setSelectedSuggestionIds(new Set());
            setConnectorAttempts([]);
            setConnectorContextBytes(0);
            setConnectorStatus(null);
        }
    }["MemorySection.useCallback[onDiscardConnectorSuggestions]"], []);
    const onSaveConnectorSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onSaveConnectorSuggestions]": async ()=>{
            if (selectedConnectorSuggestions.length === 0) return;
            setConnectorSaving(true);
            setConnectorError(null);
            try {
                const saved = [];
                const savedSuggestionIds = new Set();
                for (const suggestion of selectedConnectorSuggestions){
                    const entry = await saveMemoryEntry({
                        id: memoryEntryIdForConnectorSuggestion(suggestion),
                        name: suggestion.name,
                        description: suggestion.description,
                        type: suggestion.type,
                        body: suggestion.body
                    });
                    if (entry) {
                        saved.push(entry);
                        savedSuggestionIds.add(suggestion.id);
                    }
                }
                await reload();
                const savedEntriesById = new Map(saved.map({
                    "MemorySection.useCallback[onSaveConnectorSuggestions]": (entry)=>[
                            entry.id,
                            entry
                        ]
                }["MemorySection.useCallback[onSaveConnectorSuggestions]"]));
                setConnectorSuggestions({
                    "MemorySection.useCallback[onSaveConnectorSuggestions]": (prev)=>prev.filter({
                            "MemorySection.useCallback[onSaveConnectorSuggestions]": (suggestion)=>!savedSuggestionIds.has(suggestion.id)
                        }["MemorySection.useCallback[onSaveConnectorSuggestions]"])
                }["MemorySection.useCallback[onSaveConnectorSuggestions]"]);
                setSelectedSuggestionIds(new Set(selectedConnectorSuggestions.filter({
                    "MemorySection.useCallback[onSaveConnectorSuggestions]": (suggestion)=>!savedSuggestionIds.has(suggestion.id)
                }["MemorySection.useCallback[onSaveConnectorSuggestions]"]).map({
                    "MemorySection.useCallback[onSaveConnectorSuggestions]": (suggestion)=>suggestion.id
                }["MemorySection.useCallback[onSaveConnectorSuggestions]"])));
                setConnectorStatus(`Saved ${savedEntriesById.size} memor${savedEntriesById.size === 1 ? 'y' : 'ies'} from connected apps.`);
                if (savedEntriesById.size !== selectedConnectorSuggestions.length) {
                    setConnectorError(`Saved ${savedEntriesById.size} of ${selectedConnectorSuggestions.length} selected memories. Please try the remaining items again.`);
                }
            } catch (err) {
                setConnectorError(err instanceof Error ? err.message : String(err));
            } finally{
                setConnectorSaving(false);
            }
        }
    }["MemorySection.useCallback[onSaveConnectorSuggestions]"], [
        reload,
        selectedConnectorSuggestions
    ]);
    const onSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onSave]": async ()=>{
            if (!editing) return;
            if (!editing.name.trim()) return;
            const wasNew = !editing.id;
            setBusy(true);
            try {
                const entry = await saveMemoryEntry(editing);
                if (entry) {
                    await reload();
                    setEditing(null);
                    setAddModalOpen(false);
                    fireFlash(wasNew ? 'created' : 'saved');
                }
            } finally{
                setBusy(false);
            }
        }
    }["MemorySection.useCallback[onSave]"], [
        editing,
        reload,
        fireFlash
    ]);
    const onDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onDelete]": async (id)=>{
            const ok = await deleteMemoryEntry(id);
            if (ok) {
                await reload();
                fireFlash('deleted');
            }
        }
    }["MemorySection.useCallback[onDelete]"], [
        reload,
        fireFlash
    ]);
    const onToggleEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onToggleEnabled]": async (next)=>{
            setEnabled(next);
            await setMemoryEnabled(next);
        }
    }["MemorySection.useCallback[onToggleEnabled]"], []);
    // Map each hook key to its setter so a single optimistic-set + rollback path
    // covers all four toggles.
    const HOOK_SETTERS = {
        profileEnabled: setProfileEnabled,
        rewriteEnabled: setRewriteEnabled,
        verifyEnabled: setVerifyEnabled,
        chatExtractionEnabled: setChatExtractionEnabled
    };
    const onToggleHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onToggleHook]": async (key, next)=>{
            const setter = HOOK_SETTERS[key];
            setter({
                "MemorySection.useCallback[onToggleHook]": ()=>next
            }["MemorySection.useCallback[onToggleHook]"]);
            const ok = await patchMemoryConfigFlag(key, next);
            if (!ok) setter({
                "MemorySection.useCallback[onToggleHook]": (current)=>!current
            }["MemorySection.useCallback[onToggleHook]"]);
        }
    }["MemorySection.useCallback[onToggleHook]"], // HOOK_SETTERS references stable useState setters, so the deps are empty.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const hookFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemorySection.useMemo[hookFlags]": ()=>({
                profileEnabled,
                rewriteEnabled,
                verifyEnabled,
                chatExtractionEnabled
            })
    }["MemorySection.useMemo[hookFlags]"], [
        profileEnabled,
        rewriteEnabled,
        verifyEnabled,
        chatExtractionEnabled
    ]);
    const onSaveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onSaveIndex]": async ()=>{
            if (indexDraft === null) return;
            setBusy(true);
            try {
                const ok = await saveMemoryIndex(indexDraft);
                if (ok) {
                    setIndex(indexDraft);
                    setIndexDraft(null);
                    fireFlash('indexSaved');
                }
            } finally{
                setBusy(false);
            }
        }
    }["MemorySection.useCallback[onSaveIndex]"], [
        indexDraft,
        fireFlash
    ]);
    const onDeleteExtraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onDeleteExtraction]": async (id)=>{
            // Optimistic removal: drop the row immediately so the click feels
            // instant. The SSE 'deleted' event will arrive moments later and is
            // a no-op against an already-removed id; if the request fails we
            // re-fetch to put the row back instead of silently lying.
            setExtractions({
                "MemorySection.useCallback[onDeleteExtraction]": (prev)=>prev.filter({
                        "MemorySection.useCallback[onDeleteExtraction]": (r)=>r.id !== id
                    }["MemorySection.useCallback[onDeleteExtraction]"])
            }["MemorySection.useCallback[onDeleteExtraction]"]);
            const ok = await deleteExtraction(id);
            if (!ok) {
                void reloadExtractions();
            }
        }
    }["MemorySection.useCallback[onDeleteExtraction]"], [
        reloadExtractions
    ]);
    const onClearExtractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemorySection.useCallback[onClearExtractions]": async ()=>{
            if (!window.confirm(t('settings.memoryExtractionsClearConfirm'))) return;
            setExtractions([]);
            const ok = await clearExtractionHistory();
            if (!ok) {
                void reloadExtractions();
            }
        }
    }["MemorySection.useCallback[onClearExtractions]"], [
        reloadExtractions,
        t
    ]);
    const memoryTabs = [
        {
            id: 'profile',
            label: t('settings.memoryProfileTab'),
            caption: t('settings.memoryProfileTabCaption'),
            icon: 'home'
        },
        {
            id: 'manual',
            label: 'Add manually',
            caption: 'Write a fact or preference',
            icon: 'edit'
        },
        {
            id: 'connected',
            label: 'Import from apps',
            caption: 'Scan connected tools',
            icon: 'link'
        }
    ];
    const renderMemoryEntry = (entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "library-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "library-card-info",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "library-card-title-row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "library-card-name",
                                children: entry.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1494,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1493,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "library-card-desc",
                            children: entry.description || '—'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1496,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                    lineNumber: 1492,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "memory-card-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "library-card-expand",
                            onClick: ()=>openPreview(entry.id),
                            title: t('settings.memoryPreview'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: previewId === entry.id ? 'chevron-down' : 'chevron-right',
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1507,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1501,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ghost library-card-action",
                            onClick: ()=>startEdit(entry.id),
                            title: t('settings.memoryEdit'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "edit",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1518,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1512,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ghost library-card-action",
                            onClick: ()=>onDelete(entry.id),
                            title: t('settings.memoryDelete'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1526,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1520,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                    lineNumber: 1500,
                    columnNumber: 8
                }, this),
                previewId === entry.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "library-preview",
                    style: {
                        width: '100%'
                    },
                    children: previewBody === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t('common.loading')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1532,
                        columnNumber: 14
                    }, this) : previewBody ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "library-preview-body",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(previewBody)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1534,
                        columnNumber: 14
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1538,
                        columnNumber: 14
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                    lineNumber: 1530,
                    columnNumber: 10
                }, this)
            ]
        }, entry.id, true, {
            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
            lineNumber: 1491,
            columnNumber: 6
        }, this);
    const renderExtractionCard = (record)=>{
        const desc = describeRecord(record, t);
        const title = extractionCardTitle(record, t);
        const meta = extractionCardMeta(record, nowClock, t);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `library-card memory-extraction-card is-${desc.tone}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "library-card-info",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "library-card-title-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "library-card-name",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `memory-extraction-pill is-${desc.tone}`,
                                    children: desc.phaseLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1559,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "library-card-badge",
                                    children: desc.kindLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1555,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "library-card-desc",
                            children: meta
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1566,
                            columnNumber: 11
                        }, this),
                        desc.reasonLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-extraction-reason",
                            children: desc.reasonLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1570,
                            columnNumber: 13
                        }, this) : null,
                        record.phase === 'failed' && record.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-extraction-failure",
                            children: (()=>{
                                const failure = describeExtractionFailure(record);
                                if (!failure) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: failure.title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1581,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: failure.detail
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 21
                                        }, this),
                                        failure.action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: failure.action
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1583,
                                            columnNumber: 39
                                        }, this) : null
                                    ]
                                }, void 0, true);
                            })()
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1575,
                            columnNumber: 13
                        }, this) : null,
                        Array.isArray(record.writtenIds) && record.writtenIds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-extraction-counts",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t('settings.memoryExtractionWritten')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1592,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "memory-extraction-ids",
                                    children: record.writtenIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "filter-pill",
                                            onClick: ()=>openPreview(id),
                                            title: id,
                                            children: id
                                        }, id, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1595,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1591,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                    lineNumber: 1554,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "memory-card-actions",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost library-card-action",
                        onClick: ()=>void onDeleteExtraction(record.id),
                        title: t('settings.memoryExtractionDelete'),
                        "aria-label": t('settings.memoryExtractionDelete'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1619,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1612,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                    lineNumber: 1611,
                    columnNumber: 9
                }, this)
            ]
        }, record.id, true, {
            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
            lineNumber: 1550,
            columnNumber: 7
        }, this);
    };
    const modalHost = typeof document === 'undefined' ? null : document.body;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `settings-section settings-section-card memory-create-section${enabled ? '' : ' is-disabled'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-head memory-control-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "memory-control-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "memory-title-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('settings.memory')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1636,
                                                columnNumber: 13
                                            }, this),
                                            rootDir ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "memory-info-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "memory-info-btn",
                                                        onClick: ()=>void onCopyPath(),
                                                        title: rootDir,
                                                        "aria-label": "Memory storage path — click to copy",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "info",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1657,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                        lineNumber: 1650,
                                                        columnNumber: 17
                                                    }, this),
                                                    flash?.kind === 'pathCopied' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "memory-path-copied-badge",
                                                        children: flashLabel.pathCopied
                                                    }, flash.key, false, {
                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                        lineNumber: 1660,
                                                        columnNumber: 19
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1649,
                                                columnNumber: 15
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hint",
                                        children: t('settings.memoryDescription')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1667,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1634,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "memory-header-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "memory-top-tabs",
                                        role: "tablist",
                                        "aria-label": t('settings.memory'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "tab",
                                                "aria-selected": topTab === 'memories',
                                                className: `memory-top-tab${topTab === 'memories' ? ' active' : ''}`,
                                                onClick: ()=>setTopTab('memories'),
                                                children: t('settings.memoryTabMemories')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1675,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "tab",
                                                "aria-selected": topTab === 'how',
                                                className: `memory-top-tab${topTab === 'how' ? ' active' : ''}`,
                                                onClick: ()=>setTopTab('how'),
                                                children: t('settings.memoryTabHow')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1684,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1670,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "memory-icon-action",
                                        onClick: ()=>{
                                            setTopTab('memories');
                                            setAddModalOpen(true);
                                        },
                                        title: t('settings.memoryAddDisclosure'),
                                        "aria-label": t('settings.memoryAddDisclosure'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "plus",
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1704,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1694,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "memory-icon-action",
                                        onClick: ()=>{
                                            setTopTab('memories');
                                            setAdvancedModalOpen(true);
                                        },
                                        title: "Advanced",
                                        "aria-label": "Advanced",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "settings",
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1716,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1706,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "toggle-switch",
                                        title: t('settings.memoryEnableLabel'),
                                        "aria-label": t('settings.memoryEnableLabel'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: enabled,
                                                onChange: (e)=>onToggleEnabled(e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1723,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "toggle-slider"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1728,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1718,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1669,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1633,
                        columnNumber: 7
                    }, this),
                    !enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "status",
                        className: "memory-disabled-banner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: t('settings.memoryDisabled')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1735,
                                columnNumber: 11
                            }, this),
                            " —",
                            ' ',
                            t('settings.memoryDisabledBanner')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1734,
                        columnNumber: 9
                    }, this) : null,
                    enabled && showNoProviderBanner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "status",
                        className: "memory-noprovider-banner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: t('settings.memoryNoProviderBannerTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1742,
                                columnNumber: 11
                            }, this),
                            " —",
                            ' ',
                            t('settings.memoryNoProviderBannerBody')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1741,
                        columnNumber: 9
                    }, this) : null,
                    topTab === 'how' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "memory-how-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "memory-auto-flow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Onboarding"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1750,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1751,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Brand context"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1753,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Chat signals"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1754,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1755,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Saved memory"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 1756,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1749,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "memory-how-copy",
                                children: "Memory is gathered automatically from profile setup, project and brand extraction, connected apps, and useful facts learned during chats. The saved list below is the review surface; everything else stays quiet unless you open Add or Advanced."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1758,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryHooksPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryHooksPanel"], {
                                enabled: enabled,
                                flags: hookFlags,
                                onToggle: onToggleHook
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                lineNumber: 1764,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1748,
                        columnNumber: 9
                    }, this) : null,
                    modalHost && addModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "memory-action-modal-backdrop",
                        role: "presentation",
                        onMouseDown: (event)=>{
                            if (event.target === event.currentTarget) {
                                setAddModalOpen(false);
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-action-modal",
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "memory-add-modal-title",
                            onMouseDown: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "memory-action-modal-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    id: "memory-add-modal-title",
                                                    children: t('settings.memoryAddDisclosure')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1791,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t('settings.memoryAddDisclosureHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1794,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1790,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "memory-action-modal-close",
                                            onClick: ()=>setAddModalOpen(false),
                                            "aria-label": t('common.close'),
                                            title: t('common.close'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "close",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1803,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1796,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1789,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "memory-action-modal-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-source-tabs",
                                            role: "tablist",
                                            "aria-label": "Memory areas",
                                            children: memoryTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-label": tab.label,
                                                    "aria-selected": activeTab === tab.id,
                                                    className: activeTab === tab.id ? 'active' : '',
                                                    onClick: ()=>setActiveTab(tab.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "memory-source-tab-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: tab.icon,
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                lineNumber: 1824,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1823,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "memory-source-tab-copy",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: tab.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1827,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    "aria-hidden": "true",
                                                                    children: tab.caption
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1828,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1826,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, tab.id, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1814,
                                                    columnNumber: 11
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1808,
                                            columnNumber: 7
                                        }, this),
                                        activeTab === 'profile' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-tab-panel memory-profile-tab-panel",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryProfilePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryProfilePanel"], {
                                                enabled: enabled
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1835,
                                            columnNumber: 9
                                        }, this) : null,
                                        activeTab === 'manual' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-tab-panel memory-manual-panel",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "memory-source-summary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "memory-block-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "edit",
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                lineNumber: 1844,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1843,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    children: "Add manually"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1847,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "hint",
                                                                    children: "Add facts, preferences, or project context yourself. Fixed assistant behavior lives in Instructions / Rules."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1848,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1846,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "primary memory-source-action",
                                                            onClick: startNew,
                                                            disabled: editing !== null,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                    name: "plus",
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1859,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: t('settings.memoryNew')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1860,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1853,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1842,
                                                    columnNumber: 11
                                                }, this),
                                                flash && flash.kind !== 'pathCopied' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "status",
                                                    "aria-live": "polite",
                                                    className: "memory-flash-pill",
                                                    children: flashLabel[flash.kind]
                                                }, flash.key, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1865,
                                                    columnNumber: 13
                                                }, this) : null,
                                                editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: editorRef,
                                                    className: "library-card",
                                                    style: {
                                                        flexDirection: 'column',
                                                        alignItems: 'stretch',
                                                        gap: 14,
                                                        padding: 14,
                                                        background: 'var(--surface-subtle, rgba(0,0,0,0.02))',
                                                        border: '1px solid var(--border-subtle, rgba(0,0,0,0.08))',
                                                        borderRadius: 10
                                                    },
                                                    children: [
                                                        !editing.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                alignItems: 'center',
                                                                gap: 6,
                                                                paddingBottom: 10,
                                                                borderBottom: '1px solid var(--border-subtle, rgba(0,0,0,0.06))'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        ...FIELD_LABEL_STYLE,
                                                                        display: 'inline-block',
                                                                        marginRight: 4,
                                                                        marginBottom: 0
                                                                    },
                                                                    children: t('settings.memoryStartersLabel')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1900,
                                                                    columnNumber: 19
                                                                }, this),
                                                                STARTERS.map((starter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "filter-pill",
                                                                        onClick: ()=>setEditing({
                                                                                id: editing.id,
                                                                                type: starter.type,
                                                                                name: t(starter.nameKey),
                                                                                description: t(starter.descKey),
                                                                                body: t(starter.bodyKey)
                                                                            }),
                                                                        title: t(starter.descKey),
                                                                        style: {
                                                                            display: 'inline-flex',
                                                                            alignItems: 'center'
                                                                        },
                                                                        children: t(starter.nameKey)
                                                                    }, starter.nameKey, false, {
                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                        lineNumber: 1911,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1890,
                                                            columnNumber: 17
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: 12,
                                                                width: '100%'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: 10,
                                                                        alignItems: 'flex-end'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                flex: 1,
                                                                                minWidth: 0
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    style: FIELD_LABEL_STYLE,
                                                                                    children: t('settings.memoryNameLabel')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 1942,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    ref: editorNameRef,
                                                                                    type: "text",
                                                                                    placeholder: t('settings.memoryName'),
                                                                                    value: editing.name,
                                                                                    onChange: (e)=>setEditing({
                                                                                            ...editing,
                                                                                            name: e.target.value
                                                                                        }),
                                                                                    style: {
                                                                                        width: '100%'
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 1945,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1941,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                flex: '0 0 auto',
                                                                                minWidth: 120
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    style: FIELD_LABEL_STYLE,
                                                                                    children: t('settings.memoryTypeLabel')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 1957,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    value: editing.type,
                                                                                    onChange: (e)=>setEditing({
                                                                                            ...editing,
                                                                                            type: e.target.value
                                                                                        }),
                                                                                    style: {
                                                                                        width: '100%'
                                                                                    },
                                                                                    children: TYPES.map((tt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: tt,
                                                                                            children: TYPE_LABEL[tt]
                                                                                        }, tt, false, {
                                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                            lineNumber: 1971,
                                                                                            columnNumber: 25
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 1960,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1956,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1940,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            style: FIELD_LABEL_STYLE,
                                                                            children: t('settings.memoryDescLabel')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1979,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            placeholder: t('settings.memoryDesc'),
                                                                            value: editing.description,
                                                                            onChange: (e)=>setEditing({
                                                                                    ...editing,
                                                                                    description: e.target.value
                                                                                }),
                                                                            style: {
                                                                                width: '100%'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1982,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1978,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            style: FIELD_LABEL_STYLE,
                                                                            children: t('settings.memoryBodyLabel')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1993,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            placeholder: t('settings.memoryBody'),
                                                                            value: editing.body,
                                                                            onChange: (e)=>setEditing({
                                                                                    ...editing,
                                                                                    body: e.target.value
                                                                                }),
                                                                            rows: 7,
                                                                            style: {
                                                                                width: '100%',
                                                                                fontFamily: 'monospace',
                                                                                fontSize: 12,
                                                                                lineHeight: 1.5
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 1996,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "hint",
                                                                            style: {
                                                                                fontSize: 11,
                                                                                marginTop: 4
                                                                            },
                                                                            children: t('settings.memoryBodyHint')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2010,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 1992,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 1932,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                gap: 8,
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                flexWrap: 'wrap'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hint",
                                                                    style: {
                                                                        fontSize: 11,
                                                                        margin: 0,
                                                                        color: 'var(--text-muted, #888)'
                                                                    },
                                                                    children: t('settings.memorySaveHint')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2024,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: 8
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            onClick: cancelEdit,
                                                                            children: t('common.cancel')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2035,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "primary",
                                                                            onClick: onSave,
                                                                            disabled: busy || !editing.name.trim(),
                                                                            children: editing.id ? t('common.save') : t('common.create')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2038,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2034,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2015,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 1876,
                                                    columnNumber: 13
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 1841,
                                            columnNumber: 9
                                        }, this) : null,
                                        activeTab === 'connected' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-tab-panel memory-connected-panel",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "memory-source-summary memory-connected-summary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "memory-block-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "link",
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                lineNumber: 2057,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2056,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    children: "Import from apps"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2060,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "hint",
                                                                    children: "Choose apps to scan for design preferences, project context, and visual references. Nothing is scanned until you select an app."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2061,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2059,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "memory-source-badge",
                                                            children: connectorsLoading ? 'Loading' : `${connectedCount} connected`
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "ghost memory-source-action",
                                                            onClick: onOpenConnectors,
                                                            disabled: !onOpenConnectors,
                                                            children: "Manage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2069,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2055,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "memory-connector-workbench",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-picker-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            children: "Choose sources"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2081,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "hint",
                                                                            children: "Select connected apps first. OpenDesign only scans the apps you choose."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2082,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2080,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "memory-source-badge",
                                                                    children: [
                                                                        selectedConnectedConnectorIds.length,
                                                                        " selected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2086,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2079,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-list",
                                                            "aria-label": "Connected memory apps",
                                                            children: memoryConnectors.map((connector)=>{
                                                                const connected = connector.status === 'connected';
                                                                const selected = selectedConnectorIds.has(connector.id) && connected;
                                                                const connecting = connectingConnectorIds.has(connector.id);
                                                                const authorizationPending = pendingConnectorAuthIds.has(connector.id);
                                                                const connectError = connectorConnectErrors[connector.id];
                                                                const statusResolved = connectorIdsWithDetails.has(connector.id) || connectorStatuses[connector.id] !== undefined;
                                                                const checkingStatus = connectorsLoading && !statusResolved && !connected && !authorizationPending && !connectError && !connecting;
                                                                const connectorLastError = connector.lastError?.trim();
                                                                const reconnecting = connector.status === 'error';
                                                                const connectorHint = connected ? connector.accountLabel || `${connector.tools.length} read tools` : checkingStatus ? 'Checking connection status…' : authorizationPending ? 'Finish authorization in your browser, then return here' : connectorLastError || connectError || 'Connect this app before extraction';
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `memory-connector-row${connected ? '' : ' is-disabled'}${selected ? ' is-selected' : ''}`,
                                                                    "data-memory-connector-id": connector.id,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "memory-connector-input",
                                                                            type: "checkbox",
                                                                            checked: selected,
                                                                            disabled: !connected,
                                                                            "aria-label": `Use ${connector.name} for memory extraction`,
                                                                            onChange: ()=>toggleConnectorSelection(connector.id)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2122,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `memory-connector-brand${selected ? ' is-selected' : ''}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorLogo"], {
                                                                                    connector: connector,
                                                                                    theme: logoTheme,
                                                                                    size: "sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2131,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "memory-connector-selected-mark",
                                                                                    "aria-hidden": "true",
                                                                                    children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                        name: "check",
                                                                                        size: 13
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2133,
                                                                                        columnNumber: 37
                                                                                    }, this) : null
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2132,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2130,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-connector-copy",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: connector.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2137,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: connectorHint
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2138,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2136,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `memory-connector-picker${selected ? ' is-selected' : ''}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "memory-connector-picker-box",
                                                                                    "aria-hidden": "true",
                                                                                    children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                        name: "check",
                                                                                        size: 12
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2143,
                                                                                        columnNumber: 39
                                                                                    }, this) : null
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2142,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: selected ? 'Selected' : 'Select'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2145,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2141,
                                                                            columnNumber: 23
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: `memory-connector-connect-button${connecting || authorizationPending || checkingStatus ? ' is-loading' : ''}`,
                                                                            disabled: connecting || authorizationPending || checkingStatus,
                                                                            "aria-busy": connecting || authorizationPending || checkingStatus || undefined,
                                                                            "aria-label": `${reconnecting ? 'Reconnect' : 'Connect'} ${connector.name}`,
                                                                            onClick: (event)=>{
                                                                                event.preventDefault();
                                                                                event.stopPropagation();
                                                                                void onConnectMemoryConnector(connector.id);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                    name: connecting || authorizationPending || checkingStatus ? 'refresh' : 'plus',
                                                                                    size: 12,
                                                                                    className: connecting || authorizationPending || checkingStatus ? 'icon-spin' : ''
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2160,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: checkingStatus ? 'Checking' : authorizationPending ? 'Waiting' : connecting ? 'Connecting' : reconnecting ? 'Reconnect' : 'Connect'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2165,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2148,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, connector.id, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2117,
                                                                    columnNumber: 19
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2090,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-actions memory-connector-runbar",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hint",
                                                                    children: [
                                                                        "Selected ",
                                                                        selectedConnectedConnectorIds.length,
                                                                        " of ",
                                                                        connectedCount,
                                                                        " connected app",
                                                                        connectedCount === 1 ? '' : 's',
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2175,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "primary memory-source-action",
                                                                    onClick: ()=>void onSuggestConnectorMemory(),
                                                                    disabled: !enabled || connectorExtracting || connectorSaving || selectedConnectedConnectorIds.length === 0,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                            name: connectorExtracting ? 'refresh' : 'sparkles',
                                                                            size: 14,
                                                                            className: connectorExtracting ? 'icon-spin' : ''
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2189,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: connectorScanLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2194,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2178,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2174,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2078,
                                                    columnNumber: 11
                                                }, this),
                                                connectorSuggestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "memory-suggestion-panel",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-subsection-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            children: "Suggested memories"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2202,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "hint",
                                                                            children: "Review design-related memories before saving them."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2203,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2201,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "memory-source-badge",
                                                                    children: [
                                                                        selectedConnectorSuggestions.length,
                                                                        " selected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2207,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2200,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-suggestion-list",
                                                            children: connectorSuggestions.map((suggestion)=>{
                                                                const selected = selectedSuggestionIds.has(suggestion.id);
                                                                const sourceLabel = suggestion.source?.connectorName || suggestion.source?.toolTitle || 'Connected apps';
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `memory-suggestion-card${selected ? ' is-selected' : ''}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-connector-check",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: selected,
                                                                                    onChange: ()=>toggleConnectorSuggestion(suggestion.id)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2224,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    "aria-hidden": "true",
                                                                                    children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                        name: "check",
                                                                                        size: 13
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2230,
                                                                                        columnNumber: 39
                                                                                    }, this) : null
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2229,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2223,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-suggestion-copy",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "memory-suggestion-title",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            children: suggestion.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                            lineNumber: 2235,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "memory-type-badge",
                                                                                            children: TYPE_LABEL[suggestion.type]
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                            lineNumber: 2236,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2234,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                suggestion.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: suggestion.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2241,
                                                                                    columnNumber: 27
                                                                                }, this) : null,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "memory-suggestion-body",
                                                                                    children: suggestion.body
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2243,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2233,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-connector-state is-connected",
                                                                            children: sourceLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2245,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, suggestion.id, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2219,
                                                                    columnNumber: 21
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2211,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "primary memory-source-action",
                                                                    onClick: ()=>void onSaveConnectorSuggestions(),
                                                                    disabled: connectorSaving || selectedConnectorSuggestions.length === 0,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                            name: connectorSaving ? 'refresh' : 'check',
                                                                            size: 14,
                                                                            className: connectorSaving ? 'icon-spin' : ''
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2259,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: connectorSaving ? 'Saving' : 'Save selected'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2264,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2253,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "ghost memory-source-action",
                                                                    onClick: onDiscardConnectorSuggestions,
                                                                    disabled: connectorSaving,
                                                                    children: "Discard"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2266,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2252,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2199,
                                                    columnNumber: 13
                                                }, this) : null,
                                                connectorStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "status",
                                                    className: "memory-connector-result is-success",
                                                    children: connectorStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2278,
                                                    columnNumber: 13
                                                }, this) : null,
                                                connectorError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "alert",
                                                    className: "memory-connector-result is-error",
                                                    children: connectorError
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2283,
                                                    columnNumber: 13
                                                }, this) : null,
                                                connectorAttempts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "memory-connector-diagnostics",
                                                    "aria-label": "Connected app read status",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-diagnostics-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Last scan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2290,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        formatConnectorContextBytes(connectorContextBytes),
                                                                        " read"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2291,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2289,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-diagnostics-list",
                                                            children: connectorAttempts.map((attempt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `memory-connector-diagnostic-row is-${attempt.status}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-connector-diagnostic-dot",
                                                                            "aria-hidden": "true"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2299,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "memory-connector-diagnostic-copy",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: connectorAttemptTitle(attempt)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2301,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: connectorAttemptDetail(attempt)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                    lineNumber: 2302,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2300,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, `${attempt.connectorId}-${attempt.status}-${attempt.toolName ?? 'none'}`, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2295,
                                                                    columnNumber: 19
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2293,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2288,
                                                    columnNumber: 13
                                                }, this) : null,
                                                connectorExtractions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "memory-scan-history",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Recent scans"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2312,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: connectorExtractions.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2313,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2311,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-connector-run-history",
                                                            "aria-label": "Connected app memory run status",
                                                            children: connectorExtractions.slice(0, 4).map(renderExtractionCard)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2315,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2310,
                                                    columnNumber: 13
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2054,
                                            columnNumber: 9
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 1806,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 1782,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 1773,
                        columnNumber: 7
                    }, this), modalHost) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                lineNumber: 1630,
                columnNumber: 7
            }, this),
            topTab === 'memories' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: recordsRef,
                        className: "settings-section settings-section-card memory-records-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-management-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "memory-subsection-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Saved memory"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2340,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "hint",
                                                    children: "Saved facts, preferences, and project context available to future chats."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2341,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2339,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-management-counts",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "memory-source-badge",
                                                    children: [
                                                        entries.length,
                                                        " saved"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2346,
                                                    columnNumber: 15
                                                }, this),
                                                visibleExtractions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "memory-source-badge",
                                                    children: [
                                                        visibleExtractions.length,
                                                        " extraction",
                                                        visibleExtractions.length === 1 ? '' : 's'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2350,
                                                    columnNumber: 17
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2345,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 2338,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "library-toolbar is-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "library-filters",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `filter-pill${filter === 'all' ? ' active' : ''}`,
                                                    onClick: ()=>setFilter('all'),
                                                    children: [
                                                        t('settings.memoryAll'),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "filter-pill-count",
                                                            children: entries.length + visibleExtractions.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2365,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2359,
                                                    columnNumber: 15
                                                }, this),
                                                TYPES.map((type)=>{
                                                    const count = entries.filter((e)=>e.type === type).length;
                                                    if (count === 0 && filter !== type) return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: `filter-pill${filter === type ? ' active' : ''}`,
                                                        onClick: ()=>setFilter(type),
                                                        children: [
                                                            TYPE_LABEL[type],
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "filter-pill-count",
                                                                children: count
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                lineNumber: 2380,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, type, true, {
                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                        lineNumber: 2373,
                                                        columnNumber: 19
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2358,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-management-actions",
                                            children: [
                                                visibleExtractions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "ghost memory-clear-extractions",
                                                    onClick: ()=>void onClearExtractions(),
                                                    title: t('settings.memoryExtractionsClearTitle'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "close",
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2393,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: t('settings.memoryExtractionsClear')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2394,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2387,
                                                    columnNumber: 17
                                                }, this) : null,
                                                visibleExtractions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "ghost memory-refresh-extractions",
                                                    onClick: ()=>void reloadExtractions(),
                                                    disabled: isRefreshing,
                                                    title: t('settings.memoryExtractionsRefresh'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "refresh",
                                                            size: 12,
                                                            className: isRefreshing ? 'icon-spin' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2405,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: isRefreshing ? t('settings.memoryExtractionsRefreshing') : t('settings.memoryExtractionsRefresh')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2410,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2398,
                                                    columnNumber: 17
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2385,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 2357,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "library-content memory-unified-list",
                                    children: unifiedMemoryCount === 0 ? /*
                Empty state — the previous one inlined two side-by-side
                <code> snippets ("记住：用户偏好深色主题 / I prefer dark
                mode") which read like duelling locales and made the user
                wonder if the chips were tap-to-prefill or just decorative.
                We now show one clear "no rows yet" line and a one-sentence
                primer that explains the mechanism (talk in chat, fact gets
                extracted) with a single example. Inline English; PR-time
                translation sweep can lift this into the dictionary.
              */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "library-empty",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "library-empty-title",
                                                children: t('settings.memoryEmpty')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 2433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "library-empty-hint",
                                                children: [
                                                    "Tell the assistant a fact in chat — e.g.",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "I prefer dark mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                        lineNumber: 2438,
                                                        columnNumber: 19
                                                    }, this),
                                                    " — and it will be saved here automatically."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 2436,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                        lineNumber: 2432,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            filtered.map(renderMemoryEntry),
                                            visibleExtractions.map(renderExtractionCard)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 2420,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 2337,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 2336,
                        columnNumber: 7
                    }, this),
                    modalHost && advancedModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "memory-action-modal-backdrop",
                        role: "presentation",
                        onMouseDown: (event)=>{
                            if (event.target === event.currentTarget) {
                                setAdvancedModalOpen(false);
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "memory-action-modal memory-action-modal--advanced",
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "memory-advanced-modal-title",
                            onMouseDown: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "memory-action-modal-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    id: "memory-advanced-modal-title",
                                                    children: "Advanced"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2471,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Inspect or edit the underlying memory index."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2472,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2470,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "memory-action-modal-close",
                                            onClick: ()=>setAdvancedModalOpen(false),
                                            "aria-label": t('common.close'),
                                            title: t('common.close'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "close",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                lineNumber: 2481,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2474,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 2469,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "memory-action-modal-body memory-advanced-modal-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "memory-advanced-hint",
                                            children: "Inspect or edit the underlying memory index."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2485,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "memory-advanced-stack",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "library-group memory-advanced-card",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            className: "memory-details-summary",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "memory-details-title",
                                                                children: t('settings.memoryIndex')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                lineNumber: 2491,
                                                                columnNumber: 17
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2490,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: indexDraft ?? index,
                                                            onChange: (e)=>setIndexDraft(e.target.value),
                                                            rows: 8,
                                                            style: {
                                                                width: '100%',
                                                                marginTop: 8,
                                                                fontFamily: 'monospace'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2495,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                gap: 8,
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                marginTop: 6,
                                                                flexWrap: 'wrap'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hint",
                                                                    style: {
                                                                        fontSize: 11,
                                                                        margin: 0,
                                                                        color: indexDraft !== null ? 'var(--text-warning, #b06a00)' : 'var(--text-muted, #888)',
                                                                        fontWeight: indexDraft !== null ? 600 : 400
                                                                    },
                                                                    children: indexDraft !== null ? `● ${t('settings.memoryIndexUnsaved')} — ${t('settings.memoryIndexSaveHint')}` : t('settings.memoryIndexSaveHint')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2515,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: 8
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "ghost",
                                                                            onClick: ()=>setIndexDraft(null),
                                                                            disabled: indexDraft === null,
                                                                            children: t('settings.memoryIndexReset')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2532,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "primary",
                                                                            onClick: onSaveIndex,
                                                                            disabled: busy || indexDraft === null,
                                                                            children: t('settings.memoryIndexSave')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                            lineNumber: 2540,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2531,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2505,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2489,
                                                    columnNumber: 13
                                                }, this),
                                                treeFolders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "library-group memory-advanced-card",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            className: "memory-details-summary",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "memory-details-title",
                                                                    children: "Memory tree"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2554,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "filter-pill-count",
                                                                    children: memoryTree.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2555,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2553,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "memory-advanced-hint",
                                                            children: "Technical view of the same saved memories. Most users only need the saved-memory list above."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2557,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "memory-tree-advanced",
                                                            children: treeFolders.map((folder)=>{
                                                                const children = treeChildren.get(folder.id) ?? [];
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "library-card",
                                                                    style: {
                                                                        alignItems: 'stretch'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "library-card-info",
                                                                        style: {
                                                                            width: '100%'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "library-card-title-row",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "library-card-name",
                                                                                        children: folder.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2572,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "library-card-badge",
                                                                                        children: folder.path
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2573,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                lineNumber: 2571,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "library-card-desc",
                                                                                children: [
                                                                                    children.length,
                                                                                    " ",
                                                                                    children.length === 1 ? 'node' : 'nodes'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                lineNumber: 2575,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            children.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                style: {
                                                                                    display: 'grid',
                                                                                    gap: 6,
                                                                                    margin: '8px 0 0',
                                                                                    padding: 0,
                                                                                    listStyle: 'none'
                                                                                },
                                                                                children: children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "memory-tree-child-row",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    minWidth: 0
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "library-card-name",
                                                                                                        children: child.name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                        lineNumber: 2594,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    ' ',
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "library-card-badge",
                                                                                                        children: child.id
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                        lineNumber: 2595,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    child.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "library-card-desc",
                                                                                                        style: {
                                                                                                            display: 'block'
                                                                                                        },
                                                                                                        children: child.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                        lineNumber: 2597,
                                                                                                        columnNumber: 39
                                                                                                    }, this) : null
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                lineNumber: 2593,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "memory-card-actions",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    type: "button",
                                                                                                    className: "ghost library-card-action",
                                                                                                    onClick: ()=>startEdit(child.id),
                                                                                                    title: t('settings.memoryEdit'),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                                        name: "edit",
                                                                                                        size: 14
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                        lineNumber: 2612,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                    lineNumber: 2606,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                                lineNumber: 2605,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, child.id, true, {
                                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                        lineNumber: 2589,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                                lineNumber: 2579,
                                                                                columnNumber: 29
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                        lineNumber: 2570,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, folder.id, false, {
                                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                                    lineNumber: 2565,
                                                                    columnNumber: 23
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                            lineNumber: 2561,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                                    lineNumber: 2552,
                                                    columnNumber: 15
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                            lineNumber: 2488,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                                    lineNumber: 2484,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                            lineNumber: 2462,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/MemorySection.tsx",
                        lineNumber: 2453,
                        columnNumber: 7
                    }, this), modalHost) : null
                ]
            }, void 0, true) : null
        ]
    }, void 0, true);
}
_s(MemorySection, "h3zcF6DCtDS5/uY8ZCREQ02HOt4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"]
    ];
});
_c = MemorySection;
var _c;
__turbopack_context__.k.register(_c, "MemorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_MemorySection_tsx_0~zh4lu._.js.map