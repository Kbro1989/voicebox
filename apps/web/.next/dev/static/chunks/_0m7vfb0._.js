(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/observability/long-task.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installLongTaskObserver",
    ()=>installLongTaskObserver
]);
// Long task observer.
//
// Emits `client_long_task` whenever the main thread is blocked for more
// than `MIN_DURATION_MS`. Long tasks are the single best proxy for
// perceived UI lag — a 500 ms task drops 30 consecutive frames at 60 fps,
// which the user reads as "stuck". FPS sampling via requestAnimationFrame
// is a worse signal: it stops counting in background tabs and the count
// itself has measurable overhead.
//
// Threshold is 100 ms rather than the W3C 50 ms minimum because the
// browser already filters at 50 ms; bumping to 100 ms here halves the
// event volume while still catching every task a human notices.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
const MIN_DURATION_MS = 100;
let observer = null;
function installLongTaskObserver() {
    if (typeof PerformanceObserver === 'undefined') return ()=>undefined;
    // Some browsers (Safari < 16, Firefox without flag) report `longtask` as
    // an unsupported entry type. observe() throws or no-ops; either way we
    // bail silently so the rest of the observability surface still loads.
    const supported = PerformanceObserver.supportedEntryTypes?.includes?.('longtask');
    if (supported !== true) return ()=>undefined;
    if (observer) return ()=>observer?.disconnect();
    observer = new PerformanceObserver((list)=>{
        for (const entry of list.getEntries()){
            if (entry.duration < MIN_DURATION_MS) continue;
            // The `attribution` array on a PerformanceLongTaskTiming entry
            // names the script / frame that caused the block (e.g. an iframe
            // child for file-viewer renders). The Long Tasks API surface is
            // not fully covered by TypeScript's lib.dom so we read it through
            // an `unknown` cast rather than a hand-rolled type.
            const attribution = entry.attribution?.[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_long_task', {
                duration_ms: Math.round(entry.duration),
                start_time_ms: Math.round(entry.startTime),
                container_type: attribution?.containerType,
                container_name: attribution?.containerName,
                // containerSrc can be a full URL that may include query strings.
                // Trimmed to origin+pathname; full URL scrub lives in error-tracking.
                container_src_origin: stripUrlQuery(attribution?.containerSrc)
            });
        }
    });
    try {
        observer.observe({
            type: 'longtask',
            buffered: true
        });
    } catch  {
        // Older Chrome versions sometimes throw when buffered is requested.
        try {
            observer.observe({
                type: 'longtask'
            });
        } catch  {
            observer = null;
            return ()=>undefined;
        }
    }
    return ()=>{
        observer?.disconnect();
        observer = null;
    };
}
function stripUrlQuery(value) {
    if (typeof value !== 'string' || value.length === 0) return undefined;
    try {
        const parsed = new URL(value);
        return `${parsed.origin}${parsed.pathname}`;
    } catch  {
        return value;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/resource-error.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installResourceErrorObserver",
    ()=>installResourceErrorObserver
]);
// Resource-loading error observer.
//
// The bubbling `error` event (registered with capture=false) catches
// thrown JS errors but NOT failed resource loads — `<script>`, `<link>`,
// `<img>`, etc. emit an `error` event that does not propagate. To pick
// those up we register a *capturing* listener on `window`. This is the
// canonical browser pattern for chunk-load failures, which we very much
// want to know about: a missing `_next/static/chunks/xxx.js` results in
// a non-functional app with no JS exception.
//
// Each event includes the failed tag + its URL. The URL is left alone
// here — the runtime-side scrub pipeline does not redact static-asset
// URLs, but since these are our own host-served chunks they don't leak
// anything sensitive.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
const RESOURCE_TAGS = new Set([
    'SCRIPT',
    'LINK',
    'IMG',
    'IFRAME',
    'AUDIO',
    'VIDEO',
    'SOURCE',
    'TRACK'
]);
let installed = false;
function installResourceErrorObserver() {
    if (installed) return ()=>undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    installed = true;
    const listener = (event)=>{
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (!RESOURCE_TAGS.has(target.tagName)) return;
        const src = readSrc(target);
        if (src == null) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_resource_error', {
            tag: target.tagName.toLowerCase(),
            // crossorigin / async / defer are useful signals for diagnosing
            // chunk-load problems that depend on CDN cache + SW interaction.
            async_attr: target.getAttribute('async') != null ? true : false,
            defer_attr: target.getAttribute('defer') != null ? true : false,
            crossorigin: target.getAttribute('crossorigin'),
            url: src
        });
    };
    // capture=true is required — resource error events do not bubble.
    window.addEventListener('error', listener, /*useCapture=*/ true);
    return ()=>{
        window.removeEventListener('error', listener, /*useCapture=*/ true);
        installed = false;
    };
}
function readSrc(el) {
    // <link> uses href; everything else uses src.
    const value = el instanceof HTMLLinkElement ? el.href : el instanceof HTMLScriptElement ? el.src : el instanceof HTMLImageElement ? el.src : el instanceof HTMLIFrameElement ? el.src : el instanceof HTMLSourceElement ? el.src : el instanceof HTMLTrackElement ? el.src : el instanceof HTMLMediaElement ? el.src : el.getAttribute('src') ?? el.getAttribute('href');
    if (typeof value !== 'string' || value.length === 0) return null;
    return value;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/boot-timing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installBootTimingObserver",
    ()=>installBootTimingObserver
]);
// Boot timing observer.
//
// Captures `client_boot_timing` once, after the app's first page becomes
// fully rendered. Buckets:
//
//   - navigation_start_offset_ms: navigationStart → loadEvent.start
//     (the standard "page load" metric — how long the daemon's static
//     SPA fallback + initial bundle download took).
//   - dom_interactive_ms:  navigationStart → domInteractive
//   - dom_content_loaded_ms: navigationStart → domContentLoadedEventStart
//   - app_mount_ms:  navigationStart → first `home_view`-like DOM marker
//
// Why we don't reuse posthog-js's `$performance` events: those are
// stripped for users who opted out of analytics. Boot timing is a
// stability signal more than a behavioral one — slow boots are bugs we
// need to triage regardless of consent.
//
// Fires at most once per page load.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
let captured = false;
function installBootTimingObserver() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof performance === 'undefined') return ()=>undefined;
    if (captured) return ()=>undefined;
    const onReady = ()=>{
        if (captured) return;
        captured = true;
        // Defer to the next idle tick so we capture the post-load timings
        // (loadEventEnd is set synchronously inside the `load` handler).
        schedule(()=>emit());
    };
    // We can hit this from three states: still loading, interactive, or
    // already complete (HMR / dev / fast paths). Cover all three.
    if (document.readyState === 'complete') {
        onReady();
    } else {
        window.addEventListener('load', onReady, {
            once: true
        });
    }
    return ()=>{
        captured = true;
        window.removeEventListener('load', onReady);
    };
}
function schedule(fn) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const rIC = window.requestIdleCallback;
    if (typeof rIC === 'function') {
        rIC(fn, {
            timeout: 2000
        });
        return;
    }
    setTimeout(fn, 50);
}
function emit() {
    // PerformanceNavigationTiming is the modern shape; Navigation Timing v1
    // (`performance.timing`) is deprecated but still ubiquitous. We prefer
    // the typed v2 surface and only fall back when getEntriesByType returns
    // nothing (Safari < 15 in some quirk modes).
    const nav = readNavigationTiming();
    if (!nav) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_boot_timing', {
        navigation_start_offset_ms: round(nav.navigationStart),
        dom_interactive_ms: round(nav.domInteractive),
        dom_content_loaded_ms: round(nav.domContentLoadedEventStart),
        dom_complete_ms: round(nav.domComplete),
        load_event_ms: round(nav.loadEventStart),
        transfer_size_bytes: typeof nav.transferSize === 'number' && nav.transferSize > 0 ? nav.transferSize : undefined,
        next_render_mode: detectNextRenderMode(),
        visibility_state: typeof document !== 'undefined' ? document.visibilityState : undefined
    });
}
function readNavigationTiming() {
    const [entry] = performance.getEntriesByType('navigation');
    if (entry) {
        return {
            navigationStart: entry.startTime,
            domInteractive: entry.domInteractive,
            domContentLoadedEventStart: entry.domContentLoadedEventStart,
            domComplete: entry.domComplete,
            loadEventStart: entry.loadEventStart,
            transferSize: entry.transferSize
        };
    }
    // Legacy fallback — `performance.timing` returns absolute epoch
    // timestamps, so we normalise against navigationStart to match the
    // v2-style relative shape.
    const legacy = performance.timing;
    if (!legacy) return null;
    const base = legacy.navigationStart;
    return {
        navigationStart: 0,
        domInteractive: legacy.domInteractive - base,
        domContentLoadedEventStart: legacy.domContentLoadedEventStart - base,
        domComplete: legacy.domComplete - base,
        loadEventStart: legacy.loadEventStart - base
    };
}
function detectNextRenderMode() {
    // Static-exported pages set this attribute on the <html> element via the
    // App Router's static rendering. Useful for separating cold-cache CDN
    // misses (slow) from already-resident chunks (fast).
    if (typeof document === 'undefined') return 'unknown';
    if (document.documentElement.getAttribute('data-next-render') === 'static') return 'static';
    return document.documentElement.getAttribute('data-next-render') ?? 'unknown';
}
function round(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
    return Math.round(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/visibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installVisibilityObserver",
    ()=>installVisibilityObserver
]);
// Visibility / session-length observer.
//
// PostHog's own `$pageleave` fires only on the last frame before unload
// and is gated on `capture_pageview: 'history_change'` — it does not
// reliably capture the in-tab visibility cycle that drives a long-running
// Electron session (user tabs away, comes back hours later).
//
// We emit two events:
//
//   - `client_visibility_change` — on every `visibilitychange`. Carries
//     the new state and how many ms have elapsed since the previous
//     transition. Used to reconstruct the in-foreground time for a
//     session.
//   - `client_session_summary` — on `pagehide`. Carries the total
//     foreground duration for the page lifetime. This is the only
//     reliable place to emit a final summary because `beforeunload`
//     doesn't fire on iOS Safari, and `unload` is being deprecated in
//     Chrome.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
let installed = false;
function installVisibilityObserver() {
    if (installed) return ()=>undefined;
    if (typeof document === 'undefined') return ()=>undefined;
    installed = true;
    const times = {
        pageStart: performance.now(),
        lastChange: performance.now(),
        foregroundMs: 0,
        lastState: document.visibilityState
    };
    const onVisibilityChange = ()=>{
        const now = performance.now();
        const delta = now - times.lastChange;
        if (times.lastState === 'visible') {
            times.foregroundMs += delta;
        }
        times.lastChange = now;
        times.lastState = document.visibilityState;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_visibility_change', {
            to_state: document.visibilityState,
            // `delta_ms` is how long the *previous* state lasted — useful for
            // distinguishing "user blinked at a notification" (~500 ms hidden)
            // from "user left for lunch" (~30 minutes).
            previous_state_duration_ms: Math.round(delta)
        });
    };
    const onPageHide = ()=>{
        const now = performance.now();
        if (times.lastState === 'visible') {
            times.foregroundMs += now - times.lastChange;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_session_summary', {
            page_lifetime_ms: Math.round(now - times.pageStart),
            foreground_ms: Math.round(times.foregroundMs)
        });
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    // `pagehide` fires on browser back/forward navigations and tab close
    // in all evergreen browsers including iOS Safari (where `unload` does
    // not). For Electron desktop this fires before the renderer process
    // is destroyed, giving us a last chance to flush a summary.
    window.addEventListener('pagehide', onPageHide);
    return ()=>{
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('pagehide', onPageHide);
        installed = false;
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/white-screen.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installWhiteScreenDetector",
    ()=>installWhiteScreenDetector
]);
// White-screen detector.
//
// Fires `client_white_screen` when the app fails to mount after a
// generous timeout. The detection runs once at module load, sets a single
// timer, and (importantly) cancels itself the moment the React root mounts
// content — so a perfectly normal boot produces zero events.
//
// Success condition (anything below is treated as "still showing a
// pre-mount skeleton" and the timer keeps running):
//
//   1. The App component has set `data-od-app-mounted="1"` on
//      `<html>` (its very first `useEffect` runs that). This is the
//      authoritative marker — once App has rendered at all, any later
//      tree crash is a `$exception` story, not a white-screen story.
//   2. *Fallback only.* If the marker is missing (a render-time crash
//      that prevented the effect from firing, or older app build
//      without the marker), we accept "any non-loading-shell child of
//      <body> with > MIN_VISIBLE_TEXT visible text". This guards
//      against the loading sentinel
//      `<div class="od-loading-shell">Loading Open Design…</div>`
//      being mistaken for a mount (codex review on PR #2527).
//
// We do not try to discriminate between "still loading" and "white screen
// caused by a render error" — both are equally bad from the user's seat,
// and the latter usually accompanies a `$exception` we'll already have
// captured via `error-tracking.ts`.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
const APP_MOUNT_TIMEOUT_MS = 5000;
// Below this floor we treat the root as still showing the skeleton shell.
const MIN_VISIBLE_TEXT = 10;
// Class names that signal "still loading" — we ignore them when computing
// whether the app rendered something meaningful. `od-loading-shell` is
// the dynamic-import fallback rendered by `client-app.tsx`.
const LOADING_SHELL_CLASSES = new Set([
    'od-loading-shell'
]);
const APP_MOUNTED_ATTR = 'data-od-app-mounted';
function installWhiteScreenDetector() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof document === 'undefined') return ()=>undefined;
    let cancelled = false;
    const timer = window.setTimeout(()=>{
        if (cancelled) return;
        if (isAppMounted()) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_white_screen', {
            reason: 'app_not_mounted_after_timeout',
            timeout_ms: APP_MOUNT_TIMEOUT_MS,
            ready_state: document.readyState,
            // Whether the user has navigated away from the tab — `hidden`
            // backgrounded tabs throttle setTimeout, so a "white screen" here
            // is much more likely an OS-side scheduling artifact than a real
            // mount failure. Surfacing it lets us filter the noise.
            visibility_state: document.visibilityState,
            body_child_count: document.body?.children.length ?? 0
        });
    }, APP_MOUNT_TIMEOUT_MS);
    // Cancel the timer as soon as the app renders something meaningful.
    // `requestIdleCallback` (when available) batches the check so we don't
    // poll for every microtask; the fallback chain keeps it working in
    // Safari which still ships without rIC.
    const stopMonitor = monitorMount(()=>{
        if (cancelled) return;
        cancelled = true;
        window.clearTimeout(timer);
    });
    return ()=>{
        cancelled = true;
        window.clearTimeout(timer);
        stopMonitor();
    };
}
function isAppMounted() {
    if (typeof document === 'undefined') return false;
    // Primary signal: the App component's mount effect ran.
    if (document.documentElement.getAttribute(APP_MOUNTED_ATTR) === '1') {
        return true;
    }
    // Fallback: scan the body subtree for content that ISN'T just the
    // dynamic-import loading shell. We only count children whose classList
    // doesn't contain a known loading-shell marker; their visible text
    // determines whether something meaningful is on-screen.
    const root = document.getElementById('__next') ?? document.body;
    if (!root) return false;
    const meaningful = Array.from(root.children).filter((el)=>!isLoadingShell(el));
    if (meaningful.length === 0) return false;
    const text = meaningful.map((el)=>el.innerText ?? el.textContent ?? '').join('').trim();
    if (text.length < MIN_VISIBLE_TEXT) return false;
    return true;
}
function isLoadingShell(el) {
    for (const name of LOADING_SHELL_CLASSES){
        if (el.classList.contains(name)) return true;
    }
    return false;
}
function monitorMount(onMounted) {
    let stopped = false;
    const observer = new MutationObserver(()=>{
        if (stopped) return;
        if (isAppMounted()) {
            stopped = true;
            observer.disconnect();
            onMounted();
        }
    });
    // Observe the whole body subtree — the React root is repeatedly
    // detached/reattached during hydration, so observing `#__next`
    // directly would stop firing the moment it gets replaced.
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    // Best-effort short-circuit: if the app is already mounted by the time
    // this hook runs (HMR, slow tab, etc.) we can fire immediately.
    if (isAppMounted()) {
        stopped = true;
        observer.disconnect();
        onMounted();
    }
    return ()=>{
        stopped = true;
        observer.disconnect();
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/install.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installWebObservability",
    ()=>installWebObservability
]);
// Single entry point for the web-side observability surface.
//
// Called as a side-effect import from `apps/web/app/[[...slug]]/client-app.tsx`
// at module load — runs before React mounts, before posthog-js's lazy
// import resolves, before any product code can throw. Each observer is
// individually defensive (no-ops in environments where its API is
// missing), so this call is safe to make unconditionally.
//
// Why one entry point: every observer reaches into the same
// error-tracking transport for its consent-bypass + early-buffer
// guarantees, and centralising the install order makes it easy to
// audit what runs at boot.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$long$2d$task$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/long-task.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$resource$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/resource-error.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$boot$2d$timing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/boot-timing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$visibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/visibility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$white$2d$screen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/white-screen.ts [app-client] (ecmascript)");
;
;
;
;
;
let installed = false;
function installWebObservability() {
    if (installed) return ()=>undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    installed = true;
    const teardowns = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$long$2d$task$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installLongTaskObserver"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$resource$2d$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installResourceErrorObserver"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$boot$2d$timing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installBootTimingObserver"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$visibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installVisibilityObserver"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$white$2d$screen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installWhiteScreenDetector"])()
    ];
    return ()=>{
        for (const teardown of teardowns){
            try {
                teardown();
            } catch  {
            // best-effort — teardown failures must never propagate
            }
        }
        installed = false;
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/[[...slug]]/client-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientApp",
    ()=>ClientApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$install$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/install.ts [app-client] (ecmascript)");
;
'use client';
;
;
;
;
// Install browser exception handlers at module-load time, before any other
// client code can throw. The hooks buffer events until AnalyticsProvider
// finishes `bootstrapExceptionTracking()` with the PostHog key, so even
// errors thrown during the dynamic import of `src/App` are captured.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["installErrorHandlers"])();
// Install the rest of the observability surface (long tasks, white-screen
// detector, resource-error capture, boot timing, visibility tracking).
// Same buffer + consent-bypass transport as the exception handler above
// so events fired before AnalyticsProvider initialises still flush.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$install$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installWebObservability"])();
// The product is a fully client-driven SPA — every component reads
// localStorage, window.location, etc. — so we opt out of static-time
// rendering for the entire tree. This keeps `next build --output export`
// from trying to evaluate browser-only code while still emitting a real
// shell HTML the daemon can serve as the SPA fallback.
const App = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/App.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.App), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/App.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "od-loading-shell",
            children: "Loading Open Design…"
        }, void 0, false, {
            fileName: "[project]/apps/web/app/[[...slug]]/client-app.tsx",
            lineNumber: 27,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = App;
function ClientApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(App, {}, void 0, false, {
        fileName: "[project]/apps/web/app/[[...slug]]/client-app.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c1 = ClientApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "App");
__turbopack_context__.k.register(_c1, "ClientApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# sourceMappingURL=_0m7vfb0._.js.map