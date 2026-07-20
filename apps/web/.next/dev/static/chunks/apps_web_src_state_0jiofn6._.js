(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/state/onboarding-profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readOnboardingProfile",
    ()=>readOnboardingProfile,
    "saveOnboardingProfile",
    ()=>saveOnboardingProfile
]);
// Persisted snapshot of the onboarding "About you" survey: role, org size,
// use case(s), and how they heard about us.
//
// Onboarding collects these in component state that is discarded once the flow
// ends. We persist a tiny copy so any later AMR entry — from the chat error
// card, settings, the model switcher, etc., long after onboarding — can forward
// the visitor's self-reported profile to AMR for paid-conversion segmentation.
// Without this, only a visitor who jumps to AMR during onboarding itself would
// carry a profile.
//
// Values are kept as open strings (mirroring onboarding's own open-string
// options), trimmed and length/count-capped defensively.
const STORAGE_KEY = 'open-design:onboarding-profile:v1';
const MAX_VALUE_LENGTH = 64;
const MAX_USE_CASES = 20;
function sanitize(value) {
    if (typeof value !== 'string') return undefined;
    const trimmed = value.trim();
    if (!trimmed || trimmed === 'unknown') return undefined;
    return trimmed.slice(0, MAX_VALUE_LENGTH);
}
function sanitizeList(value) {
    if (!Array.isArray(value)) return undefined;
    const cleaned = value.map((entry)=>sanitize(entry)).filter((entry)=>Boolean(entry)).slice(0, MAX_USE_CASES);
    return cleaned.length > 0 ? cleaned : undefined;
}
function compact(profile) {
    const role = sanitize(profile.role);
    const orgSize = sanitize(profile.orgSize);
    const useCase = sanitizeList(profile.useCase);
    const source = sanitize(profile.source);
    if (!role && !orgSize && !useCase && !source) return null;
    return {
        ...role ? {
            role
        } : {},
        ...orgSize ? {
            orgSize
        } : {},
        ...useCase ? {
            useCase
        } : {},
        ...source ? {
            source
        } : {}
    };
}
function saveOnboardingProfile(profile) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const compacted = compact(profile);
    if (!compacted) return;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(compacted));
    } catch  {
    // Persistence is best-effort; never block onboarding completion.
    }
}
function readOnboardingProfile() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return compact(JSON.parse(raw));
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Project / conversation / message / tab persistence — backed by the
// daemon's SQLite store. All writes round-trip through HTTP so projects
// stay coherent across multiple browser tabs and across restarts.
//
// These helpers fail soft (returning null / [] on transport errors) so
// the UI can stay rendered when the daemon is briefly unreachable.
__turbopack_context__.s([
    "addPluginMarketplace",
    ()=>addPluginMarketplace,
    "applyPlugin",
    ()=>applyPlugin,
    "cacheTabsLocally",
    ()=>cacheTabsLocally,
    "contributeGeneratedPluginToOpenDesign",
    ()=>contributeGeneratedPluginToOpenDesign,
    "createConversation",
    ()=>createConversation,
    "createPluginShareProject",
    ()=>createPluginShareProject,
    "createProject",
    ()=>createProject,
    "createTerminal",
    ()=>createTerminal,
    "deleteConversation",
    ()=>deleteConversation,
    "deleteProject",
    ()=>deleteProject,
    "deleteTemplate",
    ()=>deleteTemplate,
    "fetchAppliedPluginSnapshot",
    ()=>fetchAppliedPluginSnapshot,
    "getProject",
    ()=>getProject,
    "getTemplate",
    ()=>getTemplate,
    "importClaudeDesignZip",
    ()=>importClaudeDesignZip,
    "importFolderProject",
    ()=>importFolderProject,
    "installGeneratedPluginFolder",
    ()=>installGeneratedPluginFolder,
    "installPluginSource",
    ()=>installPluginSource,
    "isVisiblePlugin",
    ()=>isVisiblePlugin,
    "killTerminal",
    ()=>killTerminal,
    "listConversations",
    ()=>listConversations,
    "listMessages",
    ()=>listMessages,
    "listPluginMarketplaces",
    ()=>listPluginMarketplaces,
    "listPlugins",
    ()=>listPlugins,
    "listProjects",
    ()=>listProjects,
    "listTemplates",
    ()=>listTemplates,
    "loadTabs",
    ()=>loadTabs,
    "patchConversation",
    ()=>patchConversation,
    "patchProject",
    ()=>patchProject,
    "persistTabsToDaemonNow",
    ()=>persistTabsToDaemonNow,
    "pickLocalFolderPath",
    ()=>pickLocalFolderPath,
    "publishGeneratedPluginToGitHub",
    ()=>publishGeneratedPluginToGitHub,
    "refreshPluginMarketplace",
    ()=>refreshPluginMarketplace,
    "removePluginMarketplace",
    ()=>removePluginMarketplace,
    "renderPluginBriefTemplate",
    ()=>renderPluginBriefTemplate,
    "resizeTerminal",
    ()=>resizeTerminal,
    "resolvePluginQueryFallback",
    ()=>resolvePluginQueryFallback,
    "saveMessage",
    ()=>saveMessage,
    "saveTabs",
    ()=>saveTabs,
    "saveTemplate",
    ()=>saveTemplate,
    "sendTerminalStdin",
    ()=>sendTerminalStdin,
    "setPluginMarketplaceTrust",
    ()=>setPluginMarketplaceTrust,
    "startGeneratedPluginShareTask",
    ()=>startGeneratedPluginShareTask,
    "terminalStreamUrl",
    ()=>terminalStreamUrl,
    "uninstallPlugin",
    ()=>uninstallPlugin,
    "upgradePlugin",
    ()=>upgradePlugin,
    "uploadPluginFolder",
    ()=>uploadPluginFolder,
    "uploadPluginZip",
    ()=>uploadPluginZip,
    "waitGeneratedPluginShareTask",
    ()=>waitGeneratedPluginShareTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
;
async function listProjects(options) {
    try {
        const resp = await fetch('/api/projects');
        if (!resp.ok) {
            if (options?.throwOnError) throw new Error(`projects ${resp.status}`);
            return [];
        }
        const json = await resp.json();
        return json.projects ?? [];
    } catch (err) {
        if (options?.throwOnError) throw err;
        return [];
    }
}
async function getProject(id) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.project;
    } catch  {
        return null;
    }
}
async function createProject(input) {
    try {
        // `randomUUID` falls back to `crypto.getRandomValues` / `Math.random`
        // when `crypto.randomUUID` is unavailable. Open Design served over
        // plain HTTP on a LAN IP (Docker / unRAID self-hosting) is a
        // non-secure context, where `crypto.randomUUID` is undefined and
        // calling it directly throws — the surrounding try/catch then turns
        // the Create button into a silent no-op (issue #849).
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
        const resp = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                ...input
            })
        });
        if (!resp.ok) {
            let message = 'Could not create project';
            try {
                const body = await resp.json();
                if (body.error && typeof body.error === 'object' && 'message' in body.error && typeof body.error.message === 'string' && body.error.message.trim()) {
                    message = body.error.message;
                }
            } catch  {
            // Keep the generic fallback when the error body is absent or invalid.
            }
            throw new Error(message);
        }
        return await resp.json();
    } catch (err) {
        throw err instanceof Error ? err : new Error('Could not create project');
    }
}
async function pickLocalFolderPath() {
    const resp = await fetch('/api/dialog/open-folder', {
        method: 'POST'
    });
    if (!resp.ok) {
        let message = 'Could not open folder picker';
        try {
            const body = await resp.json();
            if (typeof body.error === 'string' && body.error.trim()) {
                message = body.error;
            } else if (body.error && typeof body.error === 'object' && 'message' in body.error && typeof body.error.message === 'string' && body.error.message.trim()) {
                message = body.error.message;
            }
        } catch  {}
        throw new Error(message);
    }
    const body = await resp.json();
    if (body.path == null) return null;
    if (typeof body.path !== 'string') {
        throw new Error('Could not open folder picker');
    }
    return body.path.length > 0 ? body.path : null;
}
async function importFolderProject(input) {
    const resp = await fetch('/api/import/folder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });
    if (!resp.ok) {
        let message = 'Failed to import folder';
        try {
            const body = await resp.json();
            if (body?.error?.message) message = body.error.message;
        } catch  {}
        throw new Error(message);
    }
    return await resp.json();
}
async function importClaudeDesignZip(file) {
    const form = new FormData();
    form.append('file', file);
    const resp = await fetch('/api/import/claude-design', {
        method: 'POST',
        body: form
    });
    if (!resp.ok) {
        const payload = await resp.json().catch(()=>null);
        const message = payload != null && typeof payload === 'object' && typeof payload.error === 'string' ? payload.error : `Import failed (${resp.status})`;
        throw new Error(message);
    }
    return await resp.json();
}
async function listTemplates() {
    try {
        const resp = await fetch('/api/templates');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.templates ?? [];
    } catch  {
        return [];
    }
}
async function getTemplate(id) {
    try {
        const resp = await fetch(`/api/templates/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.template;
    } catch  {
        return null;
    }
}
async function saveTemplate(input) {
    try {
        const resp = await fetch('/api/templates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.template;
    } catch  {
        return null;
    }
}
async function deleteTemplate(id) {
    try {
        const resp = await fetch(`/api/templates/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function patchProject(id, patch) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(id)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patch)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.project;
    } catch  {
        return null;
    }
}
async function deleteProject(id) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function listConversations(projectId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.conversations ?? [];
    } catch  {
        return [];
    }
}
async function createConversation(projectId, title, // Side Chat: seed the new conversation with another conversation's context
// by copying its messages. `forkAfterMessageId` narrows that copy to a
// specific point in the source history.
opts) {
    try {
        const body = {
            title
        };
        if (opts?.sessionMode) {
            body.sessionMode = opts.sessionMode;
        }
        if (opts?.seedFromConversationId) {
            body.seedFromConversationId = opts.seedFromConversationId;
        }
        if (opts?.forkAfterMessageId) {
            body.forkAfterMessageId = opts.forkAfterMessageId;
        }
        if (opts?.seedMessages && opts.seedMessages.length > 0) {
            body.seedMessages = opts.seedMessages;
        }
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.conversation;
    } catch  {
        return null;
    }
}
async function patchConversation(projectId, conversationId, patch) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patch)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.conversation;
    } catch  {
        return null;
    }
}
async function deleteConversation(projectId, conversationId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function listMessages(projectId, conversationId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/messages`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.messages ?? [];
    } catch  {
        return [];
    }
}
async function saveMessage(projectId, conversationId, message, options = {}) {
    try {
        const body = options.telemetryFinalized ? {
            ...message,
            telemetryFinalized: true
        } : message;
        await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/messages/${encodeURIComponent(message.id)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            ...options.keepalive ? {
                keepalive: true
            } : {}
        });
    } catch  {
    // best-effort persistence — UI keeps the message in-memory either way
    }
}
async function createTerminal(projectId, init) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/terminals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(init ?? {})
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.terminal ?? null;
    } catch  {
        return null;
    }
}
function terminalStreamUrl(projectId, terminalId) {
    return `/api/projects/${encodeURIComponent(projectId)}/terminals/${encodeURIComponent(terminalId)}/stream`;
}
async function sendTerminalStdin(projectId, terminalId, data) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/terminals/${encodeURIComponent(terminalId)}/stdin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function resizeTerminal(projectId, terminalId, cols, rows) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/terminals/${encodeURIComponent(terminalId)}/resize`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cols,
                rows
            })
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function killTerminal(projectId, terminalId, // Page-unload paths set keepalive so the kill survives document teardown,
// mirroring `saveMessage`. Without it the browser cancels the fetch and the
// PTY leaks until the daemon GCs it.
options = {}) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/terminals/${encodeURIComponent(terminalId)}/kill`, {
            method: 'POST',
            ...options.keepalive ? {
                keepalive: true
            } : {}
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
// ---------- tabs ----------
const PROJECT_TABS_CACHE_PREFIX = 'open-design:project-tabs:v1:';
function tabsCacheKey(projectId) {
    return `${PROJECT_TABS_CACHE_PREFIX}${projectId}`;
}
function normalizeTabsState(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
    const record = value;
    if (!Array.isArray(record.tabs) || !record.tabs.every((tab)=>typeof tab === 'string')) {
        return null;
    }
    const browserTabs = Array.isArray(record.browserTabs) ? record.browserTabs.filter((tab)=>Boolean(tab) && typeof tab === 'object' && !Array.isArray(tab) && typeof tab.id === 'string' && typeof tab.label === 'string') : undefined;
    const state = {
        tabs: record.tabs.slice(),
        active: typeof record.active === 'string' ? record.active : null
    };
    if (browserTabs && browserTabs.length > 0) state.browserTabs = browserTabs;
    if (record.hasSavedState === true) state.hasSavedState = true;
    if (typeof record.updatedAt === 'number' && Number.isFinite(record.updatedAt)) {
        state.updatedAt = record.updatedAt;
    }
    return state;
}
function readCachedTabs(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return normalizeTabsState(JSON.parse(window.localStorage.getItem(tabsCacheKey(projectId)) ?? 'null'));
    } catch  {
        return null;
    }
}
function writeCachedTabs(projectId, state) {
    const next = {
        ...state,
        updatedAt: Date.now()
    };
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            window.localStorage.setItem(tabsCacheKey(projectId), JSON.stringify(next));
        } catch  {
        // Ignore quota/private-mode failures. The daemon save below is canonical.
        }
    }
    return next;
}
function newestTabsState(first, second) {
    if (!first && !second) return {
        tabs: [],
        active: null
    };
    if (!first) return second;
    if (!second) return first;
    return (second.updatedAt ?? 0) > (first.updatedAt ?? 0) ? second : first;
}
async function persistTabsToDaemon(projectId, state) {
    await fetch(`/api/projects/${encodeURIComponent(projectId)}/tabs`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state),
        keepalive: true
    });
}
async function loadTabs(projectId) {
    const cached = readCachedTabs(projectId);
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/tabs`);
        if (!resp.ok) return cached ?? {
            tabs: [],
            active: null
        };
        const saved = normalizeTabsState(await resp.json());
        const latest = newestTabsState(cached, saved);
        if (cached && latest === cached && (cached.updatedAt ?? 0) > (saved?.updatedAt ?? 0)) {
            void persistTabsToDaemon(projectId, cached).catch(()=>{});
        }
        return latest;
    } catch  {
        return cached ?? {
            tabs: [],
            active: null
        };
    }
}
async function saveTabs(projectId, state) {
    const next = writeCachedTabs(projectId, state);
    try {
        await persistTabsToDaemon(projectId, next);
    } catch  {
    // best-effort
    }
}
function cacheTabsLocally(projectId, state) {
    return writeCachedTabs(projectId, state);
}
async function persistTabsToDaemonNow(projectId, state) {
    try {
        await persistTabsToDaemon(projectId, state);
    } catch  {
    // best-effort; the local cache (written via cacheTabsLocally) is canonical
    // and will re-push on the next loadTabs reconciliation.
    }
}
async function listPlugins(options = {}) {
    try {
        const resp = await fetch('/api/plugins');
        if (!resp.ok) return [];
        const json = await resp.json();
        const plugins = json.plugins ?? [];
        return options.includeHidden ? plugins : plugins.filter(isVisiblePlugin);
    } catch  {
        return [];
    }
}
function isVisiblePlugin(plugin) {
    const od = plugin.manifest?.od ?? {};
    return od.hidden !== true;
}
async function installPluginSource(source) {
    const log = [];
    try {
        const resp = await fetch('/api/plugins/install', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                source
            })
        });
        if (!resp.ok) {
            const message = await readErrorMessage(resp);
            return {
                ok: false,
                warnings: [],
                message,
                log
            };
        }
        if (!resp.body) {
            return {
                ok: false,
                warnings: [],
                message: 'Install stream did not start.',
                log
            };
        }
        let success;
        let warnings = [];
        let errorMessage;
        for await (const ev of readServerSentEvents(resp.body)){
            if (ev.message) log.push(ev.message);
            if (ev.warnings) warnings = ev.warnings;
            if (ev.kind === 'success') success = ev.plugin;
            if (ev.kind === 'error') errorMessage = ev.message ?? 'Install failed.';
        }
        return {
            ok: Boolean(success) && !errorMessage,
            plugin: success,
            warnings,
            message: errorMessage ?? (success ? `Installed ${success.title}.` : 'Install finished.'),
            log
        };
    } catch (err) {
        return {
            ok: false,
            warnings: [],
            message: err.message,
            log
        };
    }
}
async function uploadPluginZip(file) {
    const form = new FormData();
    form.append('file', file);
    return postPluginUpload('/api/plugins/upload-zip', form);
}
async function uploadPluginFolder(files) {
    const form = new FormData();
    for (const file of files){
        const relativePath = getUploadRelativePath(file);
        form.append('files', file, file.name);
        form.append('paths', relativePath);
    }
    return postPluginUpload('/api/plugins/upload-folder', form);
}
async function installGeneratedPluginFolder(projectId, relativePath) {
    try {
        const request = {
            path: relativePath
        };
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/plugins/install-folder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        const outcome = await readPluginInstallOutcome(resp);
        if (outcome.ok && ("TURBOPACK compile-time value", "object") !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-design:plugins-changed'));
        }
        return outcome;
    } catch (err) {
        return {
            ok: false,
            warnings: [],
            message: err.message,
            log: []
        };
    }
}
async function publishGeneratedPluginToGitHub(projectId, relativePath) {
    return postGeneratedPluginShareAction(projectId, relativePath, 'publish-github');
}
async function contributeGeneratedPluginToOpenDesign(projectId, relativePath) {
    return postGeneratedPluginShareAction(projectId, relativePath, 'contribute-open-design');
}
async function startGeneratedPluginShareTask(projectId, relativePath, action) {
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/plugins/share-tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: relativePath,
            action
        })
    });
    const body = await resp.json().catch(()=>null);
    if (!resp.ok || !body?.taskId || !body?.action || !body?.path || !body?.status || !body?.startedAt) {
        const errorMessage = body?.message ?? (typeof body?.error === 'string' ? body.error : body?.error?.message) ?? 'Could not start plugin share task.';
        throw new Error(errorMessage);
    }
    return {
        taskId: body.taskId,
        action: body.action,
        path: body.path,
        status: body.status,
        startedAt: body.startedAt
    };
}
async function waitGeneratedPluginShareTask(taskId, since, timeoutMs = 25_000) {
    const resp = await fetch(`/api/plugins/share-tasks/${encodeURIComponent(taskId)}/wait`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            since,
            timeoutMs
        })
    });
    const body = await resp.json().catch(()=>null);
    if (!resp.ok || !body?.taskId) {
        const errorMessage = body?.message ?? (typeof body?.error === 'string' ? body.error : body?.error?.message) ?? 'Could not fetch plugin share task.';
        throw new Error(errorMessage);
    }
    return body;
}
async function createPluginShareProject(pluginId, action, locale) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(pluginId)}/share-project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action,
                ...locale ? {
                    locale
                } : {}
            })
        });
        const body = await resp.json().catch(()=>null);
        if (resp.ok && body?.ok && body.project && body.conversationId) {
            return body;
        }
        const errorMessage = typeof body?.error === 'string' ? body.error : body?.error?.message;
        const fallbackMessage = resp.statusText || 'Could not create plugin share project.';
        const message = body?.message ?? errorMessage ?? fallbackMessage;
        const code = body?.code ?? (typeof body?.error === 'object' ? body.error.code : undefined);
        return {
            ok: false,
            message,
            ...code ? {
                code
            } : {}
        };
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
}
async function postGeneratedPluginShareAction(projectId, relativePath, action) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/plugins/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: relativePath
            })
        });
        const body = await resp.json().catch(()=>null);
        return {
            ok: Boolean(resp.ok && body?.ok),
            message: body?.message ?? (resp.ok ? 'Action finished.' : 'Plugin share action failed.'),
            ...body?.url ? {
                url: body.url
            } : {},
            ...body?.log ? {
                log: body.log
            } : {},
            ...body?.code ? {
                code: body.code
            } : {}
        };
    } catch (err) {
        return {
            ok: false,
            message: err.message,
            log: []
        };
    }
}
async function upgradePlugin(id) {
    const log = [];
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(id)}/upgrade`, {
            method: 'POST'
        });
        if (!resp.ok) {
            const message = await readErrorMessage(resp);
            return {
                ok: false,
                warnings: [],
                message,
                log
            };
        }
        if (!resp.body) {
            return {
                ok: false,
                warnings: [],
                message: 'Upgrade stream did not start.',
                log
            };
        }
        let success;
        let warnings = [];
        let errorMessage;
        for await (const ev of readServerSentEvents(resp.body)){
            if (ev.message) log.push(ev.message);
            if (ev.warnings) warnings = ev.warnings;
            if (ev.kind === 'success') success = ev.plugin;
            if (ev.kind === 'error') errorMessage = ev.message ?? 'Upgrade failed.';
        }
        return {
            ok: Boolean(success) && !errorMessage,
            plugin: success,
            warnings,
            message: errorMessage ?? (success ? `Upgraded ${success.title}.` : 'Upgrade finished.'),
            log
        };
    } catch (err) {
        return {
            ok: false,
            warnings: [],
            message: err.message,
            log
        };
    }
}
async function postPluginUpload(url, form) {
    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: form
        });
        const json = await resp.json();
        if (resp.ok && json.ok) {
            return {
                ok: true,
                plugin: json.plugin,
                warnings: json.warnings ?? [],
                message: json.message ?? 'Plugin installed.',
                log: json.log ?? []
            };
        }
        const message = json.message ?? (typeof json.error === 'string' ? json.error : json.error?.message) ?? resp.statusText;
        return {
            ok: false,
            warnings: json.warnings ?? [],
            message,
            log: json.log ?? []
        };
    } catch (err) {
        return {
            ok: false,
            warnings: [],
            message: err.message,
            log: []
        };
    }
}
async function readPluginInstallOutcome(resp) {
    const json = await resp.json();
    if (resp.ok && json.ok) {
        return {
            ok: true,
            ...json.plugin ? {
                plugin: json.plugin
            } : {},
            warnings: json.warnings ?? [],
            message: json.message ?? 'Plugin installed.',
            log: json.log ?? []
        };
    }
    const message = json.message ?? (typeof json.error === 'string' ? json.error : json.error?.message) ?? resp.statusText;
    return {
        ok: false,
        ...json.plugin ? {
            plugin: json.plugin
        } : {},
        warnings: json.warnings ?? [],
        message,
        log: json.log ?? []
    };
}
function getUploadRelativePath(file) {
    const withRelativePath = file;
    return withRelativePath.webkitRelativePath || file.name;
}
async function uninstallPlugin(id) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(id)}/uninstall`, {
            method: 'POST'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function listPluginMarketplaces() {
    try {
        const resp = await fetch('/api/marketplaces');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.marketplaces ?? [];
    } catch  {
        return [];
    }
}
async function addPluginMarketplace(input) {
    try {
        const resp = await fetch('/api/marketplaces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        return readPluginMarketplaceOutcome(resp, 'Marketplace source added.');
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
}
async function refreshPluginMarketplace(id) {
    try {
        const resp = await fetch(`/api/marketplaces/${encodeURIComponent(id)}/refresh`, {
            method: 'POST'
        });
        return readPluginMarketplaceOutcome(resp, 'Marketplace source refreshed.');
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
}
async function removePluginMarketplace(id) {
    try {
        const resp = await fetch(`/api/marketplaces/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        if (!resp.ok) {
            return {
                ok: false,
                message: await readErrorMessage(resp)
            };
        }
        return {
            ok: true,
            message: 'Marketplace source removed.'
        };
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
}
async function setPluginMarketplaceTrust(id, trust) {
    try {
        const resp = await fetch(`/api/marketplaces/${encodeURIComponent(id)}/trust`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trust
            })
        });
        return readPluginMarketplaceOutcome(resp, 'Marketplace trust updated.');
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
}
async function readPluginMarketplaceOutcome(resp, successMessage) {
    if (!resp.ok) {
        return {
            ok: false,
            message: await readErrorMessage(resp)
        };
    }
    const marketplace = await resp.json().catch(()=>null);
    return {
        ok: true,
        ...marketplace ? {
            marketplace
        } : {},
        message: successMessage
    };
}
async function applyPlugin(pluginId, options = {}) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(pluginId)}/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: options.inputs ?? {},
                projectId: options.projectId,
                grantCaps: options.grantCaps ?? [],
                locale: options.locale
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json;
    } catch  {
        return null;
    }
}
async function readErrorMessage(resp) {
    try {
        const json = await resp.json();
        const message = json.message ?? (typeof json.error === 'string' ? json.error : json.error?.message);
        const details = extractErrorDetails(typeof json.error === 'object' ? json.error.data?.errors : undefined, json.errors);
        if (message && details.length > 0) return `${message}: ${details.join('; ')}`;
        if (message) return message;
    } catch  {
    // Fall through to the status text below.
    }
    return resp.statusText || `HTTP ${resp.status}`;
}
function extractErrorDetails(...values) {
    return values.flatMap((value)=>{
        if (!Array.isArray(value)) return [];
        return value.flatMap((item)=>{
            if (typeof item === 'string' && item.trim()) return [
                item.trim()
            ];
            if (item && typeof item === 'object' && 'message' in item) {
                const message = item.message;
                if (typeof message === 'string' && message.trim()) return [
                    message.trim()
                ];
            }
            return [];
        });
    });
}
async function* readServerSentEvents(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    try {
        while(true){
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, {
                stream: true
            });
            const parts = buffer.split(/\n\n/);
            buffer = parts.pop() ?? '';
            for (const part of parts){
                const event = parseServerSentEvent(part);
                if (event) yield event;
            }
        }
        buffer += decoder.decode();
        const event = parseServerSentEvent(buffer);
        if (event) yield event;
    } finally{
        reader.releaseLock();
    }
}
function parseServerSentEvent(raw) {
    const data = raw.split('\n').filter((line)=>line.startsWith('data:')).map((line)=>line.slice(5).trimStart()).join('\n');
    if (!data) return null;
    try {
        return JSON.parse(data);
    } catch  {
        return null;
    }
}
async function fetchAppliedPluginSnapshot(snapshotId) {
    try {
        const resp = await fetch(`/api/applied-plugins/${encodeURIComponent(snapshotId)}`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
function renderPluginBriefTemplate(template, inputs) {
    return template.replace(/\{\{\s*([a-zA-Z_][\w-]*)\s*\}\}/g, (full, key)=>{
        if (key in inputs) {
            const v = inputs[key];
            if (v === undefined || v === null || v === '') return full;
            return String(v);
        }
        return full;
    });
}
function resolvePluginQueryFallback(value, locale, fallbackLocale = 'en') {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (!isStringMap(value)) return '';
    const candidates = [
        locale,
        locale?.split('-')[0],
        fallbackLocale,
        fallbackLocale.split('-')[0]
    ].filter((candidate)=>Boolean(candidate));
    for (const candidate of candidates){
        const resolved = value[candidate];
        if (typeof resolved === 'string' && resolved.length > 0) return resolved;
    }
    return Object.values(value).find((entry)=>entry.length > 0) ?? '';
}
function isStringMap(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    return Object.values(value).every((entry)=>typeof entry === 'string');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/mcp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Web client for the daemon's external-MCP endpoints.
//
// `GET /api/mcp/servers` returns both the user's saved entries AND the
// built-in template list, so the Settings panel hydrates with one round-trip.
// `PUT /api/mcp/servers` replaces the whole list — same pattern the media
// providers PUT uses (the daemon takes the full set rather than merging).
__turbopack_context__.s([
    "disconnectMcpOAuth",
    ()=>disconnectMcpOAuth,
    "fetchMcpOAuthStatus",
    ()=>fetchMcpOAuthStatus,
    "fetchMcpServers",
    ()=>fetchMcpServers,
    "saveMcpServers",
    ()=>saveMcpServers,
    "startMcpOAuth",
    ()=>startMcpOAuth,
    "suggestMcpServerId",
    ()=>suggestMcpServerId
]);
async function fetchMcpServers() {
    try {
        const res = await fetch('/api/mcp/servers');
        if (!res.ok) return null;
        const data = await res.json();
        return {
            servers: Array.isArray(data?.servers) ? data.servers : [],
            templates: Array.isArray(data?.templates) ? data.templates : []
        };
    } catch  {
        return null;
    }
}
async function saveMcpServers(servers) {
    try {
        const res = await fetch('/api/mcp/servers', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                servers
            })
        });
        if (!res.ok) return null;
        const data = await res.json();
        return {
            servers: Array.isArray(data?.servers) ? data.servers : [],
            templates: Array.isArray(data?.templates) ? data.templates : []
        };
    } catch  {
        return null;
    }
}
async function startMcpOAuth(serverId) {
    let res;
    try {
        res = await fetch('/api/mcp/oauth/start', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                serverId
            })
        });
    } catch (err) {
        return {
            ok: false,
            status: null,
            message: err instanceof Error ? `Network error: ${err.message}` : 'Network error reaching the daemon.'
        };
    }
    if (!res.ok) {
        let detail = '';
        try {
            const body = await res.text();
            // Try to pull a typed error message out of `{ error: '...' }` payloads.
            try {
                const parsed = JSON.parse(body);
                if (parsed && typeof parsed.error === 'string') detail = parsed.error;
            } catch  {
                detail = body.slice(0, 240);
            }
        } catch  {
        // ignore
        }
        if (res.status === 404) {
            return {
                ok: false,
                status: 404,
                message: 'Daemon does not know about /api/mcp/oauth/start (it may be running an older build). Restart the daemon (`pnpm tools-dev restart` or equivalent) and try again.'
            };
        }
        return {
            ok: false,
            status: res.status,
            message: detail || `Daemon returned HTTP ${res.status} ${res.statusText}. Check the daemon log for details.`
        };
    }
    try {
        const response = await res.json();
        return {
            ok: true,
            response
        };
    } catch (err) {
        return {
            ok: false,
            status: res.status,
            message: 'Daemon returned a 200 with an unparseable body.'
        };
    }
}
async function fetchMcpOAuthStatus(serverId) {
    try {
        const url = `/api/mcp/oauth/status?serverId=${encodeURIComponent(serverId)}`;
        const res = await fetch(url);
        if (!res.ok) return null;
        return await res.json();
    } catch  {
        return null;
    }
}
async function disconnectMcpOAuth(serverId) {
    try {
        const res = await fetch('/api/mcp/oauth/disconnect', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                serverId
            })
        });
        return res.ok;
    } catch  {
        return false;
    }
}
function suggestMcpServerId(label, taken) {
    const base = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'mcp-server';
    if (!taken.has(base)) return base;
    for(let i = 2; i < 1000; i++){
        const next = `${base}-${i}`;
        if (!taken.has(next)) return next;
    }
    return `${base}-${Math.random().toString(36).slice(2, 6)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/litellm-models.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"_source\":\"https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json\",\"_generated_at\":\"2026-05-02\",\"_license\":\"BerriAI/litellm is MIT-licensed; see https://github.com/BerriAI/litellm/blob/main/LICENSE\",\"models\":{\"ai21.j2-mid-v1\":8191,\"ai21.j2-ultra-v1\":8191,\"ai21.jamba-1-5-large-v1:0\":256000,\"ai21.jamba-1-5-mini-v1:0\":256000,\"ai21.jamba-instruct-v1:0\":4096,\"amazon-nova/nova-lite-v1\":10000,\"amazon-nova/nova-micro-v1\":10000,\"amazon-nova/nova-premier-v1\":10000,\"amazon-nova/nova-pro-v1\":10000,\"amazon.nova-2-lite-v1:0\":64000,\"amazon.nova-2-pro-preview-20251202-v1:0\":64000,\"amazon.nova-lite-v1:0\":10000,\"amazon.nova-micro-v1:0\":10000,\"amazon.nova-pro-v1:0\":10000,\"amazon.titan-text-express-v1\":8000,\"amazon.titan-text-lite-v1\":4000,\"amazon.titan-text-premier-v1:0\":32000,\"anthropic.claude-3-5-haiku-20241022-v1:0\":8192,\"anthropic.claude-3-5-sonnet-20240620-v1:0\":4096,\"anthropic.claude-3-5-sonnet-20241022-v2:0\":8192,\"anthropic.claude-3-7-sonnet-20240620-v1:0\":8192,\"anthropic.claude-3-7-sonnet-20250219-v1:0\":8192,\"anthropic.claude-3-haiku-20240307-v1:0\":4096,\"anthropic.claude-3-opus-20240229-v1:0\":4096,\"anthropic.claude-3-sonnet-20240229-v1:0\":4096,\"anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"anthropic.claude-haiku-4-5@20251001\":64000,\"anthropic.claude-instant-v1\":8191,\"anthropic.claude-mythos-preview\":128000,\"anthropic.claude-opus-4-1-20250805-v1:0\":32000,\"anthropic.claude-opus-4-20250514-v1:0\":32000,\"anthropic.claude-opus-4-5-20251101-v1:0\":64000,\"anthropic.claude-opus-4-6-v1\":128000,\"anthropic.claude-opus-4-7\":128000,\"anthropic.claude-sonnet-4-20250514-v1:0\":64000,\"anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"anthropic.claude-sonnet-4-6\":64000,\"anthropic.claude-v1\":8191,\"anthropic.claude-v2:1\":8191,\"anyscale/codellama/CodeLlama-34b-Instruct-hf\":4096,\"anyscale/codellama/CodeLlama-70b-Instruct-hf\":4096,\"anyscale/google/gemma-7b-it\":8192,\"anyscale/HuggingFaceH4/zephyr-7b-beta\":16384,\"anyscale/meta-llama/Llama-2-13b-chat-hf\":4096,\"anyscale/meta-llama/Llama-2-70b-chat-hf\":4096,\"anyscale/meta-llama/Llama-2-7b-chat-hf\":4096,\"anyscale/meta-llama/Meta-Llama-3-70B-Instruct\":8192,\"anyscale/meta-llama/Meta-Llama-3-8B-Instruct\":8192,\"anyscale/mistralai/Mistral-7B-Instruct-v0.1\":16384,\"anyscale/mistralai/Mixtral-8x22B-Instruct-v0.1\":65536,\"anyscale/mistralai/Mixtral-8x7B-Instruct-v0.1\":16384,\"apac.amazon.nova-2-lite-v1:0\":64000,\"apac.amazon.nova-2-pro-preview-20251202-v1:0\":64000,\"apac.amazon.nova-lite-v1:0\":10000,\"apac.amazon.nova-micro-v1:0\":10000,\"apac.amazon.nova-pro-v1:0\":10000,\"apac.anthropic.claude-3-5-sonnet-20240620-v1:0\":4096,\"apac.anthropic.claude-3-5-sonnet-20241022-v2:0\":8192,\"apac.anthropic.claude-3-haiku-20240307-v1:0\":4096,\"apac.anthropic.claude-3-sonnet-20240229-v1:0\":4096,\"apac.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"apac.anthropic.claude-sonnet-4-20250514-v1:0\":64000,\"au.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"au.anthropic.claude-opus-4-6-v1\":128000,\"au.anthropic.claude-opus-4-7\":128000,\"au.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"au.anthropic.claude-sonnet-4-6\":64000,\"azure_ai/claude-haiku-4-5\":64000,\"azure_ai/claude-opus-4-1\":32000,\"azure_ai/claude-opus-4-5\":64000,\"azure_ai/claude-opus-4-6\":128000,\"azure_ai/claude-opus-4-7\":128000,\"azure_ai/claude-sonnet-4-5\":64000,\"azure_ai/claude-sonnet-4-6\":64000,\"azure_ai/deepseek-r1\":8192,\"azure_ai/deepseek-v3\":8192,\"azure_ai/deepseek-v3-0324\":8192,\"azure_ai/deepseek-v3.2\":163840,\"azure_ai/deepseek-v3.2-speciale\":163840,\"azure_ai/global/grok-3\":131072,\"azure_ai/global/grok-3-mini\":131072,\"azure_ai/gpt-oss-120b\":131072,\"azure_ai/grok-3\":131072,\"azure_ai/grok-3-mini\":131072,\"azure_ai/grok-4\":131072,\"azure_ai/grok-4-1-fast-non-reasoning\":131072,\"azure_ai/grok-4-1-fast-reasoning\":131072,\"azure_ai/grok-4-fast-non-reasoning\":131072,\"azure_ai/grok-4-fast-reasoning\":131072,\"azure_ai/grok-code-fast-1\":131072,\"azure_ai/jais-30b-chat\":8192,\"azure_ai/jamba-instruct\":4096,\"azure_ai/kimi-k2.5\":262144,\"azure_ai/Llama-3.2-11B-Vision-Instruct\":2048,\"azure_ai/Llama-3.2-90B-Vision-Instruct\":2048,\"azure_ai/Llama-3.3-70B-Instruct\":2048,\"azure_ai/Llama-4-Maverick-17B-128E-Instruct-FP8\":16384,\"azure_ai/Llama-4-Scout-17B-16E-Instruct\":16384,\"azure_ai/MAI-DS-R1\":8192,\"azure_ai/Meta-Llama-3-70B-Instruct\":2048,\"azure_ai/Meta-Llama-3.1-405B-Instruct\":2048,\"azure_ai/Meta-Llama-3.1-70B-Instruct\":2048,\"azure_ai/Meta-Llama-3.1-8B-Instruct\":2048,\"azure_ai/ministral-3b\":4096,\"azure_ai/mistral-large\":8191,\"azure_ai/mistral-large-2407\":4096,\"azure_ai/mistral-large-3\":8191,\"azure_ai/mistral-large-latest\":4096,\"azure_ai/mistral-medium-2505\":8191,\"azure_ai/mistral-nemo\":4096,\"azure_ai/mistral-small\":8191,\"azure_ai/mistral-small-2503\":128000,\"azure_ai/Phi-3-medium-128k-instruct\":4096,\"azure_ai/Phi-3-medium-4k-instruct\":4096,\"azure_ai/Phi-3-mini-128k-instruct\":4096,\"azure_ai/Phi-3-mini-4k-instruct\":4096,\"azure_ai/Phi-3-small-128k-instruct\":4096,\"azure_ai/Phi-3-small-8k-instruct\":4096,\"azure_ai/Phi-3.5-mini-instruct\":4096,\"azure_ai/Phi-3.5-MoE-instruct\":4096,\"azure_ai/Phi-3.5-vision-instruct\":4096,\"azure_ai/Phi-4\":16384,\"azure_ai/Phi-4-mini-instruct\":4096,\"azure_ai/Phi-4-mini-reasoning\":4096,\"azure_ai/Phi-4-multimodal-instruct\":4096,\"azure_ai/Phi-4-reasoning\":4096,\"azure/command-r-plus\":4096,\"azure/computer-use-preview\":1024,\"azure/eu/gpt-4o-2024-08-06\":16384,\"azure/eu/gpt-4o-2024-11-20\":16384,\"azure/eu/gpt-4o-mini-2024-07-18\":16384,\"azure/eu/gpt-4o-mini-realtime-preview-2024-12-17\":4096,\"azure/eu/gpt-4o-realtime-preview-2024-10-01\":4096,\"azure/eu/gpt-4o-realtime-preview-2024-12-17\":4096,\"azure/eu/gpt-5-2025-08-07\":128000,\"azure/eu/gpt-5-mini-2025-08-07\":128000,\"azure/eu/gpt-5-nano-2025-08-07\":128000,\"azure/eu/gpt-5.1\":128000,\"azure/eu/gpt-5.1-chat\":128000,\"azure/eu/o1-2024-12-17\":100000,\"azure/eu/o1-mini-2024-09-12\":65536,\"azure/eu/o1-preview-2024-09-12\":32768,\"azure/eu/o3-mini-2025-01-31\":100000,\"azure/global-standard/gpt-4o-2024-08-06\":16384,\"azure/global-standard/gpt-4o-2024-11-20\":16384,\"azure/global-standard/gpt-4o-mini\":16384,\"azure/global/gpt-4o-2024-08-06\":16384,\"azure/global/gpt-4o-2024-11-20\":16384,\"azure/global/gpt-5.1\":128000,\"azure/global/gpt-5.1-chat\":128000,\"azure/gpt-3.5-turbo\":4096,\"azure/gpt-3.5-turbo-0125\":4096,\"azure/gpt-35-turbo\":4096,\"azure/gpt-35-turbo-0125\":4096,\"azure/gpt-35-turbo-1106\":4096,\"azure/gpt-35-turbo-16k\":4096,\"azure/gpt-35-turbo-16k-0613\":4096,\"azure/gpt-4\":4096,\"azure/gpt-4-0125-preview\":4096,\"azure/gpt-4-0613\":4096,\"azure/gpt-4-1106-preview\":4096,\"azure/gpt-4-32k\":4096,\"azure/gpt-4-32k-0613\":4096,\"azure/gpt-4-turbo\":4096,\"azure/gpt-4-turbo-2024-04-09\":4096,\"azure/gpt-4-turbo-vision-preview\":4096,\"azure/gpt-4.1\":32768,\"azure/gpt-4.1-2025-04-14\":32768,\"azure/gpt-4.1-mini\":32768,\"azure/gpt-4.1-mini-2025-04-14\":32768,\"azure/gpt-4.1-nano\":32768,\"azure/gpt-4.1-nano-2025-04-14\":32768,\"azure/gpt-4.5-preview\":16384,\"azure/gpt-4o\":16384,\"azure/gpt-4o-2024-05-13\":4096,\"azure/gpt-4o-2024-08-06\":16384,\"azure/gpt-4o-2024-11-20\":16384,\"azure/gpt-4o-audio-preview-2024-12-17\":16384,\"azure/gpt-4o-mini\":16384,\"azure/gpt-4o-mini-2024-07-18\":16384,\"azure/gpt-4o-mini-audio-preview-2024-12-17\":16384,\"azure/gpt-4o-mini-realtime-preview-2024-12-17\":4096,\"azure/gpt-4o-realtime-preview-2024-10-01\":4096,\"azure/gpt-4o-realtime-preview-2024-12-17\":4096,\"azure/gpt-5\":128000,\"azure/gpt-5-2025-08-07\":128000,\"azure/gpt-5-chat\":16384,\"azure/gpt-5-chat-latest\":16384,\"azure/gpt-5-mini\":128000,\"azure/gpt-5-mini-2025-08-07\":128000,\"azure/gpt-5-nano\":128000,\"azure/gpt-5-nano-2025-08-07\":128000,\"azure/gpt-5.1\":128000,\"azure/gpt-5.1-2025-11-13\":128000,\"azure/gpt-5.1-chat\":128000,\"azure/gpt-5.1-chat-2025-11-13\":16384,\"azure/gpt-5.2\":128000,\"azure/gpt-5.2-2025-12-11\":128000,\"azure/gpt-5.2-chat\":16384,\"azure/gpt-5.2-chat-2025-12-11\":16384,\"azure/gpt-5.3-chat\":16384,\"azure/gpt-5.4\":128000,\"azure/gpt-5.4-2026-03-05\":128000,\"azure/gpt-5.4-mini\":128000,\"azure/gpt-5.4-mini-2026-03-17\":128000,\"azure/gpt-5.4-nano\":128000,\"azure/gpt-5.4-nano-2026-03-17\":128000,\"azure/gpt-5.5\":128000,\"azure/gpt-5.5-2026-04-23\":128000,\"azure/gpt-audio-1.5-2026-02-23\":16384,\"azure/gpt-audio-2025-08-28\":16384,\"azure/gpt-audio-mini-2025-10-06\":16384,\"azure/gpt-realtime-1.5-2026-02-23\":4096,\"azure/gpt-realtime-2025-08-28\":4096,\"azure/gpt-realtime-mini-2025-10-06\":4096,\"azure/mistral-large-2402\":32000,\"azure/mistral-large-latest\":32000,\"azure/o1\":100000,\"azure/o1-2024-12-17\":100000,\"azure/o1-mini\":65536,\"azure/o1-mini-2024-09-12\":65536,\"azure/o1-preview\":32768,\"azure/o1-preview-2024-09-12\":32768,\"azure/o3\":100000,\"azure/o3-2025-04-16\":100000,\"azure/o3-mini\":100000,\"azure/o3-mini-2025-01-31\":100000,\"azure/o4-mini\":100000,\"azure/o4-mini-2025-04-16\":100000,\"azure/us/gpt-4.1-2025-04-14\":32768,\"azure/us/gpt-4.1-mini-2025-04-14\":32768,\"azure/us/gpt-4.1-nano-2025-04-14\":32768,\"azure/us/gpt-4o-2024-08-06\":16384,\"azure/us/gpt-4o-2024-11-20\":16384,\"azure/us/gpt-4o-mini-2024-07-18\":16384,\"azure/us/gpt-4o-mini-realtime-preview-2024-12-17\":4096,\"azure/us/gpt-4o-realtime-preview-2024-10-01\":4096,\"azure/us/gpt-4o-realtime-preview-2024-12-17\":4096,\"azure/us/gpt-5-2025-08-07\":128000,\"azure/us/gpt-5-mini-2025-08-07\":128000,\"azure/us/gpt-5-nano-2025-08-07\":128000,\"azure/us/gpt-5.1\":128000,\"azure/us/gpt-5.1-chat\":128000,\"azure/us/o1-2024-12-17\":100000,\"azure/us/o1-mini-2024-09-12\":65536,\"azure/us/o1-preview-2024-09-12\":32768,\"azure/us/o3-2025-04-16\":100000,\"azure/us/o3-mini-2025-01-31\":100000,\"azure/us/o4-mini-2025-04-16\":100000,\"bedrock_mantle/openai.gpt-oss-120b\":32768,\"bedrock_mantle/openai.gpt-oss-20b\":32768,\"bedrock_mantle/openai.gpt-oss-safeguard-120b\":65536,\"bedrock_mantle/openai.gpt-oss-safeguard-20b\":65536,\"bedrock/*/1-month-commitment/cohere.command-light-text-v14\":4096,\"bedrock/*/1-month-commitment/cohere.command-text-v14\":4096,\"bedrock/*/6-month-commitment/cohere.command-light-text-v14\":4096,\"bedrock/*/6-month-commitment/cohere.command-text-v14\":4096,\"bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v1\":8191,\"bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v1\":8191,\"bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/ap-northeast-1/anthropic.claude-instant-v1\":8191,\"bedrock/ap-northeast-1/anthropic.claude-v1\":8191,\"bedrock/ap-northeast-1/anthropic.claude-v2:1\":8191,\"bedrock/ap-northeast-1/deepseek.v3.2\":163840,\"bedrock/ap-northeast-1/minimax.minimax-m2.1\":8192,\"bedrock/ap-northeast-1/minimax.minimax-m2.5\":8192,\"bedrock/ap-northeast-1/moonshotai.kimi-k2-thinking\":262144,\"bedrock/ap-northeast-1/moonshotai.kimi-k2.5\":262144,\"bedrock/ap-northeast-1/qwen.qwen3-coder-next\":8192,\"bedrock/ap-south-1/deepseek.v3.2\":163840,\"bedrock/ap-south-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/ap-south-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/ap-south-1/minimax.minimax-m2.1\":8192,\"bedrock/ap-south-1/minimax.minimax-m2.5\":8192,\"bedrock/ap-south-1/moonshotai.kimi-k2-thinking\":262144,\"bedrock/ap-south-1/moonshotai.kimi-k2.5\":262144,\"bedrock/ap-south-1/qwen.qwen3-coder-next\":8192,\"bedrock/ap-southeast-2/minimax.minimax-m2.5\":8192,\"bedrock/ap-southeast-3/deepseek.v3.2\":163840,\"bedrock/ap-southeast-3/minimax.minimax-m2.1\":8192,\"bedrock/ap-southeast-3/minimax.minimax-m2.5\":8192,\"bedrock/ap-southeast-3/moonshotai.kimi-k2.5\":262144,\"bedrock/ap-southeast-3/qwen.qwen3-coder-next\":8192,\"bedrock/ca-central-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/ca-central-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/eu-central-1/1-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/eu-central-1/1-month-commitment/anthropic.claude-v1\":8191,\"bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/eu-central-1/6-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/eu-central-1/6-month-commitment/anthropic.claude-v1\":8191,\"bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/eu-central-1/anthropic.claude-instant-v1\":8191,\"bedrock/eu-central-1/anthropic.claude-v1\":8191,\"bedrock/eu-central-1/anthropic.claude-v2:1\":8191,\"bedrock/eu-central-1/minimax.minimax-m2.1\":8192,\"bedrock/eu-central-1/minimax.minimax-m2.5\":8192,\"bedrock/eu-central-1/qwen.qwen3-coder-next\":8192,\"bedrock/eu-north-1/deepseek.v3.2\":163840,\"bedrock/eu-north-1/minimax.minimax-m2.1\":8192,\"bedrock/eu-north-1/minimax.minimax-m2.5\":8192,\"bedrock/eu-north-1/moonshotai.kimi-k2.5\":262144,\"bedrock/eu-south-1/minimax.minimax-m2.1\":8192,\"bedrock/eu-south-1/minimax.minimax-m2.5\":8192,\"bedrock/eu-south-1/qwen.qwen3-coder-next\":8192,\"bedrock/eu-west-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/eu-west-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/eu-west-1/minimax.minimax-m2.1\":8192,\"bedrock/eu-west-1/minimax.minimax-m2.5\":8192,\"bedrock/eu-west-1/qwen.qwen3-coder-next\":8192,\"bedrock/eu-west-2/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/eu-west-2/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/eu-west-2/minimax.minimax-m2.1\":8192,\"bedrock/eu-west-2/minimax.minimax-m2.5\":8192,\"bedrock/eu-west-2/qwen.qwen3-coder-next\":8192,\"bedrock/eu-west-3/mistral.mistral-7b-instruct-v0:2\":8191,\"bedrock/eu-west-3/mistral.mistral-large-2402-v1:0\":8191,\"bedrock/eu-west-3/mistral.mixtral-8x7b-instruct-v0:1\":8191,\"bedrock/invoke/anthropic.claude-3-5-sonnet-20240620-v1:0\":4096,\"bedrock/moonshotai.kimi-k2-thinking\":262144,\"bedrock/moonshotai.kimi-k2.5\":262144,\"bedrock/sa-east-1/deepseek.v3.2\":163840,\"bedrock/sa-east-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/sa-east-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/sa-east-1/minimax.minimax-m2.1\":8192,\"bedrock/sa-east-1/minimax.minimax-m2.5\":8192,\"bedrock/sa-east-1/moonshotai.kimi-k2-thinking\":262144,\"bedrock/sa-east-1/moonshotai.kimi-k2.5\":262144,\"bedrock/sa-east-1/qwen.qwen3-coder-next\":8192,\"bedrock/us-east-1/1-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/us-east-1/1-month-commitment/anthropic.claude-v1\":8191,\"bedrock/us-east-1/1-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/us-east-1/6-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/us-east-1/6-month-commitment/anthropic.claude-v1\":8191,\"bedrock/us-east-1/6-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/us-east-1/anthropic.claude-instant-v1\":8191,\"bedrock/us-east-1/anthropic.claude-v1\":8191,\"bedrock/us-east-1/anthropic.claude-v2:1\":8191,\"bedrock/us-east-1/deepseek.v3.2\":163840,\"bedrock/us-east-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/us-east-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/us-east-1/minimax.minimax-m2.1\":8192,\"bedrock/us-east-1/minimax.minimax-m2.5\":8192,\"bedrock/us-east-1/mistral.mistral-7b-instruct-v0:2\":8191,\"bedrock/us-east-1/mistral.mistral-large-2402-v1:0\":8191,\"bedrock/us-east-1/mistral.mixtral-8x7b-instruct-v0:1\":8191,\"bedrock/us-east-1/moonshotai.kimi-k2-thinking\":262144,\"bedrock/us-east-1/moonshotai.kimi-k2.5\":262144,\"bedrock/us-east-1/qwen.qwen3-coder-next\":8192,\"bedrock/us-east-1/zai.glm-5\":128000,\"bedrock/us-east-2/deepseek.v3.2\":163840,\"bedrock/us-east-2/minimax.minimax-m2.1\":8192,\"bedrock/us-east-2/minimax.minimax-m2.5\":8192,\"bedrock/us-east-2/moonshotai.kimi-k2-thinking\":262144,\"bedrock/us-east-2/moonshotai.kimi-k2.5\":262144,\"bedrock/us-east-2/qwen.qwen3-coder-next\":8192,\"bedrock/us-gov-east-1/amazon.nova-pro-v1:0\":10000,\"bedrock/us-gov-east-1/amazon.titan-text-express-v1\":8000,\"bedrock/us-gov-east-1/amazon.titan-text-lite-v1\":4000,\"bedrock/us-gov-east-1/amazon.titan-text-premier-v1:0\":32000,\"bedrock/us-gov-east-1/anthropic.claude-3-5-sonnet-20240620-v1:0\":8192,\"bedrock/us-gov-east-1/anthropic.claude-3-haiku-20240307-v1:0\":4096,\"bedrock/us-gov-east-1/anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"bedrock/us-gov-east-1/anthropic.claude-sonnet-4-5-20250929-v1:0\":8192,\"bedrock/us-gov-east-1/claude-sonnet-4-5-20250929-v1:0\":8192,\"bedrock/us-gov-east-1/meta.llama3-70b-instruct-v1:0\":2048,\"bedrock/us-gov-east-1/meta.llama3-8b-instruct-v1:0\":2048,\"bedrock/us-gov-west-1/amazon.nova-pro-v1:0\":10000,\"bedrock/us-gov-west-1/amazon.titan-text-express-v1\":8000,\"bedrock/us-gov-west-1/amazon.titan-text-lite-v1\":4000,\"bedrock/us-gov-west-1/amazon.titan-text-premier-v1:0\":32000,\"bedrock/us-gov-west-1/anthropic.claude-3-5-sonnet-20240620-v1:0\":8192,\"bedrock/us-gov-west-1/anthropic.claude-3-7-sonnet-20250219-v1:0\":8192,\"bedrock/us-gov-west-1/anthropic.claude-3-haiku-20240307-v1:0\":4096,\"bedrock/us-gov-west-1/anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"bedrock/us-gov-west-1/anthropic.claude-sonnet-4-5-20250929-v1:0\":8192,\"bedrock/us-gov-west-1/claude-sonnet-4-5-20250929-v1:0\":8192,\"bedrock/us-gov-west-1/meta.llama3-70b-instruct-v1:0\":2048,\"bedrock/us-gov-west-1/meta.llama3-8b-instruct-v1:0\":2048,\"bedrock/us-west-1/meta.llama3-70b-instruct-v1:0\":8192,\"bedrock/us-west-1/meta.llama3-8b-instruct-v1:0\":8192,\"bedrock/us-west-2/1-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/us-west-2/1-month-commitment/anthropic.claude-v1\":8191,\"bedrock/us-west-2/1-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/us-west-2/6-month-commitment/anthropic.claude-instant-v1\":8191,\"bedrock/us-west-2/6-month-commitment/anthropic.claude-v1\":8191,\"bedrock/us-west-2/6-month-commitment/anthropic.claude-v2:1\":8191,\"bedrock/us-west-2/anthropic.claude-instant-v1\":8191,\"bedrock/us-west-2/anthropic.claude-v1\":8191,\"bedrock/us-west-2/anthropic.claude-v2:1\":8191,\"bedrock/us-west-2/deepseek.v3.2\":163840,\"bedrock/us-west-2/minimax.minimax-m2.1\":8192,\"bedrock/us-west-2/minimax.minimax-m2.5\":8192,\"bedrock/us-west-2/mistral.mistral-7b-instruct-v0:2\":8191,\"bedrock/us-west-2/mistral.mistral-large-2402-v1:0\":8191,\"bedrock/us-west-2/mistral.mixtral-8x7b-instruct-v0:1\":8191,\"bedrock/us-west-2/moonshotai.kimi-k2-thinking\":262144,\"bedrock/us-west-2/moonshotai.kimi-k2.5\":262144,\"bedrock/us-west-2/qwen.qwen3-coder-next\":8192,\"bedrock/us-west-2/zai.glm-5\":128000,\"bedrock/us.anthropic.claude-3-5-haiku-20241022-v1:0\":8192,\"cerebras/gpt-oss-120b\":32768,\"cerebras/llama-3.3-70b\":128000,\"cerebras/llama3.1-70b\":128000,\"cerebras/llama3.1-8b\":128000,\"cerebras/qwen-3-32b\":128000,\"cerebras/zai-glm-4.6\":128000,\"cerebras/zai-glm-4.7\":128000,\"chatdolphin\":16384,\"chatgpt-4o-latest\":4096,\"claude-3-7-sonnet-20250219\":64000,\"claude-3-haiku-20240307\":4096,\"claude-3-opus-20240229\":4096,\"claude-4-opus-20250514\":32000,\"claude-4-sonnet-20250514\":64000,\"claude-haiku-4-5\":64000,\"claude-haiku-4-5-20251001\":64000,\"claude-opus-4-1\":32000,\"claude-opus-4-1-20250805\":32000,\"claude-opus-4-20250514\":32000,\"claude-opus-4-5\":64000,\"claude-opus-4-5-20251101\":64000,\"claude-opus-4-6\":128000,\"claude-opus-4-6-20260205\":128000,\"claude-opus-4-7\":128000,\"claude-opus-4-7-20260416\":128000,\"claude-sonnet-4-20250514\":64000,\"claude-sonnet-4-5\":64000,\"claude-sonnet-4-5-20250929\":64000,\"claude-sonnet-4-5-20250929-v1:0\":64000,\"claude-sonnet-4-6\":64000,\"cloudflare/@cf/meta/llama-2-7b-chat-fp16\":3072,\"cloudflare/@cf/meta/llama-2-7b-chat-int8\":2048,\"cloudflare/@cf/mistral/mistral-7b-instruct-v0.1\":8192,\"cloudflare/@hf/thebloke/codellama-7b-instruct-awq\":4096,\"codestral/codestral-2405\":8191,\"codestral/codestral-latest\":8191,\"cohere.command-light-text-v14\":4096,\"cohere.command-r-plus-v1:0\":4096,\"cohere.command-r-v1:0\":4096,\"cohere.command-text-v14\":4096,\"command-a-03-2025\":8000,\"command-light\":4096,\"command-r\":4096,\"command-r-08-2024\":4096,\"command-r-plus\":4096,\"command-r-plus-08-2024\":4096,\"command-r7b-12-2024\":4096,\"computer-use-preview\":1024,\"dashscope/qwen-coder\":16384,\"dashscope/qwen-flash\":32768,\"dashscope/qwen-flash-2025-07-28\":32768,\"dashscope/qwen-max\":8192,\"dashscope/qwen-plus\":16384,\"dashscope/qwen-plus-2025-01-25\":8192,\"dashscope/qwen-plus-2025-04-28\":16384,\"dashscope/qwen-plus-2025-07-14\":16384,\"dashscope/qwen-plus-2025-07-28\":32768,\"dashscope/qwen-plus-2025-09-11\":32768,\"dashscope/qwen-plus-latest\":32768,\"dashscope/qwen-turbo\":16384,\"dashscope/qwen-turbo-2024-11-01\":8192,\"dashscope/qwen-turbo-2025-04-28\":16384,\"dashscope/qwen-turbo-latest\":16384,\"dashscope/qwen3-30b-a3b\":16384,\"dashscope/qwen3-coder-flash\":65536,\"dashscope/qwen3-coder-flash-2025-07-28\":65536,\"dashscope/qwen3-coder-plus\":65536,\"dashscope/qwen3-coder-plus-2025-07-22\":65536,\"dashscope/qwen3-max\":65536,\"dashscope/qwen3-max-2026-01-23\":65536,\"dashscope/qwen3-max-preview\":65536,\"dashscope/qwen3-next-80b-a3b-instruct\":65536,\"dashscope/qwen3-next-80b-a3b-thinking\":65536,\"dashscope/qwen3-vl-235b-a22b-instruct\":32768,\"dashscope/qwen3-vl-235b-a22b-thinking\":32768,\"dashscope/qwen3-vl-32b-instruct\":32768,\"dashscope/qwen3-vl-32b-thinking\":32768,\"dashscope/qwen3-vl-plus\":32768,\"dashscope/qwen3.5-plus\":65536,\"dashscope/qwq-plus\":8192,\"databricks/databricks-claude-3-7-sonnet\":128000,\"databricks/databricks-claude-haiku-4-5\":64000,\"databricks/databricks-claude-opus-4\":32000,\"databricks/databricks-claude-opus-4-1\":32000,\"databricks/databricks-claude-opus-4-5\":64000,\"databricks/databricks-claude-sonnet-4\":64000,\"databricks/databricks-claude-sonnet-4-1\":64000,\"databricks/databricks-claude-sonnet-4-5\":64000,\"databricks/databricks-gemini-2-5-flash\":65535,\"databricks/databricks-gemini-2-5-pro\":65536,\"databricks/databricks-gemma-3-12b\":32000,\"databricks/databricks-gpt-5\":128000,\"databricks/databricks-gpt-5-1\":128000,\"databricks/databricks-gpt-5-mini\":128000,\"databricks/databricks-gpt-5-nano\":128000,\"databricks/databricks-gpt-oss-120b\":131072,\"databricks/databricks-gpt-oss-20b\":131072,\"databricks/databricks-llama-2-70b-chat\":4096,\"databricks/databricks-llama-4-maverick\":128000,\"databricks/databricks-meta-llama-3-1-405b-instruct\":128000,\"databricks/databricks-meta-llama-3-1-8b-instruct\":128000,\"databricks/databricks-meta-llama-3-3-70b-instruct\":128000,\"databricks/databricks-meta-llama-3-70b-instruct\":128000,\"databricks/databricks-mixtral-8x7b-instruct\":4096,\"databricks/databricks-mpt-30b-instruct\":8192,\"databricks/databricks-mpt-7b-instruct\":8192,\"deepinfra/allenai/olmOCR-7B-0725-FP8\":16384,\"deepinfra/anthropic/claude-3-7-sonnet-latest\":200000,\"deepinfra/anthropic/claude-4-opus\":200000,\"deepinfra/anthropic/claude-4-sonnet\":200000,\"deepinfra/deepseek-ai/DeepSeek-R1\":163840,\"deepinfra/deepseek-ai/DeepSeek-R1-0528\":163840,\"deepinfra/deepseek-ai/DeepSeek-R1-0528-Turbo\":32768,\"deepinfra/deepseek-ai/DeepSeek-R1-Distill-Llama-70B\":131072,\"deepinfra/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B\":131072,\"deepinfra/deepseek-ai/DeepSeek-R1-Turbo\":40960,\"deepinfra/deepseek-ai/DeepSeek-V3\":163840,\"deepinfra/deepseek-ai/DeepSeek-V3-0324\":163840,\"deepinfra/deepseek-ai/DeepSeek-V3.1\":163840,\"deepinfra/deepseek-ai/DeepSeek-V3.1-Terminus\":163840,\"deepinfra/google/gemini-2.0-flash-001\":1000000,\"deepinfra/google/gemini-2.5-flash\":1000000,\"deepinfra/google/gemini-2.5-pro\":1000000,\"deepinfra/google/gemma-3-12b-it\":131072,\"deepinfra/google/gemma-3-27b-it\":131072,\"deepinfra/google/gemma-3-4b-it\":131072,\"deepinfra/Gryphe/MythoMax-L2-13b\":4096,\"deepinfra/meta-llama/Llama-3.2-11B-Vision-Instruct\":131072,\"deepinfra/meta-llama/Llama-3.2-3B-Instruct\":131072,\"deepinfra/meta-llama/Llama-3.3-70B-Instruct\":131072,\"deepinfra/meta-llama/Llama-3.3-70B-Instruct-Turbo\":131072,\"deepinfra/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8\":1048576,\"deepinfra/meta-llama/Llama-4-Scout-17B-16E-Instruct\":327680,\"deepinfra/meta-llama/Llama-Guard-3-8B\":131072,\"deepinfra/meta-llama/Llama-Guard-4-12B\":163840,\"deepinfra/meta-llama/Meta-Llama-3-8B-Instruct\":8192,\"deepinfra/meta-llama/Meta-Llama-3.1-70B-Instruct\":131072,\"deepinfra/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo\":131072,\"deepinfra/meta-llama/Meta-Llama-3.1-8B-Instruct\":131072,\"deepinfra/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo\":131072,\"deepinfra/microsoft/phi-4\":16384,\"deepinfra/microsoft/WizardLM-2-8x22B\":65536,\"deepinfra/mistralai/Mistral-Nemo-Instruct-2407\":131072,\"deepinfra/mistralai/Mistral-Small-24B-Instruct-2501\":32768,\"deepinfra/mistralai/Mistral-Small-3.2-24B-Instruct-2506\":128000,\"deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1\":32768,\"deepinfra/moonshotai/Kimi-K2-Instruct\":131072,\"deepinfra/moonshotai/Kimi-K2-Instruct-0905\":262144,\"deepinfra/NousResearch/Hermes-3-Llama-3.1-405B\":131072,\"deepinfra/NousResearch/Hermes-3-Llama-3.1-70B\":131072,\"deepinfra/nvidia/Llama-3.1-Nemotron-70B-Instruct\":131072,\"deepinfra/nvidia/Llama-3.3-Nemotron-Super-49B-v1.5\":131072,\"deepinfra/nvidia/NVIDIA-Nemotron-Nano-9B-v2\":131072,\"deepinfra/openai/gpt-oss-120b\":131072,\"deepinfra/openai/gpt-oss-20b\":131072,\"deepinfra/Qwen/Qwen2.5-72B-Instruct\":32768,\"deepinfra/Qwen/Qwen2.5-7B-Instruct\":32768,\"deepinfra/Qwen/Qwen2.5-VL-32B-Instruct\":128000,\"deepinfra/Qwen/Qwen3-14B\":40960,\"deepinfra/Qwen/Qwen3-235B-A22B\":40960,\"deepinfra/Qwen/Qwen3-235B-A22B-Instruct-2507\":262144,\"deepinfra/Qwen/Qwen3-235B-A22B-Thinking-2507\":262144,\"deepinfra/Qwen/Qwen3-30B-A3B\":40960,\"deepinfra/Qwen/Qwen3-32B\":40960,\"deepinfra/Qwen/Qwen3-Coder-480B-A35B-Instruct\":262144,\"deepinfra/Qwen/Qwen3-Coder-480B-A35B-Instruct-Turbo\":262144,\"deepinfra/Qwen/Qwen3-Next-80B-A3B-Instruct\":262144,\"deepinfra/Qwen/Qwen3-Next-80B-A3B-Thinking\":262144,\"deepinfra/Qwen/QwQ-32B\":131072,\"deepinfra/Sao10K/L3-8B-Lunaris-v1-Turbo\":8192,\"deepinfra/Sao10K/L3.1-70B-Euryale-v2.2\":131072,\"deepinfra/Sao10K/L3.3-70B-Euryale-v2.3\":131072,\"deepinfra/zai-org/GLM-4.5\":131072,\"deepseek-chat\":8192,\"deepseek-reasoner\":65536,\"deepseek-v3-2-251201\":32768,\"deepseek.v3-v1:0\":81920,\"deepseek.v3.2\":163840,\"deepseek/deepseek-chat\":8192,\"deepseek/deepseek-coder\":4096,\"deepseek/deepseek-r1\":8192,\"deepseek/deepseek-reasoner\":65536,\"deepseek/deepseek-v3\":8192,\"deepseek/deepseek-v3.2\":163840,\"eu.amazon.nova-2-lite-v1:0\":64000,\"eu.amazon.nova-2-pro-preview-20251202-v1:0\":64000,\"eu.amazon.nova-lite-v1:0\":10000,\"eu.amazon.nova-micro-v1:0\":10000,\"eu.amazon.nova-pro-v1:0\":10000,\"eu.anthropic.claude-3-5-haiku-20241022-v1:0\":8192,\"eu.anthropic.claude-3-5-sonnet-20240620-v1:0\":4096,\"eu.anthropic.claude-3-5-sonnet-20241022-v2:0\":8192,\"eu.anthropic.claude-3-7-sonnet-20250219-v1:0\":8192,\"eu.anthropic.claude-3-haiku-20240307-v1:0\":4096,\"eu.anthropic.claude-3-opus-20240229-v1:0\":4096,\"eu.anthropic.claude-3-sonnet-20240229-v1:0\":4096,\"eu.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"eu.anthropic.claude-opus-4-1-20250805-v1:0\":32000,\"eu.anthropic.claude-opus-4-20250514-v1:0\":32000,\"eu.anthropic.claude-opus-4-5-20251101-v1:0\":64000,\"eu.anthropic.claude-opus-4-6-v1\":128000,\"eu.anthropic.claude-opus-4-7\":128000,\"eu.anthropic.claude-sonnet-4-20250514-v1:0\":64000,\"eu.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"eu.anthropic.claude-sonnet-4-6\":64000,\"eu.deepseek.v3.2\":163840,\"eu.meta.llama3-2-1b-instruct-v1:0\":4096,\"eu.meta.llama3-2-3b-instruct-v1:0\":4096,\"eu.mistral.pixtral-large-2502-v1:0\":4096,\"featherless_ai/featherless-ai/Qwerky-72B\":4096,\"featherless_ai/featherless-ai/Qwerky-QwQ-32B\":4096,\"fireworks_ai/accounts/fireworks/models/chronos-hermes-13b-v2\":4096,\"fireworks_ai/accounts/fireworks/models/code-llama-13b\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-13b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-13b-python\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-34b\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-34b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-34b-python\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-70b\":4096,\"fireworks_ai/accounts/fireworks/models/code-llama-70b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/code-llama-70b-python\":4096,\"fireworks_ai/accounts/fireworks/models/code-llama-7b\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-7b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/code-llama-7b-python\":16384,\"fireworks_ai/accounts/fireworks/models/code-qwen-1p5-7b\":65536,\"fireworks_ai/accounts/fireworks/models/codegemma-2b\":8192,\"fireworks_ai/accounts/fireworks/models/codegemma-7b\":8192,\"fireworks_ai/accounts/fireworks/models/cogito-671b-v2-p1\":163840,\"fireworks_ai/accounts/fireworks/models/cogito-v1-preview-llama-3b\":131072,\"fireworks_ai/accounts/fireworks/models/cogito-v1-preview-llama-70b\":131072,\"fireworks_ai/accounts/fireworks/models/cogito-v1-preview-llama-8b\":131072,\"fireworks_ai/accounts/fireworks/models/cogito-v1-preview-qwen-14b\":131072,\"fireworks_ai/accounts/fireworks/models/cogito-v1-preview-qwen-32b\":131072,\"fireworks_ai/accounts/fireworks/models/dbrx-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-1b-base\":16384,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-33b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-7b-base\":4096,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-7b-base-v1p5\":4096,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-7b-instruct-v1p5\":4096,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-instruct\":65536,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-lite-base\":163840,\"fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-lite-instruct\":163840,\"fireworks_ai/accounts/fireworks/models/deepseek-prover-v2\":163840,\"fireworks_ai/accounts/fireworks/models/deepseek-r1\":20480,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-0528\":160000,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-0528-distill-qwen3-8b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-basic\":20480,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-llama-70b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-llama-8b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-qwen-14b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-qwen-1p5b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-qwen-32b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-r1-distill-qwen-7b\":131072,\"fireworks_ai/accounts/fireworks/models/deepseek-v2-lite-chat\":163840,\"fireworks_ai/accounts/fireworks/models/deepseek-v2p5\":32768,\"fireworks_ai/accounts/fireworks/models/deepseek-v3\":8192,\"fireworks_ai/accounts/fireworks/models/deepseek-v3-0324\":163840,\"fireworks_ai/accounts/fireworks/models/deepseek-v3p1\":8192,\"fireworks_ai/accounts/fireworks/models/deepseek-v3p1-terminus\":8192,\"fireworks_ai/accounts/fireworks/models/deepseek-v3p2\":163840,\"fireworks_ai/accounts/fireworks/models/devstral-small-2505\":131072,\"fireworks_ai/accounts/fireworks/models/dobby-mini-unhinged-plus-llama-3-1-8b\":131072,\"fireworks_ai/accounts/fireworks/models/dobby-unhinged-llama-3-3-70b-new\":131072,\"fireworks_ai/accounts/fireworks/models/dolphin-2-9-2-qwen2-72b\":131072,\"fireworks_ai/accounts/fireworks/models/dolphin-2p6-mixtral-8x7b\":32768,\"fireworks_ai/accounts/fireworks/models/ernie-4p5-21b-a3b-pt\":4096,\"fireworks_ai/accounts/fireworks/models/ernie-4p5-300b-a47b-pt\":4096,\"fireworks_ai/accounts/fireworks/models/fare-20b\":131072,\"fireworks_ai/accounts/fireworks/models/firefunction-v1\":32768,\"fireworks_ai/accounts/fireworks/models/firefunction-v2\":8192,\"fireworks_ai/accounts/fireworks/models/firellava-13b\":4096,\"fireworks_ai/accounts/fireworks/models/firesearch-ocr-v6\":8192,\"fireworks_ai/accounts/fireworks/models/flux-1-dev\":4096,\"fireworks_ai/accounts/fireworks/models/flux-1-dev-controlnet-union\":4096,\"fireworks_ai/accounts/fireworks/models/flux-1-schnell\":4096,\"fireworks_ai/accounts/fireworks/models/gemma-2b-it\":8192,\"fireworks_ai/accounts/fireworks/models/gemma-3-27b-it\":131072,\"fireworks_ai/accounts/fireworks/models/gemma-7b\":8192,\"fireworks_ai/accounts/fireworks/models/gemma-7b-it\":8192,\"fireworks_ai/accounts/fireworks/models/gemma2-9b-it\":8192,\"fireworks_ai/accounts/fireworks/models/glm-4p5\":96000,\"fireworks_ai/accounts/fireworks/models/glm-4p5-air\":96000,\"fireworks_ai/accounts/fireworks/models/glm-4p5v\":131072,\"fireworks_ai/accounts/fireworks/models/glm-4p6\":202800,\"fireworks_ai/accounts/fireworks/models/glm-4p7\":202800,\"fireworks_ai/accounts/fireworks/models/gpt-oss-120b\":131072,\"fireworks_ai/accounts/fireworks/models/gpt-oss-20b\":131072,\"fireworks_ai/accounts/fireworks/models/gpt-oss-safeguard-120b\":131072,\"fireworks_ai/accounts/fireworks/models/gpt-oss-safeguard-20b\":131072,\"fireworks_ai/accounts/fireworks/models/hermes-2-pro-mistral-7b\":32768,\"fireworks_ai/accounts/fireworks/models/internvl3-38b\":16384,\"fireworks_ai/accounts/fireworks/models/internvl3-78b\":16384,\"fireworks_ai/accounts/fireworks/models/internvl3-8b\":16384,\"fireworks_ai/accounts/fireworks/models/kat-coder\":262144,\"fireworks_ai/accounts/fireworks/models/kat-dev-32b\":131072,\"fireworks_ai/accounts/fireworks/models/kat-dev-72b-exp\":131072,\"fireworks_ai/accounts/fireworks/models/kimi-k2-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/kimi-k2-instruct-0905\":32768,\"fireworks_ai/accounts/fireworks/models/kimi-k2-thinking\":262144,\"fireworks_ai/accounts/fireworks/models/kimi-k2p5\":262144,\"fireworks_ai/accounts/fireworks/models/llama-guard-2-8b\":8192,\"fireworks_ai/accounts/fireworks/models/llama-guard-3-1b\":131072,\"fireworks_ai/accounts/fireworks/models/llama-guard-3-8b\":131072,\"fireworks_ai/accounts/fireworks/models/llama-v2-13b\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v2-13b-chat\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v2-70b\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v2-70b-chat\":2048,\"fireworks_ai/accounts/fireworks/models/llama-v2-7b\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v2-7b-chat\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v3-70b-instruct\":8192,\"fireworks_ai/accounts/fireworks/models/llama-v3-70b-instruct-hf\":8192,\"fireworks_ai/accounts/fireworks/models/llama-v3-8b\":8192,\"fireworks_ai/accounts/fireworks/models/llama-v3-8b-instruct-hf\":8192,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-405b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-405b-instruct-long\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-70b-instruct\":131072,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-70b-instruct-1b\":4096,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-8b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p1-nemotron-70b-instruct\":131072,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-11b-vision-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-1b\":131072,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-1b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-3b\":131072,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-3b-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p2-90b-vision-instruct\":16384,\"fireworks_ai/accounts/fireworks/models/llama-v3p3-70b-instruct\":131072,\"fireworks_ai/accounts/fireworks/models/llama4-maverick-instruct-basic\":131072,\"fireworks_ai/accounts/fireworks/models/llama4-scout-instruct-basic\":131072,\"fireworks_ai/accounts/fireworks/models/llamaguard-7b\":4096,\"fireworks_ai/accounts/fireworks/models/llava-yi-34b\":4096,\"fireworks_ai/accounts/fireworks/models/minimax-m1-80k\":4096,\"fireworks_ai/accounts/fireworks/models/minimax-m2\":4096,\"fireworks_ai/accounts/fireworks/models/minimax-m2p1\":204800,\"fireworks_ai/accounts/fireworks/models/ministral-3-14b-instruct-2512\":256000,\"fireworks_ai/accounts/fireworks/models/ministral-3-3b-instruct-2512\":256000,\"fireworks_ai/accounts/fireworks/models/ministral-3-8b-instruct-2512\":256000,\"fireworks_ai/accounts/fireworks/models/mistral-7b\":32768,\"fireworks_ai/accounts/fireworks/models/mistral-7b-instruct-4k\":32768,\"fireworks_ai/accounts/fireworks/models/mistral-7b-instruct-v0p2\":32768,\"fireworks_ai/accounts/fireworks/models/mistral-7b-instruct-v3\":32768,\"fireworks_ai/accounts/fireworks/models/mistral-7b-v0p2\":32768,\"fireworks_ai/accounts/fireworks/models/mistral-large-3-fp8\":256000,\"fireworks_ai/accounts/fireworks/models/mistral-nemo-base-2407\":128000,\"fireworks_ai/accounts/fireworks/models/mistral-nemo-instruct-2407\":128000,\"fireworks_ai/accounts/fireworks/models/mistral-small-24b-instruct-2501\":32768,\"fireworks_ai/accounts/fireworks/models/mixtral-8x22b\":65536,\"fireworks_ai/accounts/fireworks/models/mixtral-8x22b-instruct\":65536,\"fireworks_ai/accounts/fireworks/models/mixtral-8x22b-instruct-hf\":65536,\"fireworks_ai/accounts/fireworks/models/mixtral-8x7b\":32768,\"fireworks_ai/accounts/fireworks/models/mixtral-8x7b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/mixtral-8x7b-instruct-hf\":32768,\"fireworks_ai/accounts/fireworks/models/mythomax-l2-13b\":4096,\"fireworks_ai/accounts/fireworks/models/nemotron-nano-v2-12b-vl\":4096,\"fireworks_ai/accounts/fireworks/models/nous-capybara-7b-v1p9\":32768,\"fireworks_ai/accounts/fireworks/models/nous-hermes-2-mixtral-8x7b-dpo\":32768,\"fireworks_ai/accounts/fireworks/models/nous-hermes-2-yi-34b\":4096,\"fireworks_ai/accounts/fireworks/models/nous-hermes-llama2-13b\":4096,\"fireworks_ai/accounts/fireworks/models/nous-hermes-llama2-70b\":4096,\"fireworks_ai/accounts/fireworks/models/nous-hermes-llama2-7b\":4096,\"fireworks_ai/accounts/fireworks/models/nvidia-nemotron-nano-12b-v2\":131072,\"fireworks_ai/accounts/fireworks/models/nvidia-nemotron-nano-9b-v2\":131072,\"fireworks_ai/accounts/fireworks/models/openchat-3p5-0106-7b\":8192,\"fireworks_ai/accounts/fireworks/models/openhermes-2-mistral-7b\":32768,\"fireworks_ai/accounts/fireworks/models/openhermes-2p5-mistral-7b\":32768,\"fireworks_ai/accounts/fireworks/models/openorca-7b\":32768,\"fireworks_ai/accounts/fireworks/models/phi-2-3b\":2048,\"fireworks_ai/accounts/fireworks/models/phi-3-mini-128k-instruct\":131072,\"fireworks_ai/accounts/fireworks/models/phi-3-vision-128k-instruct\":32064,\"fireworks_ai/accounts/fireworks/models/phind-code-llama-34b-python-v1\":16384,\"fireworks_ai/accounts/fireworks/models/phind-code-llama-34b-v1\":16384,\"fireworks_ai/accounts/fireworks/models/phind-code-llama-34b-v2\":16384,\"fireworks_ai/accounts/fireworks/models/pythia-12b\":2048,\"fireworks_ai/accounts/fireworks/models/qwen-qwq-32b-preview\":32768,\"fireworks_ai/accounts/fireworks/models/qwen-v2p5-14b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen-v2p5-7b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen1p5-72b-chat\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2-72b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2-7b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2-vl-2b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2-vl-72b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2-vl-7b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-0p5b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-14b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen2p5-1p5b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-32b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen2p5-32b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-72b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen2p5-72b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-7b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-0p5b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-0p5b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-14b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-14b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-1p5b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-1p5b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct-128k\":131072,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct-32k-rope\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct-64k\":65536,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-3b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-3b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-7b\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-coder-7b-instruct\":32768,\"fireworks_ai/accounts/fireworks/models/qwen2p5-math-72b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/qwen2p5-vl-32b-instruct\":128000,\"fireworks_ai/accounts/fireworks/models/qwen2p5-vl-3b-instruct\":128000,\"fireworks_ai/accounts/fireworks/models/qwen2p5-vl-72b-instruct\":128000,\"fireworks_ai/accounts/fireworks/models/qwen2p5-vl-7b-instruct\":128000,\"fireworks_ai/accounts/fireworks/models/qwen3-0p6b\":40960,\"fireworks_ai/accounts/fireworks/models/qwen3-14b\":40960,\"fireworks_ai/accounts/fireworks/models/qwen3-1p7b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen3-1p7b-fp8-draft\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-1p7b-fp8-draft-131072\":131072,\"fireworks_ai/accounts/fireworks/models/qwen3-1p7b-fp8-draft-40960\":40960,\"fireworks_ai/accounts/fireworks/models/qwen3-235b-a22b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen3-235b-a22b-instruct-2507\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-235b-a22b-thinking-2507\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-30b-a3b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen3-30b-a3b-instruct-2507\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-30b-a3b-thinking-2507\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-32b\":131072,\"fireworks_ai/accounts/fireworks/models/qwen3-4b\":40960,\"fireworks_ai/accounts/fireworks/models/qwen3-4b-instruct-2507\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-8b\":40960,\"fireworks_ai/accounts/fireworks/models/qwen3-coder-30b-a3b-instruct\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-coder-480b-a35b-instruct\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-coder-480b-instruct-bf16\":4096,\"fireworks_ai/accounts/fireworks/models/qwen3-next-80b-a3b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/qwen3-next-80b-a3b-thinking\":4096,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-235b-a22b-instruct\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-235b-a22b-thinking\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-30b-a3b-instruct\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-30b-a3b-thinking\":262144,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-32b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/qwen3-vl-8b-instruct\":4096,\"fireworks_ai/accounts/fireworks/models/qwq-32b\":131072,\"fireworks_ai/accounts/fireworks/models/rolm-ocr\":128000,\"fireworks_ai/accounts/fireworks/models/snorkel-mistral-7b-pairrm-dpo\":32768,\"fireworks_ai/accounts/fireworks/models/stablecode-3b\":4096,\"fireworks_ai/accounts/fireworks/models/starcoder-16b\":8192,\"fireworks_ai/accounts/fireworks/models/starcoder-7b\":8192,\"fireworks_ai/accounts/fireworks/models/starcoder2-15b\":16384,\"fireworks_ai/accounts/fireworks/models/starcoder2-3b\":16384,\"fireworks_ai/accounts/fireworks/models/starcoder2-7b\":16384,\"fireworks_ai/accounts/fireworks/models/toppy-m-7b\":32768,\"fireworks_ai/accounts/fireworks/models/yi-34b\":4096,\"fireworks_ai/accounts/fireworks/models/yi-34b-200k-capybara\":200000,\"fireworks_ai/accounts/fireworks/models/yi-34b-chat\":4096,\"fireworks_ai/accounts/fireworks/models/yi-6b\":4096,\"fireworks_ai/accounts/fireworks/models/yi-large\":32768,\"fireworks_ai/accounts/fireworks/models/zephyr-7b-beta\":32768,\"fireworks_ai/glm-4p7\":202800,\"fireworks_ai/kimi-k2p5\":262144,\"fireworks_ai/minimax-m2p1\":204800,\"friendliai/meta-llama-3.1-70b-instruct\":8192,\"friendliai/meta-llama-3.1-8b-instruct\":8192,\"ft:gpt-3.5-turbo\":4096,\"ft:gpt-3.5-turbo-0125\":4096,\"ft:gpt-3.5-turbo-0613\":4096,\"ft:gpt-3.5-turbo-1106\":4096,\"ft:gpt-4-0613\":4096,\"ft:gpt-4.1-2025-04-14\":32768,\"ft:gpt-4.1-mini-2025-04-14\":32768,\"ft:gpt-4.1-nano-2025-04-14\":32768,\"ft:gpt-4o-2024-08-06\":16384,\"ft:gpt-4o-2024-11-20\":16384,\"ft:gpt-4o-mini-2024-07-18\":16384,\"ft:o4-mini-2025-04-16\":100000,\"gemini-2.0-flash\":8192,\"gemini-2.0-flash-001\":8192,\"gemini-2.0-flash-lite\":8192,\"gemini-2.0-flash-lite-001\":8192,\"gemini-2.5-computer-use-preview-10-2025\":64000,\"gemini-2.5-flash\":65535,\"gemini-2.5-flash-lite\":65535,\"gemini-2.5-flash-lite-preview-06-17\":65535,\"gemini-2.5-flash-lite-preview-09-2025\":65535,\"gemini-2.5-flash-native-audio-latest\":8192,\"gemini-2.5-flash-native-audio-preview-09-2025\":8192,\"gemini-2.5-flash-native-audio-preview-12-2025\":8192,\"gemini-2.5-flash-preview-09-2025\":65535,\"gemini-2.5-pro\":65535,\"gemini-2.5-pro-preview-tts\":65535,\"gemini-3-flash-preview\":65535,\"gemini-3-pro-preview\":65535,\"gemini-3.1-flash-lite-preview\":65536,\"gemini-3.1-flash-live-preview\":65536,\"gemini-3.1-pro-preview\":65536,\"gemini-3.1-pro-preview-customtools\":65536,\"gemini-exp-1206\":65535,\"gemini-flash-latest\":65535,\"gemini-flash-lite-latest\":65535,\"gemini-pro-latest\":65535,\"gemini-robotics-er-1.5-preview\":65535,\"gemini/gemini-2.0-flash\":8192,\"gemini/gemini-2.0-flash-001\":8192,\"gemini/gemini-2.0-flash-lite\":8192,\"gemini/gemini-2.0-flash-lite-001\":8192,\"gemini/gemini-2.5-computer-use-preview-10-2025\":64000,\"gemini/gemini-2.5-flash\":65535,\"gemini/gemini-2.5-flash-lite\":65535,\"gemini/gemini-2.5-flash-lite-preview-06-17\":65535,\"gemini/gemini-2.5-flash-lite-preview-09-2025\":65535,\"gemini/gemini-2.5-flash-native-audio-latest\":8192,\"gemini/gemini-2.5-flash-native-audio-preview-09-2025\":8192,\"gemini/gemini-2.5-flash-native-audio-preview-12-2025\":8192,\"gemini/gemini-2.5-flash-preview-09-2025\":65535,\"gemini/gemini-2.5-pro\":65535,\"gemini/gemini-2.5-pro-preview-tts\":65535,\"gemini/gemini-3-flash-preview\":65535,\"gemini/gemini-3-pro-preview\":65535,\"gemini/gemini-3.1-flash-lite-preview\":65536,\"gemini/gemini-3.1-flash-live-preview\":65536,\"gemini/gemini-3.1-pro-preview\":65536,\"gemini/gemini-3.1-pro-preview-customtools\":65536,\"gemini/gemini-exp-1114\":8192,\"gemini/gemini-exp-1206\":8192,\"gemini/gemini-flash-latest\":65535,\"gemini/gemini-flash-lite-latest\":65535,\"gemini/gemini-gemma-2-27b-it\":8192,\"gemini/gemini-gemma-2-9b-it\":8192,\"gemini/gemini-pro-latest\":65535,\"gemini/gemini-robotics-er-1.5-preview\":65535,\"gemini/gemma-3-27b-it\":8192,\"gemini/learnlm-1.5-pro-experimental\":8192,\"gemini/lyria-3-clip-preview\":8192,\"gemini/lyria-3-pro-preview\":8192,\"gigachat/GigaChat-2-Lite\":8192,\"gigachat/GigaChat-2-Max\":8192,\"gigachat/GigaChat-2-Pro\":8192,\"github_copilot/claude-haiku-4.5\":16000,\"github_copilot/claude-opus-4.5\":16000,\"github_copilot/claude-opus-4.6-fast\":16000,\"github_copilot/claude-opus-41\":16000,\"github_copilot/claude-sonnet-4\":16000,\"github_copilot/claude-sonnet-4.5\":16000,\"github_copilot/gemini-2.5-pro\":64000,\"github_copilot/gemini-3-pro-preview\":64000,\"github_copilot/gpt-3.5-turbo\":4096,\"github_copilot/gpt-3.5-turbo-0613\":4096,\"github_copilot/gpt-4\":4096,\"github_copilot/gpt-4-0613\":4096,\"github_copilot/gpt-4-o-preview\":4096,\"github_copilot/gpt-4.1\":16384,\"github_copilot/gpt-4.1-2025-04-14\":16384,\"github_copilot/gpt-4o\":4096,\"github_copilot/gpt-4o-2024-05-13\":4096,\"github_copilot/gpt-4o-2024-08-06\":16384,\"github_copilot/gpt-4o-2024-11-20\":16384,\"github_copilot/gpt-4o-mini\":4096,\"github_copilot/gpt-4o-mini-2024-07-18\":4096,\"github_copilot/gpt-5\":128000,\"github_copilot/gpt-5-mini\":64000,\"github_copilot/gpt-5.1\":64000,\"github_copilot/gpt-5.2\":64000,\"glm-4-7-251222\":131072,\"global.amazon.nova-2-lite-v1:0\":64000,\"global.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"global.anthropic.claude-opus-4-5-20251101-v1:0\":64000,\"global.anthropic.claude-opus-4-6-v1\":128000,\"global.anthropic.claude-opus-4-7\":128000,\"global.anthropic.claude-sonnet-4-20250514-v1:0\":64000,\"global.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"global.anthropic.claude-sonnet-4-6\":64000,\"gmi/anthropic/claude-opus-4\":32000,\"gmi/anthropic/claude-opus-4.5\":32000,\"gmi/anthropic/claude-sonnet-4\":32000,\"gmi/anthropic/claude-sonnet-4.5\":32000,\"gmi/deepseek-ai/DeepSeek-V3-0324\":16384,\"gmi/deepseek-ai/DeepSeek-V3.2\":16384,\"gmi/google/gemini-3-flash-preview\":65536,\"gmi/google/gemini-3-pro-preview\":65536,\"gmi/MiniMaxAI/MiniMax-M2.1\":16384,\"gmi/moonshotai/Kimi-K2-Thinking\":16384,\"gmi/openai/gpt-4o\":16384,\"gmi/openai/gpt-4o-mini\":16384,\"gmi/openai/gpt-5\":32000,\"gmi/openai/gpt-5.1\":32000,\"gmi/openai/gpt-5.2\":32000,\"gmi/Qwen/Qwen3-VL-235B-A22B-Instruct-FP8\":16384,\"gmi/zai-org/GLM-4.7-FP8\":16384,\"google.gemma-3-12b-it\":8192,\"google.gemma-3-27b-it\":8192,\"google.gemma-3-4b-it\":8192,\"gpt-3.5-turbo\":4096,\"gpt-3.5-turbo-0125\":4096,\"gpt-3.5-turbo-1106\":4096,\"gpt-3.5-turbo-16k\":4096,\"gpt-4\":4096,\"gpt-4-0125-preview\":4096,\"gpt-4-0314\":4096,\"gpt-4-0613\":4096,\"gpt-4-1106-preview\":4096,\"gpt-4-turbo\":4096,\"gpt-4-turbo-2024-04-09\":4096,\"gpt-4-turbo-preview\":4096,\"gpt-4.1\":32768,\"gpt-4.1-2025-04-14\":32768,\"gpt-4.1-mini\":32768,\"gpt-4.1-mini-2025-04-14\":32768,\"gpt-4.1-nano\":32768,\"gpt-4.1-nano-2025-04-14\":32768,\"gpt-4o\":16384,\"gpt-4o-2024-05-13\":4096,\"gpt-4o-2024-08-06\":16384,\"gpt-4o-2024-11-20\":16384,\"gpt-4o-audio-preview\":16384,\"gpt-4o-audio-preview-2024-12-17\":16384,\"gpt-4o-audio-preview-2025-06-03\":16384,\"gpt-4o-mini\":16384,\"gpt-4o-mini-2024-07-18\":16384,\"gpt-4o-mini-audio-preview\":16384,\"gpt-4o-mini-audio-preview-2024-12-17\":16384,\"gpt-4o-mini-realtime-preview\":4096,\"gpt-4o-mini-realtime-preview-2024-12-17\":4096,\"gpt-4o-mini-search-preview\":16384,\"gpt-4o-mini-search-preview-2025-03-11\":16384,\"gpt-4o-realtime-preview\":4096,\"gpt-4o-realtime-preview-2024-12-17\":4096,\"gpt-4o-realtime-preview-2025-06-03\":4096,\"gpt-4o-search-preview\":16384,\"gpt-4o-search-preview-2025-03-11\":16384,\"gpt-5\":128000,\"gpt-5-2025-08-07\":128000,\"gpt-5-chat\":16384,\"gpt-5-chat-latest\":16384,\"gpt-5-mini\":128000,\"gpt-5-mini-2025-08-07\":128000,\"gpt-5-nano\":128000,\"gpt-5-nano-2025-08-07\":128000,\"gpt-5-search-api\":128000,\"gpt-5-search-api-2025-10-14\":128000,\"gpt-5.1\":128000,\"gpt-5.1-2025-11-13\":128000,\"gpt-5.1-chat-latest\":16384,\"gpt-5.2\":128000,\"gpt-5.2-2025-12-11\":128000,\"gpt-5.2-chat-latest\":16384,\"gpt-5.3-chat-latest\":16384,\"gpt-5.4\":128000,\"gpt-5.4-2026-03-05\":128000,\"gpt-5.4-mini\":128000,\"gpt-5.4-mini-2026-03-17\":128000,\"gpt-5.4-nano\":128000,\"gpt-5.4-nano-2026-03-17\":128000,\"gpt-5.5\":128000,\"gpt-5.5-2026-04-23\":128000,\"gpt-audio\":16384,\"gpt-audio-1.5\":16384,\"gpt-audio-2025-08-28\":16384,\"gpt-audio-mini\":16384,\"gpt-audio-mini-2025-10-06\":16384,\"gpt-audio-mini-2025-12-15\":16384,\"gpt-realtime\":4096,\"gpt-realtime-1.5\":4096,\"gpt-realtime-2025-08-28\":4096,\"gpt-realtime-mini\":4096,\"gpt-realtime-mini-2025-10-06\":4096,\"gpt-realtime-mini-2025-12-15\":4096,\"gradient_ai/alibaba-qwen3-32b\":40960,\"gradient_ai/anthropic-claude-3-opus\":1024,\"gradient_ai/anthropic-claude-3.5-haiku\":1024,\"gradient_ai/anthropic-claude-3.5-sonnet\":1024,\"gradient_ai/anthropic-claude-3.7-sonnet\":1024,\"gradient_ai/deepseek-r1-distill-llama-70b\":8000,\"gradient_ai/llama3-8b-instruct\":512,\"gradient_ai/llama3.3-70b-instruct\":2048,\"gradient_ai/mistral-nemo-instruct-2407\":512,\"gradient_ai/openai-gpt-4o\":16384,\"gradient_ai/openai-gpt-4o-mini\":16384,\"gradient_ai/openai-o3\":100000,\"gradient_ai/openai-o3-mini\":100000,\"groq/gemma-7b-it\":8192,\"groq/llama-3.1-8b-instant\":8192,\"groq/llama-3.3-70b-versatile\":32768,\"groq/meta-llama/llama-4-maverick-17b-128e-instruct\":8192,\"groq/meta-llama/llama-4-scout-17b-16e-instruct\":8192,\"groq/meta-llama/llama-guard-4-12b\":8192,\"groq/moonshotai/kimi-k2-instruct-0905\":16384,\"groq/openai/gpt-oss-120b\":32766,\"groq/openai/gpt-oss-20b\":32768,\"groq/openai/gpt-oss-safeguard-20b\":65536,\"groq/qwen/qwen3-32b\":131000,\"heroku/claude-3-5-haiku\":8192,\"heroku/claude-3-5-sonnet-latest\":8192,\"heroku/claude-3-7-sonnet\":8192,\"heroku/claude-4-sonnet\":8192,\"hyperbolic/deepseek-ai/DeepSeek-R1\":32768,\"hyperbolic/deepseek-ai/DeepSeek-R1-0528\":131072,\"hyperbolic/deepseek-ai/DeepSeek-V3\":32768,\"hyperbolic/deepseek-ai/DeepSeek-V3-0324\":32768,\"hyperbolic/meta-llama/Llama-3.2-3B-Instruct\":32768,\"hyperbolic/meta-llama/Llama-3.3-70B-Instruct\":131072,\"hyperbolic/meta-llama/Meta-Llama-3-70B-Instruct\":131072,\"hyperbolic/meta-llama/Meta-Llama-3.1-405B-Instruct\":32768,\"hyperbolic/meta-llama/Meta-Llama-3.1-70B-Instruct\":32768,\"hyperbolic/meta-llama/Meta-Llama-3.1-8B-Instruct\":32768,\"hyperbolic/moonshotai/Kimi-K2-Instruct\":131072,\"hyperbolic/NousResearch/Hermes-3-Llama-3.1-70B\":32768,\"hyperbolic/Qwen/Qwen2.5-72B-Instruct\":131072,\"hyperbolic/Qwen/Qwen2.5-Coder-32B-Instruct\":32768,\"hyperbolic/Qwen/Qwen3-235B-A22B\":131072,\"hyperbolic/Qwen/QwQ-32B\":131072,\"jamba-1.5\":256000,\"jamba-1.5-large\":256000,\"jamba-1.5-large@001\":256000,\"jamba-1.5-mini\":256000,\"jamba-1.5-mini@001\":256000,\"jamba-large-1.6\":256000,\"jamba-large-1.7\":256000,\"jamba-mini-1.6\":256000,\"jamba-mini-1.7\":256000,\"jp.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"jp.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"kimi-k2-thinking-251104\":32768,\"lambda_ai/deepseek-llama3.3-70b\":131072,\"lambda_ai/deepseek-r1-0528\":131072,\"lambda_ai/deepseek-r1-671b\":131072,\"lambda_ai/deepseek-v3-0324\":131072,\"lambda_ai/hermes3-405b\":131072,\"lambda_ai/hermes3-70b\":131072,\"lambda_ai/hermes3-8b\":131072,\"lambda_ai/lfm-40b\":131072,\"lambda_ai/lfm-7b\":131072,\"lambda_ai/llama-4-maverick-17b-128e-instruct-fp8\":8192,\"lambda_ai/llama-4-scout-17b-16e-instruct\":8192,\"lambda_ai/llama3.1-405b-instruct-fp8\":131072,\"lambda_ai/llama3.1-70b-instruct-fp8\":131072,\"lambda_ai/llama3.1-8b-instruct\":131072,\"lambda_ai/llama3.1-nemotron-70b-instruct-fp8\":131072,\"lambda_ai/llama3.2-11b-vision-instruct\":131072,\"lambda_ai/llama3.2-3b-instruct\":131072,\"lambda_ai/llama3.3-70b-instruct-fp8\":131072,\"lambda_ai/qwen25-coder-32b-instruct\":131072,\"lambda_ai/qwen3-32b-fp8\":131072,\"lemonade/Gemma-3-4b-it-GGUF\":8192,\"lemonade/gpt-oss-120b-mxfp-GGUF\":32768,\"lemonade/gpt-oss-20b-mxfp4-GGUF\":32768,\"lemonade/Qwen3-4B-Instruct-2507-GGUF\":32768,\"lemonade/Qwen3-Coder-30B-A3B-Instruct-GGUF\":32768,\"llamagate/codellama-7b\":4096,\"llamagate/deepseek-coder-6.7b\":4096,\"llamagate/deepseek-r1-7b-qwen\":16384,\"llamagate/deepseek-r1-8b\":16384,\"llamagate/dolphin3-8b\":8192,\"llamagate/gemma3-4b\":8192,\"llamagate/llama-3.1-8b\":8192,\"llamagate/llama-3.2-3b\":8192,\"llamagate/llava-7b\":2048,\"llamagate/mistral-7b-v0.3\":8192,\"llamagate/openthinker-7b\":8192,\"llamagate/qwen2.5-coder-7b\":8192,\"llamagate/qwen3-8b\":8192,\"llamagate/qwen3-vl-8b\":8192,\"medlm-large\":1024,\"medlm-medium\":8192,\"meta_llama/Llama-3.3-70B-Instruct\":4028,\"meta_llama/Llama-3.3-8B-Instruct\":4028,\"meta_llama/Llama-4-Maverick-17B-128E-Instruct-FP8\":4028,\"meta_llama/Llama-4-Scout-17B-16E-Instruct-FP8\":4028,\"meta.llama2-13b-chat-v1\":4096,\"meta.llama2-70b-chat-v1\":4096,\"meta.llama3-1-405b-instruct-v1:0\":4096,\"meta.llama3-1-70b-instruct-v1:0\":2048,\"meta.llama3-1-8b-instruct-v1:0\":2048,\"meta.llama3-2-11b-instruct-v1:0\":4096,\"meta.llama3-2-1b-instruct-v1:0\":4096,\"meta.llama3-2-3b-instruct-v1:0\":4096,\"meta.llama3-2-90b-instruct-v1:0\":4096,\"meta.llama3-3-70b-instruct-v1:0\":4096,\"meta.llama3-70b-instruct-v1:0\":8192,\"meta.llama3-8b-instruct-v1:0\":8192,\"meta.llama4-maverick-17b-instruct-v1:0\":4096,\"meta.llama4-scout-17b-instruct-v1:0\":4096,\"minimax.minimax-m2\":8192,\"minimax.minimax-m2.1\":8192,\"minimax.minimax-m2.5\":8192,\"minimax/MiniMax-M2\":8192,\"minimax/MiniMax-M2.1\":8192,\"minimax/MiniMax-M2.1-lightning\":8192,\"minimax/MiniMax-M2.5\":8192,\"minimax/MiniMax-M2.5-lightning\":8192,\"mistral.devstral-2-123b\":8192,\"mistral.magistral-small-2509\":8192,\"mistral.ministral-3-14b-instruct\":8192,\"mistral.ministral-3-3b-instruct\":8192,\"mistral.ministral-3-8b-instruct\":8192,\"mistral.mistral-7b-instruct-v0:2\":8191,\"mistral.mistral-large-2402-v1:0\":8191,\"mistral.mistral-large-2407-v1:0\":8191,\"mistral.mistral-large-3-675b-instruct\":8192,\"mistral.mistral-small-2402-v1:0\":8191,\"mistral.mixtral-8x7b-instruct-v0:1\":8191,\"mistral.voxtral-mini-3b-2507\":8192,\"mistral.voxtral-small-24b-2507\":8192,\"mistral/codestral-2405\":8191,\"mistral/codestral-2508\":256000,\"mistral/codestral-latest\":8191,\"mistral/codestral-mamba-latest\":256000,\"mistral/devstral-2512\":256000,\"mistral/devstral-latest\":256000,\"mistral/devstral-medium-2507\":128000,\"mistral/devstral-medium-latest\":256000,\"mistral/devstral-small-2505\":128000,\"mistral/devstral-small-2507\":128000,\"mistral/devstral-small-latest\":256000,\"mistral/labs-devstral-small-2512\":256000,\"mistral/magistral-medium-1-2-2509\":40000,\"mistral/magistral-medium-2506\":40000,\"mistral/magistral-medium-2509\":40000,\"mistral/magistral-medium-latest\":40000,\"mistral/magistral-small-1-2-2509\":40000,\"mistral/magistral-small-2506\":40000,\"mistral/magistral-small-latest\":40000,\"mistral/ministral-3-14b-2512\":262144,\"mistral/ministral-3-3b-2512\":131072,\"mistral/ministral-3-8b-2512\":262144,\"mistral/mistral-large-2402\":8191,\"mistral/mistral-large-2407\":128000,\"mistral/mistral-large-2411\":128000,\"mistral/mistral-large-2512\":262144,\"mistral/mistral-large-3\":262144,\"mistral/mistral-large-latest\":262144,\"mistral/mistral-medium\":8191,\"mistral/mistral-medium-2312\":8191,\"mistral/mistral-medium-2505\":8191,\"mistral/mistral-medium-3-1-2508\":131072,\"mistral/mistral-medium-latest\":131072,\"mistral/mistral-small\":8191,\"mistral/mistral-small-3-2-2506\":131072,\"mistral/mistral-small-latest\":131072,\"mistral/mistral-tiny\":8191,\"mistral/open-codestral-mamba\":256000,\"mistral/open-mistral-7b\":8191,\"mistral/open-mistral-nemo\":128000,\"mistral/open-mistral-nemo-2407\":128000,\"mistral/open-mixtral-8x22b\":8191,\"mistral/open-mixtral-8x7b\":8191,\"mistral/pixtral-12b-2409\":128000,\"mistral/pixtral-large-2411\":128000,\"mistral/pixtral-large-latest\":128000,\"moonshot.kimi-k2-thinking\":8192,\"moonshot/kimi-k2-0711-preview\":131072,\"moonshot/kimi-k2-0905-preview\":262144,\"moonshot/kimi-k2-thinking\":262144,\"moonshot/kimi-k2-thinking-turbo\":262144,\"moonshot/kimi-k2-turbo-preview\":262144,\"moonshot/kimi-k2.5\":262144,\"moonshot/kimi-k2.6\":262144,\"moonshot/kimi-latest\":131072,\"moonshot/kimi-latest-128k\":131072,\"moonshot/kimi-latest-32k\":32768,\"moonshot/kimi-latest-8k\":8192,\"moonshot/kimi-thinking-preview\":131072,\"moonshot/moonshot-v1-128k\":131072,\"moonshot/moonshot-v1-128k-0430\":131072,\"moonshot/moonshot-v1-128k-vision-preview\":131072,\"moonshot/moonshot-v1-32k\":32768,\"moonshot/moonshot-v1-32k-0430\":32768,\"moonshot/moonshot-v1-32k-vision-preview\":32768,\"moonshot/moonshot-v1-8k\":8192,\"moonshot/moonshot-v1-8k-0430\":8192,\"moonshot/moonshot-v1-8k-vision-preview\":8192,\"moonshot/moonshot-v1-auto\":131072,\"moonshotai.kimi-k2.5\":262144,\"morph/morph-v3-fast\":16000,\"morph/morph-v3-large\":16000,\"nebius/deepseek-ai/DeepSeek-R1\":128000,\"nebius/deepseek-ai/DeepSeek-R1-0528\":164000,\"nebius/deepseek-ai/DeepSeek-R1-Distill-Llama-70B\":128000,\"nebius/deepseek-ai/DeepSeek-V3\":128000,\"nebius/deepseek-ai/DeepSeek-V3-0324\":128000,\"nebius/google/gemma-3-27b-it\":128000,\"nebius/meta-llama/Llama-3.3-70B-Instruct\":128000,\"nebius/meta-llama/Llama-Guard-3-8B\":128000,\"nebius/meta-llama/Meta-Llama-3.1-405B-Instruct\":128000,\"nebius/meta-llama/Meta-Llama-3.1-70B-Instruct\":128000,\"nebius/meta-llama/Meta-Llama-3.1-8B-Instruct\":128000,\"nebius/mistralai/Mistral-Nemo-Instruct-2407\":128000,\"nebius/NousResearch/Hermes-3-Llama-3.1-405B\":128000,\"nebius/nvidia/Llama-3.1-Nemotron-Ultra-253B-v1\":128000,\"nebius/nvidia/Llama-3.3-Nemotron-Super-49B-v1\":131072,\"nebius/Qwen/Qwen2-VL-72B-Instruct\":131072,\"nebius/Qwen/Qwen2-VL-7B-Instruct\":131072,\"nebius/Qwen/Qwen2.5-32B-Instruct\":128000,\"nebius/Qwen/Qwen2.5-72B-Instruct\":128000,\"nebius/Qwen/Qwen2.5-Coder-7B\":32768,\"nebius/Qwen/Qwen2.5-VL-72B-Instruct\":131072,\"nebius/Qwen/Qwen3-14B\":32768,\"nebius/Qwen/Qwen3-235B-A22B\":262144,\"nebius/Qwen/Qwen3-30B-A3B\":32768,\"nebius/Qwen/Qwen3-32B\":32768,\"nebius/Qwen/Qwen3-4B\":32768,\"nebius/Qwen/QwQ-32B\":32768,\"novita/baichuan/baichuan-m2-32b\":131072,\"novita/baidu/ernie-4.5-21B-a3b\":8000,\"novita/baidu/ernie-4.5-21B-a3b-thinking\":65536,\"novita/baidu/ernie-4.5-300b-a47b-paddle\":12000,\"novita/baidu/ernie-4.5-vl-28b-a3b\":8000,\"novita/baidu/ernie-4.5-vl-28b-a3b-thinking\":65536,\"novita/baidu/ernie-4.5-vl-424b-a47b\":16000,\"novita/deepseek/deepseek-ocr\":8192,\"novita/deepseek/deepseek-prover-v2-671b\":160000,\"novita/deepseek/deepseek-r1-0528\":32768,\"novita/deepseek/deepseek-r1-0528-qwen3-8b\":32000,\"novita/deepseek/deepseek-r1-distill-llama-70b\":8192,\"novita/deepseek/deepseek-r1-distill-qwen-14b\":16384,\"novita/deepseek/deepseek-r1-distill-qwen-32b\":32000,\"novita/deepseek/deepseek-r1-turbo\":16000,\"novita/deepseek/deepseek-v3-0324\":163840,\"novita/deepseek/deepseek-v3-turbo\":16000,\"novita/deepseek/deepseek-v3.1\":32768,\"novita/deepseek/deepseek-v3.1-terminus\":32768,\"novita/deepseek/deepseek-v3.2\":65536,\"novita/deepseek/deepseek-v3.2-exp\":65536,\"novita/google/gemma-3-12b-it\":8192,\"novita/google/gemma-3-27b-it\":16384,\"novita/gryphe/mythomax-l2-13b\":3200,\"novita/kwaipilot/kat-coder-pro\":128000,\"novita/meta-llama/llama-3-70b-instruct\":8000,\"novita/meta-llama/llama-3-8b-instruct\":8192,\"novita/meta-llama/llama-3.1-8b-instruct\":16384,\"novita/meta-llama/llama-3.2-3b-instruct\":32000,\"novita/meta-llama/llama-3.3-70b-instruct\":120000,\"novita/meta-llama/llama-4-maverick-17b-128e-instruct-fp8\":8192,\"novita/meta-llama/llama-4-scout-17b-16e-instruct\":131072,\"novita/microsoft/wizardlm-2-8x22b\":8000,\"novita/minimax/minimax-m2\":131072,\"novita/minimax/minimax-m2.1\":131072,\"novita/minimaxai/minimax-m1-80k\":40000,\"novita/mistralai/mistral-nemo\":16000,\"novita/moonshotai/kimi-k2-0905\":262144,\"novita/moonshotai/kimi-k2-instruct\":131072,\"novita/moonshotai/kimi-k2-thinking\":262144,\"novita/nousresearch/hermes-2-pro-llama-3-8b\":8192,\"novita/openai/gpt-oss-120b\":32768,\"novita/openai/gpt-oss-20b\":32768,\"novita/paddlepaddle/paddleocr-vl\":16384,\"novita/qwen/qwen-2.5-72b-instruct\":8192,\"novita/qwen/qwen-mt-plus\":8192,\"novita/qwen/qwen2.5-7b-instruct\":32000,\"novita/qwen/qwen2.5-vl-72b-instruct\":32768,\"novita/qwen/qwen3-235b-a22b-fp8\":20000,\"novita/qwen/qwen3-235b-a22b-instruct-2507\":16384,\"novita/qwen/qwen3-235b-a22b-thinking-2507\":32768,\"novita/qwen/qwen3-30b-a3b-fp8\":20000,\"novita/qwen/qwen3-32b-fp8\":20000,\"novita/qwen/qwen3-4b-fp8\":20000,\"novita/qwen/qwen3-8b-fp8\":20000,\"novita/qwen/qwen3-coder-30b-a3b-instruct\":32768,\"novita/qwen/qwen3-coder-480b-a35b-instruct\":65536,\"novita/qwen/qwen3-max\":65536,\"novita/qwen/qwen3-next-80b-a3b-instruct\":32768,\"novita/qwen/qwen3-next-80b-a3b-thinking\":32768,\"novita/qwen/qwen3-omni-30b-a3b-instruct\":16384,\"novita/qwen/qwen3-omni-30b-a3b-thinking\":16384,\"novita/qwen/qwen3-vl-235b-a22b-instruct\":32768,\"novita/qwen/qwen3-vl-235b-a22b-thinking\":32768,\"novita/qwen/qwen3-vl-30b-a3b-instruct\":32768,\"novita/qwen/qwen3-vl-30b-a3b-thinking\":32768,\"novita/qwen/qwen3-vl-8b-instruct\":32768,\"novita/sao10k/l3-70b-euryale-v2.1\":8192,\"novita/sao10k/l3-8b-lunaris\":8192,\"novita/Sao10K/L3-8B-Stheno-v3.2\":32000,\"novita/sao10k/l31-70b-euryale-v2.2\":8192,\"novita/skywork/r1v4-lite\":65536,\"novita/xiaomimimo/mimo-v2-flash\":32000,\"novita/zai-org/autoglm-phone-9b-multilingual\":65536,\"novita/zai-org/glm-4.5\":98304,\"novita/zai-org/glm-4.5-air\":98304,\"novita/zai-org/glm-4.5v\":16384,\"novita/zai-org/glm-4.6\":131072,\"novita/zai-org/glm-4.6v\":32768,\"novita/zai-org/glm-4.7\":131072,\"nvidia.nemotron-nano-12b-v2\":8192,\"nvidia.nemotron-nano-3-30b\":8192,\"nvidia.nemotron-nano-9b-v2\":8192,\"nvidia.nemotron-super-3-120b\":32768,\"o1\":100000,\"o1-2024-12-17\":100000,\"o3\":100000,\"o3-2025-04-16\":100000,\"o3-mini\":100000,\"o3-mini-2025-01-31\":100000,\"o4-mini\":100000,\"o4-mini-2025-04-16\":100000,\"oci/cohere.command-a-03-2025\":4000,\"oci/cohere.command-a-reasoning-08-2025\":4000,\"oci/cohere.command-a-translate-08-2025\":4000,\"oci/cohere.command-a-vision-07-2025\":4000,\"oci/cohere.command-latest\":4000,\"oci/cohere.command-plus-latest\":4000,\"oci/cohere.command-r-08-2024\":4000,\"oci/cohere.command-r-plus-08-2024\":4000,\"oci/google.gemini-2.5-flash\":65536,\"oci/google.gemini-2.5-flash-lite\":65536,\"oci/google.gemini-2.5-pro\":65536,\"oci/meta.llama-3.1-405b-instruct\":4000,\"oci/meta.llama-3.1-70b-instruct\":4000,\"oci/meta.llama-3.2-11b-vision-instruct\":4000,\"oci/meta.llama-3.2-90b-vision-instruct\":4000,\"oci/meta.llama-3.3-70b-instruct\":4000,\"oci/meta.llama-3.3-70b-instruct-fp8-dynamic\":4000,\"oci/meta.llama-4-maverick-17b-128e-instruct-fp8\":4000,\"oci/meta.llama-4-scout-17b-16e-instruct\":4000,\"oci/xai.grok-3\":131072,\"oci/xai.grok-3-fast\":131072,\"oci/xai.grok-3-mini\":131072,\"oci/xai.grok-3-mini-fast\":131072,\"oci/xai.grok-4\":128000,\"oci/xai.grok-4-fast\":131072,\"oci/xai.grok-4.1-fast\":131072,\"oci/xai.grok-4.20\":131072,\"oci/xai.grok-4.20-multi-agent\":131072,\"oci/xai.grok-code-fast-1\":131072,\"ollama/codegeex4\":8192,\"ollama/deepseek-coder-v2-instruct\":8192,\"ollama/deepseek-coder-v2-lite-instruct\":8192,\"ollama/deepseek-v3.1:671b-cloud\":163840,\"ollama/gpt-oss:120b-cloud\":131072,\"ollama/gpt-oss:20b-cloud\":131072,\"ollama/internlm2_5-20b-chat\":8192,\"ollama/llama2\":4096,\"ollama/llama2:13b\":4096,\"ollama/llama2:70b\":4096,\"ollama/llama2:7b\":4096,\"ollama/llama3\":8192,\"ollama/llama3:70b\":8192,\"ollama/llama3:8b\":8192,\"ollama/llama3.1\":8192,\"ollama/mistral-7B-Instruct-v0.1\":8192,\"ollama/mistral-7B-Instruct-v0.2\":32768,\"ollama/mistral-large-instruct-2407\":8192,\"ollama/mixtral-8x22B-Instruct-v0.1\":65536,\"ollama/mixtral-8x7B-Instruct-v0.1\":32768,\"ollama/qwen3-coder:480b-cloud\":262144,\"openai.gpt-oss-120b-1:0\":128000,\"openai.gpt-oss-20b-1:0\":128000,\"openai.gpt-oss-safeguard-120b\":8192,\"openai.gpt-oss-safeguard-20b\":8192,\"openrouter/anthropic/claude-3-haiku\":4096,\"openrouter/anthropic/claude-3.5-sonnet\":8192,\"openrouter/anthropic/claude-3.7-sonnet\":128000,\"openrouter/anthropic/claude-haiku-4.5\":200000,\"openrouter/anthropic/claude-opus-4\":32000,\"openrouter/anthropic/claude-opus-4.1\":32000,\"openrouter/anthropic/claude-opus-4.5\":32000,\"openrouter/anthropic/claude-opus-4.6\":128000,\"openrouter/anthropic/claude-opus-4.7\":128000,\"openrouter/anthropic/claude-sonnet-4\":64000,\"openrouter/anthropic/claude-sonnet-4.5\":1000000,\"openrouter/anthropic/claude-sonnet-4.6\":128000,\"openrouter/bytedance/ui-tars-1.5-7b\":2048,\"openrouter/deepseek/deepseek-chat\":8192,\"openrouter/deepseek/deepseek-chat-v3-0324\":8192,\"openrouter/deepseek/deepseek-chat-v3.1\":163840,\"openrouter/deepseek/deepseek-r1\":8192,\"openrouter/deepseek/deepseek-r1-0528\":8192,\"openrouter/deepseek/deepseek-v3.2\":163840,\"openrouter/deepseek/deepseek-v3.2-exp\":163840,\"openrouter/google/gemini-2.0-flash-001\":8192,\"openrouter/google/gemini-2.5-flash\":8192,\"openrouter/google/gemini-2.5-pro\":8192,\"openrouter/google/gemini-3-flash-preview\":65535,\"openrouter/google/gemini-3-pro-preview\":65535,\"openrouter/google/gemini-3.1-flash-lite-preview\":65536,\"openrouter/google/gemini-3.1-pro-preview\":65536,\"openrouter/gryphe/mythomax-l2-13b\":8192,\"openrouter/mancer/weaver\":2000,\"openrouter/meta-llama/llama-3-70b-instruct\":8000,\"openrouter/minimax/minimax-m2\":204800,\"openrouter/minimax/minimax-m2.1\":64000,\"openrouter/minimax/minimax-m2.5\":65536,\"openrouter/mistralai/devstral-2512\":65536,\"openrouter/mistralai/ministral-14b-2512\":262144,\"openrouter/mistralai/ministral-3b-2512\":131072,\"openrouter/mistralai/ministral-8b-2512\":262144,\"openrouter/mistralai/mistral-7b-instruct\":8191,\"openrouter/mistralai/mistral-large\":8191,\"openrouter/mistralai/mistral-large-2512\":262144,\"openrouter/mistralai/mistral-small-3.1-24b-instruct\":131072,\"openrouter/mistralai/mistral-small-3.2-24b-instruct\":128000,\"openrouter/mistralai/mixtral-8x22b-instruct\":65536,\"openrouter/moonshotai/kimi-k2.5\":262144,\"openrouter/openai/gpt-3.5-turbo\":4096,\"openrouter/openai/gpt-3.5-turbo-16k\":4096,\"openrouter/openai/gpt-4\":4096,\"openrouter/openai/gpt-4.1\":32768,\"openrouter/openai/gpt-4.1-mini\":32768,\"openrouter/openai/gpt-4.1-nano\":32768,\"openrouter/openai/gpt-4o\":4096,\"openrouter/openai/gpt-4o-2024-05-13\":4096,\"openrouter/openai/gpt-5\":128000,\"openrouter/openai/gpt-5-chat\":16384,\"openrouter/openai/gpt-5-codex\":128000,\"openrouter/openai/gpt-5-mini\":128000,\"openrouter/openai/gpt-5-nano\":128000,\"openrouter/openai/gpt-5.1-codex-max\":128000,\"openrouter/openai/gpt-5.2\":128000,\"openrouter/openai/gpt-5.2-chat\":16384,\"openrouter/openai/gpt-5.2-codex\":128000,\"openrouter/openai/gpt-5.2-pro\":128000,\"openrouter/openai/gpt-oss-120b\":32768,\"openrouter/openai/gpt-oss-20b\":32768,\"openrouter/openai/o1\":100000,\"openrouter/openai/o3-mini\":65536,\"openrouter/openai/o3-mini-high\":65536,\"openrouter/openrouter/auto\":2000000,\"openrouter/openrouter/bodybuilder\":128000,\"openrouter/openrouter/free\":200000,\"openrouter/qwen/qwen-2.5-coder-32b-instruct\":33792,\"openrouter/qwen/qwen-vl-plus\":2048,\"openrouter/qwen/qwen3-235b-a22b-2507\":262144,\"openrouter/qwen/qwen3-235b-a22b-thinking-2507\":262144,\"openrouter/qwen/qwen3-coder\":262100,\"openrouter/qwen/qwen3-coder-plus\":65536,\"openrouter/qwen/qwen3.5-122b-a10b\":65536,\"openrouter/qwen/qwen3.5-27b\":65536,\"openrouter/qwen/qwen3.5-35b-a3b\":65536,\"openrouter/qwen/qwen3.5-397b-a17b\":65536,\"openrouter/qwen/qwen3.5-flash-02-23\":65536,\"openrouter/qwen/qwen3.5-plus-02-15\":65536,\"openrouter/switchpoint/router\":131072,\"openrouter/undi95/remm-slerp-l2-13b\":4096,\"openrouter/x-ai/grok-4\":256000,\"openrouter/xiaomi/mimo-v2-flash\":16384,\"openrouter/z-ai/glm-4.6\":131000,\"openrouter/z-ai/glm-4.6:exacto\":131000,\"openrouter/z-ai/glm-4.7\":64000,\"openrouter/z-ai/glm-4.7-flash\":32000,\"openrouter/z-ai/glm-5\":128000,\"ovhcloud/DeepSeek-R1-Distill-Llama-70B\":131000,\"ovhcloud/gpt-oss-120b\":131000,\"ovhcloud/gpt-oss-20b\":131000,\"ovhcloud/Llama-3.1-8B-Instruct\":131000,\"ovhcloud/llava-v1.6-mistral-7b-hf\":32000,\"ovhcloud/mamba-codestral-7B-v0.1\":256000,\"ovhcloud/Meta-Llama-3_1-70B-Instruct\":131000,\"ovhcloud/Meta-Llama-3_3-70B-Instruct\":131000,\"ovhcloud/Mistral-7B-Instruct-v0.3\":127000,\"ovhcloud/Mistral-Nemo-Instruct-2407\":118000,\"ovhcloud/Mistral-Small-3.2-24B-Instruct-2506\":128000,\"ovhcloud/Mixtral-8x7B-Instruct-v0.1\":32000,\"ovhcloud/Qwen2.5-Coder-32B-Instruct\":32000,\"ovhcloud/Qwen2.5-VL-72B-Instruct\":32000,\"ovhcloud/Qwen3-32B\":32000,\"palm/chat-bison\":4096,\"palm/chat-bison-001\":4096,\"perplexity/codellama-34b-instruct\":16384,\"perplexity/codellama-70b-instruct\":16384,\"perplexity/llama-2-70b-chat\":4096,\"perplexity/llama-3.1-70b-instruct\":131072,\"perplexity/llama-3.1-8b-instruct\":131072,\"perplexity/mistral-7b-instruct\":4096,\"perplexity/mixtral-8x7b-instruct\":4096,\"perplexity/pplx-70b-chat\":4096,\"perplexity/pplx-70b-online\":4096,\"perplexity/pplx-7b-chat\":8192,\"perplexity/pplx-7b-online\":4096,\"perplexity/sonar\":128000,\"perplexity/sonar-deep-research\":128000,\"perplexity/sonar-medium-chat\":16384,\"perplexity/sonar-medium-online\":12000,\"perplexity/sonar-pro\":8000,\"perplexity/sonar-reasoning\":128000,\"perplexity/sonar-reasoning-pro\":128000,\"perplexity/sonar-small-chat\":16384,\"perplexity/sonar-small-online\":12000,\"publicai/aisingapore/Gemma-SEA-LION-v4-27B-IT\":4096,\"publicai/aisingapore/Qwen-SEA-LION-v4-32B-IT\":4096,\"publicai/allenai/Olmo-3-32B-Think\":4096,\"publicai/allenai/Olmo-3-7B-Instruct\":4096,\"publicai/allenai/Olmo-3-7B-Think\":4096,\"publicai/BSC-LT/ALIA-40b-instruct_Q8_0\":4096,\"publicai/BSC-LT/salamandra-7b-instruct-tools-16k\":4096,\"publicai/swiss-ai/apertus-70b-instruct\":4096,\"publicai/swiss-ai/apertus-8b-instruct\":4096,\"qwen.qwen3-235b-a22b-2507-v1:0\":131072,\"qwen.qwen3-32b-v1:0\":16384,\"qwen.qwen3-coder-30b-a3b-v1:0\":131072,\"qwen.qwen3-coder-480b-a35b-v1:0\":65536,\"qwen.qwen3-coder-next\":8192,\"qwen.qwen3-next-80b-a3b\":8192,\"qwen.qwen3-vl-235b-a22b\":8192,\"replicate/deepseek-ai/deepseek-r1\":8192,\"replicate/deepseek-ai/deepseek-v3\":8192,\"replicate/deepseek-ai/deepseek-v3.1\":163840,\"replicate/meta/llama-2-13b\":4096,\"replicate/meta/llama-2-13b-chat\":4096,\"replicate/meta/llama-2-70b\":4096,\"replicate/meta/llama-2-70b-chat\":4096,\"replicate/meta/llama-2-7b\":4096,\"replicate/meta/llama-2-7b-chat\":4096,\"replicate/meta/llama-3-70b\":8192,\"replicate/meta/llama-3-70b-instruct\":8192,\"replicate/meta/llama-3-8b\":8086,\"replicate/meta/llama-3-8b-instruct\":8086,\"replicate/mistralai/mistral-7b-instruct-v0.2\":4096,\"replicate/mistralai/mistral-7b-v0.1\":4096,\"replicate/mistralai/mixtral-8x7b-instruct-v0.1\":4096,\"sagemaker/meta-textgeneration-llama-2-13b-f\":4096,\"sagemaker/meta-textgeneration-llama-2-70b-b-f\":4096,\"sagemaker/meta-textgeneration-llama-2-7b-f\":4096,\"sambanova/DeepSeek-R1\":32768,\"sambanova/DeepSeek-R1-Distill-Llama-70B\":131072,\"sambanova/DeepSeek-V3-0324\":32768,\"sambanova/DeepSeek-V3.1\":32768,\"sambanova/gpt-oss-120b\":131072,\"sambanova/Llama-4-Maverick-17B-128E-Instruct\":131072,\"sambanova/Llama-4-Scout-17B-16E-Instruct\":8192,\"sambanova/Meta-Llama-3.1-405B-Instruct\":16384,\"sambanova/Meta-Llama-3.1-8B-Instruct\":16384,\"sambanova/Meta-Llama-3.2-1B-Instruct\":16384,\"sambanova/Meta-Llama-3.2-3B-Instruct\":4096,\"sambanova/Meta-Llama-3.3-70B-Instruct\":131072,\"sambanova/Meta-Llama-Guard-3-8B\":16384,\"sambanova/Qwen2-Audio-7B-Instruct\":4096,\"sambanova/Qwen3-32B\":8192,\"sambanova/QwQ-32B\":16384,\"sarvam/sarvam-m\":32000,\"snowflake/claude-3-5-sonnet\":8192,\"snowflake/deepseek-r1\":8192,\"snowflake/gemma-7b\":8192,\"snowflake/jamba-1.5-large\":8192,\"snowflake/jamba-1.5-mini\":8192,\"snowflake/jamba-instruct\":8192,\"snowflake/llama2-70b-chat\":8192,\"snowflake/llama3-70b\":8192,\"snowflake/llama3-8b\":8192,\"snowflake/llama3.1-405b\":8192,\"snowflake/llama3.1-70b\":8192,\"snowflake/llama3.1-8b\":8192,\"snowflake/llama3.2-1b\":8192,\"snowflake/llama3.2-3b\":8192,\"snowflake/llama3.3-70b\":8192,\"snowflake/mistral-7b\":8192,\"snowflake/mistral-large\":8192,\"snowflake/mistral-large2\":8192,\"snowflake/mixtral-8x7b\":8192,\"snowflake/reka-core\":8192,\"snowflake/reka-flash\":8192,\"snowflake/snowflake-arctic\":8192,\"snowflake/snowflake-llama-3.1-405b\":8192,\"snowflake/snowflake-llama-3.3-70b\":8192,\"together_ai/deepseek-ai/DeepSeek-R1\":20480,\"together_ai/deepseek-ai/DeepSeek-V3\":8192,\"together_ai/deepseek-ai/DeepSeek-V3.1\":16384,\"together_ai/moonshotai/Kimi-K2.5\":256000,\"together_ai/openai/gpt-oss-120b\":131072,\"together_ai/zai-org/GLM-4.6\":200000,\"together_ai/zai-org/GLM-4.7\":200000,\"together-ai-8.1b-21b\":1000,\"us-gov.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"us.amazon.nova-2-lite-v1:0\":64000,\"us.amazon.nova-2-pro-preview-20251202-v1:0\":64000,\"us.amazon.nova-lite-v1:0\":10000,\"us.amazon.nova-micro-v1:0\":10000,\"us.amazon.nova-premier-v1:0\":10000,\"us.amazon.nova-pro-v1:0\":10000,\"us.anthropic.claude-3-5-haiku-20241022-v1:0\":8192,\"us.anthropic.claude-3-5-sonnet-20240620-v1:0\":4096,\"us.anthropic.claude-3-5-sonnet-20241022-v2:0\":8192,\"us.anthropic.claude-3-7-sonnet-20250219-v1:0\":8192,\"us.anthropic.claude-3-haiku-20240307-v1:0\":4096,\"us.anthropic.claude-3-opus-20240229-v1:0\":4096,\"us.anthropic.claude-3-sonnet-20240229-v1:0\":4096,\"us.anthropic.claude-haiku-4-5-20251001-v1:0\":64000,\"us.anthropic.claude-opus-4-1-20250805-v1:0\":32000,\"us.anthropic.claude-opus-4-20250514-v1:0\":32000,\"us.anthropic.claude-opus-4-5-20251101-v1:0\":64000,\"us.anthropic.claude-opus-4-6-v1\":128000,\"us.anthropic.claude-opus-4-7\":128000,\"us.anthropic.claude-sonnet-4-20250514-v1:0\":64000,\"us.anthropic.claude-sonnet-4-5-20250929-v1:0\":64000,\"us.anthropic.claude-sonnet-4-6\":64000,\"us.deepseek.r1-v1:0\":4096,\"us.deepseek.v3.2\":163840,\"us.meta.llama3-1-405b-instruct-v1:0\":4096,\"us.meta.llama3-1-70b-instruct-v1:0\":2048,\"us.meta.llama3-1-8b-instruct-v1:0\":2048,\"us.meta.llama3-2-11b-instruct-v1:0\":4096,\"us.meta.llama3-2-1b-instruct-v1:0\":4096,\"us.meta.llama3-2-3b-instruct-v1:0\":4096,\"us.meta.llama3-2-90b-instruct-v1:0\":4096,\"us.meta.llama3-3-70b-instruct-v1:0\":4096,\"us.meta.llama4-maverick-17b-instruct-v1:0\":4096,\"us.meta.llama4-scout-17b-instruct-v1:0\":4096,\"us.mistral.pixtral-large-2502-v1:0\":4096,\"us.writer.palmyra-x4-v1:0\":8192,\"us.writer.palmyra-x5-v1:0\":8192,\"v0/v0-1.0-md\":128000,\"v0/v0-1.5-lg\":512000,\"v0/v0-1.5-md\":128000,\"vercel_ai_gateway/alibaba/qwen-3-14b\":16384,\"vercel_ai_gateway/alibaba/qwen-3-235b\":16384,\"vercel_ai_gateway/alibaba/qwen-3-30b\":16384,\"vercel_ai_gateway/alibaba/qwen-3-32b\":16384,\"vercel_ai_gateway/alibaba/qwen3-coder\":66536,\"vercel_ai_gateway/amazon/nova-lite\":8192,\"vercel_ai_gateway/amazon/nova-micro\":8192,\"vercel_ai_gateway/amazon/nova-pro\":8192,\"vercel_ai_gateway/anthropic/claude-3-5-sonnet\":8192,\"vercel_ai_gateway/anthropic/claude-3-5-sonnet-20241022\":8192,\"vercel_ai_gateway/anthropic/claude-3-7-sonnet\":64000,\"vercel_ai_gateway/anthropic/claude-3-haiku\":4096,\"vercel_ai_gateway/anthropic/claude-3-opus\":4096,\"vercel_ai_gateway/anthropic/claude-3.5-haiku\":8192,\"vercel_ai_gateway/anthropic/claude-3.5-sonnet\":8192,\"vercel_ai_gateway/anthropic/claude-3.7-sonnet\":64000,\"vercel_ai_gateway/anthropic/claude-4-opus\":32000,\"vercel_ai_gateway/anthropic/claude-4-sonnet\":64000,\"vercel_ai_gateway/anthropic/claude-haiku-4.5\":64000,\"vercel_ai_gateway/anthropic/claude-opus-4\":32000,\"vercel_ai_gateway/anthropic/claude-opus-4.1\":32000,\"vercel_ai_gateway/anthropic/claude-opus-4.5\":64000,\"vercel_ai_gateway/anthropic/claude-opus-4.6\":64000,\"vercel_ai_gateway/anthropic/claude-sonnet-4\":64000,\"vercel_ai_gateway/anthropic/claude-sonnet-4.5\":64000,\"vercel_ai_gateway/cohere/command-a\":8000,\"vercel_ai_gateway/cohere/command-r\":4096,\"vercel_ai_gateway/cohere/command-r-plus\":4096,\"vercel_ai_gateway/deepseek/deepseek-r1\":8192,\"vercel_ai_gateway/deepseek/deepseek-r1-distill-llama-70b\":131072,\"vercel_ai_gateway/deepseek/deepseek-v3\":8192,\"vercel_ai_gateway/google/gemini-2.0-flash\":8192,\"vercel_ai_gateway/google/gemini-2.0-flash-lite\":8192,\"vercel_ai_gateway/google/gemini-2.5-flash\":65536,\"vercel_ai_gateway/google/gemini-2.5-pro\":65536,\"vercel_ai_gateway/google/gemma-2-9b\":8192,\"vercel_ai_gateway/inception/mercury-coder-small\":16384,\"vercel_ai_gateway/meta/llama-3-70b\":8192,\"vercel_ai_gateway/meta/llama-3-8b\":8192,\"vercel_ai_gateway/meta/llama-3.1-70b\":8192,\"vercel_ai_gateway/meta/llama-3.1-8b\":131072,\"vercel_ai_gateway/meta/llama-3.2-11b\":8192,\"vercel_ai_gateway/meta/llama-3.2-1b\":8192,\"vercel_ai_gateway/meta/llama-3.2-3b\":8192,\"vercel_ai_gateway/meta/llama-3.2-90b\":8192,\"vercel_ai_gateway/meta/llama-3.3-70b\":8192,\"vercel_ai_gateway/meta/llama-4-maverick\":8192,\"vercel_ai_gateway/meta/llama-4-scout\":8192,\"vercel_ai_gateway/mistral/codestral\":4000,\"vercel_ai_gateway/mistral/devstral-small\":128000,\"vercel_ai_gateway/mistral/magistral-medium\":64000,\"vercel_ai_gateway/mistral/magistral-small\":64000,\"vercel_ai_gateway/mistral/ministral-3b\":4000,\"vercel_ai_gateway/mistral/ministral-8b\":4000,\"vercel_ai_gateway/mistral/mistral-large\":4000,\"vercel_ai_gateway/mistral/mistral-saba-24b\":32768,\"vercel_ai_gateway/mistral/mistral-small\":4000,\"vercel_ai_gateway/mistral/mixtral-8x22b-instruct\":2048,\"vercel_ai_gateway/mistral/pixtral-12b\":4000,\"vercel_ai_gateway/mistral/pixtral-large\":4000,\"vercel_ai_gateway/moonshotai/kimi-k2\":16384,\"vercel_ai_gateway/morph/morph-v3-fast\":16384,\"vercel_ai_gateway/morph/morph-v3-large\":16384,\"vercel_ai_gateway/openai/gpt-3.5-turbo\":4096,\"vercel_ai_gateway/openai/gpt-3.5-turbo-instruct\":4096,\"vercel_ai_gateway/openai/gpt-4-turbo\":4096,\"vercel_ai_gateway/openai/gpt-4.1\":32768,\"vercel_ai_gateway/openai/gpt-4.1-mini\":32768,\"vercel_ai_gateway/openai/gpt-4.1-nano\":32768,\"vercel_ai_gateway/openai/gpt-4o\":16384,\"vercel_ai_gateway/openai/gpt-4o-mini\":16384,\"vercel_ai_gateway/openai/o1\":100000,\"vercel_ai_gateway/openai/o3\":100000,\"vercel_ai_gateway/openai/o3-mini\":100000,\"vercel_ai_gateway/openai/o4-mini\":100000,\"vercel_ai_gateway/perplexity/sonar\":8000,\"vercel_ai_gateway/perplexity/sonar-pro\":8000,\"vercel_ai_gateway/perplexity/sonar-reasoning\":8000,\"vercel_ai_gateway/perplexity/sonar-reasoning-pro\":8000,\"vercel_ai_gateway/vercel/v0-1.0-md\":32000,\"vercel_ai_gateway/vercel/v0-1.5-md\":32768,\"vercel_ai_gateway/xai/grok-2\":4000,\"vercel_ai_gateway/xai/grok-2-vision\":32768,\"vercel_ai_gateway/xai/grok-3\":131072,\"vercel_ai_gateway/xai/grok-3-fast\":131072,\"vercel_ai_gateway/xai/grok-3-mini\":131072,\"vercel_ai_gateway/xai/grok-3-mini-fast\":131072,\"vercel_ai_gateway/xai/grok-4\":256000,\"vercel_ai_gateway/zai/glm-4.5\":131072,\"vercel_ai_gateway/zai/glm-4.5-air\":96000,\"vercel_ai_gateway/zai/glm-4.6\":200000,\"vertex_ai/claude-3-5-haiku\":8192,\"vertex_ai/claude-3-5-haiku@20241022\":8192,\"vertex_ai/claude-3-5-sonnet\":8192,\"vertex_ai/claude-3-5-sonnet@20240620\":8192,\"vertex_ai/claude-3-7-sonnet@20250219\":8192,\"vertex_ai/claude-3-haiku\":4096,\"vertex_ai/claude-3-haiku@20240307\":4096,\"vertex_ai/claude-3-opus\":4096,\"vertex_ai/claude-3-opus@20240229\":4096,\"vertex_ai/claude-3-sonnet\":4096,\"vertex_ai/claude-3-sonnet@20240229\":4096,\"vertex_ai/claude-haiku-4-5\":8192,\"vertex_ai/claude-haiku-4-5@20251001\":8192,\"vertex_ai/claude-opus-4\":32000,\"vertex_ai/claude-opus-4-1\":32000,\"vertex_ai/claude-opus-4-1@20250805\":32000,\"vertex_ai/claude-opus-4-5\":64000,\"vertex_ai/claude-opus-4-5@20251101\":64000,\"vertex_ai/claude-opus-4-6\":128000,\"vertex_ai/claude-opus-4-6@default\":128000,\"vertex_ai/claude-opus-4-7\":128000,\"vertex_ai/claude-opus-4-7@default\":128000,\"vertex_ai/claude-opus-4@20250514\":32000,\"vertex_ai/claude-sonnet-4\":64000,\"vertex_ai/claude-sonnet-4-5\":64000,\"vertex_ai/claude-sonnet-4-5@20250929\":64000,\"vertex_ai/claude-sonnet-4-6\":64000,\"vertex_ai/claude-sonnet-4-6@default\":64000,\"vertex_ai/claude-sonnet-4@20250514\":64000,\"vertex_ai/codestral-2\":128000,\"vertex_ai/codestral-2@001\":128000,\"vertex_ai/codestral-2501\":128000,\"vertex_ai/codestral@2405\":128000,\"vertex_ai/codestral@latest\":128000,\"vertex_ai/deepseek-ai/deepseek-r1-0528-maas\":8192,\"vertex_ai/deepseek-ai/deepseek-v3.1-maas\":32768,\"vertex_ai/deepseek-ai/deepseek-v3.2-maas\":32768,\"vertex_ai/gemini-3-flash-preview\":65535,\"vertex_ai/gemini-3-pro-preview\":65535,\"vertex_ai/gemini-3.1-flash-lite-preview\":65536,\"vertex_ai/gemini-3.1-pro-preview\":65536,\"vertex_ai/gemini-3.1-pro-preview-customtools\":65536,\"vertex_ai/jamba-1.5\":256000,\"vertex_ai/jamba-1.5-large\":256000,\"vertex_ai/jamba-1.5-large@001\":256000,\"vertex_ai/jamba-1.5-mini\":256000,\"vertex_ai/jamba-1.5-mini@001\":256000,\"vertex_ai/meta/llama-3.1-405b-instruct-maas\":2048,\"vertex_ai/meta/llama-3.1-70b-instruct-maas\":2048,\"vertex_ai/meta/llama-3.1-8b-instruct-maas\":2048,\"vertex_ai/meta/llama-3.2-90b-vision-instruct-maas\":2048,\"vertex_ai/meta/llama-4-maverick-17b-128e-instruct-maas\":1000000,\"vertex_ai/meta/llama-4-maverick-17b-16e-instruct-maas\":1000000,\"vertex_ai/meta/llama-4-scout-17b-128e-instruct-maas\":10000000,\"vertex_ai/meta/llama-4-scout-17b-16e-instruct-maas\":10000000,\"vertex_ai/meta/llama3-405b-instruct-maas\":32000,\"vertex_ai/meta/llama3-70b-instruct-maas\":32000,\"vertex_ai/meta/llama3-8b-instruct-maas\":32000,\"vertex_ai/minimaxai/minimax-m2-maas\":196608,\"vertex_ai/mistral-large-2411\":8191,\"vertex_ai/mistral-large@2407\":8191,\"vertex_ai/mistral-large@2411-001\":8191,\"vertex_ai/mistral-large@latest\":8191,\"vertex_ai/mistral-medium-3\":8191,\"vertex_ai/mistral-medium-3@001\":8191,\"vertex_ai/mistral-nemo@2407\":128000,\"vertex_ai/mistral-nemo@latest\":128000,\"vertex_ai/mistral-small-2503\":128000,\"vertex_ai/mistral-small-2503@001\":8191,\"vertex_ai/mistralai/codestral-2\":128000,\"vertex_ai/mistralai/codestral-2@001\":128000,\"vertex_ai/mistralai/mistral-medium-3\":8191,\"vertex_ai/mistralai/mistral-medium-3@001\":8191,\"vertex_ai/moonshotai/kimi-k2-thinking-maas\":256000,\"vertex_ai/openai/gpt-oss-120b-maas\":32768,\"vertex_ai/openai/gpt-oss-20b-maas\":32768,\"vertex_ai/qwen/qwen3-235b-a22b-instruct-2507-maas\":16384,\"vertex_ai/qwen/qwen3-coder-480b-a35b-instruct-maas\":32768,\"vertex_ai/qwen/qwen3-next-80b-a3b-instruct-maas\":262144,\"vertex_ai/qwen/qwen3-next-80b-a3b-thinking-maas\":262144,\"vertex_ai/zai-org/glm-4.7-maas\":128000,\"vertex_ai/zai-org/glm-5-maas\":128000,\"volcengine/doubao-seed-2-0-code-preview-260215\":128000,\"volcengine/doubao-seed-2-0-lite-260215\":128000,\"volcengine/doubao-seed-2-0-mini-260215\":128000,\"volcengine/doubao-seed-2-0-pro-260215\":128000,\"wandb/deepseek-ai/DeepSeek-R1-0528\":161000,\"wandb/deepseek-ai/DeepSeek-V3-0324\":161000,\"wandb/deepseek-ai/DeepSeek-V3.1\":128000,\"wandb/meta-llama/Llama-3.1-8B-Instruct\":128000,\"wandb/meta-llama/Llama-3.3-70B-Instruct\":128000,\"wandb/meta-llama/Llama-4-Scout-17B-16E-Instruct\":64000,\"wandb/microsoft/Phi-4-mini-instruct\":128000,\"wandb/MiniMaxAI/MiniMax-M2.5\":197000,\"wandb/moonshotai/Kimi-K2-Instruct\":128000,\"wandb/moonshotai/Kimi-K2.5\":262144,\"wandb/openai/gpt-oss-120b\":131072,\"wandb/openai/gpt-oss-20b\":131072,\"wandb/Qwen/Qwen3-235B-A22B-Instruct-2507\":262144,\"wandb/Qwen/Qwen3-235B-A22B-Thinking-2507\":262144,\"wandb/Qwen/Qwen3-Coder-480B-A35B-Instruct\":262144,\"wandb/zai-org/GLM-4.5\":131072,\"watsonx/bigscience/mt0-xxl-13b\":8192,\"watsonx/core42/jais-13b-chat\":8192,\"watsonx/google/flan-t5-xl-3b\":8192,\"watsonx/ibm/granite-13b-chat-v2\":8192,\"watsonx/ibm/granite-13b-instruct-v2\":8192,\"watsonx/ibm/granite-3-3-8b-instruct\":8192,\"watsonx/ibm/granite-3-8b-instruct\":1024,\"watsonx/ibm/granite-4-h-small\":20480,\"watsonx/ibm/granite-guardian-3-2-2b\":8192,\"watsonx/ibm/granite-guardian-3-3-8b\":8192,\"watsonx/ibm/granite-ttm-1024-96-r2\":512,\"watsonx/ibm/granite-ttm-1536-96-r2\":512,\"watsonx/ibm/granite-ttm-512-96-r2\":512,\"watsonx/ibm/granite-vision-3-2-2b\":8192,\"watsonx/meta-llama/llama-3-2-11b-vision-instruct\":128000,\"watsonx/meta-llama/llama-3-2-1b-instruct\":128000,\"watsonx/meta-llama/llama-3-2-3b-instruct\":128000,\"watsonx/meta-llama/llama-3-2-90b-vision-instruct\":128000,\"watsonx/meta-llama/llama-3-3-70b-instruct\":128000,\"watsonx/meta-llama/llama-4-maverick-17b\":128000,\"watsonx/meta-llama/llama-guard-3-11b-vision\":128000,\"watsonx/mistralai/mistral-large\":16384,\"watsonx/mistralai/mistral-medium-2505\":128000,\"watsonx/mistralai/mistral-small-2503\":32000,\"watsonx/mistralai/mistral-small-3-1-24b-instruct-2503\":32000,\"watsonx/mistralai/pixtral-12b-2409\":128000,\"watsonx/openai/gpt-oss-120b\":8192,\"watsonx/sdaia/allam-1-13b-instruct\":8192,\"writer.palmyra-x4-v1:0\":8192,\"writer.palmyra-x5-v1:0\":8192,\"xai/grok-2\":131072,\"xai/grok-2-1212\":131072,\"xai/grok-2-latest\":131072,\"xai/grok-2-vision\":32768,\"xai/grok-2-vision-1212\":32768,\"xai/grok-2-vision-latest\":32768,\"xai/grok-3\":131072,\"xai/grok-3-beta\":131072,\"xai/grok-3-fast-beta\":131072,\"xai/grok-3-fast-latest\":131072,\"xai/grok-3-latest\":131072,\"xai/grok-3-mini\":131072,\"xai/grok-3-mini-beta\":131072,\"xai/grok-3-mini-fast\":131072,\"xai/grok-3-mini-fast-beta\":131072,\"xai/grok-3-mini-fast-latest\":131072,\"xai/grok-3-mini-latest\":131072,\"xai/grok-4\":256000,\"xai/grok-4-0709\":256000,\"xai/grok-4-1-fast\":2000000,\"xai/grok-4-1-fast-non-reasoning\":2000000,\"xai/grok-4-1-fast-non-reasoning-latest\":2000000,\"xai/grok-4-1-fast-reasoning\":2000000,\"xai/grok-4-1-fast-reasoning-latest\":2000000,\"xai/grok-4-fast-non-reasoning\":2000000,\"xai/grok-4-fast-reasoning\":2000000,\"xai/grok-4-latest\":256000,\"xai/grok-4.20-0309-reasoning\":2000000,\"xai/grok-4.20-beta-0309-non-reasoning\":2000000,\"xai/grok-4.20-beta-0309-reasoning\":2000000,\"xai/grok-4.20-multi-agent-beta-0309\":2000000,\"xai/grok-beta\":131072,\"xai/grok-code-fast\":256000,\"xai/grok-code-fast-1\":256000,\"xai/grok-code-fast-1-0825\":256000,\"xai/grok-vision-beta\":8192,\"zai.glm-4.7\":128000,\"zai.glm-4.7-flash\":128000,\"zai.glm-5\":128000,\"zai/glm-4-32b-0414-128k\":32000,\"zai/glm-4.5\":32000,\"zai/glm-4.5-air\":32000,\"zai/glm-4.5-airx\":32000,\"zai/glm-4.5-flash\":32000,\"zai/glm-4.5-x\":32000,\"zai/glm-4.5v\":32000,\"zai/glm-4.6\":128000,\"zai/glm-4.7\":128000,\"zai/glm-5\":128000,\"zai/glm-5-code\":128000}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/maxTokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_MAX_TOKENS",
    ()=>FALLBACK_MAX_TOKENS,
    "MAX_MAX_TOKENS",
    ()=>MAX_MAX_TOKENS,
    "MIN_MAX_TOKENS",
    ()=>MIN_MAX_TOKENS,
    "effectiveMaxTokens",
    ()=>effectiveMaxTokens,
    "modelMaxTokensDefault",
    ()=>modelMaxTokensDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$litellm$2d$models$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/litellm-models.json.[json].cjs [app-client] (ecmascript)");
;
const FALLBACK_MAX_TOKENS = 8192;
const MIN_MAX_TOKENS = 1024;
const MAX_MAX_TOKENS = 200000;
const LITELLM_MODELS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$litellm$2d$models$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].models;
const OVERRIDES = {
    // LiteLLM lists MiMo via OpenRouter and Novita aliases (16k / 32k) but
    // not the canonical `mimo-v2.5-pro` id we hand to Xiaomi's direct API.
    // 32k matches what issue #29 reports as the working ceiling.
    'mimo-v2.5-pro': 32768,
    // DeepSeek v4 models not tracked by LiteLLM as of 2026-05-07.
    // Spec: https://platform.deepseek.com/docs/model-cards
    'deepseek-v4-pro': 384000,
    'deepseek-v4-flash': 384000,
    // Ollama Cloud models. LiteLLM keys this set under `ollama/`-prefixed
    // ids (many with `-cloud` suffixes), so the bare model-id lookups never
    // match. Add overrides so chat doesn't silently clip at 8192 tokens.
    // 131072 (128k) is a safe floor for all Ollama Cloud models.
    'cogito-2.1:671b': 131072,
    'deepseek-v3.1:671b': 163840,
    'deepseek-v3.2': 163840,
    'devstral-2:123b': 131072,
    'devstral-small-2:24b': 131072,
    'gemini-3-flash-preview': 131072,
    'gemma3:4b': 131072,
    'gemma3:12b': 131072,
    'gemma3:27b': 131072,
    'gemma4:31b': 131072,
    'glm-4.6': 131072,
    'glm-4.7': 131072,
    'glm-5': 131072,
    'glm-5.1': 131072,
    'gpt-oss:20b': 131072,
    'gpt-oss:120b': 131072,
    'kimi-k2:1t': 131072,
    'kimi-k2-thinking': 131072,
    'kimi-k2.5': 131072,
    'kimi-k2.6': 131072,
    'minimax-m2': 131072,
    'minimax-m2.1': 131072,
    'minimax-m2.5': 131072,
    'minimax-m2.7': 131072,
    'ministral-3:3b': 131072,
    'ministral-3:8b': 131072,
    'ministral-3:14b': 131072,
    'mistral-large-3:675b': 131072,
    'nemotron-3-nano:30b': 131072,
    'nemotron-3-super': 131072,
    'qwen3-coder:480b': 262144,
    'qwen3-coder-next': 131072,
    'qwen3-next:80b': 131072,
    'qwen3-vl:235b': 131072,
    'qwen3-vl:235b-instruct': 131072,
    'qwen3.5:397b': 131072,
    'rnj-1:8b': 131072
};
function modelMaxTokensDefault(model) {
    return OVERRIDES[model] ?? LITELLM_MODELS[model] ?? FALLBACK_MAX_TOKENS;
}
function isValidOverride(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= MIN_MAX_TOKENS && value <= MAX_MAX_TOKENS;
}
function effectiveMaxTokens(cfg) {
    // Out-of-range or non-integer overrides (stale localStorage, hand-edited
    // config, future schema drift) fall back to the model default rather
    // than silently shipping an invalid `max_tokens` upstream.
    if (isValidOverride(cfg.maxTokens)) return cfg.maxTokens;
    return modelMaxTokensDefault(cfg.model);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/apiProtocols.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared metadata for the four API protocols the BYOK pickers offer.
//
// Originally these tables lived inline in `SettingsDialog.tsx`. The
// memory-extraction picker needs the exact same lists (so it can mirror
// the chat picker's protocol tabs / suggested-model dropdown / API key
// placeholders) — extracting them here keeps the two pickers from
// drifting apart whenever someone adds a new fast-pass model or a new
// quick-fill provider.
//
// The lists are intentionally hand-curated rather than auto-discovered:
// every option exposes `provider/model` strings the daemon already
// understands, so a new entry here implies a deliberate decision about
// support on the request side too.
__turbopack_context__.s([
    "API_KEY_PLACEHOLDERS",
    ()=>API_KEY_PLACEHOLDERS,
    "API_PROTOCOL_LABELS",
    ()=>API_PROTOCOL_LABELS,
    "API_PROTOCOL_TABS",
    ()=>API_PROTOCOL_TABS,
    "DEFAULT_BASE_URL_BY_PROTOCOL",
    ()=>DEFAULT_BASE_URL_BY_PROTOCOL,
    "FAST_MODEL_BY_PROTOCOL",
    ()=>FAST_MODEL_BY_PROTOCOL,
    "FIXED_ORIGIN_GATEWAYS",
    ()=>FIXED_ORIGIN_GATEWAYS,
    "SUGGESTED_MODELS_BY_PROTOCOL",
    ()=>SUGGESTED_MODELS_BY_PROTOCOL,
    "isFixedOriginGateway",
    ()=>isFixedOriginGateway,
    "resolveFixedOriginBaseUrl",
    ()=>resolveFixedOriginBaseUrl
]);
const SUGGESTED_MODELS_BY_PROTOCOL = {
    anthropic: [
        'claude-opus-4-5',
        'claude-sonnet-4-5',
        'claude-haiku-4-5',
        'deepseek-chat',
        'deepseek-reasoner',
        'deepseek-v4-flash',
        'deepseek-v4-pro',
        'MiniMax-M2.7-highspeed',
        'MiniMax-M2.7',
        'MiniMax-M2.5-highspeed',
        'MiniMax-M2.5',
        'MiniMax-M2.1-highspeed',
        'MiniMax-M2.1',
        'MiniMax-M2',
        'mimo-v2.5-pro'
    ],
    openai: [
        'gpt-4o',
        'gpt-4o-mini',
        'o3',
        'o4-mini',
        'deepseek-chat',
        'deepseek-reasoner',
        'deepseek-v4-flash',
        'deepseek-v4-pro',
        'MiniMax-M2.7-highspeed',
        'MiniMax-M2.7',
        'MiniMax-M2.5-highspeed',
        'MiniMax-M2.5',
        'MiniMax-M2.1-highspeed',
        'MiniMax-M2.1',
        'MiniMax-M2',
        'mimo-v2.5-pro'
    ],
    azure: [
        'gpt-4o',
        'gpt-4o-mini'
    ],
    google: [
        'gemini-3.5-flash',
        'gemini-3.1-pro-preview',
        'gemini-3-flash-preview',
        'gemini-3.1-flash-lite',
        'gemini-2.5-pro',
        'gemini-2.5-flash',
        'gemini-2.5-flash-lite'
    ],
    senseaudio: [
        // SenseAudio is an OpenAI-compatible gateway that fronts both its own
        // models (senseaudio-s2 family) and aggregator routes to deepseek /
        // glm / kimi / minimax. Listing the headline house models first keeps
        // the picker's default selection on a SenseAudio-native checkpoint;
        // the aggregator IDs trail so users who arrived for a specific
        // upstream still find it in this tab without retyping it.
        'senseaudio-s2',
        'senseaudio-s2-flash',
        'deepseek-v4-flash',
        'deepseek-v4-pro',
        'glm-5.1',
        'kimi-k2.6',
        'MiniMax-M2.7-highspeed',
        'MiniMax-M2.7'
    ],
    aihubmix: [
        // AIHubMix is an OpenAI-compatible aggregator that routes to OpenAI /
        // Anthropic / Gemini / DeepSeek by model name on its side. Listing the
        // headline cross-vendor checkpoints keeps the picker useful without
        // pretending to enumerate the full catalogue — users can type any id
        // AIHubMix exposes (or fetch the full live list). gpt-5.5 leads as the
        // default chat model (an OpenAI-family model keeps in-chat generate_image
        // working through the OpenAI tool loop after protocol routing lands).
        'gpt-5.5',
        'gpt-4o',
        'gpt-4o-mini',
        'claude-opus-4-8',
        'claude-sonnet-4-5',
        'claude-haiku-4-5',
        'gemini-2.0-flash',
        'deepseek-chat',
        'deepseek-reasoner'
    ],
    ollama: [
        'cogito-2.1:671b',
        'deepseek-v3.1:671b',
        'deepseek-v3.2',
        'deepseek-v4-flash',
        'deepseek-v4-pro',
        'devstral-2:123b',
        'devstral-small-2:24b',
        'gemini-3-flash-preview',
        'gemma3:4b',
        'gemma3:12b',
        'gemma3:27b',
        'gemma4:31b',
        'glm-4.6',
        'glm-4.7',
        'glm-5',
        'glm-5.1',
        'gpt-oss:20b',
        'gpt-oss:120b',
        'kimi-k2:1t',
        'kimi-k2-thinking',
        'kimi-k2.5',
        'kimi-k2.6',
        'minimax-m2',
        'minimax-m2.1',
        'minimax-m2.5',
        'minimax-m2.7',
        'ministral-3:3b',
        'ministral-3:8b',
        'ministral-3:14b',
        'mistral-large-3:675b',
        'nemotron-3-nano:30b',
        'nemotron-3-super',
        'qwen3-coder:480b',
        'qwen3-coder-next',
        'qwen3-next:80b',
        'qwen3-vl:235b',
        'qwen3-vl:235b-instruct',
        'qwen3.5:397b',
        'rnj-1:8b'
    ]
};
const FAST_MODEL_BY_PROTOCOL = {
    anthropic: 'claude-haiku-4-5',
    openai: 'gpt-4o-mini',
    azure: 'gpt-4o-mini',
    google: 'gemini-3.5-flash',
    // Ollama Cloud doesn't have a clean "fast small model" default that
    // works for the LLM memory extractor — the catalog skews to large
    // open-weight checkpoints. Fall back to a small Gemma so the auto-
    // pick produces a deterministic answer; users who care can override
    // through the Memory model picker.
    ollama: 'gemma3:4b',
    senseaudio: 'senseaudio-s2-flash',
    aihubmix: 'gpt-4o-mini'
};
const API_PROTOCOL_TABS = [
    {
        id: 'anthropic',
        title: 'Anthropic'
    },
    {
        id: 'openai',
        title: 'OpenAI'
    },
    {
        id: 'azure',
        title: 'Azure OpenAI'
    },
    {
        id: 'google',
        title: 'Google Gemini'
    },
    {
        id: 'ollama',
        title: 'Ollama Cloud'
    },
    {
        id: 'senseaudio',
        title: 'SenseAudio'
    },
    {
        id: 'aihubmix',
        title: 'AIHubMix'
    }
];
const API_PROTOCOL_LABELS = {
    anthropic: 'Anthropic API',
    openai: 'OpenAI API',
    azure: 'Azure OpenAI',
    google: 'Google Gemini',
    ollama: 'Ollama Cloud API',
    senseaudio: 'SenseAudio API',
    aihubmix: 'AIHubMix API'
};
const API_KEY_PLACEHOLDERS = {
    anthropic: 'sk-ant-...',
    openai: 'sk-...',
    azure: 'azure key',
    google: 'AIza... or AQ....',
    ollama: 'Ollama API key',
    senseaudio: 'SenseAudio API key',
    aihubmix: 'sk-...'
};
const DEFAULT_BASE_URL_BY_PROTOCOL = {
    anthropic: 'https://api.anthropic.com',
    openai: 'https://api.openai.com',
    azure: '',
    google: 'https://generativelanguage.googleapis.com',
    ollama: 'https://ollama.com',
    senseaudio: 'https://api.senseaudio.cn',
    aihubmix: 'https://aihubmix.com/v1'
};
const FIXED_ORIGIN_GATEWAYS = new Set([
    'aihubmix'
]);
function isFixedOriginGateway(protocol) {
    return FIXED_ORIGIN_GATEWAYS.has(protocol);
}
function resolveFixedOriginBaseUrl(protocol, baseUrl) {
    return isFixedOriginGateway(protocol) ? DEFAULT_BASE_URL_BY_PROTOCOL[protocol] : baseUrl;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/appearance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCENT_SWATCHES",
    ()=>ACCENT_SWATCHES,
    "DEFAULT_ACCENT_COLOR",
    ()=>DEFAULT_ACCENT_COLOR,
    "applyAppearanceToDocument",
    ()=>applyAppearanceToDocument,
    "normalizeAccentColor",
    ()=>normalizeAccentColor,
    "resolveAccentColor",
    ()=>resolveAccentColor
]);
const ACCENT_VARS = [
    '--accent',
    '--accent-strong',
    '--accent-soft',
    '--accent-tint',
    '--accent-hover'
];
const DEFAULT_ACCENT_COLOR = '#c96442';
const ACCENT_SWATCHES = [
    DEFAULT_ACCENT_COLOR,
    '#2563eb',
    '#7c3aed',
    '#059669',
    '#dc2626',
    '#d97706',
    '#0891b2',
    '#db2777'
];
function normalizeAccentColor(value) {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    return /^#[0-9a-fA-F]{6}$/.test(trimmed) ? trimmed.toLowerCase() : null;
}
function resolveAccentColor(value) {
    return normalizeAccentColor(value) ?? DEFAULT_ACCENT_COLOR;
}
function accentVars(accentColor) {
    return {
        '--accent': accentColor,
        // Keep these mix ratios in sync with the pre-hydration script in app/layout.tsx.
        '--accent-strong': `color-mix(in srgb, ${accentColor} 86%, var(--text-strong))`,
        '--accent-soft': `color-mix(in srgb, ${accentColor} 22%, var(--bg-panel))`,
        '--accent-tint': `color-mix(in srgb, ${accentColor} 12%, var(--bg-panel))`,
        '--accent-hover': `color-mix(in srgb, ${accentColor} 90%, var(--text-strong))`
    };
}
function applyAppearanceToDocument({ theme, accentColor }) {
    const root = document.documentElement;
    if (theme === 'light' || theme === 'dark') {
        root.setAttribute('data-theme', theme);
    } else {
        root.removeAttribute('data-theme');
    }
    const normalized = resolveAccentColor(accentColor);
    const vars = accentVars(normalized);
    for (const name of ACCENT_VARS){
        root.style.setProperty(name, vars[name]);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CONFIG",
    ()=>DEFAULT_CONFIG,
    "DEFAULT_NOTIFICATIONS",
    ()=>DEFAULT_NOTIFICATIONS,
    "DEFAULT_ORBIT",
    ()=>DEFAULT_ORBIT,
    "DEFAULT_PET",
    ()=>DEFAULT_PET,
    "KNOWN_PROVIDERS",
    ()=>KNOWN_PROVIDERS,
    "buildMediaProvidersForDaemonSave",
    ()=>buildMediaProvidersForDaemonSave,
    "fetchComposioConfigFromDaemon",
    ()=>fetchComposioConfigFromDaemon,
    "fetchDaemonConfig",
    ()=>fetchDaemonConfig,
    "fetchMediaProvidersFromDaemon",
    ()=>fetchMediaProvidersFromDaemon,
    "hasAnyConfiguredProvider",
    ()=>hasAnyConfiguredProvider,
    "isStoredMediaProviderEntryEmpty",
    ()=>isStoredMediaProviderEntryEmpty,
    "isStoredMediaProviderEntryPresent",
    ()=>isStoredMediaProviderEntryPresent,
    "loadConfig",
    ()=>loadConfig,
    "mergeDaemonConfig",
    ()=>mergeDaemonConfig,
    "mergeDaemonMediaProviders",
    ()=>mergeDaemonMediaProviders,
    "saveConfig",
    ()=>saveConfig,
    "shouldSyncLocalMediaProvidersToDaemon",
    ()=>shouldSyncLocalMediaProvidersToDaemon,
    "syncComposioConfigToDaemon",
    ()=>syncComposioConfigToDaemon,
    "syncConfigToDaemon",
    ()=>syncConfigToDaemon,
    "syncMediaProvidersToDaemon",
    ()=>syncMediaProvidersToDaemon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$openai$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/openai-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/apiProtocols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/appearance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const STORAGE_KEY = 'open-design:config';
const CONFIG_MIGRATION_VERSION = 1;
const DEFAULT_NOTIFICATIONS = {
    soundEnabled: false,
    successSoundId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SUCCESS_SOUND_ID"],
    failureSoundId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FAILURE_SOUND_ID"],
    desktopEnabled: false
};
const DEFAULT_PET = {
    adopted: false,
    enabled: false,
    petId: 'mochi',
    custom: {
        name: 'Buddy',
        glyph: '🦄',
        accent: '#c96442',
        greeting: 'Hi! I am here whenever you need me.'
    }
};
const DEFAULT_ORBIT = {
    enabled: false,
    time: '08:00',
    // Ship with the general-purpose Orbit briefing skill pre-selected so a
    // fresh install runs against a real adaptive template instead of the
    // bare built-in prompt. Users can clear it from Settings → Orbit to fall
    // back to the built-in prompt or pick another scenario === 'orbit' skill.
    templateSkillId: 'orbit-general'
};
const DEFAULT_CONFIG = {
    mode: 'daemon',
    apiKey: '',
    baseUrl: 'https://openrouter.ai/api/v1',
    model: 'stepfun/step-3.7-flash:free',
    apiProtocol: 'openai',
    apiVersion: '',
    apiProtocolConfigs: {},
    configMigrationVersion: CONFIG_MIGRATION_VERSION,
    apiProviderBaseUrl: 'https://openrouter.ai/api/v1',
    agentId: null,
    skillId: null,
    designSystemId: null,
    onboardingCompleted: false,
    theme: 'system',
    accentColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACCENT_COLOR"],
    mediaProviders: {},
    composio: {},
    agentModels: {},
    agentCliEnv: {},
    agentCliEnvIntent: {},
    pet: DEFAULT_PET,
    notifications: DEFAULT_NOTIFICATIONS,
    orbit: DEFAULT_ORBIT,
    projectLocations: [],
    defaultProjectLocationId: 'default',
    telemetry: {
        metrics: true,
        content: true
    }
};
const KNOWN_PROVIDERS = [
    {
        label: 'OpenRouter',
        protocol: 'openai',
        baseUrl: 'https://openrouter.ai/api/v1',
        model: 'anthropic/claude-3.7-sonnet',
        models: [
            'anthropic/claude-3.7-sonnet',
            'anthropic/claude-3.5-sonnet',
            'google/gemini-2.5-flash',
            'google/gemini-2.5-pro',
            'openai/gpt-4o',
            'openai/o3-mini',
            'deepseek/deepseek-chat',
            'deepseek/deepseek-r1'
        ]
    },
    {
        label: 'Anthropic (Claude)',
        protocol: 'anthropic',
        baseUrl: 'https://api.anthropic.com',
        model: 'claude-sonnet-4-5',
        models: [
            'claude-sonnet-4-5',
            'claude-opus-4-5',
            'claude-haiku-4-5'
        ]
    },
    {
        label: 'DeepSeek — Anthropic',
        protocol: 'anthropic',
        baseUrl: 'https://api.deepseek.com/anthropic',
        model: 'deepseek-chat',
        models: [
            'deepseek-chat',
            'deepseek-reasoner',
            'deepseek-v4-flash',
            'deepseek-v4-pro'
        ]
    },
    {
        label: 'MiniMax — Anthropic',
        protocol: 'anthropic',
        baseUrl: 'https://api.minimaxi.com/anthropic',
        model: 'MiniMax-M2.7-highspeed',
        models: [
            'MiniMax-M2.7-highspeed',
            'MiniMax-M2.7',
            'MiniMax-M2.5-highspeed',
            'MiniMax-M2.5',
            'MiniMax-M2.1-highspeed',
            'MiniMax-M2.1',
            'MiniMax-M2'
        ]
    },
    {
        label: 'OpenAI',
        protocol: 'openai',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4o',
        models: [
            'gpt-4o',
            'gpt-4o-mini',
            'o3',
            'o4-mini'
        ]
    },
    {
        label: 'Azure OpenAI',
        protocol: 'azure',
        baseUrl: '',
        model: '',
        models: []
    },
    {
        label: 'Google Gemini',
        protocol: 'google',
        baseUrl: 'https://generativelanguage.googleapis.com',
        model: 'gemini-3.5-flash',
        models: [
            'gemini-3.5-flash',
            'gemini-3.1-pro-preview',
            'gemini-3-flash-preview',
            'gemini-3.1-flash-lite',
            'gemini-2.5-pro',
            'gemini-2.5-flash',
            'gemini-2.5-flash-lite'
        ]
    },
    {
        label: 'DeepSeek — OpenAI',
        protocol: 'openai',
        baseUrl: 'https://api.deepseek.com',
        model: 'deepseek-chat',
        models: [
            'deepseek-chat',
            'deepseek-reasoner',
            'deepseek-v4-flash',
            'deepseek-v4-pro'
        ]
    },
    {
        label: 'MiniMax — OpenAI',
        protocol: 'openai',
        baseUrl: 'https://api.minimaxi.com/v1',
        model: 'MiniMax-M2.7-highspeed',
        models: [
            'MiniMax-M2.7-highspeed',
            'MiniMax-M2.7',
            'MiniMax-M2.5-highspeed',
            'MiniMax-M2.5',
            'MiniMax-M2.1-highspeed',
            'MiniMax-M2.1',
            'MiniMax-M2'
        ]
    },
    {
        label: 'MiMo (Xiaomi) — OpenAI',
        protocol: 'openai',
        baseUrl: 'https://token-plan-cn.xiaomimimo.com/v1',
        model: 'mimo-v2.5-pro',
        models: [
            'mimo-v2.5-pro'
        ]
    },
    {
        label: 'Ollama Cloud (managed)',
        protocol: 'ollama',
        baseUrl: 'https://ollama.com',
        model: 'gpt-oss:120b',
        models: [
            'cogito-2.1:671b',
            'deepseek-v3.1:671b',
            'deepseek-v3.2',
            'deepseek-v4-flash',
            'deepseek-v4-pro',
            'devstral-2:123b',
            'devstral-small-2:24b',
            'gemini-3-flash-preview',
            'gemma3:4b',
            'gemma3:12b',
            'gemma3:27b',
            'gemma4:31b',
            'glm-4.6',
            'glm-4.7',
            'glm-5',
            'glm-5.1',
            'gpt-oss:20b',
            'gpt-oss:120b',
            'kimi-k2:1t',
            'kimi-k2-thinking',
            'kimi-k2.5',
            'kimi-k2.6',
            'minimax-m2',
            'minimax-m2.1',
            'minimax-m2.5',
            'minimax-m2.7',
            'ministral-3:3b',
            'ministral-3:8b',
            'ministral-3:14b',
            'mistral-large-3:675b',
            'nemotron-3-nano:30b',
            'nemotron-3-super',
            'qwen3-coder:480b',
            'qwen3-coder-next',
            'qwen3-next:80b',
            'qwen3-vl:235b',
            'qwen3-vl:235b-instruct',
            'qwen3.5:397b',
            'rnj-1:8b'
        ]
    },
    {
        label: 'Ollama Self-hosted (local)',
        protocol: 'ollama',
        baseUrl: 'http://localhost:11434',
        model: 'gemma3:4b',
        models: [
            'gemma3:4b',
            'gemma3:12b',
            'gemma3:27b',
            'gpt-oss:20b'
        ],
        requiresApiKey: false
    },
    {
        label: 'MiMo (Xiaomi) — Anthropic',
        protocol: 'anthropic',
        baseUrl: 'https://token-plan-cn.xiaomimimo.com/anthropic',
        model: 'mimo-v2.5-pro',
        models: [
            'mimo-v2.5-pro'
        ]
    },
    {
        label: 'SenseAudio',
        protocol: 'senseaudio',
        baseUrl: 'https://api.senseaudio.cn',
        model: 'senseaudio-s2',
        models: [
            'senseaudio-s2',
            'senseaudio-s2-flash',
            'deepseek-v4-flash',
            'deepseek-v4-pro',
            'glm-5.1',
            'kimi-k2.6',
            'MiniMax-M2.7-highspeed',
            'MiniMax-M2.7'
        ]
    },
    {
        label: 'AIHubMix',
        protocol: 'aihubmix',
        baseUrl: 'https://aihubmix.com/v1',
        model: 'gpt-5.5',
        models: [
            'gpt-5.5',
            'gpt-4o',
            'gpt-4o-mini',
            'claude-opus-4-8',
            'claude-sonnet-4-5',
            'claude-haiku-4-5',
            'gemini-2.0-flash',
            'deepseek-chat',
            'deepseek-reasoner'
        ]
    }
];
function normalizePet(input) {
    if (!input) return {
        ...DEFAULT_PET,
        custom: {
            ...DEFAULT_PET.custom
        }
    };
    // Merge stored values onto defaults so newly-added fields land safely
    // when an older config is rehydrated.
    return {
        ...DEFAULT_PET,
        ...input,
        custom: {
            ...DEFAULT_PET.custom,
            ...input.custom ?? {}
        }
    };
}
function normalizeNotifications(input) {
    return {
        ...DEFAULT_NOTIFICATIONS,
        ...input ?? {}
    };
}
function normalizeOrbit(input) {
    const time = typeof input?.time === 'string' && isValidOrbitTime(input.time) ? input.time : DEFAULT_ORBIT.time;
    return {
        ...DEFAULT_ORBIT,
        ...input ?? {},
        time
    };
}
function isValidOrbitTime(time) {
    const match = /^(\d{2}):(\d{2})$/.exec(time);
    if (!match) return false;
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}
function inferApiProtocol(model, baseUrl) {
    try {
        const normalized = (baseUrl || '').toLowerCase();
        // Any config pointing at ollama.com should resolve to the new ollama
        // protocol so both chat and the connection test hit the native Ollama
        // proxy instead of the Anthropic or OpenAI paths.
        if (normalized.includes('ollama.com')) return 'ollama';
        // SenseAudio host gets routed to its own proxy so the daemon log line
        // and the BYOK tab UI stay consistent with the protocol the user
        // picked — even though the on-wire shape is OpenAI-compatible.
        if (normalized.includes('senseaudio.cn')) return 'senseaudio';
        // AIHubMix host routes to its own proxy so the daemon injects the
        // APP-Code attribution header even though the wire shape is
        // OpenAI-compatible.
        if (normalized.includes('aihubmix.com')) return 'aihubmix';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$openai$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenAICompatible"])(model, baseUrl) ? 'openai' : 'anthropic';
    } catch  {
        // Preserve the rest of the user's settings even if an old saved base URL is
        // malformed enough for URL parsing to throw. Anthropic is the safest default
        // because it matches the original built-in provider.
        return 'anthropic';
    }
}
function loadConfig() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return {
                ...DEFAULT_CONFIG,
                pet: normalizePet(DEFAULT_PET),
                notifications: normalizeNotifications(DEFAULT_NOTIFICATIONS),
                orbit: normalizeOrbit(DEFAULT_ORBIT)
            };
        }
        const parsed = JSON.parse(raw);
        // Strip daemon-owned privacy fields if a stale localStorage payload
        // still carries them. Older builds wrote these to localStorage; we
        // now treat the daemon as authoritative so the user can rotate /
        // revoke without leaving residue in browser storage.
        for (const key of DAEMON_OWNED_KEYS){
            delete parsed[key];
        }
        const parsedHasApiProtocol = Object.prototype.hasOwnProperty.call(parsed, 'apiProtocol');
        const merged = {
            ...DEFAULT_CONFIG,
            ...parsed,
            apiProtocolConfigs: {
                ...parsed.apiProtocolConfigs ?? {}
            },
            mediaProviders: {
                ...parsed.mediaProviders ?? {}
            },
            composio: {
                ...parsed.composio ?? {}
            },
            agentModels: {
                ...parsed.agentModels ?? {}
            },
            agentCliEnv: {
                ...parsed.agentCliEnv ?? {}
            },
            agentCliEnvIntent: {
                ...parsed.agentCliEnvIntent ?? {}
            },
            accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAccentColor"])(parsed.accentColor) ?? DEFAULT_CONFIG.accentColor,
            pet: normalizePet(parsed.pet),
            notifications: normalizeNotifications(parsed.notifications),
            orbit: normalizeOrbit(parsed.orbit)
        };
        if (parsed.configMigrationVersion !== CONFIG_MIGRATION_VERSION) {
            // Migration v1: configs saved before apiProtocol existed need an explicit
            // protocol so old OpenAI-compatible endpoints keep routing correctly.
            // This is version-gated instead of only field-gated so a later imported
            // legacy config can be migrated when it is loaded.
            if (!parsedHasApiProtocol) {
                merged.apiProtocol = inferApiProtocol(merged.model, merged.baseUrl);
                // Ollama Cloud legacy configs may carry a base URL that includes
                // /api or /api/ — normalize to the host root so the daemon's own
                // /api/chat appending doesn't double up.
                if (merged.apiProtocol === 'ollama') {
                    merged.baseUrl = merged.baseUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');
                }
                // Also set apiProviderBaseUrl so setApiProtocol() can correctly identify
                // whether the user is on a known provider and switch defaults appropriately.
                // null means "custom/unknown provider" so the protocol switch won't override
                // their custom base URL.
                const knownProvider = KNOWN_PROVIDERS.find((p)=>p.baseUrl === merged.baseUrl);
                merged.apiProviderBaseUrl = knownProvider?.baseUrl ?? null;
            }
            merged.configMigrationVersion = CONFIG_MIGRATION_VERSION;
        }
        // Fixed-origin gateways (e.g. AIHubMix) hide the Base URL field, so a config
        // persisted before the origin was auto-resolved can carry an empty baseUrl.
        // Backfill it here so every consumer (Settings form, top-bar switcher, chat)
        // sees the canonical origin — an empty value otherwise blocks the live
        // model-list fetch and leaves only the static suggestion list.
        if (merged.apiProtocol) {
            merged.baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFixedOriginBaseUrl"])(merged.apiProtocol, merged.baseUrl);
        }
        return merged;
    } catch  {
        return {
            ...DEFAULT_CONFIG,
            pet: normalizePet(DEFAULT_PET),
            notifications: normalizeNotifications(DEFAULT_NOTIFICATIONS),
            orbit: normalizeOrbit(DEFAULT_ORBIT)
        };
    }
}
function hasAnyDaemonManagedMediaProvider(providers) {
    if (!providers) return false;
    return Object.values(providers).some((entry)=>isStoredMediaProviderEntryPresent(entry));
}
function hasRecoverableLocalMediaProviderFields(entry) {
    return Boolean(entry?.apiKey?.trim() || entry?.baseUrl?.trim() || entry?.model?.trim());
}
function isMarkerOnlyMediaProviderEntry(entry) {
    return isStoredMediaProviderEntryPresent(entry) && !hasRecoverableLocalMediaProviderFields(entry);
}
function isStoredMediaProviderEntryPresent(entry) {
    return Boolean(entry?.apiKey?.trim() || entry?.baseUrl?.trim() || entry?.model?.trim() || entry?.apiKeyConfigured || entry?.apiKeyTail?.trim());
}
function isStoredMediaProviderEntryEmpty(entry) {
    return !isStoredMediaProviderEntryPresent(entry);
}
function defaultBaseUrlForProvider(providerId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_PROVIDERS"].find((provider)=>provider.id === providerId)?.defaultBaseUrl ?? '';
}
function buildMediaProvidersForDaemonSave(currentProviders, daemonProviders, options) {
    const providers = {};
    for (const [providerId, currentEntry] of Object.entries(currentProviders ?? {})){
        const daemonEntry = daemonProviders?.[providerId];
        const apiKey = currentEntry?.apiKey?.trim() ?? '';
        const hasStoredKeyMarker = Boolean(currentEntry?.apiKeyTail?.trim() || daemonEntry?.apiKeyTail?.trim());
        const preserveApiKey = !apiKey && Boolean(currentEntry?.apiKeyConfigured && hasStoredKeyMarker);
        const explicitBaseUrl = currentEntry?.baseUrl?.trim() || daemonEntry?.baseUrl?.trim() || '';
        const model = currentEntry?.model?.trim() || daemonEntry?.model?.trim() || '';
        if (!apiKey && !preserveApiKey && !explicitBaseUrl && !model) continue;
        const baseUrl = explicitBaseUrl || defaultBaseUrlForProvider(providerId);
        providers[providerId] = {
            ...apiKey ? {
                apiKey
            } : {},
            ...preserveApiKey ? {
                preserveApiKey: true
            } : {},
            ...baseUrl ? {
                baseUrl
            } : {},
            ...model ? {
                model
            } : {}
        };
    }
    return {
        providers,
        force: Boolean(options?.force)
    };
}
async function fetchComposioConfigFromDaemon() {
    try {
        const response = await fetch('/api/connectors/composio/config');
        if (!response.ok) return null;
        const payload = await response.json();
        return {
            apiKey: '',
            apiKeyConfigured: Boolean(payload.configured),
            apiKeyTail: payload.apiKeyTail ?? ''
        };
    } catch  {
        return null;
    }
}
async function fetchMediaProvidersFromDaemon() {
    try {
        const response = await fetch('/api/media/config');
        if (!response.ok) return {
            status: 'error'
        };
        const payload = await response.json();
        const rawProviders = payload.providers ?? {};
        const providers = {};
        for (const [providerId, entry] of Object.entries(rawProviders)){
            providers[providerId] = {
                apiKey: '',
                apiKeyConfigured: Boolean(entry?.configured),
                apiKeyTail: entry?.apiKeyTail ?? '',
                baseUrl: entry?.baseUrl ?? '',
                ...typeof entry?.source === 'string' && entry.source.trim() ? {
                    source: entry.source.trim()
                } : {},
                ...typeof entry?.model === 'string' && entry.model.trim() ? {
                    model: entry.model.trim()
                } : {}
            };
        }
        return {
            status: 'ok',
            providers
        };
    } catch  {
        return {
            status: 'error'
        };
    }
}
async function syncComposioConfigToDaemon(config) {
    const apiKey = config?.apiKey ?? '';
    const payload = {
        ...apiKey.trim() || !config?.apiKeyConfigured ? {
            apiKey
        } : {}
    };
    try {
        const response = await fetch('/api/connectors/composio/config', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return response.ok;
    } catch  {
        return false;
    }
}
// Privacy-sensitive fields the user can revoke. We deliberately keep
// these out of localStorage so the daemon remains the single source of
// truth: clearing app-config.json (or rotating via "Delete my data")
// fully resets the install identity, with no residual cohort key
// silently sitting in browser storage where the user can't see it.
const DAEMON_OWNED_KEYS = new Set([
    'installationId',
    'telemetry',
    'privacyDecisionAt'
]);
const AGENT_CLI_SECRET_ENV_KEYS = new Set([
    'ANTHROPIC_API_KEY',
    'ANTHROPIC_AUTH_TOKEN',
    'CODEX_API_KEY',
    'OPENAI_API_KEY'
]);
function sanitizeAgentCliEnv(agentCliEnv) {
    if (!agentCliEnv) return agentCliEnv;
    const sanitized = {};
    for (const [agentId, env] of Object.entries(agentCliEnv)){
        const safeEnv = Object.fromEntries(Object.entries(env ?? {}).filter(([key])=>!AGENT_CLI_SECRET_ENV_KEYS.has(key)));
        sanitized[agentId] = safeEnv;
    }
    return sanitized;
}
function saveConfig(config) {
    const sanitized = {
        ...config,
        agentCliEnv: sanitizeAgentCliEnv(config.agentCliEnv)
    };
    for (const key of DAEMON_OWNED_KEYS){
        delete sanitized[key];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
}
function mergeDaemonConfig(localConfig, daemonConfig) {
    const next = {
        ...localConfig
    };
    if (!daemonConfig) return next;
    if (daemonConfig.onboardingCompleted != null) {
        next.onboardingCompleted = daemonConfig.onboardingCompleted;
    }
    if (daemonConfig.agentId !== undefined) {
        next.agentId = daemonConfig.agentId;
    }
    if (daemonConfig.skillId !== undefined) {
        next.skillId = daemonConfig.skillId;
    }
    if (daemonConfig.designSystemId !== undefined) {
        next.designSystemId = daemonConfig.designSystemId;
    }
    if (daemonConfig.agentModels) {
        next.agentModels = {
            ...next.agentModels ?? {},
            ...daemonConfig.agentModels
        };
    }
    next.agentCliEnv = daemonConfig.agentCliEnv ?? {};
    next.agentCliEnvIntent = daemonConfig.agentCliEnvIntent ?? {};
    if (daemonConfig.disabledSkills !== undefined) {
        next.disabledSkills = daemonConfig.disabledSkills;
    }
    if (daemonConfig.disabledDesignSystems !== undefined) {
        next.disabledDesignSystems = daemonConfig.disabledDesignSystems;
    }
    if (daemonConfig.orbit !== undefined) {
        next.orbit = normalizeOrbit(daemonConfig.orbit);
    }
    if (daemonConfig.installationId !== undefined) {
        next.installationId = daemonConfig.installationId;
    }
    if (daemonConfig.telemetry !== undefined) {
        next.telemetry = {
            ...daemonConfig.telemetry
        };
    }
    if (daemonConfig.privacyDecisionAt !== undefined) {
        next.privacyDecisionAt = daemonConfig.privacyDecisionAt;
    } else if (daemonConfig.installationId !== undefined || daemonConfig.telemetry !== undefined) {
        // One-shot migration for configs created before privacyDecisionAt
        // existed. If the daemon already has an id or telemetry prefs, the user
        // has resolved the first-run prompt and should not see it again.
        next.privacyDecisionAt = Date.now();
    }
    // Default-on reporting. Unless the user has explicitly opted out
    // (Settings → "Don't share", which persists telemetry.metrics === false
    // together with installationId: null), an install reports with the
    // product's default telemetry channels on and carries a stable
    // installationId. This is the single source of the "Opted out" state:
    // previously an upgraded or never-prompted install could sit with
    // telemetry on but no id (the daemon ships a metrics+content default but
    // never mints an id), which the Settings → Privacy field rendered as
    // "Opted out" even though the user never declined. We mint the id and
    // keep the default channels on so the displayed state matches the product
    // default — the same metrics+content surface the first-run banner's "I
    // get it" opt-in enables (artifactManifest stays off, as it does there).
    // This does NOT override an explicit opt-out: metrics === false short-
    // circuits the whole block, and any channel the user already turned off
    // is preserved via the nullish-coalesce.
    const explicitlyOptedOut = next.telemetry?.metrics === false;
    if (!explicitlyOptedOut && !next.installationId) {
        next.installationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
        next.telemetry = {
            metrics: true,
            content: next.telemetry?.content ?? true,
            artifactManifest: next.telemetry?.artifactManifest ?? false
        };
    }
    if (daemonConfig.customInstructions !== undefined) {
        next.customInstructions = daemonConfig.customInstructions ?? undefined;
    }
    if (daemonConfig.projectLocations !== undefined) {
        next.projectLocations = daemonConfig.projectLocations;
    }
    if (daemonConfig.defaultProjectLocationId !== undefined) {
        next.defaultProjectLocationId = daemonConfig.defaultProjectLocationId ?? 'default';
    }
    return next;
}
function mergeDaemonMediaProviders(localConfig, daemonProviders, options) {
    if (daemonProviders == null) {
        return {
            ...localConfig
        };
    }
    if (!hasAnyDaemonManagedMediaProvider(daemonProviders)) {
        return {
            ...localConfig,
            mediaProviders: Object.fromEntries(Object.entries(localConfig.mediaProviders ?? {}).filter(([, entry])=>!isMarkerOnlyMediaProviderEntry(entry)))
        };
    }
    const mediaProviders = {
        ...localConfig.mediaProviders ?? {}
    };
    for (const [providerId, daemonEntry] of Object.entries(daemonProviders ?? {})){
        if (!isStoredMediaProviderEntryPresent(daemonEntry)) continue;
        const localEntry = mediaProviders[providerId];
        const preserveLocalPendingEdit = Boolean(options?.preserveLocalProviderIds?.has(providerId) && hasRecoverableLocalMediaProviderFields(localEntry));
        mediaProviders[providerId] = preserveLocalPendingEdit ? {
            ...daemonEntry,
            ...localEntry
        } : {
            ...daemonEntry
        };
    }
    return {
        ...localConfig,
        mediaProviders
    };
}
function hasAnyConfiguredProvider(providers) {
    if (!providers) return false;
    return Object.values(providers).some((entry)=>isStoredMediaProviderEntryPresent(entry));
}
function shouldSyncLocalMediaProvidersToDaemon(localProviders, daemonProviders) {
    return daemonProviders != null && Object.values(localProviders ?? {}).some((entry)=>hasRecoverableLocalMediaProviderFields(entry)) && !hasAnyDaemonManagedMediaProvider(daemonProviders);
}
async function syncMediaProvidersToDaemon(providers, options) {
    if (!providers) return;
    try {
        const payload = buildMediaProvidersForDaemonSave(providers, options?.daemonProviders, {
            force: options?.force
        });
        const response = await fetch('/api/media/config', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`Failed to sync media config (${response.status})`);
    } catch  {
        if (options?.throwOnError) throw new Error('Media config save failed');
    // Daemon offline; localStorage keeps the user's copy for the next save.
    }
}
async function fetchDaemonConfig() {
    try {
        const res = await fetch('/api/app-config');
        if (!res.ok) return null;
        const data = await res.json();
        return data?.config ?? null;
    } catch  {
        return null;
    }
}
async function syncConfigToDaemon(config, options) {
    const prefs = {
        onboardingCompleted: config.onboardingCompleted,
        agentId: config.agentId,
        agentModels: config.agentModels,
        agentCliEnv: config.agentCliEnv,
        agentCliEnvIntent: config.agentCliEnvIntent,
        skillId: config.skillId,
        designSystemId: config.designSystemId,
        disabledSkills: config.disabledSkills,
        disabledDesignSystems: config.disabledDesignSystems,
        orbit: normalizeOrbit(config.orbit),
        installationId: config.installationId,
        telemetry: config.telemetry,
        privacyDecisionAt: config.privacyDecisionAt,
        customInstructions: config.customInstructions ?? null,
        projectLocations: config.projectLocations ?? [],
        defaultProjectLocationId: config.defaultProjectLocationId ?? 'default'
    };
    try {
        const response = await fetch('/api/app-config', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prefs)
        });
        if (!response.ok) throw new Error(`Failed to sync app config (${response.status})`);
    } catch (error) {
        if (options?.throwOnError) throw error;
    // Daemon offline; localStorage keeps the user's copy for the next save.
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/state/project-locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchProjectLocations",
    ()=>fetchProjectLocations,
    "openProjectLocationFolderDialog",
    ()=>openProjectLocationFolderDialog,
    "scanProjectLocations",
    ()=>scanProjectLocations,
    "updateProjectLocations",
    ()=>updateProjectLocations
]);
async function fetchProjectLocations() {
    try {
        const resp = await fetch('/api/project-locations');
        if (!resp.ok) return [];
        const json = await resp.json();
        return Array.isArray(json.locations) ? json.locations : [];
    } catch  {
        return [];
    }
}
async function updateProjectLocations(locations) {
    try {
        const resp = await fetch('/api/project-locations', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                locations
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return Array.isArray(json.locations) ? json.locations : [];
    } catch  {
        return null;
    }
}
async function scanProjectLocations() {
    try {
        const resp = await fetch('/api/project-locations/scan', {
            method: 'POST'
        });
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function openProjectLocationFolderDialog() {
    try {
        const resp = await fetch('/api/dialog/open-folder', {
            method: 'POST'
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return typeof json.path === 'string' && json.path.trim() ? json.path : null;
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_state_0jiofn6._.js.map