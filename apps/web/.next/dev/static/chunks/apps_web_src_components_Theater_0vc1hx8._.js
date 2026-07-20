(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/Theater/state/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialState",
    ()=>initialState,
    "reduce",
    ()=>reduce
]);
const initialState = {
    phase: 'idle'
};
function blankPanelist() {
    return {
        dims: [],
        mustFixes: []
    };
}
/**
 * Look up an existing round by number, or seed a new one at the end of the
 * list. Panelists arrive interleaved with `round_end`, so we can't assume the
 * round we want is always at `rounds[rounds.length - 1]` (a stray late event
 * from a previous round would otherwise corrupt the in-flight round).
 */ function withRound(rounds, n, mutate) {
    const idx = rounds.findIndex((r)=>r.n === n);
    if (idx === -1) {
        const seeded = {
            n,
            mustFix: 0,
            panelists: {}
        };
        mutate(seeded);
        return [
            ...rounds,
            seeded
        ].sort((a, b)=>a.n - b.n);
    }
    const next = rounds.slice();
    const cloned = {
        ...next[idx],
        panelists: {
            ...next[idx].panelists
        }
    };
    mutate(cloned);
    next[idx] = cloned;
    return next;
}
function ensurePanelist(round, role) {
    const current = round.panelists[role] ?? blankPanelist();
    const cloned = {
        dims: current.dims.slice(),
        mustFixes: current.mustFixes.slice(),
        score: current.score
    };
    round.panelists[role] = cloned;
    return cloned;
}
function reduce(state, action) {
    // Host-dispatched reset (project change, enabled flip, transcript
    // swap) always lifts us back to idle so a stale run from a prior
    // project/transcript cannot bleed into the new context. Lefarcen +
    // Siri-Ray + codex P2 on PR #1314.
    if (action.type === '__reset__') {
        return state.phase === 'idle' ? state : initialState;
    }
    // `run_started` is always accepted: from idle it boots a new run, and
    // mid-stream it discards any prior state and reboots cleanly (the daemon
    // does not multiplex two runs onto one SSE channel, so this only fires on
    // an intentional rerun).
    if (action.type === 'run_started') {
        const config = {
            cast: action.cast.slice(),
            maxRounds: action.maxRounds,
            threshold: action.threshold,
            scale: action.scale,
            protocolVersion: action.protocolVersion
        };
        return {
            phase: 'running',
            runId: action.runId,
            config,
            rounds: [],
            activeRound: 1,
            activePanelist: null,
            warnings: []
        };
    }
    if (state.phase === 'idle') return state;
    if (state.runId !== action.runId) return state;
    // Terminal phases are sticky except for `run_started` (handled above) and
    // `parser_warning`, which is informational and can land late.
    if (state.phase === 'shipped' || state.phase === 'degraded' || state.phase === 'interrupted' || state.phase === 'failed') {
        if (action.type === 'parser_warning') {
            return {
                ...state,
                warnings: [
                    ...state.warnings,
                    {
                        kind: action.kind,
                        position: action.position
                    }
                ]
            };
        }
        return state;
    }
    switch(action.type){
        case 'panelist_open':
            {
                // Materialize the round + an empty panelist view so TheaterStage
                // can render the in-progress lane the instant the tag opens
                // (lefarcen + Siri-Ray P2 on PR #1314): without this, a stream
                // that emits only `panelist_open` after `run_started` would
                // leave `rounds = []` and the UI would render no current
                // round until a later `panelist_dim` arrived.
                const rounds = withRound(state.rounds, action.round, (round)=>{
                    ensurePanelist(round, action.role);
                });
                return {
                    ...state,
                    rounds,
                    activePanelist: action.role,
                    activeRound: action.round
                };
            }
        case 'panelist_dim':
            {
                const rounds = withRound(state.rounds, action.round, (round)=>{
                    const panelist = ensurePanelist(round, action.role);
                    panelist.dims.push({
                        name: action.dimName,
                        score: action.dimScore,
                        note: action.dimNote
                    });
                });
                return {
                    ...state,
                    rounds
                };
            }
        case 'panelist_must_fix':
            {
                const rounds = withRound(state.rounds, action.round, (round)=>{
                    const panelist = ensurePanelist(round, action.role);
                    panelist.mustFixes.push(action.text);
                    round.mustFix += 1;
                });
                return {
                    ...state,
                    rounds
                };
            }
        case 'panelist_close':
            {
                const rounds = withRound(state.rounds, action.round, (round)=>{
                    const panelist = ensurePanelist(round, action.role);
                    panelist.score = action.score;
                });
                // Closing a panelist clears the active highlight; the next `panelist_open`
                // will set it again.
                return {
                    ...state,
                    rounds,
                    activePanelist: null
                };
            }
        case 'round_end':
            {
                const rounds = withRound(state.rounds, action.round, (round)=>{
                    round.composite = action.composite;
                    round.decision = action.decision;
                    round.decisionReason = action.reason;
                });
                // After a `continue` decision the next round is implicitly active. After
                // a `ship` the orchestrator will follow with `ship`, so leaving
                // `activeRound` pointing at the same round is fine — the terminal
                // transition will overwrite the state anyway.
                const nextActive = action.decision === 'continue' ? action.round + 1 : action.round;
                return {
                    ...state,
                    rounds,
                    activeRound: nextActive,
                    activePanelist: null
                };
            }
        case 'ship':
            return {
                phase: 'shipped',
                runId: state.runId,
                config: state.config,
                rounds: state.rounds,
                warnings: state.warnings,
                final: {
                    composite: action.composite,
                    round: action.round,
                    status: action.status,
                    artifactRef: action.artifactRef,
                    summary: action.summary
                }
            };
        case 'degraded':
            return {
                phase: 'degraded',
                runId: state.runId,
                config: state.config,
                rounds: state.rounds,
                warnings: state.warnings,
                degraded: {
                    reason: action.reason,
                    adapter: action.adapter
                }
            };
        case 'interrupted':
            return {
                phase: 'interrupted',
                runId: state.runId,
                config: state.config,
                rounds: state.rounds,
                warnings: state.warnings,
                bestRound: action.bestRound,
                composite: action.composite
            };
        case 'failed':
            return {
                phase: 'failed',
                runId: state.runId,
                config: state.config,
                rounds: state.rounds,
                warnings: state.warnings,
                cause: action.cause
            };
        case 'parser_warning':
            return {
                ...state,
                warnings: [
                    ...state.warnings,
                    {
                        kind: action.kind,
                        position: action.position
                    }
                ]
            };
        default:
            {
                const _exhaustive = action;
                void _exhaustive;
                return state;
            }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/state/sse.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCritiqueEventsConnection",
    ()=>createCritiqueEventsConnection,
    "critiqueEventsUrl",
    ()=>critiqueEventsUrl,
    "sseToPanelEvent",
    ()=>sseToPanelEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$critique$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/critique.mjs [app-client] (ecmascript)");
;
const DEFAULT_INITIAL_BACKOFF = 1000;
const DEFAULT_MAX_BACKOFF = 30_000;
function critiqueEventsUrl(projectId) {
    return `/api/projects/${encodeURIComponent(projectId)}/events`;
}
function sseToPanelEvent(eventName, data) {
    if (data === null || typeof data !== 'object') return null;
    const type = eventName.slice('critique.'.length);
    const candidate = {
        ...data,
        type
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$critique$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPanelEvent"])(candidate) ? candidate : null;
}
function createCritiqueEventsConnection(projectId, onEvent, options = {}) {
    const Ctor = options.EventSourceCtor ?? (typeof EventSource === 'undefined' ? null : EventSource);
    if (!Ctor) return {
        close () {}
    };
    const initialBackoff = options.initialBackoffMs ?? DEFAULT_INITIAL_BACKOFF;
    const maxBackoff = options.maxBackoffMs ?? DEFAULT_MAX_BACKOFF;
    const setT = options.setTimeoutFn ?? setTimeout;
    const clearT = options.clearTimeoutFn ?? clearTimeout;
    let cancelled = false;
    let backoff = initialBackoff;
    let source = null;
    let reconnectTimer = null;
    const handleCritiqueFrame = (eventName)=>(raw)=>{
            try {
                const parsed = JSON.parse(raw.data);
                const action = sseToPanelEvent(eventName, parsed);
                if (action) onEvent(action);
            } catch (err) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn(`[critique-events] malformed payload on ${eventName}`, err);
                }
            }
        };
    const connect = ()=>{
        if (cancelled) return;
        const es = new Ctor(critiqueEventsUrl(projectId));
        source = es;
        es.addEventListener('ready', ()=>{
            backoff = initialBackoff;
        });
        for (const name of __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$critique$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRITIQUE_SSE_EVENT_NAMES"]){
            es.addEventListener(name, handleCritiqueFrame(name));
        }
        es.addEventListener('error', ()=>{
            if (cancelled) return;
            es.close();
            if (source === es) source = null;
            const delay = backoff;
            backoff = Math.min(backoff * 2, maxBackoff);
            reconnectTimer = setT(connect, delay);
        });
    };
    connect();
    return {
        close () {
            cancelled = true;
            if (reconnectTimer) clearT(reconnectTimer);
            if (source) source.close();
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/hooks/useCritiqueStream.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCritiqueStream",
    ()=>useCritiqueStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/state/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/state/sse.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useCritiqueStream(projectId, enabled, options = {}) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialState"]);
    const dispatchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(dispatch);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueStream.useEffect": ()=>{
            dispatchRef.current = dispatch;
        }
    }["useCritiqueStream.useEffect"], [
        dispatch
    ]);
    const factory = options.connectionFactory ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCritiqueEventsConnection"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueStream.useEffect": ()=>{
            // Clear any state from the previous project / enabled session
            // before we decide whether to open a new connection. Without this,
            // a workspace that switches from project A (which already streamed
            // a critique) to project B would keep rendering project A's
            // Theater state until B's run_started arrived, and a flip from
            // enabled=true to enabled=false would leave the in-flight run
            // visible after the connection had been torn down (lefarcen +
            // Siri-Ray + codex P2 on PR #1314). The reducer's reset handler
            // is a no-op when state is already idle, so this is cheap on
            // the common path.
            dispatchRef.current({
                type: '__reset__'
            });
            if (!enabled || !projectId) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const conn = factory(projectId, {
                "useCritiqueStream.useEffect.conn": (action)=>dispatchRef.current(action)
            }["useCritiqueStream.useEffect.conn"], {
                EventSourceCtor: options.EventSourceCtor,
                initialBackoffMs: options.initialBackoffMs,
                maxBackoffMs: options.maxBackoffMs,
                setTimeoutFn: options.setTimeoutFn,
                clearTimeoutFn: options.clearTimeoutFn
            });
            return ({
                "useCritiqueStream.useEffect": ()=>conn.close()
            })["useCritiqueStream.useEffect"];
        // factory identity is intentionally captured at mount; rest are the
        // configurable knobs a parent might tweak.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useCritiqueStream.useEffect"], [
        projectId,
        enabled,
        options.EventSourceCtor,
        options.initialBackoffMs,
        options.maxBackoffMs
    ]);
    return {
        state,
        dispatch
    };
}
_s(useCritiqueStream, "EllKbsmn21R05kujtJTsBNBfuTc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/PanelistLane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelistLane",
    ()=>PanelistLane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
const ROLE_LABEL_KEY = {
    designer: 'critiqueTheater.roleDesigner',
    critic: 'critiqueTheater.roleCritic',
    brand: 'critiqueTheater.roleBrand',
    a11y: 'critiqueTheater.roleA11y',
    copy: 'critiqueTheater.roleCopy'
};
function PanelistLane({ role, rounds, activeRound, activePanelist, scale }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const label = t(ROLE_LABEL_KEY[role]);
    const totalMustFixes = rounds.reduce((acc, r)=>acc + (r.panelists[role]?.mustFixes.length ?? 0), 0);
    const isActive = activePanelist === role;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theater-lane",
        role: "group",
        "aria-label": label,
        "data-role": role,
        "data-active": isActive ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "theater-lane-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-lane-role",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    totalMustFixes > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-lane-mustfix",
                        children: t('critiqueTheater.mustFix', {
                            n: totalMustFixes
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "theater-lane-rounds",
                children: rounds.map((round)=>{
                    const view = round.panelists[role];
                    const score = view?.score;
                    const isCurrent = round.n === activeRound && isActive;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "theater-lane-round",
                        "data-state": typeof score === 'number' ? 'closed' : view ? 'open' : 'pending',
                        "data-current": isCurrent ? 'true' : 'false',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "theater-lane-round-n",
                                children: [
                                    "R",
                                    round.n
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "theater-lane-round-score",
                                children: typeof score === 'number' ? score.toFixed(1) : '·'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            view && view.dims.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "theater-lane-round-dims",
                                title: view.dims.map((d)=>`${d.name}: ${d.score.toFixed(1)}`).join(' · '),
                                "aria-hidden": true,
                                children: view.dims.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "theater-lane-round-dim",
                                        "data-meets-half": d.score >= scale / 2 ? 'true' : 'false'
                                    }, d.name, false, {
                                        fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                                        lineNumber: 92,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, round.n, true, {
                        fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/PanelistLane.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(PanelistLane, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = PanelistLane;
var _c;
__turbopack_context__.k.register(_c, "PanelistLane");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/ScoreTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreTicker",
    ()=>ScoreTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
function ScoreTicker({ rounds, threshold, scale }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const landed = rounds.filter((r)=>typeof r.composite === 'number');
    const latest = landed[landed.length - 1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theater-score-ticker",
        role: "status",
        "aria-label": t('critiqueTheater.composite'),
        "data-empty": landed.length === 0 ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theater-score-row",
                "aria-hidden": true,
                children: [
                    landed.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "theater-score-tick",
                            "data-meets-threshold": r.composite >= threshold ? 'true' : 'false',
                            style: {
                                height: `${Math.max(8, Math.round(r.composite / scale * 100))}%`
                            },
                            title: `R${r.n}: ${r.composite.toFixed(1)} / ${scale}`
                        }, r.n, false, {
                            fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-score-threshold",
                        style: {
                            bottom: `${Math.round(threshold / scale * 100)}%`
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theater-score-meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-score-label",
                        children: t('critiqueTheater.composite')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-score-value",
                        children: latest ? latest.composite.toFixed(1) : '—'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-score-threshold-label",
                        children: [
                            t('critiqueTheater.threshold'),
                            " ",
                            threshold.toFixed(1)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/ScoreTicker.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ScoreTicker, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = ScoreTicker;
var _c;
__turbopack_context__.k.register(_c, "ScoreTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/RoundDivider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundDivider",
    ()=>RoundDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
function RoundDivider({ round, total, composite, threshold, scale }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const landed = typeof composite === 'number';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theater-round-divider",
        role: "separator",
        "aria-label": t('critiqueTheater.roundLabel', {
            n: round,
            m: total
        }),
        "data-status": landed ? 'landed' : 'in-progress',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theater-round-label",
                children: t('critiqueTheater.roundLabel', {
                    n: round,
                    m: total
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/RoundDivider.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            landed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theater-round-score",
                "data-meets-threshold": composite >= threshold ? 'true' : 'false',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-round-score-value",
                        children: composite.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/RoundDivider.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-round-score-scale",
                        children: [
                            "/",
                            scale
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Theater/RoundDivider.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/RoundDivider.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/RoundDivider.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(RoundDivider, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = RoundDivider;
var _c;
__turbopack_context__.k.register(_c, "RoundDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/InterruptButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterruptButton",
    ()=>InterruptButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
function InterruptButton({ pending = false, done = false, onInterrupt }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterruptButton.useEffect": ()=>{
            if (done) return;
            const handler = {
                "InterruptButton.useEffect.handler": (evt)=>{
                    if (evt.key !== 'Escape') return;
                    if (pending) return;
                    // Lefarcen P2 on PR #1315: the previous revision fired the
                    // interrupt regardless of focus, so pressing Escape inside the
                    // prompt textarea, a search box, a select, or any
                    // contenteditable would cancel an in-flight critique by
                    // accident.
                    const target = evt.target;
                    if (target) {
                        const tag = target.tagName;
                        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
                        if (target.isContentEditable) return;
                        if (typeof target.closest === 'function' && target.closest('input, textarea, select, [contenteditable="true"]')) {
                            return;
                        }
                    }
                    // PerishCode P3 on PR #1315: the window-scope listener still
                    // collided with the very common "Esc to dismiss" pattern on
                    // modals, popovers, and dropdowns. If a `[role="dialog"]` (or
                    // any element with `aria-modal="true"`) is open elsewhere on
                    // the page, defer to that surface's own Esc handler instead of
                    // synthesizing an interrupt. The dialog can claim Esc by
                    // calling `event.stopPropagation()` (the more common path) or
                    // simply by being present when Esc fires (the safety net here).
                    // Events that originate inside `.theater-stage` always fire, so
                    // a Theater-internal Esc still works even when a transient
                    // surface is open elsewhere.
                    const insideTheater = target && typeof target.closest === 'function' && !!target.closest('.theater-stage');
                    if (!insideTheater) {
                        const openModal = document.querySelector('[role="dialog"]:not([aria-hidden="true"]), [aria-modal="true"]:not([aria-hidden="true"])');
                        if (openModal) return;
                    }
                    onInterrupt();
                }
            }["InterruptButton.useEffect.handler"];
            window.addEventListener('keydown', handler);
            return ({
                "InterruptButton.useEffect": ()=>window.removeEventListener('keydown', handler)
            })["InterruptButton.useEffect"];
        }
    }["InterruptButton.useEffect"], [
        pending,
        done,
        onInterrupt
    ]);
    if (done) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "theater-interrupt",
        onClick: onInterrupt,
        disabled: pending,
        "data-pending": pending ? 'true' : 'false',
        "aria-label": t('critiqueTheater.interrupt'),
        title: t('critiqueTheater.interrupt'),
        children: pending ? t('critiqueTheater.interrupting') : t('critiqueTheater.interrupt')
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/Theater/InterruptButton.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(InterruptButton, "ggo9hPgUyHJ7ctaV0kXoPAOPzBc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = InterruptButton;
var _c;
__turbopack_context__.k.register(_c, "InterruptButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TheaterCollapsed",
    ()=>TheaterCollapsed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
const SHIP_BADGE_KEY = {
    shipped: 'critiqueTheater.shippedBadge',
    below_threshold: 'critiqueTheater.belowThresholdBadge',
    timed_out: 'critiqueTheater.timedOutBadge',
    interrupted: 'critiqueTheater.interrupted'
};
function TheaterCollapsed({ state }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    if (state.phase === 'shipped') {
        const { final } = state;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "theater-collapsed",
            role: "status",
            "data-phase": "shipped",
            "data-ship-status": final.status,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "theater-collapsed-badge",
                    children: t(SHIP_BADGE_KEY[final.status])
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "theater-collapsed-summary",
                    children: t('critiqueTheater.shippedSummary', {
                        round: final.round,
                        composite: final.composite.toFixed(1)
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    if (state.phase === 'interrupted') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "theater-collapsed",
            role: "status",
            "data-phase": "interrupted",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "theater-collapsed-badge",
                    children: t('critiqueTheater.interrupted')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "theater-collapsed-summary",
                    children: t('critiqueTheater.interruptedSummary', {
                        round: state.bestRound,
                        composite: state.composite.toFixed(1)
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    // failed
    const failedReasonKey = (()=>{
        switch(state.cause){
            case 'cli_exit_nonzero':
                return 'critiqueTheater.failedReasonCliExit';
            case 'per_round_timeout':
                return 'critiqueTheater.failedReasonPerRoundTimeout';
            case 'total_timeout':
                return 'critiqueTheater.failedReasonTotalTimeout';
            case 'orchestrator_internal':
                return 'critiqueTheater.failedReasonOrchestrator';
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theater-collapsed",
        role: "status",
        "data-phase": "failed",
        "data-cause": state.cause,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theater-collapsed-badge",
                children: t('critiqueTheater.failedHeading')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theater-collapsed-summary",
                children: t(failedReasonKey)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(TheaterCollapsed, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = TheaterCollapsed;
var _c;
__turbopack_context__.k.register(_c, "TheaterCollapsed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/TheaterDegraded.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TheaterDegraded",
    ()=>TheaterDegraded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
const REASON_KEY = {
    malformed_block: 'critiqueTheater.degradedReasonMalformed',
    oversize_block: 'critiqueTheater.degradedReasonOversize',
    adapter_unsupported: 'critiqueTheater.degradedReasonAdapter',
    protocol_version_mismatch: 'critiqueTheater.degradedReasonProtocol',
    missing_artifact: 'critiqueTheater.degradedReasonMissingArtifact'
};
function TheaterDegraded({ reason, adapter }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    // Per-instance heading id so two chips on the same page (e.g. a
    // chat history that renders multiple completed runs) keep their
    // aria-labelledby references unambiguous. Lefarcen P3 on PR #1314.
    const headingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "theater-degraded",
        role: "status",
        "data-reason": reason,
        "aria-labelledby": headingId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: headingId,
                className: "theater-degraded-heading",
                children: t('critiqueTheater.degradedHeading')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterDegraded.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "theater-degraded-reason",
                children: t(REASON_KEY[reason], {
                    adapter
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterDegraded.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/TheaterDegraded.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(TheaterDegraded, "nBbznnOO7EEuK3+X23f+qgXaXe8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = TheaterDegraded;
var _c;
__turbopack_context__.k.register(_c, "TheaterDegraded");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/TheaterStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TheaterStage",
    ()=>TheaterStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$PanelistLane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/PanelistLane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$ScoreTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/ScoreTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$RoundDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/RoundDivider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$InterruptButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/InterruptButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterCollapsed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterDegraded$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterDegraded.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function TheaterStage({ state, onInterrupt, interruptPending = false }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    if (state.phase === 'idle') return null;
    if (state.phase === 'degraded') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterDegraded$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TheaterDegraded"], {
            reason: state.degraded.reason,
            adapter: state.degraded.adapter
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    if (state.phase === 'shipped' || state.phase === 'interrupted' || state.phase === 'failed') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterCollapsed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TheaterCollapsed"], {
            state: state
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, this);
    }
    const { config, rounds, activeRound, activePanelist } = state;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "theater-stage",
        role: "region",
        "aria-label": t('critiqueTheater.userFacingName'),
        "data-phase": "running",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "theater-stage-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "theater-stage-title",
                        children: t('critiqueTheater.userFacingName')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$InterruptButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterruptButton"], {
                        pending: interruptPending,
                        onInterrupt: onInterrupt
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$ScoreTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreTicker"], {
                rounds: rounds,
                threshold: config.threshold,
                scale: config.scale
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "theater-stage-rounds",
                "aria-label": t('critiqueTheater.consensus'),
                children: rounds.map((round)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "theater-stage-round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$RoundDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundDivider"], {
                            round: round.n,
                            total: config.maxRounds,
                            composite: round.composite,
                            threshold: config.threshold,
                            scale: config.scale
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, round.n, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theater-stage-lanes",
                children: config.cast.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$PanelistLane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelistLane"], {
                        role: role,
                        rounds: rounds,
                        activeRound: activeRound,
                        activePanelist: activePanelist,
                        scale: config.scale
                    }, role, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/TheaterStage.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(TheaterStage, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = TheaterStage;
var _c;
__turbopack_context__.k.register(_c, "TheaterStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/CritiqueTheaterMount.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CritiqueTheaterMount",
    ()=>CritiqueTheaterMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueStream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueStream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterStage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CritiqueTheaterMount({ projectId, enabled, connectionFactory, fetchInterrupt }) {
    _s();
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CritiqueTheaterMount.useMemo[options]": ()=>connectionFactory ? {
                connectionFactory
            } : {}
    }["CritiqueTheaterMount.useMemo[options]"], [
        connectionFactory
    ]);
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueStream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueStream"])(projectId, enabled, options);
    const [interruptPending, setInterruptPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset `interruptPending` whenever the runId changes so a fresh
    // run after a prior interrupt does not inherit a stuck button.
    // Codex P2 on PR #1315: the previous revision left `interruptPending`
    // true forever once clicked.
    const lastRunIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentRunId = state.phase === 'idle' ? null : state.runId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CritiqueTheaterMount.useEffect": ()=>{
            if (lastRunIdRef.current !== currentRunId) {
                lastRunIdRef.current = currentRunId;
                setInterruptPending(false);
            }
        }
    }["CritiqueTheaterMount.useEffect"], [
        currentRunId
    ]);
    const onInterrupt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CritiqueTheaterMount.useCallback[onInterrupt]": ()=>{
            if (interruptPending) return;
            if (state.phase !== 'running') return;
            if (!projectId) return;
            // Snapshot at click time. The fetch is async; by the time it resolves
            // a fresh run could have started and `state.runId` could refer to a
            // different run. The dispatch must carry the runId / round / composite
            // the user actually saw when they clicked, not whatever the SSE feed
            // advanced to in the meantime.
            const runId = state.runId;
            const { round: bestRound, composite } = bestRoundAndComposite(state);
            setInterruptPending(true);
            // Siri-Ray + lefarcen P1 on PR #1316: the prior revision dispatched
            // `interrupted` synchronously alongside the fetch, so a daemon that
            // returned 404 / 409 (endpoint not wired, run already terminal) still
            // moved the UI to the sticky `interrupted` phase and ignored every
            // real terminal event the daemon emitted later. The new flow waits
            // for the daemon ack: only on a successful response (HTTP 2xx) do we
            // mark the run interrupted locally. On rejection or non-2xx we clear
            // `interruptPending` so the user can retry, and the real SSE
            // terminal event the daemon emits later still wins.
            const fetcher = fetchInterrupt ?? ({
                "CritiqueTheaterMount.useCallback[onInterrupt]": (url, init)=>fetch(url, init)
            })["CritiqueTheaterMount.useCallback[onInterrupt]"];
            const url = `/api/projects/${encodeURIComponent(projectId)}/critique/${encodeURIComponent(runId)}/interrupt`;
            fetcher(url, {
                method: 'POST'
            }).then({
                "CritiqueTheaterMount.useCallback[onInterrupt]": (res)=>{
                    if (res.ok) {
                        dispatch({
                            type: 'interrupted',
                            runId,
                            bestRound,
                            composite
                        });
                        return;
                    }
                    setInterruptPending(false);
                    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                        // eslint-disable-next-line no-console
                        console.warn(`[critique-theater] interrupt rejected by daemon (HTTP ${res.status})`);
                    }
                }
            }["CritiqueTheaterMount.useCallback[onInterrupt]"]).catch({
                "CritiqueTheaterMount.useCallback[onInterrupt]": (err)=>{
                    setInterruptPending(false);
                    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                        // eslint-disable-next-line no-console
                        console.warn('[critique-theater] interrupt request failed', err);
                    }
                }
            }["CritiqueTheaterMount.useCallback[onInterrupt]"]);
        }
    }["CritiqueTheaterMount.useCallback[onInterrupt]"], [
        interruptPending,
        state,
        dispatch,
        projectId,
        fetchInterrupt
    ]);
    if (!enabled) return null;
    if (state.phase === 'idle') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TheaterStage"], {
        state: state,
        onInterrupt: onInterrupt,
        interruptPending: interruptPending
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/Theater/CritiqueTheaterMount.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(CritiqueTheaterMount, "m2ZyPIHZnFx+X9LWn6iPMdeFwYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueStream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueStream"]
    ];
});
_c = CritiqueTheaterMount;
/**
 * Single-pass helper returning the round number paired to the highest
 * composite seen so far. The earlier split (`bestRoundOf` walked rounds
 * top-down and stamped the round of the LAST closed entry; `bestCompositeOf`
 * found the MAX composite) could disagree on non-monotonic runs: round 1
 * at 8.5 followed by round 2 at 6.0 shipped `bestRound: 2, composite: 8.5`,
 * a pair that never existed (PerishCode P3 on PR #1315). Falls back to
 * `(activeRound, 0)` when no round has closed with a numeric composite,
 * which is the typical state when the user interrupts before the first
 * `round_end` event.
 */ function bestRoundAndComposite(state) {
    let bestRound = 0;
    let bestComposite = -Infinity;
    for (const r of state.rounds){
        if (typeof r.composite === 'number' && r.composite > bestComposite) {
            bestComposite = r.composite;
            bestRound = r.n;
        }
    }
    if (bestRound === 0) return {
        round: state.activeRound,
        composite: 0
    };
    return {
        round: bestRound,
        composite: bestComposite
    };
}
var _c;
__turbopack_context__.k.register(_c, "CritiqueTheaterMount");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/TheaterTranscript.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TheaterTranscript",
    ()=>TheaterTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$PanelistLane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/PanelistLane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$ScoreTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/ScoreTicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SPEED_OPTIONS = [
    {
        value: 'paused',
        key: 'critiqueTheater.replaySpeedPaused'
    },
    {
        value: 'instant',
        key: 'critiqueTheater.replaySpeedInstant'
    },
    {
        value: 'live',
        key: 'critiqueTheater.replaySpeedLive'
    },
    {
        value: {
            intervalMs: 250
        },
        key: 'critiqueTheater.replaySpeedFast'
    }
];
function speedKey(speed) {
    if (typeof speed === 'string') return speed;
    return `intervalMs:${speed.intervalMs}`;
}
function TheaterTranscript({ state, status, error, speed, onSpeedChange }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "theater-transcript",
            "data-status": "loading",
            "aria-busy": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "theater-transcript-loading",
                children: t('critiqueTheater.transcriptLoading')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    if (status === 'error') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "theater-transcript",
            "data-status": "error",
            role: "alert",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "theater-transcript-error",
                children: t('critiqueTheater.transcriptError', {
                    error: error ?? ''
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    if (state.phase === 'idle' && status !== 'playing') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "theater-transcript",
            "data-status": "empty",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "theater-transcript-empty",
                children: t('critiqueTheater.transcriptEmpty')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    const config = state.phase === 'idle' ? {
        cast: [],
        maxRounds: 3,
        threshold: 8,
        scale: 10,
        protocolVersion: 1
    } : state.config ?? {
        cast: [],
        maxRounds: 3,
        threshold: 8,
        scale: 10,
        protocolVersion: 1
    };
    const rounds = state.phase === 'idle' ? [] : state.rounds;
    const activeRound = state.phase === 'running' ? state.activeRound : config.maxRounds;
    const activePanelist = state.phase === 'running' ? state.activePanelist : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "theater-transcript",
        "data-status": status,
        "aria-label": t('critiqueTheater.replay'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "theater-transcript-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "theater-transcript-readonly",
                        children: t('critiqueTheater.readOnly')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "theater-transcript-speed-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "theater-transcript-speed-label-text",
                                children: t('critiqueTheater.replaySpeed')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "theater-transcript-speed",
                                value: speedKey(speed),
                                onChange: (e)=>{
                                    const next = SPEED_OPTIONS.find((opt)=>speedKey(opt.value) === e.target.value);
                                    if (next) onSpeedChange(next.value);
                                },
                                children: SPEED_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: speedKey(opt.value),
                                        children: t(opt.key)
                                    }, speedKey(opt.value), false, {
                                        fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$ScoreTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreTicker"], {
                rounds: rounds,
                threshold: config.threshold,
                scale: config.scale
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theater-transcript-lanes",
                children: config.cast.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$PanelistLane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelistLane"], {
                        role: role,
                        rounds: rounds,
                        activeRound: activeRound,
                        activePanelist: activePanelist,
                        scale: config.scale
                    }, role, false, {
                        fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Theater/TheaterTranscript.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(TheaterTranscript, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = TheaterTranscript;
var _c;
__turbopack_context__.k.register(_c, "TheaterTranscript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/hooks/useCritiqueReplay.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCritiqueReplay",
    ()=>useCritiqueReplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$critique$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/critique.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/state/reducer.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
function useCritiqueReplay(transcriptUrl, speed, options = {}) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$state$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialState"]);
    const [meta, setMeta] = useStableMeta();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dispatchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(dispatch);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueReplay.useEffect": ()=>{
            dispatchRef.current = dispatch;
        }
    }["useCritiqueReplay.useEffect"], [
        dispatch
    ]);
    // Playback cursor lives in a ref so pause -> resume picks up where the
    // last tick left off instead of replaying from the start. A fresh
    // transcript URL resets it to zero (see the parse effect below).
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Parse effect: own the fetch + parse. Runs only when the URL changes.
    // Stores the parsed events in component state so the pace effect can
    // react to them; cursor is reset because a new transcript is a new run.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueReplay.useEffect": ()=>{
            // Whenever the URL changes (including swap to null), lift the
            // reducer back to idle so a prior replay's terminal state cannot
            // bleed into the new transcript or the "no transcript" empty
            // state. Lefarcen + Siri-Ray + codex P2 on PR #1314: without this
            // reset, a finished replay → null URL would leave the previous
            // run's rounds visible while TheaterTranscript reported
            // status: 'idle'.
            dispatchRef.current({
                type: '__reset__'
            });
            if (!transcriptUrl) {
                setMeta({
                    status: 'idle',
                    error: null
                });
                setEvents(null);
                cursorRef.current = 0;
                return;
            }
            let cancelled = false;
            const fetcher = options.fetchTranscript ?? defaultFetch;
            const gunzip = options.gunzip ?? defaultGunzip;
            setMeta({
                status: 'loading',
                error: null
            });
            cursorRef.current = 0;
            setEvents(null);
            ({
                "useCritiqueReplay.useEffect": async ()=>{
                    let raw;
                    try {
                        const fetched = await fetcher(transcriptUrl);
                        if (cancelled) return;
                        if (typeof fetched === 'string') {
                            raw = fetched;
                        } else {
                            raw = transcriptUrl.endsWith('.gz') ? await gunzip(fetched) : new TextDecoder('utf-8').decode(fetched);
                        }
                    } catch (err) {
                        if (cancelled) return;
                        setMeta({
                            status: 'error',
                            error: err instanceof Error ? err.message : String(err)
                        });
                        return;
                    }
                    if (cancelled) return;
                    const parsed = parseTranscript(raw);
                    setEvents(parsed);
                }
            })["useCritiqueReplay.useEffect"]().catch({
                "useCritiqueReplay.useEffect": ()=>{
                // Already surfaced via setMeta inside the async block.
                }
            }["useCritiqueReplay.useEffect"]);
            return ({
                "useCritiqueReplay.useEffect": ()=>{
                    cancelled = true;
                }
            })["useCritiqueReplay.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useCritiqueReplay.useEffect"], [
        transcriptUrl
    ]);
    // Pace effect: react to both the parsed-events list AND speed changes.
    // Cleanup cancels any in-flight setTimeout, but the cursor ref survives
    // so toggling speed from `paused` to `instant` resumes from the current
    // position instead of restarting from zero.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueReplay.useEffect": ()=>{
            if (!events) return;
            if (events.length === 0) {
                setMeta({
                    status: 'done',
                    error: null
                });
                return;
            }
            if (cursorRef.current >= events.length) {
                setMeta({
                    status: 'done',
                    error: null
                });
                return;
            }
            if (speed === 'paused') {
                // Holding: surface a non-terminal status so the UI can distinguish
                // "fetched and ready" from "fetching" or "done". The reducer is
                // untouched; the user picks a non-paused speed to advance.
                setMeta({
                    status: 'playing',
                    error: null
                });
                return;
            }
            setMeta({
                status: 'playing',
                error: null
            });
            if (speed === 'instant') {
                while(cursorRef.current < events.length){
                    dispatchRef.current(events[cursorRef.current]);
                    cursorRef.current += 1;
                }
                setMeta({
                    status: 'done',
                    error: null
                });
                return;
            }
            const setT = options.setTimeoutFn ?? setTimeout;
            const clearT = options.clearTimeoutFn ?? clearTimeout;
            const timers = [];
            let cancelled = false;
            // `live` is reserved for recorded-cadence playback; until transcripts
            // carry per-event timestamps it behaves like a zero-delay tick.
            const baseDelay = speed === 'live' ? 0 : typeof speed === 'object' ? speed.intervalMs : 0;
            const step = {
                "useCritiqueReplay.useEffect.step": ()=>{
                    if (cancelled) return;
                    if (cursorRef.current >= events.length) {
                        setMeta({
                            status: 'done',
                            error: null
                        });
                        return;
                    }
                    dispatchRef.current(events[cursorRef.current]);
                    cursorRef.current += 1;
                    if (cursorRef.current < events.length) {
                        timers.push(setT(step, baseDelay));
                    } else {
                        setMeta({
                            status: 'done',
                            error: null
                        });
                    }
                }
            }["useCritiqueReplay.useEffect.step"];
            // First event fires synchronously so `playing` is visibly distinct
            // from the parse-effect's `loading`; subsequent events pace via the
            // timer seam.
            step();
            return ({
                "useCritiqueReplay.useEffect": ()=>{
                    cancelled = true;
                    for (const id of timers)clearT(id);
                }
            })["useCritiqueReplay.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useCritiqueReplay.useEffect"], [
        events,
        speed
    ]);
    return {
        state,
        dispatch,
        status: meta.status,
        error: meta.error
    };
}
_s(useCritiqueReplay, "V3CBSSzgGRG2/davbodAa+bjygA=", false, function() {
    return [
        useStableMeta
    ];
});
function useStableMeta() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        status: 'idle',
        error: null
    });
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useStableMeta.useReducer": (n)=>n + 1
    }["useStableMeta.useReducer"], 0);
    const set = (next)=>{
        if (ref.current.status === next.status && ref.current.error === next.error) return;
        ref.current = next;
        setTick();
    };
    return [
        ref.current,
        set
    ];
}
_s1(useStableMeta, "XIt80HcKrztZMp40IZct67BJftg=");
function parseTranscript(raw) {
    const out = [];
    for (const line of raw.split(/\r?\n/)){
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
            const parsed = JSON.parse(trimmed);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$critique$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPanelEvent"])(parsed)) out.push(parsed);
        } catch  {
        // Tolerate stray lines; the orchestrator writes one event per line so
        // a bad line is recoverable. Production loggers should record the
        // discard but the hook stays pure.
        }
    }
    return out;
}
async function defaultFetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`transcript fetch failed: ${res.status}`);
    return url.endsWith('.gz') ? await res.arrayBuffer() : await res.text();
}
async function defaultGunzip(buffer) {
    // DecompressionStream is available in Node 18+ and modern browsers.
    const ds = new globalThis.DecompressionStream('gzip');
    const stream = new Response(buffer).body.pipeThrough(ds);
    return await new Response(stream).text();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/hooks/useCritiqueTheaterEnabled.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setCritiqueTheaterEnabled",
    ()=>setCritiqueTheaterEnabled,
    "useCritiqueTheaterEnabled",
    ()=>useCritiqueTheaterEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = 'open-design:config';
const TOGGLE_EVENT = 'open-design:critique-theater-toggle';
function useCritiqueTheaterEnabled() {
    _s();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCritiqueTheaterEnabled.useState": ()=>readToggle()
    }["useCritiqueTheaterEnabled.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCritiqueTheaterEnabled.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const reload = {
                "useCritiqueTheaterEnabled.useEffect.reload": ()=>setEnabled(readToggle())
            }["useCritiqueTheaterEnabled.useEffect.reload"];
            const onStorage = {
                "useCritiqueTheaterEnabled.useEffect.onStorage": (evt)=>{
                    if (evt.key !== null && evt.key !== STORAGE_KEY) return;
                    reload();
                }
            }["useCritiqueTheaterEnabled.useEffect.onStorage"];
            const onCustom = {
                "useCritiqueTheaterEnabled.useEffect.onCustom": (evt)=>{
                    // Prefer the event's typed payload so a same-tab toggle still
                    // reflects in the UI even when localStorage is unwritable.
                    const detail = evt.detail;
                    if (detail && typeof detail.enabled === 'boolean') {
                        setEnabled(detail.enabled);
                        return;
                    }
                    // Malformed CustomEvent (no detail, or detail.enabled not
                    // boolean): degrade to the localStorage path.
                    reload();
                }
            }["useCritiqueTheaterEnabled.useEffect.onCustom"];
            window.addEventListener('storage', onStorage);
            window.addEventListener(TOGGLE_EVENT, onCustom);
            reload();
            return ({
                "useCritiqueTheaterEnabled.useEffect": ()=>{
                    window.removeEventListener('storage', onStorage);
                    window.removeEventListener(TOGGLE_EVENT, onCustom);
                }
            })["useCritiqueTheaterEnabled.useEffect"];
        }
    }["useCritiqueTheaterEnabled.useEffect"], []);
    return enabled;
}
_s(useCritiqueTheaterEnabled, "tcPkZ4m0NttQ34XB6aOb4/5MYjU=");
function setCritiqueTheaterEnabled(next, options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let parsed = {};
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const candidate = JSON.parse(raw);
            if (candidate && typeof candidate === 'object') {
                parsed = candidate;
            }
        }
    } catch  {
    /* fall through to fresh object */ }
    parsed.critiqueTheaterEnabled = next;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    } catch  {
    /* private mode / quota / disabled storage: the in-session event
       below still propagates to other mounts so the UI stays
       consistent for the rest of the session. */ }
    try {
        window.dispatchEvent(new CustomEvent(TOGGLE_EVENT, {
            detail: {
                enabled: next
            }
        }));
    } catch  {
    /* CustomEvent shim missing: single mount remains correct. */ }
    // Round-trip the override through the existing project-settings
    // endpoint so the daemon's spawn-time resolver picks it up on the
    // next generation. Read-merge-write rather than a bare patch:
    // `PATCH /api/projects/:id` replaces `metadata` wholesale (the
    // route only re-stamps the three immutable folder-import fields),
    // so sending only `{ critiqueTheaterEnabled }` would wipe `kind`,
    // `templateId`, `linkedDirs`, and any other field the rest of the
    // app reads. We GET the project first, overlay the toggle on the
    // returned metadata, then PATCH the merged object. PerishCode P2
    // on PR #1338.
    //
    // Failure handling:
    //   - GET fails → skip the PATCH entirely. We cannot construct a
    //     safe merged body without the current state, and a bare patch
    //     would wipe other metadata. The in-session CustomEvent fired
    //     above still keeps every mounted hook consistent; the next
    //     save retries the round-trip.
    //   - PATCH fails → log in dev. The in-session UI is already
    //     correct via the CustomEvent.
    //
    // Skipped silently when no projectId is provided (the bare hook
    // still works for integrators that drive a non-project surface).
    if (options.projectId) {
        const projectId = options.projectId;
        const fetcher = options.fetchProjectSettings ?? ((url, init)=>fetch(url, init));
        const projectUrl = `/api/projects/${encodeURIComponent(projectId)}`;
        (async ()=>{
            let existingMetadata = {};
            try {
                const getRes = await fetcher(projectUrl, {
                    method: 'GET'
                });
                if (!getRes.ok) {
                    throw new Error(`prefetch returned status ${getRes.status}`);
                }
                const body = await getRes.json();
                const meta = body?.project?.metadata;
                if (meta && typeof meta === 'object' && !Array.isArray(meta)) {
                    existingMetadata = meta;
                }
            } catch (err) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn('[critique-theater] project-settings prefetch failed; skipping PATCH to avoid clobbering metadata', err);
                }
                return;
            }
            try {
                await fetcher(projectUrl, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        metadata: {
                            ...existingMetadata,
                            critiqueTheaterEnabled: next
                        }
                    })
                });
            } catch (err) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn('[critique-theater] project-settings PATCH failed', err);
                }
            }
        })().catch(()=>{
        /* Already surfaced inside the async block. */ });
    }
}
function readToggle() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let raw;
    try {
        raw = window.localStorage.getItem(STORAGE_KEY);
    } catch  {
        return false;
    }
    if (!raw) return false;
    try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return false;
        return parsed.critiqueTheaterEnabled === true;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Theater/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Public surface of the Critique Theater component package
 * (Phase 8). Only what an external consumer like `ProjectWorkspace`
 * needs to mount the feature lives here. Internal helpers
 * (state/reducer.ts internals, sub-components like RoundDivider,
 * PanelistLane, ScoreTicker) are reachable directly from their own
 * paths when the Phase 9 wire-up needs them, but the barrel keeps
 * the canonical mount surface narrow so adding/removing internals
 * does not churn callers.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$CritiqueTheaterMount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/CritiqueTheaterMount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterStage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterCollapsed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterCollapsed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterDegraded$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterDegraded.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$TheaterTranscript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/TheaterTranscript.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$InterruptButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/InterruptButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueStream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueStream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueReplay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueReplay.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueTheaterEnabled.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_Theater_0vc1hx8._.js.map