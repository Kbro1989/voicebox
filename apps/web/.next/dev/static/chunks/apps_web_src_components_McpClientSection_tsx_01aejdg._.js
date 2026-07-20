(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/McpClientSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "McpClientSection",
    ()=>McpClientSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// External MCP servers panel.
//
// Open Design connects to the configured servers as a CLIENT and surfaces
// their tools to the underlying agent (Claude Code, Hermes, Kimi for v1).
// This panel is the user-facing form; persistence flows through
// `state/mcp.ts` -> daemon `/api/mcp/servers`.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/mcp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
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
// Simple incrementing local id generator for row keys. Kept module-scoped
// and deterministic for the lifetime of this UI instance.
let NEXT_LOCAL_ID = 1;
function genLocalId() {
    return `mcp-row-${NEXT_LOCAL_ID++}`;
}
function isLoopbackMcpUrl(rawUrl) {
    if (!rawUrl) return false;
    try {
        const host = new URL(rawUrl).hostname.replace(/^\[|\]$/g, '').toLowerCase().replace(/\.+$/g, '');
        if (host === 'localhost' || host === '::1') return true;
        if (/^127(?:\.\d{1,3}){3}$/.test(host)) return true;
        return /^::ffff:127(?:\.\d{1,3}){3}$/i.test(host);
    } catch  {
        return false;
    }
}
function inferMcpAuthMode(url) {
    return isLoopbackMcpUrl(url) ? 'none' : 'oauth';
}
function effectiveMcpAuthMode(row) {
    if (row.transport !== 'http' && row.transport !== 'sse') return 'none';
    return row.authMode ?? inferMcpAuthMode(row.url);
}
function authModeAfterUrlChange(row, nextUrl) {
    const previousInferred = inferMcpAuthMode(row.url);
    if (!row.authMode || row.authMode === previousInferred) {
        return inferMcpAuthMode(nextUrl);
    }
    return row.authMode;
}
function rowsFromServers(servers) {
    return servers.map((s)=>({
            ...s,
            ...s.transport === 'http' || s.transport === 'sse' ? {
                authMode: effectiveMcpAuthMode(s)
            } : {},
            _envText: s.env ? mapToText(s.env) : '',
            _headersText: s.headers ? mapToText(s.headers) : '',
            _localId: genLocalId()
        }));
}
function mapToText(m) {
    return Object.entries(m).map(([k, v])=>`${k}=${v}`).join('\n');
}
function textToMap(text) {
    if (!text) return undefined;
    const out = {};
    for (const raw of text.split('\n')){
        const line = raw.trim();
        if (!line || line.startsWith('#')) continue;
        const eq = line.indexOf('=');
        if (eq <= 0) continue;
        const k = line.slice(0, eq).trim();
        const v = line.slice(eq + 1).trim();
        if (!k) continue;
        out[k] = v;
    }
    return Object.keys(out).length > 0 ? out : undefined;
}
function rowsToServers(rows) {
    return rows.map((r)=>{
        const out = {
            id: r.id,
            transport: r.transport,
            enabled: r.enabled
        };
        if (r.label) out.label = r.label;
        if (r.templateId) out.templateId = r.templateId;
        if (r.transport === 'stdio') {
            if (r.command) out.command = r.command;
            if (r.args && r.args.length > 0) out.args = r.args;
            const env = textToMap(r._envText);
            if (env) out.env = env;
        } else {
            out.authMode = effectiveMcpAuthMode(r);
            if (r.url) out.url = r.url;
            const headers = textToMap(r._headersText);
            if (headers) out.headers = headers;
        }
        return out;
    });
}
function rowFromTemplate(tpl, taken) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suggestMcpServerId"])(tpl.id, taken);
    const env = {};
    for (const f of tpl.envFields ?? [])env[f.key] = '';
    const headers = {};
    for (const f of tpl.headerFields ?? [])headers[f.key] = '';
    return {
        id,
        label: tpl.label,
        templateId: tpl.id,
        transport: tpl.transport,
        enabled: true,
        ...tpl.transport === 'http' || tpl.transport === 'sse' ? {
            authMode: tpl.authMode ?? inferMcpAuthMode(tpl.url)
        } : {},
        command: tpl.command,
        args: tpl.args ? [
            ...tpl.args
        ] : undefined,
        url: tpl.url,
        _envText: Object.keys(env).length > 0 ? mapToText(env) : '',
        _headersText: Object.keys(headers).length > 0 ? mapToText(headers) : '',
        _isNew: true,
        _localId: genLocalId()
    };
}
function rowFromBlank(taken) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suggestMcpServerId"])('custom', taken),
        label: '',
        transport: 'stdio',
        enabled: true,
        command: '',
        args: [],
        _envText: '',
        _headersText: '',
        _isNew: true,
        _localId: genLocalId()
    };
}
const ID_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/i;
// Picker grouping. Mirrors `McpTemplateCategory` in `packages/contracts`.
// The order here is the *display* order in the picker — keep it intentional
// so the most useful categories for Open Design (visual generation, then
// editing, then publishing surfaces) sit at the top.
const CATEGORY_ORDER = [
    {
        id: 'image-generation',
        label: 'Image generation',
        hint: 'Models that produce raster, vector or video assets.'
    },
    {
        id: 'image-editing',
        label: 'Image editing',
        hint: 'Local post-processing, OCR and CV-driven edits.'
    },
    {
        id: 'web-capture',
        label: 'Web capture',
        hint: 'Render a URL into an image so the agent can see what it built.'
    },
    {
        id: 'design-systems',
        label: 'Design systems',
        hint: 'Figma read/write, design-token translation, brand inspiration.'
    },
    {
        id: 'ui-components',
        label: 'UI components',
        hint: 'Designer-grade components, blocks and landing-page material.'
    },
    {
        id: 'data-viz',
        label: 'Data viz',
        hint: 'Charts and diagrams as proper image artifacts.'
    },
    {
        id: 'publishing',
        label: 'Publishing',
        hint: 'Push generated artifacts to a public URL.'
    },
    {
        id: 'utilities',
        label: 'Utilities',
        hint: 'Filesystem, fetch, GitHub and similar generic tools.'
    }
];
function templateMatchesQuery(tpl, q) {
    if (!q) return true;
    const needle = q.toLowerCase();
    return tpl.label.toLowerCase().includes(needle) || tpl.id.toLowerCase().includes(needle) || (tpl.description?.toLowerCase().includes(needle) ?? false) || (tpl.example?.toLowerCase().includes(needle) ?? false);
}
function validateRow(r) {
    if (!ID_PATTERN.test(r.id)) {
        return 'ID must start with a letter or digit and only contain letters, digits, dash, or underscore (max 64 chars).';
    }
    if (r.transport === 'stdio') {
        if (!r.command || !r.command.trim()) return 'Command is required for stdio transport.';
    } else {
        if (!r.url || !r.url.trim()) return 'URL is required for SSE / HTTP transport.';
        try {
            const parsed = new URL(r.url);
            if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
                return 'URL must use http:// or https://.';
            }
        } catch  {
            return 'URL is malformed.';
        }
    }
    return null;
}
// Stable signature used to detect dirty state — cheap diff against the
// last-known-saved server list. Avoids a deep equality library.
function signature(rows) {
    return JSON.stringify(rowsToServers(rows));
}
const McpClientSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function McpClientSection({ onServersChanged, onDirtyChange, surface = 'integrations' }, ref) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // Single dispatch point for every click in this section: routes to the
    // payload matching the surface the section is rendered on.
    const trackMcpClick = (element, extra)=>{
        if (surface === 'settings') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsExternalMcpClick"])(analytics.track, {
                page_name: 'settings',
                area: 'external_mcp',
                element,
                ...extra
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackIntegrationsMcpTabClick"])(analytics.track, {
                page_name: 'integrations',
                area: 'mcp_tab',
                element,
                ...extra
            });
        }
    };
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedSig, setSavedSig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('[]');
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedAt, setSavedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Free-text filter at the top of the picker. Empty string = show all.
    // Lives in the section (not the picker render block) so toggling the
    // picker preserves the user's last query while they scan through it.
    const [pickerQuery, setPickerQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cached agent list so the support banner can tell the user which of the
    // installed CLI agents will actually receive the MCP servers below.
    // Without this, OpenCode / Codex / Gemini users save a server and have
    // no way to learn it never reached the agent (issue #2142).
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "McpClientSection.McpClientSection.useEffect": ()=>{
            let cancelled = false;
            void ({
                "McpClientSection.McpClientSection.useEffect": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMcpServers"])();
                    if (cancelled) return;
                    if (!data) {
                        setError(t('mcpClient.daemonError'));
                        setLoaded(true);
                        return;
                    }
                    const fresh = rowsFromServers(data.servers);
                    setRows(fresh);
                    setSavedSig(signature(fresh));
                    setTemplates(data.templates);
                    setLoaded(true);
                }
            })["McpClientSection.McpClientSection.useEffect"]();
            return ({
                "McpClientSection.McpClientSection.useEffect": ()=>{
                    cancelled = true;
                }
            })["McpClientSection.McpClientSection.useEffect"];
        }
    }["McpClientSection.McpClientSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "McpClientSection.McpClientSection.useEffect": ()=>{
            let cancelled = false;
            void ({
                "McpClientSection.McpClientSection.useEffect": async ()=>{
                    const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAgents"])();
                    if (cancelled) return;
                    setAgents(list);
                }
            })["McpClientSection.McpClientSection.useEffect"]();
            return ({
                "McpClientSection.McpClientSection.useEffect": ()=>{
                    cancelled = true;
                }
            })["McpClientSection.McpClientSection.useEffect"];
        }
    }["McpClientSection.McpClientSection.useEffect"], []);
    const dirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "McpClientSection.McpClientSection.useMemo[dirty]": ()=>signature(rows) !== savedSig
    }["McpClientSection.McpClientSection.useMemo[dirty]"], [
        rows,
        savedSig
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "McpClientSection.McpClientSection.useEffect": ()=>{
            onDirtyChange?.(dirty);
        }
    }["McpClientSection.McpClientSection.useEffect"], [
        dirty,
        onDirtyChange
    ]);
    const updateRow = (idx, patch)=>{
        setRows((curr)=>curr.map((r, i)=>i === idx ? {
                    ...r,
                    ...patch
                } : r));
    };
    const removeRow = (idx)=>{
        setRows((curr)=>curr.filter((_, i)=>i !== idx));
    };
    const moveRow = (idx, dir)=>{
        setRows((curr)=>{
            const next = [
                ...curr
            ];
            const target = idx + dir;
            if (target < 0 || target >= next.length) return curr;
            [next[idx], next[target]] = [
                next[target],
                next[idx]
            ];
            return next;
        });
    };
    const addFromTemplate = (tpl)=>{
        trackMcpClick('pick_template', {
            template_id: tpl.id.replace(/-/g, '_')
        });
        setPickerOpen(false);
        setRows((curr)=>[
                ...curr,
                rowFromTemplate(tpl, new Set(curr.map((r)=>r.id)))
            ]);
    };
    const addBlank = ()=>{
        trackMcpClick('pick_blank');
        setPickerOpen(false);
        setRows((curr)=>[
                ...curr,
                rowFromBlank(new Set(curr.map((r)=>r.id)))
            ]);
    };
    const save = async ()=>{
        for (const r of rows){
            const err = validateRow(r);
            if (err) {
                setError(`${r.label || r.id}: ${err}`);
                return false;
            }
        }
        setError(null);
        setSaving(true);
        const payload = rowsToServers(rows);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMcpServers"])(payload);
        setSaving(false);
        if (!data) {
            setError(t('mcpClient.saveFailed'));
            return false;
        }
        const fresh = rowsFromServers(data.servers);
        setRows(fresh);
        setSavedSig(signature(fresh));
        setTemplates(data.templates);
        setSavedAt(Date.now());
        onServersChanged?.(data.servers);
        return true;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "McpClientSection.McpClientSection.useImperativeHandle": ()=>({
                save,
                hasDirty: ({
                    "McpClientSection.McpClientSection.useImperativeHandle": ()=>dirty
                })["McpClientSection.McpClientSection.useImperativeHandle"]
            })
    }["McpClientSection.McpClientSection.useImperativeHandle"], [
        save,
        dirty
    ]);
    if (!loaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "settings-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-head",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: t('mcpClient.title')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hint",
                            children: t('common.loading')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 456,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
            lineNumber: 455,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: t('mcpClient.title')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint",
                                children: t('mcpClient.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "primary mcp-add-btn",
                        onClick: ()=>{
                            trackMcpClick('add_server');
                            setPickerOpen((v)=>!v);
                        },
                        "aria-expanded": pickerOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "sparkles",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('mcpClient.addServer')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(McpAgentSupportBanner, {
                agents: agents
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            pickerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickerPanel, {
                templates: templates,
                query: pickerQuery,
                onQueryChange: setPickerQuery,
                onPick: addFromTemplate,
                onPickBlank: addBlank,
                onClose: ()=>setPickerOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 490,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 501,
                columnNumber: 9
            }, this) : null,
            rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: t('mcpClient.emptyTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: t('mcpClient.emptyBody')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 505,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-rows",
                children: rows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(McpRow, {
                        row: row,
                        idx: idx,
                        total: rows.length,
                        template: row.templateId ? templates.find((t)=>t.id === row.templateId) : undefined,
                        onChange: (patch)=>updateRow(idx, patch),
                        onRemove: ()=>{
                            trackMcpClick('remove_server', row.templateId ? {
                                template_id: row.templateId.replace(/-/g, '_')
                            } : undefined);
                            removeRow(idx);
                        },
                        onMoveUp: idx > 0 ? ()=>moveRow(idx, -1) : undefined,
                        onMoveDown: idx < rows.length - 1 ? ()=>moveRow(idx, 1) : undefined
                    }, row._localId, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 514,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 512,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-foot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "primary",
                        onClick: ()=>{
                            trackMcpClick('saved');
                            void save();
                        },
                        disabled: saving || !dirty,
                        children: saving ? t('settings.autosaveSaving') : dirty ? t('mcpClient.saveChanges') : t('settings.autosaveSaved')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this),
                    savedAt && !dirty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hint mcp-saved-msg",
                        children: [
                            t('settings.connectorsSaved'),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mcp-foot-spacer"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hint",
                        children: [
                            t('mcpClient.storedAt'),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: ".od/mcp-config.json"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 558,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 541,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
}, "CF+lx4flNBIEnWda7+hs1axieGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
})), "CF+lx4flNBIEnWda7+hs1axieGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = McpClientSection;
/**
 * The "Add server" picker, broken out so we can give it categorized
 * `<details>` groups, an inline filter and a sticky close affordance.
 *
 * UX rules:
 *  - Groups are collapsed by default once the catalog crosses ~12 entries
 *    so the picker fits in a normal viewport. We pre-expand all groups
 *    when the user types a search so matches are immediately visible.
 *  - Groups with zero matching templates are hidden entirely while a
 *    search is active to avoid a wall of empty headers.
 *  - "Custom server" lives in its own footer card pinned below the groups
 *    so users can always reach it even after scrolling through templates.
 */ function PickerPanel({ templates, query, onQueryChange, onPick, onPickBlank, onClose }) {
    _s1();
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PickerPanel.useMemo[grouped]": ()=>{
            const buckets = new Map();
            for (const tpl of templates){
                const list = buckets.get(tpl.category) ?? [];
                list.push(tpl);
                buckets.set(tpl.category, list);
            }
            return buckets;
        }
    }["PickerPanel.useMemo[grouped]"], [
        templates
    ]);
    const trimmed = query.trim();
    const hasQuery = trimmed.length > 0;
    // Total visible across all groups so we can show an empty-state if the
    // search filters everything out.
    let visibleTotal = 0;
    const renderGroups = CATEGORY_ORDER.map((cat)=>{
        const all = grouped.get(cat.id) ?? [];
        const matched = all.filter((t)=>templateMatchesQuery(t, trimmed));
        visibleTotal += matched.length;
        if (all.length === 0) return null;
        if (hasQuery && matched.length === 0) return null;
        // Default-expanded for the first three groups (the visual-asset
        // pipeline most users will land here for); collapsed otherwise.
        // Active query forces every visible group open so matches surface
        // without an extra click.
        const defaultOpen = hasQuery || cat.id === 'image-generation' || cat.id === 'image-editing' || cat.id === 'web-capture';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            className: "mcp-picker-group",
            open: defaultOpen,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    className: "mcp-picker-group-summary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-picker-group-summary-title",
                            children: cat.label
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-picker-group-summary-count",
                            children: hasQuery ? `${matched.length}/${all.length}` : all.length
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-picker-group-summary-hint",
                            children: cat.hint
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mcp-picker-grid",
                    children: matched.map((tpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickerCard, {
                            tpl: tpl,
                            onPick: ()=>onPick(tpl)
                        }, tpl.id, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 639,
                    columnNumber: 9
                }, this)
            ]
        }, cat.id, true, {
            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
            lineNumber: 627,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mcp-picker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-picker-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-picker-head-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Pick a template"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-btn mcp-picker-close",
                                onClick: onClose,
                                title: "Close picker",
                                "aria-label": "Close picker",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hint",
                        children: "Pre-fills the form. You can still edit any field after."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        className: "mcp-picker-search",
                        placeholder: "Filter by name, transport, capability…",
                        value: query,
                        onChange: (e)=>onQueryChange(e.target.value),
                        spellCheck: false,
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-picker-groups",
                children: [
                    renderGroups,
                    hasQuery && visibleTotal === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-picker-empty hint",
                        children: [
                            "No templates match “",
                            trimmed,
                            "”. Try clearing the filter or use the custom server option below."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 680,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-picker-foot",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "mcp-picker-item mcp-picker-item-action mcp-picker-custom",
                    onClick: onPickBlank,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-picker-item-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "settings",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 694,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Custom server"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-picker-desc",
                            children: "Empty form. Pick stdio or SSE / HTTP and fill the fields yourself."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 688,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 649,
        columnNumber: 5
    }, this);
}
_s1(PickerPanel, "gIuKZS+YXG5kbRqC2ydYOg9cOh4=");
_c2 = PickerPanel;
function PickerCard({ tpl, onPick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mcp-picker-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "mcp-picker-item-action",
                onClick: onPick,
                title: tpl.description,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mcp-picker-item-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "link",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: tpl.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 723,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mcp-picker-transport",
                                children: tpl.transport
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mcp-picker-desc",
                        children: tpl.description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, this),
                    tpl.example ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mcp-picker-example",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mcp-picker-example-label",
                                children: "Try:"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mcp-picker-example-text",
                                children: [
                                    '"',
                                    tpl.example,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 728,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 715,
                columnNumber: 7
            }, this),
            tpl.homepage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "mcp-picker-homepage",
                href: tpl.homepage,
                target: "_blank",
                rel: "noreferrer noopener",
                title: tpl.homepage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "external-link",
                        size: 11
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 742,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Homepage"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 743,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 735,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 714,
        columnNumber: 5
    }, this);
}
_c3 = PickerCard;
function McpRow({ row, idx, total, template, onChange, onRemove, onMoveUp, onMoveDown }) {
    _s2();
    const isHttpLike = row.transport === 'http' || row.transport === 'sse';
    const usesManagedOAuth = isHttpLike && effectiveMcpAuthMode(row) === 'oauth';
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const summaryTitle = row.label?.trim() || row.id || 'Unnamed MCP server';
    const [showMcpExample, setShowMcpExample] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const helperId = `mcp-json-helper-panel-${row._localId}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mcp-row${row.enabled ? '' : ' mcp-row-disabled'}${expanded ? ' mcp-row-expanded' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-row-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mcp-row-toggle",
                        title: row.enabled ? 'Enabled' : 'Disabled',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: row.enabled,
                            onChange: (e)=>onChange({
                                    enabled: e.target.checked
                                }),
                            "aria-label": "Enable this MCP server"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 780,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "mcp-row-label",
                        value: row.label ?? '',
                        placeholder: "Display name (optional)",
                        onChange: (e)=>onChange({
                                label: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 788,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "mcp-row-summary-title",
                        onClick: ()=>setExpanded(true),
                        title: "Expand to edit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mcp-row-summary-name",
                                children: summaryTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 802,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mcp-row-summary-transport",
                                "aria-label": `Transport: ${row.transport}`,
                                children: row.transport
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 803,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 796,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mcp-row-counter hint",
                        children: [
                            idx + 1,
                            " / ",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-row-actions",
                        children: [
                            onMoveUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                onClick: onMoveUp,
                                title: "Move up",
                                children: "↑"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 816,
                                columnNumber: 13
                            }, this) : null,
                            onMoveDown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                onClick: onMoveDown,
                                title: "Move down",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                onClick: onRemove,
                                title: "Remove this MCP server",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                className: "mcp-row-toggle-btn",
                                onClick: ()=>setExpanded((v)=>!v),
                                "aria-expanded": expanded,
                                "aria-label": expanded ? 'Collapse this MCP server' : 'Expand this MCP server',
                                title: expanded ? 'Collapse' : 'Expand',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-down",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 840,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 832,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 814,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    template ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "mcp-row-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "mcp-row-info-summary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-info-summary-label",
                                        children: [
                                            "About ",
                                            template.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 850,
                                        columnNumber: 17
                                    }, this),
                                    template.homepage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "mcp-row-info-link",
                                        href: template.homepage,
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        title: template.homepage,
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "external-link",
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 862,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Homepage"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 863,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 854,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 849,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mcp-row-info-body",
                                children: [
                                    template.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mcp-row-info-desc hint",
                                        children: template.description
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 869,
                                        columnNumber: 19
                                    }, this) : null,
                                    template.example ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mcp-row-info-example",
                                        title: "Paste this prompt into the chat composer to try the server end-to-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcp-row-info-example-label",
                                                children: "Try:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 876,
                                                columnNumber: 21
                                            }, this),
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcp-row-info-example-text",
                                                children: [
                                                    '"',
                                                    template.example,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 877,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 872,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 867,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 848,
                        columnNumber: 13
                    }, this) : null,
                    isHttpLike && !row._isNew && row.id ? usesManagedOAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(McpOAuthControl, {
                        serverId: row.id
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 886,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-oauth-hint hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "No managed OAuth."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 889,
                                columnNumber: 17
                            }, this),
                            " Open Design will use this server as configured. Add headers below if the server needs a token."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 888,
                        columnNumber: 15
                    }, this) : null,
                    isHttpLike && row._isNew && usesManagedOAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-oauth-hint hint",
                        children: [
                            "Save first, then click ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Connect"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 897,
                                columnNumber: 38
                            }, this),
                            " to grant Open Design access via the provider's OAuth flow."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 896,
                        columnNumber: 13
                    }, this) : null,
                    isHttpLike && row._isNew && !usesManagedOAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-oauth-hint hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "No managed OAuth."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 903,
                                columnNumber: 15
                            }, this),
                            " Save this server and Open Design will use it directly."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 902,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcp-row-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 910,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: row.id,
                                        onChange: (e)=>onChange({
                                                id: e.target.value
                                            }),
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 911,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 909,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "Transport"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 919,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: row.transport,
                                        onChange: (e)=>{
                                            const transport = e.target.value;
                                            onChange({
                                                transport,
                                                ...transport === 'http' || transport === 'sse' ? {
                                                    authMode: row.authMode ?? inferMcpAuthMode(row.url)
                                                } : {
                                                    authMode: undefined
                                                }
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "stdio",
                                                children: "stdio"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sse",
                                                children: "SSE"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "http",
                                                children: "streamable HTTP"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 934,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 920,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 908,
                        columnNumber: 11
                    }, this),
                    row.transport === 'stdio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "Command"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 942,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: row.command ?? '',
                                        placeholder: "e.g. npx, node, /path/to/binary",
                                        onChange: (e)=>onChange({
                                                command: e.target.value
                                            }),
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 941,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "Args"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 952,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: (row.args ?? []).join(' '),
                                        placeholder: "space-separated",
                                        onChange: (e)=>onChange({
                                                args: e.target.value.split(/\s+/).map((s)=>s.trim()).filter(Boolean)
                                            }),
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 953,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 951,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "Env (KEY=VALUE)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 969,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: Math.max(2, (row._envText ?? '').split('\n').length),
                                        value: row._envText ?? '',
                                        placeholder: "GITHUB_TOKEN=ghp_…",
                                        onChange: (e)=>onChange({
                                                _envText: e.target.value
                                            }),
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 970,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 968,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "OAuth mode"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 982,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: effectiveMcpAuthMode(row),
                                        onChange: (e)=>onChange({
                                                authMode: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "none",
                                                children: "No managed OAuth"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 991,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "oauth",
                                                children: "Managed OAuth"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 992,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 983,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 981,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "URL"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 996,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: row.url ?? '',
                                        placeholder: "https://mcp.higgsfield.ai/mcp",
                                        onChange: (e)=>{
                                            const url = e.target.value;
                                            onChange({
                                                url,
                                                authMode: authModeAfterUrlChange(row, url)
                                            });
                                        },
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 997,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 995,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mcp-row-field mcp-row-field-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-row-field-label",
                                        children: "Headers (KEY=VALUE)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: Math.max(2, (row._headersText ?? '').split('\n').length),
                                        value: row._headersText ?? '',
                                        placeholder: "Authorization=Bearer …",
                                        onChange: (e)=>onChange({
                                                _headersText: e.target.value
                                            }),
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 1008,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mcp-json-helper ${showMcpExample ? 'is-open' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "mcp-json-helper-toggle",
                                "aria-expanded": showMcpExample,
                                "aria-controls": helperId,
                                onClick: ()=>setShowMcpExample((prev)=>!prev),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-json-helper-toggle-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcp-json-helper-eye",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "eye"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1031,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcp-json-helper-toggle-text",
                                                children: "Need help? Map your MCP server's JSON config using the example below."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1033,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcp-json-helper-toggle-icon",
                                        children: showMcpExample ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "arrow-up"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                            lineNumber: 1039,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-down"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 1022,
                                columnNumber: 13
                            }, this),
                            showMcpExample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mcp-json-helper-example",
                                id: helperId,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mcp-json-helper-example-head",
                                        children: "Example MCP JSON"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mcp-json-helper-code",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "{"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 21
                                                }, this),
                                                "\n  ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"mcpServers"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: [
                                                        ": ",
                                                        "{"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 21
                                                }, this),
                                                "\n    ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"tdesign"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: [
                                                        ": ",
                                                        "{"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 21
                                                }, this),
                                                "\n      ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"command"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: ":"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-string",
                                                    children: '"npx"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: ","
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1064,
                                                    columnNumber: 21
                                                }, this),
                                                "\n      ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"args"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: ": ["
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-string",
                                                    children: '"-y"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1068,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: ", "
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1069,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-string",
                                                    children: '"tdesign-mcp-server@latest"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "],"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 21
                                                }, this),
                                                "\n      ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"env"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1073,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: [
                                                        ": ",
                                                        "{"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1074,
                                                    columnNumber: 21
                                                }, this),
                                                "\n        ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-key",
                                                    children: '"API_KEY"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: ":"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1077,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-string",
                                                    children: '"your-key-here"'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1078,
                                                    columnNumber: 21
                                                }, this),
                                                "\n      ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "}"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 21
                                                }, this),
                                                "\n    ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "}"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1082,
                                                    columnNumber: 21
                                                }, this),
                                                "\n  ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "}"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 21
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "json-punctuation",
                                                    children: "}"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                            lineNumber: 1052,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mcp-json-helper-conversion",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Command"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "npx"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1092,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1090,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Args"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "-y tdesign-mcp-server@latest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1096,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Env"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "API_KEY = your-key-here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1098,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "HTTP / SSE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "use url + headers instead of command / args"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                lineNumber: 1047,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 1021,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 773,
        columnNumber: 5
    }, this);
}
_s2(McpRow, "CeJv38CUGrpyDCkYcpK+/ja86FI=");
_c4 = McpRow;
/**
 * "Connect" / "Disconnect" panel for an HTTP/SSE MCP server.
 *
 * The OAuth flow is fully owned by the daemon — this component just kicks
 * it off (POST /api/mcp/oauth/start), opens the returned authorize URL in
 * a new tab, listens for the postMessage from the callback page, and
 * refreshes the local status badge. There's also a fallback poll every
 * 2 seconds while a connect is pending in case the callback page can't
 * reach back via postMessage (cross-origin tab opener edge cases).
 */ function McpOAuthControl({ serverId }) {
    _s3();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Holds the authorize URL while we are waiting on the user to complete
    // OAuth in their browser. Surfaced as a fallback `<a>` so the user can
    // re-open the tab if they accidentally closed it (or if the system
    // browser ate the popup-open call without giving us feedback).
    const [pendingAuthUrl, setPendingAuthUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pollTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refresh = async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMcpOAuthStatus"])(serverId);
        if (data) setStatus(data);
        return data;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "McpOAuthControl.useEffect": ()=>{
            void refresh();
        }
    }["McpOAuthControl.useEffect"], [
        serverId
    ]);
    // Listen for the postMessage that the callback HTML page emits when the
    // OAuth flow completes. We accept messages from any origin because the
    // callback page is served by THIS daemon, but we still validate the
    // payload shape before reacting to it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "McpOAuthControl.useEffect": ()=>{
            function onMessage(ev) {
                const data = ev.data;
                if (!data || typeof data !== 'object') return;
                if (data.type !== 'mcp-oauth') return;
                if (data.serverId && data.serverId !== serverId) return;
                if (data.ok) {
                    setError(null);
                    setPendingAuthUrl(null);
                    void refresh();
                } else if (typeof data.message === 'string') {
                    setError(data.message);
                }
                setBusy('idle');
                stopPoll();
            }
            window.addEventListener('message', onMessage);
            let bc = null;
            if (typeof BroadcastChannel !== 'undefined') {
                bc = new BroadcastChannel('open-design-mcp-oauth');
                bc.onmessage = ({
                    "McpOAuthControl.useEffect": (ev)=>onMessage(ev)
                })["McpOAuthControl.useEffect"];
            }
            return ({
                "McpOAuthControl.useEffect": ()=>{
                    window.removeEventListener('message', onMessage);
                    if (bc) bc.close();
                    stopPoll();
                }
            })["McpOAuthControl.useEffect"];
        }
    }["McpOAuthControl.useEffect"], [
        serverId
    ]);
    function stopPoll() {
        if (pollTimer.current) {
            clearInterval(pollTimer.current);
            pollTimer.current = null;
        }
    }
    function startPoll() {
        stopPoll();
        let elapsed = 0;
        pollTimer.current = setInterval(()=>{
            elapsed += 2000;
            void (async ()=>{
                const data = await refresh();
                // Auto-stop when the daemon reports connected — handles the
                // Electron / system-browser case where postMessage can never
                // reach back across processes, so polling IS the delivery
                // channel for "auth completed" events.
                if (data?.connected) {
                    setBusy('idle');
                    setError(null);
                    setPendingAuthUrl(null);
                    stopPoll();
                }
            })();
            // Top out at 5 minutes — same as the daemon-side state cache TTL.
            if (elapsed >= 5 * 60 * 1000) stopPoll();
        }, 2000);
    }
    const onConnect = async ()=>{
        setError(null);
        setPendingAuthUrl(null);
        setBusy('starting');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startMcpOAuth"])(serverId);
        if (!result.ok) {
            setBusy('idle');
            setError(result.message);
            return;
        }
        setBusy('awaiting');
        setPendingAuthUrl(result.response.authorizeUrl);
        startPoll();
        // Best-effort: try to open the tab automatically. We deliberately do
        // NOT treat a null return value as failure — Electron's
        // setWindowOpenHandler always returns deny (so window.open returns
        // null) but actually invokes shell.openExternal under the hood, so
        // the URL DID open in the system browser. The fallback link below
        // covers the rare case where neither path actually opens a tab.
        try {
            window.open(result.response.authorizeUrl, '_blank', 'noopener=no,noreferrer=no');
        } catch  {
        // ignore — fallback anchor is always rendered while pending
        }
    };
    // Manual fallback for the user to push when they've completed auth in
    // another tab/window but the postMessage handshake didn't fire (closed
    // opener tab, cross-origin Electron BrowserWindow, etc.).
    const onRefreshStatus = async ()=>{
        setBusy('refreshing');
        const data = await refresh();
        setBusy('idle');
        if (data?.connected) {
            setError(null);
            setPendingAuthUrl(null);
            stopPoll();
        } else if (busy === 'awaiting' || pendingAuthUrl) {
            // Still pending — keep the awaiting indicator visible so the user
            // knows we're still listening for the callback.
            setBusy('awaiting');
        }
    };
    const onCancelPending = ()=>{
        setPendingAuthUrl(null);
        setBusy('idle');
        setError(null);
        stopPoll();
    };
    const onDisconnect = async ()=>{
        setBusy('disconnecting');
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectMcpOAuth"])(serverId);
        setBusy('idle');
        if (ok) {
            setError(null);
            setPendingAuthUrl(null);
            setStatus({
                connected: false
            });
        } else {
            setError('Disconnect failed. Check daemon logs.');
        }
    };
    const connected = Boolean(status?.connected);
    const expiresLabel = status?.expiresAt && status.expiresAt > 0 ? new Date(status.expiresAt).toLocaleString() : null;
    const isAwaiting = busy === 'awaiting' || Boolean(pendingAuthUrl) && !connected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mcp-oauth-control${connected ? ' connected' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-oauth-status",
                "aria-live": "polite",
                children: connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-oauth-dot mcp-oauth-dot-ok",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Connected."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1292,
                                    columnNumber: 15
                                }, this),
                                ' ',
                                expiresLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hint",
                                    children: [
                                        "Token expires ",
                                        expiresLabel,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hint",
                                    children: "Non-expiring token."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1291,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : isAwaiting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-oauth-dot mcp-oauth-dot-pending",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1302,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Waiting for authorization…"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1304,
                                    columnNumber: 15
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hint",
                                    children: "Approve in the browser tab that opened. We'll catch the callback automatically — or click Refresh below if you completed it already."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1305,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1303,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mcp-oauth-dot",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Not connected."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1316,
                                    columnNumber: 15
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hint",
                                    children: "Click Connect to grant Open Design access via the provider's OAuth flow."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                                    lineNumber: 1317,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1315,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-oauth-actions",
                children: connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "primary",
                            onClick: onConnect,
                            disabled: busy !== 'idle' && busy !== 'refreshing',
                            title: "Reauthenticate (replaces the existing token)",
                            children: busy === 'starting' || busy === 'awaiting' ? 'Connecting…' : 'Reconnect'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onRefreshStatus,
                            disabled: busy !== 'idle' && busy !== 'refreshing',
                            title: "Re-check token status against the daemon",
                            children: busy === 'refreshing' ? 'Checking…' : 'Refresh'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1337,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onDisconnect,
                            disabled: busy !== 'idle' && busy !== 'refreshing',
                            children: busy === 'disconnecting' ? 'Disconnecting…' : 'Disconnect'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1345,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : isAwaiting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "primary",
                            onClick: onRefreshStatus,
                            disabled: busy === 'refreshing',
                            title: "I've completed authorization — check connection status now",
                            children: busy === 'refreshing' ? 'Checking…' : 'I\u2019ve approved — Refresh'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancelPending,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1364,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "primary",
                    onClick: onConnect,
                    disabled: busy !== 'idle',
                    children: busy === 'starting' ? 'Starting…' : 'Connect'
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 1369,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1325,
                columnNumber: 7
            }, this),
            pendingAuthUrl && !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-oauth-fallback",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hint",
                    children: [
                        "Browser didn't open?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: pendingAuthUrl,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: "md-link",
                            children: "Open authorization page"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                            lineNumber: 1384,
                            columnNumber: 13
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                    lineNumber: 1382,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1381,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcp-oauth-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1397,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 1286,
        columnNumber: 5
    }, this);
}
_s3(McpOAuthControl, "RFFUXJxAy/rSG3P5X38Ane5+4YY=");
_c5 = McpOAuthControl;
/**
 * Renders a compact two-line banner showing which installed CLI agents
 * receive the user's external MCP servers at spawn time and which do not.
 * The truth source is the daemon `/api/agents` payload — every runtime def
 * carries an `externalMcpInjection` discriminator (one of
 * `claude-mcp-json` / `acp-merge` / `opencode-env-content`, or undefined
 * when no native injection is wired yet).
 *
 * The banner replaces the previous silent-failure UX from issue #2142:
 * users were configuring servers under OpenCode / Codex / Gemini and
 * never learning the daemon never forwarded them to the agent process.
 * Rendered above the picker so it is the first thing the user reads.
 */ function McpAgentSupportBanner({ agents }) {
    _s4();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    // Empty payload = either still loading or daemon unreachable. Either
    // way, render nothing — the error banner below already covers the
    // "daemon unreachable" path and we don't want to flash an empty hint
    // during the initial fetch.
    if (agents.length === 0) return null;
    // `/api/agents` returns every runtime def the daemon knows about,
    // including CLIs the user hasn't installed (those carry
    // `available: false`). Splitting the full catalog into "Forwarded to /
    // Not forwarded to" would mention adapters the user can't even launch,
    // which is misleading. Scope the banner to installed CLIs only.
    const installed = agents.filter((a)=>a.available);
    if (installed.length === 0) return null;
    const supported = installed.filter((a)=>typeof a.externalMcpInjection === 'string');
    const unsupported = installed.filter((a)=>!a.externalMcpInjection);
    if (supported.length === 0 && unsupported.length === 0) return null;
    // ACP adapters (Hermes / Kimi / Kilo / Kiro / Vibe / Devin) currently
    // accept stdio MCP servers only — `buildAcpMcpServers()` in
    // `apps/daemon/src/mcp-config.ts` filters to `transport === 'stdio'`
    // because the ACP `mcpServers` descriptor itself has no slot for
    // HTTP / SSE entries. Tag those runtimes inline so the banner does
    // not silently claim full forwarding for HTTP MCP servers, which
    // would re-introduce the very silent-failure UX we are removing.
    const renderNames = (list)=>list.slice().sort((a, b)=>a.name.localeCompare(b.name)).map((a)=>a.externalMcpInjection === 'acp-merge' ? `${a.name} (stdio only)` : a.name).join(' · ');
    const hasAcpSupported = supported.some((a)=>a.externalMcpInjection === 'acp-merge');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mcp-agent-support",
        children: [
            supported.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint mcp-agent-support-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: t('mcpClient.forwardedToLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 1460,
                        columnNumber: 11
                    }, this),
                    " ",
                    renderNames(supported),
                    ".",
                    hasAcpSupported ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            " ",
                            t('mcpClient.forwardedAcpNote')
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1459,
                columnNumber: 9
            }, this) : null,
            unsupported.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint mcp-agent-support-line mcp-agent-support-unsupported",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: t('mcpClient.notForwardedToLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                        lineNumber: 1466,
                        columnNumber: 11
                    }, this),
                    " ",
                    renderNames(unsupported),
                    ". ",
                    t('mcpClient.notForwardedNote')
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
                lineNumber: 1465,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/McpClientSection.tsx",
        lineNumber: 1457,
        columnNumber: 5
    }, this);
}
_s4(McpAgentSupportBanner, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c6 = McpAgentSupportBanner;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "McpClientSection$forwardRef");
__turbopack_context__.k.register(_c1, "McpClientSection");
__turbopack_context__.k.register(_c2, "PickerPanel");
__turbopack_context__.k.register(_c3, "PickerCard");
__turbopack_context__.k.register(_c4, "McpRow");
__turbopack_context__.k.register(_c5, "McpOAuthControl");
__turbopack_context__.k.register(_c6, "McpAgentSupportBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_McpClientSection_tsx_01aejdg._.js.map