(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/FileWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESIGN_FILES_TAB",
    ()=>DESIGN_FILES_TAB,
    "DESIGN_SYSTEM_TAB",
    ()=>DESIGN_SYSTEM_TAB,
    "FileWorkspace",
    ()=>FileWorkspace,
    "scrollWorkspaceTabsWithWheel",
    ()=>scrollWorkspaceTabsWithWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/upload-tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/file-ops.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/todos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$slide$2d$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/slide-nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/srcdoc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignFilesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignFilesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignBrowserPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-system-github-evidence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AppChromeHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AppChromeHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FileViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$tab$2d$launcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/tab-launcher.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/SideChatTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/TerminalViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LiveArtifactBadges.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MissingBrandFontsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MissingBrandFontsBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PasteTextDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PasteTextDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QuestionsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuickSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QuickSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SketchEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sketch$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/sketch-model.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
const DESIGN_FILES_TAB = '__design_files__';
const DESIGN_SYSTEM_TAB = '__design_system__';
const QUESTIONS_TAB = '__questions__';
const BROWSER_TAB_PREFIX = '__browser__:';
// Keep at most this many embedded-browser `<webview>`s mounted at once. Each is
// a full out-of-process Chromium guest (timers, JS, network, a GPU surface), so
// mounting every open browser tab made memory/CPU grow linearly with tab count.
// We keep an LRU of the most-recently-activated browser tabs live and unmount
// the rest; switching back to an evicted tab remounts (reloads) it.
const BROWSER_KEEPALIVE_CAP = 3;
// Stable empty folder list so the render-phase project-switch reset is
// idempotent (passing a fresh `[]` each render would re-trigger the reset).
const EMPTY_PROJECT_FOLDERS = [];
function consumeFileWorkspaceTabShortcut(event) {
    event.preventDefault();
    event.stopPropagation();
}
function formatBrowserTabUrl(url) {
    if (!url) return '';
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.replace(/^www\./, '');
        const path = `${parsed.pathname}${parsed.search}${parsed.hash}`;
        if (!path || path === '/') return host || url;
        return `${host}${path}`;
    } catch  {
        return url;
    }
}
function joinDisplayPath(root, child) {
    const cleanRoot = root.replace(/[\\/]+$/u, '');
    const cleanChild = child.replace(/^[\\/]+/u, '');
    return cleanChild ? `${cleanRoot}/${cleanChild}` : cleanRoot;
}
function createDefaultDesignFilesNavState() {
    return {
        kindFilter: new Set(),
        currentDir: '',
        page: 0,
        pageSize: 30
    };
}
const DESIGN_SYSTEM_CARD_MANIFEST_OPTIONAL_STRING_FIELDS = [
    'group',
    'name',
    'subtitle',
    'viewport'
];
const DESIGN_SYSTEM_GUIDANCE_FILES = new Set([
    'design.md',
    'readme.md',
    'readme-print.md',
    'skill.md'
]);
const DESIGN_SYSTEM_IMAGE_OR_FONT_EXTENSIONS = /\.(svg|png|jpe?g|gif|webp|avif|ico|otf|ttf|woff2?)$/i;
function FileWorkspace({ projectId, projectKind, rootDirName, reloading, resolvedDir, files, liveArtifacts, filesRefreshKey = 0, onRefreshFiles, isDeck, onExportAsPptx, streaming, commentQueueOnSend = false, commentSendDisabled = false, openRequest, shareRequest, downloadRequest, slideNavRequest, liveArtifactEvents = [], designSystemActivityEvents = [], tabsState, onTabsStateChange, previewComments = [], onSavePreviewComment, onRemovePreviewComment, onSendBoardCommentAttachments, onRequestBrowserUsePrompt, onPluginFolderAgentAction, activePluginActionPaths, hiddenPluginActionPaths, preferredPreviewFile = null, autoPreviewDesignArtifacts = false, focusMode = false, onFocusModeChange, designSystemProject = null, defaultDesignSystemId = null, onSetDefaultDesignSystem, onDesignSystemsRefresh, onDesignSystemNeedsWork, designSystemReview, onDesignSystemReviewDecision, onUseDesignSystem, onConnectRepo, githubConnected, commentPortalId, onCommentModeChange, chatConfig, chatAgentsById, chatLocale, conversations = [], activeConversationId = null, onSelectConversation, onDeleteConversation, onRenameConversation, onConversationSessionModeChange, onNewConversation, activeConversationChat, onActiveContextChange, onWorkspaceContextsChange, messages = [], conversationId, headerActions, questionForm = null, questionFormPreview = null, questionFormKey = null, questionFormInteractive = false, questionFormSubmitDisabled = false, questionFormSubmittedAnswers, questionsGenerating = false, onSubmitQuestionForm, focusQuestionsRequest = null }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    // The chat column only shows a compact Questions banner; the form itself
    // lives here, including after submission when a banner click can reopen the
    // answered preview.
    const showQuestionsTab = Boolean(questionForm || questionFormPreview || questionsGenerating);
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // P1 page_view page_name=file_manager — once per project the user lands
    // inside the workspace. Re-fire when the projectId changes so a
    // project-switch session shows up as a fresh view rather than reusing
    // the previous one.
    const fileManagerViewedProjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (fileManagerViewedProjectRef.current === projectId) return;
            fileManagerViewedProjectRef.current = projectId;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'file_manager'
            });
        }
    }["FileWorkspace.useEffect"], [
        projectId,
        analytics.track
    ]);
    const defaultRootTab = designSystemProject ? DESIGN_SYSTEM_TAB : DESIGN_FILES_TAB;
    // Persisted tabs come from the parent. Active tab can transiently point
    // at a pending sketch — pending sketches are not in tabsState.tabs.
    const persistedTabs = tabsState.tabs;
    // Launcher "create" actions (New Terminal / Side Chat) resolve
    // asynchronously; keep the latest committed tab state out of render
    // closures so opening the new tab appends to the freshest list instead of
    // replaying a stale closure and dropping tabs added in the meantime.
    const tabsStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(tabsState);
    const lastTabsStatePropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(tabsState);
    if (lastTabsStatePropRef.current !== tabsState) {
        tabsStateRef.current = tabsState;
        lastTabsStatePropRef.current = tabsState;
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabsState.active ?? defaultRootTab);
    const [showPasteDialog, setShowPasteDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // The folder the Design Files panel is currently viewing (synced via
    // onCurrentDirChange). New files — uploads, pastes, sketches, dropped files —
    // are created under this folder instead of the project root.
    const [uploadDir, setUploadDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sketches, setSketches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [quickSwitcherOpen, setQuickSwitcherOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [projectFolders, setProjectFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_PROJECT_FOLDERS);
    // Reset the folder list during render — NOT in an effect — when the project
    // changes. DesignFilesPanel is keyed by `projectId`, so an effect-based reset
    // would let the new panel mount once with the previous project's folders and
    // briefly suppress the new project's empty state (the exact regression this
    // fix removes). Adjusting state during render discards this render before the
    // child commits, so the new panel never sees stale folders. Mirrors the
    // designFilesNav ref reset above. The stable empty constant keeps this
    // idempotent (no re-entrant render loop).
    const projectFoldersProjectIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(projectId);
    if (projectFoldersProjectIdRef.current !== projectId) {
        projectFoldersProjectIdRef.current = projectId;
        setProjectFolders(EMPTY_PROJECT_FOLDERS);
    }
    const [browserTabs, setBrowserTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FileWorkspace.useState": ()=>browserTabsFromState(tabsState.browserTabs)
    }["FileWorkspace.useState"]);
    // "+" launcher (file search + registry-driven create-new actions:
    // Side Chat, Terminal, Browser).
    const [launcherOpen, setLauncherOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Transient feedback when a launcher "create" action (e.g. New Terminal)
    // fails on the daemon side, so the click is never a silent no-op.
    const [launcherToast, setLauncherToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tabsOverflowing, setTabsOverflowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedTabName, setDraggedTabName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverTab, setDragOverTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const launcherBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabsBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draggedTabNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const browserTabSequenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const designFilesNavProjectIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(projectId);
    const designFilesNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(createDefaultDesignFilesNavState());
    if (designFilesNavProjectIdRef.current !== projectId) {
        designFilesNavProjectIdRef.current = projectId;
        designFilesNavRef.current = createDefaultDesignFilesNavState();
    }
    const onDesignFilesNavStateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileWorkspace.useCallback[onDesignFilesNavStateChange]": (state)=>{
            designFilesNavRef.current = state;
        }
    }["FileWorkspace.useCallback[onDesignFilesNavStateChange]"], []);
    // Maps a terminal tab's original session id (the `terminal:<id>` suffix) to
    // the PTY session it is CURRENTLY bound to. Restart rebinds the surface to a
    // fresh session while the tab id stays constant, and the surface is unmounted
    // whenever its tab isn't active — so this ref (which survives the child's
    // unmount) is the only place that knows which PTY to kill on an explicit
    // Close. `<TerminalViewer onSessionIdChange>` keeps it current.
    const terminalLiveSessionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const handleTerminalSessionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileWorkspace.useCallback[handleTerminalSessionChange]": (originalId, sessionId)=>{
            terminalLiveSessionsRef.current.set(originalId, sessionId);
        }
    }["FileWorkspace.useCallback[handleTerminalSessionChange]"], []);
    // LRU of browser tab ids whose `<webview>` is currently mounted (most-recent
    // first). A browser tab is mounted only after it has been activated; we cap
    // the live set at BROWSER_KEEPALIVE_CAP and unmount the rest.
    const [liveBrowserTabIds, setLiveBrowserTabIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const visibleFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[visibleFiles]": ()=>files.filter({
                "FileWorkspace.useMemo[visibleFiles]": (file)=>!isLiveArtifactImplementationPath(file.name)
            }["FileWorkspace.useMemo[visibleFiles]"])
    }["FileWorkspace.useMemo[visibleFiles]"], [
        files
    ]);
    const liveArtifactEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[liveArtifactEntries]": ()=>liveArtifacts.map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveArtifactSummaryToWorkspaceEntry"])
    }["FileWorkspace.useMemo[liveArtifactEntries]"], [
        liveArtifacts
    ]);
    const refreshProjectFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileWorkspace.useCallback[refreshProjectFolders]": async ()=>{
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFolders"])(projectId);
            setProjectFolders(next);
            return next;
        }
    }["FileWorkspace.useCallback[refreshProjectFolders]"], [
        projectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            let cancelled = false;
            // The synchronous clear happens during render (see projectFoldersProjectIdRef
            // above); here we only fetch the new project's folders.
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFolders"])(projectId).then({
                "FileWorkspace.useEffect": (next)=>{
                    if (!cancelled) setProjectFolders(next);
                }
            }["FileWorkspace.useEffect"]);
            return ({
                "FileWorkspace.useEffect": ()=>{
                    cancelled = true;
                }
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], [
        projectId
    ]);
    // True when the Design Files tab has nothing to attach: no files, no live
    // artifacts, no folders. Mirrors DesignFilesPanel's own empty-state gate so
    // the "Design files" composer context and the empty placeholder agree on
    // when the tab is actually empty. Reused below to suppress the auto-attached
    // workspace context for a brand-new/empty project.
    const designFilesTabIsEmpty = visibleFiles.length === 0 && liveArtifactEntries.length === 0 && projectFolders.length === 0;
    // Pull the persisted active tab in when the parent's hydration completes
    // (or on project switch). Fall back to the Design Files browser so a
    // fresh project lands in a useful place.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            setActiveTab(tabsState.active ?? defaultRootTab);
        }
    }["FileWorkspace.useEffect"], [
        tabsState.active,
        defaultRootTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            setBrowserTabs([]);
            browserTabSequenceRef.current = 0;
            setLauncherOpen(false);
        }
    }["FileWorkspace.useEffect"], [
        projectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const nextBrowserTabs = browserTabsFromState(tabsState.browserTabs);
            setBrowserTabs(nextBrowserTabs);
            browserTabSequenceRef.current = maxBrowserTabSequence(nextBrowserTabs);
        }
    }["FileWorkspace.useEffect"], [
        tabsState.browserTabs
    ]);
    function workspaceTabsState(tabs, active, nextBrowserTabs = browserTabs) {
        const state = {
            tabs,
            active
        };
        if (nextBrowserTabs.length > 0) state.browserTabs = nextBrowserTabs;
        return state;
    }
    // Single entry point for committing tab state: mirror it into the ref so
    // async launcher actions read the freshest tabs, then notify the parent.
    function commitTabsState(next) {
        tabsStateRef.current = next;
        onTabsStateChange(next);
    }
    function setPersistedActive(name) {
        const nextActive = name ?? defaultRootTab;
        setActiveTab(nextActive);
        commitTabsState(workspaceTabsState(persistedTabs, name));
    }
    function openBrowserTab() {
        setUploadError(null);
        const nextIndex = browserTabSequenceRef.current + 1;
        browserTabSequenceRef.current = nextIndex;
        const anchor = lastWorkspaceTabId(orderedWorkspaceTabs) ?? activeTab;
        const nextTab = {
            id: `${BROWSER_TAB_PREFIX}${nextIndex}`,
            insertAfter: anchor,
            label: nextIndex === 1 ? 'Browser' : `Browser ${nextIndex}`
        };
        const nextTabs = [
            ...browserTabs,
            nextTab
        ];
        setBrowserTabs(nextTabs);
        setActiveTab(nextTab.id);
        commitTabsState(workspaceTabsState(persistedTabs, nextTab.id, nextTabs));
    }
    function closeBrowserTab(tabId) {
        const closingIndex = browserTabs.findIndex((tab)=>tab.id === tabId);
        const nextTabs = browserTabs.filter((tab)=>tab.id !== tabId);
        setBrowserTabs(nextTabs);
        const nextActive = activeTab === tabId ? nextTabs[Math.min(Math.max(closingIndex, 0), nextTabs.length - 1)]?.id ?? DESIGN_FILES_TAB : tabsState.active === tabId ? DESIGN_FILES_TAB : tabsState.active;
        if (activeTab === tabId) {
            setActiveTab(nextActive ?? DESIGN_FILES_TAB);
        }
        onTabsStateChange(workspaceTabsState(persistedTabs, nextActive, nextTabs));
    }
    const updateBrowserTabInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileWorkspace.useCallback[updateBrowserTabInfo]": (tabId, info)=>{
            const nextUrl = info.url.trim();
            const nextIconUrl = info.iconUrl?.trim() ?? '';
            let changed = false;
            const nextTabs = browserTabs.map({
                "FileWorkspace.useCallback[updateBrowserTabInfo].nextTabs": (tab)=>{
                    if (tab.id !== tabId) return tab;
                    const nextTitle = nextUrl ? info.title.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFromUrl"])(nextUrl) : tab.label;
                    const normalizedUrl = nextUrl === 'about:blank' ? '' : nextUrl;
                    if (tab.title === nextTitle && (tab.url ?? '') === normalizedUrl && (tab.iconUrl ?? '') === nextIconUrl) {
                        return tab;
                    }
                    changed = true;
                    const nextTab = {
                        ...tab,
                        title: nextTitle,
                        url: normalizedUrl
                    };
                    if (nextIconUrl) {
                        nextTab.iconUrl = nextIconUrl;
                    } else {
                        delete nextTab.iconUrl;
                    }
                    return nextTab;
                }
            }["FileWorkspace.useCallback[updateBrowserTabInfo].nextTabs"]);
            if (!changed) return;
            setBrowserTabs(nextTabs);
            onTabsStateChange(workspaceTabsState(persistedTabs, activeTab, nextTabs));
        }
    }["FileWorkspace.useCallback[updateBrowserTabInfo]"], [
        activeTab,
        browserTabs,
        onTabsStateChange,
        persistedTabs
    ]);
    function activatePending(name) {
        // Pending sketches are not in tabsState.tabs — flip the local
        // activeTab without round-tripping through the parent.
        setActiveTab(name);
    }
    // Promote the active browser tab to the front of the keep-alive LRU (and cap
    // it). Activating a browser tab is the only thing that mounts its webview.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!isBrowserTabId(activeTab)) return;
            setLiveBrowserTabIds({
                "FileWorkspace.useEffect": (prev)=>{
                    if (prev[0] === activeTab) return prev;
                    return [
                        activeTab,
                        ...prev.filter({
                            "FileWorkspace.useEffect": (id)=>id !== activeTab
                        }["FileWorkspace.useEffect"])
                    ].slice(0, BROWSER_KEEPALIVE_CAP);
                }
            }["FileWorkspace.useEffect"]);
        }
    }["FileWorkspace.useEffect"], [
        activeTab
    ]);
    // Drop closed browser tabs from the live set so their webview unmounts.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            setLiveBrowserTabIds({
                "FileWorkspace.useEffect": (prev)=>{
                    const existing = new Set(browserTabs.map({
                        "FileWorkspace.useEffect": (tab)=>tab.id
                    }["FileWorkspace.useEffect"]));
                    const next = prev.filter({
                        "FileWorkspace.useEffect.next": (id)=>existing.has(id)
                    }["FileWorkspace.useEffect.next"]);
                    return next.length === prev.length ? prev : next;
                }
            }["FileWorkspace.useEffect"]);
        }
    }["FileWorkspace.useEffect"], [
        browserTabs
    ]);
    // When the persisted tab list changes and the active tab is gone, fall
    // back to the last remaining tab. Skip transient activeTab values
    // (DESIGN_FILES_TAB, pending sketches) since those aren't in persistedTabs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (activeTab === DESIGN_FILES_TAB || activeTab === DESIGN_SYSTEM_TAB || activeTab === QUESTIONS_TAB) return;
            if (isBrowserTabId(activeTab)) {
                if (!browserTabs.some({
                    "FileWorkspace.useEffect": (tab)=>tab.id === activeTab
                }["FileWorkspace.useEffect"])) {
                    setActiveTab(DESIGN_FILES_TAB);
                }
                return;
            }
            if (sketches[activeTab] && !sketches[activeTab].persisted) return;
            if (!persistedTabs.includes(activeTab)) {
                setPersistedActive(persistedTabs[persistedTabs.length - 1] ?? null);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        persistedTabs,
        activeTab
    ]);
    // External open requests from chat (tool cards, produced-file chips,
    // deep-linked URL, or the parent's auto-open after an agent Write) —
    // add the file to the open-tabs set and focus it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!openRequest) return;
            const name = openRequest.name;
            if (!name) return;
            if (name === DESIGN_FILES_TAB || name === DESIGN_SYSTEM_TAB) {
                const nextActive = name === DESIGN_SYSTEM_TAB && !designSystemProject ? DESIGN_FILES_TAB : name;
                onTabsStateChange(workspaceTabsState(persistedTabs, nextActive));
                setActiveTab(nextActive);
                return;
            }
            if (isBrowserTabId(name) && browserTabs.some({
                "FileWorkspace.useEffect": (tab)=>tab.id === name
            }["FileWorkspace.useEffect"])) {
                onTabsStateChange(workspaceTabsState(persistedTabs, name));
                setActiveTab(name);
                return;
            }
            const isNewTab = !persistedTabs.includes(name);
            const nextBrowserTabs = isNewTab ? reanchorBrowserTabsToCurrentOrder(orderedWorkspaceTabs, browserTabs) : browserTabs;
            if (nextBrowserTabs !== browserTabs) setBrowserTabs(nextBrowserTabs);
            onTabsStateChange(workspaceTabsState(isNewTab ? [
                ...persistedTabs,
                name
            ] : persistedTabs, name, nextBrowserTabs));
            setActiveTab(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        openRequest
    ]);
    // Share request: ensure the target file is open + active so the FileViewer
    // below receives the matching `shareRequest` and opens its Share menu.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!shareRequest) return;
            const name = shareRequest.name;
            if (!name) return;
            commitTabsState(workspaceTabsState(persistedTabs.includes(name) ? persistedTabs : [
                ...persistedTabs,
                name
            ], name));
            setActiveTab(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        shareRequest
    ]);
    // Download request: same as shareRequest, but the FileViewer opens its
    // Download/Export menu. Without this, Download did nothing whenever the target
    // artifact was not already the active tab (it forwards only on a name match).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!downloadRequest) return;
            const name = downloadRequest.name;
            if (!name) return;
            commitTabsState(workspaceTabsState(persistedTabs.includes(name) ? persistedTabs : [
                ...persistedTabs,
                name
            ], name));
            setActiveTab(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        downloadRequest
    ]);
    // Slide-nav request: decide deliverability once, at fire time. Only if the
    // named deck is already an open tab do we mark this nonce deliverable and
    // bring it forward so the matching FileViewer is mounted and flips. We never
    // open a closed file — auto-flipping is a follow-along, not a reason to yank
    // the user into a tab they never opened. Recording the deliverable nonce in
    // state (not a ref) also means a request for a closed deck stays undeliverable
    // forever: opening that file later matches the name but not the nonce, so the
    // stale request can't resurface and jump the preview.
    const [slideNavDeliverableNonce, setSlideNavDeliverableNonce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$slide$2d$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSlideNavDeliverableNow"])(slideNavRequest, persistedTabs)) return;
            setSlideNavDeliverableNonce(slideNavRequest.nonce);
            setActiveTab(slideNavRequest.name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        slideNavRequest
    ]);
    // Focus the Questions tab when the parent bumps the nonce (banner click in
    // chat, or a freshly generated form). The tab is transient — not added to
    // the persisted tab list.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (!focusQuestionsRequest) return;
            setActiveTab(QUESTIONS_TAB);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        focusQuestionsRequest?.nonce
    ]);
    // Submitting from the right-hand panel should close the preview once. The
    // answered form remains available, so a later chat-banner click can reopen
    // the same Questions tab without this effect immediately closing it again.
    const previousQuestionFormSubmittedAnswersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(questionFormSubmittedAnswers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const wasAnswered = previousQuestionFormSubmittedAnswersRef.current !== undefined;
            const isAnswered = questionFormSubmittedAnswers !== undefined;
            previousQuestionFormSubmittedAnswersRef.current = questionFormSubmittedAnswers;
            if (activeTab === QUESTIONS_TAB && !wasAnswered && isAnswered) {
                setActiveTab(defaultRootTab);
            }
        }
    }["FileWorkspace.useEffect"], [
        activeTab,
        defaultRootTab,
        questionFormSubmittedAnswers
    ]);
    // If the Questions tab is active but the form is gone because a new assistant
    // turn has no form, fall back to the default root tab.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (activeTab === QUESTIONS_TAB && !showQuestionsTab) {
                setActiveTab(defaultRootTab);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FileWorkspace.useEffect"], [
        activeTab,
        showQuestionsTab
    ]);
    function openFile(name) {
        setUploadError(null);
        // Read from the ref, not the `persistedTabs` prop closure: this path is
        // reached asynchronously from launcher "create" actions (after the daemon
        // resolves a new terminal/side-chat id), so the closure could be stale and
        // clobber tabs added in the meantime.
        const currentTabs = tabsStateRef.current.tabs;
        const isNewTab = !currentTabs.includes(name);
        const nextBrowserTabs = isNewTab ? reanchorBrowserTabsToCurrentOrder(orderedWorkspaceTabs, browserTabs) : browserTabs;
        const nextTabs = currentTabs.includes(name) ? currentTabs : [
            ...currentTabs,
            name
        ];
        if (nextBrowserTabs !== browserTabs) setBrowserTabs(nextBrowserTabs);
        commitTabsState(workspaceTabsState(nextTabs, name, nextBrowserTabs));
        setActiveTab(name);
    }
    function focusWorkspaceTab(tabId) {
        setUploadError(null);
        if (tabId === DESIGN_SYSTEM_TAB) {
            setPersistedActive(designSystemProject ? DESIGN_SYSTEM_TAB : DESIGN_FILES_TAB);
            return;
        }
        if (tabId === DESIGN_FILES_TAB) {
            setPersistedActive(DESIGN_FILES_TAB);
            return;
        }
        if (isBrowserTabId(tabId)) {
            if (!browserTabs.some((tab)=>tab.id === tabId)) return;
            commitTabsState(workspaceTabsState(persistedTabs, tabId, browserTabs));
            setActiveTab(tabId);
            return;
        }
        openFile(tabId);
    }
    function activateWorkspaceTab(tabId) {
        if (tabId === QUESTIONS_TAB) {
            setUploadError(null);
            setActiveTab(tabId);
            return;
        }
        const sketchEntry = sketches[tabId];
        if (sketchEntry && !sketchEntry.persisted) {
            setUploadError(null);
            activatePending(tabId);
            return;
        }
        focusWorkspaceTab(tabId);
    }
    function activateWorkspaceTabByOffset(offset) {
        if (workspaceTabIds.length === 0) return;
        const activeIndex = workspaceTabIds.indexOf(activeTab);
        const startIndex = activeIndex >= 0 ? activeIndex : 0;
        const targetIndex = (startIndex + offset + workspaceTabIds.length) % workspaceTabIds.length;
        activateWorkspaceTab(workspaceTabIds[targetIndex]);
    }
    function activateWorkspaceTabByIndex(index) {
        if (index < 0 || index >= workspaceTabIds.length) return;
        activateWorkspaceTab(workspaceTabIds[index]);
    }
    function openWorkspaceTabLauncher() {
        setLauncherOpen(true);
        launcherBtnRef.current?.focus();
    }
    function closeActiveWorkspaceTab() {
        if (!workspaceTabIds.includes(activeTab)) return;
        if (activeTab === DESIGN_FILES_TAB || activeTab === DESIGN_SYSTEM_TAB) return;
        if (activeTab === QUESTIONS_TAB) {
            setActiveTab(defaultRootTab);
            return;
        }
        if (isBrowserTabId(activeTab)) {
            closeBrowserTab(activeTab);
            return;
        }
        closeTab(activeTab);
    }
    // Open `openName` (focusing it) and close `closeName` in a single tab-state
    // update. Used by the React module pointer (issue #2744): once the user
    // jumps to the HTML entry that renders a module, the dead-end module tab is
    // dropped. Done atomically because calling openFile() then closeTab() would
    // each read the same stale `persistedTabs` prop and the second would clobber
    // the first.
    function openFileReplacing(openName, closeName) {
        setUploadError(null);
        const withoutClosed = persistedTabs.filter((tabName)=>tabName !== closeName);
        const nextTabs = withoutClosed.includes(openName) ? withoutClosed : [
            ...withoutClosed,
            openName
        ];
        onTabsStateChange(workspaceTabsState(nextTabs, openName));
        setActiveTab(openName);
    }
    function closeTab(name) {
        // Terminal tabs own a daemon PTY that now outlives unmount (so tab switches
        // reattach cheaply). An explicit Close is the one place we terminate it —
        // kill the LIVE session (which may differ from the tab's original id after
        // a Restart), falling back to the tab id when the surface never reported.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"])(name)) {
            const originalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalIdFromTabId"])(name);
            const liveId = terminalLiveSessionsRef.current.get(originalId) ?? originalId;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["killTerminal"])(projectId, liveId, {
                keepalive: true
            });
            terminalLiveSessionsRef.current.delete(originalId);
        }
        const sketchEntry = sketches[name];
        const isPending = sketchEntry && !sketchEntry.persisted;
        const hasUnsavedStrokes = sketchEntry && (sketchEntry.dirty || !sketchEntry.persisted);
        if (hasUnsavedStrokes && !confirm(t('sketch.closeConfirm'))) return;
        if (isPending) {
            setSketches((curr)=>{
                const next = {
                    ...curr
                };
                delete next[name];
                return next;
            });
            if (activeTab === name) {
                setPersistedActive(persistedTabs[persistedTabs.length - 1] ?? null);
            }
            return;
        }
        const nextTabs = persistedTabs.filter((n)=>n !== name);
        const nextActive = tabsState.active === name ? nextTabs[nextTabs.length - 1] ?? null : tabsState.active;
        onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
        setActiveTab(nextActive ?? DESIGN_FILES_TAB);
        setSketches((curr)=>{
            const next = {
                ...curr
            };
            const entry = next[name];
            if (entry && !entry.persisted) delete next[name];
            return next;
        });
    }
    function reorderPersistedTab(draggedName, targetName, edge) {
        if (draggedName === targetName) return;
        if (!persistedTabs.includes(draggedName)) return;
        if (!persistedTabs.includes(targetName)) return;
        const nextTabs = persistedTabs.filter((name)=>name !== draggedName);
        const targetIndex = nextTabs.indexOf(targetName);
        if (targetIndex === -1) return;
        nextTabs.splice(edge === 'after' ? targetIndex + 1 : targetIndex, 0, draggedName);
        if (arraysEqual(nextTabs, persistedTabs)) return;
        onTabsStateChange(workspaceTabsState(nextTabs, tabsState.active));
    }
    function clearTabDragState() {
        draggedTabNameRef.current = null;
        setDraggedTabName(null);
        setDragOverTab(null);
    }
    async function handleFilePicked(ev) {
        const picked = Array.from(ev.target.files ?? []);
        ev.target.value = '';
        await uploadFiles(picked);
    }
    async function uploadFiles(picked) {
        if (picked.length === 0) return;
        setUploadError(null);
        // Cohort math is shared across all three upload surfaces; see
        // `analytics/upload-tracking.ts` for the per-file → batch reduction.
        const cohort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveUploadCohort"])(picked);
        let result;
        try {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(projectId, picked, uploadDir);
        } catch (err) {
            const detail = err instanceof Error ? err.message : String(err);
            setUploadError(`Upload failed for ${picked.length} file(s) (${detail}).`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                page_name: 'file_manager',
                area: 'file_manager',
                project_id: projectId,
                ...cohort,
                result: 'failed',
                error_code: detail
            });
            return;
        }
        if (result.uploaded.length > 0) {
            await onRefreshFiles();
            const lastUploaded = result.uploaded[result.uploaded.length - 1];
            if (lastUploaded?.path) openFile(lastUploaded.path);
        }
        if (result.failed.length > 0) {
            const failedCount = result.failed.length;
            const uploadedCount = result.uploaded.length;
            const detail = result.error ? ` (${result.error})` : '';
            setUploadError(uploadedCount > 0 ? `Uploaded ${uploadedCount} file(s), but ${failedCount} failed${detail}.` : `Upload failed for ${failedCount} file(s)${detail}.`);
            console.warn('Project upload had failures', result.failed);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                page_name: 'file_manager',
                area: 'file_manager',
                project_id: projectId,
                ...cohort,
                result: 'failed',
                ...result.error ? {
                    error_code: result.error
                } : {}
            });
        } else if (result.uploaded.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                page_name: 'file_manager',
                area: 'file_manager',
                project_id: projectId,
                ...cohort,
                result: 'success'
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const hasFiles = {
                "FileWorkspace.useEffect.hasFiles": (e)=>Array.from(e.dataTransfer?.types ?? []).includes('Files')
            }["FileWorkspace.useEffect.hasFiles"];
            const isAllowedDropTarget = {
                "FileWorkspace.useEffect.isAllowedDropTarget": (target)=>{
                    if (!(target instanceof Element)) return false;
                    return Boolean(target.closest('.df-panel, .composer'));
                }
            }["FileWorkspace.useEffect.isAllowedDropTarget"];
            const onDragOver = {
                "FileWorkspace.useEffect.onDragOver": (e)=>{
                    if (!hasFiles(e) || isAllowedDropTarget(e.target)) return;
                    e.preventDefault();
                    if (e.dataTransfer) e.dataTransfer.dropEffect = 'none';
                }
            }["FileWorkspace.useEffect.onDragOver"];
            const onDrop = {
                "FileWorkspace.useEffect.onDrop": (e)=>{
                    if (!hasFiles(e) || isAllowedDropTarget(e.target)) return;
                    e.preventDefault();
                }
            }["FileWorkspace.useEffect.onDrop"];
            window.addEventListener('dragover', onDragOver);
            window.addEventListener('drop', onDrop);
            return ({
                "FileWorkspace.useEffect": ()=>{
                    window.removeEventListener('dragover', onDragOver);
                    window.removeEventListener('drop', onDrop);
                }
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const tabBar = tabsBarRef.current;
            if (!tabBar) return;
            const onWheel = {
                "FileWorkspace.useEffect.onWheel": (event)=>{
                    scrollWorkspaceTabsWithWheel(tabBar, event);
                }
            }["FileWorkspace.useEffect.onWheel"];
            tabBar.addEventListener('wheel', onWheel, {
                passive: false
            });
            return ({
                "FileWorkspace.useEffect": ()=>tabBar.removeEventListener('wheel', onWheel)
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], []);
    // Browser-style tab bar: when the active tab changes (open from a chat
    // file chip, switch via Cmd+P, etc.), scroll it into view so the user
    // can always see what they have selected even when the strip overflows.
    // The Design Files entry is already sticky-pinned, so we only scroll
    // for real workspace tabs. Issue #775.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (activeTab === DESIGN_FILES_TAB || activeTab === DESIGN_SYSTEM_TAB || activeTab === QUESTIONS_TAB) return;
            const tabBar = tabsBarRef.current;
            if (!tabBar) return;
            const el = tabBar.querySelector('.ws-tab.active');
            if (!el) return;
            // The Design Files tab is sticky-pinned to the scrollport's left
            // edge (index.css:.ws-tab.design-files-tab), so a naive scrollIntoView
            // with inline: 'nearest' would slide a leftward-jumped active tab
            // flush with that edge and leave it hidden underneath the sticky
            // panel. Compute scrollLeft manually instead, treating the sticky
            // tab's right edge as the effective visible-left boundary.
            const tabRect = el.getBoundingClientRect();
            const barRect = tabBar.getBoundingClientRect();
            const stickyEl = tabBar.querySelector('.ws-tab.design-files-tab');
            const stickyWidth = stickyEl ? stickyEl.getBoundingClientRect().width : 0;
            const visibleLeft = barRect.left + stickyWidth;
            const visibleRight = barRect.right;
            if (tabRect.left < visibleLeft) {
                tabBar.scrollLeft += tabRect.left - visibleLeft;
            } else if (tabRect.right > visibleRight) {
                tabBar.scrollLeft += tabRect.right - visibleRight;
            }
        }
    }["FileWorkspace.useEffect"], [
        activeTab
    ]);
    // Browser-style shortcuts for the high-frequency Design Files workspace
    // tabs. Capture phase prevents the host browser/Electron shell from opening
    // or closing its own top-level tab before the workspace handles the command.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const onKeyDown = {
                "FileWorkspace.useEffect.onKeyDown": (e)=>{
                    if (e.defaultPrevented || e.isComposing) return;
                    const key = e.key;
                    const lowerKey = key.toLowerCase();
                    const primaryModifier = (e.metaKey || e.ctrlKey) && !e.altKey;
                    const ctrlWithoutPlatformModifiers = e.ctrlKey && !e.metaKey && !e.altKey;
                    const commandOption = e.metaKey && e.altKey && !e.ctrlKey;
                    if (primaryModifier && !e.shiftKey && lowerKey === 't') {
                        consumeFileWorkspaceTabShortcut(e);
                        openWorkspaceTabLauncher();
                        return;
                    }
                    if (primaryModifier && !e.shiftKey && lowerKey === 'w') {
                        consumeFileWorkspaceTabShortcut(e);
                        closeActiveWorkspaceTab();
                        return;
                    }
                    if (ctrlWithoutPlatformModifiers && key === 'Tab') {
                        consumeFileWorkspaceTabShortcut(e);
                        activateWorkspaceTabByOffset(e.shiftKey ? -1 : 1);
                        return;
                    }
                    if (ctrlWithoutPlatformModifiers && !e.shiftKey && key === 'PageDown' || commandOption && !e.shiftKey && key === 'ArrowRight') {
                        consumeFileWorkspaceTabShortcut(e);
                        activateWorkspaceTabByOffset(1);
                        return;
                    }
                    if (ctrlWithoutPlatformModifiers && !e.shiftKey && key === 'PageUp' || commandOption && !e.shiftKey && key === 'ArrowLeft') {
                        consumeFileWorkspaceTabShortcut(e);
                        activateWorkspaceTabByOffset(-1);
                        return;
                    }
                    if (primaryModifier && !e.shiftKey && /^[1-9]$/u.test(key)) {
                        consumeFileWorkspaceTabShortcut(e);
                        const index = key === '9' ? workspaceTabIds.length - 1 : Number(key) - 1;
                        activateWorkspaceTabByIndex(index);
                    }
                }
            }["FileWorkspace.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown, {
                capture: true
            });
            return ({
                "FileWorkspace.useEffect": ()=>window.removeEventListener('keydown', onKeyDown, {
                        capture: true
                    })
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"]);
    // Cmd+P (mac) / Ctrl+P (win/linux) opens the file palette. Capture phase
    // so we beat the browser's default print dialog. Platform-gated so on
    // macOS we don't steal Ctrl+P from native readline ("previous line") in
    // text fields, and on win/linux we don't steal Cmd+P (rare but possible
    // on remapped keyboards).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const onKeyDown = {
                "FileWorkspace.useEffect.onKeyDown": (e)=>{
                    const primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacPlatform"])() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
                    if (primary && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'p') {
                        if (e.isComposing) return;
                        e.preventDefault();
                        setQuickSwitcherOpen({
                            "FileWorkspace.useEffect.onKeyDown": (open)=>!open
                        }["FileWorkspace.useEffect.onKeyDown"]);
                    } else if (e.key === 'Escape' && quickSwitcherOpen) {
                        // The palette handles Esc itself, but also catch it here for the
                        // case where focus has drifted off the palette input.
                        setQuickSwitcherOpen(false);
                    }
                }
            }["FileWorkspace.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown, {
                capture: true
            });
            return ({
                "FileWorkspace.useEffect": ()=>window.removeEventListener('keydown', onKeyDown, {
                        capture: true
                    })
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], [
        quickSwitcherOpen
    ]);
    async function handleDelete(name) {
        if (!confirm(t('workspace.deleteFileConfirm', {
            name
        }))) return;
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProjectFile"])(projectId, name);
        if (ok) {
            await onRefreshFiles();
            const nextTabs = persistedTabs.filter((n)=>n !== name);
            if (activeTab === name) {
                // User is viewing the file being deleted: fall back to another
                // open tab (or the Design Files panel if none remain).
                const nextActive = nextTabs[nextTabs.length - 1] ?? null;
                onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
                setActiveTab(nextActive ?? DESIGN_FILES_TAB);
            } else {
                // Deletion was triggered from the Design Files panel (or another
                // tab). We preserve `activeTab` because the user is viewing a
                // different context (Design Files or another tab) and shouldn't
                // be navigated away. Only clear the persisted active reference
                // when it points at the deleted file so we don't leave a dangling
                // pointer behind.
                const nextActive = tabsState.active === name ? null : tabsState.active;
                onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
            }
            setSketches((curr)=>{
                const next = {
                    ...curr
                };
                delete next[name];
                return next;
            });
        }
    }
    async function handleDeleteMany(names) {
        if (names.length === 0) return;
        if (!confirm(t('workspace.deleteSelectedFilesConfirm', {
            n: names.length
        }))) return;
        const deleted = [];
        const failed = [];
        for (const name of names){
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProjectFile"])(projectId, name);
            if (ok) deleted.push(name);
            else failed.push(name);
        }
        if (deleted.length > 0) {
            await onRefreshFiles();
            const deletedSet = new Set(deleted);
            const nextTabs = persistedTabs.filter((n)=>!deletedSet.has(n));
            if (activeTab && deletedSet.has(activeTab)) {
                const nextActive = nextTabs[nextTabs.length - 1] ?? null;
                onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
                setActiveTab(nextActive ?? DESIGN_FILES_TAB);
            } else {
                const nextActive = tabsState.active && deletedSet.has(tabsState.active) ? null : tabsState.active;
                onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
            }
            setSketches((curr)=>{
                const next = {
                    ...curr
                };
                for (const name of deleted)delete next[name];
                return next;
            });
        }
        if (failed.length > 0) {
            alert(t('workspace.deleteSelectedFilesPartial', {
                n: failed.length
            }));
        }
    }
    async function handleRename(oldName, nextName) {
        const hasPendingSketchConflict = Object.entries(sketches).some(([name, sketch])=>!sketch.persisted && sameFileName(name, nextName));
        if (nextName !== oldName && hasPendingSketchConflict) {
            throw new Error(`A pending sketch named "${nextName}" is already open. Save or close it before renaming.`);
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameProjectFile"])(projectId, oldName, nextName);
        const renamed = result.file;
        await onRefreshFiles();
        await refreshProjectFolders();
        const nextTabs = persistedTabs.map((name)=>name === oldName ? renamed.name : name);
        const nextActive = tabsState.active === oldName ? renamed.name : tabsState.active;
        onTabsStateChange(workspaceTabsState(nextTabs, nextActive));
        if (activeTab === oldName) setActiveTab(renamed.name);
        setSketches((curr)=>{
            const entry = curr[oldName];
            if (!entry) return curr;
            const next = {
                ...curr
            };
            delete next[oldName];
            next[renamed.name] = entry;
            return next;
        });
        return renamed;
    }
    function startNewSketch() {
        const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const base = `sketch-${stamp}.sketch.json`;
        // Create under the folder currently being viewed, if any. The slash-joined
        // name flows through as the sketch's tab id and save path; the daemon's
        // sanitizePath turns it into a real subdirectory on save.
        const name = uploadDir ? `${uploadDir}/${base}` : base;
        setSketches((curr)=>({
                ...curr,
                [name]: {
                    version: 1,
                    rawItems: [],
                    discardRawItemsOnSave: false,
                    items: [],
                    dirty: false,
                    persisted: false,
                    loaded: true,
                    saving: false
                }
            }));
        activatePending(name);
    }
    // When the active tab is a sketch we don't have items for yet, load from
    // disk. Pending sketches start with loaded=true and skip this path.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            if (activeTab === DESIGN_FILES_TAB) return;
            if (!isSketchName(activeTab)) return;
            if (sketches[activeTab]?.loaded) return;
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, activeTab).then({
                "FileWorkspace.useEffect": (text)=>{
                    if (cancelled) return;
                    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sketch$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSketchWorkspaceDocument"])(text);
                    setSketches({
                        "FileWorkspace.useEffect": (curr)=>({
                                ...curr,
                                [activeTab]: {
                                    version: doc.version,
                                    rawItems: doc.rawItems,
                                    discardRawItemsOnSave: false,
                                    items: doc.items,
                                    dirty: false,
                                    persisted: true,
                                    loaded: true,
                                    saving: false
                                }
                            })
                    }["FileWorkspace.useEffect"]);
                }
            }["FileWorkspace.useEffect"]);
            return ({
                "FileWorkspace.useEffect": ()=>{
                    cancelled = true;
                }
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], [
        activeTab,
        projectId,
        sketches
    ]);
    function setSketchItems(name, items) {
        setSketches((curr)=>({
                ...curr,
                [name]: {
                    ...curr[name] ?? {
                        version: 1,
                        rawItems: [],
                        discardRawItemsOnSave: false,
                        persisted: false,
                        loaded: true,
                        saving: false
                    },
                    items,
                    dirty: true
                }
            }));
    }
    function clearSketch(name) {
        setSketches((curr)=>({
                ...curr,
                [name]: {
                    ...curr[name] ?? {
                        version: 1,
                        rawItems: [],
                        discardRawItemsOnSave: false,
                        persisted: false,
                        loaded: true,
                        saving: false
                    },
                    items: [],
                    dirty: true,
                    discardRawItemsOnSave: true
                }
            }));
    }
    async function saveSketch(name) {
        const entry = sketches[name];
        if (!entry) return;
        setSketches((curr)=>({
                ...curr,
                [name]: {
                    ...curr[name],
                    saving: true
                }
            }));
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sketch$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSketchDocument"])(entry.version, entry.discardRawItemsOnSave ? [] : entry.rawItems, entry.items);
        const startedAt = Date.now();
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(projectId, name, JSON.stringify(doc, null, 2));
        const elapsed = Date.now() - startedAt;
        // Ensures saving UI shows so the button does not flicker
        if (elapsed < 500) await new Promise((resolve)=>setTimeout(resolve, 500 - elapsed));
        if (file) {
            setSketches((curr)=>({
                    ...curr,
                    [name]: {
                        ...curr[name],
                        version: doc.version,
                        rawItems: doc.items.slice(),
                        discardRawItemsOnSave: false,
                        dirty: false,
                        persisted: true,
                        saving: false
                    }
                }));
            // Promote the previously-pending sketch into the persisted tab list.
            onTabsStateChange(workspaceTabsState(persistedTabs.includes(name) ? persistedTabs : [
                ...persistedTabs,
                name
            ], name));
            setActiveTab(name);
            await onRefreshFiles();
            return true;
        } else {
            setSketches((curr)=>({
                    ...curr,
                    [name]: {
                        ...curr[name],
                        saving: false
                    }
                }));
            return false;
        }
    }
    const activeFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[activeFile]": ()=>{
            if (activeTab === DESIGN_FILES_TAB || activeTab === DESIGN_SYSTEM_TAB || activeTab === QUESTIONS_TAB || isBrowserTabId(activeTab)) return null;
            const onDisk = visibleFiles.find({
                "FileWorkspace.useMemo[activeFile].onDisk": (f)=>f.name === activeTab
            }["FileWorkspace.useMemo[activeFile].onDisk"]);
            if (onDisk) return onDisk;
            if (isSketchName(activeTab) && sketches[activeTab]) {
                return {
                    name: activeTab,
                    size: 0,
                    mtime: Date.now(),
                    kind: 'sketch',
                    mime: 'application/json'
                };
            }
            return null;
        }
    }["FileWorkspace.useMemo[activeFile]"], [
        activeTab,
        visibleFiles,
        sketches
    ]);
    const activeLiveArtifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[activeLiveArtifact]": ()=>{
            if (activeTab === DESIGN_FILES_TAB || activeTab === DESIGN_SYSTEM_TAB || activeTab === QUESTIONS_TAB || isBrowserTabId(activeTab)) return null;
            return liveArtifactEntries.find({
                "FileWorkspace.useMemo[activeLiveArtifact]": (entry)=>entry.tabId === activeTab
            }["FileWorkspace.useMemo[activeLiveArtifact]"]) ?? null;
        }
    }["FileWorkspace.useMemo[activeLiveArtifact]"], [
        activeTab,
        liveArtifactEntries
    ]);
    const activeWorkspaceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[activeWorkspaceContext]": ()=>{
            if (activeTab === DESIGN_SYSTEM_TAB && designSystemProject) {
                return {
                    id: 'workspace:design-system',
                    kind: 'design-system',
                    label: 'Design System',
                    tabId: activeTab
                };
            }
            if (activeTab === DESIGN_FILES_TAB) {
                // Nothing to reference yet — don't auto-stage an empty "Design files" chip.
                if (designFilesTabIsEmpty) return null;
                const trimmedDir = uploadDir.trim();
                const label = trimmedDir.split('/').filter(Boolean).pop() || t('workspace.designFiles');
                return {
                    id: trimmedDir ? `folder:${trimmedDir}` : 'workspace:design-files',
                    kind: trimmedDir ? 'folder' : 'design-files',
                    label,
                    tabId: activeTab,
                    ...trimmedDir ? {
                        path: trimmedDir
                    } : {},
                    ...resolvedDir ? {
                        absolutePath: joinDisplayPath(resolvedDir, trimmedDir)
                    } : {}
                };
            }
            if (isBrowserTabId(activeTab)) {
                const tab = browserTabs.find({
                    "FileWorkspace.useMemo[activeWorkspaceContext].tab": (candidate)=>candidate.id === activeTab
                }["FileWorkspace.useMemo[activeWorkspaceContext].tab"]);
                if (!tab) return null;
                const url = tab.url?.trim() ?? '';
                const label = url ? tab.title?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFromUrl"])(url) : tab.label;
                return {
                    id: `browser:${tab.id}`,
                    kind: 'browser',
                    label,
                    tabId: tab.id,
                    ...tab.title ? {
                        title: tab.title
                    } : {},
                    ...url ? {
                        url
                    } : {}
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"])(activeTab)) {
                const terminalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalIdFromTabId"])(activeTab);
                return {
                    id: `terminal:${terminalId}`,
                    kind: 'terminal',
                    label: t('workspace.newTerminal'),
                    tabId: activeTab
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSideChatTabId"])(activeTab)) {
                const conversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationIdFromSideChatTabId"])(activeTab);
                const conversation = conversations.find({
                    "FileWorkspace.useMemo[activeWorkspaceContext].conversation": (item)=>item.id === conversationId
                }["FileWorkspace.useMemo[activeWorkspaceContext].conversation"]);
                return {
                    id: `side-chat:${conversationId}`,
                    kind: 'side-chat',
                    label: conversation?.title?.trim() || t('workspace.sideChatDefaultTitle'),
                    tabId: activeTab
                };
            }
            if (activeLiveArtifact) {
                return {
                    id: `live-artifact:${activeLiveArtifact.artifactId}`,
                    kind: 'live-artifact',
                    label: activeLiveArtifact.title,
                    tabId: activeLiveArtifact.tabId,
                    path: activeLiveArtifact.slug
                };
            }
            if (activeFile) {
                const filePath = activeFile.path ?? activeFile.name;
                return {
                    id: `file:${filePath}`,
                    kind: 'file',
                    label: filePath.split('/').filter(Boolean).pop() || filePath,
                    tabId: activeTab,
                    path: filePath,
                    ...resolvedDir ? {
                        absolutePath: joinDisplayPath(resolvedDir, filePath)
                    } : {}
                };
            }
            return null;
        }
    }["FileWorkspace.useMemo[activeWorkspaceContext]"], [
        activeFile,
        activeLiveArtifact,
        activeTab,
        browserTabs,
        conversations,
        designFilesTabIsEmpty,
        designSystemProject,
        resolvedDir,
        t,
        uploadDir
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            onActiveContextChange?.(activeWorkspaceContext);
        }
    }["FileWorkspace.useEffect"], [
        activeWorkspaceContext,
        onActiveContextChange
    ]);
    // Tabs rendered are persisted tabs plus any pending (un-saved) sketches.
    const tabNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[tabNames]": ()=>{
            const seen = new Set(persistedTabs);
            const extras = [];
            for (const name of Object.keys(sketches)){
                if (!sketches[name]?.persisted && !seen.has(name)) {
                    extras.push(name);
                    seen.add(name);
                }
            }
            return [
                ...persistedTabs,
                ...extras
            ];
        }
    }["FileWorkspace.useMemo[tabNames]"], [
        persistedTabs,
        sketches
    ]);
    const orderedWorkspaceTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[orderedWorkspaceTabs]": ()=>orderWorkspaceTabs(tabNames, browserTabs)
    }["FileWorkspace.useMemo[orderedWorkspaceTabs]"], [
        browserTabs,
        tabNames
    ]);
    const workspaceTabIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[workspaceTabIds]": ()=>{
            const ids = [];
            if (designSystemProject) ids.push(DESIGN_SYSTEM_TAB);
            ids.push(DESIGN_FILES_TAB);
            if (showQuestionsTab) ids.push(QUESTIONS_TAB);
            for (const entry of orderedWorkspaceTabs){
                ids.push(entry.kind === 'browser' ? entry.browserTab.id : entry.name);
            }
            return ids;
        }
    }["FileWorkspace.useMemo[workspaceTabIds]"], [
        designSystemProject,
        orderedWorkspaceTabs,
        showQuestionsTab
    ]);
    const workspaceContexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileWorkspace.useMemo[workspaceContexts]": ()=>{
            const out = [];
            const seen = new Set();
            const push = {
                "FileWorkspace.useMemo[workspaceContexts].push": (item)=>{
                    if (!item) return;
                    const key = `${item.kind}:${item.id}`;
                    if (seen.has(key)) return;
                    seen.add(key);
                    out.push(item);
                }
            }["FileWorkspace.useMemo[workspaceContexts].push"];
            if (designSystemProject) {
                push({
                    id: 'workspace:design-system',
                    kind: 'design-system',
                    label: 'Design System',
                    tabId: DESIGN_SYSTEM_TAB
                });
            }
            const trimmedDir = uploadDir.trim();
            const designFilesLabel = trimmedDir.split('/').filter(Boolean).pop() || t('workspace.designFiles');
            push({
                id: trimmedDir ? `folder:${trimmedDir}` : 'workspace:design-files',
                kind: trimmedDir ? 'folder' : 'design-files',
                label: designFilesLabel,
                tabId: DESIGN_FILES_TAB,
                ...trimmedDir ? {
                    path: trimmedDir
                } : {},
                ...resolvedDir ? {
                    absolutePath: joinDisplayPath(resolvedDir, trimmedDir)
                } : {}
            });
            const filesByName = new Map(visibleFiles.map({
                "FileWorkspace.useMemo[workspaceContexts]": (file)=>[
                        file.name,
                        file
                    ]
            }["FileWorkspace.useMemo[workspaceContexts]"]));
            const liveByTabId = new Map(liveArtifactEntries.map({
                "FileWorkspace.useMemo[workspaceContexts]": (entry)=>[
                        entry.tabId,
                        entry
                    ]
            }["FileWorkspace.useMemo[workspaceContexts]"]));
            const terminalTabNames = tabNames.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"]);
            for (const entry of orderedWorkspaceTabs){
                if (entry.kind === 'browser') {
                    const tab = entry.browserTab;
                    const url = tab.url?.trim() ?? '';
                    const label = url ? tab.title?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFromUrl"])(url) : tab.label;
                    push({
                        id: `browser:${tab.id}`,
                        kind: 'browser',
                        label,
                        tabId: tab.id,
                        ...tab.title ? {
                            title: tab.title
                        } : {},
                        ...url ? {
                            url
                        } : {}
                    });
                    continue;
                }
                const name = entry.name;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"])(name)) {
                    const terminalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalIdFromTabId"])(name);
                    const ordinal = terminalTabNames.indexOf(name) + 1;
                    push({
                        id: `terminal:${terminalId}`,
                        kind: 'terminal',
                        label: ordinal > 1 ? `${t('workspace.newTerminal')} ${ordinal}` : t('workspace.newTerminal'),
                        tabId: name
                    });
                    continue;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSideChatTabId"])(name)) {
                    const conversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationIdFromSideChatTabId"])(name);
                    const conversation = conversations.find({
                        "FileWorkspace.useMemo[workspaceContexts].conversation": (item)=>item.id === conversationId
                    }["FileWorkspace.useMemo[workspaceContexts].conversation"]);
                    push({
                        id: `side-chat:${conversationId}`,
                        kind: 'side-chat',
                        label: conversation?.title?.trim() || t('workspace.sideChatDefaultTitle'),
                        tabId: name
                    });
                    continue;
                }
                const liveArtifact = liveByTabId.get(name);
                if (liveArtifact) {
                    push({
                        id: `live-artifact:${liveArtifact.artifactId}`,
                        kind: 'live-artifact',
                        label: liveArtifact.title,
                        tabId: liveArtifact.tabId,
                        path: liveArtifact.slug
                    });
                    continue;
                }
                const file = filesByName.get(name);
                if (file || isSketchName(name) && sketches[name]) {
                    const filePath = file?.path ?? file?.name ?? name;
                    push({
                        id: `file:${filePath}`,
                        kind: 'file',
                        label: filePath.split('/').filter(Boolean).pop() || filePath,
                        tabId: name,
                        path: filePath,
                        ...resolvedDir ? {
                            absolutePath: joinDisplayPath(resolvedDir, filePath)
                        } : {}
                    });
                }
            }
            return out;
        }
    }["FileWorkspace.useMemo[workspaceContexts]"], [
        browserTabs,
        conversations,
        designSystemProject,
        liveArtifactEntries,
        orderedWorkspaceTabs,
        resolvedDir,
        sketches,
        t,
        tabNames,
        uploadDir,
        visibleFiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            onWorkspaceContextsChange?.(workspaceContexts);
        }
    }["FileWorkspace.useEffect"], [
        onWorkspaceContextsChange,
        workspaceContexts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileWorkspace.useEffect": ()=>{
            const tabBar = tabsBarRef.current;
            if (!tabBar) return;
            let frame = 0;
            const measure = {
                "FileWorkspace.useEffect.measure": ()=>{
                    frame = 0;
                    setTabsOverflowing(tabBar.scrollWidth > tabBar.clientWidth + 1);
                }
            }["FileWorkspace.useEffect.measure"];
            const requestMeasure = {
                "FileWorkspace.useEffect.requestMeasure": ()=>{
                    if (frame) window.cancelAnimationFrame(frame);
                    frame = window.requestAnimationFrame(measure);
                }
            }["FileWorkspace.useEffect.requestMeasure"];
            requestMeasure();
            const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(requestMeasure);
            if (resizeObserver) {
                resizeObserver.observe(tabBar);
                Array.from(tabBar.children).forEach({
                    "FileWorkspace.useEffect": (child)=>resizeObserver.observe(child)
                }["FileWorkspace.useEffect"]);
            }
            window.addEventListener('resize', requestMeasure);
            return ({
                "FileWorkspace.useEffect": ()=>{
                    if (frame) window.cancelAnimationFrame(frame);
                    resizeObserver?.disconnect();
                    window.removeEventListener('resize', requestMeasure);
                }
            })["FileWorkspace.useEffect"];
        }
    }["FileWorkspace.useEffect"], [
        browserTabs.length,
        designSystemProject,
        tabNames.length
    ]);
    const isActiveSketch = activeFile?.kind === 'sketch' && isSketchName(activeFile.name);
    const activeSketch = activeFile && isActiveSketch ? sketches[activeFile.name] : null;
    // The "+" launcher's create-new actions come from the registry. `openTab`
    // reuses the same tab-state path as opening a file so a new terminal:<id>
    // tab is focused; `createBrowser` opens an embedded browser tab.
    // Built fresh each render (not memoized): `createBrowser` closes over
    // `openBrowserTab`, which reads the live `browserTabs` state — memoizing it
    // would capture a stale closure and make every "New Browser" click overwrite
    // the same single tab. The terminal action routes through `openFile`
    // (ref-based), so freshness here is cheap and only matters while the launcher
    // is open.
    const launcherContext = {
        projectId,
        openTab: openFile,
        // Browser is owned by this branch's DesignBrowserPanel: spin up a browser
        // tab synchronously (no daemon round-trip) and let the launcher close.
        createBrowser: ()=>openBrowserTab(),
        // Terminal needs only the project id — spawn the PTY here and hand the
        // resulting session id back so the launcher opens a terminal:<id> tab.
        // Surface a toast when the daemon can't start one (e.g. node-pty not
        // compiled) instead of silently no-opping the launcher action.
        createTerminal: async ()=>{
            const term = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTerminal"])(projectId);
            if (!term) {
                setLauncherToast(t('workspace.terminalStartFailed'));
                return null;
            }
            return term.id;
        }
    };
    const launcherActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$tab$2d$launcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLauncherActions"])(launcherContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'workspace',
            designSystemProject ? 'has-design-system-tab' : ''
        ].filter(Boolean).join(' '),
        "data-testid": "file-workspace",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ws-tabs-shell",
                children: [
                    onFocusModeChange && focusMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "icon-only ws-focus-expand od-tooltip",
                        "data-testid": "workspace-focus-toggle",
                        "aria-pressed": focusMode,
                        title: t('workspace.showChat'),
                        "data-tooltip": t('workspace.showChat'),
                        "data-tooltip-placement": "bottom",
                        "aria-label": t('workspace.showChat'),
                        onClick: ()=>onFocusModeChange(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "chevron-right",
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 1803,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 1792,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: tabsBarRef,
                        className: `ws-tabs-bar${tabsOverflowing ? ' is-overflowing' : ''}`,
                        role: "tablist",
                        "aria-label": t('workspace.designFiles'),
                        onWheel: (event)=>{
                            // Translate vertical wheel into horizontal tab scroll so Windows
                            // mouse-wheel users (no horizontal wheel/trackpad) can reach
                            // overflowed tabs. Only act when there's actually horizontal
                            // overflow and the gesture is predominantly vertical.
                            const el = event.currentTarget;
                            if (el.scrollWidth <= el.clientWidth) return;
                            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
                            el.scrollLeft += event.deltaY;
                        },
                        onDragLeave: (event)=>{
                            if (event.currentTarget.contains(event.relatedTarget)) return;
                            setDragOverTab(null);
                        },
                        onDrop: (event)=>{
                            if (event.target !== event.currentTarget) return;
                            clearTabDragState();
                        },
                        children: [
                            designSystemProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `ws-tab design-system-tab ${activeTab === DESIGN_SYSTEM_TAB ? 'active' : ''}`,
                                role: "tab",
                                "aria-selected": activeTab === DESIGN_SYSTEM_TAB,
                                tabIndex: 0,
                                "data-testid": "design-system-project-tab",
                                onClick: ()=>setPersistedActive(DESIGN_SYSTEM_TAB),
                                title: "Design System",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tab-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "blocks",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 1842,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1841,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ws-tab-label",
                                        children: "Design System"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1844,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 1831,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `ws-tab design-files-tab ${activeTab === DESIGN_FILES_TAB ? 'active' : ''}`,
                                role: "tab",
                                "aria-selected": activeTab === DESIGN_FILES_TAB,
                                tabIndex: 0,
                                "data-testid": "design-files-tab",
                                onClick: ()=>setPersistedActive(DESIGN_FILES_TAB),
                                title: t('workspace.designFiles'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tab-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "grid",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 1858,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1857,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ws-tab-label",
                                        children: t('workspace.designFiles')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1860,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 1847,
                                columnNumber: 11
                            }, this),
                            showQuestionsTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `ws-tab questions-tab ${activeTab === QUESTIONS_TAB ? 'active' : ''}`,
                                role: "tab",
                                "aria-selected": activeTab === QUESTIONS_TAB,
                                tabIndex: 0,
                                "data-testid": "questions-tab",
                                onClick: ()=>setActiveTab(QUESTIONS_TAB),
                                title: t('questions.tabLabel'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tab-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "help-circle",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 1874,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1873,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ws-tab-label",
                                        children: t('questions.tabLabel')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1876,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 1863,
                                columnNumber: 13
                            }, this) : null,
                            orderedWorkspaceTabs.map((entry)=>{
                                if (entry.kind === 'browser') {
                                    const browserTab = entry.browserTab;
                                    const browserUrl = browserTab.url?.trim() ?? '';
                                    const browserTitle = browserUrl ? browserTab.title?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFromUrl"])(browserUrl) : browserTab.label;
                                    const browserMeta = browserUrl ? formatBrowserTabUrl(browserUrl) : undefined;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        label: browserTitle,
                                        meta: browserMeta,
                                        title: browserUrl ? `${browserTitle}\n${browserUrl}` : browserTitle,
                                        active: activeTab === browserTab.id,
                                        onActivate: ()=>setPersistedActive(browserTab.id),
                                        onClose: ()=>closeBrowserTab(browserTab.id),
                                        kind: "browser"
                                    }, browserTab.id, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 1888,
                                        columnNumber: 17
                                    }, this);
                                }
                                const name = entry.name;
                                const sketchEntry = sketches[name];
                                const dirtyMark = sketchEntry && (sketchEntry.dirty || !sketchEntry.persisted) ? ' •' : '';
                                const isPending = sketchEntry && !sketchEntry.persisted;
                                const onDisk = visibleFiles.find((f)=>f.name === name);
                                const liveArtifact = liveArtifactEntries.find((entry)=>entry.tabId === name);
                                const kind = liveArtifact ? 'live-artifact' : onDisk?.kind ?? (isSketchName(name) ? 'sketch' : 'text');
                                const isTerminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"])(name);
                                const isSideChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSideChatTabId"])(name);
                                // Terminal and side-chat tabs are not files: give them a friendly
                                // label + glyph instead of the raw `terminal:<id>` / `chat:<id>` id.
                                let label;
                                if (isTerminal) {
                                    // Number multiple terminals so the tabs stay distinguishable.
                                    const ordinal = tabNames.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"]).indexOf(name) + 1;
                                    label = ordinal > 1 ? `${t('workspace.newTerminal')} ${ordinal}` : t('workspace.newTerminal');
                                } else if (isSideChat) {
                                    const conv = conversations.find((c)=>c.id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationIdFromSideChatTabId"])(name));
                                    label = conv?.title?.trim() || t('workspace.sideChatDefaultTitle');
                                } else {
                                    label = `${liveArtifact?.title ?? name}${dirtyMark}`;
                                }
                                const iconNameOverride = isTerminal ? 'terminal' : isSideChat ? 'comment' : undefined;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                    label: label,
                                    iconNameOverride: iconNameOverride,
                                    active: activeTab === name,
                                    onActivate: ()=>isPending ? activatePending(name) : setPersistedActive(name),
                                    onClose: ()=>closeTab(name),
                                    kind: kind,
                                    liveArtifact: liveArtifact,
                                    draggable: persistedTabs.includes(name),
                                    dragging: draggedTabName === name,
                                    dragOverEdge: dragOverTab?.name === name && draggedTabName !== name ? dragOverTab.edge : null,
                                    onDragStart: (event)=>{
                                        event.dataTransfer.effectAllowed = 'move';
                                        event.dataTransfer.setData('text/plain', name);
                                        draggedTabNameRef.current = name;
                                        setDraggedTabName(name);
                                    },
                                    onDragOver: (event)=>{
                                        const currentDraggedName = draggedTabNameRef.current ?? draggedTabName;
                                        if (!currentDraggedName || currentDraggedName === name) return;
                                        if (!persistedTabs.includes(currentDraggedName)) return;
                                        event.preventDefault();
                                        event.dataTransfer.dropEffect = 'move';
                                        const edge = tabDropEdgeFromEvent(event);
                                        setDragOverTab((current)=>current?.name === name && current.edge === edge ? current : {
                                                name,
                                                edge
                                            });
                                    },
                                    onDragLeave: ()=>{
                                        setDragOverTab((current)=>current?.name === name ? null : current);
                                    },
                                    onDrop: (event)=>{
                                        event.preventDefault();
                                        const draggedName = draggedTabNameRef.current || draggedTabName;
                                        if (draggedName) {
                                            reorderPersistedTab(draggedName, name, tabDropEdgeFromEvent(event));
                                        }
                                        clearTabDragState();
                                    },
                                    onDragEnd: clearTabDragState
                                }, name, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 1934,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 1806,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ws-add-tab",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: launcherBtnRef,
                            type: "button",
                            className: "icon-only ws-tab-add od-tooltip",
                            "data-testid": "workspace-add-tab",
                            "aria-haspopup": "dialog",
                            "aria-expanded": launcherOpen,
                            title: t('workspace.newTab'),
                            "data-tooltip": t('workspace.newTab'),
                            "data-tooltip-placement": "bottom",
                            "aria-label": t('workspace.newTab'),
                            onClick: ()=>setLauncherOpen((v)=>!v),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "plus",
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2001,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 1988,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 1987,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ws-tabs-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AppChromeHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CHROME_FILE_ACTIONS_ID"],
                                className: "ws-tabs-file-actions",
                                "data-app-chrome-file-actions": "true"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2007,
                                columnNumber: 11
                            }, this),
                            headerActions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ws-tabs-project-actions",
                                children: headerActions
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2013,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2006,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 1790,
                columnNumber: 7
            }, this),
            launcherOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLauncherMenu"], {
                anchor: launcherBtnRef.current,
                files: visibleFiles,
                workspaceContexts: workspaceContexts,
                openTabNames: tabNames,
                actions: launcherActions,
                launcherContext: launcherContext,
                onOpenFile: openFile,
                onOpenTab: focusWorkspaceTab,
                onTrack: (input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTabLauncherClick"])(analytics.track, {
                        page_name: 'file_manager',
                        area: 'tab_launcher',
                        ...projectId ? {
                            project_id: projectId
                        } : {},
                        ...input
                    }),
                onClose: ()=>setLauncherOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2018,
                columnNumber: 9
            }, this) : null,
            launcherToast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: launcherToast,
                role: "alert",
                onDismiss: ()=>setLauncherToast(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2039,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ws-body",
                children: [
                    uploadError && activeTab !== DESIGN_FILES_TAB ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "df-upload-banner",
                        "data-testid": "upload-error-banner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: uploadError
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2055,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "data-testid": "upload-error-dismiss",
                                onClick: ()=>setUploadError(null),
                                children: "Dismiss"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2056,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2054,
                        columnNumber: 11
                    }, this) : null,
                    browserTabs.filter((browserTab)=>liveBrowserTabIds.includes(browserTab.id)).map((browserTab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `ws-browser-panel ${activeTab === browserTab.id ? 'active' : ''}`,
                            "aria-hidden": activeTab === browserTab.id ? undefined : true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignBrowserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignBrowserPanel"], {
                                projectId: projectId,
                                resolvedDir: resolvedDir,
                                initialIconUrl: browserTab.iconUrl,
                                initialTitle: browserTab.title,
                                initialUrl: browserTab.url,
                                sendDisabled: Boolean(streaming),
                                previewComments: previewComments,
                                onSavePreviewComment: onSavePreviewComment,
                                onRemovePreviewComment: onRemovePreviewComment,
                                onSendBoardCommentAttachments: onSendBoardCommentAttachments,
                                onRequestBrowserUsePrompt: onRequestBrowserUsePrompt,
                                onRefreshFiles: onRefreshFiles,
                                onOpenFile: openFile,
                                onPageInfoChange: (info)=>updateBrowserTabInfo(browserTab.id, info)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2071,
                                columnNumber: 13
                            }, this)
                        }, `${projectId}:${browserTab.id}`, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2066,
                            columnNumber: 11
                        }, this)),
                    activeTab === QUESTIONS_TAB ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionsPanel"], {
                        projectId: projectId,
                        formKey: questionFormKey,
                        form: questionForm ?? questionFormPreview,
                        interactive: questionFormInteractive,
                        submitDisabled: questionFormSubmitDisabled,
                        submittedAnswers: questionFormSubmittedAnswers,
                        generating: questionsGenerating,
                        onSubmit: (text)=>onSubmitQuestionForm?.(text)
                    }, questionFormKey ?? undefined, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2090,
                        columnNumber: 11
                    }, this) : activeTab === DESIGN_SYSTEM_TAB && designSystemProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemProjectPanel, {
                        projectId: projectId,
                        system: designSystemProject,
                        files: visibleFiles,
                        streaming: Boolean(streaming),
                        activityEvents: designSystemActivityEvents,
                        onOpenFile: openFile,
                        onUploadAssets: ()=>fileInputRef.current?.click(),
                        defaultDesignSystemId: defaultDesignSystemId,
                        onSetDefaultDesignSystem: onSetDefaultDesignSystem,
                        onDesignSystemsRefresh: onDesignSystemsRefresh,
                        onNeedsWork: onDesignSystemNeedsWork,
                        designSystemReview: designSystemReview,
                        onReviewDecision: onDesignSystemReviewDecision,
                        onUseDesignSystem: onUseDesignSystem,
                        onConnectRepo: onConnectRepo,
                        githubConnected: githubConnected
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2102,
                        columnNumber: 11
                    }, this) : activeTab === DESIGN_FILES_TAB ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignFilesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignFilesPanel"], {
                        projectId: projectId,
                        rootDirName: rootDirName,
                        reloading: reloading,
                        running: Boolean(streaming),
                        files: visibleFiles,
                        folders: projectFolders,
                        liveArtifacts: liveArtifactEntries,
                        onRefreshFiles: onRefreshFiles,
                        onCurrentDirChange: setUploadDir,
                        navState: designFilesNavRef.current,
                        onNavStateChange: onDesignFilesNavStateChange,
                        onOpenFile: openFile,
                        onOpenLiveArtifact: (tabId)=>openFile(tabId),
                        onRenameFile: handleRename,
                        onDeleteFile: (name)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                page_name: 'file_manager',
                                area: 'file_manager',
                                element: 'delete'
                            });
                            void handleDelete(name);
                        },
                        onDeleteFiles: (names)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                page_name: 'file_manager',
                                area: 'file_manager',
                                element: 'delete'
                            });
                            return handleDeleteMany(names);
                        },
                        onUpload: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                page_name: 'file_manager',
                                area: 'file_manager',
                                element: 'upload'
                            });
                            fileInputRef.current?.click();
                        },
                        onUploadFiles: (picked)=>void uploadFiles(picked),
                        onPaste: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                page_name: 'file_manager',
                                area: 'file_manager',
                                element: 'paste'
                            });
                            setShowPasteDialog(true);
                        },
                        onNewSketch: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileManagerClick"])(analytics.track, {
                                page_name: 'file_manager',
                                area: 'file_manager',
                                element: 'new_sketch'
                            });
                            startNewSketch();
                        },
                        uploadError: uploadError,
                        onClearUploadError: ()=>setUploadError(null),
                        preferredPreviewFile: preferredPreviewFile,
                        autoPreviewDesignArtifacts: autoPreviewDesignArtifacts,
                        onPluginFolderAgentAction: onPluginFolderAgentAction,
                        activePluginActionPaths: activePluginActionPaths,
                        hiddenPluginActionPaths: hiddenPluginActionPaths
                    }, projectId, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2121,
                        columnNumber: 11
                    }, this) : isBrowserTabId(activeTab) ? null : isActiveSketch && activeSketch && activeFile ? activeSketch.loaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchEditor"], {
                        fileName: activeFile.name,
                        items: activeSketch.items,
                        hasPreservedRawItems: !activeSketch.discardRawItemsOnSave && activeSketch.rawItems.length > activeSketch.items.length,
                        onItemsChange: (items)=>setSketchItems(activeFile.name, items),
                        onClear: ()=>clearSketch(activeFile.name),
                        onSave: ()=>saveSketch(activeFile.name),
                        saving: activeSketch.saving,
                        dirty: activeSketch.dirty || !activeSketch.persisted,
                        onCancel: ()=>closeTab(activeFile.name)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2190,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "viewer-empty",
                        children: t('workspace.loadingSketch')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2204,
                        columnNumber: 13
                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSideChatTabId"])(activeTab) && chatConfig && chatAgentsById ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SideChatTab"], {
                        projectId: projectId,
                        conversationId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationIdFromSideChatTabId"])(activeTab),
                        config: chatConfig,
                        agentsById: chatAgentsById,
                        locale: chatLocale ?? 'en',
                        projectFiles: visibleFiles,
                        conversations: conversations,
                        onSelectConversation: onSelectConversation ?? (()=>{}),
                        onDeleteConversation: onDeleteConversation ?? (()=>{}),
                        onRenameConversation: onRenameConversation,
                        onSessionModeChange: onConversationSessionModeChange,
                        onNewConversation: onNewConversation,
                        activeConversationChat: activeConversationChat,
                        onRequestOpenFile: openFile
                    }, `${projectId}:${activeTab}`, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2207,
                        columnNumber: 11
                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTerminalTabId"])(activeTab) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalViewer"], {
                        projectId: projectId,
                        terminalId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalIdFromTabId"])(activeTab),
                        onClose: ()=>closeTab(activeTab),
                        onSessionIdChange: handleTerminalSessionChange
                    }, activeTab, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2225,
                        columnNumber: 11
                    }, this) : activeLiveArtifact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveArtifactViewer"], {
                        projectId: projectId,
                        liveArtifact: activeLiveArtifact,
                        liveArtifactEvents: liveArtifactEvents,
                        onRefreshArtifacts: onRefreshFiles
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2233,
                        columnNumber: 11
                    }, this) : activeFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileViewer"], {
                        projectId: projectId,
                        projectKind: projectKind,
                        file: activeFile,
                        filesRefreshKey: filesRefreshKey,
                        isDeck: isDeck,
                        onExportAsPptx: onExportAsPptx,
                        streaming: streaming,
                        commentQueueOnSend: commentQueueOnSend,
                        commentSendDisabled: commentSendDisabled,
                        previewComments: previewComments.filter((comment)=>comment.filePath === activeFile.name),
                        onSavePreviewComment: onSavePreviewComment,
                        onRemovePreviewComment: onRemovePreviewComment,
                        onSendBoardCommentAttachments: onSendBoardCommentAttachments,
                        onFileSaved: onRefreshFiles,
                        onOpenFileReplacing: openFileReplacing,
                        commentPortalId: commentPortalId,
                        onCommentModeChange: onCommentModeChange,
                        shareRequest: shareRequest && shareRequest.name === activeFile.name ? {
                            nonce: shareRequest.nonce
                        } : null,
                        downloadRequest: downloadRequest && downloadRequest.name === activeFile.name ? {
                            nonce: downloadRequest.nonce
                        } : null,
                        slideNavRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$slide$2d$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deliverableSlideNavForActiveFile"])(slideNavRequest, activeFile.name, slideNavDeliverableNonce)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2240,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "viewer-empty",
                        children: [
                            t('workspace.openFromDesignFiles'),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "link",
                                href: "#",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    setActiveTab(DESIGN_FILES_TAB);
                                },
                                children: t('workspace.designFilesLink')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2277,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                "data-testid": "design-files-upload-input",
                style: {
                    display: 'none'
                },
                onChange: handleFilePicked
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPasteDialog ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PasteTextDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasteTextDialog"], {
                    onClose: ()=>setShowPasteDialog(false),
                    onSave: async (name, content)=>{
                        setShowPasteDialog(false);
                        // Save under the folder currently being viewed, if any.
                        const target = uploadDir ? `${uploadDir}/${name}` : name;
                        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(projectId, target, content);
                        if (file) {
                            await onRefreshFiles();
                            openFile(file.name);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2301,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: quickSwitcherOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuickSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickSwitcher"], {
                    projectId: projectId,
                    files: visibleFiles,
                    workspaceContexts: workspaceContexts,
                    onOpenFile: (name)=>{
                        openFile(name);
                        setQuickSwitcherOpen(false);
                    },
                    onOpenTab: (tabId)=>{
                        focusWorkspaceTab(tabId);
                        setQuickSwitcherOpen(false);
                    },
                    onClose: ()=>setQuickSwitcherOpen(false)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2318,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
        lineNumber: 1783,
        columnNumber: 5
    }, this);
}
_s(FileWorkspace, "4X03g2Co4riQSem7t4c/ZSRMpTM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c = FileWorkspace;
function DesignSystemProjectPanel({ projectId, system, files, streaming, activityEvents, onOpenFile, onUploadAssets, defaultDesignSystemId, onSetDefaultDesignSystem, onDesignSystemsRefresh, onNeedsWork, designSystemReview, onReviewDecision, onUseDesignSystem, onConnectRepo, githubConnected }) {
    _s1();
    const [reviewDecisions, setReviewDecisions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [feedbackSection, setFeedbackSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedbackText, setFeedbackText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(system.status ?? 'draft');
    const [statusBusy, setStatusBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cardManifest, setCardManifest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignSystemProjectPanel.useState": ()=>new Map()
    }["DesignSystemProjectPanel.useState"]);
    const [cardManifestError, setCardManifestError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemProjectPanel.useEffect": ()=>{
            setStatus(system.status ?? 'draft');
        }
    }["DesignSystemProjectPanel.useEffect"], [
        system.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemProjectPanel.useEffect": ()=>{
            const next = {};
            for (const [sectionTitle, entry] of Object.entries(designSystemReview ?? {})){
                next[sectionTitle] = entry.decision;
            }
            setReviewDecisions(next);
        }
    }["DesignSystemProjectPanel.useEffect"], [
        designSystemReview
    ]);
    const allFileNames = files.map((file)=>file.name);
    const fileByName = new Map(files.map((file)=>[
            file.name,
            file
        ]));
    const manifestFile = files.find((file)=>normalizeDesignSystemPath(file.name) === '_ds_manifest.json');
    const manifestFileName = manifestFile?.name ?? null;
    const manifestCacheBustKey = manifestFile ? Math.round(manifestFile.mtime) : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemProjectPanel.useEffect": ()=>{
            if (!system.id || !manifestFileName || manifestCacheBustKey === null) {
                setCardManifest(new Map());
                setCardManifestError(null);
                return undefined;
            }
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, manifestFileName, {
                cache: 'no-store',
                cacheBustKey: manifestCacheBustKey
            }).then({
                "DesignSystemProjectPanel.useEffect": (text)=>{
                    if (cancelled) return;
                    setCardManifest(parseDesignSystemCardManifest(text));
                    setCardManifestError(null);
                }
            }["DesignSystemProjectPanel.useEffect"]).catch({
                "DesignSystemProjectPanel.useEffect": (err)=>{
                    if (cancelled) return;
                    setCardManifest(new Map());
                    setCardManifestError(err instanceof Error ? err.message : 'Unable to read _ds_manifest.json.');
                }
            }["DesignSystemProjectPanel.useEffect"]);
            return ({
                "DesignSystemProjectPanel.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemProjectPanel.useEffect"];
        }
    }["DesignSystemProjectPanel.useEffect"], [
        manifestCacheBustKey,
        manifestFileName,
        projectId,
        system.id
    ]);
    const fontFiles = allFileNames.filter((name)=>/\.(otf|ttf|woff|woff2)$/i.test(name) || name.toLowerCase().includes('/fonts/'));
    const githubEvidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemGithubEvidenceState"])(system, allFileNames);
    const sections = buildDesignSystemReviewSections(allFileNames, fileByName, cardManifest);
    const published = status === 'published';
    const isDefault = published && defaultDesignSystemId === system.id;
    // Strip a trailing "design system" from the title so the heading
    // "Review <name> design system" does not read redundantly when a system is
    // already named e.g. "Acme Design System".
    const systemDisplayName = system.title.replace(/\s*design system$/i, '').trim() || system.title;
    const activityFileOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemProjectPanel.useMemo[activityFileOps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveFileOps"])(activityEvents)
    }["DesignSystemProjectPanel.useMemo[activityFileOps]"], [
        activityEvents
    ]);
    const activityTodos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemProjectPanel.useMemo[activityTodos]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latestTodosFromEvents"])(activityEvents)
    }["DesignSystemProjectPanel.useMemo[activityTodos]"], [
        activityEvents
    ]);
    const sectionReviews = sections.map((section)=>{
        const previewFile = designSystemSectionPreviewFile(section.files, fileByName);
        const reviewEntry = designSystemReview?.[section.title];
        const reviewDecision = reviewDecisions[section.title] ?? reviewEntry?.decision;
        const sectionActivity = designSystemSectionActivity(section, activityFileOps, activityTodos);
        const changedAfterFeedback = designSystemSectionChangedAfterReview(section.files, fileByName, reviewEntry);
        const sectionStatus = designSystemSectionStatus(section, reviewDecision, changedAfterFeedback, sectionActivity);
        return {
            section,
            previewFile,
            previewDisplay: designSystemReviewPreviewDisplay(section, previewFile),
            reviewEntry,
            sectionActivity,
            changedAfterFeedback,
            sectionStatus,
            sectionStatusLabel: designSystemSectionStatusLabel(section, sectionStatus, sectionActivity),
            reviewTimeLabel: reviewEntry?.updatedAt ? designSystemReviewTimeLabel(reviewEntry.updatedAt) : null
        };
    });
    const generationReviewHasStarted = published || designSystemGenerationReviewHasStarted(sectionReviews);
    const visibleSectionReviews = streaming && !published && generationReviewHasStarted ? sectionReviews.filter((item)=>designSystemSectionVisibleDuringGeneration(item)) : sectionReviews;
    const groupedSectionReviews = designSystemReviewGroups(visibleSectionReviews);
    const reviewTocGroups = groupedSectionReviews.map((group)=>({
            title: group.title,
            items: group.items.map((item)=>({
                    id: `design-system-section-${slugForTestId(`${group.title}:${item.section.title}`)}`,
                    label: item.section.title,
                    statusClass: designSystemSectionStatusClass(item.sectionStatus),
                    statusLabel: item.sectionStatusLabel
                }))
        })).filter((group)=>group.items.length > 0);
    const creatingInitialDraft = streaming && !published;
    const generationSteps = designSystemInitialGenerationSteps({
        files,
        sectionReviews,
        system
    });
    const generationProgress = designSystemGenerationProgress(generationSteps);
    async function togglePublished(nextPublished) {
        if (nextPublished && !githubEvidence.ready) return;
        setStatusBusy(true);
        try {
            const nextStatus = nextPublished ? 'published' : 'draft';
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDesignSystemDraft"])(system.id, {
                status: nextStatus
            });
            if (updated) setStatus(updated.status ?? nextStatus);
            await onDesignSystemsRefresh?.();
        } finally{
            setStatusBusy(false);
        }
    }
    function markSectionReview(sectionTitle, decision, details) {
        setReviewDecisions((current)=>({
                ...current,
                [sectionTitle]: decision
            }));
        onReviewDecision?.(sectionTitle, decision, details);
        if (decision === 'looks-good' && feedbackSection === sectionTitle) {
            setFeedbackSection(null);
            setFeedbackText('');
        }
    }
    function toggleSection(sectionTitle) {
        setExpandedSections((current)=>({
                ...current,
                [sectionTitle]: !(current[sectionTitle] ?? false)
            }));
    }
    function openNeedsWorkFeedback(sectionTitle, expansionKey) {
        setReviewDecisions((current)=>({
                ...current,
                [sectionTitle]: 'needs-work'
            }));
        setExpandedSections((current)=>({
                ...current,
                [expansionKey]: true
            }));
        setFeedbackSection(sectionTitle);
        setFeedbackText('');
    }
    function submitNeedsWorkFeedback(sectionTitle, sectionFiles) {
        const feedback = feedbackText.trim();
        if (!feedback) return;
        const agentTask = onNeedsWork?.(sectionTitle, feedback, sectionFiles);
        markSectionReview(sectionTitle, 'needs-work', {
            feedback,
            files: sectionFiles,
            ...agentTask ? {
                agentTask
            } : {}
        });
        setFeedbackSection(null);
        setFeedbackText('');
    }
    function renderReviewCard(item, instanceId, defaultExpanded) {
        const { section, previewFile, reviewEntry, sectionActivity, changedAfterFeedback, sectionStatus, sectionStatusLabel } = item;
        const needsAttention = designSystemReviewNeedsAttention(item);
        // A section the user marked "Looks good" is validated, so collapse it by
        // default to show it is done. Gate that on the current status, not just the
        // stored decision: when a section is regenerated after approval its status
        // moves back to needs-attention, and it has to reopen so the "review again"
        // notice and regenerated preview stay visible. Without the needsAttention guard a stale "looks-good" decision
        // keeps the regenerated section collapsed and the change is easy to miss.
        // The user can still re-expand with the chevron (expandedSections[instanceId]),
        // and an active agent run forces it open.
        const reviewedGood = !needsAttention && (reviewDecisions[section.title] ?? reviewEntry?.decision) === 'looks-good';
        const expanded = (expandedSections[instanceId] ?? (defaultExpanded && !reviewedGood)) || sectionActivity.running;
        const sectionSlug = slugForTestId(instanceId);
        const sectionAnchorId = `design-system-section-${sectionSlug}`;
        const editableFile = designSystemSectionEditableFile(section, previewFile, fileByName);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: sectionAnchorId,
            className: [
                'ds-project-section',
                'ds-project-review-item',
                `ds-project-review-item--${item.previewDisplay}`,
                expanded ? 'is-expanded' : 'is-collapsed'
            ].join(' '),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ds-project-section-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ds-project-section-head-trigger",
                            "aria-expanded": expanded,
                            "aria-label": `${expanded ? 'Collapse' : 'Expand'} ${section.title}`,
                            onClick: ()=>toggleSection(instanceId)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2594,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ds-project-section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: expanded ? 'chevron-down' : 'chevron-right',
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: section.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2605,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2603,
                                    columnNumber: 13
                                }, this),
                                !expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: [
                                        'ds-project-section-state',
                                        'ds-project-section-dot',
                                        designSystemSectionStatusClass(sectionStatus)
                                    ].join(' '),
                                    "aria-label": sectionStatusLabel,
                                    title: sectionStatusLabel,
                                    children: needsAttention ? 'Needs review' : 'Looks good'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2608,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-review-actions",
                            "aria-label": `${section.title} review`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `ghost success ${reviewDecisions[section.title] === 'looks-good' ? 'active' : ''}`,
                                    "data-testid": `design-system-review-good-${slugForTestId(section.title)}`,
                                    onClick: ()=>{
                                        markSectionReview(section.title, 'looks-good');
                                        // Collapse on validate, overriding any manual expand so the
                                        // section always tidies away once it is marked good.
                                        setExpandedSections((current)=>({
                                                ...current,
                                                [instanceId]: false
                                            }));
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2633,
                                            columnNumber: 15
                                        }, this),
                                        "Looks good"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2622,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `ghost danger ${reviewDecisions[section.title] === 'needs-work' ? 'active' : ''}`,
                                    "data-testid": `design-system-review-work-${slugForTestId(section.title)}`,
                                    onClick: ()=>openNeedsWorkFeedback(section.title, instanceId),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "comment",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2642,
                                            columnNumber: 15
                                        }, this),
                                        "Needs work..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2636,
                                    columnNumber: 13
                                }, this),
                                editableFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ghost compact",
                                    "data-testid": `design-system-review-edit-${sectionSlug}`,
                                    title: `Edit ${editableFile.name}`,
                                    onClick: ()=>onOpenFile(editableFile.name),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "edit",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2653,
                                            columnNumber: 17
                                        }, this),
                                        "Edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2646,
                                    columnNumber: 15
                                }, this) : null,
                                feedbackSection === section.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "ds-project-feedback-popover",
                                    onSubmit: (event)=>{
                                        event.preventDefault();
                                        submitNeedsWorkFeedback(section.title, section.files);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `ds-feedback-${slugForTestId(section.title)}`,
                                            children: "Tell the agent what to change"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2665,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: `ds-feedback-${slugForTestId(section.title)}`,
                                            value: feedbackText,
                                            rows: 3,
                                            placeholder: `e.g. tighten spacing in ${section.title}, regenerate this preview...`,
                                            onChange: (event)=>setFeedbackText(event.target.value),
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2668,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "ghost compact",
                                                    onClick: ()=>{
                                                        setFeedbackSection(null);
                                                        setFeedbackText('');
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "primary compact",
                                                    disabled: !feedbackText.trim(),
                                                    children: "Send"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2687,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2658,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2621,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2588,
                    columnNumber: 9
                }, this),
                expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ds-project-section-body",
                    children: [
                        sectionActivity.running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-review-notice is-running",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "sparkles",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2703,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: designSystemSectionRunningNotice(section, sectionActivity)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2704,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2702,
                            columnNumber: 15
                        }, this) : changedAfterFeedback || sectionActivity.mutated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-review-notice",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2708,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: changedAfterFeedback ? 'This section changed after your feedback. Review it again before publishing.' : 'This section changed during the latest run. Review it before publishing.'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2709,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2707,
                            columnNumber: 15
                        }, this) : null,
                        reviewEntry?.decision === 'needs-work' && reviewEntry.feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-last-feedback",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "comment",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2718,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Last feedback"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2720,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: reviewEntry.feedback
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2721,
                                            columnNumber: 19
                                        }, this),
                                        reviewEntry.agentTask ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: designSystemReviewAgentTaskLabel(reviewEntry.agentTask)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2723,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2719,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2717,
                            columnNumber: 15
                        }, this) : null,
                        previewFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-inline-preview",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemInlinePreview, {
                                projectId: projectId,
                                file: previewFile
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2730,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2729,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-preview-placeholder",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "sparkles",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2734,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Generating preview..."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2735,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2733,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2700,
                    columnNumber: 11
                }, this) : null
            ]
        }, instanceId, true, {
            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
            lineNumber: 2578,
            columnNumber: 7
        }, this);
    }
    if (creatingInitialDraft) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ds-project-panel ds-project-panel--generating",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-project-generation-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-project-generation-mark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "blocks",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2749,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2748,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Creating your design system..."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2751,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Keep this tab open. You can come back in a few minutes."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2752,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-project-generation-progress",
                        role: "progressbar",
                        "aria-label": `Design system generation progress ${generationProgress}%`,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": generationProgress,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${generationProgress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2761,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 2753,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 2747,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
            lineNumber: 2746,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ds-project-panel",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ds-project-review-layout",
            children: [
                reviewTocGroups.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "ds-project-toc",
                    "aria-label": "Design system sections",
                    "data-testid": "design-system-review-toc",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-toc__title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "panel-left",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2778,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Contents"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2779,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2777,
                            columnNumber: 13
                        }, this),
                        reviewTocGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-project-toc__group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: group.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 2783,
                                        columnNumber: 17
                                    }, this),
                                    group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${item.id}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: [
                                                        'ds-project-toc__dot',
                                                        item.statusClass
                                                    ].join(' '),
                                                    "aria-label": item.statusLabel,
                                                    title: item.statusLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2786,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2791,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2785,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, group.title, true, {
                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                lineNumber: 2782,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2772,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ds-project-main ds-project-main--review",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-head ds-project-head--review",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: published ? `${systemDisplayName} design system` : `Review ${systemDisplayName} design system`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2801,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ds-project-publish-card__toggles",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-project-publish-trigger",
                                            title: !published && !githubEvidence.ready ? 'Finish importing your GitHub repo before you can publish.' : undefined,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: published ? 'ghost compact' : 'primary',
                                                "data-testid": "design-system-publish",
                                                disabled: statusBusy || !published && !githubEvidence.ready,
                                                onClick: ()=>void togglePublished(!published),
                                                children: [
                                                    published ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "check",
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                        lineNumber: 2828,
                                                        columnNumber: 30
                                                    }, this) : null,
                                                    published ? 'Published' : 'Publish'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                lineNumber: 2821,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2813,
                                            columnNumber: 13
                                        }, this),
                                        published ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isDefault,
                                                    disabled: statusBusy,
                                                    onChange: (event)=>{
                                                        onSetDefaultDesignSystem?.(event.target.checked ? system.id : null);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2834,
                                                    columnNumber: 17
                                                }, this),
                                                "Default"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2833,
                                            columnNumber: 15
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2806,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2800,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-publish-card ds-project-publish-card--review",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: published ? "Your team's new projects can use this design system as context by default." : 'Your design system is ready, but your feedback will improve it. Publish it when it is ready to use in future projects.'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2849,
                                    columnNumber: 11
                                }, this),
                                published ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ds-project-use-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Use this system"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2856,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: "compact",
                                            onClick: ()=>onUseDesignSystem?.(system.id, system.title),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "external-link",
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                    lineNumber: 2862,
                                                    columnNumber: 17
                                                }, this),
                                                "New design"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2857,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2855,
                                    columnNumber: 13
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2848,
                            columnNumber: 9
                        }, this),
                        !githubEvidence.ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-warning-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "github",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2871,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).bannerTitle
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2873,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).bannerBody
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2874,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2872,
                                    columnNumber: 13
                                }, this),
                                onConnectRepo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "compact",
                                    disabled: githubConnected === undefined,
                                    onClick: onConnectRepo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "github",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2883,
                                            columnNumber: 17
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).buttonLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2877,
                                    columnNumber: 15
                                }, this) : githubEvidence.hasSourceManifest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "compact",
                                    onClick: ()=>onOpenFile('context/source-context.md'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "file",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2888,
                                            columnNumber: 17
                                        }, this),
                                        "Open source context"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2887,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2870,
                            columnNumber: 11
                        }, this) : null,
                        fontFiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MissingBrandFontsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingBrandFontsBanner"], {
                            projectId: projectId,
                            onUploadAssets: onUploadAssets
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2896,
                            columnNumber: 11
                        }, this) : null,
                        cardManifestError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-warning-card ds-project-warning-card--error",
                            "data-testid": "design-system-manifest-error",
                            role: "alert",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "alert-triangle",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2905,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Design manifest needs attention"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2907,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: cardManifestError
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2908,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2906,
                                    columnNumber: 13
                                }, this),
                                manifestFileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "compact",
                                    onClick: ()=>onOpenFile(manifestFileName),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "file",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2912,
                                            columnNumber: 17
                                        }, this),
                                        "Open manifest"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2911,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2900,
                            columnNumber: 11
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-project-sections",
                            children: [
                                groupedSectionReviews.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-project-section-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: group.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                                lineNumber: 2922,
                                                columnNumber: 15
                                            }, this),
                                            group.items.map((item)=>renderReviewCard(item, `${group.title}:${item.section.title}`, Boolean(item.previewFile)))
                                        ]
                                    }, group.title, true, {
                                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                        lineNumber: 2921,
                                        columnNumber: 13
                                    }, this)),
                                visibleSectionReviews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ds-project-empty-review",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2931,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Preview cards will appear here as the agent creates them."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                            lineNumber: 2932,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                                    lineNumber: 2930,
                                    columnNumber: 13
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                            lineNumber: 2919,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 2799,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
            lineNumber: 2770,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
        lineNumber: 2769,
        columnNumber: 5
    }, this);
}
_s1(DesignSystemProjectPanel, "io1CgSZkmzxG6cMrcGDQ0TXuiwI=");
_c1 = DesignSystemProjectPanel;
function designSystemHasSourceContext(system) {
    const provenance = system.provenance;
    if (!provenance) return false;
    return Boolean(provenance.companyBlurb?.trim() || provenance.githubUrls?.length || provenance.localCodeFiles?.length || provenance.figFiles?.length || provenance.assetFiles?.length || provenance.notes?.trim() || provenance.sourceNotes?.trim());
}
function slugForTestId(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function designSystemSectionEditableFile(section, previewFile, fileByName) {
    if (previewFile && (previewFile.kind === 'html' || previewFile.kind === 'sketch')) return previewFile;
    const htmlFile = section.files.map((name)=>fileByName.get(name)).find((file)=>file?.kind === 'html');
    if (htmlFile) return htmlFile;
    return previewFile ?? section.files.map((name)=>fileByName.get(name)).find(Boolean) ?? null;
}
function designSystemSectionPreviewFile(names, fileByName) {
    for (const name of names){
        const file = fileByName.get(name);
        if (!file) continue;
        if (file.kind === 'html' || file.kind === 'image' || file.kind === 'sketch') return file;
    }
    return null;
}
function buildDesignSystemReviewSections(names, fileByName, cardManifest = new Map()) {
    const artifactNames = names.filter((name)=>isDesignSystemReviewArtifactFile(name, fileByName)).sort(designSystemReviewArtifactSort);
    if (artifactNames.length > 0) {
        const reviewNames = preferPreviewArtifactsOverRawAssets(artifactNames);
        return reviewNames.map((name)=>{
            const manifestEntry = cardManifest.get(normalizeDesignSystemPath(name));
            const title = manifestEntry?.name?.trim() || designSystemReviewTitleFromPath(name);
            const category = inferDesignSystemReviewCategory(name, title, manifestEntry);
            return {
                title,
                subtitle: manifestEntry?.subtitle?.trim() || designSystemReviewSubtitle(title, category, name),
                category,
                files: designSystemRelatedFilesForCategory(name, category, names)
            };
        });
    }
    return designSystemFallbackReviewSections(names);
}
function preferPreviewArtifactsOverRawAssets(names) {
    const hasBrandPreview = names.some((name)=>{
        const path = normalizeDesignSystemPath(name);
        const title = designSystemReviewTitleFromPath(name);
        return inferDesignSystemReviewCategory(name, title) === 'Brand' && (path.startsWith('preview/') || path.includes('/preview/') || path.endsWith('.html'));
    });
    if (!hasBrandPreview) return names;
    return names.filter((name)=>{
        const path = normalizeDesignSystemPath(name);
        const title = designSystemReviewTitleFromPath(name);
        if (inferDesignSystemReviewCategory(name, title) !== 'Brand') return true;
        return path.startsWith('preview/') || path.includes('/preview/') || path.endsWith('.html');
    });
}
function isDesignSystemReviewArtifactFile(name, fileByName) {
    const path = normalizeDesignSystemPath(name);
    const file = fileByName.get(name);
    if (!file || isDesignSystemEvidenceFile(path) || path === 'metadata.json') return false;
    const isRenderable = file.kind === 'html' || file.kind === 'image' || file.kind === 'sketch';
    if (!isRenderable) return false;
    if (isDesignSystemRawAssetFile(path)) return isDesignSystemReviewableAssetArtifact(path);
    if (path === 'index.html') return true;
    if (path.startsWith('preview/') || path.includes('/preview/')) return true;
    if (isDesignSystemUiKitFile(path)) return true;
    return false;
}
function isDesignSystemRawAssetFile(path) {
    return path.startsWith('assets/') || path.startsWith('src/assets/') || path.startsWith('public/') || path.includes('/assets/') || path.includes('/src/assets/') || path.includes('/fonts/') || path.includes('/logos/');
}
function isDesignSystemReviewableAssetArtifact(path) {
    return /\b(brand|logo|logos|mark|wordmark|icon)\b/u.test(path);
}
function designSystemReviewArtifactSort(first, second) {
    const firstCategory = inferDesignSystemReviewCategory(first, designSystemReviewTitleFromPath(first));
    const secondCategory = inferDesignSystemReviewCategory(second, designSystemReviewTitleFromPath(second));
    return designSystemReviewCategoryRank(firstCategory) - designSystemReviewCategoryRank(secondCategory) || designSystemReviewTitleFromPath(first).localeCompare(designSystemReviewTitleFromPath(second));
}
function designSystemReviewTitleFromPath(name) {
    const path = normalizeDesignSystemPath(name);
    const parts = path.split('/').filter(Boolean);
    let basename = parts[parts.length - 1] ?? path;
    if (/^index\.(html?|png|jpe?g|svg|webp|avif)$/iu.test(basename) && parts.length > 1) {
        basename = parts[parts.length - 2] ?? basename;
    }
    return basename.replace(/\.(html?|png|jpe?g|gif|webp|avif|svg|fig|pen)$/iu, '').replace(/_/g, '-').replace(/\s+/g, '-').replace(/^-+|-+$/g, '') || 'overview';
}
function inferDesignSystemReviewCategory(name, title, manifestEntry) {
    const text = `${normalizeDesignSystemPath(name)} ${title}`.toLowerCase();
    const group = manifestEntry?.group?.toLowerCase() ?? '';
    if (group.includes('ui kit')) return 'Components';
    if (/\b(type|typography|font|text)\b/u.test(text)) return 'Type';
    if (/\b(color|colors|palette|theme)\b/u.test(text)) return 'Colors';
    if (/\b(space|spacing|radius|radii|shadow|shadows|elevation|layout-grid)\b/u.test(text)) return 'Spacing';
    if (/\b(brand|logo|logos|mark|wordmark|icon|favicon)\b/u.test(text)) return 'Brand';
    if (group.includes('brand')) return 'Brand';
    return 'Components';
}
function designSystemReviewSubtitle(title, category, name = '') {
    const path = normalizeDesignSystemPath(name);
    const titleText = title.toLowerCase();
    const text = `${title} ${path}`.toLowerCase();
    if (isDesignSystemUiKitEntryPage(path)) return 'Applied UI kit example';
    if (text.includes('typography')) return 'Text hierarchy and styles';
    if (text.includes('type-')) return 'Typography scale and font guidance';
    if (text.includes('font')) return 'Font family specimens';
    if (text.includes('node')) return 'Data type color coding system';
    if (text.includes('ui-palette') || text.includes('palette')) return 'Interface color palette';
    if (text.includes('dark')) return 'Dark theme color palette';
    if (text.includes('spacing') || text.includes('radius') || text.includes('radii') || text.includes('shadow')) return 'Spacing scale and border radius tokens';
    if (text.includes('favicon')) return 'Brand app icon and favicon';
    if (text.includes('logo') || text.includes('brand')) return 'Brand logo marks';
    if (titleText.includes('interface') || titleText.includes('ui')) return 'Interface and component patterns';
    switch(category){
        case 'Type':
            return 'Typography scale and font guidance';
        case 'Colors':
            return 'Color palette and token specimens';
        case 'Spacing':
            return 'Spacing and radius system';
        case 'Brand':
            return 'Brand assets and identity usage';
        case 'Components':
            return 'Reusable product interface examples';
    }
}
function isDesignSystemUiKitEntryPage(path) {
    return isDesignSystemUiKitFile(path) && /\.html?$/iu.test(path);
}
function designSystemManifestCardError(index, detail) {
    const separator = detail.startsWith('.') ? '' : ' ';
    return new Error(`Invalid _ds_manifest.json: cards[${index}]${separator}${detail}.`);
}
function optionalDesignSystemManifestString(record, field, index) {
    const value = record[field];
    if (value === undefined) return undefined;
    if (typeof value !== 'string') throw designSystemManifestCardError(index, `.${field} must be a string`);
    return value;
}
function parseDesignSystemCardManifestEntry(card, index) {
    if (!card || typeof card !== 'object' || Array.isArray(card)) {
        throw designSystemManifestCardError(index, 'must be an object');
    }
    const record = card;
    if (typeof record.path !== 'string' || !record.path.trim()) {
        throw designSystemManifestCardError(index, '.path must be a non-empty string');
    }
    const entry = {
        path: normalizeDesignSystemPath(record.path)
    };
    for (const field of DESIGN_SYSTEM_CARD_MANIFEST_OPTIONAL_STRING_FIELDS){
        entry[field] = optionalDesignSystemManifestString(record, field, index);
    }
    return entry;
}
function parseDesignSystemCardManifest(text) {
    if (!text) return new Map();
    let parsed;
    try {
        parsed = JSON.parse(text);
    } catch (err) {
        const detail = err instanceof Error ? err.message : String(err);
        throw new Error(`Invalid _ds_manifest.json: ${detail}`);
    }
    if (!parsed || typeof parsed !== 'object') {
        throw new Error('Invalid _ds_manifest.json: expected an object with a cards array.');
    }
    if (parsed.cards !== undefined && !Array.isArray(parsed.cards)) {
        throw new Error('Invalid _ds_manifest.json: cards must be an array.');
    }
    const cards = Array.isArray(parsed.cards) ? parsed.cards : [];
    const entries = [];
    for (const [index, card] of cards.entries()){
        const entry = parseDesignSystemCardManifestEntry(card, index);
        entries.push([
            entry.path,
            entry
        ]);
    }
    return new Map(entries);
}
function designSystemReviewPreviewDisplay(section, previewFile) {
    if (!previewFile) return 'specimen';
    const path = normalizeDesignSystemPath(previewFile.name);
    if (path.startsWith('ui_kits/') || path.includes('/ui_kits/')) return 'ui-kit';
    if (previewFile.kind !== 'html') return 'asset';
    if (section.category === 'Components' && !path.startsWith('preview/')) return 'ui-kit';
    return 'specimen';
}
function designSystemRelatedFilesForCategory(artifactName, category, names) {
    const related = names.filter((name)=>{
        if (name === artifactName || isDesignSystemEvidenceFile(name)) return false;
        switch(category){
            case 'Type':
            case 'Colors':
            case 'Spacing':
                return isDesignSystemTokenFile(name);
            case 'Components':
                return isDesignSystemUiKitFile(name);
            case 'Brand':
                return isDesignSystemAssetFile(name);
        }
    });
    return Array.from(new Set([
        artifactName,
        ...related
    ])).slice(0, 12);
}
function designSystemFallbackReviewSections(names) {
    const tokenFiles = names.filter(isDesignSystemTokenFile).slice(0, 8);
    const uiKitFiles = names.filter(isDesignSystemUiKitFile).slice(0, 8);
    const assetFiles = names.filter(isDesignSystemAssetFile).slice(0, 8);
    const sections = [
        tokenFiles.length > 0 ? {
            title: 'colors-and-type',
            subtitle: 'Color, type, spacing, and token guidance',
            category: 'Colors',
            files: tokenFiles
        } : null,
        uiKitFiles.length > 0 ? {
            title: 'components',
            subtitle: 'Reusable interface examples',
            category: 'Components',
            files: uiKitFiles
        } : null,
        assetFiles.length > 0 ? {
            title: 'assets',
            subtitle: 'Brand logos, fonts, and uploaded assets',
            category: 'Brand',
            files: assetFiles
        } : null
    ];
    return sections.filter((section)=>section !== null);
}
function designSystemReviewGroups(reviews) {
    const categories = [
        'Type',
        'Colors',
        'Spacing',
        'Components',
        'Brand'
    ];
    return categories.map((title)=>({
            title,
            items: reviews.filter((review)=>review.section.category === title)
        })).filter((group)=>group.items.length > 0);
}
function designSystemReviewCategoryRank(category) {
    return [
        'Type',
        'Colors',
        'Spacing',
        'Components',
        'Brand'
    ].indexOf(category);
}
function designSystemReviewNeedsAttention(review) {
    return review.sectionStatus === 'needs-review' || review.sectionStatus === 'needs-work' || review.sectionStatus === 'updated' || review.sectionStatus === 'running' || review.sectionStatus === 'planned' || review.sectionStatus === 'missing';
}
function isDesignSystemEvidenceFile(name) {
    const path = normalizeDesignSystemPath(name);
    return path.startsWith('context/') || path.includes('/context/');
}
function isDesignSystemGuidanceFile(name) {
    const path = normalizeDesignSystemPath(name);
    if (path.includes('/')) return false;
    return DESIGN_SYSTEM_GUIDANCE_FILES.has(path);
}
function designSystemGuidanceSort(first, second) {
    const order = [
        'design.md',
        'readme.md',
        'readme-print.md',
        'skill.md'
    ];
    const firstRank = order.indexOf(normalizeDesignSystemPath(first));
    const secondRank = order.indexOf(normalizeDesignSystemPath(second));
    return (firstRank === -1 ? order.length : firstRank) - (secondRank === -1 ? order.length : secondRank) || first.localeCompare(second);
}
function isDesignSystemTokenFile(name) {
    const path = normalizeDesignSystemPath(name);
    if (isDesignSystemEvidenceFile(path)) return false;
    if (path.startsWith('preview/') || path.startsWith('ui_kits/') || path.startsWith('assets/') || path.startsWith('src/assets/') || path.startsWith('public/') || path.includes('/preview/') || path.includes('/ui_kits/') || path.includes('/assets/') || path.includes('/src/assets/') || DESIGN_SYSTEM_IMAGE_OR_FONT_EXTENSIONS.test(path)) {
        return false;
    }
    const basename = designSystemBasename(path);
    if (basename.endsWith('.html')) return false;
    return basename === 'colors_and_type.css' || basename === 'tailwind.config.ts' || basename === 'tailwind.config.js' || basename === 'tailwind.config.mjs' || basename === 'theme.css' || basename === 'tokens.css' || basename === 'variables.css' || basename === 'design-tokens.json' || path.includes('/tokens/') || path.startsWith('src/tokens/') || path.startsWith('src/styles/') || path.startsWith('styles/') || /\b(color|colors|palette|typography|spacing|radius|theme|token)s?\b/u.test(path);
}
function isDesignSystemPreviewFile(name) {
    const path = normalizeDesignSystemPath(name);
    if (isDesignSystemEvidenceFile(path) || path.startsWith('ui_kits/')) return false;
    const basename = designSystemBasename(path);
    return path.startsWith('preview/') || path.split('/').length === 1 && basename.endsWith('.html') || basename.endsWith('.html') && /\b(index|overview|preview|showcase|styleguide)\b/u.test(path);
}
function isDesignSystemUiKitFile(name) {
    const path = normalizeDesignSystemPath(name);
    if (isDesignSystemEvidenceFile(path)) return false;
    if (isDesignSystemRawAssetFile(path)) return false;
    return path.startsWith('ui_kits/') || path.startsWith('src/components/') || path.startsWith('components/') || path.includes('/ui_kits/') || path.includes('/src/components/') || /\b(component|components|interface|ui-kit|uikit)\b/u.test(path);
}
function isDesignSystemAssetFile(name) {
    const path = normalizeDesignSystemPath(name);
    if (isDesignSystemEvidenceFile(path)) return false;
    return path.startsWith('assets/') || path.startsWith('src/assets/') || path.startsWith('public/') || path.includes('/assets/') || path.includes('/src/assets/') || path.includes('/fonts/') || path.includes('/icons/') || path.includes('/logos/') || DESIGN_SYSTEM_IMAGE_OR_FONT_EXTENSIONS.test(path);
}
function designSystemGenerationReviewHasStarted(sectionReviews) {
    return sectionReviews.some((review)=>{
        const { previewFile, section, sectionActivity } = review;
        if (previewFile) return true;
        if (section.files.length > 0 && sectionActivity.phase !== 'idle') return true;
        return sectionActivity.phase === 'writing' || sectionActivity.phase === 'updated' || sectionActivity.phase === 'planned';
    });
}
function designSystemSectionVisibleDuringGeneration(review) {
    const { section, reviewEntry, sectionActivity, previewFile } = review;
    if (reviewEntry) return true;
    if (previewFile) return true;
    if (sectionActivity.phase !== 'idle') return true;
    return section.files.length > 0;
}
function designSystemSectionStatus(section, decision, changedAfterFeedback, activity) {
    if (activity.running) return 'running';
    if (activity.phase === 'planned') return 'planned';
    if (changedAfterFeedback || activity.mutated) return 'updated';
    if (section.files.length === 0) return 'missing';
    if (decision === 'looks-good') return 'approved';
    if (decision === 'needs-work') return 'needs-work';
    return 'needs-review';
}
function designSystemSectionStatusLabel(section, status, activity) {
    switch(status){
        case 'running':
            return designSystemSectionPhaseLabel(section, activity);
        case 'planned':
            return 'Queued';
        case 'updated':
            return 'Review updated files';
        case 'approved':
            return 'Looks good';
        case 'needs-work':
            return 'Needs work';
        case 'needs-review':
            return 'Needs review';
        case 'missing':
            return section.requiredFile ? `${section.requiredFile} missing` : 'No files yet';
    }
}
function designSystemSectionStatusClass(status) {
    switch(status){
        case 'running':
            return 'is-running';
        case 'planned':
            return 'is-planned';
        case 'updated':
            return 'is-review';
        case 'approved':
            return 'is-approved';
        case 'needs-work':
            return 'is-work';
        case 'needs-review':
            return 'is-ready';
        case 'missing':
            return 'is-missing';
    }
}
function designSystemInitialGenerationSteps({ files, sectionReviews, system }) {
    const hasSourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemGithubEvidenceState"])(system, files.map((file)=>file.name)).ready && (files.some((file)=>normalizeDesignSystemPath(file.name).startsWith('context/')) || designSystemHasSourceContext(system));
    const fileNames = files.map((file)=>file.name);
    const categoryHasReview = (category)=>sectionReviews.some((review)=>review.section.category === category);
    const categoryIsRunning = (category)=>sectionReviews.some((review)=>review.section.category === category && review.sectionActivity.running);
    const guidanceRunning = sectionReviews.some((review)=>review.sectionActivity.running && review.section.files.some((name)=>isDesignSystemGuidanceFile(name)));
    const steps = [
        {
            id: 'source-context',
            title: 'Explore provided resources',
            detail: 'Company context, GitHub repositories, local code folders, Figma files, fonts, logos, and notes.',
            status: hasSourceContext ? 'succeeded' : 'running'
        },
        {
            id: 'guidance',
            title: 'Create DESIGN.md',
            detail: 'Canonical guidance used as project context.',
            status: fileNames.some(isDesignSystemGuidanceFile) ? 'succeeded' : guidanceRunning ? 'running' : 'pending'
        },
        {
            id: 'tokens',
            title: 'Create tokens',
            detail: 'Color, type, spacing, and radius evidence.',
            status: fileNames.some(isDesignSystemTokenFile) ? 'succeeded' : categoryIsRunning('Type') || categoryIsRunning('Colors') || categoryIsRunning('Spacing') ? 'running' : 'pending'
        },
        {
            id: 'previews',
            title: 'Create preview cards',
            detail: 'HTML review cards for the Design System tab.',
            status: sectionReviews.some((review)=>review.previewFile) ? 'succeeded' : categoryIsRunning('Type') || categoryIsRunning('Colors') || categoryIsRunning('Spacing') || categoryIsRunning('Brand') ? 'running' : 'pending'
        },
        {
            id: 'ui-kit',
            title: 'Create UI kit',
            detail: 'Reusable interface examples.',
            status: categoryHasReview('Components') || fileNames.some(isDesignSystemUiKitFile) ? 'succeeded' : categoryIsRunning('Components') ? 'running' : 'pending'
        },
        {
            id: 'assets',
            title: 'Register assets',
            detail: 'Logos, icons, fonts, and brand files.',
            status: categoryHasReview('Brand') || fileNames.some(isDesignSystemAssetFile) ? 'succeeded' : categoryIsRunning('Brand') ? 'running' : 'pending'
        }
    ];
    if (!steps.some((step)=>step.status === 'running')) {
        const firstPending = steps.find((step)=>step.status === 'pending');
        if (firstPending) firstPending.status = 'running';
    }
    return steps;
}
function designSystemGenerationProgress(steps) {
    if (steps.length === 0) return 8;
    const succeeded = steps.filter((step)=>step.status === 'succeeded').length;
    const running = steps.some((step)=>step.status === 'running') ? 0.45 : 0;
    return Math.max(8, Math.min(92, Math.round((succeeded + running) / steps.length * 100)));
}
function designSystemSectionActivity(section, fileOps, todos) {
    const touched = fileOps.filter((entry)=>designSystemFileOpBelongsToSection(entry, section));
    const touchedFiles = Array.from(new Set(touched.map((entry)=>entry.path)));
    const todo = designSystemSectionTodo(section, todos);
    const hasRunningMutation = touched.some((entry)=>entry.status === 'running' && (entry.ops.includes('write') || entry.ops.includes('edit')));
    const hasRunningRead = touched.some((entry)=>entry.status === 'running' && entry.ops.includes('read'));
    const mutated = touched.some((entry)=>entry.status === 'done' && (entry.ops.includes('write') || entry.ops.includes('edit')));
    const errored = touched.some((entry)=>entry.status === 'error');
    const todoPhase = todo ? designSystemTodoActivityPhase(section, todo) : null;
    const hasRunningTodo = todo?.status === 'in_progress';
    const phase = errored ? 'error' : hasRunningMutation ? 'writing' : hasRunningRead ? 'reading' : hasRunningTodo && todoPhase ? todoPhase : mutated ? 'updated' : todoPhase ? todoPhase : 'idle';
    return {
        running: hasRunningMutation || hasRunningRead || hasRunningTodo,
        mutated,
        errored,
        phase,
        touchedFiles,
        todoText: todo?.content,
        todoStatus: todo?.status
    };
}
function designSystemSectionTodo(section, todos) {
    return todos.filter((todo)=>todo.status !== 'completed').filter((todo)=>designSystemTodoBelongsToSection(todo, section)).sort((first, second)=>designSystemTodoRank(first) - designSystemTodoRank(second))[0];
}
function designSystemTodoRank(todo) {
    if (todo.status === 'in_progress') return 0;
    if (todo.status === 'pending') return 1;
    return 2;
}
function designSystemTodoActivityPhase(section, todo) {
    if (todo.status === 'pending') return 'planned';
    const text = designSystemTodoSearchText(todo);
    const isMutation = [
        'build',
        'copy',
        'create',
        'edit',
        'generate',
        'import',
        'register',
        'update',
        'write'
    ].some((keyword)=>text.includes(keyword));
    if (isMutation) return 'writing';
    const isReading = [
        'analy',
        'browse',
        'explore',
        'fetch',
        'github',
        'inspect',
        'read',
        'repo',
        'search'
    ].some((keyword)=>text.includes(keyword));
    if (isReading) return 'reading';
    return section.title === 'Preview' || section.title === 'UI kit' ? 'writing' : 'reading';
}
function designSystemTodoBelongsToSection(todo, section) {
    const text = designSystemTodoSearchText(todo);
    if (section.files.some((name)=>text.includes(designSystemReviewTitleFromPath(name)))) {
        return true;
    }
    switch(section.category){
        case 'Type':
            return [
                'font',
                'type',
                'typography'
            ].some((keyword)=>text.includes(keyword));
        case 'Colors':
            return [
                'color',
                'colors_and_type',
                'css variable',
                'palette',
                'theme',
                'token'
            ].some((keyword)=>text.includes(keyword));
        case 'Spacing':
            return [
                'radius',
                'spacing',
                'space'
            ].some((keyword)=>text.includes(keyword));
        case 'Components':
            return [
                'component',
                'interface',
                'prototype',
                'react',
                'ui kit',
                'ui_kit',
                'ui_kits'
            ].some((keyword)=>text.includes(keyword));
        case 'Brand':
            return [
                'font',
                'icon',
                'logo',
                'brand',
                'asset',
                'upload'
            ].some((keyword)=>text.includes(keyword));
    }
}
function designSystemTodoSearchText(todo) {
    return `${todo.content} ${todo.activeForm ?? ''}`.toLowerCase();
}
function designSystemFileOpBelongsToSection(entry, section) {
    const candidates = [
        entry.fullPath,
        entry.path
    ].map(normalizeDesignSystemPath);
    const sectionFiles = [
        ...section.files,
        section.requiredFile
    ].filter((name)=>Boolean(name)).map(normalizeDesignSystemPath);
    if (sectionFiles.some((name)=>candidates.some((candidate)=>candidate === name || candidate.endsWith(`/${name}`)))) {
        return true;
    }
    return candidates.some((path)=>designSystemPathMatchesSection(path, section.category));
}
function designSystemPathMatchesSection(path, sectionTitle) {
    const basename = designSystemBasename(path);
    switch(sectionTitle){
        case 'Type':
            return !isDesignSystemEvidenceFile(path) && (isDesignSystemTokenFile(path) || DESIGN_SYSTEM_GUIDANCE_FILES.has(basename)) && /\b(type|typography|font|text)\b/u.test(path);
        case 'Colors':
            return isDesignSystemTokenFile(path) && /\b(color|colors|palette|theme|token)\b/u.test(path);
        case 'Spacing':
            return isDesignSystemTokenFile(path) && /\b(space|spacing|radius)\b/u.test(path);
        case 'Components':
            return isDesignSystemUiKitFile(path);
        case 'Brand':
            return isDesignSystemAssetFile(path);
        default:
            return false;
    }
}
function normalizeDesignSystemPath(path) {
    return path.replace(/\\/g, '/').replace(/^\.?\//, '').toLowerCase();
}
function designSystemBasename(path) {
    const segments = normalizeDesignSystemPath(path).split('/').filter(Boolean);
    return segments[segments.length - 1] ?? normalizeDesignSystemPath(path);
}
function designSystemSectionPhaseLabel(section, activity) {
    if (activity.phase === 'planned') {
        switch(section.category){
            case 'Type':
                return 'Queued typography';
            case 'Colors':
                return 'Queued tokens';
            case 'Spacing':
                return 'Queued spacing';
            case 'Components':
                return 'Queued UI kit';
            case 'Brand':
                return 'Queued assets';
        }
    }
    if (activity.phase === 'reading') {
        switch(section.category){
            case 'Type':
                return 'Reading typography';
            case 'Colors':
                return 'Reading tokens';
            case 'Spacing':
                return 'Reading spacing';
            case 'Components':
                return 'Reading UI kit';
            case 'Brand':
                return 'Reading assets';
        }
    }
    if (activity.phase === 'writing') {
        switch(section.category){
            case 'Type':
                return 'Writing typography';
            case 'Colors':
                return 'Writing tokens';
            case 'Spacing':
                return 'Writing spacing';
            case 'Components':
                return 'Building UI kit';
            case 'Brand':
                return 'Updating assets';
        }
    }
    if (activity.phase === 'error') return 'Needs attention';
    if (activity.phase === 'updated') return 'Updated';
    return 'Needs review';
}
function designSystemSectionActivityLabel(section, activity) {
    if (activity.touchedFiles.length === 0) {
        return activity.todoText ? `${designSystemSectionPhaseLabel(section, activity)} from todo: ${truncateDesignSystemActivityText(activity.todoText)}` : designSystemSectionPhaseLabel(section, activity);
    }
    const label = activity.touchedFiles.slice(0, 3).join(', ');
    const suffix = activity.touchedFiles.length > 3 ? ` +${activity.touchedFiles.length - 3}` : '';
    if (activity.phase === 'idle') return `Read ${label}${suffix}`;
    return `${designSystemSectionPhaseLabel(section, activity)} ${label}${suffix}`;
}
function truncateDesignSystemActivityText(value) {
    const trimmed = value.trim();
    return trimmed.length > 80 ? `${trimmed.slice(0, 77)}...` : trimmed;
}
function designSystemSectionRunningNotice(section, activity) {
    if (activity.phase === 'reading') {
        return `Open Design is reading ${section.title} context for this section.`;
    }
    return `${designSystemSectionPhaseLabel(section, activity)} now.`;
}
function designSystemReviewTimeLabel(value) {
    const time = Date.parse(value);
    if (!Number.isFinite(time)) return null;
    return `Last reviewed ${new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }).format(new Date(time))}`;
}
function designSystemReviewAgentTaskLabel(task) {
    switch(task.status){
        case 'queued':
            return 'Feedback saved. The agent will pick it up when the current run finishes.';
        case 'sent':
            if (!task.sentAt) return 'Sent to agent.';
            {
                const label = designSystemReviewTimeLabel(task.sentAt)?.replace('Last reviewed', '').trim();
                return label ? `Sent to agent ${label}.` : 'Sent to agent.';
            }
        case 'failed':
            return task.error ? `Agent task failed: ${task.error}` : 'Agent task failed.';
    }
    return 'Agent task status unknown.';
}
function designSystemSectionChangedAfterReview(names, fileByName, reviewEntry) {
    if (!reviewEntry || reviewEntry.decision !== 'needs-work') return false;
    const reviewedAt = Date.parse(reviewEntry.updatedAt);
    if (!Number.isFinite(reviewedAt)) return false;
    const trackedNames = reviewEntry.files && reviewEntry.files.length > 0 ? reviewEntry.files : names;
    return trackedNames.some((name)=>{
        const file = fileByName.get(name);
        return file ? file.mtime > reviewedAt : false;
    });
}
function DesignSystemInlinePreview({ projectId, file }) {
    _s2();
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, file.name);
    const [srcDoc, setSrcDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [srcDocReady, setSrcDocReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemInlinePreview.useEffect": ()=>{
            setSrcDoc(null);
            setSrcDocReady(false);
            if (file.kind !== 'html') return undefined;
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, file.name, {
                cache: 'no-store',
                cacheBustKey: Math.round(file.mtime)
            }).then({
                "DesignSystemInlinePreview.useEffect": async (html)=>{
                    if (cancelled) return;
                    if (!html) {
                        setSrcDocReady(true);
                        return;
                    }
                    const inlinedHtml = await inlineDesignSystemPreviewRelativeAssets(html, projectId, file.name);
                    if (cancelled) return;
                    setSrcDoc((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrcdoc"])(inlinedHtml, {
                        baseHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, baseDirForDesignSystemPreviewFile(file.name))
                    }));
                    setSrcDocReady(true);
                }
            }["DesignSystemInlinePreview.useEffect"]);
            return ({
                "DesignSystemInlinePreview.useEffect": ()=>{
                    cancelled = true;
                }
            })["DesignSystemInlinePreview.useEffect"];
        }
    }["DesignSystemInlinePreview.useEffect"], [
        file.kind,
        file.mtime,
        file.name,
        projectId
    ]);
    if (file.kind === 'html') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            title: file.name,
            src: srcDocReady && srcDoc ? undefined : url,
            srcDoc: srcDoc ?? undefined,
            sandbox: "allow-scripts allow-downloads"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
            lineNumber: 3899,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: `${url}?v=${Math.round(file.mtime)}`,
        alt: file.name
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
        lineNumber: 3907,
        columnNumber: 10
    }, this);
}
_s2(DesignSystemInlinePreview, "xT/DtCv1stc8H5tZxAeY0ZIYcy0=");
_c2 = DesignSystemInlinePreview;
async function inlineDesignSystemPreviewRelativeAssets(html, projectId, ownerFileName) {
    const replacements = [];
    const links = html.match(/<link\b[^>]*>/gi) ?? [];
    for (const tag of links){
        const rel = readDesignSystemPreviewHtmlAttr(tag, 'rel');
        const href = readDesignSystemPreviewHtmlAttr(tag, 'href');
        if (!rel || !/\bstylesheet\b/i.test(rel) || !href) continue;
        const stylesheetPath = resolveDesignSystemPreviewRelativePath(ownerFileName, href);
        if (!stylesheetPath) continue;
        replacements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, stylesheetPath, {
            cache: 'no-store'
        }).then((css)=>{
            if (css == null) return null;
            const safeCss = rewriteDesignSystemPreviewCssUrls(css, projectId, stylesheetPath).replace(/<\/style/gi, '<\\/style');
            return {
                from: tag,
                to: [
                    `<style data-od-inline-asset="${escapeDesignSystemPreviewAttr(href)}">`,
                    safeCss,
                    '</style>'
                ].join('\n')
            };
        }));
    }
    const scripts = html.match(/<script\b[^>]*\bsrc\s*=\s*["'][^"']+["'][^>]*>\s*<\/script>/gi) ?? [];
    for (const tag of scripts){
        const src = readDesignSystemPreviewHtmlAttr(tag, 'src');
        if (!src) continue;
        replacements.push(fetchDesignSystemPreviewRelativeText(projectId, ownerFileName, src).then((js)=>{
            if (js == null) return null;
            const open = tag.match(/^<script\b[^>]*>/i)?.[0] ?? '<script>';
            const attrs = open.replace(/^<script/i, '').replace(/>$/i, '').replace(/\ssrc\s*=\s*(['"])[\s\S]*?\1/i, '');
            return {
                from: tag,
                to: [
                    `<script${attrs} data-od-inline-asset="${escapeDesignSystemPreviewAttr(src)}">`,
                    js.replace(/<\/script/gi, '<\\/script'),
                    '</script>'
                ].join('\n')
            };
        }));
    }
    const resolved = (await Promise.all(replacements)).filter((replacement)=>replacement !== null);
    const withInlineAssets = resolved.reduce((next, replacement)=>next.replace(replacement.from, ()=>replacement.to), html);
    const withInlineCssAssets = rewriteDesignSystemPreviewInlineCssAssetUrls(withInlineAssets, projectId, ownerFileName);
    return rewriteDesignSystemPreviewHtmlAssetUrls(withInlineCssAssets, projectId, ownerFileName);
}
async function fetchDesignSystemPreviewRelativeText(projectId, ownerFileName, assetRef) {
    const filePath = resolveDesignSystemPreviewRelativePath(ownerFileName, assetRef);
    if (!filePath) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFileText"])(projectId, filePath, {
        cache: 'no-store'
    });
}
function resolveDesignSystemPreviewRelativePath(ownerFileName, assetRef) {
    return resolveDesignSystemPreviewAssetPath(ownerFileName, assetRef)?.filePath ?? null;
}
function resolveDesignSystemPreviewAssetPath(ownerFileName, assetRef) {
    const ref = assetRef.trim();
    if (/^(?:https?:|data:|blob:|mailto:|tel:|#)/i.test(ref)) return null;
    if (isDesignSystemPreviewAppRootRef(ref)) return null;
    try {
        const url = new URL(ref, `https://od.local/${baseDirForDesignSystemPreviewFile(ownerFileName)}`);
        if (url.origin !== 'https://od.local') return null;
        return {
            filePath: decodeURIComponent(url.pathname.replace(/^\/+/, '')),
            suffix: `${url.search}${url.hash}`
        };
    } catch  {
        return null;
    }
}
function isDesignSystemPreviewAppRootRef(ref) {
    if (!ref.startsWith('/') || ref.startsWith('//')) return false;
    const pathOnly = ref.split(/[?#]/, 1)[0]?.toLowerCase() ?? '';
    return pathOnly === '/api' || pathOnly.startsWith('/api/') || pathOnly === '/artifacts' || pathOnly.startsWith('/artifacts/') || pathOnly === '/frames' || pathOnly.startsWith('/frames/');
}
function rewriteDesignSystemPreviewCssUrls(css, projectId, stylesheetFileName) {
    return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (match, _quote, rawRef)=>{
        const ref = rawRef.trim();
        const assetPath = resolveDesignSystemPreviewAssetPath(stylesheetFileName, ref);
        if (!assetPath) return match;
        return `url("${escapeDesignSystemPreviewCssUrl((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, assetPath.filePath) + assetPath.suffix)}")`;
    });
}
function rewriteDesignSystemPreviewHtmlAssetUrls(html, projectId, ownerFileName) {
    const directAssetTags = new RegExp('(<(?:img|source|video|audio|track|embed|object|image|use)\\b[^>]*?\\s' + '(?:src|poster|data|href|xlink:href)\\s*=\\s*)([\'"])([\\s\\S]*?)\\2', 'gi');
    const withDirectAssets = html.replace(directAssetTags, (match, prefix, quote, rawRef)=>{
        const rewritten = rewriteDesignSystemPreviewHtmlAssetRef(rawRef, projectId, ownerFileName);
        if (rewritten === rawRef) return match;
        return `${prefix}${quote}${escapeDesignSystemPreviewAttr(rewritten)}${quote}`;
    });
    const srcsetAssetTags = new RegExp('(<(?:img|source)\\b[^>]*?\\ssrcset\\s*=\\s*)([\'"])([\\s\\S]*?)\\2', 'gi');
    return withDirectAssets.replace(srcsetAssetTags, (match, prefix, quote, rawSrcset)=>{
        const rewritten = rewriteDesignSystemPreviewSrcset(rawSrcset, projectId, ownerFileName);
        if (rewritten === rawSrcset) return match;
        return `${prefix}${quote}${escapeDesignSystemPreviewAttr(rewritten)}${quote}`;
    });
}
function rewriteDesignSystemPreviewInlineCssAssetUrls(html, projectId, ownerFileName) {
    const withStyleBlocks = html.replace(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi, (match, attrs, css)=>{
        const rewritten = rewriteDesignSystemPreviewCssUrls(css, projectId, ownerFileName);
        if (rewritten === css) return match;
        return `<style${attrs}>${rewritten}</style>`;
    });
    return withStyleBlocks.replace(/(\sstyle\s*=\s*)(['"])([\s\S]*?)\2/gi, (match, prefix, quote, css)=>{
        const rewritten = rewriteDesignSystemPreviewCssUrls(css, projectId, ownerFileName);
        if (rewritten === css) return match;
        return `${prefix}${quote}${escapeDesignSystemPreviewAttr(rewritten)}${quote}`;
    });
}
function rewriteDesignSystemPreviewHtmlAssetRef(ref, projectId, ownerFileName) {
    const assetPath = resolveDesignSystemPreviewAssetPath(ownerFileName, ref.trim());
    return assetPath ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, assetPath.filePath) + assetPath.suffix : ref;
}
function rewriteDesignSystemPreviewSrcset(srcset, projectId, ownerFileName) {
    if (/\bdata:/i.test(srcset)) return srcset;
    return srcset.split(',').map((candidate)=>{
        const match = candidate.trim().match(/^(\S+)(\s+.+)?$/);
        if (!match) return candidate;
        const rewritten = rewriteDesignSystemPreviewHtmlAssetRef(match[1] ?? '', projectId, ownerFileName);
        return `${rewritten}${match[2] ?? ''}`;
    }).join(', ');
}
function baseDirForDesignSystemPreviewFile(name) {
    const index = name.lastIndexOf('/');
    return index >= 0 ? name.slice(0, index + 1) : '';
}
function readDesignSystemPreviewHtmlAttr(tag, name) {
    const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(['"])([\\s\\S]*?)\\1`, 'i'));
    return match?.[2] ?? null;
}
function escapeDesignSystemPreviewAttr(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeDesignSystemPreviewCssUrl(value) {
    return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\a ');
}
function Tab({ label, meta, title, active, onActivate, onClose, closable = true, kind, iconNameOverride, liveArtifact, draggable = false, dragging = false, dragOverEdge, onDragStart, onDragOver, onDragLeave, onDrop, onDragEnd }) {
    _s3();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const iconName = iconNameOverride ?? kindIconName(kind);
    const tabTitle = title ?? (meta ? `${label} ${meta}` : label);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'ws-tab',
            'od-tooltip',
            meta ? 'has-meta' : '',
            kind === 'live-artifact' ? 'live-artifact-tab' : '',
            active ? 'active' : '',
            draggable ? 'draggable' : '',
            dragging ? 'dragging' : '',
            dragOverEdge ? `drag-over-${dragOverEdge}` : ''
        ].filter(Boolean).join(' '),
        onClick: onActivate,
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onActivate();
            }
        },
        role: "tab",
        "aria-selected": active,
        tabIndex: 0,
        title: tabTitle,
        "data-tooltip": tabTitle,
        "data-tooltip-placement": "bottom",
        draggable: draggable,
        onDragStart: draggable ? onDragStart : undefined,
        onDragOver: draggable ? onDragOver : undefined,
        onDragLeave: draggable ? onDragLeave : undefined,
        onDrop: draggable ? onDrop : undefined,
        onDragEnd: draggable ? onDragEnd : undefined,
        children: [
            iconName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tab-icon",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: iconName,
                    size: 13
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 4187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 4186,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ws-tab-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ws-tab-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 4191,
                        columnNumber: 9
                    }, this),
                    meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ws-tab-meta",
                        children: meta
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                        lineNumber: 4192,
                        columnNumber: 17
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 4190,
                columnNumber: 7
            }, this),
            liveArtifact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LiveArtifactBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveArtifactBadges"], {
                compact: true,
                className: "ws-live-artifact-badges",
                status: liveArtifact.status,
                refreshStatus: liveArtifact.refreshStatus
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 4195,
                columnNumber: 9
            }, this) : null,
            closable && onClose ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "ws-tab-close od-tooltip",
                onClick: (e)=>{
                    e.stopPropagation();
                    onClose();
                },
                title: t('workspace.closeTab'),
                "data-tooltip": t('workspace.closeTab'),
                "data-tooltip-placement": "bottom",
                "aria-label": t('workspace.closeTab'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "close",
                    size: 11
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                    lineNumber: 4215,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
                lineNumber: 4203,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/FileWorkspace.tsx",
        lineNumber: 4154,
        columnNumber: 5
    }, this);
}
_s3(Tab, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c3 = Tab;
function tabDropEdgeFromEvent(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX > rect.left + rect.width / 2 ? 'after' : 'before';
}
function arraysEqual(left, right) {
    if (left.length !== right.length) return false;
    return left.every((value, index)=>value === right[index]);
}
function scrollWorkspaceTabsWithWheel(tabBar, event) {
    if (event.ctrlKey) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    if (tabBar.scrollWidth <= tabBar.clientWidth) return;
    const before = tabBar.scrollLeft;
    tabBar.scrollLeft += wheelDeltaToPixels(event.deltaY, event.deltaMode);
    if (tabBar.scrollLeft === before) return;
    event.preventDefault();
}
function wheelDeltaToPixels(delta, deltaMode) {
    const WHEEL_DELTA_LINE = 1;
    const WHEEL_DELTA_PAGE = 2;
    if (deltaMode === WHEEL_DELTA_LINE) return delta * 16;
    if (deltaMode === WHEEL_DELTA_PAGE) return delta * 160;
    return delta;
}
function kindIconName(kind) {
    if (kind === 'browser') return 'globe';
    if (kind === 'live-artifact') return 'file-code';
    if (kind === 'html') return 'file-code';
    if (kind === 'image') return 'image';
    if (kind === 'sketch') return 'pencil';
    if (kind === 'code') return 'file-code';
    if (kind === 'text') return 'file';
    return 'file';
}
function isBrowserTabId(tabId) {
    return tabId.startsWith(BROWSER_TAB_PREFIX);
}
function browserTabsFromState(value) {
    if (!Array.isArray(value)) return [];
    const seen = new Set();
    const tabs = [];
    for (const item of value){
        if (!item || typeof item.id !== 'string' || seen.has(item.id)) continue;
        if (!item.id.startsWith(BROWSER_TAB_PREFIX)) continue;
        const label = item.label?.trim() || 'Browser';
        const tab = {
            id: item.id,
            label
        };
        if (item.insertAfter === null) tab.insertAfter = null;
        else if (typeof item.insertAfter === 'string') tab.insertAfter = item.insertAfter;
        if (item.title?.trim()) tab.title = item.title.trim();
        if (item.url?.trim()) tab.url = item.url.trim();
        if (item.iconUrl?.trim()) tab.iconUrl = item.iconUrl.trim();
        seen.add(item.id);
        tabs.push(tab);
    }
    return tabs;
}
function maxBrowserTabSequence(tabs) {
    let max = 0;
    for (const tab of tabs){
        const suffix = tab.id.slice(BROWSER_TAB_PREFIX.length);
        const value = Number.parseInt(suffix, 10);
        if (Number.isFinite(value)) max = Math.max(max, value);
    }
    return max;
}
function lastWorkspaceTabId(tabs) {
    return tabs[tabs.length - 1]?.id ?? null;
}
function reanchorBrowserTabsToCurrentOrder(orderedTabs, browserTabs) {
    if (browserTabs.length === 0) return browserTabs;
    const anchorByBrowserId = new Map();
    let previousId = DESIGN_FILES_TAB;
    for (const entry of orderedTabs){
        if (entry.kind === 'browser') {
            anchorByBrowserId.set(entry.browserTab.id, previousId);
            previousId = entry.browserTab.id;
        } else {
            previousId = entry.name;
        }
    }
    let changed = false;
    const nextTabs = browserTabs.map((tab)=>{
        if (!anchorByBrowserId.has(tab.id)) return tab;
        const nextInsertAfter = anchorByBrowserId.get(tab.id) ?? null;
        const currentInsertAfter = tab.insertAfter ?? null;
        if (currentInsertAfter === nextInsertAfter) return tab;
        changed = true;
        return {
            ...tab,
            insertAfter: nextInsertAfter
        };
    });
    return changed ? nextTabs : browserTabs;
}
function orderWorkspaceTabs(fileTabNames, browserTabs) {
    const ordered = fileTabNames.map((name)=>({
            id: name,
            kind: 'file',
            name
        }));
    let rootAnchorInsertIndex = 0;
    for (const browserTab of browserTabs){
        const entry = {
            id: browserTab.id,
            kind: 'browser',
            browserTab
        };
        const anchor = browserTab.insertAfter;
        if (!anchor || anchor === DESIGN_FILES_TAB || anchor === DESIGN_SYSTEM_TAB) {
            ordered.splice(rootAnchorInsertIndex, 0, entry);
            rootAnchorInsertIndex += 1;
            continue;
        }
        const anchorIndex = ordered.findIndex((candidate)=>candidate.id === anchor);
        if (anchorIndex === -1) {
            ordered.push(entry);
            continue;
        }
        ordered.splice(anchorIndex + 1, 0, entry);
    }
    return ordered;
}
function isSketchName(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$sketch$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSketchJsonFileName"])(name);
}
function sameFileName(a, b) {
    return a === b || a.toLocaleLowerCase() === b.toLocaleLowerCase();
}
function isLiveArtifactImplementationPath(name) {
    if (name === '.live-artifacts') return true;
    if (!name.startsWith('.live-artifacts/')) return false;
    // Live artifacts are exposed through virtual tree nodes only. In
    // particular, keep implementation-only snapshot and tile files hidden even
    // if a generic project-files endpoint returns them in older daemon builds.
    return true;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FileWorkspace");
__turbopack_context__.k.register(_c1, "DesignSystemProjectPanel");
__turbopack_context__.k.register(_c2, "DesignSystemInlinePreview");
__turbopack_context__.k.register(_c3, "Tab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_FileWorkspace_tsx_0yk8ez7._.js.map