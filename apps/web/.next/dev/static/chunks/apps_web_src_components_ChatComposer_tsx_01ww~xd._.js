(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/ChatComposer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatComposer",
    ()=>ChatComposer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/upload-tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$WorkingDirPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/WorkingDirPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/mcp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SessionModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SessionModeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ComposerPlusMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ComposerPlusMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/design-toolbox.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ComposerPluginPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ComposerPluginPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2d$detail$2d$position$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/composer-detail-position.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginDetailsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/pets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/inlineMentions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2f$LexicalComposerInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/composer/LexicalComposerInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2f$CaretFloatingLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/composer/CaretFloatingLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewDrawOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PreviewDrawOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemSwitchPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemSwitchPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/connectors-state.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
'use client';
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
const USER_PLUGIN_SOURCE_KINDS = new Set([
    'user',
    'project',
    'marketplace',
    'github',
    'url',
    'local'
]);
const ChatComposer = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function ChatComposer({ projectId, projectFiles, activeProjectFileName = null, streaming, sessionMode = 'design', onSessionModeChange, sendDisabled = false, initialDraft, draftStorageKey, onEnsureProject, commentAttachments = [], onRemoveCommentAttachment, skills = [], onSend, onStop, onOpenMcpSettings, onBrowsePlugins, onOpenConnectors, petConfig, onAdoptPet, onTogglePet, onOpenPetSettings, researchAvailable = false, projectMetadata, onProjectMetadataChange, activeWorkspaceContext = null, workspaceContexts = [], byokApiProtocol, byokImageModel, onChangeByokImageModel, byokVideoModel, onChangeByokVideoModel, byokSpeechModel, onChangeByokSpeechModel, byokSpeechVoice, onChangeByokSpeechVoice, currentSkillId = null, onProjectSkillChange, pinnedPluginId = null, footerAccessory, leadingAccessory, designSystemPicker, currentDesignSystemId = null, onActiveDesignSystemChange, onShowToast }, ref) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const activeFileContext = projectMetadata?.importedFrom === 'folder' && activeProjectFileName ? activeProjectFileName : null;
    const activeFileDisplayName = activeFileContext ? lastPathSegment(activeFileContext) : null;
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatComposer.ChatComposer.useState": ()=>initialDraft ?? loadComposerDraft(draftStorageKey) ?? ""
    }["ChatComposer.ChatComposer.useState"]);
    const composerRootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Synchronous mirror of `draft`. Event handlers that mutate the draft off
    // a captured render closure (notably the annotation listener, where two
    // uploads can resolve concurrently) read/write this ref so their edits
    // compose instead of clobbering one another. Kept in lockstep with `draft`
    // by handleEditorChange (the editor is the single source for typing) and by
    // the programmatic-set paths below.
    const draftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(draft);
    // chat_panel page_view fires from ProjectView (which outlives
    // conversation switches) so the event measures real chat-panel
    // entries rather than ChatComposer remounts. See PR #2285 review
    // 2026-05-20 04:08 for the rationale.
    const [staged, setStaged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const nextAttachmentOrderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [stagedVisualComments, setStagedVisualComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const streamingAnnotationSendPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Remembers the entry_from that the deferred streaming send must carry once
    // it flushes. The Mark draw-overlay tags 'mark' synchronously; without this
    // the flush effect would report the run as the default composer entry.
    const streamingAnnotationSendEntryFromRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [streamingAnnotationSendPending, setStreamingAnnotationSendPendingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Skills the user has @-mentioned for this turn. We dedupe on id and
    // strip the chip when the user removes the corresponding `@<skill>`
    // token from the draft, keeping draft and chips in sync.
    const [stagedSkills, setStagedSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Legacy standalone design-toolbox popover. The next-step card now renders
    // its own cascading skill menu, so nothing opens this anymore; kept compiling
    // behind `openDesignToolbox` until the panel subsystem is removed wholesale.
    const [designToolboxOpen, setDesignToolboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stagedMcpServers, setStagedMcpServers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stagedConnectors, setStagedConnectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stagedWorkspaceContexts, setStagedWorkspaceContexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dismissedWorkspaceContextId, setDismissedWorkspaceContextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeWorkspaceContextId = activeWorkspaceContext?.id ?? null;
    const previousWorkspaceContextIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeWorkspaceContextId);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lexical owns the caret, so the mention/slash trigger state only carries
    // the typed query — no cursor offset.
    const [mention, setMention] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Active-row index for the @-popover's visible union (files → tabs →
    // plugins → skills → mcp → connectors). Resets to 0 whenever the query
    // identity or tab changes; drives the visual highlight + Enter/Tab target.
    const [mentionIndex, setMentionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mentionTab, setMentionTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // Viewport caret box the floating popover anchors against. Sampled by the
    // editor at trigger-detection time; null when no trigger is live.
    const [caretRect, setCaretRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Slash-command popover state — when the draft starts with `/` and the
    // cursor is still inside that token (no space committed yet), we show a
    // small palette of supported commands. The query is the text after `/`
    // so the user can type-to-filter.
    const [slash, setSlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slashIndex, setSlashIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // External MCP servers configured by the user. Fetched lazily on mount;
    // shown in the slash-command palette so `/mcp <id>` inserts a hint into
    // the prompt that nudges the model to use that server's tools.
    const [mcpServers, setMcpServers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mcpTemplates, setMcpTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectors, setConnectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Installed plugins, fetched lazily for the tools-menu Plugins tab and
    // the @-mention picker. Both surfaces share the same list so applying
    // a plugin from either path lands on the same project context.
    const [installedPlugins, setInstalledPlugins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Detail modal — opened from a context chip click (kind === 'plugin')
    // or from the tools-menu "Details" affordance.
    const [detailsRecord, setDetailsRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeAppliedPlugin, setActiveAppliedPlugin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pluginsSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inlineBackedPluginRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Consolidated "tools" popover — a single dropdown anchored to the
    // leading sliders icon that hosts project context, MCP, Import actions,
    // and a shortcut to open the full Settings dialog. Replaces the previous
    // row of three standalone buttons (which overflowed in narrow chats).
    // The "+" menu (ComposerPlusMenu) owns its own open / submenu state.
    // Defer the (large) plugin / MCP / connector fetches until the composer is
    // actually used — first focus, the tools popover opening, an @/slash
    // trigger, or a pre-seeded draft. An untouched empty composer (e.g. a home
    // surface the user bounces off, or a background chat) never pays for the
    // full plugin-manifest list. Latches once true and never resets.
    const [composerEngaged, setComposerEngaged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatComposer.ChatComposer.useState": ()=>(draft ?? '').trim().length > 0
    }["ChatComposer.ChatComposer.useState"]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The Lexical editor handle — drives text/mention/clear/focus from the
    // host. Replaces the old textareaRef + manual selection plumbing. IME
    // composition guarding now lives inside the editor's command handlers.
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Always points at the latest `applyDesignToolboxAction` closure so the
    // imperative handle (whose deps array doesn't track `draft`/`t`) never seeds
    // the composer from a stale draft when the next-step card fires an action.
    const applyDesignToolboxActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "ChatComposer.ChatComposer.useRef[applyDesignToolboxActionRef]": ()=>{}
    }["ChatComposer.ChatComposer.useRef[applyDesignToolboxActionRef]"]);
    // Same latest-closure trick for picking a skill by id from the next-step card.
    const applyDesignToolboxSkillByIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "ChatComposer.ChatComposer.useRef[applyDesignToolboxSkillByIdRef]": ()=>{}
    }["ChatComposer.ChatComposer.useRef[applyDesignToolboxSkillByIdRef]"]);
    // Best-effort entry_from carried from a guided Next-step action: the card
    // only seeds the composer, so the tag is stashed here and consumed by the
    // next `sendComposedTurn` (then cleared). An explicit meta.entryFrom always
    // wins over this pending value.
    const pendingEntryFromRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const petEnabled = Boolean(onAdoptPet && onTogglePet);
    const linkedDirs = projectMetadata?.linkedDirs ?? [];
    // The project's working directory: the local folder the agent can read
    // (via `linkedDirs` → `--add-dir`). Shown in the WorkingDirPicker below
    // the input, mirroring Home. We treat it as a single primary folder.
    const workingDir = linkedDirs[0] ?? null;
    const [recentDirs, setRecentDirs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRecentLinkedDirs"])().then({
                "ChatComposer.ChatComposer.useEffect": (dirs)=>{
                    if (!cancelled) setRecentDirs(dirs);
                }
            }["ChatComposer.ChatComposer.useEffect"]);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], []);
    const rememberRecentDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatComposer.ChatComposer.useCallback[rememberRecentDir]": async (dir)=>{
            setRecentDirs({
                "ChatComposer.ChatComposer.useCallback[rememberRecentDir]": (prev)=>[
                        dir,
                        ...prev.filter({
                            "ChatComposer.ChatComposer.useCallback[rememberRecentDir]": (d)=>d !== dir
                        }["ChatComposer.ChatComposer.useCallback[rememberRecentDir]"])
                    ].slice(0, 5)
            }["ChatComposer.ChatComposer.useCallback[rememberRecentDir]"]);
            const persisted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushRecentLinkedDir"])(dir);
            setRecentDirs(persisted);
        }
    }["ChatComposer.ChatComposer.useCallback[rememberRecentDir]"], []);
    // Live-check whether the selected working directory still exists, so a
    // folder deleted from disk turns the picker red without a page reload.
    // Re-checked when the dir changes, when the window/tab regains focus
    // (e.g. after deleting it in Finder), and when the picker is opened.
    const [workingDirMissing, setWorkingDirMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkWorkingDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatComposer.ChatComposer.useCallback[checkWorkingDir]": async ()=>{
            if (!workingDir) {
                setWorkingDirMissing(false);
                return;
            }
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dirExists"])(workingDir);
            setWorkingDirMissing(!ok);
        }
    }["ChatComposer.ChatComposer.useCallback[checkWorkingDir]"], [
        workingDir
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            void checkWorkingDir();
            const onFocus = {
                "ChatComposer.ChatComposer.useEffect.onFocus": ()=>void checkWorkingDir()
            }["ChatComposer.ChatComposer.useEffect.onFocus"];
            const onVisible = {
                "ChatComposer.ChatComposer.useEffect.onVisible": ()=>{
                    if (document.visibilityState === 'visible') void checkWorkingDir();
                }
            }["ChatComposer.ChatComposer.useEffect.onVisible"];
            window.addEventListener('focus', onFocus);
            document.addEventListener('visibilitychange', onVisible);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    window.removeEventListener('focus', onFocus);
                    document.removeEventListener('visibilitychange', onVisible);
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        checkWorkingDir
    ]);
    const visibleWorkspaceContext = activeWorkspaceContext && activeWorkspaceContext.id !== dismissedWorkspaceContextId ? activeWorkspaceContext : null;
    const selectedWorkspaceContexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[selectedWorkspaceContexts]": ()=>{
            const out = [];
            const seen = new Set();
            const push = {
                "ChatComposer.ChatComposer.useMemo[selectedWorkspaceContexts].push": (item)=>{
                    if (!item) return;
                    const key = `${item.kind}:${item.id}`;
                    if (seen.has(key)) return;
                    seen.add(key);
                    out.push(item);
                }
            }["ChatComposer.ChatComposer.useMemo[selectedWorkspaceContexts].push"];
            push(visibleWorkspaceContext);
            for (const item of stagedWorkspaceContexts)push(item);
            return out;
        }
    }["ChatComposer.ChatComposer.useMemo[selectedWorkspaceContexts]"], [
        stagedWorkspaceContexts,
        visibleWorkspaceContext
    ]);
    // initialDraft is only honored on the first non-empty value the parent
    // hands us. After we seed once, the composer is fully under user control
    // — re-renders that pass the same prompt back must not reseed. If the
    // initial useState above already consumed a non-empty initialDraft we
    // mark it seeded immediately, so an early clear by the user (typing or
    // backspace before the parent stops passing initialDraft) does not get
    // overwritten by the effect.
    const seededRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Boolean(initialDraft));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (seededRef.current) return;
            if (initialDraft && initialDraft !== draft) {
                setDraft(initialDraft);
                seededRef.current = true;
            } else if (initialDraft === undefined) {
                seededRef.current = true;
            }
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        initialDraft,
        draft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            saveComposerDraft(draftStorageKey, draft);
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        draftStorageKey,
        draft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (previousWorkspaceContextIdRef.current === activeWorkspaceContextId) return;
            previousWorkspaceContextIdRef.current = activeWorkspaceContextId;
            setDismissedWorkspaceContextId(null);
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        activeWorkspaceContextId
    ]);
    // Latch `composerEngaged` true on the first real interaction so the
    // deferred fetches below run exactly once, when they are actually needed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (composerEngaged) return;
            if (draft.trim().length > 0 || mention || slash) {
                setComposerEngaged(true);
            }
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        composerEngaged,
        draft,
        mention,
        slash
    ]);
    // Lazy-fetch the user's external MCP servers list (once engaged) so the
    // `/mcp …` slash palette and the composer's MCP button popover have
    // something to render. We deliberately do not reactively re-fetch when
    // the user toggles servers from Settings — the dialog refreshes itself,
    // and the chat composer rehydrates next time the user re-opens it. A
    // background poll would be cheap but unnecessary for the typical
    // edit-once-then-chat workflow.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (!composerEngaged) return;
            let cancelled = false;
            void ({
                "ChatComposer.ChatComposer.useEffect": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$mcp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMcpServers"])();
                    if (cancelled || !data) return;
                    setMcpServers(data.servers);
                    setMcpTemplates(data.templates);
                }
            })["ChatComposer.ChatComposer.useEffect"]();
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        composerEngaged
    ]);
    // Skills now come from the parent (App.tsx → ProjectView → ChatPane → ChatComposer)
    // pre-filtered by enabled/disabled state. We no longer fetch a fresh list
    // here to avoid showing skills the user has disabled via Settings.
    // Lazy-fetch installed plugins once on mount; the tools-menu Plugins
    // tab and the @-mention picker both consume this list.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (!projectId || !composerEngaged) return;
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlugins"])().then({
                "ChatComposer.ChatComposer.useEffect": (rows)=>{
                    if (cancelled) return;
                    setInstalledPlugins(rows);
                }
            }["ChatComposer.ChatComposer.useEffect"]);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        projectId,
        composerEngaged
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (!composerEngaged) return;
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorCatalogSnapshot"])().then({
                "ChatComposer.ChatComposer.useEffect": (rows)=>{
                    if (cancelled) return;
                    setConnectors(rows.filter({
                        "ChatComposer.ChatComposer.useEffect": (connector)=>connector.status === 'connected'
                    }["ChatComposer.ChatComposer.useEffect"]));
                }
            }["ChatComposer.ChatComposer.useEffect"]);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        composerEngaged
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (!composerEngaged) return;
            let cancelled = false;
            async function refreshConnectors() {
                const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorCatalogSnapshot"])({
                    refreshDiscovery: true
                });
                if (cancelled) return;
                setConnectors(rows.filter({
                    "ChatComposer.ChatComposer.useEffect.refreshConnectors": (connector)=>connector.status === 'connected'
                }["ChatComposer.ChatComposer.useEffect.refreshConnectors"]));
            }
            const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$connectors$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForConnectorsChanged"])({
                "ChatComposer.ChatComposer.useEffect.stopListening": ()=>void refreshConnectors()
            }["ChatComposer.ChatComposer.useEffect.stopListening"]);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>{
                    cancelled = true;
                    stopListening();
                }
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        composerEngaged
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            const inlinePlugin = inlineBackedPluginRef.current;
            if (!activeAppliedPlugin || inlinePlugin?.id !== activeAppliedPlugin.pluginId) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(draft, inlinePlugin.label)) return;
            inlineBackedPluginRef.current = null;
            pluginsSectionRef.current?.clear();
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        activeAppliedPlugin,
        draft
    ]);
    // Composer-side plugin list: hide bundled atoms (pipeline-only). Keep
    // the full installed list available even when the project was created
    // from a pinned plugin, so users can switch or layer different plugin
    // context from the tools menu and @ picker.
    const pluginsForComposer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[pluginsForComposer]": ()=>{
            const allowedKinds = new Set([
                'skill',
                'scenario',
                'bundle'
            ]);
            return installedPlugins.filter({
                "ChatComposer.ChatComposer.useMemo[pluginsForComposer]": (p)=>{
                    const k = p.manifest?.od?.kind;
                    return !k || allowedKinds.has(k);
                }
            }["ChatComposer.ChatComposer.useMemo[pluginsForComposer]"]);
        }
    }["ChatComposer.ChatComposer.useMemo[pluginsForComposer]"], [
        installedPlugins
    ]);
    const enabledMcpServers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[enabledMcpServers]": ()=>mcpServers.filter({
                "ChatComposer.ChatComposer.useMemo[enabledMcpServers]": (s)=>s.enabled
            }["ChatComposer.ChatComposer.useMemo[enabledMcpServers]"])
    }["ChatComposer.ChatComposer.useMemo[enabledMcpServers]"], [
        mcpServers
    ]);
    function inlineBackedPluginFromRestoredDraft(text, appliedPlugin, meta) {
        if (!appliedPlugin) return null;
        const restoredInline = meta?.inlineAppliedPlugin;
        if (restoredInline?.pluginId !== appliedPlugin.pluginId) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(text, restoredInline.label) ? {
            id: appliedPlugin.pluginId,
            label: restoredInline.label
        } : null;
    }
    const designToolboxResourceIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[designToolboxResourceIndex]": ()=>({
                skills,
                plugins: pluginsForComposer,
                mcpServers: enabledMcpServers,
                mcpTemplates,
                connectors,
                projectFiles
            })
    }["ChatComposer.ChatComposer.useMemo[designToolboxResourceIndex]"], [
        connectors,
        enabledMcpServers,
        mcpTemplates,
        pluginsForComposer,
        projectFiles,
        skills
    ]);
    const composerMentionEntities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[composerMentionEntities]": ()=>buildComposerMentionEntities({
                connectors,
                files: projectFiles,
                mcpServers: enabledMcpServers,
                plugins: pluginsForComposer,
                skills,
                staged,
                workspaceContexts
            })
    }["ChatComposer.ChatComposer.useMemo[composerMentionEntities]"], [
        connectors,
        enabledMcpServers,
        pluginsForComposer,
        projectFiles,
        skills,
        staged,
        workspaceContexts
    ]);
    // Resolve which tabs to surface in the consolidated tools popover.
    // Plugins is always visible while a project is active so users can
    // apply context without leaving the composer. MCP shows when wired by
    // Catalog of supported slash commands. Each entry shows up in the
    // popover when the user types `/` in the composer. The `insert`
    // value is what we drop into the draft when the user picks the
    // entry — usually the canonical command form with a trailing space
    // ready for an argument.
    const slashCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[slashCommands]": ()=>{
            const list = [];
            // External MCP servers — `/mcp` opens settings, `/mcp <id>` inserts a
            // prompt-side hint nudging the model to use that server's tools. The
            // hint flows through to the agent verbatim; the daemon already wired
            // the MCP config into the agent's launch so the tools are callable.
            if (onOpenMcpSettings) {
                list.push({
                    id: 'mcp',
                    label: '/mcp',
                    insert: '/mcp ',
                    descKey: 'pet.slashPet',
                    icon: 'sliders',
                    argHint: 'open settings · <server-id> to insert hint'
                });
            }
            for (const s of enabledMcpServers){
                list.push({
                    id: `mcp-${s.id}`,
                    label: `/mcp ${s.id}`,
                    insert: `Use the \`${s.id}\` MCP server tools. `,
                    descKey: 'pet.slashPet',
                    icon: 'sparkles',
                    argHint: s.label || s.transport
                });
            }
            if (researchAvailable) {
                list.push({
                    id: 'search',
                    label: '/search',
                    insert: '/search ',
                    descKey: 'pet.slashSearch',
                    icon: 'sparkles',
                    argHint: t('pet.slashSearchArg')
                });
            }
            return list;
        }
    }["ChatComposer.ChatComposer.useMemo[slashCommands]"], [
        researchAvailable,
        t,
        enabledMcpServers,
        onOpenMcpSettings
    ]);
    const filteredSlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredSlash]": ()=>{
            if (!slash) return [];
            const q = slash.q.toLowerCase();
            if (!q) return slashCommands;
            return slashCommands.filter({
                "ChatComposer.ChatComposer.useMemo[filteredSlash]": (c)=>c.label.toLowerCase().includes(q)
            }["ChatComposer.ChatComposer.useMemo[filteredSlash]"]);
        }
    }["ChatComposer.ChatComposer.useMemo[filteredSlash]"], [
        slash,
        slashCommands
    ]);
    function pickSlash(cmd) {
        if (!slash) return;
        // Replace the in-flight `/<query>` trigger with the picked command's
        // canonical insertion text. Lexical owns the caret afterwards.
        editorRef.current?.replaceActiveTrigger(cmd.insert);
        editorRef.current?.focus();
        setSlash(null);
    }
    // Expand a `/hatch <concept>` draft into the canonical hatch-pet
    // skill prompt before sending. Returns null when the draft is not a
    // hatch command so the caller can fall through to the regular
    // submit path.
    function expandHatchCommand(input) {
        const m = /^\/hatch(?:\s+([\s\S]*))?$/i.exec(input.trim());
        if (!m) return null;
        const concept = m[1]?.trim() ?? '';
        const intro = concept ? `Hatch a Codex-compatible animated pet for me. Concept: ${concept}.` : 'Hatch a Codex-compatible animated pet for me.';
        return [
            intro,
            '',
            'Use the @hatch-pet skill end-to-end:',
            '1. Generate the base look with $imagegen.',
            '2. Generate every row strip (idle, running-right, waving, jumping, failed, waiting, running, review).',
            '3. Mirror running-left from running-right only when the design is symmetric.',
            '4. Run the deterministic scripts (extract / compose / validate / contact-sheet / videos).',
            '5. Package the result into ${CODEX_HOME:-$HOME/.codex}/pets/<pet-name>/ with pet.json + spritesheet.webp.',
            '',
            'When the spritesheet is saved, tell me the absolute path and the pet folder name. I will adopt it from Settings → Pets → Recently hatched.'
        ].join('\n');
    }
    // `/mcp` (no arg) opens settings on the External MCP tab — pure UX hook,
    // never sent to the agent. `/mcp <id>` is intentionally NOT intercepted
    // here: the slash palette already replaces it with a natural-language
    // hint sentence ("Use the `<id>` MCP server tools."), and the user is
    // expected to keep typing the rest of the prompt before sending.
    function tryHandleMcpSlash() {
        if (!onOpenMcpSettings) return false;
        const trimmed = draft.trim();
        if (!/^\/mcp\s*$/i.test(trimmed)) return false;
        onOpenMcpSettings();
        setDraft('');
        editorRef.current?.clear();
        return true;
    }
    function expandSearchCommand(input) {
        const m = /^\/search(?:\s+([\s\S]*))?$/i.exec(input.trim());
        if (!m) return null;
        const query = m[1]?.trim() ?? '';
        if (!query) return null;
        return {
            query,
            prompt: [
                `Search for: ${query}`,
                '',
                'Before answering, your first tool action must be the OD research command for your shell.',
                'POSIX: "$OD_NODE_BIN" "$OD_BIN" research search --query "<search query>" --max-sources 5',
                'PowerShell: & $env:OD_NODE_BIN $env:OD_BIN research search --query "<search query>" --max-sources 5',
                'cmd.exe: "%OD_NODE_BIN%" "%OD_BIN%" research search --query "<search query>" --max-sources 5',
                'Use the canonical query below as the exact search query, with safe quoting for your shell.',
                '',
                'Canonical query:',
                '',
                '```text',
                query.replace(/```/g, '`\u200b`\u200b`'),
                '```',
                'If the OD command fails because Tavily is not configured or unavailable, report that error, then use your own search capability as fallback and label the fallback clearly.',
                'After the command returns JSON or fallback search results, write a reusable Markdown report into Design Files at `research/<safe-query-slug>.md` or another fresh project-relative path.',
                'The report must include the query, fetched time, short summary, key findings, source list with [1], [2] citations, and a note that source content is external untrusted evidence.',
                'Then summarize the findings with citations by source index and mention the Markdown report path.'
            ].join('\n')
        };
    }
    // Parse a `/pet [arg]` slash command out of the draft. Recognized
    // forms: `/pet` (toggle wake/tuck), `/pet wake`, `/pet tuck`,
    // `/pet adopt` (open settings), or `/pet <id>` to adopt a built-in
    // by id. The slash is stripped from the draft on a successful match
    // so the user does not accidentally send the command to the agent.
    function tryHandlePetSlash() {
        if (!petEnabled) return false;
        const trimmed = draft.trim();
        const match = /^\/pet(?:\s+(\S+))?$/i.exec(trimmed);
        if (!match) return false;
        const arg = match[1]?.toLowerCase();
        if (!arg || arg === 'toggle') {
            onTogglePet?.();
        } else if (arg === 'wake' || arg === 'show') {
            if (petConfig?.adopted) {
                if (!petConfig.enabled) onTogglePet?.();
            } else {
                onOpenPetSettings?.();
            }
        } else if (arg === 'tuck' || arg === 'hide') {
            if (petConfig?.enabled) onTogglePet?.();
        } else if (arg === 'adopt' || arg === 'settings' || arg === 'change') {
            onOpenPetSettings?.();
        } else if (arg === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"]) {
            onAdoptPet?.(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"]);
        } else {
            const pet = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUILT_IN_PETS"].find((p)=>p.id === arg);
            if (pet) {
                onAdoptPet?.(pet.id);
            } else {
                return false;
            }
        }
        setDraft('');
        editorRef.current?.clear();
        return true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ChatComposer.ChatComposer.useImperativeHandle": ()=>({
                setDraft: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": (text)=>{
                        setDraft(text);
                        editorRef.current?.setText(text);
                        editorRef.current?.focus();
                        seededRef.current = true;
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"],
                restoreDraft: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": ({ text, attachments = [], commentAttachments = [], meta })=>{
                        setDraft(text);
                        const orderedAttachments = normalizeChatAttachmentOrders(attachments);
                        setStaged(orderedAttachments);
                        nextAttachmentOrderRef.current = nextChatAttachmentOrder(orderedAttachments);
                        setStagedVisualComments(commentAttachments);
                        // Rebuild staged context from the queued turn's meta so the
                        // plugin / connector / skill / MCP / workspace-tab bindings (and their chips) come
                        // back for editing instead of being dropped. Ids resolve against the
                        // currently-loaded lists; ids that no longer resolve (uninstalled
                        // since queueing) are skipped rather than crashing. The applied
                        // plugin is restored from its full snapshot, so it needs no lookup.
                        const ctx = meta?.context;
                        setStagedSkills(ctx?.skillIds ? ctx.skillIds.map({
                            "ChatComposer.ChatComposer.useImperativeHandle": (id)=>skills.find({
                                    "ChatComposer.ChatComposer.useImperativeHandle": (s)=>s.id === id
                                }["ChatComposer.ChatComposer.useImperativeHandle"])
                        }["ChatComposer.ChatComposer.useImperativeHandle"]).filter({
                            "ChatComposer.ChatComposer.useImperativeHandle": (s)=>Boolean(s)
                        }["ChatComposer.ChatComposer.useImperativeHandle"]) : []);
                        setStagedMcpServers(ctx?.mcpServerIds ? ctx.mcpServerIds.map({
                            "ChatComposer.ChatComposer.useImperativeHandle": (id)=>mcpServers.find({
                                    "ChatComposer.ChatComposer.useImperativeHandle": (s)=>s.id === id
                                }["ChatComposer.ChatComposer.useImperativeHandle"])
                        }["ChatComposer.ChatComposer.useImperativeHandle"]).filter({
                            "ChatComposer.ChatComposer.useImperativeHandle": (s)=>Boolean(s)
                        }["ChatComposer.ChatComposer.useImperativeHandle"]) : []);
                        setStagedConnectors(ctx?.connectorIds ? ctx.connectorIds.map({
                            "ChatComposer.ChatComposer.useImperativeHandle": (id)=>connectors.find({
                                    "ChatComposer.ChatComposer.useImperativeHandle": (c)=>c.id === id
                                }["ChatComposer.ChatComposer.useImperativeHandle"])
                        }["ChatComposer.ChatComposer.useImperativeHandle"]).filter({
                            "ChatComposer.ChatComposer.useImperativeHandle": (c)=>Boolean(c)
                        }["ChatComposer.ChatComposer.useImperativeHandle"]) : []);
                        setStagedWorkspaceContexts(ctx?.workspaceItems ?? []);
                        const restoredAppliedPlugin = meta?.appliedPluginSnapshot ?? null;
                        setActiveAppliedPlugin(restoredAppliedPlugin);
                        inlineBackedPluginRef.current = inlineBackedPluginFromRestoredDraft(text, restoredAppliedPlugin, meta);
                        setUploadError(null);
                        setMention(null);
                        setSlash(null);
                        editorRef.current?.setText(text);
                        editorRef.current?.focus();
                        seededRef.current = true;
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"],
                focus: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": ()=>{
                        editorRef.current?.focus();
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"],
                applyDesignToolboxAction: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": (id)=>{
                        const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDesignToolboxAction"])(id);
                        if (!action) return;
                        pendingEntryFromRef.current = 'next_step';
                        applyDesignToolboxActionRef.current(action);
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"],
                applyDesignToolboxSkill: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": (skillId)=>{
                        pendingEntryFromRef.current = 'next_step';
                        applyDesignToolboxSkillByIdRef.current(skillId);
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"],
                openDesignToolbox: ({
                    "ChatComposer.ChatComposer.useImperativeHandle": ()=>{
                        setComposerEngaged(true);
                        setDesignToolboxOpen(true);
                    }
                })["ChatComposer.ChatComposer.useImperativeHandle"]
            })
    }["ChatComposer.ChatComposer.useImperativeHandle"], [
        connectors,
        mcpServers,
        pluginsForComposer,
        skills
    ]);
    function reset() {
        setDraft("");
        setStaged([]);
        nextAttachmentOrderRef.current = 0;
        setStagedVisualComments([]);
        setStagedSkills([]);
        setStagedMcpServers([]);
        setStagedConnectors([]);
        setStagedWorkspaceContexts([]);
        pluginsSectionRef.current?.clear();
        inlineBackedPluginRef.current = null;
        setActiveAppliedPlugin(null);
        setUploadError(null);
        setMention(null);
        setMentionTab('all');
        setSlash(null);
        editorRef.current?.clear();
    }
    function currentCommentAttachments(extra = []) {
        return sortChatCommentAttachmentsByOrder([
            ...commentAttachments,
            ...stagedVisualComments,
            ...extra
        ]);
    }
    function setStreamingAnnotationSendPending(value) {
        streamingAnnotationSendPendingRef.current = value;
        setStreamingAnnotationSendPendingState(value);
    }
    function currentRunContextMeta() {
        const skillIds = stagedSkills.map((s)=>s.id);
        const pluginIds = activeAppliedPlugin ? [
            activeAppliedPlugin.pluginId
        ] : [];
        const mcpServerIds = stagedMcpServers.map((s)=>s.id);
        const connectorIds = stagedConnectors.map((c)=>c.id);
        const workspaceItems = selectedWorkspaceContexts;
        const context = {
            ...skillIds.length > 0 ? {
                skillIds
            } : {},
            ...pluginIds.length > 0 ? {
                pluginIds
            } : {},
            ...mcpServerIds.length > 0 ? {
                mcpServerIds
            } : {},
            ...connectorIds.length > 0 ? {
                connectorIds
            } : {},
            ...workspaceItems.length > 0 ? {
                workspaceItems
            } : {}
        };
        const meta = {
            ...skillIds.length > 0 ? {
                skillIds
            } : {},
            ...activeAppliedPlugin ? {
                appliedPluginSnapshot: activeAppliedPlugin,
                appliedPluginSnapshotId: activeAppliedPlugin.snapshotId,
                ...inlineBackedPluginRef.current?.id === activeAppliedPlugin.pluginId ? {
                    inlineAppliedPlugin: {
                        pluginId: activeAppliedPlugin.pluginId,
                        label: inlineBackedPluginRef.current.label
                    }
                } : {}
            } : {},
            ...Object.keys(context).length > 0 ? {
                context
            } : {}
        };
        return Object.keys(meta).length > 0 ? meta : undefined;
    }
    function sendComposedTurn(prompt, attachments, nextCommentAttachments, meta) {
        setStreamingAnnotationSendPending(false);
        if (!prompt && attachments.length === 0 && nextCommentAttachments.length === 0) return false;
        const nextAttachments = activeFileContext && !attachments.some((attachment)=>attachment.path === activeFileContext) ? [
            {
                path: activeFileContext,
                name: activeFileDisplayName ?? activeFileContext,
                kind: 'file'
            },
            ...attachments
        ] : attachments;
        // Apply a pending Next-step tag if the caller didn't set its own
        // entry_from, then clear it so it only colours the immediate next send.
        const pendingEntryFrom = pendingEntryFromRef.current;
        pendingEntryFromRef.current = null;
        const effectiveMeta = pendingEntryFrom && !meta?.entryFrom ? {
            ...meta ?? {},
            entryFrom: pendingEntryFrom
        } : meta;
        onSend(prompt, nextAttachments, nextCommentAttachments, effectiveMeta);
        reset();
        return true;
    }
    function queueMeta(meta) {
        return {
            ...meta ?? {},
            queueOnly: true
        };
    }
    function reserveAttachmentOrders(count) {
        const orderStart = Math.max(nextAttachmentOrderRef.current, nextChatAttachmentOrder(staged));
        nextAttachmentOrderRef.current = orderStart + count;
        return orderStart;
    }
    function appendOrderedStagedAttachments(attachments) {
        if (attachments.length === 0) return;
        setStaged((current)=>{
            const knownPaths = new Set(current.map((attachment)=>attachment.path));
            const nextAttachments = attachments.filter((attachment)=>!knownPaths.has(attachment.path));
            if (nextAttachments.length === 0) return current;
            const next = sortChatAttachmentsByOrder([
                ...current,
                ...nextAttachments
            ]);
            nextAttachmentOrderRef.current = Math.max(nextAttachmentOrderRef.current, nextChatAttachmentOrder(next));
            return next;
        });
    }
    function appendContextAttachment(filePath) {
        setStaged((current)=>{
            if (current.some((item)=>item.path === filePath)) return current;
            const order = Math.max(nextAttachmentOrderRef.current, nextChatAttachmentOrder(current));
            nextAttachmentOrderRef.current = order + 1;
            return sortChatAttachmentsByOrder([
                ...current,
                {
                    path: filePath,
                    name: filePath.split("/").pop() || filePath,
                    kind: looksLikeImage(filePath) ? "image" : "file",
                    order
                }
            ]);
        });
    }
    function replaceEditorDraft(text) {
        draftRef.current = text;
        setDraft(text);
        editorRef.current?.setText(text);
    }
    async function insertSkillMention(skill) {
        const applied = await applyProjectSkill(skill);
        if (!applied) return;
        // Stage the skill so it rides this turn's skillIds, then insert an
        // atomic `@<name>` pill carrying the skill's real id. The onChange
        // prune keys on `skill:<id>` being present in the editor text, so the
        // chip survives until the user deletes the pill.
        setStagedSkills((prev)=>prev.some((s)=>s.id === skill.id) ? prev : [
                ...prev,
                skill
            ]);
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(skill.name),
            entity: {
                id: skill.id,
                kind: 'skill',
                label: skill.name
            }
        });
        setMention(null);
    }
    function stageSkillForCurrentTurn(skill) {
        setStagedSkills((prev)=>prev.some((s)=>s.id === skill.id) ? prev : [
                ...prev,
                skill
            ]);
    }
    function applyDesignToolboxPrompt(prompt, skill) {
        const nextPrompt = skill ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(skill.name)}\n${prompt}` : prompt;
        if (skill) stageSkillForCurrentTurn(skill);
        applyDesignToolboxDraft(nextPrompt);
    }
    function applyDesignToolboxDraft(prompt) {
        replaceEditorDraft(prompt);
        editorRef.current?.focus();
    }
    // Fills the fixed page/area/project context for the rest of the composer
    // bottom bar (plus menu, design-system / working-dir switch, agent
    // selector, context-chip removal).
    const trackComposerBar = (fields)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerBarClick"])(analytics.track, {
            page_name: 'chat_panel',
            area: 'chat_composer',
            ...projectId ? {
                project_id: projectId
            } : {},
            ...fields
        });
    };
    // Fills the fixed page/area/project context so toolbox call sites only
    // pass the event-specific fields (element + ids).
    const trackDesignToolbox = (fields)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignToolboxClick"])(analytics.track, {
            page_name: 'chat_panel',
            area: 'chat_composer',
            ...projectId ? {
                project_id: projectId
            } : {},
            ...fields
        });
    };
    // Every toolbox resource carries a common `kind` + `id`, and the tracking
    // enum mirrors `DesignToolboxResourceKind` exactly, so this is a direct
    // projection.
    function designToolboxResourceTracking(resource) {
        return {
            resource_kind: resource.kind,
            resource_id: resource.id
        };
    }
    function applyDesignToolboxAction(action) {
        const skill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDesignToolboxSkill"])(action, skills);
        applyDesignToolboxPrompt(designToolboxActionPrompt({
            action,
            skill,
            workspaceItem: visibleWorkspaceContext,
            activeDraft: draft,
            resourceIndex: designToolboxResourceIndex,
            t
        }), skill);
    }
    // Recreated each render, so this captures the latest draft/context closure
    // for the imperative handle (see applyDesignToolboxActionRef).
    applyDesignToolboxActionRef.current = applyDesignToolboxAction;
    function applyDesignToolboxSkill(skill) {
        applyDesignToolboxPrompt(designToolboxSkillPrompt({
            skill,
            workspaceItem: visibleWorkspaceContext,
            activeDraft: draft,
            resourceIndex: designToolboxResourceIndex,
            t
        }), skill);
    }
    // Latest-closure bridge for the imperative handle (see the ref declaration).
    applyDesignToolboxSkillByIdRef.current = (skillId)=>{
        const skill = skills.find((s)=>s.id === skillId);
        if (skill) applyDesignToolboxSkill(skill);
    };
    function applyDesignToolboxResource(resource) {
        if (resource.kind === 'skill') {
            applyDesignToolboxSkill(resource.skill);
            return;
        }
        const prompt = designToolboxResourcePrompt({
            resource,
            workspaceItem: visibleWorkspaceContext,
            activeDraft: draft,
            resourceIndex: designToolboxResourceIndex,
            t
        });
        if (resource.kind === 'plugin') {
            void (async ()=>{
                inlineBackedPluginRef.current = {
                    id: resource.plugin.id,
                    label: resource.plugin.title
                };
                await pluginsSectionRef.current?.applyById(resource.plugin.id, resource.plugin);
                applyDesignToolboxDraft(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(resource.plugin.title)}\n${prompt}`);
            })();
            return;
        }
        if (resource.kind === 'mcp') {
            const label = resource.server.label || resource.server.id;
            setStagedMcpServers((current)=>current.some((item)=>item.id === resource.server.id) ? current : [
                    ...current,
                    resource.server
                ]);
            applyDesignToolboxDraft(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(label)}\n${prompt}`);
            return;
        }
        if (resource.kind === 'connector') {
            setStagedConnectors((current)=>current.some((item)=>item.id === resource.connector.id) ? current : [
                    ...current,
                    resource.connector
                ]);
            applyDesignToolboxDraft(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(resource.connector.name)}\n${prompt}`);
            return;
        }
        if (resource.kind === 'file') {
            const path = resource.file.path ?? resource.file.name;
            appendContextAttachment(path);
            applyDesignToolboxDraft(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(path)}\n${prompt}`);
            return;
        }
        applyDesignToolboxDraft(prompt);
    }
    function removeStagedSkill(id) {
        trackComposerBar({
            element: 'context_remove',
            resource_kind: 'skill',
            resource_id: id
        });
        const skill = stagedSkills.find((s)=>s.id === id) ?? null;
        setStagedSkills((prev)=>prev.filter((s)=>s.id !== id));
        const labels = [
            id,
            skill?.name ?? ''
        ];
        replaceEditorDraft(stripInlineMentionLabels(draft, labels));
    }
    function removeStagedMcpServer(id) {
        trackComposerBar({
            element: 'context_remove',
            resource_kind: 'mcp',
            resource_id: id
        });
        const server = stagedMcpServers.find((item)=>item.id === id) ?? null;
        setStagedMcpServers((prev)=>prev.filter((item)=>item.id !== id));
        replaceEditorDraft(stripInlineMentionLabels(draft, [
            id,
            server?.label ?? ''
        ]));
    }
    function removeStagedConnector(id) {
        trackComposerBar({
            element: 'context_remove',
            resource_kind: 'connector',
            resource_id: id
        });
        const connector = stagedConnectors.find((item)=>item.id === id) ?? null;
        setStagedConnectors((prev)=>prev.filter((item)=>item.id !== id));
        replaceEditorDraft(stripInlineMentionLabels(draft, [
            id,
            connector?.name ?? ''
        ]));
    }
    function removeWorkspaceContext(id) {
        trackComposerBar({
            element: 'context_remove',
            resource_kind: 'workspace',
            resource_id: id
        });
        if (visibleWorkspaceContext?.id === id) setDismissedWorkspaceContextId(id);
        const workspaceItem = selectedWorkspaceContexts.find((item)=>item.id === id) ?? null;
        setStagedWorkspaceContexts((prev)=>prev.filter((item)=>item.id !== id));
        if (workspaceItem) {
            replaceEditorDraft(stripInlineMentionLabels(draft, [
                workspaceItem.label,
                workspaceItem.id,
                workspaceItem.title ?? '',
                workspaceItem.path ?? '',
                workspaceItem.url ?? ''
            ]));
        }
    }
    async function ensureProject() {
        if (projectId) return projectId;
        return onEnsureProject();
    }
    async function uploadFiles(files) {
        if (files.length === 0) return;
        const id = await ensureProject();
        if (!id) return;
        setUploading(true);
        setUploadError(null);
        // Cohort math is identical to the Design Files Upload button; see
        // `analytics/upload-tracking.ts`. v2 doc fires one
        // file_upload_result per surface so this path reports
        // `page_name='chat_panel'` / `area='chat_composer'`.
        const cohort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$upload$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveUploadCohort"])(files);
        const orderStart = reserveAttachmentOrders(files.length);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(id, files);
            if (result.uploaded.length > 0) {
                const orderedUploaded = assignChatAttachmentOrders(result.uploaded, orderStart);
                appendOrderedStagedAttachments(orderedUploaded);
            }
            const partial = result.failed.length > 0;
            if (partial) {
                const failedCount = result.failed.length;
                const uploadedCount = result.uploaded.length;
                const detail = result.error ? ` (${result.error})` : '';
                setUploadError(uploadedCount > 0 ? `Attached ${uploadedCount} file(s), but ${failedCount} failed${detail}.` : `Attachment upload failed for ${failedCount} file(s)${detail}.`);
                console.warn('Some attachments failed to upload', result.failed);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                project_id: id,
                ...cohort,
                result: partial ? 'failed' : 'success',
                ...partial && result.error ? {
                    error_code: result.error
                } : {}
            });
        } catch (err) {
            const detail = err instanceof Error ? err.message : String(err);
            setUploadError(`Attachment upload failed (${detail}).`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFileUploadResult"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                project_id: id,
                ...cohort,
                result: 'failed',
                error_code: detail
            });
        } finally{
            setUploading(false);
        }
    }
    async function uploadClipboardImagesFromAsyncClipboard() {
        if (!navigator.clipboard?.read) return false;
        try {
            const items = await navigator.clipboard.read();
            const files = [];
            const stamp = Date.now();
            for (const item of items){
                const imageType = item.types.find((type)=>type.startsWith('image/'));
                if (!imageType) continue;
                const blob = await item.getType(imageType);
                const extension = imageType.split('/')[1]?.replace('jpeg', 'jpg') || 'png';
                files.push(new File([
                    blob
                ], `clipboard-screenshot-${stamp}.${extension}`, {
                    type: imageType
                }));
            }
            if (files.length === 0) return false;
            await uploadFiles(files);
            return true;
        } catch (err) {
            console.warn('Could not read image from clipboard', err);
            return false;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            function onAnnotation(e) {
                const detail = e.detail;
                if (!detail) return;
                void ({
                    "ChatComposer.ChatComposer.useEffect.onAnnotation": async ()=>{
                        let acked = false;
                        const ack = {
                            "ChatComposer.ChatComposer.useEffect.onAnnotation.ack": (result)=>{
                                if (acked) return;
                                acked = true;
                                detail.ack?.(result);
                            }
                        }["ChatComposer.ChatComposer.useEffect.onAnnotation.ack"];
                        let uploaded = [];
                        let visualAttachmentInput = null;
                        let visualAttachment = null;
                        try {
                            // Upload the annotation screenshot together with any images the
                            // user attached in the markup composer. The screenshot (when
                            // present) is first so it keeps backing the structured visual
                            // comment; the rest ride along as ordinary chat attachments.
                            const annotationFiles = [
                                detail.file,
                                ...detail.extraFiles ?? []
                            ].filter({
                                "ChatComposer.ChatComposer.useEffect.onAnnotation.annotationFiles": (f)=>Boolean(f)
                            }["ChatComposer.ChatComposer.useEffect.onAnnotation.annotationFiles"]);
                            if (annotationFiles.length > 0) {
                                const orderStart = reserveAttachmentOrders(annotationFiles.length);
                                const id = await ensureProject();
                                if (!id) {
                                    ack({
                                        ok: false,
                                        message: t('chat.annotationProjectCreateFailed')
                                    });
                                    return;
                                }
                                setUploading(true);
                                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(id, annotationFiles);
                                if (result.uploaded.length > 0) {
                                    uploaded = assignChatAttachmentOrders(result.uploaded, orderStart);
                                    const screenshot = detail.file ? uploaded[0] : null;
                                    if (screenshot && detail.markKind && detail.bounds) {
                                        visualAttachmentInput = {
                                            order: isFiniteAttachmentOrder(screenshot.order) ? screenshot.order : orderStart,
                                            idSeed: screenshot.path,
                                            screenshotPath: screenshot.path,
                                            markKind: detail.markKind,
                                            note: detail.note,
                                            bounds: detail.bounds,
                                            target: detail.target ? {
                                                filePath: detail.target.filePath || detail.filePath || screenshot.path,
                                                elementId: detail.target.elementId,
                                                selector: detail.target.selector,
                                                label: detail.target.label,
                                                text: detail.target.text,
                                                position: detail.target.position,
                                                htmlHint: detail.target.htmlHint
                                            } : {
                                                filePath: detail.filePath || screenshot.path,
                                                position: detail.bounds
                                            }
                                        };
                                    }
                                }
                                if (result.failed.length > 0) {
                                    const detailText = result.error ? ` (${result.error})` : '';
                                    setUploadError(`Attachment upload failed for ${result.failed.length} file(s)${detailText}.`);
                                    if (uploaded.length === 0) {
                                        ack({
                                            ok: false,
                                            message: t('chat.annotationUploadFailed')
                                        });
                                        return;
                                    }
                                }
                            }
                            setUploading(false);
                            const appendAnnotationToComposer = {
                                "ChatComposer.ChatComposer.useEffect.onAnnotation.appendAnnotationToComposer": ()=>{
                                    if (uploaded.length > 0) {
                                        appendOrderedStagedAttachments(uploaded);
                                    }
                                    if (visualAttachmentInput) {
                                        setStagedVisualComments({
                                            "ChatComposer.ChatComposer.useEffect.onAnnotation.appendAnnotationToComposer": (current)=>[
                                                    ...current,
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildVisualAnnotationAttachment"])({
                                                        ...visualAttachmentInput
                                                    })
                                                ]
                                        }["ChatComposer.ChatComposer.useEffect.onAnnotation.appendAnnotationToComposer"]);
                                    }
                                    if (detail.note) {
                                        // Accumulate through draftRef so two annotations resolving
                                        // concurrently compose (each reads the other's write) instead
                                        // of both starting from the same stale closure. Mirror the
                                        // result into the editor with setText so the now-non-empty
                                        // editor does not fire an onChange('') that would clobber the
                                        // accumulated draft back to empty.
                                        const nextDraft = draftRef.current ? `${draftRef.current}\n${detail.note}` : detail.note;
                                        draftRef.current = nextDraft;
                                        setDraft(nextDraft);
                                        editorRef.current?.setText(nextDraft);
                                    }
                                    editorRef.current?.focus();
                                }
                            }["ChatComposer.ChatComposer.useEffect.onAnnotation.appendAnnotationToComposer"];
                            if (detail.action === 'queue') {
                                if (visualAttachmentInput) {
                                    visualAttachment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildVisualAnnotationAttachment"])({
                                        ...visualAttachmentInput
                                    });
                                }
                                const prompt = [
                                    draft.trim(),
                                    detail.note
                                ].filter(Boolean).join('\n');
                                const attachments = sortChatAttachmentsByOrder([
                                    ...staged,
                                    ...uploaded
                                ]);
                                const nextCommentAttachments = currentCommentAttachments(visualAttachment ? [
                                    visualAttachment
                                ] : []);
                                // Mark draw-overlay → run: tag entry_from='mark' so the dashboard
                                // separates annotation-driven runs from plain composer sends.
                                sendComposedTurn(prompt, attachments, nextCommentAttachments, {
                                    ...queueMeta(currentRunContextMeta()),
                                    entryFrom: 'mark'
                                });
                                ack({
                                    ok: true
                                });
                                return;
                            }
                            if (detail.action === 'send') {
                                if (streaming) {
                                    appendAnnotationToComposer();
                                    // Carry entry_from='mark' through the deferred send so the
                                    // flush effect below reports the run as a Mark annotation
                                    // rather than the default composer entry.
                                    streamingAnnotationSendEntryFromRef.current = 'mark';
                                    setStreamingAnnotationSendPending(true);
                                    ack({
                                        ok: true
                                    });
                                    return;
                                }
                                if (visualAttachmentInput) {
                                    visualAttachment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildVisualAnnotationAttachment"])({
                                        ...visualAttachmentInput
                                    });
                                }
                                const prompt = [
                                    draft.trim(),
                                    detail.note
                                ].filter(Boolean).join('\n');
                                const attachments = sortChatAttachmentsByOrder([
                                    ...staged,
                                    ...uploaded
                                ]);
                                const nextCommentAttachments = currentCommentAttachments(visualAttachment ? [
                                    visualAttachment
                                ] : []);
                                // Mark draw-overlay → run: tag entry_from='mark' so the dashboard
                                // separates annotation-driven runs from plain composer sends.
                                sendComposedTurn(prompt, attachments, nextCommentAttachments, {
                                    ...currentRunContextMeta(),
                                    entryFrom: 'mark'
                                });
                                ack({
                                    ok: true
                                });
                                return;
                            }
                            if (detail.action === 'draft') {
                                appendAnnotationToComposer();
                                ack({
                                    ok: true
                                });
                                return;
                            }
                            ack({
                                ok: false,
                                message: t('chat.annotationFailed')
                            });
                        } catch (err) {
                            console.warn('Could not send annotation', err);
                            setUploadError(err instanceof Error ? err.message : t('chat.annotationFailed'));
                            ack({
                                ok: false,
                                message: t('chat.annotationFailed')
                            });
                        } finally{
                            setUploading(false);
                        }
                    }
                })["ChatComposer.ChatComposer.useEffect.onAnnotation"]();
            }
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewDrawOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANNOTATION_EVENT"], onAnnotation);
            return ({
                "ChatComposer.ChatComposer.useEffect": ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewDrawOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANNOTATION_EVENT"], onAnnotation)
            })["ChatComposer.ChatComposer.useEffect"];
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        commentAttachments,
        draft,
        onSend,
        projectId,
        selectedWorkspaceContexts,
        staged,
        stagedConnectors,
        stagedMcpServers,
        stagedSkills,
        stagedVisualComments,
        streaming,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatComposer.ChatComposer.useEffect": ()=>{
            if (!streamingAnnotationSendPending || !streamingAnnotationSendPendingRef.current) return;
            if (streaming || sendDisabled) return;
            // Read the ref, not the closed-over `draft`: the accumulating annotation
            // handler writes draftRef synchronously, so the ref is authoritative even
            // if this effect's render closure predates the last accumulation.
            const prompt = draftRef.current.trim();
            // Consume the entry_from captured when the send was deferred (Mark
            // draw-overlay sets 'mark'); clear it so a later plain send is unaffected.
            const pendingEntryFrom = streamingAnnotationSendEntryFromRef.current;
            streamingAnnotationSendEntryFromRef.current = undefined;
            const baseMeta = currentRunContextMeta();
            const meta = pendingEntryFrom ? {
                ...baseMeta,
                entryFrom: pendingEntryFrom
            } : baseMeta;
            sendComposedTurn(prompt, staged, currentCommentAttachments(), meta);
        }
    }["ChatComposer.ChatComposer.useEffect"], [
        commentAttachments,
        draft,
        onSend,
        selectedWorkspaceContexts,
        sendDisabled,
        staged,
        stagedConnectors,
        stagedMcpServers,
        stagedSkills,
        stagedVisualComments,
        streaming,
        streamingAnnotationSendPending
    ]);
    // Paste handler invoked by the editor's PastePlugin. `files` are the items
    // the clipboard exposed synchronously; when empty we fall back to the
    // async Clipboard API to recover pasted screenshots that some browsers
    // only surface through `navigator.clipboard.read()`.
    function handlePasteFiles(files) {
        if (files.length > 0) {
            void uploadFiles(files);
            return;
        }
        void uploadClipboardImagesFromAsyncClipboard();
    }
    function handleDrop(e) {
        e.preventDefault();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files ?? []);
        if (files.length > 0) void uploadFiles(files);
    }
    async function handleLinkFolder() {
        if (!projectId) return;
        const selected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openFolderDialog"])();
        if (!selected) return;
        const base = projectMetadata ?? {
            kind: 'prototype'
        };
        const existing = base.linkedDirs ?? [];
        if (existing.includes(selected)) return;
        const metadata = {
            ...base,
            linkedDirs: [
                ...existing,
                selected
            ]
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
            metadata
        });
        if (result?.metadata) onProjectMetadataChange?.(result.metadata);
    }
    // The WorkingDirPicker treats the project's working directory as a single
    // primary folder, so selecting one replaces `linkedDirs`. The folder is
    // read-only awareness for the agent (→ `--add-dir`), not a Design Files
    // import, and `baseDir` is never touched.
    async function setWorkingDirFolder(dir) {
        if (!projectId) return;
        const base = projectMetadata ?? {
            kind: 'prototype'
        };
        const metadata = {
            ...base,
            linkedDirs: [
                dir
            ]
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
            metadata
        });
        // The daemon rejects stale/inaccessible/system dirs with
        // INVALID_LINKED_DIR (patchProject → null). Only commit the selection
        // and promote it in recents when the project accepted it; otherwise
        // surface the failure and leave recents untouched so a rejected path
        // isn't re-promoted to the top of the menu.
        if (!result?.metadata) {
            onShowToast?.(t('homeWorkingDir.applyFailed'));
            return;
        }
        onProjectMetadataChange?.(result.metadata);
        void rememberRecentDir(dir);
    }
    async function handlePickWorkingDir() {
        const selected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openFolderDialog"])();
        if (selected) await setWorkingDirFolder(selected);
    }
    async function clearWorkingDir() {
        if (!projectId) return;
        const base = projectMetadata ?? {
            kind: 'prototype'
        };
        const metadata = {
            ...base,
            linkedDirs: []
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
            metadata
        });
        if (result?.metadata) onProjectMetadataChange?.(result.metadata);
    }
    async function handleSwitchDesignSystem(designSystemId, title) {
        if (!projectId) return false;
        if (designSystemId === currentDesignSystemId) return true;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
            designSystemId
        });
        if (!result) {
            onShowToast?.(t('chat.importDesignSystemFailed'));
            return false;
        }
        trackComposerBar({
            element: 'design_system_switch',
            ...designSystemId ? {
                design_system_id: designSystemId
            } : {}
        });
        onActiveDesignSystemChange?.(result);
        const switchedTitle = designSystemId === null ? t('chat.importDesignSystemNone') : title ?? designSystemId;
        onShowToast?.(t('chat.importDesignSystemSwitched', {
            title: switchedTitle
        }));
        return true;
    }
    // Lexical drives every text change through this callback. `present` is the
    // entity list the editor's text currently references (MentionNodes plus
    // plain `@token`s matched against composerMentionEntities, deduped by
    // kind:id). We prune the staged skill/mcp/connector chips to whatever the
    // text still references — generalizing the old skill-only regex prune so a
    // hand-deleted token also drops its chip and never leaks into the run
    // context. `staged` (files) is intentionally NOT pruned: users attach
    // files via the upload button without leaving an `@<path>` token.
    function handleEditorChange(text, present) {
        draftRef.current = text;
        setDraft(text);
        const set = new Set(present.map((e)=>`${e.kind}:${e.id}`));
        if (activeAppliedPlugin && inlineBackedPluginRef.current?.id === activeAppliedPlugin.pluginId && !set.has(`plugin:${activeAppliedPlugin.pluginId}`) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionTokenPresent"])(text, inlineBackedPluginRef.current.label)) {
            inlineBackedPluginRef.current = null;
            pluginsSectionRef.current?.clear();
        }
        setStagedSkills((prev)=>prev.filter((s)=>set.has(`skill:${s.id}`)));
        setStagedMcpServers((prev)=>prev.filter((m)=>set.has(`mcp:${m.id}`)));
        setStagedConnectors((prev)=>prev.filter((c)=>set.has(`connector:${c.id}`)));
        setStagedWorkspaceContexts((prev)=>prev.filter((item)=>set.has(`workspace:${item.id}`)));
    }
    // Lexical reports the active @/slash trigger derived from the caret. The
    // mention popover state collapses to `{ q }`; the slash state replicates
    // the old detection effect (reset the keyboard index on open). IME
    // suppression already happened in the editor (it bails while composing).
    function handleEditorTrigger({ mention: nextMention, slash: nextSlash, anchorRect }) {
        setCaretRect(anchorRect);
        if (nextMention && !mention) {
            setMentionTab('all');
        } else if (!nextMention) {
            setMentionTab('all');
        }
        setMention((prev)=>{
            // Reset the active row only when the query identity changes (mirror of
            // the slash reset) so re-renders from unrelated state don't snap it.
            if (nextMention && (!prev || prev.q !== nextMention.q)) setMentionIndex(0);
            return nextMention;
        });
        if (nextSlash) {
            setSlash(nextSlash);
            setSlashIndex(0);
        } else {
            setSlash(null);
        }
    }
    // Routes popover navigation keys lifted verbatim from the old textarea
    // onKeyDown. Returns true when the key was consumed so the editor can
    // preventDefault; false lets the editor handle it normally (e.g. plain
    // arrow keys when no popover is open).
    function handlePopoverKey(key) {
        if (slash && filteredSlash.length > 0) {
            if (key === 'ArrowDown') {
                setSlashIndex((i)=>(i + 1) % filteredSlash.length);
                return true;
            }
            if (key === 'ArrowUp') {
                setSlashIndex((i)=>(i - 1 + filteredSlash.length) % filteredSlash.length);
                return true;
            }
            if (key === 'Tab' || key === 'Enter') {
                const safe = Math.min(slashIndex, filteredSlash.length - 1);
                pickSlash(filteredSlash[safe]);
                return true;
            }
            if (key === 'Escape') {
                setSlash(null);
                return true;
            }
        }
        if (mention && key === 'Escape') {
            setMention(null);
            return true;
        }
        if (mention) {
            // Drive a single index over the visible section union. MentionPopover
            // renders the same files-first section order and highlights the
            // matching row from activeIndex.
            const showFiles = mentionTab === 'all' || mentionTab === 'files';
            const showTabs = mentionTab === 'all' || mentionTab === 'tabs';
            const showPlugins = mentionTab === 'all' || mentionTab === 'plugins';
            const showSkills = mentionTab === 'all' || mentionTab === 'skills';
            const showMcp = mentionTab === 'all' || mentionTab === 'mcp';
            const showConnectors = mentionTab === 'all' || mentionTab === 'connectors';
            const total = (showFiles ? filteredFiles.length : 0) + (showTabs ? filteredWorkspaceContexts.length : 0) + (showPlugins ? filteredPlugins.length : 0) + (showSkills ? filteredSkills.length : 0) + (showMcp ? filteredMcpServers.length : 0) + (showConnectors ? filteredConnectors.length : 0);
            if (total > 0) {
                if (key === 'ArrowDown') {
                    setMentionIndex((i)=>(i + 1) % total);
                    return true;
                }
                if (key === 'ArrowUp') {
                    setMentionIndex((i)=>(i - 1 + total) % total);
                    return true;
                }
                if (key === 'Tab' || key === 'Enter') {
                    pickMentionByFlatIndex(Math.min(mentionIndex, total - 1));
                    return true;
                }
            }
        }
        return false;
    }
    // Resolve a flat visible-section index to the right insert call. Section
    // order MUST match MentionPopover's render order (files→tabs→plugins
    // →skills→mcp→connectors); the activeIndex highlight and Enter target stay in
    // lockstep across "All" and individual tabs.
    function pickMentionByFlatIndex(flat) {
        let i = flat;
        if (mentionTab === 'all' || mentionTab === 'files') {
            if (i < filteredFiles.length) {
                insertMention(filteredFiles[i].path ?? filteredFiles[i].name);
                return;
            }
            i -= filteredFiles.length;
        }
        if (mentionTab === 'all' || mentionTab === 'tabs') {
            if (i < filteredWorkspaceContexts.length) {
                insertWorkspaceMention(filteredWorkspaceContexts[i]);
                return;
            }
            i -= filteredWorkspaceContexts.length;
        }
        if (mentionTab === 'all' || mentionTab === 'plugins') {
            if (i < filteredPlugins.length) {
                void insertPluginMention(filteredPlugins[i]);
                return;
            }
            i -= filteredPlugins.length;
        }
        if (mentionTab === 'all' || mentionTab === 'skills') {
            if (i < filteredSkills.length) {
                void insertSkillMention(filteredSkills[i]);
                return;
            }
            i -= filteredSkills.length;
        }
        if (mentionTab === 'all' || mentionTab === 'mcp') {
            if (i < filteredMcpServers.length) {
                insertMcpMention(filteredMcpServers[i]);
                return;
            }
            i -= filteredMcpServers.length;
        }
        if (mentionTab === 'all' || mentionTab === 'connectors') {
            if (i < filteredConnectors.length) {
                insertConnectorMention(filteredConnectors[i]);
                return;
            }
        }
    }
    function insertMention(filePath) {
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(filePath),
            entity: {
                id: filePath,
                kind: 'file',
                label: filePath
            }
        });
        if (!staged.some((s)=>s.path === filePath)) {
            appendContextAttachment(filePath);
        }
        setMention(null);
    }
    async function insertPluginMention(record) {
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(record.title),
            entity: {
                id: record.id,
                kind: 'plugin',
                label: record.title
            }
        });
        setMention(null);
        inlineBackedPluginRef.current = {
            id: record.id,
            label: record.title
        };
        await pluginsSectionRef.current?.applyById(record.id, record);
    }
    function insertMcpMention(server) {
        setStagedMcpServers((current)=>current.some((item)=>item.id === server.id) ? current : [
                ...current,
                server
            ]);
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(server.label || server.id),
            entity: {
                id: server.id,
                kind: 'mcp',
                label: server.label || server.id
            }
        });
        setMention(null);
    }
    function insertConnectorMention(connector) {
        setStagedConnectors((current)=>current.some((item)=>item.id === connector.id) ? current : [
                ...current,
                connector
            ]);
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(connector.name),
            entity: {
                id: connector.id,
                kind: 'connector',
                label: connector.name
            }
        });
        setMention(null);
    }
    function insertWorkspaceMention(item) {
        setStagedWorkspaceContexts((current)=>current.some((candidate)=>candidate.id === item.id) ? current : [
                ...current,
                item
            ]);
        editorRef.current?.insertMention({
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(item.label),
            entity: {
                id: item.id,
                kind: 'workspace',
                label: item.label
            }
        });
        setMention(null);
    }
    async function applyProjectSkill(skill) {
        if (!projectId) return false;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(projectId, {
            skillId: skill.id
        });
        if (!result) return false;
        onProjectSkillChange?.(result.skillId ?? skill.id);
        return true;
    }
    function removeStaged(p) {
        trackComposerBar({
            element: 'context_remove',
            resource_kind: 'attachment',
            resource_id: p
        });
        setStaged((s)=>s.filter((a)=>a.path !== p));
        setStagedVisualComments((current)=>current.filter((attachment)=>attachment.screenshotPath !== p));
        // Strip the `@<path>` token from the draft and push the result back into
        // the editor so the pill disappears in lockstep with the chip.
        replaceEditorDraft(stripInlineMentionToken(draft, p));
    }
    function removeCommentAttachment(id) {
        setStagedVisualComments((current)=>current.filter((attachment)=>attachment.id !== id));
        if (!stagedVisualComments.some((attachment)=>attachment.id === id)) {
            onRemoveCommentAttachment?.(id);
        }
    }
    async function submit() {
        const prompt = draft.trim();
        if (sendDisabled) return;
        // Intercept `/pet …` and `/mcp` before sending so the slash command
        // never hits the agent — these are local UX hooks, not model prompts.
        if (tryHandlePetSlash()) return;
        if (tryHandleMcpSlash()) return;
        // `/hatch <concept>` expands into the canonical hatch-pet skill
        // prompt and *is* sent to the agent — the agent runs the skill,
        // packages a Codex pet under `~/.codex/pets/`, and the user
        // adopts it from "Recently hatched" in pet settings afterwards.
        const contextMeta = currentRunContextMeta();
        const hatched = expandHatchCommand(prompt);
        const nextCommentAttachments = currentCommentAttachments();
        if (hatched) {
            if (streaming) return;
            setStreamingAnnotationSendPending(false);
            onSend(hatched, staged, nextCommentAttachments, contextMeta);
            reset();
            return;
        }
        const search = researchAvailable ? expandSearchCommand(prompt) : null;
        if (search) {
            if (streaming) return;
            setStreamingAnnotationSendPending(false);
            onSend(search.prompt, staged, nextCommentAttachments, {
                ...contextMeta,
                research: {
                    enabled: true,
                    query: search.query
                }
            });
            reset();
            return;
        }
        if (!prompt && staged.length === 0 && nextCommentAttachments.length === 0) return;
        sendComposedTurn(prompt, staged, nextCommentAttachments, contextMeta);
    }
    // The @-picker offers a unified search across context surfaces:
    // workspace tabs first, then project files, plugins, skills, active MCP
    // servers, and connectors. Picked
    // entities keep an inline @ token for orientation while richer
    // context is still applied behind the scenes when available.
    const mentionQuery = mention ? mention.q.toLowerCase() : '';
    // The suggestion lists below only matter while the @-popover is open
    // (each is `[]` otherwise). Memoize them on `[mention, mentionQuery,
    // <source>]` so the filter/sort passes run only when the query or the
    // backing list actually changes — not on every unrelated composer render
    // (streaming flips, draft typing routed through Lexical, staged-chip churn).
    // `mention` is in the deps (not just `mentionQuery`) so the open/close gate
    // re-evaluates: a null→{q:''} transition keeps the query '' but must flip
    // the list from `[]` to live results.
    const filteredWorkspaceContexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredWorkspaceContexts]": ()=>mention ? workspaceContexts.filter({
                "ChatComposer.ChatComposer.useMemo[filteredWorkspaceContexts]": (item)=>{
                    if (!mentionQuery) return true;
                    return workspaceContextSearchText(item).toLowerCase().includes(mentionQuery);
                }
            }["ChatComposer.ChatComposer.useMemo[filteredWorkspaceContexts]"]).slice(0, 12) : []
    }["ChatComposer.ChatComposer.useMemo[filteredWorkspaceContexts]"], [
        mention,
        mentionQuery,
        workspaceContexts
    ]);
    const filteredFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredFiles]": ()=>mention ? projectFiles.filter({
                "ChatComposer.ChatComposer.useMemo[filteredFiles]": (f)=>f.type === undefined || f.type === "file"
            }["ChatComposer.ChatComposer.useMemo[filteredFiles]"]).filter({
                "ChatComposer.ChatComposer.useMemo[filteredFiles]": (f)=>{
                    const key = f.path ?? f.name;
                    return key.toLowerCase().includes(mentionQuery);
                }
            }["ChatComposer.ChatComposer.useMemo[filteredFiles]"]).slice(0, 12) : []
    }["ChatComposer.ChatComposer.useMemo[filteredFiles]"], [
        mention,
        mentionQuery,
        projectFiles
    ]);
    const filteredPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredPlugins]": ()=>mention ? pluginsForComposer.filter({
                "ChatComposer.ChatComposer.useMemo[filteredPlugins]": (p)=>{
                    if (!mentionQuery) return true;
                    return p.title.toLowerCase().includes(mentionQuery) || p.id.toLowerCase().includes(mentionQuery) || (p.manifest?.description ?? '').toLowerCase().includes(mentionQuery) || (p.manifest?.tags ?? []).join(' ').toLowerCase().includes(mentionQuery);
                }
            }["ChatComposer.ChatComposer.useMemo[filteredPlugins]"]).slice(0, 8) : []
    }["ChatComposer.ChatComposer.useMemo[filteredPlugins]"], [
        mention,
        mentionQuery,
        pluginsForComposer
    ]);
    const filteredMcpServers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredMcpServers]": ()=>mention ? enabledMcpServers.filter({
                "ChatComposer.ChatComposer.useMemo[filteredMcpServers]": (s)=>{
                    if (!mentionQuery) return true;
                    return [
                        s.id,
                        s.label ?? '',
                        s.transport,
                        s.url ?? '',
                        s.command ?? ''
                    ].join(' ').toLowerCase().includes(mentionQuery);
                }
            }["ChatComposer.ChatComposer.useMemo[filteredMcpServers]"]).slice(0, 8) : []
    }["ChatComposer.ChatComposer.useMemo[filteredMcpServers]"], [
        mention,
        mentionQuery,
        enabledMcpServers
    ]);
    const filteredConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredConnectors]": ()=>mention ? connectors.filter({
                "ChatComposer.ChatComposer.useMemo[filteredConnectors]": (connector)=>{
                    if (!mentionQuery) return true;
                    return [
                        connector.id,
                        connector.name,
                        connector.provider,
                        connector.category,
                        connector.description ?? '',
                        connector.accountLabel ?? ''
                    ].join(' ').toLowerCase().includes(mentionQuery);
                }
            }["ChatComposer.ChatComposer.useMemo[filteredConnectors]"]).slice(0, 8) : []
    }["ChatComposer.ChatComposer.useMemo[filteredConnectors]"], [
        mention,
        mentionQuery,
        connectors
    ]);
    // Already-staged skills drop out of the suggestion list (carried over
    // from main) so the @-popover keeps moving forward as the user picks.
    const filteredSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatComposer.ChatComposer.useMemo[filteredSkills]": ()=>{
            if (!mention) return [];
            const stagedSkillIds = new Set(stagedSkills.map({
                "ChatComposer.ChatComposer.useMemo[filteredSkills]": (s)=>s.id
            }["ChatComposer.ChatComposer.useMemo[filteredSkills]"]));
            return skills.filter({
                "ChatComposer.ChatComposer.useMemo[filteredSkills]": (s)=>!stagedSkillIds.has(s.id)
            }["ChatComposer.ChatComposer.useMemo[filteredSkills]"]).filter({
                "ChatComposer.ChatComposer.useMemo[filteredSkills]": (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillMatchesQuery"])(s, mentionQuery)
            }["ChatComposer.ChatComposer.useMemo[filteredSkills]"]).sort({
                "ChatComposer.ChatComposer.useMemo[filteredSkills]": (a, b)=>skillMentionRank(a, mentionQuery) - skillMentionRank(b, mentionQuery)
            }["ChatComposer.ChatComposer.useMemo[filteredSkills]"]);
        }
    }["ChatComposer.ChatComposer.useMemo[filteredSkills]"], [
        mention,
        mentionQuery,
        skills,
        stagedSkills
    ]);
    const hasComposerPayload = draft.trim().length > 0 || staged.length > 0 || currentCommentAttachments().length > 0;
    const showStopButton = streaming && !hasComposerPayload;
    const showSendButton = !streaming || hasComposerPayload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'composer',
            dragActive ? 'drag-active' : '',
            activeFileContext ? 'composer-active-file-mode' : ''
        ].filter(Boolean).join(' '),
        "data-testid": "chat-composer",
        ref: composerRootRef,
        onDragOver: (e)=>{
            e.preventDefault();
            setDragActive(true);
        },
        onDragLeave: ()=>setDragActive(false),
        onDrop: handleDrop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-shell",
                children: [
                    projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsSection"], {
                        ref: pluginsSectionRef,
                        projectId: projectId,
                        showRail: false,
                        renderActiveChip: false,
                        onApplied: (brief, applied)=>{
                            setActiveAppliedPlugin(applied.appliedPlugin);
                            // Use functional setState so stale closures from the @-mention
                            // flow (which awaits applyById after setDraft) still see the
                            // latest draft value before deciding whether to seed.
                            if (typeof brief === 'string' && brief.length > 0) {
                                setDraft((cur)=>cur.trim().length === 0 ? brief : cur);
                            }
                        },
                        onCleared: ()=>{
                            inlineBackedPluginRef.current = null;
                            setActiveAppliedPlugin(null);
                        },
                        onChipDetails: (item)=>{
                            if (item.kind !== 'plugin') return;
                            const record = installedPlugins.find((p)=>p.id === item.id);
                            if (record) setDetailsRecord(record);
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2132,
                        columnNumber: 13
                    }, this) : null,
                    designSystemPicker || selectedWorkspaceContexts.length > 0 || stagedSkills.length > 0 || stagedMcpServers.length > 0 || stagedConnectors.length > 0 || staged.length > 0 || activeAppliedPlugin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StagedRunContexts, {
                        designSystemPicker: designSystemPicker,
                        workspaceItems: selectedWorkspaceContexts,
                        currentWorkspaceContextId: visibleWorkspaceContext?.id ?? null,
                        skills: stagedSkills,
                        mcpServers: stagedMcpServers,
                        connectors: stagedConnectors,
                        attachments: staged,
                        pluginChip: activeAppliedPlugin ? {
                            id: activeAppliedPlugin.pluginId,
                            title: activeAppliedPlugin.pluginTitle ?? activeAppliedPlugin.pluginId
                        } : null,
                        projectId: projectId,
                        onRemoveWorkspace: removeWorkspaceContext,
                        onRemoveSkill: removeStagedSkill,
                        onRemoveMcp: removeStagedMcpServer,
                        onRemoveConnector: removeStagedConnector,
                        onRemoveAttachment: removeStaged,
                        onRemovePlugin: ()=>{
                            pluginsSectionRef.current?.clear();
                            setActiveAppliedPlugin(null);
                        },
                        onPluginDetails: (id)=>{
                            const record = installedPlugins.find((plugin)=>plugin.id === id);
                            if (record) setDetailsRecord(record);
                        },
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2158,
                        columnNumber: 13
                    }, this) : null,
                    activeFileContext ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-active-file",
                        "data-testid": "composer-active-file",
                        title: activeFileContext,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "composer-active-file__label",
                                children: t('chat.activeFileEditingLabel')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "composer-active-file__name",
                                children: activeFileContext
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2198,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2192,
                        columnNumber: 13
                    }, this) : null,
                    currentCommentAttachments().length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StagedCommentAttachments, {
                        attachments: currentCommentAttachments(),
                        onRemove: removeCommentAttachment,
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2202,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-input-wrap",
                        onFocus: ()=>setComposerEngaged(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2f$LexicalComposerInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexicalComposerInput"], {
                            ref: editorRef,
                            draft: draft,
                            placeholder: activeFileDisplayName ? t('chat.activeFilePlaceholder', {
                                file: activeFileDisplayName
                            }) : t('chat.composerPlaceholder'),
                            title: activeFileDisplayName ?? t('chat.composerPlaceholder'),
                            knownEntities: composerMentionEntities,
                            onChange: handleEditorChange,
                            onTrigger: handleEditorTrigger,
                            onEnterSend: ()=>void submit(),
                            onPasteFiles: handlePasteFiles,
                            popoverOpen: Boolean(mention) || Boolean(slash && filteredSlash.length > 0),
                            onPopoverKey: handlePopoverKey,
                            comboboxAria: {
                                expanded: Boolean(mention),
                                activeId: mention ? `mention-opt-${mentionIndex}` : null
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2219,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2f$CaretFloatingLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretFloatingLayer"], {
                        caret: caretRect,
                        open: Boolean(mention),
                        boundaryRef: composerRootRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MentionPopover, {
                            files: filteredFiles,
                            workspaceContexts: filteredWorkspaceContexts,
                            plugins: filteredPlugins,
                            skills: filteredSkills,
                            mcpServers: filteredMcpServers,
                            connectors: filteredConnectors,
                            query: mention?.q ?? '',
                            tab: mentionTab,
                            onTabChange: (nextTab)=>{
                                setMentionTab(nextTab);
                                setMentionIndex(0);
                            },
                            activeIndex: mentionIndex,
                            currentSkillId: currentSkillId,
                            onPickFile: insertMention,
                            onPickWorkspaceContext: insertWorkspaceMention,
                            onPickPlugin: (record)=>void insertPluginMention(record),
                            onPickSkill: (skill)=>void insertSkillMention(skill),
                            onPickMcp: insertMcpMention,
                            onPickConnector: insertConnectorMention
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2246,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2f$CaretFloatingLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretFloatingLayer"], {
                        caret: caretRect,
                        open: Boolean(slash && filteredSlash.length > 0),
                        boundaryRef: composerRootRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlashPopover, {
                            commands: filteredSlash,
                            activeIndex: Math.min(slashIndex, filteredSlash.length - 1),
                            onPick: pickSlash,
                            onHover: (i)=>setSlashIndex(i),
                            t: t
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2274,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                "data-testid": "chat-file-input",
                                type: "file",
                                multiple: true,
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const files = Array.from(e.target.files ?? []);
                                    void uploadFiles(files);
                                    e.target.value = '';
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ComposerPlusMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposerPlusMenu"], {
                                triggerTestId: "chat-plus-trigger",
                                onOpen: ()=>{
                                    trackComposerBar({
                                        element: 'plus_menu_open'
                                    });
                                    setComposerEngaged(true);
                                },
                                connectors: connectors,
                                onPickConnector: (connector)=>{
                                    trackComposerBar({
                                        element: 'plus_pick',
                                        resource_kind: 'connector',
                                        resource_id: connector.id
                                    });
                                    insertConnectorMention(connector);
                                },
                                onAddConnector: ()=>{
                                    trackComposerBar({
                                        element: 'plus_add',
                                        resource_kind: 'connector'
                                    });
                                    onOpenConnectors?.();
                                },
                                plugins: pluginsForComposer,
                                onPickPlugin: (record)=>{
                                    trackComposerBar({
                                        element: 'plus_pick',
                                        resource_kind: 'plugin',
                                        resource_id: record.id
                                    });
                                    void insertPluginMention(record);
                                },
                                onAddPlugin: ()=>{
                                    trackComposerBar({
                                        element: 'plus_add',
                                        resource_kind: 'plugin'
                                    });
                                    onBrowsePlugins?.();
                                },
                                mcpServers: enabledMcpServers,
                                onPickMcp: (server)=>{
                                    trackComposerBar({
                                        element: 'plus_pick',
                                        resource_kind: 'mcp',
                                        resource_id: server.id
                                    });
                                    insertMcpMention(server);
                                },
                                onAddMcp: ()=>{
                                    trackComposerBar({
                                        element: 'plus_add',
                                        resource_kind: 'mcp'
                                    });
                                    onOpenMcpSettings?.();
                                },
                                onAttachFiles: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackChatPanelClick"])(analytics.track, {
                                        page_name: 'chat_panel',
                                        area: 'chat_panel',
                                        element: 'attachment'
                                    });
                                    fileInputRef.current?.click();
                                },
                                attachLoading: uploading,
                                toolboxLabel: t('chat.designToolbox.title'),
                                renderToolbox: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignToolboxPanel, {
                                        actions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_TOOLBOX_ACTIONS"],
                                        skills: skills,
                                        plugins: pluginsForComposer,
                                        mcpServers: enabledMcpServers,
                                        mcpTemplates: mcpTemplates,
                                        connectors: connectors,
                                        projectFiles: projectFiles,
                                        activeSkillIds: stagedSkills.map((skill)=>skill.id),
                                        activePluginId: activeAppliedPlugin?.pluginId ?? pinnedPluginId ?? null,
                                        activeMcpServerIds: stagedMcpServers.map((server)=>server.id),
                                        activeConnectorIds: stagedConnectors.map((connector)=>connector.id),
                                        activeFilePaths: staged.map((item)=>item.path),
                                        onOpened: ()=>trackDesignToolbox({
                                                element: 'design_toolbox_open'
                                            }),
                                        onPickAction: (action)=>{
                                            trackDesignToolbox({
                                                element: 'design_toolbox_action',
                                                toolbox_action_id: action.id
                                            });
                                            applyDesignToolboxAction(action);
                                            close();
                                        },
                                        onPickSkill: (skill)=>{
                                            trackDesignToolbox({
                                                element: 'design_toolbox_resource',
                                                resource_kind: 'skill',
                                                resource_id: skill.id
                                            });
                                            applyDesignToolboxSkill(skill);
                                            close();
                                        },
                                        onPickResource: (resource)=>{
                                            trackDesignToolbox({
                                                element: 'design_toolbox_resource',
                                                ...designToolboxResourceTracking(resource)
                                            });
                                            applyDesignToolboxResource(resource);
                                            close();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2351,
                                        columnNumber: 17
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2295,
                                columnNumber: 13
                            }, this),
                            designToolboxOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "composer-toolbox-standalone",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "composer-toolbox-standalone-backdrop",
                                        "aria-hidden": "true",
                                        onClick: ()=>setDesignToolboxOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2398,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__popup composer-toolbox-standalone-popup",
                                        role: "menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignToolboxPanel, {
                                            actions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_TOOLBOX_ACTIONS"],
                                            skills: skills,
                                            plugins: pluginsForComposer,
                                            mcpServers: enabledMcpServers,
                                            mcpTemplates: mcpTemplates,
                                            connectors: connectors,
                                            projectFiles: projectFiles,
                                            activeSkillIds: stagedSkills.map((skill)=>skill.id),
                                            activePluginId: activeAppliedPlugin?.pluginId ?? pinnedPluginId ?? null,
                                            activeMcpServerIds: stagedMcpServers.map((server)=>server.id),
                                            activeConnectorIds: stagedConnectors.map((connector)=>connector.id),
                                            activeFilePaths: staged.map((item)=>item.path),
                                            onOpened: ()=>trackDesignToolbox({
                                                    element: 'design_toolbox_open'
                                                }),
                                            onPickAction: (action)=>{
                                                trackDesignToolbox({
                                                    element: 'design_toolbox_action',
                                                    toolbox_action_id: action.id
                                                });
                                                applyDesignToolboxAction(action);
                                                setDesignToolboxOpen(false);
                                            },
                                            onPickSkill: (skill)=>{
                                                trackDesignToolbox({
                                                    element: 'design_toolbox_resource',
                                                    resource_kind: 'skill',
                                                    resource_id: skill.id
                                                });
                                                applyDesignToolboxSkill(skill);
                                                setDesignToolboxOpen(false);
                                            },
                                            onPickResource: (resource)=>{
                                                trackDesignToolbox({
                                                    element: 'design_toolbox_resource',
                                                    ...designToolboxResourceTracking(resource)
                                                });
                                                applyDesignToolboxResource(resource);
                                                setDesignToolboxOpen(false);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 2407,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2403,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2394,
                                columnNumber: 15
                            }, this) : null,
                            leadingAccessory,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "composer-spacer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2451,
                                columnNumber: 13
                            }, this),
                            footerAccessory,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SessionModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionModeToggle"], {
                                mode: sessionMode,
                                onChange: (next)=>{
                                    if (next !== sessionMode) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerSessionModeClick"])(analytics.track, {
                                            page_name: 'chat_panel',
                                            area: 'chat_composer',
                                            element: 'session_mode_toggle',
                                            mode_before: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionModeToTracking"])(sessionMode),
                                            mode_after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionModeToTracking"])(next),
                                            ...projectId ? {
                                                project_id: projectId
                                            } : {}
                                        });
                                    }
                                    onSessionModeChange?.(next);
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2453,
                                columnNumber: 13
                            }, this),
                            showStopButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "composer-send stop od-tooltip",
                                onClick: onStop,
                                title: t('chat.stop'),
                                "data-tooltip": t('chat.stop'),
                                "aria-label": t('chat.stop'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "stop",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2478,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('chat.stop')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2479,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2470,
                                columnNumber: 15
                            }, this) : null,
                            showSendButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "composer-send od-tooltip",
                                "data-testid": "chat-send",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackChatPanelClick"])(analytics.track, {
                                        page_name: 'chat_panel',
                                        area: 'chat_panel',
                                        element: 'send'
                                    });
                                    void submit();
                                },
                                disabled: sendDisabled || !hasComposerPayload,
                                "aria-label": t('chat.send'),
                                title: t('chat.send'),
                                "data-tooltip": t('chat.send'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "send",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2500,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('chat.send')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2501,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2483,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2282,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 2121,
                columnNumber: 9
            }, this),
            projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-workdir-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$WorkingDirPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkingDirPicker"], {
                    placement: "up",
                    workingDir: workingDir,
                    invalid: workingDirMissing,
                    recentDirs: recentDirs,
                    onOpen: ()=>void checkWorkingDir(),
                    onPickDirectory: ()=>{
                        // Fire on the click itself (intent), matching the home
                        // composer's working_dir* elements so one dashboard counts the
                        // action across both surfaces.
                        trackComposerBar({
                            element: 'working_dir'
                        });
                        void handlePickWorkingDir();
                    },
                    onSelectRecent: (dir)=>{
                        trackComposerBar({
                            element: 'working_dir_recent'
                        });
                        void setWorkingDirFolder(dir);
                    },
                    onClear: ()=>{
                        trackComposerBar({
                            element: 'working_dir_clear'
                        });
                        void clearWorkingDir();
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 2508,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 2507,
                columnNumber: 11
            }, this) : null,
            uploadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "composer-hint",
                children: uploadError
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 2532,
                columnNumber: 24
            }, this) : null,
            detailsRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginDetailsModal"], {
                record: detailsRecord,
                onClose: ()=>setDetailsRecord(null),
                onUse: async (record)=>{
                    inlineBackedPluginRef.current = null;
                    await pluginsSectionRef.current?.applyById(record.id, record);
                    setDetailsRecord(null);
                },
                hideUseAction: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 2534,
                columnNumber: 11
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 2106,
        columnNumber: 7
    }, this);
}, "KO1H/2KwHjbFJsYzRg52aKpdYmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
})), "KO1H/2KwHjbFJsYzRg52aKpdYmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = ChatComposer;
function buildComposerMentionEntities({ connectors, files, mcpServers, plugins, skills, staged, workspaceContexts }) {
    const entities = [];
    const workspaceSeen = new Set();
    for (const item of workspaceContexts){
        if (!item.id || !item.label) continue;
        const key = `workspace:${item.id}`;
        if (workspaceSeen.has(key)) continue;
        workspaceSeen.add(key);
        entities.push({
            id: item.id,
            kind: 'workspace',
            label: item.label,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(item.label),
            title: `Workspace: ${item.label}`
        });
    }
    for (const plugin of plugins){
        entities.push({
            id: plugin.id,
            kind: 'plugin',
            label: plugin.title,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(plugin.title),
            title: `Plugin: ${plugin.title}`
        });
    }
    for (const skill of skills){
        entities.push({
            id: skill.id,
            kind: 'skill',
            label: skill.name,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(skill.name),
            title: `Skill: ${skill.name}`
        });
        if (skill.id !== skill.name) {
            entities.push({
                id: skill.id,
                kind: 'skill',
                label: skill.id,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(skill.id),
                title: `Skill: ${skill.name}`
            });
        }
    }
    for (const server of mcpServers){
        const label = server.label || server.id;
        entities.push({
            id: server.id,
            kind: 'mcp',
            label,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(label),
            title: `MCP: ${label}`
        });
        if (server.id !== label) {
            entities.push({
                id: server.id,
                kind: 'mcp',
                label: server.id,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(server.id),
                title: `MCP: ${label}`
            });
        }
    }
    for (const connector of connectors){
        entities.push({
            id: connector.id,
            kind: 'connector',
            label: connector.name,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(connector.name),
            title: `Connector: ${connector.name}`
        });
        if (connector.id !== connector.name) {
            entities.push({
                id: connector.id,
                kind: 'connector',
                label: connector.id,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(connector.id),
                title: `Connector: ${connector.name}`
            });
        }
    }
    const filePaths = new Set();
    for (const file of files){
        const path = file.path ?? file.name;
        if (!path || filePaths.has(path)) continue;
        filePaths.add(path);
        entities.push({
            id: path,
            kind: 'file',
            label: path,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(path),
            title: `File: ${path}`
        });
    }
    for (const attachment of staged){
        if (!attachment.path || filePaths.has(attachment.path)) continue;
        filePaths.add(attachment.path);
        entities.push({
            id: attachment.path,
            kind: 'file',
            label: attachment.path,
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(attachment.path),
            title: `File: ${attachment.path}`
        });
    }
    return entities;
}
function isFiniteAttachmentOrder(value) {
    return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}
function normalizeChatAttachmentOrders(attachments) {
    let fallbackOrder = 0;
    return attachments.map((attachment)=>{
        if (isFiniteAttachmentOrder(attachment.order)) {
            fallbackOrder = Math.max(fallbackOrder, Math.floor(attachment.order) + 1);
            return {
                ...attachment,
                order: Math.floor(attachment.order)
            };
        }
        const order = fallbackOrder;
        fallbackOrder += 1;
        return {
            ...attachment,
            order
        };
    });
}
function assignChatAttachmentOrders(attachments, orderStart) {
    return attachments.map((attachment, index)=>({
            ...attachment,
            order: orderStart + index
        }));
}
function nextChatAttachmentOrder(attachments) {
    return attachments.reduce((max, attachment, index)=>Math.max(max, isFiniteAttachmentOrder(attachment.order) ? Math.floor(attachment.order) + 1 : index + 1), 0);
}
function sortChatAttachmentsByOrder(attachments) {
    return attachments.map((attachment, index)=>({
            attachment,
            index
        })).sort((a, b)=>{
        const aOrder = isFiniteAttachmentOrder(a.attachment.order) ? a.attachment.order : a.index;
        const bOrder = isFiniteAttachmentOrder(b.attachment.order) ? b.attachment.order : b.index;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.index - b.index;
    }).map((entry)=>entry.attachment);
}
function sortChatCommentAttachmentsByOrder(attachments) {
    return attachments.map((attachment, index)=>({
            attachment,
            index
        })).sort((a, b)=>{
        const aOrder = isFiniteAttachmentOrder(a.attachment.order) ? a.attachment.order : a.index;
        const bOrder = isFiniteAttachmentOrder(b.attachment.order) ? b.attachment.order : b.index;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.index - b.index;
    }).map((entry)=>entry.attachment);
}
function workspaceContextIcon(item) {
    if (item.kind === 'browser') return 'globe';
    if (item.kind === 'folder' || item.kind === 'design-files') return 'folder';
    if (item.kind === 'terminal') return 'terminal';
    if (item.kind === 'side-chat') return 'comment';
    if (item.kind === 'design-system') return 'blocks';
    return 'file';
}
function workspaceContextTitle(item) {
    return [
        workspaceContextKindLabel(item.kind),
        item.path ? `path: ${item.path}` : null,
        item.absolutePath ? `absolute: ${item.absolutePath}` : null,
        item.url ? `url: ${item.url}` : null,
        item.title ? `title: ${item.title}` : null
    ].filter(Boolean).join(' | ');
}
function workspaceContextDescription(item) {
    if (item.kind === 'design-files') return item.path || 'Project files';
    if (item.kind === 'terminal') return item.title || 'Terminal session';
    return item.url || item.path || item.absolutePath || item.title || item.tabId || item.id;
}
function lastPathSegment(path) {
    const normalized = path.replace(/\\/g, '/').replace(/\/+$/, '');
    return normalized.split('/').filter(Boolean).pop() || path;
}
function projectFileMentionTitle(file, fallback) {
    return file.name || lastPathSegment(fallback);
}
function projectFileMentionDescription(file, fallback) {
    const label = projectFileMentionTitle(file, fallback);
    if (fallback && fallback !== label) return fallback;
    return [
        file.kind,
        file.mime
    ].filter(Boolean).join(' · ');
}
function workspaceContextSearchText(item) {
    return [
        item.id,
        item.kind,
        item.label,
        item.tabId ?? '',
        item.path ?? '',
        item.absolutePath ?? '',
        item.url ?? '',
        item.title ?? ''
    ].join(' ');
}
function workspaceContextKindLabel(kind) {
    switch(kind){
        case 'browser':
            return 'Browser';
        case 'design-files':
            return 'Design files';
        case 'design-system':
            return 'Design system';
        case 'folder':
            return 'Folder';
        case 'terminal':
            return 'Terminal';
        case 'side-chat':
            return 'Side chat';
        case 'live-artifact':
            return 'Live artifact';
        case 'file':
        default:
            return 'File';
    }
}
function StagedRunContexts({ designSystemPicker, workspaceItems, currentWorkspaceContextId, skills, mcpServers, connectors, attachments, pluginChip, projectId, onRemoveWorkspace, onRemoveSkill, onRemoveMcp, onRemoveConnector, onRemoveAttachment, onRemovePlugin, onPluginDetails, t }) {
    _s1();
    // Attachment thumbnails preview in a portal modal; keep that state here so the
    // file chips can live in the same wrap row as the design-system picker and
    // other run-context chips (so files flow to the picker's right, wrapping to a
    // new line only when the row fills) instead of forcing a separate row below.
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const previewUrl = preview && projectId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, preview.path) : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagedRunContexts.useEffect": ()=>{
            if (!preview) return;
            function onKey(e) {
                if (e.key === 'Escape') setPreview(null);
            }
            window.addEventListener('keydown', onKey);
            return ({
                "StagedRunContexts.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["StagedRunContexts.useEffect"];
        }
    }["StagedRunContexts.useEffect"], [
        preview
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "staged-row staged-context-row",
                "data-testid": "staged-contexts",
                children: [
                    designSystemPicker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "staged-context-picker staged-context-picker--design-system",
                        children: designSystemPicker
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2865,
                        columnNumber: 9
                    }, this) : null,
                    pluginChip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "staged-chip staged-context staged-context--plugin",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "staged-context-open",
                                onClick: ()=>onPluginDetails?.(pluginChip.id),
                                title: pluginChip.title,
                                "aria-label": pluginChip.title,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "staged-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 2883,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2882,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "staged-name",
                                        children: pluginChip.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2885,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2875,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "staged-remove od-tooltip",
                                onClick: ()=>onRemovePlugin?.(),
                                title: t('common.delete'),
                                "data-tooltip": t('common.delete'),
                                "aria-label": t('chat.removeAria', {
                                    name: pluginChip.title
                                }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2895,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 2887,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 2870,
                        columnNumber: 9
                    }, this) : null,
                    workspaceItems.map((workspaceItem)=>{
                        const kindLabel = workspaceItem.id === currentWorkspaceContextId ? 'Current' : workspaceContextKindLabel(workspaceItem.kind);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `staged-chip staged-context staged-context--workspace staged-context--workspace-${workspaceItem.kind}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-icon",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: workspaceContextIcon(workspaceItem),
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2910,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2909,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-name",
                                    title: workspaceContextTitle(workspaceItem),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "staged-context-kind",
                                            children: kindLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 2913,
                                            columnNumber: 15
                                        }, this),
                                        workspaceItem.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2912,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-remove od-tooltip",
                                    onClick: ()=>onRemoveWorkspace(workspaceItem.id),
                                    title: t('common.delete'),
                                    "data-tooltip": t('common.delete'),
                                    "aria-label": t('chat.removeAria', {
                                        name: workspaceItem.label
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2924,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2916,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, workspaceItem.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2905,
                            columnNumber: 11
                        }, this);
                    }),
                    skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `staged-chip staged-context staged-context--skill staged-skill-${s.source ?? 'built-in'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-icon",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "sparkles",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2935,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2934,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-name",
                                    title: s.description || s.name,
                                    children: [
                                        "@",
                                        s.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2937,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-remove od-tooltip",
                                    onClick: ()=>onRemoveSkill(s.id),
                                    title: t('common.delete'),
                                    "data-tooltip": t('common.delete'),
                                    "aria-label": t('chat.removeAria', {
                                        name: s.name
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2948,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2940,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2930,
                            columnNumber: 9
                        }, this)),
                    mcpServers.map((server)=>{
                        const label = server.label || server.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "staged-chip staged-context staged-context--mcp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-icon",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "link",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2960,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2959,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-name",
                                    title: server.command || server.url || server.id,
                                    children: [
                                        "@",
                                        label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2962,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-remove od-tooltip",
                                    onClick: ()=>onRemoveMcp(server.id),
                                    title: t('common.delete'),
                                    "data-tooltip": t('common.delete'),
                                    "aria-label": t('chat.removeAria', {
                                        name: label
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2973,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2965,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, server.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2955,
                            columnNumber: 11
                        }, this);
                    }),
                    connectors.map((connector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "staged-chip staged-context staged-context--connector",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-icon",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "link",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2984,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2983,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-name",
                                    title: connector.accountLabel ?? connector.provider,
                                    children: [
                                        "@",
                                        connector.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2986,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-remove od-tooltip",
                                    onClick: ()=>onRemoveConnector(connector.id),
                                    title: t('common.delete'),
                                    "data-tooltip": t('common.delete'),
                                    "aria-label": t('chat.removeAria', {
                                        name: connector.name
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 2997,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 2989,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, connector.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 2979,
                            columnNumber: 9
                        }, this)),
                    attachments.map((a, index)=>{
                        const canPreview = a.kind === 'image' && Boolean(projectId);
                        const imageUrl = canPreview ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, a.path) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `staged-chip staged-${a.kind}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "staged-order",
                                    "aria-label": `Attachment ${index + 1}`,
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3006,
                                    columnNumber: 13
                                }, this),
                                canPreview && imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-preview-trigger",
                                    onClick: ()=>setPreview(a),
                                    title: a.path,
                                    "aria-label": `Preview ${a.name}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageUrl,
                                            alt: "",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3017,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "staged-name",
                                            children: a.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3018,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3010,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "staged-icon",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "file",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                lineNumber: 3023,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3022,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "staged-name",
                                            title: a.path,
                                            children: a.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3025,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "staged-remove od-tooltip",
                                    onClick: ()=>onRemoveAttachment(a.path),
                                    title: t('common.delete'),
                                    "data-tooltip": t('common.delete'),
                                    "aria-label": t('chat.removeAria', {
                                        name: a.name
                                    }),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3038,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3030,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, a.path, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3005,
                            columnNumber: 11
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 2860,
                columnNumber: 5
            }, this),
            preview && previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "staged-preview-modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": preview.name,
                onMouseDown: (e)=>{
                    if (e.target === e.currentTarget) setPreview(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "staged-preview-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "staged-preview-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    title: preview.path,
                                    children: preview.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3056,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "icon-only od-tooltip",
                                    onClick: ()=>setPreview(null),
                                    "aria-label": t('common.close'),
                                    title: t('common.close'),
                                    "data-tooltip": t('common.close'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3065,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3057,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3055,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewUrl,
                            alt: preview.name
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3068,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3054,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3045,
                columnNumber: 7
            }, this), document.body) : null
        ]
    }, void 0, true);
}
_s1(StagedRunContexts, "5VuVSw1eIzgkSAd6QdkZxlxr5iE=");
_c2 = StagedRunContexts;
function StagedCommentAttachments({ attachments, onRemove, t }) {
    const visibleAttachments = attachments.filter((attachment)=>attachment.selectionKind !== 'visual');
    if (visibleAttachments.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "staged-row comment-staged-row",
        "data-testid": "staged-comment-attachments",
        children: visibleAttachments.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "staged-chip staged-comment",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "staged-name",
                        title: `${a.screenshotPath ? `${a.screenshotPath}: ` : ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(a)}${a.comment ? `: ${a.comment}` : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(a)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3096,
                                columnNumber: 13
                            }, this),
                            a.comment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: a.comment
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3097,
                                columnNumber: 26
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3092,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "staged-remove od-tooltip",
                        onClick: ()=>onRemove(a.id),
                        title: t('chat.comments.removeAttachment'),
                        "data-tooltip": t('chat.comments.removeAttachment'),
                        "aria-label": t('chat.comments.removeAttachmentAria', {
                            name: a.elementId
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 11
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3099,
                        columnNumber: 11
                    }, this)
                ]
            }, a.id, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3091,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 3089,
        columnNumber: 5
    }, this);
}
_c3 = StagedCommentAttachments;
function ToolsPluginsPanel({ plugins, activePluginId, onApply, onShowDetails }) {
    _s2();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [pendingId, setPendingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('community');
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const communityPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsPluginsPanel.useMemo[communityPlugins]": ()=>plugins.filter({
                "ToolsPluginsPanel.useMemo[communityPlugins]": (p)=>p.sourceKind === 'bundled'
            }["ToolsPluginsPanel.useMemo[communityPlugins]"])
    }["ToolsPluginsPanel.useMemo[communityPlugins]"], [
        plugins
    ]);
    const userPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsPluginsPanel.useMemo[userPlugins]": ()=>plugins.filter({
                "ToolsPluginsPanel.useMemo[userPlugins]": (p)=>USER_PLUGIN_SOURCE_KINDS.has(p.sourceKind)
            }["ToolsPluginsPanel.useMemo[userPlugins]"])
    }["ToolsPluginsPanel.useMemo[userPlugins]"], [
        plugins
    ]);
    const scopedPlugins = source === 'community' ? communityPlugins : userPlugins;
    const visiblePlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsPluginsPanel.useMemo[visiblePlugins]": ()=>scopedPlugins.filter({
                "ToolsPluginsPanel.useMemo[visiblePlugins]": (p)=>pluginMatchesQuery(p, query)
            }["ToolsPluginsPanel.useMemo[visiblePlugins]"])
    }["ToolsPluginsPanel.useMemo[visiblePlugins]"], [
        scopedPlugins,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-filter",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-tools-segments",
                        role: "tablist",
                        "aria-label": "Plugin source",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": source === 'community',
                                className: `composer-tools-segment${source === 'community' ? ' active' : ''}`,
                                onClick: ()=>setSource('community'),
                                title: `${communityPlugins.length} installed official plugins`,
                                children: "Official"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": source === 'mine',
                                className: `composer-tools-segment${source === 'mine' ? ' active' : ''}`,
                                onClick: ()=>setSource('mine'),
                                title: `${userPlugins.length} installed user plugins`,
                                children: "My plugins"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "composer-tools-search",
                        value: query,
                        onChange: (e)=>setQuery(e.currentTarget.value),
                        placeholder: "Search plugins…",
                        "aria-label": "Search plugins"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3146,
                columnNumber: 7
            }, this),
            visiblePlugins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-empty",
                children: plugins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "No plugins installed yet. Browse Official or add your own with",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            children: "od plugin install <source>"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3182,
                            columnNumber: 15
                        }, this),
                        "."
                    ]
                }, void 0, true) : query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "No ",
                        source === 'community' ? 'Official' : 'My plugins',
                        " results for “",
                        query,
                        "”."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "No ",
                        source === 'community' ? 'Official' : 'My plugins',
                        " plugins available."
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3178,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-list",
                children: visiblePlugins.map((p)=>{
                    const pluginTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, p);
                    const pluginDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, p);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `composer-tools-row composer-tools-row--plugin${p.id === activePluginId ? ' active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "composer-tools-row-main",
                                onMouseDown: (e)=>e.preventDefault(),
                                onClick: async ()=>{
                                    setPendingId(p.id);
                                    try {
                                        await onApply(p);
                                    } finally{
                                        setPendingId(null);
                                    }
                                },
                                disabled: pendingId !== null,
                                "aria-busy": pendingId === p.id ? 'true' : undefined,
                                title: pluginDescription || pluginTitle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "sparkles",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3218,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "composer-tools-row-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: pluginTitle
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                lineNumber: 3220,
                                                columnNumber: 19
                                            }, this),
                                            pluginDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "composer-tools-row-meta",
                                                children: pluginDescription
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                lineNumber: 3222,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "composer-tools-row-meta",
                                                children: p.id
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                lineNumber: 3226,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3219,
                                        columnNumber: 17
                                    }, this),
                                    pendingId === p.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "composer-tools-row-pending",
                                        children: "Applying…"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3230,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "composer-tools-row-side",
                                onMouseDown: (e)=>e.preventDefault(),
                                onClick: ()=>onShowDetails(p),
                                title: `View details for ${pluginTitle}`,
                                "aria-label": `View details for ${pluginTitle}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "eye",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3241,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3233,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3196,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3191,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s2(ToolsPluginsPanel, "EWWKFDx5ynRMTasvzOHaeN48yvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c4 = ToolsPluginsPanel;
function ToolsMcpPanel({ servers, templates, onInsert, onManage }) {
    _s3();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const visibleServers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsMcpPanel.useMemo[visibleServers]": ()=>servers.filter({
                "ToolsMcpPanel.useMemo[visibleServers]": (s)=>mcpServerMatchesQuery(s, query)
            }["ToolsMcpPanel.useMemo[visibleServers]"])
    }["ToolsMcpPanel.useMemo[visibleServers]"], [
        servers,
        query
    ]);
    const visibleTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsMcpPanel.useMemo[visibleTemplates]": ()=>templates.filter({
                "ToolsMcpPanel.useMemo[visibleTemplates]": (tpl)=>mcpTemplateMatchesQuery(tpl, query)
            }["ToolsMcpPanel.useMemo[visibleTemplates]"]).slice(0, 8)
    }["ToolsMcpPanel.useMemo[visibleTemplates]"], [
        templates,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-filter",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "composer-tools-search",
                    value: query,
                    onChange: (e)=>setQuery(e.currentTarget.value),
                    placeholder: "Search MCP…",
                    "aria-label": "Search MCP servers and templates"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3275,
                columnNumber: 7
            }, this),
            visibleServers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-empty",
                children: servers.length === 0 ? 'No enabled MCP servers configured yet.' : `No configured MCP results for “${query}”.`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3285,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-tools-section-label",
                        children: "Configured"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3292,
                        columnNumber: 11
                    }, this),
                    visibleServers.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "menuitem",
                            className: "composer-tools-row",
                            onMouseDown: (e)=>e.preventDefault(),
                            onClick: ()=>onInsert(s.id),
                            title: `Insert a hint that nudges the model to use ${s.label || s.id}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "link",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3303,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "composer-tools-row-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: s.label || s.id
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3305,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "composer-tools-row-meta",
                                            children: s.transport
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3306,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3304,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3294,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3291,
                columnNumber: 9
            }, this),
            visibleTemplates.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "composer-tools-section-label",
                        children: "Templates"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3314,
                        columnNumber: 11
                    }, this),
                    visibleTemplates.map((tpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "menuitem",
                            className: "composer-tools-row",
                            onMouseDown: (e)=>e.preventDefault(),
                            onClick: onManage,
                            title: `Add ${tpl.label} from Settings`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "plus",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "composer-tools-row-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: tpl.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "composer-tools-row-meta",
                                            children: [
                                                tpl.transport,
                                                tpl.category ? ` · ${tpl.category}` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 3328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 3326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, tpl.id, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3316,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3313,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "menuitem",
                className: "composer-tools-row composer-tools-row-action",
                onMouseDown: (e)=>e.preventDefault(),
                onClick: onManage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "settings",
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Manage MCP servers…"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(ToolsMcpPanel, "eZ3ENECXQbVj2kg23JSI0otyknQ=");
_c5 = ToolsMcpPanel;
function DesignToolboxPanel({ actions, skills, plugins, mcpServers, mcpTemplates, connectors, projectFiles, activeSkillIds, activePluginId, activeMcpServerIds, activeConnectorIds, activeFilePaths, onPickAction, onPickSkill, onPickResource, onOpened }) {
    _s4();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Fire once when the toolbox panel mounts (i.e. the user opened it).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignToolboxPanel.useEffect": ()=>{
            onOpened?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DesignToolboxPanel.useEffect"], []);
    const activeSkillSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[activeSkillSet]": ()=>new Set(activeSkillIds)
    }["DesignToolboxPanel.useMemo[activeSkillSet]"], [
        activeSkillIds
    ]);
    const activeMcpServerSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[activeMcpServerSet]": ()=>new Set(activeMcpServerIds)
    }["DesignToolboxPanel.useMemo[activeMcpServerSet]"], [
        activeMcpServerIds
    ]);
    const activeConnectorSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[activeConnectorSet]": ()=>new Set(activeConnectorIds)
    }["DesignToolboxPanel.useMemo[activeConnectorSet]"], [
        activeConnectorIds
    ]);
    const activeFileSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[activeFileSet]": ()=>new Set(activeFilePaths)
    }["DesignToolboxPanel.useMemo[activeFileSet]"], [
        activeFilePaths
    ]);
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[resources]": ()=>buildDesignToolboxResources({
                skills,
                plugins,
                mcpServers,
                mcpTemplates,
                connectors,
                projectFiles,
                locale,
                t
            })
    }["DesignToolboxPanel.useMemo[resources]"], [
        connectors,
        locale,
        mcpServers,
        mcpTemplates,
        plugins,
        projectFiles,
        skills,
        t
    ]);
    const visibleActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[visibleActions]": ()=>actions.filter({
                "DesignToolboxPanel.useMemo[visibleActions]": (action)=>{
                    const skill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDesignToolboxSkill"])(action, skills);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designToolboxActionMatchesQuery"])(action, query, skill, t, skill ? [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, skill),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillDescription"])(locale, skill)
                    ] : []);
                }
            }["DesignToolboxPanel.useMemo[visibleActions]"])
    }["DesignToolboxPanel.useMemo[visibleActions]"], [
        actions,
        query,
        skills,
        locale,
        t
    ]);
    const visibleResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignToolboxPanel.useMemo[visibleResources]": ()=>{
            const source = query ? resources.filter({
                "DesignToolboxPanel.useMemo[visibleResources]": (resource)=>designToolboxResourceMatchesQuery(resource, query)
            }["DesignToolboxPanel.useMemo[visibleResources]"]) : designToolboxDefaultResources(actions, resources);
            return source.slice(0, query ? 14 : 8);
        }
    }["DesignToolboxPanel.useMemo[visibleResources]"], [
        actions,
        query,
        resources
    ]);
    // One shared hover-detail panel for the whole list — swapping a single
    // portaled panel as the cursor sweeps rows, instead of one panel per row
    // (which ghosted: the close delay left several stacked on screen at once).
    const [toolboxDetail, setToolboxDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const detailCloseTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function cancelDetailClose() {
        if (detailCloseTimer.current) {
            clearTimeout(detailCloseTimer.current);
            detailCloseTimer.current = null;
        }
    }
    function showToolboxDetail(key, rect, node) {
        cancelDetailClose();
        // Plugin rows render a tall visual preview; the helper clamps both axes
        // into the viewport so the fixed panel never lands off-screen on a
        // narrow pane (see computeToolboxDetailPosition).
        const { left, top } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$composer$2d$detail$2d$position$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeToolboxDetailPosition"])(rect, {
            width: window.innerWidth,
            height: window.innerHeight
        }, {
            detailWidth: 264,
            gap: 8,
            margin: 8,
            estimatedHeight: 340
        });
        setToolboxDetail({
            key,
            left,
            top,
            node
        });
    }
    function scheduleToolboxDetailClose(key) {
        cancelDetailClose();
        detailCloseTimer.current = setTimeout(()=>{
            setToolboxDetail((cur)=>cur?.key === key ? null : cur);
            detailCloseTimer.current = null;
        }, 160);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignToolboxPanel.useEffect": ()=>({
                "DesignToolboxPanel.useEffect": ()=>cancelDetailClose()
            })["DesignToolboxPanel.useEffect"]
    }["DesignToolboxPanel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-design-toolbox-head",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "composer-design-toolbox-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "lightbulb",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('chat.designToolbox.title')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3477,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3475,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plus-menu__search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "search",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: query,
                        onChange: (e)=>setQuery(e.currentTarget.value),
                        placeholder: t('chat.designToolbox.searchPlaceholder'),
                        "aria-label": t('chat.designToolbox.searchAria')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3480,
                columnNumber: 7
            }, this),
            visibleActions.length > 0 || visibleResources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plus-menu__list",
                children: [
                    visibleActions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plus-menu__section-label",
                        children: t('chat.designToolbox.followupSection')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3492,
                        columnNumber: 13
                    }, this) : null,
                    visibleActions.map((action)=>{
                        const skill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDesignToolboxSkill"])(action, skills);
                        const actionTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designToolboxActionTitle"])(action, t);
                        const actionDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designToolboxActionDescription"])(action, t);
                        const skillName = skill ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, skill) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItemRow, {
                            detailKey: action.id,
                            icon: action.icon,
                            name: actionTitle,
                            onHover: showToolboxDetail,
                            onLeave: scheduleToolboxDetailClose,
                            onPick: ()=>onPickAction(action),
                            detail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-title",
                                        children: actionTitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3512,
                                        columnNumber: 21
                                    }, this),
                                    actionDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-desc",
                                        children: actionDescription
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3514,
                                        columnNumber: 23
                                    }, this) : null,
                                    skillName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-skill",
                                        children: [
                                            "@",
                                            skillName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3517,
                                        columnNumber: 23
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-badge",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designToolboxActionBadge"])(action, t)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3519,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, action.id, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3502,
                            columnNumber: 15
                        }, this);
                    }),
                    visibleResources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plus-menu__section-label",
                        children: t('chat.designToolbox.resourcesSection')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3528,
                        columnNumber: 13
                    }, this) : null,
                    visibleResources.map((resource)=>{
                        const active = designToolboxResourceIsActive(resource, {
                            skillIds: activeSkillSet,
                            pluginId: activePluginId,
                            mcpServerIds: activeMcpServerSet,
                            connectorIds: activeConnectorSet,
                            filePaths: activeFileSet
                        });
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItemRow, {
                            detailKey: resource.key,
                            icon: resource.icon,
                            name: resource.title,
                            active: active,
                            onHover: showToolboxDetail,
                            onLeave: scheduleToolboxDetailClose,
                            onPick: ()=>{
                                if (resource.kind === 'skill') {
                                    onPickSkill(resource.skill);
                                } else {
                                    onPickResource(resource);
                                }
                            },
                            detail: // Plugin rows reuse the rich visual preview (poster /
                            // sandboxed example iframe + meta); every other kind keeps
                            // the compact text detail since it has no preview asset.
                            resource.kind === 'plugin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ComposerPluginPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposerPluginPreview"], {
                                record: resource.plugin,
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3561,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-title",
                                        children: resource.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3564,
                                        columnNumber: 23
                                    }, this),
                                    resource.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-desc",
                                        children: resource.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3566,
                                        columnNumber: 25
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-skill",
                                        children: designToolboxResourceKindLabel(resource.kind, t)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3568,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plus-menu__detail-badge",
                                        children: active ? t('chat.designToolbox.selected') : resource.badge
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3571,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true)
                        }, resource.key, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 3541,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3490,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plus-menu__empty",
                children: t('chat.designToolbox.noResources', {
                    query
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3582,
                columnNumber: 9
            }, this),
            toolboxDetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plus-menu__detail",
                style: {
                    left: toolboxDetail.left,
                    top: toolboxDetail.top
                },
                onMouseEnter: cancelDetailClose,
                onMouseLeave: ()=>scheduleToolboxDetailClose(toolboxDetail.key),
                children: toolboxDetail.node
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3588,
                columnNumber: 13
            }, this), document.body) : null
        ]
    }, void 0, true);
}
_s4(DesignToolboxPanel, "+VFf2VTDiv3zp13nd5ZU9ixi730=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c6 = DesignToolboxPanel;
// A single toolbox row, styled like the Connectors/Plugins submenu rows
// (single line: icon + name). Clicking applies the entry; hovering shows a
// third-level detail panel (title / description / @skill / badge). The detail
// panel is PORTALED to <body> because the parent flyout uses `overflow-y: auto`
// (height-capped scroll) which would otherwise clip a nested panel.
// The hover detail panel is owned by the PARENT
// (DesignToolboxPanel) as ONE shared panel — not per-row — so sweeping across
// rows swaps the single panel in place instead of stacking several portaled
// panels that briefly coexist (the close delay would otherwise leave 2-4 of
// them on screen at once, reading as ghosting). The row just reports hover
// enter/leave with its rect + detail node.
function ToolboxItemRow({ icon, name, active, detailKey, detail, onHover, onLeave, onPick }) {
    _s5();
    const rowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rowRef,
        className: "plus-menu__subitem",
        onMouseEnter: ()=>{
            const r = rowRef.current?.getBoundingClientRect();
            if (r) onHover(detailKey, r, detail);
        },
        onMouseLeave: ()=>onLeave(detailKey),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            role: "menuitem",
            className: `plus-menu__item${active ? ' is-active' : ''}`,
            onMouseDown: (e)=>e.preventDefault(),
            onClick: onPick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 15,
                    className: "plus-menu__item-icon"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3651,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: name
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3652,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
            lineNumber: 3644,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 3635,
        columnNumber: 5
    }, this);
}
_s5(ToolboxItemRow, "jkSFfUDn015jra863g3ltOIpJlE=");
_c7 = ToolboxItemRow;
function ToolsSkillsPanel({ skills, currentSkillId, onPick }) {
    _s6();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pendingId, setPendingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const visibleSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolsSkillsPanel.useMemo[visibleSkills]": ()=>skills.filter({
                "ToolsSkillsPanel.useMemo[visibleSkills]": (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillMatchesQuery"])(s, query)
            }["ToolsSkillsPanel.useMemo[visibleSkills]"]).slice(0, 24)
    }["ToolsSkillsPanel.useMemo[visibleSkills]"], [
        skills,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-filter",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "composer-tools-search",
                    value: query,
                    onChange: (e)=>setQuery(e.currentTarget.value),
                    placeholder: "Search skills…",
                    "aria-label": "Search skills"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 3677,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3676,
                columnNumber: 7
            }, this),
            visibleSkills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-empty",
                children: skills.length === 0 ? 'No skills available yet.' : `No skills found for “${query}”.`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3686,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "composer-tools-list",
                children: visibleSkills.map((skill)=>{
                    const active = skill.id === currentSkillId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        className: `composer-tools-row${active ? ' active' : ''}`,
                        onMouseDown: (e)=>e.preventDefault(),
                        onClick: async ()=>{
                            setPendingId(skill.id);
                            try {
                                await onPick(skill);
                            } finally{
                                setPendingId(null);
                            }
                        },
                        disabled: pendingId !== null,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillDescription"])(locale, skill),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: active ? 'check' : 'file',
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3711,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "composer-tools-row-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, skill)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3713,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "composer-tools-row-meta",
                                        children: [
                                            skill.mode,
                                            skill.surface ? ` · ${skill.surface}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                        lineNumber: 3714,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3712,
                                columnNumber: 17
                            }, this),
                            pendingId === skill.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "composer-tools-row-pending",
                                children: "Applying…"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 3720,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, skill.id, true, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 3694,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 3690,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s6(ToolsSkillsPanel, "D/yyMFaCPTWARWu6PGWDopDZqdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c8 = ToolsSkillsPanel;
function pluginMatchesQuery(plugin, query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
        plugin.title,
        plugin.id,
        plugin.sourceKind,
        plugin.source,
        plugin.manifest?.description ?? '',
        ...plugin.manifest?.tags ?? []
    ].join(' ').toLowerCase().includes(q);
}
function buildDesignToolboxResources({ skills, plugins, mcpServers, mcpTemplates, connectors, projectFiles, locale, t }) {
    const resources = [];
    for (const skill of skills){
        const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, skill);
        const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillDescription"])(locale, skill);
        resources.push({
            key: `skill:${skill.id}`,
            kind: 'skill',
            id: skill.id,
            title,
            subtitle,
            badge: designToolboxSkillBadge(skill, t),
            icon: designToolboxSkillIcon(skill),
            searchText: [
                'skill',
                skill.id,
                skill.name,
                title,
                subtitle,
                skill.mode,
                skill.surface ?? '',
                skill.category ?? '',
                ...skill.triggers
            ].join(' '),
            skill
        });
    }
    for (const plugin of plugins){
        const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, plugin) || plugin.id;
        resources.push({
            key: `plugin:${plugin.id}`,
            kind: 'plugin',
            id: plugin.id,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, plugin),
            subtitle,
            badge: plugin.manifest?.od?.kind ?? 'plugin',
            icon: 'sparkles',
            searchText: [
                'plugin',
                plugin.id,
                plugin.title,
                plugin.sourceKind,
                plugin.source,
                subtitle,
                ...plugin.manifest?.tags ?? [],
                plugin.manifest?.od?.kind ?? '',
                plugin.manifest?.od?.scenario ?? '',
                plugin.manifest?.od?.mode ?? ''
            ].join(' '),
            plugin
        });
    }
    for (const server of mcpServers){
        const title = server.label || server.id;
        const subtitle = server.command || server.url || server.transport;
        resources.push({
            key: `mcp:${server.id}`,
            kind: 'mcp',
            id: server.id,
            title,
            subtitle,
            badge: 'MCP',
            icon: 'link',
            searchText: [
                'mcp',
                server.id,
                title,
                subtitle,
                server.transport,
                server.templateId ?? ''
            ].join(' '),
            server
        });
    }
    for (const template of mcpTemplates){
        resources.push({
            key: `mcp-template:${template.id}`,
            kind: 'mcp-template',
            id: template.id,
            title: template.label,
            subtitle: template.description,
            badge: template.category,
            icon: 'plus',
            searchText: [
                'mcp template',
                template.id,
                template.label,
                template.description,
                template.transport,
                template.category,
                template.homepage ?? '',
                template.example ?? ''
            ].join(' '),
            template
        });
    }
    for (const connector of connectors){
        const toolCount = connector.toolCount ?? connector.tools.length;
        resources.push({
            key: `connector:${connector.id}`,
            kind: 'connector',
            id: connector.id,
            title: connector.name,
            subtitle: [
                connector.description ?? connector.provider,
                toolCount > 0 ? `${toolCount} tools` : null,
                connector.accountLabel ?? null
            ].filter(Boolean).join(' · '),
            badge: connector.category || 'connector',
            icon: 'link',
            searchText: [
                'connector',
                connector.id,
                connector.name,
                connector.provider,
                connector.category,
                connector.description ?? '',
                connector.accountLabel ?? '',
                ...connector.featuredToolNames ?? [],
                ...connector.allowedToolNames ?? [],
                ...connector.tools.slice(0, 20).flatMap((tool)=>[
                        tool.name,
                        tool.title,
                        tool.description ?? ''
                    ])
            ].join(' '),
            connector
        });
    }
    const seenFiles = new Set();
    for (const file of projectFiles){
        if (file.type === 'dir') continue;
        const path = file.path ?? file.name;
        if (!path || seenFiles.has(path)) continue;
        seenFiles.add(path);
        resources.push({
            key: `file:${path}`,
            kind: 'file',
            id: path,
            title: path,
            subtitle: [
                file.kind,
                file.mime,
                file.artifactKind ?? ''
            ].filter(Boolean).join(' · '),
            badge: file.artifactKind ?? file.kind,
            icon: looksLikeImage(path) ? 'image' : 'file',
            searchText: [
                'file',
                'design file',
                path,
                file.name,
                file.kind,
                file.mime,
                file.artifactKind ?? ''
            ].join(' '),
            file
        });
    }
    return resources;
}
function designToolboxResourceMatchesQuery(resource, query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return resource.searchText.toLowerCase().includes(q);
}
function designToolboxDefaultResources(actions, resources) {
    const out = [];
    const seen = new Set();
    function add(resource) {
        if (!resource || seen.has(resource.key)) return;
        seen.add(resource.key);
        out.push(resource);
    }
    function addByKindId(kind, id) {
        add(resources.find((resource)=>resource.kind === kind && resource.id === id));
    }
    addByKindId('skill', 'creative-director');
    for (const action of actions){
        const skill = resources.find((resource)=>resource.kind === 'skill' && action.preferredSkillIds.some((id)=>resource.skill.id === id || resource.skill.name === id));
        add(skill);
    }
    for (const term of [
        'design',
        'image',
        'video',
        'motion',
        'figma'
    ]){
        for (const resource of resources){
            if (out.length >= 8) return out;
            if (resource.kind !== 'skill' && designToolboxResourceMatchesQuery(resource, term)) {
                add(resource);
            }
        }
    }
    return out;
}
function designToolboxResourceKindLabel(kind, t) {
    switch(kind){
        case 'skill':
            return t('chat.designToolbox.kind.skill');
        case 'plugin':
            return t('chat.designToolbox.kind.plugin');
        case 'mcp':
            return t('chat.designToolbox.kind.mcp');
        case 'mcp-template':
            return t('chat.designToolbox.kind.mcpTemplate');
        case 'connector':
            return t('chat.designToolbox.kind.connector');
        case 'file':
            return t('chat.designToolbox.kind.designFile');
    }
}
function designToolboxResourceIsActive(resource, active) {
    switch(resource.kind){
        case 'skill':
            return active.skillIds.has(resource.skill.id);
        case 'plugin':
            return active.pluginId === resource.plugin.id;
        case 'mcp':
            return active.mcpServerIds.has(resource.server.id);
        case 'connector':
            return active.connectorIds.has(resource.connector.id);
        case 'file':
            return active.filePaths.has(resource.file.path ?? resource.file.name);
        case 'mcp-template':
            return false;
    }
}
function isDesignToolboxSkill(skill) {
    const category = skill.category ?? '';
    if ([
        'animation-motion',
        'creative-direction',
        'image-generation',
        'video-generation',
        'web-artifacts'
    ].includes(category)) {
        return true;
    }
    return [
        'animation',
        'motion',
        'gsap',
        'polish',
        'critique',
        'taste',
        'anti slop',
        'anti ai',
        'image',
        'video',
        'frontend',
        'beautify'
    ].some((term)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillMatchesQuery"])(skill, term));
}
function designToolboxDefaultSkills(actions, skills) {
    const out = [];
    const seen = new Set();
    function add(skill) {
        if (!skill || seen.has(skill.id)) return;
        seen.add(skill.id);
        out.push(skill);
    }
    for (const action of actions){
        add((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDesignToolboxSkill"])(action, skills));
    }
    for (const action of actions){
        for (const id of action.preferredSkillIds){
            add(skills.find((skill)=>skill.id === id || skill.name === id));
        }
    }
    return out;
}
function designToolboxSkillBadge(skill, t) {
    if (skill.mode === 'video' || skill.category === 'video-generation') return t('chat.designToolbox.badge.video');
    if (skill.mode === 'image' || skill.category === 'image-generation') return t('chat.designToolbox.badge.image');
    if (skill.category === 'animation-motion') return t('chat.designToolbox.badge.motion');
    if (skill.category === 'creative-direction') return t('chat.designToolbox.badge.polish');
    return skill.mode;
}
function designToolboxSkillIcon(skill) {
    if (skill.mode === 'video' || skill.category === 'video-generation') return 'play';
    if (skill.mode === 'image' || skill.category === 'image-generation') return 'image';
    if (skill.category === 'animation-motion') return 'sliders';
    if (skill.category === 'creative-direction') return 'sparkles';
    return 'file';
}
function designToolboxContextLine(workspaceItem, t) {
    if (!workspaceItem) {
        return t('chat.designToolbox.prompt.contextGeneric');
    }
    const label = workspaceItem.label || workspaceItem.path || workspaceItem.title || workspaceItem.id;
    return t('chat.designToolbox.prompt.contextSpecific', {
        kind: designToolboxWorkspaceKindLabel(workspaceItem.kind, t),
        label
    });
}
function designToolboxDraftLine(activeDraft, t) {
    const trimmed = activeDraft.trim();
    if (!trimmed) return '';
    return t('chat.designToolbox.prompt.preserveDraft', {
        draft: trimmed
    });
}
function designToolboxWorkspaceKindLabel(kind, t) {
    switch(kind){
        case 'browser':
            return t('chat.designToolbox.context.browser');
        case 'design-files':
            return t('chat.designToolbox.context.designFiles');
        case 'design-system':
            return t('chat.designToolbox.context.designSystem');
        case 'folder':
            return t('chat.designToolbox.context.folder');
        case 'terminal':
            return t('chat.designToolbox.context.terminal');
        case 'side-chat':
            return t('chat.designToolbox.context.sideChat');
        case 'live-artifact':
            return t('chat.designToolbox.context.liveArtifact');
        case 'file':
        default:
            return t('chat.designToolbox.context.file');
    }
}
function designToolboxActionPrompt({ action, skill, workspaceItem, activeDraft, resourceIndex, t }) {
    const skillLine = skill ? t('chat.designToolbox.prompt.selectedSkill', {
        skill: skill.name
    }) : t('chat.designToolbox.prompt.noSkill');
    const resourceLines = designToolboxResourceIndexLines(resourceIndex, t);
    const draftLine = designToolboxDraftLine(activeDraft, t);
    const base = [
        designToolboxContextLine(workspaceItem, t),
        skillLine,
        ...resourceLines,
        draftLine
    ].filter(Boolean);
    switch(action.id){
        case 'auto-match':
            return [
                ...base,
                t('chat.designToolbox.prompt.autoMatchIntro'),
                t('chat.designToolbox.prompt.autoMatchStep1'),
                t('chat.designToolbox.prompt.autoMatchStep2'),
                t('chat.designToolbox.prompt.autoMatchStep3'),
                t('chat.designToolbox.prompt.autoMatchStep4')
            ].join('\n');
        case 'motion':
            return [
                ...base,
                t('chat.designToolbox.prompt.motion')
            ].join('\n');
        case 'motion-polish':
            return [
                ...base,
                t('chat.designToolbox.prompt.motionPolish')
            ].join('\n');
        case 'anti-ai-polish':
            return [
                ...base,
                t('chat.designToolbox.prompt.antiAiPolish')
            ].join('\n');
        case 'visual-polish':
            return [
                ...base,
                t('chat.designToolbox.prompt.visualPolish')
            ].join('\n');
        case 'image-gen':
            return [
                ...base,
                t('chat.designToolbox.prompt.imageGen')
            ].join('\n');
        case 'video-gen':
            return [
                ...base,
                t('chat.designToolbox.prompt.videoGen')
            ].join('\n');
    }
}
function designToolboxSkillPrompt({ skill, workspaceItem, activeDraft, resourceIndex, t }) {
    return [
        designToolboxContextLine(workspaceItem, t),
        t('chat.designToolbox.prompt.useSkill', {
            skill: skill.name
        }),
        ...designToolboxResourceIndexLines(resourceIndex, t),
        designToolboxDraftLine(activeDraft, t),
        t('chat.designToolbox.prompt.skillInstruction')
    ].filter(Boolean).join('\n');
}
function designToolboxResourcePrompt({ resource, workspaceItem, activeDraft, resourceIndex, t }) {
    const base = [
        designToolboxContextLine(workspaceItem, t),
        t('chat.designToolbox.prompt.selectedResource', {
            kind: designToolboxResourceKindLabel(resource.kind, t),
            title: resource.title,
            id: resource.id
        }),
        resource.subtitle ? t('chat.designToolbox.prompt.resourceDescription', {
            description: resource.subtitle
        }) : '',
        ...designToolboxResourceIndexLines(resourceIndex, t),
        designToolboxDraftLine(activeDraft, t)
    ].filter(Boolean);
    switch(resource.kind){
        case 'plugin':
            return [
                ...base,
                t('chat.designToolbox.prompt.pluginResource')
            ].join('\n');
        case 'mcp':
            return [
                ...base,
                t('chat.designToolbox.prompt.mcpResource')
            ].join('\n');
        case 'mcp-template':
            return [
                ...base,
                t('chat.designToolbox.prompt.mcpTemplateResource')
            ].join('\n');
        case 'connector':
            return [
                ...base,
                t('chat.designToolbox.prompt.connectorResource')
            ].join('\n');
        case 'file':
            return [
                ...base,
                t('chat.designToolbox.prompt.fileResource')
            ].join('\n');
    }
}
function designToolboxResourceIndexLines(index, t) {
    const files = index.projectFiles.filter((file)=>file.type !== 'dir').map((file)=>file.path ?? file.name);
    return [
        t('chat.designToolbox.prompt.resourceIndex', {
            skills: index.skills.length,
            plugins: index.plugins.length,
            mcpEnabled: index.mcpServers.length,
            mcpTemplates: index.mcpTemplates.length,
            connectors: index.connectors.length,
            files: files.length
        }),
        designToolboxCompactLine(t('chat.designToolbox.prompt.searchableSkills'), index.skills.map((skill)=>skill.name), 60, t),
        designToolboxCompactLine(t('chat.designToolbox.prompt.searchablePlugins'), index.plugins.map((plugin)=>plugin.title), 40, t),
        designToolboxCompactLine(t('chat.designToolbox.prompt.availableMcp'), [
            ...index.mcpServers.map((server)=>server.label || server.id),
            ...index.mcpTemplates.map((template)=>t('chat.designToolbox.prompt.mcpTemplateName', {
                    name: template.label
                }))
        ], 40, t),
        designToolboxCompactLine(t('chat.designToolbox.prompt.connectedConnectors'), index.connectors.map((connector)=>connector.name), 30, t),
        designToolboxCompactLine(t('chat.designToolbox.prompt.referenceDesignFiles'), files, 40, t),
        t('chat.designToolbox.prompt.processRule')
    ].filter(Boolean);
}
function designToolboxCompactLine(label, values, limit, t) {
    const clean = Array.from(new Set(values.map((value)=>value.trim()).filter(Boolean)));
    if (clean.length === 0) return '';
    const shown = clean.slice(0, limit);
    const suffix = clean.length > shown.length ? t('chat.designToolbox.prompt.moreSuffix', {
        count: clean.length - shown.length
    }) : '';
    return t('chat.designToolbox.prompt.compactLine', {
        label,
        values: shown.join(', '),
        suffix
    });
}
function skillMentionRank(skill, query) {
    const q = query.trim().toLowerCase();
    if (!q) return 1;
    const id = skill.id.toLowerCase();
    const name = skill.name.toLowerCase();
    if (id.startsWith(q) || name.startsWith(q)) return 0;
    return 1;
}
function mcpServerMatchesQuery(server, query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
        server.id,
        server.label ?? '',
        server.transport,
        server.url ?? '',
        server.command ?? ''
    ].join(' ').toLowerCase().includes(q);
}
function mcpTemplateMatchesQuery(tpl, query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
        tpl.id,
        tpl.label,
        tpl.description,
        tpl.transport,
        tpl.category,
        tpl.homepage ?? '',
        tpl.example ?? ''
    ].join(' ').toLowerCase().includes(q);
}
function pluginSourceLabel(plugin, t) {
    return plugin.sourceKind === 'bundled' ? t('chat.mentionPluginOfficial') : t('chat.mentionPluginMine');
}
function ToolsImportPanel({ t, onLinkFolder, currentDesignSystemId, onSwitchDesignSystem }) {
    _s7();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('root');
    if (view === 'designSystems' && onSwitchDesignSystem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemSwitchPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemSwitchPicker"], {
            t: t,
            currentDesignSystemId: currentDesignSystemId,
            onSelect: onSwitchDesignSystem,
            onBack: ()=>setView('root')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
            lineNumber: 4381,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "composer-tools-list",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportItem, {
                icon: "upload",
                label: t('chat.importFig'),
                t: t
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportItem, {
                icon: "grid",
                label: t('chat.importWeb'),
                t: t
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportItem, {
                icon: "folder",
                label: t('chat.importFolder'),
                t: t,
                enabled: true,
                onClick: ()=>void onLinkFolder()
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportItem, {
                icon: "sparkles",
                label: t('chat.importSkills'),
                t: t,
                enabled: !!onSwitchDesignSystem,
                onClick: ()=>setView('designSystems'),
                testId: "composer-import-design-systems"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportItem, {
                icon: "file",
                label: t('chat.importProject'),
                t: t
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4409,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 4391,
        columnNumber: 5
    }, this);
}
_s7(ToolsImportPanel, "0UihFXg/eqjks/vFJJ6T00FSO6M=");
_c9 = ToolsImportPanel;
function ImportItem({ icon, label, t, enabled, onClick, testId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `composer-import-item${enabled ? ' composer-import-item-enabled' : ''}`,
        role: "menuitem",
        tabIndex: -1,
        disabled: !enabled,
        title: enabled ? label : t('chat.importComingSoon'),
        onClick: enabled && onClick ? onClick : (e)=>e.preventDefault(),
        "data-testid": testId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ico",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 4441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "composer-import-item-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4443,
                columnNumber: 7
            }, this),
            !enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "composer-import-item-soon",
                children: t('chat.importSoon')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4444,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 4430,
        columnNumber: 5
    }, this);
}
_c10 = ImportItem;
function SlashPopover({ commands, activeIndex, onPick, onHover, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "slash-popover",
        "data-testid": "slash-popover",
        role: "listbox",
        "aria-label": t('pet.slashPopoverAria'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slash-popover-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('pet.slashPopoverTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 4470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "slash-popover-hint",
                        children: t('pet.slashPopoverHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 4471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4469,
                columnNumber: 7
            }, this),
            commands.map((cmd, idx)=>{
                const active = idx === activeIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: `slash-opt-${idx}`,
                    type: "button",
                    role: "option",
                    "aria-selected": active,
                    className: `slash-item${active ? ' active' : ''}`,
                    onMouseDown: (e)=>{
                        // Prevent the textarea from losing focus before the click
                        // handler fires — otherwise selectionStart resets and the
                        // pick replacement targets the wrong substring.
                        e.preventDefault();
                    },
                    onMouseEnter: ()=>onHover(idx),
                    onClick: ()=>onPick(cmd),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "slash-item-icon",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: cmd.icon,
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4493,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 4492,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "slash-item-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "slash-item-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "slash-item-label",
                                            children: cmd.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4497,
                                            columnNumber: 17
                                        }, this),
                                        cmd.argHint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "slash-item-arg",
                                            children: cmd.argHint
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4499,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "slash-item-desc",
                                    children: t(cmd.descKey)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4502,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                            lineNumber: 4495,
                            columnNumber: 13
                        }, this)
                    ]
                }, cmd.id, true, {
                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                    lineNumber: 4476,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 4463,
        columnNumber: 5
    }, this);
}
_c11 = SlashPopover;
function MentionPopover({ files, workspaceContexts, connectors, plugins, skills, mcpServers, query, tab, onTabChange, activeIndex, currentSkillId, onPickFile, onPickWorkspaceContext, onPickPlugin, onPickSkill, onPickMcp, onPickConnector }) {
    _s8();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabs = [
        {
            id: 'all',
            label: t('chat.mentionTabAll')
        },
        {
            id: 'files',
            label: t('chat.mentionTabFiles')
        },
        {
            id: 'tabs',
            label: t('chat.mentionTabTabs')
        },
        {
            id: 'plugins',
            label: t('chat.mentionTabPlugins')
        },
        {
            id: 'skills',
            label: t('chat.mentionTabSkills')
        },
        {
            id: 'mcp',
            label: t('chat.mentionTabMcp')
        },
        {
            id: 'connectors',
            label: t('chat.mentionTabConnectors')
        }
    ];
    const showTabs = tab === 'all' || tab === 'tabs';
    const showFiles = tab === 'all' || tab === 'files';
    const showPlugins = tab === 'all' || tab === 'plugins';
    const showSkills = tab === 'all' || tab === 'skills';
    const showMcp = tab === 'all' || tab === 'mcp';
    const showConnectors = tab === 'all' || tab === 'connectors';
    const hasVisibleResults = showFiles && files.length > 0 || showTabs && workspaceContexts.length > 0 || showPlugins && plugins.length > 0 || showSkills && skills.length > 0 || showMcp && mcpServers.length > 0 || showConnectors && connectors.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentionPopover.useEffect": ()=>{
            if (ref.current) ref.current.scrollTop = 0;
        }
    }["MentionPopover.useEffect"], [
        connectors,
        files,
        plugins,
        skills,
        mcpServers,
        tab,
        workspaceContexts
    ]);
    let optionIndex = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mention-popover",
        "data-testid": "mention-popover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mention-tabs",
                role: "tablist",
                "aria-label": t('chat.mentionTabsAria'),
                children: tabs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": tab === item.id,
                        className: `mention-tab${tab === item.id ? ' active' : ''}`,
                        onMouseDown: (e)=>e.preventDefault(),
                        onClick: ()=>onTabChange(item.id),
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 4580,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mention-results",
                ref: ref,
                role: "listbox",
                id: "mention-listbox",
                children: [
                    !hasVisibleResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mention-empty",
                        children: query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: t('chat.mentionNoResults', {
                                query
                            })
                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: t('chat.mentionSearchPrompt')
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                        lineNumber: 4595,
                        columnNumber: 11
                    }, this) : null,
                    showFiles && files.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionFiles')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4605,
                                columnNumber: 13
                            }, this),
                            files.map((f)=>{
                                const key = f.path ?? f.name;
                                const flat = optionIndex;
                                optionIndex += 1;
                                const active = flat === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": active,
                                    className: `mention-item${active ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickFile(key),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "file",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4622,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: projectFileMentionTitle(f, key)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4624,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc mention-meta--path",
                                                    children: projectFileMentionDescription(f, key)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4625,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4623,
                                            columnNumber: 19
                                        }, this),
                                        f.size != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: prettySize(f.size)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4630,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, `file-${key}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4612,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null,
                    showTabs && workspaceContexts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionTabs')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4639,
                                columnNumber: 13
                            }, this),
                            workspaceContexts.map((item)=>{
                                const flat = optionIndex;
                                optionIndex += 1;
                                const active = flat === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": active,
                                    className: `mention-item mention-item--workspace${active ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickWorkspaceContext(item),
                                    title: workspaceContextTitle(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: workspaceContextIcon(item),
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4656,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4658,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc",
                                                    children: workspaceContextDescription(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4659,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4657,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: workspaceContextKindLabel(item.kind)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4663,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `workspace-${item.kind}-${item.id}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4645,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null,
                    showPlugins && plugins.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionPlugins')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4671,
                                columnNumber: 13
                            }, this),
                            plugins.map((p)=>{
                                const flat = optionIndex;
                                optionIndex += 1;
                                const active = flat === activeIndex;
                                const pluginTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, p);
                                const pluginDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, p);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": active,
                                    className: `mention-item mention-item--plugin${active ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickPlugin(p),
                                    title: pluginDescription || pluginTitle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4690,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: pluginTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4692,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc",
                                                    children: pluginDescription || p.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4693,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4691,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: pluginSourceLabel(p, t)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4697,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `plugin-${p.id}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4679,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null,
                    showSkills && skills.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionSkills')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4705,
                                columnNumber: 13
                            }, this),
                            skills.map((skill)=>{
                                const flat = optionIndex;
                                optionIndex += 1;
                                const rowActive = flat === activeIndex;
                                const isCurrent = skill.id === currentSkillId;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": rowActive,
                                    className: `mention-item${rowActive ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickSkill(skill),
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillDescription"])(locale, skill),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: isCurrent ? 'check' : 'file',
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4723,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillName"])(locale, skill)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4725,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSkillDescription"])(locale, skill) || skill.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4726,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4724,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: isCurrent ? t('chat.mentionActiveSkill') : skill.mode
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4730,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `skill-${skill.id}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4712,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null,
                    showMcp && mcpServers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionMcp')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4738,
                                columnNumber: 13
                            }, this),
                            mcpServers.map((server)=>{
                                const flat = optionIndex;
                                optionIndex += 1;
                                const active = flat === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": active,
                                    className: `mention-item${active ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickMcp(server),
                                    title: t('chat.mentionUseMcpTitle', {
                                        name: server.label || server.id
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "link",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4755,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: server.label || server.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4757,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc",
                                                    children: server.url || server.command || server.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4758,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4756,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: server.transport
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4762,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `mcp-${server.id}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4744,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null,
                    showConnectors && connectors.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mention-section-label",
                                children: t('chat.mentionSectionConnectors')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                lineNumber: 4770,
                                columnNumber: 13
                            }, this),
                            connectors.map((connector)=>{
                                const flat = optionIndex;
                                optionIndex += 1;
                                const active = flat === activeIndex;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mention-opt-${flat}`,
                                    role: "option",
                                    "aria-selected": active,
                                    className: `mention-item${active ? ' is-active' : ''}`,
                                    type: "button",
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onClick: ()=>onPickConnector(connector),
                                    title: t('chat.mentionUseConnectorTitle', {
                                        name: connector.name
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "link",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4787,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-item-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: connector.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4789,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mention-meta mention-meta--desc",
                                                    children: connector.description || connector.provider || connector.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                                    lineNumber: 4790,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4788,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mention-meta mention-item-kind",
                                            children: connector.accountLabel ?? connector.provider
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                            lineNumber: 4794,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `connector-${connector.id}`, true, {
                                    fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                                    lineNumber: 4776,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
                lineNumber: 4593,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatComposer.tsx",
        lineNumber: 4577,
        columnNumber: 5
    }, this);
}
_s8(MentionPopover, "9P6aDSZwze4uFnH9PgkqUUidba0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c12 = MentionPopover;
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function stripInlineMentionToken(text, label) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$inlineMentions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineMentionToken"])(label);
    return text.replace(new RegExp(`(^|[\\s([{"'])${escapeRegExp(token)}(?=$|\\s|[.,;:!?)}\\]"'])([^\\S\\r\\n])?`, 'g'), '$1');
}
function stripInlineMentionLabels(text, labels) {
    const uniqueLabels = Array.from(new Set(labels.map((label)=>label.trim()).filter(Boolean)));
    return uniqueLabels.reduce((current, label)=>stripInlineMentionToken(current, label), text);
}
function loadComposerDraft(key) {
    if (!key || ("TURBOPACK compile-time value", "object") === 'undefined') return null;
    try {
        return window.localStorage.getItem(key);
    } catch  {
        return null;
    }
}
function saveComposerDraft(key, draft) {
    if (!key || ("TURBOPACK compile-time value", "object") === 'undefined') return;
    try {
        if (draft) {
            window.localStorage.setItem(key, draft);
        } else {
            window.localStorage.removeItem(key);
        }
    } catch  {
    // Storage can be unavailable in privacy modes; the composer should still work.
    }
}
function looksLikeImage(name) {
    return /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(name);
}
function prettySize(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "ChatComposer$forwardRef");
__turbopack_context__.k.register(_c1, "ChatComposer");
__turbopack_context__.k.register(_c2, "StagedRunContexts");
__turbopack_context__.k.register(_c3, "StagedCommentAttachments");
__turbopack_context__.k.register(_c4, "ToolsPluginsPanel");
__turbopack_context__.k.register(_c5, "ToolsMcpPanel");
__turbopack_context__.k.register(_c6, "DesignToolboxPanel");
__turbopack_context__.k.register(_c7, "ToolboxItemRow");
__turbopack_context__.k.register(_c8, "ToolsSkillsPanel");
__turbopack_context__.k.register(_c9, "ToolsImportPanel");
__turbopack_context__.k.register(_c10, "ImportItem");
__turbopack_context__.k.register(_c11, "SlashPopover");
__turbopack_context__.k.register(_c12, "MentionPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_ChatComposer_tsx_01ww~xd._.js.map