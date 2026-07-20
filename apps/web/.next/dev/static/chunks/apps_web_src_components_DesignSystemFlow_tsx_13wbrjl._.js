(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/DesignSystemFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignSystemCreationFlow",
    ()=>DesignSystemCreationFlow,
    "DesignSystemDetailView",
    ()=>DesignSystemDetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$form$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/form-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/chat-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/design-system-package-audit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/file-ops.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/todos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/fileSystemErrors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/auto-open-file.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ChatPane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FileWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/onboarding-session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/upload-tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
const SOURCE_PROCESSING_MIN_VISIBLE_MS = 900;
const SOURCE_PROCESSING_LOADING_FILE_COUNT = 24;
const SOURCE_PROCESSING_LOADING_BYTES = 4 * 1024 * 1024;
const SOURCE_FILE_DIALOG_FOCUS_DELAY_MS = 120;
const SOURCE_FILE_DIALOG_WARMUP_MS = 450;
const SOURCE_FILE_DIALOG_STALE_MS = 30_000;
const EMPTY_SETUP = {
    company: '',
    githubUrl: '',
    githubUrls: [],
    codeFiles: [],
    codeFolders: [],
    codeFileObjects: [],
    figFiles: [],
    figFileObjects: [],
    assetFiles: [],
    assetFileObjects: [],
    notes: ''
};
const GENERATION_JOB_STORAGE_PREFIX = 'od:design-system-generation-job:';
const GITHUB_CONNECTOR_ID = 'github';
const CONNECTOR_CALLBACK_MESSAGE_TYPE = 'open-design:connector-connected';
const GITHUB_CONNECTOR_STATUS_TIMEOUT_MS = 5000;
const LOCAL_CODE_UPLOAD_ROOT = 'context/local-code';
const FIGMA_CONTEXT_ROOT = 'context/figma';
const ASSET_UPLOAD_ROOT = 'assets';
const SOURCE_CONTEXT_MANIFEST_PATH = 'context/source-context.md';
const MAX_LOCAL_CODE_UPLOAD_FILES = 120;
const MAX_LOCAL_CODE_FILE_BYTES = 1024 * 1024;
const MAX_FIGMA_CONTEXT_FILES = 10;
const MAX_FIGMA_PARSE_BYTES = 512 * 1024;
const MAX_ASSET_UPLOAD_FILES = 80;
const MAX_ASSET_FILE_BYTES = 12 * 1024 * 1024;
const UI_KIT_ENTRY_CONTRACT = [
    'Claude-style UI-kit entry contract:',
    '- When `ui_kits/app/components/*.jsx` or `*.tsx` files exist, `ui_kits/app/index.html` must behave like a runnable browser entry, not a static mock.',
    '- Use the same structure as Claude Design exports: load React, ReactDOM, and Babel standalone scripts, load `../../colors_and_type.css`, create a `#root`, load each component script from `components/`, then render the composed `App` component.',
    '- `App.jsx` must assign `window.App = App` (or `globalThis.App = App`), and every directly loaded component file must expose the same browser global for its component name.',
    '- Use this skeleton for direct JSX component kits, replacing the component list only when evidence supports different names:',
    '```html',
    '<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>',
    '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>',
    '<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>',
    '<link rel="stylesheet" href="../../colors_and_type.css">',
    '<div id="root"></div>',
    '<script type="text/babel" src="components/Sidebar.jsx"></script>',
    '<script type="text/babel" src="components/AssistantsList.jsx"></script>',
    '<script type="text/babel" src="components/ChatArea.jsx"></script>',
    '<script type="text/babel" src="components/MessageBubble.jsx"></script>',
    '<script type="text/babel" src="components/InputBar.jsx"></script>',
    '<script type="text/babel" src="components/App.jsx"></script>',
    '<script type="text/babel">',
    'const { App } = window;',
    "const root = ReactDOM.createRoot(document.getElementById('root'));",
    'root.render(<App />);',
    '</script>',
    '```'
].join('\n');
const BUILD_ASSET_PRESERVATION_CONTRACT = [
    'Claude-style build asset contract:',
    '- When evidence includes `context/.../files/build/...`, create a root `build/` directory and copy representative runtime assets there with their original filenames and path intent, such as `build/icon.png`, `build/logo.png`, `build/tray_icon.png`, and `build/icon.ico`.',
    '- Copy those runtime assets byte-for-byte from the captured `context/.../files/...` snapshots. Do not redraw, re-encode, optimize, or substitute generated placeholders for files that the evidence already captured.',
    '- Do not satisfy build/runtime icon evidence by only renaming those files into `assets/`. `assets/` may include convenience aliases, but root `build/` must preserve the source runtime files for future agents and package consumers.',
    '- `preview/brand-assets.html` should reference at least some real preserved files from `build/` or `assets/` with `<img>`, `<picture>`, `<object>`, or CSS `url(...)`, and README.md / SKILL.md should mention `build/` in the package manifest when it exists.'
].join('\n');
function generationJobStorageKey(designSystemId) {
    return `${GENERATION_JOB_STORAGE_PREFIX}${designSystemId}`;
}
function readRememberedGenerationJob(designSystemId) {
    try {
        return window.sessionStorage.getItem(generationJobStorageKey(designSystemId));
    } catch  {
        return null;
    }
}
async function resolveDesignSystemWorkspaceProject(system) {
    const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureDesignSystemWorkspace"])(system.id);
    if (workspace) {
        return {
            projectId: workspace.project.id,
            files: workspace.files
        };
    }
    if (!system.projectId) return null;
    const fallbackProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(system.projectId);
    if (!fallbackProject) return null;
    const files = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFiles"])(system.projectId);
    return {
        projectId: system.projectId,
        files
    };
}
function clearRememberedGenerationJob(designSystemId) {
    try {
        window.sessionStorage.removeItem(generationJobStorageKey(designSystemId));
    } catch  {
    // Best-effort cleanup only.
    }
}
function DesignSystemCreationFlow({ onBack, onCreated, onProjectPrepared, onSystemsRefresh, config, onOpenConnectorsTab, chrome = 'standalone', onBeforeGenerate, onGenerateSettled }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('setup');
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_SETUP);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generationStarting, setGenerationStarting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sourceProcessingCount, setSourceProcessingCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const composioConfigured = isComposioConfigured(config?.composio);
    const [githubConnector, setGithubConnector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [githubConnectorLoading, setGithubConnectorLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [githubConnectorError, setGithubConnectorError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [githubConnectorAction, setGithubConnectorAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [githubAuthorizationPending, setGithubAuthorizationPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [githubAuthorizationUrl, setGithubAuthorizationUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const githubConnectorRefreshId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const githubConnectorRequestInFlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const githubConnectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const githubConnectorLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const embedded = chrome === 'embedded';
    // DS create page_view (v2 doc). Only fires for the standalone
    // /design-systems/create route — the embedded variant lives inside
    // OnboardingView, which owns the `area=design_system` step page_view.
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const creationPageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemCreationFlow.useEffect": ()=>{
            if (embedded) return;
            if (creationPageViewFiredRef.current) return;
            creationPageViewFiredRef.current = true;
            const onboardingSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekOnboardingSessionId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'design_systems',
                area: 'design_system_create',
                view_type: 'page',
                entry_from: onboardingSessionId ? 'onboarding' : 'design_systems_page'
            });
        }
    }["DesignSystemCreationFlow.useEffect"], [
        analytics.track,
        embedded
    ]);
    // `emitDsFileUpload` reports the user-side dropzone batch. `picked`
    // is the raw FileList; `staged` is what survived the size/count
    // filters (selectLocalCodeFiles / selectFigmaFiles / selectAssetFiles).
    // The result is `failed` only when zero files pass the filter (e.g.
    // every dropped file was over the per-source size cap); cohort math
    // mirrors the chat-composer + onboarding uploads via
    // `deriveUploadCohort`. The onboarding variant of this event lives
    // in EntryShell; this fires from the standalone /design-systems/create
    // route so the dashboard gets both flows.
    function emitDsFileUpload(sourceType, picked, staged) {
        if (embedded) return;
        if (picked.length === 0) return;
        const cohort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveUploadCohort"])(picked);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
            page_name: 'design_systems',
            area: 'design_system_source',
            source_type: sourceType,
            ...cohort,
            result: staged.length > 0 ? 'success' : 'failed',
            error_code: staged.length === 0 ? 'DS_UPLOAD_ALL_FILTERED' : undefined
        });
    }
    // Form-level intent clicks on the standalone create form. The embedded
    // onboarding variant is excluded — EntryShell owns its own
    // area=design_system clicks (same gating as the DS create page_view
    // and emitDsFileUpload above).
    function emitCreateFormClick(element, methodsExpanded) {
        if (embedded) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemsCreateClick"])(analytics.track, {
            page_name: 'design_systems',
            area: 'design_system_create',
            element,
            ...methodsExpanded === undefined ? {} : {
                methods_expanded: methodsExpanded
            }
        });
    }
    const refreshGithubConnector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemCreationFlow.useCallback[refreshGithubConnector]": async ()=>{
            if (!composioConfigured) {
                githubConnectorRefreshId.current += 1;
                githubConnectorRequestInFlight.current = false;
                setGithubConnector(null);
                githubConnectorRef.current = null;
                githubConnectorLoadedRef.current = false;
                setGithubConnectorLoading(false);
                setGithubConnectorError(null);
                setGithubAuthorizationPending(false);
                setGithubAuthorizationUrl(null);
                return;
            }
            if (githubConnectorRequestInFlight.current) return;
            const refreshId = ++githubConnectorRefreshId.current;
            githubConnectorRequestInFlight.current = true;
            setGithubConnectorLoading(true);
            setGithubConnectorError(null);
            try {
                const { connector, timedOut } = await fetchGithubConnectorStatusWithTimeout();
                if (githubConnectorRefreshId.current !== refreshId) return;
                const statusChanged = githubConnectorLoadedRef.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectorAuthSnapshotChanged"])(githubConnectorRef.current, connector);
                setGithubConnector(connector);
                githubConnectorRef.current = connector;
                githubConnectorLoadedRef.current = true;
                if (statusChanged) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
                if (connector?.status === 'connected') {
                    setGithubAuthorizationPending(false);
                    setGithubAuthorizationUrl(null);
                }
                if (connector?.status === 'error' && connector.lastError) {
                    setGithubConnectorError(connector.lastError);
                }
                if (timedOut) {
                    setGithubConnectorError('Could not finish checking GitHub connector. You can still add repository URLs or connect GitHub manually.');
                }
            } catch (err) {
                if (githubConnectorRefreshId.current !== refreshId) return;
                setGithubConnector(null);
                setGithubConnectorError(err instanceof Error ? err.message : 'Could not check the GitHub connector.');
            } finally{
                if (githubConnectorRefreshId.current === refreshId) {
                    githubConnectorRequestInFlight.current = false;
                }
                if (githubConnectorRefreshId.current === refreshId) {
                    setGithubConnectorLoading(false);
                }
            }
        }
    }["DesignSystemCreationFlow.useCallback[refreshGithubConnector]"], [
        composioConfigured
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemCreationFlow.useEffect": ()=>{
            void refreshGithubConnector();
        }
    }["DesignSystemCreationFlow.useEffect"], [
        refreshGithubConnector
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemCreationFlow.useEffect": ()=>{
            if (!composioConfigured) return undefined;
            function handleConnectorMessage(event) {
                const data = event.data;
                if (!data || typeof data !== 'object') return;
                if (data.type !== CONNECTOR_CALLBACK_MESSAGE_TYPE) return;
                if (!isTrustedConnectorCallbackOrigin(event.origin)) return;
                void refreshGithubConnector();
            }
            function handleFocus() {
                void refreshGithubConnector();
            }
            window.addEventListener('message', handleConnectorMessage);
            window.addEventListener('focus', handleFocus);
            return ({
                "DesignSystemCreationFlow.useEffect": ()=>{
                    window.removeEventListener('message', handleConnectorMessage);
                    window.removeEventListener('focus', handleFocus);
                }
            })["DesignSystemCreationFlow.useEffect"];
        }
    }["DesignSystemCreationFlow.useEffect"], [
        composioConfigured,
        refreshGithubConnector
    ]);
    async function handleConnectGithub() {
        if (!composioConfigured || githubConnectorAction) return;
        setGithubConnectorAction('connect');
        setGithubConnectorError(null);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectConnector"])(GITHUB_CONNECTOR_ID);
            if (result.error) setGithubConnectorError(result.error);
            if (result.connector) {
                setGithubConnector(result.connector);
                githubConnectorRef.current = result.connector;
                githubConnectorLoadedRef.current = true;
            }
            if (result.auth?.redirectUrl) setGithubAuthorizationUrl(result.auth.redirectUrl);
            if (isPendingConnectorAuth(result.auth)) setGithubAuthorizationPending(true);
            if (result.auth?.kind === 'connected' || result.connector?.status === 'connected') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
                setGithubConnectorError(null);
                setGithubAuthorizationPending(false);
                setGithubAuthorizationUrl(null);
            }
        } catch (err) {
            setGithubConnectorError(err instanceof Error ? err.message : 'Could not start GitHub authorization.');
        } finally{
            setGithubConnectorAction(null);
        }
    }
    async function handleDisconnectGithub() {
        if (!composioConfigured || githubConnectorAction) return;
        setGithubConnectorAction('disconnect');
        setGithubConnectorError(null);
        try {
            const connector = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectConnector"])(GITHUB_CONNECTOR_ID);
            const statusChanged = connector != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectorAuthSnapshotChanged"])(githubConnectorRef.current, connector);
            setGithubConnector(connector);
            githubConnectorRef.current = connector;
            githubConnectorLoadedRef.current = true;
            if (statusChanged) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyConnectorsChanged"])();
            setGithubAuthorizationPending(false);
            setGithubAuthorizationUrl(null);
        } catch (err) {
            setGithubConnectorError(err instanceof Error ? err.message : 'Could not disconnect GitHub.');
        } finally{
            setGithubConnectorAction(null);
        }
    }
    function handleAddGithubUrl() {
        const nextUrl = normalizeGithubUrl(state.githubUrl);
        if (!nextUrl) return;
        emitCreateFormClick('github_repo_add');
        setState((curr)=>({
                ...curr,
                githubUrl: '',
                githubUrls: Array.from(new Set([
                    ...curr.githubUrls,
                    nextUrl
                ]))
            }));
    }
    function handleRemoveGithubUrl(url) {
        setState((curr)=>({
                ...curr,
                githubUrls: curr.githubUrls.filter((item)=>item !== url)
            }));
    }
    function beginSourceProcessing() {
        setSourceProcessingCount((count)=>count + 1);
        let ended = false;
        return ()=>{
            if (ended) return;
            ended = true;
            setSourceProcessingCount((count)=>Math.max(0, count - 1));
        };
    }
    async function handlePickCodeFolder() {
        emitCreateFormClick('browse_folder');
        const selected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openFolderDialog"])();
        if (!selected) return;
        setState((curr)=>({
                ...curr,
                codeFolders: Array.from(new Set([
                    ...curr.codeFolders,
                    selected
                ]))
            }));
    }
    function handleRemoveCodeFolder(folder) {
        setState((curr)=>({
                ...curr,
                codeFolders: curr.codeFolders.filter((item)=>item !== folder),
                ...curr.codeFolders.includes(folder) ? {} : {
                    codeFiles: [],
                    codeFileObjects: []
                }
            }));
    }
    function handleRemoveAssetFile(name) {
        setState((curr)=>({
                ...curr,
                assetFiles: curr.assetFiles.filter((item)=>item !== name),
                assetFileObjects: curr.assetFileObjects.filter((file)=>resourceRelativePath(file) !== name)
            }));
    }
    async function generate() {
        if (generationStarting) return;
        // Snapshot the user-pinned source state up front. Used for the
        // pre-async ui_click intent signal AND the post-async lifecycle
        // outcome — both rides need the same numbers so the
        // dashboard can correlate "user attempted generate with N
        // sources" → "generate eventually succeeded / failed with the
        // same N". Computed here because OnboardingView can't peek into
        // this flow's setup form.
        const githubRepoCount = state.githubUrls?.length ?? 0;
        const localFolderCount = state.codeFolders?.length ?? 0;
        const figFileCount = state.figFiles?.length ?? 0;
        const assetFileCount = state.assetFiles?.length ?? 0;
        const snapshot = {
            sourceCount: githubRepoCount + localFolderCount + figFileCount + assetFileCount,
            hasBrandDescription: Boolean(state.company?.trim()),
            githubRepoCount,
            localFolderCount,
            figFileCount,
            assetFileCount
        };
        onBeforeGenerate?.(snapshot);
        setGenerationStarting(true);
        setError(null);
        const generateStartedAt = performance.now();
        const onboardingSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekOnboardingSessionId"])();
        const createEntryFrom = embedded ? 'onboarding' : onboardingSessionId ? 'onboarding' : 'design_systems_page';
        const ingestEntryFrom = embedded ? 'onboarding' : onboardingSessionId ? 'onboarding' : 'design_systems_page';
        const designSystemOrigin = deriveDesignSystemOrigin(snapshot);
        function emitCreateResult(result, designSystemId, errorCode, projectId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemCreateResult"])(analytics.track, {
                page_name: 'design_systems',
                area: 'design_system_create',
                entry_from: createEntryFrom,
                result,
                design_system_id: designSystemId,
                project_id: projectId,
                design_system_source: designSystemOrigin,
                source_count: snapshot.sourceCount,
                created_as_project: result === 'success',
                has_brand_description: snapshot.hasBrandDescription,
                brand_description_length_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemLengthBucket"])(state.company),
                notes_length_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemLengthBucket"])(state.notes),
                error_code: errorCode,
                duration_ms: Math.max(0, Math.round(performance.now() - generateStartedAt))
            });
        }
        try {
            const title = inferDesignSystemTitle(state);
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDesignSystemDraft"])({
                title,
                summary: state.company,
                category: 'Custom',
                surface: 'web',
                status: 'draft',
                artifactMode: 'agent-managed',
                sourceNotes: buildSourceNotes(state),
                provenance: buildProvenance(state)
            });
            if (!created) {
                setError('Could not generate this design system.');
                setStep('setup');
                emitCreateResult('failed', undefined, 'DS_DRAFT_CREATE_FAILED', undefined);
                onGenerateSettled?.(snapshot, {
                    result: 'failed',
                    errorCode: 'DS_DRAFT_CREATE_FAILED'
                });
                return;
            }
            const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureDesignSystemWorkspace"])(created.id);
            if (!workspace) {
                setError('Could not open the design system workspace.');
                setStep('setup');
                emitCreateResult('failed', created.id, 'DS_WORKSPACE_OPEN_FAILED', undefined);
                onGenerateSettled?.(snapshot, {
                    result: 'failed',
                    errorCode: 'DS_WORKSPACE_OPEN_FAILED'
                });
                return;
            }
            const project = workspace.project;
            const setupState = state;
            const connector = githubConnector;
            onCreated(project.id, project);
            emitCreateResult('success', created.id, undefined, project.id);
            onGenerateSettled?.(snapshot, {
                result: 'success'
            });
            scheduleAfterProjectHandoff(()=>{
                void prepareCreatedDesignSystemProject({
                    project,
                    state: setupState,
                    composioConfigured,
                    githubConnector: connector,
                    onProjectPrepared,
                    onSystemsRefresh,
                    analyticsTrack: analytics.track,
                    ingestEntryFrom,
                    designSystemId: created.id
                });
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Could not prepare the design system project.');
            setStep('setup');
            const errorCode = err instanceof Error ? `DS_GENERATE_THREW:${err.message.slice(0, 80)}` : 'DS_GENERATE_THREW';
            emitCreateResult('failed', undefined, errorCode, undefined);
            onGenerateSettled?.(snapshot, {
                result: 'failed',
                errorCode
            });
        } finally{
            setGenerationStarting(false);
        }
    }
    if (step === 'confirm') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ds-setup-shell ds-setup-shell--center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-setup-center-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "It will take about 5 minutes to generate your design system."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 697,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You can step away. Keep the tab open in the background."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 698,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-setup-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>setStep('setup'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 701,
                                        columnNumber: 15
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 700,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                disabled: generationStarting,
                                onClick: ()=>void generate(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "sparkles"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    generationStarting ? 'Opening project...' : 'Generate'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 704,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 696,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
            lineNumber: 695,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `ds-setup-shell${embedded ? ' ds-setup-shell--embedded' : ''}`,
        children: [
            sourceProcessingCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-source-upload-loading",
                role: "status",
                "aria-live": "polite",
                "data-testid": "ds-source-upload-loading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ds-source-upload-loading__card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 728,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Adding source material..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 727,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 721,
                columnNumber: 9
            }, this) : null,
            embedded ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "ds-setup-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: ()=>{
                            emitCreateFormClick('back');
                            onBack();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow-left"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 742,
                                columnNumber: 13
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 735,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-setup-mark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "blocks"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 745,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        disabled: !state.company.trim(),
                        onClick: ()=>{
                            emitCreateFormClick('continue_to_generation');
                            if (!state.company.trim()) {
                                setError('Tell Open Design about the company or design system first.');
                                return;
                            }
                            setStep('confirm');
                        },
                        children: [
                            "Continue to generation",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "chevron-right"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 734,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "ds-setup-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Generate from your material"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 767,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Start with a short description, then add any source files you already have."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ds-setup-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Describe your brand or product"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 4,
                                value: state.company,
                                onChange: (event)=>setState((curr)=>({
                                            ...curr,
                                            company: event.target.value
                                        })),
                                placeholder: "e.g. Mission Impastabowl: fast-casual pasta restaurant with in-store touchscreen kiosk, mobile app and website"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 770,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ds-resource-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Add source material ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "(optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 781,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Use anything that shows your current style."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-resource-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-resource-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "GitHub repo"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 785,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ds-resource-inline",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: state.githubUrl,
                                                        onChange: (event)=>setState((curr)=>({
                                                                    ...curr,
                                                                    githubUrl: event.target.value
                                                                })),
                                                        placeholder: "https://github.com/owner/repo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "ghost",
                                                        disabled: !state.githubUrl.trim(),
                                                        onClick: handleAddGithubUrl,
                                                        children: "Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 786,
                                                columnNumber: 15
                                            }, this),
                                            state.githubUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ds-github-url-list",
                                                "aria-label": "Added GitHub repositories",
                                                children: state.githubUrls.map((url)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "github"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 23
                                                            }, this),
                                                            githubRepoLabel(url),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": `Remove ${githubRepoLabel(url)}`,
                                                                onClick: ()=>handleRemoveGithubUrl(url),
                                                                children: "x"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, url, true, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 802,
                                                columnNumber: 17
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubRepositoryAccessPanel, {
                                                composioConfigured: composioConfigured,
                                                connector: githubConnector,
                                                loading: githubConnectorLoading,
                                                action: githubConnectorAction,
                                                authorizationPending: githubAuthorizationPending,
                                                authorizationUrl: githubAuthorizationUrl,
                                                error: githubConnectorError,
                                                onOpenConnectorsTab: onOpenConnectorsTab,
                                                onToggleMethods: (expanded)=>emitCreateFormClick('show_access_methods', expanded),
                                                onConnect: ()=>void handleConnectGithub(),
                                                onOpenAuthorization: ()=>openConnectorAuthorizationUrl(githubAuthorizationUrl),
                                                onDisconnect: ()=>void handleDisconnectGithub()
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 784,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZone, {
                                        label: "Link local code",
                                        helper: "Use a folder or selected files from this computer.",
                                        prompt: "Drag a folder here or browse",
                                        names: localCodeSourceLabels(state),
                                        directory: true,
                                        onZoneClick: ()=>emitCreateFormClick('browse_folder'),
                                        onBrowseFolder: ()=>void handlePickCodeFolder(),
                                        onRemoveName: handleRemoveCodeFolder,
                                        onError: setError,
                                        onProcessingStart: beginSourceProcessing,
                                        onFiles: (_names, files)=>{
                                            const stagedFiles = selectLocalCodeFiles(files);
                                            const stagedNames = stagedFiles.map((file)=>localCodeRelativePath(file));
                                            emitDsFileUpload('local_code', files, stagedFiles);
                                            setState((curr)=>({
                                                    ...curr,
                                                    codeFiles: Array.from(new Set([
                                                        ...curr.codeFiles,
                                                        ...stagedNames
                                                    ])),
                                                    codeFileObjects: dedupeLocalCodeFiles([
                                                        ...curr.codeFileObjects,
                                                        ...stagedFiles
                                                    ])
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 833,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZone, {
                                        label: "Upload .fig",
                                        helper: "Parsed locally; only a summary is added.",
                                        prompt: "Drop .fig here or browse",
                                        accept: ".fig",
                                        names: state.figFiles,
                                        onZoneClick: ()=>emitCreateFormClick('upload_fig'),
                                        onError: setError,
                                        onProcessingStart: beginSourceProcessing,
                                        onFiles: (_names, files)=>{
                                            const stagedFiles = selectFigmaFiles(files);
                                            const stagedNames = stagedFiles.map((file)=>resourceRelativePath(file));
                                            emitDsFileUpload('fig', files, stagedFiles);
                                            setState((curr)=>({
                                                    ...curr,
                                                    figFiles: Array.from(new Set([
                                                        ...curr.figFiles,
                                                        ...stagedNames
                                                    ])),
                                                    figFileObjects: dedupeResourceFiles([
                                                        ...curr.figFileObjects,
                                                        ...stagedFiles
                                                    ])
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 855,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZone, {
                                        label: "Add assets",
                                        prompt: "Drag files here or browse",
                                        names: state.assetFiles,
                                        onZoneClick: ()=>emitCreateFormClick('add_assets'),
                                        onRemoveName: handleRemoveAssetFile,
                                        onError: setError,
                                        onProcessingStart: beginSourceProcessing,
                                        onFiles: (_names, files)=>{
                                            const stagedFiles = selectAssetFiles(files);
                                            const stagedNames = stagedFiles.map((file)=>resourceRelativePath(file));
                                            emitDsFileUpload('assets', files, stagedFiles);
                                            setState((curr)=>({
                                                    ...curr,
                                                    assetFiles: Array.from(new Set([
                                                        ...curr.assetFiles,
                                                        ...stagedNames
                                                    ])),
                                                    assetFileObjects: dedupeResourceFiles([
                                                        ...curr.assetFileObjects,
                                                        ...stagedFiles
                                                    ])
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 783,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 780,
                        columnNumber: 9
                    }, this),
                    embedded ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ds-setup-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Notes"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 899,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$form$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                rows: 4,
                                value: state.notes,
                                onChange: (event)=>setState((curr)=>({
                                            ...curr,
                                            notes: event.target.value
                                        })),
                                placeholder: "e.g. We use a warm, earthy color palette with rounded corners. Our brand voice is playful but professional..."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 898,
                        columnNumber: 11
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-editor-error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 908,
                        columnNumber: 18
                    }, this) : null,
                    embedded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-setup-actions ds-setup-actions--embedded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>{
                                    emitCreateFormClick('back');
                                    onBack();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 918,
                                        columnNumber: 15
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                disabled: !state.company.trim(),
                                onClick: ()=>{
                                    emitCreateFormClick('continue_to_generation');
                                    if (!state.company.trim()) {
                                        setError('Tell Open Design about the company or design system first.');
                                        return;
                                    }
                                    setStep('confirm');
                                },
                                children: [
                                    "Generate",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 934,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 921,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 719,
        columnNumber: 5
    }, this);
}
_s(DesignSystemCreationFlow, "vAXUra9i+P1SVQc3fnm8iJ7mvbg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c = DesignSystemCreationFlow;
function DesignSystemDetailView({ id, selectedId, config, agents, onBack, onOpenProject, onSetDefault, onSystemsRefresh, onProjectsRefresh, initialRevisionJob, onInitialRevisionJobConsumed }) {
    _s1();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [system, setSystem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('system');
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusLine, setStatusLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generationJob, setGenerationJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revisionJob, setRevisionJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revisions, setRevisions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reviewDecisions, setReviewDecisions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [tokenRebuildBusy, setTokenRebuildBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackSection, setFeedbackSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatSeed, setChatSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workspaceProjectId, setWorkspaceProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workspaceProjectFiles, setWorkspaceProjectFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workspaceLoadError, setWorkspaceLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeConversationId, setActiveConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [projectChatMessages, setProjectChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatStreaming, setChatStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatError, setChatError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workspaceTabsState, setWorkspaceTabsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tabs: [],
        active: null
    });
    const [workspaceOpenRequest, setWorkspaceOpenRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const chatAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatCancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingWorkspaceFileWritesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const workspaceTabsLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const openedProjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suppressedInitialConversationProjectIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            let cancelled = false;
            setSystem(null);
            setRevisions([]);
            setWorkspaceProjectId(null);
            setWorkspaceProjectFiles([]);
            setWorkspaceLoadError(null);
            setConversations([]);
            setActiveConversationId(null);
            setProjectChatMessages([]);
            setChatError(null);
            setChatSeed(null);
            setWorkspaceTabsState({
                tabs: [],
                active: null
            });
            setWorkspaceOpenRequest(null);
            openedProjectRef.current = null;
            workspaceTabsLoadedRef.current = false;
            suppressedInitialConversationProjectIdsRef.current.clear();
            pendingWorkspaceFileWritesRef.current.clear();
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystem"])(id).then({
                "DesignSystemDetailView.useEffect": (detail)=>{
                    if (cancelled) return;
                    setSystem(detail);
                    setBody(detail?.body ?? '');
                }
            }["DesignSystemDetailView.useEffect"]);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemRevisions"])(id).then({
                "DesignSystemDetailView.useEffect": (next)=>{
                    if (cancelled) return;
                    setRevisions(next);
                }
            }["DesignSystemDetailView.useEffect"]);
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!initialRevisionJob?.id) return;
            setRevisionJob({
                "DesignSystemDetailView.useEffect": (current)=>current?.id === initialRevisionJob.id ? current : initialRevisionJob
            }["DesignSystemDetailView.useEffect"]);
            if (initialRevisionJob.kind === 'token-contract-rebuild') {
                setStatusLine('Token contract rebuild started');
            }
            onInitialRevisionJobConsumed?.(initialRevisionJob.id);
        }
    }["DesignSystemDetailView.useEffect"], [
        initialRevisionJob,
        onInitialRevisionJobConsumed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!system) return undefined;
            const currentSystem = system;
            let cancelled = false;
            async function syncWorkspaceProject() {
                setWorkspaceLoadError(null);
                const resolved = await resolveDesignSystemWorkspaceProject(currentSystem);
                if (cancelled) return;
                if (!resolved) {
                    setWorkspaceLoadError('Could not open the design system workspace.');
                    return;
                }
                const projectId = resolved.projectId;
                setWorkspaceProjectId(projectId);
                setWorkspaceProjectFiles(resolved.files);
                if (onOpenProject && openedProjectRef.current !== projectId) {
                    openedProjectRef.current = projectId;
                    await onProjectsRefresh?.();
                    if (!cancelled) onOpenProject(projectId);
                }
            }
            void syncWorkspaceProject();
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        onOpenProject,
        onProjectsRefresh,
        system
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!workspaceProjectId) return undefined;
            const projectId = workspaceProjectId;
            if (suppressedInitialConversationProjectIdsRef.current.delete(projectId)) {
                return undefined;
            }
            let cancelled = false;
            async function loadWorkspaceConversation() {
                const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listConversations"])(projectId);
                if (cancelled) return;
                if (existing.length > 0) {
                    setConversations(existing);
                    setActiveConversationId(existing[0].id);
                    return;
                }
                const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(projectId, 'Design system');
                if (cancelled) return;
                if (fresh) {
                    setConversations([
                        fresh
                    ]);
                    setActiveConversationId(fresh.id);
                }
            }
            void loadWorkspaceConversation();
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        workspaceProjectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!workspaceProjectId) return undefined;
            const projectId = workspaceProjectId;
            let cancelled = false;
            workspaceTabsLoadedRef.current = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadTabs"])(projectId).then({
                "DesignSystemDetailView.useEffect": (state)=>{
                    if (cancelled) return;
                    setWorkspaceTabsState(state);
                    workspaceTabsLoadedRef.current = true;
                }
            }["DesignSystemDetailView.useEffect"]);
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        workspaceProjectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!workspaceProjectId || !activeConversationId) {
                setProjectChatMessages([]);
                return undefined;
            }
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listMessages"])(workspaceProjectId, activeConversationId).then({
                "DesignSystemDetailView.useEffect": (messages)=>{
                    if (cancelled) return;
                    setProjectChatMessages(messages);
                }
            }["DesignSystemDetailView.useEffect"]);
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        activeConversationId,
        workspaceProjectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    chatAbortRef.current?.abort();
                    chatAbortRef.current = null;
                    chatCancelRef.current = null;
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            const jobId = readRememberedGenerationJob(id);
            if (!jobId) {
                setGenerationJob(null);
                return undefined;
            }
            const generationJobId = jobId;
            let cancelled = false;
            let timeoutId;
            async function pollGenerationJob() {
                const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemGenerationJob"])(generationJobId);
                if (cancelled) return;
                if (!next) {
                    clearRememberedGenerationJob(id);
                    setGenerationJob(null);
                    return;
                }
                setGenerationJob(next);
                if (next.status === 'succeeded') {
                    clearRememberedGenerationJob(id);
                    const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystem"])(id);
                    if (cancelled) return;
                    if (detail) {
                        setSystem(detail);
                        setBody(detail.body);
                    }
                    await onSystemsRefresh?.();
                    if (!cancelled) setStatusLine('Generation completed');
                    return;
                }
                if (next.status === 'failed') {
                    setStatusLine(next.error ? `Generation stopped: ${next.error}` : 'Generation stopped');
                    return;
                }
                timeoutId = window.setTimeout({
                    "DesignSystemDetailView.useEffect.pollGenerationJob": ()=>void pollGenerationJob()
                }["DesignSystemDetailView.useEffect.pollGenerationJob"], 700);
            }
            void pollGenerationJob();
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        id,
        onSystemsRefresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!revisionJob?.id || revisionJob.status === 'succeeded' || revisionJob.status === 'failed') {
                return undefined;
            }
            const jobId = revisionJob.id;
            let cancelled = false;
            let timeoutId;
            async function pollRevisionJob() {
                const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemGenerationJob"])(jobId);
                if (cancelled) return;
                if (!next) {
                    setStatusLine('Could not read revision progress');
                    return;
                }
                setRevisionJob(next);
                if (next.status === 'succeeded') {
                    const nextRevisions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemRevisions"])(id);
                    if (cancelled) return;
                    setRevisions(nextRevisions);
                    await onSystemsRefresh?.();
                    if (!cancelled) setStatusLine('Revision ready for review');
                    return;
                }
                if (next.status === 'failed') {
                    setStatusLine(next.error ? `Revision stopped: ${next.error}` : 'Revision stopped');
                    return;
                }
                timeoutId = window.setTimeout({
                    "DesignSystemDetailView.useEffect.pollRevisionJob": ()=>void pollRevisionJob()
                }["DesignSystemDetailView.useEffect.pollRevisionJob"], 650);
            }
            timeoutId = window.setTimeout({
                "DesignSystemDetailView.useEffect": ()=>void pollRevisionJob()
            }["DesignSystemDetailView.useEffect"], 250);
            return ({
                "DesignSystemDetailView.useEffect": ()=>{
                    cancelled = true;
                    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
                }
            })["DesignSystemDetailView.useEffect"];
        }
    }["DesignSystemDetailView.useEffect"], [
        id,
        onSystemsRefresh,
        revisionJob?.id,
        revisionJob?.status
    ]);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemDetailView.useMemo[sections]": ()=>parseDesignSystemSections(body)
    }["DesignSystemDetailView.useMemo[sections]"], [
        body
    ]);
    const published = system?.status === 'published';
    const editable = system?.isEditable !== false;
    const activeJob = revisionJob ?? generationJob;
    const pendingRevision = revisions.find((revision)=>revision.status === 'pending') ?? null;
    const recentRevisions = revisions.slice(0, 5);
    const generationActive = activeJob?.status === 'queued' || activeJob?.status === 'running';
    // Multi-surface DS page_view (v2 doc). One emission per
    // (system, generationActive) transition: while generation is
    // running we surface `area=design_system_generation`; once it
    // settles we surface `area=design_system_preview`. The fourth
    // onboarding step (`area=generation_progress`) piggy-backs on the
    // generation emission when an onboarding session id is present.
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const designSystemStatus = generationActive ? 'generating' : system?.status ?? 'unknown';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemDetailView.useEffect": ()=>{
            if (!system) return;
            const onboardingSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekOnboardingSessionId"])();
            const entryFrom = onboardingSessionId ? 'onboarding' : 'unknown';
            if (generationActive) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                    page_name: 'design_system_project',
                    area: 'design_system_generation',
                    view_type: 'page',
                    entry_from: entryFrom,
                    design_system_id: system.id,
                    project_id: workspaceProjectId ?? undefined,
                    // Origin is the DS's provenance-style source. We don't yet
                    // have a precise mapping from `system.source` / provenance
                    // metadata to the v2 enum, so we report `unknown` rather
                    // than mis-tag — dashboards still see the funnel via
                    // `entry_from`. A follow-up can derive this honestly.
                    design_system_source: 'unknown',
                    design_system_status: 'generating'
                });
                if (onboardingSessionId) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                        page_name: 'onboarding',
                        area: 'generation_progress',
                        step_index: 'progress',
                        step_name: 'generation',
                        onboarding_session_id: onboardingSessionId
                    });
                    // Generation is the last onboarding step; clear so a later
                    // DS visit unrelated to onboarding doesn't re-attribute.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearOnboardingSessionId"])();
                }
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                    page_name: 'design_system_project',
                    area: 'design_system_preview',
                    view_type: 'page',
                    entry_from: entryFrom,
                    design_system_id: system.id,
                    project_id: workspaceProjectId ?? undefined,
                    design_system_source: 'unknown',
                    design_system_status: designSystemStatus
                });
            }
        }
    }["DesignSystemDetailView.useEffect"], [
        analytics.track,
        system?.id,
        generationActive,
        designSystemStatus,
        system,
        workspaceProjectId
    ]);
    const introChatMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemDetailView.useMemo[introChatMessages]": ()=>buildDesignSystemChatMessages({
                system,
                activeJob,
                revisions: recentRevisions,
                generationActive
            })
    }["DesignSystemDetailView.useMemo[introChatMessages]"], [
        activeJob,
        generationActive,
        recentRevisions,
        system
    ]);
    const chatMessages = projectChatMessages.length > 0 ? projectChatMessages : introChatMessages;
    const workspaceActivityMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemDetailView.useMemo[workspaceActivityMessage]": ()=>findWorkspaceActivityMessage(chatMessages)
    }["DesignSystemDetailView.useMemo[workspaceActivityMessage]"], [
        chatMessages
    ]);
    async function savePatch(input) {
        if (!system || !editable) return null;
        setSaving(true);
        setStatusLine(null);
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDesignSystemDraft"])(system.id, input);
            if (updated) {
                setSystem(updated);
                setBody(updated.body);
                await onSystemsRefresh?.();
            }
            return updated;
        } finally{
            setSaving(false);
        }
    }
    async function saveBody() {
        const nextBody = body;
        const updated = await savePatch({
            body: nextBody
        });
        if (updated && workspaceProjectId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(workspaceProjectId, 'DESIGN.md', nextBody);
            await refreshWorkspaceProjectFiles(workspaceProjectId);
        }
        setStatusLine(updated ? 'Saved DESIGN.md' : 'Could not save changes');
    }
    async function togglePublished(next) {
        const startedAt = performance.now();
        const action = next ? 'publish' : 'unpublish';
        const statusBefore = mapDsStatusToTracking(system?.status);
        const isDefaultBefore = system?.id === selectedId;
        let succeeded = false;
        let errorCode;
        try {
            const updated = await savePatch({
                body,
                status: next ? 'published' : 'draft'
            });
            succeeded = Boolean(updated);
            if (!succeeded) errorCode = 'DS_STATUS_UPDATE_RETURNED_NULL';
            setStatusLine(updated ? next ? 'Published' : 'Moved back to draft' : 'Could not update status');
        } catch (err) {
            errorCode = err instanceof Error ? `DS_STATUS_UPDATE_THREW:${err.message.slice(0, 80)}` : 'DS_STATUS_UPDATE_THREW';
            throw err;
        } finally{
            if (system?.id) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemStatusResult"])(analytics.track, {
                    page_name: 'design_system_project',
                    area: 'design_system_status',
                    action,
                    result: succeeded ? 'success' : 'failed',
                    design_system_id: system.id,
                    project_id: workspaceProjectId ?? undefined,
                    status_before: statusBefore,
                    status_after: succeeded ? next ? 'published' : 'draft' : statusBefore,
                    is_default_before: isDefaultBefore,
                    is_default_after: isDefaultBefore,
                    error_code: errorCode,
                    duration_ms: Math.round(performance.now() - startedAt)
                });
            }
        }
    }
    function emitReviewResult(section, index, reviewAction) {
        if (!system) return;
        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemModuleSlug"])(section.title);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemReviewResult"])(analytics.track, {
            page_name: 'design_system_project',
            area: 'design_system_preview',
            review_action: reviewAction,
            result: 'submitted',
            design_system_id: system.id,
            project_id: workspaceProjectId ?? '',
            module_id: slug,
            module_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemModuleType"])(slug),
            module_index: index,
            feedback_length_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemLengthBucket"])(null),
            has_custom_feedback: false,
            duration_ms: 0
        });
    }
    async function ensureWorkspaceProject(options) {
        if (!system) return workspaceProjectId;
        if (workspaceProjectId) return workspaceProjectId;
        const resolved = await resolveDesignSystemWorkspaceProject(system);
        if (!resolved) return null;
        if (options?.suppressInitialConversation) {
            suppressedInitialConversationProjectIdsRef.current.add(resolved.projectId);
        }
        setWorkspaceProjectId(resolved.projectId);
        setWorkspaceProjectFiles(resolved.files);
        return resolved.projectId;
    }
    const refreshWorkspaceProjectFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[refreshWorkspaceProjectFiles]": async (projectId)=>{
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFiles"])(projectId);
            setWorkspaceProjectFiles(next);
            return next;
        }
    }["DesignSystemDetailView.useCallback[refreshWorkspaceProjectFiles]"], []);
    const syncDesignSystemBodyFromWorkspace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[syncDesignSystemBodyFromWorkspace]": async (projectId)=>{
            if (!system || !editable) return false;
            const nextBody = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, 'DESIGN.md', {
                cache: 'no-store',
                cacheBustKey: Date.now()
            });
            if (!nextBody || nextBody === body) return false;
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDesignSystemDraft"])(system.id, {
                body: nextBody
            });
            if (!updated) return false;
            setSystem(updated);
            setBody(updated.body);
            await onSystemsRefresh?.();
            return true;
        }
    }["DesignSystemDetailView.useCallback[syncDesignSystemBodyFromWorkspace]"], [
        body,
        editable,
        onSystemsRefresh,
        system
    ]);
    const refreshDesignSystemWorkspace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[refreshDesignSystemWorkspace]": async (projectId)=>{
            const nextFiles = await refreshWorkspaceProjectFiles(projectId);
            await syncDesignSystemBodyFromWorkspace(projectId);
            return nextFiles;
        }
    }["DesignSystemDetailView.useCallback[refreshDesignSystemWorkspace]"], [
        refreshWorkspaceProjectFiles,
        syncDesignSystemBodyFromWorkspace
    ]);
    const persistProjectMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[persistProjectMessage]": (projectId, conversationId, message)=>{
            if (!conversationId) return;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(projectId, conversationId, message);
        }
    }["DesignSystemDetailView.useCallback[persistProjectMessage]"], []);
    const persistWorkspaceTabsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[persistWorkspaceTabsState]": (next)=>{
            setWorkspaceTabsState(next);
            if (workspaceProjectId && workspaceTabsLoadedRef.current) {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTabs"])(workspaceProjectId, next);
            }
        }
    }["DesignSystemDetailView.useCallback[persistWorkspaceTabsState]"], [
        workspaceProjectId
    ]);
    const requestWorkspaceFileOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[requestWorkspaceFileOpen]": (name)=>{
            if (!name) return;
            setWorkspaceOpenRequest({
                name,
                nonce: Date.now()
            });
        }
    }["DesignSystemDetailView.useCallback[requestWorkspaceFileOpen]"], []);
    const sendProjectChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[sendProjectChatMessage]": async (prompt, attachments, commentAttachments)=>{
            const rawText = prompt.trim();
            if (!rawText || chatStreaming || !system) return;
            const text = feedbackSection ? `${rawText}\n\nFocus section: ${feedbackSection}` : rawText;
            const projectId = workspaceProjectId ?? await ensureWorkspaceProject();
            if (!projectId) {
                setChatError('Could not open the design system workspace.');
                return;
            }
            let conversationId = activeConversationId;
            if (!conversationId) {
                const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(projectId, 'Design system');
                if (!fresh) {
                    setChatError('Could not create a design system conversation.');
                    return;
                }
                setConversations([
                    fresh
                ]);
                setActiveConversationId(fresh.id);
                conversationId = fresh.id;
            }
            if (config.mode !== 'daemon' || !config.agentId) {
                setChatError('Pick a local agent first, then ask Open Design to update this design system.');
                return;
            }
            setChatError(null);
            setStatusLine(null);
            setChatSeed(null);
            // `design_system_review_result` with `submit_revision` fires
            // once per send that originates from a Needs-work section seed.
            // The earlier Looks good / Needs work click emitted
            // `result: submitted` with `review_action: looks_good|needs_work`
            // — this is the second leg (`action=submit_revision`), recording
            // the moment the user actually dispatched a fix request with
            // text. Without it the funnel can't separate "user picked Needs
            // work but never sent" from "user picked Needs work and sent a
            // revision request".
            if (feedbackSection && system) {
                const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemModuleSlug"])(feedbackSection);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemReviewResult"])(analytics.track, {
                    page_name: 'design_system_project',
                    area: 'design_system_preview',
                    review_action: 'submit_revision',
                    result: 'submitted',
                    design_system_id: system.id,
                    project_id: projectId,
                    module_id: slug,
                    module_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemModuleType"])(slug),
                    module_index: 0,
                    feedback_length_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemLengthBucket"])(rawText),
                    has_custom_feedback: rawText.length > 0,
                    duration_ms: 0
                });
            }
            setFeedbackSection(null);
            const startedAt = Date.now();
            const userMsg = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                role: 'user',
                content: text,
                createdAt: startedAt,
                attachments: attachments.length > 0 ? attachments : undefined,
                commentAttachments: commentAttachments.length > 0 ? commentAttachments : undefined
            };
            const selectedAgent = agents.find({
                "DesignSystemDetailView.useCallback[sendProjectChatMessage].selectedAgent": (agent)=>agent.id === config.agentId
            }["DesignSystemDetailView.useCallback[sendProjectChatMessage].selectedAgent"]);
            const selectedModel = config.agentModels?.[config.agentId];
            const assistantMsg = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                role: 'assistant',
                content: '',
                agentId: config.agentId,
                agentName: [
                    selectedAgent?.name ?? config.agentId,
                    selectedModel?.model
                ].filter(Boolean).join(' · '),
                events: [],
                createdAt: startedAt,
                startedAt,
                runStatus: 'running'
            };
            const previousMessages = projectChatMessages.length > 0 ? projectChatMessages : introChatMessages;
            const nextHistory = [
                ...previousMessages,
                userMsg
            ];
            const agentHistory = [
                ...previousMessages,
                {
                    ...userMsg,
                    content: designSystemWorkspaceAgentPrompt(text)
                }
            ];
            let assistantSnapshot = assistantMsg;
            const updateAssistant = {
                "DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant": (updater, persist = false)=>{
                    assistantSnapshot = updater(assistantSnapshot);
                    setProjectChatMessages({
                        "DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant": (current)=>current.map({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant": (message)=>message.id === assistantSnapshot.id ? assistantSnapshot : message
                            }["DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant"])
                    }["DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant"]);
                    if (persist) persistProjectMessage(projectId, conversationId, assistantSnapshot);
                }
            }["DesignSystemDetailView.useCallback[sendProjectChatMessage].updateAssistant"];
            setProjectChatMessages([
                ...nextHistory,
                assistantMsg
            ]);
            persistProjectMessage(projectId, conversationId, userMsg);
            if (projectChatMessages.length === 0) {
                setConversations({
                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (current)=>current.map({
                            "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (conversation)=>conversation.id === conversationId ? {
                                    ...conversation,
                                    title: text.slice(0, 60) || 'Design system'
                                } : conversation
                        }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"])
                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]);
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConversation"])(projectId, conversationId, {
                    title: text.slice(0, 60) || 'Design system'
                });
            }
            const controller = new AbortController();
            const cancelController = new AbortController();
            chatAbortRef.current = controller;
            chatCancelRef.current = cancelController;
            pendingWorkspaceFileWritesRef.current.clear();
            setChatStreaming(true);
            // DS workspace chat = the run that generates / regenerates the
            // DESIGN.md and preview modules. Every send from this surface
            // is a DS-variant run, so we always populate analyticsHints. The
            // `regenerate_from_review` entry_from is reserved for revisions
            // triggered by the Looks good / Needs work loop (which today
            // also flows through this composer); a future split can detect
            // a pending revision and switch entry_from accordingly.
            const wasOnboardingHandoff = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekOnboardingSessionId"])()) || sessionStorage.getItem(`od:auto-send-first:${projectId}`) === '1';
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamViaDaemon"])({
                agentId: config.agentId,
                history: agentHistory,
                signal: controller.signal,
                cancelSignal: cancelController.signal,
                projectId,
                conversationId,
                assistantMessageId: assistantMsg.id,
                clientRequestId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                skillId: null,
                designSystemId: system.id,
                attachments: attachments.map({
                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (attachment)=>attachment.path
                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]),
                commentAttachments,
                model: selectedModel?.model ?? null,
                reasoning: selectedModel?.reasoning ?? null,
                locale,
                analyticsHints: {
                    entryFrom: wasOnboardingHandoff ? 'onboarding_design_system' : feedbackSection ? 'regenerate_from_review' : 'design_system_create',
                    projectKind: 'design_system',
                    designSystemRunContext: {
                        origin: 'manual_create'
                    }
                },
                handlers: {
                    onDelta: {
                        "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (delta)=>{
                            updateAssistant({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                        ...message,
                                        content: message.content + delta,
                                        events: [
                                            ...message.events ?? [],
                                            {
                                                kind: 'text',
                                                text: delta
                                            }
                                        ]
                                    })
                            }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]);
                        }
                    }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"],
                    onAgentEvent: {
                        "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (event)=>{
                            if (event.kind === 'text') return;
                            updateAssistant({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                        ...message,
                                        events: [
                                            ...message.events ?? [],
                                            event
                                        ]
                                    })
                            }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]);
                            if (event.kind === 'tool_use') {
                                const filePath = writableProjectFilePathFromToolUse(event);
                                if (filePath) pendingWorkspaceFileWritesRef.current.set(event.id, filePath);
                                return;
                            }
                            if (event.kind === 'tool_result') {
                                const filePath = pendingWorkspaceFileWritesRef.current.get(event.toolUseId);
                                if (!filePath) return;
                                pendingWorkspaceFileWritesRef.current.delete(event.toolUseId);
                                if (event.isError) return;
                                void refreshWorkspaceProjectFiles(projectId).then({
                                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (nextFiles)=>{
                                        const decision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decideAutoOpenAfterWrite"])(filePath, nextFiles);
                                        if (decision.shouldOpen && decision.fileName) {
                                            requestWorkspaceFileOpen(decision.fileName);
                                        }
                                        if (isDesignSystemSourcePath(filePath)) {
                                            void syncDesignSystemBodyFromWorkspace(projectId);
                                        }
                                    }
                                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]);
                            }
                        }
                    }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"],
                    onDone: {
                        "DesignSystemDetailView.useCallback[sendProjectChatMessage]": ()=>{
                            updateAssistant({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                        ...message,
                                        endedAt: Date.now(),
                                        runStatus: message.runStatus === 'failed' || message.runStatus === 'canceled' ? message.runStatus : 'succeeded'
                                    })
                            }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], true);
                            setChatStreaming(false);
                            chatAbortRef.current = null;
                            chatCancelRef.current = null;
                            pendingWorkspaceFileWritesRef.current.clear();
                            void ({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage]": async ()=>{
                                    await refreshWorkspaceProjectFiles(projectId);
                                    const synced = await syncDesignSystemBodyFromWorkspace(projectId);
                                    const audit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectDesignSystemPackageAudit"])(projectId);
                                    const auditSummary = audit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeDesignSystemPackageAudit"])(audit) : null;
                                    if (auditSummary) {
                                        updateAssistant({
                                            "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                                    ...message,
                                                    events: [
                                                        ...message.events ?? [],
                                                        {
                                                            kind: 'status',
                                                            label: 'audit',
                                                            detail: auditSummary
                                                        }
                                                    ]
                                                })
                                        }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], true);
                                    }
                                    const repairPrompt = audit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDesignSystemPackageAuditRepairPrompt"])(audit) : null;
                                    if (auditSummary) {
                                        setStatusLine(repairPrompt ? `${auditSummary} Review the audit details before running a repair.` : `Workspace updated. ${auditSummary}`);
                                    } else {
                                        setStatusLine(synced ? 'Workspace updated and DESIGN.md synced for review.' : 'Workspace updated. Review the files or ask for another change.');
                                    }
                                    await onProjectsRefresh?.();
                                }
                            })["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]();
                        }
                    }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"],
                    onError: {
                        "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (error)=>{
                            const message = error.message;
                            setChatError(message);
                            updateAssistant({
                                "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (previous)=>({
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrorStatusEvent"])(previous, message),
                                        endedAt: Date.now(),
                                        runStatus: 'failed'
                                    })
                            }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], true);
                            setChatStreaming(false);
                            chatAbortRef.current = null;
                            chatCancelRef.current = null;
                            pendingWorkspaceFileWritesRef.current.clear();
                        }
                    }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]
                },
                onRunCreated: {
                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (runId)=>{
                        updateAssistant({
                            "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                    ...message,
                                    runId,
                                    runStatus: 'queued'
                                })
                        }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], true);
                    }
                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"],
                onRunStatus: {
                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (runStatus)=>{
                        updateAssistant({
                            "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                    ...message,
                                    runStatus,
                                    endedAt: runStatus === 'succeeded' || runStatus === 'failed' || runStatus === 'canceled' ? message.endedAt ?? Date.now() : message.endedAt
                                })
                        }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], runStatus === 'succeeded' || runStatus === 'failed' || runStatus === 'canceled');
                    }
                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"],
                onRunEventId: {
                    "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (lastRunEventId)=>{
                        updateAssistant({
                            "DesignSystemDetailView.useCallback[sendProjectChatMessage]": (message)=>({
                                    ...message,
                                    lastRunEventId
                                })
                        }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]);
                    }
                }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"]
            });
        }
    }["DesignSystemDetailView.useCallback[sendProjectChatMessage]"], [
        activeConversationId,
        agents,
        chatStreaming,
        config.agentId,
        config.agentModels,
        config.mode,
        ensureWorkspaceProject,
        feedbackSection,
        introChatMessages,
        locale,
        onProjectsRefresh,
        persistProjectMessage,
        projectChatMessages,
        refreshWorkspaceProjectFiles,
        requestWorkspaceFileOpen,
        syncDesignSystemBodyFromWorkspace,
        system,
        workspaceProjectId
    ]);
    const stopProjectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[stopProjectChat]": ()=>{
            chatCancelRef.current?.abort();
            chatAbortRef.current?.abort();
            chatCancelRef.current = null;
            chatAbortRef.current = null;
            pendingWorkspaceFileWritesRef.current.clear();
            setChatStreaming(false);
        }
    }["DesignSystemDetailView.useCallback[stopProjectChat]"], []);
    const createProjectChatConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignSystemDetailView.useCallback[createProjectChatConversation]": ()=>{
            void ({
                "DesignSystemDetailView.useCallback[createProjectChatConversation]": async ()=>{
                    const projectId = workspaceProjectId ?? await ensureWorkspaceProject({
                        suppressInitialConversation: true
                    });
                    if (!projectId) {
                        setChatError('Could not open the design system workspace.');
                        return;
                    }
                    const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(projectId, 'Design system');
                    if (!fresh) {
                        setChatError('Could not create a design system conversation.');
                        return;
                    }
                    setConversations({
                        "DesignSystemDetailView.useCallback[createProjectChatConversation]": (current)=>[
                                fresh,
                                ...current
                            ]
                    }["DesignSystemDetailView.useCallback[createProjectChatConversation]"]);
                    setActiveConversationId(fresh.id);
                    setProjectChatMessages([]);
                    setChatError(null);
                    setChatSeed({
                        id: `general-${Date.now()}`,
                        text: 'Update this design system: '
                    });
                }
            })["DesignSystemDetailView.useCallback[createProjectChatConversation]"]();
        }
    }["DesignSystemDetailView.useCallback[createProjectChatConversation]"], [
        ensureWorkspaceProject,
        workspaceProjectId
    ]);
    async function resolveRevision(revision, status) {
        if (!system) return;
        setSaving(true);
        setStatusLine(null);
        try {
            const updatedRevision = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDesignSystemRevisionStatus"])(system.id, revision.id, status);
            if (!updatedRevision) {
                setStatusLine(status === 'accepted' ? 'Could not accept revision' : 'Could not reject revision');
                return;
            }
            const [detail, nextRevisions] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystem"])(system.id),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystemRevisions"])(system.id)
            ]);
            if (detail) {
                setSystem(detail);
                setBody(detail.body);
            }
            setRevisions(nextRevisions);
            await onSystemsRefresh?.();
            setStatusLine(status === 'accepted' ? 'Revision accepted' : 'Revision rejected');
        } finally{
            setSaving(false);
        }
    }
    async function startTokenContractRebuild(force = false) {
        if (!system || tokenRebuildBusy) return;
        setTokenRebuildBusy(true);
        setStatusLine(null);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startDesignSystemTokenContractRebuildJob"])(system.id, {
                force
            });
            if (!result) {
                setStatusLine('Could not start token contract rebuild');
                return;
            }
            if (result.job) {
                setRevisionJob(result.job);
                setStatusLine('Token contract rebuild started');
                return;
            }
            setStatusLine(result.decision.reason);
        } finally{
            setTokenRebuildBusy(false);
        }
    }
    if (!system) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ds-setup-shell ds-setup-shell--center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-setup-center-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Loading design system..."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1840,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Opening the review workspace."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1841,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 1839,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
            lineNumber: 1838,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ds-workspace",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "ds-project-chat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-project-chat__bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-only",
                                onClick: onBack,
                                "aria-label": "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1851,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: system.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1854,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: published ? 'Published' : 'Draft'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1855,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1850,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-project-chat__pane",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPane"], {
                            messages: chatMessages,
                            streaming: generationActive || saving || chatStreaming,
                            error: chatError,
                            config: config,
                            projectId: workspaceProjectId,
                            projectFiles: workspaceProjectFiles,
                            onEnsureProject: ensureWorkspaceProject,
                            onSend: (prompt, attachments, commentAttachments)=>{
                                void sendProjectChatMessage(prompt, attachments, commentAttachments);
                            },
                            onStop: stopProjectChat,
                            initialDraft: chatSeed?.text,
                            conversations: conversations,
                            activeConversationId: activeConversationId,
                            // Intentionally omit `messagesConversationId`: the loader above does
                            // not retag `projectChatMessages` during a conversation switch, so
                            // trusting the live length would show the previous conversation's
                            // count for the newly active row. Fall back to the persisted
                            // `conversation.messageCount` for a stable list count instead.
                            onSelectConversation: setActiveConversationId,
                            onDeleteConversation: ()=>{},
                            onNewConversation: createProjectChatConversation
                        }, `${activeConversationId ?? 'design-system-chat'}:${chatSeed?.id ?? 'ready'}`, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 1858,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1857,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 1849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "ds-review-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "ds-review-tabs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: onBack,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1889,
                                        columnNumber: 13
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1888,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "segmented",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: tab === 'system' ? 'active' : '',
                                        onClick: ()=>setTab('system'),
                                        children: "Design System"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1893,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: tab === 'files' ? 'active' : '',
                                        onClick: ()=>setTab('files'),
                                        children: "Design Files"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1900,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1892,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1908,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1887,
                        columnNumber: 9
                    }, this),
                    tab === 'system' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-review-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Review draft design system"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1915,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-review-rule",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1916,
                                columnNumber: 13
                            }, this),
                            activeJob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GenerationStatusCard, {
                                job: activeJob
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1917,
                                columnNumber: 26
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-publish-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: generationActive ? activeJob?.kind === 'token-contract-rebuild' ? 'Open Design is preparing a token contract rebuild for review. The active contract stays unchanged until you accept it.' : activeJob?.kind === 'revision' ? 'Open Design is applying your feedback. You can keep reviewing while the updated draft is prepared.' : 'Open Design is still working, but you can start giving feedback on the work so far.' : 'Open Design is ready for review. Give feedback on the work so far, then publish when it is useful for future projects.'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1919,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: published,
                                                disabled: !editable || saving,
                                                onChange: (event)=>void togglePublished(event.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 1929,
                                                columnNumber: 17
                                            }, this),
                                            "Published"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1928,
                                        columnNumber: 15
                                    }, this),
                                    selectedId !== system.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "compact",
                                        onClick: ()=>{
                                            const statusBefore = mapDsStatusToTracking(system.status);
                                            onSetDefault(system.id);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemStatusResult"])(analytics.track, {
                                                page_name: 'design_system_project',
                                                area: 'design_system_status',
                                                action: 'set_default',
                                                result: 'success',
                                                design_system_id: system.id,
                                                project_id: workspaceProjectId ?? undefined,
                                                status_before: statusBefore,
                                                status_after: statusBefore,
                                                is_default_before: false,
                                                is_default_after: true,
                                                duration_ms: 0
                                            });
                                        },
                                        children: "Make default"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1938,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1918,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemPackageCard, {
                                system: system,
                                busy: tokenRebuildBusy || generationActive,
                                onRebuildTokenContract: ()=>void startTokenContractRebuild(false),
                                onForceRebuildTokenContract: ()=>void startTokenContractRebuild(true)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1963,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-warning-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "help-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1970,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Missing brand fonts"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 1972,
                                                columnNumber: 17
                                            }, this),
                                            "Open Design is rendering typography with substitute web fonts."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1971,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "compact",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "upload"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 1976,
                                                columnNumber: 17
                                            }, this),
                                            "Upload fonts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1975,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1969,
                                columnNumber: 13
                            }, this),
                            statusLine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-status-line",
                                children: statusLine
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1980,
                                columnNumber: 27
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkspaceActivityCard, {
                                message: workspaceActivityMessage,
                                active: chatStreaming
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1981,
                                columnNumber: 13
                            }, this),
                            pendingRevision ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevisionDiffCard, {
                                revision: pendingRevision,
                                saving: saving,
                                onAccept: ()=>void resolveRevision(pendingRevision, 'accepted'),
                                onReject: ()=>void resolveRevision(pendingRevision, 'rejected')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1983,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-review-sections",
                                children: sections.map((section, index)=>{
                                    const isOpen = index === openSection;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "ds-review-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ds-review-section__head",
                                                onClick: ()=>setOpenSection(isOpen ? -1 : index),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 2002,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: section.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 2003,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 2001,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: isOpen ? 'chevron-down' : 'chevron-right'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 2005,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 1996,
                                                columnNumber: 21
                                            }, this),
                                            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ds-review-section__body",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ds-section-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `ghost success ${reviewDecisions[section.title] === 'good' ? 'active' : ''}`,
                                                                onClick: ()=>{
                                                                    setReviewDecisions((curr)=>({
                                                                            ...curr,
                                                                            [section.title]: 'good'
                                                                        }));
                                                                    setStatusLine(`${section.title} marked as looks good`);
                                                                    emitReviewResult(section, index, 'looks_good');
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                        name: "check"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                        lineNumber: 2019,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Looks good"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 2010,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: `ghost danger ${reviewDecisions[section.title] === 'work' ? 'active' : ''}`,
                                                                onClick: ()=>{
                                                                    setReviewDecisions((curr)=>({
                                                                            ...curr,
                                                                            [section.title]: 'work'
                                                                        }));
                                                                    setFeedbackSection(section.title);
                                                                    setChatSeed({
                                                                        id: `${section.title}-${Date.now()}`,
                                                                        text: `Needs work on ${section.title}: `
                                                                    });
                                                                    emitReviewResult(section, index, 'needs_work');
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                        name: "comment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                        lineNumber: 2035,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Needs work..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                                lineNumber: 2022,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 2009,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        children: section.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 2039,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2008,
                                                columnNumber: 23
                                            }, this) : null
                                        ]
                                    }, `${section.title}-${index}`, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 1995,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 1991,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ds-body-editor",
                                children: [
                                    "DESIGN.md",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$form$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        value: body,
                                        onChange: (event)=>setBody(event.target.value),
                                        rows: 16,
                                        disabled: !editable
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2048,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2046,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                disabled: !editable || saving,
                                onClick: ()=>void saveBody(),
                                children: "Save DESIGN.md"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2055,
                                columnNumber: 13
                            }, this),
                            recentRevisions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevisionHistoryList, {
                                revisions: recentRevisions
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2058,
                                columnNumber: 43
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 1914,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-file-workspace-host",
                        children: workspaceProjectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileWorkspace"], {
                            projectId: workspaceProjectId,
                            projectKind: "prototype",
                            files: workspaceProjectFiles,
                            liveArtifacts: [],
                            onRefreshFiles: ()=>{
                                void refreshDesignSystemWorkspace(workspaceProjectId);
                            },
                            isDeck: false,
                            streaming: chatStreaming || generationActive || saving,
                            openRequest: workspaceOpenRequest,
                            tabsState: workspaceTabsState,
                            onTabsStateChange: persistWorkspaceTabsState
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2063,
                            columnNumber: 15
                        }, this) : workspaceLoadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "viewer-empty",
                            children: workspaceLoadError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2078,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "viewer-empty",
                            children: "Opening the design system workspace..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2080,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2061,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 1886,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 1848,
        columnNumber: 5
    }, this);
}
_s1(DesignSystemDetailView, "Bn0L0fF2lQiiAiC5YH5VfroF66A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = DesignSystemDetailView;
function buildDesignSystemChatMessages({ system, activeJob, revisions, generationActive }) {
    const createdAt = timestampFromIso(system?.createdAt) ?? Date.now();
    const messages = [
        {
            id: 'design-system-create-request',
            role: 'user',
            content: 'Create design system',
            createdAt
        },
        {
            id: activeJob ? `design-system-agent-${activeJob.id}` : 'design-system-agent-ready',
            role: 'assistant',
            content: designSystemAssistantMessage(system, activeJob, generationActive),
            events: [
                {
                    kind: 'text',
                    text: designSystemAssistantMessage(system, activeJob, generationActive)
                }
            ],
            createdAt: createdAt + 1,
            runId: activeJob?.id,
            runStatus: activeJob ? activeJob.status === 'failed' ? 'failed' : activeJob.status === 'succeeded' ? 'succeeded' : 'running' : undefined
        }
    ];
    for (const revision of [
        ...revisions
    ].reverse()){
        const revisionTs = timestampFromIso(revision.createdAt) ?? Date.now();
        messages.push({
            id: `design-system-revision-user-${revision.id}`,
            role: 'user',
            content: revision.sectionTitle ? `${revision.feedback}\n\nSection: ${revision.sectionTitle}` : revision.feedback,
            createdAt: revisionTs
        });
        messages.push({
            id: `design-system-revision-assistant-${revision.id}`,
            role: 'assistant',
            content: designSystemRevisionAssistantMessage(revision),
            events: [
                {
                    kind: 'text',
                    text: designSystemRevisionAssistantMessage(revision)
                }
            ],
            createdAt: revisionTs + 1,
            runId: revision.jobId,
            runStatus: revision.status === 'pending' ? 'succeeded' : undefined
        });
    }
    return messages;
}
function designSystemRevisionAssistantMessage(revision) {
    if (revision.status === 'pending') {
        return 'I prepared a proposed update. Review the diff card on the right, then accept it or ask for another change.';
    }
    if (revision.status === 'accepted') {
        return 'Accepted. The design system draft now includes this update.';
    }
    return 'Rejected. I left the current design system unchanged.';
}
function designSystemAssistantMessage(system, activeJob, generationActive) {
    const summary = system?.summary?.trim();
    if (generationActive) {
        if (activeJob?.kind === 'token-contract-rebuild') {
            return 'I am preparing a token contract rebuild for review. The active contract will stay unchanged until the revision is accepted.';
        }
        if (activeJob?.kind === 'revision') {
            return 'I am applying your feedback to the design system. You can keep reviewing the current draft while the revision runs.';
        }
        return 'I am creating the design system workspace, preview cards, and supporting files from the context you provided.';
    }
    const base = 'Your design system draft is ready. Review the Design System tab, inspect generated files, publish it, or ask me for changes here.';
    return summary ? `${base}\n\nCaptured direction: ${summary}` : base;
}
function designSystemWorkspaceAgentPrompt(feedback) {
    return [
        feedback,
        '',
        'Design system workspace instructions:',
        '- Treat this project folder as the editable design-system workspace.',
        '- Update DESIGN.md when the design guidance, tokens, components, brand rules, or review sections change.',
        '- Update supporting preview files, CSS tokens, assets, or UI kit examples when they help make the design system reviewable.',
        '- Keep changes scoped to this design system. Preserve existing file names unless a new supporting file is clearly needed.',
        '- After editing, briefly summarize what changed and which files are ready to review.'
    ].join('\n');
}
function findWorkspaceActivityMessage(messages) {
    for(let index = messages.length - 1; index >= 0; index -= 1){
        const message = messages[index];
        if (!message || message.role !== 'assistant') continue;
        if (message.events?.some((event)=>event.kind !== 'text')) return message;
        if (message.runStatus === 'queued' || message.runStatus === 'running') return message;
        if (message.runStatus === 'succeeded' || message.runStatus === 'failed' || message.runStatus === 'canceled') return message;
    }
    return null;
}
function DesignSystemPackageCard({ system, busy, onRebuildTokenContract, onForceRebuildTokenContract }) {
    const info = system.packageInfo;
    const manifest = info?.manifest;
    const evidence = info?.sourceEvidence;
    const tokenContract = evidence?.tokenContract;
    const sourceLabel = manifest?.source?.type ? sourceTypeLabel(manifest.source.type) : sourceTypeLabel(system.source);
    const previewPages = manifest?.preview?.pages ?? [];
    const sourceFiles = manifest?.sourceFiles;
    const sourceFileCount = [
        sourceFiles?.scanned,
        sourceFiles?.evidence,
        sourceFiles?.tokens,
        sourceFiles?.report,
        sourceFiles?.snippets
    ].filter(Boolean).length;
    const protocolItems = [
        manifest?.usage ? manifest.usage : null,
        manifest?.files?.design ?? 'DESIGN.md',
        manifest?.files?.tokens ?? 'tokens.css',
        manifest?.files?.designTokens,
        manifest?.files?.tailwind,
        manifest?.files?.components,
        manifest?.componentsManifest
    ].filter((item)=>typeof item === 'string' && item.length > 0);
    const evidenceStats = [
        evidence?.scannedFileCount !== undefined ? {
            label: 'Scanned files',
            value: String(evidence.scannedFileCount)
        } : null,
        evidence?.tokenCount !== undefined ? {
            label: 'Source tokens',
            value: String(evidence.tokenCount)
        } : null,
        evidence?.snippetCount !== undefined ? {
            label: 'Snippets',
            value: String(evidence.snippetCount)
        } : null,
        tokenContract?.fallbackTokens !== undefined ? {
            label: 'Fallback tokens',
            value: String(tokenContract.fallbackTokens)
        } : null,
        manifest?.fonts?.length ? {
            label: 'Fonts',
            value: String(manifest.fonts.length)
        } : null
    ].filter((item)=>item !== null);
    const confidence = evidence?.confidence ? Object.entries(evidence.confidence) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ds-package-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-package-card__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: manifest ? 'Structured import package' : 'Legacy design system'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: manifest ? `${sourceLabel} · ${manifest.importMode ?? 'normalized'} mode · manifest indexed` : `${sourceLabel} · DESIGN.md-only fallback`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: manifest ? 'ds-package-pill is-ready' : 'ds-package-pill',
                        children: manifest ? 'Hybrid ready' : 'Fallback'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2244,
                columnNumber: 7
            }, this),
            manifest?.sourceFiles?.report ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-token-contract-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Token contract"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    tokenContract?.grade ? `${tokenContract.grade} · ` : '',
                                    tokenContract?.score !== undefined ? `score ${tokenContract.score}` : 'quality report available',
                                    tokenContract?.recommendRebuild ? ' · rebuild recommended' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "compact",
                                disabled: busy,
                                onClick: onRebuildTokenContract,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "sparkles"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2274,
                                        columnNumber: 15
                                    }, this),
                                    "Rebuild token contract"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2268,
                                columnNumber: 13
                            }, this),
                            tokenContract?.recommendRebuild ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "compact",
                                disabled: busy,
                                onClick: onForceRebuildTokenContract,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2284,
                                        columnNumber: 17
                                    }, this),
                                    "Force"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2278,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2258,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-package-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Agent push layer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-package-chips",
                                children: protocolItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2297,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Pull layer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-package-metrics",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: previewPages.length
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2304,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Preview pages"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2304,
                                                columnNumber: 57
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: sourceFileCount
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Evidence indexes"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2305,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: manifest?.assetsDir ? 'Yes' : 'No'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Assets"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 2306,
                                                columnNumber: 72
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2292,
                columnNumber: 7
            }, this),
            evidenceStats.length > 0 || confidence.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-evidence-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-evidence-stats",
                        children: evidenceStats.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: item.value
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2316,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2317,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2315,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2313,
                        columnNumber: 11
                    }, this),
                    confidence.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-confidence-row",
                        children: confidence.map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    key,
                                    ": ",
                                    String(value)
                                ]
                            }, key, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2324,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2322,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2312,
                columnNumber: 9
            }, this) : null,
            manifest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-package-files",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackageFileGroup, {
                        title: "Preview",
                        files: previewPages.map((page)=>({
                                path: page.path ?? '',
                                meta: [
                                    page.title,
                                    page.role
                                ].filter(Boolean).join(' · ')
                            }))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackageFileGroup, {
                        title: "Source evidence",
                        files: [
                            sourceFiles?.scanned ? {
                                path: sourceFiles.scanned,
                                meta: 'Scanned file inventory'
                            } : null,
                            sourceFiles?.evidence ? {
                                path: sourceFiles.evidence,
                                meta: 'Evidence notes'
                            } : null,
                            sourceFiles?.tokens ? {
                                path: sourceFiles.tokens,
                                meta: 'Token extraction evidence'
                            } : null,
                            sourceFiles?.report ? {
                                path: sourceFiles.report,
                                meta: 'Token contract quality report'
                            } : null,
                            sourceFiles?.snippets ? {
                                path: sourceFiles.snippets,
                                meta: 'Snippet index'
                            } : null
                        ].filter((item)=>item !== null)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2340,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2332,
                columnNumber: 9
            }, this) : null,
            evidence?.evidenceExcerpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "ds-evidence-excerpt",
                children: evidence.evidenceExcerpt
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2353,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2243,
        columnNumber: 5
    }, this);
}
_c2 = DesignSystemPackageCard;
function PackageFileGroup({ title, files }) {
    const visibleFiles = files.filter((file)=>file.path.length > 0);
    if (visibleFiles.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-package-file-list",
                children: visibleFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: file.path
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2374,
                                columnNumber: 13
                            }, this),
                            file.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: file.meta
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2375,
                                columnNumber: 26
                            }, this) : null
                        ]
                    }, file.path, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2373,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2369,
        columnNumber: 5
    }, this);
}
_c3 = PackageFileGroup;
function sourceTypeLabel(value) {
    if (value === 'github') return 'GitHub import';
    if (value === 'local') return 'Local import';
    if (value === 'bundled' || value === 'built-in') return 'Bundled';
    if (value === 'user') return 'User workspace';
    if (value === 'installed') return 'Installed';
    return 'Design system';
}
function WorkspaceActivityCard({ message, active }) {
    const events = message?.events ?? [];
    const todos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latestTodosFromEvents"])(events);
    const fileOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveFileOps"])(events);
    const status = workspaceActivityStatus(message, active);
    const statusDetail = latestStatusDetail(events);
    const hasActivity = active || todos.length > 0 || fileOps.length > 0 || statusDetail !== null || status === 'failed';
    if (!hasActivity) return null;
    const progress = workspaceActivityProgress(status, todos, fileOps);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `ds-workspace-activity-card is-${status}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-workspace-activity-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: status === 'running' ? 'sparkles' : status === 'failed' ? 'help-circle' : 'check'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: status === 'running' ? 'Open Design is updating this system' : status === 'failed' ? 'Workspace update needs attention' : 'Workspace update ready'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: statusDetail ?? workspaceActivityFallbackDetail(status)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-generation-review-progress",
                role: "progressbar",
                "aria-label": `Workspace update progress ${progress}%`,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": progress,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 2437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2429,
                columnNumber: 7
            }, this),
            todos.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-workspace-todos",
                children: todos.slice(0, 6).map((todo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `is-${todoStatusClass(todo.status)}`,
                        children: [
                            todo.status === 'completed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2443,
                                columnNumber: 46
                            }, this) : null,
                            todo.content
                        ]
                    }, `${todo.content}-${index}`, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2442,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2440,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-generation-review-steps",
                children: fallbackWorkspaceSteps(status, fileOps).map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `is-${step.status}`,
                        children: [
                            step.status === 'succeeded' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2452,
                                columnNumber: 46
                            }, this) : null,
                            step.title
                        ]
                    }, step.title, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2451,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2449,
                columnNumber: 9
            }, this),
            fileOps.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-workspace-files-touched",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Files touched"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2460,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: fileOps.slice(0, 5).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: `is-${entry.status}`,
                                children: entry.path
                            }, entry.fullPath, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2463,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2461,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2459,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2415,
        columnNumber: 5
    }, this);
}
_c4 = WorkspaceActivityCard;
function workspaceActivityStatus(message, active) {
    if (active || message?.runStatus === 'queued' || message?.runStatus === 'running') return 'running';
    if (message?.runStatus === 'failed' || message?.runStatus === 'canceled') return 'failed';
    return 'succeeded';
}
function latestStatusDetail(events) {
    for(let index = events.length - 1; index >= 0; index -= 1){
        const event = events[index];
        if (!event || event.kind !== 'status') continue;
        const label = event.label.replace(/[_-]/g, ' ');
        return event.detail ? `${label}: ${event.detail}` : label;
    }
    return null;
}
function workspaceActivityFallbackDetail(status) {
    if (status === 'running') return 'Watching project files and preparing the review draft.';
    if (status === 'failed') return 'The chat message has the run details. You can adjust the request and try again.';
    return 'Review the updated Design System and Design Files tabs.';
}
function workspaceActivityProgress(status, todos, fileOps) {
    if (status === 'succeeded' || status === 'failed') return 100;
    if (todos.length > 0) {
        const completed = todos.filter((todo)=>todo.status === 'completed').length;
        const inProgress = todos.some((todo)=>todo.status === 'in_progress') ? 0.5 : 0;
        return Math.max(18, Math.min(92, Math.round((completed + inProgress) / todos.length * 100)));
    }
    if (fileOps.some((entry)=>entry.ops.includes('write') || entry.ops.includes('edit'))) return 72;
    if (fileOps.length > 0) return 38;
    return 18;
}
function todoStatusClass(status) {
    if (status === 'completed') return 'succeeded';
    if (status === 'in_progress') return 'running';
    if (status === 'stopped') return 'failed';
    return 'pending';
}
function fallbackWorkspaceSteps(status, fileOps) {
    const hasRead = fileOps.some((entry)=>entry.ops.includes('read'));
    const hasMutation = fileOps.some((entry)=>entry.ops.includes('write') || entry.ops.includes('edit'));
    const hasError = status === 'failed' || fileOps.some((entry)=>entry.status === 'error');
    return [
        {
            title: 'Read current system',
            status: hasRead || hasMutation || status === 'succeeded' ? 'succeeded' : status === 'running' ? 'running' : 'pending'
        },
        {
            title: 'Update design files',
            status: hasError ? 'failed' : hasMutation ? fileOps.some((entry)=>entry.status === 'running') ? 'running' : 'succeeded' : status === 'running' ? 'pending' : 'succeeded'
        },
        {
            title: 'Refresh review',
            status: status === 'succeeded' ? 'succeeded' : status === 'failed' ? 'failed' : 'pending'
        }
    ];
}
const WORKSPACE_FILE_MUTATION_TOOLS = new Set([
    'Write',
    'Edit',
    'MultiEdit',
    'create_file',
    'str_replace_edit',
    'multi_edit'
]);
function writableProjectFilePathFromToolUse(event) {
    if (!WORKSPACE_FILE_MUTATION_TOOLS.has(event.name)) return null;
    return filePathFromToolInput(event.input);
}
function filePathFromToolInput(input) {
    if (!input || typeof input !== 'object') return null;
    const record = input;
    const filePath = record.file_path ?? record.path;
    return typeof filePath === 'string' && filePath.trim() ? filePath : null;
}
function isDesignSystemSourcePath(filePath) {
    const normalized = filePath.replace(/\\/g, '/').toLowerCase();
    return normalized === 'design.md' || normalized.endsWith('/design.md');
}
function timestampFromIso(value) {
    if (!value) return undefined;
    const timestamp = Date.parse(value);
    return Number.isFinite(timestamp) ? timestamp : undefined;
}
function SourceContextCard({ provenance }) {
    const rows = provenanceRows(provenance);
    if (rows.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ds-source-context-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Source context"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2619,
                columnNumber: 7
            }, this),
            rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: row.label
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2622,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: row.value
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2623,
                            columnNumber: 11
                        }, this)
                    ]
                }, row.label, true, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 2621,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2618,
        columnNumber: 5
    }, this);
}
_c5 = SourceContextCard;
function GenerationStatusCard({ job }) {
    const active = job.status === 'queued' || job.status === 'running';
    const noun = job.kind === 'token-contract-rebuild' ? 'Token rebuild' : job.kind === 'revision' ? 'Revision' : 'Generation';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `ds-generation-review-card is-${job.status}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: active ? 'sparkles' : job.status === 'failed' ? 'help-circle' : 'check'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: active ? job.kind === 'token-contract-rebuild' ? 'Open Design is rebuilding tokens' : job.kind === 'revision' ? 'Open Design is revising' : 'Open Design is still working' : job.status === 'failed' ? `${noun} needs attention` : `${noun} completed`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: job.message ?? (active ? job.kind === 'token-contract-rebuild' ? 'Preparing a reviewable token contract draft.' : job.kind === 'revision' ? 'Applying your feedback.' : 'Preparing the remaining files.' : 'Review workspace is ready.')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2653,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-generation-review-progress",
                role: "progressbar",
                "aria-label": `Generation progress ${job.progress}%`,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": job.progress,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: `${job.progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 2673,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2665,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-generation-review-steps",
                children: job.steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `is-${step.status}`,
                        children: [
                            step.status === 'succeeded' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2678,
                                columnNumber: 44
                            }, this) : null,
                            step.title
                        ]
                    }, step.id, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2677,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2675,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2638,
        columnNumber: 5
    }, this);
}
_c6 = GenerationStatusCard;
function RevisionDiffCard({ revision, saving, onAccept, onReject }) {
    const diff = revisionAddedText(revision);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ds-revision-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-revision-card__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Pending revision"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    revision.sectionTitle ? `${revision.sectionTitle} · ` : '',
                                    formatDateTime(revision.createdAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2704,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost danger",
                                disabled: saving,
                                onClick: onReject,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2711,
                                        columnNumber: 13
                                    }, this),
                                    "Reject"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2710,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost success",
                                disabled: saving,
                                onClick: onAccept,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 2715,
                                        columnNumber: 13
                                    }, this),
                                    "Accept"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2714,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2709,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: revision.feedback
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2720,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-revision-diff",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Proposed changes"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2722,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        children: diff || revision.proposedBody
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2723,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2721,
                columnNumber: 7
            }, this),
            revision.fileChanges?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-revision-diff",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "File draft preview"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2727,
                        columnNumber: 11
                    }, this),
                    revision.fileChanges.map((change)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            children: `${change.path}\n\n${revisionFileAddedText(change) || change.proposedContent}`
                        }, change.path, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2729,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2726,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2700,
        columnNumber: 5
    }, this);
}
_c7 = RevisionDiffCard;
function RevisionHistoryList({ revisions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ds-revision-history",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Revision history"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2740,
                columnNumber: 7
            }, this),
            revisions.map((revision)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `is-${revision.status}`,
                            children: revision.status
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2743,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: revision.sectionTitle ?? 'General revision'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2744,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: formatDateTime(revision.updatedAt)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                            lineNumber: 2745,
                            columnNumber: 11
                        }, this)
                    ]
                }, revision.id, true, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 2742,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2739,
        columnNumber: 5
    }, this);
}
_c8 = RevisionHistoryList;
function DropZone({ label, prompt, helper, accept, names, directory, onZoneClick, onBrowseFolder, onRemoveName, onError, onProcessingStart, onFiles }) {
    _s2();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileDialogPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fileDialogCanShowLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fileDialogLoadingFinishRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const fileDialogFocusDelayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const fileDialogWarmupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const fileDialogStaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DropZone.useEffect": ()=>{
            if (!directory || !onProcessingStart) return undefined;
            const input = inputRef.current;
            const handleFocus = {
                "DropZone.useEffect.handleFocus": ()=>{
                    beginFileDialogReturnLoading();
                }
            }["DropZone.useEffect.handleFocus"];
            const handleCancel = {
                "DropZone.useEffect.handleCancel": ()=>{
                    const finish = completeFileDialogTracking();
                    finishProcessingLater(finish);
                }
            }["DropZone.useEffect.handleCancel"];
            window.addEventListener('focus', handleFocus);
            input?.addEventListener('cancel', handleCancel);
            return ({
                "DropZone.useEffect": ()=>{
                    window.removeEventListener('focus', handleFocus);
                    input?.removeEventListener('cancel', handleCancel);
                }
            })["DropZone.useEffect"];
        }
    }["DropZone.useEffect"]);
    function clearFileDialogTimer(ref) {
        if (ref.current === undefined) return;
        window.clearTimeout(ref.current);
        ref.current = undefined;
    }
    function prepareFileDialogTracking() {
        if (!directory || !onProcessingStart) return;
        const previousFinish = completeFileDialogTracking();
        previousFinish?.();
        fileDialogPendingRef.current = true;
        fileDialogCanShowLoadingRef.current = false;
        fileDialogFocusDelayRef.current = window.setTimeout(()=>{
            fileDialogCanShowLoadingRef.current = true;
            fileDialogFocusDelayRef.current = undefined;
        }, SOURCE_FILE_DIALOG_FOCUS_DELAY_MS);
        fileDialogWarmupRef.current = window.setTimeout(()=>{
            fileDialogCanShowLoadingRef.current = true;
            fileDialogWarmupRef.current = undefined;
            beginFileDialogReturnLoading();
        }, SOURCE_FILE_DIALOG_WARMUP_MS);
    }
    function beginFileDialogReturnLoading() {
        if (!fileDialogPendingRef.current) return;
        if (!fileDialogCanShowLoadingRef.current) return;
        if (!onProcessingStart) return;
        if (fileDialogLoadingFinishRef.current) return;
        fileDialogLoadingFinishRef.current = onProcessingStart();
        fileDialogStaleRef.current = window.setTimeout(()=>{
            const finish = completeFileDialogTracking();
            finishProcessingLater(finish);
        }, SOURCE_FILE_DIALOG_STALE_MS);
    }
    function completeFileDialogTracking() {
        clearFileDialogTimer(fileDialogFocusDelayRef);
        clearFileDialogTimer(fileDialogWarmupRef);
        clearFileDialogTimer(fileDialogStaleRef);
        fileDialogPendingRef.current = false;
        fileDialogCanShowLoadingRef.current = false;
        const finish = fileDialogLoadingFinishRef.current;
        fileDialogLoadingFinishRef.current = undefined;
        return finish;
    }
    function finishProcessingLater(finish) {
        if (!finish) return;
        window.setTimeout(finish, SOURCE_PROCESSING_MIN_VISIBLE_MS);
    }
    function shouldShowProcessing(files) {
        if (files.length >= SOURCE_PROCESSING_LOADING_FILE_COUNT) return true;
        const totalBytes = files.reduce((sum, file)=>sum + file.size, 0);
        return totalBytes >= SOURCE_PROCESSING_LOADING_BYTES;
    }
    function stageFiles(nextFiles) {
        const nextNames = nextFiles.map((file)=>localCodeRelativePath(file));
        if (nextNames.length > 0) {
            onError?.(null);
            onFiles(nextNames, nextFiles);
        }
    }
    function processSelectedFiles(nextFiles, activeFinish) {
        if (nextFiles.length === 0) {
            finishProcessingLater(activeFinish);
            return;
        }
        if (!shouldShowProcessing(nextFiles) || !onProcessingStart) {
            stageFiles(nextFiles);
            finishProcessingLater(activeFinish);
            return;
        }
        const finish = activeFinish ?? onProcessingStart();
        runAfterNextPaint(()=>{
            try {
                stageFiles(nextFiles);
            } finally{
                finishProcessingLater(finish);
            }
        });
    }
    function readFiles(event) {
        const files = Array.from(event.currentTarget.files ?? []);
        event.currentTarget.value = '';
        const finish = completeFileDialogTracking();
        processSelectedFiles(files, finish);
    }
    async function readDrop(dataTransfer) {
        onError?.(null);
        try {
            const nextFiles = await filesFromDataTransfer(dataTransfer);
            processSelectedFiles(nextFiles);
        } catch (error) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFileSystemReadError"])(error)) throw error;
            onError?.(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_SYSTEM_READ_ERROR_MESSAGE"]);
        }
    }
    const directoryProps = directory ? {
        webkitdirectory: '',
        directory: ''
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ds-resource-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2893,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-drop-zone-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ds-drop-zone",
                        onDragOver: (event)=>event.preventDefault(),
                        onDrop: (event)=>{
                            event.preventDefault();
                            void readDrop(event.dataTransfer);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                className: "ds-hidden-input",
                                type: "file",
                                multiple: true,
                                accept: accept,
                                onClick: ()=>{
                                    onZoneClick?.();
                                    prepareFileDialogTracking();
                                },
                                onChange: readFiles,
                                ...directoryProps
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2903,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: names.length > 0 && !onRemoveName ? names.join(', ') : prompt
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2916,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2895,
                        columnNumber: 9
                    }, this),
                    onBrowseFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: onBrowseFolder,
                        children: "Browse folder"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2919,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2894,
                columnNumber: 7
            }, this),
            names.length > 0 && onRemoveName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-local-code-list",
                "aria-label": `${label} selections`,
                children: names.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Remove ${name}`,
                                onClick: ()=>onRemoveName(name),
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 2929,
                                columnNumber: 15
                            }, this)
                        ]
                    }, name, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 2927,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2925,
                columnNumber: 9
            }, this) : null,
            helper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: helper
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 2936,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 2892,
        columnNumber: 5
    }, this);
}
_s2(DropZone, "z6amMjZuiWMkG7Pw3stQNCpxPqY=");
_c9 = DropZone;
function runAfterNextPaint(callback) {
    if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(()=>window.setTimeout(callback, 0));
        return;
    }
    window.setTimeout(callback, 0);
}
async function filesFromDataTransfer(dataTransfer) {
    const fallbackFiles = Array.from(dataTransfer.files ?? []);
    const items = Array.from(dataTransfer.items ?? []);
    if (items.length === 0) return fallbackFiles;
    const entries = items.map((item)=>{
        const getter = item.webkitGetAsEntry;
        return getter?.call(item) ?? null;
    }).filter(isWebkitFileSystemEntry);
    if (entries.length === 0) return fallbackFiles;
    const results = await Promise.allSettled(entries.map((entry)=>filesFromEntry(entry, entry.name)));
    const rejected = results.find((result)=>result.status === 'rejected');
    if (rejected) {
        if (fallbackFiles.length > 0) return fallbackFiles;
        throw rejected.reason;
    }
    const droppedFiles = results.flatMap((result)=>result.status === 'fulfilled' ? result.value : []);
    return droppedFiles.length > 0 ? droppedFiles : fallbackFiles;
}
function isWebkitFileSystemEntry(entry) {
    if (!entry || typeof entry !== 'object') return false;
    const candidate = entry;
    return typeof candidate.name === 'string' && typeof candidate.isFile === 'boolean' && typeof candidate.isDirectory === 'boolean';
}
async function filesFromEntry(entry, relativePath) {
    if (entry.isFile) {
        const file = await fileFromEntry(entry);
        return [
            withRelativePath(file, relativePath)
        ];
    }
    if (!entry.isDirectory) return [];
    const children = await readAllDirectoryEntries(entry);
    const nested = await Promise.all(children.map((child)=>filesFromEntry(child, `${relativePath}/${child.name}`)));
    return nested.flat();
}
function fileFromEntry(entry) {
    return new Promise((resolve, reject)=>{
        entry.file(resolve, (error)=>{
            reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystemReadError"])('Could not read dropped file', error));
        });
    });
}
function readAllDirectoryEntries(entry) {
    const reader = entry.createReader();
    const entries = [];
    return new Promise((resolve, reject)=>{
        function readNextBatch() {
            reader.readEntries((batch)=>{
                if (batch.length === 0) {
                    resolve(entries);
                    return;
                }
                entries.push(...batch);
                readNextBatch();
            }, (error)=>{
                reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$fileSystemErrors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystemReadError"])('Could not read dropped folder', error));
            });
        }
        readNextBatch();
    });
}
function withRelativePath(file, relativePath) {
    const currentPath = file.webkitRelativePath;
    if (currentPath) return file;
    Object.defineProperty(file, 'webkitRelativePath', {
        value: normalizeLocalCodePath(relativePath),
        configurable: true
    });
    return file;
}
function GitHubRepositoryAccessPanel({ composioConfigured, connector, loading, action, authorizationPending, authorizationUrl, error, onOpenConnectorsTab, onToggleMethods, onConnect, onOpenAuthorization, onDisconnect }) {
    _s3();
    const [methodsExpanded, setMethodsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const connected = isGithubConnectorConnected(connector);
    const account = getDisplayableGithubAccountLabel(connector);
    const busy = action !== null;
    let composioBadge = 'Optional';
    let composioTone = 'muted';
    let composioDescription = 'Composio GitHub connector access for agent tools; repo URLs still work with local git or GitHub CLI.';
    let composioIcon = 'settings';
    if (!composioConfigured) {
        composioBadge = 'Not configured';
        composioDescription = 'Add a Composio API key only if this project needs connector-backed GitHub tools.';
    } else if (connected) {
        composioBadge = 'Connected';
        composioTone = 'success';
        composioIcon = 'github';
        composioDescription = account ? `Composio GitHub connector connected as ${account}; it is available as fallback when this device cannot read the repository.` : 'Composio GitHub connector is available as fallback when this device cannot read the repository.';
    } else if (authorizationPending) {
        composioBadge = 'Pending';
        composioTone = 'warning';
        composioIcon = 'external-link';
        composioDescription = 'Finish the Composio authorization window; local GitHub intake remains available.';
    } else if (loading) {
        composioBadge = 'Checking';
        composioTone = 'loading';
        composioIcon = 'spinner';
        composioDescription = 'Checking connector status in the background; URL intake is not blocked.';
    } else if (error) {
        composioBadge = 'Needs attention';
        composioTone = 'warning';
    } else if (connector?.status === 'error') {
        composioBadge = 'Needs attention';
        composioTone = 'danger';
        composioDescription = 'Reconnect the Composio GitHub connector, or continue with local git/GitHub CLI.';
    }
    const composioAction = !composioConfigured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        onClick: onOpenConnectorsTab,
        children: "Configure Composio"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 3111,
        columnNumber: 5
    }, this) : connected || authorizationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            authorizationPending && authorizationUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                disabled: busy,
                onClick: onOpenAuthorization,
                children: "Open authorization"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 3117,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                disabled: busy,
                onClick: onDisconnect,
                children: action === 'disconnect' ? 'Disconnecting...' : 'Disconnect'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 3121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        disabled: busy,
        onClick: onConnect,
        children: action === 'connect' ? 'Connecting...' : 'Connect via Composio'
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 3126,
        columnNumber: 5
    }, this);
    const methods = [
        {
            id: 'local',
            icon: 'github',
            title: 'This device',
            badge: 'Automatic',
            tone: 'success',
            description: 'Uses public git clone, local git credentials, or GitHub CLI auth available on this machine.'
        },
        {
            id: 'native-oauth',
            icon: 'link',
            title: 'Open Design account',
            badge: 'Coming soon',
            tone: 'muted',
            description: 'Native GitHub sign-in managed by Open Design; this build does not use an OD-managed GitHub token yet.'
        },
        {
            id: 'composio',
            icon: composioIcon,
            title: 'Connector platform',
            badge: composioBadge,
            tone: composioTone,
            description: composioDescription,
            action: composioAction,
            note: error
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'ds-github-access-panel',
            connected ? 'has-connected-connector' : ''
        ].filter(Boolean).join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-github-access-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Repository access: Auto"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 3169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Paste a GitHub URL. Open Design will use the first working access method."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 3170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 3168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost ds-github-access-toggle",
                        "aria-expanded": methodsExpanded,
                        "aria-controls": "ds-github-access-methods",
                        onClick: ()=>{
                            const next = !methodsExpanded;
                            onToggleMethods?.(next);
                            setMethodsExpanded(next);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: methodsExpanded ? 'chevron-down' : 'chevron-right'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 3183,
                                columnNumber: 11
                            }, this),
                            methodsExpanded ? 'Hide access methods' : 'Show access methods'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 3172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 3167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "ds-github-access-methods",
                className: `accordion-collapsible ${methodsExpanded ? 'open' : ''}`,
                hidden: !methodsExpanded,
                "aria-hidden": !methodsExpanded,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-collapsible-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-github-access-methods",
                        "aria-label": "GitHub repository access methods",
                        children: methods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-github-access-method",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: method.icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 3197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ds-github-access-method-copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ds-github-access-method-title",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: method.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 3200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: `ds-github-access-badge is-${method.tone}`,
                                                        children: method.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                        lineNumber: 3201,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 3199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: method.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 3203,
                                                columnNumber: 19
                                            }, this),
                                            method.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: method.note
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 3204,
                                                columnNumber: 34
                                            }, this) : null,
                                            method.action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ds-github-access-actions",
                                                children: method.action
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                                lineNumber: 3205,
                                                columnNumber: 36
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                        lineNumber: 3198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, method.id, true, {
                                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                                lineNumber: 3196,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                        lineNumber: 3194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                    lineNumber: 3193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
                lineNumber: 3187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignSystemFlow.tsx",
        lineNumber: 3161,
        columnNumber: 5
    }, this);
}
_s3(GitHubRepositoryAccessPanel, "Wj0L85BjvrhrHwnqrVbvn8eAY00=");
_c10 = GitHubRepositoryAccessPanel;
function getDisplayableGithubAccountLabel(connector) {
    const label = connector?.accountLabel?.trim();
    if (!label) return null;
    // Composio may surface its connected-account id (`ca_...`) as the label.
    // That is useful internally, but it reads like a broken GitHub username in
    // this setup flow.
    if (/^ca_[A-Za-z0-9_-]+$/.test(label)) return null;
    return label;
}
function openConnectorAuthorizationUrl(url) {
    if (!url) return;
    const opened = window.open(url, '_blank');
    if (!opened) window.location.assign(url);
}
function formatDateTime(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function revisionAddedText(revision) {
    const baseLines = revision.baseBody.split(/\r?\n/);
    const proposedLines = revision.proposedBody.split(/\r?\n/);
    let index = 0;
    while(index < baseLines.length && index < proposedLines.length && baseLines[index] === proposedLines[index]){
        index += 1;
    }
    return proposedLines.slice(index).join('\n').trim();
}
function revisionFileAddedText(change) {
    const baseLines = change.baseContent.split(/\r?\n/);
    const proposedLines = change.proposedContent.split(/\r?\n/);
    let index = 0;
    while(index < baseLines.length && index < proposedLines.length && baseLines[index] === proposedLines[index]){
        index += 1;
    }
    return proposedLines.slice(index).join('\n').trim();
}
function inferDesignSystemTitle(state) {
    const clean = state.company.trim().replace(/\s+/g, ' ');
    const contextTitle = titleCandidateFromCompanyContext(clean);
    if (contextTitle) return designSystemTitle(contextTitle);
    const githubTitle = githubRepoTitleFromText(clean) ?? githubUrlsFromState(state).map(githubRepoTitleFromUrl).find((title)=>Boolean(title));
    if (githubTitle) return designSystemTitle(githubTitle);
    const urlTitle = genericUrlTitleFromText(clean);
    if (urlTitle) return designSystemTitle(urlTitle);
    return designSystemTitle(clean.split(/\s+/).slice(0, 4).join(' ') || 'Product');
}
function titleCandidateFromCompanyContext(clean) {
    if (!clean || /^https?:\/\//iu.test(clean) || githubRepoTitleFromText(clean)) return undefined;
    const beforeColon = clean.split(':')[0]?.trim();
    if (beforeColon && !/^https?$/iu.test(beforeColon) && beforeColon.length <= 48) return beforeColon;
    return clean.split(/\s+/).slice(0, 4).join(' ') || undefined;
}
function designSystemTitle(title) {
    const clean = title.trim().replace(/\s+/g, ' ');
    if (!clean) return 'Product Design System';
    return /design system$/iu.test(clean) ? clean : `${clean} Design System`;
}
function githubRepoTitleFromText(text) {
    const match = /(?:https?:\/\/)?github\.com[:/]([^/\s]+)\/([^/\s#?]+)(?:\.git)?(?=$|[/?#\s])/iu.exec(text);
    return match ? humanizeRepositoryName(match[2] ?? '') : undefined;
}
function githubRepoTitleFromUrl(url) {
    try {
        const parsed = new URL(url);
        const parts = parsed.pathname.split('/').filter(Boolean);
        if (parts.length >= 2) return humanizeRepositoryName(parts[1] ?? '');
    } catch  {
        const shorthand = /(?:^|\s)([^/\s]+)\/([^/\s#?]+)(?:\.git)?(?:\s|$)/iu.exec(url);
        if (shorthand) return humanizeRepositoryName(shorthand[2] ?? '');
    }
    return undefined;
}
function genericUrlTitleFromText(text) {
    const match = /https?:\/\/[^\s]+/iu.exec(text);
    if (!match) return undefined;
    try {
        const parsed = new URL(match[0]);
        const host = parsed.hostname.replace(/^www\./iu, '').split('.')[0] ?? '';
        return humanizeRepositoryName(host);
    } catch  {
        return undefined;
    }
}
function scheduleAfterProjectHandoff(task) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const run = ()=>window.setTimeout(task, 0);
    if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(run);
        return;
    }
    run();
}
async function prepareCreatedDesignSystemProject({ project, state, composioConfigured, githubConnector, onProjectPrepared, onSystemsRefresh, analyticsTrack, ingestEntryFrom, designSystemId }) {
    try {
        if (state.githubUrls.length > 0) {
            const githubStart = performance.now();
            emitSourceIngestResult(analyticsTrack, {
                sourceType: 'github_repo',
                ingestMethod: githubConnector?.status === 'connected' ? 'github_api' : 'git_clone',
                result: 'success',
                hasFallback: composioConfigured && githubConnector?.status === 'connected',
                fallbackType: composioConfigured && githubConnector?.status === 'connected' ? 'native_github_auth' : 'none',
                repoHost: dominantRepoHost(state.githubUrls),
                fileCount: state.githubUrls.length,
                totalBytes: null,
                durationMs: Math.round(performance.now() - githubStart),
                entryFrom: ingestEntryFrom,
                projectId: project.id,
                designSystemId
            });
        }
        const localStart = performance.now();
        const stagedLocalCode = await stageLocalCodeFiles(project.id, state.codeFileObjects);
        if (state.codeFileObjects.length > 0 || state.codeFolders.length > 0) {
            emitSourceIngestResult(analyticsTrack, {
                sourceType: 'local_code',
                ingestMethod: 'local_snapshot',
                result: stagedLocalCode.uploadedPaths.length > 0 ? stagedLocalCode.skippedCount > 0 ? 'partial_success' : 'success' : 'failed',
                hasFallback: false,
                fallbackType: 'none',
                repoHost: 'unknown',
                fileCount: stagedLocalCode.uploadedPaths.length,
                totalBytes: state.codeFileObjects.reduce((sum, f)=>sum + (f.size || 0), 0),
                durationMs: Math.round(performance.now() - localStart),
                errorCode: stagedLocalCode.uploadedPaths.length === 0 ? 'DS_LOCAL_INGEST_EMPTY' : undefined,
                entryFrom: ingestEntryFrom,
                projectId: project.id,
                designSystemId
            });
        }
        const figStart = performance.now();
        const stagedFigma = await stageFigmaFiles(project.id, state.figFileObjects);
        if (state.figFileObjects.length > 0) {
            emitSourceIngestResult(analyticsTrack, {
                sourceType: 'fig',
                ingestMethod: 'fig_parse',
                result: stagedFigma.summaryPaths.length > 0 ? stagedFigma.skippedCount > 0 ? 'partial_success' : 'success' : 'failed',
                hasFallback: false,
                fallbackType: 'none',
                repoHost: 'unknown',
                fileCount: stagedFigma.summaryPaths.length,
                totalBytes: state.figFileObjects.reduce((sum, f)=>sum + (f.size || 0), 0),
                durationMs: Math.round(performance.now() - figStart),
                errorCode: stagedFigma.summaryPaths.length === 0 ? 'DS_FIG_INGEST_EMPTY' : undefined,
                entryFrom: ingestEntryFrom,
                projectId: project.id,
                designSystemId
            });
        }
        const assetStart = performance.now();
        const stagedAssets = await stageAssetFiles(project.id, state.assetFileObjects);
        if (state.assetFileObjects.length > 0) {
            emitSourceIngestResult(analyticsTrack, {
                sourceType: 'assets',
                ingestMethod: 'asset_upload',
                result: stagedAssets.uploadedPaths.length > 0 ? stagedAssets.skippedCount > 0 ? 'partial_success' : 'success' : 'failed',
                hasFallback: false,
                fallbackType: 'none',
                repoHost: 'unknown',
                fileCount: stagedAssets.uploadedPaths.length,
                totalBytes: state.assetFileObjects.reduce((sum, f)=>sum + (f.size || 0), 0),
                durationMs: Math.round(performance.now() - assetStart),
                errorCode: stagedAssets.uploadedPaths.length === 0 ? 'DS_ASSET_INGEST_EMPTY' : undefined,
                entryFrom: ingestEntryFrom,
                projectId: project.id,
                designSystemId
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(project.id, SOURCE_CONTEXT_MANIFEST_PATH, buildSourceContextManifest(state, {
            composioConfigured,
            githubConnector,
            stagedLocalCode,
            stagedFigma,
            stagedAssets
        }));
        const metadata = mergeLinkedCodeFolders(project.metadata, state.codeFolders);
        const prompt = buildCreationAgentPrompt(state, stagedLocalCode, SOURCE_CONTEXT_MANIFEST_PATH, stagedAssets, stagedFigma);
        const preparedProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
            pendingPrompt: prompt,
            metadata
        });
        try {
            window.sessionStorage.setItem(`od:auto-send-first:${project.id}`, '1');
        } catch  {
        // If sessionStorage is unavailable, the project still opens with the
        // pending prompt ready for the user to send manually.
        }
        onProjectPrepared?.(preparedProject ?? {
            ...project,
            pendingPrompt: prompt,
            metadata
        });
        void onSystemsRefresh?.();
    } catch (err) {
        console.error('Could not prepare the design system project after opening it.', err);
    }
}
// Picks the dominant repo host across a batch of GitHub URLs. Mixed
// batches default to the most-common host; ties go to `'unknown'`.
function dominantRepoHost(urls) {
    if (urls.length === 0) return 'unknown';
    const counts = new Map();
    for (const url of urls){
        const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemRepoHostFromUrl"])(url);
        counts.set(host, (counts.get(host) ?? 0) + 1);
    }
    let top = 'unknown';
    let topCount = 0;
    let tie = false;
    for (const [host, count] of counts){
        if (count > topCount) {
            top = host;
            topCount = count;
            tie = false;
        } else if (count === topCount) {
            tie = true;
        }
    }
    return tie ? 'unknown' : top;
}
// Maps a generate-time snapshot to the DS origin enum. The dashboard
// uses this on `design_system_create_result.design_system_source` to
// split "user added a GitHub repo" vs "user only typed a description"
// without inspecting per-source counts.
function deriveDesignSystemOrigin(snapshot) {
    const filled = [
        snapshot.githubRepoCount > 0,
        snapshot.localFolderCount > 0,
        snapshot.figFileCount > 0,
        snapshot.assetFileCount > 0
    ].filter(Boolean).length;
    if (filled >= 2) return 'mixed';
    if (snapshot.githubRepoCount > 0) return 'github_repo';
    if (snapshot.localFolderCount > 0) return 'local_code';
    if (snapshot.figFileCount > 0) return 'fig';
    if (snapshot.assetFileCount > 0) return 'assets';
    if (snapshot.hasBrandDescription) return 'manual_create';
    return 'unknown';
}
// Mirrors the DesignSystemsTab helper but lives here too so the
// detail-view's status emissions don't have to import across files.
function mapDsStatusToTracking(status) {
    switch(status){
        case 'draft':
        case 'published':
            return status;
        default:
            return 'unknown';
    }
}
function emitSourceIngestResult(track, args) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemSourceIngestResult"])(track, {
        page_name: 'design_systems',
        area: 'design_system_create',
        entry_from: args.entryFrom,
        source_type: args.sourceType,
        ingest_method: args.ingestMethod,
        result: args.result,
        has_fallback: args.hasFallback,
        fallback_type: args.fallbackType,
        repo_host: args.repoHost,
        file_count: args.fileCount,
        folder_file_count_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemFolderCountBucket"])(args.fileCount),
        total_size_bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemTotalSizeBucket"])(args.totalBytes),
        error_code: args.errorCode,
        duration_ms: Math.max(0, args.durationMs),
        project_id: args.projectId,
        design_system_id: args.designSystemId
    });
}
function humanizeRepositoryName(repo) {
    const words = repo.replace(/\.git$/iu, '').replace(/[-_]+/gu, ' ').trim().split(/\s+/u).filter(Boolean);
    if (words.length === 0) return undefined;
    return words.map(titleCaseRepositoryWord).join(' ');
}
function titleCaseRepositoryWord(word) {
    if (/^(ai|api|cli|css|html|js|llm|mcp|sdk|ui|url|ux)$/iu.test(word)) return word.toUpperCase();
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}
function normalizeGithubUrl(value) {
    const trimmed = value.trim();
    if (!trimmed) return '';
    try {
        const url = new URL(trimmed);
        return url.toString().replace(/\/$/, '');
    } catch  {
        return trimmed.replace(/\/$/, '');
    }
}
function githubRepoLabel(url) {
    try {
        const parsed = new URL(url);
        const parts = parsed.pathname.split('/').filter(Boolean);
        if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    } catch  {
    // User-entered shorthand can still be useful context for the agent.
    }
    return url;
}
function githubUrlsFromState(state) {
    return Array.from(new Set([
        ...state.githubUrls,
        ...state.githubUrl.trim() ? [
            normalizeGithubUrl(state.githubUrl)
        ] : []
    ].filter(Boolean)));
}
function isComposioConfigured(composio) {
    return Boolean(composio?.apiKeyConfigured || composio?.apiKey?.trim());
}
function isGithubConnectorConnected(connector) {
    return connector?.status === 'connected';
}
async function fetchGithubConnectorStatusWithTimeout() {
    let timeoutId;
    let timedOut = false;
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    try {
        const timeout = new Promise((resolve)=>{
            timeoutId = window.setTimeout(()=>{
                timedOut = true;
                controller?.abort();
                resolve(null);
            }, GITHUB_CONNECTOR_STATUS_TIMEOUT_MS);
        });
        const statuses = await Promise.race([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorStatuses"])(controller ? {
                signal: controller.signal
            } : undefined),
            timeout
        ]);
        return {
            connector: githubConnectorFromStatus(statuses?.[GITHUB_CONNECTOR_ID]),
            timedOut
        };
    } finally{
        if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    }
}
function githubConnectorFromStatus(status) {
    if (!status) return null;
    return {
        id: GITHUB_CONNECTOR_ID,
        name: 'GitHub',
        provider: 'composio',
        category: 'developer tools',
        status: status.status,
        tools: [],
        ...status.accountLabel === undefined ? {} : {
            accountLabel: status.accountLabel
        },
        ...status.lastError === undefined ? {} : {
            lastError: status.lastError
        }
    };
}
function isPendingConnectorAuth(auth) {
    return auth?.kind === 'redirect_required' || auth?.kind === 'pending';
}
function isTrustedConnectorCallbackOrigin(origin, currentOrigin) {
    const expectedOrigin = currentOrigin ?? (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.origin);
    if (origin === expectedOrigin) return true;
    try {
        const url = new URL(origin);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
        return url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === '[::1]' || url.hostname === '::1';
    } catch  {
        return false;
    }
}
const LOCAL_CODE_SKIP_DIRS = new Set([
    '.git',
    '.next',
    '.nuxt',
    '.turbo',
    '.vercel',
    'build',
    'coverage',
    'dist',
    'node_modules',
    'out',
    'target'
]);
function localCodeRelativePath(file) {
    const browserPath = file.webkitRelativePath;
    return normalizeLocalCodePath(browserPath || file.name);
}
function normalizeLocalCodePath(path) {
    return path.replace(/\\/g, '/').split('/').filter(Boolean).join('/');
}
function shouldStageLocalCodeFile(file) {
    const relativePath = localCodeRelativePath(file);
    if (!relativePath) return false;
    if (file.size > MAX_LOCAL_CODE_FILE_BYTES) return false;
    const parts = relativePath.split('/');
    return !parts.some((part)=>LOCAL_CODE_SKIP_DIRS.has(part));
}
function selectLocalCodeFiles(files) {
    return dedupeLocalCodeFiles(files.filter(shouldStageLocalCodeFile)).slice(0, MAX_LOCAL_CODE_UPLOAD_FILES);
}
function dedupeLocalCodeFiles(files) {
    const seen = new Set();
    const next = [];
    for (const file of files){
        const key = `${localCodeRelativePath(file)}:${file.size}`;
        if (seen.has(key)) continue;
        seen.add(key);
        next.push(file);
    }
    return next;
}
function resourceRelativePath(file) {
    const browserPath = file.webkitRelativePath;
    return normalizeLocalCodePath(browserPath || file.name);
}
function shouldStageAssetFile(file) {
    const relativePath = resourceRelativePath(file);
    if (!relativePath) return false;
    if (file.size > MAX_ASSET_FILE_BYTES) return false;
    const parts = relativePath.split('/');
    return !parts.some((part)=>LOCAL_CODE_SKIP_DIRS.has(part));
}
function selectAssetFiles(files) {
    return dedupeResourceFiles(files.filter(shouldStageAssetFile)).slice(0, MAX_ASSET_UPLOAD_FILES);
}
function selectFigmaFiles(files) {
    return dedupeResourceFiles(files.filter((file)=>resourceRelativePath(file).toLowerCase().endsWith('.fig'))).slice(0, MAX_FIGMA_CONTEXT_FILES);
}
function dedupeResourceFiles(files) {
    const seen = new Set();
    const next = [];
    for (const file of files){
        const key = `${resourceRelativePath(file)}:${file.size}`;
        if (seen.has(key)) continue;
        seen.add(key);
        next.push(file);
    }
    return next;
}
function safeContextFileName(name, fallback) {
    const leaf = name.split('/').filter(Boolean).pop() ?? fallback;
    const base = leaf.replace(/\.[^.]+$/, '');
    const slug = base.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 72);
    return `${slug || fallback}.md`;
}
function localCodeSourceLabels(state) {
    return [
        ...state.codeFolders,
        ...state.codeFiles.length ? [
            `${state.codeFiles.length} local code files selected`
        ] : []
    ];
}
function localCodeReferences(state) {
    return Array.from(new Set([
        ...state.codeFolders,
        ...state.codeFiles
    ]));
}
function mergeLinkedCodeFolders(metadata, codeFolders) {
    if (codeFolders.length === 0) return metadata;
    return {
        kind: metadata?.kind ?? 'other',
        ...metadata,
        linkedDirs: Array.from(new Set([
            ...metadata?.linkedDirs ?? [],
            ...codeFolders
        ]))
    };
}
async function stageLocalCodeFiles(projectId, files) {
    if (files.length === 0) return {
        uploadedPaths: [],
        skippedCount: 0
    };
    const selected = selectLocalCodeFiles(files);
    const uploadedPaths = [];
    for (const file of selected){
        const desiredName = `${LOCAL_CODE_UPLOAD_ROOT}/${localCodeRelativePath(file)}`;
        const uploaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFile"])(projectId, file, desiredName);
        if (uploaded) {
            uploadedPaths.push(uploaded.name);
        }
    }
    return {
        uploadedPaths,
        skippedCount: Math.max(0, files.length - selected.length)
    };
}
async function stageFigmaFiles(projectId, files) {
    if (files.length === 0) return {
        summaryPaths: [],
        skippedCount: 0
    };
    const selected = selectFigmaFiles(files);
    const summaryPaths = [];
    for (const file of selected){
        const summary = await summarizeFigmaFile(file);
        const desiredName = `${FIGMA_CONTEXT_ROOT}/${safeContextFileName(resourceRelativePath(file), 'figma-file')}`;
        const written = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(projectId, desiredName, renderFigmaSummary(summary));
        if (written) {
            summaryPaths.push(written.name);
        }
    }
    return {
        summaryPaths,
        skippedCount: Math.max(0, files.length - selected.length)
    };
}
async function summarizeFigmaFile(file) {
    const parseBytes = Math.min(file.size, MAX_FIGMA_PARSE_BYTES);
    let readable = '';
    try {
        readable = await file.slice(0, parseBytes).text();
    } catch  {
        readable = '';
    }
    const normalized = readable.replace(/[^\t\n\r\x20-\x7e]+/g, ' ').replace(/[ \t]{2,}/g, ' ').trim();
    const namedLayers = uniqueMatches(normalized, /"name"\s*:\s*"([^"]{2,80})"/g, 40);
    const textStyles = uniqueMatches(normalized, /"(?:fontFamily|fontPostScriptName|fontName|family|styleName)"\s*:\s*"([^"]{2,80})"/g, 30);
    const colors = Array.from(new Set(normalized.match(/#[0-9a-fA-F]{6,8}\b/g) ?? [])).slice(0, 40);
    const componentHints = namedLayers.filter((name)=>/(button|card|modal|dialog|input|nav|tab|menu|toast|badge|avatar|table|list|toolbar|sidebar)/i.test(name)).slice(0, 30);
    return {
        name: resourceRelativePath(file),
        size: file.size,
        lastModified: file.lastModified,
        parseBytes,
        colors,
        textStyles,
        namedLayers,
        componentHints,
        readableSample: normalized.slice(0, 1600)
    };
}
function uniqueMatches(text, pattern, limit) {
    const values = [];
    const seen = new Set();
    for (const match of text.matchAll(pattern)){
        const value = match[1]?.trim();
        if (!value || seen.has(value)) continue;
        seen.add(value);
        values.push(value);
        if (values.length >= limit) break;
    }
    return values;
}
function renderFigmaSummary(summary) {
    return [
        `# Figma Source Summary: ${summary.name}`,
        '',
        'The original .fig source was parsed locally in the browser. This markdown summary is the only Figma-derived context copied into the design-system project.',
        '',
        '## File',
        '',
        `- Name: ${summary.name}`,
        `- Size: ${formatBytes(summary.size)}`,
        `- Last modified: ${summary.lastModified ? new Date(summary.lastModified).toISOString() : 'unknown'}`,
        `- Local parse window: ${formatBytes(summary.parseBytes)}`,
        '',
        '## Extracted Signals',
        '',
        summary.colors.length ? `Colors:\n${summary.colors.map((color)=>`- ${color}`).join('\n')}` : 'Colors: no readable color tokens found.',
        '',
        summary.textStyles.length ? `Text styles and font names:\n${summary.textStyles.map((style)=>`- ${style}`).join('\n')}` : 'Text styles and font names: no readable text-style tokens found.',
        '',
        summary.componentHints.length ? `Component-like layer names:\n${summary.componentHints.map((name)=>`- ${name}`).join('\n')}` : 'Component-like layer names: no obvious component names found.',
        '',
        summary.namedLayers.length ? `Readable layer names:\n${summary.namedLayers.map((name)=>`- ${name}`).join('\n')}` : 'Readable layer names: no readable layer names found.',
        '',
        '## Readable Sample',
        '',
        summary.readableSample ? `\`\`\`text\n${summary.readableSample}\n\`\`\`` : 'No readable text sample was available from the local parse window. Ask for screenshots, exports, or a Figma link if visual evidence is required.',
        ''
    ].join('\n');
}
function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 102.4) / 10} KB`;
    return `${Math.round(bytes / (1024 * 102.4)) / 10} MB`;
}
async function stageAssetFiles(projectId, files) {
    if (files.length === 0) return {
        uploadedPaths: [],
        skippedCount: 0
    };
    const selected = selectAssetFiles(files);
    const uploadedPaths = [];
    for (const file of selected){
        const desiredName = `${ASSET_UPLOAD_ROOT}/${resourceRelativePath(file)}`;
        const uploaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFile"])(projectId, file, desiredName);
        if (uploaded) {
            uploadedPaths.push(uploaded.name);
        }
    }
    return {
        uploadedPaths,
        skippedCount: Math.max(0, files.length - selected.length)
    };
}
function buildSourceNotes(state) {
    const githubUrls = githubUrlsFromState(state);
    const localCode = localCodeReferences(state);
    return [
        githubUrls.length ? `GitHub/code: ${githubUrls.join(', ')}` : '',
        localCode.length ? `Local code: ${localCode.join(', ')}` : '',
        state.figFiles.length ? `Figma files: ${state.figFiles.join(', ')}` : '',
        state.assetFiles.length ? `Fonts, logos and assets: ${state.assetFiles.join(', ')}` : '',
        state.notes.trim() ? `Additional notes: ${state.notes.trim()}` : ''
    ].filter(Boolean).join('\n');
}
function buildCreationAgentPrompt(state, stagedLocalCode, sourceContextManifestPath, stagedAssets, stagedFigma) {
    const sourceNotes = buildSourceNotes(state);
    const githubUrls = githubUrlsFromState(state);
    const localCode = localCodeReferences(state);
    const githubRunbook = buildGithubConnectorRunbook(githubUrls);
    const localFolderRunbook = buildLocalFolderRunbook(state.codeFolders);
    const title = inferDesignSystemTitle(state);
    return [
        'Create this project as a complete Open Design design system workspace.',
        '',
        'Autonomy requirement:',
        '- Do not ask setup or clarification questions during design-system generation.',
        '- Do not emit `<question-form>`, "Quick brief — 30 seconds", direction cards, choice cards, or any UI that waits for user input.',
        '- The setup page already collected the brief. If target surfaces, review priority, or workspace depth are missing, choose sensible defaults and begin generating the design-system artifacts immediately.',
        '',
        'Project boundary:',
        '- All GitHub extraction, local evidence intake, source reading, design-system construction, package audit, and final artifact writes must happen inside this project workspace and this project chat run.',
        '- Treat `/design-systems/create` as setup only. Do not depend on that page for progress, review, or generated output; the project is the source of truth.',
        '',
        'Use the files in this project as the design system source for future projects. Update `DESIGN.md` as the canonical rules document, and update supporting files when they make the system easier to review or reuse.',
        '',
        'Expected output:',
        '- A clear `DESIGN.md` with product context, visual foundations, color, type, spacing, layout, components, motion, voice, and anti-patterns.',
        '- A Claude Design-quality package: `README.md`, `SKILL.md`, `colors_and_type.css`, provenance notes, `assets/`, `build/` when runtime icons exist, optional `fonts/`, category-specific `preview/` cards, and a reusable `ui_kits/app/` example.',
        '- Write `README.md` as a reusable package guide, not only a generated file list. Include a source-backed Product Overview/Product Context section that explains what the product is, the primary UI surfaces, and the core capabilities evidenced by README/package/source files; include source repository or source folder references, package contents, preview manifest, and reuse workflow.',
        '- README.md must include a concrete `## Preview Manifest` section that lists each generated `preview/*.html` card by exact path, what reviewers should inspect there, and which source-backed components, tokens, assets, or fonts it demonstrates. Keep this manifest synchronized with the actual `preview/` files.',
        '- Preserve real source assets when evidence provides them: logos, app icons, tray icons, avatars, wordmarks, and font files belong in `assets/`, `build/`, or `fonts/`, not in prose-only notes. When source files include build/runtime icon assets such as installer icons, tray icons, app icons, or wordmarks under build/resources paths, preserve representative files under `build/` as Claude Design does. When multiple source logos/icons/fonts are captured, preserve a representative set instead of collapsing everything into one generic logo or font. If font files are preserved, bind them in `colors_and_type.css` with `@font-face`, `@import`, or `url(...)` references so previews and UI kits actually render the brand typeface.',
        BUILD_ASSET_PRESERVATION_CONTRACT,
        '- Preserve high-signal source component examples when evidence provides substantial app/component code. Copy at least a few real, substantive source-backed examples outside `context/` (for example `source_examples/SelectModelButton.tsx`, `source_examples/ChatNavBar/index.tsx`, or root/nested TSX files) so future agents can inspect the original implementation patterns without digging through intake snapshots. Do not replace captured source examples with tiny filename-only stubs.',
        '- Split review previews into focused cards instead of one generic page. Prefer cards such as `preview/colors-primary.html`, `preview/colors-theme-light.html`, `preview/colors-theme-dark.html`, `preview/typography-specimens.html`, `preview/spacing-tokens.html`, `preview/spacing-radius.html`, `preview/spacing-shadows.html`, `preview/components-buttons.html`, `preview/components-inputs.html`, and `preview/brand-assets.html` when evidence supports them. `preview/brand-assets.html` must visibly load the preserved files from `assets/` or `build/` with real `img`, `picture`, `object`, or CSS `url(...)` references; do not redraw brand marks as inline placeholders when source assets were captured.',
        '- Write `SKILL.md` as an agent-usable Claude Design-style skill entry, not only a loose Markdown note. Include YAML frontmatter with `name`, `description`, and `user-invocable`, then include reusable sections for `What is inside`, `Source context`, `When to use this skill`, `How to use`, and `Design system highlights`. Those sections should tell future agents to read README.md, DESIGN.md, colors_and_type.css, preview/, assets/, build/, fonts/, source_examples/, and ui_kits/app/ before generating artifacts.',
        '- Build `ui_kits/app/` as an applied interface kit with `index.html`, a reusable README, and modular component files when the evidence includes representative product surfaces. `ui_kits/app/README.md` should document the kit structure, component files, usage workflow, design notes, and source basis, not only say the kit exists. `ui_kits/app/index.html` must load `../../colors_and_type.css`, must load/import/compose the modular component files under `ui_kits/app/components/`, and must mount/render the composed interface into the page; if it directly loads `.jsx`/`.tsx` files, include React, ReactDOM, and Babel standalone scripts and expose each loaded component as `window.ComponentName` / `globalThis.ComponentName`, or write compiled browser-ready JavaScript instead. Do not leave the entry page as a standalone generic static mock or disconnected script list when component files exist. For chat/workspace evidence, include substantive role-based components under `ui_kits/app/components/`: `App.jsx`, `Sidebar.jsx`, a list/rail component such as `AssistantsList.jsx`, a main workspace component such as `ChatArea.jsx`, an input/composer such as `InputBar.jsx`, and a message/comment component such as `MessageBubble.jsx`; the app shell component must compose the role components into one product-like surface; do not write one-line placeholder components.',
        UI_KIT_ENTRY_CONTRACT,
        '- Preview cards and UI-kit visuals should name or model high-signal source components from the evidence, such as the captured sidebar, chat, composer, message, artifact, modal, avatar, or selector files. Avoid anonymous generic examples when concrete source component names are available.',
        '- If older scaffold names exist (`preview/colors-node-types.html`, `preview/colors-ui-palette.html`, `preview/typography-scale.html`, `preview/spacing-system.html`, `preview/logo-variants.html`, or `ui_kits/generated_interface/`), replace them with the focused Claude-style structure above instead of extending the old generic files.',
        '- Keep `README.md`, `SKILL.md`, `DESIGN.md`, and `ui_kits/app/README.md` in sync with the final file structure; do not leave manifest text pointing to older preview names or `ui_kits/generated_interface/`.',
        '- Reviewable previews must appear in the right-side `Design System` tab and show real modules with preview cards, not a standalone marketing page or a single placeholder panel.',
        '',
        'Core execution order:',
        '1. Read `context/source-context.md` first, then run every intake command it lists for linked GitHub repositories and linked local code folders before editing design-system files.',
        '2. Do not write `DESIGN.md`, token files, previews, UI-kit examples, or asset notes from URL text alone. When GitHub, local code, Figma, or assets were provided, preserve concrete evidence under `context/` and use it as the basis for the design-system files.',
        '3. Before writing the design-system files, inventory the local evidence for product identity, real color/theme tokens, font families, brand assets, app shell layout, navigation, chat/input surfaces, and reusable components. Use this inventory to avoid generic tokens.',
        '4. Copy high-signal source component examples from the snapshots when they explain the design system better than prose alone. Keep these examples outside `context/` as reusable package artifacts, not only as hidden evidence.',
        '5. After evidence is collected, update the project files directly and keep the `Design System` tab reviewable.',
        '',
        'Completion gate:',
        '- For each linked GitHub repository, there must be a `context/github/*.md` evidence note plus command-written snapshots under `context/github/*/files/` before writing final design-system rules or previews. The snapshots should include theme/token/source files and any available binary assets or fonts selected by the intake command.',
        '- For each linked local code folder, run the listed `local-design-context` command and use its `context/local-code/*.md` evidence note plus command-written snapshots under `context/local-code/*/files/` before writing final design-system rules or previews. Browser-copied snapshots already under `context/local-code/` are also valid local evidence.',
        '- Do not call GitHub connector tree/content/raw tools directly from the agent. Use only the bounded `github-design-context` command listed in `context/source-context.md`; it tries this-device git first, authenticated GitHub CLI second, then connector-platform fallback when local access cannot read the repository.',
        '- If the bounded command records `Read method: git-clone`, treat those this-device snapshots as the primary evidence. If it records `Read method: connector`, treat the connector-platform snapshots as valid fallback evidence and continue.',
        '- For private repositories, local git credentials or GitHub CLI authentication (`gh auth login --web`) are preferred intake paths because the command still writes local evidence snapshots.',
        '- If the bounded command cannot write snapshots at all, stop with the permission, GitHub CLI login, connection, rate-limit, or clone issue. Do not substitute ad-hoc public GitHub browsing, memory, or URL-only inference.',
        '- Finish only after the project contains reviewable design-system artifacts: `DESIGN.md`, `README.md`, `SKILL.md`, reusable token/style files, focused preview HTML cards, UI-kit examples, preserved assets/fonts when supported, and provenance/context notes.',
        '- Before your final response, run `"$OD_NODE_BIN" "$OD_BIN" tools connectors design-system-package-audit --path . --fail-on-warnings`. Fix every audit error and design-quality warning, including generic visual artifacts, thin source-backed modules, stale manifest paths, and missing representative assets/fonts. If an issue cannot be fixed because source evidence is missing, explain that blocker instead of claiming the design system is ready.',
        '',
        `Design system workspace title:\n${title}`,
        '',
        'Use this title for README.md, SKILL.md, DESIGN.md, preview labels, and ui_kits/app copy unless the inspected source evidence proves a better product name. Do not derive the title from URL protocol text such as `https`.',
        '',
        `Company / design system context:\n${state.company.trim()}`,
        sourceContextManifestPath ? `\nSource context manifest:\n- Read \`${sourceContextManifestPath}\` before drafting. It records GitHub access readiness, local folder links, copied code snapshots, uploaded resources, and the review contract for this design system project.` : '',
        sourceNotes ? `\nProvided resources:\n${sourceNotes}` : '',
        githubUrls.length ? githubRunbook : '',
        state.codeFolders.length ? `Read the linked local code folders that Open Design attached to this project: ${state.codeFolders.join(', ')}. Treat them as source context only unless the user asks you to edit them.\n\n${localFolderRunbook}` : '',
        stagedLocalCode?.uploadedPaths.length ? `Inspect the copied local code snapshot files in this project under \`${LOCAL_CODE_UPLOAD_ROOT}/\`: ${stagedLocalCode.uploadedPaths.slice(0, 20).join(', ')}${stagedLocalCode.uploadedPaths.length > 20 ? `, and ${stagedLocalCode.uploadedPaths.length - 20} more` : ''}.` : '',
        stagedLocalCode?.skippedCount ? `${stagedLocalCode.skippedCount} local code files were skipped because they were too large, duplicate, generated, or outside the focused upload limit.` : '',
        stagedFigma?.summaryPaths.length ? `Use the locally parsed Figma summaries in \`${FIGMA_CONTEXT_ROOT}/\`: ${stagedFigma.summaryPaths.join(', ')}. Treat these as evidence extracted from .fig files; the original .fig files were not uploaded.` : '',
        stagedFigma?.skippedCount ? `${stagedFigma.skippedCount} .fig files were skipped because they were duplicate or outside the focused parse limit.` : '',
        stagedAssets?.uploadedPaths.length ? `Use uploaded brand assets in \`${ASSET_UPLOAD_ROOT}/\`: ${stagedAssets.uploadedPaths.slice(0, 20).join(', ')}${stagedAssets.uploadedPaths.length > 20 ? `, and ${stagedAssets.uploadedPaths.length - 20} more` : ''}.` : '',
        stagedAssets?.skippedCount ? `${stagedAssets.skippedCount} asset files were skipped because they were too large, duplicate, generated, or outside the focused upload limit.` : '',
        localCode.length ? 'Use local code context to infer actual tokens, typography, spacing, components, assets, naming, and product surface patterns.' : '',
        '',
        'Keep this scoped to the design-system project. When finished, summarize which files should be reviewed first.'
    ].filter(Boolean).join('\n');
}
function buildSourceContextManifest(state, options) {
    const githubUrls = githubUrlsFromState(state);
    const linkedFolders = state.codeFolders;
    const copiedSnapshots = options.stagedLocalCode?.uploadedPaths ?? [];
    const skippedCount = options.stagedLocalCode?.skippedCount ?? 0;
    const figmaSummaries = options.stagedFigma?.summaryPaths ?? [];
    const skippedFigma = options.stagedFigma?.skippedCount ?? 0;
    const uploadedAssets = options.stagedAssets?.uploadedPaths ?? [];
    const skippedAssets = options.stagedAssets?.skippedCount ?? 0;
    const title = inferDesignSystemTitle(state);
    const sections = [
        '# Design System Source Context',
        '',
        'This file is generated during setup and should be treated as source evidence for the design-system project. Use it before writing or revising DESIGN.md, previews, tokens, UI kit examples, or assets.',
        '',
        '## Company / Product',
        '',
        `Canonical design-system title: ${title}`,
        '',
        state.company.trim() || 'No company or product context provided yet.'
    ];
    sections.push('', '## GitHub Repositories', '');
    if (githubUrls.length > 0) {
        sections.push(...githubUrls.map((url)=>`- ${url}`));
    } else {
        sections.push('- None linked.');
    }
    sections.push('', `Connector status: ${githubConnectorStatusForManifest(options)}`);
    if (githubUrls.length > 0) {
        sections.push('', '### GitHub Connector Intake Runbook', '', buildGithubConnectorRunbook(githubUrls));
    }
    sections.push('', '## Local Code', '');
    if (linkedFolders.length > 0) {
        sections.push('Linked folders readable by the local agent:');
        sections.push(...linkedFolders.map((folder)=>`- ${folder}`));
        sections.push('', '### Local Folder Intake Runbook', '', buildLocalFolderRunbook(linkedFolders));
    } else {
        sections.push('Linked folders readable by the local agent: none.');
    }
    if (copiedSnapshots.length > 0) {
        sections.push('', `Copied browser-selected code snapshot files under \`${LOCAL_CODE_UPLOAD_ROOT}/\`:`);
        sections.push(...copiedSnapshots.slice(0, 40).map((filePath)=>`- ${filePath}`));
        if (copiedSnapshots.length > 40) {
            sections.push(`- ...and ${copiedSnapshots.length - 40} more files.`);
        }
    } else {
        sections.push('', `Copied browser-selected code snapshot files under \`${LOCAL_CODE_UPLOAD_ROOT}/\`: none.`);
    }
    if (skippedCount > 0) {
        sections.push(`${skippedCount} local code files were skipped because they were too large, duplicate, generated, or outside the focused upload limit.`);
    }
    sections.push('', '## Design And Brand Resources', '');
    sections.push(state.figFiles.length ? `Figma files selected:\n${state.figFiles.map((name)=>`- ${name}`).join('\n')}` : 'Figma files selected: none.');
    if (figmaSummaries.length > 0) {
        sections.push('', `Locally parsed Figma summaries under \`${FIGMA_CONTEXT_ROOT}/\`:`);
        sections.push(...figmaSummaries.map((filePath)=>`- ${filePath}`));
    } else {
        sections.push('', `Locally parsed Figma summaries under \`${FIGMA_CONTEXT_ROOT}/\`: none.`);
    }
    if (skippedFigma > 0) {
        sections.push(`${skippedFigma} .fig files were skipped because they were duplicate or outside the focused parse limit.`);
    }
    sections.push(state.assetFiles.length ? `Fonts, logos, and assets selected:\n${state.assetFiles.map((name)=>`- ${name}`).join('\n')}` : 'Fonts, logos, and assets selected: none.');
    if (uploadedAssets.length > 0) {
        sections.push('', `Uploaded brand asset files under \`${ASSET_UPLOAD_ROOT}/\`:`);
        sections.push(...uploadedAssets.slice(0, 40).map((filePath)=>`- ${filePath}`));
        if (uploadedAssets.length > 40) {
            sections.push(`- ...and ${uploadedAssets.length - 40} more files.`);
        }
    } else {
        sections.push('', `Uploaded brand asset files under \`${ASSET_UPLOAD_ROOT}/\`: none.`);
    }
    if (skippedAssets > 0) {
        sections.push(`${skippedAssets} asset files were skipped because they were too large, duplicate, generated, or outside the focused upload limit.`);
    }
    sections.push('', '## Notes', '', state.notes.trim() || 'No additional notes provided.');
    sections.push('', '## Review Contract', '', '- `/design-systems/create` only collected setup inputs. All GitHub extraction, local evidence intake, source reading, design-system construction, package audit, and artifact writes should happen inside this project workspace.', '- DESIGN.md is the canonical source of truth.', '- Use the canonical design-system title above for headings, README/SKILL names, preview labels, and UI-kit copy unless inspected evidence proves a more accurate product name. Never title the system from URL protocol text such as `https`.', '- colors_and_type.css should hold concrete reusable tokens when the source evidence supports them; if fonts/ contains preserved font files, colors_and_type.css must bind those files with @font-face, @import, or url(...) references so typography does not fall back to substitute fonts.', '- README.md and SKILL.md should make the extracted system reusable as a real Open Design design-system package.', '- README.md should include a source-backed Product Overview/Product Context section, source repository or source folder references, package contents, a concrete `## Preview Manifest` listing every generated `preview/*.html` card, and reuse workflow, similar to Claude Design exports.', '- SKILL.md should include YAML frontmatter with `name`, `description`, and `user-invocable`, plus Claude-style reusable skill sections: What is inside, Source context, When to use this skill, How to use, and Design system highlights. The usage guidance should point agents at README.md, DESIGN.md, colors_and_type.css, preview/, assets/, build/, fonts/, source_examples/, and ui_kits/app/.', '- README.md, SKILL.md, DESIGN.md, and ui_kits/app/README.md must describe the final focused preview cards and `ui_kits/app/` paths, not old scaffold names such as `preview/typography-scale.html` or `ui_kits/generated_interface/`.', '- preview/ should contain small reviewable HTML cards for typography, color themes, spacing, radius, shadows, brand assets, and component evidence.', '- source_examples/ or equivalent root/nested source files should preserve selected high-signal original components when snapshots include substantial app/component source, similar to Claude Design exports that keep files like SelectModelButton.tsx or ChatNavBar/index.tsx alongside the package. These examples should contain substantive original implementation code, not tiny stubs that only share the component name.', '- ui_kits/app/ should contain an applied interface example, plus substantive role-based files under `ui_kits/app/components/` when the source snapshots include representative app shells, navigation, chat/input surfaces, or reusable components. `ui_kits/app/README.md` should explain structure, component files, usage, design notes, and source basis. `ui_kits/app/index.html` must load `../../colors_and_type.css`, must load/import/compose the modular component files, and must mount/render the composed interface instead of staying as a standalone generic static mock or disconnected script list. If the entry directly loads `.jsx`/`.tsx` files, include React, ReactDOM, and Babel standalone scripts and expose each loaded component as `window.ComponentName` / `globalThis.ComponentName`, or write compiled browser-ready JavaScript instead. For chat/workspace evidence, cover app shell, sidebar/navigation, assistant/list rail, chat area, input bar/composer, and message bubble/comment roles; the app shell component must compose those roles into one product-like surface. Placeholder component shells are not sufficient.', UI_KIT_ENTRY_CONTRACT, '- Preview cards and UI-kit visuals should explicitly label or model source-backed modules from the captured evidence instead of generic placeholder modules.', '- assets/, build/, fonts/, and context/ should preserve logos, app icons, tray icons, installer/runtime icons, wordmarks, font files, provenance, and source notes for future projects.', BUILD_ASSET_PRESERVATION_CONTRACT, '- preview/brand-assets.html should visibly reference preserved files from assets/ or build/ instead of recreating logos/icons as inline placeholder drawings.', '- GitHub evidence must come from the bounded `github-design-context` command, not direct connector tree/content/raw tool calls. The command tries this-device git first, authenticated GitHub CLI second, and connector-platform fallback only when local access cannot read the repository.', '- Linked local folder evidence should come from the bounded `local-design-context` command, which writes a local evidence note and snapshots under `context/local-code/` before final design-system rules are drafted.', '- Before marking the design system ready, run `"$OD_NODE_BIN" "$OD_BIN" tools connectors design-system-package-audit --path . --fail-on-warnings` and fix every reported error or warning.', '- Draft design systems cannot be used by other projects until published.');
    return `${sections.join('\n')}\n`;
}
function buildLocalFolderRunbook(folders) {
    if (folders.length === 0) return '';
    const intakeCommands = folders.map((folder, index)=>`   - \`"$OD_NODE_BIN" "$OD_BIN" tools connectors local-design-context --path ${shellQuote(folder)} --output context/local-code/${localEvidenceFileName(folder, index)}\``).join('\n');
    return [
        'Local folder intake is required before drafting from linked local code folders:',
        '1. For each linked folder, run the bounded local intake command before writing design-system files:',
        intakeCommands,
        '2. The command selects design-system-relevant source files plus available logos/icons/fonts, writes a reviewable evidence note, and copies snapshots under `context/local-code/`.',
        '3. Inspect the generated evidence note plus snapshots for README, package manifests, Tailwind/theme/token files, global CSS, font declarations, component source, layout shells, icons/logos/assets, and representative app entry files.',
        '4. If the command cannot read a linked folder or write snapshots, stop and explain the local file access problem instead of inventing tokens from the folder name.'
    ].join('\n');
}
function buildGithubConnectorRunbook(githubUrls) {
    if (githubUrls.length === 0) return '';
    const intakeCommands = githubUrls.map((url)=>`   - \`"$OD_NODE_BIN" "$OD_BIN" tools connectors github-design-context --repo ${shellQuote(url)} --output context/github/${githubEvidenceFileName(url)}\``).join('\n');
    return [
        'GitHub repository intake is required before drafting the design system:',
        '1. For each linked repository, run the bounded intake command before writing design-system files. The command tries this-device access first (`git clone`, then authenticated GitHub CLI via `gh auth login --web`) and uses the Composio GitHub connector only as a connector-platform fallback.',
        intakeCommands,
        '2. Do not call GitHub connector tree/content/raw tools directly from the agent. Large repositories can trigger `CONNECTOR_OUTPUT_TOO_LARGE`; the bounded intake command is the only allowed GitHub repository intake path for this workflow.',
        '3. The intake command selects design-system-relevant source files plus available logos/icons/fonts and writes a reviewable evidence note plus file snapshots under `context/github/`; keep those files as the source evidence for this design-system project.',
        '4. If you already hit `CONNECTOR_OUTPUT_TOO_LARGE` or `CONNECTOR_RATE_LIMITED` from a direct connector call, do not stop and do not retry the same direct tool. Run the bounded intake command above, then inspect the written snapshots.',
        '5. Treat `Read method: git-clone` as the preferred this-device path. Treat `Read method: connector` as valid connector-platform fallback evidence when local git/GitHub CLI could not read the repository.',
        '6. The command is strict: if the bounded intake command cannot write snapshot files, stop and explain the permission, GitHub CLI login, connection, rate-limit, or clone problem. Do not use ad-hoc public GitHub browsing, memory, or URL-only inference for design-system files.',
        '7. Inspect the generated evidence note plus snapshots for README, package manifests, Tailwind/theme/token files, global CSS, font declarations, component source for buttons/forms/navigation/cards/tables, layout shells, icons/logos/assets, and representative app entry files.',
        '8. Use that evidence to create or update `DESIGN.md`, `colors_and_type.css`, `README.md`, `SKILL.md`, `preview/`, `ui_kits/app/`, `assets/`, and `fonts/` so the Design System tab can review the output as a reusable package.'
    ].join('\n');
}
function localEvidenceFileName(folder, index) {
    const parts = folder.split(/[\\/]+/u).filter(Boolean);
    const basename = sanitizeEvidenceSegment(parts.at(-1) ?? 'local-source');
    return `${basename}${index > 0 ? `-${index + 1}` : ''}.md`;
}
function githubEvidenceFileName(url) {
    const match = /github\.com[:/]([^/\s]+)\/([^/\s#?]+?)(?:\.git)?(?:[/?#].*)?$/iu.exec(url) ?? /^([^/\s]+)\/([^/\s#?]+?)(?:\.git)?$/u.exec(url);
    const owner = sanitizeEvidenceSegment(match?.[1] ?? 'github');
    const repo = sanitizeEvidenceSegment(match?.[2] ?? 'repository');
    return `${owner}-${repo}.md`;
}
function sanitizeEvidenceSegment(value) {
    return value.trim().replace(/[^a-z0-9._-]+/giu, '-').replace(/^-+|-+$/gu, '') || 'repo';
}
function shellQuote(value) {
    return `'${value.replace(/'/gu, `'\\''`)}'`;
}
function githubConnectorStatusForManifest(options) {
    if (!options.composioConfigured) {
        return 'GitHub connector is not configured; repository intake will use local git credentials or authenticated GitHub CLI when possible.';
    }
    if (isGithubConnectorConnected(options.githubConnector)) {
        const account = getDisplayableGithubAccountLabel(options.githubConnector);
        return account ? `connected as ${account}.` : 'connected.';
    }
    return 'Composio key is configured, but GitHub is not connected; repository intake can still use local git credentials or authenticated GitHub CLI when possible.';
}
function buildProvenance(state) {
    const githubUrls = githubUrlsFromState(state);
    const localCode = localCodeReferences(state);
    return {
        companyBlurb: state.company.trim(),
        ...githubUrls.length ? {
            githubUrls
        } : {},
        ...localCode.length ? {
            localCodeFiles: localCode
        } : {},
        ...state.figFiles.length ? {
            figFiles: state.figFiles
        } : {},
        ...state.assetFiles.length ? {
            assetFiles: state.assetFiles
        } : {},
        ...state.notes.trim() ? {
            notes: state.notes.trim()
        } : {},
        sourceNotes: buildSourceNotes(state)
    };
}
function provenanceRows(provenance) {
    if (!provenance) return [];
    return [
        provenance.companyBlurb ? {
            label: 'Company',
            value: truncateContext(provenance.companyBlurb)
        } : null,
        provenance.githubUrls?.length ? {
            label: 'GitHub',
            value: provenance.githubUrls.join(', ')
        } : null,
        provenance.localCodeFiles?.length ? {
            label: 'Code',
            value: provenance.localCodeFiles.join(', ')
        } : null,
        provenance.figFiles?.length ? {
            label: 'Figma',
            value: provenance.figFiles.join(', ')
        } : null,
        provenance.assetFiles?.length ? {
            label: 'Assets',
            value: provenance.assetFiles.join(', ')
        } : null,
        provenance.notes ? {
            label: 'Notes',
            value: truncateContext(provenance.notes)
        } : null,
        provenance.sourceNotes ? {
            label: 'Fetched context',
            value: truncateContext(provenance.sourceNotes)
        } : null
    ].filter((row)=>row !== null);
}
function truncateContext(value) {
    return value.length > 160 ? `${value.slice(0, 157)}...` : value;
}
function parseDesignSystemSections(body) {
    const matches = [
        ...body.matchAll(/^##\s+(.+?)\s*$/gm)
    ];
    if (matches.length === 0) {
        return [
            {
                title: 'Design System',
                subtitle: 'Draft body',
                body: body.trim() || 'No content yet.'
            }
        ];
    }
    return matches.map((match, index)=>{
        const start = (match.index ?? 0) + match[0].length;
        const end = matches[index + 1]?.index ?? body.length;
        const title = match[1]?.replace(/^\d+\.\s*/, '').trim() || 'Section';
        const content = body.slice(start, end).trim();
        return {
            title,
            subtitle: sectionSubtitle(title),
            body: content || 'No details yet.'
        };
    });
}
function sectionSubtitle(title) {
    const normalized = title.toLowerCase();
    if (normalized.includes('type')) return 'Text hierarchy and styles';
    if (normalized.includes('color')) return 'Palette and semantic roles';
    if (normalized.includes('spacing')) return 'Spacing scale and radius tokens';
    if (normalized.includes('component')) return 'Reusable interface patterns';
    if (normalized.includes('brand')) return 'Logo, voice and usage rules';
    return 'Design guidance';
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "DesignSystemCreationFlow");
__turbopack_context__.k.register(_c1, "DesignSystemDetailView");
__turbopack_context__.k.register(_c2, "DesignSystemPackageCard");
__turbopack_context__.k.register(_c3, "PackageFileGroup");
__turbopack_context__.k.register(_c4, "WorkspaceActivityCard");
__turbopack_context__.k.register(_c5, "SourceContextCard");
__turbopack_context__.k.register(_c6, "GenerationStatusCard");
__turbopack_context__.k.register(_c7, "RevisionDiffCard");
__turbopack_context__.k.register(_c8, "RevisionHistoryList");
__turbopack_context__.k.register(_c9, "DropZone");
__turbopack_context__.k.register(_c10, "GitHubRepositoryAccessPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_DesignSystemFlow_tsx_13wbrjl._.js.map