(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/analytics/scrub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Single point of privacy scrubbing for outgoing PostHog events.
// Wired in via posthog-js's `before_send` hook so every autocapture,
// pageview, exception, web-vital, etc. passes through this function
// before reaching the network. Returning null drops the event.
//
// The masking rules here intentionally over-redact rather than rely on
// per-element `ph-no-capture` marks scattered across the codebase. A
// single function is easier to audit and harder to forget when a new
// sensitive surface ships.
__turbopack_context__.s([
    "scrubBeforeSend",
    ()=>scrubBeforeSend,
    "scrubExceptionList",
    ()=>scrubExceptionList,
    "scrubFilePath",
    ()=>scrubFilePath
]);
// Tags whose text content can carry user-typed values. PostHog autocapture
// does not capture input/textarea `value` properties by default, but it
// does capture `$el_text` (element.textContent) — for a <textarea> with
// typed content that becomes the prompt body. Strip eagerly.
const TEXT_BEARING_TAGS = new Set([
    'input',
    'textarea'
]);
function scrubElementsChain(elements) {
    return elements.map((el)=>{
        const tag = typeof el.tag_name === 'string' ? el.tag_name.toLowerCase() : '';
        const contentEditable = typeof el.attr__contenteditable === 'string' && el.attr__contenteditable !== 'false';
        const isPasswordInput = tag === 'input' && typeof el.attr__type === 'string' && el.attr__type.toLowerCase() === 'password';
        const shouldScrub = TEXT_BEARING_TAGS.has(tag) || contentEditable || isPasswordInput;
        if (!shouldScrub) return el;
        const cleaned = {
            ...el
        };
        delete cleaned.$el_text;
        delete cleaned.attr__value;
        delete cleaned.attr__placeholder;
        delete cleaned.attr__aria_label;
        delete cleaned.text;
        return cleaned;
    });
}
// Drop query-string and fragment from URLs in pageview / pageleave / nav
// events. Pathnames are kept (they're typically `/projects/<uuid>`,
// non-sensitive) but any `?q=…` we accidentally introduce in the future
// won't leak.
function scrubUrl(url) {
    if (typeof url !== 'string') return url;
    try {
        const parsed = new URL(url);
        return `${parsed.origin}${parsed.pathname}`;
    } catch  {
        return url;
    }
}
function scrubFilePath(value) {
    if (typeof value !== 'string') return value;
    // file:///abs/path/.../apps/web/src/foo.tsx → app://apps/web/src/foo.tsx
    // /Users/<user>/.../apps/web/src/foo.tsx    → app://apps/web/src/foo.tsx
    //
    // The prefix uses `[^()\n]*?` (non-greedy, no parens/newlines) so paths
    // that contain spaces — most notably the packaged macOS layout
    // `/Applications/Open Design.app/Contents/Resources/...` — get fully
    // rewritten instead of partially leaking the install directory. The
    // tail stops at whitespace or a closing paren so stack frames of shape
    // `at fn (file:///.../foo.tsx:1:2)` lose only the path portion.
    return value.replace(/(?:file:\/\/)?[^()\n]*?\/((?:apps|packages|tools)\/[^\s)]+)/g, 'app://$1');
}
function scrubExceptionList(list) {
    return list.map((entry)=>{
        const next = {
            ...entry
        };
        const stack = next.stacktrace;
        if (stack?.frames && Array.isArray(stack.frames)) {
            next.stacktrace = {
                ...stack,
                frames: stack.frames.map((frame)=>({
                        ...frame,
                        filename: scrubFilePath(frame.filename),
                        abs_path: scrubFilePath(frame.abs_path)
                    }))
            };
        }
        if (typeof next.mechanism === 'object' && next.mechanism !== null) {
            // Mechanism source URL can also be a file:// — same scrub.
            const mech = next.mechanism;
            if (typeof mech.source === 'string') {
                mech.source = scrubFilePath(mech.source);
            }
        }
        return next;
    });
}
// Some events we don't need at all; suppressing them keeps the volume
// below PostHog's free-tier cap and avoids capturing surfaces that don't
// add product insight.
const SUPPRESSED_EVENTS = new Set([
    // PostHog's $opt_in event records the act of opting in. We already
    // emit explicit consent via the toggle handler in App.tsx; the
    // duplicate is noise.
    '$opt_in'
]);
function scrubBeforeSend(cr) {
    if (!cr) return null;
    if (SUPPRESSED_EVENTS.has(cr.event)) return null;
    const props = cr.properties ?? {};
    // Autocapture / rageclick / dead-click carry $elements (legacy) or
    // $elements_chain (newer). Both shapes get the same scrub.
    const elementBearing = cr.event === '$autocapture' || cr.event === '$rageclick' || cr.event === '$dead_click' || cr.event === '$copy_autocapture';
    if (elementBearing) {
        const elements = props.$elements;
        if (Array.isArray(elements)) {
            props.$elements = scrubElementsChain(elements);
        }
    }
    // URL-bearing events.
    if (typeof props.$current_url === 'string') {
        props.$current_url = scrubUrl(props.$current_url);
    }
    if (typeof props.$pathname === 'string') {
    // Pathnames in this app are routing slugs (/projects/<uuid>) — keep
    // as-is. Query strings live on $current_url, not $pathname.
    }
    if (typeof props.$referrer === 'string') {
        props.$referrer = scrubUrl(props.$referrer);
    }
    // Exceptions: scrub file paths in stack frames.
    if (cr.event === '$exception') {
        const list = props.$exception_list;
        if (Array.isArray(list)) {
            props.$exception_list = scrubExceptionList(list);
        }
        if (typeof props.$exception_source === 'string') {
            props.$exception_source = scrubFilePath(props.$exception_source);
        }
    }
    return {
        ...cr,
        properties: props
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearExceptionTrackingContext",
    ()=>clearExceptionTrackingContext,
    "installErrorHandlers",
    ()=>installErrorHandlers,
    "patchExceptionTrackingAppVersion",
    ()=>patchExceptionTrackingAppVersion,
    "reportHandledException",
    ()=>reportHandledException,
    "reportSafetyEvent",
    ()=>reportSafetyEvent,
    "setExceptionTrackingContext",
    ()=>setExceptionTrackingContext
]);
// Direct-fetch safety telemetry transport.
//
// Why this exists alongside posthog-js's autocapture
// ---------------------------------------------------
// Two design constraints make posthog-js's normal capture path insufficient
// for safety / reliability telemetry:
//
//   1. **Consent gate.** `posthog.opt_out_capturing()` silences ALL captures.
//      Product policy is that *safety* telemetry — exceptions, white
//      screens, dropped chunks, long tasks, stuck runs — flows
//      unconditionally so we don't lose ground truth on stability when a
//      user opts out of general analytics. The user-facing copy in
//      Settings → Privacy must reflect this.
//
//   2. **Lazy-load window.** posthog-js is dynamically `import()`-ed only
//      after `/api/analytics/config` returns AND the user has consented.
//      Errors / metrics that fire during the first 1-2 seconds (React
//      hydration, early effects, route init) are lost. We hook the
//      relevant browser events synchronously at module load, before any
//      of that, and buffer until we have credentials.
//
// This module exposes two surfaces:
//
//   - `reportHandledException` / `installErrorHandlers` — emit shaped
//     `$exception` events (used directly + via `window.error` /
//     `unhandledrejection`).
//   - `reportSafetyEvent(eventName, properties)` — generic transport for
//     non-exception observability events (long tasks, white screens,
//     resource errors, boot timing, etc.) that need the same
//     consent-bypass + early-buffer guarantees.
//
// To avoid duplicate `$exception` events, `client.ts` sets
// `capture_exceptions: false` on the posthog-js init — this module is the
// single source of truth for browser exception capture.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/scrub.ts [app-client] (ecmascript)");
;
// Cap the buffer so a chain of early errors (e.g. infinite render loop
// before posthog-js loads) cannot grow indefinitely. 50 is enough to
// capture the burst that usually surrounds a real bug while keeping the
// memory footprint trivial.
const MAX_BUFFER_SIZE = 50;
// PostHog's exception ingestion requires a `platform` on each stack frame.
// Mirrors the value posthog-js stamps so our hand-built events pass the
// same server-side processing. See `buildExceptionList`.
const FRAME_PLATFORM = 'web:javascript';
let context = null;
const buffer = [];
let installed = false;
function setExceptionTrackingContext(next) {
    context = next;
    if (buffer.length === 0) return;
    const drain = buffer.splice(0, buffer.length);
    for (const item of drain){
        dispatch(item);
    }
}
function clearExceptionTrackingContext() {
    // Called when /api/analytics/config returns `key: null` (no build-time
    // POSTHOG_KEY, e.g. a fork build). The buffered events stay in memory
    // until the page unloads — no key, nowhere to send them, but also
    // nothing leaks.
    context = null;
}
function patchExceptionTrackingAppVersion(version) {
    if (!context || !version) return;
    context = {
        ...context,
        appVersion: version
    };
}
function installErrorHandlers() {
    if (installed) return;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    installed = true;
    window.addEventListener('error', (event)=>{
        captureException(event.error, event.message ?? 'Uncaught error', {
            filename: typeof event.filename === 'string' ? event.filename : undefined,
            lineno: typeof event.lineno === 'number' ? event.lineno : undefined,
            colno: typeof event.colno === 'number' ? event.colno : undefined
        });
    });
    window.addEventListener('unhandledrejection', (event)=>{
        const reason = event.reason;
        const fallback = typeof reason === 'string' ? reason : 'Unhandled promise rejection';
        captureException(reason, fallback);
    });
}
function reportHandledException(error, message) {
    captureException(error, message ?? defaultMessage(error), {
        handled: true
    });
}
// Generic "the fetch could not complete" wordings across engines. As an
// uncaught exception these carry no URL and no status, so they're
// uninformative on their own — but we only suppress them in the packaged
// runtime (see `isIgnorableNoise`), never the web app.
const FETCH_FAILURE_MESSAGES = new Set([
    'Failed to fetch',
    'Load failed',
    'NetworkError when attempting to fetch resource.'
]);
// A frame originates in packaged desktop app code when its (pre-scrub) path
// is either:
//   - served from the `od://` scheme — the packaged renderer, all platforms;
//   - a `file://` path inside the macOS app bundle, i.e. it contains
//     `.app/Contents/Resources` (source-mapped frames; scrub.ts rewrites
//     these for privacy — see `scrubFilePath`). We match the bundle marker
//     rather than a channel-specific app name so `Open Design Beta.app` /
//     `Open Design Preview.app` builds are covered too.
function isPackagedFramePath(path) {
    return path.startsWith('od://') || path.includes('.app/Contents/Resources');
}
// True when the exception originated in packaged desktop app code. We key off
// the stack origin rather than `window.location` so the decision is tied to
// where the failing call actually ran, and so it's deterministic to test.
function originatesInPackagedApp(list) {
    const stacktrace = list[0]?.stacktrace;
    const frames = stacktrace?.frames ?? [];
    return frames.some((frame)=>{
        const path = typeof frame.abs_path === 'string' ? frame.abs_path : frame.filename;
        return typeof path === 'string' && isPackagedFramePath(path);
    });
}
// Fetch failures are environmental noise ONLY in the packaged app, where the
// renderer constantly polls the local daemon and a momentary gap (daemon
// restart, boot race, navigation/unmount abort, offline blip) makes
// `Failed to fetch` ~90% of all captured exceptions — pure churn that buries
// real bugs. We scope the drop to that runtime deliberately: in a normal
// web context the very same TypeError can be the only signal of a broken
// `/api/*` deployment or a CORS/TLS regression, so it must stay captured.
function isIgnorableNoise(list) {
    const value = list[0]?.value;
    if (typeof value !== 'string' || !FETCH_FAILURE_MESSAGES.has(value)) return false;
    return originatesInPackagedApp(list);
}
function captureException(error, fallbackMessage, metadata = {}) {
    const list = buildExceptionList(error, fallbackMessage, metadata);
    if (isIgnorableNoise(list)) return;
    const scrubbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubExceptionList"])(list);
    const properties = {
        $exception_list: scrubbed,
        $exception_type: scrubbed[0]?.type,
        $exception_message: scrubbed[0]?.value,
        $exception_source: scrubFirstFrameSource(scrubbed),
        $current_url: scrubUrl(("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"),
        $insert_id: randomId(),
        capture_source: 'web/error-tracking',
        handled: metadata.handled === true
    };
    enqueue('$exception', properties);
}
function reportSafetyEvent(eventName, properties = {}) {
    const merged = {
        ...properties,
        $current_url: scrubUrl(("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"),
        $insert_id: randomId(),
        capture_source: 'web/error-tracking'
    };
    enqueue(eventName, merged);
}
function enqueue(eventName, properties) {
    const timestamp = new Date().toISOString();
    const item = {
        eventName,
        body: {
            properties
        },
        timestamp
    };
    if (context == null) {
        if (buffer.length >= MAX_BUFFER_SIZE) buffer.shift();
        buffer.push(item);
        return;
    }
    dispatch(item);
}
function dispatch(item) {
    if (context == null) return;
    const payload = {
        api_key: context.apiKey,
        event: item.eventName,
        distinct_id: context.distinctId,
        properties: {
            ...item.body.properties,
            $lib: 'web/error-tracking',
            ...context.telemetryEnv ? {
                env: context.telemetryEnv
            } : {},
            ...context.appVersion ? {
                app_version: context.appVersion,
                ui_version: context.appVersion
            } : {},
            ...context.sessionId ? {
                session_id: context.sessionId
            } : {}
        },
        timestamp: item.timestamp
    };
    // `keepalive` ensures the request survives an immediate window unload —
    // important for events that fire during navigation that are followed by
    // a route change a millisecond later.
    try {
        void fetch(`${context.host.replace(/\/+$/, '')}/i/v0/e/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload),
            keepalive: true,
            // No credentials — PostHog ingest uses the public `phc_` key as the
            // auth surface; cookies are irrelevant and sending them would just
            // add CORS preflight friction.
            credentials: 'omit'
        }).catch(()=>{
        // Swallow the async rejection too. The synchronous try/catch below
        // only guards against fetch throwing on a malformed argument; the
        // returned promise rejects separately when the beacon can't reach
        // PostHog (offline, ingest down). Left unhandled, that rejection is
        // itself scooped up by the `unhandledrejection` listener above and
        // re-reported as a `Failed to fetch` $exception — a self-amplifying
        // loop where our own telemetry transport manufactures telemetry.
        });
    } catch  {
    // best-effort: safety telemetry must never propagate
    }
}
function buildExceptionList(error, fallbackMessage, metadata) {
    const isError = error instanceof Error;
    const type = isError ? error.name : typeof error === 'string' ? 'Error' : 'NonError';
    const value = isError ? error.message : typeof error === 'string' ? error : fallbackMessage;
    const stack = isError && typeof error.stack === 'string' ? error.stack : '';
    // Stamp `platform` on every frame. PostHog's exception ingestion treats
    // it as a required field (it selects the symbolication / issue-grouping
    // strategy per frame); a frame without it fails the exceptions pipeline
    // with "missing field platform" and the whole event is dropped
    // server-side — which is why 100% of our hand-built `$exception` events
    // were failing to ingest. posthog-js stamps the same value on each frame;
    // we replicate it because client.ts sets `capture_exceptions: false` and
    // this module is the sole browser-exception transport.
    const frames = parseStack(stack, metadata).map((frame)=>({
            ...frame,
            platform: FRAME_PLATFORM
        }));
    return [
        {
            type,
            value,
            stacktrace: {
                type: 'raw',
                frames
            },
            mechanism: {
                type: metadata.handled === true ? 'handled' : 'generic',
                handled: metadata.handled === true
            }
        }
    ];
}
// Minimal stack parser. Covers V8 (`at Foo (url:1:2)` and `at url:1:2`)
// and the SpiderMonkey-style `Foo@url:1:2`. Lines we cannot parse are
// kept as a raw line so the report stays useful even without symbolicated
// frames.
const STACK_RE_V8 = /^\s*at\s+(?:(.+?)\s+\()?(.+?):(\d+):(\d+)\)?$/;
const STACK_RE_SPIDERMONKEY = /^(.*?)@(.+?):(\d+):(\d+)$/;
function parseStack(stack, metadata) {
    if (!stack) {
        if (metadata.filename) {
            return [
                {
                    function: '<anonymous>',
                    filename: metadata.filename,
                    abs_path: metadata.filename,
                    lineno: metadata.lineno ?? 0,
                    colno: metadata.colno ?? 0,
                    in_app: true
                }
            ];
        }
        return [];
    }
    const lines = stack.split('\n');
    // The first line is usually the message (e.g. "TypeError: foo is not a
    // function") rather than a frame — skip it when it doesn't start with
    // `at` or contain `@`.
    const frameLines = lines[0]?.match(/^\s*at\b|@/) ? lines : lines.slice(1);
    return frameLines.map((line)=>parseFrame(line)).filter((frame)=>frame != null);
}
function parseFrame(line) {
    const trimmed = line.trim();
    if (!trimmed) return null;
    const v8 = STACK_RE_V8.exec(trimmed);
    if (v8) {
        return {
            function: v8[1] ?? '<anonymous>',
            filename: v8[2],
            abs_path: v8[2],
            lineno: Number(v8[3]),
            colno: Number(v8[4]),
            in_app: true
        };
    }
    const sm = STACK_RE_SPIDERMONKEY.exec(trimmed);
    if (sm) {
        return {
            function: sm[1] || '<anonymous>',
            filename: sm[2],
            abs_path: sm[2],
            lineno: Number(sm[3]),
            colno: Number(sm[4]),
            in_app: true
        };
    }
    return {
        raw: trimmed,
        in_app: true
    };
}
function scrubFirstFrameSource(list) {
    const first = list[0];
    if (!first) return undefined;
    const stacktrace = first.stacktrace;
    const frame = stacktrace?.frames?.[0];
    if (frame == null || typeof frame.abs_path !== 'string') return undefined;
    // Already scrubbed by scrubExceptionList; just narrow the type.
    return frame.abs_path;
}
function scrubUrl(url) {
    try {
        const parsed = new URL(url);
        return `${parsed.origin}${parsed.pathname}`;
    } catch  {
        return url;
    }
}
function defaultMessage(error) {
    if (typeof error === 'string') return error;
    if (error instanceof Error) return error.message;
    return 'Unknown error';
}
function randomId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    // Fallback for older browsers / SSR — collision risk is negligible
    // because $insert_id only needs to dedupe within a single user-session
    // window on the PostHog ingest side.
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/analytics/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PostHog browser client wrapper. Lazy-loads posthog-js only after the
// daemon /api/analytics/config response confirms a key is present, so dev
// builds and forks impose zero runtime cost. All entry points are
// fire-and-forget: capture failures must never propagate to product code.
__turbopack_context__.s([
    "applyConsent",
    ()=>applyConsent,
    "applyIdentity",
    ()=>applyIdentity,
    "bootstrapExceptionTracking",
    ()=>bootstrapExceptionTracking,
    "capture",
    ()=>capture,
    "getAnalyticsClient",
    ()=>getAnalyticsClient,
    "getConfigureGlobals",
    ()=>getConfigureGlobals,
    "getResolvedAnonymousId",
    ()=>getResolvedAnonymousId,
    "getResolvedDeviceId",
    ()=>getResolvedDeviceId,
    "setAnalyticsUserId",
    ()=>setAnalyticsUserId,
    "setConfigureGlobals",
    ()=>setConfigureGlobals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/scrub.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
;
;
let client = null;
let initPromise = null;
let resolvedDeviceId = null;
// Latest configure-state triplet. Re-registered on the PostHog client as
// soon as it changes so every subsequent event inherits the current values.
let configureGlobals = {
    has_available_configure_cli: false,
    configure_type: 'unknown',
    configure_availability: 'unknown',
    runtime_type: 'none',
    cli_runnable: false,
    byok_runnable: false,
    amr_runnable: false
};
// Snapshot of the super-property payload sent on the most recent `loaded()`
// init. `reset()` clears posthog-js's persisted super-properties as well as
// the distinct_id, so privacy → metrics off → on, or a Delete-my-data
// rotation (applyIdentity()), would otherwise resume capture without
// `event_schema_version`, `device_id`, `session_id`, `locale`, or the
// configure-state globals. We restash this on init and re-register it
// after every reset()/identify() so every subsequent event keeps the
// v2 schema contract.
let lastRegisterPayload = null;
function getResolvedAnonymousId() {
    return resolvedDeviceId;
}
function getResolvedDeviceId() {
    return resolvedDeviceId;
}
function getConfigureGlobals() {
    return configureGlobals;
}
function setConfigureGlobals(next) {
    configureGlobals = {
        ...next
    };
    // Keep the cached register payload aligned so a future reset/identify
    // flow that calls `restoreSuperProperties()` uses the LATEST configure
    // state, not the stale snapshot captured during the initial `loaded()`.
    if (lastRegisterPayload) {
        lastRegisterPayload = {
            ...lastRegisterPayload,
            ...configureGlobals
        };
    }
    if (!client) return;
    try {
        client.register(configureGlobals);
    } catch  {
    // best-effort — capture should never throw out of this path.
    }
}
// AMR account id, registered as the `user_id` public param once sign-in
// state is known. This is the only cross-project join key between the main
// app's PostHog project and the AMR project (whose events carry the same
// id as `app_user_id`), so it must survive reset()/identify() flows the
// same way the configure globals do.
let registeredUserId = null;
function setAnalyticsUserId(userId) {
    if (registeredUserId === userId) return;
    registeredUserId = userId;
    if (lastRegisterPayload) {
        if (userId) {
            lastRegisterPayload = {
                ...lastRegisterPayload,
                user_id: userId
            };
        } else {
            const { user_id: _dropped, ...rest } = lastRegisterPayload;
            lastRegisterPayload = rest;
        }
    }
    if (!client) return;
    try {
        if (userId) {
            client.register({
                user_id: userId
            });
        } else {
            client.unregister('user_id');
        }
    } catch  {
    // best-effort — capture should never throw out of this path.
    }
}
// Fetches `/api/analytics/config` once and wires up the exception-tracking
// module's context — independent of consent state. The error tracker
// installs its `window.error` / `unhandledrejection` listeners at module
// load (see `error-tracking.ts`), but cannot dispatch buffered events
// until it has the PostHog `phc_` key + host + distinct_id. This bootstrap
// step provides those.
//
// Runs in parallel with — and unrelated to — `getAnalyticsClient` above.
// When the user has consented, both paths fetch the same endpoint once
// each; the duplicate fetch is cheap and avoids cross-coupling the
// (consent-gated) analytics init with the (always-on) error tracker.
let exceptionBootstrapPromise = null;
function bootstrapExceptionTracking(context) {
    if (exceptionBootstrapPromise) return exceptionBootstrapPromise;
    exceptionBootstrapPromise = (async ()=>{
        try {
            const res = await fetch('/api/analytics/config');
            if (!res.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clearExceptionTrackingContext"])();
                return;
            }
            const cfg = await res.json();
            if (!cfg.key || !cfg.host) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clearExceptionTrackingContext"])();
                return;
            }
            const telemetryEnv = cfg.env || 'unknown';
            const distinctId = typeof cfg.installationId === 'string' && cfg.installationId || context.anonymousId;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setExceptionTrackingContext"])({
                apiKey: cfg.key,
                host: cfg.host,
                distinctId,
                appVersion: context.appVersion,
                sessionId: context.sessionId,
                telemetryEnv
            });
        } catch  {
        // Network failure / endpoint unavailable — leave the buffer in
        // place so a future retry could still flush, but don't crash boot.
        }
    })();
    return exceptionBootstrapPromise;
}
async function getAnalyticsClient(context) {
    if (client) return client;
    if (initPromise) return initPromise;
    // PR #1428 reviewer (Siri-Ray): the first /api/analytics/config response
    // is cached forever if it resolves to null. On first launch before the
    // user accepts the privacy banner the daemon returns enabled=false, this
    // promise resolves null, and every later track() call returns the cached
    // null without re-fetching the now-enabled config. Clear initPromise
    // whenever the resolution is null so a subsequent setConsent(true) can
    // trigger a fresh init.
    const pending = (async ()=>{
        try {
            const res = await fetch('/api/analytics/config');
            if (!res.ok) return null;
            const cfg = await res.json();
            if (!cfg.enabled || !cfg.key || !cfg.host) return null;
            const telemetryEnv = cfg.env || 'unknown';
            const distinctId = typeof cfg.installationId === 'string' && cfg.installationId || context.anonymousId;
            resolvedDeviceId = distinctId;
            const mod = await __turbopack_context__.A("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript, async loader)");
            const posthog = mod.default;
            const cfgKey = cfg.key;
            const cfgHost = cfg.host;
            posthog.init(cfgKey, {
                api_host: cfg.host,
                // Identify by installationId when present so daemon-side captures
                // (which also key off installationId via the analytics context
                // header) land on the same person record. Falls back to the
                // locally-generated UUID for the legacy / pre-consent path.
                bootstrap: {
                    distinctID: distinctId
                },
                persistence: 'localStorage',
                // PostHog's default UA filter silently drops captures whose
                // user-agent matches its built-in bot list (HeadlessChrome,
                // various automation flags). The list also rejects some real users
                // — embedded webviews, fingerprinted browsers, e2e CI runs — which
                // is unacceptable for product analytics that needs to count every
                // session. We instead rely on the Privacy → "Share usage data"
                // toggle as the single consent gate and treat every UA equally.
                opt_out_useragent_filter: true,
                // --- Auto-capture layers --------------------------------------
                // Anonymous diagnostic features (click paths, page transitions,
                // web vitals, browser errors). The single Privacy → "Share
                // usage data" toggle gates ALL of these via posthog-js's global
                // opt_out_capturing() — see applyConsent() below and
                // AnalyticsProvider's setConsent wiring in App.tsx.
                autocapture: true,
                capture_pageview: 'history_change',
                capture_pageleave: 'if_capture_pageview',
                capture_dead_clicks: true,
                capture_performance: {
                    web_vitals: true,
                    network_timing: true
                },
                // Exception capture is owned by `apps/web/src/analytics/error-tracking.ts`,
                // which runs unconditionally — outside this consent gate, before
                // posthog-js loads, and via a direct ingest fetch. Letting posthog-js
                // also autocapture exceptions would only produce duplicates server-side
                // (the $insert_id dedupe runs but it's still wasted ingest cost).
                capture_exceptions: false,
                // --- Privacy defenses -----------------------------------------
                // 1. scrub.ts runs on every outgoing event and strips $el_text
                //    from input/textarea/contenteditable elements, removes
                //    query strings from URLs, and rewrites absolute filesystem
                //    paths in exception stack traces. Single audit point — new
                //    sensitive surfaces extend the rules there, not by
                //    sprinkling class names through the codebase.
                // 2. The chat composer textarea keeps a `ph-no-capture` class
                //    as defense in depth: PostHog won't even generate an event
                //    for clicks inside that subtree, so a future scrub regression
                //    can't leak prompt content. Only the most sensitive surface
                //    (prompt body) gets this treatment; everything else relies
                //    on scrub.ts.
                before_send: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$scrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubBeforeSend"],
                // --- Session replay (privacy-masked) --------------------------
                // Session replay captures the user's entire screen. For a tool
                // where prompts, generated artifacts, and provider API keys are
                // all visible in DOM, recording the raw screen would violate the
                // CSV's no-prompt-content rule. Rather than gate replay behind a
                // separate consent surface, we record only layout + interaction
                // and over-redact every content surface — the same
                // "redact-by-default, single audit point" philosophy scrub.ts
                // uses for events (see scrub.ts header). Replay stays gated by the
                // existing Privacy → "Share usage data" consent: posthog-js's
                // global opt_out_capturing() halts replay too (see applyConsent()).
                //
                // The three redaction layers, in order of how much they cover:
                //   1. maskTextSelector '*' masks EVERY text node into asterisks,
                //      so prompts, generated artifact text, provider/model names,
                //      project titles, and any future text surface never appear in
                //      a replay. A new sensitive surface is covered automatically.
                //   2. maskAllInputs masks every <input>/<textarea> value, so the
                //      prompt composer and BYOK provider-key fields are blanked
                //      even though only the composer carries `ph-no-capture`.
                //   3. blockSelector 'iframe' fully blocks every embedded frame.
                //      The artifact/preview FileViewer iframes (and plugin embeds)
                //      render generated HTML that can contain anything; rrweb would
                //      otherwise serialize same-origin/srcDoc frame DOM into the
                //      recording. They render as an inert placeholder instead.
                // `ph-no-capture` remains posthog-js's default replay block class,
                // so the composer subtree stays blocked as defense in depth.
                disable_session_recording: false,
                session_recording: {
                    maskAllInputs: true,
                    maskTextSelector: '*',
                    blockSelector: 'iframe',
                    // Don't reach into cross-origin frames either — belt and braces
                    // alongside blockSelector for the URL-load artifact iframe.
                    recordCrossOriginIframes: false
                },
                loaded: (instance)=>{
                    lastRegisterPayload = {
                        event_schema_version: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_SCHEMA_VERSION"],
                        env: telemetryEnv,
                        ui_version: context.appVersion,
                        app_version: context.appVersion,
                        client_type: context.clientType,
                        locale: context.locale,
                        session_id: context.sessionId,
                        // v2 rename: was `anonymous_id`. Value is unchanged — the same
                        // installationId / local-UUID fallback.
                        device_id: distinctId,
                        ...configureGlobals,
                        // AMR sign-in can resolve before consent-gated init finishes;
                        // fold the already-known account id into the first register.
                        ...registeredUserId ? {
                            user_id: registeredUserId
                        } : {}
                    };
                    instance.register(lastRegisterPayload);
                    // Re-bridge the error-tracking context once posthog-js is fully
                    // initialized. `bootstrapExceptionTracking` may have already
                    // wired this up at app boot via its own fetch; this duplicate
                    // assignment is harmless (same key/host) but ensures the most
                    // up-to-date appVersion / sessionId metadata is attached.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setExceptionTrackingContext"])({
                        apiKey: cfgKey,
                        host: cfgHost,
                        distinctId,
                        appVersion: context.appVersion,
                        sessionId: context.sessionId,
                        telemetryEnv
                    });
                }
            });
            client = posthog;
            return posthog;
        } catch  {
            // Network failure, missing endpoint, third-party fork without keys —
            // all collapse to the same no-op.
            return null;
        }
    })();
    initPromise = pending;
    // Clear the cache as soon as the result is null so a later opt-in retries.
    void pending.then((result)=>{
        if (!result) initPromise = null;
    });
    return pending;
}
function applyConsent(consentGranted) {
    if (!client) return;
    try {
        if (consentGranted) {
            client.opt_in_capturing();
            // If the user previously toggled metrics off in this session, the
            // earlier opt-out path called reset() and wiped the persisted
            // super-properties. opt_in_capturing() only flips the consent flag
            // and does not re-run init(), so without this restore the next
            // capture would emit no event_schema_version / device_id /
            // session_id / locale / configure-state. See PR #2285 review
            // 2026-05-20 04:35.
            restoreSuperProperties();
        } else {
            client.opt_out_capturing();
            client.reset();
            resolvedDeviceId = null;
        }
    } catch  {
    // best-effort — capture should never throw out of this path.
    }
}
function applyIdentity(installationId) {
    if (!client || !installationId) return;
    if (resolvedDeviceId === installationId) return;
    try {
        client.reset();
        client.identify(installationId);
        resolvedDeviceId = installationId;
        // reset() also clears the persisted super-properties from
        // posthog-js's localStorage cache. Re-register them with the new
        // distinct_id so the rest of this session keeps emitting v2-schema
        // events. See PR #2285 review 2026-05-20 04:35.
        restoreSuperProperties({
            device_id: installationId
        });
    } catch  {
    // best-effort — never propagate.
    }
}
// Push the cached super-property payload back onto the PostHog client. Used
// after reset()/identify() flows; takes an optional override patch so the
// caller can swap fields (e.g. a rotated device_id) without re-deriving the
// rest of the payload.
function restoreSuperProperties(patch) {
    if (!client || !lastRegisterPayload) return;
    const next = patch ? {
        ...lastRegisterPayload,
        ...patch
    } : lastRegisterPayload;
    lastRegisterPayload = next;
    try {
        client.register(next);
    } catch  {
    // best-effort.
    }
}
function capture(client, args) {
    if (!client) return;
    try {
        client.capture(args.event, {
            ...args.properties,
            event_id: args.insertId,
            // PostHog's official dedup key. The daemon mirrors result events with
            // the same $insert_id so duplicates from the dual-side capture pattern
            // get coalesced server-side.
            $insert_id: args.insertId,
            ...args.requestId ? {
                request_id: args.requestId
            } : {}
        });
    } catch  {
    // Swallow — analytics failures must not propagate.
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/analytics/identity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Browser-side identity bookkeeping for PostHog product analytics. Designed
// so it stays SSR-safe: every entry point guards window/localStorage access
// and falls back to a deterministic-enough fake id under jsdom and Next.js
// pre-render. The daemon mirrors these values via the x-od-analytics-*
// headers (see @open-design/contracts/analytics).
__turbopack_context__.s([
    "claimRunTurnIndex",
    ()=>claimRunTurnIndex,
    "detectClientType",
    ()=>detectClientType,
    "detectLaunchSource",
    ()=>detectLaunchSource,
    "getAnonymousId",
    ()=>getAnonymousId,
    "getSessionId",
    ()=>getSessionId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
;
const ANONYMOUS_ID_KEY = 'open-design:analytics.anonymous_id';
const SESSION_ID_KEY = 'open-design:analytics.session_id';
const RUN_TURN_INDEX_KEY = 'open-design:analytics.run_turn_index';
function randomUuid() {
    // Prefer the standard crypto.randomUUID — present in every modern browser
    // and Node 19+. The Math.random fallback is for jsdom builds that ship
    // without crypto.randomUUID and for very old browsers; it does not need
    // to be cryptographically strong, only unique-enough for a session id.
    const c = typeof globalThis !== 'undefined' ? globalThis.crypto : undefined;
    if (c?.randomUUID) return c.randomUUID();
    return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (ch)=>{
        const r = Math.random() * 16 | 0;
        const v = ch === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function getAnonymousId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const existing = window.localStorage.getItem(ANONYMOUS_ID_KEY);
        if (existing) return existing;
        const fresh = randomUuid();
        window.localStorage.setItem(ANONYMOUS_ID_KEY, fresh);
        return fresh;
    } catch  {
        // Privacy mode or quota — fall back to a per-load id; we'd rather lose
        // cross-session continuity than throw out of an analytics path.
        return randomUuid();
    }
}
function getSessionId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const existing = window.sessionStorage.getItem(SESSION_ID_KEY);
        if (existing) return existing;
        const fresh = randomUuid();
        window.sessionStorage.setItem(SESSION_ID_KEY, fresh);
        return fresh;
    } catch  {
        return randomUuid();
    }
}
function claimRunTurnIndex() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.sessionStorage.getItem(RUN_TURN_INDEX_KEY);
        const current = raw ? Number.parseInt(raw, 10) : 0;
        const turnIndex = Number.isFinite(current) && current >= 0 ? current : 0;
        window.sessionStorage.setItem(RUN_TURN_INDEX_KEY, String(turnIndex + 1));
        return {
            turnIndex,
            isFirstRun: turnIndex === 0
        };
    } catch  {
        return null;
    }
}
function detectClientType() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectOpenDesignHostClientType"])();
}
function detectLaunchSource() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const entries = performance.getEntriesByType?.('navigation');
        const nav = entries?.[0];
        if (nav?.type === 'reload' || nav?.type === 'back_forward') return 'reload';
        if (window.location.pathname && window.location.pathname !== '/') {
            return 'deeplink';
        }
        return 'direct';
    } catch  {
        return 'unknown';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsProvider",
    ()=>AnalyticsProvider,
    "resolveAppVersionForCapture",
    ()=>resolveAppVersionForCapture,
    "useAnalytics",
    ()=>useAnalytics,
    "useAppVersion",
    ()=>useAppVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/identity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
// PR #1428 reviewer (Siri-Ray): the previous `url.includes('/api/')` check
// matched absolute third-party URLs (https://provider.example/api/x), which
// would leak our analytics headers outside the daemon boundary. This helper
// is strictly same-origin + /api/ prefix and is shared by both the global
// fetch wrapper and the per-track request_id wrapper.
function isSameOriginApiCall(url) {
    if (typeof url !== 'string') return false;
    if (url.startsWith('/api/')) return true;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const parsed = new URL(url, window.location.origin);
        return parsed.origin === window.location.origin && parsed.pathname.startsWith('/api/');
    } catch  {
        return false;
    }
}
const APP_VERSION_PLACEHOLDER = '0.0.0';
let runtimeAppVersion = null;
let runtimeAppVersionPromise = null;
// Shared single-flight fetch of the daemon-pinned version. Cached at module
// scope so the hook, the capture paths, and repeated calls all settle on one
// /api/version round-trip and the same resolved value.
async function loadRuntimeAppVersion() {
    if (runtimeAppVersion) return runtimeAppVersion;
    if (!runtimeAppVersionPromise) {
        runtimeAppVersionPromise = (async ()=>{
            try {
                const res = await fetch('/api/version');
                if (!res.ok) return null;
                const body = await res.json();
                const next = body?.version?.version;
                if (!next) return null;
                runtimeAppVersion = next;
                return next;
            } catch  {
                return null;
            } finally{
                // Allow a retry on the next call when the fetch yielded nothing.
                if (!runtimeAppVersion) runtimeAppVersionPromise = null;
            }
        })();
    }
    return runtimeAppVersionPromise;
}
async function resolveAppVersionForCapture(current) {
    if (current && current !== APP_VERSION_PLACEHOLDER) return current;
    return await loadRuntimeAppVersion() ?? current;
}
function useAppVersion() {
    _s();
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(APP_VERSION_PLACEHOLDER);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAppVersion.useEffect": ()=>{
            let cancelled = false;
            void ({
                "useAppVersion.useEffect": async ()=>{
                    const next = await loadRuntimeAppVersion();
                    if (!cancelled && next) setVersion(next);
                }
            })["useAppVersion.useEffect"]();
            return ({
                "useAppVersion.useEffect": ()=>{
                    cancelled = true;
                }
            })["useAppVersion.useEffect"];
        }
    }["useAppVersion.useEffect"], []);
    return version;
}
_s(useAppVersion, "PvKGzfwp4QUNqIaJGQ315nXiw2I=");
function AnalyticsProvider({ children }) {
    _s1();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const appVersion = useAppVersion();
    // Identity is computed once on mount; locale flows in as a register update
    // when the user switches locales so subsequent events carry the fresh
    // value without re-initializing the PostHog client.
    const identity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsProvider.useMemo[identity]": ()=>({
                anonymousId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnonymousId"])(),
                sessionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionId"])(),
                clientType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectClientType"])()
            })
    }["AnalyticsProvider.useMemo[identity]"], []);
    // Once the PostHog client has talked to /api/analytics/config, the
    // installationId the daemon stamped becomes the canonical anonymous id —
    // shared with Langfuse. The fetch wrapper below picks this up so daemon
    // server-side captures end up on the same person record.
    const [resolvedAnonId, setResolvedAnonId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            let cancelled = false;
            void ({
                "AnalyticsProvider.useEffect": async ()=>{
                    const resolvedAppVersion = await resolveAppVersionForCapture(appVersion);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patchExceptionTrackingAppVersion"])(resolvedAppVersion);
                    // Bridge the always-on error tracker to /api/analytics/config so any
                    // exceptions buffered since module load (see client-app.tsx) can flush
                    // to PostHog. This runs regardless of the user's analytics consent
                    // toggle — error reports are intentionally not gated by it.
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bootstrapExceptionTracking"])({
                        anonymousId: identity.anonymousId,
                        sessionId: identity.sessionId,
                        clientType: identity.clientType,
                        locale,
                        appVersion: resolvedAppVersion
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyticsClient"])({
                        anonymousId: identity.anonymousId,
                        sessionId: identity.sessionId,
                        clientType: identity.clientType,
                        locale,
                        appVersion: resolvedAppVersion
                    });
                    if (cancelled) return;
                    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedAnonymousId"])();
                    if (resolved) setResolvedAnonId(resolved);
                }
            })["AnalyticsProvider.useEffect"]();
            return ({
                "AnalyticsProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["AnalyticsProvider.useEffect"];
        }
    }["AnalyticsProvider.useEffect"], [
        identity,
        locale,
        appVersion
    ]);
    // Wrap window.fetch so every same-origin /api/* request carries the
    // analytics context for the daemon to mirror result events back with the
    // matching distinct id.
    //
    // Gated on `resolvedAnonId`: PR #1428 reviewer (codex-connector,
    // lefarcen) — when Privacy → metrics is off, /api/analytics/config
    // returns enabled=false → resolvedAnonId stays null → header injection
    // never installs. That way an opted-out user can't produce daemon-side
    // PostHog events even though POSTHOG_KEY exists in the daemon env
    // (daemon's readAnalyticsContext treats the header as consent).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!resolvedAnonId) return;
            const original = window.fetch;
            const baseHeaders = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_HEADER_DEVICE_ID"]]: resolvedAnonId,
                [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_HEADER_SESSION_ID"]]: identity.sessionId,
                [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_HEADER_CLIENT_TYPE"]]: identity.clientType
            };
            window.fetch = ({
                "AnalyticsProvider.useEffect": async (input, init)=>{
                    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
                    if (!isSameOriginApiCall(url)) return original(input, init);
                    const merged = {
                        ...baseHeaders,
                        [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_HEADER_LOCALE"]]: locale,
                        ...init?.headers ?? {}
                    };
                    return original(input, {
                        ...init ?? {},
                        headers: merged
                    });
                }
            })["AnalyticsProvider.useEffect"];
            return ({
                "AnalyticsProvider.useEffect": ()=>{
                    window.fetch = original;
                }
            })["AnalyticsProvider.useEffect"];
        }
    }["AnalyticsProvider.useEffect"], [
        identity,
        locale,
        resolvedAnonId
    ]);
    // Update PostHog's super-properties whenever locale changes so subsequent
    // captures carry the right `locale` field without us threading it through
    // every track call site.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            let cancelled = false;
            void ({
                "AnalyticsProvider.useEffect": async ()=>{
                    const resolvedAppVersion = await resolveAppVersionForCapture(appVersion);
                    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyticsClient"])({
                        anonymousId: identity.anonymousId,
                        sessionId: identity.sessionId,
                        clientType: identity.clientType,
                        locale: locale,
                        appVersion: resolvedAppVersion
                    });
                    if (cancelled || !client) return;
                    try {
                        client.register({
                            locale: locale,
                            app_version: resolvedAppVersion,
                            ui_version: resolvedAppVersion
                        });
                    } catch  {
                    // Best-effort.
                    }
                }
            })["AnalyticsProvider.useEffect"]();
            return ({
                "AnalyticsProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["AnalyticsProvider.useEffect"];
        }
    }["AnalyticsProvider.useEffect"], [
        identity,
        locale,
        appVersion
    ]);
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnalyticsProvider.useCallback[track]": (event, properties, options)=>{
            const insertId = options?.insertId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
            const requestId = options?.requestId ?? null;
            // Attach request_id to the in-flight fetch wrapper too, so the daemon
            // can stitch click→result pairs without the caller threading it.
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && requestId) {
                try {
                    const baseFetch = window.fetch;
                    const wrapped = {
                        "AnalyticsProvider.useCallback[track].wrapped": async (input, init)=>{
                            const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
                            if (!isSameOriginApiCall(url)) return baseFetch(input, init);
                            const merged = {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_HEADER_REQUEST_ID"]]: requestId,
                                ...init?.headers ?? {}
                            };
                            return baseFetch(input, {
                                ...init ?? {},
                                headers: merged
                            });
                        }
                    }["AnalyticsProvider.useCallback[track].wrapped"];
                    // Single-shot: restore after next microtask so only the originating
                    // fetch picks up the request_id header.
                    window.fetch = wrapped;
                    queueMicrotask({
                        "AnalyticsProvider.useCallback[track]": ()=>{
                            window.fetch = baseFetch;
                        }
                    }["AnalyticsProvider.useCallback[track]"]);
                } catch  {
                // Best-effort header injection.
                }
            }
            void ({
                "AnalyticsProvider.useCallback[track]": async ()=>{
                    const resolvedAppVersion = await resolveAppVersionForCapture(appVersion);
                    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyticsClient"])({
                        anonymousId: identity.anonymousId,
                        sessionId: identity.sessionId,
                        clientType: identity.clientType,
                        locale: locale,
                        appVersion: resolvedAppVersion
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capture"])(client, {
                        event,
                        properties: {
                            ...properties,
                            app_version: resolvedAppVersion,
                            ui_version: resolvedAppVersion
                        },
                        insertId,
                        requestId
                    });
                }
            })["AnalyticsProvider.useCallback[track]"]();
        }
    }["AnalyticsProvider.useCallback[track]"], [
        identity,
        locale,
        appVersion
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsProvider.useMemo[value]": ()=>({
                track,
                setConsent: ({
                    "AnalyticsProvider.useMemo[value]": (granted)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyConsent"])(granted);
                        if (!granted) {
                            // Clear the header-injection state so the fetch wrapper effect
                            // tears down its hook on the next render. Daemon-side captures
                            // will see no x-od-analytics-* headers → readAnalyticsContext
                            // returns null → no events emitted, even if POSTHOG_KEY is set.
                            setResolvedAnonId(null);
                        } else {
                            // Re-trigger client init: getAnalyticsClient's null-cache fix
                            // (client.ts) allows a fresh /api/analytics/config fetch when
                            // the previous response was enabled=false. Resolved id propagates
                            // into the wrapper via setResolvedAnonId below.
                            void ({
                                "AnalyticsProvider.useMemo[value]": async ()=>{
                                    const resolvedAppVersion = await resolveAppVersionForCapture(appVersion);
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyticsClient"])({
                                        anonymousId: identity.anonymousId,
                                        sessionId: identity.sessionId,
                                        clientType: identity.clientType,
                                        locale,
                                        appVersion: resolvedAppVersion
                                    });
                                    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedAnonymousId"])();
                                    if (resolved) setResolvedAnonId(resolved);
                                }
                            })["AnalyticsProvider.useMemo[value]"]();
                        }
                    }
                })["AnalyticsProvider.useMemo[value]"],
                setIdentity: ({
                    "AnalyticsProvider.useMemo[value]": (installationId)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyIdentity"])(installationId);
                        // Keep the fetch wrapper's header in sync so daemon-side captures
                        // start using the new id immediately, not after the next reload.
                        if (installationId) setResolvedAnonId(installationId);
                    }
                })["AnalyticsProvider.useMemo[value]"],
                setConfigureGlobals: ({
                    "AnalyticsProvider.useMemo[value]": (next)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setConfigureGlobals"])(next);
                    }
                })["AnalyticsProvider.useMemo[value]"],
                setUserId: ({
                    "AnalyticsProvider.useMemo[value]": (userId)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAnalyticsUserId"])(userId);
                    }
                })["AnalyticsProvider.useMemo[value]"],
                anonymousId: identity.anonymousId,
                sessionId: identity.sessionId,
                newRequestId: ({
                    "AnalyticsProvider.useMemo[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])()
                })["AnalyticsProvider.useMemo[value]"]
            })
    }["AnalyticsProvider.useMemo[value]"], [
        track,
        identity,
        locale,
        appVersion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/analytics/provider.tsx",
        lineNumber: 380,
        columnNumber: 10
    }, this);
}
_s1(AnalyticsProvider, "UcvUCBlNklFv924fpq3QTx2azFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        useAppVersion
    ];
});
_c = AnalyticsProvider;
function useAnalytics() {
    _s2();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!value) {
        // No-op stub for unit tests / SSR / consumers rendered outside the
        // provider tree. Returning a working stub keeps every call site free of
        // null checks.
        return {
            track: ()=>undefined,
            setConsent: ()=>undefined,
            setIdentity: ()=>undefined,
            setConfigureGlobals: ()=>undefined,
            setUserId: ()=>undefined,
            anonymousId: 'unmounted',
            sessionId: 'unmounted',
            newRequestId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])()
        };
    }
    return value;
}
_s2(useAnalytics, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
var _c;
__turbopack_context__.k.register(_c, "AnalyticsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tiered v4-UUID generator that survives non-secure contexts.
//
// `crypto.randomUUID()` is restricted to secure contexts — HTTPS or
// `localhost`. When Open Design is served over plain HTTP on a LAN
// IP (the standard Docker / unRAID / NAS self-hosted setup, e.g.
// `http://192.168.1.10:17573`), Chromium silently makes
// `crypto.randomUUID` undefined. Calls then throw
// `TypeError: crypto.randomUUID is not a function`, which the surrounding
// try/catch in `state/projects.ts` swallows — the Create button
// effectively becomes a no-op for every LAN-IP user (issue #849, also
// reported as #394).
//
// Three-tier fallback, preferred in order:
//
//   1. `crypto.randomUUID()` — secure-context happy path. Native, fast,
//      cryptographically random.
//   2. `crypto.getRandomValues()` — available in non-secure contexts
//      too (it's a separate API not gated by isSecureContext). Gives
//      us a real RFC 4122 v4 UUID with crypto-quality entropy.
//   3. `Math.random()` — last resort, only for environments without
//      either Web Crypto API. The IDs we generate (project ids, message
//      ids, client request ids) are scoped to a single user's local
//      browser session, so cryptographic uniqueness isn't required —
//      we just need enough entropy to avoid collisions in normal use.
__turbopack_context__.s([
    "randomUUID",
    ()=>randomUUID
]);
function randomUUID() {
    // Tier 1: native randomUUID where the spec lets us.
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    // Tier 2: build a v4 UUID from `crypto.getRandomValues`. The byte
    // layout follows RFC 4122 §4.4 — set the version (high nibble of
    // byte 6) to 4 and the variant (high two bits of byte 8) to `10`.
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        bytes[6] = bytes[6] & 0x0f | 0x40;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        const hex = Array.from(bytes, (b)=>b.toString(16).padStart(2, '0')).join('');
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
    // Tier 3: Math.random fallback. Same template as the de-facto
    // browser polyfill — replace `x` with a random hex nibble and `y`
    // with one of `8`/`9`/`a`/`b` to satisfy the variant bits.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_0i69tl8._.js.map